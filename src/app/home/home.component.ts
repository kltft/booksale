import { Component, OnInit } from '@angular/core';
import { Sale } from '../sale';
import { SalesService } from '../sales.service';
import { Observable } from 'rxjs/Observable';



declare const google: any;
//take this out 
//const key: any = 'AIzaSyAUxI-YquKBvu7y9AprEIGxWMlSxhO4UBc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private saleService: SalesService) {
    this.latitude = 41.2565;
    this.longitude = -95.9345;
  }
  latitude: number;
  longitude: number;
  sales: Sale[];
  marker: any;

  ngOnInit() {
    this.getSales().subscribe(data =>
     { this.sales = data; console.log(data); }, error => console.log(error) ,
      () => {
        let mapProp = {
          center: new google.maps.LatLng(41.2565, -95.9345),
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        //https://developers.google.com/maps/documentation/javascript/geocoding
        this.sales.forEach(element => {
          var latylngy = new google.maps.LatLng(element.lat, element.lng)
          var marky = this.createMarker(latylngy, map, element.name);
        });
        // google.maps.event.addListener(this.marker, 'click', function (event) {
        //   console.log("sending the data along to the next");
        // });
      }
    );
  }

  createMarker(pos, m, t): void {
    var marker = new google.maps.Marker({ position: pos, map: m, title: t });
    google.maps.event.addListener(marker, 'click', function () {
      //here we need to set a data point to bind to the Find A Sale page, then go to that page
      console.log(marker.title);
      console.log(marker.position.lat());
      console.log(marker.position.lng());
    });

    return marker;
  }

  getSales(): Observable<Sale[]> {
    console.log(this.saleService.getSales());
    return this.saleService.getSales();
  }




}




