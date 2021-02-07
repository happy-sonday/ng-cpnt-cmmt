import { Component, OnInit } from '@angular/core';
import { CheckListDataService } from '../../check-list-data.service';

@Component({
  selector: 'app-result-graph',
  templateUrl: './result-graph.component.html',
  styleUrls: ['./result-graph.component.scss'],
})
export class ResultGraphComponent implements OnInit {
  checkedRatio: string = '0%';
  graphToggle = true;

  constructor(public checkListDataService: CheckListDataService) {}

  /**
   *
   * EventEmitter 타입으로 선언된 인스턴스의 subscribe 메서드에 콜백을 등록하여
   * emit 메서드 호출시 이벤트를 초학하여 콜백을 실행
   * @memberof ResultGraphComponent
   */
  ngOnInit() {
    this.checkListDataService.changedCntStat.subscribe(() => this.PrintGraph());
  }

  PrintGraph() {
    this.graphToggle = false;
    this.checkedRatio = this.checkListDataService.getCheckedItemRatioText();
    setTimeout(() => (this.graphToggle = true), 1);
  }
}
