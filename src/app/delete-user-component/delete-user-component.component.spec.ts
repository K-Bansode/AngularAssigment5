import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserComponentComponent } from './delete-user-component.component';

describe('DeleteUserComponentComponent', () => {
  let component: DeleteUserComponentComponent;
  let fixture: ComponentFixture<DeleteUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUserComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
});
function expect(component: DeleteUserComponentComponent) {
  throw new Error('Function not implemented.');
}

