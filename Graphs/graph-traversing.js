class Graph{
    constructor(){
        this.adjacencyList = {};
       
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex])
         this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2){
       
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
          this.adjacencyList[vertex1].push(vertex2); 
          this.adjacencyList[vertex2].push(vertex1);
        }else{
            if(!this.adjacencyList[vertex1])
                console.log(`Nodo ${vertex1} no existe` );

            if(!this.adjacencyList[vertex2])
                console.log(`Nodo ${vertex2} no existe` );
        }
            
    }


    removeEdgeRecursive(vertex1, vertex2){
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdgeRecursive(adjacentVertex, vertex);
        }
        delete this.adjacencyList[vertex];
    }


    removeEdge(vertex1,vertex2){


        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
            );

            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
            );
        }else{
            if(!this.adjacencyList[vertex1])
            console.log(`Nodo ${vertex1} no existe` );

            if(!this.adjacencyList[vertex2])
                console.log(`Nodo ${vertex2} no existe` );
        }

    }

    removeVertex(vertex){
        //let keys = Object.keys(this.adjacencyList);

        if(this.adjacencyList[vertex]){
            while(this.adjacencyList[vertex].length){
                const adjVertex = this.adjacencyList[vertex].pop();
                this.removeEdge(vertex,adjVertex);
                //console.log(adjVertex);
            }
        }else{
            console.log(`No existe el nodo ${vertex}`);
        }

       

        delete this.adjacencyList[vertex];
    }

     breadthFirstReversed(start){
        const q          = [start];
        const visited    = {};
        const resultList = []; 
        let vertex;

        visited[start]   = true;

        while(q.length){
             vertex = q.shift();
             resultList.push(vertex);

             this.adjacencyList[vertex].slice().reverse().forEach(neighbor => {
                if(!visited[neighbor]){
                   visited[neighbor] = true;
                   q.push(neighbor);
                }
             });
 
        }

        return resultList;
    }

    breadthFirst(start){
       
        const resultList = []; 

        if(!this.adjacencyList[start]){
            console.log(`Nodo ${start} no esta definido`);
            return resultList;
        }

        const queue      = [start];
        const visited    = {};

        let vertex;

        visited[start]   = true;

        while(queue.length){
             vertex = queue.shift();
             resultList.push(vertex);

             this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                   visited[neighbor] = true;
                   queue.push(neighbor);
                }
             });
 
        }

        return resultList;
    }

    DFS_iterative(start){

        const visited    = {};
        const resultList = [];

        if(!this.adjacencyList[start]){
            console.log(`Nodo ${start} no esta definido`);
            return resultList;
        }

        const stack      = [start];
         
        let vertex;

        visited[start]   = true;

        while(stack.length){
             vertex = stack.pop();
             resultList.push(vertex);

             this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                   visited[neighbor] = true;
                   stack.push(neighbor);
                }
             });
 
        }

        return resultList;
        
    }
    
    depthFirstRecursive(start){
        
        const resultList = [];
        const visited    = {};
        //We have to define it again in order to be recognized in the helper function
        const adjacencyList = this.adjacencyList;

        (function DFS(vertex){
          

            if(!vertex)
                return null;

            visited[vertex] = true;
            resultList.push(vertex);

            adjacencyList[vertex].forEach( neighbor => {
                if(!visited[neighbor]){               
                    return DFS(neighbor);
                }
            });

        })(start);

     

        return resultList;
    }

    hasCycle(start){
        
        const visited    = {};
        //We have to define it again in order to be recognized in the helper function
        const adjacencyList = this.adjacencyList;
        let totalCycles = 0;
        let itHasCycle = false;

        const findCicle = function DFS(vertex, parent){
            if(!vertex)
                return null;

            visited[vertex] = true;

            adjacencyList[vertex].forEach( neighbor => {
                if(visited[neighbor] && neighbor != parent){
                    totalCycles++;
                    itHasCycle = true;
                }
                
                if(!visited[neighbor])              
                    findCicle(neighbor,vertex);

                
            });
            
        };
        
        findCicle(start,start);

        console.log(`Se encontraron ${totalCycles} `);

        return has
      
    }
}


let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")


//              A
//           /     \
//         B        C
//         |        |
//         D ------ E
//          \      /
//              F
//