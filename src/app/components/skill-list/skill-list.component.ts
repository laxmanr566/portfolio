import { Component, OnInit } from '@angular/core';
// import { locate } from '@iconify/json';

@Component({
	selector: 'skill-list',
	templateUrl: './skill-list.component.html',
	styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
	devOpsStack: Array<any>;
	feWebStack: Array<any>;
	beWebStack: Array<any>;
	generalStack: Array<any>;

	constructor() {
		this.devOpsStack = [
			{
				icon: "codicon:terminal-linux",
				text: "Linux"
			},
			{
				icon: "fa-brands:jenkins",
				text: "Jenkins"
			},
			{
				icon: "simple-icons:sonarqube",
				text: "Sonarqube"
			},
			{
				icon: "fa-brands:docker",
				text: "Docker"
			},
			{
				icon: "codicon:terminal-bash",
				text: "Shell scripting"
			},
			{
				icon: "cib:amazon-aws",
				text: "Amazon EC2"
			},
			{
				icon: "cib:cloudflare",
				text: "Cloudflare"
			},
			{
				icon: "fa-brands:linode",
				text: "Linode"
			},
		];

		this.feWebStack = [
			{
				icon: "fa-brands:angular",
				text: "Angular"
			},
			{
				icon: "cib:typescript",
				text: "TypeScript"
			},
			{
				icon: "fa-brands:html5",
				text: "HTML5"
			},
			{
				icon: "fa-brands:css3",
				text: "CSS3"
			},
			{
				icon: "cib:javascript",
				text: "JavaScript"
			},
		];

		this.beWebStack = [
			{
				icon: "mdi:language-java",
				text: "JAVA"
			},
			{
				icon: "cib:spring",
				text: "Spring"
			},
      {
        icon: "simple-icons:springboot",
        text: "Spring Boot"
      },
      {
        icon: "devicon:mysql",
        text: "MySQL"
      },
      {
        icon: "carbon:logo-python",
        text: "Python"
      },
      {
        icon: "devicon-plain:nhibernate",
        text: "Hibernate"
      },
      {
        icon: "cib:php",
        text: "PHP"
      }
		];

		this.generalStack = [

			{
				icon: "cib:git",
				text: "Git"
			},
			{
				icon: "cib:github",
				text: "GitHub"
			},
			{
				icon: "cib:bitbucket",
				text: "BitBucket"
			},
			{
				icon: "cib:vim",
				text: "Vim"
			},
			{
				icon: "devicon-plain:intellij",
				text: "Intellij IDEA"
			},
			{
				icon: "mdi:ubuntu",
				text: "Ubuntu"
			},
			{
				icon: "cib:jira",
				text: "Jira"
			},
			{
				icon: "mdi:docker",
				text: "Docker"
			},
			{
				icon: "mdi:aws",
				text: "AWS"
			}
		];
	}

	ngOnInit(): void {
	}

}
