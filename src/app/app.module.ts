import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { VidListComponent } from './vid-list/vid-list.component';
import { VidDetailComponent } from './vid-detail/vid-detail.component';
import { VidHeaderComponent } from './vid-header/vid-header.component';
import { VidItemComponent } from './vid-list/vid-item/vid-item.component';

@NgModule({
  declarations: [
    AppComponent,
    VidListComponent,
    VidDetailComponent,
    VidHeaderComponent,
    VidItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
