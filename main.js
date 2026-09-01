// =========================================================
// AYRN WEBSITE JAVASCRIPT
// =========================================================


// =========================================================
// 1. SMOOTH SCROLL
// =========================================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});


// =========================================================
// 2. AYRN OPPORTUNITIES
// =========================================================
//
// To add or update an opportunity, edit ONLY the information
// inside the relevant section below.
//
// You do NOT need to edit the HTML pages.
//
// =========================================================


const opportunities = {

  // ---------------------------------------------------------
  // RESEARCH CALLS
  // ---------------------------------------------------------

  researchCalls: [

    {
      title: "Call for Research Proposals",
      description:
        "Funding opportunity for researchers working on evidence-based development.",
      deadline: "12 Sept 2026",
      link: "#"
    }

  ],


  // ---------------------------------------------------------
  // FELLOWSHIPS
  // ---------------------------------------------------------

  fellowships: [

    {
      title: "Youth Research Fellowship",
      description:
        "A fellowship opportunity for emerging African researchers.",
      deadline: "18 Sept 2026",
      link: "#"
    }

  ],


  // ---------------------------------------------------------
  // TRAININGS
  // ---------------------------------------------------------

  trainings: [

    {
      title: "Research Methods Training",
      description:
        "Practical training opportunity for early-career researchers.",
      deadline: "25 Sept 2026",
      link: "#"
    }

  ],


  // ---------------------------------------------------------
  // CONSULTANCIES
  // ---------------------------------------------------------

  consultancies: [

    {
      title: "Research Consultancy Opportunity",
      description:
        "Consultancy opportunity for researchers and research professionals.",
      deadline: "30 Sept 2026",
      link: "#"
    }

  ],


  // ---------------------------------------------------------
  // CONFERENCES
  // ---------------------------------------------------------

  conferences: [

    {
      title: "CIDRA Conference 2027",
      description:
        "Call for abstracts for the 2027 CIDRA Conference on regional integration in Africa and Europe.",
      deadline: "Coming Soon",
      link: "#"
    }

  ],


  // ---------------------------------------------------------
  // INTERNSHIPS
  // ---------------------------------------------------------

  internships: [

    {
      title: "Research Internship Opportunity",
      description:
        "An internship opportunity for students and early-career researchers.",
      deadline: "Coming Soon",
      link: "#"
    }

  ]

};


// =========================================================
// 3. FUNCTION TO DISPLAY OPPORTUNITIES
// =========================================================

function displayOpportunities(listId, opportunitiesList) {

  const container = document.getElementById(listId);

  // If this page doesn't contain this opportunity category,
  // stop here.
  if (!container) {
    return;
  }


  // Clear existing content
  container.innerHTML = "";


  // If there are no opportunities
  if (opportunitiesList.length === 0) {

    container.innerHTML = `
      <div class="post-card">
        <div class="post-body">
          <h3>No opportunities available right now.</h3>
          <p>
            Check back soon for new opportunities.
          </p>
        </div>
      </div>
    `;

    return;

  }


  // Create each opportunity
  opportunitiesList.forEach(opportunity => {

    const article = document.createElement("article");

    article.className = "post-card";


    article.innerHTML = `

      <div class="post-date-stub">

        <span class="stub-month">
          DEADLINE
        </span>

        <span class="stub-day">
          ${getDay(opportunity.deadline)}
        </span>

        <span class="stub-year">
          ${getMonthYear(opportunity.deadline)}
        </span>

      </div>


      <div class="post-body">

        <span class="post-tag">
          Opportunity
        </span>

        <h3>
          <a
            href="${opportunity.link}"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${opportunity.title}
          </a>
        </h3>

        <p class="post-excerpt">
          ${opportunity.description}
        </p>

        <p class="post-meta">

          <span class="deadline">
            Deadline: ${opportunity.deadline}
          </span>

        </p>

        <a
          href="${opportunity.link}"
          class="btn-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View opportunity →
        </a>

      </div>

    `;


    container.appendChild(article);

  });

}


// =========================================================
// 4. DATE HELPERS
// =========================================================

function getDay(date) {

  const match = date.match(/\d+/);

  if (match) {
    return match[0];
  }

  return "—";

}


function getMonthYear(date) {

  const parts = date.split(" ");

  if (parts.length >= 3) {

    return `${parts[0]} ${parts[2]}`;

  }

  return "";

}


// =========================================================
// 5. LOAD EACH OPPORTUNITY PAGE
// =========================================================


// Research Calls
displayOpportunities(
  "research-calls-list",
  opportunities.researchCalls
);


// Fellowships
displayOpportunities(
  "fellowships-list",
  opportunities.fellowships
);


// Trainings
displayOpportunities(
  "trainings-list",
  opportunities.trainings
);


// Consultancies
displayOpportunities(
  "consultancies-list",
  opportunities.consultancies
);


// Conferences
displayOpportunities(
  "conferences-list",
  opportunities.conferences
);


// Internships
displayOpportunities(
  "internships-list",
  opportunities.internships
);