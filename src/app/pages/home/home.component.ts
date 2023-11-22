import { Component } from '@angular/core';
import { CollectorsService } from 'src/app/services/collectors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  collectors: any[] = [];

  constructor(private collecetorsService: CollectorsService) {}

  ngOnInit() {
    this.collecetorsService
      .getCollectors()
      .subscribe((data) => (this.collectors = data));
  }
}
