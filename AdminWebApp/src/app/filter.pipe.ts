import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], keywordSearchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!keywordSearchText) {
      return items;
    }
    keywordSearchText = keywordSearchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(keywordSearchText);
    });
  }
}
