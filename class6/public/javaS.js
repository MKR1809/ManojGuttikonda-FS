function push(array, element){
    array.push(element);
    return array

}

fruits = ['apple', 'banana', 'mango'];
console.log(push(fruits, 'guava'));

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

function toLower(string){
    p = string.toLowerCase();
    console.log(p);
    
}

toLower('upper');

function split(string){
    if(string.includes(',') == true){
        return console.log(string.split(','));
    }
    else if(string.includes(' ') == true){
        return console.log(string.split(' '));
    }
    else if(string.includes('|') == true){
        return console.log(string.split('|'));
    }
    else
       console.log("There is nothing to split");
}

split("My Name Is Manoj");
split('what,is,your,hobby');















