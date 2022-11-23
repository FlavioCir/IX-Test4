"use strict";
var products;
class Articoli {
    constructor(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    getSaldoCapo() {
        return (this.prezzoivainclusa * this.saldo) / 100;
    }
    getAcquistocapo() {
        return this.prezzoivainclusa - this.getSaldoCapo();
    }
}
function getData() {
    fetch("http://localhost:3000/capi").then((response) => {
        return response.json();
    }).then((data) => {
        products = data;
        products.map(function (e) {
            let capo = new Articoli(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo);
            console.log(capo);
            console.log(`totale capo: € ${capo.getAcquistocapo()}`);
        });
        console.log(products);
    });
}
getData();
