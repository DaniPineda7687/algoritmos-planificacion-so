function crearFormCondiciones(){
    let formCondiciones = document.createElement("form");
    formCondiciones.classList.add("form-container");
    let title = document.createElement("h2");
    title.textContent="Condiciones de la simulación";

    let button = document.createElement("input");
    button.type="button";
    button.value="Aceptar";
    button.addEventListener("click",()=>{
        if(validarInputsUser()){
            let inputsUser = document.querySelectorAll(".input-user-info");
            inputsUser.forEach(element => {
                element.disabled=true;
            });
            button.disabled=true;
            
            startAll(mostrarInformacionGenerada());
        }
        
    })
 
    formCondiciones.appendChild(title);

    formCondiciones.appendChild(crearLabelsAleatorio("Límites para el número de procesos","Número mínimo de procesos","Número máximo de procesos",1,100,"numero-minimo-procesos","numero-maximo-procesos"));
    formCondiciones.appendChild(crearLabelsAleatorio("Límites para el tiempo de CPU","Tiempo mínimo de CPU","Tiempo máximo de CPU",1,50,"tiempo-minimo-CPU","tiempo-maximo-CPU"));
    formCondiciones.appendChild(crearLabelsAleatorio("Límites para el tiempo de llegada","Tiempo mínimo de llegada","Tiempo máximo de llegada",0,50,"tiempo-minimo-llegada","tiempo-maximo-llegada"));
    formCondiciones.appendChild(crearLabelsAleatorio("Límites para la prioridad","Prioridad mínima","Prioridad máxima",1,30,"prioridad-minima","prioridad-maxima"));
    formCondiciones.appendChild(crearLabelsAleatorio("Límites para el Quantum","Quantum mínimo","Quantum máximo",1,10,"quantum-minimo","quantum-maximo"));
    formCondiciones.appendChild(button);
    return formCondiciones;
}
