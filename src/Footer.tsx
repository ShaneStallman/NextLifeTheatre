import React from "react";

const buildFooter = () => {
    return (
    <footer className="pageFooter">
            <a href="#home" className="w3-button w3-light-grey"><i className="fa fa-arrow-up w3-margin-right"></i>To the top</a>
            <div className="w3-xlarge w3-section">
              <a id="Facebook" href="https://www.facebook.com/profile.php?id=61557075519477" className="fa fa-facebook-official w3-hover-opacity icon"></a>
              <a id="Instagram" href="https://www.instagram.com/nextlifetheatreco/" className="fa fa-instagram w3-hover-opacity icon"></a>
              <a className="fa fa-snapchat w3-hover-opacity icon"></a>
              <a className="fa fa-pinterest-p w3-hover-opacity icon"></a>
              <a className="fa fa-twitter w3-hover-opacity icon"></a>
              <a className="fa fa-linkedin w3-hover-opacity icon"></a>
            </div>
            <p>Developed by <a href="https://shanestallman.mystagingwebsite.com/" title="shane_stallman" target="_blank" className="selfLink">Shane Stallman</a></p>
          </footer>
    )
};

export {buildFooter};
