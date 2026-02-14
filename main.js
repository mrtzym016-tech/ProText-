const container = document.getElementById("cards");
const searchInput = document.getElementById("searchInput");

function renderCards(filter="all", search=""){
container.innerHTML="";

DATA
.filter(item =>
  (filter==="all" || item.category===filter) &&
  item.text.toLowerCase().includes(search.toLowerCase())
)
.forEach(item=>{
  const card=document.createElement("div");
  card.className="card";
  card.innerHTML=`
  <p>${item.text}</p>
  <button onclick="navigator.clipboard.writeText('${item.text}')">Copy</button>
  `;
  container.appendChild(card);
});
}

if(searchInput){
searchInput.addEventListener("input", e=>{
renderCards("all", e.target.value);
});
}

renderCards();
