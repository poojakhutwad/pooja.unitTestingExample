import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMethodComponent } from './test-method.component';

describe('TestMethodComponent', () => {
  let component: TestMethodComponent;
  let fixture: ComponentFixture<TestMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return capital letters count', () =>{
    let obj = new TestMethodComponent();
    obj.CountCapital('PooJa')
    expect(obj.count).toBe(2);
  });

  it('shold check the password', ()=>{
    let obj = new TestMethodComponent();
    obj.CheckPassword('poojaKHUtwad@1234');
    expect(obj.flag).toBe(1);
  });

  it('should check the array addition.', () =>{
    let obj = new TestMethodComponent();
    obj.ArrayAddition([10, 10, 10]);
    expect(obj.sum).toBe(30);
  })
});
