let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

var retangulo = {
    x: 20,
    y: 50,
    largura: 50,
    altura: 50,
    img: new Image(),
    desenha: function () {
        this.img.src = '15633105-icone-do-carro-e-desenho-do-carro-vetor.jpg';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x-(this.largura)/2, this.y-(this.largura)/2, this.largura, this.altura);
        ctx.closePath();
    }
}

function animacao() {
    ctx.clearRect(0, 0, 300, 300)
    retangulo.desenha();
    requestAnimationFrame(animacao)
}
animacao();
document.addEventListener('mousemove', function (evento) {
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse, y_mouse);




    if (x_mouse>25 && x_mouse<281 && y_mouse>25 && y_mouse<281) {
        retangulo.x = x_mouse;
        retangulo.y = y_mouse;
    }
    else {
        retangulo.x = retangulo.x
        retangulo.y = retangulo.y
    }


})
