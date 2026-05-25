let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.fillRect(0,0,70,70);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.fillRect(330,0,70,70);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.fillRect(360,310,40,90);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.fillRect(310,360,50,40);
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.fillRect(0,310,40,90);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.fillRect(0,360,90,40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'RGB(0, 255, 255)';
ctx.fillRect(0,150,40,80);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'RGB(0, 255, 255)';
ctx.fillRect(360,170,40,40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'RGB(0, 255, 255)';
ctx.strokeStyle = 'blue';
ctx.arc(200,145,20,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'RGB(0, 255, 255)';
ctx.strokeStyle = 'green';
ctx.arc(200,400,60,1*Math.PI,0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(110,280,20,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(280,280,20,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// Texto "Canvas"
ctx.font = '24px sans-serif';
ctx.fillStyle = 'black';
ctx.fillText('Canvas', 148, 38);

// Quadrado vermelho central
ctx.fillStyle = 'red';
ctx.fillRect(140, 190, 60, 60);

// Arcos verdes concêntricos
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.lineWidth = 2;
ctx.arc(200, 190, 110, 1*Math.PI, 1.24*Math.PI);  // arco externo
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.lineWidth = 2;
ctx.arc(200, 190, 110, 1.760*Math.PI, 0);  // arco externo
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.lineWidth = 2;
ctx.arc(200, 400, 80, 1.5*Math.PI, 0);  // arco externo
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.lineWidth = 2;
ctx.arc(200, 400, 100, 1*Math.PI, 1.5*Math.PI);  // arco externo
ctx.stroke();


ctx.beginPath();
ctx.arc(200, 190, 80, Math.PI, 0, );   // arco interno
ctx.stroke();

// Linha horizontal verde
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(0, 190);
ctx.lineTo(400, 190);
ctx.stroke();

// Linha diagonal azul (canto sup. esq. → centro)
ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(0, 0);
ctx.lineTo(200, 190);
ctx.stroke();

// Linha diagonal vermelha (canto sup. dir. → centro)
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(400, 0);
ctx.lineTo(200, 190);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.moveTo(200, 190);  // começa no centro
ctx.lineTo(200, 340);  // vai até a base
ctx.stroke();