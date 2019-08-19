
class Node{
    constructor(value){
        this.value = value;
        this.next = null;

    }
    
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value){
        let newNode = new Node(value);

        if(!this.first){
            this.first = newNode;
            this.last  = newNode;
        }else{
            newNode.next = this.first;
            this.first = newNode;
        }


        return ++this.size;
       
    }
    pop(){

        if(!this.first)
            return null;

        let current = this.first;

        if(this.size === 1){
            this.first = null;           
        }
        
        this.first = current.next;
        

       // current.next = null;

        this.size--;

        return current.value;

    }
}