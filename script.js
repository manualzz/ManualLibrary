let files = [];

const search = document.getElementById("search");
const results = document.getElementById("results");
fetch("files.json")
  .then(res => res.json())
  .then(data => {
    files = data;
  });

search.addEventListener("input", () => {
  const query = search.value.toLowerCase();
  results.innerHTML = "";

  const filtered = files.filter(file =>
    file.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    results.innerHTML = "<li>No results found</li>";
    return;
  }

  filtered.forEach(file => {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = file;
    link.textContent = file.split("/").pop();

    li.appendChild(link);
    results.appendChild(li);
  });
});
