import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilesService } from 'src/app/services/files.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-regl-fisc',
  templateUrl: './regl-fisc.component.html',
  styleUrls: ['./regl-fisc.component.scss'],
})
export class ReglFiscComponent implements OnInit {
  fileInfos?: Observable<any>;
  activeTab = 1;
  searchText = '';
  currentLang!: string;

  constructor(
    private filesService: FilesService,
    private languageService: LanguageService
  ) {
    this.languageService.currentLang.subscribe((currentLang) => {
      this.currentLang = currentLang;
      this.getFilesFromSearchText();
    });
  }

  ngOnInit(): void {}

  getFilesFromSearchText() {
    this.fileInfos = this.filesService.getFilesFromSearchText(
      this.searchText,
      this.activeTab,
      this.currentLang
    );
  }
}
