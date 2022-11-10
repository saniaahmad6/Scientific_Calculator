function del(){
    var x=document.querySelector("#screen").value;
    document.querySelector("#screen").value=x.substr(0,x.length-1);
}