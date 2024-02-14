function calculateTriangleArea() {
    // for base calculation 
    const bInputField = document.getElementById('tri-b');
    const b = parseFloat(bInputField.value);
    // for height calculation
    const hInputField = document.getElementById('tri-h');
    const h = parseFloat(hInputField.value);
    // calculate triangle area 
    const area = 0.5 * b* h;

    // show the result 
    document.getElementById('triangle-area').innerText = area;
}