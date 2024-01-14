import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CowCardComponent } from './cow-card.component';

describe('CowCardComponent', () => {
  let component: CowCardComponent;
  let fixture: ComponentFixture<CowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CowCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
