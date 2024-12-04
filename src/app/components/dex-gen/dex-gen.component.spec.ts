import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexGenComponent } from './dex-gen.component';

describe('DexGenComponent', () => {
  let component: DexGenComponent;
  let fixture: ComponentFixture<DexGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DexGenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DexGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
