function togglePower() {
    // Toggle the power-on class on the outer-rim element
    document.querySelector('.outer-rim').classList.toggle('power-on');

    // Play the power-on sound
    var powerSound = document.getElementById('powerSound');
    powerSound.play();
}