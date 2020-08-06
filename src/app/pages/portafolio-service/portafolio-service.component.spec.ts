import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioServiceComponent } from './portafolio-service.component';

describe('PortafolioServiceComponent', () => {
  let component: PortafolioServiceComponent;
  let fixture: ComponentFixture<PortafolioServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafolioServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
