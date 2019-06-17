import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCropFormComponent } from './modal-crop-form.component';

describe('ModalCropFormComponent', () => {
  let component: ModalCropFormComponent;
  let fixture: ComponentFixture<ModalCropFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCropFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCropFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
