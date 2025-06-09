import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { combineLatest, Observable, takeUntil, tap } from 'rxjs';
import { CowDto, GroupDto, PenDto } from '../../../api/models';
import { CattleState } from '../../../state/cattle/cattle.store';
import { BaseComponent } from '../../../shared/base-component.component';
import { Cows, Groups } from '../../../state/cattle/cattle.actions';
import { Pens } from '../../../state/infrastructure/infrastructure.action';
import { InfrastructureState } from '../../../state/infrastructure/infrastructure.store';
import { MapService, PenMapInfo } from '../../../services/map.service';
import { PicklistPenDialogComponent } from '../../../features/shared/dialogs/picklist-pen-dialog/picklist-pen-dialog.component';
import { CreateAlertDialogComponent } from '../../../features/alerts/create-alert-dialog/create-alert-dialog.component';
import { CreatePenDialogComponent } from '../../../features/pens/pen/create-pen-dialog/create-pen-dialog.component';
import { UpdatePenDialogComponent } from '../../../features/pens/pen/update-pen-dialog/update-pen-dialog.component';

@Component({
  selector: 'app-pen-page',
  standalone: false,
  templateUrl: './pen-page.component.html',
  styleUrl: './pen-page.component.scss'
})
export class PenPageComponent extends BaseComponent{

  constructor(private mapService: MapService){
    super();
  }

  @Select(CattleState.cows) Cows$! : Observable<CowDto[]>
  public Cows : CowDto[] = []
  @Select(CattleState.groups) Groups$! : Observable<GroupDto[]>
  public Groups: GroupDto[] = [];
  @Select(InfrastructureState.pens) Pens$! : Observable<PenDto[]>
  public Pens: PenDto[] = [];
  public Data$ = combineLatest([this.Cows$, this.Groups$, this.Pens$])

  public PenMapInfos : PenMapInfo[] = [];

  override ngOnInit(): void {
    super.ngOnInit();

    this.Data$.pipe(
      takeUntil(this.$OnDestroyed),
      tap(([c,g,p]) =>{
        this.Cows = c;
        this.Groups = g;
        this.Pens = p;
        })).subscribe({
          next:() => this.initMapOptions()
        });

    this.store.dispatch(new Cows.GetAll());
    this.store.dispatch(new Groups.GetAll());
    this.store.dispatch(new Pens.GetAll());
  }

  private initMapOptions(): void{
    this.PenMapInfos = this.mapService.CreatePenMapInfosList(this.Pens);
  }

  picklistPenDialog(pen: any): void{
    const dialogRef = this.dialog.open(PicklistPenDialogComponent, {
      height: '80vh',
      width: '80vw',
      data: {Cows: this.Cows, Pens: this.Pens, SourceId: pen.id} 
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === true)
        this.store.dispatch(new Pens.GetAll())
    });
  }

  public CreatePenAlertDialog(pen: PenDto): void {
    const dialogRef = this.dialogService.open(CreateAlertDialogComponent, {
      data: {
        cow: null,
        pen: pen
      },
      header: 'Ajouter une alerte',
      height: '400px',
      width: '500px',
    });
  }

  public CreatePenDialog(): void {
    const dialogRef = this.dialogService.open(CreatePenDialogComponent, {
      header: 'Créer un enclos',
      height: '400px',
      width: '350px',
    });
  }

  public UpdatePenDialog(group: PenDto): void{
    const dialogref = this.dialogService.open(UpdatePenDialogComponent, {
      header: 'Mettre à jour un enclos',
      height: '400px',
      width: '350px',
      data: group
    })
  }

  public onMapReady(map: any){
    setTimeout(() => {
      map.invalidateSize();
    }, 1000);
  }
}
