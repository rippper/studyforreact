1.react安装

如果电脑上安装了node.js那么可以直接在目录中输入cmd打开cmd窗口，输入：

npm install -g create-react-app

在全局环境中创建完create-react-app后，在输入：

create-react-app 项目名称（建议使用英文无空格）

等待安装完成后就可使用编辑工具打开项目文件。

2.react项目文件夹文件介绍

![1571649350686](C:\Users\john\AppData\Roaming\Typora\typora-user-images\1571649350686.png)

node_modules:这个文件夹主要是存储webpack所需node文件依赖。

public:这个文件夹中最主要的是index.html首页，也是整个项目默认打开的页面。

src:这个文件夹中存储这要操作的大部分内容，其中我添加了

components文件夹用来集中存储组件文件。

images文件夹用来集中存储项目中需要的图片文件。

将来还要添加一个page文件夹来存储所需要的静态页面。

在这些文件中最重要的是index.js文件这个文件类似于vue中的main.js文件是所有文件导入的入口。其次是App.js这个文件是react默认设置的一张静态页面。在将来我会根据我上面说的把它和JsxCom.js文件整合入Page文件夹中。

再往下面是serviceWorker.js这个文件是react给后台配置的一个线程文件主要用于缓存页面的一些加载文件，当第二次加载时不需要重复加载。

.gitignore是github上传文件配置文件可选择无视你说选取文件并上传至github降低文件上传体积。

package.json是node.js的安装配置文件，在安装后端依赖时必须有这个文件作为指引，来安装所需的node文件。

3.react页面铺写

首先，react是由js来完成页面编写的而那些js中带有html标签的奇怪语法需要通过reactdom以及babel进行编译。

在创建一张页面之后首先需要引入React以及其中的Component组件代码，以下列代码为例：

![1571733059723](C:\Users\john\AppData\Roaming\Typora\typora-user-images\1571733059723.png)

这就是一个简单的页面，当然你也可以往里面继续添加标签来使整个页面变得更加完整。

在jsx语法的使用中html部分需要中如果需要插入js则需要添加｛｝见js语句阔在里面。同时，平时html中使用class在jsx中被替换为className。

注意：在jsx语法中所有标签都必须要有结束标签，不然会报错，如果是单标签那么可以在单标签末尾添加斜杠<a/>来结束。

4.react组件编写与使用

