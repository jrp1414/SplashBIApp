import { HttpErrorResponse } from "@angular/common/http";
import { of, throwError } from "rxjs";
import { FilterPipe } from "sblib";
import { Product } from "src/app/products/services/product.model";

const testProducts: Product[] = [
    {
        "id": 1,
        "title": "Brown eggs",
        "type": "dairy",
        "description": "Raw organic brown eggs in a basket",
        "availibility": false,
        "safeFor": 1,
        "qualityScore": 1,
        "tags": [],
        "Addresses": [
            {
                "AddLine1": "",
                "AddLine2": "",
                "AddLine3": "",
                "City": "",
                "State": ""
            }
        ],
        "price": 28.1,
        "rating": 4,
        "imageurls": ["https://previews.123rf.com/images/bhofack2/bhofack21502/bhofack2150200615/37073865-raw-organic-brown-eggs-in-a-basket.jpg"]
    },
    {
        "id": 2,
        "title": "Sample Prod 2",
        "type": "dairy",
        "description": "Raw organic brown eggs in a basket",
        "availibility": false,
        "safeFor": 1,
        "qualityScore": 1,
        "tags": [],
        "Addresses": [
            {
                "AddLine1": "",
                "AddLine2": "",
                "AddLine3": "",
                "City": "",
                "State": ""
            }
        ],
        "price": 28.1,
        "rating": 4,
        "imageurls": ["https://previews.123rf.com/images/bhofack2/bhofack21502/bhofack2150200615/37073865-raw-organic-brown-eggs-in-a-basket.jpg"]
    }
];
let filterPipe: FilterPipe;
describe("Filter Pipe Test", () => {

    beforeEach(() => {
        filterPipe = new FilterPipe();
    });

    it("Should return 1 expected Product", () => {
        expect(filterPipe.transform(testProducts, 'brow', 'title').length).toEqual(1);
        
    });

    it("Should return 2 of the filtered product id", () => {
        expect((filterPipe.transform(testProducts, 'samp', 'title') as Product[])[0].id).toEqual(2);
    });
    


});