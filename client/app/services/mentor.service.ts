import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Mentor } from '../shared/models/mentor.model';

@Injectable()
export class MentorService {

  constructor(private http: HttpClient) { }

  getMentors(): Observable<Mentor[]> {
    return this.http.get<Mentor[]>('/api/mentors');
  }

  countMentors(): Observable<number> {
    return this.http.get<number>('/api/mentors/count');
  }

  addMentor(mentor: Mentor): Observable<Mentor> {
    return this.http.post<Mentor>('/api/mentor', mentor);
  }

  getMentor(mentor: Mentor): Observable<Mentor> {
    return this.http.get<Mentor>(`/api/mentor/${mentor._id}`);
  }

  editMentor(mentor: Mentor): Observable<string> {
    return this.http.put(`/api/mentor/${mentor._id}`, mentor, { responseType: 'text' });
  }

  deleteMentor(mentor: Mentor): Observable<string> {
    return this.http.delete(`/api/mentor/${mentor._id}`, { responseType: 'text' });
  }

}
