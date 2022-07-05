function startPrioridad(procesosOriginal){
        let procesos = procesosOriginal.slice();
        let datosCompletos = procesosOriginal.slice();
        console.log(procesos);
        let tiemposLlegada = [];
        let tiemposCPU = [];
        let prioridades = [];

        for(let i=0;i<procesos.length;i++){
            tiemposCPU.push(procesos[i].tiempoCPU);
            tiemposLlegada.push(procesos[i].tiempoLlegada);
            prioridades.push(procesos[i].prioridad);
        }

        prioridades.push(10000);

        let waitingTime= [];
        let turnAroundTime = [];
        let completionTime=[];
        let i,j,smallest,time,end;
        let count =0;
        let x =[];
        for(i=0;i<procesos.length;i++){
            x[i] = procesos[i].tiempoCPU;
        }
        
        for(time=0;count!=tiemposCPU.length;time++){
            smallest=tiemposCPU.length;
            for(i=0;i<tiemposCPU.length;i++){
                if (tiemposLlegada[i] <= time && prioridades[i] < prioridades[smallest] && tiemposCPU[i] > 0){
                    smallest = i;
                }
            }
            tiemposCPU[smallest]--;
            if (tiemposCPU[smallest] == 0){
            count++;
            end = time + 1;
            completionTime[smallest] = end;
            waitingTime[smallest] = end - tiemposLlegada[smallest] - x[smallest];
            turnAroundTime[smallest] = end - tiemposLlegada[smallest];
            }
        }
        let promEspera = 0;
        let promRetorno=0;
        let promFinalizacion=0;
        waitingTime.forEach(element => {
            promEspera+=element;
        });
        turnAroundTime.forEach(element => {
            promRetorno+=element;
        });
        completionTime.forEach(element => {
            promFinalizacion+=element;
        });
        for(let i=0;i<procesos.length;i++){
            datosCompletos[i].tiempoEspera=waitingTime[i];
            datosCompletos[i].tiempoRetorno = turnAroundTime[i];
            datosCompletos[i].tiempoFinalizacion=completionTime[i];
        }
        datosCompletos.sort((a,b)=>{
            if(a.tiempoLlegada!=b.tiempoLlegada){
                return a.tiempoLlegada-b.tiempoLlegada;
            }else{
                return a.prioridad-b.prioridad;
            }
        })
        let resultados=[promEspera/procesos.length, promRetorno/procesos.length,promFinalizacion/procesos.length];
        let busqueda = document.querySelectorAll(".resultados-algoritmo-prioridad")
        if((busqueda.length==0)){
            containerInfoUser.appendChild(generarTablaIndicadoresPrioridad(datosCompletos,resultados[1],resultados[0],resultados[2]));
            let contenedor = document.querySelector(".gantt-container-prioridad");
            generarDiagramaGanttPrioridad(datosCompletos,contenedor);
        }
        return resultados;
}

function generarTablaIndicadoresPrioridad(procesos,promTRetornoN,promTEsperaN,promTFinalizacionN){
    let contenedorResultadosPrioridad = document.createElement("div");
    let contenedorTabla = document.createElement("div");
    contenedorTabla.classList.add("table-container");
    let contenedorGantt = document.createElement("div");
    let titleGantt = document.createElement("h2");
    titleGantt.textContent="Diagrama de Gantt";
    contenedorGantt.classList.add("gantt-container-prioridad");
    let title = document.createElement("h2");
    title.textContent="Algoritmo Prioridad";
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
    let headerPrioridad = document.createElement("th");
    headerPrioridad.textContent="Prioridad";
    let headerTFinish = document.createElement("th");
    headerTFinish.textContent="Tiempo de finalizacion (ms)"
    let headerTAround = document.createElement("th");
    headerTAround.textContent="Tiempo de retorno (ms)"
    let headerWaiting = document.createElement("th");
    headerWaiting.textContent="Tiempo de espera (ms)";

    headerRow.appendChild(headerProceso);
    headerRow.appendChild(headerTLlegada);
    headerRow.appendChild(headerTCpu);
    headerRow.appendChild(headerPrioridad);
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
        let prioridad = document.createElement("th");
        let tEspera = document.createElement("th");
        let tFinalizacion = document.createElement("th");
        let tRetorno = document.createElement("th");
        nombre.textContent=procesos[i].idProceso;
        tLlegada.textContent=procesos[i].tiempoLlegada;
        tCPU.textContent=procesos[i].tiempoCPU;
        prioridad.textContent=procesos[i].prioridad;
        tEspera.textContent=procesos[i].tiempoEspera;
        tFinalizacion.textContent=procesos[i].tiempoFinalizacion;
        tRetorno.textContent=procesos[i].tiempoRetorno;
        procesoRenglon.appendChild(nombre);
        procesoRenglon.appendChild(tLlegada);
        procesoRenglon.appendChild(tCPU);
        procesoRenglon.appendChild(prioridad);
        procesoRenglon.appendChild(tFinalizacion);
        procesoRenglon.appendChild(tRetorno);
        procesoRenglon.appendChild(tEspera);
        tableBody.appendChild(procesoRenglon);
    }

    let promedioRenglon = document.createElement("tr");
    let titleProm = document.createElement("th");
    titleProm.textContent="Promedio";
    titleProm.colSpan=4;
    let promTRetorno = document.createElement("th");
    let promTEspera = document.createElement("th");
    let promTFinalizacion = document.createElement("th");


    promTRetorno.textContent=promTRetornoN.toFixed(2);
    promTEspera.textContent=promTEsperaN.toFixed(2);
    promTFinalizacion.textContent=promTFinalizacionN.toFixed(2);


    promedioRenglon.appendChild(titleProm);
    promedioRenglon.appendChild(promTFinalizacion);
    promedioRenglon.appendChild(promTRetorno);
    promedioRenglon.appendChild(promTEspera);
    tableBody.appendChild(promedioRenglon);

    table.appendChild(tableBody);
    contenedorTabla.appendChild(table);
    contenedorResultadosPrioridad.classList.add("resultados-algoritmo-prioridad");
    contenedorResultadosPrioridad.appendChild(title);
    contenedorResultadosPrioridad.appendChild(contenedorTabla);
    contenedorResultadosPrioridad.appendChild(titleGantt);
    contenedorResultadosPrioridad.appendChild(contenedorGantt);
    return contenedorResultadosPrioridad;
}