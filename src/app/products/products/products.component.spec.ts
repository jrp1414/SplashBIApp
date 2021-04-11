import { TestBed } from "@angular/core/testing";
import { Store } from "@ngxs/store";
import { of } from "rxjs";
import { LoggerService } from "src/app/shared/services/logger.service";
import { Product } from "../services/product.model";
import { ProductService } from "../services/product.service";
import { ProductsComponent } from "./products.component";

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

class MockLogger {
    log() {
        return "Logger";
    }
}
class MockProductService {
    getProducts() {
        return of(testProducts);
    }
}
class MockStore {
    log() {
        return "Logger";
    }
}
let comp: ProductsComponent;
let ps: ProductService;
let logger: LoggerService;
let store: Store;

describe("Products Component", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ProductsComponent,
                { provide: LoggerService, useClass: MockLogger },
                { provide: ProductService, useClass: MockProductService },
                { provide: Store, useClass: MockStore },
            ]
        });

        comp = TestBed.inject(ProductsComponent);
        ps = TestBed.inject(ProductService);
        logger = TestBed.inject(LoggerService);
        store = TestBed.inject(Store);
    });

    it("Products Length Should be 2", () => {
        expect(comp.productList.length).toEqual(2);
    });

    it("Product id should be 2", () => {
        comp.ps.getProducts().subscribe(p => {
            expect(p[1].id).toEqual(2); 
        });
    }); 
});