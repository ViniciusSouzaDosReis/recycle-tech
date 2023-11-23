import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RecycleCardComponent } from './componentes/recycle-card/recycle-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleCollectionComponent } from './pages/schedule-collection/schedule-collection.component';
import { ConfirmCollectionComponent } from './pages/confirm-collection/confirm-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecycleCardComponent,
    ScheduleCollectionComponent,
    ConfirmCollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
