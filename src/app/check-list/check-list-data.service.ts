import { EventEmitter, Injectable } from '@angular/core';

import { CheckItem } from './check-item';

@Injectable({
  providedIn: 'root',
})
export class CheckListDataService {
  private checkList: CheckItem[] = [];
  changedCntStat: EventEmitter<any> = new EventEmitter<any>();

  /**
   *
   * 체크항목 데이터를 만들어서 반환
   * @param {*} totalCnt
   * @memberof CheckListDataService
   */
  initList(totalCnt) {
    for (let i = 0; i < totalCnt; i++) {
      const checkItem = this.getNewCheckItem(i + 1);
      this.checkList.push(checkItem); //배열의 끝에 요소 추가
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
    }
    if (op === '-') {
      this.checkList.pop(); //마지막 요소를 제거
    }

    this.changedCntStat.emit({});
  }

  /**
   *
   * 체크한 항목의 비율을 반환
   * @return {*}
   * @memberof CheckListDataService
   */
  getCheckedItemRatioText() {
    //filter 주어진 함수의 조건이 통과되는 요소를 모아 새로운 배열로 반환, 그것의 크기를 curCnt 담음
    const curCnt = this.checkList.filter((i) => i.isChecked).length;
    const totalCnt = this.checkList.length;
    const roundedRatio = Math.round((curCnt / totalCnt) * 100);
    return `${roundedRatio}%`;
  }

  private getNewCheckItem(idx: number) {
    return { idx: idx, content: this.getCheckListMsg(idx), isChecked: false };
  }

  /**
   *
   *항목의 이름을 만듦
   * @private
   * @param {number} idx
   * @return {*}  {string}
   * @memberof CheckListDataService
   */
  private getCheckListMsg(idx: number): string {
    return `check list ${idx}`;
  }

  constructor() {}

  checkItem(checkItem: CheckItem) {
    this.checkList[checkItem.idx - 1] = checkItem;
    this.changedCntStat.emit({});
  }
  unCheckItem(idx: number) {
    this.checkList[idx - 1].isChecked = false;
    this.changedCntStat.emit({});
  }
}
