
var array = [] ;
var fizz = "fizz" ;
var buzz = "buzz" ;
var fizzbuzz = "fizzbuzz" ;

for (var i = 0; i < 100; i++) {
    array.push(i)
    if (array[i] % 3 == 0 )   {
        console.log(fizz);
    } else {
        console.log(i);
    }

}
