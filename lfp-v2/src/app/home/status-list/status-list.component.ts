import { Component, OnInit } from '@angular/core';
import { StatusFormService } from 'src/app/shared/status-form.service';
import { StatusForm } from 'src/app/shared/status-form.model';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {

  constructor(private service: StatusFormService) { }

  list: StatusForm[];
  ngOnInit() {
    this.service.getStatus().subscribe(actionArray =>{
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() } as StatusForm
      })

    });
  }

}
