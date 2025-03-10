import { Injectable } from "@angular/core";
import { PenDto } from "../api/models";
import { latLng, LatLngExpression, Polygon, polygon, tileLayer } from "leaflet";

@Injectable({
    providedIn: 'root'
})
export class MapService {

    public CreateAllPenMapInfos(pens: PenDto[]): MapInfo{
        

        let MapInfo: MapInfo = {
            MapOptions: {
                layers: [
                tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
                ],
                zoom: 16,
                center: latLng(50.491320, 4.971440),
            },
            MapLayers: 
            [
                // polygon([[ 50.467388, 4.871985 ], [ 50.467334, 4.871934 ], [ 50.467398, 4.871967 ]]),
                ...this.GeneratePenPolygons(pens)
            ]
        }
        return MapInfo;
    }

    private GeneratePenPolygons(pens : PenDto[]): Polygon<any>[]{
        return pens.map(p => this.GeneratePenPolygon(p))
    }
    
    private GeneratePenPolygon(pen : PenDto): Polygon<any>{
        if (pen.coordinates == null){
            return polygon([]);
        }
        let coordinates = this.parseCoordinates(pen.coordinates) as LatLngExpression[];
        return polygon(coordinates);
    }

    private parseCoordinates(input: string): number[][] {
        return input.match(/\[.*?\]/g)?.map(pair => 
            pair.slice(1, -1).split(',').map(Number)
        ) || [];
    }
    
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

export interface MapInfo{
    MapOptions: any; 
    MapLayers: any;
}

export interface PenPolygon{
    poly: Polygon<any>,
}

export interface PenMapInfo{
    Pen: PenDto
    MapOptions: any; 
    MapLayers: any;
}