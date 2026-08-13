/* ================================================================
   PORTFOLIO PAGE COMPONENT
   Chunk: 974
   ================================================================ */

(function(self) {
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[974], {

    /* ================================================================
       MODULE 61: MAIN PAGE (LAZY LOAD)
       ================================================================ */
    61: function(e, s, a) {
      Promise.resolve().then(a.bind(a, 7322));
    },

    /* ================================================================
       MODULE 7322: PORTFOLIO COMPONENT
       ================================================================ */
    7322: function(e, s, a) {
      "use strict";

      a.r(s);
      a.d(s, { default: () => c });

      var i = a(5155),  // jsx runtime
          l = a(2115),  // React
          n = a(5239);  // Image component (next/image)

      /* ================================================================
         MAIN PORTFOLIO COMPONENT
         ================================================================ */
      function c() {
        let [e, s] = (0, l.useState)(null); // State untuk skill yang dipilih

        /* ================================================================
           EFFECT 1: SKILL POPUP TIMEOUT
           ================================================================ */
        (0, l.useEffect)(() => {
          let a;
          if (e) {
            a = setTimeout(() => {
              s(null);
            }, 5000);
          }
          return () => clearTimeout(a);
        }, [e]);

        /* ================================================================
           EFFECT 2: TYPEWRITER + ANIMATION + SECURITY
           ================================================================ */
        (0, l.useEffect)(() => {
          let e, s = e => { e.preventDefault(); };
          let a = e => {
            if (
              "F12" === e.key ||
              (e.ctrlKey && e.shiftKey && ["I", "i", "J", "j", "C", "c"].includes(e.key)) ||
              (e.ctrlKey && ["U", "u"].includes(e.key))
            ) {
              e.preventDefault();
            }
          };

          document.addEventListener("contextmenu", s);
          document.addEventListener("keydown", a);

          let i = document.getElementById("typewriter");
          if (i) {
            let s = ["Web Developer", "Code Is Art", "Coder Enthusiast", "Music and Handsome"];
            let a = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#FF9F1C"];
            let l = 0, n = 0, c = !1;

            let t = () => {
              let r = s[l];

              if (c) {
                i.textContent = r.substring(0, n - 1);
                n--;
              } else {
                i.textContent = r.substring(0, n + 1);
                n++;
              }

              i.style.color = a[l];

              let o = c ? 50 : 110;

              if (!c && n === r.length) {
                o = 1800;
                c = !0;
              } else if (c && 0 === n) {
                c = !1;
                l = (l + 1) % s.length;
                o = 400;
              }

              e = setTimeout(t, o);
            };

            e = setTimeout(t, 600);
          }

          let l = new IntersectionObserver(
            e => {
              e.forEach(e => {
                if (e.isIntersecting) {
                  let s = e.target;
                  if (!s.classList.contains("animated")) {
                    s.style.opacity = "1";
                    s.style.transform = "translateY(0)";
                    s.classList.add("animated");
                  }
                }
              });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
          );

          document.querySelectorAll(".link-card, .spotify-section, .footer")
            .forEach(e => l.observe(e));

          return () => {
            document.removeEventListener("contextmenu", s);
            document.removeEventListener("keydown", a);
            if (e) clearTimeout(e);
            l.disconnect();
          };
        }, []);

        /* ================================================================
           RENDER: PORTFOLIO UI
           ================================================================ */
        return (0, i.jsxs)("div", { className: "container", children: [

          /* --- SIDEBAR --- */
          (0, i.jsxs)("div", { className: "sidebar", children: [

            /* Brand Capsule */
            (0, i.jsxs)("div", { className: "brand-capsule", children: [
              (0, i.jsx)("div", { className: "brand-circle", children:
                (0, i.jsx)("i", { className: "fas fa-terminal" })
              }),
              (0, i.jsx)("span", { className: "brand-name", children: "RFFKA`XXX" }),
              (0, i.jsx)("span", { className: "verified-badge-blue", children:
                (0, i.jsx)("i", { className: "fas fa-check-circle" })
              })
            ]}),

            /* Profile Banner */
            (0, i.jsxs)("div", { className: "profile-banner-container", children: [
              (0, i.jsx)("div", { className: "profile-banner", children:
                (0, i.jsx)(n.default, {
                  src: "https://c.termai.cc/i185/VSgr.jpg",
                  alt: "Profile Banner",
                  className: "banner-image",
                  fill: !0,
                  style: { objectFit: "cover" },
                  referrerPolicy: "no-referrer"
                })
              }),
              (0, i.jsx)("div", { className: "profile-picture-container", children:
                (0, i.jsx)("div", { className: "profile-frame", children:
                  (0, i.jsx)(n.default, {
                    src: "https://c.termai.cc/i191/dgzt.jpg",
                    alt: "Profile",
                    className: "profile-picture",
                    width: 124,
                    height: 124,
                    referrerPolicy: "no-referrer"
                  })
                })
              })
            ]}),

            /* Profile Info */
            (0, i.jsxs)("div", { className: "profile-section", children: [
              (0, i.jsxs)("div", { className: "profile-name", children: [
                (0, i.jsx)("h1", { className: "name", children: "RFFKA`XXX" }),
                (0, i.jsx)("span", { className: "verified-badge-blue", children:
                  (0, i.jsx)("i", { className: "fas fa-check-circle" })
                })
              ]}),
              (0, i.jsx)("p", { className: "profile-bio",
                children: "Music, Coding, Developer, Builder, Fashion, and Handsome."
              }),
              (0, i.jsxs)("div", { className: "sidebar-skills", children: [
                (0, i.jsx)("h3", { className: "sidebar-skills-title", children: "My Skills" }),
                (0, i.jsx)("div", { className: "skills-container",
                  style: { justifyContent: "center", flexWrap: "wrap", gap: "15px" },
                  children: [
                    /* ==========================================================
                       SKILL BADGES - HANYA 8 SKILL YANG DIKUASAI
                       ========================================================== */
                    { name: "JavaScript", css: "skill-js", icon: "fab fa-js" },
                    { name: "Node.js", css: "skill-node", icon: "fab fa-node-js" },
                    { name: "Python", css: "skill-python", icon: "fab fa-python" },
                    { name: "HTML", css: "skill-html", icon: "fab fa-html5" },
                    { name: "CSS3", css: "skill-css", icon: "fab fa-css3-alt" },
                    { name: "Git", css: "skill-git", icon: "fab fa-git-alt" },
                    { name: "GitHub", css: "skill-github", icon: "fab fa-github" },
                    { name: "MongoDB", css: "skill-mongodb", icon: "devicon-mongodb-plain" }
                  ].map(a => (0, i.jsxs)("div", {
                    className: "skill-wrapper",
                    children: [
                      (0, i.jsx)("div", {
                        className: "skill-badge ".concat(a.css),
                        title: a.name,
                        onClick: () => s(a.name),
                        children: (0, i.jsx)("i", { className: a.icon })
                      }),
                      e === a.name && (0, i.jsx)("div", {
                        className: "small-skill-text",
                        children: a.name
                      })
                    ]
                  }, a.name))
                })
              ]})
            ]})
          ]}),

          /* --- MAIN CONTENT --- */
          (0, i.jsxs)("div", { className: "main-content", children: [

            /* Welcome Section */
            (0, i.jsxs)("div", { className: "welcome-section", children: [
              (0, i.jsxs)("h1", { className: "welcome-text", children: [
                "Welcome Guys",
                (0, i.jsx)("span", { className: "highlight", children: "How Are you" })
              ]}),
              (0, i.jsxs)("div", { className: "typewriter-line", children: [
                (0, i.jsx)("span", { className: "typewriter-text", id: "typewriter" }),
                (0, i.jsx)("span", { className: "typewriter-cursor", children: "|" })
              ]}),
              (0, i.jsx)("p", { className: "subtitle",
                children: "Welcome to my portfolio. I create modern, responsive, and user-focused websites and monitor scarpe."
              })
            ]}),

            /* Links Section */
            (0, i.jsxs)("div", { className: "content-section", children: [
              (0, i.jsx)("h2", { className: "section-title", children: "Connect With Me" }),
              (0, i.jsxs)("div", { className: "links-grid", children: [
                (0, i.jsxs)("a", {
                  href: "https://whatsapp.com/channel/0029Vb8OhAa3wtb7bswAHz46",
                  className: "link-card whatsapp-card",
                  children: [
                    (0, i.jsx)("div", { className: "link-icon", children:
                      (0, i.jsx)("i", { className: "fab fa-whatsapp" })
                    }),
                    (0, i.jsxs)("div", { className: "link-content", children: [
                      (0, i.jsx)("h3", { children: "WhatsApp Channel" }),
                      (0, i.jsx)("p", { children: "Join my broadcast channel for updates" })
                    ]})
                  ]
                }),
                (0, i.jsxs)("a", {
                  href: "https://wa.me/6285875024026",
                  className: "link-card whatsapp-card",
                  children: [
                    (0, i.jsx)("div", { className: "link-icon", children:
                      (0, i.jsx)("i", { className: "fab fa-whatsapp" })
                    }),
                    (0, i.jsxs)("div", { className: "link-content", children: [
                      (0, i.jsx)("h3", { children: "Official WhatsApp" }),
                      (0, i.jsx)("p", { children: "Connect with me on WhatsApp" })
                    ]})
                  ]
                }),
                (0, i.jsxs)("a", {
                  href: "https://t.me/Rxe_syntax",
                  className: "link-card telegram-card",
                  children: [
                    (0, i.jsx)("div", { className: "link-icon", children:
                      (0, i.jsx)("i", { className: "fab fa-telegram" })
                    }),
                    (0, i.jsxs)("div", { className: "link-content", children: [
                      (0, i.jsx)("h3", { children: "Official Telegram" }),
                      (0, i.jsx)("p", { children: "Connect with me on Telegram" })
                    ]})
                  ]
                }),
                (0, i.jsxs)("a", {
                  href: "https://www.tiktok.com/@Jash_env",
                  className: "link-card",
                  children: [
                    (0, i.jsx)("div", { className: "link-icon", children:
                      (0, i.jsx)("i", { className: "fab fa-tiktok" })
                    }),
                    (0, i.jsxs)("div", { className: "link-content", children: [
                      (0, i.jsx)("h3", { children: "Follow me on TikTok" }),
                      (0, i.jsx)("p", { children: "Real Account TikTok" })
                    ]})
                  ]
                })
              ]})
            ]}),

            /* Spotify Section */
            (0, i.jsx)("div", { className: "spotify-section", children:
              (0, i.jsxs)("div", { className: "spotify-container", children: [
                (0, i.jsxs)("div", { className: "spotify-header", children: [
                  (0, i.jsx)("i", { className: "fab fa-spotify" }),
                  (0, i.jsx)("h2", { className: "spotify-title", children: "My Current Playlist" })
                ]}),
                (0, i.jsx)("p", { className: "spotify-subtitle",
                  children: "Music that fuels my creativity"
                }),
                (0, i.jsx)("iframe", {
                  className: "spotify-embed",
                  src: "https://open.spotify.com/embed/playlist/08BnwpypAFqoqKs6PfWEp7?utm_source=generator&theme=0&si=dbac0cfd684143a3",
                  frameBorder: "0",
                  allow: "encrypted-media",
                  sandbox: "allow-scripts allow-same-origin allow-forms"
                }),
                (0, i.jsxs)("div", { className: "spotify-info", children: [
                  (0, i.jsx)("div", { className: "spotify-artist", children: "Playlist RFFKA`XXX" }),
                  (0, i.jsxs)("div", { className: "spotify-tracks", children: [
                    "1. Mary On A Cross • Ghost", (0, i.jsx)("br", {}),
                    "2. Nuts • Lil Peep", (0, i.jsx)("br", {}),
                    "3. Bye • Altare", (0, i.jsx)("br", {}),
                    "4. Jangan Paksa Rindu • Ifan Seventeen", (0, i.jsx)("br", {}),
                    "5. Tertanam • Tony Q Rastafara", (0, i.jsx)("br", {}),
                    "6. Cincin • Hindia", (0, i.jsx)("br", {}),
                    "7. Bintang Di Surga • Noah", (0, i.jsx)("br", {}),
                    "8. Secukupnya • Hindia", (0, i.jsx)("br", {}),
                    "9. Rumah Ke Rumah • Hindia", (0, i.jsx)("br", {}),
                    "10. Golden Brown • The Stranglers", (0, i.jsx)("br", {}),
                    "11. A Little Piece Of Heaven • Avenged Sevenfold", (0, i.jsx)("br", {}),
                    "12. Billie Jean • Michael Jackson", (0, i.jsx)("br", {}),
                    "13. No Pole • Forsaken", (0, i.jsx)("br", {}),
                    "14. On The Floor • Eliot Sutton", (0, i.jsx)("br", {}),
                    "15. Tante Culik Aku Dong • ciaffa, fedo DJ", (0, i.jsx)("br", {}),
                    "16. Timeless • The Weeknd, Playboi Carti", (0, i.jsx)("br", {})
                  ]}),
                  (0, i.jsxs)("div", { className: "spotify-preview", children: [
                    (0, i.jsx)("i", { className: "fas fa-music" }),
                    " .Env • RFFKA`XXX Playlist"
                  ]})
                ]})
              ]})
            }),

            /* Footer */
            (0, i.jsx)("div", { className: "footer", children:
              (0, i.jsxs)("div", { className: "footer-content", children: [
                (0, i.jsxs)("div", { className: "footer-logo", children: [
                  (0, i.jsx)("span", { children: "RFFKA" }),
                  (0, i.jsx)("span", { children: "`XXX" })
                ]}),
                (0, i.jsxs)("div", { className: "footer-copyright", children: [
                  (0, i.jsx)("p", { children: "\xa9 2026 RFFKA`XXX • Developer" }),
                  (0, i.jsxs)("div", { className: "security-badge", children: [
                    (0, i.jsx)("i", { className: "fas fa-lock" }),
                    " All connections secured with encryption"
                  ]})
                ]})
              ]})
            })
          ]})
        ]});
      }
    }
  }],

  /* ================================================================
     CHUNK INITIALIZATION
     ================================================================ */
  function(e) {
    e.O(0, [239, 441, 255, 358], () => e(e.s = 61));
    _N_E = e.O();
  }

})(self);