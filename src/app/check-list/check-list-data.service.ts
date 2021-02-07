import { Injectable } from '@angular/core';
import { CheckItem } from './check-item';

@Injectable({
  providedIn: 'root',
})
export class CheckListDataService {
  private checkList: CheckItem[] = [];

  /**
   *
   * 체크항목 데이터를 만들어서 반환
   * @param {*} totalCnt
   * @memberof CheckListDataService
   */
  initList(totalCnt) {
    for (let i = 0; i < totalCnt; i++) {
      const checkItem = this.getNewCheckItem(i + 1);
      this.checkList.push(checkItem);
    }
    return this.checkList;
  }
  /**
   *
   * 체크 항목 리스트를 증감
   * @param {string} op
   * @memberof CheckListDataService
   */
  changeTotalCntByOp(op: string) {
    if (op === '+') {
      const totalCnt = this.checkList.length;
      const newItem = this.getNewCheckItem(totalCnt + 1);
      this.checkList.push(newItem);
    } else if (op === '-') {
      this.checkList.pop();
    }
  }

  /**
   *
   * 체크한 항목의 비율을 반환
   * @return {*}
   * @memberof CheckListDataService
   */

  getCheckedItemRatioText() {
    const curCnt = this.checkList.filter((i) => i.isChecked).length;
    const totalCnt = this.checkList.length;
    const roundedRatio = Math.round((curCnt / totalCnt) * 100);
    return `${roundedRatio}%`;
  }

  private getNewCheckItem(idx: number) {
    return { idx: idx, content: this.getCheckListMsg(idx), isChecked: false };
  }

  private getCheckListMsg(idx: number): string {
    return `check list ${idx}`;
  }

  constructor() {}

  checkItem(checkItem: CheckItem) {
    this.checkList[checkItem.idx - 1] = checkItem;
  }
  unCheckItem(idx: number) {
    this.checkList[idx - 1].isChecked = false;
  }
}
