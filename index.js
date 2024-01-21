import { buscarDados } from "./api.js";
import { mostrarDescricao } from "./ui.js";

const cursoSelecionado = document.querySelector("#curso");

document.addEventListener("DOMContentLoaded", async () => {
  const dados = await buscarDados();

  cursoSelecionado.addEventListener("change", () => {
    console.log(dados);
    mostrarDescricao(dados);
  });
});
