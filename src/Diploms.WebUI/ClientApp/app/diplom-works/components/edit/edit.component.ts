import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DiplomsService } from '../../services/diploms.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationResult } from '../../../shared/models/operation-result';
import { AlertService } from '../../../shared/alert/services/alert.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { File } from '../../../files/models/file';

@Component({
    selector: 'diploms-edit',
    templateUrl: './edit.component.html'
})
export class DiplomsEditComponent implements OnInit {
    errors: string[] | undefined = undefined;
    id: number;
    work:any={};

    files: File[] = [];

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private service: DiplomsService,
        private alertSerivce: AlertService,
    ) {
        this.id = activatedRoute.snapshot.params['id'];
        if (!this.id) {
            router.navigateByUrl("['/404']");
        }
    }

    ngOnInit() {
        this.service.getDiplom(this.id).subscribe(result => {
            this.work = result;
        })

        this.updateMaterials();
    } 
    
    private updateMaterials() {
        this.service.getMaterials(this.id).subscribe(result => this.files = result);
    }

    submit(form: any) {
        this.service.editDiplom(this.id, {}).subscribe(result => this.checkResult(result));
    }

    public goBack(): void {
        this.router.navigate(['/diploms']);
    }

    public checkResult(result:OperationResult):void{
        if(!result.hasErrors)
        {
            this.goBack();
            this.alertSerivce.info("Данные успешно обновлены", true);
        }
        else
        {
            this.errors = result.errors;
        }
    }

    remove(){
        this.service.deleteDiplom(this.id).subscribe(result=> this.checkResult(result));
    }
}
