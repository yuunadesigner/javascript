function contar() {
    let inicio = parseInt(document.getElementById('ini').value)
    let fim = parseInt(document.getElementById('fim').value)
    let passo = parseInt(document.getElementById('pas').value)

    if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo <=0) {
        alert('Por favor, insira valores válidos!')
        return
    }

    let resultado = ''

    if (inicio < fim) {
        for (let i = inicio; i <= fim; i += passo) {
            resultado += i + '👉'
        }
    } else if (inicio > fim) {
        for (let i = inicio; i >= fim; i -= passo) {
            resultado += i + '👉';
        }
    } else {
        resultado = 'Início e fim são iguais.'
    }
    resultado = resultado.slice(0, -2) + '🏁'
    document.getElementById('resultado').textContent = resultado
}