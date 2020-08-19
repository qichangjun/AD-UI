
# AD-UI [![npm version](https://badge.fury.io/js/ng2-file-upload.svg)](http://badge.fury.io/js/ng2-file-upload) [![npm downloads](https://img.shields.io/npm/dm/ng2-file-upload.svg)](https://npmjs.org/ng2-file-upload)

Easy to use Augular 7.0 UI

[![Angular 2 Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://github.com/mgechev/angular2-style-guide)


## Quick start

1. A recommended way to install ***ad-ui*** is through [npm](https://www.npmjs.com/search?q=ad-ui) package manager using the following command:

  `npm i ng-ad-ui --save`

  Alternatively, you can [download it in a ZIP file](https://github.com/qichangjun/ad-ui/archive/master.zip).


2. More information regarding using of ***ad-ui*** is located in
  [demo](http://valor-software.github.io/ng2-file-upload/) and [demo sources](https://github.com/valor-software/ng2-file-upload/tree/master/demo).
  

## Using ***ad-ui*** in a project

1. Install as shown in the above section.

2. Import `AdUiModule` into the module that declares the component using ***ad-ui***:

    ```import { AdTreeModule } from 'ng-ad-ui';```


3. Add it to `[imports]` under `@NgModule`:

    ```imports: [ ... AdTreeModule, ... ]```


## API for `AdTreeComponent`

### Properties

- `option` - (`AdTreeOption`) - AdTreeOption object. 

    |  属性名   | 类型   |   required  |   默认值        |  描述  |
    |  ----    | ----  |    ---      |   ----         | ---   |
    |  [url]     | string |    true     |    null        | 后台接口地址 |
    |  [headers] | {[key: string]: any;} |    false    |    null        | 传给后台的header|
    |  [additionParams]     | {[key: string]: any;} |    false     |    null        | 额外传给后台的参数 |
    |  [ajaxFilterFn]     | (data:any[])=>NzTreeNodeOptions[] |    false     |    Function        | 异步加载子节点后格式数据的方法 |
    |  [additionRootData]     | any[] |    false     |    []        | 额外添加跟节点数据 |
    |  [rootId]     | string|number |    false     |    0        | 根节点id |
    |  [formatDataFn]     | (data:any)=>NzTreeNodeOptions[] |    false     |    Function        | 初始化后台返回的数据的方法 |
    |  [data]     | any[] |    false     |    []        | 树节点数据 |
    |  [enableCheck]     | boolean |    false     |    false        | 是否显示checkbox |
    |  [autoParameter]     | string[] |    false     |    ['parentId=id']        | 传给后台的父节点的字段参数 |

- `ids` - (`string[]`) - 当前树激活的节点的全路径，一般默认开始时为```['0']```

    |  属性名   | 类型   |   required  |   默认值        |  描述  |
    |  ----    | ----  |    ---      |   ----         | ---   |
    |  [ids] | string[] |    true    |    null        |   |

- `clickTree` - (`EventEmitter<clickTreeNodeEvent>`) - 点击树节点的事件

    |  属性名   | 类型   |   required  |   默认值        |  描述  |
    |  ----    | ----  |    ---      |   ----         | ---   |
    |  (clickTree) | EventEmitter |    false    |    null        | 点击树节点的事件  |

- `nzTreeTemplateDiy` - (`TemplateRef<{ $implicit: NzTreeNode; origin: NzTreeNodeOptions }>`) - 树节点自定义内部dom节点

    |  属性名   | 类型   |   required  |   默认值        |  描述  |
    |  ----    | ----  |    ---      |   ----         | ---   |
    |  [nzTreeTemplateDiy] | TemplateRef |    false    |    如下        | 点击树节点的事件  |

         <ng-template #nzTreeTemplate let-node>
                <span class="custom-node" [class.active]="activedNode?.key === node.key">
                  <span *ngIf="!node.isLeaf" >                  
                    <span class="folder-name">{{ node.title }}</span>                    
                  </span>
                  <span *ngIf="node.isLeaf">
                    <span class="file-name">{{ node.title }}</span>
                  </span>
                </span>
        </ng-template>


- `Method` - AdTreeComponent的api方法

    |  方法名   |   params  |   return        |  描述  |
    |  ----    |     ---      |   ----         | ---   |
    |  updateNode  |    key    |    null        | 根据id，刷新该节点下的子节点  |


### 具体使用方法 
***HTML:***

        <ad-tree #adUiTree [option]="option" [nzTreeTemplateDiy]="nzTreeTemplateDiy"
                [ids]="ids"
                (clickTree)="clickTree($event)"
        >

                        //自定义节点内的dom节点
                        <!-- <ng-template #nzTreeTemplateDiy let-node>
                        <span class="custom-node">
                            <span *ngIf="!node.isLeaf" >
                            
                            <span class="folder-name">{{ node.title }} </span>
                            </span>
                            <span *ngIf="node.isLeaf">
                            
                            <span class="file-name">{{ node.title }}</span>
                            </span>
                        </span>
                        </ng-template> -->
        </ad-tree>

***TS:***


        import { Component, OnInit,ViewChild } from '@angular/core';
        import { AdTreeOption, clickNodeEvent } from 'ng-ad-ui';
        import { Router, ActivatedRoute } from '@angular/router';

        @Component({
        selector: 'app-ad-ui-tree',
        templateUrl: './ad-ui-tree.component.html',
        styleUrls: ['./ad-ui-tree.component.scss']
        })
        export class AdUiTreeExampleComponent implements OnInit {
        @ViewChild('adUiTree') adUiTree;
        parameter : any={
            ids:'0',
            pageSize : '50',
            currentPage : 1,
            totalElement : 200
        }
        ids : string[] = ['0']
        option : AdTreeOption = {
            url:'http://amberdata.cn/teamworkapi1.1/basicinfogroup/get_tree_node_list',
            additionParams : {
            schemeId: 1002002
            },
            additionRootData:[{
            id : '0',name : '分类管理',childCount:1
            }],
            data : [],
            headers:{
            accessToken: 'd76fa28aff87116fd3be5ccd4ca247c1'
            }
        }
        constructor(
            private route: ActivatedRoute,
            private router: Router,
        ) { }

        ngOnInit() {
            this.route.queryParams.subscribe((params: any) => {
            if (params.ids){
                this.ids = params.ids.split('*')
                this.parameter.ids = params.ids 
            }      
            })
        }

        clickTree(clickNodeParams:clickNodeEvent){
            this.ids = clickNodeParams.ids
            this.parameter.ids = this.ids.join('*')
            this.router.navigate([],{queryParams:this.parameter})
        }
         refreshNode(){
            //刷新当前选中的节点
            let id = this.ids[this.ids.length - 1]
            this.adUiTree.updateNode(id)
        }
        }
