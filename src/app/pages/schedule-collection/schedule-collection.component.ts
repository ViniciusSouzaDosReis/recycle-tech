import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-schedule-collection',
  templateUrl: './schedule-collection.component.html',
  styleUrls: ['./schedule-collection.component.css'],
})
export class ScheduleCollectionComponent {
  scheduleForm = new FormGroup({
    cep: new FormControl('', [Validators.required]),
    address: new FormControl(''),
    number: new FormControl(''),
    complement: new FormControl(''),
    neighborhood: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
  });

  buttonDisabled = true;

  constructor(private cepService: CepService, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.scheduleForm.valueChanges.subscribe((value) => {
      if (value.cep) {
        if (value.cep.length === 8) {
          this.cepService.getCepData(value.cep).subscribe((address) => {
            this.scheduleForm.patchValue({
              address: address.logradouro,
              neighborhood: address.bairro,
              city: address.localidade,
              state: address.uf,
            });
          });
        }
        if (value.cep.length !== 8) {
          this.scheduleForm.patchValue({
            address: '',
            neighborhood: '',
            city: '',
            state: '',
          });
        }
      }
      if (
        value.address &&
        value.number &&
        value.neighborhood &&
        value.city &&
        value.state
      ) {
        this.buttonDisabled = false;
      } else {
        this.buttonDisabled = true;
      }
    });
  }

  onClick() {
    sessionStorage.setItem(
      'scheduleForm',
      JSON.stringify(this.scheduleForm.value)
    );
    this.router.navigate(['agendar-coleta/confirmacao']);
  }
}
