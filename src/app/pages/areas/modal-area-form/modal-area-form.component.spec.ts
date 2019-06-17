import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAreaFormComponent } from './modal-area-form.component';

describe('ModalAreaFormComponent', () => {
  let component: ModalAreaFormComponent;
  let fixture: ComponentFixture<ModalAreaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAreaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAreaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
