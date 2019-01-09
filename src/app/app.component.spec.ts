import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing'
describe('AppComponent', () => {''
  beforeEach(async(() => {
    //TestBed is angular main testing untility Object, allows us to configure the module for testing
    TestBed.configureTestingModule({ 
      declarations: [
        AppComponent // Component that needs to be tested --> Testing unti karma is used to test
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  //Each block is a saperate unit test and executes independelty
  it('should create the app', async(() => { // Checks if the app is created
    const fixture = TestBed.createComponent(AppComponent); // get the component
    const app = fixture.debugElement.componentInstance; // get the debug element
    expect(app).toBeTruthy();// Ends with expect , it and expect are testinf related package
  }));


  it(`should have as title 'mintaxTester'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('mintaxTester');
  }));


  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Invoke change detetction again, so that template gets rendered
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to mintaxTester!');
  }));

});
