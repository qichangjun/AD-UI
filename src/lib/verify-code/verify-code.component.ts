import { Component,ElementRef, forwardRef, Input,ViewChild,OnChanges,OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as _ from 'lodash';
import { NzFormatEmitEvent,NzTreeNodeOptions ,NzTreeNode} from 'ng-zorro-antd';

export const EXE_COUNTER_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => VerifyCodeComponent),
    multi: true
};
@Component({
  selector: 'ad-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss'],
  providers: [EXE_COUNTER_VALUE_ACCESSOR]
})
export class VerifyCodeComponent implements OnInit,ControlValueAccessor {
  @Input() _valueInfo: string;
  @Input() adPlaceHolder? : string;
  @ViewChild('verifyCodeContainer') verifyCodeContainer;
  @ViewChild('verifyCanvas') verifyCanvas;  
  @ViewChild('code_img') codeImg;
  @ViewChild('verificationInput') verificationInput;
  displayValue : string;
  checkCode: any
  nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ]
  str: any
  constructor(
    private el: ElementRef
  ) {
    
  }

  ngOnInit() {
    this.drawCode()
  }

  get valueInfo() {
      return this._valueInfo;
  }

  set valueInfo(value: any) {
      this._valueInfo = value;
      this.propagateChange(this._valueInfo);
  }

  changeValue(e){
    this.valueInfo = this.verificationInput.nativeElement.value 
    this.displayValue = this.verificationInput.nativeElement.value 
  }

  propagateChange = (_: any) => { };



  writeValue(value: any) {
      if (value !== undefined) {
          this.displayValue = value
          this._valueInfo = value;
      }
  }

  registerOnChange(fn: any) {
      this.propagateChange = fn;
  }

  registerOnTouched(fn: any) { }


  drawCode(str?) {
    this.el.nativeElement.querySelector('#verifyCanvas').remove();//每次更新验证码都要移除canvas，然后再进行重绘    
    var box = this.verifyCodeContainer.nativeElement;
    var p1 = this.codeImg.nativeElement;
    var p0 = document.createElement('canvas');//创建canvas节点
    p0.id = 'verifyCanvas';//定义canvas id
    box.insertBefore(p0, p1);//将canvas节点插入到img节点前面
    p0.width = 75;//设置画布宽度
    p0.height = 28;//设置画布高度
    var canvas = this.el.nativeElement.querySelector('#verifyCanvas'); //获取HTML端画布
    var context = canvas.getContext("2d"); //获取画布2D上下文环境
    context.fillStyle = "#fff"; //画布填充色
    context.fillRect(0, 0, canvas.width, canvas.height); //清空画布
    context.fillStyle = "#800000"; //设置字体颜色
    context.font = "20px Arial"; //设置字体
    var rand = new Array();
    var x = new Array();
    var y = new Array();
    let showValue = ''
    for (let i = 0; i < 4; i++) {
      rand.push(rand[i]);
      rand[i] = this.nums[Math.floor(Math.random() * this.nums.length)];//在数组中随机取一个值
      showValue += rand[i]
      x[i] = i * 20 + 4;
      y[i] = Math.random() * 20 + 8;
      context.fillText(rand[i], x[i], y[i]);//设置文本在画布中显示的位置
    }
    this.checkCode = showValue
    this.str = rand.join('').toUpperCase();//将验证码的值中小写字母转为大写
    //画3条随机线
    for (var i = 0; i < 3; i++) {
      this.drawline(canvas, context);
    }

    // 画30个随机点
    for (var i = 0; i < 30; i++) {
      this.drawDot(canvas, context);
    }
    this.convertCanvasToImage(canvas);
    return this.str;
  }
  // 随机线
  drawline(canvas, context) {
    context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); //随机线的起点x坐标是画布x坐标0位置，y坐标是画布高度的随机数
    context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); //随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
    context.lineWidth = 0.4; //随机线宽
    context.strokeStyle = 'rgba(50,50,50,0.3)'; //随机线描边属性
    context.stroke(); //描边，即起点描到终点
  }
  // 随机点(所谓画点其实就是画1px像素的线，方法不再赘述)
  drawDot(canvas, context) {
    var px = Math.floor(Math.random() * canvas.width);
    var py = Math.floor(Math.random() * canvas.height);
    context.moveTo(px, py);
    context.lineTo(px + 1, py + 1);
    context.lineWidth = 0.2;
    context.stroke();

  }
  // 绘制图片
  convertCanvasToImage(canvas) {
    this.el.nativeElement.querySelector('#verifyCanvas').style.display = "none";
    var image = this.codeImg.nativeElement;
    image.src = canvas.toDataURL("image/png");//画布转成图片地址
    return image;//返回图片对象
  }

}
