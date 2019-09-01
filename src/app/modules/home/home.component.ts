import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public listCoursesCard = [
    {title: 'Angular' , image:{ src: '../../../assets/images/angular-icon-1.svg' , alt:'Curso de Angular'} , description: 'Curso de Angular'},
    {title: 'Spring' , image:{ src: '../../../assets/images/spring-logo.png' , alt:'Curso de Spring'} , description: 'Curso de Spring'},
    {title: 'React' , image:{ src: '../../../assets/images/react.png' , alt:'Curso de React'} , description: 'Curso de React'},
    {title: 'Node' , image:{ src: '../../../assets/images/node.svg' , alt:'Curso de Node'} , description: 'Curso de Node'},
  ];

  public titleText = 'Comece a aprender agora sua ferramenta favorita!';

  constructor() { }

  ngOnInit() {
  }

}
