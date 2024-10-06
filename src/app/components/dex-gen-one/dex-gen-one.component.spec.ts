import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexGenOneComponent } from './dex-gen-one.component';

describe('DexGenOneComponent', () => {
  let component: DexGenOneComponent;
  let fixture: ComponentFixture<DexGenOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DexGenOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DexGenOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
