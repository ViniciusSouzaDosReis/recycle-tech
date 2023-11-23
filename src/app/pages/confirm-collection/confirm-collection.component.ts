import { Component } from '@angular/core';

@Component({
  selector: 'app-confirm-collection',
  templateUrl: './confirm-collection.component.html',
  styleUrls: ['./confirm-collection.component.css'],
})
export class ConfirmCollectionComponent {
  address = 'Rua do Ouro';
  number = '123';
  complement = 'Apto 101';
  neighborhood = 'Serra';
  city = 'Belo Horizonte';
  state = 'MG';

  ngOnInit(): void {
    const scheduleData = sessionStorage.getItem('scheduleForm');
    if (scheduleData) {
      const parsedScheduleData = JSON.parse(scheduleData);
      this.address = parsedScheduleData.address;
      this.number = parsedScheduleData.number;
      this.complement = parsedScheduleData.complement;
      this.neighborhood = parsedScheduleData.neighborhood;
      this.city = parsedScheduleData.city;
      this.state = parsedScheduleData.state;
      console.log(parsedScheduleData.complement)
    }
  }
}
