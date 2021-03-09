import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "shorten"
})
export class ShortenPipe implements PipeTransform {
    transform(value: string) {
        return value?value.substr(0, 25) + "...":"";
    }
}