function isEven(num){
    if(num%2== 0){
     return true;
    }
    else
     return false;
 }
 
console.log(isEven(7));
//document.getElementByClass('function').innerHTML= isEven(7);

studentData = [{name: 'john', age:17}, {name: "Mike", age:18}, {name:'david', age:17}];

for(i=0; i<studentData.length; i++){
    console.log(studentData[i].name);

}

users = [{name:'mike', email:"mike@google.com"}, {name:'john', email:"john@google.com"}, {name:'jeevan', email:"jeevan@google.com"}]

for(i=0; i<users.length; i++){
   if(users[i].name == 'john'){
    console.log(users[i].email);
   }
}

function isPos(x){
    if (x > 0){
        return true;
    }else
      return false;    
    
}

console.log(isPos(-2));


function grades(grade){
if(grade>= 60){
    console.log('pass');
}else
    console.log('fail');
}

grades(85);


//isPalindrome(word)

store=[1,2,3,4,5];
let sum =0;
for(let i=0; i<store.length; i++){
    sum += store[i];
    
}
console.log(sum);

let name = "Alice";

if(name === 'Alice'){
    console.log("hello, Alice!");
}else
    console.log("hello, Stranger!");



books = [{title:'1984', author:'George Orwell'}, {title:'Lord of the Rings', author:'J.R.R. Tolkien'},  {title:'The Great Gatsby', author:'F. Scott Fitzgerald'}];
for(let i=0; i<books.length; i++){
    if(books[i].title ==='The Great Gatsby'){
        console.log(books[i].author);
    }
}

function calculateArea(lenth, width){
  area = lenth*width;
  console.log("area = "+ area);
}

calculateArea(4,5);

function isPrime(n){
    if(n<2){
        return false;
    }
    for(i=2; i<=n; i++){
        if(n%i === 0){ 
            return false;

        } 
            
    }
    return true;
}

primeNumbers(20);


function ispalindrome(name){
    for(i=0; i<name.length; i++){
        if(name[i] !== name[name.length-1-i]){
     return console.log("Not a Palindrome");
    }
}return console.log("palindrome")
}

ispalindrome('racecar')