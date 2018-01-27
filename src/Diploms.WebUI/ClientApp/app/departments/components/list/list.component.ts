import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({ 
    selector: 'departments-list',
    templateUrl: './list.component.html'
})
export class DepartmentsListComponent {
    public departments: WeatherForecast[];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
            this.departments = result
        }, error => console.error(error));
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
