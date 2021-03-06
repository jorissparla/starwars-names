var expect = require('chai').expect;
var starWars = require('./index');

describe('starwars-names', function() {
    describe('all', function() {
        it(' Should be an array of string', function() {
            expect(starWars.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                })
            }
        });
        it('Should contain Luke Skywalker', function() {
            expect(starWars.all).to.include('Luke Skywalker');
        })
    });
    describe('random', function() {
        it('Should return a random Starwars character', function() {
            var randomItem = starWars.random();
            expect(starWars.all).to.include(randomItem);
        });
        it('Should return an array of random items if passed a number', function(){
            var randomItems = starWars.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function(item) {
                expect(starWars.all).to.include(item);
            })
        })

    })
})