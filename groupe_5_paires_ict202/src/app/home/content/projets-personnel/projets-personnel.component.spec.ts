import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsPersonnelComponent } from './projets-personnel.component';

describe('ProjetsPersonnelComponent', () => {
  let component: ProjetsPersonnelComponent;
  let fixture: ComponentFixture<ProjetsPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetsPersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
