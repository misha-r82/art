import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazdelsComponent } from './razdels.component';

describe('RazdelsComponent', () => {
  let component: RazdelsComponent;
  let fixture: ComponentFixture<RazdelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazdelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazdelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
