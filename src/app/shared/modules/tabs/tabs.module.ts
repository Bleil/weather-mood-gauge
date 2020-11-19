import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabComponent } from './components/tab/tab.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
    declarations: [
        TabComponent,
        TabsComponent
    ],
    exports: [
        TabComponent,
        TabsComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [
        TabComponent,
        TabsComponent
    ]
})
export class TabsModule { }