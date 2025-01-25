import { Component, ViewChild } from '@angular/core';
import { CowDto, GroupDto, PenDto } from '../../../api/models';
import { Observable, combineLatest, finalize, takeUntil, tap } from 'rxjs';
import { Select } from '@ngxs/store';
import { Cows, Gestations, Groups, Interventions, Vaccinations } from '../../../state/cattle/cattle.actions';
import { CattleState } from '../../../state/cattle/cattle.store';
import { BaseComponent } from '../../../shared/base-component.component';
import { CreateCowDialogComponent } from '../../../features/cattle/cow/create-cow-dialog/create-cow-dialog.component';
import { Pens } from '../../../state/infrastructure/infrastructure.action';
import { CowsListViewComponent } from '../../../features/cattle/cows-list-view/cows-list-view.component';
import { InfrastructureState } from '../../../state/infrastructure/infrastructure.store';
import { UpdateCowDialogComponent } from '../../../features/cattle/cow/update-cow-dialog/update-cow-dialog.component';
import { CreateGestationDialogComponent } from '../../../features/gestation/create-gestation-dialog/create-gestation-dialog.component';
import { CreateInterventionDialogComponent } from '../../../features/intervention/create-intervention-dialog/create-intervention-dialog.component';
import { CreateVaccinationDialogComponent } from '../../../features/vaccination/create-vaccination-dialog/create-vaccination-dialog.component';

@Component({
  selector: 'app-cows-page',
  templateUrl: './cows-page.component.html',
  styleUrl: './cows-page.component.scss',
  standalone: false
})
export class CowsPageComponent extends BaseComponent {

  @ViewChild('cowList') cowList!: CowsListViewComponent

  @Select(CattleState.cows) Cows$!: Observable<CowDto[]>
  public Cows: CowDto[] = []
  @Select(CattleState.groups) Groups$!: Observable<GroupDto[]>
  public Groups: GroupDto[] = [];
  @Select(InfrastructureState.pens) Pens$!: Observable<PenDto[]>
  public Pens: PenDto[] = [];

  public Data$ = combineLatest([this.Cows$, this.Groups$, this.Pens$])

  public SelectedCow!: CowDto;

  override ngOnInit(): void {

    this.displayLoader = true;

    this.Data$.pipe(
      takeUntil(this.$OnDestroyed),
      tap(([c, g, p]) => {
        this.Cows = c;
        this.Groups = g;
        this.Pens = p;
      })).subscribe({
        next: (res) => this.displayLoader = false,
        error: (err) => this.displayLoader = false
      });

    this.store.dispatch(new Cows.GetAll());
    this.store.dispatch(new Groups.GetAll());
    this.store.dispatch(new Pens.GetAll());
  }

  public CreateCowDialog(): void {
    const dialogRef = this.dialogService.open(CreateCowDialogComponent, {
      header: 'Ajouter un animal',
      height: '450px',
      width: '500px',
    });

    dialogRef.onClose.subscribe(result => {
      if (result == null)
        return;
      this.store.dispatch(new Cows.Create({ body: result })).subscribe({
        next: () => this.toastSuccess("L'animal a été créé avec succès"),
        error: () => this.toastError("Une erreur s'est produite")
      });
    });
  }

  public UpdateCowDialog(cow: CowDto): void {
    const dialogRef = this.dialogService.open(UpdateCowDialogComponent, {
      data: cow,
      header: 'Mettre à jour un animal',
      height: '450px',
      width: '350px',
    });

    dialogRef.onClose.subscribe(result => {
      if (result == null)
        return;
      this.store.dispatch(new Cows.Update({ body: result })).subscribe({
        next: () => this.toastSuccess("L'animal a été modifié avec succès"),
        error: () => this.toastError("Une erreur s'est produite")
      });
    });
  }

  public CreateInterventionDialog(cow: CowDto): void {
    const dialogRef = this.dialogService.open(CreateInterventionDialogComponent, {
      data: cow,
      header: 'Ajouter une intervention',
      height: '450px',
      width: '500px',
    });

    dialogRef.onClose.subscribe(result => {
      if (result == null)
        return;
      this.store.dispatch(new Interventions.Create({ body: result })).subscribe({
        next: () => this.toastSuccess("L'intervention a été créé avec succès"),
        error: () => this.toastError("Une erreur s'est produite")
      });
    });
  }

  public CreateVaccinationDialog(cow: CowDto): void {
    const dialogRef = this.dialogService.open(CreateVaccinationDialogComponent, {
      data: cow,
      header: 'Ajouter une vaccination',
      height: '450px',
      width: '500px',
    });

    dialogRef.onClose.subscribe(result => {
      if (result == null)
        return;
      this.store.dispatch(new Vaccinations.Create({ body: result })).subscribe({
        next: () => this.toastSuccess("La vaccination a été créé avec succès"),
        error: () => this.toastError("Une erreur s'est produite")
      });
    });
  }

  public CreateGestationDialog(cow: CowDto): void {
    const dialogRef = this.dialogService.open(CreateGestationDialogComponent, {
      data: cow,
      header: 'Ajouter une gestation',
      height: '250px',
      width: '400px',
    });

    dialogRef.onClose.subscribe(result => {
      if (result == null)
        return;
      this.store.dispatch(new Gestations.Create({ body: result })).subscribe({
        next: () => this.toastSuccess("La gestation a été créé avec succès"),
        error: () => this.toastError("Une erreur s'est produite")
      });
    });
  }


  public ShowAll(): void {
    this.cowList.showAll()
  }
  public SelectGroup(group: GroupDto): void {
    this.cowList.filterByGroup(group);
  }
  public SelectPen(pen: PenDto): void {
    this.cowList.filterByPen(pen);
  }

  public SelectCow(cow: CowDto): void {
    this.SelectedCow = cow;
  }
}
