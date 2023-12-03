/* eslint-disable max-classes-per-file */
class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor(array, root) {
    this.array = array;
  }
}
const array1 = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(array1);
