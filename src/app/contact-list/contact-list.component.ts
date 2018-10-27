import { Component, OnInit } from '@angular/core';
import {IContact} from '../icontact'
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
	private contacts: IContact[];

  	constructor(private http: HttpClient) {
  	this.http.get('http://localhost:3000/api/contacts')
    .subscribe((response : any) => this.contacts = response);
    }

  	ngOnInit() {
  	}

}

