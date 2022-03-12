import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingsCupComponent } from './kings-cup.component';

describe('KingsCupComponent', () => {
  let component: KingsCupComponent;
  let fixture: ComponentFixture<KingsCupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingsCupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingsCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
