
var hours = ['6am','7am','8am','9am','10am','11am','12pm','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function Store( name, minCx, maxCx, avgCook ) {
this.locationName = name,
this.minCustomersPerHour = minCx,
this.maxCustomersPerHour = maxCx,
this.avgCookiesPerSale = avgCook,
this.customersEachHour = [],
this.cookiesEachHour = [],
this.totalDailyCookies = 0
};

Store.prototype.calcCustomersEachHour = function() {
for(var i = 0; i < hours.length; i++) {
this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour));
};
};

Store.prototype.calcCookiesEachHour = function() {
for(var i = 0; i < this.customersEachHour.length; i++) {
this.cookiesEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale));
};
};

Store.prototype.calcTotalCookies = function() {
for(var i = 0; i < this.cookiesEachHour.length; i++){
this.totalDailyCookies += this.cookiesEachHour[i];
}
};


var pike = new Store('1st and Pike', 23, 65, 6.3);
var airport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattle = new Store('Seattle Center', 3, 24, 1.2);
var capitol = new Store('Capitol Hill', 3, 24, 1.2);
var alki = new Store('Alki', 3, 24, 1.2);


console.log (pike);
console.log (airport);
console.log (seattle);
console.log (capitol);
console.log (alki);