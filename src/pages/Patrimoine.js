import React from "react";
import SideBar from "../components/SideBar";

const Patrimoine = () => {
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
              Cryptomonnaies : comment bien transmettre son patrimoine numérique
              à ses héritiers ?{" "}
            </h2>
            <p>
              Bien qu'il puisse être perçu comme risqué et difficile d'investir
              dans les cryptomonnaies, la transmission de son portefeuille
              numérique à ses ayants droit peut être d'autant plus complexe.
              Comment bien transmettre son patrimoine numérique à ses héritiers
              ? Examinons diverses solutions proposées par la blockchain et les
              avantages apportés par cette dernière au regard des instruments
              plus classiques de transmission.
            </p>
          </div>
          <br />
          <br />
          <div className="course-body">
            <h2 id="1">
              Conciliation possible entre auto-souveraineté de ses crypto-actifs
              et leur transmission successorale ?
            </h2>
            <p>
              L’adage « not your keys, not your coins » cumulé à la règle de
              l'auto-souveraineté ou souveraineté personnelle, à savoir le fait
              de disposer de la pleine propriété et responsabilité de ses fonds
              par la connaissance exclusive de ses « clés privées », désignent
              deux principes essentiels dans l’écosystème des cryptomonnaies.
            </p>
            <br />
            <p>
              Les investisseurs doivent en effet se fier à un réseau
              décentralisé constitué d’une blockchain plutôt qu'à un organe
              central lequel est connu pour dévaluer les actifs des autres.
            </p>
            <br />
            <p>
              Afin de garantir la possession souveraine de son patrimoine
              numérique, cela requiert dans le chef de son auteur de garder
              cette information secrète, même de ses proches.
            </p>
            <br />
            <p>
              L’autonomie permise par ladite auto-souveraineté peut toutefois
              présenter une importante lacune, souvent insoupçonnée :
              l'héritage. Dans un tel contexte, comment en effet s’assurer de
              transmettre ses crypto-actifs de manière appropriée et à temps à
              ses héritiers ?
            </p>
            <br />
            <p>
              Autrement dit, la problématique principale consiste à déterminer
              le meilleur moyen de transmettre ses clés privées « après notre
              mort », sans pour autant les révéler « avant » ou comment être
              certain qu’elles ne seront pas volées, égarées ou inaccessibles de
              notre vivant ?
            </p>
            <br />
            <p>
              Faut-il en effet encore rappeler qu’en déposant leurs
              cryptomonnaies sur un exchange centralisé ou CEX (telle que
              Binance par exemple), la majorité des investisseurs semble perdre
              de vue qu’ils n'ont plus le contrôle de leurs clés privées ?
              Devant un tel constat, il appartiendra à l’investisseur crypto
              qu’il prenne, de son vivant, des mesures adaptées pour transmettre
              à sa mort les identifiants de son compte.
            </p>
            <br />
            <p>
              Ces questions, en apparence anodines, sont pourtant fondamentales
              sachant qu’à ce jour il est estimé que près de 6 millions de BTC
              sont perdus à jamais et se trouvent dorénavant dans des wallets
              inaccessibles. Nous ignorons ainsi combien de ces bitcoins
              appartiennent à des HODLers qui sont décédés sans avoir songé à
              partager l'accès à leurs portefeuilles avec autrui, que ce soit
              sous prétexte qu’ils s’en occuperont plus tard ou qu’ils se
              sépareront de leurs bitcoins avant de mourir, voire qu’ils vivront
              éternellement.
            </p>
            <br />
            <p>
              À titre d’exemple, bien qu’il ne nous sera jamais possible de
              savoir exactement combien de BTC le créateur du Bitcoin, Satoshi
              Nakamoto, a pu extraire, l’estimation la plus communément admise
              est qu’il détiendrait une richesse d’environ 1,1 million de BTC,
              fortune actuellement inatteignable pour ce même motif : personne
              d'autre n'y a accès.
            </p>
            <br />
            <p>
              Que dire par ailleurs de Matthew Mellon, un célèbre banquier de 54
              ans, décédé soudainement en 2018 laissant derrière lui un
              portefeuille non échu à ses héritiers, estimé à 500 millions de
              dollars de XRP (fructifié au départ d'un capital d’un million de
              dollars qui rapidement fut transformé en un milliard de dollars) ?
            </p>
            <br />
            <p>
              Par ailleurs, si 4 % de la population mondiale posséderait
              désormais des cryptomonnaies selon un rapport de Triple A, ce taux
              est porté à 6% pour les Français selon une étude de la Banque
              centrale européenne (BCE) publiée en mai 2022. Ce dernier chiffre
              serait même de 9,4 %, d’après une étude pilotée par KPMG rapportée
              par l'Association pour le développement des actifs numériques
              (Adan).
            </p>
            <br />
            <p>
              Fait intéressant et interpellant, une étude réalisée en 2020 par
              le Crenation Institute nous révèle que de nos jours près de 90 %
              des détenteurs de cryptomonnaies s'inquiètent de leurs actifs et
              de leur sort à leur décès. En dépit de ces inquiétudes, les
              possesseurs de cryptomonnaies sont presque quatre fois moins
              susceptibles de recourir à un testament pour transmettre leur
              héritage numérique que les investisseurs ne possédant pas de
              cryptos.
            </p>
            <br />
            <br />
            <h2 id="2">
              Outils de planification successorale traditionnels et ceux issus
              de la blockchain
            </h2>
            <p>
              Pour y remédier, penchons-nous à présent sur quelques outils de
              planification successorale, qui n’ont pas pour vocation d’être
              exhaustifs, permettant d’aliéner son capital en cryptomonnaies à
              ses héritiers en ayant recours à des solutions émanant de la
              technologie blockchain tout en mettant en exergue un certain
              nombre d’avantages permis par cette dernière par rapport aux
              techniques plus traditionnelles.
            </p>
            <br />
            <p>
              La première option qui nous vient en tête pour la transmission
              successorale de son patrimoine numérique est de s’adresser à un
              tiers de confiance et de lui confier ses clés. Cet intermédiaire
              peut être de deux types.
            </p>
            <br />
            <p>
              La première figure à laquelle on songe tout naturellement est une
              personne proche, mais qui n’est pas en tant que tel l’héritier.
              Bien que faire appel à ce proche peut de prime abord être
              rassurant, aucune garantie et certitude ne peut être donnée que
              les clés privées représentant les informations de récupération
              permettant l’accès aux cryptos fonctionnant à l’instar d’un mot de
              passe ne soient volées ou utilisées à des fins malveillantes. La
              prudence et la vigilance restent donc de mise.
            </p>
            <br />
            <p>
              Peut également constituer un tiers de confiance l’utilisation soit
              d’une banque classique soit d’une plateforme d’échange de cryptos.
              Ainsi, l’exchange américain Coinbase permet à un membre de la
              famille d'accéder au compte d'un proche décédé après avoir fourni
              un certain nombre de documents, notamment un certificat de décès,
              une dernière volonté, un certificat de succession et une pièce
              d'identité avec photo, en cours de validité, délivrée par l'État,
              de la (des) personne(s) mentionnée(s) dans les lettres
              d'attribution. Un second instrument utile de programmation
              successorale qui nous vient à l’esprit consiste à effectuer une
              donation, de son vivant, de son patrimoine numérique à ses
              enfants. L’actuelle législation fiscale française permet en effet
              à un particulier de donner, tous les 15 ans, 100 000 euros par
              enfant (ou 31 865 euros par petit-enfant), et ce sans à devoir
              payer des droits de donation (au-delà de ce seuil, qualifié
              d’abattement, les donations font l’objet d’une imposition
              progressive).
            </p>
            \
            <br />
            <p>
              Il est d’ailleurs préférable de procéder d’abord à une donation de
              ses cryptos et ensuite, si les donataires le souhaitent, à leur
              vente subséquente (et alors même qu’ils auraient eux-mêmes
              entretemps réalisé une plus-value) puisque ladite donation
              permettra de purger la plus-value latente relative aux cryptos
              données et seul un prélèvement forfaitaire unique (PFU) de 30%
              s’appliquera, également appelé « flat tax ».
            </p>
            <br />
            <p>
              Un troisième outil intéressant pour transférer son portefeuille de
              cryptomonnaies à ses ayants droit réside à le formuler dans un
              testament authentique (soit un testament rédigé par un notaire) ou
              mystique (le testateur transmet au notaire son testament clos,
              cacheté et scellé).
            </p>
            <br />
            <p>
              Le testament en question peut soit se borner à mentionner
              l’existence d’un wallet de cryptos (en supposant alors que les
              légataires sauront comment y accéder), soit à la fois indiquer la
              présence de ce portefeuille et les démarches pour y accéder. Dans
              cette seconde hypothèse, il peut être intéressant et recommandé de
              dresser un inventaire précis et détaillé de ses avoirs en
              cryptomonnaies ainsi que d’expliquer la manière et les
              manipulations qui seront nécessaires en vue de les atteindre.
            </p>
            <br />
            <p>
              Pour ce faire, rien n’empêche d’ailleurs l’auteur du testament de
              s’aider des conseils et directives de Pamela Morgan issus de son
              ouvrage « Cryptoasset Inheritance Planning », laquelle propose
              d’établir un plan de succession de ses crypto-actifs dans une
              lettre glissée dans une enveloppe fermée et destinée aux héritiers
              et qu’ils liront au décès du de cujus.
            </p>
            <br />
            <p>
              Que ladite transmission s’opère par la voie d’une donation ou par
              le truchement d’un testament, il convient de noter qu’il sera
              nécessaire dans le chef des donataires-héritiers de ne pas perdre
              de vue les éléments suivants. Afin d’accéder aux cryptos données
              entre vifs ou léguées par testament, ils auront pour tâche
              d’ouvrir un compte sur une plateforme d’échange de cryptomonnaies
              ou de se créer un portefeuille numérique dit auto-hébergé (wallet
              non custodial).
            </p>
            <br />
            <p>
              Le jour dudit transfert, le donateur et/ou les ayants droit, avec
              l’aide d’un notaire, devront ensuite déterminer la valeur du
              portefeuille en comparant le prix des crypto-actifs sur différents
              exchanges, puis en faisant une moyenne des différents prix. À cet
              effet, soulignons qu’ils peuvent s'aider d’agrégateurs tels que
              CoinGecko ou CoinMarketCap. Ce sont d'ailleurs ces plateformes qui
              sont utilisées par les outils comme Waltio pour la fiscalité des
              cryptomonnaies.
            </p>
            <br />
            <p>
              Bien qu’indispensables, ces étapes comportent en réalité un
              certain nombre d’inconvénients.
            </p>
            <br />
            <p>
              Le premier désagrément résulte de l’obligation de se soumettre à
              un tiers de confiance, le notaire, en tant qu’autorité centrale
              dont il n’est pas certain à l’heure actuelle qu’il soit muni des
              outils et des (meilleures) connaissances à jour pour aider les
              héritiers dans ladite transmission. En effet, comment et sur
              quelle base procédera-t-il à la détermination du choix des
              différentes plateformes et de la valorisation des crypto-actifs
              (hormis les stablecoins) lesquels sont, par définition, éminemment
              volatils à tout instant ?
            </p>
            <br />
            <p>
              Le second souci ressort de la constatation en vertu de laquelle
              pour former un titre et, par mesure de publicité, être « opposable
              » aux tiers (notamment envers d’éventuels créanciers du donateur
              parmi lesquels le fisc), la donation devrait idéalement être
              coulée dans un acte, ce qui induit que la détention des
              crypto-actifs ne sera plus totalement confidentielle.
            </p>
            <br />
            <p>
              Enfin le recours aux services d’un tel tiers de confiance implique
              également un certain coût, lequel n’est pas toujours transparent
              et peut être aléatoire, en faveur du notaire choisi (frais et
              honoraires pour les recherches et la passation d’un acte) ainsi
              que la débition de la « flat tax » dont question ci-avant et des
              complications de calcul et les délais qui peuvent en découler.
            </p>
            <br />
            <br />
            <h2 id="3">
              Le recours à la blockchain comme meilleure alternative ?
            </h2>
            <p>
              Force est de constater que faire appel directement à une solution
              décentralisée dispensée par la blockchain pour effectuer une
              donation de son capital en cryptos ou les léguer par le biais d’un
              testament à ses ayants droit permet de se passer des écueils
              précités et de jouir notamment des avantages suivants.
            </p>
            <br />
            <h3>Les smart contracts</h3>
            <br />
            <p>
              L’exécution des smart contracts d’une application décentralisée
              (ou DApp en anglais) offre la garantie d’une plus grande rapidité
              dans l'enchaînement de toutes les étapes de la réalisation de la
              planification successorale vis-à-vis de sa variante traditionnelle
              précitée, offrant par là même plus d’efficacité et de sérénité.
            </p>
            <br />
            <p>
              Seront en effet inexistant les événements provenant d’une
              intervention humaine suivants :
            </p>
            <br />
            <p>
              -les recherche et prise de contact des héritiers qui résideraient
              à l’autre bout du globe (ce qui peut s’avérer fastidieux et
              chronophage) ;
            </p>
            <p>
              {" "}
              -le notaire et/ou les héritiers peut/peuvent soit avoir du retard
              ou être absent(s) à une réunion ;
            </p>
            <p>
              -il manque une attestation d’une banque ou de l’administration
              fiscale issue du pays de l’ayant droit ou un document
              d’habilitation (une procuration d’un héritier pour recevoir les
              fonds en question) ou bien celui-ci est dépourvu du formalisme
              requis (date, signature, apostille, etc.).
            </p>
            <br />
            <h3>Une économie des coûts</h3>
            <br />
            <p>
              La confirmation d’un coût sensiblement moindre et prévisible :
              sont seuls exigibles et consultables préalablement à la
              transaction les éventuels frais de service et des frais dits de «
              gas », soit une unité de paiement permettant le paiement des frais
              de transaction.
            </p>
            <br />
            <h3>Une plus grande confiance</h3>
            <br />
            <p>
              Un accroissement de confiance due à une relative plus grande
              probabilité d’honnêteté : à l’inverse d’une interposition humaine
              centralisée, la détermination du calcul et de la fixation de la
              juste évaluation pécuniaire des crypto-actifs dont on envisage
              l’aliénation est permise par l’exécution de DApps conjointement
              avec un ou plusieurs oracle(s).
            </p>
            <br />
            <h3>Une meilleure confidentialité</h3>
            <br />
            <p>
              La certitude d’une plus grande maîtrise et discrétion de nos
              données personnelles afin qu’elles demeurent plus confidentielles
              : contrairement à un acte notarié qui se doit pour sa validité et
              son opposabilité aux tiers de reprendre un ensemble de données
              prescrites par la loi dont notamment l’identité des parties (leurs
              nom, prénom, état civil et adresse), avec une DApp, seules
              certaines informations essentielles (telles que la date de
              l’opération, son montant et ses frais ainsi que les adresses
              publiques cryptographiques de l’émetteur et du destinataire),
              seront enregistrées et consultables dans la blockchain et à tout
              moment, ce qui peut être source de soulagement et de quiétude face
              à d’éventuels regards quelque peu indiscrets (connus ou inconnus
              de proches, futurs héritiers ou de toute autre personne).
            </p>
            <br />
            <h3>Une résistance à la censure</h3>
            <br />
            <p>
              La garantie que les fonds sont incensurables (personne ne peut
              empêcher leur transfert ou forcer l’affichage de leur contenu,
              sauf son propriétaire) et ne peuvent pas être bloqués, saisis ou
              confisqués, du moins pas aussi facilement qu’en passant soit par
              une solution de transmission de monnaies fiduciaires ou soit une
              solution de transfert proposée par la blockchain mais entièrement
              gérée par une autorité centralisée telle qu’une banque, un
              exchange crypto, un notaire, un avocat, etc.
            </p>
            <br />
            <h3>Une opération moins contraignante</h3>
            <br />
            <p>
              L'assurance d’une plus grande souplesse, flexibilité et
              adaptabilité dans l’exécution de l’opération : là où la donation
              constatée par acte notarié peut être assortie d’un certain nombre
              de modalités classiques, une plus grande créativité est permise en
              ayant recours à une donation opérée de manière décentralisée par
              la blockchain. Pour illustrer notre propos, prenons l’exemple du
              protocole dit d’autorisation (Consent Protocol) issu du projet
              Ternoa.
            </p>
            <br />
            <p>
              Ce smart contract offre la possibilité aux destinataires d’une
              capsule, c’est-à-dire, le patrimoine numérique « encapsulé » et
              transmis sous forme d’un token non fongible (NFT), de demander un
              accès au patrimoine renfermé dans ladite capsule, et ce après une
              certaine période. L’ouverture est alors conditionnée par l’accord
              de l’émetteur (de son vivant).
            </p>
            <br />
            <p>
              Avec le « Death Protocol » émanant du projet Ternoa, le patrimoine
              numérique encapsulé se transmet automatiquement après le décès de
              son créateur. Le protocole est basé sur les API des registres de
              décès locaux. Il convient cependant de souligner que ce protocole
              peut recourir à une tierce partie, ce qui peut quelque peu
              compromettre le 3e avantage évoqué précédemment.
            </p>
            <br />
            <br />
            <h2 id="4">
              Conclusion sur la transmission des cryptomonnaies à ses héritiers
            </h2>
            <p>
              Vous l'aurez compris, nombreuses sont les techniques rendant
              possible la transmission de son héritage numérique au profit de
              ses héritiers. En raison de leur particularité, chacune comporte
              ses propres utilités et défauts.
            </p>
            <br />
            <p>
              Il appartient dès lors à chacun de peser le pour et le contre de
              chaque outil de planification susmentionné. Ainsi, il conviendra
              d’examiner le degré de célérité souhaitée pour l’accomplissement
              de chaque transaction. Les frais que celle-ci implique et la
              possibilité de leur prévisualisation avant chaque exécution
              devront également être pris en compte. Ne devra pas être négligé
              non plus le niveau d’importance attachée à l’intégrité quant au
              calcul et la fixation de la juste estimation financière des
              crypto-actifs.
            </p>
            <br />
            <p>
              Un point devra de surcroît être établi quant à la recherche de
              davantage de confidentialité des données personnelles.
              L’aspiration à éviter autant que possible la censurabilité, le
              blocage, la saisie ou la confiscation de ses cryptos peut en sus
              constituer un critère déterminant. Enfin, il y aura lieu en outre
              de déterminer sa volonté pour plus de souplesse, flexibilité et
              adaptabilité dans la réalisation de sa programmation successorale.
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
                  Conciliation possible entre auto-souveraineté de ses
                  crypto-actifs et leur transmission successorale ?{" "}
                </a>
              </li>
              <li>
                <a href="#2" className="partie">
                  Outils de planification successorale traditionnels et ceux
                  issus de la blockchain
                </a>
              </li>
              <li>
                <a href="#3" className="partie">
                  Le recours à la blockchain comme meilleure alternative ?{" "}
                </a>
              </li>
              <li>
                <a href="#4" className="partie">
                  Conclusion sur la transmission des cryptomonnaies à ses
                  héritiers{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Patrimoine;
