import { Component, Input } from '@angular/core';
import { User } from 'src/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
    @Input() user!:User;             /* Here ! operator is used to tell that the user property will be initialized at runtime */
    @Input() callBack!:(user:User)=>void;    
    @Input() btnName?:string;    /*  optional chaining "?" is used with the "btnName" properties hold a value of their type or be undefined or null */
}
