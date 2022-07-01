var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter.typeString('Join us for a healthier lifestyle!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Health is Wealth.")
    .pauseFor(1000)
    .deleteAll()
    .start();