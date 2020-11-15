import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {LessonServiceClient} from '../services/LessonServiceClient';
import {ModuleServiceClient} from '../services/ModuleServiceClient';
import {CourseTableComponent} from './course-table/course-table.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    CourseTableComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
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
