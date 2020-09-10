---
layout: layout.html
---

<% set('title', 'Informe del responsable de mantenimiento de BCHN 15-04-2020') %>
<% set('date', '29 April 2020') %>
<% set('author', 'freetrader') %>


Me gustaría empezar agradeciéndole a toda la gente que apoya a Bitcoin Cash Node (BCHN) y que nos permite comenzar un nuevo capítulo en la evolución del código fuente de Satoshi que heredamos de Bitcoin ABC.

Hoy tengo dos noticias que me alegra mucho poder compartir.

1.  En primer lugar, BCHN ha concluido, en la primera semana de abril, su propuesta de campaña de nodo en Flipstarter, y por lo que he oído, éstas campañas de crowdfunding comenzarán en breve. La propuesta está disponible en [Inglés](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/blob/master/finance/funding/campaigns/2020-q2-flipstarter/pdf/Bitcoin_Cash_Node_Flipstarter_Funding_Proposal_v1_1.pdf) y [Chino](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/blob/master/finance/funding/campaigns/2020-q2-flipstarter/pdf/Bitcoin_Cash_Node_Flipstarter_Funding_Proposal_v1_1_CN.pdf) (gracias a [imaginary_username](https://read.cash/@im_uname/) por la traducción, y a [emergent_reasons](https://read.cash/@emergent_reasons/) por mantenernos a un estándar razonable :)

2.  En segundo lugar, estamos a punto de lanzar un paquete acumulativo de revisiones menor, la versión v0.21.1, que contiene lo que hemos estado trabajando desde nuestro lanzamiento inicial el 27 de febrero. Según lo prometido, estamos cumpliendo con nuestra fecha límite del 15 de Abril, y hemos etiquetado la nueva versión hoy. Además tengo las primeras compilaciones reproducibles correspondientes. Como podréis ver en las [Notas de la versión](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/releases/v0.21.1), contiene muchas mejoras, pero **su instalación sigue siendo opcional**: no hay cambios en el consenso que sean urgentes para la actualización de Mayo. Aún así recomendaría a todos que lo hagan, aunque solo sea por las pequeñas correcciones de errores diversas y las mejoras generales.

En esta nueva edición de mi informe, he agregado una nueva sección: "Problemas sobre los cuales BCHN busca feedback". Más explicaciones sobre esa sección más adelante.

### Aceptación del proyecto

Nuestro proyecto quiere agradecer a [Bitcoin.com](https://bitcoin.com/) por apoyarnos firmemente on-chain. Gracias, las acciones que realmente importan son las que quedan reflejadas en el blockchain.

Felicitaciones a SBI Crypto también: hemos visto que estáis volviendo a minar BCH y mostrando apoyo hacia nosotros. ¡Gracias por seguir dando soporte a BCHN!

Las estadísticas actuales señalando apoyo son 52/1000 de los bloques recientes en [coin.dance](https://cash.coin.dance/blocks) y 5% durante el período de votación 628993 - 631008 (2016 bloques) en [https://bitcoincash.network/voting/.](https://bitcoincash.network/voting/.)

Los números de nuestros nodo de red son estables (55 en el momento que escribo esto según coin.dance).

NOTA: _No es que el número de nodos importen mucho en términos de consenso en el blockchain, pero sería bueno que tuviéramos una participación más visible en esta métrica. Agradezco a todos los que ejecutan un nodo para mostrar su apoyo._

_Anímate a ejecutar tu propio nodo si estás interesado en Bitcoin Cash. Aunque la mayor parte de las personas no necesitan ejecutar nodos completos, por ahora es muy económico y te proporciona una buena manera de aprender sobre el software y adquirir experiencia práctica en caso de que quieras jugar con las características del protocolo. En el futuro, puede que esto sea más difícil si aumentan los requisitos de hardware o de red._

### Resumen Financiero

En el bloque actual 630966, el saldo de la billetera del proyecto es de 143.96420253 BCH, un aumento de 0.72729636 BCH desde el último informe. Gracias a todos los que nos hayan donado.

Solo ha habido un gasto en una transacción desde la última vez:

*   Pago del 3 de abril de 2020 por la traducción al Chino del último informe del responsable de mantenimiento. Gasto total: -0.24095885 BCH.

Tengo la sensación de que algún día miraré hacia atrás con nostalgia viendo la poca actividad financiera de la que hubo que informar en los días iniciales de este proyecto. 😊

#### Panorama del crowdfunding

[Nuestra campaña de Flipstarter](#bad-link) está configurada para transferir sus fondos, suponiendo que se alcance su objetivo, a la dirección de donación multi-signature del proyecto [bitcoincash: prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk](https://blockchair.com/bitcoin-cash/address/prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk). Por supuesto, dado que se basa en un modelo de contratos de garantías similar a Kickstarter, la campaña, que comienza muy pronto y, acorde con la información que tengo durará aproximadamente 4 semanas, o bien será completada totalmente (978 BCH) o devolverá 0 .

Le pido a las personas que deseen donarnos durante la duración de la campaña Flipstarter (Abril - Aayo), que lo hagan _preferentemente a través de Flipstarter_, ya que esto ayuda a nuestro proyecto a alcanzar la meta de financiación que nos permitirá implementar nuestras metas de desarrollo. Compartiré el enlace a nuestra página de la campaña donde se puede donar, tan pronto como se publique (¡no está en nuestras manos!)

### Actualización de las tareas del proyecto

Desde el lanzamiento inicial:

*   [Issues](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/issues): 76 creadas, 39 cerradas, 37 abiertas

*   [Merge Requests](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests): 151 creadas, 130 merged, 15 cerradas (léase: rechazadas o abortadas), 6 abiertas

Desde el último informe del responsable (31-03-2020):

*   Issues: +10 creadas, +12 cerrados, + -2 abiertos

*   Merge Requests: +18 creadas, +17 merged, +3 cerradas, -2 abiertas

Más detalles sobre las tareas:

**Optimización de código:**

*   Mejoras de rendimiento para las llamadas JSON RPC a través de la optimización de Univalue han sido incluidas en la versión 0.21.1.

**Actualizaciones de documentación:**

*   Una gran cantidad de actualizaciones de documentos estarán al fin disponibles en la versión 0.21.1\. Se incluye una lista de _nuevos_ documentos en las notas de la versión, pero la lista completa de documentos mejorados es aún más extensa. Un agradecimiento especial a nuestros colaboradores que han trabajado en mejorar la documentación durante el último mes y medio.

    *   [xversionmessage.md](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/doc/xversionmessage.md): (protocolo) borrador de las especificaciones de xversion / extversion

    *   [ninja_targets.md](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/doc/ninja_targets.md): (desarrollo) describe los objetivos del sistema de compilación

    *   [bchn-gitlab-usage-rules-and-guidelines.md](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/doc/bchn-gitlab-usage-rules-and-guidelines.md): (proceso) reglas para trabajar en BCHN

    *   [release-notes / release-notes-0.21.0.md](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/doc/release-notes/release-notes-0.21.0.md): notas del lanzamiento de la versión anterior

    *   [build-unix-arch.md](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/doc/build-unix-arch.md): (build, refactor) ha sido separado de build-unix.md

    *   [build-unix-deb.md](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/doc/build-unix-deb.md): (build, refactor) ha sido separado de build-unix.md

    *   [build-unix-rpm.md](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/doc/build-unix-rpm.md): (build, refactor) ha sido separado de build-unix.md

**Control de calidad:**

*   En la v0.21.1, Calin Culianu solucionó varios problemas de calidad en el código que se detectaron utilizando el analizador estático PVS-Studio.

*   Arreglamos otras varias advertencias del compilador y algunos problemas de comprobación estática del código Python. Los detalles se pueden encontrar en la sección "Calidad del código" de las notas de la versión para v0.21.1.

**Creación de especificaciones precisas de la actualización de Mayo para nuestro proyecto:**

*   Hasta el momento no se han realizado más cambios en la especificación de la actualización de Mayo. Estoy monitoreando algunas discusiones sobre la función SigChecks y los informes de SigOps / SigChecks a través de la llamada RPC getblocktemplate. Las issues relacionadas son [#42](/search?q=%2342), [#70](/search?q=%2370), [#71](/search?q=%2371), que enlazan con los issues de Github creados en el repositorio de bitcoincash.org.

**Sistema de consulta pública (PCS):**

*   Actualmente sigo ocupado evaluando todo el feedback, debido a las limitaciones de tiempo impuestas por el inicio de la campaña de Flipstarter, otros trabajos urgentes de gestión de proyectos y los preparativos para el lanzamiento de la versión 0.21.1\. Una publicación de resultados solo será viable en las próximas dos semanas.

**Repositorio para la gestión de proyecto de BCHN:**

*   La [sección de datos de la información del equipo](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/tree/master/team) está lentamente tomando forma. Esta información se utiliza para alimentar la página del equipo de nuestro sitio web. Si aún no la has visto, ¡échale un vistazo! Tenemos 9 entradas listadas hasta ahora y animo a todos los contribuyentes del proyecto que aún no se hayan incluido en la lista a que proporcionen un pequeño perfil y una imagen para ser incluidos. Los colaboradores seudónimos son bienvenidos en nuestro proyecto y también en nuestra página de equipo. Las contribuciones a nuestro proyecto son juzgadas por sus méritos técnicos y no por quién las presentó.

*   Los archivos con datos de la campaña Flipstarter de abril de 2020 (versiones en Inglés y Chino de la propuesta y el resumen) se han agregado a nuestra [sección de la campaña](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/tree/master/finance/funding/campaigns/2020-q2-flipstarter). La propuesta es extensa y, en lugar de entrar en mucho detalle en esta publicación, puede que hable de ello en un artículo separado en algún momento, una vez haya arrancado el crowdfunding.

#### Actividades de colaboración entre proyectos en marcha

**Xversion (BU)**

Xversion es un protocolo de mensaje de 'versión' extendido introducido por primera vez por Bitcoin Unlimited. Los participantes de la red pueden utilizarlo para anunciar sus capacidades de protocolo y preferencias entre sí. Esto será muy útil, por ejemplo, al implementar nuevos protocolos de propagación de bloques como Graphene o Xthinner. Bitcoin Unlimited ya ha utilizado este protocolo en el pasado.

Recientemente revisé y acepté [un borrador de una especificación](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/doc/xversionmessage.md) revisada que Greg Griffith envió a nuestro proyecto después de unas conversaciones iniciales. He incluido este borrador de la especificación en nuestro conjunto de documentación 0.21.1 para que pueda haber más ojos revisándolo antes de la implementación. Se prevé provisionalmente cambiar el nombre del mensaje de protocolo que saldrá de esta actividad a extversion para que los nodos existentes que admiten la xversion original puedan volver a su comportamiento anterior.

La integración está siendo rastreada por nuestra parte a través del [Issue # 45 (Port Xversion de BU)](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/issues/45).

La especificación aún puede recibir algunas actualizaciones menores ahora que ya está disponible en el mundo real (también va a subirse a reference.cash). Espero que Greg Griffith de Bitcoin Unlimited me corrija si me equivoco, pero entiendo que en la siguiente fase, BCHN trabajará junto con él para conseguir implementar esa especificación en nuestro software, mientras BU lo esté implementando simultáneamente o ya lo hayan conseguido.

Greg se ha ofrecido amablemente a proporcionar algo de código, y desde el lado de BCHN, estoy deseando poder trabajar junto con él y con cualquier otra persona de Bitcoin Unlimited para garantizar que quede testeado completamente en nuestro lado.

**Xthinner (Jonathan Toomim)**

No hay noticias que reportar en este período.

### **Problemas sobre los cuales BCHN busca feedback**

Sucede que, durante el mantenimiento del software, llegamos a un punto en el que se debe tomar una decisión, pero parece mejor obtener algo de información de algunas partes del ecosistema.

En esta nueva sección, que incluiré siempre que haya algo sobre la mesa, describiré cualquier problema de este tipo que tengamos en el momento.

Servirá como una especie de diálogo de apertura para después obtener feedback en la sección de comentarios. Trataré de explicar qué problema estamos enfrentando, a quién estamos tratando de escuchar sobre ese tema, cuáles son las opciones que actualmente el proyecto tiene o ve viables al respecto, y qué beneficios y desventajas percibimos en ellas. Después mantendré mis oídos abiertos y escucharé vuestros consejos. En nuestro rastreador del repositorio de issues, los elementos que requieran feedback del ecosistema para tomar decisiones se identifican con una etiqueta especial ("HODLGANG").

Aunque a veces mis solicitudes de comentarios pueden estar dirigidas a grupos de usuarios específicos, cualquier persona es bienvenida en cualquier momento para darme su opinión. Tomaré las respuestas a estas solicitudes y las introduciré directamente en las issues abiertas (cuando corresponda) o en nuestro Sistema de Comunicación Pública (PCS), que es un repositorio público de los comentarios que hemos recibido de la comunidad. Cada vez más, aunque no exclusivamente, utilizaré este sistema para registrar feedback y tratar de convertirlo en algo capaz de guiar las decisiones de nuestro proyecto.

#### Código "similar a BIP9" de ABC - ¿mantenerlo? / ¿eliminarlo? / ¿actualizarlo?

Tenemos una solicitud de merge en nuestro sistema: [número 62, titulada "Eliminar el soporte a BIP9"](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests/62).

BIP9 es un mecanismo de señalización de blockchain que se ha usado históricamente para activar soft-forks en Bitcoin BTC.

Se eliminó de Bitcoin ABC durante un período de tiempo entre julio de 2018 y junio de 2019, ya que el uso de dicha señalización para la activación de las actualizaciones se consideró insegura, y que BCH estaba en una posición de hashpower relativamente baja en comparación con el SHA256 global.

Sin embargo, en febrero de 2020, Bitcoin ABC lo reintrodujo de manera modificada, reduciendo el umbral de activación del habitual 95% descrito en BIP9 a solo 66%, en preparación para el controvertido "Plan de Financiamiento de Infraestructura" (IFP).

Bitcoin Cash Node eliminó la activación de soft-fork del IFP y la emisión de señales relacionadas, pero hasta ahora no hemos eliminado por completo este mecanismo similar a BIP9.

No es sorprendente que haya varias opiniones sobre si hacerlo o no, lo que presenta varias opciones a seguir.

1.  Opción 1: mantener el código _"similar a BIP9"_. El beneficio aquí es que requiere la menor cantidad de esfuerzo por ahora, y podría usarse para volver a la conformidad con BIP9 o extenderla a la conformidad con BIP135 (ambas requerirían un poco de trabajo). Tal como está, esta implementación "similar a BIP9" no se ajusta adecuadamente a ningún BIP (no es exactamente BIP9, y no es tan capaz como el, más general, BIP135 que podría haberse configurado limpiamente para manejar lo que ABC quería obtener para el IFP).  
    La temeridad de desencadenar cambios consensuados basados en el 66% del ~ 1,5-3% del hashpower SHA256 total se ha discutido ampliamente y hace que este tipo de BIP9 no sea adecuado ni en este momento, ni en el futuro previsible.

2.  Opción 2: eliminar el código "similar a BIP9". Esto supondría muy poco esfuerzo: ya está implementado en la solicitud de merge citada, aunque es posible que sea necesario modificarlo para ajustarse al estado actual del software. La desventaja es que si queremos o necesitamos seguir alguna activación de reglas que se base en este tipo de señalización, tendremos que agregarlo nuevamente.

    Sin embargo, diría que esto es muy poco probable y bastante manejable incluso si ocurriera (hay bastante poco código y es bastante fácil quitarlo o volverlo a añadir).

    Aunque mantener el código de ABC en su forma actual da como resultado que BCHN tenga algo que no se usa activamente, y del cuál no existe ningún requisito para utilizarlo para el IFP o cualquier otra actualización planificada.

    Mantener código que no se requiere es malo desde el punto de vista de la calidad del código y del mantenimiento. Tal código puede conducir a errores de programación (aunque el riesgo es algo bajo en este caso, pero aún así). Infla no solo el código fuente sino también los ejecutables resultantes, aún si es de manera mínima. Personalmente, estoy muy a favor de eliminar este código. Creo que _si_ necesitamos un mecanismo de activación como ese, no será a corto plazo (los próximos 6 meses).

    Me sentiría cómodo pensando en utilizar tal mecanismo si BCH tuviera una supermayoría de hashpower SHA256\. Si eso puede llegar a suceder y cuándo es algo que nadie puede decir con certeza. ¿Tiene sentido mantener ese código durante un tiempo tan indefinido? Diría que es mucho más seguro eliminarlo ahora y volver a introducir lo que tenga consenso más adelante, ¡porque estamos hablando de un mecanismo utilizado principalmente para activar los cambios de consenso!

3.  Opción 3: actualizarlo a BIP9\. Esto parece posible con poco esfuerzo, pero el beneficio aún no está claro. BIP9 es muy rígido en términos de sus requisitos de umbral e incluso en situaciones de hashpower mayoritario, solo se necesita algo más del 5% del hashpower relativo de la moneda para vetar un cambio de consenso.

4.  Opción 4: actualizarlo a BIP135 completo y configurarlo de la misma manera que se configuró el "similar a BIP9" de ABC. Esto es ciertamente más esfuerzo, ya que BIP135 es más complejo que BIP9\. Sin embargo, funcionan básicamente de la misma manera, y BIP135 no es más seguro en la situación actual de hashpower. Así que, nuevamente, no hay un beneficio claro, excepto poder reclamar cierta conformidad y obtener cierta flexibilidad para el futuro.

He pospuesto tomar una decisión para 0.21.1, porque no encontré una buena manera de recopilar feedback sobre esta pregunta de más usuarios e incluso usuarios potenciales. Espero que plantear tales preguntas en los informes me ayudará a obtener más opiniones sobre las cuales tomar decisiones, para que no tengamos que repetir el ciclo de sacar las cosas, ponerlas de nuevo, sacarlas de nuevo, etc.

#### Compilaciones Gitian en Fedora: ¿mantener o no mantener?

En el [issue #76](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/issues/76), planteado hoy, se observó que la documentación para las compilaciones de Gitian (compilaciones reproducibles) no funciona en la distribución Fedora de Linux.

No veo mucho beneficio en mantener las instrucciones de Fedora para compilaciones reproducibles si no son mantenidas adecuadamente. Pero no me gusta tirar la documentación sin preguntar primero si alguien está interesado en mantener esta parte específicamente. Si la gente lo está utilizando, por favor hacérmelo saber, me gustaría saber _cómo_ se hacen actualmente las compilaciones de gitian en Fedora y ver si vuestros comentarios pueden poner el documento al día. Aún mejor sería encontrar a alguien que esté dispuesto a invertir un poco de esfuerzo en mantener este documento siempre y cuando usen gitian en Fedora.

Mantenerlo nosotros mismos no es tan fácil, necesitamos encontrar a alguien con un sistema host que ejecute Fedora en el que puedan experimentar para corregir la documentación, si eso es siquiera posible (poco probable pero en teoría podría no mantenerse debido a una limitación registrada en Fedora). Parece que deberíamos dedicar esfuerzos a otras cosas, ya que el soporte de Debian para gitian ya hace posible las compilaciones reproducibles en una variedad de derivados de Debian.

Próximamente

En los próximos días lanzaremos nuestra actualización menor 0.21.1\. Estoy muy emocionado de poder finalmente sacar esto al mundo. Llevó algo más de tiempo de lo que querría, pero esto es algo que sucede a veces cuando todos están participando en una variedad de proyectos a la vez.

Después del lanzamiento, agregaremos puntos de referencia para las mejoras de JSON para poder medirlos con tamaños de bloque más grandes.

También podré dedicar más tiempo a ponerme al día con los backports y establecer planes vitales de gestión de proyectos, listas de verificación, mecanismos de CI/calidad y comenzar a trabajar en cerrar la brecha de especificaciones de los 'puntos de control continuos'.

Luego, por supuesto, también está nuestra campaña de crowdfunding de nodo que todos esperamos ansiosamente. No tengo más que gratitud para el trabajador equipo de Flipstarter que está haciendo todo esto posible.

Hablar de nuestra propuesta de flipstarter podría llenar una publicación propia. Espero que leer la propuesta responda a la mayoría de las preguntas, pero si te queda alguna, intentaré responderlas en los comentarios.

#### Cómo ponerse en contacto con nuestro proyecto: enlaces y recursos

*   Sitio web: [bitcoincashnode.org](https://bitcoincashnode.org)

*   Enlace de invitación al Slack de desarrollo y soporte (caduca el 8 de Mayo):

    [https://join.slack.com/t/bitcoincashnode/shared_invite/zt-dpfqi4o2-kw05DhMfYVEOWAiOg_z3Yg](https://join.slack.com/t/bitcoincashnode/shared_invite/zt-dpfqi4o2-kw05DhMfYVEOWAiOg_z3Yg)

*   Telegram: https://t.me/bitcoincashnode (hay un canal puente a nuestro Slack)

*   Canal IRC: Únete a [#bchnode](/search?q=%23bchnode) en Freenode (vemos los mensajes en nuestro Slack a través de un canal puente IRC)

*   Logs de nuestro Slack de desarrollo: [http://logs.bchnode.org/](http://logs.bchnode.org/)

*   Repositorio principal de desarrollo en GitLab:

    [https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node)

*   Enlace de descarga fácil a través de nuestro sitio web:

    [https://bitcoincashnode.org/download.html](https://bitcoincashnode.org/download.html)

*   Versiones completas en Github:

    [https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases](https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases)

*   Dirección de donación: [https://bitcoincashnode.org/#donate](https://bitcoincashnode.org/#donate)

*   Síguenos en Twitter: [https://twitter.com/bitcoincashnode](https://twitter.com/bitcoincashnode)
