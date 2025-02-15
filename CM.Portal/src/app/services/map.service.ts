import { Injectable } from "@angular/core";
import { PenDto } from "../api/models";
import { latLng, polygon, tileLayer } from "leaflet";

@Injectable({
    providedIn: 'root'
})
export class MapService {
    public CreatePenMapInfosList(pens: PenDto[]): PenMapInfo[]{
        let penMapInfosList : PenMapInfo[] = [];

        pens.forEach(pen => {
            let penMapInfos = this.CreatePenMapInfos(pen);
            penMapInfosList.push(penMapInfos);
        });

        return penMapInfosList;
    }
    
    public CreatePenMapInfos(pen: PenDto): PenMapInfo{
        let penMapInfos: PenMapInfo = {
            Pen : pen,
            MapOptions : {
                layers: [
                tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
                ],
                zoom: 5,
                center: latLng(46.879966, -121.726909)
            },
            MapLayers : [
                polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]])
            ]
        } 
        return penMapInfos;
    }
}

export interface PenMapInfo{
    Pen: PenDto
    MapOptions: any; 
    MapLayers: any;
}