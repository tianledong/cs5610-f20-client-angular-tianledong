import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '', choices: [], correct: '', answer: ''};
  grading = false;
  isRightAnswer;
  answer = '';
  faCheck = faCheck;
  faTimes = faTimes;

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
