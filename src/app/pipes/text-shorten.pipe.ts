import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textShorten',
})
export class TextShortenPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    return value.length < limit ? value : value.slice(0, limit) + '...';
  }
}
