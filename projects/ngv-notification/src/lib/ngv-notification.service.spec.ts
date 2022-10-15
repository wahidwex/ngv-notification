import { TestBed } from '@angular/core/testing';

import { NgvNotificationService } from './ngv-notification.service';

describe('NgvNotificationService', () => {
  let service: NgvNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgvNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
