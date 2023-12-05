// eslint-disable-next-line max-classes-per-file
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(root) {
    this.root = null;
  }

  buildTree(array, start, end) {
    // eslint-disable-next-line radix
    const mid = parseInt((start + end) / 2);
    const node = new Node(array[mid]);
    node.left = this.buildTree(array, start, mid - 1);
    node.right = this.buildTree(array, mid + 1, end);
    return node;
  }

  // method that creates a new node to be inserted
  insertData(data) {
    const newNode = new Node(data);
    // if root is null
    if (this.root === null) {
      // add node to the tree and make root
      this.root = newNode;
      // otherwise call insert node
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // method to insert node in tree
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      // if left is null
      if (node.left === null) {
        // insert here
        node.left = newNode;
      } else {
        // if left is not null, recur until null is found
        this.insertNode(node.left, newNode);
      }
    } else {
      // if right is null
    } if (node.right === null) {
      // insert node here
      node.right = newNode;
    } else {
      // if right is not null, recur until null is found
      this.insertNode(node.right, newNode);
    }
  }
}
// eslint-disable-next-line no-unused-vars
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  // eslint-disable-next-line no-console
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};
const bst = new Tree();
bst.insertData(1);
bst.insertData(5);
bst.insertData(9);
bst.insertData(14);
bst.insertData(26);
bst.insertData(33);
bst.insertData(47);
bst.insertData(164);
bst.insertData(5921);
// eslint-disable-next-line no-console
console.log(bst);
