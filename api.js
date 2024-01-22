const avisoAPI = document.querySelector("#aviso-api");

export async function buscarDados() {
  avisoAPI.textContent =
  "Buscando informações no banco de dados. Por favor, aguarde...";
  let response = await fetch(
    "https://api-gerenciador-dce.herokuapp.com/curso",
    { mode: "cors" }
  );
  let data = await response.json();
  avisoAPI.textContent = '';
  return data;
}
