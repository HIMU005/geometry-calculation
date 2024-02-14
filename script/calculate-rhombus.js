function calculateRhombusArea() {
    // read rectangle width and length
    const rhombusD1 = parseFloat(document.getElementById('rhombus-d1').value);
    const rhombusD2 = parseFloat(document.getElementById('rhombus-d2').value);

    // calcultate area
    const rhombusArea = 0.5 * rhombusD1 * rhombusD2;
    document.getElementById('rhombus-area').innerText = rhombusArea;
    console.log(rhombusArea);
}