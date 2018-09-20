import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BitcoinProvider } from '../../providers/bitcoin/bitcoin';
import { Observable } from 'rxjs/Observable';
import { Bitcoin } from '../../models/bitcoin.model';

@IonicPage()
@Component({
  selector: 'page-bitcoin',
  templateUrl: 'bitcoin.html',
})
export class BitcoinPage{
  currency:string="GBP";
  bitcoin$: Observable<Bitcoin>;

  constructor(private bitcoinProvider:BitcoinProvider){
  }

  ionViewWillLoad(){
    this.getBitcoinPrice();
  }

  getBitcoinPrice(){
    this.bitcoin$=this.bitcoinProvider.getBitcoinPrice(this.currency);
  }
}