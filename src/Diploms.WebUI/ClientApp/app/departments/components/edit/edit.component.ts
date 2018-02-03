import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartmentsService } from '../../services/departments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationResult } from '../../../shared/models/operation-result';

@Component({
    selector: 'departments-edit',
    templateUrl: './edit.component.html'
})
export class DepartmentsEditComponent implements OnInit {
    errors: string[] | undefined = undefined;
    form: FormGroup;
    id: number;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private service: DepartmentsService
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
        this.service.getDepartment(this.id).subscribe(result => {
            this.form.setValue(result);
        })
    } 
    
    submit(form: any) {
        this.service.editDepartment(this.id, form).subscribe(result => this.checkResult(result));
    }

    public goBack(): void {
        this.router.navigate(['/departments']);
    }

    public checkResult(result:OperationResult):void{
        if(!result.hasErrors)
        {
            this.goBack();
        }
        else
        {
            this.errors = result.errors;
        }
    }

    remove(){
        this.service.deleteDepartment(this.id).subscribe(result=> this.checkResult(result));
    }
}
