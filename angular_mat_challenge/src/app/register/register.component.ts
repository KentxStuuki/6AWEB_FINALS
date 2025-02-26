import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import  { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';


import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

interface Platform {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatSelectModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  Platforms: Platform[] = [
    {value: 'Xbox Series XJS', viewValue: 'Xbox Series XJS'},
    {value: 'Xbox One-1', viewValue: 'Xbox One'},
    {value: 'PlayStation 4', viewValue: 'PlayStation 4'},
  ];
  userName: string = "";
  email: string = "";
  password: string = "";
  birthDate!: Date;
  submitted = false;

  formdata: FormGroup = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    birthDate: new FormControl(null, [Validators.required]),
  })
Platform: any;

  OnclickSubmit(data: {
    angularSkillLevel: number;
    userName: string;
    email: string;
    password: string;
    birthDate: Date;
  })

  {
    this.submitted = true;
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
    this.birthDate = data.birthDate;


    if (this.formdata.valid) {
      console.log("Form Submitted!", this.formdata.value);
    } else {
      console.log("Form is not valid!")
    }
  }
}
