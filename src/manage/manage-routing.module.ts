import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { UserDetailComponent } from 'src/app/user-detail/user-detail.component';

const routes: Routes = [                              /*  Here Creating a Child Route for ManageUserComponent */
  {
    path:'', component:ManageUserComponent,
    children:[
      {
        path:':id',                                /*  child route path */
        component:UserDetailComponent               /*  child route component that the router renders */
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
