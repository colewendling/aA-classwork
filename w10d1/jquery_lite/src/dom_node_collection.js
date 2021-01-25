class DOMNodeCollection {
    constructor(array) {
        this.collection = array;
    }
};


DOMNodeCollection.protoype.html = function(string){
    if(string){//if it receives argument puts string
        return this.innerHTML = string
    }else {
        return this.collection[0].innerHTML
    }
}


DOMNodeCollection.protoype.empty = function(){
    this.collection.map(function(node){
        node = "";
    })
}

DOMNodeCollection.protoype.append = function(arg){
    if(arg instanceof jQuery){
        this.collection.forEach((node) => {
            //append arg.outerhtml to node.innerhtml

            let inner = document.getElementsByTagName(node[0])[0].innerHTML;
            inner += document.getElementsByTagName(arg[0])[0].outerHTML;
        })
    }else if()
}



module.exports = DOMNodeCollection;