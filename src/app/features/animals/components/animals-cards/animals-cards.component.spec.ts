import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsCardsComponent } from './animals-cards.component';

describe('AnimalsCardsComponent', () => {
  let component: AnimalsCardsComponent;
  let fixture: ComponentFixture<AnimalsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalsCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
