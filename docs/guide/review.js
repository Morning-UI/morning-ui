!function(e){function n(n){for(var r,l,s=n[0],o=n[1],a=n[2],p=0,v=[];p<s.length;p++)l=s[p],i[l]&&v.push(i[l][0]),i[l]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(c&&c(n);v.length;)v.shift()();return u.push.apply(u,a||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,s=1;s<t.length;s++){var o=t[s];0!==i[o]&&(r=!1)}r&&(u.splice(n--,1),e=l(l.s=t[0]))}return e}var r={},i={111:0},u=[];function l(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=r,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)l.d(t,r,function(n){return e[n]}.bind(null,r));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],o=s.push.bind(s);s.push=n,s=s.slice();for(var a=0;a<s.length;a++)n(s[a]);var c=o;u.push([629,0]),t()}({1:function(e,n){e.exports=Vue},304:function(e,n,t){"use strict";var r=function(){var e=this.$createElement,n=this._self._c||e;return n("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[n("script",{attrs:{type:"text/markdown"}},[this._v("\n   # 检视代码(Review)\n\n   Review其他开发者贡献的代码也是一项非常重要的工作，带来的价值和贡献代码是一致的。\n\n   ## 成为一名Code Reviewer\n\n   请发送邮件至`earlyhe0@gmail.com`。\n\n   ## 请求Review\n\n   当你开发并提交需要贡献的代码后，请在`Pull Request`中发起一个新的合并请求，合并的源分支是你的贡献分支，目标分支是`dev`。\n\n   在你的合并请求创建时，请添加`Request Review`标签。这个标签表示你的合并请求需要Review，你可以在`Reviewers`中指定特定的人来为你Review，否则将由任意贡献者为你Review代码。\n\n   详见：[Requesting a pull request review](https://help.github.com/articles/requesting-a-pull-request-review/)\n\n   > `dev`是项目的主开发分支，所有的贡献最终都会合并至此。最终由项目管理员通过版本发布的形式将代码提交至`master`分支。\n\n   ## 申请Review别人的代码\n\n   打开`Pull Request`页面，筛选出包含`Request Review`标签的合并请求，然后：\n\n   - 如果这个请求指定了`Reviewers`，并且不是你：请交给指定的人来Review，跳过这个合并请求\n   - 如果这个请求指定了`Reviewers`，并且是你：请打开这个合并请求，然后开始Review\n   - 如果这个请求没有指定`Reviewers`：打开它，然后将`Reviewers`改成你，然后开始Review\n\n   > 一个合并请求的`Reviewers`表明了当前正在Review的人是谁。\n\n   请务必逐条确认以上的事项，经过你Review的文档未来将会开发者指明方向。\n\n   ## 检视变更\n\n   Review需要耐心和细心，除了代码内容外，提交的文档、测试等内容也是Review的重点。\n\n   请务必确保`Pull Request`中的变更符合[开发规范](/guide/devrule.html)，经过你Review的代码未来将会构建成千上万的应用。\n\n   ## 指出问题及沟通\n\n   你可以在有问题的代码上开启一个`Review`，指出你的疑问或纠正错误。代码贡献者需要会在这个`Review`上和你沟通，直到达成一致。\n   \n   详见：\n   \n   - [About pull request reviews](https://help.github.com/articles/about-pull-request-reviews/)\n   - [Reviewing proposed changes in a pull request](https://help.github.com/articles/reviewing-proposed-changes-in-a-pull-request/)\n   - [Viewing a pull request review](https://help.github.com/articles/viewing-a-pull-request-review/)\n   - [Approving a pull request with required reviews](https://help.github.com/articles/approving-a-pull-request-with-required-reviews/)\n   - [Dismissing a pull request review](https://help.github.com/articles/dismissing-a-pull-request-review/)\n   - [Checking out pull requests locally](https://help.github.com/articles/checking-out-pull-requests-locally/)\n\n   ## 持续集成\n\n   持续集成中包含了很多自动化的检查，如果一个合并请求未通过持续集成，请通知代码贡献者。在持续集成通过后再开始Review。\n\n   ## 允许合并\n\n   当所有的`Review`都达成一致后，且通过持续集成，这个合并请求可被合并。添加`Accept Pull Request`标签并移除`Request Review\n`标签，恭喜你完成了一次代码Review贡献。后续会有项目管理员对代码进行合并。\n\n   > 合并前请务必确认目标分支是`dev`，否则通知代码贡献者修改合并请求。\n   \n   ")])])},i=[];r._withStripped=!0,t.d(n,"a",function(){return r}),t.d(n,"b",function(){return i})},38:function(e,n,t){"use strict";t.r(n);var r=t(39),i=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,function(){return r[e]})}(u);n.default=i.a},39:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,i=t(3),u=(r=i)&&r.__esModule?r:{default:r};n.default={data:function(){return{page:"review"}},components:{"doc-guide":u.default}},e.exports=n.default},629:function(e,n,t){"use strict";var r=u(t(1)),i=u(t(630));function u(e){return e&&e.__esModule?e:{default:e}}new r.default({el:"#root",render:function(e){return e(i.default)}})},630:function(e,n,t){"use strict";t.r(n);var r=t(304),i=t(38);for(var u in i)"default"!==u&&function(e){t.d(n,e,function(){return i[e]})}(u);var l=t(0),s=Object(l.a)(i.default,r.a,r.b,!1,null,null,null);s.options.__file="src/docs/pages/guide/review/index.vue",n.default=s.exports}});