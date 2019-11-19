import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { InvalidParagraphModule } from 'src/app/features/components/invalidParagraph/invalid-paragraph/invalid-paragraph.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: LoginComponent },
]

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InvalidParagraphModule,
    FormsModule,
    ReactiveFormsModule,
  ],

})
export class LoginModule { }
