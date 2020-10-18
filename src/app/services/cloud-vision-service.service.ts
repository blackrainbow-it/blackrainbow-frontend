import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CloudVisionServiceService {

  constructor(private readonly http: HttpClient) { }
  public postImage(imageData: string) {
    this.http.post(`https://vision.googleapis.com/v1/images:annotate?key=${environment.api_key}`,
      {
        "requests": [
          {
            "features": [
      /*        {
                "maxResults": 50,
                "type": "OBJECT_LOCALIZATION"
              },
              {
                "maxResults": 50,
                "type": "LOGO_DETECTION"
              },*/
              {
                "maxResults": 5,
                "type": "LABEL_DETECTION"
              },
              {
                "maxResults": 5,
                "type": "DOCUMENT_TEXT_DETECTION"
              },
         /*     {
                "maxResults": 50,
                "type": "IMAGE_PROPERTIES"
              }*/
            ],
            "image": {
              "content": imageData
            }
          }
        ]
      }).subscribe(data => console.log(data));
  }
}
