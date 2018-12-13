import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Admincard } from '../shared/models/admincard.model';

@Injectable()
export class AdmincardService {

  constructor(private http: HttpClient) { }

  getAdmincards(): Observable<Admincard[]> {
    return this.http.get<Admincard[]>('/api/admincards');
  }

  countAdmincards(): Observable<number> {
    return this.http.get<number>('/api/admincards/count');
  }

  addAdmincard(admincard: Admincard): Observable<Admincard> {
    return this.http.post<Admincard>('/api/admincard', admincard);
  }

  getAdmincard(admincard: Admincard): Observable<Admincard> {
    return this.http.get<Admincard>(`/api/admincard/${admincard._id}`);
  }

  editAdmincard(admincard: Admincard): Observable<string> {
    return this.http.put(`/api/admincard/${admincard._id}`, admincard, { responseType: 'text' });
  }

  deleteAdmincard(admincard: Admincard): Observable<string> {
    return this.http.delete(`/api/admincard/${admincard._id}`, { responseType: 'text' });
  }

}
