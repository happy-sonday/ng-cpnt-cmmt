import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-list-result',
  templateUrl: './check-list-result.component.html',
  styleUrls: ['./check-list-result.component.scss'],
})
export class CheckListResultComponent implements OnInit {
  _checkedData: string[];
  checkedCnt: number;
  @Output() onSelectedToRemoveItem = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  @Input()
  set checkedResult(checkedResult: string[]) {
    if (checkedResult) {
      this._checkedData = checkedResult;
      this.checkedCnt = this._checkedData.length;
    }
  }

  removeMe(idx) {
    this.onSelectedToRemoveItem.emit(this._checkedData[idx]);
  }
}
