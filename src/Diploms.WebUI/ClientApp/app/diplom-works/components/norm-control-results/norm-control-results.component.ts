import { Component, Input } from '@angular/core';

export interface NormControlResult {
    id: number;
    controller: string;
    controllerId: number;
    hasError: boolean;
    errors: string[];
    date: Date;
}

@Component({
    selector: 'norm-control-results',
    templateUrl: './norm-control-results.component.html'
})
export class NormControlResultsComponent {
    @Input() public results: NormControlResult[] = [{
        id:1,
        controller:"Волкова Анастасия Викторовна",
        controllerId: 2,
        hasError:false,
        errors:[],
        date: new Date(2018,5,12)
    }]
    constructor() { }
}