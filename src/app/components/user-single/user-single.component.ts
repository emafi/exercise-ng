import { Component, Input, OnInit } from '@angular/core';
import { UserWithoutCompanies } from 'src/app/models/User';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {
   
  @Input() users: UserWithoutCompanies [] = [];

  constructor() { }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.users = this.users.filter(e => e.id !== id )
  }
}
