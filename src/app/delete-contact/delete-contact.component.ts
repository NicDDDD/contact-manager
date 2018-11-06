import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css']
})
export class DeleteContactComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public id:any,
   private dialogRef: MatDialogRef<any>,
   private contactService: ContactService,
   private dialog: MatDialog ) { }


  close(){
  	this.dialogRef.close();
  }

  confirm(){
  	this.contactService.deleteContact(this.id).subscribe((response:any) => {
  		if (response.ok ==1){
  			this.dialogRef.close(true);
  		}
  	});
  }

  ngOnInit() {
  }

}
