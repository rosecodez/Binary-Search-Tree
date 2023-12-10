/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line max-classes-per-file
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor(array, root) {
    this.array = array;
    this.root = null;
  }

  // build tree method
  buildTree(array, start, end) {
    // eslint-disable-next-line radix
    const mid = parseInt((start + end) / 2);
    const node = new Node(array[mid]);
    node.left = this.buildTree(array, start, mid - 1);
    node.right = this.buildTree(array, mid + 1, end);
    return node;
  }

  // method that creates a new node to be inserted
  insert(data) {
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

  // delete method
  delete(data) {
    this.root = this.deleteNode(this.root, data);
  }

  deleteNode(node, data) {
    // if the root is null then tree is empty
    if (node === null) return null;

    // if data to be delete is less than root data
    if (data < node.data) {
      // move to left subtree
      node.left = this.removeNode(node.left, data);
      return node;
    }

    // if data to be deleted is greater than root data
    if (data > node.data) {
      // move to right subtree
      node.right = this.removeNode(node.right, data);
      return node;
    }

    // delete node with no children
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }

    // deleting node with one children
    if (node.left === null) {
      node = node.right;
      return node;
    }

    if (node.right === null) {
      node = node.left;
      return node;
    }

    // delete node with two children
    const x = this.findMinNode(node.right);
    node.data = x.data;

    node.right = this.deleteNode(node.right, x.data);
    return node;
  }

  // method that accepts a value and return the node with the given value
  find(node, data) {
    // if tree is empty
    if (node === null) {
      // return null
      return null;
    }

    // if data is less than node data
    if (data < node.data) {
      // move left
      return this.find(node.left, data);
    }

    // if data is more than node data
    if (data > node.data) {
      // move right
      return this.search(node.right, data);
    }
    // if data is equal to node data, return node
    console.log(node);
    return node;
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
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};
// function that accepts a random optional
// callback function as its parameter

// it should traverse the tree in breadth-first level order
// and provide each node as argument to the callback
const levelOrder = function (root) {
  const result = [];

  const queue = [];

  queue.push(root);

  while (queue.length) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode.data);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevel);
  }
  return result;
};
// function that return nodes in non-decreasing order
function inOrder(node) {
  // if node is null return
  if (node == null) {
    return;
  }
  // recur children
  inOrder(node.left);
  // print data
  console.log(`${node.data} `);
  inOrder(node.right);
}

// preorder function
function preOrder(node) {
  // if node is null return
  if (node == null) {
    return;
  }
  // order difference, we first console log the data, then recur
  console.log(`${node.data} `);
  preOrder(node.left);
  preOrder(node.right);
}

// postorder function
function postOrder(node) {
  if (node == null) {
    return;
  }
  postOrder(node.left);
  postOrder(node.right);
  console.log(`${node.data} `);
}
// height function that represents the number of edge
// in the longest path frm a given node to a leaf node
function height(node) {
  // if node is null 0
  if (node == null) {
    return 0;
  }
  const leftSide = height(node.left);
  const rightSide = height(node.right);
  if (leftSide > rightSide) {
    return (leftSide + 1);
  }
  return (rightSide + 1);
}
// depth function that accepts a node and returns its depth
// depth is defined as the number of edges in the path
// from a given node to the three's root note
function depth(root, x) {
  if (root == null) {
    return -1;
  }

  let distance = -1;
  // if x is current node
  if ((root.data === x)
        // check if x is in the left subtree
        || (distance = depth(root.left, x)) >= 0
        // check if x is in the right subtree
        || (distance = depth(root.right, x)) >= 0)

  // Return depth of the node
  { return distance + 1; }

  return distance;
}
function isBalanced(root) {
  if (root == null) {
    return true;
  }
  const lh = height(root.left);
  const rh = height(root.right);
  if (Math.abs(lh - rh) <= 1 && isBalanced(root.left) === true && isBalanced(root.right) === true) {
    return true;
  }
  return false;
}
// function that traverses the bst and stores the nodes\
function storeNodes(root, array) {
  if (root == null) {
    return;
  }
  storeNodes(root.left, array);
  array.push(root);
  storeNodes(root.right, array);
}
function rebalance(root) {
  const array = [];
  storeNodes(root, array);
  const n = array.length;
  return this.buildTree(array, 0, n - 1);
}
const bst = new Tree();
bst.insert(1);
bst.insert(4);
bst.insert(9);
bst.insert(14);
bst.insert(26);
bst.insert(33);
bst.insert(47);
bst.insert(164);
bst.insert(5921);
bst.delete(1);
bst.find(14);
console.log(bst);

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
console.log('level order');
console.log(levelOrder(root));
console.log('inorder traversal');
console.log(inOrder(root));
console.log('preorder traversal');
console.log(preOrder(root));
console.log('postorder traversal');
console.log(postOrder(root));
console.log(`Tree height is: ${height(root)}`);
const k = 25;
console.log(`Depth: ${depth(root, k)}`);
if (isBalanced(root)) {
  console.log('tree is balanced');
} else (console.log('tree is not balanced'));

root = new Tree(root);
console.log('Rebalance tree: ');
preOrder(root);

// Create a binary search tree from an array of random numbers < 100
const a = [];
for (i = 0; i < 100; ++i) a[i] = i;

function createRandom(arr) {
  let tmp; let cur; let
    tp = arr.length;
  if (tp) {
  // Run until tp becomes 0.
    while (--tp) {
    // Generating the random index
      cur = Math.floor(Math.random() * (tp + 1));

      // Getting the index(cur) value in variable(tmp)
      tmp = arr[cur];

      // Moving the index(tp) value to index(cur)
      arr[cur] = arr[tp];

      // Moving back the tmp value to
      // index(tp), Swapping is done
      arr[tp] = tmp;
    }
  }
  return arr;
}
const BST = new Tree(createRandom(a).sort());
console.log(BST);
