import { Component, inject } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component.component';
import { CattleState } from '../../../state/cattle/cattle.store';
import { Select } from '@ngxs/store';
import { finalize, Observable, takeUntil } from 'rxjs';
import { CowDetailsDto } from '../../../api/models';
import { CowDetails } from '../../../state/cattle/cattle.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-cow-details',
    templateUrl: './cow-details.component.html',
    styleUrl: './cow-details.component.scss',
    standalone: false
})
export class CowDetailsComponent extends BaseComponent{
    private route = inject(ActivatedRoute);
    cowId = 0;
    @Select(CattleState.cowDetails) cowDetails$!: Observable<CowDetailsDto>; 
    public cowDetails!: CowDetailsDto

    override ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.cowId = +params['id'];
    });
        this.GetData(); 
        this.store.dispatch(new CowDetails.Get(this.cowId)); 
    }

    public GetData(): void{
        this.cowDetails$.pipe(
        takeUntil(this.$OnDestroyed),
        finalize(() => this.displayLoader = false))
        .subscribe({
            next:(res) => {
                this.cowDetails = res;
            },
            error:(err) => {
                console.log(err);
            }
        });
    }
}
