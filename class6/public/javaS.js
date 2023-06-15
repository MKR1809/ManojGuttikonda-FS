function push(array, element){
    array.push(element);
    return array

}

fruits = ['apple', 'banana', 'mango'];

let p  
p = push(fruits, 'guava');

//document.getElementById('1').innerHtml = pop;
console.log(p);

function pop(array){
    array.pop();
    return array;
}
 
console.log(pop(fruits));

function concat(a1, a2){
    let newarray;
    newarray = a1.concat(a2);
  return newarray;
}

cars = ['lambo', 'mesarati', 'ferrari']  

console.log(concat(fruits, cars));

function index(array, ele){
    i= array.indexOf(ele);
    return i;
}

console.log(index(cars, 'mesarati'));

function slice(a){
    n = a.slice(2, 5);
    return n;

}

num =[1,2,3,4,5,6,7,8,9,0,11,12,13,14,15,16,17,18,19,20];

console.log(slice(num));

function toUpper(string){
    p = string.toUpperCase();
    console.log(p);

}

toUpper("manoj");

function toUpper(string){
    p = string.toUpperCase();
    console.lop(p);
    
}

toUpper('upper');








