import {Injectable} from '@angular/core';

const url = 'http://cs5610-f20-server-node-tianled.herokuapp.com/api/quizzes';
@Injectable()
export class QuestionsServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`${url}/${qid}/questions`)
      .then(response => response.json())
}
