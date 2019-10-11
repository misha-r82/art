import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PairsMainComponent } from './pairs-main.component';

describe('PairsMainComponent', () => {
  let component: PairsMainComponent;
  let fixture: ComponentFixture<PairsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PairsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PairsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
