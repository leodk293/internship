const container = document.querySelector(".container");
const input = document.querySelector("input");
let companies = [];

fetch('https://api.jsonbin.io/v3/qs/6685e666e41b4d34e40cc141')
    .then(response => response.json())
    .then(data => {
        companies = data.record;
        displayCompanies(companies);
        console.log(tab);
    })
    .catch(error => {
        console.error('Erreur:', error);
    });


function displayCompanies(companies) {
    container.innerHTML = '';
    companies.forEach(element => {
        const newTab = document.createElement("div");
        newTab.classList.add("row");

        const p1 = document.createElement("p");
        p1.classList.add("prgh");
        p1.textContent = element.__EMPTY;

        const p2 = document.createElement("p");
        p2.classList.add("prgh");
        p2.textContent = element.__EMPTY_2;

        const p3 = document.createElement("p");
        p3.classList.add("prgh");
        p3.textContent = element.__EMPTY_3;

        const p4 = document.createElement("p");
        p4.classList.add("prgh");
        p4.textContent = element.__EMPTY_4;

        newTab.appendChild(p1);
        newTab.appendChild(p2);
        newTab.appendChild(p3);
        newTab.appendChild(p4);

        container.appendChild(newTab);
    });
}

document.addEventListener('DOMContentLoaded', displayCompanies);

input.addEventListener("input", filterCompany);

function filterCompany() {
    const searchTerm = input.value.toLowerCase();
    const filteredCompanies = companies.filter(company => {
        return company.__EMPTY.toLowerCase().includes(searchTerm);
    });
    displayCompanies(filteredCompanies);
}

