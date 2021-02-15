import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/models/news';
import { LanguageService } from 'src/app/services/language.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit {
  newsItem!: News;
  currentLang?: string;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private languageService: LanguageService
  ) {
    this.languageService.currentLang.subscribe((currentLang) => {
      this.currentLang = currentLang;
    });
  }

  ngOnInit(): void {
    this.getNewsById(this.route.snapshot.params.id);
  }

  getNewsById(id: string): void {
    this.newsService.getNewsById(id).subscribe(
      (response) => (this.newsItem = response),
      (error) => console.log(error)
    );
  }
}
