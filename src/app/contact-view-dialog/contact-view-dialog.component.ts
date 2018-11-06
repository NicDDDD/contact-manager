import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { ContactService } from '../contact.service';
import { DeleteContactComponent} from '../delete-contact/delete-contact.component'
import {IContact} from '../icontact';

@Component({
  selector: 'app-contact-view-dialog',
  templateUrl: './contact-view-dialog.component.html',
  styleUrls: ['./contact-view-dialog.component.css']
})
export class ContactViewDialogComponent implements OnInit {
	displayed: Boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
   private dialogRef: MatDialogRef<any>,
   private contactService: ContactService,
   private dialog: MatDialog,
   private snackBar: MatSnackBar ) { }

  ngOnInit() {
  }

  displayForm(): Boolean{
  	return this.displayed = true;
  }

  save(id: string, data){
  	delete data._id;
  	this.contactService.save(id,data).subscribe((response:any) => {
  		if (response.ok == 1){
        this.notify(`$data.name was updated`);
  			this.dialog.getDialogById('contact_dialog').close();
  		}
  	});
  }

  displayConfirmation(id){
    const dialogRef: MatDialogRef<DeleteContactComponent> = this.dialog.open(DeleteContactComponent,{
    id:'contact_dialog_delete',
    width: '450px',
    data: id
  });
    dialogRef.afterClosed().subscribe(confirmation => {
      if (confirmation){
        this.notify(`Contact Deleted`);
        this.dialog.getDialogById('contact_dialog').close();
      }
    });
  }

  close(){
  	this.dialogRef.close();
  }

  notify(message){
    this.snackBar.open(message,'OK',{duration: 4000})
  }

}
