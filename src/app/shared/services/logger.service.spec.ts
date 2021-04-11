import { LoggerService } from "./logger.service";

describe("Logger Service Test",()=>{
    let logger:LoggerService = new LoggerService();
    it("Log method should return undefined",()=>{
        expect(logger.log("Sample Log")).toBeUndefined();
    });
});