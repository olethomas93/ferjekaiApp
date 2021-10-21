import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmconfComponent } from './alarmconf.component';

describe('AlarmconfComponent', () => {
  let component: AlarmconfComponent;
  let fixture: ComponentFixture<AlarmconfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmconfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmconfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
