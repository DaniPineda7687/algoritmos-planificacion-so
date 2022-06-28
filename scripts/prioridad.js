function startPrioridad(procesos){
    /*let procesos= [
        {
            "tiempoCPU": 20,
            "tiempoLlegada": 0,
            "prioridad": 2
        },
        {
            "tiempoCPU": 10,
            "tiempoLlegada": 3,
            "prioridad": 1
        },
        {
            "tiempoCPU": 4,
            "tiempoLlegada": 4,
            "prioridad": 3
        },
        {
            "tiempoCPU": 6,
            "tiempoLlegada": 6,
            "prioridad": 2
        }

    ]*/
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
        waitingTime.forEach(element => {
            promEspera+=element;
        });
        turnAroundTime.forEach(element => {
            promRetorno+=element;
        });
        let resultados=[promEspera/procesos.length, promRetorno/procesos.length];
        return resultados;
}