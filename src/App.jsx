import React, { useEffect, useState } from "react";
import {
  Code2,
  Lightbulb,
  TrendingUp,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Music2,
  Globe,
  MessageCircle,
  UserRound,
  Download,
  Home,
  User,
  ContactRound,
  Database,
  LayoutDashboard,
  Server,
  X,
} from "lucide-react";

const profile = {
  name: "Marion Dionisio",
  title: "Computer Programmer",
  phones: ["+63 969 318 8682", "+63 926 041 5305"],
  emails: ["mariondionisio7@gmail.com", "mhdionisio@doh.gov.ph"],
  facebook: "https://www.facebook.com/marion.dionisio20",
  instagram: "https://www.instagram.com/marion.dionisio/",
  tiktok: "https://www.tiktok.com/@mariondionisio",
  messenger: "https://m.me/marion.dionisio20",
  linkedin: "https://www.linkedin.com/in/marion-dionisio-a42985114",
  website: "https://mariondionisio.github.io/marion_portfolio/",
};

function downloadVCard() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${profile.name}`,
    "N:Dionisio;Marion H.;;;",
    `TITLE:${profile.title}`,
    `TEL;TYPE=CELL:${profile.phones[0]}`,
    `TEL;TYPE=CELL:${profile.phones[1]}`,
    `EMAIL;TYPE=INTERNET:${profile.emails[0]}`,
    `EMAIL;TYPE=INTERNET:${profile.emails[1]}`,
    `URL:${profile.website}`,
    `X-SOCIALPROFILE;TYPE=facebook:${profile.facebook}`,
    `X-SOCIALPROFILE;TYPE=instagram:${profile.instagram}`,
    `X-SOCIALPROFILE;TYPE=tiktok:${profile.tiktok}`,
    `X-SOCIALPROFILE;TYPE=linkedin:${profile.linkedin}`,
    "END:VCARD",
  ].join("\r\n");

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Marion-H-Dionisio.vcf";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function App() {
  const [active, setActive] = useState("home");
  const [showContact, setShowContact] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  const goTo = (section) => {
    setActive(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-shell">
      {isLoading && (
        <div
          className="nfc-loader"
          role="status"
          aria-label="Loading digital business card"
        >
          <div className="loader-content">
            <div className="nfc-animation">
              <div className="nfc-ring nfc-ring-one" />
              <div className="nfc-ring nfc-ring-two" />
              <div className="nfc-ring nfc-ring-three" />

              <div className="loader-photo">
                <img src="/marion.jpg" alt="" />
              </div>

              <div className="nfc-dot" />
            </div>

            <h2>
              MARION <span>DIONISIO</span>
            </h2>
            <p className="loader-role">COMPUTER PROGRAMMER</p>

            <div className="loader-divider" />

            <p className="loader-message">
              Preparing your digital business card
            </p>

            <div className="loader-progress">
              <div className="loader-progress-fill" />
            </div>

            <span className="loader-caption">BUILD · SOLVE · IMPROVE</span>
          </div>
        </div>
      )}
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <main
        className={`phone-frame ${
          isLoading ? "card-loading" : "animations-ready"
        }`}
      >
        {active === "home" && (
          <section id="home" className="hero-section section-anchor">
            <div className="hero-decoration hero-decoration-left" />
            <div className="hero-decoration hero-decoration-right" />

            <div className="profile-photo-wrap">
              <div className="profile-ring">
                <img
                  src="/marion.jpg"
                  alt="Marion Dionisio"
                  className="profile-photo"
                />
              </div>
            </div>

            <h1>{profile.name}</h1>
            <p className="role">{profile.title}</p>

            <div className="gold-line" />

            <div className="value-strip">
              <div>
                <Code2 size={17} />
                <span>Build</span>
              </div>
              <div>
                <Lightbulb size={17} />
                <span>Solve</span>
              </div>
              <div>
                <TrendingUp size={17} />
                <span>Improve</span>
              </div>
            </div>

            <div className="quote-card">
              <span className="quote-mark">“</span>
              <p>Creative solutions for a better tomorrow.</p>
              <span className="quote-mark">”</span>
            </div>

            <div className="contact-grid">
              <a href={`tel:${profile.phones[0]}`} className="contact-tile">
                <Phone size={19} />
                <span>{profile.phones[0]}</span>
              </a>
              <a href={`tel:${profile.phones[1]}`} className="contact-tile">
                <Phone size={19} />
                <span>{profile.phones[1]}</span>
              </a>

              <a href={`mailto:${profile.emails[0]}`} className="contact-tile">
                <Mail size={19} />
                <span>{profile.emails[0]}</span>
              </a>
              <a href={`mailto:${profile.emails[1]}`} className="contact-tile">
                <Mail size={19} />
                <span>{profile.emails[1]}</span>
              </a>

              <a
                href={profile.facebook}
                target="_blank"
                rel="noreferrer"
                className="contact-tile social"
              >
                <Facebook size={20} />
                <span>
                  <strong>Facebook</strong>
                  <small>marion.dionisio20</small>
                </span>
              </a>
              <a
                href={profile.messenger}
                target="_blank"
                rel="noreferrer"
                className="contact-tile social"
              >
                <MessageCircle size={20} />
                <span>
                  <strong>Messenger</strong>
                  <small>@marion.dionisio20</small>
                </span>
              </a>

              <a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                className="contact-tile social"
              >
                <Instagram size={20} />
                <span>
                  <strong>Instagram</strong>
                  <small>@marion.dionisio</small>
                </span>
              </a>
              <a
                href={profile.tiktok}
                target="_blank"
                rel="noreferrer"
                className="contact-tile social"
              >
                <Music2 size={20} />
                <span>
                  <strong>TikTok</strong>
                  <small>@mariondionisio</small>
                </span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-tile social"
              >
                <Linkedin size={20} />
                <span>
                  <strong>LinkedIn</strong>
                  <small>Marion Dionisio</small>
                </span>
              </a>
              <a
                href={profile.website}
                target="_blank"
                rel="noreferrer"
                className="contact-tile social"
              >
                <Globe size={20} />
                <span>
                  <strong>Website</strong>
                  <small>mariondionisio.github.io/marion_portfolio/</small>
                </span>
              </a>
            </div>

            <button className="save-button" onClick={downloadVCard}>
              <UserRound size={21} />
              <span>Save Contact</span>
              <Download size={20} />
            </button>
          </section>
        )}

        {active === "about" && (
          <section key={active} className="content-section section-enter">
            <div className="section-top">
              <button className="back-button" onClick={() => goTo("home")}>
                ‹
              </button>
              <span>About</span>
            </div>

            <div className="mini-profile">
              <div className="mini-photo">
                <img src="/marion.jpg" alt="" />
              </div>
              <div>
                <h2>{profile.name}</h2>
                <p>{profile.title}</p>
              </div>
            </div>

            <p className="about-text">
              A passionate developer focused on building efficient systems,
              solving real-world problems, and creating solutions that make a
              positive impact.
            </p>

            <div className="skills">
              <div>
                <LayoutDashboard size={18} />
                <span>Web Development</span>
              </div>
              <div>
                <Database size={18} />
                <span>Database Management</span>
              </div>
              <div>
                <Server size={18} />
                <span>System Design</span>
              </div>
              <div>
                <Code2 size={18} />
                <span>IT Solutions</span>
              </div>
            </div>

            <div className="quote-card compact">
              <span className="quote-mark">“</span>
              <p>Technology for a better tomorrow.</p>
              <span className="quote-mark">”</span>
            </div>
          </section>
        )}

        {active === "save" && (
          <section key={active} className="content-section section-enter">
            <div className="section-top">
              <button className="back-button" onClick={() => goTo("home")}>
                ‹
              </button>
              <span>Save Contact</span>
            </div>

            <div className="save-illustration">
              <div className="save-icon">
                <UserRound size={46} />
              </div>
              <Download className="download-badge" size={22} />
            </div>

            <h2 className="center-title">Save Contact</h2>
            <p className="center-copy">
              Save my contact details directly to your phone.
            </p>

            <button className="download-card-button" onClick={downloadVCard}>
              <Download size={20} />
              Download vCard
            </button>

            <p className="small-note">
              This will save my name, numbers, emails and other details to your
              contacts.
            </p>
          </section>
        )}

        {active === "contact" && (
          <section key={active} className="content-section section-enter">
            <div className="section-top">
              <button className="back-button" onClick={() => goTo("home")}>
                ‹
              </button>
              <span>Let's Connect</span>
            </div>

            <h2 className="center-title">Let's Connect</h2>
            <p className="center-copy">
              Feel free to reach out through any of these channels.
            </p>

            <div className="stack-links">
              {profile.phones.map((phone) => (
                <a key={phone} href={`tel:${phone}`}>
                  <Phone size={18} /> Call {phone}
                </a>
              ))}
              {profile.emails.map((email) => (
                <a key={email} href={`mailto:${email}`}>
                  <Mail size={18} /> {email}
                </a>
              ))}
              <a href={profile.facebook} target="_blank" rel="noreferrer">
                <Facebook size={18} /> Facebook
              </a>
              <a href={profile.messenger} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Messenger
              </a>
              <a href={profile.instagram} target="_blank" rel="noreferrer">
                <Instagram size={18} /> Instagram
              </a>
              <a href={profile.tiktok} target="_blank" rel="noreferrer">
                <Music2 size={18} /> TikTok
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href={profile.website} target="_blank" rel="noreferrer">
                <Globe size={18} /> Website
              </a>
            </div>
          </section>
        )}

        <nav className="bottom-nav">
          <button
            className={active === "home" ? "active" : ""}
            onClick={() => goTo("home")}
          >
            <Home size={19} />
            <span>Home</span>
          </button>
          <button
            className={active === "about" ? "active" : ""}
            onClick={() => goTo("about")}
          >
            <User size={19} />
            <span>About</span>
          </button>
          <button
            className={active === "save" ? "active" : ""}
            onClick={() => goTo("save")}
          >
            <ContactRound size={19} />
            <span>Save</span>
          </button>
          <button
            className={active === "contact" ? "active" : ""}
            onClick={() => goTo("contact")}
          >
            <MessageCircle size={19} />
            <span>Contact</span>
          </button>
        </nav>
      </main>

      {showContact && (
        <button
          className="modal-backdrop"
          onClick={() => setShowContact(false)}
          aria-label="Close"
        >
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowContact(false)}
            >
              <X />
            </button>
            <h2>Let's Connect</h2>
            <p>Choose how you'd like to contact Marion.</p>
          </div>
        </button>
      )}
    </div>
  );
}

export default App;
