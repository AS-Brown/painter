const Paint = function(litres){
    this.litres = litres
}

module.exports = Paint

Paint.prototype.checkIfZero = function(paint){
    if (paint === 0){
        return "Paint is empty";
    }else{
        return "There is still paint left";
    };
};

Paint.prototype.empty = function(){
    this.litres = 0
}
