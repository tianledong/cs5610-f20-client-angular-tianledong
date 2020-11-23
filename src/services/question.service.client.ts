import {Injectable} from '@angular/core';
@Injectable()
export class QuestionsServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`https://cs5610-f20-server-node-tianled.herokuapp.com/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
