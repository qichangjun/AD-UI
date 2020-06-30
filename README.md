
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

    ```import { AdUiModule } from 'ad-ui';```

   you can also import the component you need from the specify module ***like this***:

    ``` import { AdUiTreeComponent } from 'ad-ui'; ```


3. Add it to `[imports]` under `@NgModule`:

    ```imports: [ ... AdUiModule, ... ]```


## API for `AdTreeComponent`

### Properties

- `option` - (`AdTreeOption`) - AdTreeOption object. 

    url : string;                          ```后台接口地址```

    headers? : {[key: string]: any;}       ```传给后台的header```

    additionParams? : {[key: string]: any;} ```额外传给后台的参数```

    ajaxFilterFn? : (data:any[])=>NzTreeNodeOptions[]   ```异步加载子节点后格式数据的方法```

    additionRootData? : any[]                           ```额外添加跟节点数据```

    rootId? : string | number                           ```根节点id    ```

    formatDataFn? : (data:any)=>NzTreeNodeOptions[]     ```初始化后台返回的数据的方法```

    api? : any                                          ```映射的treecomonent里的方法 ```

    data? : any[]                                       ```树节点数据```

    enableCheck? : boolean                              ```是否显示checkbox```

### Html Example 

        <ad-tree [option]="option" [nzTreeTemplateDiy]="nzTreeTemplateDiy"
                [ids]="ids"
                (clickTree)="clickTree($event)"
        >
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

## API for `AdPaginationComponent`

### Properties

- @Input() isSelectAll: boolean = false;          ```是否跨页全选```

- @Input() totalElement: number = 0;              ```总数```

- @Input() currentPage: number = 1;               ```当前页```

- @Input() pageSize?: string = '50';              ```每页大小```

- @Input() enableSelectAll : boolean = false      ```是否允许跨页全选```

- @Output() selectAll : EventEmitter<any> = new EventEmitter();   ```全选事件```

### Html Example

        <ad-pagination [pageSize]="parameter.pageSize"
        [totalElement]="parameter.totalElement"
        [currentPage]="parameter.currentPage"></ad-pagination>