# changelog

1. 好处
2. 如何安装
3. 如何简单使用
4. 自定义使用


## Change Log 基本介绍
1. Change Log 是发布新版本时，用来说明与上一个版本差异的文档，
2. changlog的自动生成需要依赖固定的格式 commit 提交格式,

Change log生成日志：
![log](/log.png)
## Commit  message 格式
每次提交，Commit message 都包括三个部分：Header，Body 和 Footer。

### Header
Header部分只有一行，包括三个字段：type（必需）、scope（可选）和subject（必需）。

- type用于说明 commit 的类别，只允许使用下面7个标识。

```js
feat：新功能（feature）
fix：修补bug
docs：文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改bug的代码变动）
test：增加测试
chore：构建过程或辅助工具的变动
```
默认只有type为feat和fix，则该 commit 将肯定出现在 Change log 之中

- scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

- subject是 commit 目的的简短描述，不超过50个字符。
### Body 
Body 部分是对本次 commit 的详细描述，内容尽量描述清楚变动动机和内容

### Footer

- 不兼容变动： 如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法
```js
BREAKING CHANGE: isolate scope bindings definition has changed.

    To migrate the code follow the example below:

    Before:

    scope: {
      myAttr: 'attribute',
    }

    After:

    scope: {
      myAttr: '@',
    }

    The removed `inject` wasn't generaly useful for directives so there should be no code using it.

```
- 关闭 Issue： 如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue
```js
Closes #234 #345
```

## 安装
### 一般为了规范格式使用 Commitizen 插件配合
全局安装： (Mac记得在前加sudo )
```js
npm install -g commitizen 
```
在项目目录下运行此命令之后
```js
commitizen init cz-conventional-changelog --save --save-exact
```
安装后在package.json中会添加一行这样的问题
```js
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
```
然后在使用git commit 的时候改为 git cz然后就是提示格式信息

![gt-cz](/git-cz.png)


## 生成Change log
安装
```js
npm i -g conventional-changelog-cli
```
使用命令
```js
conventional-changelog -p angular -i CHANGELOG.md -s -r 0

//最后一个数据 0 是生成所有版本的日志，会先删除在仅增  1是生成当前版本的日志是增量，每次运行一次，在后边新增一次记录

```
为方便使用可以将其放入package.json的scripts字
```js
  "scripts": {
    ...
    "changeLog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0",
  },
```

注： 如果习惯用git commit 提交代码的话，可以使用commitlint 对commit提交信息记性校验