import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  forwardRef,
  NgZone,
  NgModule,
  Renderer2, Inject, AfterContentInit
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {DOCUMENT} from "@angular/common";
import {Alert} from "selenium-webdriver";

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
export class CkEditorComponent implements OnInit, AfterContentInit ,OnDestroy, ControlValueAccessor {


  @ViewChild('editor') editor: ElementRef;

  wait = false;

  instance: any;

  config = {
    uiColor: '#F0F3F4',
    height: '100%'
  };

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
        s.src = 'https://cdn.ckeditor.com/4.11.4/standard/ckeditor.js';
        s.onload = resolve;
        this.renderer.appendChild(this._document.body, s);

      }
    )

    //
    //console.log("ConstructorEND!!!")
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




 /* public  loadScript() {
    let isFound = false;
    let scripts = document.getElementsByTagName("script")
    for (let i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("ckeditor")) {
        isFound = true;
      }
    }
    if (!isFound) {
      var dynamicScript = "https://cdn.ckeditor.com/4.11.4/standard/ckeditor.js";
      let node = document.createElement('script');
      node.src = dynamicScript;
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      console.log(node);
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }*/

  /**
   * Value update process
   */
  updateValue(value: any) {
    this.zone.run(() => {
      this.value = value;
      this.onChange(value);
      this.onTouched();
    });
  }

  /**
   * Implements ControlValueAccessor
   */
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

  ngAfterContentInit(): void {
    this.init();
  }

  setDisabledState(isDisabled: boolean): void {

  }
}


