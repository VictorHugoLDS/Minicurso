
function calcular(event){

    event.preventDefault();

    let alcoolInput = document.getElementById("alcool").value;


    let gasolinaInput = document.getElementById("gasolina").value;

    let contentResult = document.getElementById("content-result");

    let textResult = document.getElementById("text-result");

    let gasolinaSpan = document.getElementById("gasolina-result");

    let alcoolSpan = document.getElementById("alcool-result")

    
//CALCULO ALCOOL / GASOLINA SE O RESULTADO FOR MENOR QUE 0.7 COMPENSA USAR ALCOOL.

    let calculo = (alcoolInput / gasolinaInput);

    if(calculo < 0.7){
        //aqui compensa usar alcool.

        textResult.innerHTML = "Compensa usar Álcool";

        alert("COMPENSA USAR ALCOOL")
       }
       else{
        //compensa usar gasolina

        textResult.innerHTML = "Compensa usar Gasolina"
        alert("COMPENSA USAR GASOLINA")

       }
    gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinaInput;

    alcoolSpan.innerHTML = "Alcool R$ " + alcoolInput;

       contentResult.classList.remove("hide")


}