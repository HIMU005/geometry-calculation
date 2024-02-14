function calculateParallelogramArea() {
    // read rectangle width and length
    const paraBase = parseFloat(document.getElementById('para-b').value);
    const paraHeight = parseFloat(document.getElementById('para-h').value);

    // calcultate area
    const paraArea = paraBase * paraHeight;
    document.getElementById('parallelogram-area').innerText = paraArea;
    console.log(paraArea);
}