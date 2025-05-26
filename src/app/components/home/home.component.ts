import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private toastr: ToastrService) {}

  downloadCV(event: Event) {
    const link = event.target as HTMLAnchorElement;

    // التحقق من وجود الملف
    fetch(link.href)
      .then((response) => {
        if (response.ok) {
          this.toastr.success('CV Downloaded Success');
        } else {
          this.toastr.error('File not found or error in downloading');
        }
      })
      .catch((error) => {
        this.toastr.error('Error downloading file');
        console.error('Download error:', error);
      });
  }
}
