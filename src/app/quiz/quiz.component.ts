import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionsServiceClient} from '../../services/question.service.client';
import { Location } from '@angular/common';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private questionsServiceClient: QuestionsServiceClient,
              private route: ActivatedRoute, private location: Location) {
  }

  quizId = '';
  questions = [];

  submitQuiz = () => {
    fetch(`https://cs5610-f20-server-node-tianled.herokuapp.com/api/quizzes/${this.quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(this.questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(result => this.location.back());
  }


  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.quizId = ps.quizId;
      this.questionsServiceClient.findQuestionsForQuiz(this.quizId)
        .then(qs => this.questions = qs);
    });
  }
}
