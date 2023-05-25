import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {
  protected contacts: any =[
    {id:1,surname:'Nowak',firstname:'krzys',phonenumber:'000000000'}
  ]

}
