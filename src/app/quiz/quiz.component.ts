import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionsServiceClient} from '../../services/question.service.client';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private questionsServiceClient: QuestionsServiceClient,
              private route: ActivatedRoute) {
  }

  quizId = '';
  questions = [];

  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.quizId = ps.quizId;
      this.questionsServiceClient.findQuestionsForQuiz(this.quizId)
        .then(qs => this.questions = qs);
    });
  }
}
