import { Component, OnInit } from '@angular/core';
import {IContact} from '../icontact'
import {HttpClient} from '@angular/common/http';
import { ContactViewDialogComponent} from '../contact-view-dialog/contact-view-dialog.component';

import {ContactService} from '../contact.service';
import {MatTable ,MatDialog, MatDialogRef} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
  displayedColumns: string[] = ['name','phone','email','view'];
  dataSource =  new ContactDataSource(this.contactService);

	private contacts: IContact[];

  	constructor(private contactService: ContactService, private dialog: MatDialog) {
  	this.contactService.list()
    .subscribe((response : any) => this.contacts = response);
    }

    openDialog(id){ //generated dynamically so needs to be added as an entryComponent
      this.contactService.view(id).subscribe((response:any) => {
        const dialogRef = this.dialog.open(ContactViewDialogComponent,{
          id: 'contact_dialog',
          width: '450px',
          data: response
        });
      });
    }

  	ngOnInit() {
  	}

}

export class ContactDataSource extends DataSource<any>{
  constructor(private contactService: ContactService){
    super();
  }

  connect(): any{
    return this.contactService.list();
  }

  disconnect(){

  }
}

