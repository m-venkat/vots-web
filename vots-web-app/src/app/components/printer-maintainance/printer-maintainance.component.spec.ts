import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterMaintainanceComponent } from './printer-maintainance.component';

describe('PrinterMaintainanceComponent', () => {
  let component: PrinterMaintainanceComponent;
  let fixture: ComponentFixture<PrinterMaintainanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterMaintainanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterMaintainanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
