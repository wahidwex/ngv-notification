import { InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';

export const NGV_NOTIFICATION_CLOSE_TOKEN = new InjectionToken<Subject<any>>(null);
