import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadComponent } from './../upload/upload.component';
import { FileClass } from '../shared/models/fileClass.model';
import { AdmincardService } from '../services/admincard.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Admincard } from '../shared/models/admincard.model';

@Component({
  selector: 'app-admincards',
  templateUrl: './admincards.component.html',
  styleUrls: ['./admincards.component.css'],
})
export class AdmincardsComponent implements OnInit {

  admincard = new Admincard();
  admincards: Admincard[] = [];
  isLoading = true;
  isEditing = false;

  addAdmincardForm: FormGroup;


  imageUrl = new FormControl('');
  icon = new FormControl('', Validators.required);
  title = new FormControl('', Validators.required);
  text = new FormControl('', Validators.required);
  foottext = new FormControl('', Validators.required);

  filename: string;
  uploadOk: boolean;


  constructor(private admincardService: AdmincardService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getAdmincards();
    this.addAdmincardForm = this.formBuilder.group({
      imageUrl: this.imageUrl,
      icon: this.icon,
      title: this.title,
      text: this.text,
      foottext: this.foottext,
    });
  }

  getAdmincards() {
    this.admincardService.getAdmincards().subscribe(
      data => this.admincards = data,
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  onFileUploaded = (filename) => {
    this.filename = filename;
    console.log(filename);
  }

  addAdmincard() {
    this.addAdmincardForm.value.imageUrl = this.filename;
    this.admincardService.addAdmincard(this.addAdmincardForm.value).subscribe(
      (res) => {
        this.admincards.push(res);
        this.addAdmincardForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  enableEditing(admincard: Admincard) {
    this.isEditing = true;
    this.admincard = admincard;
  }

  cancelEditing() {
    this.isEditing = false;
    this.admincard = new Admincard();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the admincards to reset the editing
    this.getAdmincards();
  }

  editAdmincard(admincard: Admincard) {
    admincard.imageUrl = this.filename;
    this.admincardService.editAdmincard(admincard).subscribe(
      () => {
        this.isEditing = false;
        this.admincard = admincard;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  deleteAdmincard(admincard: Admincard) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.admincardService.deleteAdmincard(admincard).subscribe(
        () => {
          const pos = this.admincards.map(elem => elem._id).indexOf(admincard._id);
          this.admincards.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error),
      );
    }
  }


}
