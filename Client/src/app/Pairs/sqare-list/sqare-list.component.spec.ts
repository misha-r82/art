import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqareListComponent } from './sqare-list.component';

describe('SqareListComponent', () => {
  let component: SqareListComponent;
  let fixture: ComponentFixture<SqareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
