const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize || 30
		this.heap = new MaxHeap()
		this.data = []
		this.priority = []
	}

	push(data, priority) {
		if (this.data.length >= this.maxSize) {
			return this.throw()
		}
		
		this.heap.push(0,1)
		if (this.data.length === 0) {
			this.data.push(data)
			this.priority.push(priority)
			console.log ("Data=", this.data)
		} else {
			for (let item = 0; item < this.data.length; item++) {
				if (priority > this.priority[item]) {
					this.data.splice(item, 0, data)
					this.priority.splice(item, 0, priority)
					console.log ("Data=", this.data)
					return this.data
				}
			}

			this.data.push(data)
			this.priority.push(priority)
			console.log ("Data=", this.data)
		}

		return this
	}

	shift() {
		if (this.data.length === 0) {
			return this.throw()
		}

		this.priority.shift()
		this.heap.pop()
		return this.data.shift()
	}

	size() {
		return this.data.length
	}

	isEmpty() {
		return (this.data.length === 0)
	}

}

module.exports = PriorityQueue;
