import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { NgToastService } from 'ng-angular-popup';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.scss']
})
export class CreateRegistrationComponent implements OnInit {
  public packages: string[] = ["Monthly", "Quarterly", "Yearly"];
  public genders: string[] = ["Male", "Female"];
  public importantList: string[] = ["Toxic fat reduction", "Energy and endurance", "building lean muscle", "healthier digestive system", "super craving body", "fitness"];

  public registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService, private toastService: NgToastService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: [""],
      lastName: [""],
      email: [""],
      mobile: [""],
      weight: [""],
      height: [""],
      bmi: [""],
      bmiResult: [""],
      gender: [""],
      requireTrainer: [""],
      package: [""],
      important: [""],
      haveGymBefore: [""],
      enquiryDate: [""],
    });

    this.registerForm.controls["height"].valueChanges.subscribe(res => {
      this.calculateBmi(res);
    });
  }

  submit() {
    this.api.postRegistration(this.registerForm.value)
    .subscribe(res => {
      this.toastService.success({ detail: "Success", summary: "Enquiry added", duration: 3000 });
      this.registerForm.reset();
    });
  }

  calculateBmi(heightValue: number) {
    const weight = this.registerForm.value.height;
    const height = heightValue;

    const bmi = weight / (height * height);

    this.registerForm.controls["bmi"].patchValue(bmi);

    switch (true) {
      case bmi < 18.5:
        this.registerForm.controls["bmiResult"].patchValue("Underweight");
        break;
      case (bmi >= 18.5 && bmi < 25):
        this.registerForm.controls["bmiResult"].patchValue("Normal");
        break;
      case (bmi >= 25 && bmi < 30):
        this.registerForm.controls["bmiResult"].patchValue("Overweight");
        break;
      default:
        this.registerForm.controls["bmiResult"].patchValue("Obese");
        break;
    }
  }
}
