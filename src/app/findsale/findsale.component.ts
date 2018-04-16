import { Component, OnInit } from '@angular/core';
import { Sale } from '../sale';
import { SalesService } from '../sales.service';
import { Observable } from 'rxjs/Observable';
import { NgModel } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EmailValidator } from '@angular/forms';

declare const google: any;

@Component({
  selector: 'app-findsale',
  templateUrl: './findsale.component.html',
  styleUrls: ['./findsale.component.css']
})
export class FindsaleComponent implements OnInit {


  constructor(private saleService: SalesService, private modalService: NgbModal) {
    this.latitude = 41.2565;
    this.longitude = -95.9345;
  }
  modalAlert: boolean = false;
  modalReference: NgbModalRef;
  latitude: number;
  longitude: number;
  sales: Sale[];
  shownSales: Sale[] = new Array();
  mySales: Sale[] = new Array();
  marker: any;
  selectedSale: Sale;
  map: any;
  bnds: any;
  nowSale: Sale[];
  isCollapsed: boolean = true;
  closeResult: string;
  
  ngOnInit() {
    let mapProp = {
      center: new google.maps.LatLng(41.2565, -95.9345),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      fullscreenControl: false
    };
    this.getSales().subscribe(data => {
      this.sales = data;
      this.nowSale = [data[2]];
      let mySales = this.mySales;
      let now = this.nowSale;
      this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
      let map = this.map;
      console.log(map);
      var infoW = new google.maps.InfoWindow();
      //let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
      //https://developers.google.com/maps/documentation/javascript/geocoding
      var addToArray= function (element) {
          var test = true;
          mySales.forEach(ele => {
            if (element.lat == ele.lat && element.lng == ele.lng) {
              test = false;
            }
          });
          if (test) {
            mySales.push(element);
          }
          console.log(mySales);
        }
      
      var btnListener = function (btn, ele) {
        google.maps.event.addDomListener(btn, 'click', function () {          
          now = ele;
          addToArray(now);
          //console.log(now);          
        })
        return now;
      }
      this.sales.forEach(element => {
        var latylngy = new google.maps.LatLng(element.lat, element.lng);
        var marker = new google.maps.Marker({
          position: latylngy,
          map: this.map
        });
        var content = document.createElement('div'), button;
        content.innerHTML = '<p>' + element.name + '</p>'
                            + '<p>' + element.descr + '</p>'
                            + '<p> Book Quantity: ' + element.qty + '</p>'
                            + '<p> Start Date: '+ element.startDt.getMonth() + '/' + element.startDt.getDate() + '/' + element.startDt.getFullYear() + '</p>'
                            + '<p> End Date: '+ element.endDt.getMonth() + '/' + element.endDt.getDate() + '/' + element.endDt.getFullYear() + '</p>'
                                    ;
        button = content.appendChild(document.createElement('input'));
        button.type = 'button';
        button.value = 'Add To My Sales';
        button.id = 'addBtn'
        this.nowSale = btnListener(button, element);

        google.maps.event.addListener(marker, 'click', function () {
          infoW.setOptions({
            maxWidth: 200,
            content: content,
            map: this.map,
            position: latylngy
          })

        });
      });
    
    }
      , error => console.log(error)
      , () => {
       
      }
    );
  }
addToArray(element) {
    return function (element) {
      var test = true;
      this.mySales.forEach(ele => {
        if (element.lat == ele.lat && element.lng == ele.lng) {
          test = false;
        }
      });
      if (test) {
        this.mySales.push(element);
      }
    }
  }
//todo: this needs to filter based on Search By values
//need ngModel on each, and variables in this component for each
//default date to today?
  filterSalesArray(): void {
    console.log('filtering array');
    var bnds = this.map.getBounds();
    this.sales.forEach(element => {
      if (element.lat >= bnds.f.b && element.lat <= bnds.f.f && element.lng >= bnds.b.b && element.lng <= bnds.b.f) {
        this.shownSales.push(element);
      }
    });
    console.log('shown sales:');
    console.log(this.shownSales);
  };

  addToMySale(sale): void {
    var test = true;
    this.mySales.forEach(element => {
      if (element.lat == sale.lat && element.lng == sale.lng) {
        test = false;
      }
    });
    if (test) {
      this.mySales.push(sale);
    }
    console.log(this.mySales);
  }

  removeMySales(sale): void {
    this.mySales.splice(this.mySales.indexOf(sale),1);
  }

  getSales(): Observable<Sale[]> {
    console.log(this.saleService.getSales());
    return this.saleService.getSales();
  }

  open(content) {
    this.modalReference = this.modalService.open(content);
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  fakeSend(): void {
    this.modalReference.close();
    this.modalAlert = true;
  }
}
