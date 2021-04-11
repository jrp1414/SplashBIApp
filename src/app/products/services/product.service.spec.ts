import { HttpErrorResponse } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { of, throwError } from "rxjs";
import { LoggerService } from "src/app/shared/services/logger.service";
import { Product } from "./product.model";
import { ProductService } from "./product.service";

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
let httpClientSpy: { get: jasmine.Spy };
let ps: ProductService;
let logger: LoggerService;
describe("Product Service Test", () => {

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
        TestBed.configureTestingModule({ providers: [LoggerService] });
        logger = TestBed.inject(LoggerService);
        ps = new ProductService(logger, httpClientSpy as any);
    });

    it("Should return 2 expected Products", () => {
        let expectedProducts = testProducts;
        httpClientSpy.get.and.returnValue(of(expectedProducts));
        ps.getProducts().subscribe((products: Product[]) => {
            expect(products.length).toEqual(2);
        });
    });

    it("Should return an Error when the server returns 404", () => {
        let errorResponse = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404,
            statusText: "Not Found"
        });
        httpClientSpy.get.and.returnValue(throwError(errorResponse));
        // httpClientSpy.get.and.returnValue(of(testProducts));
        ps.getProducts().subscribe((products: Product[]) => {
            fail('expected an error, not products');
        }, (error) => {
            expect(error.error).toContain('test 404 error'); 
        });
    });

});