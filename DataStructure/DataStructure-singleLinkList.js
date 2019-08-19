// Piece of data - val
//reference to next node

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            //this.head = this.tail;
       }else {
            this.tail.next = newNode;
            this.tail = newNode;        
       }
            
        this.length++;
        return this;
    }
    traverse(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
    unshift(val){

        let newNode = new Node(val);
        
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            //this.head = this.tail;
       }else {
            newNode.next = this.head ;
            this.head = newNode;
                 
       }

        this.length++;
        return this;

    }
    shift(){
        if(!this.head)
            return undefined;

        let current = this.head;
        this.head =this.head.next;
        this.length--;

        if(this.length === 0){
            this.tail = null;
        }
        return current;
    }

    pop(){
        if(!this.head)
            return undefined;
        let current = this.head;
        let prev    = current;

        while(current.next){
           prev = current;
           current = current.next;
        }
       
        console.log("I reached the tail");
        if(this.length === 1){
            this.head = null;
            this.tail = null;        
        }else{                
            this.tail = prev;
            this.tail.next = null;                    
        }
        this.length--;
        return current;
    }

    get(index){
        if(index < 0 || index >= this.length)
            return null;
        
        if(index === 0){            
            return this.head;
        }
        
        if(index === (this.length-1)){            
            return this.tail;
        }

        let current = this.head;
        
        for (let i = 1; i < this.length-1; i++){
            current = current.next;
            if(index === i)
                return current;
        }

        return null;

    }

    set(index,value){
        

        let current = this.get(index);
        
        if(current){
            current.val = value;
            return true;
        }

        return false;
    }

    remove(index){
        if(index === 0){
            return this.shift();         
        }

        if(index < 0 || index >= this.length)
            return undefined;

        let prevNode = this.get(index-1);
        let removeNode = prevNode.next;

        if(index === this.length-1){
            this.pop();
        }else{
            prevNode.next = removeNode.next;
            this.length--;
        }
        

        return removeNode;


    }

    print(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

    reverse(){
        if(this.length === 0)
            return null;

        //let newHead = this.tail;
        let currentNode  = this.head;
        this.head        = this.tail;
        this.tail        = currentNode;
        let prevNode     = null;
        let nextNode;

        for(let i = 0; i < this.length; i++){
            
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
  
        }
        

        return this;
    }

    insert(index,value){

        if(index < 0 || index > this.length)
            return false;

        if(index === this.length){
            return !!this.push(value)
            //return this.push(value)? true: false;
        }

        if(index === 0){
            return !!this.unshift(value);
            //return this.unshift(value)? true: false;
        }
        
        let newNode =  new Node(value);
        let prevNode = this.get(index -1);
        let nextNode  = this.get(index);

        prevNode.next = newNode;
        newNode.next = nextNode;

        return true;



    }
}

var list = new SinglyLinkedList();

//let first = new Node("Hi");
//first.next = new Node("there");
//first.next.next = new Node("dude");