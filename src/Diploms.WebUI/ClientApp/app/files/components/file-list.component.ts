import { Component, Input, Output, EventEmitter } from '@angular/core';
import { File, FileList } from '../models/file';
import { HttpClient, HttpResponse } from '@angular/common/http';
import * as FileSaver from "file-saver";

@Component({
    selector: 'file-list',
    templateUrl: './file-list.component.html'
})
export class FileListComponent {
    @Input() isInNote: boolean = false;
    @Input() public files: File[] = [];

    @Input() public title: string = "Файлы"
    constructor(private http: HttpClient) { }
    @Input() public diplomId: number = 0;

    @Output() public onFileSelected = new EventEmitter<File>();

    public get count(): number {
        return this.files ? this.files.length : 0;
    }

    downloadFile(file: File) {
        this.http.get(`/api/diploms/materials/${file.id}`,  {responseType: 'blob'}).subscribe((response: any) => {
            let blob = new Blob([response], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
            FileSaver.saveAs(blob, file.name);
        })
    }

    onItemSelected(file:File){
        this.onFileSelected.emit(file);
    }
}