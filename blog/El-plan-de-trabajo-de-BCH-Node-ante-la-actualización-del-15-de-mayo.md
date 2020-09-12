---
layout: layout.html
---

<% set('title', 'El plan de trabajo de «BCH Node» ante la actualización del 15 de mayo') %>
<% set('date', '03 March 2020') %>
<% set('author', 'DarthRoison') %>

<figure class="text-center">
    <img src="/static/img/newsroom/2020-03-22/Iy9nk8dcOb1tNhSPc6AbncqoAGA8ABhPuZPgB5W9.png" class="img-fluid rounded">
</figure>

**Traducción de un fragmento del** [**artículo en inglés original**](Bitcoin-Cash-Node-2020-plans-for-May-upgrade-and-beyond) **de** [**bitcoincashnode**](https://read.cash/@bitcoincashnode/)

Desde el lanzamiento del software el 27 de febrero de 2020, el equipo ha establecido un canal eficiente de Integración Continua (CI) y ha comenzado a revisar los [controles de calidad del código](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests/53) existentes para que puedan ser refinados y ajustados sustancialmente a medida que avanza el desarrollo.

El desarrollador líder se propone el uso de herramientas de análisis estático adicionales para reducir el riesgo de defectos de software. Le mantendremos informado sobre los desarrollos a ese respecto en publicaciones posteriores.

Dado que se ha decidido el alcance de la versión de mayo, el equipo de Bitcoin Cash ahora se está centrando en los siguientes elementos:

**<ins>De cara al desarrollo de software</ins>**

*   Asegurarse de que la documentación del usuario del proyecto esté actualizada y sea correcta (ya hemos solucionado varios [problemas](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/issues/24) allí).
    
*   Completar la especificación faltante de la función de finalización automática (también conocida como "puntos de control continuos") introducida por Bitcoin ABC, una _brecha de especificación_ que es relevante para el consenso y que plantea un obstáculo para que la implementación de otros clientes acceda al campo de minería de Bitcoin Cash.
    
*   Poner en marcha un proceso de desarrollo completamente abierto y atractivo para el público y los nuevos desarrolladores, evaluadores y otros profesionales y aficionados que desean ayudar a BCH Node. ¡Creemos en "_no confíes, verifica_ "!
    
*   Identificar las [brechas](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/issues/35) existentes [en las pruebas de software](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/issues/35) , así como las deficiencias de las herramientas y métodos de verificación, y formular planes apropiados para mejorar la garantía de calidad.
    
*   Monitoreo de los proyectos de Bitcoin Core y Bitcoin ABC en busca de [backports](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests/48) que pueda necesitar Bitcoin Cash Node. Tenemos la intención de formalizar más este proceso: en este momento, los backports ocurren a discreción de nuestros desarrolladores senior, y cualquiera puede plantear un problema en nuestro [Gitlab](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/issues) para solicitar backports específicos.
    
*   Configuración de procesos de creación y lanzamiento reproducibles más eficientes.
    
*   Revisando nuestra infraestructura de proyecto (sembradoras, semillas) y buscando configurar una mejor forma de alojamiento de archivos para nuestros [paquetes de lanzamiento](https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases).
    
*   Configuración de la implementación continua de nuestro proyecto a través de la integración de Gitlab/Docker con el fin de configurar pruebas adicionales, externas a Gitlab.

**<ins>Organización y gestión de proyectos</ins>**

*   Establecer nuestro proceso de soporte y contacto.
    
*   Definir nuestro proceso de divulgación responsable.
    
*   Establecer un proceso transparente y responsable para financiar el mantenimiento continuo y el desarrollo de BCH Node. Hasta el momento, hemos creado una [cartera multi-firma (](https://read.cash/@bitcoincashnode/bitcoin-cash-node-2020-plans-for-may-upgrade-and-beyond-11af0b52#bad-link)que requiere de 3 de 5 firmas[) con una dirección para donaciones principal](https://read.cash/@bitcoincashnode/bitcoin-cash-node-2020-plans-for-may-upgrade-and-beyond-11af0b52#bad-link) para la financiación general de las operaciones, incluido el personal, el equipo y la contratación. Apreciamos las donaciones, pero también haremos más anuncios sobre cómo tenemos la intención de participar en actividades de financiación colectiva y, potencialmente, compromisos de patrocinio de desarrollo con la industria.
    
*   Definir funciones adicionales que el proyecto busca establecer, como el enlace profesional con usuarios clave de nuestro software y el compromiso con una base más amplia de usuarios de Bitcoin Cash. Tenemos la intención de responder a los requisitos de todo el ecosistema de Bitcoin Cash.
    
*   Evaluar la cantidad de personal disponible para las tareas planificadas y elaborar un presupuesto apropiado para la próxima recaudación de fondos.
    
*   Ayudar a establecer mejores procesos en todo el ecosistema para que los detalles y prioridades de la [especificación](https://reference.cash/) general de BCH y la hoja de ruta respondan a las necesidades reales del ecosistema y _a la_ investigación _basada en evidencia_ .

**<ins>Propuestas en cuanto a investigación</ins>**

*   Estamos comenzando una evaluación para mejorar el algoritmo de ajuste de dificultad (DAA) con el fin de reducir la variación del tiempo de confirmación del bloque. Ya se ha realizado mucha investigación en este campo. No cambiaremos las reglas de validación de DAA en mayo. Sin embargo, queremos analizar de manera proactiva las posibles mejoras que podrían ser necesarias siempre que Bitcoin Cash tenga un hashrate relativamente bajo en comparación con BTC.
    
*   La implementación de compromisos UTXO / [UtreeXO](https://eprint.iacr.org/2019/611.pdf) como un paso crítico en el área del escalado y para posibilitar una sincronización y una verificación simplificada de pagos (SPV) más rápidas.
    
*   El uso de [árboles de Merklix](https://blog.vermorel.com/journal/2019/1/9/merklix-tree-for-bitcoin.html) para una sincronización más eficiente, especialmente en esquemas cómo los denominados "bloques débiles".
    
*   La evaluación de algoritmos adaptativos de tamaño de bloque bajo varios escenarios. Se planifica como un proyecto de investigación para luego de que se hayan implementado otras mejoras para el escalado.

Planeamos emitir consegos dirigidos a agrupaciones mineras, plataformas de intercambio y otros usuarios de wallets antes de la actualización de Bitcoin Cash en mayo, recomendando ciertos procedimientos operativos, incluidos la migración, para aquellos que han estado usando software Bitcoin ABC hasta ahora y necesitan tomar medidas operativas para garantizar una actualización sin problemas.

* * *

_La imagen usada como portada se atribuye a_ [_Leandrodimarco_](https://read.cash/@Leandrodimarco)
