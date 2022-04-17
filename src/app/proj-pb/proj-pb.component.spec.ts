import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjPbComponent } from './proj-pb.component';

describe('ProjPbComponent', () => {
  let component: ProjPbComponent;
  let fixture: ComponentFixture<ProjPbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjPbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjPbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
