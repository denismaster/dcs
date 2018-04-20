export enum NormControlErrorType {
    Warning,
    Error
}

export class NormControlError {
    type: NormControlErrorType = NormControlErrorType.Warning;
    class: string = "";
    page: number = 0;
    position = "";
    description = "";
}