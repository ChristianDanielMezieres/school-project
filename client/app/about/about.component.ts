import { Component, OnInit } from '@angular/core';
import { TarifService } from '../services/tarif.service';
import { Tarif } from '../shared/models/tarif.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  tarif = new Tarif();
  tarifs: Tarif[] = [];
  isLoading = true;

  constructor(private tarifService: TarifService) { }

  ngOnInit() {
    this.getTarifs();
  }

  getTarifs() {
    this.tarifService.getTarifs().subscribe(
      data => this.tarifs = data,
      error => console.log(error),
      () => this.isLoading = false,
    );
  }


}
