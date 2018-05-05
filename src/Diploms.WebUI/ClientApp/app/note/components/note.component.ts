import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer/dist/pdf-viewer.component';
import { WideStore } from '../../shared/screen/wide.store';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'norm-control',
    templateUrl: './note.component.html'
})
export class NoteComponent implements OnInit, OnDestroy {

    code: string = "";
    pdfSrc: any = undefined;
    config = {
        lineNumbers: true,
        mode: "text/x-stex",
        theme: 'default'
    }
    constructor(private wide: WideStore, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.wide.setWideState(true);
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
}
