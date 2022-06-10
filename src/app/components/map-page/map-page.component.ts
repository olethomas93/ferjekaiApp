import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  Map,
  polyline,
  circle,
  markerClusterGroup,
  MarkerClusterGroup,
} from 'leaflet';
import { HttpService } from 'src/app/services/http.service';
import { PubSub } from 'aws-amplify';
import { MatDialog } from '@angular/material/dialog';
import { TilesComponent } from '../../dialogs/tiles/tiles.component';
import { APIService } from '../../API.service';
import { interval, Subject, Subscriber, Subscription } from 'rxjs';
import { timer } from 'rxjs';
import { HttpclientService } from 'src/app/services/httpclient.service';
import { WebsocketService } from '../../services/websocket.service';

declare let L: any;
@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css'],
})
export class MapPageComponent implements OnInit {
  @Output() activate = new EventEmitter();
  @Output() maps = new EventEmitter();
  public map!: Map;
  private zoom!: number;
  private latlng!: any;
  sulesund: any;
  destroyed$ = new Subject();
  coord = '';
  livedata = [];
  subscription: any;
  connected: any;
  ferrydocks: any;
  ferry: any;
  ferryDocks: any[] = [];
  ferrys: any[] = [
    { mmsi: 257054910},
    { mmsi: 257054390},
    { mmsi: 257054950},
    { mmsi: 257090550},
    { mmsi: 257090560},
    { mmsi: 257020700},
    { mmsi: 257062260},
    { mmsi: 257062510},
    { mmsi: 258932000},
    { mmsi: 258007730},
    { mmsi: 258841000},
    { mmsi: 258004980},
    { mmsi: 258329500},
    { mmsi: 258327500},
    { mmsi: 258330500},
    { mmsi: 257022800},
    { mmsi: 258220500},
  ];
  mmsi: any[] = [
    257054910, 257054390, 257054950, 257090550, 257090560, 257020700, 257062260,
    257062510, 258932000, 258007730, 258841000, 258004980, 258329500, 258327500,258330500,257022800,258220500
  ];
  subscription2!: Subscription;
  private subscriptions = new Subscription();

  boatSubscrition = new Subscription();
  subscriptions1: Subscription[] = [];
  markerClusterGroup!: MarkerClusterGroup;

  constructor(
    public dialog: MatDialog,
    private http: HttpService,
    private api: APIService,
    private httpclient: HttpclientService,
    private socket: WebsocketService,
    private ElByClassName: ElementRef
  ) // private _formBuilder: FormBuilder,
  {
    this.createBoat();
  }

  ngOnDestroy(): void {
    this.subscriptions1.forEach((subscription) => subscription.unsubscribe());
    this.subscriptions.unsubscribe();

    this.boatSubscrition.unsubscribe();

    console.log('map destroyed');
  }

  ngAfterViewInit() {
    console.log('map viewinit');
  }

  ngOnInit(): void {
    console.log('map init');

    this.markerClusterGroup = markerClusterGroup({
      removeOutsideVisibleBounds: true,
    });

    this.api.ListDocks().then((data: any) => {
      this.ferrydocks = data.items;
    });
  }

  onFerryLocation(ais: any) {
    console.log(ais);
    this.ferrys.forEach((ferry) => {
      if (ferry.mmsi == ais.mmsi) {
        //console.log(location)

        if (ferry.layer) {
          this.map.removeLayer(ferry.layer);
        }

        ferry.layer = L.boatMarker([ais.latitude, ais.longitude], {
          class: 'boats',
          color: 'red',
          fillColor: 'blue',
          stroke: true,
          idleCircle: true,
        });

        ferry.layer.setHeading(ais.trueHeading);
        ferry.layer.setSpeed(ais.speedOverGround);

        ferry.layer.bindTooltip(ais.name);

        ferry.layer.addTo(this.map);
      }
    });
  }

  recieveCluster(markerCluster: MarkerClusterGroup) {
    this.markerClusterGroup = markerCluster;
  }

  drawFerrys() {
    this.socket.getFerry(this.mmsi);

    this.boatSubscrition = this.socket.getEvent().subscribe(
      (event) => {
        this.onFerryLocation(event);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  receiveMap(map: Map) {
    console.log(map);
    this.map = map;
    this.activate.emit({ theMap: this.map });

    this.drawFerrys();

    // you can set .my-div-icon styles in CSS

    this.api.ListDocks().then((data: any) => {
      this.ferrydocks = data.items;

      for (let i in this.ferrydocks) {
        let ferry = circle(this.ferrydocks[i].location, {
          radius: 800,
          color: 'yellow',
          className: 'pulse',
        }).bindTooltip(this.ferrydocks[i].name, { offset: [0, 0] });

        ferry.addTo(this.map);

        ferry.on('click', (e: any) => {
          this.activate.emit({
            name: this.ferrydocks[i].name,
            location: this.ferrydocks[i].location,
            theMap: this.map,
          });
        });

        this.ferryDocks.push(ferry);

        const source = timer(5000);

        const sub = source.subscribe((val) => {
          this.ferryDocks[parseInt(i)].setStyle({ color: 'grey' });
          this.ferryDocks[parseInt(i)].bindTooltip(
            `${this.ferrydocks[i].name} is offline`
          );
          this.ferryDocks[parseInt(i)].off('click');
          this.ferryDocks[parseInt(i)].getElement()?.classList.remove('pulse');
        });

        let subscription = PubSub.subscribe(
          `fergekai/${this.ferrydocks[i].id}`,
          {}
        ).subscribe({
          next: (data) => {
            sub.unsubscribe();
            let res = data.value[this.ferrydocks[i].id];
            let dataName = Object.keys(res)[0];

            if ((dataName = 'alarms')) {
              let temp = false;
              for (let i in res.alarms) {
                let status = res.alarms[i].value.toLowerCase() === 'true';

                if (status) {
                  temp = true;
                }
              }

              if (temp) {
                ferry.getElement()?.classList.add('pulse');
                ferry.setStyle({ color: 'red', className: '' });
              } else {
                ferry.getElement()?.classList.remove('pulse');
                ferry.setStyle({ color: 'green' });
              }
            }
          },
          error: (error) => {
            console.log(error);
            this.ferryDocks[parseInt(i)].setStyle({ color: 'grey' });
            this.ferryDocks[parseInt(i)].bindTooltip(
              `${this.ferrydocks[i].name} is offline`
            );
            this.ferryDocks[parseInt(i)].off('click');
            this.ferryDocks[parseInt(i)]
              .getElement()
              ?.classList.remove('pulse');
          },
        });

        this.subscriptions.add(subscription);
      }
    });
  }

  closeDialog() {
    this.dialog.closeAll;
  }

  openStatusDialog() {
    const dialogRef = this.dialog.open(TilesComponent, {
      height: '80vh',
      width: '80vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });

    // dialogRef.backdropClick().subscribe((data)=>{

    //   this.dialog.closeAll()

    // })

    // dialogRef.afterClosed().subscribe((result: any) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  test(e: any) {
    console.log(e);

    this.openStatusDialog();
  }

  updateData(data: any) {
    console.log(data);

    this.sulesund.bindPopup(
      `` +
        `<h1>Kai: Sulesund Ferjekai </h1>` +
        `<h2>AlarmStatus: God </h2>` +
        `<h2>connected : ${data.eventType}</h2>`
    );
  }

  getColor() {
    let colors = ['red', 'blue', 'yellow', 'green', 'black', 'purple', 'brown'];

    return colors;
  }

  addToMap(lists: Array<any>, names: Array<any>) {
    for (let i = 0; i < lists.length; i++) {
      let colors = this.getColor();
      var color: string = colors[Math.floor(Math.random() * colors.length)];

      let latlngs = lists[i];
      let line = polyline(latlngs, { color: color }).addTo(this.map);
      line.bindTooltip(names[i]).openTooltip();
      this.map.fitBounds(line.getBounds());
    }
  }

  convertcsv() {}

  receiveZoom(zoom: number) {
    this.zoom = zoom;
  }
  createBoat() {
    /* BOAT ICON */
    L.BoatIcon = L.Icon.extend({
      img: new Image(),

      // OPTIONS
      options: {
        iconSize: new L.Point(20, 20),
        className: 'leaflet-boat-icon',
        course: 0,
        speed: 0,
        color: '#8ED6FF',
        labelAnchor: [23, 0],
        wind: false,
        windDirection: 0,
        windSpeed: 0,
        idleCircle: false,
        x_fac: 0.1,
        y_fac: 0.1,
      },

      // PROPERTIES
      x: 66,
      y: 85,

      ctx: null,
      lastHeading: 0,
      lastWindDirection: 0,

      // CREATE ICON
      // setup the icon and start drawing
      createIcon: function () {
        var e = document.createElement('canvas');
        this._setIconStyles(e, 'icon');
        var s = this.options.iconSize;

        e.width = s.x;
        e.height = s.y;
        this.lastHeading = 0; // reset in case the marker is removed and added again

        this.ctx = e.getContext('2d');
        this.draw(this.ctx, s.x, s.y);

        return e;
      },

      // DRAW
      // renders the boat icon onto the canvas element
      draw: function (ctx: any, w: any, h: any) {
        if (!ctx) return;
        var x = this.x;
        var y = this.y;

        var x_fac = this.options.x_fac;
        var y_fac = this.options.y_fac;

        ctx.clearRect(0, 0, w, h);

        ctx.translate(w / 2, h / 2);
        ctx.rotate((this.options.course * Math.PI) / 180);
        ctx.translate(-w / 2, -h / 2);

        //ctx.fillRect(0,0,w,h);

        ctx.beginPath();

        // draw idle boat shape
        if (this.options.idleCircle === true && this.options.speed === 0) {
          ctx.arc(10, 10, 5, 0, 2 * Math.PI);
        }
        // draw boat shape in motion
        else {
          // ctx.moveTo(x, y);
          // ctx.bezierCurveTo(x, y+(80*y_fac), x+(100*x_fac), y+(80*y_fac), x+(100*x_fac), y);
          // ctx.quadraticCurveTo(x+(100*x_fac), y-(100*y_fac), x+(50*x_fac), y-(200*y_fac));
          // ctx.quadraticCurveTo(x, y-(100*y_fac), x, y);

          var img = new Image();
          img.onload = function () {
            ctx.drawImage(img, 0, 0);
          };
          img.src = 'assets/boat.svg';
        }

        ctx.fillStyle = this.options.color;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // draw wind
        if (this.options.wind == true) {
          ctx.translate(w / 2, h / 2);
          ctx.rotate((this.options.windDirection * Math.PI) / 180);
          ctx.translate(-w / 2, -h / 2);

          ctx.beginPath();
          ctx.moveTo(w / 2, y - 45);
          ctx.lineTo(w / 2, y - 70);

          var center = w / 2;

          var spd = 5 * Math.round(this.options.windSpeed / 5);
          var tenLines = Math.floor(spd / 10);
          var fiveLine = spd % 10 > 0;

          var carriage = 70;
          for (var i = 0; i < tenLines; i++) {
            ctx.moveTo(center, y - carriage);
            ctx.lineTo(center + 8, y - carriage - 8);
            carriage -= 5;
          }

          if (fiveLine) {
            if (tenLines == 0) carriage -= 5;
            ctx.moveTo(center, y - carriage);
            ctx.lineTo(center + 5, y - carriage - 5);
          }

          ctx.stroke();
        }
      },

      setHeadingWind: function (
        heading: any,
        windSpeed: any,
        windDirection: any
      ) {
        this.options.wind = true;

        this.options.course = (heading % 360) - this.lastHeading;
        this.lastHeading = heading % 360;

        this.options.windDirection = (windDirection % 360) - (heading % 360);
        this.lastHeading += this.options.windDirection;

        this.options.windSpeed = windSpeed;

        var s = this.options.iconSize;
        this.draw(this.ctx, s.x, s.y);
      },

      // SET HEADING
      // sets the boat heading and
      // update the boat icon accordingly
      setHeading: function (heading: any) {
        this.options.course = (heading % 360) - this.lastHeading;
        this.lastHeading = heading % 360;

        var s = this.options.iconSize;
        this.draw(this.ctx, s.x, s.y);
      },

      // SET SPEED
      // sets the boat speed value and
      // update the boat icon accordingly
      setSpeed: function (speed: any) {
        this.options.speed = speed;

        var s = this.options.iconSize;
        this.draw(this.ctx, s.x, s.y);
      },
    });

    L.BoatMarker = L.Marker.extend({
      setHeadingWind: function (
        heading: any,
        windSpeed: any,
        windDirection: any
      ) {
        this.options.icon.setHeadingWind(heading, windSpeed, windDirection);
      },

      setHeading: function (heading: any) {
        this.options.icon.setHeading(heading);
      },

      setSpeed: function (speed: any) {
        this.options.icon.setSpeed(speed);
      },
    });

    L.boatMarker = function (pos: any, options: any) {
      var c = 'color' in options ? options.color : '#f1c40f';
      var i = 'idleCircle' in options ? options.idleCircle : false;
      options.icon = new L.BoatIcon({ color: c, idleCircle: i });

      return new L.BoatMarker(pos, options);
    };
  }
}
