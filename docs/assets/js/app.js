/**
 * Fine-apple App Logic Engine (v2.1)
 * Manages LocalStorage, Fine-Tuning Simulation, Model Repository, Alpaca Converter, and GGUF Export.
 */

(function () {
  // Storage Keys
  const KEY_MODELS = "fine_apple_models";
  const KEY_DATASETS = "fine_apple_datasets";
  const KEY_ACTIVE_MODEL = "fine_apple_active_model";

  // Default Presets
  const DEFAULT_MODELS = [
    { id: "llama3-8b", name: "Llama-3-8B-Instruct", size: "4.7 GB", provider: "Meta", status: "Local", isDefault: true },
    { id: "mistral-7b", name: "Mistral-7B-v0.3", size: "4.1 GB", provider: "Mistral AI", status: "Remote", isDefault: true },
    { id: "gemma-2b", name: "Gemma-2B-IT", size: "1.7 GB", provider: "Google", status: "Local", isDefault: true }
  ];

  const DEFAULT_DATASETS = [
    { name: "dataset_01.md", tokens: "1.2M", date: "2026-08-12" },
    { name: "custom_docs.md", tokens: "450K", date: "2026-08-12" },
    { name: "instruction_pairs.md", tokens: "890K", date: "2026-08-12" }
  ];

  function getModels() {
    const data = localStorage.getItem(KEY_MODELS);
    return data ? JSON.parse(data) : DEFAULT_MODELS;
  }

  function saveModels(models) {
    localStorage.setItem(KEY_MODELS, JSON.stringify(models));
  }

  function getDatasets() {
    const data = localStorage.getItem(KEY_DATASETS);
    return data ? JSON.parse(data) : DEFAULT_DATASETS;
  }

  function saveDatasets(datasets) {
    localStorage.setItem(KEY_DATASETS, JSON.stringify(datasets));
  }

  // --- Training Studio Logic (index.html / index_mobile.html) ---
  function initTrainingStudio() {
    const startBtn = document.querySelector("#start-finetuning-btn") || document.querySelector("button:has(.material-symbols-outlined)");
    const terminalEl = document.querySelector(".recessed-well.bg-inverse-surface, .recessed-well.dark\\:bg-black");
    const vramBar = document.querySelector(".candy-stripe-progress");
    const sliders = document.querySelectorAll(".aqua-slider, input[type='range']");

    // Slider display binding
    sliders.forEach((slider) => {
      const parent = slider.parentElement;
      const displaySpan = parent ? parent.querySelector("span:last-child") : null;
      if (displaySpan) {
        slider.addEventListener("input", () => {
          displaySpan.innerText = slider.value;
        });
      }
    });

    // Start Fine-Tuning Simulation
    const fineTuneBtns = Array.from(document.querySelectorAll("button")).filter(b => b.innerText.includes("START FINE-TUNING") || b.innerText.includes("파인튜닝 시작하기"));
    fineTuneBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        btn.disabled = true;
        btn.classList.add("opacity-50");

        let step = 0;
        const logs = [
          "> Initializing Fine-apple Local Engine v2.1...",
          "> Connecting to LM Studio fallback (localhost:1234)...",
          "> Allocating VRAM buffers (18.4GB / 24GB)... [OK]",
          "> Loading dataset: custom_docs.md (450K tokens)...",
          "> Epoch 1/3 - Loss: 2.140",
          "> Epoch 2/3 - Loss: 1.250",
          "> Epoch 3/3 - Loss: 0.421",
          "> Fine-Tuning Completed! Saving weights: Llama-3-FineApple-v1.gguf",
          "> Model registered to Local Repository! [SUCCESS]"
        ];

        const logContainer = document.querySelector("#terminal-output") || terminalEl;
        if (logContainer) {
          logContainer.innerHTML = "<div class='text-tertiary-fixed opacity-90'></div>";
          const innerDiv = logContainer.querySelector("div");
          const timer = setInterval(() => {
            if (step < logs.length) {
              innerDiv.innerHTML += logs[step] + "<br>";
              logContainer.scrollTop = logContainer.scrollHeight;
              step++;
            } else {
              clearInterval(timer);
              btn.disabled = false;
              btn.classList.remove("opacity-50");

              // Save new model to LocalStorage
              const models = getModels();
              models.unshift({
                id: "fineapple-v1-" + Date.now(),
                name: "Llama-3-FineApple-v1",
                size: "4.8 GB",
                provider: "Local Trainer",
                status: "Local",
                isDefault: false
              });
              saveModels(models);
            }
          }, 800);
        }
      });
    });
  }

  // --- Model Repository Logic (models.html / models_mobile.html) ---
  function initModelRepository() {
    const tableBody = document.querySelector("#model-table-body") || document.querySelector(".divide-y");
    if (!tableBody) return;

    function renderTable() {
      const models = getModels();
      const activeModel = localStorage.getItem(KEY_ACTIVE_MODEL) || "Llama-3-8B-Instruct";

      // Keep static markup if dynamic elements aren't strictly containerized, but enhance action buttons
      const useBtns = document.querySelectorAll(".jelly-btn, .jelly-button");
      useBtns.forEach((btn) => {
        if (btn.innerText.includes("Use Model") || btn.innerText.includes("모델 선택")) {
          btn.addEventListener("click", (e) => {
            const row = e.target.closest("div.px-md") || e.target.closest("tr");
            const titleEl = row ? row.querySelector(".font-headline-md") : null;
            if (titleEl) {
              const modelName = titleEl.innerText.trim();
              localStorage.setItem(KEY_ACTIVE_MODEL, modelName);
              alert(`[Fine-apple] ${modelName} 모델이 활성화되었습니다!`);
            }
          });
        }
      });
    }

    renderTable();
  }

  // --- Datasets Logic (knowledge.html / knowledge_mobile.html) ---
  function initDatasetsManager() {
    const convertBtn = Array.from(document.querySelectorAll("button")).find(b => b.innerText.includes("Convert") || b.innerText.includes("Alpaca") || b.innerText.includes("변환"));
    const textarea = document.querySelector("textarea");

    if (convertBtn && textarea) {
      convertBtn.addEventListener("click", () => {
        const rawText = textarea.value.trim() || "User: 파인튜닝을 어떻게 시작해야 하나요?\nAssistant: Fine-apple 스튜디오를 사용해 로컬 모델을 학습시키시면 됩니다.";
        const lines = rawText.split("\n");
        let instruction = "Conversational Instruction";
        let output = rawText;

        const alpacaData = {
          instruction: instruction,
          input: "",
          output: output
        };

        textarea.value = JSON.stringify(alpacaData, null, 2);
        alert("[Fine-apple] Alpaca Instruct 포맷 변환 완료!");
      });
    }
  }

  // Initialize all Modules on DOM Loaded
  window.addEventListener("DOMContentLoaded", () => {
    initTrainingStudio();
    initModelRepository();
    initDatasetsManager();
  });
})();
