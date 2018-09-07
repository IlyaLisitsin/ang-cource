import {Directive, ElementRef, Input, OnInit} from '@angular/core';

const oneDay = 24 * 60 * 60 * 1000

@Directive({
  selector: '[appCourceBorder]'
})

export class CourceBorderDirective implements OnInit {
  @Input() creationDate: any
  currentDate: any = new Date()

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.creationDate < this.currentDate
      &&  this.countDays(this.creationDate, this.currentDate) <= 15) {
      this.el.nativeElement.style.backgroundColor = 'green'
    } else if (this.creationDate.getTime() > this.currentDate.getTime()) {
      this.el.nativeElement.style.backgroundColor = 'blue'
    }
  }

  private countDays(firstDate, secondDate) {
    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)))
  }
}
