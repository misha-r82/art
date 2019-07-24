import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  forwardRef,
  NgZone,
  Renderer2, Inject
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {DOCUMENT} from "@angular/common";

declare const CKEDITOR;
@Component({
  selector: 'app-ckeditor',
  template: `
        <textarea #editor>
            {{value}}
        </textarea>
    `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CkEditorComponent),
    multi: true
  }]
})
export class CkEditorComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @ViewChild('editor') editor: ElementRef;

  wait = false;

  instance: any;

  config = { height: '100%' };

  private _value = '';

  get value(): any { return this._value; }
  @Input() set value(v) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }
private loadScript : Promise<void>;
  constructor(private zone: NgZone, private renderer: Renderer2,
              @Inject(DOCUMENT) private _document) {
    this.loadScript = new Promise(
      resolve => {
        const s = this.renderer.createElement('script');
        s.type = 'text/javascript';
        s.src = 'https://cdn.ckeditor.com/4.12.1/standard/ckeditor.js';
        s.onload = resolve;
        this.renderer.appendChild(this._document.body, s);
        console.log("Constructor end!!!");
      }
    )
  }
init()
{
  //console.log("Init!!!");
  this.instance = CKEDITOR.replace(this.editor.nativeElement, this.config);
  this.instance.setData(this._value);
  // CKEditor change event
  this.instance.on('change', () => {
    let value = this.instance.getData();
    this.updateValue(value);
  });


}

ngOnInit() {
this.loadScript.then(()=>this.init());
}

  updateValue(value: any) {
    this.zone.run(() => {
      this.value = value;
      this.onChange(value);
      this.onTouched();
    });
  }

  writeValue(value: any) {
    console.log('writeValue');
    this._value = value;
    if (this.instance) {
      this.instance.setData(value);
    }
  }
  onChange(_: any) { }
  onTouched() { }
  registerOnChange(fn: any) { this.onChange = fn; }
  registerOnTouched(fn: any) { this.onTouched = fn; }

  ngOnDestroy() {
    if (this.instance) {
      setTimeout(() => {
        this.instance.removeAllListeners();
        CKEDITOR.instances[this.instance.name].destroy();
        this.instance.destroy();
        this.instance = null;
      });
    }
  }
  setDisabledState(isDisabled: boolean): void {  }
}


