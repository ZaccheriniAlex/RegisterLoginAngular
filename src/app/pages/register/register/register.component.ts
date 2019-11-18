import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/features/model/User';
import { UserRegistrationClientService } from 'src/app/services/user-registration-client/user-registration-client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userClient: UserRegistrationClientService) { }

  ngOnInit() {
  }

  sendData(user: User) {
    this.userClient.sendUser(user);
  }

}
