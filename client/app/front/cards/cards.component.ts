import { Admincard } from './../../shared/models/admincard.model';
import { AdmincardService } from './../../services/admincard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {

  admincard = new Admincard();
  admincards: Admincard[] = [];
  isLoading = true;

  constructor(private admincardService: AdmincardService) {}

  ngOnInit() {
    this.getAdmincards();
  }

  getAdmincards() {
    this.admincardService.getAdmincards().subscribe(
      data => this.admincards = data,
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

}
