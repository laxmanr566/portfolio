import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	footerLinks = [
		{
			icon: "mail",
			link: "mailto:laxmanr566@gmail.com",
			text: "laxmanr566@gmail.com"
		},
		{
			icon: "code",
			link: "https://github.com/laxmanr566",
			text: "github.com/laxmanr566"
		},
		{
			icon: "work",
			link: "https://www.linkedin.com/in/laxmanramancha/",
			text: "linkedin.com/in/laxmanramancha"
		},
	];

  constructor() { }

  ngOnInit(): void {
  }

}
