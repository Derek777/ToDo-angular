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
import { DataService} from './_services/data.service';
import { LocalStorageService } from './_services/local-storage.service';
import { AddFormComponent } from './add-form/add-form.component';
import { StagesComponent } from './stages/stages.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { TimePipe } from './_pipes/time.pipe';
import { LongTimePipe } from './_pipes/long-time.pipe';
import { ModalComponent } from './modal/modal.component';
import { AddStageComponent } from './add-stage/add-stage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectListComponent,
    ProjectComponent,
    TodoItemComponent,
    AddFormComponent,
    StagesComponent,
    ProjectCardComponent,
    TimePipe,
    LongTimePipe,
    ModalComponent,
    AddStageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    DragDropModule,
  ],
  providers: [
    DataService,
    LocalStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
