const selecElementOption = document.getElementById("select")
const result = document.getElementById("result")
function showCep({ cep, bairro, logradouro, complemento, cidade, uf }) {
  document.getElementById("textCep").innerText = `CEP: ${cep}`
  document.getElementById("logradouro").innerText = `logradouro: ${logradouro}`
  document.getElementById(
    "complemento"
  ).innerText = `complemento: ${complemento}`
  document.getElementById("bairro").innerText = `bairro: ${bairro}`
  document.getElementById("cidade").innerText = `cidade: ${cidade}`
  document.getElementById("UF").innerText = `UF: ${uf}`
  console.log(cep)
}
function callApiAjax(cep) {
  // criar o objeto de requisição
  if (cep.length === 8) {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const xhttp = new XMLHttpRequest()
    xhttp.open("GET", url, true)
    xhttp.onload = () => {
      if (xhttp.status === 200) {
        const response = JSON.parse(xhttp.responseText)

        console.log(response)
        showCep(response)
        result.classList.remove("hidden")
        result.classList.add("flex")
      } else {
        console.error("Erro ao buscar CEP:", xhttp.statusText)
      }
    }
    xhttp.send()
  } else {
    alert("CEP inválido. Por favor, digite um CEP com 8 dígitos.")
  }
}

selecElementOption.addEventListener("change", () => {
  let typeApiSelect = selecElementOption.value

  const cepInput = document.getElementById("cep").value
  const clearCep = cepInput.trim()

  switch (typeApiSelect) {
    case "ajax":
      callApiAjax(clearCep)
      break

    default:
      break
  }
})
