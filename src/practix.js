const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

// canvas.addEventListener('mousemove', (e) => {
//     ctx.beginPath();
//     ctx.arc(e.x,e.y,5,0,Math.PI * 2, true);
//     ctx.fill();
// });



// function degToRad(degrees){
//     var pi = Math.PI;
//     return degrees * (pi/180);
// }

// const DTR = (deg) => {
//     return (deg / 180) * Math.PI;
// };


let atoms = [];

const animate = () => {
    atoms.forEach((atom, index) => {
        atom.updateSpeed();
        atom.updateRadius();

        if (atom.radius < 0.3) {
            atoms.slice(index, 1);
        }

        atom.draw();
    });
    requestAnimationFrame(animate);
}

animate();

canvas.addEventListener('click', function (e) {
    for (let i = 0; i < 20; i++) {
        atoms.push(new Atom(e.x, e.y));
    }
});

class Atom {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 6 + 2;
        this.speedX = Math.random() * 5 - 2.5;
        this.speedY = Math.random() * 5 - 2.5;
    }

    updateSpeed() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    updateRadius() {
        this.radius -= 0.05;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}
