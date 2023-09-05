import { InjectionToken } from '@angular/core';
import { NgvNotificationModel } from '../models';
import { Subject } from 'rxjs';

export const NGV_NOTIFICATION_TOKEN = new InjectionToken<Subject<NgvNotificationModel>>(null);
