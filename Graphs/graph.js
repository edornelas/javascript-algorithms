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
                this.removeEdge(vertex,adjVertex)
                //console.log(adjVertex);
            }
        }else{
            console.log(`No existe el nodo ${vertex}`);
        }

       

        delete this.adjacencyList[vertex];
    }
    
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Honk Kong");
g.addEdge("Dallas","Tokyo")
g.addEdge("Dallas","Aspen")
g.addEdge("Honk Kong","Tokyo")
g.addEdge("Dallas","Honk Kong")
g.addEdge("Los Angeles","Honk Kong")
g.addEdge("Los Angeles","Aspen")
