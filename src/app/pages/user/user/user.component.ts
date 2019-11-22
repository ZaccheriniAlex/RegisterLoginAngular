import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  username: string;

  constructor(private routeActiver: ActivatedRoute) { }

  //TODO: REFACTOR WITHOUT SNAPSHOT
  ngOnInit() {
    this.routeActiver.queryParamMap.subscribe( queryParams => {
      this.username = queryParams.get('username');
    });
  }

}
