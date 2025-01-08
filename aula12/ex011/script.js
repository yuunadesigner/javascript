function carregar() {
var msg = window.document.getElementById('msg')
var foto = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12) {
    //bom dia!!
    foto.src = 'fotomanha.png'
    document.body.style.background = '#ffd047'
} else if (hora >= 12 && hora <= 18) {
    //boa tarde!!
    foto.src = 'fototarde.png'
    document.body.style.background = '#ff8600'
} else {
    //boa noite!!
    foto.src = 'fotonoite.png'
    document.body.style.background = '#007fba'
}
}

