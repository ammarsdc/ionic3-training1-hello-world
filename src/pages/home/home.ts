import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	counter = 0
	message = ""

  constructor(public navCtrl: NavController,
  public toastCtrl: ToastController, 
  public alertCtrl: AlertController){
  }

  increment() {
  	this.message = ""
  	this.counter++;
  }

	decrement() {
		if (this.counter > 0) {
			this.counter--;
		} else {
			let toast = this.toastCtrl.create({
      message: 'Error',
      duration: 3000
    });
    toast.present();
  }
	    this.message = "Number cannot be lesser than 0"
		
	}

	reset() {
		this.message = ""
		this.counter = 0;
	}
	aboutus(){
		let alert = this.alertCtrl.create({
      title: 'About Us!',
      subTitle: 'Thanks for visiting us from Common Room Bangi',
      buttons: ['OK']
    });
    alert.present();
	}
}
