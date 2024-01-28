import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { JobListViewComponent } from '../features/work/job-list-view/job-list-view.component';

@Injectable({
    providedIn: 'root'
})
export class LoaderOverlayService {
    private overlayRef: OverlayRef | undefined;

    constructor(private overlay: Overlay) {}

    public show(message = '') {
    // Returns an OverlayRef (which is a PortalHost)

        if (!this.overlayRef) {
            this.overlayRef = this.overlay.create();
        }

        // Create ComponentPortal that can be attached to a PortalHost
        const spinnerOverlayPortal = new ComponentPortal(JobListViewComponent);
        const component = this.overlayRef.attach(spinnerOverlayPortal); // Attach ComponentPortal to PortalHost
    }

    public hide() {
        if (!!this.overlayRef) {
            this.overlayRef.detach();
        }
    }
}
