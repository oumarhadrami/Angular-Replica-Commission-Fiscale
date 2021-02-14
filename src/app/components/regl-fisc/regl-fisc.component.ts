import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilesService } from 'src/app/services/files.service';

@Component({
  selector: 'app-regl-fisc',
  templateUrl: './regl-fisc.component.html',
  styleUrls: ['./regl-fisc.component.scss']
})
export class ReglFiscComponent implements OnInit {
  
  fileInfos?: Observable<any>;
  activeTab = 1;

  constructor(private filesService: FilesService) { }

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles() {
    this.fileInfos = this.filesService.getFiles(this.activeTab);
  }

}
