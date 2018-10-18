import { Component, Input, Output, EventEmitter, DoCheck, OnInit, OnDestroy, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Student } from './app.test.model';

@Component({
  selector: 'test-parent',
  template:` 
  
  <!--<h2>Source code version</h2>
  <button (click)="newMinor()">New minor version</button>
  <button (click)="newMajor()">New major version</button>
  <temp-child [major]="major" [minor]="minor"></temp-child>-->

<h3>Countdown to Liftoff (via local variable)</h3>
  <button (click)="timer.start()">Start</button>
  <button (click)="timer.stop()">Stop</button>
  <div class="seconds">{{timer.seconds}}</div>
  <temp-child #timer></temp-child>

  
  ` ,
  styles: [`.nameStyle {
                    color: red;
             }

    
    `]
})

//implements OnChanges, OnInit , OnDestroy , DoCheck
export class TempParentComponent implements OnChanges {

    students: Student[] = [{
        id: 1,
        name:'Steve'
    } , {
        id: 2,
        name:'Mark'
    } , {
        id: 3,
        name:'Larry'
    }]

    ngOnChanges() {

    }

    major = 1;
    minor = 23;
   
    newMinor() {
      this.minor++;
    }
   
    newMajor() {
      this.major++;
      this.minor = 0;
    }
    
}
