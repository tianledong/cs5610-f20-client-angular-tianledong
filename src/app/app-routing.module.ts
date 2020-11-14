import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseViewerComponentComponent} from './course-viewer-component/course-viewer-component.component';

const routes: Routes = [
  {path: '', component: CourseViewerComponentComponent},
  {path: 'courses', component: CourseViewerComponentComponent},
  {path: 'courses/:cid/modules', component: CourseViewerComponentComponent},
  {path: 'courses/:cid/modules/:mid/lessons', component: CourseViewerComponentComponent},
  {path: 'courses/:cid/modules/:mid/lessons/:lid/topics', component: CourseViewerComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
