import { buscarDados } from "./api.js";
import { mostrarDescricao } from "./ui.js";

const cursoSelecionado = document.querySelector("#curso");

document.addEventListener("DOMContentLoaded", () => {
  cursoSelecionado.addEventListener("change", async () => {
    const dados = await buscarDados();
    console.log(dados);
    mostrarDescricao(dados);
  });
});
