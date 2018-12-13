import { Component, OnInit } from '@angular/core';

import { MentorService } from '../../services/mentor.service';
import { Mentor } from '../../shared/models/mentor.model';
import { ToastComponent } from '../../shared/toast/toast.component';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {


  isLoading = true;
  isEditing = false;

  selectedMentors = [];
  selectedFeatures: any;

  mentors: Mentor[] = [];


  public search;

  constructor(
    private mentorService: MentorService,
    public toast: ToastComponent) { }

  ngOnInit() {
    this.getMentors();

  }

  getMentors() {
    this.mentorService.getMentors().subscribe(
      data => this.mentors = data,
      error => console.log(error),
      () => this.isLoading = false,
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

  openNav() {
    console.log('test');

    document.getElementById('mySidenav').style.width = '100%';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }
}
