const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null
		this.parentNodes = []

		this.parent = null
		this.left = null
		this.right = null
	}

	push(data, priority) {
		let node = new Node(data, priority)

		this.insertNode(node)
		this.shiftNodeUp(node)
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.parentNodes.length		
	}

	isEmpty() {
		return (this.parentNodes.length === 0)
	}

	clear() {
		this.parentNodes = []
		this.root = null
		return this	
	}

	insertNode(node) {
		if (this.root === null) {
			return this.root = node
		}
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
