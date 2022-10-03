import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlashMessageService } from './flash-message.service';

@Component({
    selector: 'app-flash-message',
    templateUrl: './flash-message.component.html',
    styleUrls: ['./flash-message.component.css']
})
export class FlashMessageComponent implements OnInit, OnDestroy {

    showFlashMessage: { value: boolean, message: string, type: 'success' | 'error' | 'info' } = { value: false, message: '', type: 'error' };;
    private subscription: Subscription;

    constructor(private flashMessageService: FlashMessageService) { }

    ngOnInit() {

        this.subscription = this.flashMessageService.showFlashMessageSubscription.subscribe((showMessage: { value: boolean, message: string, type: 'success' | 'error' | 'info' }) => {
            this.showFlashMessage = showMessage;
        });

    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
