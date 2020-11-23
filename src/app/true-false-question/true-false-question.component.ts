import {Component, Input, OnInit} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''};
  grading = false;
  isRightAnswer;
  answer = '';
  faCheck = faCheck;
  faTimes = faTimes;

  grade = () => {
    this.grading = true;
    this.isRightAnswer = (this.answer === this.question.correct);
  }


  constructor() {
  }

  ngOnInit(): void {
  }
}
