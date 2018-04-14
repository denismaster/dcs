import { Component, Input } from '@angular/core';
import { Comment } from './comment';
import { AuthStore } from '../../auth/services/auth.store';
@Component({
    selector: 'comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
    @Input() public comments: Comment[] = [];

    @Input() public isFolded: boolean = true;

    constructor(private auth: AuthStore) { }

    public get count(): number {
        return this.comments ? this.comments.length : 0;
    }

    public typedText: string | undefined;

    public addComment(): void {
        if (!this.typedText || !this.typedText.trim()) return;

        const authState = this.auth.authState;
        if (!authState) return;

        const comment = {
            text: this.typedText,
            user: authState.userName,
            date: new Date()
        }
        this.comments.push(comment);
        this.typedText = undefined;
    }

}