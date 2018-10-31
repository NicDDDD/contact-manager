import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-contact-view-dialog',
  templateUrl: './contact-view-dialog.component.html',
  styleUrls: ['./contact-view-dialog.component.css']
})
export class ContactViewDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private dialogRef: MatDialogRef<any>) { }

  ngOnInit() {
  }

  close(){
  	this.dialogRef.close();
  }

}
