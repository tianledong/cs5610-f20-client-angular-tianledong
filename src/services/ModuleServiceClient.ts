import {Injectable} from '@angular/core';

const courseUrl = 'https://wbdv-generic-server.herokuapp.com/api/tianledong/courses';

@Injectable()
export class ModuleServiceClient {
  findModulesForCourse = (cid) =>
    fetch(`${courseUrl}/${cid}/modules`)
      .then(response => response.json())
}
