import { Component, OnInit , ViewChild,  ViewContainerRef} from '@angular/core';
import { ResizableDraggableComponent } from '../resizable-draggable/resizable-draggable.component';

@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.css']
})
export class AddBoardComponent implements OnInit {
  @ViewChild('container1', { read: ViewContainerRef ,static: true }) container!: ViewContainerRef | any;
  private _counter = 1;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  number() : void{
    this.container.clear();
    const componentFactory = this.viewContainerRef.createComponent(ResizableDraggableComponent);
    const componentRef = this.container.createComponent(componentFactory);
    componentRef.instance.index = this._counter++;
  }
  pie(){
    alert('pie')

  }
  bar(){
    alert('bar')

  }
  line(){
    alert('line')

  }

}
