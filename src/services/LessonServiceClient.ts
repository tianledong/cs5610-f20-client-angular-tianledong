import {Injectable} from '@angular/core';

const moduleUrl = 'https://wbdv-generic-server.herokuapp.com/api/tianledong/modules';

@Injectable()
export class LessonServiceClient {
  findLessonsForModule = (mid) =>
    fetch(`${moduleUrl}/${mid}/lessons`)
      .then(response => response.json())
}
