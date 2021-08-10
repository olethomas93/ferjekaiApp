import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerjekaiStatusComponent } from './ferjekai-status.component';

describe('FerjekaiStatusComponent', () => {
  let component: FerjekaiStatusComponent;
  let fixture: ComponentFixture<FerjekaiStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FerjekaiStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FerjekaiStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
