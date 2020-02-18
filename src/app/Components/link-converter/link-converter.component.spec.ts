import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkConverterComponent } from './link-converter.component';

describe('LinkConverterComponent', () => {
  let component: LinkConverterComponent;
  let fixture: ComponentFixture<LinkConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
