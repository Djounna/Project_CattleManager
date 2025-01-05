import { Injectable } from "@angular/core";
import { Selector, Action, StateContext, State } from "@ngxs/store";
import { patch, append, updateItem, removeItem } from "@ngxs/store/operators";
import { tap } from "rxjs";
import { PenDto, StockDto } from "../../api/models";
import { PenService, StockService } from "../../api/services";
import { InfrastructureStateModel } from "./infrastructure.state";
import { Pens, Stocks } from "./infrastructure.action";

@State<InfrastructureStateModel>({
  name: 'infrastructure',
  defaults: {
    Pens: [],
    Stocks: [],
    PenDictionnary: new Map<number, string>()
  }
})

@Injectable()
export class InfrastructureState {
  constructor(private penService: PenService, private stockService: StockService) { }

  @Selector()
  static pens(cattleState: InfrastructureStateModel) {
    return cattleState.Pens;
  }

  @Selector()
  static penDict(cattleState: InfrastructureStateModel) {
    return cattleState.PenDictionnary;
  }

  @Selector()
  static stocks(cattleState: InfrastructureStateModel) {
    return cattleState.Stocks;
  }


  /// Pens Actions
  @Action(Pens.GetAll)
  getAllPens(ctx: StateContext<InfrastructureStateModel>) {
    return this.penService.apiPenGet().pipe(
      tap(pens => {
        ctx.patchState({ Pens: pens });
        ctx.patchState({
          PenDictionnary: new Map(pens.map(p => [p.id as number, p.name as string]))
        });
      })
    );
  }

  @Action(Pens.Create)
  createPen(ctx: StateContext<InfrastructureStateModel>, action: Pens.Create) {
    return this.penService.apiPenPost(action.payload)
      .pipe(
        tap(newPen => {
          ctx.setState(patch<InfrastructureStateModel>({ Pens: append<PenDto>([newPen]) }))
        })
      );
  }

  @Action(Pens.Update)
  updatePen(ctx: StateContext<InfrastructureStateModel>, action: Pens.Update) {
    return this.penService.apiPenPut(action.payload)
      .pipe(
        tap(updatedPen => {
          ctx.setState(patch<InfrastructureStateModel>({ Pens: updateItem<PenDto>(c => c.id === updatedPen.id, updatedPen) }))
        })
      );
  }

  @Action(Pens.Delete)
  deletePen(ctx: StateContext<InfrastructureStateModel>, action: Pens.Delete) {
    return this.penService.apiPenDelete({ id: action.id }).
      pipe(
        tap(deleted => {
          ctx.setState(patch<InfrastructureStateModel>({ Pens: removeItem<PenDto>(c => c.id === action.id) }))
        })
      );
  }

  /// Stocks Actions
  @Action(Stocks.GetAll)
  getAllStocks(ctx: StateContext<InfrastructureStateModel>) {
    return this.stockService.apiStockGet()
      .pipe(tap(stocks => {
        ctx.patchState({ Stocks: stocks })
      })
      );
  }

  @Action(Stocks.Create)
  createStock(ctx: StateContext<InfrastructureStateModel>, action: Stocks.Create) {
    return this.stockService.apiStockPost(action.payload)
      .pipe(
        tap(newStock => {
          ctx.setState(patch<InfrastructureStateModel>({ Stocks: append<StockDto>([newStock]) }))
        })
      );
  }

  @Action(Stocks.Update)
  updateStock(ctx: StateContext<InfrastructureStateModel>, action: Stocks.Update) {
    return this.stockService.apiStockPut(action.payload)
      .pipe(
        tap(updatedStock => {
          ctx.setState(patch<InfrastructureStateModel>({ Stocks: updateItem<StockDto>(c => c.id === updatedStock.id, updatedStock) }))
        })
      );
  }

  @Action(Stocks.Delete)
  deleteStock(ctx: StateContext<InfrastructureStateModel>, action: Stocks.Delete) {
    return this.stockService.apiStockDelete({ id: action.id })
      .pipe(
        tap(deleted => {
          ctx.setState(patch<InfrastructureStateModel>({ Stocks: removeItem<StockDto>(c => c.id === action.id) }))
        })
      );
  }
}
