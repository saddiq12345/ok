
function add() {

    document.getElementById('khan').innerHTML="isdp";
}




let counter='0';
let Element=document.getElementById('khan');
function addone() {
counter++;
Element.innerHTML=counter



}
function reset(){
    counter=0;
    Element.innerHTML=counter
}



function OddEven(){
    addone()
    if (counter%2==0)
    {document.getElementById('talha').innerHTML= 'Even';}
else
{document.getElementById('talha').innerHTML= 'odd';}
}
 function table(){
    document.getElementById("talha").innerHTML="";
    for(let baba=1; baba<11; baba++){
        document.getElementById("talha").innerHTML+="2 x "
        +baba + "=" +2*baba+"<br>"
    }
 }

function table1(){
    document.getElementById("talha").innerHTML='';
    for(let ss=1; ss<16; ss++){
        document.getElementById("talha").innerHTML+=" 3 x"
        +  ss + "=" +3*ss+"<br>"
    } 

}
function table2(){
    document.getElementById("talha").innerHTML='';
    for(let kk=1; kk<16; kk++){
        document.getElementById("talha").innerHTML+=" 4 x"
        +  kk + "=" +4*kk+"<br>"
    } 

}
function table3(){
    document.getElementById("talha").innerHTML='';
    for(let ko=1; ko<16; ko++){
        document.getElementById("talha").innerHTML+=" 5 x"
        +  ko + "=" +5*ko+"<br>"
    } 

}
    