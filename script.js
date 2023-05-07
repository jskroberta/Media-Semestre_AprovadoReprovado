function mediaSem() {
    let notasSem1 = document.getElementById("1Sem").value;
    let notasSem2 = document.getElementById("2Sem").value;
    let notasSem3 = document.getElementById("3Sem").value;
    
    let notas1numero = parseFloat(notasSem1);
    let notas2numero = parseFloat(notasSem2);
    let notas3numero = parseFloat(notasSem3);

    const resultFinal = (notas1numero + notas2numero + notas3numero) / 3;

    
    if (resultFinal>= 6) {
        document.getElementById("saidaResult").innerHTML= "Aprovado";
        document.getElementById("saidaResult").setAttribute("class","resultado aprovado");
    } else{
        document.getElementById("saidaResult").innerHTML= "Reprovado";
        document.getElementById("saidaResult").setAttribute("class","resultado reprovado");
    }  
    
   
    //window.location.href ="segundapagina.html"
     //let notasTotal = parseFloat((notasSem1 + notasSem2 + notasSem3)) / 3;
}