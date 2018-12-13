import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Tarif } from '../shared/models/tarif.model';

@Injectable()
export class TarifService {

  constructor(private http: HttpClient) { }

  getTarifs(): Observable<Tarif[]> {
    return this.http.get<Tarif[]>('/api/tarifs');
  }

  countTarifs(): Observable<number> {
    return this.http.get<number>('/api/tarifs/count');
  }

  addTarif(tarif: Tarif): Observable<Tarif> {
    return this.http.post<Tarif>('/api/tarif', tarif);
  }

  getTarif(tarif: Tarif): Observable<Tarif> {
    return this.http.get<Tarif>(`/api/tarif/${tarif._id}`);
  }

  editTarif(tarif: Tarif): Observable<string> {
    return this.http.put(`/api/tarif/${tarif._id}`, tarif, { responseType: 'text' });
  }

  deleteTarif(tarif: Tarif): Observable<string> {
    return this.http.delete(`/api/tarif/${tarif._id}`, { responseType: 'text' });
  }

}
