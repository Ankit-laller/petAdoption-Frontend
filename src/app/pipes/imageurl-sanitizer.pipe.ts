import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'imageurl'
})
export class ImageurlSanitizerPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){}
  transform(value: any, args?: any): any {
    // debugger
    return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${value}`);
  }

}
