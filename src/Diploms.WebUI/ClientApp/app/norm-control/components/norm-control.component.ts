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
    selector: 'norm-control',
    templateUrl: './norm-control.component.html',
    styleUrls: ['./norm-control.component.css']
})
export class NormControlComponent implements OnInit, OnDestroy {
    pdfSrc: any = undefined;
    id: number = 0;
    diplomId: number = 0;
    page: number = 1;
    errors: NormControlError[] = [];
    form: FormGroup;

    info = {
        fio:"",
        workName:"",
        group:""
    }

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private alertSerivce: AlertService,
        private wide: WideStore,
        private service: NormControlService,
        private http: HttpClient
    ) {
        this.id = activatedRoute.snapshot.queryParams['fileId'];
        this.diplomId = activatedRoute.snapshot.params['diplomId'];
        if (!this.id || !this.diplomId) {
            router.navigateByUrl("['/404']");
        }

        this.form = this.formBuilder.group({
            "hasTeacherReport": [false],
            "isEquatableToOrder": [false],
            "hasTableOfContents": [false],
            "hasAbstract": [false],
            "hasIntroduction": [false],
            "hasTeacherSignature": [false],
            "hasConsultantsSignature": [false],
            "hasSignedTask": [false],
            "hasActualDescription": [false],
            "hasGoalsAndObjectives": [false],
            "hasResearchSubjectAndObject": [false],
            "hasPracticalSupposes": [false],
            "hasStructure": [false],
            "usedMathMethods": [false],
            "isTablesGoodFormatted": [false],
            "isPicturesGoodFormatted": [false],
            "isSourcesGoodFormatted": [false],
            "isShorthandsGoodFormatted": [false],
            "hasShorthandsInText": [false],
            "isAppendixGoodFormatted": [false],
            "hasLinksToFormulas": [false],
            "hasLinksToTables": [false],
            "hasLinksToPictures": [false],
            "hasLinksToAppendixes": [false],
            "hasLinksToSources": [false],
        });

    }

    ngOnInit(): void {
        this.wide.setWideState(true);
        this.http.get<{fio:string,workName:string,group:string}>(`/api/diploms/${this.diplomId}/norm-control-info`).subscribe(result=>{
            this.info = result;
        });
        this.http.get(`/api/diploms/materials/${this.id}`, { responseType: 'blob' }).subscribe((response: any) => {
            let blob = new Blob([response], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
            const fileReader = new FileReader();
            fileReader.onload = ($event: any) => {
                this.pdfSrc = $event.target.result;
            };
            fileReader.readAsArrayBuffer(blob);
        })

    }

    ngOnDestroy(): void {
        this.wide.setWideState(false);
    }

    nextPage() {
        this.page++;
    }

    previousPage() {
        this.page--;
    }

    addError() {
        this.errors.push(<NormControlError>{
            page: this.page,
            class: "error",
            position: window.getSelection().toString() || "-",
            type: NormControlErrorType.Warning,
            description: ""
        });
    }

    addWarning() {
        this.errors.push(<NormControlError>{
            page: this.page,
            class: "warning",
            position: window.getSelection().toString() || "-",
            type: NormControlErrorType.Warning,
            description: ""
        });
    }

    downloadNormControlDoc() {
        const dataToSend = {
            ...this.form.value,
            ...this.info,
            date: new Date().toISOString().slice(0,10),
            errors: this.errors.map(e=>e.position)
        }
        this.service.createNormControlDocument(dataToSend).subscribe(response => {
            let blob = new Blob([response], { type: MIMEType.docx });
            FileSaver.saveAs(blob, "Результат нормоконтроля.docx");
        })
    }

}
