class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      if (this.root === null) {
        this.root = new Node(value);
        return this;
      } else {
        var current = this.root;
        while (true) {
          if (value < current.value) {
            if (current.left === null) {
              current.left = new Node(value);
              return this;
            } else {
              current = current.left;
            }
          } else if (value > current.value) {
            if (current.right === null) {
              current.right = new Node(value);
              return this;
            } else {
              current = current.right;
            }
          }
        }
      }
    }
  
      get(node,value){
         if(node.value === value)
          return node;
         
         if(value < node.value){
             if(!node.left)
                  return undefined;
             else{
                 return this.get(node.left,value);
             }
         }else{
             if(!node.right)
                  return undefined;
             else{
                 return this.get(node.right,value);
             }
         }
      }
  
      find(value){
          if(!this.root){
              return undefined;
          }
  
         let getNode = this.get(this.root,value);
          return getNode;
  
  
      }
  
  
  
      DFSInOrder(){
  
         let arrInOrder = [];
  
        const DFSIn = (node) => {
              
  
              if(node.left){
                  DFSIn(node.left);                
              }
              arrInOrder.push(node.value)
  
              if(node.right){
                  DFSIn(node.right);                
              }
  
              
  
  
        };
  
        if(!this.root)
          return arrInOrder;
  
        
  
        DFSIn(this.root);
  
        return arrInOrder;
      }
  
  
      DFSPostOrder(){
  
         let visited = [];
  
        const DFSPost = (node) => {
              
  
              if(node.left){
                  DFSPost(node.left);                
              }
  
              if(node.right){
                  DFSPost(node.right);                
              }
  
              visited.push(node.value)
  
  
        };
  
        if(!this.root)
          return visited;
  
        
  
        DFSPost(this.root);
  
        return visited;
      }
  
      DFSPreOrder(){
  
        
        let visited = [];
  
        const DFSPre = (node) => {
          if(!node.left && !node.right)
             return true;
  
              if(node.left){
                  visited.push(node.left.value);
                  DFSPre(node.left)
              }
              if(node.right){
                  visited.push(node.right.value);
                  DFSPre(node.right)
              }
        };
  
        if(!this.root)
          return visited;
  
        visited.push(this.root.value)
  
        DFSPre(this.root);
  
        return visited;
      }
  
      breadthFirstSearch(){
  
        let visited = [];
        let queue   = [];
        let nodo;
  
        if(!this.root)
          return visited;
  
          queue.push(this.root);
  
          while (queue.length) {
  
            nodo = queue.shift();
            visited.push(nodo.value);
  
            if(nodo.left)
               queue.push(nodo.left);
            if(nodo.right)
               queue.push(nodo.right);
             
          };
  
          return visited;
      }
  
      findSecondLargest() {
        if(!this.root)
          return undefined;
        
        if(!this.root.left && !this.root.right)
          return this.root.value;
  
         let arr = this.DFSInOrder();
         
         return arr[arr.length-2];
      }
  
      isBalanced() {
  
            if(!this.root)
  
      return undefined;
  
    function heightOfTree(root){
  
      if(!root)
  
        return 0;
  
      var left = heightOfTree(root.left);
  
      var right = heightOfTree(root.right);
  
      if(left > right) return left+1;
  
      else return right+1;
  
    }
  
    function helper(root){
  
     if(!root)
  
      return true;
  
      var l = heightOfTree(root.left);
  
      var r = heightOfTree(root.right);
  
      //console.log("diff " + Math.abs(l -r) + " data " + root.data);
  
      return (Math.abs(l-r) <=1 && helper(root.left) && helper(root.right));
  
    }
  
    return helper(this.root);
  
          }
  
     
  
  }
  
  
  //var bst = new BinarySearchTree()
  //bst.insert(15).insert(20).insert(10).insert(12);
  //var foundNode = bst.find(20)
  //bst.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50);
  //bst.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50).insert(14).insert(11);
  //bst.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50).insert(60).insert(30).insert(25).insert(23).insert(24).insert(70);
  //bst.insert(22).insert(49).insert(85).insert(66).insert(95).insert(90).insert(100).insert(88).insert(93).insert(89)
  //bst.insert(50).insert(25).insert(75).insert(12).insert(30).insert(60).insert(85).insert(52).insert(70)
  //