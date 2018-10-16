import { Component, OnInit } from '@angular/core';
import {IContact} from '../icontact'
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
	private contacts: IContact[];

  	constructor(private http: Http) {
  	this.http.get('http://localhost:3000/api/contacts').pipe(map(response => response.json())).subscribe(response => this.contacts = response) }

  	ngOnInit() {
  	}

}

