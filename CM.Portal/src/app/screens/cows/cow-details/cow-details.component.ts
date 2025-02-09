import { Component, inject } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component.component';
import { CattleState } from '../../../state/cattle/cattle.store';
import { Select } from '@ngxs/store';
import { combineLatest, finalize, Observable, takeUntil, tap } from 'rxjs';
import { CowDetailsDto, MilkingDto, MilkingVolumeDto } from '../../../api/models';
import { CowDetails } from '../../../state/cattle/cattle.actions';
import { ActivatedRoute } from '@angular/router';
import { MilkingState } from '../../../state/milking/milking.store';
import { Milkings } from '../../../state/milking/milking.actions';

@Component({
    selector: 'app-cow-details',
    templateUrl: './cow-details.component.html',
    styleUrl: './cow-details.component.scss',
    standalone: false
})
export class CowDetailsComponent extends BaseComponent{
    private route = inject(ActivatedRoute);
    cowId = 0;
    @Select(CattleState.cowDetails) CowDetails$!: Observable<CowDetailsDto>; 
    public CowDetails!: CowDetailsDto
    @Select(MilkingState.milkingVolumesLastMonth) MilkingVolumes$!: Observable<MilkingVolumeDto[]>;
    public MilkingVolumes! : MilkingVolumeDto[];
    @Select(MilkingState.selectedCowMonthMilkings) CowMilkingVolumes$!: Observable<MilkingDto[]>;
    public CowMilkingVolumes! : MilkingDto[];

    private Data$ = combineLatest([this.CowDetails$, this.MilkingVolumes$, this.CowMilkingVolumes$])

    override ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.cowId = +params['id'];
    });
        this.GetData(); 
        this.store.dispatch(new Milkings.GetAllLastMonth);
        this.store.dispatch(new CowDetails.Get(this.cowId)); 
        this.store.dispatch(new Milkings.GetAllLastMonthForSelectedCow(this.cowId))
    }

    public GetData(): void{
        this.Data$.pipe(
            tap(([cd, mv, cmv]) => {
                this.CowDetails = cd;
                this.MilkingVolumes = mv;
                this.CowMilkingVolumes = cmv;
            }),
            takeUntil(this.$OnDestroyed),
            finalize(() => this.displayLoader = false))
        .subscribe({ error:(err) => { console.log(err); }});
    }
}
