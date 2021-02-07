import { Component, OnInit } from '@angular/core';
import { CheckItem } from './check-item';
import { CheckListDataService } from './check-list-data.service';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss'],
})
export class CheckListComponent implements OnInit {
  INIT_TOTAL_CNT: number = 4; //초기항목 갯수 전달
  checkList: CheckItem[] = []; //CheckItem구조를 가진 가변적 배열
  curCheckedItem: CheckItem;

  ngOnInit() {}

  constructor(public checkListDataService: CheckListDataService) {
    this.checkList = this.checkListDataService.initList(this.INIT_TOTAL_CNT);
  }

  /**
   *
   * '+', '-' 버튼에 따른 새로운 항목연산에 필요한 인자 전달
   * @param {string} op
   * @memberof CheckListComponent
   */
  onChangeCnt(op: string) {
    this.checkListDataService.changeTotalCntByOp(op);
  }

  /**
   *
   * 항목을 체크할때마다 $event 인자에 담아 호출
   * @param {*} isChecked
   * @param {CheckItem} checkedItem
   * @memberof CheckListComponent
   */
  onChecked(isChecked, checkedItem: CheckItem) {
    checkedItem.isChecked = isChecked;
    this.curCheckedItem = checkedItem;
    this.checkListDataService.checkItem(checkedItem);
  }

  unCheckedItem(idx) {
    this.checkListDataService.unCheckItem(idx);
  }
}
