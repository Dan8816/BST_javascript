function BinarySearchTree() {
    this.root = null;
    }
    
    BinarySearchTree.prototype.postOrderTraversal = function (root) {
    
    if (root.left) {
        this.postOrderTraversal(root.left);
    } 
    if (root.right) {
        this.postOrderTraversal(root.right);
    }
    console.log(root.data);
    
    };
    
    var BST = new BinarySearchTree();
    BST.insertNode(10);
    BST.insertNode(15);
    BST.insertNode(5);
    BST.insertNode(2);
    BST.insertNode(3);
    BST.insertNode(12);
    BST.insertNode(17);
    
    BST.postOrderTraversal(BST.root);
    
    <!-- pre-order -->
    'use strict';
    function BinarySearchTree() {
    this.root = null;
    }
    
    BinarySearchTree.prototype.preOrderTraversal = function (root) {
    console.log(root.data);
    
    if (root.left) {
        this.preOrderTraversal(root.left);
    } 
    if (root.right) {
        this.preOrderTraversal(root.right);
    }
    };
    
    
    var BST = new BinarySearchTree();
    BST.insertNode(10);
    BST.insertNode(15);
    BST.insertNode(5);
    BST.insertNode(2);
    BST.insertNode(3);
    BST.insertNode(12);
    BST.insertNode(17);
    
    BST.preOrderTraversal(BST.root);
    
    <!-- ES6(all 3 methods) -->
    'use strict';
    
    class BinarySearchTree {
    
    constructor() {
        this.root = null;
    }
    
    preOrderTraversal(root) {
    
        console.log(root.data);
        if (root.left) {
        this.preOrderTraversal(root.left);
        }
        if (root.right) {
        this.preOrderTraversal(root.right);
        }
    }
    
    postOrderTraversal(root) {
    
        if (root.left) {
        this.postOrderTraversal(root.left);
        }
        if (root.right) {
        this.postOrderTraversal(root.right);
        }
        console.log(root.data);
    
    }
    
    inOrderTraversal(root) {
    
        if (root.left) {
        this.inOrderTraversal(root.left);
        }
        console.log(root.data);
        if (root.right) {
        this.inOrderTraversal(root.right);
        }
    }
    }
    
    var BST = new BinarySearchTree();
    
    BST.insertNode(8);
    BST.insertNode(3);
    BST.insertNode(10);
    BST.insertNode(1);
    BST.insertNode(6);
    BST.insertNode(14);
    BST.insertNode(4);
    BST.insertNode(7);
    BST.insertNode(13);
    
    console.log(BST)
