import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from './model/user';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild('form', null) form: NgForm;

  defaultRegion = 'ua';
  userData: User;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmited() {
    this.userData = this.form.value;
    console.log(this.userData);
  }
}
