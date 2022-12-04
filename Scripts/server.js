const API_ENDPOINT = "/ProjectKPN"

// Init Microplay Interactive database.
const firebaseConfig = {
    apiKey: "AIzaSyD25mTTtHpz8J9NdnR5K0KQMtF6dV-z3YA",
    authDomain: "microplay-interactive.firebaseapp.com",
    databaseURL: "https://microplay-interactive-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "microplay-interactive",
    storageBucket: "microplay-interactive.appspot.com",
    messagingSenderId: "692363352652",
    appId: "1:692363352652:web:ad1dfbe94742540bca72e9",
    measurementId: "G-XN49KQM0LZ"
};

const db = new RTDatabase();

function createGame(authorName) {
    const nowDatetime = Date.now();
    db.add(API_ENDPOINT + "/rooms/", {author: authorName, players: 1, playersMax: 2, created: nowDatetime});
}
document.getElementById("serversTable").innerHTML = "";
// Public servers
function getPublicServers(res = () => {}) {
    db.get(API_ENDPOINT + "/rooms", (e) => {
        res(Object.entries(e));
    });
}
function addServersToList() {
    getPublicServers((e) => {
        document.getElementById("serversTable").innerHTML = "";
        for (let i in e) {
            addPublicServer(e[i][1]["author"], e[i][1]["players"])
        }
    });
}
db.onChange(API_ENDPOINT + "/rooms", "child_added", () => {
    addServersToList();
});
db.onChange(API_ENDPOINT = "/rooms", "child_removed", () => {
    addServersToList();
});