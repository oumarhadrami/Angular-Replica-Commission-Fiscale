import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFilesService } from 'src/app/services/upload-files.service';

@Component({
  selector: 'app-regl-fisc',
  templateUrl: './regl-fisc.component.html',
  styleUrls: ['./regl-fisc.component.scss']
})
export class ReglFiscComponent implements OnInit {
  
  fileInfos?: Observable<any>;

  constructor(private uploadService: UploadFilesService) { }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }

}
