const selecElementOption = document.getElementById("select")
const result = document.getElementById("result")

function showCep({ cep, bairro, logradouro, complemento, localidade, uf }) {
  document.getElementById("textCep").innerText = `CEP: ${cep}`
  document.getElementById("logradouro").innerText = `logradouro: ${logradouro}`
  document.getElementById(
    "complemento"
  ).innerText = `complemento: ${complemento}`
  document.getElementById("bairro").innerText = `bairro: ${bairro}`
  document.getElementById("cidade").innerText = `cidade: ${localidade}`
  document.getElementById("UF").innerText = `UF: ${uf}`
}
function callApiAjax(cep) {
  if (cep.length === 8) {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    // criar o objeto de requisição
    const xhttp = new XMLHttpRequest()
    const startTime = performance.now()
    xhttp.open("GET", url, true)
    xhttp.onload = () => {
      if (xhttp.status === 200) {
        const endTime = performance.now()
        const responseTime = endTime - startTime
        document.getElementById(
          "responseTime"
        ).innerText = `Tempo de resposta: ${responseTime.toPrecision(
          3
        )} milissegundos`
        const response = JSON.parse(xhttp.responseText)

        showCep(response)
        result.classList.remove("hidden")
        result.classList.add("flex")
        result.setAttribute("id", "ajax")
      } else {
        console.error("Erro ao buscar CEP:", xhttp.statusText)
      }
    }
    xhttp.send()
  } else {
    alert("CEP inválido. Por favor, digite um CEP com 8 dígitos.")
    selecElementOption.selectedIndex = 0
  }
}

function callApiFetch(cep) {
  if (cep.length === 8) {
    const startTime = performance.now()
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert("CEP não encontrado!")
        } else {
          const endTime = performance.now()
          const responseTime = endTime - startTime
          document.getElementById(
            "responseTime"
          ).innerText = `Tempo de resposta: ${responseTime.toPrecision(
            3
          )} milissegundos`
          showCep(data)
          result.classList.remove("hidden")
          result.classList.add("flex")
          result.setAttribute("id", "fetchApi")
        }
      })
      .catch((error) => {
        alert("Erro na requisição")
      })
  } else {
    alert("CEP inválido. Por favor, digite um CEP com 8 dígitos.")
    selecElementOption.selectedIndex = 0
  }
}
async function callApiAsyncAndAwait(_cep) {
  const startTime = performance.now()
  if (_cep.length === 8) {
    try {
      const api = await fetch(`https://viacep.com.br/ws/${_cep}/json/`)
      const cep = await api.json()
      const endTime = performance.now()
      const responseTime = endTime - startTime
      document.getElementById(
        "responseTime"
      ).innerText = `Tempo de resposta: ${responseTime.toPrecision(
        3
      )} milissegundos`
      showCep(cep)
      result.classList.remove("hidden")
      result.classList.add("flex")
      result.setAttribute("id", "async")
      showCep(cep)
    } catch (error) {
      alert("Erro ao buscar CEP: " + error)
    }
  } else {
    alert("CEP inválido. Por favor, digite um CEP com 8 dígitos.")
    selecElementOption.selectedIndex = 0
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
    case "fethcApi":
      callApiFetch(clearCep)
      break
    case "async":
      callApiAsyncAndAwait(clearCep)
    default:
      break
  }
})
