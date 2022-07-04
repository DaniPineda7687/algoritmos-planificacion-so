function startAll(procesos,quantum){
    containerInfoUser.appendChild(crearSeccionResultados(startFCFS(procesos),startSJF(procesos),startPrioridad(procesos),startRoundRobin(procesos,quantum)));
}