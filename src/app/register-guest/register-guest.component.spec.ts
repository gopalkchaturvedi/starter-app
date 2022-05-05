import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGuestComponent } from './register-guest.component';

describe('RegisterGuestComponent', () => {
  let component: RegisterGuestComponent;
  let fixture: ComponentFixture<RegisterGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
