import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';

const routes: Routes = [
  {path: '', component: CourseViewerComponent},
  {path: 'table/courses', component: CourseViewerComponent},
  {path: ':layout/courses/:cid/modules', component: CourseViewerComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons', component: CourseViewerComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons/:lid/topics', component: CourseViewerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
