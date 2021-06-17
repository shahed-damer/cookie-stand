'use strict';




let table = document.getElementById('table')


function getRandomCustomer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let totalhoures=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function Store(city, min, max, avg) {
    this.city = city;
    this.minCustmers = min;
    this.maxCustmer = max;
    this.avgCookies = avg
    this.cookiesPerHour = [];
    this.total1 = 0;
    newStore.push(this);
}

 let newStore=[];

Store.prototype.getCustomer = function () {
    for (let i = 0; i < hours.length; i++) {

        let randomCookies = Math.ceil(getRandomCustomer(this.minCustmers, this.maxCustmer) * this.avgCookies)

        this.cookiesPerHour.push(randomCookies);

        this.total1 += randomCookies;

    }





    Store.prototype.render = function () {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        let th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = this.city;
        for (let i = 0; i < hours.length; i++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.textContent = this.cookiesPerHour[i];

        totalhoures[i]+=this.cookiesPerHour[i];   
        }

        let total = document.createElement('td');
        tr.appendChild(total);
        total.textContent = this.total1



    }




}



function headerTable() {
    let tr = document.createElement('tr');
    table.appendChild(tr);

    let th1 = document.createElement('th');
    tr.appendChild(th1);
    th1.textContent = '';
    for (let i = 0; i < hours.length; i++) {
        let th2 = document.createElement('th');
        tr.appendChild(th2);
        th2.textContent = hours[i];
        

        

    }
    let th3 = document.createElement('th');
    tr.appendChild(th3);
    th3.textContent = 'Daily Location Total';
}
let hourToltal= 0;
function footerTable() {
    let foot = document.createElement('tfoot');
    table.appendChild(foot);
    let tr = document.createElement('tr');
    foot.appendChild (tr);

    let td = document.createElement('td');
    tr.appendChild (td);
    td.textContent='Totals';

   
    
    
    for (let i = 0; i < hours.length; i++) {
       
       
        //      console.log(hours,hours.length,newStore,newStore.length);
            
       
         hourToltal += totalhoures[i];
       let td1 = document.createElement('td');
       tr.appendChild(td1);
       td1.textContent=totalhoures[i];
    }
    let td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.textContent=hourToltal;
}



let formStore=document.getElementById("newstore");
formStore.addEventListener('submit',addstore);
function addstore(event){
    event.preventDefault();
    let city = event.target.city.value;
    let minCustmers = event.target.minCustmers.value;
    let maxCustmer  = event.target.maxCustmer.value;
    let avgCookies  = event.target.avgCookies.value;
    let secondstore = new Store(city,minCustmers,maxCustmer,avgCookies);
    table.deleteTFoot();
    secondstore.getCustomer();
    secondstore.render();
    footerTable();

}

headerTable();

let seattle = new Store('Seattle', 23, 65, 6.3)
let tokyo = new Store('Tokyo', 3, 24, 1.2)
let dubai = new Store('Dubai', 11, 38, 3.7)
let paris = new Store('Paris', 20, 38, 2.3)
let lima = new Store('liam', 2, 16, 4.6)

seattle.getCustomer();
seattle.render();

 tokyo.getCustomer();
 tokyo.render();
dubai.getCustomer();
dubai.render();
paris.getCustomer();
paris.render();
lima.getCustomer();
lima.render();
footerTable();



console.log(hourToltal);