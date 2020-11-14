import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CourseTableComponentComponent} from './course-table-component/course-table-component.component';
import {CourseViewerComponentComponent} from './course-viewer-component/course-viewer-component.component';
import {ModuleListComponentComponent} from './module-list-component/module-list-component.component';
import {LessonTabsComponentComponent} from './lesson-tabs-component/lesson-tabs-component.component';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {LessonServiceClient} from '../services/LessonServiceClient';
import {ModuleServiceClient} from '../services/ModuleServiceClient';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponentComponent,
    CourseViewerComponentComponent,
    ModuleListComponentComponent,
    LessonTabsComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CourseServiceClient, LessonServiceClient, ModuleServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
