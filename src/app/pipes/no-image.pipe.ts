import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(image: any[]): string {
   
    if(!image) {
      return 'src/assets/noImage.png'
    }

    if(image.length > 0) {
      return image[0];
    } else {
      return 'src/assets/img/noImage.png'
    }
  }

}
