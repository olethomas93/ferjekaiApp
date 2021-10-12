
import { LatLngExpression,Map,marker,polyline,point,circleMarker, popup, featureGroup,LatLng, LatLngBounds, geoJSON, circle, divIcon,DivIcon} from 'leaflet';

export class ferrydock{


    ferryData={}

    location :LatLngExpression
    name:string

    constructor(location:LatLngExpression,name:string,){


       this.location = location;
       this.name = name

    }





    setLocation(location:LatLngExpression){

        this.location = location

        
    }

    getLocation(){

        return this.location
    }

    getName(){

        return this.name
    }

    setName(name:string){

        this.name = name;
    }


}