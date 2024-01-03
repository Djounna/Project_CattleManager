import { Component, OnDestroy, OnInit } from '@angular/core';
import { CowDto, GroupDto } from '../../../api/models';
import { Subject, takeUntil } from 'rxjs';
import { CowService, GroupService } from '../../../api/services';

@Component({
  selector: 'app-cows-page',
  templateUrl: './cows-page.component.html',
  styleUrl: './cows-page.component.css'
})
export class CowsPageComponent implements OnInit, OnDestroy {

  constructor(private cowService: CowService, private groupService : GroupService) { }

  private $Destroyed : Subject<void> = new Subject<void>();

  public Cows : CowDto[] = [];
  public Groups: GroupDto[] = [];

  ngOnInit(): void {

    this.Cows = [
      {
        identifier: 'aaa-111',
        name: 'Alba',
        race: 'Charolaise'
      },
      {
        identifier: 'bbb-111',
        name: 'Bernadette',
        race: 'Blanc-Bleu-Belge'
      },
      {
        identifier: 'ccc-111',
        name: 'Camille',
        race: 'Holstein'
      },
    ];

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

    this.groupService.apiGroupGet().pipe(takeUntil(this.$Destroyed)).subscribe({
        next: res => {
          debugger;
          this.Groups = res;
          console.log(res);
        },
        error: err =>{
            debugger;
            console.log(err);
          } 
        }  
      )
  }

  ngOnDestroy(): void {
      this.$Destroyed.next();
      this.$Destroyed.complete();
  }
}
