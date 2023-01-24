class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else return false;
  }

  isEmpty() {
    // ... your code goes here
    if (this.stackControl.length == 0) {
      return true; 
    } else return false;
  }

  push(item) {
    // ... your code goes here
    let checkTrue = this.canPush()
    if (checkTrue == true) {
      this.stackControl.push(item);
      return this.stackControl;
    } else throw new Error('STACK_OVERFLOW');
  }

  pop() {
    // ... your code goes here
    let checkTrue = this.isEmpty ();
    if (checkTrue == false) {
      let deletedItem = this.stackControl.pop();
      return deletedItem;
    } else throw new Error('STACK_UNDERFLOW');
  }

  display() {
    // ... your code goes here
    return this.stackControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
