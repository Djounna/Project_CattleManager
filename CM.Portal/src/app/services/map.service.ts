import { Injectable } from "@angular/core";
import { PenDto } from "../api/models";
import L, { FeatureGroup, latLng, LatLngExpression, Polygon, polygon, tileLayer } from "leaflet";

@Injectable({
    providedIn: 'root'
})
export class MapService {

    public CreateAllPenMapInfos(pens: PenDto[]): MapInfo{
        // let penMapLayers = pens.map(p => this.CreatePenMapLayer(p));
        let penMapLayers: FeatureGroup = L.featureGroup();
        this.CreatePenMapLayers(penMapLayers, pens);
        let MapInfo: MapInfo = {
            MapOptions: {
                layers: [
                    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
                    penMapLayers
                ],
                zoom: 16,
                center: latLng(50.491320, 4.971440),
            },
            PenMapLayers: penMapLayers
        }
        return MapInfo;
    }

    public CreatePenMapLayers(featureGroup: FeatureGroup, pens: PenDto[]): void{
        pens.forEach(p => {
            let poly = this.GeneratePenPolygon(p);
            featureGroup.addLayer(poly);
        });
    }

    public CreatePenMapLayersWithFocus(featureGroup: FeatureGroup, pens: PenDto[], pen: PenDto): void{
        pens.forEach(p => {
            let poly: Polygon;
            if(p.id === pen.id){
                poly = this.GeneratePenPolygonWithFocus(p);
            }
            else{
                poly = this.GeneratePenPolygon(p);
            }
            featureGroup.addLayer(poly);
        });
    }

    public CreatePenMapLayer(pen: PenDto): PenMapLayer{
        let penMapLayer: PenMapLayer =  {
            pen : pen,
            poly : this.GeneratePenPolygon(pen)
        }

        return penMapLayer;
    }

    public GeneratePenPolygon(pen : PenDto): Polygon<any>{
        if (pen.coordinates == null){
            return polygon([]);
        }
        let coordinates = this.parseCoordinates(pen.coordinates) as LatLngExpression[];
        return polygon(coordinates);
    }

    public GeneratePenPolygonWithFocus(pen : PenDto): Polygon<any>{
        if (pen.coordinates == null){
            return polygon([]);
        }
        let coordinates = this.parseCoordinates(pen.coordinates) as LatLngExpression[];
        return polygon(coordinates, {color: 'green', fill:true, fillColor: 'green'});
    }

    private parseCoordinates(input: string): number[][] {
        return input.match(/\[.*?\]/g)?.map(pair => 
            pair.slice(1, -1).split(',').map(Number)
        ) || [];
    }
    
    private GeneratePenPolygons(pens : PenDto[]): Polygon<any>[]{
        return pens.map(p => this.GeneratePenPolygon(p))
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
    PenMapLayers: FeatureGroup;
    // PenMapLayers: PenMapLayer[];
}

export interface PenMapLayer{
    pen: PenDto,
    poly: Polygon<any>,
}

export interface PenMapInfo{
    Pen: PenDto
    MapOptions: any; 
    MapLayers: any;
}