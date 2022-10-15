import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgvNotificationComponent } from './ngv-notification.component';

describe('NgvNotificationComponent', () => {
  let component: NgvNotificationComponent;
  let fixture: ComponentFixture<NgvNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgvNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgvNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
