import { Component, OnInit } from "@angular/core";

declare var BrowserPrint: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  selected_device: any;

  ngOnInit() {
    BrowserPrint.getDefaultDevice(
      "printer",
      function(device) {
        this.selected_device = device;
      },
      function(error) {
        debugger;
      }
    );
  }
}
