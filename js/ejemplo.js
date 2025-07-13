// funcion mostrar 
function mostrar(dato) {
    switch(dato){
    case 1:
        document.getElementById("ejemplo1").style.display = "block";
        document.getElementById("ejemplo2").style.display = "none";
        document.getElementById("ejemplo3").style.display = "none";
        document.getElementById("ejemplo4").style.display = "none";
        break;
    case 2:
        document.getElementById("ejemplo1").style.display = "none";
        document.getElementById("ejemplo2").style.display = "block";    
        document.getElementById("ejemplo3").style.display = "none";
        document.getElementById("ejemplo4").style.display = "none";
        break;
    case 3:
        document.getElementById("ejemplo2").style.display = "none";
        document.getElementById("ejemplo1").style.display = "none";    
        document.getElementById("ejemplo3").style.display = "block";
        document.getElementById("ejemplo4").style.display = "none";
        break;
    case 4:
        document.getElementById("ejemplo3").style.display = "none";
        document.getElementById("ejemplo1").style.display = "none";    
        document.getElementById("ejemplo2").style.display = "none";
        document.getElementById("ejemplo4").style.display = "block";
        break;
    } 
}


function ejem1(){
    //un arreglo unidimensional se define de la siguiente manera
    var nombres = ["Andres", 42, "camila", 15, "Sergio", 30, "Laura", 25, "Diery", 24];
    //               0       1      2      3       4     5       6     7     8      9
    // longitud es de 10

    console.log(nombres);

    document.getElementById("resultado").innerHTML = "La tercera persona es " + nombres[4] + " y su edad es " + nombres[5] + " años.";
}

function ejem2(){
    
    var numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    //              0   1   2   3   4   5  6   7   8    9
    var suma = 0;
    for (var i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    var media = suma / numeros.length;
    console.log("La media de los valores del array es: " + media);
    document.getElementById("resultado").innerHTML = "La media de los valores del array es: " + media;
     
}