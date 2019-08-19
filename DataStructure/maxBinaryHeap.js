
class MaxBinaryHeap{
    constructor(){
         this.values = [];
    }


    
    // For any index of an array n:
    //Left child: 2n +1
    //Right child: 2n +1

    //For any child node at index n...
    //its parent is at index (n-1)/2   (floored)

    insert(value){
           this.values.push(value);   

           this.bubbleUp();
           

           return true;
             
    }

    bubbleUp(){
       let idx = this.values.length-1;
       const element = this.values[idx];
let totalComparaciones = 1;
       while(idx > 0){
           let parentIdx = Math.floor((idx-1)/2);
           let parent = this.values[parentIdx];
           console.log(`comparacion ${totalComparaciones++}`);
           
           if(element < parent) break;

           this.values[idx]       = parent;
           this.values[parentIdx] = element;
           idx = parentIdx;              
                        
       }
    }

    getChildren(n){

        let leftIndex = 2*n +1;
        let rightIndex = 2*n +2;
        return [this.values[leftIndex],this.values[rightIndex]];
    }

    getFather(n){
        let fatherIndex = Math.floor((n-1)/2);
        return this.values[fatherIndex];
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

                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild > element) || 
                   (swap !== null && rightChild > leftChild)) {                
                    swap = rightChildIdx;
                }
            }


            if(swap=== null) break;

            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;


        }

    }
    extractMax(){

        const max = this.values[0];
        const sinkVal = this.values.pop();

       if(this.values.length > 0){         
           this.values[0] = sinkVal;
           this.sinkDown();
       }

       
        return max;
       

    }
}

let heap = new MaxBinaryHeap();
heap.insert(86);

heap.insert(85);
heap.insert(77);

heap.insert(37);
heap.insert(83);
heap.insert(57);
heap.insert(74);

heap.insert(18);
heap.insert(34);
heap.insert(55);
heap.insert(38);
heap.insert(44);
heap.insert(45);
heap.insert(69);
heap.insert(70);

heap.insert(2);
heap.insert(9);
heap.insert(3);
heap.insert(25);
heap.insert(19);
heap.insert(36);
heap.insert(26);
heap.insert(1);

heap.insert(7);
heap.insert(33);
heap.insert(17);
heap.insert(4);
heap.insert(24);
heap.insert(42);
heap.insert(23);
heap.insert(21);