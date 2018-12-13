import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadComponent } from './../upload/upload.component';
import { FileClass } from '../shared/models/fileClass.model';

import { MentorService } from '../services/mentor.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Mentor } from '../shared/models/mentor.model';


@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.css']
})

export class FormularComponent implements OnInit {

  
  mentor = new Mentor();
  mentors: Mentor[] = [];
  isLoading = true;
  isEditing = false;

  imageUrl = new FormControl('');
  photo = new FormControl('', Validators.required);
  filename: string;
  uploadOk: boolean;

  addMentorForm: FormGroup;
  name = new FormControl('', Validators.required);
  surname = new FormControl('', Validators.required);
  age = new FormControl('', Validators.required);
  date = new FormControl('', Validators.required);
  genders = [
    { id:1, name: 'masculin' },
    { id:2, name: 'féminin' }
  ];
  gender = new FormControl('', Validators.required);

  levelschols = [
    { id:1, level: '6ème'},
    { id:2, level: '5ème'},
    { id:3, level: '4ème'},
    { id:4, level: '3ème'},
    { id:5, level: '2ème'},
    { id:6, level: '1ère'},
    { id:7, level: 'Terminal'},
    { id:8, level: 'Universitaire'}
  ];
  level = new FormControl('', Validators.required);
  nameschols = [
    { id:1, name: 'Marceau'},
    { id:2, name: 'Fulbert'},
    { id:3, name: 'Jean_de_Beauce'},
    { id:4, name: 'Monfort'},
    { id:5, name: 'IND'},
    { id:6, name: 'IUT'},
  ];
  school = new FormControl('', Validators.required);
  phone = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  address = new FormControl('', Validators.required);
  town = new FormControl('', Validators.required);
  zip = new FormControl('', Validators.required);
  

  
  constructor(private mentorService: MentorService,
    private formBuilder: FormBuilder,
    public toast: ToastComponent) { }

  ngOnInit() {
    
    this.addMentorForm = this.formBuilder.group({
      imageUrl: this.imageUrl,
      name: this.name,
      surname: this.surname,
      age: this.age,
      date: this.date,
      gender : this.gender,
      level: this.level,
      school: this.school,
      phone: this.phone,
      email: this.email,
      address: this.address,
      town: this.town,
      zip: this.zip,
    });
  }

  addMentor() {
    console.log(this.addMentorForm);
    this.addMentorForm.value.imageUrl = this.filename;
    this.mentorService.addMentor(this.addMentorForm.value).subscribe(
      (res) => {
        this.mentors.push(res);
        this.addMentorForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  onFileUploaded = (filename) => {
    this.filename = filename;
    console.log(filename);
    }

}
