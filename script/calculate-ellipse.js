function calculateEllipseArea() {
    // read ellipse p and b
    const ellipseA = parseFloat(document.getElementById('ellipse-a').value);
    const ellipseB = parseFloat(document.getElementById('ellipse-b').value);
    // calcultate area
    const ellipseArea = 3.1416 * ellipseA * ellipseB;

    document.getElementById('ellipse-area').innerText = ellipseArea;
    console.log(ellipseArea);
}