import React from "react"

const works = [
  {
    id: "adkesma-issue-tracker",
    name: "Adkesma Issue Tracker BEM Fasilkom UI",
    shortname: "Adkesma Issue Tracker",
    role: "Full-stack developer",
    date: "Oct - Nov 2016",
    link: "https://bem.cs.ui.ac.id/issue",
    description:
      "Completely redesigned and rebuilt Adkesma Issue Tracker, a platform for students of Faculty of Computer Science Universitas Indonesia to report welfare-related issues.",
  },
  {
    id: "uiux-challenge",
    name: "UI/UX Challenge Ristek Fasilkom UI",
    shortname: "UI/UX Challenge",
    role: "Backend developer",
    date: "Jun 2016",
    description:
      "Created and integrated backend of registration and administration for an internal UI/UX competition at Faculty of Computer Science Universitas Indonesia.",
  },
  {
    id: "lpj-online",
    name: "LPJ Online BEM Fasilkom UI",
    shortname: "LPJ Online",
    role: "Full-stack developer",
    date: "May - Jun 2016",
    link: "https://bem.cs.ui.ac.id/lpj16",
    description:
      "Online accountability reporting system of Faculty of Computer Science Student Executive Board to be used by the Internal Control Bureau. Designed the database schema, wrote back-end system using Laravel and user interfaces using Bootstrap 3.",
  },
  {
    id: "vakansi-visual",
    name: "Vakansi Visual Company Profile Website",
    shortname: "Vakansi Visual",
    role: "Designer & developer",
    date: "Aug 2014 - Jan 2015",
    link: "https://wiratmika.me/Vakansi-Visual/",
    description:
      "A company profile website for creative label based in Jakarta. Custom-designed the website and wrote the front-end code.",
  },
  {
    id: "oh-fasilkom",
    name: "Open House Fasilkom 2014 Event Website",
    shortname: "OH Fasilkom",
    role: "Developer",
    date: "Oct - Nov 2014",
    link: "https://wiratmika.me/OH-Fasilkom/",
    description:
      "A promotional website for yearly event held by BEM Fasilkom UI 2014. Wrote the front-end code based on existing mockups.",
  },
  {
    id: "startup-academy",
    name: "Startup Academy CompFest7",
    shortname: "Startup Academy",
    role: "Person in Charge",
    date: "Nov 2014 - Oct 2015",
    link:
      "https://web.archive.org/web/20151110034935/http://compfest.web.id/event/startup-academy",
    description:
      "Initiated and organized the first startup education event entirely organized by university students. Startup Academy is an event to ignite Indonesia's young talents in technopreneurship by giving education on startup development.<br>Invited 12 Indonesian startup activists to be mentors and speakers, including Andrias Ekoyuono (Ideosource), Dondi Hananto (Kinara Indonesia), and Sanny Gaddafi (8villages).",
  },
]

export default () => (
  <section id="portfolio">
    <h2 class="text-center" data-magellan-destination="portfolio">
      Portfolio
    </h2>
    <a name="portfolio" />
    <div class="divider" />

    <div class="row">
      <div class="small-9 small-centered columns">
        <p class="text-center">Here are several projects that I've done.</p>
      </div>
    </div>

    <ul class="row grid cs-style">
      {works.map(work => (
        <li class="works small-12 medium-6 large-4 columns">
          <figure>
            <div>
              <img src={`/images/${work.id}.jpg`} alt={work.name} />
              <figcaption>
                <h3>{work.shortname}</h3>
                <a href="#" class="button" data-reveal-id={work.id}>
                  View
                </a>
              </figcaption>
            </div>
          </figure>
        </li>
      ))}
      <li class="works small-12 medium-6 large-4 columns end">
        <figure>
          <div>
            <img src="images/you.jpg" alt="Your Call" />
            <figcaption>
              <h3>Your Call!</h3>
              <a href="#contact" class="button">
                Collaborate
              </a>
            </figcaption>
          </div>
        </figure>
      </li>
    </ul>
  </section>
)
