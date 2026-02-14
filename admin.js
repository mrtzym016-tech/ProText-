function login(){
if(document.getElementById("pass").value==="12345"){
document.getElementById("panel").style.display="block";
}
}

function addTemplate(){
let newObj={
id:templates.length+1,
category:document.getElementById("cat").value,
sub:document.getElementById("sub").value,
text:document.getElementById("text").value
};
templates.push(newObj);
alert("Added!");
}

function exportData(){
let dataStr="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(templates));
let dl=document.createElement("a");
dl.setAttribute("href",dataStr);
dl.setAttribute("download","data.json");
dl.click();
}
