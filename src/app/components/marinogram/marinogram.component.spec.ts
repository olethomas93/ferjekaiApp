import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarinogramComponent } from './marinogram.component';

describe('MarinogramComponent', () => {
  let component: MarinogramComponent;
  let fixture: ComponentFixture<MarinogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarinogramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarinogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
