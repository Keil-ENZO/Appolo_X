import React from "react";
import SideBar from "../components/SideBar";

const Guide = () => {
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
              Guide 2023 de la déclaration fiscale des cryptomonnaies
            </h2>
            <p>
              La saison fiscale 2022 étant bientôt ouverte, voici un petit guide
              de survie pour remplir vos obligations fiscales et déclarer vos
              cryptomonnaies. Quelles sont les dates à retenir ? Quelles sont
              vos obligations fiscales ? Quels sont les risques en cas de défaut
              de déclaration ?
            </p>
          </div>
          <br />
          <br />
          <div className="course-body">
            <h2 id="1">Les dates du calendrier fiscal à retenir</h2>
            <p>
              La première chose important à connaître pour déclarer vos
              cryptomonnaies dans les temps et ne pas subir de pénalités, c’est
              la date.
            </p>
            <br />
            <p>
              Les dates limites de déclaration d'impôt varient en fonction de
              votre lieu de résidence. Si le service de déclaration en ligne
              ouvre pour tout le monde le 13 avril 2023, les délais limites
              varient selon les départements.
            </p>
            <br />

            <h3>
              Voici les dates du calendrier fiscal de la déclaration des revenus
              de 2022 :
            </h3>
            <br />
            <ul>
              <li>
                -13 avril 2023 : ouverture du service en ligne de déclaration,
                sur le site impots.gouv.fr ;
              </li>
              <li>
                -22 mai 2023 : date limite de dépôt de la déclaration de
                revenus, sous format papier ;
              </li>
              <li>
                -25 mai 2023 : date limite de déclaration des revenus en ligne
                en zone 1 (départements 01 à 19 et résidents étrangers) ;
              </li>
              <li>
                -1er juin 2023 : date limite de déclaration des revenus en ligne
                en zone 2 (départements 20 à 54) ;
              </li>
              <li>
                -8 juin 2023 : date limite de déclaration des revenus en ligne
                en zone 3 (département 55 à 976).
              </li>
            </ul>
            <br />
            <br />
            <h2 id="2">
              Quelles sont vos obligations fiscales en manière de cryptomonnaies
              ?
            </h2>
            <p>
              Si vous avez investi dans les cryptomonnaies, vous avez deux
              obligations fiscales.
            </p>
            <br />
            <h3>Une obligation de déclarer vos opérations imposables</h3>
            <p>
              Chaque année, le régime fiscal vous oblige à déclarer vos
              transactions imposables. Cette déclaration doit être effectuée
              lors de votre déclaration de revenus, en utilisant le formulaire
              complémentaire n°2086 spécifique aux cessions de cryptomonnaies.
              Voici la formule appliquée pour déterminer la plus-value imposable
              sur votre plus-value :
            </p>
            <br />
            <p>
              Si vous avez réalisé un grand nombre d'opérations imposables, il
              devient très fastidieux de récupérer toutes ces informations et le
              risque de faire des erreurs et d'autant plus important. Pour vous
              venir en aide, l'assistant fiscal Waltio compile rapidement et
              facilement toutes ces informations, offrant un gain de temps
              considérable pour votre déclaration.
            </p>
            <br />
            <p>
              Une fois que vous avez fourni ces informations, l'outil
              informatique de l'Administration fiscale se charge de calculer
              l'impôt à payer.
            </p>
            <br />
            <h3>Une obligation de déclarer vos comptes d’actifs numériques</h3>
            <br />
            <p>
              En plus de la déclaration des opérations imposables, vous êtes
              dans l'obligation de déclarer vos « comptes d’actifs numériques »
              ouverts, détenus, utilisés ou clos au cours de l’année auprès de
              sociétés domiciliées hors de France. Cela s’applique à toutes les
              plateformes d’échange conservant des cryptomonnaies et étant
              domiciliées à l’étranger.
            </p>
            <br />
            <p>
              Cette déclaration s’effectue via le formulaire combiné n°3916-
              3916bis. Vous devrez renseigner un certain nombre d’informations
              sur la plateforme (dénomination, adresse, etc) et les
              caractéristiques dudit compte (usage à titre privé ou
              professionnel, compte simple ou compte joint).
            </p>
            <br />
            <p>
              Sachez que vous n’avez pas besoin de renseigner les montants
              détenus sur vos comptes. Également, il n'est pas nécessaire de
              déclarer les portefeuilles dits « non-custodial » comme ceux de
              Ledger ou Trezor, car vous êtes l'unique propriétaire des
              cryptomonnaies qu'ils conservent.
            </p>
            <br />
            <br />
            <h2 id="3">
              Quels sont les risques en cas de défaut de déclaration ?
            </h2>
            <br />
            <p>
              Un défaut d’omission ou une erreur de déclaration de vos comptes à
              l'étranger ou de vos opérations imposables peuvent avoir des
              conséquences importantes que ce soit au niveau fiscal ou même
              pénal.
            </p>
            <br />
            <h3>Pour les comptes non déclarés</h3>
            <br />
            <p>
              Pour les comptes d'actifs numériques non déclarés, la loi (Art.
              1736 X CGI) prévoit une amende de 750 € par compte, ainsi que 125€
              par omission ou inexactitude non rectifiée à l'initiative du
              contribuable. Si la valeur de votre compte dépasse 50 000 € au
              cours de l'année, l'amende peut aller jusqu'à 1 500 € et 250 €.
            </p>
            <br />
            <p>
              De plus, une majoration des montants que vous devez à
              l'administration fiscale peut avoir lieu, connue sous le nom de «
              redressement fiscal ».
            </p>
            <h3>Pour une erreur sur la déclaration fiscale</h3>
            <br />
            <p>
              En cas d'insuffisance de déclaration ou de déclaration tardive de
              vos plus-value sur cryptomonnaie, la majoration est de 10 %, de 40
              % en cas de manquement délibéré, et de 80 % en cas de manœuvres
              frauduleuses ou d'abus de droit. Il est possible de rectifier sa
              déclaration dans les 30 jours suivants pour éviter le redressement
              fiscal.
            </p>
            <br />
            <p>
              Toutefois, en cas de fraude fiscale, des sanctions pénales peuvent
              s'appliquer, telles qu'une amende pouvant atteindre 3 millions
              d'euros ainsi qu'une peine d'emprisonnement pouvant aller jusqu'à
              7 ans pour fraude aggravée (Art. 1741 CGI).
            </p>
            <br />
            <h3>Le droit à l'erreur</h3>
            <br />
            <p>
              Il est important de noter que la loi ESSOC de 2018 a mis en place
              le droit à l'erreur en matière fiscale. Ce droit permet de
              régulariser sa situation sans payer de pénalité en cas d'erreur ou
              d'omission dans une déclaration fiscale. La situation peut être
              régularisée à tout moment, mais un intérêt de retard peut être
              appliqué, sans les majorations ou les amendes.
            </p>
            <br />
            <p>
              Il est possible de signaler une erreur ou un oubli à
              l'administration fiscale en effectuant une déclaration de revenus
              rectificative. Pour ce faire, il suffit de se connecter à son
              espace Particulier et d'utiliser le service de correction en ligne
              disponible entre août et mi-décembre de l'année de la déclaration
              à corriger.
            </p>
            <br />
            <br />
            <h2 id="4">
              Quels revenus et opérations devez-vous prendre en compte ?
            </h2>
            <br />
            <p>
              Le calcul des plus-values réalisées sur les actifs numériques est
              complexe et chronophage, il nécessite de connaître précisément la
              valeur totale de votre portefeuille (l’intégralité des sommes de
              tous vos comptes) au moment où vous réalisez une cession.
            </p>
            <br />
            <p>
              En outre, les revenus en cryptomonnaies obtenus d'autres sources
              comme les NFT, les jeux Play-to-Earn, le staking, le lending, les
              airdrops ou encore le minage sont également à prendre en compte et
              à inclure dans la valeur totale de votre portefeuille. Vous
              l’aurez compris, il y a de quoi s’arracher les cheveux ou être
              désespéré devant l’ampleur de la tâche…
            </p>
            <br />
            <p>
              Pas de panique, l'outil d’aide à la déclaration fiscale Waltio
              vous permet, quel que soit votre profil, de prendre en compte
              l’intégralité de vos opérations en connectant vos comptes par API
              et en supportant plus de 200 plateformes et opérations complexes.
              Waltio vous fournira des documents fiscaux permettant de remplir
              vos obligations fiscales.
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
                  Les dates du calendrier fiscal à retenir
                </a>
              </li>
              <li>
                <a href="#2" className="partie">
                  Quelles sont vos obligations fiscales en manière de
                  cryptomonnaies ?
                </a>
              </li>
              <li>
                <a href="#3" className="partie">
                  Quels sont les risques en cas de défaut de déclaration ?
                </a>
              </li>
              <li>
                <a href="#4" className="partie">
                  Quels revenus et opérations devez-vous prendre en compte ?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Guide;
