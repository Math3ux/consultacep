var botao = document.querySelector('div#app button')
var entrada = document.querySelector('div#app input')
var h = document.createElement('p')
var main = document.querySelector('div#app main')
var i = 0


botao.addEventListener('click', function (event) {
    event.preventDefault()
    var zipCode = entrada.value
    var formatado = zipCode.split(' ')
    //formatado = zipCode.split('-')
    //formatado.trim
    formatado.join()
    axios.get('https://viacep.com.br/ws/' + formatado.join("") + '/json/')
        .then(function (response) {
            if (i == 0) {
                var l = document.createTextNode(`Localidade: ${response.data.localidade}`)
                h.appendChild(l)
                var bk = document.createElement("br")
                h.appendChild(bk)
                var lg = document.createTextNode(`Logradouro: ${response.data.logradouro}`)
                h.appendChild(lg)
                main.appendChild(h)
                i++
                console.log(response)
            } else {
                console.log("dê reload")
            }
        }).catch(function (error) {
            if (i == 0) {
                var erro = document.createTextNode(`Ocorreu um erro, verifique se o CEP está certo!`)
                h.appendChild(erro)
                main.appendChild(h)
                console.log(error)
                i++
            } else {
                console.log("Dê reload")
            }
        })
})


