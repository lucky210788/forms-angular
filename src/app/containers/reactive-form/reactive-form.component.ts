import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required, , Validators.pattern('^[0-9а-яА-Яa-zA-Z]+$')]),
      lastName: new FormControl('', [Validators.required, , Validators.pattern('^[0-9а-яА-Яa-zA-Z]+$')]),
      login: new FormControl('', [Validators.required, , Validators.pattern('^[0-9a-zA-Z]+$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(10)]),
      confirmationPassword: new FormControl('', [Validators.required]),
      region: new FormControl('usa', [Validators.required]),
      gender: new FormControl(''),
      promotionalEmails: new FormControl(false),
      additionalInfo: new FormControl('')
    }, this.pwdMatchValidator);
  }

  pwdMatchValidator(form: FormGroup) {
    return form.get('password').value === form.get('confirmationPassword').value
      ? null : {'mismatch': true};
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
