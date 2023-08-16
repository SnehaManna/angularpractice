import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerform!: FormGroup;
  submit: boolean = false;
  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildform();
    this.setUsertype();
  }
  buildform() {
    this.registerform = this.formbuilder.group({
      email: [null, [Validators.required, Validators.email]],
      username: [null, [Validators.required]],
      userCategory: ['employee'],
      institution: [null, [Validators.required]],
      company: [null, [Validators.required]],
      salary: [null, [Validators.required]],
    });
  }

  setUsertype() {
    const institutionControl = this.registerform.get('institution');
    const companyControl = this.registerform.get('company');
    const salaryControl = this.registerform.get('salary');
    this.registerform
      .get('userCategory')
      ?.valueChanges.subscribe((userCategory) => {
        if (userCategory === 'student') {
          institutionControl?.setValidators([Validators.required]);
          companyControl?.setValidators(null);
          salaryControl?.setValidators(null);
        }
        if (userCategory === 'employee') {
          institutionControl?.setValidators(null);
          companyControl?.setValidators([Validators.required]);
          salaryControl?.setValidators([Validators.required]);
        }
        institutionControl?.updateValueAndValidity();
        companyControl?.updateValueAndValidity();
        salaryControl?.updateValueAndValidity();
      });
  }

  onSubmit(e) {
    this.submit = true;

    if (this.registerform.valid) {
      localStorage.setItem('keyName', JSON.stringify(this.registerform.value));
      console.log(this.registerform.value);
    }
  }
}
