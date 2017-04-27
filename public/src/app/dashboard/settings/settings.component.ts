import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {

  constructor(@Inject("user") public user) {
  }

  ngOnInit() {
    this.user
      .subscribe(
        resp => {
          this.user = resp;
        },
        error => {
         throw error;
        }
      )
  }
}
