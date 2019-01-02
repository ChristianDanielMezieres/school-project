import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { MentorsComponent } from './mentors/mentors.component';
import { StudentsComponent } from './students/students.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { SocialnetworkComponent } from './front/socialnetwork/socialnetwork.component';
import { AdmincardsComponent } from './admincards/admincards.component';
import { UploadComponent } from './upload/upload.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostListComponent } from './front/post-list/post-list.component';
import { PostCreateComponent } from './front/post-create/post-create.component';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';

const routes: Routes = [
  { path: 'cats', component: CatsComponent },
  { path: 'mentors', component: MentorsComponent },
  { path: 'create', component: PostCreateComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'tarifs', component: TarifsComponent },
  { path: 'socialnetwork', component: SocialnetworkComponent },
  { path: 'post-create', component: TarifsComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'admincards', component: AdmincardsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'notfound', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class RoutingModule {}
