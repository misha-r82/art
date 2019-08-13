import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrPairComponent } from './str-pair.component';

describe('StrPairComponent', () => {
  let component: StrPairComponent;
  let fixture: ComponentFixture<StrPairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrPairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrPairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
