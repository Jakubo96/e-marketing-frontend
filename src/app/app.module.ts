import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from 'app/app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot(),
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
