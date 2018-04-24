<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 开发环境

    在开始编写MorningUI的代码前，首先需要安装开发环境。

    为了帮助开发者快速开始，我们在项目工程化上倡导开箱即用。

    ### 推荐MAC OS

    我们强烈推荐开发者使用MAC OS来进行开发，以下文档内容仅针对MAC OS。

    如果你是一名Windows开发者，非常抱歉，我们目前暂时没有维护Windows下的开发环境。你可以先按照下面流程进行，如果出现问题请联系我们。

    ### 获取源码

    MorningUI的源码托管在github上：

    ```shell
    $ git clone https://github.com/Morning-UI/morning-ui.git
    ```

    ### 本地安装

    由于MorningUI依赖一些npm包，源码获取后需要安装(请保证Node.js版本8.5.0+)：

    ```shell
    $ cd morning
    $ export ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"
    $ npm install --registry=https://registry.npm.taobao.org
    ```

    上面的脚本将部分源切换成了国内，这将有助于你快速安装依赖。

    ### 检测安装

    运行测试来校验安装是否完成：

    ```shell
    $ npm run test
    ```

    如果所有测试通过，恭喜你完成了MorningUI的开发环境安装。
    
    ### 开始开发

    首先执行`npm run dev`，这可能需要一点时间。当`http://localhost:8080/`可以访问时，恭喜你开发环境运行起来了。

    然后修改一些代码，当你保存时，webpack会自动重新构建代码，并刷新浏览器。

    ### 更多

    到目前为止你已经成功安装并运行了MorningUI开发环境。下面还有一些进阶的内容，可以帮助你更好的开发MorningUI。

    #### 项目结构

    ```
    morning
    ├─ .babelrc                          // babel配置文件
    ├─ .eslintignore                       // eslint检测忽略文件
    ├─ .eslintrc.yml                       // eslint配置
    ├─ .gitignore                         // git提交忽略文件
    ├─ package-lock.json                 // npm包lock文件
    ├─ package.json                      // npm配置文件
    ├─ README.md                        // 介绍文件
    ├─ build/                           // 构建脚本
    ├─ dist/                            // UI库成品文件
    ├─ docs/                            // 文档
    ├─ report/                          // 测试报告
    ├─ src/                             // 源码
    │   ├─ docs/                        // 文档源码
    │   └─ lib/                         // UI库源码
    └─ test/                            // 测试
        ├─ helper                       // 测试辅助文件
        ├─ unit                         // 单元测试
        └─ e2e                          // 端点测试
    ```

    #### 命令行工具

    MorningUI为开发者准备了一套命令来帮助快速开发：

    ```shell
    $ npm run build                                 # 构建项目(库文件及文档)
    $ npm run dev                                   # 运行开发环境(运行后通过http://localhost:8080/访问)
    $ npm run build-profile                         # 输出webpack构建性能统计文件
    $ npm run lint                                  # 通过ESLint及StyleLint检查代码
    $ npm run js-lint                               # 通过ESLint检查代码
    $ npm run js-lint-fix                           # 通过ESLint自动修复代码中的问题
    $ npm run css-lint                              # 通过StyleLint检查代码
    $ npm run test                                  # 运行所有测试
    $ npm run test-watch                            # 当文件变化时执行测试
    $ npm run test-snapshot                         # 为所有测试进行快照
    $ npm run test-report                           # 生成测试报告
    $ npm run unit                                  # 运行单元测试
    $ npm run ci-unit                               # 运行单元测试(持续集成时使用，限制了进程数)
    $ npm run unit-watch                            # 当文件变化时执行单元测试
    $ npm run unit-snapshot                         # 为单元测试进行快照
    $ npm run e2e                                   # 运行端点测试
    $ npm run ci-e2e                                # 运行端点测试(持续集成时使用，限制了进程数)
    $ npm run e2e-watch                             # 当文件变化时执行端点测试
    $ npm run e2e-snapshot                          # 为端点测试进行快照
    $ npm run cover                                 # 检查测试覆盖
    $ npm run ci-cover                              # 检查测试覆盖(持续集成时使用，限制了进程数)
    $ npm run cover-report                          # 生成测试覆盖报告
    $ npm run codecov-report                        # 生成codecov测试覆盖报告
    $ npm run update-log-report                     # 根据Git Log生成组件更新日志
    $ npm run report                                # 生成所有测试报告
    $ npm run commit                                # 提交处理，包含：构建项目、生成测试报告
    $ npm run doc                                   # 启动文档服务，可通过`--port`参数设置服务监听端口
    ```
    
    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'devenv'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
