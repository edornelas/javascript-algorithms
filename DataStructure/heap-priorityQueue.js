class Node{
    constructor(value,prio){
        this.val = value;
        this.priority = prio;
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }

    dequeue(){
        const min = this.values[0];
        const sinkVal = this.values.pop();

       if(this.values.length > 0){         
           this.values[0] = sinkVal;
           this.sinkDown();
       }

       
        return min;
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while(true){
            let leftChildIdx = 2 * idx +1;
            let rightChildIdx = 2 * idx +2;

            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];

                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild.priority < element.priority) || 
                   (swap !== null && rightChild.priority < leftChild.priority)) {                
                    swap = rightChildIdx;
                }
            }


            if(swap=== null) break;

            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;


        }

    }

    enqueue(value,prio){
        
       let newNode = new Node(value,prio);
       this.values.push(newNode);   


       this.bubbleUp();


       return true;
             
    }

    bubbleUp(){
       let idx = this.values.length-1;
       const element = this.values[idx];

       while(idx > 0){
           let parentIdx = Math.floor((idx-1)/2);
           let parent = this.values[parentIdx];
           if(element.priority >= parent.priority) break;
           this.values[parentIdx] = element;
           this.values[idx] = parent;
           idx = parentIdx;                                           
       }
       
    }
}