import { DomSanitizer } from '@angular/platform-browser';
import { AnimationBuilder, style, animate } from '@angular/animations';
import { take, takeUntil, last } from 'rxjs/operators';
import {
  Component, OnInit, Input, Optional,
  Inject, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, ChangeDetectorRef, EventEmitter, Output, ViewChild, HostBinding, Renderer2
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { timer, interval } from 'rxjs';
const BASE_SIZE = 100;

@Component({
  selector: 'fiv-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[style.width.px]': 'diameter',
    '[style.height.px]': 'diameter'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LoadingSpinnerComponent implements OnInit {

  private static diameters = new Set<number>([BASE_SIZE]);
  private static styleTag: HTMLStyleElement | null = null;
  private _diameter = BASE_SIZE;
  _strokeWidth = 10;
  _value = 0;


  @Output() fivProgress = new EventEmitter<number>();
  @Output() fivComplete = new EventEmitter<LoadingSpinnerComponent>();
  @ViewChild('determinateCircle') determinateCircle: ElementRef;
  @Input() mode: 'indeterminate' | 'determinate' = 'indeterminate';
  @Input() circleRadius = 45;

  @HostBinding('class') get class() {
    return this.mode + ' mat-spinner mat-progress-spinner mat-progress-spinner-indeterminate-animation';
  }

  constructor(@Optional() @Inject(DOCUMENT) private _document: any, public _elementRef: ElementRef,
    public change: ChangeDetectorRef, private builder: AnimationBuilder, public sanitizer: DomSanitizer, private renderer: Renderer2) {
  }

  ngOnInit() {
    console.log(this.mode);
  }

  get viewBox() {
    const viewBox = this.circleRadius * 2 + this.strokeWidth;
    return `0 0 ${viewBox} ${viewBox}`;
  }

  /** The stroke circumference of the svg circle. */
  get strokeCircumference(): number {
    return 2 * Math.PI * this.circleRadius;
  }

  /** The dash offset of the svg circle. */
  get strokeDashOffset() {
    if (this.mode === 'determinate') {
      return this.strokeCircumference * (100 - this._value) / 100;
    }

    return null;
  }

  /** Stroke width of the circle in percent. */
  get circleStrokeWidth() {
    return this.strokeWidth / this.diameter * 100;
  }

  /** Value of the progress circle. */
  @Input()
  get value(): number {
    return this.mode === 'determinate' ? this._value : 0;
  }
  set value(newValue: number) {
    this._value = Math.max(0, Math.min(100, (newValue)));
  }

  @Input()
  get diameter(): number { return this._diameter; }
  set diameter(size: number) {
    this._diameter = size;

    if (!LoadingSpinnerComponent.diameters.has(this._diameter)) {
      this._attachStyleNode();
    }
  }

  /** Stroke width of the progress spinner. */
  @Input()
  get strokeWidth(): number {
    return this._strokeWidth || this.diameter / 10;
  }
  set strokeWidth(value: number) {
    this._strokeWidth = value;
  }


  /** Dynamically generates a style tag containing the correct animation for this diameter. */
  private _attachStyleNode(): void {
    let styleTag = LoadingSpinnerComponent.styleTag;

    if (!styleTag) {
      styleTag = this._document.createElement('style');
      this._document.head.appendChild(styleTag);
      LoadingSpinnerComponent.styleTag = styleTag;
    }

    if (styleTag && styleTag.sheet) {
      (styleTag.sheet as CSSStyleSheet).insertRule(this._getAnimationText(), 0);
    }

    LoadingSpinnerComponent.diameters.add(this.diameter);
  }


  /** Generates animation styles adjusted for the spinner's diameter. */
  private _getAnimationText(): string {
    const INDETERMINATE_ANIMATION_TEMPLATE = `
    @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {
       0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }
       12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }
       12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }
       25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }
       25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }
       37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }
       37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }
       50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }
       50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }
       62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }
       62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }
       75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }
       75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }
       87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }
       87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }
       100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }
     }
   `;
    return INDETERMINATE_ANIMATION_TEMPLATE
      // Animation should begin at 5% and end at 80%
      .replace(/START_VALUE/g, `${0.95 * this.strokeCircumference}`)
      .replace(/END_VALUE/g, `${0.2 * this.strokeCircumference}`)
      .replace(/DIAMETER/g, `${this.diameter}`);
  }


  completeIn(duration: number) {
    this.mode = 'determinate';
    this.change.detectChanges();
    console.log('complete in', duration);
    console.log('interval', duration / 100);
    console.log('timer length', duration + duration / 50);
    console.log('loop count', (duration + duration / 50) / (duration / 100));


    const i = interval(duration / 100);
    const t = timer(duration + duration / 50);
    const progress = i.pipe(takeUntil(t));

    progress.subscribe(p => {
      console.log('progress', p);
      this.fivProgress.emit(p);
      this.setValue(p);
    });

    progress
      .pipe(last())
      .subscribe(() => {
        this.fivComplete.emit(this);
        this._value = 0;
      });

  }
  setValue(progress: number): any {
    this.mode = 'determinate';
    this._value = progress;
    this.change.detectChanges();
    console.log('set value', this._value, this.mode);
  }

  spin() {
    this.mode = 'indeterminate';
    this.change.detectChanges();
  }

  stopSpinning() {
    this._value = 0;
    this.change.detectChanges();
  }

  setMode(mode) {
    this.mode = mode;
    this.change.detectChanges();
  }
}


