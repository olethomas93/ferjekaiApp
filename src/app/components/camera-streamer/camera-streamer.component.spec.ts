import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraStreamerComponent } from './camera-streamer.component';

describe('CameraStreamerComponent', () => {
  let component: CameraStreamerComponent;
  let fixture: ComponentFixture<CameraStreamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameraStreamerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraStreamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
