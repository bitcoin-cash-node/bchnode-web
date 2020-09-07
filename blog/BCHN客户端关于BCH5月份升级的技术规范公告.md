---
layout: layout.html
---

<% set('title', 'BCHN客户端关于BCH5月份升级的技术规范公告') %>
<% set('date', '27 March 2020') %>
<% set('author', 'Bitcoin Cash Node Team') %>


在今天的文章中，BCHN客户端的首席维护者会介绍该项目进行2020年5月15号升级的技术规范。

### BCH网络升级的背景介绍和技术规范

自2017年诞生以来，BCH会例行每年两次的硬分叉升级。每次升级前都需要提前定好技术规范，以便社区达成共识，进而执行并进行相关测试。

每次网络升级前三个月都会进行“功能冻结”（在功能冻结日期后，软件在发布前不可再添加新功能）。截止到那一日期，关于升级的一切规则改变都要完全确定下来，进行审核并被社区广泛接受。

### 《基础设施融资计划》和2020年5月份升级技术规范

5月份升级的“功能冻结”截止日期在2月15号。

距离这一截止日期已经过去了两周。这次升级包括一个极具争议的“基础设施融资计划（IFP）”，会影响BCH的经济结构。IFP不仅遭到了社区的广泛反对，也不被Bitcoin ABC之外的其他节点接受。而ABC团队却表现得一意孤行，不顾社区反对。

社区反对IFP的声音此起彼伏，bitcoincash.org网站的维护人员却无视社区的反对。此外，bitcoincash.org网站与IFP技术规范同存储在一个项目库中。

BCNH提供了一种不包含IFP的客户端版本，以试图减少链分裂的风险。BCHN团队能做的是维护其5月份升级的技术规范，向社区精准地展示其软件的共识规则（只要不激活IFP，现有的BCH协议就无需更改）。

### BCHN升级规范库

BCHN客户端5月份升级的技术规范细则如下：

*   [<u>https://gitlab.com/bitcoin-cash-node/bchn-sw/bitcoincash-upgrade-specifications.git</u>](https://gitlab.com/bitcoin-cash-node/bchn-sw/bitcoincash-upgrade-specifications.git)

### 其他注意事项

截止到发文日期，BCHN与bitcoincash.org项目库的不同点有：

*   移除了IFP

*   把2020年5月份升级的规范版本号码提高为1.0 （不再是草案版本）

请查看上述项目库的[<u>README.md</u>](https://gitlab.com/bitcoin-cash-node/bchn-sw/bitcoincash-upgrade-specifications/-/blob/master/README.md)文件来随时跟进项目最新状态。

除以上不同，BCHN不计划对5月份的升级进行其他规范更改。

该项目库中的技术规范仅对BCHN有规范作用。

此文只是描述BCHN为升级所做的技术规范，仅适用于BCHN团队。我们希望这些规范更改能够被大部分的BCH客户端团队意识到。

BCHN的升级规范需要被考虑纳入总BCH规范之中（比如 [<u>https://reference.cash</u>](https://reference.cash)）。

### 未来展望

我们希望能尽快建立起一个共享、协同管理的BCH协议规范。

BCHN客户端维护者正在与其他BCH全节点客户端的首席开发者讨论这一可能性。

BCHN团队敬上！
