import { Injectable } from "@angular/core";
import { Selector, Action, StateContext, State } from "@ngxs/store";
import { patch, append, updateItem, removeItem } from "@ngxs/store/operators";
import { tap } from "rxjs";
import { ConditionDto, CowDto, GestationDto, GroupDto, InterventionDto, TreatmentDto, VaccinationDto } from "../../api/models";
import { ConditionService, CowService, GestationService, GroupService, InterventionService, StatisticService, TreatmentService, VaccinationService } from "../../api/services";
import { CattleStatistics, Conditions, CowDetails, CowGenealogy, Cows, Gestations, Groups, Interventions, Treatments, Vaccinations } from "./cattle.actions";
import { CattleStateModel } from "./cattle.state";
import { CowUtils } from "../../utils/cow-utils";

@State<CattleStateModel>({
  name: 'cattle',
  defaults: {
    Cow: undefined,
    CowDetails: undefined,
    CowGenealogy: undefined,
    Cows: [],
    CowIdentifierDictionnary: new Map<number, string>(),
    CowNameDictionnary: new Map<number, string>(),
    Groups: [],
    GroupDictionnary: new Map<number, string>(),
    Gestations: [],
    Interventions: [],
    Vaccinations: [],
    Conditions: [],
    Treatments: [],
    CattleStatistics: undefined,
  }
})

@Injectable()
export class CattleState {
  constructor(
    private cowService: CowService, 
    private groupService: GroupService, 
    private gestationService: GestationService, 
    private interventionService: InterventionService,
    private vaccinationService: VaccinationService,
    private conditionService: ConditionService,
    private treatmentService: TreatmentService,
    private statisticService: StatisticService
    ) { }

  @Selector()
  static cow(cattleState: CattleStateModel){
    return cattleState.Cow;
  }

  @Selector()
  static cowDetails(cattleState: CattleStateModel){
    return cattleState.CowDetails;
  }

  @Selector()
  static cowGenealogy(cattleState: CattleStateModel){
    return cattleState.CowGenealogy;
  }

  @Selector()
  static cows(cattleState: CattleStateModel) {
    return cattleState.Cows;
  }

  @Selector()
  static cowIdentifierDict(cattleState: CattleStateModel) {
    return cattleState.CowIdentifierDictionnary;
  }

  @Selector()
  static cowNameDict(cattleState: CattleStateModel) {
    return cattleState.CowNameDictionnary;
  }

  @Selector()
  static groups(cattleState: CattleStateModel) {
    return cattleState.Groups;
  }

  @Selector()
  static groupDict(cattleState: CattleStateModel) {
    return cattleState.GroupDictionnary;
  }

  @Selector()
  static gestations(cattleState: CattleStateModel) {
    return cattleState.Gestations;
  }

  @Selector()
  static interventions(cattleState: CattleStateModel) {
    return cattleState.Interventions;
  }

  @Selector()
  static vaccinations(cattleState: CattleStateModel) {
    return cattleState.Vaccinations;
  }

  @Selector()
  static conditions(cattleState: CattleStateModel) {
    return cattleState.Conditions;
  }

  @Selector()
  static treatments(cattleState: CattleStateModel) {
    return cattleState.Treatments;
  }

  @Selector()
  static cattleStats(cattleState: CattleStateModel) {
    return cattleState.CattleStatistics;
  }

  /// Cows Actions
  @Action(Cows.Get)
  getCow(ctx: StateContext<CattleStateModel>, action: Cows.Get){
    return this.cowService.apiCowIdGet({ id: action.id})
      .pipe(
        tap(cow => 
          ctx.patchState({ Cow: cow }))
      );
  }

  @Action(Cows.GetAll)
  getAllCows(ctx: StateContext<CattleStateModel>) {
    return this.cowService.apiCowGet().pipe(tap(cows => {
      ctx.patchState({ Cows: cows });
      ctx.patchState({
        CowIdentifierDictionnary: new Map(cows.map(c => [c.id as number, c.identifier as string]))
      });
      ctx.patchState({
        CowNameDictionnary: new Map(cows.map(c => [c.id as number, c.name as string]))
      });
    })
    );
  }

  @Action(Cows.Create)
  createCow(ctx: StateContext<CattleStateModel>, action: Cows.Create) {
    return this.cowService.apiCowPost(action.payload)
      .pipe(
        tap(newCow => {
          ctx.setState(patch<CattleStateModel>({ Cows: append<CowDto>([newCow]) }))
        })
      );
  }

  @Action(Cows.Update)
  updateCow(ctx: StateContext<CattleStateModel>, action: Cows.Update) {
    return this.cowService.apiCowPut(action.payload)
      .pipe(
        tap(updatedCow => {
          ctx.setState(patch<CattleStateModel>({ Cows: updateItem<CowDto>(c => c.id === updatedCow.id, updatedCow) }))
        })
      );
  }

  @Action(Cows.Delete)
  deleteCow(ctx: StateContext<CattleStateModel>, action: Cows.Delete) {
    return this.cowService.apiCowDelete({ id: action.id }).
      pipe(
        tap(deleted => {
          ctx.setState(patch<CattleStateModel>({ Cows: removeItem<CowDto>(c => c.id === action.id) }))
        })
      );
  }

  /// Cow Details Actions
  @Action(CowDetails.Get)
    getCowDetails(ctx: StateContext<CattleStateModel>, action: CowDetails.Get) {
      return this.cowService.apiCowIdDetailsGet({ id: action.id})
      .pipe(
        tap(cowDetails => 
          ctx.patchState({ CowDetails: cowDetails }))
      );
    }

  @Action(CowDetails.Reset)
    resetCowDetails(ctx: StateContext<CattleStateModel>) {
      ctx.patchState({CowDetails : undefined, Cow: undefined, CowGenealogy: undefined});
    }

  /// Cow Genealogy
  @Action(CowGenealogy.Get)
    getCowGenealogy(ctx: StateContext<CattleStateModel>, action: CowDetails.Get) {
      return this.cowService.apiCowIdGenealogyGet({ id: action.id})
      .pipe(
        tap(cowGenealogy => 
          ctx.patchState({ CowGenealogy: cowGenealogy }))
      );
    }

  /// Groups Actions
  @Action(Groups.GetAll)
  getAllGroups(ctx: StateContext<CattleStateModel>) {
    return this.groupService.apiGroupGet()
      .pipe(tap(groups => {
        ctx.patchState({ Groups: groups });
        ctx.patchState({
          GroupDictionnary: new Map(groups.map(p => [p.id as number, p.name as string]))
        });
      })
      );
  }

  @Action(Groups.Create)
  createGroup(ctx: StateContext<CattleStateModel>, action: Groups.Create) {
    return this.groupService.apiGroupPost(action.payload)
      .pipe(
        tap(newGroup => {
          ctx.setState(patch<CattleStateModel>({ Groups: append<GroupDto>([newGroup]) }))
        })
      );
  }

  @Action(Groups.Update)
  updateGroup(ctx: StateContext<CattleStateModel>, action: Groups.Update) {
    return this.groupService.apiGroupPut(action.payload)
      .pipe(
        tap(updatedGroup => {
          ctx.setState(patch<CattleStateModel>({ Groups: updateItem<GroupDto>(c => c.id === updatedGroup.id, updatedGroup) }))
        })
      );
  }

  @Action(Groups.Delete)
  deleteGroup(ctx: StateContext<CattleStateModel>, action: Groups.Delete) {
    return this.groupService.apiGroupDelete({ id: action.id })
      .pipe(
        tap(deleted => {
          ctx.setState(patch<CattleStateModel>({ Groups: removeItem<GroupDto>(c => c.id === action.id) }))
        })
      );
  }


  /// Gestations Actions
  @Action(Gestations.GetAll)
  getAllGestations(ctx: StateContext<CattleStateModel>) {
    return this.gestationService.apiGestationGet()
      .pipe(tap(gestations => {
        gestations.forEach(g => g.progress = CowUtils.ComputeProgress(new Date(g.startDate as string), new Date(g.calvingDate as string)));
        ctx.patchState({ Gestations: gestations })
      })
      );
  }

  @Action(Gestations.Create)
  createGestation(ctx: StateContext<CattleStateModel>, action: Gestations.Create) {
    return this.gestationService.apiGestationPost(action.payload)
      .pipe(
        tap(newGestation => {
          ctx.setState(patch<CattleStateModel>({ Gestations: append<GestationDto>([newGestation]) }))
        })
      );
  }

  @Action(Gestations.Update)
  updateGestation(ctx: StateContext<CattleStateModel>, action: Gestations.Update) {
    return this.gestationService.apiGestationPut(action.payload)
      .pipe(
        tap(updatedGestation => {
          ctx.setState(patch<CattleStateModel>({ Gestations: updateItem<GestationDto>(c => c.id === updatedGestation.id, updatedGestation) }))
        })
      );
  }

  @Action(Gestations.Delete)
  deleteGestation(ctx: StateContext<CattleStateModel>, action: Gestations.Delete) {
    return this.gestationService.apiGestationDelete({ id: action.id })
      .pipe(
        tap(deleted => {
          ctx.setState(patch<CattleStateModel>({ Gestations: removeItem<GestationDto>(c => c.id === action.id) }))
        })
      );
  }


  /// Interventions Actions
  @Action(Interventions.GetAll)
  getAllInterventions(ctx: StateContext<CattleStateModel>) {
    return this.interventionService.apiInterventionGet()
      .pipe(tap(interventions => {
        ctx.patchState({ Interventions: interventions })
      })
      );
  }

  @Action(Interventions.Create)
  createIntervention(ctx: StateContext<CattleStateModel>, action: Interventions.Create) {
    return this.interventionService.apiInterventionPost(action.payload)
      .pipe(
        tap(newIntervention => {
          ctx.setState(patch<CattleStateModel>({ Interventions: append<InterventionDto>([newIntervention]) }))
        })
      );
  }

  @Action(Interventions.Update)
  updateIntervention(ctx: StateContext<CattleStateModel>, action: Interventions.Update) {
    return this.interventionService.apiInterventionPut(action.payload)
      .pipe(
        tap(updatedIntervention => {
          ctx.setState(patch<CattleStateModel>({ Interventions: updateItem<InterventionDto>(c => c.id === updatedIntervention.id, updatedIntervention) }))
        })
      );
  }

  @Action(Interventions.Delete)
  deleteIntervention(ctx: StateContext<CattleStateModel>, action: Interventions.Delete) {
    return this.interventionService.apiInterventionDelete({ id: action.id })
      .pipe(
        tap(deleted => {
          ctx.setState(patch<CattleStateModel>({ Interventions: removeItem<InterventionDto>(c => c.id === action.id) }))
        })
      );
  }

  /// Vaccinations Actions
  @Action(Vaccinations.GetAll)
  getAllVaccinations(ctx: StateContext<CattleStateModel>) {
    return this.vaccinationService.apiVaccinationGet()
      .pipe(tap(vaccinations => {
        ctx.patchState({ Vaccinations: vaccinations })
      })
      );
  }

  @Action(Vaccinations.Create)
  createVaccination(ctx: StateContext<CattleStateModel>, action: Vaccinations.Create) {
    return this.vaccinationService.apiVaccinationPost(action.payload)
      .pipe(
        tap(newVaccination => {
          ctx.setState(patch<CattleStateModel>({ Vaccinations: append<VaccinationDto>([newVaccination]) }))
        })
      );
  }

  @Action(Vaccinations.Update)
  updateVaccination(ctx: StateContext<CattleStateModel>, action: Vaccinations.Update) {
    return this.vaccinationService.apiVaccinationPut(action.payload)
      .pipe(
        tap(updatedVaccination => {
          ctx.setState(patch<CattleStateModel>({ Vaccinations: updateItem<VaccinationDto>(c => c.id === updatedVaccination.id, updatedVaccination) }))
        })
      );
  }

  @Action(Vaccinations.Delete)
  deleteVaccination(ctx: StateContext<CattleStateModel>, action: Vaccinations.Delete) {
    return this.vaccinationService.apiVaccinationDelete({ id: action.id })
      .pipe(
        tap(deleted => {
          ctx.setState(patch<CattleStateModel>({ Vaccinations: removeItem<VaccinationDto>(c => c.id === action.id) }))
        })
      );
  }

  /// Conditions Actions
  @Action(Conditions.GetAll)
  getAllConditions(ctx: StateContext<CattleStateModel>) {
    return this.conditionService.apiConditionGet()
      .pipe(tap(conditions => {
        ctx.patchState({ Conditions: conditions })
      })
      );
  }

  @Action(Conditions.Create)
  createCondition(ctx: StateContext<CattleStateModel>, action: Conditions.Create) {
    return this.conditionService.apiConditionPost(action.payload)
      .pipe(
        tap(newCondition => {
          ctx.setState(patch<CattleStateModel>({ Conditions: append<ConditionDto>([newCondition]) }))
        })
      );
  }

  @Action(Conditions.Update)
  updateCondition(ctx: StateContext<CattleStateModel>, action: Conditions.Update) {
    return this.conditionService.apiConditionPut(action.payload)
      .pipe(
        tap(updatedCondition => {
          ctx.setState(patch<CattleStateModel>({ Conditions: updateItem<ConditionDto>(c => c.id === updatedCondition.id, updatedCondition) }))
        })
      );
  }

  @Action(Conditions.Delete)
  deleteCondition(ctx: StateContext<CattleStateModel>, action: Conditions.Delete) {
    return this.conditionService.apiConditionDelete({ id: action.id })
      .pipe(
        tap(deleted => {
          ctx.setState(patch<CattleStateModel>({ Conditions: removeItem<ConditionDto>(c => c.id === action.id) }))
        })
      );
  }

  /// Treatments Actions
  @Action(Treatments.GetAll)
  getAllTreatments(ctx: StateContext<CattleStateModel>) {
    return this.treatmentService.apiTreatmentGet()
      .pipe(tap(treatments => {
        ctx.patchState({ Treatments: treatments })
      })
      );
  }

  @Action(Treatments.Create)
  createTreatment(ctx: StateContext<CattleStateModel>, action: Treatments.Create) {
    return this.treatmentService.apiTreatmentPost(action.payload)
      .pipe(
        tap(newTreatment => {
          ctx.setState(patch<CattleStateModel>({ Treatments: append<TreatmentDto>([newTreatment]) }))
        })
      );
  }

  @Action(Treatments.Update)
  updateTreatment(ctx: StateContext<CattleStateModel>, action: Treatments.Update) {
    return this.treatmentService.apiTreatmentPut(action.payload)
      .pipe(
        tap(updatedTreatment => {
          ctx.setState(patch<CattleStateModel>({ Treatments: updateItem<TreatmentDto>(c => c.id === updatedTreatment.id, updatedTreatment) }))
        })
      );
  }

  @Action(Treatments.Delete)
  deleteTreatment(ctx: StateContext<CattleStateModel>, action: Treatments.Delete) {
    return this.treatmentService.apiTreatmentDelete({ id: action.id })
      .pipe(
        tap(deleted => {
          ctx.setState(patch<CattleStateModel>({ Treatments: removeItem<TreatmentDto>(c => c.id === action.id) }))
        })
      );
  }

  /// Statistic Actions
  @Action(CattleStatistics.Get)
  getCattleStatistics(ctx: StateContext<CattleStateModel>){
    return this. statisticService.apiStatisticGet()
      .pipe(tap(cattleStatistics => {
        ctx.patchState({ CattleStatistics: cattleStatistics })
      })
    );
  }
}
