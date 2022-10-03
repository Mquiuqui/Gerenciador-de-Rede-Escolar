import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class FlashMessageService {

    showFlashMessage: { value: boolean, message: string, type: 'success' | 'error' | 'info' } = { value: false, message: '', type: 'error' };
    showFlashMessageSubscription = new Subject<{ value: boolean, message: string }>();

    show(message: string, type: 'success' | 'error' | 'info', options: {timeout: number} = {timeout: 5000}) {
        this.showFlashMessage = { value: true, message, type };
        this.showFlashMessageSubscription.next(this.showFlashMessage);

        setTimeout(() => {
            this.showFlashMessage = { value: false, message: '', type };
            this.showFlashMessageSubscription.next(this.showFlashMessage);
        }, options.timeout)
    }

}
