import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface User {
  name: string;
  surname: string;
  phone: string;
  birth: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  user: FormGroup;

  users: User[] = [];

  constructor(private userBuilder: FormBuilder) {
    this.user = this.userBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      birth: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    const newUser = {
      name: this.user.get('name')?.value,
      surname: this.user.get('surname')?.value,
      phone: this.user.get('phone')?.value,
      birth: this.user.get('birth')?.value,
    };
    this.users.push(newUser);
    this.user.reset();
  }
}
