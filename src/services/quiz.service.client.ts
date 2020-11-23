import {Injectable} from '@angular/core';
@Injectable()
export class QuizzesServiceClient {
  findAllQuizzes = () =>
    fetch('https://cs5610-f20-server-node-tianled.herokuapp.com/api/quizzes')
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`https://cs5610-f20-server-node-tianled.herokuapp.com/api/quizzes/${qid}`)
      .then(response => response.json())
}
