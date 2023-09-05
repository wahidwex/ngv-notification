import { ComponentFactory, ComponentFactoryResolver, inject, Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { NgvNotificationModel } from '../models';
import { NGV_NOTIFICATION_TOKEN } from '../classes';
import { NgvNotificationComponent } from '../components/ngv-notification/ngv-notification.component';
import { NGV_NOTIFICATION_CLOSE_TOKEN } from '../classes';

@Injectable({
  providedIn: 'root'
})

export class NgvNotification {
  showMessageHandler: Subject<NgvNotificationModel> = new Subject<NgvNotificationModel>();

  componentFactoryResolver = inject(ComponentFactoryResolver);
  injector = inject(Injector);
  rootPortalElement: Element;
  factory: ComponentFactory<NgvNotificationComponent>;
  closeBridge$: Subject<void> = inject(NGV_NOTIFICATION_CLOSE_TOKEN);
  notificationBridge$: Subject<NgvNotificationModel> = inject(NGV_NOTIFICATION_TOKEN);

  constructor() {
    this.closeBridge$.subscribe(() => {
      this.close();
    });
  }

  showMessage(body: any | NgvNotificationModel): this {
    this.init();
    if (body instanceof Object) {

      const newBody = {
        hasClose: body.hasClose || false,
        description: body.description || '',
        duration: body.duration || 5000,
        align: body.align || 'center',
      } as NgvNotificationModel;
      this.notificationBridge$.next(newBody);
    } else if (typeof body === 'string') {
      const newBody = {
        description: body,
        hasClose: false,
        duration: 5000,
        align: 'center'
      } as NgvNotificationModel;
      this.notificationBridge$.next(newBody);
    }
    return this;
  }

  close(): void {
    // remove factory holder and dummy element
    this.rootPortalElement?.remove();
    this.factory = null;
  }

  init(): void {
    this.close();
    // make a dummy element.
    this.rootPortalElement = document.createElement('ngv-notification-container');
    // push dummy to body.
    document.body.appendChild(this.rootPortalElement);
    // create component that we want to inject it into the dummy then inject.
    this.factory = this.componentFactoryResolver.resolveComponentFactory(NgvNotificationComponent);
    this.factory.create(this.injector, [], this.rootPortalElement);
  }
}
