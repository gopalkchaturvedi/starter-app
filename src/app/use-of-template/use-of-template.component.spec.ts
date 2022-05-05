import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseOfTemplateComponent } from './use-of-template.component';

describe('UseOfTemplateComponent', () => {
  let component: UseOfTemplateComponent;
  let fixture: ComponentFixture<UseOfTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseOfTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseOfTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
