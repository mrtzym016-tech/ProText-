const container = document.getElementById("templateContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function renderTemplates(data){
container.innerHTML="";
data.forEach(t=>{
let card=document.createElement("div");
card.className="card";
card.innerHTML=`
<h3>${t.category} - ${t.sub}</h3>
<p>${t.text}</p>
<button onclick="copyText('${t.text}')">Copy</button>
<button onclick="saveFavorite(${t.id})">Save</button>
`;
container.appendChild(card);
});
}

function copyText(text){
navigator.clipboard.writeText(text);
alert("Copied!");
}

function saveFavorite(id){
let favs=JSON.parse(localStorage.getItem("favorites"))||[];
if(!favs.includes(id)){
favs.push(id);
localStorage.setItem("favorites",JSON.stringify(favs));
alert("Saved!");
}
}

searchInput.addEventListener("input",()=>{
let value=searchInput.value.toLowerCase();
let filtered=templates.filter(t=>t.text.toLowerCase().includes(value));
renderTemplates(filtered);
});

renderTemplates(templates);
