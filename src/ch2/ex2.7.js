class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `Point: { x: ${this.x}, y: ${this.y} }`;
  }
}

function displayPoints(arr) {
  arr.forEach(function(item) {
    console.log(item);
  });
}

const p1 = new Point(1, 2);
const p2 = new Point(3, 5);
const p3 = new Point(2, 8);
const p4 = new Point(4, 4);
const points = [p1, p2, p3, p4];
displayPoints(points);

console.log("Push Point");
const p5 = new Point(12, -3);
points.push(p5);
displayPoints(points);

console.log("Shift Point");
points.shift();
displayPoints(points);
