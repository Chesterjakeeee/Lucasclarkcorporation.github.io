import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjSptsComponent } from './proj-spts.component';

describe('ProjSptsComponent', () => {
  let component: ProjSptsComponent;
  let fixture: ComponentFixture<ProjSptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjSptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjSptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
