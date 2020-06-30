import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPaginationComponent } from './ad-pagination.component';

describe('AdPaginationComponent', () => {
  let component: AdPaginationComponent;
  let fixture: ComponentFixture<AdPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
