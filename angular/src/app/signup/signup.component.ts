import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true, // Mark the component as standalone
  imports: [CommonModule, ReactiveFormsModule],
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor() {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log('Signup successful!', this.signupForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
