abstract class Shape {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    abstract getArea(): number;
}

class Circle extends Shape {
    radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {

    sideA: number;
    sideB: number;

    constructor(color: string, sideA: number, sideB: number) {
        super(color);
        this.sideA = sideA;
        this.sideB = sideB;
    }

    getArea(): number {
        return this.sideA * this.sideB;
    }
}

const circle = new Circle('red', 5);
console.log(circle.getArea());

const retangle = new Rectangle('blue', 4, 6);
console.log(retangle.getArea());

