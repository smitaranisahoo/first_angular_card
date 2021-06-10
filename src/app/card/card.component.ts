import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input('heading') heading ="";
@Input('title') title ="";
@Input('subtitle') subtitle ="";
@Input('item1') item1 ="";
@Input('item2') item2 ="";
@Input('item3') item3 ="";
@Input('item4') item4 ="";
@Input('item5') item5 ="";
@Input('item6') item6 ="";
@Input('item7') item7 ="";
@Input('item8') item8 ="";
  constructor() { }

  ngOnInit(): void {
  }

}
