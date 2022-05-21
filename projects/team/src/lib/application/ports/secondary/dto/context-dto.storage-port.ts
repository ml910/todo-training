import { Observable } from 'rxjs';
import { ContextDTO } from './context.dto';
import { InjectionToken } from '@angular/core';

// Created manually - Lowgular does not have the option to create StoragePorts
export const CONTEXT_DTO_STORAGE = new InjectionToken<ContextDtoStoragePort>(
  'CONTEXT_DTO_STORAGE'
);

export interface ContextDtoStoragePort {
  next(item: Partial<ContextDTO | undefined>): void;
  asObservable(): Observable<ContextDTO>;
}
