import { Component } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: 'modal.component.html',
    styleUrls: ['modal.component.css'],
})
export class ModalComponent {
    mostrar: boolean = false;

    toggle() {
        this.mostrar = !this.mostrar;
    }
}
