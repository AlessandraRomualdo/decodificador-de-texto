const text_area = document.getElementById("texto");
const btn_crip = document.getElementById("btn-criptografar");
const btn_descrip = document.getElementById("btn-descriptografar");
const img = document.getElementById("img-content");
const result = document.getElementById("text-result");
const btn_copiar = document.getElementById("copiar");

// Objeto com as chaves para criptografar e descriptografar
const keys = {
  "e": "enter",
  "i": "imes",
  "a": "ai",
  "o": "ober",
  "u": "ufat",
}

// Função para criptografar o texto
const criptografar = (text) => {
  let text_cript = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      text_cript += " ";
    } else if (keys[text[i]]) {
      text_cript += keys[text[i]];
    } else {
      text_cript += text[i];
    }
  }
  return text_cript;
};

// Função para descriptografar o texto
const descriptografar = (text) => {
  let text_descript = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      text_descript += " ";
    } else if (text[i] === "e" && text[i + 1] === "n" && text[i + 2] === "t" && text[i + 3] === "e" && text[i + 4] === "r") {
      text_descript += "e";
      i += 4;
    } else if (text[i] === "i" && text[i + 1] === "m" && text[i + 2] === "e" && text[i + 3] === "s") {
      text_descript += "i";
      i += 3;
    }
    else if (text[i] === "a" && text[i + 1] === "i") {
      text_descript += "a";
      i += 1;
    }
    else if (text[i] === "o" && text[i + 1] === "b" && text[i + 2] === "e" && text[i + 3] === "r") {
      text_descript += "o";
      i += 3;
    }
    else if (text[i] === "u" && text[i + 1] === "f" && text[i + 2] === "a" && text[i + 3] === "t") {
      text_descript += "u";
      i += 3;
    }
    else {
      text_descript += text[i];
    }

  }
  return text_descript;
};

// Função para copiar o texto
const copiarTexto = () => {
  const text = result.innerHTML;
  navigator.clipboard.writeText(text);
  alert("Texto copiado com sucesso!");
};

btn_crip.addEventListener("click", () => {
  const text = text_area.value;
  const text_cript = criptografar(text);
  result.innerHTML = text_cript;
  img.style.display = "none";
  console.log("clicou");
});

btn_descrip.addEventListener("click", () => {
  const text = text_area.value;
  const text_descript = descriptografar(text);
  result.innerHTML = text_descript;
  img.style.display = "none";
  console.log("clicou");
});

btn_copiar.addEventListener("click", copiarTexto);