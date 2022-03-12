import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSuitRaceComponent } from './card-suit-race.component';

describe('CardSuitRaceComponent', () => {
  let component: CardSuitRaceComponent;
  let fixture: ComponentFixture<CardSuitRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSuitRaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSuitRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
