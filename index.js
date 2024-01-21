import { buscarDados } from './api.js';
import { mostrarDescricao } from './ui.js';

document.addEventListener("DOMContentLoaded", () => {
    
    
    cursoSelecionado.addEventListener('change', async () => {
        const dados = await buscarDados()
        console.log(dados);
        mostrarDescricao(dados);


    })



})