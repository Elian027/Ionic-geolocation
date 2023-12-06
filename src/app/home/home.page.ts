import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  latitude: any=-1500;
  longitude: any=500;
  constructor(private geolocation:Geolocation) {}
  options={
    timeout:10000,
    enableHighAccucary:true,
    maximunAge:3600
  };

  getCurrentCoordinates() {
    this.geolocation.getCurrentPosition().then((res)=> {
      this.latitude=res.coords.latitude;
      this.longitude=res.coords.longitude;
    }).catch((error) => {
      console.log('Error, no se puede obtener su ubicacion', error);
    });
  }
  getUrl() {
    // Abre Google Maps con las coordenadas actuales
    window.open(`https://www.google.com/maps/@${this.latitude},${this.longitude}?entry=ttu`);
  }
}