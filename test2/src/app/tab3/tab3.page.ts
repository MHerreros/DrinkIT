import { Component } from '@angular/core';
import { ToastController} from '@ionic/angular'
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
      message: 'DrkinIT está ocupada en este momento. Intente nuevamente más tarde',
      duration: 5000,
      position: 'top',
      color: 'danger',
    });
    toast.present();
  }

  async openEmpty() {
    const toast = await this.toastController.create({
      message: 'Por favor, coloca el vaso en la plataforma e intente nuevamente',
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
          } else if (val == "empty"){
            this.openEmpty();
          } else if (val == "inProgress"){
            this.openToast();
          } else if (val == "cleaning"){
            this.openToast2();
          }
        })
  }

  async openToast() {
    const toast = await this.toastController.create({
      message: 'Estoy preparando tu trago. Aguarda unos instantes',
      duration: 5000,
      position: 'top',
      color: 'dark',
    });
    toast.present();
  }

  async openToast2() {
    const toast = await this.toastController.create({
      message: 'Limpiando la máquina. Aguarde unos instantes',
      duration: 5000,
      position: 'top',
      color: 'dark',
    });
    toast.present();
  }
  
  async shots(n) {
    if(n != "Limpieza"){
      const actionSheet = await this.actionSheetController.create({
        header: 'Seleccione intensidad del '+ n,
        buttons: [{
          text: 'Regular',
          role: 'destructive',
          handler: () => { 
            const shot = 1;
            this.reqDrink(n, shot);
                      }
        }, {
          text: 'Fuerte',
          role: 'destructive',
          handler: () => { 
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
    
    } else {
      const actionSheet = await this.actionSheetController.create({
        header: 'Estas por limpiar la maquina. Por favor, comprueba que los productos de limpieza esten en su lugar. Luego, presioná "Aceptar"',
        buttons: [{
          text: 'Aceptar',
          role: 'destructive',
          handler: () => {
            const shot = 1;
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
}