import { Component, OnDestroy, OnInit } from '@angular/core';
import { CowDto, GroupDto } from '../../../api/models';
import { Observable, Subject, mergeMap, takeUntil, tap } from 'rxjs';
import { CowService, GroupService } from '../../../api/services';
import { Select, Store } from '@ngxs/store';
import { Cows, Groups } from '../../../state/cattle/cattle.actions';
import { CattleState } from '../../../state/cattle/cattle.state';

@Component({
  selector: 'app-cows-page',
  templateUrl: './cows-page.component.html',
  styleUrl: './cows-page.component.css'
})
export class CowsPageComponent implements OnInit, OnDestroy {

  constructor(private store: Store, private cowService: CowService, private groupService : GroupService) { }

  private $Destroyed : Subject<void> = new Subject<void>();

  @Select(CattleState.cows) Cows$! : Observable<CowDto[]>
  // public Cows$ : Observable<CowDto[]> | undefined;
  public Cows : CowDto[] = []
  // @Select(CattleState.groups) Groups$ = Observable<GroupDto[]>
  // public Groups: GroupDto[] = [];

  ngOnInit(): void {

    this.Cows$.subscribe({
      next:(cows) => {
        this.Cows = cows;
        debugger;
        console.log(this.Cows);
      }
    });

    this.store.dispatch(new Cows.GetAll());
    this.store.dispatch(new Groups.GetAll());

    // this.groupService.apiGroupGet().pipe(takeUntil(this.$Destroyed)).subscribe({
    //     next: res => {
    //       debugger;
    //       this.Groups = res;
    //       console.log(res);
    //     },
    //     error: err =>{
    //         debugger;
    //         console.log(err);
    //       } 
    //     }  
    //   )
    // this.Cows = [
    //   {
    //     identifier: 'aaa-111',
    //     name: 'Alba',
    //     race: 'Charolaise'
    //   },
    //   {
    //     identifier: 'bbb-111',
    //     name: 'Bernadette',
    //     race: 'Blanc-Bleu-Belge'
    //   },
    //   {
    //     identifier: 'ccc-111',
    //     name: 'Camille',
    //     race: 'Holstein'
    //   },
    // ];

    // this.Groups = [
    //   {
    //     name: 'Calves 2m-6m',
    //   },
    //   {
    //     name: 'Calves 7m-12m',
    //   },
    //   {
    //     name: 'Bulls 1y-2y',
    //   },
    //   {
    //     name: 'Cows 1y-2y',
    //   },
    // ]

  }

  ngOnDestroy(): void {
      this.$Destroyed.next();
      this.$Destroyed.complete();
  }
}
