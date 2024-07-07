function checkSpeed() {
    let speed = prompt("Enter the speed of the car (in km/h):");

    if (speed === null || speed.trim() === "") {
        console.log("No input provided.");
        return;
    }

    speed = Number(speed);

    if (isNaN(speed) || speed < 0) {
        console.log("Please enter a valid speed.");
        return;
    }

    console.log(`Entered speed: ${speed}`);

    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;

    let response;

    if (speed <= speedLimit) {
        response = "Ok";
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log(`Demerit Points: ${demeritPoints}`);

        if (demeritPoints > maxDemeritPoints) {
            response = `License suspended. Demerit Points: ${demeritPoints}`;
        } else {
            response = `Demerit Points: ${demeritPoints}`;
        }
    }

    console.log("Response:", response);
    alert(response);
}

checkSpeed();

