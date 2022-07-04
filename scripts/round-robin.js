
function startRoundRobin(procesosOriginal,q){
    let procesos = procesosOriginal.slice();
    let datosCompletos = procesosOriginal.slice();
    datosCompletos.sort((a,b)=>{
        return a.tiempoLlegada-b.tiempoLlegada;
    });
    const findWaitingTime = (processes, n, bt, wt, quantum) => {
        let rem_bt = new Array(n).fill(0);
        for (let i = 0; i < n; i++)
            rem_bt[i] = bt[i];
 
        let t = 0;
        while (1) {
            let done = true;
            for (let i = 0; i < n; i++) {
                if (rem_bt[i] > 0) {
                    done = false;
                    if (rem_bt[i] > quantum) {
                        t += quantum;
                        rem_bt[i] -= quantum;
                    }
                    else {
                        t = t + rem_bt[i];
                        wt[i] = t - bt[i];
                        rem_bt[i] = 0;
                    }
                }
            }
            if (done == true)
                break;
        }
    }
    const findTurnAroundTime = (processes, n, bt, wt, tat) => {
        for (let i = 0; i < n; i++)
            tat[i] = bt[i] + wt[i];
    }
    const findavgTime = (processes, n, bt, quantum) => {
        let wt = new Array(n).fill(0), tat = new Array(n).fill(0);
        let total_wt = 0, total_tat = 0;
        findWaitingTime(processes, n, bt, wt, quantum);
        findTurnAroundTime(processes, n, bt, wt, tat);
        for (let i = 0; i < n; i++) {
            total_wt = total_wt + wt[i];
            total_tat = total_tat + tat[i];
            datosCompletos[i].tiempoEspera=wt[i];
            datosCompletos[i].tiempoRetorno=tat[i];
        }
        return [total_wt / n,total_tat / n]
    }
    let cont =1;
    let nombreProcesos=[];
    let tiemposCPU=[];
    procesos.forEach(element => {
        tiemposCPU.push(element.tiempoCPU);
        nombreProcesos.push(cont);
        cont++;
    });

    console.log(findavgTime(procesos, procesos.length, tiemposCPU, q));
    console.log(procesos)
    let resultados = findavgTime(procesos, procesos.length, tiemposCPU, q);
    let busqueda = document.querySelectorAll(".resultados-algoritmo-round")
    if((busqueda.length==0)){
        containerInfoUser.appendChild(generarTablaIndicadoresRound(datosCompletos,resultados[1],resultados[0]));
    }
    return resultados;
}

function generarTablaIndicadoresRound(procesos,promTRetornoN,promTEsperaN){
    let contenedorResultadosRound = document.createElement("div");
    let contenedorTabla = document.createElement("div");
    contenedorTabla.classList.add("table-container");
    let title = document.createElement("h2");
    title.textContent="Algoritmo Round Robin";
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

    let headerTAround = document.createElement("th");
    headerTAround.textContent="Tiempo de retorno (ms)"
    let headerWaiting = document.createElement("th");
    headerWaiting.textContent="Tiempo de espera (ms)";

    headerRow.appendChild(headerProceso);
    headerRow.appendChild(headerTLlegada);
    headerRow.appendChild(headerTCpu);
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
        let tRetorno = document.createElement("th");
        nombre.textContent=procesos[i].idProceso;
        tLlegada.textContent=procesos[i].tiempoLlegada;
        tCPU.textContent=procesos[i].tiempoCPU;
        tEspera.textContent=procesos[i].tiempoEspera;
        tRetorno.textContent=procesos[i].tiempoRetorno;
        procesoRenglon.appendChild(nombre);
        procesoRenglon.appendChild(tLlegada);
        procesoRenglon.appendChild(tCPU);
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

    promTRetorno.textContent=promTRetornoN.toFixed(2);
    promTEspera.textContent=promTEsperaN.toFixed(2);

    promedioRenglon.appendChild(titleProm);
    promedioRenglon.appendChild(promTRetorno);
    promedioRenglon.appendChild(promTEspera);
    tableBody.appendChild(promedioRenglon);

    table.appendChild(tableBody);
    contenedorTabla.appendChild(table);
    contenedorResultadosRound.classList.add("resultados-algoritmo-round");
    contenedorResultadosRound.appendChild(title);
    contenedorResultadosRound.appendChild(contenedorTabla);
    return contenedorResultadosRound;
}