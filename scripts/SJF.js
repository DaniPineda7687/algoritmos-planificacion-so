function startSJF(procesos){
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
    return obtenerInfoSJF(proce,tiemposLlegada,tiemposCPU,bandera,tiemposCPU2);
    
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

  for(i=0;i<n;i++){
        ta[i] = ct[i] - at[i];
        wt[i] = ta[i] - bt2[i];
        avgwt +=wt[i];
        avgta +=ta[i];
    }

  avgwt/=n;
  avgta/=n;
  let resultados = [avgwt,avgta]
  console.log(resultados);
  return resultados;
}