import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { CheckboxItem } from 'src/app/features/components/checkbox-group/checkbox-item/checkbox-item.component';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss']
})
export class CheckboxGroupComponent implements OnInit, OnChanges {

  @Input() options = Array<CheckboxItem>();
  @Input() selectedValues: string[];

  @Output() toggle = new EventEmitter<any[]>();

  selectedSports: string[] = [];
  checkboxForm: FormGroup = this.formBuilder.group( {
    items: new FormArray([]),
  });;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.checkboxForm.valueChanges.subscribe(value => {
      const optionsChecked = new Array<any>();
      for (let i = 0; i < this.items.length; i++) {
       const isOptionChecked = this.items.get(i.toString()).value;
       if (isOptionChecked) {
        const currentOptionValue = this.options[i].value;
        optionsChecked.push(currentOptionValue);
       }
      }
      this.toggle.emit(optionsChecked);
     });
  }

  get items(): FormArray {
    return this.checkboxForm.get('items') as FormArray;
  }

  ngOnChanges() {
    if (this.items.length === 0) {
     this.options.forEach(x => {
       this.items.push(new FormControl(false));
     });
    }
    this.selectedValues.forEach(value => {
     const index: number = this.options.findIndex(opt => opt.value === value);
     if (index >= 0) {
       this.items.get(index.toString()).setValue(true);
     }
    });
   }

}
