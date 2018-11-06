import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {IContact} from './icontact'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  list(): Observable<any>{
  	return this.http.get('http://localhost:3000/api/contacts');
  }

  view(id: string): Observable<any>{
  	return this.http.get(`http://localhost:3000/api/contacts/${id}`)
  }

  save(id: string,data: IContact): Observable<any>{
  	return this.http.post(`http://localhost:3000/api/contacts/${id}`,data);
  }

  saveContact(data: IContact): Observable<any>{
    return this.http.post(`http://localhost:3000/api/contacts`,data);
  }

  deleteContact(id: string): Observable<any>{
    return this.http.delete(`http://localhost:3000/api/contacts/${id}`);
  }
}
