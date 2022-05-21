import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageDTO } from './message.dto';

export const ADDS_MESSAGE_DTO = new InjectionToken<AddsMessageDtoPort>(
  'ADDS_MESSAGE_DTO'
);

export interface AddsMessageDtoPort {
  add(message: Partial<MessageDTO>): Observable<void>;
}
