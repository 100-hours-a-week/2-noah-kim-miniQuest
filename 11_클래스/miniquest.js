/** 1번 퀘스트 */

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

/** 2번 퀘스트 */
class Square extends Rectangle {
  isSquare() {
    if (this.width === this.height) {
      return true;
    }
    return false;
  }
}
