function mediaSem() {
    let notasSem1 = document.getElementById("1Sem").value;
    let notasSem2 = document.getElementById("2Sem").value;
    let notasSem3 = document.getElementById("3Sem").value;
    
    let notasTotal = (notasSem1 + notasSem2 + notasSem3) / 3;
    console.log(notasTotal);
    if (notasTotal => 6) {
        document.getElementById("saidaResult").innerText= "Aprovado";
    } else{
        document.getElementById("saidaResult").innerText= "Reprovado";
    }   
    
    //window.location.href ="segundapagina.html"
}