import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'resume-request',
  templateUrl: './resume-request.component.html',
  styleUrls: ['./resume-request.component.scss']
})
export class EmailCtaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  downloadFile() {
    const fileName = "laxman_resume.pdf"; // Replace with the actual file name
    const filePath = "./assets/laxman_resume.pdf"; // Update the path based on your file location
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.click();
  }
}
