import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersListViewComponent } from './workers-list-view.component';

describe('WorkersListViewComponent', () => {
  let component: WorkersListViewComponent;
  let fixture: ComponentFixture<WorkersListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkersListViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkersListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
