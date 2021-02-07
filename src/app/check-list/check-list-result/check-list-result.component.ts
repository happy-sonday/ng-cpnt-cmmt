import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-list-result',
  templateUrl: './check-list-result.component.html',
  styleUrls: ['./check-list-result.component.scss'],
})
export class CheckListResultComponent implements OnInit {
  checkedCnt: number;
  @Input() checkedResult: string[];

  constructor() {
    //this.initResult(); //초기 설정값
    //const buttonElem = document.querySelector('button');
    //buttonElem.addEventListener('click', () => this.collectCheckedResult());
  }

  ngOnInit(): void {}

  /* private initResult() {
    this.checkedCnt = 0;
    this.checkedResult = [];
  }

  private collectCheckedResult() {
    this.initResult();
    const spanElems = document.querySelectorAll('span');
    for (let i = 0; i < spanElems.length; i++) {
      const spanElem = spanElems.item(i);

      const checkboxElem = spanElem.querySelector('input');
      if (checkboxElem.checked) {
        this.checkedResult.push(spanElem.querySelector('label').innerText);
      }
    }

    this.checkedCnt = this.checkedResult.length;
  } */
}
