class Node {
	constructor(data, priority) {
		this.data = data
		this.priority = priority
		this.parent = null
		this.left = null
		this.right = null
	}

	appendChild(node) {
		if (this.left === null) {
			this.left = node
			node.parent = this		
		} else {
			if (this.right === null) {
				this.right = node
				node.parent = this
			}
		}

		return this
	}

	removeChild(node) {
		if (this.left == node) {
			this.left = null
			node.parent = null
		} else {
			if (this.right == node) {
				this.right = null
				node.parent = null
			} else {
				return this.throw()
			}
		}

		return this
	}

	remove() {
		if (this.parent !== null) {
			this.parent.removeChild(this)
		}
		
		if (this.left !== null) {
			this.left.parent = null
		} else {
			if (this.right !== null) {
				this.right.parent = null
			}
		}
		this.left = null
		this.right = null

		return this
	}

	swapWithParent() {
		if (this.parent === null) {
			return this
		}

		if (this.parent !== null) {
			if (this.parent.parent !== null) {

			}
			const root = this.parent.parent !== null ? this.parent.parent : null
			if (root !== null) {
				if (root.left === this.parent) {
					root.left = this
				} else {
					if (root.right === this.parent) {
						root.right = this
					}
				}
			}
			const parent = this.parent
			this.parent = root
			parent.parent = this

			if (parent.left === this) {
				let current = {...this}
				this.left = parent
				this.right = parent.right
				if (this.right !== null) {
					this.right.parent = this
				}

				parent.left = current.left
				parent.right = current.right
			} else {
				if (parent.right === this) {
					const current = {...this}
					this.right = parent
					this.left = parent.left
					if (this.left !== null) {
						this.left.parent = this
					}

					parent.left = current.left
					parent.right = current.right
				}
			}
		}

		return this
	}
}

module.exports = Node;
