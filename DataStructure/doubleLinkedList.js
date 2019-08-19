class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.length = 0;
        this.head   = null;
        this.tail   = null;
    }

    push(value){
        let nodo = new Node(value);
        if(this.length === 0){
            this.head = nodo;
            this.tail = nodo;
        }else{
            this.tail.next = nodo;
            nodo.prev = this.tail;
            this.tail = nodo;
        }

        this.length++;
        return this;
    }

    pop(){

        if(this.length === 0)
            return undefined;

        let popNode  = this.tail;
        let prevNode = this.tail.prev;
        
        if(this.length == 1){
            this.tail = null;
            this.head = null;
        }else{

            prevNode.next = null;
            this.tail = prevNode;
            popNode.prev = null;

        }

        this.length--;

        
        return popNode;

    }

    shift(){
        if(this.length === 0){
            return undefined;
        }

        let shiftNode = this.head;

        if(this.length === 1){            
            this.head = null;
            this.tail = null;
        }else{

            let nextNode = shiftNode.next;
            nextNode.prev = null;
            shiftNode.next = null;
            this.head = nextNode;

        }

        this.length--;

        return shiftNode;

    }

    unshift(value){
        let newNode = new Node(value);

        if(this.length === 0){
            return this.push(value);
        }

        
        this.head.prev = newNode;
        newNode.next  = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }

    set(index,value){
        let node = this.get(index);
        if(node != null){
            node.val = value;
            return true;
        }
        return false;

    }

    get(index){

        if(index < 0 || index >= this.length)
            return null;

       
        let count,current;
       

        if(index <= Math.floor(this.length/2)){
            current = this.head;
            count = 0;
           
            while(count != index){              
                current = current.next;
                count++;
            }
        }else{
          
            current = this.tail;
            count = this.length-1;
             while(count > index){
                current = current.prev;
                count--;
            }
        }

        return current;


    }

    reverse(){
        if(this.length === 0)
            return false;
        
        if(this.length === 1)
            return true;

       let count = 0;
       let prevNode = null;
       let current = this.head;
       let nextNode = this.head.next;

       this.head = this.tail;
       this.tail = current;
       
      
       
               
       while(count < this.length){
           
           current.next = prevNode;
           current.prev = nextNode;

           count++;

           
           prevNode = current;
           current = nextNode;
           if(nextNode != null)
              nextNode = nextNode.next;
       }

       this.tail.next = null;

       return true;

      
    }

    insert(index,value){

        //

        if(index < 0 || index > length)
            return false;

         if(index === 0)
            return !!this.unshift(value);

          if(index === index -1)
            return !!this.push(value);
           
          
          let newNode = new Node(value);
          let moveNode = this.get(index);

          moveNode.prev.next = newNode;
          newNode.prev = moveNode.prev;
          newNode.next = moveNode;
          moveNode.prev = newNode;

          this.length++;

          return true;


    }

    remove(index){

        if(index < 0 || index >= this.length) return undefined;

        if(index === 0) return this.shift();
         
        if(index === this.length-1) return this.pop();

        let removedNode = this.get(index);
        let prevNode    = removedNode.prev;
        let nextNode    = removedNode.next;
       
        prevNode.next = nextNode;        
        nextNode.prev = prevNode;
       
        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        
        return removedNode;
    }

    get2(index = false) {
    if (index < 0 || index >= this.length || typeof index === false) return;
 
    const loopFromEnd = Math.floor(this.length / 2) < index;
 
    let node = this.head;
    let direction = 'next';
    let loopTo = index; 
 
    if (loopFromEnd) {
      node = this.tail;
      direction = 'prev';
      loopTo = (this.length - 1) - index;
    }
 
    for (let i = 0; i < loopTo; i++) 
      node = node[direction];
 
    return node;
  };

}

let list = new DoublyLinkedList();