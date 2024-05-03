import styles from "./App.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowDown,faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faXTwitter,faInstagramSquare } from '@fortawesome/free-brands-svg-icons';



export default function App() {
    return (
    <div>
    
    <div className={styles["Header"]}>
          <div className={styles["Logo"]}>
            <div className={styles["LogoTitle"]}>Logo</div>
          </div>

          <div className={styles["Menu"]}>
            <div className={styles["MenuName"]}>
              <div className={styles["MenuTitle"]}>Accueil</div>
            </div>
            <div className={styles["MenuName"]}>
              <div className={styles["MenuTitle"]}>Lieux</div>
            </div>
            <div className={styles["MenuName"]}>
               <div className={styles["MenuTitle"]}>Hébergement</div>
            </div>
            <div className={styles["MenuName"]}>
              <div className={styles["MenuTitle"]}>Actualité</div>
            </div>
            <div className={styles["MenuName"]}>
              <div className={styles["MenuTitle"]}>Avis</div>
            </div>
          </div>  

          <div className={styles["Connexion"]}>
            <div className={styles["ButtonConnexion"]}>
              <div className={styles["ButtonConnexion2"]}>
              <FontAwesomeIcon icon={faUser} style={{color:"#ffffff",fontSize:35, paddingLeft:10}} />
             </div>
            </div>
            <div className={styles["ConnexionName"]}>Connexion</div>
            <div className={styles["ConnexionToggle"]}>
              <div className={styles["ConnexionToggle2"]}>
              <FontAwesomeIcon icon={faCircleArrowDown} style={{ color: "#ffffff" }} />

             </div>
            </div>
          </div>
        </div>
     




<div className={styles["Banniere"]}>
  <div className={styles["BanniereLorem"]}>Lorem ipsum dolor sit amet consectetur. Euismod morbi faucibus ante nisi. Amet vitae morbi.</div>
  <div className={styles["BanniereLoremTitle"]}>Lorem ipsum dolor sit amet consecte.</div>
  <div className={styles["BanniereVoyage"]}>
    <div className={styles["BanniereVoyageTitle"]}>Plan pour vos futurs voyages</div>
  </div> 
  <div className={styles["BanniereChoisir"]}>
    <div className={styles["BanniereChoisirLogo"]}/>
    <div className={styles["BanniereFirst"]} />
    <div className={styles["BanniereSecond"]} />
    <div className={styles["BanniereThird"]} />
  </div>
</div>



<div className="ArticleBackground" style={{display:"flex", flexDirection:"column",alignItems:"Center", height:1400}}>

<div className="ActuTitle" style={{width: "100%", color: 'black', fontSize: 48, fontFamily: 'Manrope', fontWeight: '400',  wordWrap: 'break-word'}}>Dernières actualités</div>

<div className="Articles" style={{width: 998, height: 447.05, position: 'relative'}}>
  <div className="ArticleCard" style={{width: 300, height: 447.05, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
    <img className="ArticleImg1" style={{alignSelf: 'stretch', height: 209, borderRadius: 24,backgroundImage:"url(/actu1.png)"}}  />
    <div className="ArticleText" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
        <div className="ArticleCategory" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
          <div className="CategoryTitle" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
            <div className="CategoryName" style={{color: '#0A2640', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '700',  wordWrap: 'break-word'}}>Category</div>
            <div className="CategoryDate" style={{color: '#777777', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400',  wordWrap: 'break-word'}}>November 22, 2021</div>
          </div>
          <div className="CategoryText" style={{width: 300, height: 99, color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet consectetur. Euismod morbi faucibus ante nis.</div>
       </div>
       <div className="ArticleUser" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
          <img className="UserImg" style={{width: 32, height: 32, borderRadius: 9999, backgroundImage:"url(/public/download-icon-avatar+person+profile+user+icon-1320166578424287581_32.png) "}}  />
             <div className="UserName" style={{width: 300, height: 32, color: 'black', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>User</div>
          </div>
        </div>
     </div>

     <div className="ArticleCard" style={{width: 300, height: 447.05, left: 350, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
       <img className="ArticleImg2" style={{alignSelf: 'stretch', height: 209, borderRadius: 24,backgroundImage:"url(/actu2.png)"}}  />
           <div className="ArticleText" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
              <div className="ArticleCategory" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
                <div className="CategoryTitle" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                <div className="CategoryName" style={{color: '#0A2640', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Category</div>
                <div className="CategoryDate" style={{color: '#777777', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>November 22, 2021</div>
             </div>
             <div className="CategoryText" style={{width: 300, height: 99, color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet consectetur. Euismod morbi faucibus ante nisi. Amet morbi.</div>
            </div>
            <div className="ArticleUser" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
              <img className="UserImg" style={{width: 32, height: 32, borderRadius: 9999, backgroundImage:"url(/public/download-icon-avatar+person+profile+user+icon-1320166578424287581_32.png) " }}  />
                <div className="UserName" style={{width: 300, height: 32, color: 'black', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>User</div>
              </div>
           </div>
         </div>

  <div className="ArticleCard" style={{width: 298, height: 447.05, left: 700, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
    <img className="ArticleImg3" style={{alignSelf: 'stretch', height: 209, borderRadius: 24,backgroundImage:"url(/actu3.png)"}} />
    <div className="ArticleText" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
      <div className="ArticleCategory" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
        <div className="CategoryTitle" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
          <div className="CategoryName" style={{color: '#0A2640', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Category</div>
          <div className="CategoryDate" style={{color: '#777777', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>November 22, 2021</div>
        </div>
        <div className="CategoryText" style={{width: 300, height: 99, color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '400',wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet consectetur. Euismod morbi faucibus ante nisi.</div>
      </div>
      <div className="ArticleUser" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
        <img className="UserImg" style={{width: 32, height: 32, borderRadius: 9999,backgroundImage:"url(/public/download-icon-avatar+person+profile+user+icon-1320166578424287581_32.png) "}}  />
        <div className="UserName" style={{width: 300, height: 32, color: 'black', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>User</div>
      </div>
    </div>
  </div>
</div>


<div className="Articles" style={{width: 998, height: 447.05, position: 'relative'}}>
  <div className="ArticleCard" style={{width: 300, height: 447.05, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
    <img className="ArticleImg4" style={{alignSelf: 'stretch', height: 209, borderRadius: 24,backgroundImage:"url(/actu4.png)"}}  />
    <div className="ArticleText" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
      <div className="ArticleCategory" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
        <div className="CategoryTitle" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
          <div className="CategoryName" style={{color: '#0A2640', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '700',  wordWrap: 'break-word'}}>Category</div>
          <div className="CategoryDate" style={{color: '#777777', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400',  wordWrap: 'break-word'}}>November 22, 2021</div>
        </div>
        <div className="CategoryText" style={{width: 300, height: 99, color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet consectetur. Euismod morbi faucibus ante nisi morbi.</div>
      </div>
      <div className="ArticleUser" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
        <img className="UserImg" style={{width: 32, height: 32, borderRadius: 9999,backgroundImage:"url(/public/download-icon-avatar+person+profile+user+icon-1320166578424287581_32.png) "}}  />
        <div className="UserName" style={{width: 300, height: 32, color: 'black', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400',  wordWrap: 'break-word'}}>User</div>
      </div>
    </div>
  </div>

  <div className="ArticleCard" style={{width: 300, height: 447.05, left: 350, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
    <img className="ArticleImg" style={{alignSelf: 'stretch', height: 209, borderRadius: 24,backgroundImage:"url(/actu5.png)"}} />
    <div className="ArticleText" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
      <div className="ArticleCategory" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
        <div className="CategoryTitle" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
          <div className="CategoryName" style={{color: '#0A2640', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '700',  wordWrap: 'break-word'}}>Category</div>
          <div className="CategoryDate" style={{color: '#777777', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400',  wordWrap: 'break-word'}}>November 22, 2021</div>
        </div>
        <div className="CategoryText" style={{width: 300, height: 99, color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet consectetur. Euismod morbi faucibus ante nisi vitae morbi.</div>
      </div>
      <div className="ArticleUser" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
        <img className="UserImg" style={{width: 32, height: 32, borderRadius: 9999,backgroundImage:"url(/public/download-icon-avatar+person+profile+user+icon-1320166578424287581_32.png) "}}  />
        <div className="UserName" style={{width: 300, height: 32, color: 'black', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400',  wordWrap: 'break-word'}}>User</div>
      </div>
    </div>
  </div>

  <div className="ArticleCard" style={{width: 298, height: 447.05, left: 700, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
    <img className="ArticleImg" style={{alignSelf: 'stretch', height: 209, borderRadius: 24,backgroundImage:"url(/actu6.png)"}} />
    <div className="ArticleText" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
      <div className="ArticleCategory" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
        <div className="CategoryTitle" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
          <div className="CategoryName" style={{color: '#0A2640', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Category</div>
          <div className="CategoryDate" style={{color: '#777777', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400',  wordWrap: 'break-word'}}>November 22, 2021</div>
        </div>
        <div className="CategoryText" style={{width: 300, height: 99, color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet consectetur. Euismod morbi faucibus ante nis ae morbi.</div>
      </div>
      <div className="ArticleUser" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
        <img className="UserImg" style={{width: 32, height: 32, borderRadius: 9999,backgroundImage:"url(/public/download-icon-avatar+person+profile+user+icon-1320166578424287581_32.png) "}}  />
        <div className="UserName" style={{width: 300, height: 32, color: 'black', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>User</div>
      </div>
    </div>
  </div>
</div>


<div className="LoadMore" style={{height: 63.26, paddingLeft: 56, paddingRight: 56, paddingTop: 16, paddingBottom: 16, borderRadius: 56, border: '2px #0A2640 solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
  <div className="LoadMoreName" style={{color: '#0A2640', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Charger plus</div>
</div>

</div>


<div className="Avis" style={{ height: 805.48, position: 'relative'}}>
  <div className="AvisContainer" style={{width: "100%", height: 805.48, left: 0, top: 0, position: 'absolute', background: '#0A2640'}} />
  <div className="AvisTitle" style={{width: 716, height: 139.78, left: 150, top: 100.56, position: 'absolute', color: 'white', fontSize: 48, fontFamily: 'Manrope', fontWeight: '400',  wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet consectetur. Euismod morbi faucibus ante nis.</div>
  <div className="AvisCard" style={{padding: 40, left: 150, top: 338.65, position: 'absolute', background: 'white', boxShadow: '0px 12px 32px rgba(0, 0, 0, 0.12)', borderRadius: 12, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex'}}>
    <div className="AvisText" style={{width: 270, color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '400',  wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet consectetur. Euismod morbi faucibus ante nis.</div>
    <div className="AvisAuthor" style={{width: 270, height: 58, position: 'relative'}}>
      <div className="AuthorName" style={{width: 196, height: 22, left: 74, top: 3, position: 'absolute', color: '#0A2640', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '700',  wordWrap: 'break-word'}}>User</div>
      <div className="AuthorPseudo" style={{width: 196, height: 24, left: 74, top: 31, position: 'absolute', color: '#0A2640', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400',  wordWrap: 'break-word'}}>Manager @User</div>
      <img className="AuthorImg" style={{width: 58, height: 58, left: 0, top: 0, position: 'absolute', borderRadius: 9999,   backgroundImage:"url(/download-icon.png)"  }}  />
    </div>
  </div>
  <div className="AvisCard" style={{padding: 40, left: 950, top: 355.74, position: 'absolute', background: 'white', boxShadow: '0px 12px 32px rgba(0, 0, 0, 0.12)', borderRadius: 12, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex'}}>
    <div className="AvisText" style={{width: 270, color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '400',  wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet consectetur. Euismod morbi faucibus ante nis.</div>
    <div className="AvisAuthor" style={{width: 270, height: 58, position: 'relative'}}>
      <div className="AuthorName" style={{width: 196, height: 22, left: 74, top: 3, position: 'absolute', color: '#0A2640', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '700',  wordWrap: 'break-word'}}>User</div>
      <div className="AuthorPseudo" style={{width: 196, height: 24, left: 74, top: 31, position: 'absolute', color: '#0A2640', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400',  wordWrap: 'break-word'}}>Team Leader @User</div>
      <img className="AuthorImg" style={{width: 58, height: 58, left: 0, top: 0, position: 'absolute', borderRadius: 9999,  backgroundImage:"url(/download-icon.png)" }}  />
    </div>
  </div>
  <div className="AvisCard" style={{padding: 40, left: 550, top: 374.85, position: 'absolute', background: 'white', boxShadow: '0px 12px 32px rgba(0, 0, 0, 0.12)', borderRadius: 12, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex'}}>
    <div className="AvisText" style={{width: 270, color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '400',  wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet consectetur. Euismod morbi faucibus ante nis.</div>
    <div className="AvisAuthor" style={{width: 270, height: 58, position: 'relative'}}>
      <div className="AuthorName" style={{width: 196, height: 22, left: 74, top: 3, position: 'absolute', color: '#0A2640', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '700',  wordWrap: 'break-word'}}>User</div>
      <div className="AuthorPseudo" style={{width: 196, height: 24, left: 74, top: 31, position: 'absolute', color: '#0A2640', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Manager @User</div>
      <img className="AuthorImg" style={{width: 58, height: 58, left: 0, top: 0, position: 'absolute', borderRadius: 9999,  backgroundImage:"url(/download-icon.png)" }}  />
    </div>
  </div>
  <div className="AvisToggle" style={{width: 172, height: 73.41, left: 1128, top: 179, position: 'absolute'}}>
    <div className="Toggle" style={{width: 72, height: 72.40, left: 100, top: 0, position: 'absolute'}}>
      <div className="ToggleCircle" style={{width: 72, height: 72.40, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 9999}} />
      <div className="ArrowRight" style={{width: 36, height: 39.22, left: 28, top: 26, position: 'absolute'}}>
      <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
    <div className="Toggle" style={{width: 72, height: 72.40, left: 72, top: 73.41, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0'}}>
      <div className="ToggleCircle" style={{width: 72, height: 72.40, left: 0, top: 0, position: 'absolute', transformOrigin: '0 0', background: 'white', borderRadius: 9999}} />
      <div className="ArrowLeft" style={{width: 36, height: 39.22, left: 5, top: 5, position: 'absolute', transform: 'rotate(-180deg)'}}> 
      <FontAwesomeIcon icon={faArrowLeft} />
      </div>
    </div>
  </div>
</div>




<div className={styles["Footer"]}>
  <div className={styles["FooterContainer1"]}>
    <div className={styles["Newsletters"]}>
      <div className={styles["NewslettersTitle"]}>
        <div className={styles["TitleSubscribe"]}>Souscrire sur notre newsletters</div>
      </div>
      <div className={styles["NewslettersEmail"]}>
        <div className={styles["EmailName"]}>E-mail</div>
        <div className={styles["EmailArrow"]}>
        <FontAwesomeIcon icon={faArrowRight} style={{color:"white", opacity:0.5}} />
        </div>
      </div>
    </div>
    <div className={styles["SocialNetwork"]}>
      <div className={styles["Facebook"]}>
      <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff" }} />
      </div>
      <div className={styles["Twitter"]}>
      <FontAwesomeIcon icon={faXTwitter} style={{ color: "#ffffff" }} />
      </div>
      <div className={styles["Instagram"]}>
      <FontAwesomeIcon icon={faInstagramSquare} style={{ color: "#ffffff" }} />
      </div>
    </div>
  </div>
  <div className={styles["FooterContainer2"]}>
    <div className={styles["AboutContact"]}>
      <div className={styles["AboutUs"]}>
        <div className={styles["AboutLeft"]}>
          <div className={styles["AboutContactTitle"]}>About us</div>
          <div className={styles["AboutLeftName"]}>
            <div className={styles["AboutName"]}>Mentions légales</div>
            <div className={styles["AboutName"]}>Guides</div>
            <div className={styles["AboutName"]}>Gestion des cookies</div>
            <div className={styles["AboutName"]}>Auteurs</div>
            <div className={styles["AboutName"]}>À propos de nous</div>
          </div>
        </div>
        <div className={styles["AboutRight"]}>
          <div className={styles["AboutName"]}>Tous les articles</div>
          <div className={styles["AboutName"]}>Contact</div>
        </div>
      </div>
      <div className={styles["AboutContactTitle"]}>Contacts us</div>
        <div className={styles["ContactPerson"]}>
          <div className={styles["ContactNumber"]}>+1 (001) 981-76-17</div>
          <div className={styles["ContactMail"]}>info@logoipsum.com</div>
        </div>
      </div>
    </div>
    <div className={styles["PC"]}>
      <div className={styles["PCName"]}>Privacy</div>
      <div className={styles["PCName"]}>© 2023 — Copyright</div>
    </div>
  </div>








    </div>
   
    )
}

