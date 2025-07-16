// funcion mostrar 
function mostrar(dato) {
    switch(dato){
    case 1:
        document.getElementById("ejemplo1").style.display = "block";
        document.getElementById("ejemplo2").style.display = "none";
        document.getElementById("ejemplo3").style.display = "none";
        document.getElementById("ejemplo4").style.display = "none";
        document.getElementById("ejemplo5").style.display = "none";
        document.getElementById("ejemplo6").style.display = "none";
        document.getElementById("ejemplo7").style.display = "none";
        break;
    case 2:
        document.getElementById("ejemplo2").style.display = "block";    
        document.getElementById("ejemplo1").style.display = "none";
        document.getElementById("ejemplo3").style.display = "none";
        document.getElementById("ejemplo4").style.display = "none";
        document.getElementById("ejemplo5").style.display = "none";
        document.getElementById("ejemplo6").style.display = "none";
        document.getElementById("ejemplo7").style.display = "none";
        break;
    case 3:
        document.getElementById("ejemplo3").style.display = "block";
        document.getElementById("ejemplo2").style.display = "none";
        document.getElementById("ejemplo1").style.display = "none";    
        document.getElementById("ejemplo4").style.display = "none";
        document.getElementById("ejemplo5").style.display = "none";
        document.getElementById("ejemplo6").style.display = "none";
        document.getElementById("ejemplo7").style.display = "none";
        break;
    case 4:
        document.getElementById("ejemplo4").style.display = "block";
        document.getElementById("ejemplo3").style.display = "none";
        document.getElementById("ejemplo1").style.display = "none";    
        document.getElementById("ejemplo2").style.display = "none";
        document.getElementById("ejemplo5").style.display = "none";
        document.getElementById("ejemplo6").style.display = "none";
        document.getElementById("ejemplo7").style.display = "none";
        break;
    case 5:
        document.getElementById("ejemplo5").style.display = "block";
        document.getElementById("ejemplo4").style.display = "none";
        document.getElementById("ejemplo1").style.display = "none";    
        document.getElementById("ejemplo2").style.display = "none";
        document.getElementById("ejemplo3").style.display = "none";
        document.getElementById("ejemplo6").style.display = "none";
        document.getElementById("ejemplo7").style.display = "none";
        break;
    case 6:
        document.getElementById("ejemplo6").style.display = "block";
        document.getElementById("ejemplo5").style.display = "none";
        document.getElementById("ejemplo1").style.display = "none";    
        document.getElementById("ejemplo2").style.display = "none";
        document.getElementById("ejemplo3").style.display = "none";
        document.getElementById("ejemplo4").style.display = "none";
        document.getElementById("ejemplo7").style.display = "none";
        break;
    case 7:
        document.getElementById("ejemplo7").style.display = "block";
        document.getElementById("ejemplo6").style.display = "none";
        document.getElementById("ejemplo1").style.display = "none";    
        document.getElementById("ejemplo2").style.display = "none";
        document.getElementById("ejemplo3").style.display = "none";
        document.getElementById("ejemplo4").style.display = "none"; 
        document.getElementById("ejemplo5").style.display = "none";
        break;
    } 
}


function ejem1(){
    //un arreglo unidimensional se define de la siguiente manera
    var nombres = ["Andres", 42, "camila", 15, "Sergio", 30, "Laura", 25, "Diery", 24];
    //               0       1      2      3       4     5       6     7     8      9
    // longitud es de 10

    console.log(nombres);

    document.getElementById("resultado").innerHTML = "La tercera persona es " + nombres[4] + " y su edad es " + nombres[5] + " años. " + " Todo el array: " + nombres ;
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

function ejem3(){     
    var tamano = parseInt(prompt("Ingrese el tamaño del arreglo:"));
    var multiplo = parseInt(prompt("Ingrese el número del cual quiere los múltiplos:"));
    var arreglo = new Array(tamano);    
    for (var i = 0; i < tamano; i++) {
        arreglo[i] = (i + 1) * multiplo;
    }
    console.log("Arreglo de múltiplos: " + arreglo);
    document.getElementById("resultado").innerHTML = "Arreglo de múltiplos: " + arreglo.join(", ");
    return arreglo;

}

function ejem4(){
    //Buscar un elemento dentro de un arreglo que nosotros le pedimos por teclado. Indicar las posición donde se encuentra. Si hay más de uno, indicar igualmente la posición.
    var arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var elemento = parseInt(prompt("Ingrese el número que desea buscar en el arreglo:"));
    var posiciones = [];
    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === elemento) {
            posiciones.push(i);
        }
    }
}

function ejem5(){
    //Suponga un array con N números enteros generados aleatoriamente y mostrados en pantalla, N debe ser un número impar, mostrar en pantalla el valor que ocupa el centro del array.

    var n = parseInt(prompt("Ingrese un número impar para el tamaño del arreglo:"));
    while (n % 2 === 0) {
        n = parseInt(prompt("El número debe ser impar. Ingrese nuevamente:"));
    }
    var arreglo = [];
    for (var i = 0; i < n; i++) {
        arreglo.push(Math.floor(Math.random() * 100)); // Genera números aleatorios entre 0 y 99
    }
    console.log("Arreglo generado: " + arreglo);
    var centro = Math.floor(n / 2);
    console.log("El valor en el centro del arreglo es: " + arreglo[centro]);
    document.getElementById("resultado").innerHTML = "El valor en el centro del arreglo es: " + arreglo[centro];
    
}

function ejem6(){
    //Crea un arreglo o array multidimensional que contenga 3 columnas y las filas que tu quieras, las dos primeras columnas tendrán números y en la 3 columna sera el resultado de sumar el número de la primera y segunda columna. Muestra el array o arreglo de la siguiente forma: 
    // ◦ 3 + 5 = 8 
    // ◦ 4 + 4 = 7
    var filas = parseInt(prompt("Ingrese el número de filas para el arreglo:"));
    var arreglo = [];
    for (var i = 0; i < filas; i++) {
        var num1 = Math.floor(Math.random() * 10); // Número aleatorio entre 0 y 9
        var num2 = Math.floor(Math.random() * 10); // Número aleatorio entre 0 y 9
        var suma = num1 + num2;
        arreglo.push([num1, num2, suma]);
    }
    console.log("Arreglo multidimensional:");
    for (var i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i][0] + " + " + arreglo[i][1] + " = " + arreglo[i][2]);
    }
    document.getElementById("resultado").innerHTML = "Arreglo multidimensional:<br>" + arreglo.map(fila => fila[0] + " + " + fila[1] + " = " + fila[2]).join("<br>");
    return arreglo;
}

function ejem7(){
    //Crear una matriz para las tablas de multiplicar
    var tabla = [];
    for (var i = 1; i <= 10; i++) {
        var fila = [];
        for (var j = 1; j <= 10; j++) {
            fila.push(i * j);
        }
        tabla.push(fila);
    }
    console.log("Tabla de multiplicar:");
    for (var i = 0; i < tabla.length; i++) {
        console.log(tabla[i].join(" | "));
    }
    document.getElementById("resultado").innerHTML = "Tabla de multiplicar:<br>" + tabla.map(fila => fila.join(" | ")).join("<br>");
    return tabla;
}

