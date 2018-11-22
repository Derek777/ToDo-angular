import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { DataService} from './data.service';
import { LocalStorageService } from './local-storage.service';
import { AddFormComponent } from './add-form/add-form.component';
import { StagesComponent } from './stages/stages.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectListComponent,
    ProjectComponent,
    TodoItemComponent,
    AddFormComponent,
    StagesComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [
    DataService,
    LocalStorageService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
