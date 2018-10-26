import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeatopNavbarComponent } from './teatop-navbar.component';

describe('TeatopNavbarComponent', () => {
  let component: TeatopNavbarComponent;
  let fixture: ComponentFixture<TeatopNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeatopNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeatopNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
