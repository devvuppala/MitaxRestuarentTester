import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterComponent } from './tester.component';
import { TesterServiceService } from './tester-service.service';

describe('TesterComponent', () => {
  let component: TesterComponent;
  let fixture: ComponentFixture<TesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterComponent);// Create a component from TestBed
    component = fixture.componentInstance;// Get the component instance
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should create a h1 tag with Books', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toEqual('Books')
  });

  it('Books lenght from service same as books lenght in component', () => {
    let testerService = fixture.debugElement.injector.get(TesterServiceService)
    expect(testerService.getBooks().length).toEqual(component.books.length)
  });

  it('Books lenght should be displayed', () => {
    component.booksfound = true;
    let testerService = fixture.debugElement.injector.get(TesterServiceService)
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toEqual('' + testerService.getBooks().length)
  });

  it('Books lenght should not be displayed', () => {
    component.booksfound = false;
    let testerService = fixture.debugElement.injector.get(TesterServiceService)
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toEqual('Books not found')
    expect(compiled.querySelector('h3').textContent).not.toEqual('' + testerService.getBooks().length)
  });

  //Asynchronous Service tester

  it('Should return data async patter', async(() => {
    let testerService = fixture.debugElement.injector.get(TesterServiceService);
    let spy = spyOn(testerService, 'getDataAsynchr')
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.asyncData).toEqual('Returned Data')
    })
  }));
});
