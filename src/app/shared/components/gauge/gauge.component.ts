import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {
  @Input() public mood: number = 0;

  constructor() { }

  public ngOnInit(): void {
  }

  public meterPercent = () => `${this.mood}%`;
}
