import { Component } from '@angular/core';
import {  MyRemoteService } from './app.myremoteservice';

@Component({
    template: `  <!-- Submit feedback -->
                Your email Address:<br/> <input [(ngModel)]="emailAddress"><br/>
                Feedback: <br/> <input style="height:200px;" [(ngModel)]="feedbackMsg"><br/>
                <button (click)="postFeedback()">Submit Feedback</button>
                <!-- Show result from Post -->
              <div style="color:blue;" *ngIf="feedbackResponseMsg" >{{feedbackResponseMsg}}<br/>
             {{feedbackResponseStatus}}</div>
             <br/>`,
                // Providers allow us to inject an object instance through the constructor.

              providers: [MyRemoteService]
})






export class FeedbackComponent {

  remoteService: MyRemoteService;
  emailAddress: string;
  feedbackMsg: string;
  feedbackResponseMsg: string;
  feedbackResponseStatus: string;
  constructor(_remoteService: MyRemoteService) {
    this.remoteService = _remoteService;

  /*  let EMAIL_PATTERN  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.emailAddress!= "" &&  EMAIL_PATTERN.test(this.emailAddress) {
        alert("Email is invalid");
    }
    if (this.feedbackMsg != "") {
        alert(“Feedback is empty”);
    }
*/
  }
  clearAll(){
    this.emailAddress="";
    this.feedbackMsg="";
      }
  postFeedback() {
      // Create the JavaScript object in the format
      // required by the server.

      let EMAIL_PATTERN  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.emailAddress== "" || !EMAIL_PATTERN.test(this.emailAddress)) {
            alert("Email is invalid");

            return false;

        }

        else if (this.feedbackMsg == "") {
            alert("Feedback is empty");
            
            return false;
          }

        let FeedBackObject = {
            "Email": this.emailAddress,
            "Message": this.feedbackMsg
        }


      this.remoteService.postName(FeedBackObject)
          // Subscribe to observable.
          .subscribe(

          // Success.
          data => {
              this.feedbackResponseMsg    = data["Message"];
              this.feedbackResponseStatus = data["Status"];
              console.log(data)
          },
          // Error.
          error => {
              alert(error)
          },
          // Final instructions.
          () => {
            this.clearAll();
              console.log("Finished")
          });
  }
}
