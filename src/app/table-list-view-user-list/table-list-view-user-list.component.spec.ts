import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListViewUserListComponent } from './table-list-view-user-list.component';

describe('TableListViewUserListComponent', () => {
  let component: TableListViewUserListComponent;
  let fixture: ComponentFixture<TableListViewUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableListViewUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListViewUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
