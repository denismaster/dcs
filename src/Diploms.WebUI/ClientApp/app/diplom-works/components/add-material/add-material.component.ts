/// <reference path="../../../../../node_modules/@types/jquery/index.d.ts" />
import { Component, Inject, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { AlertService } from '../../../shared/alert/services/alert.service';
import { DiplomsService } from '../../services/diploms.service';
declare var $: any;
@Component({
    selector: 'diploms-add-material',
    templateUrl: './add-material.component.html'
})
export class DiplomsAddMaterialComponent {
    @Input() public id: number = 0;
    @Output() public onMaterialCreated = new EventEmitter<any>();
    public uploadProgress: number = 0;

    constructor(
        private formBuilder: FormBuilder,
        private service: DiplomsService,
        private alertSerivce: AlertService,
    ) { }

    upload(files: any) {
        if (files.length === 0)
            return;

        const formData = new FormData();

        for (let file of files)
            formData.append(file.name, file);

        this.service.uploadMaterial(this.id, formData).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress)
                this.uploadProgress = Math.round(100 * event.loaded / (event.total || 100));
            else if (event instanceof HttpResponse) {
               // ($("#addMaterialDialog") as any).modal("hide");
                this.onMaterialCreated.emit();
            }
        });
    }
}
