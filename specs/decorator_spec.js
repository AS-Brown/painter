const assert = require('assert');
const Decorator = require('../decorator.js');
const Room = require('../room.js');
const Paint = require('../paint.js');

describe('room', function(){

    let room;

    beforeEach(function(){
        room = new Room(20)
    });

    it('should have area', function(){
        const actual = room.area
        assert.strictEqual(actual, 20)
    })
    it('start not painted', function(){
        const actual = room.roomStatus
        assert.deepStrictEqual(actual, false)
    })
    it('should be able to be painted', function(){
        room.roomComplete()
        const actual = room.roomStatus
        assert.deepStrictEqual(actual, true)
    })

})

describe('paint', function(){

    let paint;
    beforeEach(function(){
        paint = new Paint(5)
    });
    it('should have a number of litres', function(){
        const actual = paint.litres
        assert.strictEqual(actual, 5)
    })
    it('should be able to check if empty', function(){
        assert.strictEqual("There is still paint left", paint.checkIfZero(paint.litres))
    })
    it('should be able to become empty', function(){
        paint.empty()
        const actual = paint.litres
        assert.strictEqual(actual, 0)
    })
})

describe('decorator', function(){

    let decorator;
    beforeEach(function(){
        decorator = new Decorator();
        paint = new Paint(5);
        room = new Room(20)
    })
    it('should be an empty paint stock', function(){
        const actual = decorator.paintStock;
        assert.deepEqual(actual, [])
    })

    it('should be able to add to stock', function(){
        decorator.addStock('red')
        const actual = decorator.numberOfCans()
        assert.deepEqual(actual, 1)
    })
    it('should be able to calculate total litre in stock', function(){
        decorator.addStock('red')
        decorator.addStock('blue')
        const totalCans = decorator.numberOfCans()
        const actual =  totalCans * paint.litres
        assert.deepEqual(actual, 10)
    })
    it('should be able to calculate whether there is enough paint', function(){
        decorator.addStock('red')
        decorator.addStock('blue')
        decorator.addStock('green')
        decorator.addStock('yellow')
        const totalCans = decorator.numberOfCans()
        const fullCans =  totalCans * paint.litres
        const result = decorator.roomAndPaint(fullCans, room.area)
        assert.deepEqual(result, "There is enough paint")
    })
    it('should be able to mark room', function(){
        decorator.addStock('red')
        decorator.addStock('blue')
        decorator.addStock('green')
        decorator.addStock('yellow')
        const totalCans = decorator.numberOfCans()
        const fullCans =  totalCans * paint.litres
        const result = decorator.roomAndPaint2(fullCans, room.area)
        const trueResult = function(){
            if (result === true){
            room.roomComplete()
        }
        }
        trueResult()
        const finalactual = room.roomStatus

        assert.deepEqual(finalactual, true)
    })
    it('should be able to mark room2', function(){
        decorator.addStock('red')
        decorator.addStock('blue')
        decorator.addStock('green')
        decorator.addStock('yellow')
        const totalCans = decorator.numberOfCans()
        const fullCans =  totalCans * paint.litres
        decorator.roomAndPaint3(fullCans, room.area)
        const actual = room.roomStatus

        assert.deepEqual(actual, true)
    })
    
})

