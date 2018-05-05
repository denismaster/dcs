import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer/dist/pdf-viewer.component';
import { WideStore } from '../../shared/screen/wide.store';

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
  constructor(private wide: WideStore) {
  }

  ngOnInit(): void {
    this.wide.setWideState(true);
  }
  ngOnDestroy(): void {
    this.wide.setWideState(false);
  }
}
