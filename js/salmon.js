'use strict';

var hour = ['6am', '7am', '8am', '9am', '10am',
    '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var Seattle = {
    location: 'Seattle',
    minCustmers: 23,
    maxCustmer: 65,
    AvgCookiesale: 6.3,
    coutperhour: [],
    cookiesperHour: [],
    totalCookies: 0,




    addingCoutPerHour: function () {
        for (var i = 0; i < hour.length; i++) {
            this.coutperhour.push(random(this.minCustmers, this.maxCustmer));
            
        }
    },

    cookiesPerHr: function () {

        for (var i = 0; i < hour.length; i++) {
            var perhour = Math.ceil(this.AvgCookiesale * this.coutperhour[i]);
            this.cookiesperHour.push(perhour);
            this.totalCookies += perhour;

        }
    },

    render: function () {
        var divEl = document.getElementById('cookiestand');
        var articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        var h2El = document.createElement('h2');
        h2El.textContent = this.location;
        articleEl.appendChild(h2El);
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i < hour.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hour[i]} : ${this.cookiesperHour[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        var liEl = document.createElement('li');
        liEl.textContent = `Total : ${this.totalCookies} cookies`;
        ulEl.appendChild(liEl);
    },

};

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

}
Seattle.addingCoutPerHour();
Seattle.cookiesPerHr();
Seattle.render();

var Tokyo = {
    location: 'Tokyo',
    minCustmers: 3,
    maxCustmer: 24,
    AvgCookiesale: 1.2,
    coutperhour: [],
    cookiesperHour: [],
    totalCookies: 0,




    addingCoutPerHour: function () {
        for (var i = 0; i < hour.length; i++) {
            this.coutperhour.push(random(this.minCustmers, this.maxCustmer));
            
        }
    },

    cookiesPerHr: function () {

        for (var i = 0; i < hour.length; i++) {
            var perhour = Math.ceil(this.AvgCookiesale * this.coutperhour[i]);
            this.cookiesperHour.push(perhour);
            this.totalCookies += perhour;

        }
    },

    render: function () {
        var divEl = document.getElementById('cookiestand');
        var articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        var h2El = document.createElement('h2');
        h2El.textContent = this.location;
        articleEl.appendChild(h2El);
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i < hour.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hour[i]} : ${this.cookiesperHour[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        var liEl = document.createElement('li');
        liEl.textContent = `Total : ${this.totalCookies} cookies`;
        ulEl.appendChild(liEl);
    },

};

Tokyo.addingCoutPerHour();
Tokyo.cookiesPerHr();
Tokyo.render();

var Dubai = {
    location: 'Dubai',
    minCustmers: 11,
    maxCustmers: 38,
    AvgCookiesale: 3.7,
    coutperhour: [],
    cookiesperHour: [],
    totalCookies: 0,




    addingCoutPerHour: function () {
        for (var i = 0; i < hour.length; i++) {
            this.coutperhour.push(random(this.minCustmers, this.maxCustmer));
           
        }
    },

    cookiesPerHr: function () {

        for (var i = 0; i < hour.length; i++) {
            var perhour = Math.ceil(this.AvgCookiesale * this.coutperhour[i]);
            this.cookiesperHour.push(perhour);
            this.totalCookies += perhour;

        }
    },

    render: function () {
        var divEl = document.getElementById('cookiestand');
        var articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        var h2El = document.createElement('h2');
        h2El.textContent = this.location;
        articleEl.appendChild(h2El);
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i < hour.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hour[i]} : ${this.cookiesperHour[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        var liEl = document.createElement('li');
        liEl.textContent = `Total : ${this.totalCookies} cookies`;
        ulEl.appendChild(liEl);
    },

};

Dubai.addingCoutPerHour();
Dubai.cookiesPerHr();
Dubai.render();



var Paris = {
    location: 'Paris',
    minCustmers: 20,
    maxCustmer: 38,
    AvgCookiesale: 2.3,
    coutperhour: [],
    cookiesperHour: [],
    totalCookies: 0,




    addingCoutPerHour: function () {
        for (var i = 0; i < hour.length; i++) {
            this.coutperhour.push(random(this.minCustmers, this.maxCustmer));
        
        }
    },

    cookiesPerHr: function () {

        for (var i = 0; i < hour.length; i++) {
            var perhour = Math.ceil(this.AvgCookiesale * this.coutperhour[i]);
            this.cookiesperHour.push(perhour);
            this.totalCookies += perhour;

        }
    },

    render: function () {
        var divEl = document.getElementById('cookiestand');
        var articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        var h2El = document.createElement('h2');
        h2El.textContent = this.location;
        articleEl.appendChild(h2El);
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i < hour.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hour[i]} : ${this.cookiesperHour[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        var liEl = document.createElement('li');
        liEl.textContent = `Total : ${this.totalCookies} cookies`;
        ulEl.appendChild(liEl);
    },

};

Paris.addingCoutPerHour();
Paris.cookiesPerHr();
Paris.render();



var Lima = {
    location: 'Lima',
    minCustmers: 2,
    maxCustmer: 16,
    AvgCookiesale: 4.6,
    coutperhour: [],
    cookiesperHour: [],
    totalCookies: 0,




    addingCoutPerHour: function () {
        for (var i = 0; i < hour.length; i++) {
            this.coutperhour.push(random(this.minCustmers, this.maxCustmer));
        }
    },

    cookiesPerHr: function () {

        for (var i = 0; i < hour.length; i++) {
            var perhour = Math.ceil(this.AvgCookiesale * this.coutperhour[i]);
            this.cookiesperHour.push(perhour);
            this.totalCookies += perhour;

        }
    },

    render: function () {
        var divEl = document.getElementById('cookiestand');
        var articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        var h2El = document.createElement('h2');
        h2El.textContent = this.location;
        articleEl.appendChild(h2El);
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i < hour.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hour[i]} : ${this.cookiesperHour[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        var liEl = document.createElement('li');
        liEl.textContent = `Total : ${this.totalCookies} cookies`;
        ulEl.appendChild(liEl);
    },

};

Lima.addingCoutPerHour();
Lima.cookiesPerHr();
Lima.render();
