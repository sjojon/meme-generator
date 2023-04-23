view();
function view() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <h1>Meme Generator</h1>
        <input type="text" placeholder="Tema"><hr>
        <div>${temp}</div>
        <div>Valgt bilde: ${selectedImg}</div><br>
        <div>Antall: <input type="number"></div><br>
        <div>Dager: <input type="number"></div><br>
        <button onclick="generate()">Generer</button><br><br>
        <div>Tekst: ${output}</div>
    `;
}