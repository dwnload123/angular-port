import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardTitle: string = '';
  @Input() cardImage = {
    src: '',
    alt: ''
  };
  @Input() cardDescription: string = '';

  constructor() { }

  ngOnInit() {
  }

}
