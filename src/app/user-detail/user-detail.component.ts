import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from 'src/user';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent {
  selectedUser?:User;                             /*  optional chaining "?" is used with the "selectedUser" and "id" properties */
  id?:string;                                        /*  hold a value of their type or be undefined or null */
  sub:any;

  constructor(private route:ActivatedRoute,private userService:UserService){
    
  }
  
  /* This hook is called after the component is initialized. It subscribes to the paramMap observable of the ActivatedRoute and sets 
  the id property to the value of the id parameter in the URL. 
  If there is no id parameter, it sets the id property to "0". It then calls the setSelectedUser method with the id value as an argument. */
  ngOnInit(){  
    this.sub=this.route.paramMap.subscribe((params:ParamMap)=>{
      this.id=params.get("id") || "0";
      this.setSelectedUser(this.id);
    });
  }

  setSelectedUser(id:string){
    this.selectedUser=this.userService.getUsers().find((user)=>{
      return user.id===id;
    });
  }
  ngOnDestory(){                     /* Here unsubscribe when the component is destroyed. */
    this.sub.unsubscribe();
  }
  
}
