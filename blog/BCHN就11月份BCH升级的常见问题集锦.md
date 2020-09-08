---
layout: layout.html
---

<% set('title', 'BCHN就11月份BCH升级的常见问题集锦') %>
<% set('date', '12 August 2020') %>
<% set('author', 'Bitcoin Cash Node Team') %>


此文是针对BCHN关于2020年11月BCH网络升级相关主题的问答集锦。

我们意识到BCH生态中可能会发生某些新的问题，该文档希望能做出一些修正。 请随时在评论中留下你的问题。

* * *

### 1. 对11月份的提案，BCHN支持谁？

BCHN支持Mark Lundeberg和Jonathan Toomim提出的aserti3-2d（ASERT）难度调整算法。

### 2.你是否认为11月份相当于是“没有升级”？

不，我们不这么认为。我们认为对DAA算法的纠正对比特币现金的生存至关重要。 ASERT提案已针对众多竞争方案进行了评估，其中包括最近宣布的Grasberg提案，并且其表现明显好于其他方案。

### 3. BCHN是否支持创建新的货币，如分叉？

不。我们希望BCH保持统一，在经过充分研究和测试后，选择出一个最佳提案。

### 4. BCHN是否要废除自动重防保护？

“自动重放保护”的目的是避免未升级的节点在计划的升级后引起问题，如在升级时将自己分叉到新的网络。

BCHN有更好的方法来实现相同的目的。首先要确保未升级的节点提前通知操作员，其次要在升级时暂停未升级的节点。通知和关闭更具可操作性，可为操作员节省时间和金钱，避免在空链上进行挖矿或发起意外交易。

### 5.是否有人要求BCHN进行历史漂移校正(historic drift correction)？

不。尽管BCHN与一些BCH矿池，交易所和许多其他企业保持联系，但从未有人要求BCHN添加此功能。

此外，此"功能"导致的出块时间变长，挖矿奖励变少等结果在社区遭到了普遍反对。这种"功能"会对许多用户产生负面影响，损害网络声誉。

* * *

### 相关链接

*   与BCHN联系：

    *   网站：https：//bitcoincashnode.org

    *   开发与支持Slack聊天邀请链接：

        [https://join.slack.com/t/bitcoincashnode/shared_invite/zt-egg3c36d-2cglIrKcbnGpIQFaKFzCWA](https://join.slack.com/t/bitcoincashnode/shared_invite/zt-egg3c36d-2cglIrKcbnGpIQFaKFzCWA)

    *   电报：https://t dot me/bitcoincashnode

    *   IRC通道：在Freenode上加入[#bchnode](/search?q=%23bchnode)（我们通过IRC桥通道在Slack上看到消息）

    *   BCH Node微信QR码：

    *   我们的开发日志Slack：[http://logs.bchnode.org/](http://logs.bchnode.org/)

    *   GitLab上的主要开发资料库：

        [https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node)

    *   通过我们的网站轻松下载链接：

        [https://bitcoincashnode.org/download.html](https://bitcoincashnode.org/download.html)

    *   在Github上的完整发行版：

        [https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases](https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases)

    *   捐赠地址：[https://bitcoincashnode.org/#donate](https://bitcoincashnode.org/#donate)

    *   在Twitter上关注我们：[https://twitter.com/bitcoincashnode](https://twitter.com/bitcoincashnode)
