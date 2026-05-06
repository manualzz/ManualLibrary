var files = [];

var search = document.getElementById("search");
var results = document.getElementById("results");

fetch("files.json")
  .then(function(res) { return res.json(); })
  .then(function(data) {
    files = data;
    show(files);
  });

search.addEventListener("input", function() {
  var query = search.value.toLowerCase();

  var filtered = files.filter(function(file) {
    return file.toLowerCase().indexOf(query) !== -1;
  });

  show(filtered);
});

function show(list) {
  results.innerHTML = "";

  if (list.length === 0) {
    results.innerHTML = "<li>No results</li>";
    return;
  }

  for (var i = 0; i < list.length; i++) {
    var li = document.createElement("li");

    var link = document.createElement("a");
    link.href = list[i];
    link.textContent = list[i].split("/").pop();

    li.appendChild(link);
    results.appendChild(li);
  }
}
