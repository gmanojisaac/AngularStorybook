import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorybookdesignComponent } from './storybookdesign.component';

describe('StorybookdesignComponent', () => {
  let component: StorybookdesignComponent;
  let fixture: ComponentFixture<StorybookdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorybookdesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorybookdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
