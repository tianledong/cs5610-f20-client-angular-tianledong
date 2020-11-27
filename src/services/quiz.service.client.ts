import {Injectable} from '@angular/core';
@Injectable()
export class QuizzesServiceClient {
  findAllQuizzes = () =>
    fetch('http://localhost:3000/api/quizzes')
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`http://localhost:3000/api/quizzes/${qid}`)
      .then(response => response.json())
  findAttemptsForQuiz = (qId) =>
    fetch(`http://localhost:3000/api/quizzes/${qId}/attempts`)
      .then(response => response.json())
}
