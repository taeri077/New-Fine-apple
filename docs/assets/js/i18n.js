/**
 * Fine-apple i18n Engine (v2.1)
 * Manages EN/KO translations using data-i18n attributes while keeping technical terms intact.
 * Default language: English ("en").
 */

(function () {
  const translations = {
    en: {
      // Header & Navigation
      "nav_models": "Models",
      "nav_training": "Training",
      "nav_datasets": "Datasets",
      "nav_deploy": "Deploy",
      "nav_logs": "Logs",
      "nav_terminal": "Terminal",
      "new_experiment": "New Experiment",

      // Training Page (index.html)
      "title_data_manager": "Data Manager",
      "drop_md_files": "Drop .md files here",
      "click_to_browse": "or click to browse",
      "col_file": "File",
      "col_tokens": "Tokens",
      "title_training_config": "Training Config",
      "btn_start_finetuning": "START FINE-TUNING",
      "title_monitor": "Monitor",
      "label_training_loss": "Training Loss",
      "label_vram_usage": "VRAM Usage",

      // Models Page (models.html)
      "title_model_repository": "Model Repository",
      "desc_model_repository": "Manage local and remote base models for fine-tuning.",
      "col_model_name": "Model Name",
      "col_size": "Size",
      "col_status": "Status",
      "col_actions": "Actions",
      "btn_use_model": "Use Model",
      "btn_download": "Download",
      "status_local": "Local",
      "status_remote": "Remote",

      // Datasets Page (knowledge.html)
      "title_manage_datasets": "Manage Datasets",
      "desc_upload_dataset": "Drag and drop .jsonl or .csv files here, or click to browse.",
      "btn_upload_dataset": "Upload New Dataset",
      "btn_filter": "Filter",
      "label_paste_chat": "Paste Raw Chat / Instructions",
      "btn_convert_alpaca": "Convert to Alpaca Format",
      "btn_save_dataset": "Save to Knowledge Base",

      // Deploy Page (export.html)
      "title_deploy_export": "Deploy & Export",
      "desc_deploy_export": "Quantize and export fine-tuned models for local execution.",
      "label_quantization": "Quantization Options",
      "desc_q4km": "Q4_K_M (4-bit) - Recommended for lower VRAM usage & fast inference.",
      "desc_q80": "Q8_0 (8-bit) - High quality, close to 16-bit precision.",
      "btn_export_gguf": "Export to GGUF",
      "title_export_status": "Export Status",

      // Common
      "lang_btn": "EN"
    },
    ko: {
      // Header & Navigation
      "nav_models": "모델 저장소",
      "nav_training": "학습 스튜디오",
      "nav_datasets": "데이터셋 관리",
      "nav_deploy": "내보내기 스튜디오",
      "nav_logs": "실행 로그",
      "nav_terminal": "터미널 콘솔",
      "new_experiment": "새 학습 실험",

      // Training Page (index.html)
      "title_data_manager": "데이터 관리자",
      "drop_md_files": ".md 파일을 여기에 드롭하세요",
      "click_to_browse": "또는 클릭하여 파일 선택",
      "col_file": "파일명",
      "col_tokens": "토큰 수",
      "title_training_config": "학습 설정",
      "btn_start_finetuning": "파인튜닝 시작하기",
      "title_monitor": "실시간 모니터",
      "label_training_loss": "학습 손실률",
      "label_vram_usage": "VRAM 메모리 사용량",

      // Models Page (models.html)
      "title_model_repository": "모델 라이브러리",
      "desc_model_repository": "파인튜닝용 로컬 및 원격 기반 모델을 통합 관리합니다.",
      "col_model_name": "모델명",
      "col_size": "용량",
      "col_status": "상태",
      "col_actions": "작업",
      "btn_use_model": "모델 선택",
      "btn_download": "다운로드",
      "status_local": "로컬 보유",
      "status_remote": "원격 서빙",

      // Datasets Page (knowledge.html)
      "title_manage_datasets": "데이터셋 조향 스튜디오",
      "desc_upload_dataset": ".jsonl 또는 .csv 학습 데이터셋 파일을 여기에 드래그하거나 선택하세요.",
      "btn_upload_dataset": "새 데이터셋 업로드",
      "btn_filter": "품질 필터링",
      "label_paste_chat": "원문 대화 / 지침 입력",
      "btn_convert_alpaca": "Alpaca 포맷 자동 변환",
      "btn_save_dataset": "내 자료 추가하기 (Add to Knowledge Base)",

      // Deploy Page (export.html)
      "title_deploy_export": "양자화 내보내기 스튜디오",
      "desc_deploy_export": "파인튜닝된 모델을 양자화하여 내 AI로 저장합니다.",
      "label_quantization": "양자화 옵션 선택",
      "desc_q4km": "Q4_K_M (용량 절약형) - 적은 VRAM 메모리 및 고속 추론에 최적화",
      "desc_q80": "Q8_0 (고품질형) - 16-bit 정밀도에 근접한 고품질 모델 생성",
      "btn_export_gguf": "내 AI 저장하기 (Export to GGUF)",
      "title_export_status": "내보내기 진행 상태",

      // Common
      "lang_btn": "KO"
    }
  };

  // Default language is "en"
  let currentLang = localStorage.getItem("fine_apple_lang") || "en";

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("fine_apple_lang", lang);
    document.documentElement.lang = lang;

    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          if (el.placeholder) el.placeholder = translations[lang][key];
        } else {
          el.innerText = translations[lang][key];
        }
      }
    });

    const langBtns = document.querySelectorAll(".lang-toggle-btn");
    langBtns.forEach((btn) => {
      btn.innerText = translations[lang]["lang_btn"] || (lang === "ko" ? "KO" : "EN");
    });

    // Notify iframe if present
    const iframe = document.getElementById("content");
    if (iframe && iframe.contentWindow && iframe.contentWindow.FineAppleI18n) {
      try {
        iframe.contentWindow.FineAppleI18n.applyLanguage(lang);
      } catch (err) {
        // Cross-origin fallback safety
      }
    }
  }

  function toggleLanguage() {
    const nextLang = currentLang === "ko" ? "en" : "ko";
    applyLanguage(nextLang);
  }

  window.addEventListener("DOMContentLoaded", () => {
    applyLanguage(currentLang);

    document.addEventListener("click", (e) => {
      if (e.target && (e.target.classList.contains("lang-toggle-btn") || e.target.closest(".lang-toggle-btn"))) {
        toggleLanguage();
      }
    });

    const iframe = document.getElementById("content");
    if (iframe) {
      iframe.addEventListener("load", () => {
        if (iframe.contentWindow && iframe.contentWindow.FineAppleI18n) {
          try {
            iframe.contentWindow.FineAppleI18n.applyLanguage(currentLang);
          } catch (err) {}
        }
      });
    }
  });

  window.FineAppleI18n = {
    applyLanguage,
    toggleLanguage,
    getCurrentLang: () => currentLang
  };
})();
