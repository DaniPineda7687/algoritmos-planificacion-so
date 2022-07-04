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
        }else{
            containerInfoUser.appendChild(crearFormNumeroProcesos());
            datosAleatorios.disabled=true;
            datosManuales.disabled=true;
            buttonTipoDatos.disabled=true;
        }
    }
    
})

function crearSeccionResultados(infoFCFS,infoSJF,infoPrioridad,infoRoundRobin){
    let mainContainerResultados = document.createElement("div");
    let contenedorResultados = document.createElement("div");
    let contenedorGrafica = document.createElement("div");
    let resultadosGrafica = document.createElement("div");
    let resultadosFCFS = document.createElement("div");
    let title = document.createElement("h2");
    let titleFCFS = document.createElement("h2");
    let tiempoPromedioEsperaFCFS = document.createElement("p");
    let tiempoRetornoFCFS = document.createElement("p");
    let tiempoFinalizacionFCFS = document.createElement("p");
    let resultadosSJF = document.createElement("div");
    let titleSJF = document.createElement("h2");
    let tiempoPromedioEsperaSJF = document.createElement("p");
    let tiempoRetornoSJF = document.createElement("p");
    let tiempoFinalizacionSJF = document.createElement("p");
    let resultadosPrioridad = document.createElement("div");
    let titlePrioridad = document.createElement("h2");
    let tiempoPromedioEsperaPrioridad = document.createElement("p");
    let tiempoRetornoPrioridad = document.createElement("p");
    let tiempoFinalizacionPrioridad = document.createElement("p");
    let resultadosRound = document.createElement("div");
    let titleRound = document.createElement("h2");
    let tiempoPromedioEsperaRound = document.createElement("p");
    let tiempoRetornoRound = document.createElement("p");
    
    let encabezadoGrafica = document.createElement("div");
    let titleGrafica = document.createElement("h2");
    let containerLabelTEspera = document.createElement("div");
    let containerLabelTRetorno = document.createElement("div");
    let containerLabelTFinalizacion = document.createElement("div");
    let colorTiempoEspera = document.createElement("div");
    let colorTiempoRetorno = document.createElement("div");
    let colorTiempoFinalizacion = document.createElement("div");

    let labelTEspera = document.createElement("p");
    let labelTRetorno = document.createElement("p");
    let labelTFinalizacion = document.createElement("p");
    
    labelTEspera.textContent="Tiempo promedio de espera";
    labelTRetorno.textContent="Tiempo promedio de retorno";
    labelTFinalizacion.textContent="Tiempo promedio de respuesta";
    colorTiempoEspera.classList.add("color-tiempo-espera");
    colorTiempoRetorno.classList.add("color-tiempo-retorno");
    colorTiempoFinalizacion.classList.add("color-tiempo-finalizacion");
    containerLabelTEspera.classList.add("etiquetas-grafica");
    containerLabelTRetorno.classList.add("etiquetas-grafica");
    containerLabelTFinalizacion.classList.add("etiquetas-grafica");
    containerLabelTEspera.appendChild(colorTiempoEspera);
    containerLabelTEspera.appendChild(labelTEspera);
    containerLabelTRetorno.appendChild(colorTiempoRetorno);
    containerLabelTRetorno.appendChild(labelTRetorno);
    containerLabelTFinalizacion.appendChild(colorTiempoFinalizacion);
    containerLabelTFinalizacion.appendChild(labelTFinalizacion);

    encabezadoGrafica.classList.add("encabezado-grafica");
    titleGrafica.textContent="Gráfica comparativa entre los 4 algoritmos"
    encabezadoGrafica.appendChild(titleGrafica);
    encabezadoGrafica.appendChild(containerLabelTEspera);
    encabezadoGrafica.appendChild(containerLabelTRetorno);
    encabezadoGrafica.appendChild(containerLabelTFinalizacion);
    resultadosGrafica.classList.add("contenedor-grafica-resultados");
    contenedorGrafica.classList.add("grafica-container");
    resultadosGrafica.appendChild(encabezadoGrafica);
    contenedorGrafica.classList.add("ct-chart");
    contenedorGrafica.classList.add("ct-perfect-fourth");

    contenedorResultados.classList.add("main-container-procesos");
    resultadosFCFS.classList.add("proceso-contenedor");
    title.textContent="Resultados"
    titleFCFS.textContent="Algoritmo FCFS";
    resultadosFCFS.appendChild(titleFCFS);

    tiempoPromedioEsperaFCFS.textContent=`Tiempo promedio de espera: ${infoFCFS[0].toFixed(2)}ms`
    tiempoRetornoFCFS.textContent=`Tiempo promedio de retorno: ${infoFCFS[1].toFixed(2)}ms`
    tiempoFinalizacionFCFS.textContent=`Tiempo promedio de respuesta: ${infoFCFS[2].toFixed(2)}ms`
    resultadosFCFS.appendChild(tiempoPromedioEsperaFCFS);
    resultadosFCFS.appendChild(tiempoRetornoFCFS);
    resultadosFCFS.appendChild(tiempoFinalizacionFCFS);

    resultadosSJF.classList.add("proceso-contenedor");
    titleSJF.textContent="Algoritmo SJF";
    resultadosSJF.appendChild(titleSJF);
    tiempoPromedioEsperaSJF.textContent=`Tiempo promedio de espera: ${infoSJF[0].toFixed(2)}ms`
    tiempoRetornoSJF.textContent=`Tiempo promedio de retorno: ${infoSJF[1].toFixed(2)}ms`
    tiempoFinalizacionSJF.textContent=`Tiempo promedio de respuesta: ${infoSJF[2].toFixed(2)}ms`
    resultadosSJF.appendChild(tiempoPromedioEsperaSJF);
    resultadosSJF.appendChild(tiempoRetornoSJF);
    resultadosSJF.appendChild(tiempoFinalizacionSJF);
    resultadosPrioridad.classList.add("proceso-contenedor");
    titlePrioridad.textContent="Algoritmo Prioridad";
    resultadosPrioridad.appendChild(titlePrioridad);
    tiempoPromedioEsperaPrioridad.textContent=`Tiempo promedio de espera: ${infoPrioridad[0].toFixed(2)}ms`
    tiempoRetornoPrioridad.textContent=`Tiempo promedio de retorno: ${infoPrioridad[1].toFixed(2)}ms`
    tiempoFinalizacionPrioridad.textContent=`Tiempo promedio de respuesta: ${infoPrioridad[2].toFixed(2)}ms`
    resultadosPrioridad.appendChild(tiempoPromedioEsperaPrioridad);
    resultadosPrioridad.appendChild(tiempoRetornoPrioridad);
    resultadosPrioridad.appendChild(tiempoFinalizacionPrioridad);

    resultadosRound.classList.add("proceso-contenedor");
    tiempoPromedioEsperaRound.textContent=`Tiempo promedio de espera: ${infoRoundRobin[0].toFixed(2)}ms`
    titleRound.textContent="Algoritmo Round Robin";
    resultadosRound.appendChild(titleRound);
    tiempoRetornoRound.textContent=`Tiempo promedio de retorno: ${infoRoundRobin[1].toFixed(2)}ms`
    resultadosRound.appendChild(tiempoPromedioEsperaRound);
    resultadosRound.appendChild(tiempoRetornoRound);

    contenedorResultados.appendChild(resultadosFCFS);
    contenedorResultados.appendChild(resultadosSJF);
    contenedorResultados.appendChild(resultadosPrioridad);
    contenedorResultados.appendChild(resultadosRound);
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

function crearLabelsAleatorio(labelText,inputMinPlaceholder,inputMaxPlaceholder,min,max,nombreClaseMin,nombreClaseMax,disabled,valorDefault){
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
    inputMin.value=valorDefault;
    inputMin.disabled= disabled;
    inputMax.classList.add("input-user-info");
    inputMax.classList.add(nombreClaseMax);
    inputsContainer.classList.add("input-container");

    inputsContainer.appendChild(inputMin);
    inputsContainer.appendChild(inputMax);
    label.appendChild(inputsContainer);
    return label;
}


function crearLabels(labelText,inputPlaceholder,min,max,nombreClase){
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
}

function validarInputsAleatoriosUser(){
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
                    minPrioridad.placeholder=`Ingrese valores menores a ${prioridadMaxima}`;
                    minPrioridad.focus();
                    bandera=false;
                }
            }else{
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

function crearGraficaResultados(procesos,q){
    console.log(procesos);
    console.log(startFCFS(procesos)[0]);
    var data = {
        labels: ['FCFS', 'SJF', 'PRIORIDAD', 'ROUND ROBIN'],
        series: [
          [startFCFS(procesos)[0],startSJF(procesos)[0],startPrioridad(procesos)[0],startRoundRobin(procesos,q)[0]],
          [startFCFS(procesos)[1],startSJF(procesos)[1],startPrioridad(procesos)[1],startRoundRobin(procesos,q)[1]],
          [startFCFS(procesos)[2],startSJF(procesos)[2],startPrioridad(procesos)[2],0]
        ]
      };
      
      var options = {
        seriesBarDistance: 10
      };
      
      var responsiveOptions = [
        ['screen and (max-width: 100%)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      
      new Chartist.Bar('.ct-chart', data, options, responsiveOptions);
}

function crearFormNumeroProcesos(){
    let container = document.createElement("div");
    let title = document.createElement("h2");
    let inputNumeroProcesos = document.createElement("input");
    let buttonAceptar = document.createElement("input");
    title.textContent="Número de procesos de la simulación";
    inputNumeroProcesos.placeholder="Digite el número de procesos de la simulación";
    inputNumeroProcesos.type="number";
    buttonAceptar.value="Aceptar";
    buttonAceptar.type="button";

    buttonAceptar.addEventListener("click",()=>{
        let numeroProcesos = document.querySelector(".manual-numero-procesos");
        if(validarInputsManuales()){
            containerInfoUser.appendChild(crearFormManual(parseInt(numeroProcesos.value)));
            inputNumeroProcesos.disabled=true;
            buttonAceptar.disabled=true;
        }
    })

    inputNumeroProcesos.classList.add("informacion-manual-user");
    inputNumeroProcesos.classList.add("manual-numero-procesos");
    container.classList.add("container-user-manual");
    container.appendChild(title);
    container.appendChild(inputNumeroProcesos);
    container.appendChild(buttonAceptar);
    return container;
}

function crearFormManual(numeroProcesos){
    let container = document.createElement("div");
    let title = document.createElement("h2");
    title.textContent="Condiciones para los procesos";
    container.appendChild(title);
    for (let i=0;i<numeroProcesos;i++){
        let subtitle = document.createElement("p");
        subtitle.textContent=`Proceso ${i+1}`;
        
        let inputTiempoCPU = document.createElement("input");
        inputTiempoCPU.type="number";
        inputTiempoCPU.placeholder=`Tiempo CPU para el proceso ${i+1}`;
        inputTiempoCPU.classList.add(`tiempo-cpu-${i+1}`);
        inputTiempoCPU.classList.add(`tiempos-cpu`);
        inputTiempoCPU.classList.add(`informacion-manual-user`);

        let inputTiempoLlegada = document.createElement("input");
        inputTiempoLlegada.type="number";
        inputTiempoLlegada.placeholder=`Tiempo llegada para el proceso ${i+1}`;
        inputTiempoLlegada.classList.add(`tiempo-llegada-${i+1}`);
        inputTiempoLlegada.classList.add(`tiempos-llegada`);

        let inputPrioridad = document.createElement("input");
        inputPrioridad.type="number";
        inputPrioridad.placeholder=`Prioridad para el proceso ${i+1}`;
        inputPrioridad.classList.add(`prioridad-${i+1}`);
        inputPrioridad.classList.add(`prioridad`);
        inputPrioridad.classList.add(`informacion-manual-user`);

        container.appendChild(subtitle);
        container.appendChild(inputTiempoCPU);
        container.appendChild(inputTiempoLlegada);
        container.appendChild(inputPrioridad);
    }
    let inputQuantum = document.createElement("input");
    
    inputQuantum.type="number";
    inputQuantum.placeholder=`Quantum de la simulación`;
    inputQuantum.classList.add(`quantum`);
    inputQuantum.classList.add(`informacion-manual-user`);
    let subtitle = document.createElement("p");
    subtitle.textContent="Quantum";
    container.appendChild(subtitle);
    container.appendChild(inputQuantum);
    let buttonAceptar = document.createElement("input");
    buttonAceptar.value="Aceptar";
    buttonAceptar.type="button";
    container.appendChild(buttonAceptar);
    buttonAceptar.addEventListener("click",()=>{
    let procesosManual =[];
        for(let i=0;i<numeroProcesos;i++){
            let inputTiempoCPU = document.querySelector(`.tiempo-cpu-${i+1}`);
            let inputTiempoLlegada = document.querySelector(`.tiempo-llegada-${i+1}`);
            let inputPrioridad = document.querySelector(`.prioridad-${i+1}`);
            let inputQuantum = document.querySelector(`.quantum`);
            let tiempoCPU = parseInt(inputTiempoCPU.value);
            let tiempoLlegada = parseInt(inputTiempoLlegada.value);
            let prioridad = parseInt(inputPrioridad.value);
            let quantum = parseInt(inputQuantum.value);
            procesosManual.push({
                idProceso:`Proceso ${i+1}`,
                tiempoCPU : tiempoCPU,
                tiempoLlegada : tiempoLlegada,
                prioridad : prioridad,
                quantum:quantum,
                tiempoEspera:0,
                tiempoRetorno:0,
                tiempoFinalizacion:0
            });
        }
        if(validarInputsManuales()&&validarInputsManualesTLlegada()){
            startAll(procesosManual,procesosManual[0].quantum);
            crearGraficaResultados(procesosManual,procesosManual[0].quantum);
            buttonAceptar.disabled=true;
            let inputs = document.querySelectorAll(".informacion-manual-user");
            let inputsPrioridad = document.querySelectorAll(".tiempos-llegada");
            inputs.forEach(element => {
                element.disabled=true;
            });
            inputsPrioridad.forEach(element => {
                element.disabled=true;
            });
        }
    });
    container.classList.add("container-user-manual");
    return container;
}

function validarInputsManuales(){
    let inputs = document.querySelectorAll(".informacion-manual-user");
    let bandera=true;
    inputs.forEach(element => {
        if(element.value<=0  || element.value.length==0){
            alert("Ingrese valores validos para la simulacion");
            element.value="";
            element.setAttribute("id","input-error");
            element.focus();
            element.placeholder="Digite valores validos para la simulacion (>0)";
            bandera=false;

        }else{
            element.removeAttribute("id");
            bandera=bandera&&true;

        }
    });
    console.log(inputs);
    return bandera;
}

function validarInputsManualesTLlegada(){
    let inputs = document.querySelectorAll(".tiempos-llegada");
    let bandera=true;
    inputs.forEach(element => {
        if(element.value<0  || element.value.length==0){
            alert("Ingrese valores validos para la simulacion");
            element.value="";
            element.setAttribute("id","input-error");
            element.focus();
            element.placeholder="Digite valores validos para la simulacion (>0)";
            bandera=false;

        }else{
            element.removeAttribute("id");
            bandera=bandera&&true;

        }
    });
    console.log(inputs);
    return bandera;
}