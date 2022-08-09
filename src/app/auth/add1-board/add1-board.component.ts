import {  EventEmitter, OnInit, Output } from '@angular/core';
import { Component, VERSION, ViewChildren, ElementRef, QueryList, NgZone } from '@angular/core';
import { Control, IControl } from './control.model';
import { CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-add1-board',
  templateUrl: './add1-board.component.html',
  styleUrls: ['./add1-board.component.css']
})
export class Add1BoardComponent  {
  @Output() cloased = new EventEmitter<any>();
  selectedControl?: Control;
  controls: Control[];
  status: any;
  // newt:any;
  lockAxis?: any = 'x|y'
  @ViewChildren('resizeBox') resizeBox?: QueryList<ElementRef>;
  @ViewChildren('dragHandleRB') dragHandleRB?: QueryList<ElementRef>;
  @ViewChildren('dragHandleRight') dragHandleRight?:  QueryList<ElementRef>;
  @ViewChildren('dragHandleBottom') dragHandleBottom?:  QueryList<ElementRef>;
  clickCount: number = 0;
  ncount:number = Math.random() * 1;
  transletAxisX: any;
  transletAxisY: any;
  width: any;
  height: any;
  index:any;
  x:any;
  y:any;
  public now: Date = new Date();
  opened: boolean | any;
  id:any;
  constructor(
    private ngZone: NgZone


  ){
    this.controls = [] ;
  }
  // close(id:any){
  //   // alert(id);
  //   // id == this.index;
  //   // alert(this.index);
  //   // alert(id);
  //   this.cloased.emit({
  //     id:id,
  //   })
  // }
  clickOutside() {

    this.opened = !this.opened;
    console.log("clicked outside");
    console.log(this.now);

  }


  addControl() : void {
     ++this.clickCount;

    localStorage.setItem('clickCount', JSON.stringify(this.clickCount));
    const templateControl = new Control();
     templateControl.width = 200;
     templateControl.height = 200;
     templateControl.index = this.controls === undefined ? 0 : this.controls.length;

    this.controls.push(templateControl);
    this.selectedControl = templateControl;

    this.setCreateHandleTransform();

  }

  removeControl() : void {
   const templateControl = new Control();
    templateControl.width = 200;
    templateControl.height = 200;
    templateControl.index = this.controls === undefined ? 0 : this.controls.length;
  //  let index = templateControl.index;
  this.controls.pop();
  // console.log(templateControl.index);



 }



  setCreateHandleTransform(): void {
    let rect: any = null;
    this.resizeBox!.changes.subscribe(() => {
      rect = this.resizeBox!.filter((element, index) => index === this.selectedControl!.index!)[0].nativeElement.getBoundingClientRect();

      this.dragHandleRB!.changes.subscribe(() => {
        this.setHandleTransform(this.dragHandleRB!.filter((element, index) => index === this.selectedControl!.index!)[0].nativeElement, rect, 'both');
      });

      this.dragHandleBottom!.changes.subscribe(() => {
        this.setHandleTransform(this.dragHandleBottom!.filter((element, index) => index === this.selectedControl!.index!)[0].nativeElement, rect, 'y');
      });

      this.dragHandleRight!.changes.subscribe(() => {
        this.setHandleTransform(this.dragHandleRight!.filter((element, index) => index === this.selectedControl!.index!)[0].nativeElement, rect, 'x');
      });
    });
  }

  setUpdateHandleTransform(): void {
    // eslint-disable-next-line no-console
    // console.log(this.resizeBox);
    const rect = this.resizeBox!.filter((element, index) => index === this.selectedControl!.index!)[0].nativeElement.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleBottom!.filter((element, index) => index === this.selectedControl!.index!)[0].nativeElement, rect,'y');
    this.setHandleTransform(this.dragHandleRB!.filter((element, index) => index === this.selectedControl!.index!)[0].nativeElement, rect,'both');
    this.setHandleTransform(this.dragHandleRight!.filter((element, index) => index === this.selectedControl!.index!)[0].nativeElement, rect,'x');

  }

  setHandleTransform(dragHandle: HTMLElement, targetRect: ClientRect | DOMRect, position: 'x' | 'y' | 'both'): void {
    const dragRect = dragHandle.getBoundingClientRect();
    // let c = dragRect.width
    this.transletAxisX = targetRect.width - dragRect.width;
    // console.log(this.transletAxisX = targetRect.width - dragRect.width);
    this.transletAxisY = targetRect.height - dragRect.height;
    // console.log(this.transletAxisY, 'dfdf')
    // eslint-disable-next-line no-console
    // console.log(this.transletAxisX + ':' + this.transletAxisY);
    if (position === 'x') {
      dragHandle.style.transform = `translate3d(${this.transletAxisX}px, 0, 0)`;
      // localStorage.setItem('X dis', dragHandle.style.transform);
      // console.log(this.transletAxisX);
    }

    if (position === 'y') {
      dragHandle.style.transform = `translate3d(0, ${this.transletAxisY}px, 0)`;
      // localStorage.setItem('Y dis', dragHandle.style.transform);
      // console.log(this.transletAxisY);

    }

    if (position === 'both') {
      dragHandle.style.transform = `translate3d(${this.transletAxisX}px, ${this.transletAxisY}px, 0)`;
      // localStorage.setItem('Both Dis', dragHandle.style.transform);
       console.log(dragHandle.style.transform);
    }
  }

  dragMove(dragHandle: HTMLElement, $event: CdkDragMove<any>, control : Control): void {
    this.selectedControl = control;
    this.ngZone.runOutsideAngular(() => {
      this.resize(dragHandle, this.resizeBox!.filter((element, index) => index === control.index!)[0].nativeElement);
    });
  }

  resize(dragHandle: HTMLElement, target: HTMLElement): void {

    // eslint-disable-next-line no-console
    // console.log(this.templateControls);
    const dragRect = dragHandle.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    // this.selectedControl!.width = dragRect.left - targetRect.left + dragRect.width;
    //this.selectedControl!.height = dragRect.top - targetRect.top + dragRect.height;
    this.width = dragRect.left - targetRect.left + dragRect.width;
    this.height = dragRect.top - targetRect.top + dragRect.height;
    //  console.log(this.height = dragRect.top - targetRect.top + dragRect.height);
    // console.log(height);
    const count =  ++this.clickCount;

    //this.selectedControl!.width = width;
    //this.selectedControl!.height = height;
    target.style.width = this.width + 'px';
    target.style.height = this.height + 'px';
    // target.clickCount = count;b
      // console.log(this.width);
    this.setUpdateHandleTransform();
  }

clickControl(control : Control,status:any) : void {


    this.selectedControl = control;
    var id =  this.selectedControl.index;
    // alert(id);
    // this.id = !this.id;
    // this.status = !this.status;






  }



}
