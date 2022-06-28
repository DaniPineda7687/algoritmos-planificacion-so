function startFCFS(procesos){
     /*let procesos= [
        {
            "tiempoCPU": 6,
            "tiempoLlegada": 0,
            "prioridad": 1
        },
        {
            "tiempoCPU": 3,
            "tiempoLlegada": 1,
            "prioridad": 2
        },
        {
            "tiempoCPU": 12,
            "tiempoLlegada": 4,
            "prioridad": 2
        },
        {
            "tiempoCPU": 7,
            "tiempoLlegada": 8,
            "prioridad": 2
        },
        {
            "tiempoCPU": 5,
            "tiempoLlegada": 9,
            "prioridad": 2
        }    

    ]*/
    procesos.sort((a,b)=>{
        return a.tiempoLlegada - b.tiempoLlegada;
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

    for(let i=0;i<procesos.length;i++){
        sumaTiemposEspera+=tiemposEspera[i];
        sumaTiemposRetorno+=tiemposRetorno[i];
    }

    let promedioTiempoEspera=sumaTiemposEspera/procesos.length;
    let promedioTiemposRetorno = sumaTiemposRetorno/procesos.length;
    let resultados=[promedioTiempoEspera,promedioTiemposRetorno];
    console.log(resultados);
    return resultados;
}