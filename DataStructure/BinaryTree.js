function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

function show() {
	return this.show;
}

function BST() {
	this.root = null;
	this.insert = insert;
}

function insert(data) {
	let n = new Node(data, null, null);
	if (this.root === null) {
		this.root = n;
	} else {
		let current = this.root;
		let parent;
		while(true) {
			parent = current;
			if(data < current.data) {
				current = current.left;
				if(current == null) {
					parent.left = n;
					break;
				}
			}else{
				current = current.right;
				if(current == null) {
					parent.right = n;
					break;
				}
			}
		}
	}
}

function inOrder(node) {
	if(!(node == null)) {
		inOrder(node.left);
		console.log(node.data);
		inOrder(node.right)
	}
}

let bst = new BST();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(3);
bst.insert(99);
bst.insert(22);

inOrder(bst.root);