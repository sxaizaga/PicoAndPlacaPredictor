//Generates the code for the "Placa"
function vrpCodeGen() {
    /*
    VPR possible letters
    Azua (A)             Bolívar (B)
    Cañar (U)            Cotopaxi (X)
    Chimborazo (H)       El Oro (O)
    Esmeraldas (E)       Francisco de Orellana (Q)
    Galápagos (W)        Guayas (G)
    Imbabura (I)         Loja (L)
    Los Ríos (R)         Manabí (M)
    Morona Santiago (V)  Napo (N)
    Pastaza (S)          Pichincha (P)
    Santa Elena (Y)      Santo Domingo de los Tsáchilas (J)
    Sucumbíos (K)        Tungurahua (T)
    Zamora Chinchipe (Z)
    */
    var possibleLetters = ["A", "B", "U", "X", "H", "O", "E", "Q", "W", "G", "I", "L", "R", "M", "V", "N", "S", "P", "Y", "J", "K", "T", "Z"];
    var vrpCode = null;
    var number = getRndInteger(0, possibleLetters.length);
    vrpCode = possibleLetters[number] + String.fromCharCode(getRndInteger(65, 90)) + String.fromCharCode(getRndInteger(65, 90))
    return vrpCode;
}



//Generates a random integer between an interval
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generatePlaca() {
    //Generates the numbers for the "Placa"
    var vrpNumber = getRndInteger(100, 9999);
    vrpObj = new VRP(vrpCodeGen(), vrpNumber);
    console.log(vrpObj.code + "-" + vrpObj.number);
    var vrpTxt = document.getElementById("vrpInput");
    vrpTxt.setAttribute("value", vrpObj.code + "" + vrpObj.number);
    vrpTxt.textContent = vrpObj.code + "" + vrpObj.number;
}
