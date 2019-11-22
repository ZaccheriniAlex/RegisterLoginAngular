import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/features/model/user';
import { UserClientService } from 'src/app/services/user-client/user-client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userClient: UserClientService) { }

  ngOnInit() {
  }

  sendData(user: User) {
    this.userClient.sendUser(user);
  }

}
