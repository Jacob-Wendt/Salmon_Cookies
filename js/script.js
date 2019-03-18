
var hours = ['6am','7am','8am','9am','10am','11am','12pm','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var loc1 = {
minCust: 23,
maxCust: 65,
avgSale: 6.3,
cx: 0,
randomCx: function() {
this.cx = Math.floor(Math.random() * (this.maxCust - this.minCust) ) + this.minCust;
}
};
loc1.randomCx();
console.log (loc1.cx);

var loc2 = {
minCust: 0,
maxCust: 0,
avgSale: 0
};

var loc3 = {
minCust: 0,
maxCust: 0,
avgSale: 0
};

var loc4 = {
minCust: 0,
maxCust: 0,
avgSale: 0
};

var loc5 = {
minCust: 0,
maxCust: 0,
avgSale: 0
};

