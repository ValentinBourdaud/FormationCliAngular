import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaribaleComponent } from './varibale.component';

describe('VaribaleComponent', () => {
  let component: VaribaleComponent;
  let fixture: ComponentFixture<VaribaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaribaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaribaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
