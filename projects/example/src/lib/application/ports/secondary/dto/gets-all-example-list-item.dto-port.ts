import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ExampleListItemDTO } from './example-list-item.dto';

// This was generated perfectly, no manual adjustments needed
export const GETS_ALL_EXAMPLE_LIST_ITEM_DTO = new InjectionToken<GetsAllExampleListItemDtoPort>('GETS_ALL_EXAMPLE_LIST_ITEM_DTO');

export interface GetsAllExampleListItemDtoPort {
  getAll(): Observable<ExampleListItemDTO[]>;
}
