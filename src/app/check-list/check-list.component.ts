import { Component, OnInit } from '@angular/core';
import { CheckItem } from './check-item';
import { CheckListDataService } from './check-list-data.service';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss'],
})
export class CheckListComponent implements OnInit {
  INIT_TOTAL_CNT: number = 4;
  checkList: CheckItem[] = [];
  curCheckedItem: CheckItem;

  // checkList: string[];

  // checkedResultData: string[];
  // checkedResult: boolean[] = [];

  // constructor() {
  //   this.checkList = [
  //     'check list one',
  //     'check list two',
  //     'check list three',
  //     'check list four',
  //   ];
  //   this.checkList.forEach(() => this.checkedResult.push(false));
  // }

  // extractCheckedResult() {
  //   this.checkedResultData = [];
  //   this.checkedResult.forEach((isChecked, idx) => {
  //     if (isChecked) {
  //       this.checkedResultData.push(this.checkList[idx]);
  //     }
  //   });
  // }

  // removeCheckedItem(removeItem) {
  //   this.checkedResult.forEach((isChecked, _id) => {
  //     if (isChecked && this.checkList[_id] === removeItem) {
  //       this.checkedResult[_id] = false;
  //       this.extractCheckedResult();
  //     }
  //   });
  // }

  ngOnInit() {}

  constructor(public checkListDataService: CheckListDataService) {
    this.checkList = this.checkListDataService.initList(this.INIT_TOTAL_CNT);
  }

  onChangeCnt(op: string) {
    this.checkListDataService.changeTotalCntByOp(op);
  }

  onChecked(isChecked, checkedItem: CheckItem) {
    checkedItem.isChecked = isChecked;
    this.curCheckedItem = checkedItem;
    this.checkListDataService.checkItem(checkedItem);
  }

  unCheckedItem(idx) {
    this.checkListDataService.unCheckItem(idx);
  }
}
