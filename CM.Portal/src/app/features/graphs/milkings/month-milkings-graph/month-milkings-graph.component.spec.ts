import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthMilkingsGraphComponent } from './month-milkings-graph.component';

describe('MonthMilkingsGraphComponent', () => {
  let component: MonthMilkingsGraphComponent;
  let fixture: ComponentFixture<MonthMilkingsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthMilkingsGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthMilkingsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
