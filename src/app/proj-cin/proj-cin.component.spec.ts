import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjCinComponent } from './proj-cin.component';

describe('ProjCinComponent', () => {
  let component: ProjCinComponent;
  let fixture: ComponentFixture<ProjCinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjCinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjCinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
