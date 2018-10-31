import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactService } from './contact.service';
import { FormsModule } from '@angular/forms';

import { MatTableModule, MatButtonModule, MatDialogModule, MatIconModule, MatFormFieldModule
, MatInputModule } from '@angular/material';
import { ContactViewDialogComponent } from './contact-view-dialog/contact-view-dialog.component';

@NgModule({
  declarations: [ //for modules that are generated 
    AppComponent,
    ContactListComponent,
    ContactViewDialogComponent
  ],
  entryComponents:[ //for dynamically created components
    ContactViewDialogComponent
  ],
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [ //for services
    ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
