const Room = function(area){
    this.area = area;
    this.roomStatus = false;
}

Room.prototype.roomComplete = function(){
    return this.roomStatus = true;
}

module.exports = Room