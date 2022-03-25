import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserCompnentComponent } from './edit-user-compnent.component';

describe('EditUserCompnentComponent', () => {
  let component: EditUserCompnentComponent;
  let fixture: ComponentFixture<EditUserCompnentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserCompnentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserCompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
