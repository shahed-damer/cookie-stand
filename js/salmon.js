'use strict';

var hour = ['6am', '7am', '8am', '9am', '10am',
    '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var store = [];
function store (location, minCustmers, maxCustmer, AvgCookiesale) {
    this.location = location;
    this.minCustmers = minCustmers;
    this.maxCustmer = maxCustmer;
    this.AvgCookiesale = AvgCookiesale;
    this.couterperhour = [];
    this.cookiesperHour = [];
    this.totalCookies = 0;
    store.push(this);

}



 store.prototype.customersPerHour = function () {
    for (var i = 0; i < hour.length; i++) {
        var hourly = Math.floor(Math.random() * (this.maxCustmer - this.minCustmers + 1) + this.minCustmers);
        this.coutperhour.push(hourly);

    }
}
 
store.prototype.cookiPerHr = function () {

    for (var i = 0; i < hour.length; i++) {
        var perhour = Math.ceil(this.AvgCookiesale * this.coutperhour[i]);
        this.cookiesperHour.push(perhour);
        this.totalCookies += perhour;

    }

}
store.prototype.render = function () {
    var tableRow = document.createElement('tr');
    tableEl.appendChild(tableRow);
    var Datam = document.createElement('td');
    tableRow.appendChild(Datam);
    Datam.textContent = this.location;
    for (var i = 0; i < hour.length; i++) {
        var tdEl = document.createElement('td');
        tableRow.appendChild(tdEl);
        tdEl.textContent = this.cookiesperHour[i];
    }
    var tdEl = document.createElement('td');
    tableRow.appendChild(tdEl);
    tdEl.textContent = this.totalCookies;
}

var divEl = document.getElementById('cookiestand');
var articleEl = document.createElement('article');
divEl.appendChild(articleEl);
var tableEl = document.createElement('table');
articleEl.appendChild(tableEl);

function HeaderRow() {
    var tableRow = document.createElement('tr');
    tableEl.appendChild(tableRow);
    var tableHeader = document.createElement('th');
    tableRow.appendChild(tableHeader);
    tableHeader.textContent = null;
    for (var content = 0; content < hour.length; content++) {
        let thEl = document.createElement('th');
        tableRow.appendChild(thEl);
        thEl.textContent = hour[content];
    }
    var th2 = document.createElement('th')
    tableRow.appendChild(th2);
    th2.textContent = 'Daily Location Total'
}
function FooterRow() {
    var tableRow = document.createElement('tr');
    tableEl.appendChild(tableRow);
    var Datam = document.createElement('td');
    tableRow.appendChild(Datam);
    Datam.textContent = 'Total';
    var Total = 0;
    for (var i = 0; i < hour.length; i++) {
        var hourlyTotal = 0;
        for (var s = 0; s < store.length; s++) {
            hourlyTotal = hourlyTotal + store[s].cookiesperHour[i];
            Total += store[s].cookiesperHour[i];
        }
        var tdElement = document.createElement('td');
        tableRow.appendChild(tdElement);
        tdElement.textContent = hourlyTotal;
    }
    var tdElement = document.createElement('td');
    tableRow.appendChild(tdElement);
    tdElement.textContent = Total;
}



HeaderRow();
var Seattle = new store('Seattle', 23, 65, 6.3);
var Tokyo = new store('Tokyo', 3, 24, 1.2);
var Dubai = new store('Dubai', 11, 38, 3.7);
var Paris = new store('Paris', 20, 38, 2.3);
var Lima = new store('Lima', 2, 16, 4.6);


Seattle.customersPerHour();
Seattle.cookiesPerHr();
Seattle.render();

Tokyo.customersPerHour();
Tokyo.cookiesPerHr();
Tokyo.render();

Dubai.customersPerHour();
Dubai.cookiesPerHr();
Dubai.render();

Paris.customersPerHourr();
Paris.cookiesPerHr();
Paris.render();

Lima.customersPerHour();
Lima.cookiesPerHr();
Lima.render();

FooterRow();
