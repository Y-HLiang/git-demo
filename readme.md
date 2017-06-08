

1.生成npm工作环境 npm init , 会生成一个文件 package.json文件，其中就包含了工程的所有信息，包括三方的依赖

2.添加一个gulp的依赖，npm install gulp --save-dev.会在package.json中加入一个依赖。同时生成一个node_modules工具包的文件夹

3.在项目文件路径下创建一个gulpfile.js文件，抽象我们需要做的操作。代码的同步，图片的拷贝。。。