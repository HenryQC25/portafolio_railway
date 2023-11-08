progreso("progress","porcentaje","valorDiv")
progreso("progress2","porcentaje2","valorDiv2")
progreso("progress3","porcentaje3","valorDiv3")
progreso("progress4","porcentaje4","valorDiv4")
progreso("progress5","porcentaje5","valorDiv5")
progreso("progress6","porcentaje6","valorDiv6")
progreso("progress7","porcentaje7","valorDiv7")
progreso("progress8","porcentaje8","valorDiv8")
progreso("progress9","porcentaje9","valorDiv8")
progreso("progress10","porcentaje10","valorDiv10")
progreso("progress11","porcentaje11","valorDiv11")

function progreso(progress,porcentaje, valorDiv){
let progresscircle = document.getElementById(progress);
      let percentage = document.getElementById(porcentaje);
      let valorEstatico= parseInt(document.getElementById(valorDiv).textContent);
        console.log(valorEstatico);
      let cantidad = 0;
      let cantidad2 = 630;
     
        let tiempo = setInterval(() => {
        cantidad += 1;
        let valores = Math.ceil((cantidad2 -= 3.15));//aca calcula el giro de color
        percentage.textContent = cantidad + "%";
        progresscircle.style.strokeDashoffset = `${valores}`;
        if (cantidad >= valorEstatico) {
          clearInterval(tiempo);
        }
      }, 20);
}