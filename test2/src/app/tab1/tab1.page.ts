import { Component } from '@angular/core';
import {getIpValue, setIpValue} from '../config';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  valorIP: string;
  constructor() {this.valorIP = getIpValue()}
  ipChange(): void {
    console.log(this.valorIP);
    setIpValue(this.valorIP);
    console.log(getIpValue());
  }
  
};