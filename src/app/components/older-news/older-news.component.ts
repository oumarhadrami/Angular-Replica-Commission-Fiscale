import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { LanguageService } from 'src/app/services/language.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-older-news',
  templateUrl: './older-news.component.html',
  styleUrls: ['./older-news.component.scss'],
})
export class OlderNewsComponent implements OnInit {
  olderNewsList: News[] = [];
  page = 0;
  size = 8;
  currentLang?: string;

  constructor(private newsService: NewsService,private languageService: LanguageService) {
    this.languageService.currentLang.subscribe((currentLang) => {
      this.currentLang = currentLang;
   })
  }

  ngOnInit(): void {
    this.retrieveOlderNews();
  }
  retrieveOlderNews(): void {
    let params: any = {};
    params[`page`] = this.page;
    params[`size`] = this.size;
    this.newsService.getNewsListWithPageAndSize(params).subscribe(
      (response) => {
        this.olderNewsList = response['news']
        this.olderNewsList = this.olderNewsList.slice(2,8);
      },
      (error) => console.log(error)
    );
  }
}
