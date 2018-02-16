import { Component, Input } from '@angular/core';

@Component({
    selector: 'tfoot[table-footer]',
    template: `
        <tr>
            <td [colSpan]="colCount">
                <table-state></table-state>
            </td>
        </tr>
    `
})
export class TableFooterComponent {
    @Input() colCount:number=5;
}