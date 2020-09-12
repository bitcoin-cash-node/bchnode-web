---
layout: layout.html
---

<% set('title', 'Bitcoin Cash Node 2020: planos para atualização de maio e adiante.') %>
<% set('date', '04 March 2020') %>
<% set('author', 'phabulu') %>

( This is a Portuguese translation of the original [English announcement](Bitcoin-Cash-Node-2020-plans-for-May-upgrade-and-beyond) , I'm not part of [Bitcoin Cash Node](https://bitcoincashnode.org/) Team, I'm a community member helping with a translation into my Native Language, all credits belong to: [Bitcoin Cash Node](Bitcoin-Cash-Node-2020-plans-for-May-upgrade-and-beyond#looking-toward-the-november-upgrade))

( Esta é uma tradução em português do [anúncio original em inglês](Bitcoin-Cash-Node-2020-plans-for-May-upgrade-and-beyond), não faço parte da equipe do [Bitcoin Cash Node](https://bitcoincashnode.org/), sou membro da comunidade ajudando na tradução para o meu idioma nativo, todos os créditos pertencem a: [Bitcoin Cash Node](Bitcoin-Cash-Node-2020-plans-for-May-upgrade-and-beyond#looking-toward-the-november-upgrade))


<figure class="text-center">
    <img src="/static/img/newsroom/2020-03-22/Iy9nk8dcOb1tNhSPc6AbncqoAGA8ABhPuZPgB5W9.png" class="img-fluid rounded">
</figure>


Esta é a primeira de uma série de postagens de anúncios do projeto Bitcoin Cash Node que descreverão nossos planos para 2020, tanto no curto prazo (maio) quanto no futuro (novembro).

O Bitcoin Cash Node é destinado ao uso profissional em pools de mineração, Exchanges e outros negócios com infraestrutura de missão crítica baseada no Bitcoin Cash (BCH).

Em março, pretendemos lançar uma série de novos anúncios com informações mais focadas, voltadas especificamente para esses principais grupos de usuários. O seguinte anúncio geral é endereçado a todos os usuários em potencial do Bitcoin Cash Node.

<figure class="text-center">
    <img src="/static/img/newsroom/2020-03-22/hR0vyMyPXVro1ihLTwbG0sKIJm7mol9H6x2wZwr4.png" class="img-fluid rounded">
</figure>

**Próxima atualização do Bitcoin Cash em 15 de maio de 2020**
Para a próxima atualização em 15 de maio de 2020, o Bitcoin Cash Node fornecerá:

_"uma implementação de nó segura e profissional que seguirá de maneira neutra a cadeia mais longa sem contribuir para o risco de uma divisão da cadeia"_

_[\- anúncio de lançamento original do Bitcoin Cash Node, 20 de fevereiro de 2020](https://read.cash/@freetrader/bitcoin-cash-node-003b2381)_
 
_\- [Tradução em português](https://read.cash/@phabulu/bitcoin-cash-node-portuguese-00bee10a)_

Para recapitular, implementamos os recursos `OP_REVERSEBYTES` e SigChecks da atualização da rede Bitcoin Cash, que foram [especificados na data limite de 15 de fevereiro de 2020:](https://github.com/bitcoincashorg/bitcoincash.org/pull/444/commits/98d79b6ad7a23e5aafab1dffd570388400c5e210)

*   Especificação [OP\_REVERSEBYTES](https://github.com/bitcoincashorg/bitcoincash.org/blob/master/spec/2020-05-15-op_reversebytes.md)
    
*   Especificação SigChecks

Nosso node é construído para seguir com segurança a cadeia mais longa durante a atualização, aceitando blocos, independentemente de eles votarem no IFP ou não.

O cliente não inclui nenhuma ativação de regra baseada no BIP9 ou votação semelhante. A proteção de organização continua incluída e configurada com os mesmos valores padrão do cliente ABC.

Pretendemos não fazer mais alterações que exijam consenso para maio, mas nos concentramos em reduzir defeitos e melhorar o desempenho, a estabilidade e a facilidade de uso até então. É provável que lançemos uma versão _secundária opcional_ que ofereça esses aprimoramentos antes de maio.

Geralmente, nos comprometemos a fornecer interfaces estáveis nos principais lançamentos.

### [Preâmbulo: Conhecendo nossa equipe](#preambulo-conhecendo-nossa-equipe)

<figure class="text-center">
    <img src="/static/img/newsroom/2020-03-22/7ML5Y9zeqJiK0BJp4EQQmThngVXQA9wrms16yCl9.jpeg" class="rounded img-fluid">
</figure>

Nossa equipe inclui vários profissionais experientes em Bitcoin, incluindo desenvolvedores de software com muitos anos de experiência, comprometidos em fornecer um software de node C ++ adequado aos ambientes de negócios mais exigentes (mineração, pools, exchanges), mas também pode ser configurado com esforço mínimo de usuários novatos em Bitcoin Cash.

**Nosso projeto solicitou a realização de uma sessão Ask-Me-Anything (AMA - Pergunte me Qualquer Coisa) no popular fórum Reddit / r / btc** no final desta semana, onde nosso [desenvolvedor líder](https://read.cash/@freetrader/) e outros membros da equipe estarão à disposição para responder às suas perguntas sobre o projeto e como nós vemos o futuro do Bitcoin Cash.

### [Nosso plano de trabalho antes da atualização de maio](#nosso-plano-de-trabalho-antes-da-atualizacao-de-maio)

<figure class="text-center">
    <img src="/static/img/newsroom/2020-03-22/G1ExuiWp1uh5X7qK548BYI7kqepJX030IgM5vJfy.jpeg" class="rounded img-fluid">
</figure>


Desde o lançamento do software em 27 de fevereiro de 2020, a equipe configurou um pipeline eficiente de Integração Contínua (CI) e começou a revisar as [verificações de qualidade](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests/53) de código existentes para que possam ser substancialmente refinadas e reforçadas à medida que o desenvolvimento avança.

O desenvolvedor líder está buscando o uso de ferramentas adicionais de análise estática para reduzir o risco de defeitos de software. Manteremos você informado sobre os desenvolvimentos nesse sentido nas postagens subsequentes.

Desde que o escopo do lançamento de maio foi decidido, a equipe do Bitcoin Cash agora está focada nos seguintes itens:

**<ins>Lado do desenvolvimento de software</ins>**

*   Garantir que a documentação do usuário do projeto esteja atualizada e correta (já corrigimos [vários problemas](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/issues/24)).
    
*   Concluindo a especificação ausente do recurso de finalização automática (também conhecido como "checkpoints contínuos- Rolling Checkpoints") introduzido pelo Bitcoin ABC - uma lacuna de especificação relevante para o consenso e que coloca um obstáculo para a implementação de outros clientes acessando a arena de mineração de Bitcoin Cash
    
*   Pôr em prática um processo de desenvolvimento totalmente aberto e convidativo ao público e a novos desenvolvedores, testadores e outros profissionais e entusiastas que desejam ajudar o Bitcoin Cash Node. Acreditamos em "não confie, verifique"!
    
*   Identificar [lacunas existentes nos testes de software](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/issues/35), bem como inadequações das ferramentas e métodos de verificação, e formular planos apropriados para melhorar a garantia da qualidade.
    
*   Monitorando os projetos Bitcoin Core e Bitcoin ABC para [backports](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests/48) que o Bitcoin Cash Node pode precisar. Pretendemos formalizar mais esse processo - no momento, os backports ocorrem a critério de nossos desenvolvedores seniores, e qualquer pessoa pode levantar um problema em nosso [rastreador Gitlab](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/issues) para solicitar backports específicos.
    
*   Configurando processos reprodutíveis de compilação e liberação mais eficientes
    
*   Revisando nossa infraestrutura de projeto (semeadoras, sementes) e analisando a configuração de uma melhor hospedagem de arquivos para nossos [pacotes de lançamento](https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases)
    
*   Configurando a implantação contínua de nosso projeto por meio da integração do Gitlab / Docker com o objetivo de configurar testes adicionais externos ao Gitlab.

##### [Lado da organização / gerenciamento de projetos](#lado-da-organizacao-gerenciamento-de-projetos)

*   Estabelecendo nosso processo de suporte e contato
    
*   Definindo nosso processo de Divulgação Responsável
    
*   Estabelecer um processo responsável e transparente para financiar a manutenção e o desenvolvimento contínuos do Bitcoin Cash Node. Até agora, montamos uma carteira de 3 à 5 [assinaturas múltiplas com um endereço de doação principal](https://read.cash/@bitcoincashnode/bitcoin-cash-node-2020-plans-for-may-upgrade-and-beyond-11af0b52#bad-link) para o financiamento geral das operações, incluindo pessoal, equipamento e contratação. Agradecemos doações, mas também teremos mais anúncios sobre como pretendemos participar de atividades de financiamento coletivo e, potencialmente, compromissos de patrocínio de desenvolvimento com a indústria.
    
*   Definindo outras funções que o projeto procura estabelecer, como contato profissional com os principais usuários do nosso software e envolvimento com uma base maior de usuários do Bitcoin Cash. Pretendemos responder aos requisitos do ecossistema Bitcoin Cash.
    
*   Avaliar a quantidade de pessoal disponível para as tarefas planejadas e elaborar um orçamento apropriado para o próximo evento de arrecadação de fundos.
    
*   Ajude a estabelecer melhores processos em todo o ecossistema, para que os detalhes e prioridades da [especificação e do roteiro comuns do Bitcoin Cash](https://reference.cash/) respondam às necessidades reais do ecossistema e à pesquisa _baseada em evidências_.

### [**Pesquisa proposta**](#pesquisa-proposta)

*   Estamos iniciando uma avaliação para melhorar o algoritmo de ajuste de dificuldade (DAA), a fim de reduzir a variação do tempo de confirmação do bloco. Muita pesquisa já foi feita neste campo. Não alteraremos as regras de validação do DAA em maio. No entanto, queremos analisar proativamente possíveis melhorias que possam ser necessárias, desde que o Bitcoin Cash tenha um hashrate relativamente baixo em comparação com o BTC.
    
*   Compromisso UTXO / [UtreeXO](https://eprint.iacr.org/2019/611.pdf) como uma etapa crítica no dimensionamento e para permitir uma sincronização mais rápida, bem como a verificação simplificada de pagamento (SPV)
    
*   Uso da [árvore Merklix](https://blog.vermorel.com/journal/2019/1/9/merklix-tree-for-bitcoin.html) para sincronização mais eficiente, especialmente em esquemas de blocos fracos.
    
*   A avaliação de algoritmos de tamanho de bloco adaptável em vários cenários é planejada como um projeto de pesquisa após outras melhorias de escala.

Planejamos emitir conselhos para pools, exhanges e outros usuários de carteiras antes da atualização do Bitcoin Cash em maio para recomendar certos procedimentos operacionais, incluindo troca e retorno para aqueles que usam o Bitcoin ABC até agora e precisam tomar medidas operacionais para garantir um bom funcionamento melhoria.

### [Olhando para a atualização de novembro](#olhando-para-a-atualizacao-de-novembro)

<figure class="text-center">
    <img src="/static/img/newsroom/2020-03-22/xoMPmgVh3baq6v4KZU3xcexHSSGC30eoR8EzfswN.jpeg" class="rounded img-fluid">
</figure>

O Bitcoin Cash estabeleceu - através de cinco ciclos de atualização bem-sucedidos - que as atualizações de hard fork são valiosas. Partes da indústria comunicaram o desejo de mudar para uma programação mais ecológica do ciclo de atualização de um ano, que deixa mais espaço para pesquisa e coordenação.

O recurso "proteção de reprodução automática" atualmente ativo na rede nos clientes ABC força outra atualização de software até 15 de novembro de 2020.

Portanto, pretendemos trabalhar em conjunto com todas as partes interessadas para garantir uma atualização bem-sucedida em novembro de 2020.

À medida que os processos de decisão em todo o ecossistema são estabelecidos, talvez seja necessário reavaliar os cronogramas futuros - muitos expressaram que o atual cronograma semestral de atualização cria dificuldades na adoção e no custo operacional.

Já existem várias melhorias de baixa contenção sugeridas para o software cliente. Investigaremos a viabilidade deles em colaboração com outras equipes.

**Consenso relevante (ou quase consenso):**

*   Compromissos de UTXO para sincronização mais rápida de nós de rede recém-ingressados
    
*   Aprimoramentos de script (números inteiros de 64 bits, talvez op\_txinfo)
    
*   Atualização do DAA se os resultados da avaliação indicarem que é útil
    
*   Resolver os limites da cadeia de transações não confirmadas de maneira mais permanente do que a atual colisão de padrões (maio de 2020) por um fator de dois, de 25 para 50.
    
*   Possíveis ajustes no recurso Criança paga pelos pais (Child-Pays-For-Parent CPFP) (relacionados acima)
    
*   Continuidade apoiando pesquisas sobre técnicas de pré-consenso, como Avalanche e Storm, apresentando objetivamente seus pontos fortes e fracos à comunidade.

**Um trabalho não consensual** de que a implementação do cliente Bitcoin Cash Node pode progredir independentemente:

*   Técnicas de propagação de blocos para dimensionamento (Graphene, Xthinner)
    
*   Trabalho duplo à prova de gastos (implementado no Flowee, atualmente sendo portado para o Bitcoin Unlimited)
    
*   Acesso RPC seguro para carteiras SPV (útil, por exemplo, para a Neutrino Wallet falar com nosso software de node)

Em breve, anunciaremos uma iniciativa para se envolver formalmente com os principais usuários e com a maior base de usuários.

Se você tiver alguma dúvida ou achar que omitimos algo importante da nossa lista de planejamento acima, entre em contato com o projeto através de qualquer um dos nossos canais de comunicação ou deixe comentários na seção abaixo.

Obrigado pelo seu apoio!

\- [**Projeto Bitcoin Cash Node**](https://bitcoincashnode.org/)

<figure class="text-center">
    <img src="/static/img/newsroom/2020-03-22/0jiTSuTJmJn1Cb0Sby7QdfrqnQkxIO456FzSjWhd.png" class="rounded img-fluid">
</figure>

Uma versão em texto de marcação desta postagem de anúncio está disponível repositório de anúncios Oficial:

[https://gitlab.com/bitcoin-cash-node/announcements/-/blob/master/20200303\_bitcoin\_cash\_node\_2020\_plans\_for\_may\_upgrade\_and\_beyond.md](https://gitlab.com/bitcoin-cash-node/announcements/-/blob/master/20200303_bitcoin_cash_node_2020_plans_for_may_upgrade_and_beyond.md)

**Créditos de imagem:**

*   Imagem do chumbo e estrutura de arame 'Bitcoin Cash Node': [Leandrodimarco](https://read.cash/@Leandrodimarco)
    
*   homem pulando: Foto de [Karina Carvalho](https://unsplash.com/@karinacarvalho?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) no [Unsplash](https://unsplash.com/s/photos/human?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
    
*   engenheiro de software feminino escrevendo no quadro branco: Foto por [ThisisEngineering RAEng](https://unsplash.com/@thisisengineering?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) em [Unsplash](https://unsplash.com/s/photos/clapper-board?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
    
*   mulher olhando para várias telas: Foto de [Christina @ wocintechchat.com](https://unsplash.com/@wocintechchat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) em [Unsplash](https://unsplash.com/s/photos/software-installation?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)