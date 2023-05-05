function mediaSem() {
    let notasSem1 = document.getElementById("1Sem").value;
    let notasSem2 = document.getElementById("2Sem").value;
    let notasSem3 = document.getElementById("3Sem").value;
    
    let notas1numero = parseFloat(notasSem1);
    let notas2numero = parseFloat(notasSem2);
    let notas3numero = parseFloat(notasSem3);

    const resultFinal = (notas1numero + notas2numero + notas3numero) / 3;

    //let notasTotal = parseFloat((notasSem1 + notasSem2 + notasSem3)) / 3;
    console.log("b"+ resultFinal);
    //if (notasTotal >= 6) {
    //    document.getElementById("saidaResult").innerText= "Aprovado";
    //} else{
    //    document.getElementById("saidaResult").innerText= "Reprovado";
    //}   
    
    //window.location.href ="segundapagina.html"
}