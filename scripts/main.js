let containerInfoUser = document.querySelector(".informacion-usuario");
let buttonTipoDatos = document.querySelector(".button-enviar-tipo-datos");
let datosAleatorios = document.getElementById("datos-aleatorios");
let datosManuales = document.getElementById("datos-manuales");
let labelAleatorios = document.querySelector(".label-aleatorios")
let labelManuales = document.querySelector(".label-manuales")

datosAleatorios.addEventListener("change",()=>{
    if(document.querySelector(".informacion-manual")!=null){
        labelManuales.removeChild(document.querySelector(".informacion-manual"));
        let detalles = document.createElement("p");
        detalles.className="informacion-tipo-dato informacion-aleatorio";
        detalles.textContent="Los datos serán generados automáticamente por el computador";
        labelAleatorios.appendChild(detalles);
    }else{
        let detalles = document.createElement("p");
        detalles.className="informacion-tipo-dato informacion-aleatorio";
        detalles.textContent="Los datos serán generados automáticamente por el computador";
        labelAleatorios.appendChild(detalles);
    }
});
datosManuales.addEventListener("change",()=>{
    if(document.querySelector(".informacion-aleatorio")!=null){
        labelAleatorios.removeChild(document.querySelector(".informacion-aleatorio"));
        let detalles = document.createElement("p");
        detalles.className="informacion-tipo-dato informacion-manual";
        detalles.textContent="Los datos serán ingresados por el usuario";
        labelManuales.appendChild(detalles);
    }else{
        let detalles = document.createElement("p");
        detalles.className="informacion-tipo-dato informacion-manual";
        detalles.textContent="Los datos serán ingresados por el usuario";
        labelManuales.appendChild(detalles);
    }
})
buttonTipoDatos.addEventListener("click",()=>{
    if(datosAleatorios.checked==false&&datosManuales.checked==false){
        alert("Debe seleccionar un tipo de simulacion para continuar");
    }else{
        if(datosAleatorios.checked==true){
            containerInfoUser.appendChild(crearFormCondiciones());
            datosAleatorios.disabled=true;
            datosManuales.disabled=true;
            buttonTipoDatos.disabled=true;
        }
    }
    
})

function crearSeccionResultados(infoFCFS,infoSJF,infoPrioridad){
    let mainContainerResultados = document.createElement("div");
    let contenedorResultados = document.createElement("div");
    let contenedorGrafica = document.createElement("div");
    let resultadosGrafica = document.createElement("div");
    resultadosGrafica.classList.add("contenedor-grafica-resultados");
    contenedorGrafica.classList.add("grafica-container");
    contenedorResultados.classList.add("main-container-procesos");
    let resultadosFCFS = document.createElement("div");
    resultadosFCFS.classList.add("proceso-contenedor");
    let title = document.createElement("h2");
    title.textContent="Resultados"
    let titleFCFS = document.createElement("h2");
    titleFCFS.textContent="Algoritmo FCFS";
    resultadosFCFS.appendChild(titleFCFS);

    let tiempoPromedioEsperaFCFS = document.createElement("p");
    let tiempoRetornoFCFS = document.createElement("p");
    tiempoPromedioEsperaFCFS.textContent=`Tiempo promedio de espera: ${infoFCFS[0].toFixed(2)}ms`
    tiempoRetornoFCFS.textContent=`Tiempo promedio de retorno: ${infoFCFS[1].toFixed(2)}ms`
    resultadosFCFS.appendChild(tiempoPromedioEsperaFCFS);
    resultadosFCFS.appendChild(tiempoRetornoFCFS);

    let resultadosSJF = document.createElement("div");
    resultadosSJF.classList.add("proceso-contenedor");
    let titleSJF = document.createElement("h2");
    titleSJF.textContent="Algoritmo SJF";
    resultadosSJF.appendChild(titleSJF);
    let tiempoPromedioEsperaSJF = document.createElement("p");
    let tiempoRetornoSJF = document.createElement("p");
    tiempoPromedioEsperaSJF.textContent=`Tiempo promedio de espera: ${infoSJF[0].toFixed(2)}ms`
    tiempoRetornoSJF.textContent=`Tiempo promedio de retorno: ${infoSJF[1].toFixed(2)}ms`
    resultadosSJF.appendChild(tiempoPromedioEsperaSJF);
    resultadosSJF.appendChild(tiempoRetornoSJF);

    let resultadosPrioridad = document.createElement("div");
    resultadosPrioridad.classList.add("proceso-contenedor");
    let titlePrioridad = document.createElement("h2");
    titlePrioridad.textContent="Algoritmo Prioridad";
    resultadosPrioridad.appendChild(titlePrioridad);
    let tiempoPromedioEsperaPrioridad = document.createElement("p");
    let tiempoRetornoPrioridad = document.createElement("p");
    tiempoPromedioEsperaPrioridad.textContent=`Tiempo promedio de espera: ${infoPrioridad[0].toFixed(2)}ms`
    tiempoRetornoPrioridad.textContent=`Tiempo promedio de retorno: ${infoPrioridad[1].toFixed(2)}ms`
    resultadosPrioridad.appendChild(tiempoPromedioEsperaPrioridad);
    resultadosPrioridad.appendChild(tiempoRetornoPrioridad);

    contenedorResultados.appendChild(resultadosFCFS);
    contenedorResultados.appendChild(resultadosSJF);
    contenedorResultados.appendChild(resultadosPrioridad);

    
    mainContainerResultados.classList.add("container-resultados");
    resultadosGrafica.appendChild(contenedorGrafica);
    resultadosGrafica.appendChild(contenedorResultados);
    mainContainerResultados.appendChild(title);
    mainContainerResultados.appendChild(resultadosGrafica);
    return mainContainerResultados;
}


function refresh(){
    location.reload();
}

function crearLabelsAleatorio(labelText,inputMinPlaceholder,inputMaxPlaceholder,min,max,nombreClaseMin,nombreClaseMax){
    let label = document.createElement("label");
    let inputsContainer = document.createElement("div");
    let inputMin = document.createElement("input");
    let inputMax = document.createElement("input");
    label.textContent=labelText;
    inputMin.type="number";
    inputMin.placeholder=inputMinPlaceholder;
    inputMin.min=min;
    inputMin.max=max;
    inputMin.classList.add("input-user-info");
    inputMin.classList.add(nombreClaseMin);
    inputMax.type="number";
    inputMax.placeholder=inputMaxPlaceholder;
    inputMax.min=min;
    inputMax.max=max;
    inputMax.classList.add("input-user-info");
    inputMax.classList.add(nombreClaseMax);
    inputsContainer.classList.add("input-container");

    inputsContainer.appendChild(inputMin);
    inputsContainer.appendChild(inputMax);
    label.appendChild(inputsContainer);
    return label;
}


/*function crearLabels(labelText,inputPlaceholder,min,max,nombreClase){
    let label = document.createElement("label");
    let input = document.createElement("input");
    label.textContent=labelText;
    input.type="number";
    input.placeholder=inputPlaceholder;
    input.min=min;
    input.max=max;
    input.classList.add("input-user-info");
    input.classList.add(nombreClase);
    label.appendChild(input);
    return label;
}*/

function validarInputsUser(){
    let numeroMaximoPro= parseFloat(document.querySelector(".numero-maximo-procesos").value);
    let numeroMinimoPro= parseFloat(document.querySelector(".numero-minimo-procesos").value);
    let tiempoMinimoCPU= parseFloat(document.querySelector(".tiempo-minimo-CPU").value);
    let tiempoMaximoCPU= parseFloat(document.querySelector(".tiempo-maximo-CPU").value);
    let tiempoMinimoLlegada= parseFloat(document.querySelector(".tiempo-minimo-llegada").value);
    let tiempoMaximoLlegada= parseFloat(document.querySelector(".tiempo-maximo-llegada").value);
    let prioridadMinima= parseFloat(document.querySelector(".prioridad-minima").value);
    let prioridadMaxima= parseFloat(document.querySelector(".prioridad-maxima").value);
    let quantumMinimo= parseFloat(document.querySelector(".quantum-minimo").value);
    let quantumMaximo= parseFloat(document.querySelector(".quantum-maximo").value);
    let inputsUser = document.querySelectorAll(".input-user-info");
    let bandera = true;
    inputsUser.forEach(element => {
        let min = parseFloat(element.min);
        let max = parseFloat(element.max);
        let value = parseFloat(element.value);
        if(!(value>=min&&value<=max)){
            alert("Ingrese valores válidos para realizar la simulación");
            element.value="";
            element.focus();
            element.setAttribute("id","input-error");
            element.placeholder=`Ingrese valores entre ${min} y ${max}`;
            bandera=false;
        }else{
            element.removeAttribute("id");
            bandera=bandera&&true;
        }
    });

    if(!(numeroMinimoPro>=numeroMaximoPro)){
        bandera=bandera&&true;
        if(!(tiempoMinimoCPU>=tiempoMaximoCPU)){
            bandera=bandera&&true;;
            if(!((tiempoMinimoLlegada>=tiempoMaximoLlegada))){
                bandera=bandera&&true;;
                if(!(prioridadMinima>=prioridadMaxima)){
                    bandera=bandera&&true;;
                    if(!(quantumMinimo>=quantumMaximo)){
                        bandera=bandera&&true;
                        if(!(tiempoMaximoLlegada>tiempoMinimoCPU)){
                            bandera=bandera&&true;
                        }else{
                            alert("El tiempo máximo de llegada no puede ser mayor al tiempo mínimo de CPU");
                            let maxLlegada = document.querySelector(".tiempo-maximo-llegada");
                            maxLlegada.value="";
                            maxLlegada.setAttribute("id","input-error");
                            maxLlegada.placeholder=`Ingrese valores menores a ${tiempoMinimoCPU}`;
                            maxLlegada.focus();
                            bandera=false;
                        }
                    }else{
                        alert("El quantum mínimo no puede ser mayor o igual al quantum máximo");
                        let minQuantum = document.querySelector(".quantum-minimo");
                        minQuantum.value="";
                        minQuantum.setAttribute("id","input-error");
                        minQuantum.placeholder=`Ingrese valores menores a ${quantumMaximo}`;
                        minQuantum.focus();
                        bandera=false;
                    }
                }else{
                    alert("La prioridad mínima no puede ser mayor o igual a la prioridad máxima");
                    let minPrioridad = document.querySelector(".prioridad-minima");
                    minPrioridad.value="";
                    minPrioridad.setAttribute("id","input-error");
                    minPrioridad.placeholder=`Ingrese valores menores a ${numeroMaximoPro}`;
                    minPrioridad.focus();
                    bandera=false;
                }
            }else{
                alert("El tiempo mínimo de llegada no puede ser mayor o igual al tiempo máximo de llegada");
                let minLlegada = document.querySelector(".tiempo-minimo-llegada");
                minLlegada.value="";
                minLlegada.setAttribute("id","input-error");
                minLlegada.placeholder=`Ingrese valores menores a ${tiempoMaximoLlegada}`;
                minLlegada.focus();
                bandera=false;
            }
        }else{
            alert("El tiempo mínimo de CPU no puede ser mayor o igual al tiempo máximo de CPU");
            let minCPU = document.querySelector(".tiempo-minimo-CPU");
            minCPU.value="";
            minCPU.setAttribute("id","input-error");
            minCPU.placeholder=`Ingrese valores menores a ${tiempoMaximoCPU}`;
            minCPU.focus();
            bandera=false;
        }
    }else{
        alert("El número de procesos mínimo no puede ser mayor o igual al número de procesos máximo");
        let minPro = document.querySelector(".numero-minimo-procesos");
        minPro.value="";
        minPro.setAttribute("id","input-error");
        minPro.placeholder=`Ingrese valores menores a ${numeroMaximoPro}`;
        minPro.focus();
        bandera=false;
    }

    return bandera;
}