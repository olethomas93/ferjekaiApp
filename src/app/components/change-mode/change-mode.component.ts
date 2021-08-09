import { Component, OnInit } from '@angular/core';
import { ColormodeService } from '../../services/colormode.service';

@Component({
  selector: 'app-change-mode',
  templateUrl: './change-mode.component.html',
  styleUrls: ['./change-mode.component.css'],
})
export class ChangeModeComponent implements OnInit {
  public themes = [
    {
      name: 'dark',
      icon: 'brightness_3',
    },
    {
      name: 'light',
      icon: 'wb_sunny',
    },
  ];
  public icon = 'wb_sunny';
  public mode = 'light';

  constructor(public colorMode: ColormodeService) {}

  ngOnInit(): void {}

  setTheme(theme: any) {
    this.mode = 'light';
    this.icon = 'wb_sunny';

    if (theme) {
      this.mode = 'dark';
      this.icon = 'brightness_3';
    }
    this.colorMode.update(this.mode);
  }
}
