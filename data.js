/*const container = document.querySelector("container");

fetch('https://api.jsonbin.io/v3/qs/6685e666e41b4d34e40cc141')
    .then(response => response.json()) // Convertir la réponse en JSON
    .then(data => {
        //console.log(data); // Utiliser les données
        const tab = data.record;
        console.log(tab)

        tab.array.forEach(element => {
            const newTab = document.createElement("div");
            const newTabHtml = <div class = "row">
                <p>{element.__EMPTY}</p>
                <p>{element.__EMPTY_2}</p>
                <p>{element.__EMPTY_3}</p>
                <p>{element.__EMPTY_4}</p>
            </div>

            newTab.innerHTML = newTabHtml

            container.appendChild(newTab)

        });
    })
    .catch(error => {
        console.error('Erreur:', error); // Gérer les erreurs
    });
*/

const container = document.querySelector(".container");

fetch('https://api.jsonbin.io/v3/qs/6685e666e41b4d34e40cc141')
    .then(response => response.json()) // Convertir la réponse en JSON
    .then(data => {
        const tab = data.record;
        console.log(tab);

        tab.forEach(element => {
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
    })
    .catch(error => {
        console.error('Erreur:', error); 
    });

