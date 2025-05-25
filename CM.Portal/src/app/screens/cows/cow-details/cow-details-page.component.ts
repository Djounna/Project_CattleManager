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
import { latLng, tileLayer } from 'leaflet';
import { ActivityType } from '../../../models/enums/activity-type';

@Component({
    selector: 'app-cow-details-page',
    templateUrl: './cow-details-page.component.html',
    styleUrl: './cow-details-page.component.scss',
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

    public mapOptions: any;
    public ActivityType = ActivityType;

    public ShowStatisticsDialog = false;
    public ShowTimelineDialog = false
    public ShowGenealogyDialog = false

    override ngOnInit(): void {
        super.ngOnInit();

        this.route.params.subscribe(params => {
            this.cowId = +params['id'];
        });
        this.initMap();
        this.GetData(); 
    }

    public GetData(): void{
        this.Data$.pipe(
            tap(([cd, mv, cmv]) => {
                this.CowDetails = cd;
                this.MilkingVolumes = mv;
                this.CowMilkingVolumes = cmv;
            }),
            takeUntil(this.$OnDestroyed),
        )
        .subscribe({ error:(err) => { console.log(err); }});

        this.store.dispatch(new Milkings.GetAllLastMonth);
        this.store.dispatch(new CowDetails.Get(this.cowId)); 
        this.store.dispatch(new Milkings.GetAllLastMonthForSelectedCow(this.cowId))
    }

    private initMap(): void{
        this.mapOptions = {
            layers: [
            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
            ],
            zoom: 5,
            center: latLng(46.879966, -121.726909)
        }
    }

    public UpdateCowDialog(): void{

    }

    public ShowStatistics(): void{
        this.ShowStatisticsDialog = true;
    }

    public ShowTimeline(): void{
        this.ShowTimelineDialog = true;
    }

    public ShowGenealogy():void{
        this.ShowGenealogyDialog = true;
    }
}
