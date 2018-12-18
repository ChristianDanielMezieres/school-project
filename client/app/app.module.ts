import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { CatService } from './services/cat.service';
import { EmailService } from './services/email.service';
import { MentorService } from './services/mentor.service';
import { StudentService } from './services/student.service';
import { AdmincardService } from './services/admincard.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { EmailsComponent } from './emails/emails.component';
import { AdmincardsComponent } from './admincards/admincards.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BannerComponent } from './front/banner/banner.component';
import { CarouselComponent } from './front/carousel/carousel.component';
import { SocialnetworkComponent } from './front/socialnetwork/socialnetwork.component';
import { ContactComponent } from './front/contact/contact.component';
import { CardsComponent } from './front/cards/cards.component';
import { SidemenuComponent } from './front/sidemenu/sidemenu.component';
import { UploadComponent } from './upload/upload.component';
import { FormularComponent } from './formular/formular.component';
import { MentorsComponent } from './mentors/mentors.component';
import { StudentsComponent } from './students/students.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { TarifService } from './services/tarif.service';
import { PostCreateComponent } from './front/post-create/post-create.component';
import { MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    EmailsComponent,
    AdmincardsComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    BannerComponent,
    CarouselComponent,
    SocialnetworkComponent,
    PostCreateComponent,
    ContactComponent,
    CardsComponent,
    SidemenuComponent,
    UploadComponent,
    FormularComponent,
    MentorsComponent,
    StudentsComponent,
    TarifsComponent,
    AboutComponent,
  ],
  imports: [
    RoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    SharedModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        // whitelistedDomains: ['localhost:3000', 'localhost:4200']
      },
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    CatService,
    EmailService,
    MentorService,
    StudentService,
    AdmincardService,
    TarifService,
    UserService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})

export class AppModule { }
