import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeatopLocationComponent } from './teatop-location.component';

describe('TeatopLocationComponent', () => {
  let component: TeatopLocationComponent;
  let fixture: ComponentFixture<TeatopLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeatopLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeatopLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
