import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'profile-info',
	templateUrl: './profile-info.component.html',
	styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
	description: string;
	contactLinks = [
		{
			icon: "alternate_email",
			link: "mailto:laxmanr566@gmail.com",
			text: "laxmanr566@gmail.com"
		},
		{
			icon: "code",
			link: "https://github.com/laxmanr566",
			text: "github.com/laxmanr566"
		},

		{
			icon: "hub",
			link: "https://www.linkedin.com/in/laxmanramancha/",
			text: "linkedin.com/in/laxmanramancha"
		},
	];

	constructor() {
		this.description = "Hi, I'm Laxman Ramancha! I’m an Aspiring Software Developer with a Bachelor's degree in Computer Science. Proficient in Java Spring\n" +
      "framework and SQL. Strong problem-solving skills, eager to contribute to dynamic software\n" +
      "development projects. Dedicated to continuous learning and a team player with excellent\n" +
      "communication skills.";
	}

	ngOnInit(): void {
	}

}
