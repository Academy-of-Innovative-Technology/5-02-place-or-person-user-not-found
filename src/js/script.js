let peopleData = [];


function loadData() {
    fetch("src/api/api.json")
        .then(response => response.json())
        .then(data => {
            peopleData = data.results; // use the 'results' array
        })
        .catch(error => console.error("Error loading data:", error));
}


function displayResults(person) {
    const results = document.getElementById("results");

    results.innerHTML = `
        <div class="card p-3">
            <h2>${person.name}</h2>
            <img src="${person.images.person}" width="200" class="mb-3">
            <p><strong>Birth Date:</strong> ${person.birthDate}</p>
            <p><strong>Born In:</strong> ${person.bornIn}</p>
            <p><strong>Background:</strong> ${person.background.join(", ")}</p>
            <p><strong>Parents:</strong><br>
               Mother: ${person.parents.mother}<br>
               Father: ${person.parents.father}
            </p>
            <p><strong>Education:</strong> ${person.education.join(", ")}</p>
            <h4>Works / Awards</h4>
            ${person.images.works.map(work => `<img src="${work}" width="100" class="mr-2">`).join("")}
        </div>
    `;
}

function searchPerson() {
    const input = document.getElementById("country").value.toLowerCase();
    const found = peopleData.find(person => person.name.toLowerCase() === input);

    if (found) {
        displayResults(found);
    } else {
        document.getElementById("results").innerHTML = "<p>No person found.</p>";
    }
}


document.getElementById("search-btn").addEventListener("click", searchPerson);

loadData();
