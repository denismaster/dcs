import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InstitutesService } from '../../services/institutes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationResult } from '../../../shared/models/operation-result';
import { AlertService } from '../../../shared/alert/services/alert.service';

@Component({
    selector: 'institutes-edit',
    templateUrl: './edit.component.html'
})
export class InstitutesEditComponent implements OnInit {
    errors: string[] | undefined = undefined;
    form: FormGroup;
    id: number;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private service: InstitutesService,
        private alertSerivce: AlertService,
    ) {
        this.id = activatedRoute.snapshot.params['id'];
        if (!this.id) {
            router.navigateByUrl("['/404']");
        }
        this.form = this.formBuilder.group({
            "id": [this.id, Validators.required],
            "name": ["", Validators.required],
            "shortName": [""]
        });
    }

    ngOnInit() {
        this.service.getInstitute(this.id).subscribe(result => {
            this.form.setValue(result);
        })
    } 
    
    submit(form: any) {
        this.service.editInstitute(this.id, form).subscribe(result => this.checkResult(result));
    }

    public goBack(): void {
        this.router.navigate(['/institutes']);
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
        this.service.deleteInstitute(this.id).subscribe(result=> this.checkResult(result));
    }
}
