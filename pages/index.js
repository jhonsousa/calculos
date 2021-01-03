function Home(){
    return <div>Home </div>
}

function multipordois(numeros){

    numeros = [2,3,5];
    var resultados = [];

    for (var n=0;n <numeros.length; n++) {
        var elemento = numeros[n] * 2;
        resultados.push(elemento);
    }

    return resultados 

}

export default multipordois