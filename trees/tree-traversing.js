class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){

         if(this.root == null)
            this.root = new Node(value);

         else{

             return this.addNode(value, this.root);
             
        }
    return this;
    }

    delete(value){

        if(this.root === null){
            console.log("Arbol vacio");
            return false;
        }
        if(this.root.left == null && this.root.right == null){
            console.log("Arbol con una sola hoha");
            if(this.root.value === value){                
                this.root = null;
                return true;
            }else{
                console.log("Hoja con valor diferente")
                return false;
            }
        }

        let nodoPadre = this.root;
        let current = this.root;
        let find = false;


        while(!find && current){

            if(value < current.value){
                nodoPadre = current;
                current = current.left;
            }else if(value > current.value){
                 nodoPadre = current;
                current = current.right;
            }else{
                find = true;
            }            
        }

        if (find){

            //Hoja
            if(current.left == null && current.right === null){
                if(nodoPadre.value > current.value)
                    nodoPadre.left = null;
                else
                    nodoPadre.right = null;

                return true;
            }else{

                //Nodo con un solo hijo
                if(current.left === null){
                    if(nodoPadre.value > current.value){
                        nodoPadre.left = current.right;
                    }else{
                        nodoPadre.right = current.right;
                    }
                 //Nodo con un solo hijo
                }else if(current.right === null){
                    if(nodoPadre.value > current.value){
                        nodoPadre.left = current.left;
                    }else{
                        nodoPadre.right = current.left;
                    }
                //Nodo con dos hijos
                }else{
                    let lastNode = current.right;
                    let prevNode = lastNode;
                    while(lastNode.left != null && lastNode.right != null){
                            prevNode = lastNode;
                            lastNode = lastNode.left;
                    }

                    current.value = lastNode.value;
                    prevNode.left = null;
                    return true;

                }
                return true;
            }
        }else{
            console.log("No se encontro nodo")
            return false;
        }
        currentNode = this.root;
    }

    find(value, currentNode = this.root){
        if(currentNode === null)
            return undefined;
            
        if(currentNode.value === value){
            return currentNode;
        }else if(value > currentNode.value){
            return this.find(value,currentNode.right)

        }else{
            return this.find(value,currentNode.left)
        }

    }

    contains(value){
       
       if(this.find(value) === undefined)
            return false;
       else
          return true;

    }

    
    DFS(tipo){
        let visited = [];
        let current = this.root;
        tipo = tipo.toUpperCase();

        function traverse(node){
           if(tipo === 'PREORDER' || tipo === 'PRE')
                visited.push(node.value);
           if(node.left) traverse(node.left);
           
           if(tipo =='INORDER' || tipo =='ORDER')
                visited.push(node.value);
           
           if(node.right) traverse(node.right);


           if(tipo =='POSTORDER' || tipo =='POST')
                visited.push(node.value);

           return visited;

        }
        traverse(current);

       return visited;

    }

    BFS(){
        let queue   = [];
        let visited = [];
        let nodo = this.root;

        if( nodo === null)
            return visited;

         queue.push(nodo);

         while(queue.length){
             nodo = queue.shift();
             visited.push(nodo.value);

             if(nodo.left) queue.push(nodo.left);

             if(nodo.right) queue.push(nodo.right);
         }

         return visited;


    }
  

    addNode(value, currentNode){

        
         if(value > currentNode.value){
              if(currentNode.right == null){
                  currentNode.right = new Node(value);
                  return this;
              }else{
                  return this.addNode(value,currentNode.right);
              }
         }else if(value < currentNode.value){
             if(currentNode.left == null){
                currentNode.left = new Node(value);
                 return this;
             }else{
                  return this.addNode(value,currentNode.left);
              }
         }else{
             return undefined;
         }
            

    }
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFS("PRE");
tree.DFS("POST");