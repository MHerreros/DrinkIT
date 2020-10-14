import { Component } from '@angular/core';
import{ ToastController} from '@ionic/angular'
import { ActionSheetController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { getIpValue } from '../config';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  getURL(){
    return 'http://' + getIpValue() + ':8080/drinks'
  }
  posts: any;
 
  constructor(public toastController: ToastController,public actionSheetController: ActionSheetController,private http: HttpClient) {}

  async openBusy() {
    const toast = await this.toastController.create({
      message: 'DrkinIT está ocupada en este momento. Intente nuevamente más tarde.',
      duration: 5000,
      position: 'top',
      color: 'danger',
    });
    toast.present();
  }

  reqDrink(n, shot){
    console.log(this.getURL());
    this.http.post(this.getURL(),{
      "trago": n,
      "shot": shot
      } ).subscribe(val => {
          console.log(val);
          if (val == "busy"){
            this.openBusy();
          }})
  }

  async openToast() {
    const toast = await this.toastController.create({
      message: 'Bancame un segundito y ya esta tu trago bro.',
      duration: 5000,
      position: 'top',
      color: 'dark',
    });
    toast.present();
  }
  
  async shots(n) {
        const actionSheet = await this.actionSheetController.create({
          header: 'Cantidad de Shots de '+ n,
          buttons: [{
            text: 'Shot',
            role: 'destructive',
            handler: () => { this.openToast();
              const shot = 1;
              this.reqDrink(n, shot);
                        }
          }, {
            text: 'Shot x2',
            role: 'destructive',
            handler: () => { this.openToast();
              const shot = 2;
              this.reqDrink(n, shot);
            
            }
          }, {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
          }
          ]
        });
        await actionSheet.present();
}
}