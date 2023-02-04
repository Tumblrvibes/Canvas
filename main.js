canvas=document.getElementById("pizarron");
contexto=canvas.getContext("2d");
//Con esta parte del codigo dibujamos un arco en la coordenada 200, 200
//color="orange";

//contexto.beginPath();
//contexto.strokeStyle=color;
//contexto.lineWidth=3;
//contexto.arc(200,200,40,0,2*Math.PI);
//contexto.stroke();

canvas.addEventListener("mousedown",my_mouse);

function my_mouse(e){
    color=document.getElementById("color").value;
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;

    console.log("x= "+mouse_x+"Y= "+mouse_y)
    circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y){
    contexto.beginPath();
contexto.strokeStyle=color;
contexto.lineWidth=3;
contexto.arc(mouse_x,mouse_y,40,0,2*Math.PI);
contexto.stroke();


}

function borrar(){
    contexto.clearRect(0,0,canvas.width,canvas.height)
}
