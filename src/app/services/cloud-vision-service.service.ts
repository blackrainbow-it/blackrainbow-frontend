import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CloudVisionServiceService {

  constructor(private readonly http: HttpClient) { }

  public postImage(imageData: string): void {
    this.http.post(`https://vision.googleapis.com/v1/images:annotate?key=${environment.api_key}`,
      {
        requests: [
          {
            features: [
              {
                maxResults: 5,
                type: 'LABEL_DETECTION'
              },
              {
                maxResults: 5,
                type: 'DOCUMENT_TEXT_DETECTION'
              }
            ],
            image: {
              content: imageData
            }
          }
        ]
      }).subscribe(data => console.log(data));
  }
}
