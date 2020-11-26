import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  faCheck = faCheck;
  faTimes = faTimes;

  @Input()
  answer = '';

  @Output()
  answerChange = new EventEmitter<string>();
  submitAnswer = () =>
    this.answerChange.emit(this.answer)

  grade = () => {
    this.grading = true;
    this.isRightAnswer = (this.answer === this.question.correct);
  }


  constructor() {
  }

  ngOnInit(): void {
  }
}
