import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  private _active: boolean = false;
  @Input() public id: number | string;
  @Input() public title: string;

  public get active() {
    return this._active;
  }

  public set active(value: boolean) {
    this._active = value;
    this.updateVisibility();
  }

  constructor(public tabs: TabsComponent, private element: ElementRef) {
    this.tabs.addTab(this);
    this.updateVisibility();
  }

  public ngOnInit(): void {
  }

  private updateVisibility(): void {
    this.element.nativeElement.style.display = (this.active ? 'flex' : 'none');
  }
}
