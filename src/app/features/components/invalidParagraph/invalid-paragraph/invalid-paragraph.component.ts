import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-invalid-paragraph',
  templateUrl: './invalid-paragraph.component.html',
  styleUrls: ['./invalid-paragraph.component.scss']
})
export class InvalidParagraphComponent implements OnInit {

  @Input() referredFormControlName: FormControl;
  @Input() conditionToShow: boolean;

  constructor() { }

  ngOnInit() {
  }

}
