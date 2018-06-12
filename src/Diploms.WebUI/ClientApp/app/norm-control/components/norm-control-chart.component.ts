import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer/dist/pdf-viewer.component';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../shared/alert/services/alert.service';
import { HttpClient } from '@angular/common/http';
import { NormControlError, NormControlErrorType } from '../models/norm-control-error';
import { WideStore } from '../../shared/screen/wide.store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NormControlService } from '../services/norm-control.service';
import { MIMEType } from '../../shared/mime';
import * as FileSaver from "file-saver";

@Component({
    selector: 'norm-control-chart',
    templateUrl: './norm-control-chart.component.html'
})
export class NormControlChartComponent {
    // Doughnut
    public doughnutChartLabels: string[] = ['Успешное прохождение', 'С ошибками', 'Не проходили'];
    public doughnutChartData: number[] = [27, 19, 24];
    public doughnutChartType: string = 'doughnut';

    public groups = [{
        name: "ИСб-41о",
        data: [8, 4, 8],
    }, {
        name: "ИСб-42о",
        data: [10, 6, 9]
    }, {
        name: "ИСб-43о",
        data: [9, 9, 10]
    }]
    public results = [{
        id: 767,
        controllerId: 1,
        controller: "Ермаков И.Г.",
        group: 'ИСб-41о',
        date: new Date(),
        hasErrors: false,
        errors: []
    },
    {
        id: 767,
        controllerId: 1,
        controller: "Юндин А.В.",
        group: 'ИСб-43о',
        date: new Date(),
        hasErrors: false,
        errors: []
    },
    {
        id: 767,
        controllerId: 1,
        controller: "Слепаков С.А.",
        group: 'ИСб-42о',
        date: new Date(),
        hasErrors: true,
        errors: ["wewe","wewe"]
    },
    {
        id: 767,
        controllerId: 1,
        controller: "Вейдер Д.Ш.",
        group: 'ИСб-42о',
        date: new Date(),
        hasErrors: false,
        errors: []
    },
    {
        id: 767,
        controllerId: 1,
        controller: "Ланнистер С.Т.",
        group: 'ИСб-41о',
        date: new Date(),
        hasErrors: true,
        errors: ["","",""]
    }]
}
