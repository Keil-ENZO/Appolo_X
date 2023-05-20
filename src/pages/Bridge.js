import React from "react";
import SideBar from "../components/SideBar";

const Bridge = () => {
  function toggleMenu() {
    const sommaire = document.querySelector(".sommaire");
    sommaire.style.transform = "translateX(0)";
  }

  return (
    <div>
      <main className="main-guide">
        <SideBar />

        <div className="course">
          <div className="course-header">
            <h2 className="titleCourse">
              Qu'est-ce qu'un bridge (pont) pour cryptomonnaies et comment ça
              fonctionne ?{" "}
            </h2>
            <p>
              Les bridges sont des protocoles connectant deux blockchains, ce
              qui leur permet d'interagir entre elles. Un bridge permet par
              exemple de transférer des stablecoins USDC de la blockchain
              Ethereum vers la blockchain Solana, en toute simplicité. Mais
              qu'est-ce qu'un bridge plus exactement et comment fonctionne t-il
              ? Zoom sur un type de protocole fondamental pour les
              cryptomonnaies et la finance décentralisée (DeFi).
            </p>
          </div>
          <br />
          <br />
          <div className="course-body">
            <h2 id="1">Un bridge entre blockchains, c'est quoi ?</h2>
            <p>
              Les bridges naissent d'un besoin de communication et de mobilité
              des actifs entre les blockchains. Il s'agit de protocoles qui
              connectent les blockchains entre elles.
            </p>
            <br />
            <p>
              Avec l'avènement des blockchains layer 1, nous avons pu apercevoir
              les contours d'un futur multi-chaîne pour l'industrie des
              cryptomonnaies au lieu de l'idée qu'une seule blockchain qui
              trônerait au sommet et serait utilisée par tous.
            </p>
            <br />
            <p>
              Cette prolifération des blockchains de layer 1 et des solutions de
              seconde couche (layer 2), accompagnée d'un nombre croissant
              d'applications décentralisées (Dapps) cross-chain qui forment le
              Web3, ont amené la nécessité d'une infrastructure pour les
              connecter.
            </p>
            <br />
            <p>
              En effet, par défaut, la majorité des blockchains existent dans
              des environnements isolés, possédant leurs propres règles,
              mécanismes de gouvernance, actifs natifs et données qui sont
              incompatibles avec les autres blockchains.
            </p>
            <br />
            <p>
              Il n'existe donc aucune manière native pour elles d'échanger et de
              communiquer entre elles, ce qui peut limiter l'activité et
              l'innovation à cause du manque de connectivité et
              d'interopérabilité avec les autres écosystèmes.
            </p>
            <br />
            <p>
              Les bridges offrent ainsi un moyen de connecter ces blockchains
              isolées. Ils établissent une passerelle entre les réseaux par
              laquelle les smart contracts, les données, les tokens et diverses
              informations peuvent être transférés d'une chaîne à l'autre.
            </p>
            <br />
            <p>
              Concrètement, si nous disposons d'un ETH sur le réseau Ethereum et
              que nous désirons l'utiliser sur le réseau Near, c'est impossible
              de manière native. Il est donc nécessaire de recourir aux bridges
              pour relier les deux réseaux.
            </p>
            <br />
            <br />
            <h3 id="2">Comment fonctionne un bridge ?</h3>
            <br />

            <p>
              Les bridges permettent d'ouvrir un canal de communication à sens
              unique ou double sens entre différentes blockchains. Afin que cela
              fonctionne et que celles-ci soient capables de se faire confiance,
              des acteurs off chain ont la tâche de vérifier les communications.
            </p>
            <br />
            <p>
              Ainsi, basé sur cette méthode de vérification clé pour établir la
              confiance lors des communications, nous pouvons essentiellement
              classifier les bridges en deux catégories :
            </p>
            <br />

            <ul>
              <li>
                -Ainsi, basé sur cette méthode de vérification clé pour établir
                la confiance lors des communications, nous pouvons
                essentiellement classifier les bridges en deux catégories :
              </li>
              <li>
                -Les bridges décentralisés : ceux-ci s'appuient sur un smart
                contract ou un algorithme qui supprime le besoin de recourir à
                un intermédiaire. Ainsi, les utilisateurs n'ont pas besoin de
                faire confiance à une entité en utilisant ce type de bridge. La
                sécurité de type de bridge est ainsi liée à celle du réseau
                sous-jacent. Aussi nommé les trustless bridges (Wormhole de
                Solana, Cosmos IBC, Snow Bridge de Polkadot, etc.).
              </li>
            </ul>
            <br />
            <p>
              Il existe différents types de connexion permis par les bridges :
            </p>
            <br />
            <ul>
              <li>
                -L1-L1 : connecte deux blockchains de layer 1 entre elles comme
                Ethereum et Solana ;
              </li>
              <li>
                -L1-L2 : connecte la chaîne principale d'un réseau avec une
                solution de layer 2 comme Ethereum avec Polygon ;
              </li>
              <li>
                -L2-L2 : connecte deux solutions de layer 2 d'une même
                blockchain, entre elles comme Arbitrum et Optimism pour le
                réseau Ethereum.
              </li>
            </ul>
            <br />
            <p>
              Nous pouvons imaginer les blockchains de layer 1 comme des villes
              avec les bridges L1-L1 jouant le rôle d'autoroutes reliant les
              villes entre elles. Les autres types de bridges (L1-L2 et L2-L2)
              jouent quant à eux le rôle de routes reliant les différents points
              d'intérêts d'une ville.
            </p>
            <br />
            <ul>
              <li>
                -Les bridges transfèrent les actifs d'une chaîne à l'autre de
                plusieurs manières :
              </li>
              <li>
                -Lock et Mint : les actifs de la blockchain d'origine sont
                verrouillés et un équivalent est mint sur la blockchain de
                destination. L'exemple le plus parlant est le bridge Wrapped
                Bitcoin qui verrouille des BTC sur la blockchain Bitcoin et mint
                des WBTC sur Ethereum. Il s'agit d'ailleurs du bridge le plus
                utilisé de l'industrie ;
              </li>
              <li>
                -Burn et Mint : un bridge de ce type brûle les cryptomonnaies de
                la blockchain d'origine et mint un équivalent sur la blockchain
                de destination ;
              </li>
              <li>
                -Atomic Swaps : ces bridges échangent les cryptomonnaies de la
                blockchain d'origine avec les cryptomonnaies de la blockchain de
                destination. Ce type de bridge se fie à des smart contracts qui
                exécutent automatiquement ces échanges, ce qui permet de
                s'émanciper de l'utilisation d'un parti tiers comme avec les
                deux premières méthodes de transfert.
              </li>
            </ul>
            <br />
            <p>
              Prenons l'exemple du bridge Wormhole. Pour passer d'un ETH à son
              équivalent sur le réseau Solana, Wormhole verrouille l'ETH de
              l'utilisateur et mint le token Wrapped Ethereum (WETH) sur Solana.
              Lors de ce procédé, l'utilisateur ne voit donc plus l'ETH sur la
              blockchain Ethereum, celui-ci ayant été remplacé par du WETH sur
              la blockchain Solana.
            </p>
            <br />
            <p>
              Un autre exemple bien connu est le Lightning Network. Le layer 2
              de Bitcoin peut aussi servir de bridge puisqu'il est possible d'y
              créer un canal de paiement qui utilise différentes cryptomonnaies
              : nous pouvons y envoyer un paiement en Bitcoin (BTC) et le
              destinataire peut recevoir l'équivalent en Litecoin (LTC) par le
              biais d'un atomic swap.
            </p>
            <br />
            <br />
            <h3 id="3">En quoi un bridge est-il utile ?</h3>
            <br />
            <p>
              Les bridges permettent de faire des transferts d'informations et
              de cryptomonnaies cross-chain. Au niveau du développement des
              protocoles, les applications décentralisées (dApps) peuvent
              profiter des points forts de différentes blockchains grâce aux
              bridges et ainsi améliorer leurs performances. Tandis que pour
              l'utilisateur, il s'agit d'avoir le choix et de tirer parti des
              avantages de chaque réseau.
            </p>
            <br />
            <p>
              Enfin, l'interopérabilité offerte par les bridges permet aux
              développeurs de différents écosystèmes de collaborer pour
              construire de nouvelles plateformes plus performantes.
            </p>
            <br />
            <p>
              Voyons quelques cas d'utilisation réels pour illustrer
              l'importance des bridges dans la finance décentralisée (DeFi).
              Admettons que nous avons de l'Ether (ETH) sur le réseau Ethereum,
              mais nous trouvons les frais de transaction un peu élevés pour
              effectuer un transfert.
            </p>
            <br />
            <p>
              En utilisant un bridge connectant Ethereum à une solution de
              seconde couche de type Optimistic Rollup ou ZK Rollup, il est
              possible de bénéficier de frais de transactions moins élevés.
            </p>
            <br />
            <p>
              Un autre exemple sur le protocole de lending Aave. Nous y prêtons
              de l'USDC sur le réseau Ethereum, mais nous nous apercevons que le
              taux d'intérêt est plus élevé sur la blockchain Avalanche.
            </p>
            <br />
            <p>
              Nous pouvons ainsi utiliser un bridge pour transférer nos USDC du
              réseau Ethereum à Avalanche et ainsi profiter d'un meilleur taux
              d'intérêt.
            </p>
            <br />
            <p>
              Enfin, et c'est peut être le cas le plus classique, les bridges
              permettent aux utilisateurs d'explorer les écosystèmes d'autres
              blockchains sans pour autant devoir vendre et acheter une autre
              cryptomonnaie. Vous pouvez ainsi transférer vos ETH sur une autre
              blockchain de layer 1 via un bridge pour tester les applications
              natives de cette dernière tout en gardant vos ETH.
            </p>
            <br />
            <h3>Pourquoi les bridges sont-ils autant vulnérables ?</h3>
            <br />
            <p>
              Cela ne vous aura peut-être pas échappé, mais les bridges ont été
              victimes de nombreux hacks ces dernières années.
            </p>
            <br />
            <p>
              Pour être plus précis, les 3 plus gros hacks de l'industrie
              concernent des bridges :
            </p>
            <br />
            <ul>
              <li>
                -Ronin Network (mars 2022) : 635 millions de dollars dérobés ;
              </li>
              <li>
                -Poly Network (août 2021) : 611 millions de dollars dérobés ;
              </li>
              <li>
                -Wormhole (février 2022) : 326 millions de dollars dérobés.
              </li>
            </ul>
            <br />
            <p>
              Le bridge Ronin est un bridge centralisé, tandis que Wormhole et
              Poly Network sont décentralisés. Le problème ne vient donc pas
              forcément du type de bridge, puisque chacun d'entre eux possèdent
              leurs propres défauts.
            </p>
            <br />
            <p>
              Par exemple, le bridge Ronin utilise un portefeuille
              multisignature pour la conservation des cryptomonnaies
              verrouillées par les utilisateurs. Lors de son hack, le bridge
              Ronin possédait 9 validateurs et 5 signatures (55,55 %) étaient
              nécessaires pour approuver les dépôts et retraits.
            </p>
            <br />
            <p>
              4 de ces 9 signatures étaient détenues par l'équipe de Sky Mavis,
              l'entreprise derrière le jeu blockchain Axie Infinity, créant par
              là un point de défaillance que les hackers ont utilisé. Ainsi, ces
              derniers ont réussi à contrôler les 4 signatures de Sky Mavis.
            </p>
            <br />
            <p>
              Il ne leur manquait plus qu'une signature, qu'ils ont pu récupérer
              en prenant le contrôle de l'organisation autonome décentralisée
              (DAO) d'Axie Infinity.
            </p>
            <br />
            <p>
              Ensuite, il ne leur restait plus qu'à dérober les fonds des
              utilisateurs. Sky Mavis s'est rendue compte du hack qu'une semaine
              après, ce qui met également en évidence le manque d'efficacité des
              mécanismes de surveillance d'un bridge centralisé.
            </p>
            <br />
            <p>
              Les bridges décentralisés ne sont pas en reste puisqu'ils peuvent
              être exploités grâce à des bugs ou des vulnérabilités dans leur
              code. Le hack de Wormhole en est un bon exemple. Un bug situé dans
              les smart contracts de Wormhole a permis à un hacker d'exploiter
              le processus de production de tokens WETH et ainsi en minter
              énormément (120 000) sans verrouiller de véritables ETH au
              préalable.
            </p>
            <br />
            <br />
            <h3 id="4">Un certain pessimisme des acteurs de l'industrie</h3>
            <br />
            <p>
              Vitalik Buterin, le célèbre cofondateur d'Ethereum, est très
              pessimiste sur le futur des applications cross-chain.
            </p>
            <br />
            <p>
              Les bridges sont selon lui porteurs de risque pour l'écosystème.
              Si nous transférons 1 000 ETH sur un bridge pour recevoir 1 000
              WETH sur Solana, et que la blockchain Ethereum subit une attaque
              des 51 %, alors l'attaquant pourrait déposer des ETH dans le
              bridge et annuler la transaction une fois que la blockchain Solana
              l'a confirmée. Une telle manipulation ne serait pas possible sans
              bridge.
            </p>
            <br />
            <p>
              Ainsi, le smart contrat Solana-WETH ne serait plus équilibré : il
              y aurait moins d'ETH verrouillés sur Ethereum que de WETH en
              circulation sur Solana. Nos WETH pourraient ne plus rien valoir
              selon le montant dérobé par l'attaquant. Vitalik ajoute à ce sujet
              : « Il est toujours plus sûr de conserver des actifs Ethereum
              natifs sur Ethereum ou des actifs Solana natifs sur Solana plutôt
              que de posséder des actifs Ethereum natifs sur Solana et des
              actifs Solana natifs sur Ethereum ».
            </p>
            <br />
            <p>
              Il fait également remarquer que plus les blockchains sont
              interdépendantes, plus la probabilité d'un risque systémique est
              élevée. Si nous nous dirigeons vers un tel futur, ce risque ne
              fera que de s'accroître.
            </p>
            <br />
            <p>
              Il faut cependant préciser qu'une attaque des 51 % sur la
              blockchain Ethereum est hautement improbable et ce type d'attaque
              est plus susceptible d'arriver sur des blockchains moins robustes
              et moins utilisées. Une telle blockchain peut ainsi mettre en
              péril d'autres blockchains plus robustes à cause des bridges.
            </p>
            <br />
            <p>
              Quoiqu'il en soit, il existe des points sur lesquels nous pouvons
              nous appuyer pour jauger les risques des bridges. Le nombre de
              signatures ainsi que le ratio nécessaire à une quelconque
              approbation de retrait devraient être considérés avec précaution
              pour les bridges centralisés. Des audits de sécurité et mécanismes
              empêchant des retraits inhabituellement importants doivent
              également être mis en place.
            </p>
            <br />
            <br />
            <h3 id="5">Notre avis sur les bridges</h3>
            <br />
            <p>
              Les bridges sont un outil indispensable pour lier deux écosystèmes
              comme Ethereum et Avalanche. Ils offrent de nombreuses
              possibilités, bien que cela puisse se faire au détriment de la
              sécurité.
            </p>
            <br />
            <p>
              Il s'agit de protocoles qui sont, à l'heure de l'écriture de ces
              lignes, plus vulnérables que d'autres pour diverses raisons. Cela
              changera peut-être à l'avenir au vu des récents hacks d'envergures
              qui poussent les développeurs à mettre l'accent sur la sécurité de
              leurs créations.
            </p>
            <br />
            <p>
              Quoiqu'il en soit, pour l'instant il convient d'évaluer le risque
              de l'utilisation d'un bridge et d'agir en conséquence. C'est
              pourquoi il n'est pas très recommandé de transférer l'intégralité
              de ses actifs natifs d'une blockchain vers une autre.
            </p>
            <br />
            <p>
              Les bridges restent cependant des outils formidables pour
              permettre de profiter des avantages de chaque écosystème et pour
              naviguer dans la finance décentralisé et le Web3, avec les
              nombreuses blockchains et solutions de layer 2 qui existent, tout
              en allégeant la pression que subit la blockchain Ethereum.
            </p>
            <br />
            <p>
              Ainsi, les développeurs intègrent des bridges à leurs applications
              décentralisées pour les rendre multi-chaînes et profiter de ces
              avantages sans avoir à choisir un seul et unique écosystème, dans
              le but de construire le Web3 de demain.
            </p>
          </div>
        </div>

        <div className="menu-effect">
          <button className="btneffect" onClick={toggleMenu}>
            {" "}
            <span className="material-symbols-outlined icon">
              arrow_forward_ios
            </span>
          </button>
        </div>
        <div
          className="sommaire-course"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <div className="menu-sommaire">
            <ul>
              <li>
                <h3>Sommaire</h3>
              </li>
              <li>
                <a href="#1" className="partie">
                  Un bridge entre blockchains, c'est quoi ?{" "}
                </a>
              </li>
              <li>
                <a href="#2" className="partie">
                  Comment fonctionne un bridge ?
                </a>
              </li>
              <li>
                <a href="#3" className="partie">
                  En quoi un bridge est-il utile ?{" "}
                </a>
              </li>
              <li>
                <a href="#4" className="partie">
                  Un certain pessimisme des acteurs de l'industrie{" "}
                </a>
              </li>
              <li>
                <a href="#5" className="partie">
                  Notre avis sur les bridges{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Bridge;
