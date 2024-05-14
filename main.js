

const btn=document.querySelector("button");
const display=document.querySelector('input');

function calculator(value){
 display.value+=value;

}

function result(){
    let exprssion=  display.value;

 let result = eval(exprssion);

 display.value=result;

}

function clearAll(){
    display.value="";
}
