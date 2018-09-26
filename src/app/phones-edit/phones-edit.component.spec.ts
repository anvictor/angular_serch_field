import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesEditComponent } from './phones-edit.component';

describe('PhonesEditComponent', () => {
  let component: PhonesEditComponent;
  let fixture: ComponentFixture<PhonesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
