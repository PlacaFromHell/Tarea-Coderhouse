let cont = 0;
let dP = " ";
let img =document.querySelector('img');

alert("Bienvenido al Club de la Mofeta. Sólo podrán tener acceso quienes contesten correctamente la siguiente sucesión de preguntas:");


do {

cont = cont+1;

switch (cont) {

    case 1 :
        dP = prompt("¿A qué clase de estructura corresponde BTFSS en Assembly? ¿Condicional o iteración?", "");
        dP = dP.toLowerCase();
        if (dP!="condicional") {
            cont = 0;
        }
        break;

    case 2 :
        dP = prompt("¿Cuál NO ES un ingrediente de la gianduia? ¿Avellanas o aceitunas?", "ayuda por favor estoy SECUESTRADO!!!");
        dP = dP.toLowerCase();
        if (dP!="aceitunas") {
            cont = 0;
        }
        break;

    case 3 :
        dP = prompt("Las papas Pringles tienen forma de paraboloide o esferoide?", "");
        dP = dP.toLowerCase();
        if (dP!="paraboloide") {
            cont = 0;
        }
        break;

    case 4 :
        dP = prompt("El primer nombre de la segunda esposa de Ronald Reagan es...", "");
        dP = dP.toLowerCase();
        if (dP!="nancy") {
            cont = 0;
        }
        break;

    case 5 :
        dP = prompt("¿Sos un agente de la CIA?");
        dP = dP.toLowerCase();
        if (dP!="no") {
            cont = 0;
        }
        else {
           cont =  10;
        }
        break;
    default :
        cont = 0;
        break;
}

}
while (cont!=10)

alert("¡Felicidades!");

