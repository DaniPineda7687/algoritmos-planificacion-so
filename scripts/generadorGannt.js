function generarDiagramaGanttFCFS(procesos,contenedor){
    console.log(procesos.length);
    let table = document.createElement("table");
    let encabezadoTabla = document.createElement("thead");
    let bodyTabla = document.createElement("tbody");
    let trEncabezado = document.createElement("tr");
    let thProcesos = document.createElement("th");
    thProcesos.textContent="Procesos";
    trEncabezado.appendChild(thProcesos);
    let tiempoTotal = 0;
    let numeroProcesos=procesos.length;
    let duracionProcesos = [];
    let tiemposLlegada = [];
    duracionProcesos.push(0);
    procesos.forEach(element => {
        tiempoTotal+=element.tiempoCPU;
        duracionProcesos.push(element.tiempoCPU);
        tiemposLlegada.push(element.tiempoLlegada);
    });
    for(let i=0;i<tiempoTotal;i++){
        let tiempo = document.createElement("th");
        tiempo.textContent=i;
        trEncabezado.appendChild(tiempo);
    }
    for(let i=0;i<numeroProcesos;i++){
        let thProcesosT = document.createElement("tr");
        thProcesosT.textContent=procesos[i].idProceso;
        thProcesosT.classList.add(`tr-proceso-${i+1}`);
        bodyTabla.appendChild(thProcesosT);
    }
    encabezadoTabla.appendChild(trEncabezado);
    table.appendChild(encabezadoTabla);
    table.appendChild(bodyTabla);
    contenedor.appendChild(table);
//clase de los th nombre-fila-columna
    for(let i=0;i<numeroProcesos;i++){
        let filaProceso = document.querySelector(`.tr-proceso-${i+1}`);
        for(let j=0;j<tiempoTotal;j++){
            let thRelleno = document.createElement("th");
            thRelleno.classList.add(`th-${i}-${j}`);
            filaProceso.appendChild(thRelleno);
        }
    }
    let temp = duracionProcesos[0];
    for(let i=0;i<numeroProcesos;i++){
        let ultima = tiempoTotal-1;
        let proceso = document.querySelector(`.th-${i}-${temp}`);
        proceso.setAttribute("colspan",duracionProcesos[i+1]);
        proceso.textContent=`Tiempo CPU ${procesos[i].tiempoCPU}ms`
        proceso.classList.add("proceso")
        temp+=duracionProcesos[i+1];
        for(let j=0;j<duracionProcesos[i+1]-1;j++){
            let filaProceso = document.querySelector(`.tr-proceso-${i+1}`);
            let eliminar = document.querySelector(`.th-${i}-${ultima}`);
            filaProceso.removeChild(eliminar);
            ultima--;
        }
    }

    for(let i=0;i<procesos.length;i++){
        if(procesos[i].tiempoLlegada!=0){
            let llegadaProceso = document.querySelector(`.th-${i}-${tiemposLlegada[i]}`);
            llegadaProceso.classList.add("proceso-llegada");
        }
    }
}

function generarDiagramaGanttSJF(procesos,contenedor){
    console.log(procesos.length);
    let table = document.createElement("table");
    let encabezadoTabla = document.createElement("thead");
    let bodyTabla = document.createElement("tbody");
    let trEncabezado = document.createElement("tr");
    let thProcesos = document.createElement("th");
    thProcesos.textContent="Procesos";
    trEncabezado.appendChild(thProcesos);
    let tiempoTotal = 0;
    let numeroProcesos=procesos.length;
    let duracionProcesos = [];
    let tiemposLlegada = [];
    duracionProcesos.push(0);
    procesos.forEach(element => {
        tiempoTotal+=element.tiempoCPU;
        duracionProcesos.push(element.tiempoCPU);
        tiemposLlegada.push(element.tiempoLlegada);
    });
    for(let i=0;i<tiempoTotal;i++){
        let tiempo = document.createElement("th");
        tiempo.textContent=i;
        trEncabezado.appendChild(tiempo);
    }
    for(let i=0;i<numeroProcesos;i++){
        let thProcesosT = document.createElement("tr");
        thProcesosT.textContent=procesos[i].idProceso;
        thProcesosT.classList.add(`tr-SJF-proceso-${i+1}`);
        bodyTabla.appendChild(thProcesosT);
    }
    encabezadoTabla.appendChild(trEncabezado);
    table.appendChild(encabezadoTabla);
    table.appendChild(bodyTabla);
    contenedor.appendChild(table);
//clase de los th nombre-fila-columna
    for(let i=0;i<numeroProcesos;i++){
        let filaProceso = document.querySelector(`.tr-SJF-proceso-${i+1}`);
        for(let j=0;j<tiempoTotal;j++){
            let thRelleno = document.createElement("th");
            thRelleno.classList.add(`th-SJF-${i}-${j}`);
            filaProceso.appendChild(thRelleno);
        }
    }
    let temp = duracionProcesos[0];
    for(let i=0;i<numeroProcesos;i++){
        let ultima = tiempoTotal-1;
        let proceso = document.querySelector(`.th-SJF-${i}-${temp}`);
        proceso.setAttribute("colspan",duracionProcesos[i+1]);
        proceso.textContent=`Tiempo CPU ${procesos[i].tiempoCPU}ms`
        proceso.classList.add("proceso")
        temp+=duracionProcesos[i+1];
        for(let j=0;j<duracionProcesos[i+1]-1;j++){
            let filaProceso = document.querySelector(`.tr-SJF-proceso-${i+1}`);
            let eliminar = document.querySelector(`.th-SJF-${i}-${ultima}`);
            filaProceso.removeChild(eliminar);
            ultima--;
        }
    }

    for(let i=0;i<procesos.length;i++){
        if(procesos[i].tiempoLlegada!=0){
            let llegadaProceso = document.querySelector(`.th-SJF-${i}-${tiemposLlegada[i]}`);
            llegadaProceso.classList.add("proceso-llegada");
        }
    }
}