function startFCFS(procesosOriginal){
    let procesos = procesosOriginal.slice();
    let datosCompletos = procesosOriginal.slice();

    procesos.sort((a,b)=>{
        return a.tiempoLlegada - b.tiempoLlegada;
    });
    datosCompletos.sort((a,b)=>{
        return a.tiempoLlegada-b.tiempoLlegada;
    });
    let tiemposFinalizacion = [];
    let tiemposCPU = [];
    let tiemposLlegada = [];
    let tiemposEspera = [];
    let tiemposRetorno = [];

    procesos.forEach(element => {
        tiemposCPU.push(element.tiempoCPU);
        tiemposLlegada.push(element.tiempoLlegada);
    });

    tiemposFinalizacion[0]=tiemposLlegada[0]+tiemposCPU[0];
    tiemposRetorno[0]=tiemposFinalizacion[0]-tiemposLlegada[0];
    tiemposEspera[0]=tiemposRetorno[0]-tiemposCPU[0];

    for(let i = 1;i<procesos.length;i++){
        tiemposFinalizacion[i]=tiemposCPU[i]+tiemposFinalizacion[i-1]
        tiemposRetorno[i]=tiemposFinalizacion[i]-tiemposLlegada[i];
        tiemposEspera[i]=tiemposRetorno[i]-tiemposCPU[i];
    }
    let sumaTiemposEspera=0;
    let sumaTiemposRetorno =0;
    let sumaTiemposFinalizacion=0;

    for(let i=0;i<procesos.length;i++){
        sumaTiemposEspera+=tiemposEspera[i];
        sumaTiemposRetorno+=tiemposRetorno[i];
        sumaTiemposFinalizacion+=tiemposFinalizacion[i];
    }
    
    for(let i=0;i<procesos.length;i++){
        datosCompletos[i].tiempoEspera=tiemposEspera[i];
        datosCompletos[i].tiempoRetorno = tiemposRetorno[i];
        datosCompletos[i].tiempoFinalizacion=tiemposFinalizacion[i];
    }
    
    let promedioTiempoEspera=sumaTiemposEspera/procesos.length;
    let promedioTiemposRetorno = sumaTiemposRetorno/procesos.length;
    let promedioTiemposFinalizacion = sumaTiemposFinalizacion/procesos.length;
    let resultados=[promedioTiempoEspera,promedioTiemposRetorno,promedioTiemposFinalizacion];
    let busqueda = document.querySelectorAll(".resultados-algoritmo-FCFS")
    if((busqueda.length==0)){
        containerInfoUser.appendChild(generarTablaIndicadores(datosCompletos,promedioTiemposRetorno,promedioTiempoEspera,promedioTiemposFinalizacion));
        let contenedor = document.querySelector(".gantt-container");
        generarDiagramaGanttFCFS(datosCompletos,contenedor);
    }
    return resultados;
}

function generarTablaIndicadores(procesos,promTRetornoN,promTEsperaN,promFinalizacionN){
    let contenedorResultadosFCFS = document.createElement("div");
    let contenedorTabla = document.createElement("div");
    let contenedorGantt = document.createElement("div");
    let titleGantt = document.createElement("h2");
    titleGantt.textContent="Diagrama de Gantt";
    contenedorGantt.classList.add("gantt-container");
    contenedorTabla.classList.add("table-container");
    let title = document.createElement("h2");
    title.textContent="Algoritmo FCFS";
    let table = document.createElement("table");
    table.classList.add("table");
    let headTable = document.createElement("thead")
    let headerRow = document.createElement("tr");
    
    let headerProceso = document.createElement("th");
    headerProceso.textContent="Proceso";
    let headerTLlegada = document.createElement("th");
    headerTLlegada.textContent="Tiempo llegada (ms)";
    let headerTCpu = document.createElement("th");
    headerTCpu.textContent="Tiempo CPU (ms)";
    let headerTFinish = document.createElement("th");
    headerTFinish.textContent="Tiempo de finalizacion (ms)"
    let headerTAround = document.createElement("th");
    headerTAround.textContent="Tiempo de retorno (ms)"
    let headerWaiting = document.createElement("th");
    headerWaiting.textContent="Tiempo de espera (ms)";

    headerRow.appendChild(headerProceso);
    headerRow.appendChild(headerTLlegada);
    headerRow.appendChild(headerTCpu);
    headerRow.appendChild(headerTFinish);
    headerRow.appendChild(headerTAround);
    headerRow.appendChild(headerWaiting);
    headTable.appendChild(headerRow);
    table.appendChild(headTable);

    let tableBody = document.createElement("tbody");
    for(let i=0;i<procesos.length;i++){
        let procesoRenglon = document.createElement("tr");
        let nombre = document.createElement("th");
        let tLlegada = document.createElement("th");
        let tCPU = document.createElement("th");
        let tEspera = document.createElement("th");
        let tFinalizacion = document.createElement("th");
        let tRetorno = document.createElement("th");
        nombre.textContent=procesos[i].idProceso;
        tLlegada.textContent=procesos[i].tiempoLlegada;
        tCPU.textContent=procesos[i].tiempoCPU;
        tEspera.textContent=procesos[i].tiempoEspera;
        tFinalizacion.textContent=procesos[i].tiempoFinalizacion;
        tRetorno.textContent=procesos[i].tiempoRetorno;
        procesoRenglon.appendChild(nombre);
        procesoRenglon.appendChild(tLlegada);
        procesoRenglon.appendChild(tCPU);
        procesoRenglon.appendChild(tFinalizacion);
        procesoRenglon.appendChild(tRetorno);
        procesoRenglon.appendChild(tEspera);
        tableBody.appendChild(procesoRenglon);
    }

    let promedioRenglon = document.createElement("tr");
    let titleProm = document.createElement("th");
    titleProm.textContent="Promedio";
    titleProm.colSpan=3;
    let promTRetorno = document.createElement("th");
    let promTEspera = document.createElement("th");
    let promTFinalizacion = document.createElement("th");

    promTRetorno.textContent=promTRetornoN.toFixed(2);
    promTEspera.textContent=promTEsperaN.toFixed(2);
    promTFinalizacion.textContent=promFinalizacionN.toFixed(2);

    promedioRenglon.appendChild(titleProm);
    promedioRenglon.appendChild(promTFinalizacion);
    promedioRenglon.appendChild(promTRetorno);
    promedioRenglon.appendChild(promTEspera);
    tableBody.appendChild(promedioRenglon);

    table.appendChild(tableBody);
    contenedorTabla.appendChild(table);
    contenedorResultadosFCFS.classList.add("resultados-algoritmo-FCFS");
    contenedorResultadosFCFS.appendChild(title);
    contenedorResultadosFCFS.appendChild(contenedorTabla);
    contenedorResultadosFCFS.appendChild(titleGantt);
    contenedorResultadosFCFS.appendChild(contenedorGantt);
    return contenedorResultadosFCFS;
}