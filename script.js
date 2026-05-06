let files = [];

const search = document.getElementById("search");
const results = document.getElementById("results");

fetch("files.json")
  .then(res => res.json())
  .then(data => {
    files = data;
    render(files);
  });

search.addEventListener("input", () => {
  const query = search.value.toLowerCase();

  const filtered = files.filter(file =>
    file.toLowerCase().includes(query)
  );

  render(filtered);
});

function render(list) {
  results.innerHTML = "";

  if (list.length === 0) {
    results.innerHTML = "<li><a>No results</a></li>";
    return;
  }

  list.forEach(file => {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = file;
    link.textContent = file.split("/").pop();

    li.appendChild(link);
    results.appendChild(li);
  });
}
