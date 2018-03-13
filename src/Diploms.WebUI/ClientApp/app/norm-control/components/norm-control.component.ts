import { Component, ViewChild } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer/dist/pdf-viewer.component';

@Component({
    selector: 'norm-control',
    templateUrl: './norm-control.component.html'
})
export class NormControlComponent {
    pdfSrc: string | null = null;

    @ViewChild(PdfViewerComponent) private pdfComponent: any;

    search(stringToSearch: string) {
        console.log(this.pdfComponent);
        this.pdfComponent.pdfFindController.executeCommand('find', {
            caseSensitive: false, findPrevious: undefined, highlightAll: true, phraseSearch: true, query: stringToSearch
        });
    }

    onFileSelected() {
        let $img: any = document.querySelector('#file');

        if (typeof (FileReader) !== 'undefined') {
            let reader = new FileReader();

            reader.onload = (e: any) => {
                this.pdfSrc = e.target.result;
            };

            reader.readAsArrayBuffer($img.files[0]);
        }
    }
}
