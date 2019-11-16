import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from 'src/app/features/components/register-form/register-form/register-form.component';
import { InvalidParagraphComponent } from 'src/app/features/components/invalidParagraph/invalid-paragraph/invalid-paragraph.component';

const routes: Routes = [
  { path: '', component: RegisterComponent }
]

@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent,
    InvalidParagraphComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RegisterModule { }
