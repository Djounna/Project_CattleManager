import { Component, inject } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component.component';
import { CattleState } from '../../../state/cattle/cattle.store';
import { Select } from '@ngxs/store';
import { combineLatest, finalize, Observable, takeUntil, tap } from 'rxjs';
import { CowDetailsDto, CowDto, MilkingDto, MilkingVolumeDto } from '../../../api/models';
import { CowDetails, Cows } from '../../../state/cattle/cattle.actions';
import { ActivatedRoute } from '@angular/router';
import { MilkingState } from '../../../state/milking/milking.store';
import { Milkings } from '../../../state/milking/milking.actions';
import { latLng, tileLayer } from 'leaflet';
import { ActivityType } from '../../../models/enums/activity-type';
import { UpdateCowDialogComponent } from '../../../features/cattle/cow/update-cow-dialog/update-cow-dialog.component';
import { CreateConditionDialogComponent } from '../../../features/condition/create-condition-dialog/create-condition-dialog.component';
import { CreateGestationDialogComponent } from '../../../features/gestation/create-gestation-dialog/create-gestation-dialog.component';
import { CreateInterventionDialogComponent } from '../../../features/intervention/create-intervention-dialog/create-intervention-dialog.component';
import { CreateTreatmentDialogComponent } from '../../../features/treatment/create-treatment-dialog/create-treatment-dialog.component';
import { CreateVaccinationDialogComponent } from '../../../features/vaccination/create-vaccination-dialog/create-vaccination-dialog.component';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-cow-details-page',
    templateUrl: './cow-details-page.component.html',
    styleUrl: './cow-details-page.component.scss',
    standalone: false
})
export class CowDetailsComponent extends BaseComponent{
    private route = inject(ActivatedRoute);
    cowId = 0;
    @Select(CattleState.cow) Cow$!: Observable<CowDto>; 
    public Cow!: CowDto
    @Select(CattleState.cowDetails) CowDetails$!: Observable<CowDetailsDto>; 
    public CowDetails!: CowDetailsDto
    @Select(MilkingState.milkingVolumesLastMonth) MilkingVolumes$!: Observable<MilkingVolumeDto[]>;
    public MilkingVolumes! : MilkingVolumeDto[];
    @Select(MilkingState.selectedCowMonthMilkings) CowMilkingVolumes$!: Observable<MilkingDto[]>;
    public CowMilkingVolumes! : MilkingDto[];
    private CowData$ = combineLatest([this.Cow$, this.CowDetails$])
    private MilkingData$ = combineLatest([this.MilkingVolumes$, this.CowMilkingVolumes$])

    public mapOptions: any;
    public ActivityType = ActivityType;
    public menuItems:MenuItem[] | undefined;

    public ShowStatisticsDialog = false;
    public ShowTimelineDialog = false
    public ShowGenealogyDialog = false

    override ngOnInit(): void {
        super.ngOnInit();

        this.route.params.subscribe(params => {
            this.cowId = +params['id'];
        });
        this.iniMenuItems();
        this.initMap();

        this.store.dispatch(new CowDetails.Reset).subscribe();
        this.GetCowData(); 
    }

    public GetCowData(): void{
          this.CowData$.pipe(
            tap(([c, cd]) => {
                this.Cow = c;
                this.CowDetails = cd;
            }),
            takeUntil(this.$OnDestroyed),
        )
        .subscribe({ error:(err) => { console.log(err); }});
        this.store.dispatch(new Cows.Get(this.cowId));
        this.store.dispatch(new CowDetails.Get(this.cowId)); 
    }

    private GetMilkingData(){
          this.MilkingData$.pipe(
            tap(([mv, cmv]) => {
                this.MilkingVolumes = mv;
                this.CowMilkingVolumes = cmv;
            }),
            takeUntil(this.$OnDestroyed),
        )
        .subscribe({ error:(err) => { console.log(err); }});
        this.store.dispatch(new Milkings.GetAllLastMonth);
        this.store.dispatch(new Milkings.GetAllLastMonthForSelectedCow(this.cowId))
    }

    private iniMenuItems(): void{
        this.menuItems = [ 
        {
        label:'Options',
        items:[
            {
            label: 'Intervention',
            icon: 'pi pi-plus-circle',
            command: () => {this.CreateInterventionDialog(this.Cow)}
            },
            {
            label: 'Vaccination',
            icon: 'pi pi-plus-circle',
            command: () => {this.CreateVaccinationDialog(this.Cow)}
            },
            {
            label: 'Gestation',
            icon: 'pi pi-plus-circle',
            command: () => {this.CreateGestationDialog(this.Cow)}
            },
            {
            label: 'Affection',
            icon: 'pi pi-plus-circle',
            command: () => {this.CreateConditionDialog(this.Cow)}
            },
            {
            label: 'Traitement',
            icon: 'pi pi-plus-circle',
            command: () => {this.CreateTreatmentDialog(this.Cow)}
            },
        ]
        }]
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

  public UpdateCowDialog(cow: CowDto): void {
    const dialogRef = this.dialogService.open(UpdateCowDialogComponent, {
      data: cow,
      header: 'Mettre à jour un animal',
      height: '450px',
      width: '350px',
    });

    dialogRef.onClose.subscribe(result => {
      if(result != null){
        this.GetCowData();
      }
    });
  }

  public CreateInterventionDialog(cow: CowDto): void {
    const dialogRef = this.dialogService.open(CreateInterventionDialogComponent, {
      data: cow,
      header: 'Ajouter une intervention',
      // height: '450px',
      width: '350px',
    });

    dialogRef.onClose.subscribe(result => {
      if(result != null){
        this.GetCowData();
      }
    });
  }

  public CreateVaccinationDialog(cow: CowDto): void {
    const dialogRef = this.dialogService.open(CreateVaccinationDialogComponent, {
      data: cow,
      header: 'Ajouter une vaccination',
      height: '450px',
      width: '350px',
    });

    dialogRef.onClose.subscribe(result => {
      if(result != null){
        this.GetCowData();
      }
    });
  }

  public CreateGestationDialog(cow: CowDto): void {
    const dialogRef = this.dialogService.open(CreateGestationDialogComponent, {
      data: cow,
      header: 'Ajouter une gestation',
      height: '450px',
      width: '350px',
    });

    dialogRef.onClose.subscribe(result => {
      if(result != null){
        this.GetCowData();
      }
    });
  }

  public CreateConditionDialog(cow: CowDto): void {
    const dialogRef = this.dialogService.open(CreateConditionDialogComponent, {
      data: cow,
      header: 'Ajouter une affection',
      height: '450px',
      width: '350px',
    });

    dialogRef.onClose.subscribe(result => {
      if(result != null){
        this.GetCowData();
      }
    });
  }

  public CreateTreatmentDialog(cow: CowDto): void {
    const dialogRef = this.dialogService.open(CreateTreatmentDialogComponent, {
      data: cow,
      header: 'Ajouter un traitement',
      height: '450px',
      width: '350px',
    });

    dialogRef.onClose.subscribe(result => {
      if(result != null){
        this.GetCowData();
      }
    });
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
