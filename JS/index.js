const btnGiam= document.getElementById("btnGiam");
const btnReset = document.getElementById("btnReset");
const btnTang = document.getElementById("btnTang");
const labelvalue = document.getElementById("labelID")
let count =0;
btnGiam.onclick = function(){
    count--;
    labelvalue.textContent =count;
}
btnReset.onclick = function(){
    count=0;
    labelvalue.textContent =count;
}
btnTang.onclick = function(){
    count++;
    labelvalue.textContent =count;
}