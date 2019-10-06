import { RouterGuardService } from './service/router-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  {path:'',                  component:LoginComponent},
  {path:'login',             component:LoginComponent},
  {path:'welcome/:username', component:WelcomeComponent, canActivate:[RouterGuardService]},
  {path:'todos',             component:ListTodosComponent, canActivate:[RouterGuardService]},
  {path:'todo/:id',             component:TodoComponent, canActivate:[RouterGuardService]},

  {path:'logout',             component:LogoutComponent, },
  {path:'**',                component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
