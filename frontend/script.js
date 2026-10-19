const inputText = document.getElementById("inputText");
const sourceLang = document.getElementById("sourceLang");
const targetLang = document.getElementById("targetLang");
const translateBtn = document.getElementById("translateBtn");
const outputText = document.getElementById("outputText");
const swapBtn = document.getElementById("swapBtn");
const micBtn = document.getElementById("micBtn");
const sourceFlag = document.getElementById("sourceFlag");
const targetFlag = document.getElementById("targetFlag");

const languages = {
  English: "en-US",
  Spanish: "es-ES",
  French: "fr-FR",
  German: "de-DE",
  Italian: "it-IT",
  Portuguese: "pt-PT",
  Japanese: "ja-JP",
  Korean: "ko-KR",
  Chinese: "zh-CN",
  Arabic: "ar-SA",
  Hindi: "hi-IN",
  Russian: "ru-RU",
  Dutch: "nl-NL",
  Turkish: "tr-TR",
  Polish: "pl-PL",
  Telugu: "te-IN",
  Tamil: "ta-IN"
};

/* Populate dropdowns */
Object.keys(languages).forEach(lang => {
  sourceLang.add(new Option(lang, lang));
  targetLang.add(new Option(lang, lang));
});

function updateFlags() {
  sourceFlag.textContent = languages[sourceLang.value];
  targetFlag.textContent = languages[targetLang.value];
}

sourceLang.addEventListener("change", updateFlags);
targetLang.addEventListener("change", updateFlags);
updateFlags();

/* Swap */
swapBtn.addEventListener("click", () => {
  const temp = sourceLang.value;
  sourceLang.value = targetLang.value;
  targetLang.value = temp;
  updateFlags();
});

/* Translate */
translateBtn.addEventListener("click", async () => {
  const text = inputText.value.trim();
  if (!text) return alert("Enter text first!");

  outputText.innerHTML = "Translating...";

  try {
    const response = await fetch("http://localhost:5000/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        sourceLang: sourceLang.value,
        targetLang: targetLang.value
      })
    });

    const data = await response.json();
    outputText.innerHTML = data.translated || "Error occurred";
  } catch {
    outputText.innerHTML = "Server not responding";
  }
});

/* Speech Recognition */
micBtn.addEventListener("click", () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech recognition not supported in this browser");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = function(event) {
    inputText.value = event.results[0][0].transcript;
  };
});

