import React from "react";
import { useState, useEffect } from "react";
import { onAuthStateChanged,signOut} from "firebase/auth";
import { auth } from '../config/firebase-config';
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { updateUserChapitre1, getUserChapitre1} from '../config/database';

const Home = () => {
  // Save the user logged in
  const [user, setUser] = useState(null);
  const [chapitre1, setChapitre1] = useState(false);

  useEffect(() => {
    // Check authentication status and update user status
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      fetchChapitre1();
    });
  // Unsubscribe from the authentication observer when cleaning
    return () => unsubscribe();
  }, []);

  const handleButtonClick = async () => {
    if (user) {
      const newChapitre1Value = !chapitre1;
      setChapitre1(newChapitre1Value);
      await updateUserChapitre1(user.uid, newChapitre1Value);
    } else {
      console.error("User not logged in");
    }
  };

  const fetchChapitre1 = async () => {
    if (user) {
      const chapitre1Value = await getUserChapitre1(user.uid);
      setChapitre1(chapitre1Value);
    }
  };
  
  const logout = async () => {
    await signOut(auth);
  }
   
      

  return (
    <div>
      <main id="top">
        <Navigation />
        <div className="square1" id="overview">
          <div className="text_explain">
            <p className="title" data-aos="fade-up-right" data-aos-delay="100">
              The wallet to maintain a semblance of privacy.
            </p>
            <p className="text-square" data-aos="fade-up" data-aos-delay="100">
              Imagine all of your precious digital coins locked in separate
              safe, each of them locked with different code. Now, imagine having
              access to every chain with one key, one interface and that you can
              switch between them in a trice. That’s exactly what a multi-chain
              crypto wallet does. It allows you to conserve the total control of
              your funds while offering you the flexibility to switch between
              different blockchains.
            </p>
            <div className="button-square1" data-aos="fade-up">
              <a className="button1" href="./signup">
                Start the adventure
              </a>
              <a className="button2" href="./">
                Docs
              </a>
            </div>
          </div>
          <img
            data-aos="fade-up-right"
            data-aos-delay="100"
            className="fusee"
            src="./fusee.png"
            alt="logo_fusee"
          />
        </div>
        <div className="square2" id="security">
          <div className="text_explain">
            <p className="title" data-aos="fade-up-right">
              Security
            </p>
            <p className="text-square" data-aos="zoom-in-left">
              Moreover, with a reinforced security due to the necessity of
              several signatures to validate a transaction, you can be sure that
              you funds are in security against hacking attempts. Choosing a
              multi-chain virtual wallet, it’s choosing simplicity and security
              to manage your digital funds.
            </p>
          </div>
          <img className="planete" src="./planete.png" alt="logo-planete" />
        </div>
        <div className="square3" id="learn">
          <div className="text_explain">
            <p className="title" data-aos="fade-up-left">
              Learn
            </p>
            <p className="text-square" data-aos="zoom-in-right">
              With interactive online courses made by expert, you can learn
              fundamentals of the blockchain, cryptocurrencys, wallet security,
              investments and business opportunities. Our goal is to offer a
              quality education, detailed and up to date on cryptocurrency, to
              allow you to become an expert in this growing field.
            </p>
            <div className="button-square1">
              <a className="button1" href="./course">
                Start to learn
              </a>
            </div>
          </div>

          <img className="livre" src="./livre.png" alt="logo_livre" />
          <div className="icon">
            <div className="square-icon">
              <a href="#top" className="a-arrow">
                <ion-icon
                  className="arrow"
                  name="chevron-up-outline"
                ></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;