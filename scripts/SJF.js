function startSJF(procesosOriginal){
    let procesos=procesosOriginal.slice();
    let datosCompletos = procesosOriginal.slice();
    console.log(procesos);


    let tiemposLlegada = [];
    let tiemposCPU = [];
    let tiemposCPU2 = [];
    let bandera =[];
    proce=[];
    let cont=1;

    procesos.forEach(element => {
        tiemposCPU.push(element.tiempoCPU);
        tiemposCPU2.push(element.tiempoCPU);
        tiemposLlegada.push(element.tiempoLlegada);
        bandera.push(0);
        proce.push(cont);
        cont++;
    });
    let datosSJF = obtenerInfoSJF(proce,tiemposLlegada,tiemposCPU,bandera,tiemposCPU2);
    let resultados = [datosSJF[3],datosSJF[4],datosSJF[5]];
    for(let i=0;i<procesos.length;i++){
        datosCompletos[i].tiempoEspera=datosSJF[0][i];
        datosCompletos[i].tiempoRetorno = datosSJF[1][i];
        datosCompletos[i].tiempoFinalizacion=datosSJF[2][i];
    }

    datosCompletos.sort((a,b)=>{
        if(a.tiempoLlegada!=b.tiempoLlegada){
            return a.tiempoLlegada-b.tiempoLlegada;
        }else{
            return a.tiempoCPU-b.tiempoCPU;
        }
    })
    let busqueda = document.querySelectorAll(".resultados-algoritmo-SJF")
    if((busqueda.length==0)){
        containerInfoUser.appendChild(generarTablaIndicadoresSJF(datosCompletos,datosSJF[4],datosSJF[3],datosSJF[5]));
    }
    return resultados;
    
}
function obtenerInfoSJF(pid,at,bt,flag,bt2){
    var n = pid.length;
    var clock = 0;
    var tot = 0;
    var items =[];
    var ct=[];
    var ta=[];
    var wt=[];
    var avgwt=0;
    var avgta=0;
    var count2=0;

  while (true){
      var c = n;
      var min =100;
      if (tot==n){
        items.push(temp);
        break;
      }
          
      for (var i=0; i< n; i++){
        var count=0;
        if ((at[i] <= clock) && (flag[i] == 0) && (bt[i]<min)){
            min=bt[i];
            c=i;
        } 
      }
      if (c==n){
          clock+=1;
      }
      else{
        bt[c]--;
        clock++;
        if (bt[c]==0){   
            ct[c]=clock;
            flag[c]=1
            tot++;
        }
        if (count2==0){
            var temp2=c;
            var temp = [];
            temp.push(pid[c]);
            temp.push(1)
        }else{
            if (c==temp2){
                temp[1]++;
            }else{
                  items.push(temp);
                  var temp =[];
                  temp.push(pid[c]);
                  temp.push(1);
                  temp2=c;
            }
        }
          count2++;
      }
         
  }
  let sumaCT=0;
  let avgCT=0;
  for(i=0;i<n;i++){
        ta[i] = ct[i] - at[i];
        wt[i] = ta[i] - bt2[i];
        avgwt +=wt[i];
        avgta +=ta[i];
        sumaCT+=ct[i];
    }

  avgwt/=n;
  avgta/=n;
  avgCT=sumaCT/n;
  let resultados = [wt,ta,ct,avgwt,avgta,avgCT];
  console.log(resultados);
  return resultados;
}

function generarTablaIndicadoresSJF(procesos,promTRetornoN,promTEsperaN,promFinalizacionN){
    let contenedorResultadosSJF = document.createElement("div");
    let contenedorTabla = document.createElement("div");
    contenedorTabla.classList.add("table-container");
    let title = document.createElement("h2");
    title.textContent="Algoritmo SJF";
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
    contenedorResultadosSJF.classList.add("resultados-algoritmo-SJF");
    contenedorResultadosSJF.appendChild(title);
    contenedorResultadosSJF.appendChild(contenedorTabla);
    return contenedorResultadosSJF;
}