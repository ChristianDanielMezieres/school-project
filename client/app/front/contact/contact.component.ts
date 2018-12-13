import { Component, OnInit } from '@angular/core';

import { EmailService } from '../../services/email.service';
import { ToastComponent } from '../../shared/toast/toast.component';
import { Email } from '../../shared/models/email.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
    
    this.addEmailForm = this.formBuilder.group({
      email_sender: this.email_sender,
      subject: this.subject,
      message: this.message,
    });
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

  

}
