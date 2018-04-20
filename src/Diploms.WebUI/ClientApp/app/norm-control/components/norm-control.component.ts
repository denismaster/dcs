import { Component, ViewChild, OnInit } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer/dist/pdf-viewer.component';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../shared/alert/services/alert.service';
import { HttpClient } from '@angular/common/http';
import { NormControlError } from '../models/norm-control-error';

@Component({
    selector: 'norm-control',
    templateUrl: './norm-control.component.html'
})
export class NormControlComponent implements OnInit{
    pdfSrc: any = undefined;
    id: number = 0;
    page:number = 1;
    errors: NormControlError[] = [];

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private alertSerivce: AlertService,
        private http: HttpClient
    ) {
        this.id = activatedRoute.snapshot.queryParams['fileId'];
        if (!this.id) {
            router.navigateByUrl("['/404']");
        }
    }

    ngOnInit(): void {
        this.http.get(`/api/diploms/materials/${this.id}`,  {responseType: 'blob'}).subscribe((response: any) => {
            let blob = new Blob([response], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
            const fileReader = new FileReader();
            fileReader.onload = ($event:any) => {
                this.pdfSrc = $event.target.result;
            };
            fileReader.readAsArrayBuffer(blob);
        })
    }

    nextPage(){
        this.page++;
    }

    previousPage(){
        this.page--;
    }
}
