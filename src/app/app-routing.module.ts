import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEntriesComponent } from './add-entries/add-entries.component';
import { EditComponent } from './edit/edit.component';
import { LoginGuestComponent } from './login-guest/login-guest.component';
import { RegisterGuestComponent } from './register-guest/register-guest.component';
import { ViewEntriesComponent } from './view-entries/view-entries.component';

const routes: Routes = [
  {
    path: '',  
    component: LoginGuestComponent
  },
  {    
  path: 'register',  
  component: RegisterGuestComponent  
  },
  
  {    
    path: 'addEntries',  
    component: AddEntriesComponent  
    },
    {    
      path: 'viewEntries',  
      component: ViewEntriesComponent  
      },
      {    
        path: 'editEntries',  
        component: EditComponent  
        },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
