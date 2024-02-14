function calculateRectangleArea() {
    // read rectangle width and length
    const recWidth = parseFloat(document.getElementById('rec-w').value);
    const recLength = parseFloat(document.getElementById('rec-i').value);

    // calcultate area
    const recArea = recLength * recWidth;
    document.getElementById('rectangle-area').innerText = recArea;
    console.log(recArea);
}