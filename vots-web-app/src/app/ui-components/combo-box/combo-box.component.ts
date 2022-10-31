import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {
  @Input() dataList = [];

  constructor() { }
  ngOnInit() {
  }

}
