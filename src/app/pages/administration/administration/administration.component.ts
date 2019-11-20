import { Component, OnInit } from '@angular/core';
import { AllCommunityModules } from '@ag-grid-community/all-modules'
import { UserLoginClientService } from 'src/app/services/user-client/user-client.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  columnDefs = [
    { headerName: 'UserName', field: 'name' },
    { headerName: 'UserSurname', field: 'surname', filter: true },
    { headerName: 'UserMail', field: 'mail' },
    { headerName: 'UserUsername', field: 'user' },
  ];

  rowData: any;

  modules = AllCommunityModules;

  constructor(private userClient: UserLoginClientService) { }

  ngOnInit() {
    this.rowData = this.userClient.getUsers();
  }

}
