import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Output() public selectedTabChange: EventEmitter<TabComponent> = new EventEmitter<TabComponent>();

  public tabs: Array<TabComponent> = [];

  constructor() { }

  public ngOnInit(): void {
  }

  public selectTab(tab: TabComponent): void {
    this.tabs.forEach((t) => { t.active = false; });
    tab.active = true;
    this.selectedTabChange.emit(tab);
  }

  public addTab(tab: TabComponent): void {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }
}
