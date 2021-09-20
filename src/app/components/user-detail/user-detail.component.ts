import { Component, OnInit } from '@angular/core';
import { Gender, Role, Address, User } from 'src/app/models/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User = {
    id: 3487,
      name: 'Mario',
      surname: 'Rossi',
      age: 25,
      dateOfBirth: '1995-14-12',
      address:  {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: "00100"
      },
      role: Role.STAFF, 
      username: 'MarioRossi80',
      profilePhotoUrl: 'https://bit.ly/3yRngEP',
      companies: [
        {
                id: 148979,
                name: 'Develhope',
                description: 'La migliore',
                location: {
                    city: 'Palermo',
                    street: 'Via Libertà 58',
                    postalCode: "90139"
                }
            },
            {
                id: 123123,
                name: 'Apple',
                description: 'E insomma...',
                location: {
                    city: 'Cupertino',
                    street: 'One Apple Park Way',
                    postalCode: "95014"
                }
            }
      ],
      gender: Gender.MALE // Generi possibili: 'male', 'female', 'other'
  }

  // keepOrder = (a: any, b: any) => {
  //   return a;
  // }

  // isObject(val: any): boolean { return typeof val === 'object'};

  // isPhoto(val: string): boolean { return val === "profilePhotoUrl"};

  // isAddress(val: string): boolean { return val === "address"};

  // makeString = (val: any) => {
  //   return JSON.stringify(val);
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
