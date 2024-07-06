document.getElementById('calculateButton').addEventListener('click', function() {
    calculateDemeritPoints();
});

function calculateDemeritPoints() {
    const speed = parseInt(document.getElementById('speedInput').value);
    const speedLimit = 70;
    let demeritPoints = 0;
  
    if (speed > speedLimit) {
        demeritPoints = Math.floor((speed - speedLimit) / 5);
    }
  
    const resultElement = document.getElementById('result');
  
    if (demeritPoints > 0) {
        resultElement.innerText = `Points: ${demeritPoints}`;
        if (demeritPoints > 12) {
            resultElement.innerText += "\nLicense suspended";
        }
    } else {
        resultElement.innerText = "Ok";
    }
}
