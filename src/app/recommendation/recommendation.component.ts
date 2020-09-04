import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../weatherapi.service';
import { HttpClient} from '@angular/common/http';
import { levels } from '../levels';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  levels = levels;
  constructor(private api: WeatherapiService) {
    console.log(JSON.stringify(this.api.getTemp()));
  }


  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(locationId) {
    window.alert('api.openweathermap.org/data/2.5/weather?zip=' + locationId + ',de&appid=3770eec4f553ea1432f25fc0f993be1d');
  }

}
