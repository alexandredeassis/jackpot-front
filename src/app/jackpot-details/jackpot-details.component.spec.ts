import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackpotDetailsComponent } from './jackpot-details.component';

describe('JackpotDetailsComponent', () => {
  let component: JackpotDetailsComponent;
  let fixture: ComponentFixture<JackpotDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JackpotDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JackpotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
