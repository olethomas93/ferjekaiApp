import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintencereportComponent } from './maintencereport.component';

describe('MaintencereportComponent', () => {
  let component: MaintencereportComponent;
  let fixture: ComponentFixture<MaintencereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintencereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintencereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
