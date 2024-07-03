import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { StudentComponent } from './student-component/student-component.component';
import {StudentService} from "./services/student.service";
import { TabViewComponent } from './tab-view/tab-view.component';
import { HomeComponent } from './home/home.component';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { ColabComponent } from './colab/colab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TabViewComponent,
    HomeComponent,
    ColabComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    TabViewModule,
    AccordionModule,
    BrowserAnimationsModule
  ],
  providers: [FormsModule,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
