function loadPublicServers(nickname, users) {
    const serversTable = document.getElementById("serversTable");
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${nickname}</td><td><span class="material-symbols-outlined" style="font-size: 25px; float: left;">account_circle</span>${users}/2</td><td><button join>Dołącz</button></td>`
    serversTable.appendChild(tr);
}
loadPublicServers("test");

