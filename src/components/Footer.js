import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="end-bar">
          <div className="text1">
            <p className="appolo-title">Appolo.</p>
            <p className="copyright">© Appolo Technologies, Inc.</p>
          </div>
          <div className="text2">
            <p className="title-footer">Product</p>
            <a href="#overview" className="explain">
              Overview
            </a>
            <br />
            <a href="#" className="explain">
              Download
            </a>
            <br />
            <a href="#security" className="explain">
              Security
            </a>
            <br />
            <a href="#" className="explain">
              Feature Requests
            </a>
            <br />
          </div>
          <div className="text3">
            <p className="title-footer">Resources</p>
            <a href="#" className="explain">
              Docs
            </a>
            <br />
            <a href="#" className="explain">
              Terms
            </a>
            <br />
            <a href="#" className="explain">
              Privacy
            </a>
            <br />
          </div>
          <div className="text4">
            <p className="title-footer">Company</p>
            <a href="#" className="explain">
              About
            </a>
            <br />
            <a href="#" className="explain">
              Insta
            </a>
            <br />
            <a href="https://twitter.com/appolo_x" className="explain">
              Twitter
            </a>
            <br />
            <a href="https://discord.gg/2yPD47Ud" className="explain">
              Discord
            </a>
            <br />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
