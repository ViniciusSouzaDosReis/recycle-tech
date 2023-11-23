import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ScheduleCollectionComponent } from './pages/schedule-collection/schedule-collection.component';
import { ConfirmCollectionComponent } from './pages/confirm-collection/confirm-collection.component';
import { authenticatedScheduleGuard } from './services/guards/authenticated-schedule.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'agendar-coleta',
    component: ScheduleCollectionComponent,
    canActivate: [authenticatedScheduleGuard],
  },
  {
    path: 'confirmar-coleta',
    component: ConfirmCollectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
