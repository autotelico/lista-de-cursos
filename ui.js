export function mostrarDescricao(dados) {
  const cursoSelecionado = document.querySelector("#curso");
  const descricao = document.querySelector("#descricao");
  const gradeCurricular = document.querySelector("#grade-curricular");
  const linkGradeCurricular = document.querySelector("#link-grade-curricular");

  if (cursoSelecionado.value === "Selecione") {
    descricao.textContent = "";
    gradeCurricular.textContent = "";
    linkGradeCurricular.href = "#";
  }

  for (const obj in dados) {
    if (dados[obj].sigla === cursoSelecionado.value.toUpperCase()) {
      descricao.textContent = dados[obj].descricao;
      gradeCurricular.textContent = dados[obj].linkGrade;
      linkGradeCurricular.href = dados[obj].linkGrade;
    }
  }
}
