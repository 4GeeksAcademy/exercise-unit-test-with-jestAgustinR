// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// // solo un registro en consola para nosotros.
console.log(sum(7,3))

// // exporta la función para usarla en otros archivos 
// // (similar a la palabra clave `export` cuando se usa webpack)


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
function fromEuroToDollar (euro) {
    let resp = euro * 1.2;
    return resp;
}
function FromDollarToYen (dollars){
    let resp1 = dollars * 127.9
    return resp1
}
function FromYenToPound (yen){
    let resp2 = yen * 0.8
    return resp2
}
module.exports = { sum, fromEuroToDollar, FromDollarToYen, FromYenToPound };