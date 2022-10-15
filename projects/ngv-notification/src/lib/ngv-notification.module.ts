import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgvNotificationComponent } from './components/ngv-notification/ngv-notification.component';
import { Subject } from 'rxjs';
import { NGV_NOTIFICATION_CLOSE_TOKEN } from './classes';
import { NGV_NOTIFICATION_TOKEN } from './classes';
import { NgvNotificationModel } from './models';

@NgModule({
  declarations: [NgvNotificationComponent],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: NGV_NOTIFICATION_CLOSE_TOKEN, useFactory: (() => {
        return new Subject<void>();
      })
    },
    {
      provide: NGV_NOTIFICATION_TOKEN, useFactory: (() => {
        return new Subject<NgvNotificationModel>();
      })
    }
  ]
})
export class NgvNotificationModule {
}
