import { Component, inject } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component.component';
import { CattleState } from '../../../state/cattle/cattle.store';
import { Select } from '@ngxs/store';
import { combineLatest, Observable, takeUntil, tap } from 'rxjs';
import { CowDetailsDto, CowDto, CowGenealogyDto, MilkingDto, MilkingVolumeDto } from '../../../api/models';
import { CowDetails, CowGenealogy, Cows } from '../../../state/cattle/cattle.actions';
import { ActivatedRoute } from '@angular/router';
import { MilkingState } from '../../../state/milking/milking.store';
import { Milkings } from '../../../state/milking/milking.actions';
import { ActivityType } from '../../../models/enums/activity-type';
import { UpdateCowDialogComponent } from '../../../features/cattle/cow/update-cow-dialog/update-cow-dialog.component';
import { CreateConditionDialogComponent } from '../../../features/condition/create-condition-dialog/create-condition-dialog.component';
import { CreateGestationDialogComponent } from '../../../features/gestation/create-gestation-dialog/create-gestation-dialog.component';
import { CreateInterventionDialogComponent } from '../../../features/intervention/create-intervention-dialog/create-intervention-dialog.component';
import { CreateTreatmentDialogComponent } from '../../../features/treatment/create-treatment-dialog/create-treatment-dialog.component';
import { CreateVaccinationDialogComponent } from '../../../features/vaccination/create-vaccination-dialog/create-vaccination-dialog.component';
import { MenuItem } from 'primeng/api';
import { MapService, PenMapInfo } from '../../../services/map.service';

@Component({
  selector: 'app-cow-details-page',
  templateUrl: './cow-details-page.component.html',
  styleUrl: './cow-details-page.component.scss',
  standalone: false
})
export class CowDetailsComponent extends BaseComponent {
  private route = inject(ActivatedRoute);
  cowId = 0;
  @Select(CattleState.cow) Cow$!: Observable<CowDto>;
  public Cow!: CowDto
  @Select(CattleState.cowDetails) CowDetails$!: Observable<CowDetailsDto>;
  public CowDetails!: CowDetailsDto
  @Select(MilkingState.milkingVolumesLastMonth) MilkingVolumes$!: Observable<MilkingVolumeDto[]>;
  public MilkingVolumes!: MilkingVolumeDto[];
  @Select(MilkingState.selectedCowMonthMilkings) CowMilkingVolumes$!: Observable<MilkingDto[]>;
  public CowMilkingVolumes!: MilkingDto[];
  private CowData$ = combineLatest([this.Cow$, this.CowDetails$])
  private MilkingData$ = combineLatest([this.MilkingVolumes$, this.CowMilkingVolumes$])
  @Select(CattleState.cowGenealogy) CowGenealogy$!: Observable<CowGenealogyDto>;
  public CowGenealogy!: CowGenealogyDto;

  public Map! : L.Map;
  public MapInfo!: PenMapInfo;
  public ActivityType = ActivityType;
  public menuItems: MenuItem[] | undefined;

  public ShowStatisticsDialog = false;
  public ShowTimelineDialog = false
  public ShowGenealogyDialog = false

  constructor(private mapService: MapService){
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.route.params.subscribe(params => {
      this.cowId = +params['id'];
    });
    this.iniMenuItems();
    this.store.dispatch(new CowDetails.Reset).subscribe();
    this.GetCowData();
  }

  public GetCowData(): void {
    this.CowData$.pipe(
      tap(([c, cd]) => {
        this.Cow = c;
        this.CowDetails = cd;
        if(this.CowDetails != null)
          this.initMap();
      }),
      takeUntil(this.$OnDestroyed))
      .subscribe({ 
        error: (err) => { console.log(err); } 
      });

    this.store.dispatch(new Cows.Get(this.cowId));
    this.store.dispatch(new CowDetails.Get(this.cowId));
  }

  private GetMilkingData() {
    this.MilkingData$.pipe(
      tap(([mv, cmv]) => {
        this.MilkingVolumes = mv;
        this.CowMilkingVolumes = cmv;
      }),
      takeUntil(this.$OnDestroyed),
    )
      .subscribe({ error: (err) => { console.log(err); } });
    this.store.dispatch(new Milkings.GetAllLastMonth);
    this.store.dispatch(new Milkings.GetAllLastMonthForSelectedCow(this.cowId))
  }

  private GetCowGenealogy(){
    this.CowGenealogy$.pipe(
      tap((res) => {
        this.CowGenealogy = res;
      }),
      takeUntil(this.$OnDestroyed),
    )
      .subscribe({ error: (err) => { console.log(err); } });
    this.store.dispatch(new CowGenealogy.Get(this.cowId));
  }

  private iniMenuItems(): void {
    this.menuItems = [
      {
        label: 'Options',
        items: [
          {
            label: 'Intervention',
            icon: 'pi pi-plus-circle',
            command: () => { this.CreateInterventionDialog(this.Cow) }
          },
          {
            label: 'Vaccination',
            icon: 'pi pi-plus-circle',
            command: () => { this.CreateVaccinationDialog(this.Cow) }
          },
          {
            label: 'Gestation',
            icon: 'pi pi-plus-circle',
            command: () => { this.CreateGestationDialog(this.Cow) }
          },
          {
            label: 'Affection',
            icon: 'pi pi-plus-circle',
            command: () => { this.CreateConditionDialog(this.Cow) }
          },
          {
            label: 'Traitement',
            icon: 'pi pi-plus-circle',
            command: () => { this.CreateTreatmentDialog(this.Cow) }
          },
        ]
      }]
  }

  private initMap(): void {
    this.MapInfo = this.mapService.CreatePenMapInfos(this.CowDetails.pen!);
    // = {
    //   layers: [
    //     tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    //   ],
    //   zoom: 5,
    //   center: latLng(46.879966, -121.726909)
    // }
  }

  public UpdateCowDialog(cow: CowDto): void {
    const dialogRef = this.dialogService.open(UpdateCowDialogComponent, {
      data: cow,
      header: 'Mettre à jour un animal',
      height: '450px',
      width: '350px',
    });

    dialogRef.onClose.subscribe(updatedCow => {
      if(updatedCow != null)
        this.store.dispatch(new CowDetails.Get(this.cowId));
      // this.store.dispatch(new Cows.Update({ body: updatedCow })).subscribe({
      //   next: () => this.toastSuccess("L'animal a été modifié avec succès"),
      //   error: () => this.toastError("Une erreur s'est produite")
      // });
    });
  }

  public CreateInterventionDialog(cow: CowDto): void {
    const dialogRef = this.dialogService.open(CreateInterventionDialogComponent, {
      data: cow,
      header: 'Ajouter une intervention',
      // height: '450px',
      width: '350px',
    });

    dialogRef.onClose.subscribe(newIntervention => {
      if(newIntervention != null)
        this.store.dispatch(new CowDetails.Get(this.cowId));
      //   this.store.dispatch(new Interventions.Create({ body: newIntervention })).subscribe({
      //     next: () => this.toastSuccess("L'intervention a été créé avec succès"),
      //     error: () => this.toastError("Une erreur s'est produite")
      //   });
    });
  }

  public CreateVaccinationDialog(cow: CowDto): void {
    const dialogRef = this.dialogService.open(CreateVaccinationDialogComponent, {
      data: cow,
      header: 'Ajouter une vaccination',
      height: '450px',
      width: '350px',
    });

    dialogRef.onClose.subscribe(newVaccination => {
      if(newVaccination != null)
        this.store.dispatch(new CowDetails.Get(this.cowId));
      //   this.store.dispatch(new Vaccinations.Create({ body: newVaccination })).subscribe({
      //     next: () => this.toastSuccess("La vaccination a été créé avec succès"),
      //     error: () => this.toastError("Une erreur s'est produite")
      //   });
    });
  }

  public CreateGestationDialog(cow: CowDto): void {
    const dialogRef = this.dialogService.open(CreateGestationDialogComponent, {
      data: cow,
      header: 'Ajouter une gestation',
      height: '450px',
      width: '350px',
    });

    dialogRef.onClose.subscribe(newGestation => {
      if(newGestation != null)
        this.store.dispatch(new CowDetails.Get(this.cowId));
      // this.store.dispatch(new Gestations.Create({ body: newGestation })).subscribe({
      //     next: () => this.toastSuccess("La gestation a été créé avec succès"),
      //     error: () => this.toastError("Une erreur s'est produite")
      //   });
    });
  }

  public CreateConditionDialog(cow: CowDto): void {
    const dialogRef = this.dialogService.open(CreateConditionDialogComponent, {
      data: cow,
      header: 'Ajouter une affection',
      height: '450px',
      width: '350px',
    });

    dialogRef.onClose.subscribe(newCondition => {
      if(newCondition != null)
        debugger;
        this.store.dispatch(new CowDetails.Get(this.cowId));
    //   this.store.dispatch(new Conditions.Create({ body: newCondition })).subscribe({
    //     next: () => this.toastSuccess("L'affection a été ajoutée avec succès"),
    //     error: () => this.toastError("Une erreur s'est produite")
    //   });
    });
  }

  public CreateTreatmentDialog(cow: CowDto): void {
    const dialogRef = this.dialogService.open(CreateTreatmentDialogComponent, {
      data: cow,
      header: 'Ajouter un traitement',
      height: '450px',
      width: '350px',
    });

    dialogRef.onClose.subscribe(newTreatment => {
      if(newTreatment != null)
        this.store.dispatch(new CowDetails.Get(this.cowId));
      // this.store.dispatch(new Treatments.Create({ body: newTreatment })).subscribe({
      //   next: () => this.toastSuccess("Le traitement a été ajouté avec succès"),
      //   error: () => this.toastError("Une erreur s'est produite")
      // });
    });
  }

  public ShowStatistics(): void {
    this.GetMilkingData();
    this.ShowStatisticsDialog = true;
    // const dialogRef = this.dialogService.open(CowMonthMilkingsGraphDialogComponent, {
    //   data: cow,
    //   header: 'Statistiques traites',
    // });
  }

  public ShowTimeline(): void {
    this.ShowTimelineDialog = true;
    // const dialogRef = this.dialogService.open(CowTimelineDialogComponent, {
    //   data: cow,
    //   header: 'Ajouter un traitement',
    // });
  }

  public ShowGenealogy(): void {
    this.GetCowGenealogy();
    this.ShowGenealogyDialog = true;
    //   const dialogRef = this.dialogService.open(CowGenealogyDialogComponent, {
    //     data: cow,
    //     header: 'Généalogie',
    //   });
  }

  public onMapReady(map: any){
    setTimeout(() => {
      this.Map = map;
      this.Map.invalidateSize();
    }, 1000);
  }
}
