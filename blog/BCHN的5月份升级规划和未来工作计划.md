---
layout: layout.html
---

<% set('title', 'BCHN的5月份升级规划和未来工作计划') %>
<% set('date', '18 March 2020') %>
<% set('author', 'Bitcoin Cash Node Team') %>

Bitcoin Cash Node （BCHN）项目接下来将发布一系列文章，概述我们为BCH 2020年5月份升级和11月份升级所做的准备工作。

BCHN致力于为矿池、交易所和基于BCH有重要业务的公司提供专业服务。

针对以上关键用户群体，我们会在3月份发布一系列文章提供更多信息。今天发布的这篇文章适应于所有BCHN的潜在用户。

* * *

### BCH将迎来2020年5月份的硬分叉升级

<figure class="text-center">
    <img src="/static/img/newsroom/2020-03-22/hR0vyMyPXVro1ihLTwbG0sKIJm7mol9H6x2wZwr4.png" class="img-fluid rounded">
</figure>

对即将到来的5月15号的升级，BCHN将提供：

> “安全且专业的节点客户端部署，保持中立的态度，遵循最长链来避免增加链分叉的风险。”  
> ——写于2020年2月20号[<u>BCHN节点的发布公告</u>](https://read.cash/@freetrader/bitcoin-cash-node-003b2381)

总之，我们在[<u>2020年2月15号BCH网络升级截止日期前</u>](https://github.com/bitcoincashorg/bitcoincash.org/pull/444/commits/98d79b6ad7a23e5aafab1dffd570388400c5e210)部署了OP_REVERSEBYTES操作码和SigCheck功能。

*   [<u>OP_REVERSEBYTES</u>](https://github.com/bitcoincashorg/bitcoincash.org/blob/master/spec/2020-05-15-op_reversebytes.md) 规范

*   [<u>SigChecks</u>](https://github.com/bitcoincashorg/bitcoincash.org/blob/master/spec/2020-05-15-sigchecks.md) 规范

BCHN旨在在升级中遵循最长链，无论区块支不支持IFP都接受这些区块。

BCHN客户端没有任何基于BIP9的规则激活或类似的投票。BCHN保留了重放保护，并跟ABC客户端有同样的默认值。

对于5月份的升级，我们不希望再进行任何需要达成共识的改变，而是要重点减少软件缺点，提高性能、稳定性和用户体验。我们应该会在5月份之前发布一个小版本升级（非强制性）来加强这些特征。

总之，我们致力于为不同版本间提供稳定的接口。

### 序言：团队介绍

<figure class="text-center">
    <img src="/static/img/newsroom/2020-03-22/7ML5Y9zeqJiK0BJp4EQQmThngVXQA9wrms16yCl9.jpeg" class="rounded img-fluid">
</figure>

我们团队中有不少经验丰富的比特币软件开发者。他们使用C++语言让软件能够适应于最复杂，最高要求的商业环境（挖矿、矿池和交易所）。同时，对BCH新手而言也操作简单。

BCHN已提出申请，将在本周在r/btc论坛上举办AMA活动。届时我们的[<u>首席开发者</u>](https://read.cash/@freetrader/)和其他团队成员会亲自回答社区的问题，表达我们对BCH的看法。

### 5月份升级前的工作计划

自2020年2月27号软件上线后，BCHN团队设立了一种高效的持续集成，审核现有的[<u>代码质量检测</u>](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests/53)，确保代码能够随着开发工作的进展进行持续性的修改。

我们的首席开发者正在寻求借助其他静态分析工具来减少软件缺陷。我们会在今后的文章中告知各位相关的开发工作。

5月份升级的技术范畴已经被确定了。BCHN团队的主要工作如下：

### 软件开发

*   更新项目用户文档，确保文档准确无误 （一些[<u>问题</u>](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/issues/24)已经得到了修改）。

*   完善10区块不可逆功能的规范，比如“滚动检查点”等ABC引入的技术，却没有添加到BCH规范中。涉及到共识相关的规范缺失会对其他客户端接入BCH挖矿造成阻碍。

*   打造一种完全开放的开发流程，能够吸引新开发者、测试人员、其他专业人员和业余爱好者为BCHN做贡献。我们的信条是“不要信任，要验证！”

*   识别现有[<u>软件测试之间的差异</u>](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/issues/35)，现有验证工具和方法的不足，制定恰当的计划来提高软件质量。

*   检测Bitcoin Core和Bitcoin ABC客户端，以防BCHN需要[<u>向后移植</u>](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests/48)。我们希望能将此流程规范化。目前是否需要向后移植需要通过我们高级开发者的谨慎讨论。任何人都可以在 [<u>Gitlab tracker</u>](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/issues)上提出向后移植请求。

*   建立更高效、可复制的创建和发布流程。

*   修改项目基础设施（seeders, seeds），完善[<u>发布软件包</u>](https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases)。

*   建立项目持续部署，将Gitlab / Docker与Gitlab外的其他测试整合起来。

### 组织 / 项目管理工作

*   建立支持和联系流程

*   确立“漏洞披露”（Responsible Disclosure）流程

*   建立一套可追究责任的、公开透明的流程，来资助BCHN的维护和开发工作。目前我们创建了一个[<u>多签钱包</u>](https://bitcoincashnode.org/)（3/5）来接收一般性的运营捐赠，如人员雇佣、设备采购和外包项目。感谢大家的捐赠，但我们也有计划参加众筹活动，也希望有企业能赞助我们的开发工作。

*   确立更多项目需要的角色，如专业的联络员来对接BCHN的核心用户和广泛的BCH社区用户。我们希望能对BCH生态做出及时反馈。

*   评估完成规划的任务需要的人员支持。拟定进行募资活动需要的预算。

*   帮助建立生态范围内的信息公示流程，实现通用的[<u>BCH规范</u>](https://reference.cash/)详情、优先级和开发路线能代表真实的社区诉求。

### 研究工作

*   我们正在评估如何改善难度调整算法（DAA）来减少区块确认时间的差异。社区在这方面已经进行了大量的调研工作。我们不会在此次的5月份升级中更改DAA规则。但是，只要BCH对BTC的算力占比相对较低，我们就希望能主动在DAA算法上进行一些改进。

*   UTXO/[<u>UtreeXO</u>](https://eprint.iacr.org/2019/611.pdf) 对扩容、更快的同步和简单支付验证都十分重要 （SPV）。

*   [<u>Merklix</u>](https://blog.vermorel.com/journal/2019/1/9/merklix-tree-for-bitcoin.html)树能实现更高效的同步，尤其适应于弱区块。

*   在其他扩容改进工作完成后，我们会进行多种场景下区块上限自适应算法的研究工作。

我们在5月份升级前会为矿池、交易所、钱包用户提出相关建议，为使用Bitcoin ABC客户端的用户推荐切换操作程序，确保升级能顺利完成。

### 关于11月份的升级

<figure class="text-center">
    <img src="/static/img/newsroom/2020-03-22/xoMPmgVh3baq6v4KZU3xcexHSSGC30eoR8EzfswN.jpeg" class="rounded img-fluid">
</figure>

BCH迄今已经进行了5次硬分叉升级。有些业界成员希望能把升级改为一年一次，这样可以有更多的时间和精力来展开研究和协调工作。

目前ABC客户端上的“自动重放保护”功能迫使我们不得不在11月15号再次升级。

因此，我们愿与各方共同推动11月份升级的顺利进行。

在我们建立了更广泛咨询生态系统的决策过程后，今后的待办事宜或许需要重新评估。很多人认为半年一次的升级加大了运营成本和采用成本。

以下是不会引起大量争议的软件改动。我们会与其他团队合作研究其可行性。

**共识相关层面**：

*   UTXO commitments（UC机制）来更快速同步新加入的网络节点

*   脚本改善(64字节整数，可能执行操作码 op_txinfo)

*   DAA升级，前提是评估显示该功能有用

*   为未确认交易限制提供长期解决方案，而非像5月份升级只是把25提升到了50。

*   对CPFP算法进行可能的调整

*   继续研究预共识技术Avalanche和Storm。向社区如实汇报相应的优缺点。

**以下是BCHN客户端可独立完成，不涉及共识的工作：**

*   用于扩容的区块链广播技术（Graphene, Xthinner）

*   双花确认工作（Flowee上实施过，目前转移到了BU上）

*   SPV钱包的安全RPC接入 （Neutrino钱包与BCHN沟通过这个问题）

我们将在不久后发起一项提案，用一种更正式的方式来沟通BCHN的核心用户和更广泛的用户群体。

如有疑问，或对我们的工作规划有任何意见，欢迎通过任一沟通渠道联系我们，或者在文章下面留言。

感谢大家的支持！

— BCHN团队敬上
