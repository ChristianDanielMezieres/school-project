import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Email } from '../shared/models/email.model';

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) { }

  getEmails(): Observable<Email[]> {
    return this.http.get<Email[]>('/api/emails');
  }

  countEmails(): Observable<number> {
    return this.http.get<number>('/api/emails/count');
  }

  addEmail(email: Email): Observable<Email> {
    return this.http.post<Email>('/api/email', email);
  }

  getEmail(email: Email): Observable<Email> {
    return this.http.get<Email>(`/api/email/${email._id}`);
  }

  editEmail(email: Email): Observable<string> {
    return this.http.put(`/api/email/${email._id}`, email, { responseType: 'text' });
  }

  deleteEmail(email: Email): Observable<string> {
    return this.http.delete(`/api/email/${email._id}`, { responseType: 'text' });
  }

}
