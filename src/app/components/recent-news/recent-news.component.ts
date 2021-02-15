import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { LanguageService } from 'src/app/services/language.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-recent-news',
  templateUrl: './recent-news.component.html',
  styleUrls: ['./recent-news.component.scss'],
})
export class RecentNewsComponent implements OnInit {
  recentNewsList: News[] = [];
  page = 0;
  size = 2;
  currentLang?: string;

  constructor(
    private newsService: NewsService,
    private languageService: LanguageService
  ) {
    this.languageService.currentLang.subscribe((currentLang) => {
      this.currentLang = currentLang;
    });
  }

  ngOnInit(): void {
    this.retrieveRecentNews();
  }
  retrieveRecentNews(): void {
    let params: any = {};
    params[`page`] = this.page;
    params[`size`] = this.size;
    this.newsService.getNewsListWithPageAndSize(params).subscribe(
      (response) => (this.recentNewsList = response['news']),
      (error) => console.log(error)
    );
  }
}
