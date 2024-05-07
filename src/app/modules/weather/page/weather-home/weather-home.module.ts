import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherHomeComponent } from './weather-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherCardComponent } from '../../components/weather-card/weather-card.component';

@NgModule({
  declarations: [WeatherHomeComponent, WeatherCardComponent ],
  imports: [CommonModule, FormsModule, FontAwesomeModule ],
  exports: [WeatherHomeComponent],
})
export class WeatherHomeModule {}
