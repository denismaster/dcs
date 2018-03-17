import { Component, ViewChild } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer/dist/pdf-viewer.component';

@Component({
    selector: 'norm-control',
    templateUrl: './note.component.html'
})
export class NoteComponent {
    code: string;
    config = {
        lineNumbers: true,
        mode: "stex",
        theme: 'default'
    }
    constructor() {
        this.code = `\\documentclass[12pt]{article}
        \\begin{document}
        @foreach(var student in Model.Students)
        {
          \\paragraph
          @student.Name\\\\@student.FIO\\\\student.Group\\\\
        }
        \\end{document}
        `
    }
}
