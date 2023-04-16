const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {
  constructor() {
    this.tRoot = null;
  }

  root() {
    return this.tRoot;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.tRoot) {
      this.tRoot = newNode;
      return;
    }
    let currNode = this.tRoot;
    while (currNode) {
      if (newNode.data < currNode.data) {
        if (!currNode.left) {
          currNode.left = newNode;
          return;
        }
        currNode = currNode.left;
      } else {
        if (!currNode.right) {
          currNode.right = newNode;
          return;
        }
        currNode = currNode.right;
      }
    }
  }

  has(data) {
    let currNode = this.tRoot;
    while (currNode) {
      if (currNode.data === data) {
        return true;
      } else if (data < currNode.data) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currNode = this.tRoot;
    while (currNode) {
      if (data === currNode.data) {
        return currNode;
      } else if (data < currNode.data) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }
    return null;
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!node) {
        return null;
      }
      if (data === node.data) {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.tRoot = removeNode(this.tRoot, data);
  }

  min() {
    if (!this.tRoot) {
      return null;
    }
    let currNode = this.tRoot;
    while (currNode.left) {
      currNode = currNode.left;
    }
    return currNode.data;
  }

  max() {
    if (!this.tRoot) {
      return null;
    }
    let currNode = this.tRoot;
    while (currNode.right) {
      currNode = currNode.right;
    }
    return currNode.data;
  }
}

module.exports = {
  BinarySearchTree
};