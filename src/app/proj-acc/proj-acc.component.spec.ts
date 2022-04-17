import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjAccComponent } from './proj-acc.component';

describe('ProjAccComponent', () => {
  let component: ProjAccComponent;
  let fixture: ComponentFixture<ProjAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjAccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
