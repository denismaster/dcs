import { Component, Input } from '@angular/core';
import { File, FileList } from '../models/file';

@Component({
    selector: 'file-list',
    templateUrl: './file-list.component.html'
})
export class FileListComponent {
    @Input() public files: File[] = [];

    @Input() public title:string = "Файлы"
    constructor() { }

    public get count(): number {
        return this.files ? this.files.length : 0;
    }
}