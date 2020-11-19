import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsModule } from './shared/modules/tabs/tabs.module';
import { WeatherComponent } from './components/weather/weather.component';
import { GaugeComponent } from './shared/components/gauge/gauge.component';
import { WeatherService } from './shared/services/weather.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    GaugeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'API_KEY', useValue: '328d38c5708252784262f439ccd02853' },
    { provide: 'AMSTERDAM_ID', useValue: '2759794' },
    { provide: 'MOSCOW_ID', useValue: '524901' },
    { provide: 'NEW_YORK_ID', useValue: '5128638' },
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
