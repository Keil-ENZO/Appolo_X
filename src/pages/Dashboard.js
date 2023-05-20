import React from "react";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  return (
    <div>
      <main className="main-dash">
        <SideBar />

        <div className="content">
          <h2>Dashboard</h2>
          <p>You can manage your progress here</p>
          <div className="content-header">
            <img className="img-profil" src="./logo.svg" alt="" />
            <div className="info">
              <p className="name">Appolo X</p>
              <p className="name">Appolo.X@gmail.com</p>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>
            <span className="material-symbols-outlined edit">edit</span>
          </div>
          <div className="content-body">
            <div className="cours-dash">
              <a href="./Guide">
                <div className="cours-1 cours">
                  <img id="img-cours-1" src="img-cours1.svg" alt="" />
                  <div className="text-1">
                    <div className="titre-content">
                      <p className="title-1">
                        Guide 2023 de la déclaration fiscale des cryptomonnaies
                      </p>
                      <div className="difficult">
                        <p className="facile">Facile</p>
                      </div>
                      <div className="cours-time">
                        <img src="time-outline.svg" alt="" />
                        <p>5 min</p>
                      </div>
                    </div>

                    <p className="para-1">
                      La saison fiscale 2022 étant bientôt ouverte, voici un
                      petit guide de survie pour remplir vos obligations
                      fiscales et déclarer vos cryptomonnaies. Quelles sont les
                      dates à retenir ? Quelles sont vos obligations fiscales ?
                      Quels sont les risques en cas de défaut de déclaration ?
                    </p>
                  </div>
                </div>
              </a>

              <a href="./Bridge">
                <div className="cours-2 cours">
                  <img id="img-cours-1" src="img_cours-4.svg" alt="" />
                  <div className="text-2">
                    <div className="titre-content">
                      <p className="title-1">
                        Qu'est-ce qu'un bridge (pont) pour cryptomonnaies et
                        comment ça fonctionne ?
                      </p>
                      <div className="difficult-moy">
                        <p className="facile">Moyen</p>
                      </div>
                      <div className="cours-time">
                        <img src="time-outline.svg" alt="" />
                        <p>10 min</p>
                      </div>
                    </div>
                    <p className="para-2">
                      Les bridges sont des protocoles connectant deux
                      blockchains, ce qui leur permet d'interagir entre elles.
                      Un bridge permet par exemple de transférer des stablecoins
                      USDC de la blockchain Ethereum vers la blockchain Solana,
                      en toute simplicité. Mais qu'est-ce qu'un bridge plus
                      exactement et comment fonctionne t-il ? Zoom sur un type
                      de protocole fondamental pour les cryptomonnaies et la
                      finance décentralisée (DeFi).
                    </p>
                  </div>
                </div>
              </a>

              <a href="./Patrimoine">
                <div className="cours-3 cours">
                  <img id="img-cours-1" src="img_cours-4.svg" alt="" />
                  <div className="text-3">
                    <div className="titre-content">
                      <p className="title-1">
                        Cryptomonnaies : comment bien transmettre son patrimoine
                        numérique à ses héritiers ?
                      </p>
                      <div className="difficult-dif">
                        <p className="facile">Difficile</p>
                      </div>
                      <div className="cours-time">
                        <img src="time-outline.svg" alt="" />
                        <p>15 min</p>
                      </div>
                    </div>
                    <p className="para-3">
                      Bien qu'il puisse être perçu comme risqué et difficile
                      d'investir dans les cryptomonnaies, la transmission de son
                      portefeuille numérique à ses ayants droit peut être
                      d'autant plus complexe. Comment bien transmettre son
                      patrimoine numérique à ses héritiers ? Examinons diverses
                      solutions proposées par la blockchain et les avantages
                      apportés par cette dernière au regard des instruments plus
                      classiques de transmission.
                    </p>
                  </div>
                </div>
              </a>

              <div className="cours-4 cours">
                <img id="img-cours-1" src="img_cours3.svg" alt="" />
                <div className="text-4">
                  <div className="titre-content">
                    <p className="title-1">
                      Qu'est-ce qu'un Remote Procedure Call (RPC) ?
                    </p>
                    <div className="difficult-dif">
                      <p className="facile">Difficile</p>
                    </div>
                    <div className="cours-time">
                      <img src="time-outline.svg" alt="" />
                      <p>20 min</p>
                    </div>
                  </div>
                  <p className="para-4">
                    Un RPC, ou Remote Procedure Call, est un protocole de
                    communication fondamental du Web3 puisqu'il permet
                    d'interagir avec les blockchains. Vous en avez sûrement
                    entendu parler si vous avez déjà interagi avec des
                    applications décentralisées ou avec le testnet d'une
                    blockchain. Mais qu'est-ce qu'un RPC exactement ? Comment ce
                    protocole est-il appliqué à la blockchain ? Y a-t-il des
                    risques à utiliser un RPC ?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
