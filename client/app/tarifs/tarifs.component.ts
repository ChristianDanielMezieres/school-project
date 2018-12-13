import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { TarifService } from '../services/tarif.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Tarif } from '../shared/models/tarif.model';

@Component({
  selector: 'app-tarifs',
  templateUrl: './tarifs.component.html',
  styleUrls: ['./tarifs.component.css'],
})
export class TarifsComponent implements OnInit {

  tarif = new Tarif();
  tarifs: Tarif[] = [];
  isLoading = true;
  isEditing = false;

  addTarifForm: FormGroup;
  plan = new FormControl('', Validators.required);
  price = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);

  constructor(private tarifService: TarifService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getTarifs();
    this.addTarifForm = this.formBuilder.group({
      plan: this.plan,
      price: this.price,
      description: this.description,
    });
  }

  getTarifs() {
    this.tarifService.getTarifs().subscribe(
      data => this.tarifs = data,
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  addTarif() {
    this.tarifService.addTarif(this.addTarifForm.value).subscribe(
      (res) => {
        this.tarifs.push(res);
        this.addTarifForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  enableEditing(tarif: Tarif) {
    this.isEditing = true;
    this.tarif = tarif;
  }

  cancelEditing() {
    this.isEditing = false;
    this.tarif = new Tarif();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the tarifs to reset the editing
    this.getTarifs();
  }

  editTarif(tarif: Tarif) {
    this.tarifService.editTarif(tarif).subscribe(
      () => {
        this.isEditing = false;
        this.tarif = tarif;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  deleteTarif(tarif: Tarif) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.tarifService.deleteTarif(tarif).subscribe(
        () => {
          const pos = this.tarifs.map(elem => elem._id).indexOf(tarif._id);
          this.tarifs.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error),
      );
    }
  }

}
