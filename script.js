const canvas = document.querySelector("#tutorial");
const ctx = canvas.getContext("2d");

// ctx.fillStyle = "rgb(200, 0, 0)";
// ctx.fillRect(10, 10, 50, 50);

// ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
// ctx.fillRect(30, 30, 100, 50);
// ctx.clearRect(25, 25, 10, 10);

// ctx.fillRect(25, 25, 100, 100);
// ctx.clearRect(45, 45, 60, 60);
// ctx.strokeRect(50, 50, 50, 50);

// ctx.beginPath();
// ctx.moveTo(75, 50);
// ctx.lineTo(100, 75);
// ctx.lineTo(100, 25);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
// ctx.moveTo(110, 75);
// ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
// ctx.moveTo(65, 65);
// ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
// ctx.moveTo(95, 65);
// ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
// ctx.stroke();

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 3; j++) {
//     ctx.beginPath();
//     const x = 25 + j * 50; // x coordinate
//     const y = 25 + i * 50; // y coordinate
//     const radius = 20; // Arc radius
//     const startAngle = 0; // Starting point on circle
//     const endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
//     const counterclockwise = i % 2 !== 0; // clockwise or counterclockwise

//     ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

//     for (let i = 0; i < 4; i++) {
//       for (let j = 0; j < 3; j++) {
//         ctx.beginPath();
//         const x = 25 + j * 50; // x coordinate
//         const y = 25 + i * 50; // y coordinate
//         const radius = 20; // Arc radius
//         const startAngle = 0; // Starting point on circle
//         const endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
//         const counterclockwise = i % 2 !== 0; // clockwise or counterclockwise

//         ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

//         if (i > 1) {
//           ctx.fill();
//         } else {
//           ctx.stroke();
//         }
//       }
//     }
//   }
// }

// Quadratic curves example
// ctx.beginPath();
// ctx.moveTo(75, 25);
// ctx.quadraticCurveTo(25, 25, 25, 62.5);
// ctx.quadraticCurveTo(25, 100, 50, 100);
// ctx.quadraticCurveTo(50, 120, 30, 125);
// ctx.quadraticCurveTo(60, 120, 65, 100);
// ctx.quadraticCurveTo(125, 100, 125, 62.5);
// ctx.quadraticCurveTo(125, 25, 75, 25);
// ctx.stroke();

// Cubic curves example
// ctx.beginPath();
// ctx.moveTo(75, 40);
// ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
// ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
// ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
// ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
// ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
// ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
// ctx.fill();

// roundedRect(ctx, 12, 12, 184, 168, 15);
// roundedRect(ctx, 19, 19, 170, 154, 9);
// roundedRect(ctx, 53, 53, 49, 33, 10);
// roundedRect(ctx, 53, 119, 49, 16, 6);
// roundedRect(ctx, 135, 53, 49, 33, 10);
// roundedRect(ctx, 135, 119, 25, 49, 10);

// ctx.beginPath();
// ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
// ctx.lineTo(31, 37);
// ctx.fill();

// for (let i = 0; i < 8; i++) {
//   ctx.fillRect(51 + i * 16, 35, 4, 4);
// }

// for (let i = 0; i < 6; i++) {
//   ctx.fillRect(115, 51 + i * 16, 4, 4);
// }

// for (let i = 0; i < 8; i++) {
//   ctx.fillRect(51 + i * 16, 99, 4, 4);
// }

// ctx.beginPath();
// ctx.moveTo(83, 116);
// ctx.lineTo(83, 102);
// ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
// ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
// ctx.lineTo(111, 116);
// ctx.lineTo(106.333, 111.333);
// ctx.lineTo(101.666, 116);
// ctx.lineTo(97, 111.333);
// ctx.lineTo(92.333, 116);
// ctx.lineTo(87.666, 111.333);
// ctx.lineTo(83, 116);
// ctx.fill();

// ctx.fillStyle = "white";
// ctx.beginPath();
// ctx.moveTo(91, 96);
// ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
// ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
// ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
// ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
// ctx.moveTo(103, 96);
// ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
// ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
// ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
// ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
// ctx.fill();

// ctx.fillStyle = "black";
// ctx.beginPath();
// ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
// ctx.fill();

// // A utility function to draw a rectangle with rounded corners.

// function roundedRect(ctx, x, y, width, height, radius) {
//   ctx.beginPath();
//   ctx.moveTo(x, y + radius);
//   ctx.arcTo(x, y + height, x + radius, y + height, radius);
//   ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
//   ctx.arcTo(x + width, y, x + width - radius, y, radius);
//   ctx.arcTo(x, y, x, y + radius, radius);
//   ctx.stroke();
// }

// ctx.beginPath();

// // Outer shape clockwise ⟳
// ctx.moveTo(0, 0);
// ctx.lineTo(75, 129.9);
// ctx.lineTo(150, 0);

// // Inner shape anticlockwise ↺
// ctx.moveTo(75, 20);
// ctx.lineTo(100, 60);
// ctx.lineTo(50, 60);

// ctx.fill();
const BASE64_HEADERS = {
  MP3: "data:audio/mpeg;base64,",
  PNG: "data:image/png;base64,",
};

// const p = new Path2D("M10 10 h 80 v 80 h -80 Z");
// ctx.fill(p);

async function drawMob(filename, ctx) {
  const json = await fetch(`${filename}.json`).then((res) => res.json());

  const img = new Image();
  const { basedata, width, height } = json.$$[1].$$[1];
  img.src = `${BASE64_HEADERS.PNG}${basedata}`;

  ctx.drawImage(img, 100, 100, width, height);
  // draw many in random locations
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * 800;
    const y = Math.random() * 800;
    ctx.drawImage(img, x, y, width, height);
  }

  // nGetImage() {
  //   if (typeof this.nBasedata === "string") {
  //     const img = new Image();
  //     img.src = `${BASE64_HEADERS.PNG}${this.nBasedata}`;
  //     this.nBasedata = img;
  //   }
  //   return this.nBasedata;
  // }
}

drawMob("hazel", ctx);
