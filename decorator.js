const Paint = require("./paint");

const Decorator = function(){
    this.paintStock = [];
};

Decorator.prototype.removeAllEmpty = function(){
    const toKeep = []
    for (can of this.paintStock){
        if (can.litres > 0){
            toKeep.push(can)
        }
    this.paintStock = toKeep    
    }
}

Decorator.prototype.roomPaintedRemoveCan = function(color){
    const indexOfPaint = this.paintStock.indexOf(color)
    this.paintStock.splice(indexOfPaint, 1)
}

Decorator.prototype.numberOfCans = function(){
    return this.paintStock.length
}

Decorator.prototype.addStock = function(paint){
    this.paintStock.push(paint);
}

Decorator.prototype.numberOfLitres = function(){
    var total = 0
    for (can of this.paintStock){
        total += can.litres
    }
    return total
}

Decorator.prototype.roomAndPaint = function(fullCans, area){
    if (fullCans >= area){
        const result = "There is enough paint"
        return result
    }else{
        const result = "There is not enough paint"
        return result
    }

}
Decorator.prototype.roomAndPaint2 = function(fullCans, area){
    if (fullCans >= area){
        return true
    }else{
        return false
    }
}
Decorator.prototype.roomAndPaint3 = function(fullCans, area){
    if (fullCans >= area){
        room.roomComplete()

    }else{
        return false
    }

}

module.exports = Decorator