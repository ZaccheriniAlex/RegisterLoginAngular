import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  name: string;
  surname: string;

  constructor(private routeActiver: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.routeActiver.snapshot.queryParamMap.get('name');

    this.surname = this.routeActiver.snapshot.queryParamMap.get('surname');
  }

}
