# Local Semantic Model Assets

This directory vendors the assets required for browser-only CSC3209 semantic retrieval.

- Model: `all-MiniLM-L6-v2`
- Upstream model family: `sentence-transformers/all-MiniLM-L6-v2`
- Runtime: `@huggingface/transformers` with ONNX Runtime WebAssembly
- Representation: mean-pooled, normalized 384-dimensional sentence embeddings
- Quantized runtime model: q8 ONNX (`all-MiniLM-L6-v2/onnx/model_quantized.onnx`)

The upstream Hugging Face model card for `sentence-transformers/all-MiniLM-L6-v2` lists the model license as Apache-2.0. ONNX Runtime Web is MIT licensed. These assets are committed so exam queries can be embedded locally without calling Hugging Face, OpenAI, or any external model API at runtime.

Sources:

- https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2
- https://github.com/microsoft/onnxruntime/tree/main/js/web
