const xlsx = require('xlsx');
const fs = require('fs');

// Lire le fichier Excel
const workbook = xlsx.readFile('tab.xlsx');

// Sélectionner la première feuille de calcul
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convertir la feuille de calcul en JSON
const jsonData = xlsx.utils.sheet_to_json(worksheet);

// Sauvegarder les données JSON dans un fichier
fs.writeFileSync('data.json', JSON.stringify(jsonData, null, 2));

console.log('Conversion terminée avec succès !');




