import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  private fileInfos!: Observable<any>;
  constructor(private http: HttpClient) {}

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('files', file);

    const req = new HttpRequest('POST', `${baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json',
    });

    return this.http.request(req);
  }

  getFilesFromSearchText(
    searchText: string,
    folderType: number
  ): Observable<any> {
    this.fileInfos = this.http.get(`${baseUrl}/files/${folderType}`);
    searchText = searchText.toLowerCase();
    return this.fileInfos.pipe(
      map((files) =>
        files.filter((file: { [x: string]: string }) => file['name'].toLowerCase().includes(searchText))
      )
    );
  }
}
