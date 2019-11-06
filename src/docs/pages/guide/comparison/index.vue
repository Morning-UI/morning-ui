<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >

        <h1 title="对比" id="对比" is-anchor>对比</h1>

        <p>现在市面上的UI库非常多，当你选择时一定会有点不知所措。所以我们将主流的UI库都列在了下面，并且整理了一份全面的对比，供你参考。</p>

        <p>希望对你的挑选有所帮助。</p>

        <p>此对比截止：2019年7月16日。</p>
        
        <div style="padding-bottom: 40px;">
            <h4>对比UI库</h4>
            <ui-checkbox
                ref="diff"
                style="width: 400px;"
                v-model="uiLibs"
                :list="{
                    0 : 'HMP UI',
                    1 : 'Bootstrap',
                    2 : 'Semantic UI',
                    3 : 'Element UI',
                    4 : 'iView',
                    5 : 'Ant Design',
                    6 : 'Morning UI'
                }"
                @value-change="diff"
            >
            </ui-checkbox>
            <h4>显示选项</h4>
            <ui-radio
                ref="hidesame"
                style="width: 400px;"
                v-model="showType"
                :list="{
                    0 : '显示所有',
                    1 : '仅显示不同'
                }"
                @value-change="diff"
            >
            </ui-radio>
        </div>

        <table class="components">
            <thead>
                <tr>
                    <td>组</td>
                    <td class="item">项</td>
                    <td class="mark">HMP UI</td>
                    <td class="mark">Bootstrap</td>
                    <td class="mark">Semantic UI</td>
                    <td class="mark">Element UI</td>
                    <td class="mark">iView</td>
                    <td class="mark">Ant Design</td>
                    <td class="mark">Morning UI</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="6" valign="top" align="center">信息</td>
                    <td class="item">介绍</td>
                    <td class="mark">HMP平台的组件库。</td>
                    <td class="mark">Bootstrap 是全球最受欢迎的前端组件库，用于开发响应式布局、移动设备优先的 WEB 项目。</td>
                    <td class="mark">Semantic is a UI component framework based around useful principles from natural language.</td>
                    <td class="mark">一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库。</td>
                    <td class="mark">一套基于 Vue.js 的高质量 UI 组件库</td>
                    <td class="mark">一套企业级的 UI 设计语言和 React 实现。</td>
                    <td class="mark">一套桌面Web端的UI库，基于Vue.js。</td>
                </tr>
                <tr>
                    <td class="item">对比版本</td>
                    <td class="mark">最新</td>
                    <td class="mark">4.1.1</td>
                    <td class="mark">2.3.2</td>
                    <td class="mark">2.10.0</td>
                    <td class="mark">3.4.2</td>
                    <td class="mark">3.20.3</td>
                    <td class="mark">0.12.53</td>
                </tr>
                <tr>
                    <td class="item">官网</td>
                    <td class="mark">-</td>
                    <td class="mark">
                        <a href="https://getbootstrap.com/" target="_blank">https://getbootstrap.com/</a>
                    </td>
                    <td class="mark">
                        <a href="https://semantic-ui.com/" target="_blank">https://semantic-ui.com/</a>
                    </td>
                    <td class="mark">
                        <a href="http://element.eleme.io/" target="_blank">http://element.eleme.io/</a>
                    </td>
                    <td class="mark">
                        <a href="https://www.iviewui.com/" target="_blank">https://www.iviewui.com/</a>
                    </td>
                    <td class="mark">
                        <a href="https://ant.design/" target="_blank">https://ant.design/</a>
                    </td>
                    <td class="mark">
                        <a href="https://morning-ui.com/" target="_blank">https://morning-ui.com/</a>
                    </td>
                </tr>
                <tr>
                    <td class="item">GitHub</td>
                    <td class="mark">-</td>
                    <td class="mark">
                        <a href="https://github.com/twbs/bootstrap" target="_blank">https://github.com/twbs/bootstrap</a>
                    </td>
                    <td class="mark">
                        <a href="https://github.com/semantic-org/semantic-ui/" target="_blank">https://github.com/semantic-org/semantic-ui/</a>
                    </td>

                    <td class="mark">
                        <a href="https://github.com/ElemeFE/element" target="_blank">https://github.com/ElemeFE/element</a>
                    </td>
                    <td class="mark">
                        <a href="https://github.com/iview/iview" target="_blank">https://github.com/iview/iview</a>
                    </td>
                    <td class="mark">
                        <a href="https://github.com/ant-design/ant-design/" target="_blank">https://github.com/ant-design/ant-design/</a>
                    </td>
                    <td class="mark">
                        <a href="https://github.com/Morning-UI/morning-ui" target="_blank">https://github.com/Morning-UI/morning-ui</a>
                    </td>
                </tr>
                <tr>
                    <td class="item">Stars on GitHub</td>
                    <td class="mark">-</td>
                    <td class="mark">~125k</td>
                    <td class="mark">~41k</td>
                    <td class="mark">~39k</td>
                    <td class="mark">~21k</td>
                    <td class="mark">~48k</td>
                    <td class="mark">~84</td>
                </tr>
                <tr>
                    <td class="item">License</td>
                    <td class="mark">Private<br>Project</td>
                    <td class="mark">MIT License</td>
                    <td class="mark">MIT License</td>
                    <td class="mark">MIT License</td>
                    <td class="mark">MIT License</td>
                    <td class="mark">MIT License</td>
                    <td class="mark">MIT License</td>
                </tr>
                <tr>
                    <td rowspan="7" valign="top">总览</td>
                    <td class="item">设计语言</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                        <p>原则</p>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                        <p>原则</p>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                        <p>价值观、<br>原则、视觉、<br>模式</p>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                        <p>原则、视觉</p>
                    </td>
                </tr>
                <tr>
                    <td class="item">技术栈</td>
                    <td class="mark">
                        <p>-</p>
                    </td>
                    <td class="mark">
                        <p>Native</p>
                    </td>
                    <td class="mark">
                        <p>jQuery(可在React、Meteor、Ember、Angular中集成)</p>
                    </td>
                    <td class="mark">
                        <p>Vue<br>React<br>Angular</p>
                    </td>
                    <td class="mark">
                        <p>Vue</p>
                    </td>
                    <td class="mark">
                        <p>React</p>
                    </td>
                    <td class="mark">
                        <p>Vue</p>
                    </td>
                </tr>
                <tr>
                    <td class="item">组件数量</td>
                    <td class="mark">
                        <p>{{hmpuiNum}}</p>
                    </td>
                    <td class="mark">
                        <p>{{btNum}}</p>
                    </td>
                    <td class="mark">
                        <p>{{semanticNum}}</p>
                    </td>
                    <td class="mark">
                        <p>{{eleNum}}</p>
                    </td>
                    <td class="mark">
                        <p>{{iviewNum}}</p>
                    </td>
                    <td class="mark">
                        <p>{{antdNum}}</p>
                    </td>
                    <td class="mark">
                        <p>{{morningNum}}</p>
                    </td>
                </tr>
                <tr>
                    <td class="item">库大小</td>
                    <td class="mark">
                        <p>JS: -</p>
                        <p>CSS: -</p>
                    </td>
                    <td class="mark">
                        <p>JS: 49.5kb</p>
                        <p>CSS: 138kb</p>
                    </td>
                    <td class="mark">
                        <p>JS: 274kb</p>
                        <p>CSS: 623kb</p>
                    </td>
                    <td class="mark">
                        <p>JS: 552kb</p>
                        <p>CSS: 224kb</p>
                    </td>
                    <td class="mark">
                        <p>JS: 591kb</p>
                        <p>CSS: 311kb</p>
                    </td>
                    <td class="mark">
                        <p>JS: ~2050kb</p>
                        <p>CSS: 515kb</p>
                    </td>
                    <td class="mark">
                        <p>JS: ~1170kb</p>
                        <p>CSS: ~1120kb</p>
                    </td>
                </tr>
                <tr>
                    <td class="item">内置字体</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr>
                    <td class="item">内置图标</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                        <p>无</p>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                        <p>无</p>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                        <p>1572个</p>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                        <p>280个</p>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                        <p>860个</p>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                        <p>365个</p>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                        <p>74个</p>
                    </td>
                </tr>
                <tr>
                    <td class="item">常用布局</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                        <p>无</p>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                        <p>模板市场</p>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                        <p>主题化、布局</p>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                        <p>栅格</p>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                        <p>模板、设计规则</p>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                        <p>栅格、模板、设计规则</p>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                        <p>设计规则</p>
                    </td>
                </tr>
                <tr class="components">
                    <td rowspan="113" valign="top">组件</td>
                    <td class="item">标题</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">中心内容</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">标记的文本</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">删除的文本</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">带下划线的文本</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">小号文本</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">着重文本</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">斜体文本</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">缩略文本</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">左/居中/右对齐文本</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">大/小/首字大写文本</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">引用</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">来源/署名</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">有序列表</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">无序列表</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">内联列表</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">描述列表</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">项目列表</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">文本颜色</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">醒目文本</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">栅格</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">卡片</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">容器</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">区块</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">分频器/分割线</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">居中容器</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">页头</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">旗帜</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">徽标</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">标签</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">统计/统计数值</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">单元格/行动栏</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">表单组</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">表单</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">按钮组</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">嵌入</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">巨幕</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">文章</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">导航菜单</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">轨道</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">揭示</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">片段</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">广告栏</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">评论</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">动态</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">行内代码</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">代码块</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">变量</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">用户输入</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">图片</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">头像</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">警告/警告提示</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">时间轴/时间线</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">按钮</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">文字按钮</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">链接</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">下拉菜单</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">标签页</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">表格</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">分页</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">模拟盒/对话框</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">抽屉</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">日历</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">遮罩</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">加载/加载中</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">骨架屏</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">空状态</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">面包屑</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">小提示/文字提示</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">消息/全局提示</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">轮播/走马灯</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">自动完成/搜索条</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">树形控件</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">折叠面板/手风琴</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">版面分割</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">弹出框/气泡提示/气泡卡片</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">吸附/固钉/图钉</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">滚动定位/边栏</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">步骤条</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">进度条</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">进度环</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">气泡确认框/弹框</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">通知/通知提醒框</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">锚点</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">回到顶部/返回顶部</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">音频</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">视频</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">相对时间</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">瀑布流/无限滚动</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">多级联动</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">文本输入</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">段落输入</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">开关</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">下拉选择</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">复选框组/多选框</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">单选框组</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">多项输入</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">多项表单输入</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">时间选择</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">日期选择</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">日期时间选择</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">上传</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">图片热区输入</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">级联选择器</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">滑块输入器/滑动输入条</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">计数器/数字输入框</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">评分</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">颜色选择器</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">穿梭框</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">提及</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">树形选择器</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">富文本编辑器</td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
                <tr class="components">
                    <td class="item">结果</td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont no">&#xe62e;</i>
                    </td>
                    <td class="mark">
                        <i class="iconfont has">&#xe62d;</i>
                    </td>
                </tr>
            </tbody>
        </table>

    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'comparison',
            hmpuiNum : 0,
            btNum : 0,
            eleNum : 0,
            antdNum : 0,
            morningNum : 0,
            uiLibs : ['0','1','2','3','4','5','6'],
            showType : 0
        };

    },
    components : {
        'doc-guide' : DocGuide
    },
    methods : {
        diff : function () {
             let vm = window.morning.findVM('diff');
             if (!vm) {
                 return;
             }
             let hidesameVm = window.morning.findVM('hidesame');
            let diff = vm.get();
            let hidesame = +hidesameVm.get();
            let diffGroup = {};
             for (let i of ['0','1','2','3','4','5','6']) {
    
                for (let index in this.$el.querySelectorAll(`.components tr>td.mark`)) {
                     let $cell = this.$el.querySelectorAll(`.components tr>td.mark`)[index];
                     if (index % 7 === +i) {
                         if (diff.indexOf(i) === -1) {
                             $cell.classList.remove('show');
                         } else {
                             $cell.classList.add('show');
                             if (!diffGroup[Math.floor(index/7)]) {
                                 diffGroup[Math.floor(index/7)] = [];
                             }
                             diffGroup[Math.floor(index/7)].push($cell);
                         }
                     }
                 }
             }
             for (let line in diffGroup) {
                 let sameContent = '';
                let allsame = true;
                 for (let $cell of diffGroup[line]) {
                     if (sameContent === '') {
                         sameContent = $cell.innerHTML;
                     } else if (sameContent !== $cell.innerHTML) {
                         allsame = false;
                     }
                 }
                 for (let $cell of diffGroup[line]) {
                     if (allsame && hidesame) {
                         $cell.parentElement.classList.add('hidesame');
                     } else {
                         $cell.parentElement.classList.remove('hidesame');
                     }
                 }
             }
         }
    },
    mounted : function () {

        let allitems = this.$el.querySelectorAll('tbody > .components');

        this.hmpuiNum = this.$el.querySelectorAll('tbody > .components > .mark:nth-last-child(7)>.has').length;
        this.btNum = this.$el.querySelectorAll('tbody > .components > .mark:nth-last-child(6)>.has').length;
        this.semanticNum = this.$el.querySelectorAll('tbody > .components > .mark:nth-last-child(5)>.has').length;
        this.eleNum = this.$el.querySelectorAll('tbody > .components > .mark:nth-last-child(4)>.has').length;
        this.iviewNum = this.$el.querySelectorAll('tbody > .components > .mark:nth-last-child(3)>.has').length;
        this.antdNum = this.$el.querySelectorAll('tbody > .components > .mark:nth-last-child(2)>.has').length;
        this.morningNum = this.$el.querySelectorAll('tbody > .components > .mark:nth-last-child(1)>.has').length;

        this.diff();

    }
};
</script>

<style lang="less">
.components{
    font-size: 12px;
    word-break: break-all;
    position: relative;

    &.hidesame{
        td.mark{
            display: none;
        }
         td.mark.show{
            display: none;
        }
    }

    td{
        padding: 4px 8px;

        &.mark{
            display: none;
        }

        &.mark.show{
            display: table-cell;
        }
    }

    td.mark:nth-child(1),
    td.mark:nth-child(2),
    td.mark:nth-child(3),
    td.mark:nth-child(4),
    td.mark:nth-child(5){
        width: 100px;
    }

    td.item{
        min-width: 40px;
    }

    .mark{
        text-align: center;

        p{
            margin: 0;
        }
    }
}
.has{
    color: #1dbd1f;
}
.no{
    color: #ea2936;
}
</style>