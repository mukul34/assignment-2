import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { AllUserService } from 'src/app/all-user.service';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() data=[];
  @Output() close=new EventEmitter();

  onClose(){
    this.close.emit();
  }

  saveData(){
    this.close.emit();

    this._AllUserService.addUser(this.data[0])
  }
  
  constructor(private _AllUserService: AllUserService) {
    
   }

  ngOnInit(): void {
    
  }
  

}
