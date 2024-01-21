import { buscarDados } from './api.js';
import { mostrarDescricao } from './ui.js';

document.addEventListener("DOMContentLoaded", () => {
    const cursoSelecionado = document.querySelector("#curso")
    const descricao = document.querySelector("#descricao")
    const gradeCurricular = document.querySelector('#grade-curricular')
    
    
    cursoSelecionado.addEventListener('change', async () => {
        const dados = await buscarDados()
        console.log(dados);
        console.log(cursoSelecionado.value);
        for(const obj in dados) {
            if (dados[obj].sigla === cursoSelecionado.value.toUpperCase()) {
                descricao.textContent = dados[obj].descricao;
                gradeCurricular.textContent = dados[obj].linkGrade;
            }
        }


    })



})