class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // implemented as in previous challenge
  }

  findPerson(name) {
    // Implement me!
    // going to be an if else statement with 3 conditions

    // first if node is found, return name
    if (name === this.value) {
      return findPerson(name);
    } else if (this.value < this.person) {
      // value is less than node value. so go left sub tree
      return findPerson(value, this.left);
    } else {
      // go right sub tree
      return findPerson(value, this.right);
    }
  }
}
const aPerson = {
  name: "Nelson",
  phone: "555-1212",
  address: "123 Main St",
};
