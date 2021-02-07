import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { CheckItem } from '../check-item';

@Component({
  selector: 'app-check-list-result',
  templateUrl: './check-list-result.component.html',
  styleUrls: ['./check-list-result.component.scss'],
})
export class CheckListResultComponent implements OnInit {
  _checkedData: CheckItem[];
  checkedCnt: number;
  @Output() onSelectedToRemoveItem = new EventEmitter<number>();

  constructor() {
    this._checkedData = [];
  }

  ngOnInit() {}

  @Input()
  set PassCheckItem(curItemEvent: CheckItem) {
    if (!curItemEvent) {
      return;
    }

    if (curItemEvent.isChecked) {
      this._checkedData.push(curItemEvent);
    } else {
      this._checkedData = this._checkedData.filter(
        (val) => val.idx !== curItemEvent.idx
      );
    }
    this.checkedCnt = this._checkedData.length;
    console.log(
      `check-list의 컴포넌트에서 전달된 PassCheckItem 최종 크기 ${this.checkedCnt}`
    );
  }

  onRemove(idx) {
    this.onSelectedToRemoveItem.emit(this._checkedData[idx].idx);
    this._checkedData = this._checkedData.filter((val, _idx) => _idx !== idx);
  }
}
