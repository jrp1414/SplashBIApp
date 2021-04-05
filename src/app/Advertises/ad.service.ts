import { Injectable } from "@angular/core";
import { AdItem } from "./ad-Item";
import { Ad1Component } from "./ad1/ad1.component";
import { Ad2Component } from "./ad2/ad2.component";
import { Ad3Component } from "./ad3/ad3.component";

@Injectable({providedIn:"root"})
export class AdService {

    getAds(): AdItem[] {
        return [
            new AdItem(Ad1Component, { title: "Cricbuzz", details: "Ultimate Cricket scorer, Sample Text" }),
            new AdItem(Ad2Component, { title: "Dream 11", details: "Cricket Predictor" }),
            new AdItem(Ad3Component, { title: "Redmi", details: "Most Selling smart phone brand" }),
        ];
    }
}