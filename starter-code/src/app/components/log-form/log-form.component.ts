import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  person = '';
  message = '';
  showMessage = false;

  constructor(private accessControlLog: AccessControlLogService) {
  }

  ngOnInit() {
  }

  handleAddItem() {
    this.accessControlLog.addAccessItem(this.person, this.message);
    this.showMessage = true;
    setTimeout(() => {this.showMessage = false; }, 1000);
  }
}
