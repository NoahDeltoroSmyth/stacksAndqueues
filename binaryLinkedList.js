class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // didn't realize I was accidentally working on the second
    // challenge during the first round.
    //FIRST ATTEMPT
    // check for a next property to left
    if (!this.left) {
      this.left = null;
      //       //   //check if can be attached to right
    } else if (!this.right) {
      this.right = node;
    } else {
      //       //   // finally add value to the node available
      this.right.add(node);
    }
  }
}
//SECOND ATTEMPT
// check if left is not null and if so add node to left
// if (this.left != null) {
//   this.left.add(node);
//   //otherwise check if right is not null and add to right
// } else {
//   this.right.add(node);
// }

const B = new BinaryTreeNode("B");
const A = new BinaryTreeNode("A");
const C = new BinaryTreeNode("C");
const D = new BinaryTreeNode("D");

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);
