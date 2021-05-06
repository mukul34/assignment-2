import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  user: FormGroup;
  tech = [];
  showModal = false;
  userData = [];

  toggleModal() {
    this.showModal = !this.showModal;
  }

  onSubmit() {
    this.user.value.technology = this.tech;

    if (this.userData.length > 0) {
      this.userData.pop();
    }
    this.userData.push(this.user.value);
  }

  checking(value: string) {
    if (this.tech.includes(value)) {
      const index = this.tech.indexOf(value);
      this.tech.splice(index, 1);
    } else {
      this.tech.push(value);
    }
  }

  constructor(private formbuilder: FormBuilder) {
    this.user = formbuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z\\s]*$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      mobile: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('[6-9]\\d{9}'),
        ],
      ],
      gender: new FormControl(),
      technology: [[]],
      category: new FormControl(),
    });
  }

  ngOnInit(): void {}
}
