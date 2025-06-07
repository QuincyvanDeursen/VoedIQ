import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  constructor(private toastService: ToastService) {}

  ngOnInit() {}

  formData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.toastService.error('Vul alle verplichte velden correct in.');
      return;
    }

    emailjs
      .send(
        'service_z5rawg4',
        'template_erotf1i',
        {
          name: this.formData.name,
          email: this.formData.email,
          message: this.formData.message,
          user_email: this.formData.email,
          time: new Date().toLocaleString('nl-NL', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          }),
        },
        '9aq2Mys05llTNQssx'
      )
      .then(() => {
        this.toastService.success('Uw bericht is succesvol verzonden!');
        form.resetForm();
      })
      .catch((error) => {
        this.toastService.error(
          'Er is een fout opgetreden bij het verzenden van uw bericht.'
        );
        console.error(error);
      });
  }
}
