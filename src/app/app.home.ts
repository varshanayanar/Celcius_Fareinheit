import { Component } from '@angular/core';
import {  MyRemoteService } from './app.myremoteservice';

@Component({
    template: `

    Convert Celcius to Fahrenheit<input type="text" name="celcius"  #celcius=ngModel [(ngModel)]="y"><button (click)="convertToF()">Convert</button><br/>

    Convert Fahrenheit to Celcius<input type="text" name="fareinheit"  #fareinheit=ngModel [(ngModel)]="x"><button (click)="convertToC()">Convert</button><br/>
     `
})
export class HomeComponent {
    y:Number;
      x:Number;
    names: Array<any>;
    remoteService: MyRemoteService;

  constructor(_remoteService: MyRemoteService) {
      this.remoteService = _remoteService;
      this.y=0;
      this.x=32;

  }

  convertToF() {
        this.remoteService.getFahrenheit(this.y)
            // Subscribe to observable.
            .subscribe(
                // Success.
                data => {
                    this.names = data
                    console.log(JSON.stringify(data))
                    let x = data["Fahrenheit"];
                    this.x=data["Fahrenheit"];
                    console.log(x);

                },
                // Error.
                error => {
                    alert(error)
                },
                // Final Instructions.
                () => {
                    console.log("Finished")
                });
    }


    convertToC() {
          this.remoteService.getCelsius(this.x)
              // Subscribe to observable.
              .subscribe(
                  // Success.
                  data => {
                      this.names = data
                      console.log(JSON.stringify(data))
                      let y = data["Celsius"];
                      this.y=data["Celsius"];
                      console.log(y);

                  },
                  // Error.
                  error => {
                      alert(error)
                  },
                  // Final Instructions.
                  () => {
                      console.log("Finished")
                  });
      }

 }
