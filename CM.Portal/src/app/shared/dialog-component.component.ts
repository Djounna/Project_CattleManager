
import { Component, inject } from "@angular/core";
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { MessageService } from "primeng/api";
import { BaseComponent } from "./base-component.component";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-base',
    template: `<div> base works!!  </div>`,
    providers: [MessageService, DialogService],
    standalone: false
})
export class DialogComponent extends BaseComponent {
    protected formBuilder = inject(FormBuilder);
    protected dialogRef = inject(DynamicDialogRef);
    protected dialogConfig = inject(DynamicDialogConfig);

    isInvalid(form: FormGroup, controlName: string) {
        const control = form.get(controlName);
        return control?.invalid && control.touched;
    }

    getErrorMessage(form: FormGroup, controlName: string): string {
        const control = form.get(controlName);
        
        if (control?.hasError('required')) {
            return 'Ce champ est requis';
        }
        if (control?.hasError('minlength')) {
            const requiredLength = control.errors?.['minlength']?.requiredLength;
            return `Minimum ${requiredLength} caractères requis`;
        }
        if (control?.hasError('maxlength')) {
            const requiredLength = control.errors?.['maxlength']?.requiredLength;
            return `Maximum ${requiredLength} caractères autorisés`;
        }
        
        return 'Champ invalide';
    }
}