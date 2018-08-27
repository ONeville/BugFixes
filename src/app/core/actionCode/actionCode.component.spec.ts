import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCodeComponent } from './actionCode.component';

describe('ActionCodeComponent', () => {
  let component: ActionCodeComponent;
  let fixture: ComponentFixture<ActionCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
