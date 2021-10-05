const Decorator = function(){
    this.paintStock = [];
};

Decorator.prototype.numberOfCans = function(){
    return this.paintStock.length
}

Decorator.prototype.addStock = function(paint){
    this.paintStock.push(paint);
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

// Decorator.prototype.totalStock = function(){
//     total = 0
//     for (paint in this.paintStock){
//         total += paint.litres
//     }
//     return total
// }

module.exports = Decorator