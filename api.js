const descricao = document.querySelector("#descricao");

export async function buscarDados() {
  let response = await fetch(
    "https://api-gerenciador-dce.herokuapp.com/curso",
    { mode: "cors" }
  );
  let data = await response.json();
  return data;
}
