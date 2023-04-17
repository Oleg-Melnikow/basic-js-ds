const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = addItem(this.rootTree, data);
    function addItem(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addItem(node.left, data);
      } else {
        node.right = addItem(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return search(this.rootTree, data);
    function search(node, value) {
      if (!node) {
        return false;
      }
      if (node.data === value) {
        return true;
      }
      return value < node.data
        ? search(node.left, value)
        : search(node.right, value);
    }
  }

  find(data) {
    return search(this.rootTree, data);
    function search(node, value) {
      if (!node) {
        return null;
      }
      if (node.data === value) {
        return node;
      }
      return value < node.data
        ? search(node.left, value)
        : search(node.right, value);
    }
  }

  remove(data) {
    this.rootTree = removeItem(this.rootTree, data);

    function removeItem(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeItem(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = removeItem(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeItem(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootTree) {
      return null;
    }
    let node = this.rootTree;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootTree) {
      return null;
    }
    let node = this.rootTree;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
