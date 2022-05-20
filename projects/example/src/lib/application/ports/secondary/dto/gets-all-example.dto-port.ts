import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ExampleDTO } from './example.dto';

export const GETS_ALL_EXAMPLE_DTO = new InjectionToken<GetsAllExampleDtoPort>('GETS_ALL_EXAMPLE_DTO');

export interface GetsAllExampleDtoPort {
  getAll(): Observable<ExampleDTO[]>;
}
