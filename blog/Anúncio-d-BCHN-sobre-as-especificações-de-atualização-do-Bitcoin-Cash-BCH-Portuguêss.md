---
layout: layout.html
---

<% set('title', 'Anúncio do BCHN sobre as especificações de atualização do Bitcoin Cash (BCH) - Português') %>
<% set('date', '25 March 2020') %>
<% set('author', 'phabulu') %>

( This is a Portuguese translation of the original [English announcement](BCHN-announcement-regarding-Bitcoin-Cash-%28BCH%29-upgrade-specifications) , I'm not part of [Bitcoin Cash Node](https://bitcoincashnode.org/) Team, I'm a community member helping with a translation into my Native Language, all credits belong to: [Bitcoin Cash Node](https://read.cash/@bitcoincashnode/bitcoin-cash-node-2020-plans-for-may-upgrade-and-beyond-11af0b52#looking-toward-the-november-upgrade))

( Esta é uma tradução em português do [anúncio original em inglês](BCHN-announcement-regarding-Bitcoin-Cash-%28BCH%29-upgrade-specifications), não faço parte da equipe do [Bitcoin Cash Node](https://bitcoincashnode.org/), sou membro da comunidade ajudando na tradução para o meu idioma nativo, todos os créditos pertencem a: [Bitcoin Cash Node](https://read.cash/@bitcoincashnode/bitcoin-cash-node-2020-plans-for-may-upgrade-and-beyond-11af0b52#looking-toward-the-november-upgrade))

## [Anúncio do BCHN sobre as especificações de atualização do Bitcoin Cash (BCH) - Português](#anuncio-do-bchn-sobre-as-especificacoes-de-atualizacao-do-bitcoin-cash-bch-portugues)

_25 março de 2020_

Hoje, o mantenedor principal do Bitcoin cash Node deu um passo técnico para resolver uma questão importante relacionada com a necessidade do projeto de uma especificação exata de suas regras de consenso para o upgrade da rede 15 de maio de 2020.

### [Histórico das atualizações e especificações da rede Bitcoin Cash](#historico-das-atualizacoes-e-especificacoes-da-rede-bitcoin-cash)

Desde a sua criação em 2017, o Bitcoin Cash passou por atualizações regulares da rede. Essas atualizações devem ser totalmente especificadas com bastante antecedência, para permitir que todos concordem, depois implementem e testem as alterações necessárias.

Por esse motivo, há um "congelamento de recursos" três meses antes de uma atualização de rede. Nessa data, todas as alterações de regra de consenso para a atualização devem ser completamente especificadas, revisadas e aceitas.

### [O plano de financiamento de infraestrutura e as especificações de maio de 2020](#o-plano-de-financiamento-de-infraestrutura-e-as-especificacoes-de-maio-de-2020)

O congelamento de recursos para a atualização de maio ocorreu em 15 de fevereiro.

_Mais de duas semanas após a data do congelamento_, houve a inclusão da chamada "Proposta de financiamento de infraestrutura" (IFP) - uma mudança de regra de consenso altamente controversa que afeta os incentivos econômicos do Bitcoin Cash. Não apenas esse recurso foi fortemente contestado por muitos na comunidade, como também _não foi aceito por outros clientes que não o Bitcoin ABC_, que parecem tratar a especificação como sua única propriedade.

Embora a comunidade tenha manifestado forte oposição ao IFP, todos os protestos sobre esse recurso indesejado foram ignorados pelos mantenedores do site bitcoincash.org, que aliás é hospedado no mesmo repositório que inclui as especificações de atualização.

A BCHN está comprometida em reduzir o risco de uma divisão da cadeia, fornecendo software de nó que não inclui o IFP. Dado esse tratamento inaceitável da especificação BCH comum, o **Bitcoin Cash Node é forçado a manter sua própria versão** das especificações de atualização para refletir com precisão as regras de consenso de seu software (ausência de IFP é igual a nenhuma alteração no protocolo BCH atual).

### [Localização do nosso repositório de especificações de atualização](#localizacao-do-nosso-repositorio-de-especificacoes-de-atualizacao)

O repositório que reflete as especificações de atualização do protocolo implementadas ou planejadas pelo Bitcoin Cash Node (BCHN) pode ser encontrado em:

*   [https://gitlab.com/bitcoin-cash-node/bchn-sw/bitcoincash-upgrade-specifications.git](https://gitlab.com/bitcoin-cash-node/bchn-sw/bitcoincash-upgrade-specifications.git)

### [Outras observações sobre as especificações de atualização do BCHN](#outras-observacoes-sobre-as-especificacoes-de-atualizacao-do-bchn)

No momento em que este documento foi escrito, as únicas diferenças de especificação no bitcoincash.org eram:

*   remoção de elementos imprecisos: Plano de financiamento de infraestrutura (IFP)
    
*   aumentado do número da versão de especificação de maio de 2020 para 1,0 (não mais DRAFT )

Consulte o [README.md](https://gitlab.com/bitcoin-cash-node/bchn-sw/bitcoincash-upgrade-specifications/-/blob/master/README.md) arquivono repositório acima para obter o status atualizado.

Nenhuma outra alteração na especificação é planejada pelo BCHN para maio de 2020.

A especificação neste repositório não é considerada "prescritiva" para ninguém além do projeto BCHN.

É considerado descritivo e corresponde às atualizações planejadas pelo BCHN, e autoritativo apenas para o nosso projeto até que um bom local possa ser acordado pela maioria dos projetos clientes do BCH para um lar comum de especificações de atualização "delta".

As especificações de atualização devem ser consideradas no contexto da especificação geral do Bitcoin Cash que está sendo desenvolvida (consulte, por exemplo, [https://reference.cash](https://reference.cash)).

### [Planos futuros](#Planos-futuros)

Esperamos que um repositório compartilhado e gerenciado colaborativamente para a especificação do protocolo Bitcoin Cash, incluindo as alterações propostas para as atualizações regulares, possa ser estabelecido em breve.

O mantenedor do Bitcoin Cash Node entrou em contato com os principais desenvolvedores de outros clientes de nó completo do BCH para discutir essa possibilidade.

Cordialmente,_

A equipe do Bitcoin Cash Node.

* * * 
Créditos

*   De imagem: Imagem principal: Foto de [Russ Ward](https://unsplash.com/@rssemfam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) no [Unsplash](https://unsplash.com/s/photos/manual?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
    
*   Bitcoin Cash Node logotipo: [Leandrodimarco](https://read.cash/@Leandrodimarco)