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
        proceso.textContent=`${procesos[i].idProceso} - Tiempo CPU ${procesos[i].tiempoCPU}ms`
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
        proceso.textContent=`${procesos[i].idProceso} - Tiempo CPU ${procesos[i].tiempoCPU}ms`
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


function generarDiagramaGanttPrioridad(procesos,contenedor){
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
        thProcesosT.classList.add(`tr-prioridad-proceso-${i+1}`);
        bodyTabla.appendChild(thProcesosT);
    }
    encabezadoTabla.appendChild(trEncabezado);
    table.appendChild(encabezadoTabla);
    table.appendChild(bodyTabla);
    contenedor.appendChild(table);
//clase de los th nombre-fila-columna
    for(let i=0;i<numeroProcesos;i++){
        let filaProceso = document.querySelector(`.tr-prioridad-proceso-${i+1}`);
        for(let j=0;j<tiempoTotal;j++){
            let thRelleno = document.createElement("th");
            thRelleno.classList.add(`th-prioridad-${i}-${j}`);
            filaProceso.appendChild(thRelleno);
        }
    }
    let temp = duracionProcesos[0];
    for(let i=0;i<numeroProcesos;i++){
        let ultima = tiempoTotal-1;
        let proceso = document.querySelector(`.th-prioridad-${i}-${temp}`);
        proceso.setAttribute("colspan",duracionProcesos[i+1]);
        proceso.textContent=`${procesos[i].idProceso} - Tiempo CPU ${procesos[i].tiempoCPU}ms`
        proceso.classList.add("proceso")
        temp+=duracionProcesos[i+1];
        for(let j=0;j<duracionProcesos[i+1]-1;j++){
            let filaProceso = document.querySelector(`.tr-prioridad-proceso-${i+1}`);
            let eliminar = document.querySelector(`.th-prioridad-${i}-${ultima}`);
            filaProceso.removeChild(eliminar);
            ultima--;
        }
    }

    for(let i=0;i<procesos.length;i++){
        if(procesos[i].tiempoLlegada!=0){
            let llegadaProceso = document.querySelector(`.th-prioridad-${i}-${tiemposLlegada[i]}`);
            llegadaProceso.classList.add("proceso-llegada");
        }
    }
}

function generarDiagramaGanttPares(procesos,contenedor,quantum){
    let numeroProcesos=procesos.length;
    let tiempoTotal = 0;
    let tiemposCPU = [];
    procesos.forEach(element => {
        tiemposCPU.push(element.tiempoCPU);
        tiempoTotal+=element.tiempoCPU;
    });
    let table = document.createElement("table");
    let encabezadoTabla = document.createElement("thead");
    let bodyTabla = document.createElement("tbody");
    let trEncabezado = document.createElement("tr");
    let thProcesos = document.createElement("th");
    thProcesos.textContent="Procesos";
    trEncabezado.appendChild(thProcesos);
    for(let i=0;i<70;i++){
        let tiempo = document.createElement("th");
        tiempo.textContent=i;
        trEncabezado.appendChild(tiempo);
    }
    for(let i=0;i<numeroProcesos;i++){
        let thProcesosT = document.createElement("tr");
        thProcesosT.textContent=`Proceso ${i+1}`;
        thProcesosT.classList.add(`tr-round-proceso-${i+1}`);
        bodyTabla.appendChild(thProcesosT);
    }
    encabezadoTabla.appendChild(trEncabezado);
    table.appendChild(encabezadoTabla);
    table.appendChild(bodyTabla);
    contenedor.appendChild(table);
//clase de los th nombre-fila-columna
    for(let i=0;i<numeroProcesos;i++){
        let filaProceso = document.querySelector(`.tr-round-proceso-${i+1}`);
        for(let j=0;j<70;j++){
            let thRelleno = document.createElement("th");
            thRelleno.classList.add(`th-round-${i}-${j}`);
            filaProceso.appendChild(thRelleno);
        }

    }
    let contFilas = 0;
    let contCol = 0;
    let cont =0;
    //let tiemposCPU=[7,6,6,6];
    while(validarTiempos(tiemposCPU)==false){
        let numeroProcesosU = tiemposCPU.length;
        console.log(tiemposCPU);
        if(contFilas>numeroProcesosU-1){
            contFilas=0;
            contCol-=1;
        }
        if(tiemposCPU[0]==0){
            contFilas++;
            let tiempoTemp = tiemposCPU.shift();
            tiemposCPU.push(tiempoTemp);
            continue;
        }
        if(contFilas<=numeroProcesosU-1){
            let proceso = document.querySelector(`.th-round-${contFilas}-${contCol}`);
            if(tiemposCPU[0]>=quantum){
                proceso.setAttribute("colspan",quantum);
                proceso.textContent=`Tiempo CPU ${tiemposCPU[0]}ms`
                contCol+=quantum;
                
            }else{
                proceso.setAttribute("colspan",tiemposCPU[0]);
                proceso.textContent=`Tiempo CPU - ${tiemposCPU[0]}ms`
                contCol+=tiemposCPU[0];
            }
            proceso.classList.add("proceso")
            contFilas++;
        }
        if(tiemposCPU[0]>=quantum){
            tiemposCPU[0]-=quantum;
        }else{
            tiemposCPU[0]=0;
        }
        
        let tiempoTemp = tiemposCPU.shift();
        tiemposCPU.push(tiempoTemp);
    }   
}

function generarDiagramaGanttImpares(procesos,contenedor,quantum){
    let numeroProcesos=procesos.length;
    let tiemposCPU = [];
    let tiempoTotal = 0;
    procesos.forEach(element => {
        tiemposCPU.push(element.tiempoCPU);
        tiempoTotal+=element.tiempoCPU;
    });
    let table = document.createElement("table");
    let encabezadoTabla = document.createElement("thead");
    let bodyTabla = document.createElement("tbody");
    let trEncabezado = document.createElement("tr");
    let thProcesos = document.createElement("th");
    thProcesos.textContent="Procesos";
    trEncabezado.appendChild(thProcesos);
    for(let i=0;i<70;i++){
        let tiempo = document.createElement("th");
        tiempo.textContent=i;
        trEncabezado.appendChild(tiempo);
    }
    for(let i=0;i<numeroProcesos;i++){
        let thProcesosT = document.createElement("tr");
        thProcesosT.textContent=`Proceso ${i+1}`;
        thProcesosT.classList.add(`tr-round-proceso-${i+1}`);
        bodyTabla.appendChild(thProcesosT);
    }
    encabezadoTabla.appendChild(trEncabezado);
    table.appendChild(encabezadoTabla);
    table.appendChild(bodyTabla);
    contenedor.appendChild(table);
//clase de los th nombre-fila-columna
    for(let i=0;i<numeroProcesos;i++){
        let filaProceso = document.querySelector(`.tr-round-proceso-${i+1}`);
        for(let j=0;j<70;j++){
            let thRelleno = document.createElement("th");
            thRelleno.classList.add(`th-round-${i}-${j}`);
            filaProceso.appendChild(thRelleno);
        }

    }
    let contFilas = 0;
    let contCol = 0;
    let cont =0;
    //let tiemposCPU=[7,6,6,6];
    while(validarTiempos(tiemposCPU)==false){
        let numeroProcesosU = tiemposCPU.length;
        console.log(tiemposCPU);
        if(contFilas>numeroProcesosU-1){
            contFilas=0;
            contCol-=2;
        }
        if(tiemposCPU[0]==0){
            contFilas++;
            let tiempoTemp = tiemposCPU.shift();
            tiemposCPU.push(tiempoTemp);
            
            continue;
        }
        if(contFilas<=numeroProcesosU-1){
            let proceso = document.querySelector(`.th-round-${contFilas}-${contCol}`);
            if(tiemposCPU[0]>=quantum){
                proceso.setAttribute("colspan",quantum);
                proceso.textContent=`Tiempo CPU - ${tiemposCPU[0]}ms`
                contCol+=quantum;
            }else{
                proceso.setAttribute("colspan",tiemposCPU[0]);
                proceso.textContent=`Tiempo CPU - ${tiemposCPU[0]}ms`
                contCol+=tiemposCPU[0];
            }
            proceso.classList.add("proceso")
            contFilas++;
        }
        if(tiemposCPU[0]>=quantum){
            tiemposCPU[0]-=quantum;
        }else{
            tiemposCPU[0]=0;
        }
        
        let tiempoTemp = tiemposCPU.shift();
        tiemposCPU.push(tiempoTemp);
    }   
}


function validarTiempos(tiemposCPU){
    let bandera = true;
    tiemposCPU.forEach(element => {
        if(element==0){
            bandera=bandera&&true;
            
        }else{
            bandera=false;
        }
    });
    return bandera;
}
