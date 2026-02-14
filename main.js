document.addEventListener("DOMContentLoaded", function () {

  const container = document.getElementById("templateContainer");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  function displayTemplates(data) {
    container.innerHTML = "";

    if (data.length === 0) {
      container.innerHTML = "<p>No templates found.</p>";
      return;
    }

    data.forEach(template => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h3>${template.title}</h3>
        <p>${template.content}</p>
        <button onclick="copyText('${template.content.replace(/'/g, "\\'")}')">Copy</button>
      `;

      container.appendChild(card);
    });
  }

  function populateCategories() {
    const categories = [...new Set(templates.map(t => t.category))];

    categories.forEach(cat => {
      const option = document.createElement("option");
      option.value = cat;
      option.textContent = cat;
      categoryFilter.appendChild(option);
    });
  }

  function filterTemplates() {
    const searchValue = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filtered = templates.filter(t => {
      const matchesSearch =
        t.title.toLowerCase().includes(searchValue) ||
        t.content.toLowerCase().includes(searchValue);

      const matchesCategory =
        selectedCategory === "" || t.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    displayTemplates(filtered);
  }

  searchInput.addEventListener("input", filterTemplates);
  categoryFilter.addEventListener("change", filterTemplates);

  populateCategories();
  displayTemplates(templates);

});

function copyText(text) {
  navigator.clipboard.writeText(text);
  alert("Copied!");
}
