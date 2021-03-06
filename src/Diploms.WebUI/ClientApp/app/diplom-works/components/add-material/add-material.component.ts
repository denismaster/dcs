/// <reference path="../../../../../node_modules/@types/jquery/index.d.ts" />
import { Component, Inject, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { AlertService } from '../../../shared/alert/services/alert.service';
import { DiplomsService } from '../../services/diploms.service';
import { SelectListItem } from '../../../shared/select-list-item';
declare var $: any;
@Component({
    selector: 'diploms-add-material',
    templateUrl: './add-material.component.html'
})
export class DiplomsAddMaterialComponent {
    form: FormGroup;
    @Input() public id: number = 0;
    @Output() public onMaterialCreated = new EventEmitter<any>();
    public uploadProgress: number = 0;

    materialsOptions: SelectListItem[] = [
        {
            text: "ПЗ в формате LaTeX",
            value: "3"
        },
        {
            text: "Преамбула",
            value: "4"
        },
        {
            text: "Введение",
            value: "5"
        },
        {
            text: "Раздел",
            value: "6"
        },
        {
            text: "Подраздел",
            value: "7"
        },
        {
            text: "Заключение",
            value: "8"
        }
    ]

    constructor(
        private formBuilder: FormBuilder,
        private service: DiplomsService,
        private alertSerivce: AlertService,
    ) {
        this.form = this.formBuilder.group({
            "type": [12, Validators.required],
        });
    }

    upload(files: any) {
        this.form.controls["type"].updateValueAndValidity();
        if (this.form.value.type>8) {
            console.log("formdata");
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
        else {
            this.service.uploadMaterialByType(this.id, this.form.value.type)
                .subscribe(event => {
                    this.onMaterialCreated.emit();
                })
        }


    }
}
