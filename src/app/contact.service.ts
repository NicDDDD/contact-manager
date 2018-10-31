import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  list(){
  	return this.http.get('http://localhost:3000/api/contacts');
  }

  view(id){
  	return this.http.get(`http://localhost:3000/api/contacts/${id}`)
  }
}
