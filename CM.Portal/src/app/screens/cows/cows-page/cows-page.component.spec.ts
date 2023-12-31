import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CowsPageComponent } from './cows-page.component';

describe('CowsPageComponent', () => {
  let component: CowsPageComponent;
  let fixture: ComponentFixture<CowsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CowsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CowsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
