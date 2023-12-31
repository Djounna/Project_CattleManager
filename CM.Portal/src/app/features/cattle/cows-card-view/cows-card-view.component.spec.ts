import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CowsCardViewComponent } from './cows-card-view.component';

describe('CowsCardViewComponent', () => {
  let component: CowsCardViewComponent;
  let fixture: ComponentFixture<CowsCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CowsCardViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CowsCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
