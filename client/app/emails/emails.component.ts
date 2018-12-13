import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { EmailService } from '../services/email.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Email } from '../shared/models/email.model';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css'],
})
export class EmailsComponent implements OnInit {

  email = new Email();
  emails: Email[] = [];
  isLoading = true;
  isEditing = false;

  addEmailForm: FormGroup;
  email_sender = new FormControl('', Validators.required);
  subject = new FormControl('', Validators.required);
  message = new FormControl('', Validators.required);

  constructor(private emailService: EmailService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getEmails();
    this.addEmailForm = this.formBuilder.group({
      email_sender: this.email_sender,
      subject: this.subject,
      message: this.message,
    });
  }

  getEmails() {
    this.emailService.getEmails().subscribe(
      data => this.emails = data,
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  addEmail() {
    this.emailService.addEmail(this.addEmailForm.value).subscribe(
      (res) => {
        this.emails.push(res);
        this.addEmailForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  enableEditing(email: Email) {
    this.isEditing = true;
    this.email = email;
  }

  cancelEditing() {
    this.isEditing = false;
    this.email = new Email();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the emails to reset the editing
    this.getEmails();
  }

  editEmail(email: Email) {
    this.emailService.editEmail(email).subscribe(
      () => {
        this.isEditing = false;
        this.email = email;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  deleteEmail(email: Email) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.emailService.deleteEmail(email).subscribe(
        () => {
          const pos = this.emails.map(elem => elem._id).indexOf(email._id);
          this.emails.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error),
      );
    }
  }

}
