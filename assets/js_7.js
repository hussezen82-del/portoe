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
            }, 5000); // Hilang setelah 5 detik
          }
          return () => clearTimeout(a);
        }, [e]);

        /* ================================================================
           EFFECT 2: TYPEWRITER + ANIMATION + SECURITY
           ================================================================ */
        (0, l.useEffect)(() => {
          // === PROTECTION: Block context menu & dev tools ===
          let e, s = e => { e.preventDefault(); };
          let a = e => {
            // F12 / Ctrl+Shift+I/J/C / Ctrl+U
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

          // === TYPEWRITER EFFECT ===
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

          // === INTERSECTION OBSERVER (Scroll animation) ===
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

          // Observe semua elemen dengan class tertentu
          document.querySelectorAll(".link-card, .spotify-section, .footer")
            .forEach(e => l.observe(e));

          // === CLEANUP ===
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
                children: "Music, Coding, Developer, Build, Fashion, and Handsome."
              }),
              (0, i.jsxs)("div", { className: "sidebar-skills", children: [
                (0, i.jsx)("h3", { className: "sidebar-skills-title", children: "My Skills" }),
                (0, i.jsx)("div", { className: "skills-container",
                  style: { justifyContent: "center", flexWrap: "wrap", gap: "15px" },
                  children: [
                    // Skill badges: JavaScript, CSS3, Python, React, Node.js, Flutter,
                    // Kali Linux, Java, Kotlin, Next.js, Angular, HTML
                    // ... (12 skill badges dengan onClick handler)
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
                "Hollaa, I am ",
                (0, i.jsx)("span", { className: "highlight", children: "RFFKA`XXX" })
              ]}),
              (0, i.jsxs)("div", { className: "typewriter-line", children: [
                (0, i.jsx)("span", { className: "typewriter-text", id: "typewriter" }),
                (0, i.jsx)("span", { className: "typewriter-cursor", children: "|" })
              ]}),
              (0, i.jsx)("p", { className: "subtitle",
                children: "Welcome to my portfolio. I create modern, responsive, and user-focused websites and application."
              })
            ]}),

            /* Links Section */
            (0, i.jsxs)("div", { className: "content-section", children: [
              (0, i.jsx)("h2", { className: "section-title", children: "Connect With Me" }),
              (0, i.jsxs)("div", { className: "links-grid", children: [
                // WhatsApp Channel
                // WhatsApp Personal
                // Telegram
                // TikTok
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
                    // ... 16 lagu
                  ]}),
                  (0, i.jsxs)("div", { className: "spotify-preview", children: [
                    (0, i.jsx)("i", { className: "fas fa-music" }),
                    " .Env • RFFKA`XX Playlist Song"
                  ]})
                ]})
              ]})
            }),

            /* Footer */
            (0, i.jsx)("div", { className: "footer", children:
              (0, i.jsxs)("div", { className: "footer-content", children: [
                (0, i.jsxs)("div", { className: "footer-logo", children: [
                  (0, i.jsx)("span", { children: " RFFKA" }),
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

  // ================================================================
  // CHUNK INITIALIZATION
  // ================================================================
  function(e) {
    e.O(0, [239, 441, 255, 358], () => e(e.s = 61));
    _N_E = e.O();
  }

})(self);