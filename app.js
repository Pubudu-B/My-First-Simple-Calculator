let result1="";
let result2="";
let sum=0;
let operator="";


function ans(){
        result1 =parseInt(result1);
        result2 =parseInt(result2);
        
         switch(operator){

        case "+":
            result1 =result1+result2;
            operator =0;
            result2=0;
            result2="";
            sum+=result1;
            input_field.innerHTML = result1;
            break;
        
        case "-":
            result1 =result1-result2;
            operator =0;
            result2=0;
            result2="";
            sum+=result1;
            input_field.innerHTML = result1;
            break;
        
        case "*":
            result1 =result1*result2;
            operator =0;
            result2=0;
            result2="";
            sum+=result1;
            input_field.innerHTML = result1;
            break;

        case "/":
            result1 =result1/result2;
            operator =0;
            result2=0;
            result2="";
            sum+=result1;
            input_field.innerHTML = result1;
            break;
    }
}

function reset(){
    result1 =0;
    result1="";
    result2 =0;
    result2="";
    sum =0;
    operator="";
    input_field.innerHTML=0;
}
let input_field = document.getElementById("input_field");
function number00(){
    let number;
    number = new Number(document.getElementById("number0").value=0);
   
    if(
            operator == "*" ||
            operator == "/" ||
            operator == "+" ||
            operator == "-" ){
        
        result2+=number;
        input_field.innerHTML = result2;
        number=0;   
    }else{          
            if(sum == 0){
                result1+=number;
                input_field.innerHTML = result1;
            }else{
                input_field.innerHTML = number;
                result1=number;
            }            
    }
    
}
function number01(){
    let number;
    number = new Number(document.getElementById("number1").value=1);
   
    if(
            operator == "*" ||
            operator == "/" ||
            operator == "+" ||
            operator == "-" ){
        
        result2+=number;
        input_field.innerHTML = result2;
        number=0;   
    }else{          
            if(sum == 0){
                result1+=number;
                input_field.innerHTML = result1;
            }else{
                input_field.innerHTML = number;
                result1=number;
            }            
    }
    
}

function number02(){
    let number;
    number = new Number(document.getElementById("number2").value=2);
   
    if(
            operator == "*" ||
            operator == "/" ||
            operator == "+" ||
            operator == "-" ){
        
        result2+=number;
        input_field.innerHTML = result2;
        number=0;   
    }else{          
            if(sum == 0){
                result1+=number;
                input_field.innerHTML = result1;
            }else{
                input_field.innerHTML = number;
                result1=number;
            }            
    }
    
}
function number03(){
    let number;
    number = new Number(document.getElementById("number3").value=3);
    input_field.innerHTML = number;


    if(
            operator == "*" ||
            operator == "/" ||
            operator == "+" ||
            operator == "-" ){
        
        result2+=number;
        input_field.innerHTML = result2;
        number=0;   
    }else{          
            if(sum == 0){
                result1+=number;
                input_field.innerHTML = result1;
            }else{
                input_field.innerHTML = number;
                result1=number;
            }            
    }    
}

function number04(){
    let number;
    number = new Number(document.getElementById("number4").value=4);
    input_field.innerHTML = number;

    if(
            operator == "*" ||
            operator == "/" ||
            operator == "+" ||
            operator == "-" ){
        
        result2+=number;
        input_field.innerHTML = result2;
        number=0;   
    }else{          
            if(sum == 0){
                result1+=number;
                input_field.innerHTML = result1;
            }else{
                input_field.innerHTML = number;
                result1=number;
            }            
    }    
}
function number05(){
    let number;
    number = new Number(document.getElementById("number5").value=5);
    input_field.innerHTML = number;

    if(
            operator == "*" ||
            operator == "/" ||
            operator == "+" ||
            operator == "-" ){
        
        result2+=number;
        input_field.innerHTML = result2;
        number=0;   
    }else{          
            if(sum == 0){
                result1+=number;
                input_field.innerHTML = result1;
            }else{
                input_field.innerHTML = number;
                result1=number;
            }            
    }    
}
function number06(){
    let number;
    number = new Number(document.getElementById("number6").value=6);
    input_field.innerHTML = number;

    if(
            operator == "*" ||
            operator == "/" ||
            operator == "+" ||
            operator == "-" ){
        
        result2+=number;
        input_field.innerHTML = result2;
        number=0;   
    }else{          
            if(sum == 0){
                result1+=number;
                input_field.innerHTML = result1;
            }else{
                input_field.innerHTML = number;
                result1=number;
            }            
    }    
}
function number07(){
    let number;
    number = new Number(document.getElementById("number7").value=7);
    input_field.innerHTML = number;

    if(
            operator == "*" ||
            operator == "/" ||
            operator == "+" ||
            operator == "-" ){
        
        result2+=number;
        input_field.innerHTML = result2;
        number=0;   
    }else{          
            if(sum == 0){
                result1+=number;
                input_field.innerHTML = result1;
            }else{
                input_field.innerHTML = number;
                result1=number;
            }            
    }    
}
function number08(){
    let number;
    number = new Number(document.getElementById("number8").value=8);
    input_field.innerHTML = number;

    if(
            operator == "*" ||
            operator == "/" ||
            operator == "+" ||
            operator == "-" ){
        
        result2+=number;
        input_field.innerHTML = result2;
        number=0;   
    }else{          
            if(sum == 0){
                result1+=number;
                input_field.innerHTML = result1;
            }else{
                input_field.innerHTML = number;
                result1=number;
            }            
    }    
}
function number09(){
    let number;
    number = new Number(document.getElementById("number9").value=9);
    input_field.innerHTML = number;

    if(
            operator == "*" ||
            operator == "/" ||
            operator == "+" ||
            operator == "-" ){
        
        result2+=number;
        input_field.innerHTML = result2;
        number=0;   
    }else{          
            if(sum == 0){
                result1+=number;
                input_field.innerHTML = result1;
            }else{
                input_field.innerHTML = number;
                result1=number;
            }            
    }    
}
function operationMultiply(){
    operator = document.getElementById("operator").value="*";
    input_field.innerHTML = operator; 
      
}
function operationDivide(){
    operator = document.getElementById("operator").value="/";
    input_field.innerHTML = operator;   
}
function operationAddition(){
    operator = document.getElementById("operator").value="+";
    input_field.innerHTML = operator;   
}
function operationSubtraction(){
    operator = document.getElementById("operator").value="-";
    input_field.innerHTML = operator;   
}
