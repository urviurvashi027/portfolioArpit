import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWorkComponent } from './select-work.component';

describe('SelectWorkComponent', () => {
  let component: SelectWorkComponent;
  let fixture: ComponentFixture<SelectWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
