import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeatopMenuComponent } from './teatop-menu.component';

describe('TeatopMenuComponent', () => {
  let component: TeatopMenuComponent;
  let fixture: ComponentFixture<TeatopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeatopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeatopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
