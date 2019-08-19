//Basic pariority queue O(N*Log(N))
// just for this basic example
/*
class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val,priority){
        this.values.push({ val, priority });
        this.sort();
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort( (a,b) => a.priority - b.priority);
    }
}

*/

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

class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1,vertex2,weight){
        console.log(vertex1,vertex2);
        this.adjacencyList[vertex1].push({node:vertex2,weight}); 
        this.adjacencyList[vertex2].push({node:vertex1,weight});
    }

    findShortesPath(startVX,finishVX){
 
        const nodes = new PriorityQueue();

        //create an object distances
        const distances = {};

        //create an object called previous
        const previous  = {};
        const path      = [];

      
        let smallestVX;


        //Set each key to be every vertex in the adjacencyList with a value of Infinity
        // except for the starting vertex which should have a value of 0
        Object.keys(this.adjacencyList).forEach(vertex => {
            
            if(vertex !== startVX){
                distances[vertex] =Infinity;

                //add each vertex with a priority of infinity to the priority queue, except...
                nodes.enqueue(vertex,Infinity);
            }else{
                distances[vertex] = 0;
                //...the starting vertex, which should have a priority of 0 because that's where we begin
                nodes.enqueue(vertex,0);
            }
            
            //set each key to be every vertex in the adjacencyList with a value of null
            previous[vertex] = null;
        });

        
        //start looping as long as there is anything in the priority queue
        while(nodes.values.length){ 

            //deque a vertex from the priority queue
            smallestVX = nodes.dequeue().val;

            //If that vertex is the same as the ending vertex - we are done!
            if(smallestVX === finishVX){
                
                //Build path
                while(previous[smallestVX]){
                    //console.log(distances);
                    path.push(smallestVX);
                  
                    smallestVX = previous[smallestVX]
                }
                break;
            }
            //Otherwise loop through each value in the adjacencyList at that vertex
            else{
                if(smallestVX || distances[smallestVX] !== Infinity){

                    for(let indexNeighbor in this.adjacencyList[smallestVX]) {

                        //find neighboringNode
                        let nextNode = this.adjacencyList[smallestVX][indexNeighbor];

                        //calculate the distance to that vertex from the starting vertex                       
                        let candidate = distances[smallestVX] + nextNode.weight;

                        let nextNeighborVX = nextNode.node;

                        //If the distance is less than what is currently stores in our distances obj:
                        if(candidate < distances[nextNeighborVX]){
                            //updating the distances object with new lower distance 
                            distances[nextNeighborVX] = candidate;
                            //updating previous Obj to contain that vertex
                            previous[nextNeighborVX] = smallestVX;
                            //enqueue the vertex with the total distance from start node 
                            nodes.enqueue(nextNeighborVX,candidate);
                        }

                    }

                }
            }
        }

        console.log(path);
      
        return [path.concat(smallestVX).reverse(), distances[finishVX]];

    }
}

let g = new WeightedGraph();
g.addVertex("Lisboa");
g.addVertex("Madrid");
g.addVertex("Paris");
g.addVertex("Londres");
g.addVertex("Berlin");
g.addVertex("Roma");
g.addVertex("Viena");
g.addVertex("Berna");
g.addVertex("Varsovia");
g.addVertex("Moscu");
g.addVertex("Amsterdam");
g.addVertex("Praga");
g.addVertex("Copenhague");
g.addVertex("Helsinki");
g.addVertex("Reikiavik");
g.addVertex("Nicosia");
g.addVertex("Oslo");
g.addVertex("Dublin");
g.addVertex("Andorra");
g.addVertex("Bucarest");
g.addVertex("Budapest");
g.addVertex("Estocolmo");
g.addVertex("Atenas");
g.addVertex("Tallin");
g.addVertex("Luxemburgo");
g.addVertex("Bratislava");
g.addVertex("Liubliana");
g.addVertex("Zagreb");
g.addVertex("Kiev");
g.addVertex("Minsk");
g.addVertex("Vilna");
g.addVertex("Riga");
g.addVertex("Chisinau");
g.addVertex("La Valeta");
g.addVertex("Tiflis");
g.addVertex("Tirana");
g.addVertex("Skopje");
g.addVertex("Podgorica");
g.addVertex("Pristina");
g.addVertex("Sofia");
g.addVertex("Bruselas");
g.addVertex("Belgrado");
g.addVertex("Sarajevo");
g.addVertex("Casablanca");
g.addVertex("Mexico");
g.addVertex("Nueva York");
g.addVertex("Miami");
g.addVertex("Rio");
g.addVertex("La Habana");
g.addVertex("Buenos Aires");

g.addEdge("Lisboa","Dublin",10);
g.addEdge("Lisboa","Madrid",3);
g.addEdge("Dublin","Londres",4);
g.addEdge("Londres","Madrid",7);
g.addEdge("Londres","Lisboa",8);
g.addEdge("Londres","Paris",3);
g.addEdge("Londres","Lisboa",8);
g.addEdge("Madrid","Andorra",2)
g.addEdge("Madrid","Paris",4);
g.addEdge("Andorra","Paris",3);
g.addEdge("Paris","Roma",5);
g.addEdge("Madrid","Roma",6);
g.addEdge("Londres","Berna",5);
g.addEdge("Berna","Roma",2);
g.addEdge("Londres","Berlin",4);
g.addEdge("Berlin","Roma",6);
g.addEdge("Berlin","Copenhague",2);
g.addEdge("Copenhague","Estocolmo",2);
g.addEdge("Helsinki","Estocolmo",2);
g.addEdge("Copenhague","Tallin",4);
g.addEdge("Tallin","Helsinki",1);
g.addEdge("Copenhague","Oslo",3);
g.addEdge("Berlin","Varsovia",2);
g.addEdge("Berlin","Praga",1);
g.addEdge("Berlin","Paris",5);
g.addEdge("Berlin","Madrid",7);
g.addEdge("Berlin","Viena",2);
g.addEdge("Dublin","Oslo",8);
g.addEdge("Roma","Atenas",5);
g.addEdge("Oslo","Moscu",12);
g.addEdge("Londres","Reikiavik",9);
g.addEdge("Oslo","Reikiavik",7);
g.addEdge("Berlin","Amsterdam",2);
g.addEdge("Berlin","Bruselas",3);
g.addEdge("Amsterdam","Bruselas",1);
g.addEdge("Luxemburgo","Bruselas",1);
g.addEdge("Luxemburgo","Berna",2);

g.addEdge("Berlin","Berna",4);
g.addEdge("Praga","Viena",1);
g.addEdge("Bratislava","Viena",.5);
g.addEdge("Budapest","Viena",1.5);
g.addEdge("Liubliana","Viena",1);
g.addEdge("Liubliana","Budapest",1.5);
g.addEdge("Zagreb","Liubliana",.5);
g.addEdge("Zagreb","Budapest",1.25);
g.addEdge("Kiev","Budapest",4);
g.addEdge("Kiev","Varsovia",2);
g.addEdge("Kiev","Moscu",3);
g.addEdge("Kiev","Minsk",2);
g.addEdge("Riga","Minsk",3);
g.addEdge("Moscu","Minsk",3);
g.addEdge("Riga","Vilna",2);
g.addEdge("Riga","Tallin",2);
g.addEdge("Varsovia","Minsk",3);
g.addEdge("Varsovia","Vilna",2);
g.addEdge("Vilna","Minsk",1);
g.addEdge("Chisinau","Kiev",2.5);
g.addEdge("Bucarest","Budapest",3);
g.addEdge("La Valeta","Roma",2.5);
g.addEdge("La Valeta","Atenas",2.5);
g.addEdge("Nicosia","La Valeta",4);
g.addEdge("Tiflis","Kiev",6);
g.addEdge("Tiflis","Moscu",5);
g.addEdge("Tirana","Atenas",2);
g.addEdge("Tirana","Skopje",1);
g.addEdge("Tirana","Podgorica",1);
g.addEdge("Tirana","Pristina",1);
g.addEdge("Tirana","Sofia",2);
g.addEdge("Sofia","Atenas",2);
g.addEdge("Sofia","Belgrado",2);
g.addEdge("Sarajevo","Belgrado",2);
g.addEdge("Sarajevo","Atenas",3);
g.addEdge("Bucarest","Belgrado",2);
g.addEdge("Chisinau","Bucarest",2);
g.addEdge("Reikiavik","Dublin",6);
g.addEdge("Roma","Sarajevo",6);
g.addEdge("Roma","Sarajevo",6);
g.addEdge("Andorra","Roma",4.5);
g.addEdge("Paris","Oslo",6);
g.addEdge("Nicosia","Tiflis",6);
g.addEdge("Mexico","Madrid",25);
g.addEdge("Mexico","Paris",29);
g.addEdge("Paris","Bruselas",2);
g.addEdge("Paris","Amsterdam",4);
g.addEdge("Madrid","Casablanca",7);
g.addEdge("Nueva York","Londres",20);
g.addEdge("Miami","Londres",19);
g.addEdge("Mexico","Miami",9);
g.addEdge("Mexico","Nueva York",16);
g.addEdge("Miami","Nueva York",8);
g.addEdge("Mexico","Rio",12);
g.addEdge("Casablanca","Rio",16);
g.addEdge("Mexico","La Habana",4.5);
g.addEdge("Miami","La Habana",4.5);
g.addEdge("Mexico","Buenos Aires",14);
g.addEdge("Rio","Buenos Aires",7);
g.addEdge("Rio","Madrid",17);




/*
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A","B",3);
g.addEdge("A","C",2);
g.addEdge("B","E",1);
g.addEdge("C","D",2);
g.addEdge("D","E",3);
g.addEdge("C","F",4);
g.addEdge("D","F",1);
g.addEdge("E","F",1);
*/
//Find the shortest path from A to E

