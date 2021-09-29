function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Por favor, digite um número:')
    }else {
        let n = Number(num.value)
        let c = 1
        //para limpar e poder adicionar outro numero para somar
        tab.innerHTML= ''
        while (c<=10){
            //criando um elemento option no html pelo JS
            var item = document.createElement('option')
            //text é a parte de dentro do option
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}
/*var num_1 = 5;
var num_2 = 6;
var resultado = num_1 * num_2;
resultado--;
console.log(resultado); */