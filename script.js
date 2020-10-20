
var array = [] ;
var fizz = "fizz" ;
var buzz = "buzz" ;
var fizzbuzz = "fizzbuzz" ;

//iniziamo il ciclo for che si ripeterá per 100 volte
for (var i = 0; i < 100; i++) {
    array.push(i)
    if (array[i] % 3 == 0 && array[i] % 5 == 0 )   {
        console.log(fizzbuzz);
    } else if (array[i] % 5 == 0) {
        console.log(buzz);
    } else if (array[i] % 3 == 0){
        console.log(fizz);
    } else {
        console.log(i);
    }

}
