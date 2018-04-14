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
    @Input() public results: NormControlResult[] = []
    constructor() { }
}