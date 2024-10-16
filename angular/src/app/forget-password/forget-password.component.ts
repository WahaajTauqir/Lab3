import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class ForgetPasswordComponent {
  forgetPasswordForm: FormGroup;

  constructor() {
    this.forgetPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit(): void {
    if (this.forgetPasswordForm.valid) {
      console.log('Reset link sent to:', this.forgetPasswordForm.value.email);
    } else {
      console.log('Form is invalid');
    }
  }
}
