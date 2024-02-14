function calculatePentagonArea() {
    // read pentagon p and b
    const pentagonP = parseFloat(document.getElementById('pen-p').value);
    const pentagonB = parseFloat(document.getElementById('pen-b').value);
    // calcultate area
    const pentagonArea = 0.5 * pentagonB * pentagonP;

    document.getElementById('pentagon-area').innerText = pentagonArea;
    console.log(pentagonArea);
}