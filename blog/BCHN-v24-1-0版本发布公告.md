---
layout: layout.html
---

<% set('title', 'BCHN v24.1.0版本发布公告') %>
<% set('date', '2022年5月30日') %>
<% set('author', 'Bitcoin Cash Node Team') %>

## BCHN v24.1.0版本发布公告

BCHN项目在此宣布其重要版本更新24.1.0。

该版本实施了一些介面的升级，包括TORv3的支持，以及其他除错与性能提升。此介面升级与现有软件完全向后兼容，除了以下几处：

1. 不再接受在RFC4632下无效的netmask。
2. 将`-whitelistrelay` 选项的预设恢复成启用。
3. Mac OSX 最低版本要求提高到 10.14 (Mojave)。

我们建议使用之前发布版本的用户升级到v24.1.0，但使用早于 OSX 10.14 版本的 Mac 用户应暂缓更换，直到作业系统能升级为止。

访问以下网址，查看完整版版本说明：

[https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases/tag/v24.1.0](https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases/tag/v24.1.0)

该链接中有可执行程序和支持平台的源码，你也可以在BCHN的项目网页进行下载：

[https://bitcoincashnode.org](https://bitcoincashnode.org)

我们希望最新版本能带给你好的体验。让我们一起改善BCH。

BCHN团队
