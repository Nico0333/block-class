class Block {
    constructor([length, width, height]) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    getWidth() {
        return this.width;
    }

    getLength() {
        return this.length;
    }

    getHeight() {
        return this.height;
    }

    getVolume() {
        return this.length * this.width * this.height;
    }

    getSurfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

// Пример использования
const myBlock = new Block([2, 4, 6]);
console.log("Width:", myBlock.getWidth()); // 4
console.log("Length:", myBlock.getLength()); // 2
console.log("Height:", myBlock.getHeight()); // 6
console.log("Volume:", myBlock.getVolume()); // 48
console.log("Surface Area:", myBlock.getSurfaceArea()); // 88