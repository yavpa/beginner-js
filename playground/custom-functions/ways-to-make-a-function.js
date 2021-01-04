/**
 * First class citizen (functions);
 * JS hoists normal function declaration - moves them first, for difference than the function expression
 *  
 *  
 */  

//  Normal way to declare function 
// function doctorize(firstName){
//     return `Dr. ${firstName}`;
// }

//  Anonymous function
// function (firstName) {
//     return `Dr. ${firstName}`;
// }

//  Function Expression
// const doctorize = function (firstName) {
//     return `Dr. ${firstName}`;
// }

//  Arrow function - short syntax, one liner; they are anonymous;
// regular
// function inchToCM(inches){
//     return inches * 2.54;
// }

//  arrow - if the param is only one we can miss the '()'
const inchToCM = inches => inches * 2.54;
//const inchToCM = (inches) => inches * 2.54;

const add = (a, b = 3) => (a+b);

// returning an object

// function makeABaby(first, last){
//     const baby = {
//         name : `${first} ${last}`,
//         age: 0
//     }
//     return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

//  IIFE
//  Immediately invoked function expression

(function(age){
    return `You are cool and ${age}`;
})(); 

//  Methods!!! - function that lives inside an object

const yav = {
    name : 'Yav Par',
    //  Method
    sayHi : function(){
        return `Hey ${this.name}`;
    },
    //  Short Hand Method
    yellHi(){
        console.log('HEY YAVVVV');
    },
    //  Arrow function; arrow function don't have scope of this.
    wisperHi: () => (console.log('hi yav, im a mouse')),
}

//  Callback functions
//  click callback

const button = document.querySelector('.click');

button.addEventListener('click', function(){
    console.log('Nice Job!!!');
});

//  Timer callback
setTimeout(function(){
    console.log('DONE! Time to eat!');
}, 1000);