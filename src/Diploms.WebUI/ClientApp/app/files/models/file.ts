export class File {
    public id: number = 0;
    public name: string = "";
    public size: string = "";
    public type: string = "";
    public isNotePart: boolean = false;
}
export class FileList {
    public files: File[] = [];
}