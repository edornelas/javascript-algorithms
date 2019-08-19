function hash1(key,arrayLen){
    let total = 0;

    for(let char of key){
        let value = char.charCodeAt(0)-96;
        total = (total + value) % arrayLen;
    }

    return total;
}

function hash2(key,arrayLen){
    let total = 0;
    const WEIRD_PRIME = 31;

    for(let i = 0; i < Math.min(key.length,100); i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }

    return total;

}

class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size);
    }
    _hash(key){
        let total = 0;
        const WEIRD_PRIME = 31;

        for(let i = 0; i < Math.min(key.length,100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;

            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    set(key,value){

       /* let element = {
            key:key,
            value:value
        } */

        let index = this._hash(key);
        //console.log(this.keyMap[index]);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        //insertar aqui funcion para manejo de duplicados

        this.keyMap[index].push([key,value]);        

        return index;
    }

    get(key){
         let index = this._hash(key);
         let hashElements = this.keyMap[index];
         //console.log(hashElements);

         if(this.keyMap[index]){
             for(let i = 0; i < this.keyMap[index].length; i++){
                 //console.log(element);
                 if(this.keyMap[index][i][0] === key){
                     return this.keyMap[index][i][1];
                 }
                
             }
         }
         

         return undefined;
    }

    keys(){
        let keysArr = [];
        for(let i= 0; i < this.keyMap.length;i++){
            if(this.keyMap[i]){
                //console.log(this.keyMap[i]);
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0]))
                        keysArr.push(this.keyMap[i][j][0]);
                }
                
            }
        }

        return keysArr;
    }
    values(){
        let valuesArr = [];
        for(let i= 0; i < this.keyMap.length;i++){
            if(this.keyMap[i]){
                //console.log(this.keyMap[i]);
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1]))
                        valuesArr.push(this.keyMap[i][j][1]);
                }
                
            }
        }

        return valuesArr;
    }
}



let ht = new HashTable(17);
ht.set("maroon","#800000");
ht.set("yellow","#FFFF00");
ht.set("olive","#808000");
ht.set("salmon","#FA8072");
ht.set("lightcoral","#F08080");
ht.set("mdiumvioletred","#C71585");
ht.set("plum","#DDA0DD");
ht.set("purple","#DDA0DD");
ht.set("violet","#DDA0DD");