import { AfterViewInit, ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CloudVisionServiceService } from 'src/app/services/cloud-vision-service.service';

@Component({
  selector: 'app-digital-eye-page',
  templateUrl: './digital-eye-page.component.html',
  styleUrls: ['./digital-eye-page.component.scss']
})
export class DigitalEyePageComponent implements OnInit, AfterViewInit {

  @ViewChild('video')
  public video: ElementRef<HTMLVideoElement>;

  @ViewChild('canvas')
  public canvas: ElementRef<HTMLCanvasElement>;

  private context: CanvasRenderingContext2D;

  constructor(private readonly visionService: CloudVisionServiceService) { }
  ngAfterViewInit(): void {
    this.videoFoo();
  }

  ngOnInit(): void {

  }

  public videoFoo(): void {
    this.context = this.canvas.nativeElement.getContext('2d');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        this.video.nativeElement.srcObject = stream;

        this.video.nativeElement.addEventListener('loadedmetadata', () => {
          this.canvas.nativeElement.width = this.video.nativeElement.videoWidth;
          this.canvas.nativeElement.height = this.video.nativeElement.videoHeight;
        });

        this.video.nativeElement.addEventListener('play', () => this.takePicture());

        this.video.nativeElement.play();
      });
    } else {
      alert('Sorry not supported for your browser');
    }
  }

  public takePicture(): void {
    if (!this.video.nativeElement.paused && !this.video.nativeElement.ended) {
      this.context.drawImage(this.video.nativeElement, 0, 0);
      const data = this.canvas.nativeElement.toDataURL().split('base64,')[1];
      this.visionService.postImage(data);
      // setTimeout(this.takePicture, 5000); // drawing at (1/5)fps
    }
  }
}
