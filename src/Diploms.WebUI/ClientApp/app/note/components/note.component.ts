import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer/dist/pdf-viewer.component';
import { WideStore } from '../../shared/screen/wide.store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CodemirrorComponent } from 'ng2-codemirror';
import { applyAction } from '../latex-actions';
import { DiplomsService } from '../../diplom-works/services/diploms.service';
import { File } from '../../files/models/file';

@Component({
    selector: 'norm-control',
    templateUrl: './note.component.html'
})
export class NoteComponent implements OnInit, OnDestroy {

    @ViewChild(CodemirrorComponent)
    editor:CodemirrorComponent | undefined;

    diplomId = 1;

    files:File[] = [];

    code: string = "";
    pdfSrc: any = undefined;
    config = {
        lineNumbers: true,
        mode: "text/x-stex",
        theme: 'default'
    }
    constructor(private wide: WideStore, private service:DiplomsService, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.wide.setWideState(true);

        this.service.getMaterials(this.diplomId).map(files=>files.filter(f=>f.isNotePart)).subscribe(result=>this.files = result);
    }
    ngOnDestroy(): void {
        this.wide.setWideState(false);
    }

    previewCode() {
        this.http.post(`/api/documents/latex/preview`, JSON.stringify(this.code),
         { responseType: 'blob', 
         headers: new HttpHeaders({ "Content-Type":"application/json" })
         }).subscribe((response: any) => {
            let blob = new Blob([response], { type: "application/pdf" });
            const fileReader = new FileReader();
            fileReader.onload = ($event: any) => {
                this.pdfSrc = $event.target.result;
            };
            fileReader.readAsArrayBuffer(blob);
        })
    }


    actionHandler(action:string){
        if(!this.editor) return;
        const selectedText = this.editor.instance.getSelection('\n')
        this.editor.instance.replaceSelection(applyAction(action,selectedText));
    }

    onFileSelected($event:File){
        const options = {responseType: 'text' as 'text'};
        this.http.get(`/api/diploms/materials/${$event.id}/text`, options).subscribe((response: string) => {
            this.code = response
        })
    }
}
