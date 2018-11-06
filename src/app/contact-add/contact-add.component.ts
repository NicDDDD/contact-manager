import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import { MatDialogRef, MatDialog, MatSnackBar} from '@angular/material';
import {IContact} from '../icontact';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

	data: Object = {};

  constructor(private contactService: ContactService,
  	private dialogRef: MatDialogRef<any>,
  	private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  save(data: IContact): void{
  	this.contactService.saveContact(data).subscribe((response:any) => {
  		if (response.ok == 1){
        this.notify('Contact Added');
  			this.dialog.getDialogById('contact_dialog_add').close();
  		}
  	})
  }

  close(): void{
  	this.dialogRef.close();
  }

  notify(message: string): void{
    this.snackBar.open(message,'OK',{duration: 4000});
  }

}
