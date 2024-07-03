import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabViewComponent } from './tab-view/tab-view.component';
import { StudentComponent } from './student-component/student-component.component';
import { HomeComponent } from './home/home.component';
import { ColabComponent } from './colab/colab.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
  },
  {
    path: '',
    component: TabViewComponent,
  },
  {
    path: 'colab',
    component: ColabComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
