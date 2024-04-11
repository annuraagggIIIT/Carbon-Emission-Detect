// Function to calculate fees based on plane weight and land area
function calculateFees(planeWeight, landArea) {
    // Define fee constants
    const baseFeePerSquareKm = 0.0000005; // Base fee per square kilometer
    const weightMultiplier = 0.00000005; // Fee multiplier per kilogram of plane weight

    const areaFee = baseFeePerSquareKm * landArea;
    const weightFee = weightMultiplier * planeWeight;

    return areaFee + weightFee;
}

// Sample cases
const cases = [
    { Name: 'Drone', weight: 10, landArea: 2 },
    { Name: 'Small', weight: 162, landArea: 2 },
    { Name: 'Medium', weight: 80000, landArea: 2 },
    { Name: 'Large', weight: 120000, landArea: 2 },
    { Name: 'Boeing', weight: 164000, landArea: 2 }
];

// Display sample cases
const resultsTableBody = document.getElementById('resultsTableBody');
cases.forEach((item) => {
    const fees = calculateFees(item.weight, item.landArea);
    const row = `<tr>
                    <td>${item.Name}</td>
                    <td>${item.weight}</td>
                    <td>${item.landArea}</td>
                    <td>$${fees.toFixed(10)}</td>
                </tr>`;
    resultsTableBody.innerHTML += row;
});

// Calculate fees based on user input
document.getElementById('calculateBtn').addEventListener('click', () => {
    const weightInput = document.getElementById('weight');
    const areaInput = document.getElementById('area');
    const weight = parseFloat(weightInput.value);
    const area = parseFloat(areaInput.value);

    if (!isNaN(weight) && !isNaN(area)) {
        const fees = calculateFees(weight, area);
        const row = `<tr>
                        <td>User Input</td>
                        <td>${weight}</td>
                        <td>${area}</td>
                        <td>$${fees.toFixed(10)}</td>
                    </tr>`;
        resultsTableBody.innerHTML += row;
        weightInput.value = '';
        areaInput.value = '';
    } else {
        alert('Please enter valid numbers for weight and area.');
    }
});
