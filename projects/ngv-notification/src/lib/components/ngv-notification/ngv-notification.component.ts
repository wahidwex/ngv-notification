import { Component, inject } from '@angular/core';
import { NgvNotification } from '../../services/';
import { NGV_NOTIFICATION_CLOSE_TOKEN } from '../../classes';
import { NGV_NOTIFICATION_TOKEN } from '../../classes';
import { NgvNotificationModel } from '../../models';

@Component({
  selector: 'ngv-notification',
  templateUrl: './ngv-notification.component.html',
  styleUrls: ['./ngv-notification.component.scss']
})
export class NgvNotificationComponent {
  message = inject(NgvNotification);
  notificationHolder: NgvNotificationModel = {};
  notificationBridge$ = inject(NGV_NOTIFICATION_TOKEN);
  closeBridge$ = inject(NGV_NOTIFICATION_CLOSE_TOKEN);

  constructor() {
    this.notificationBridge$.subscribe(notification => {
      this.notificationHolder = notification;
      this.setNotificationConfig(notification);
      this.setCloseTimer(notification);
    });
  }

  close(): void {
    this.closeBridge$.next(null);
  }

  setNotificationConfig(notification): void {
    const description = document.getElementById('description');
    description.innerText = notification.description;
    description.style.textAlign = notification.align;
    notification.hasClose && document.getElementById('close').classList.add('show');
  }

  setCloseTimer(notification): void {
    setTimeout(() => {
      this.close();
    }, notification.duration);
  }
}
