function generarProcesosAleatorios(){
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
    
    let procesos = [];
    let numeroProcesos = parseInt(generarAleatorios(numeroMinimoPro,numeroMaximoPro));
    for(let i=0;i<numeroProcesos;i++){
        procesos.push({
            idProceso:`Proceso ${i+1}`,
            tiempoCPU : parseInt(generarAleatorios(tiempoMinimoCPU,tiempoMaximoCPU).toFixed(2)),
            tiempoLlegada : parseInt(generarAleatorios(tiempoMinimoLlegada,tiempoMaximoLlegada).toFixed(2)),
            prioridad : parseInt(generarAleatorios(prioridadMinima,prioridadMaxima)),
            quantum:parseInt(generarAleatorios(quantumMinimo,quantumMaximo)),
            tiempoEspera:0,
            tiempoRetorno:0,
            tiempoFinalizacion:0
        });
    }
    procesos[0].tiempoLlegada=0;
    return procesos;
}

function generarAleatorios(min, max) {
    return Math.random() * (max - min) + min;
}

function mostrarInformacionGenerada(){
    let procesos= generarProcesosAleatorios();
    let mainContainer = document.createElement("div");
    let mainContainerProcesos = document.createElement("div");
    let titleContainer = document.createElement("h2");
    let detalles = document.createElement("p");
    let quantum = document.createElement("p");
    detalles.textContent=`Número de procesos generados: ${procesos.length}`;
    quantum.textContent=`Quantum: ${procesos[0].quantum}`;
    mainContainerProcesos.classList.add("main-container-procesos");
    mainContainer.classList.add("informacion-container");
    titleContainer.textContent="Información generada"
    mainContainer.appendChild(titleContainer);
    mainContainer.appendChild(detalles);
    mainContainer.appendChild(quantum);
    for(let i=0;i<procesos.length;i++){
        let contenedorProceso = document.createElement("div");
        contenedorProceso.classList.add("proceso-contenedor");
        let numeroProceso = document.createElement("h3");
        let tiempoCPU = document.createElement("p");
        let tiempoLlegada = document.createElement("p");
        let prioridad = document.createElement("p");

        numeroProceso.textContent=`Proceso ${i+1}`;
        tiempoCPU.textContent=`Tiempo de CPU: ${procesos[i].tiempoCPU}ms`
        tiempoLlegada.textContent=`Tiempo de llegada: ${procesos[i].tiempoLlegada}ms`
        prioridad.textContent=`Prioridad: ${procesos[i].prioridad}`


        contenedorProceso.appendChild(numeroProceso);
        contenedorProceso.appendChild(tiempoCPU);
        contenedorProceso.appendChild(tiempoLlegada);
        contenedorProceso.appendChild(prioridad);
        mainContainerProcesos.appendChild(contenedorProceso);
    }

    mainContainer.appendChild(mainContainerProcesos);
    containerInfoUser.appendChild(mainContainer);
    let infoGenerada = [procesos,procesos[0].quantum];
    return infoGenerada;
}

