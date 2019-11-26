import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, FormArrayName } from '@angular/forms';
import { confirmPasswordValidator } from 'src/app/features/validators/confirm-password-validator/confirm-password-validator';
import { EventEmitter } from '@angular/core';
import { User } from 'src/app/features/model/user';
import { SportClientService } from 'src/app/services/sport-client/sport-client.service';
import { CheckboxItem } from '../../checkbox-group/checkbox-item/checkbox-item.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  @Output() sendedData = new EventEmitter<User>();

  allSports = [{
    name: "calcio",
    value: "Calcio"
  },
  {
    name: "basket",
    value: "Basket"
  },
  {
    name: "altro",
    value: "Altro"
  }];

  allHobbies = [{
    name: "pesca",
    value: "Pesca"
  },
  {
    name: "cavallo",
    value: "Cavallo"
  },
  {
    name: "altro",
    value: "Altro"
  }];

  registrationGroup: FormGroup;
  submitted: boolean = false;
  hobbiesOptions = new Array<CheckboxItem>();
  selectedHobbies = [];

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.registrationGroup = this.formBuilder.group( {
      name: ['', [Validators.required] ],
      surname: ['', [Validators.required] ],
      mail: ['', [Validators.required, Validators.email] ],
      user: ['', [Validators.required] ],
      password: ['', [Validators.required] ],
      confirmPassword: ['', [Validators.required] ],
      eta: ['', [Validators.required]],
      gender: ['male', [Validators.required]],
      civilState: ['sposato', [Validators.required]],
      sports: this._createCheckboxSportGroup(),
    },
    {
      validators: [confirmPasswordValidator()],
    });

    this.hobbiesOptions = this.allHobbies.map(x => new CheckboxItem(x.value, x.name));
  }

  get name() { return this.registrationGroup.get('name'); }
  get surname() { return this.registrationGroup.get('surname'); }
  get mail() { return this.registrationGroup.get('mail'); }
  get user() { return this.registrationGroup.get('user'); }
  get password() { return this.registrationGroup.get('password'); }
  get confirmPassword() { return this.registrationGroup.get('confirmPassword'); }
  get eta() { return this.registrationGroup.get('eta'); }
  get gender() { return this.registrationGroup.get('gender'); }
  get civilState() { return this.registrationGroup.get('civilState'); }
  get sports() { return this._getSelectedSports() }
  get hobbies() { return this.selectedHobbies }

  _createCheckboxSportGroup(){
    const arr = this.allSports.map(sport => {
      return new FormControl();
    });
    return new FormArray(arr);
  }

  _getSelectedSports() {
    let selectedSports: string[] = [];
    this.registrationGroup.controls.sports['controls'].map((sport, i) => {
      if (sport.value) {
        selectedSports.push(this.allSports[i].value);
      };
    });
    return selectedSports;
  }

  onChangeHobbies(selectedSports: string[]) {
    this.selectedHobbies = selectedSports;
    console.log(this.selectedHobbies);
  }

  sendData() {
    this.submitted = true;
    if (this.registrationGroup.valid) {
      this.sendedData.emit(this._getUserFromForm());
      window.alert('Registrazione avvenuta con successo');
    }
  }

  resetData() {
    this.registrationGroup.reset();
  }

  private _getUserFromForm(): User {
    return new User(this.name.value, this.surname.value, this.mail.value, this.user.value,
      this.password.value, this.eta.value, this.gender.value, this.civilState.value, this.sports, this.hobbies);
  }
}
