import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, HostListener, ViewContainerRef } from '@angular/core';
import { ResizableDraggableComponent } from '../resizable-draggable/resizable-draggable.component';

const enum Status {
  OFF = 0,
  RESIZE = 1,
  MOVE = 2,

}
@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.css']
})
export class AddBoardComponent implements OnInit {
  heading = '300';
  test = '200';
  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef | any;
  private _counter = 1;
  @Input('width') public width: any;
  @Input('height') public height: any;
  @Input('left') public left: any;
  @Input('top') public top: any;
  @ViewChild("box") public box: ElementRef | any;

  private boxPosition: { left: number; top: number; } | any;
  private containerPos: { left: number, top: number, right: number, bottom: number } | any;
  public mouse: { x: number, y: number } | any
  public status: Status = Status.OFF;

  private mouseClick: { x: number, y: number, left: number, top: number } | any
  // see: any;


  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.loadBox();
    this.loadContainer();
   }

  number(): void {
    // this.container.clear();
    console.log("newt");
    const componentFactory = this.container.createComponent(ResizableDraggableComponent);
    const componentRef = this.container.createComponent(componentFactory);
    this.container.createComponent(componentRef);
    // console.log(newt);
    componentRef.instance.index = this._counter++;
    componentRef.instance.height = "300";
    componentRef.instance.width = "200";
  }

  pie(): void {
    this.container.clear();
    const componentFactory = this.container.createComponent(ResizableDraggableComponent);
    const componentRef = this.container.createComponent(componentFactory);
    this.container.createComponent(componentRef);
    componentRef.instance.index = this._counter++;
  }

  bar() {
    alert('bar')

  }
  line() {
    alert('line')

  }

  private loadBox(): void {
    const { left, top } = this.box.nativeElement.getBoundingClientRect();
    this.boxPosition = { left, top };
  }

  private loadContainer() {
    const left = this.boxPosition.left - this.left;
    const top = this.boxPosition.top - this.top;
    const right = left + 1160;
    const bottom = top + 605;
    this.containerPos = { left, top, right, bottom };
  }

  setStatus(event: MouseEvent, status: number) {
    if (status === 1) event.stopPropagation();
    else if (status === 2) this.mouseClick = { x: event.clientX, y: event.clientY, left: this.left, top: this.top };
    else this.loadBox();
    this.status = status;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouse = { x: event.clientX, y: event.clientY };

    if (this.status === Status.RESIZE) this.resize();
    else if (this.status === Status.MOVE) this.move();
  }

  private resize() {
    if (this.resizeCondMeet()) {
      this.width = Number(this.mouse.x > this.boxPosition.left) ? this.mouse.x - this.boxPosition.left : 0;
      this.height = Number(this.mouse.y > this.boxPosition.top) ? this.mouse.y - this.boxPosition.top : 0;
    }
  }

  private resizeCondMeet() {
    return (this.mouse.x < this.containerPos.right && this.mouse.y < this.containerPos.bottom);
  }

  private move() {
    if (this.moveCondMeet()) {
      this.left = this.mouseClick.left + (this.mouse.x - this.mouseClick.x);
      this.top = this.mouseClick.top + (this.mouse.y - this.mouseClick.y);
    }
  }

  private moveCondMeet() {
    const offsetLeft = this.mouseClick.x - this.boxPosition.left;
    const offsetRight = this.width - offsetLeft;
    const offsetTop = this.mouseClick.y - this.boxPosition.top;
    const offsetBottom = this.height - offsetTop;
    return (
      this.mouse.x > this.containerPos.left + offsetLeft &&
      this.mouse.x < this.containerPos.right - offsetRight &&
      this.mouse.y > this.containerPos.top + offsetTop &&
      this.mouse.y < this.containerPos.bottom - offsetBottom
    );
  }

}
