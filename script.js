function display(input){
    document.getElementById("result").value+=input;
}
function clearResult(){
    document.getElementById("result").value='';
}
function deleteLastChar(){
    var result=document.getElementById("result").value;
    document.getElementById("result").value=result.slice(0,-1);
}
function calculate(){
    var result=document.getElementById("result").value;
    var calculation=eval(result);
    document.getElementById("result").value=calculation;
}