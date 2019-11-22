import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from 'src/app/features/validators/confirm-password-validator/confirm-password-validator';
import { EventEmitter } from '@angular/core';
import { User } from 'src/app/features/model/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  @Output() sendedData = new EventEmitter<User>();

  valore;
  registrationGroup: FormGroup;
  submitted: boolean = false;

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
      sport: ['', [Validators.required]],
    },
    {
      validators: [confirmPasswordValidator()],
    });
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
  get sport() { return this.registrationGroup.get('sport'); }


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
      this.password.value, this.eta.value, this.gender.value, this.civilState.value, this.sport.value);
  }
}
