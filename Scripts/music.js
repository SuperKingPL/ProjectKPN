document.onclick = () => {
    var msc = new Audio("/Audio/A%20Tale%20of%20Magic.mp3");
    msc.volume = 0.3;
    msc.play();
    document.onclick = () => {};
}