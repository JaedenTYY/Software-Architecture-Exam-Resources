#!/usr/bin/env node
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const REPO_BASE = "/Software-Architecture-Exam-Resources";
const portArg = process.argv.find(arg => /^\d+$/.test(arg));
const port = Number(process.env.PORT || portArg || 3000);
const host = process.env.HOST || "127.0.0.1";

const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".wasm": "application/wasm",
  ".onnx": "application/octet-stream",
  ".bin": "application/octet-stream",
  ".map": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8"
};

function resolveRequestPath(url) {
  const parsed = new URL(url, `http://${host}:${port}`);
  let pathname = decodeURIComponent(parsed.pathname);
  if (pathname === REPO_BASE) pathname = `${REPO_BASE}/`;
  if (pathname.startsWith(`${REPO_BASE}/`)) pathname = pathname.slice(REPO_BASE.length);
  if (pathname === "/") pathname = "/index.html";
  return pathname;
}

function send(res, status, body, headers = {}) {
  res.writeHead(status, headers);
  res.end(body);
}

const server = http.createServer((req, res) => {
  if (!["GET", "HEAD"].includes(req.method || "")) {
    send(res, 405, "Method not allowed\n", { "content-type": "text/plain; charset=utf-8" });
    return;
  }

  let pathname;
  try {
    pathname = resolveRequestPath(req.url || "/");
  } catch {
    send(res, 400, "Bad request\n", { "content-type": "text/plain; charset=utf-8" });
    return;
  }

  const filePath = path.resolve(ROOT, `.${pathname}`);
  if (!filePath.startsWith(`${ROOT}${path.sep}`) && filePath !== ROOT) {
    send(res, 403, "Forbidden\n", { "content-type": "text/plain; charset=utf-8" });
    return;
  }

  fs.stat(filePath, (statError, stat) => {
    if (statError || !stat.isFile()) {
      send(res, 404, "Not found\n", { "content-type": "text/plain; charset=utf-8" });
      return;
    }
    const headers = {
      "content-type": mime[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "content-length": stat.size,
      "cache-control": "no-cache"
    };
    if (req.method === "HEAD") {
      send(res, 200, "", headers);
      return;
    }
    res.writeHead(200, headers);
    fs.createReadStream(filePath).pipe(res);
  });
});

server.on("error", error => {
  console.error(`Unable to start static server on ${host}:${port}: ${error.message}`);
  process.exitCode = 1;
});

server.listen(port, host, () => {
  console.log(`CSC3209 static server running at http://${host}:${port}/`);
  console.log(`GitHub Pages subpath test: http://${host}:${port}${REPO_BASE}/`);
  console.log("Press Ctrl+C to stop.");
});
