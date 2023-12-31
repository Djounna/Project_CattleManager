import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CowsListViewComponent } from './cows-list-view.component';

describe('CowsListViewComponent', () => {
  let component: CowsListViewComponent;
  let fixture: ComponentFixture<CowsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CowsListViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CowsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
