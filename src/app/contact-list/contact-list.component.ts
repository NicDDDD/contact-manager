import { Component, OnInit } from '@angular/core';
import {IContact} from '../icontact'
import {HttpClient} from '@angular/common/http';
import { ContactViewDialogComponent} from '../contact-view-dialog/contact-view-dialog.component';
import {ContactAddComponent} from '../contact-add/contact-add.component';

import {ContactService} from '../contact.service';
import {MatTable ,MatDialog, MatDialogRef} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
  displayedColumns: string[] = ['name','phone','email','view'];
  dataSource: DataSource<any> =  new ContactDataSource(this.contactService);

	private contacts: IContact[];

  	constructor(private contactService: ContactService, private dialog: MatDialog) {
  	// this.contactService.list()
   //  .subscribe((response : any) => this.contacts = response);
    }

    openDialog(id: string):void{ //generated dynamically so needs to be added as an entryComponent
      this.contactService.view(id).subscribe((response: Promise<Response>) => {
        const dialogRef: MatDialogRef<ContactViewDialogComponent> = this.dialog.open(ContactViewDialogComponent,{
          id: 'contact_dialog',
          width: '450px',
          data: response
        });
        dialogRef.afterClosed().subscribe(() => this.dataSource = new ContactDataSource(this.contactService))
      });
    }

    openAddDialog(){//also generated dynamically
      const dialogRef: MatDialogRef<ContactAddComponent> = this.dialog.open(ContactAddComponent,{
        id:'contact_dialog_add',
        width: '450px',
      });
      dialogRef.afterClosed().subscribe(() => this.dataSource = new ContactDataSource(this.contactService))
    }

  	ngOnInit() {
  	}

}

export class ContactDataSource extends DataSource<any>{
  constructor(private contactService: ContactService){
    super();
  }

  connect(): Observable<any>{
    return this.contactService.list();
  }

  disconnect(){

  }
}

