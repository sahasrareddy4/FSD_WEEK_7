import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$')
    ]),

    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ])
  });

  submitForm() {
    if (this.contactForm.valid) {
      alert('Form submitted successfully!');
      console.log(this.contactForm.value);
    } else {
      alert('Please fill all fields correctly.');
      this.contactForm.markAllAsTouched();
    }
  }
}
