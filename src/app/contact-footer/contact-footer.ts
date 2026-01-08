import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BackendService} from '../../shared/services/backend-service';

@Component({
  standalone: true,
  selector: 'app-contact-footer',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './contact-footer.html',
  styleUrl: './contact-footer.css',
})
export class ContactFooter {
  submitButtonEnabled = true;
  contactForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private server: BackendService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      this.server.sendContactMessage(this.contactForm.value).subscribe({
        error: err => {console.log(err.message)},
        complete: () => {this.submitButtonEnabled = false;}
      });
    }
  }
}
