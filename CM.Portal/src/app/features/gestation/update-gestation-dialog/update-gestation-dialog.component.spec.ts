import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGestationDialogComponent } from './update-gestation-dialog.component';

describe('UpdateGestationDialogComponent', () => {
  let component: UpdateGestationDialogComponent;
  let fixture: ComponentFixture<UpdateGestationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateGestationDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateGestationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
