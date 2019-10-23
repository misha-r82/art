import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PairsTrainComponentComponent } from './pairs-train-component.component';

describe('PairsTrainComponentComponent', () => {
  let component: PairsTrainComponentComponent;
  let fixture: ComponentFixture<PairsTrainComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PairsTrainComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PairsTrainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
