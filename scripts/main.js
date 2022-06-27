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
            if(!(tiempoMinimoLlegada>=tiempoMaximoLlegada)){
                bandera=bandera&&true;;
                if(!(prioridadMinima>=prioridadMaxima)){
                    bandera=bandera&&true;;
                    if(!(quantumMinimo>=quantumMaximo)){
                        bandera=bandera&&true;;
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