import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDockComponent } from './delete-dock.component';

describe('DeleteDockComponent', () => {
  let component: DeleteDockComponent;
  let fixture: ComponentFixture<DeleteDockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
