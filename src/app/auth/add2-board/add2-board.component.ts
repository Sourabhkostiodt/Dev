import { CdkDragMove } from '@angular/cdk/drag-drop';
import { identifierName } from '@angular/compiler';
import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  ViewChild,
  ViewChildren,
  QueryList,
  AfterViewChecked,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { numbers } from '@material/tooltip';
import Swal from 'sweetalert2'


enum MinAreaSize {
  width = 100,
  height = 100,
}

@Component({
  selector: 'app-add2-board',
  templateUrl: './add2-board.component.html',
  styleUrls: ['./add2-board.component.css']
})
export class Add2BoardComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild('boundary', { static: true }) boundary: ElementRef | any;
  @ViewChildren('resizeBox') resizeBox: QueryList<ElementRef> | any;
  @ViewChildren('dragHandleCorner') dragHandleCorner: QueryList<ElementRef> | any;
  id:any;
  public showControl = true;
  public imageUrl =
    '';
  flag = false;
  public width = 1200;
  public height = 680;
  public actions = [];
  userId:any;
  dashboardId:any;
  public selectAreaIndex = -1;
  getWidth:any;
  getHeight:any;
  getXAxis:any;
  getYAxis:any;
  getupdateId: any;


  constructor(private ngZone: NgZone, public dialog: MatDialog) {}

  ngAfterViewChecked() {
    this.initDrag();
  }

  ngAfterViewInit() {
    this.initDrag();
  }

  initDrag() {
    const parentHandleList = this.resizeBox.toArray();
    const dragHandleList = this.dragHandleCorner.toArray();

    for (const [index] of parentHandleList.entries()) {
      this.setAllHandleTransform(
        parentHandleList[index].nativeElement,
        dragHandleList[index].nativeElement
      );
    }
  }

  setAllHandleTransform(parentHandle: HTMLElement, dragHandle: HTMLElement) {
    const rect = parentHandle.getBoundingClientRect();
    this.setHandleTransform(dragHandle, rect);
    localStorage.setItem('fulldashboard-details', JSON.stringify(this.actions));
  }

  setHandleTransform(
    dragHandle: HTMLElement,
    targetRect: ClientRect | DOMRect
  ) {
    const dragRect = dragHandle.getBoundingClientRect();
    const translateX = targetRect.width - dragRect.width;
    const translateY = targetRect.height - dragRect.height;

    dragHandle.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
  }

  dragMove(
    index: number,
    dragHandle: HTMLElement,
    parentHandle: HTMLElement,
    $event: CdkDragMove<any>
  ) {
    this.ngZone.runOutsideAngular(() => {
      this.resize(index, dragHandle, parentHandle);
    });
  }

  handleMove(index: number, target: HTMLElement) {
    const boundaryRect = this.boundary.nativeElement.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const baseLeft = targetRect.left - boundaryRect.left;
    const baseTop = targetRect.top - boundaryRect.top;

    this.actions[index].x = baseLeft;
    this.actions[index].y = baseTop;
  }

  resize(index: number, dragHandle: HTMLElement, target: HTMLElement) {
    const boundaryRect = this.boundary.nativeElement.getBoundingClientRect();
    const dragRect = dragHandle.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const baseLeft = targetRect.left - boundaryRect.left;
    const baseTop = targetRect.top - boundaryRect.top;

    const dragRectRelativelyLeft =
      dragRect.left >
      this.boundary.nativeElement.offsetWidth + targetRect.left - dragRect.width
        ? this.boundary.nativeElement.offsetWidth +
          targetRect.left -
          dragRect.width
        : dragRect.left;
    const dragRectRelativelyTop =
      dragRect.top >
      this.boundary.nativeElement.offsetHeight +
        targetRect.top -
        dragRect.height
        ? this.boundary.nativeElement.offsetHeight +
          targetRect.top -
          dragRect.height
        : dragRect.top;

    const width = dragRectRelativelyLeft - targetRect.left + dragRect.width;
    const height = dragRectRelativelyTop - targetRect.top + dragRect.height;

    const maxTargetWidth =
      this.boundary.nativeElement.offsetWidth >= width + baseLeft
        ? width
        : this.boundary.nativeElement.offsetWidth - baseLeft;
    const maxTargetHeight =
      this.boundary.nativeElement.offsetHeight >= height + baseTop
        ? height
        : this.boundary.nativeElement.offsetHeight - baseTop;

    const targetWidth =
      maxTargetWidth > MinAreaSize.width ? maxTargetWidth : MinAreaSize.width;
    const targetHeight =
      maxTargetHeight > MinAreaSize.height
        ? maxTargetHeight
        : MinAreaSize.height;

    target.style.width = `${targetWidth}px`;
    target.style.height = `${targetHeight}px`;

    this.setAllHandleTransform(target, dragHandle);

    this.actions[index].x = baseLeft;
    this.actions[index].y = baseTop;
    this.actions[index].width = targetWidth;
    this.actions[index].height = targetHeight;
    // localStorage.setItem('fulldashboard-details', JSON.stringify(this.actions));
  }

  _btnAddArea() {
    this.actions.push({
      id: 'area'+ this.actions.length,
      userId:213,
      dashboardId:3,
      x: 0,
      y: 0,
      width: 200,
      height: 200,
    });

    // localStorage.setItem('fulldashboard-details', JSON.stringify(this.actions));
    setTimeout(() => {
      this.initDrag();
    }, 100);
  }

  _btnDelete(itemIndex: number) {
    Swal.fire({
      text: 'Do you want to continue',
    }).then((res) => {
      this.actions.splice(itemIndex, 1);
      localStorage.removeItem(this.id);
    })

  }

  _btnOption(itemIndex: number) {
     alert(itemIndex);
  }


  _btnAddTextArea() {
    this.actions.push({
      id: `area${this.actions.length - 1}`,
      x: 0,
      y: 0,
      width: 200,
      height: 200,
      userId: 0,
      dashboardId: 0
    });

    // localStorage.setItem('fulldashboard-details', JSON.stringify(this.actions));
    setTimeout(() => {
      this.initDrag();
    }, 100);
  }

  changeFormValue = {
    getWidth: '',
    getHeight: '',
    getXAxis: '',
    getYAxis: '',
    getupdateId: ''
  }

    // getWidth: any;
    // getHeight: any;
    // getXAxis: any;
    // getYAxis: any;

  // itemsg: any[] = [];
  openChangeDiv(val:any){
    // this.itemsg.push(val)
      this.getupdateId = val.id
      this.getWidth=val.width;
      this.getHeight=val.height;
      this.getXAxis=val.x;
      this.getYAxis=val.y;

      // this._btnAddTextArea()
    }
    getAxisValue(){
        this.actions.push({
          id: `area${this.actions.length - 1}`,
          width:  this.changeFormValue.getWidth,
          height:  this.changeFormValue.getHeight,
          x:  this.changeFormValue.getXAxis,
          y:  this.changeFormValue.getYAxis,

        });



    }


  }




