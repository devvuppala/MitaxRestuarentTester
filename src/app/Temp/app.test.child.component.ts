import { Component, Input, Output, EventEmitter, DoCheck, OnInit, OnDestroy, OnChanges, SimpleChanges, ChangeDetectionStrategy, SimpleChange } from '@angular/core';
import { Student } from './app.test.model';

@Component({
  selector: 'temp-child',
  template:` 
    <!--<h3 class="nameStyle">Version {{major}}.{{_minor}}</h3>
    <h3>Change log:</h3>
    <ul>
        <li *ngFor="let change of changeLog">{{change}}</li>
    </ul>

    <button></button>-->

    <p>{{message}}</p>
  ` ,
  styles: [`.nameStyle {
                    color: red;
             }

    
    `]
})

//implements OnChanges, OnInit , OnDestroy , DoCheck
export class TempChildComponent implements OnChanges {
    @Input() major: number;

    private _minor: number;

    @Input()
    set  minor(minor: number) {
        this._minor = minor + 1;
    }

    get minot() {
        return this._minor;
    }

    changeLog: string[] = [];
   
    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
      let log: string[] = [];
      for (let propName in changes) {
        let changedProp = changes[propName];
        let to = JSON.stringify(changedProp.currentValue);
        if (changedProp.isFirstChange()) {
          log.push(`Initial value of ${propName} set to ${to}`);
        } else {
          let from = JSON.stringify(changedProp.previousValue);
          log.push(`${propName} changed from ${from} to ${to}`);
        }
      }
      this.changeLog.push(log.join(', '));
    }


    intervalId = 0;
    message = '';
    seconds = 11;
   
    clearTimer() { clearInterval(this.intervalId); }
   
    ngOnInit()    { this.start(); }
    ngOnDestroy() { this.clearTimer(); }
   
    start() { this.countDown(); }
    stop()  {
      this.clearTimer();
      this.message = `Holding at T-${this.seconds} seconds`;
    }
   
    private countDown() {
      this.clearTimer();
      this.intervalId = window.setInterval(() => {
        this.seconds -= 1;
        if (this.seconds === 0) {
          this.message = 'Blast off!';
        } else {
          if (this.seconds < 0) { this.seconds = 10; } // reset
          this.message = `T-${this.seconds} seconds and counting`;
        }
      }, 1000);
    }
    
}
