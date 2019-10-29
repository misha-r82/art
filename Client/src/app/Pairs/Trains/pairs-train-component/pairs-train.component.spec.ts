import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PairsTrainComponent } from './pairs-train.component';

describe('PairsTrainComponentComponent', () => {
  let component: PairsTrainComponent;
  let fixture: ComponentFixture<PairsTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PairsTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PairsTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
