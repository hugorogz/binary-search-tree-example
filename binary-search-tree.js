class BinarySearchTree {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    traversePreOrder() {
        // shows keys in order, by walking:
        // - root
        // - left subtree nodes
        // - right subtree nodee (do this recursively)
        console.log(this.value)

        if(this.left) {
            this.left.traversePreOrder()
        }

        if(this.right) {
            this.right.traversePreOrder()
        }
    }  

    traverseInOrder() {  
        // shows keys in order, by walking:
        // - nodes in left subtree
        // - root
        // - nodes in right subtree
        if(this.left) {
            this.left.traverseInOrder()
        }

        console.log(this.value)

        if(this.right) {
            this.right.traverseInOrder()
        }
    }  

    traversePostOrder() {
        // shows keys in order, by walking:
        // - nodes in left subtree
        // - nodes in right subtree
        // - root
       if(this.left) {
           this.left.traversePostOrder()
       }

       if(this.right) {
           this.right.traversePostOrder()
       }

       console.log(this.value)
    }      

    insert(value) {
        const newNode = new BinarySearchTree(value)

        // insert nodes to left subtree
        if(newNode.value < this.value && this.left === null) {
            this.left = newNode
        } else if(newNode.value < this.value && this.left) {
            this.left.insert(newNode.value)
        } 

        // insert nodes to right subtree
        if(newNode.value > this.value && this.right === null) {
            this.right = newNode
        } else if(newNode.value > this.value && this.right) {
            this.right.insert(newNode.value)
        }
    }

    contains(value) {
        if(value === this.value) {
            return true
        } 

        const isValueInLeft = this.left && 
            this.left.contains(value) ? true : false

        const isValueInRight = this.right && 
            this.right.contains(value) ? true : false

        return isValueInLeft || isValueInRight
    }

    bstHeight() {
        let left = this.left ? this.left.bstHeight() : -1
        let right =  this.right ? this.right.bstHeight() : -1

        if(left > right) {
            return left += 1
        } else {
            return right += 1
        }


    }

}


// const myBST = new BinarySearchTree(10)

// myBST.insert(8)
// myBST.insert(13)
// myBST.insert(3)
// myBST.insert(1)
// myBST.insert(3)
// myBST.insert(5)
// myBST.insert(0)

// myBST.insert(5)
// myBST.insert(11)
// myBST.insert(3)
// myBST.insert(4)

// myBST.insert(11)
// myBST.insert(9)
// myBST.insert(2)
// myBST.insert(8)
// myBST.insert(3)
// myBST.insert(1)

// console.log(myBST)
// console.log("traversePreOrder", myBST.traversePreOrder())
// console.log("traverseInOrder", myBST.traverseInOrder())
// console.log("traversePostOrder", myBST.traversePostOrder())