import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MentorService } from '../services/mentor.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Mentor } from '../shared/models/mentor.model';



@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css'],
})
export class MentorsComponent implements OnInit {

  mentor = new Mentor();
  mentors: Mentor[] = [];
  isLoading = true;
  isEditing = false;

  selectedMentors = [];
  selectedFeatures: any;

  public search;

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
    { id: 1, name: 'masculin' },
    { id: 2, name: 'féminin' },
  ];
  gender = new FormControl('', Validators.required);

  levelschols = [
    { id: 1, level: '6ème' },
    { id: 2, level: '5ème' },
    { id: 3, level: '4ème' },
    { id: 4, level: '3ème' },
    { id: 5, level: '2ème' },
    { id: 6, level: '1ère' },
    { id: 7, level: 'Terminal' },
    { id: 8, level: 'Universitaire' },
  ];
  level = new FormControl('', Validators.required);
  nameschols = [
    { id: 1, name: 'Marceau' },
    { id: 2, name: 'Fulbert' },
    { id: 3, name: 'Jean_de_Beauce' },
    { id: 4, name: 'Monfort' },
    { id: 5, name: 'IND' },
    { id: 6, name: 'IUT' },
  ];
  school = new FormControl('', Validators.required);
  infos = [
    { id: 1, verif: 'Verifié' },
    { id: 2, verif: 'En attente' },
  ];
  verified = new FormControl('');
  phone = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  address = new FormControl('', Validators.required);
  town = new FormControl('', Validators.required);
  zip = new FormControl('', Validators.required);

  constructor(private mentorService: MentorService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getMentors();
    this.addMentorForm = this.formBuilder.group({
      imageUrl: this.imageUrl,
      name: this.name,
      surname: this.surname,
      age: this.age,
      date: this.date,
      gender : this.gender,
      level: this.level,
      school: this.school,
      verified: this.verified,
      phone: this.phone,
      email: this.email,
      address: this.address,
      town: this.town,
      zip: this.zip,
    });

  }

  onFileUploaded = (filename) => {
    this.filename = filename;
    console.log(filename);
  }

  getMentors() {
    this.mentorService.getMentors().subscribe(
      data => this.mentors = data,
      error => console.log(error),
      () => this.isLoading = false,
    );
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

  enableEditing(mentor: Mentor) {
    this.isEditing = true;
    this.mentor = mentor;
  }

  cancelEditing() {
    this.isEditing = false;
    this.mentor = new Mentor();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the mentors to reset the editing
    this.getMentors();
  }

  editMentor(mentor: Mentor) {
    mentor.imageUrl = this.filename;
    this.mentorService.editMentor(mentor).subscribe(
      () => {
        this.isEditing = false;
        this.mentor = mentor;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  searchTowns() {
    this.selectedMentors = [];
    const lowerSearch = this.search.toLowerCase();
    this.mentors.forEach((element) => {
      const lowerName = element.town.toLowerCase();
      if (lowerName.indexOf(lowerSearch) > -1) {
        this.selectedMentors.push({ N: element });
      }
    });
  }

  deleteMentor(mentor: Mentor) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.mentorService.deleteMentor(mentor).subscribe(
        () => {
          const pos = this.mentors.map(elem => elem._id).indexOf(mentor._id);
          this.mentors.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error),
      );
    }
  }

}
