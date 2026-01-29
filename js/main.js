// Job Opportunities Data
const opportunities = [
  {
    id: 1,
    title: "عامل بناء - مشروع إعادة إعمار",
    category: "construction",
    description:
      "مطلوب عمال بناء لمساعد في مشاريع إعادة إعمار المنازل المتضررة",
    location: "غزة - حي الشجاعية",
    duration: "3 أشهر",
    salary: "150 شيكل/يوم",
    status: "available",
    requirements: "خبرة في البناء، قوة بدنية",
    image: "assets/images/construction-1.jpg",
  },
  {
    id: 2,
    title: "نظافة شوارع ومناطق عامة",
    category: "cleaning",
    description: "عمل في تنظيف الشوارع والأماكن العامة بعد الحرب",
    location: "غزة - جميع المناطق",
    duration: "شهر واحد",
    salary: "100 شيكل/يوم",
    status: "available",
    requirements: "لا توجد متطلبات خاصة",
    image: "assets/images/service-2.jpg",
  },
  {
    id: 3,
    title: "معلم مساعد - دعم تعليمي",
    category: "education",
    description: "مساعدة في تقديم الدعم التعليمي للأطفال المتأثرين",
    location: "غزة - مراكز تعليمية",
    duration: "6 أشهر",
    salary: "120 شيكل/يوم",
    status: "available",
    requirements: "خبرة في التعليم أو تعليم جامعي",
    image: "assets/images/education-1.jpg",
  },
  {
    id: 4,
    title: "عامل زراعي - مشروع زراعة",
    category: "agriculture",
    description: "عمل في مشاريع زراعية لإعادة تأهيل الأراضي الزراعية",
    location: "غزة - المناطق الزراعية",
    duration: "4 أشهر",
    salary: "110 شيكل/يوم",
    status: "available",
    requirements: "خبرة في الزراعة مفضلة",
    image: "assets/images/service-2.jpg",
  },
  {
    id: 5,
    title: "بناء جدران - إصلاح منازل",
    category: "construction",
    description: "مطلوب عمال لبناء الجدران وإصلاح المنازل المتضررة",
    location: "غزة - حي التفاح",
    duration: "2 أشهر",
    salary: "140 شيكل/يوم",
    status: "completed",
    requirements: "خبرة في البناء",
    image: "assets/images/construction-1.jpg",
  },
  {
    id: 6,
    title: "تنظيف مباني حكومية",
    category: "cleaning",
    description: "عمل في تنظيف المباني الحكومية والمؤسسات",
    location: "غزة - المدينة",
    duration: "شهر واحد",
    salary: "95 شيكل/يوم",
    status: "available",
    requirements: "لا توجد متطلبات خاصة",
    image: "assets/images/service-2.jpg",
  },
  {
    id: 7,
    title: "تدريب مهني - حرف يدوية",
    category: "education",
    description: "تدريب الشباب على الحرف اليدوية والمهارات المهنية",
    location: "غزة - مراكز التدريب",
    duration: "3 أشهر",
    salary: "130 شيكل/يوم",
    status: "available",
    requirements: "خبرة في الحرف اليدوية",
    image: "assets/images/education-1.jpg",
  },
  {
    id: 8,
    title: "زراعة أشجار - مشروع بيئي",
    category: "agriculture",
    description: "مشروع زراعة الأشجار لإعادة تأهيل البيئة",
    location: "غزة - الحدائق العامة",
    duration: "شهرين",
    salary: "105 شيكل/يوم",
    status: "available",
    requirements: "لا توجد متطلبات خاصة",
    image: "assets/images/agriculture-1.jpg",
  },
  {
    id: 9,
    title: "بناء جسور صغيرة",
    category: "construction",
    description: "مشروع بناء جسور صغيرة لربط المناطق",
    location: "غزة - مناطق متعددة",
    duration: "5 أشهر",
    salary: "160 شيكل/يوم",
    status: "pending",
    requirements: "خبرة في البناء والهندسة",
    image: "assets/images/construction-1.jpg",
  },
];

// Skills Data for Table
const skillsData = [
  {
    skill: "البناء والتشييد",
    field: "بناء",
    level: "متوسط",
    opportunities: 45,
    salary: "150 شيكل",
  },
  {
    skill: "النظافة والصيانة",
    field: "خدمات",
    level: "مبتدئ",
    opportunities: 60,
    salary: "100 شيكل",
  },
  {
    skill: "التعليم والتدريب",
    field: "تعليم",
    level: "متقدم",
    opportunities: 30,
    salary: "125 شيكل",
  },
  {
    skill: "الزراعة والبستنة",
    field: "زراعة",
    level: "متوسط",
    opportunities: 40,
    salary: "110 شيكل",
  },
  {
    skill: "النجارة",
    field: "حرف يدوية",
    level: "متقدم",
    opportunities: 25,
    salary: "140 شيكل",
  },
  {
    skill: "السباكة",
    field: "صيانة",
    level: "متوسط",
    opportunities: 35,
    salary: "130 شيكل",
  },
  {
    skill: "الدهان",
    field: "بناء",
    level: "مبتدئ",
    opportunities: 50,
    salary: "115 شيكل",
  },
  {
    skill: "الحدادة",
    field: "حرف يدوية",
    level: "متقدم",
    opportunities: 20,
    salary: "155 شيكل",
  },
];

// Smooth Scroll
function smoothScrollTo(targetId) {
  const target = document.querySelector(targetId);
  if (!target) return;
  const headerHeight = document.querySelector("header")?.offsetHeight || 80;
  const targetPosition =
    target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
}

// Display Opportunities with Category Filter
function displayOpportunities(filterCategory = "all") {
  const container = document.getElementById("opportunities-container");
  container.innerHTML = "";
  opportunities.forEach((opp) => {
    if (filterCategory === "all" || opp.category === filterCategory) {
      const statusText =
        opp.status === "available"
          ? "متاح"
          : opp.status === "completed"
            ? "مكتمل"
            : "قيد الانتظار";
      const statusClass =
        opp.status === "available"
          ? "status-available"
          : opp.status === "completed"
            ? "status-completed"
            : "status-pending";
      container.innerHTML += `
                <div class="col-12 col-md-6 col-lg-4 opportunity-card" data-category="${opp.category}">
                    <div class="card h-100 shadow-sm">
                        <div class="opportunity-image"><img src="${opp.image}" alt="${opp.title}" class="card-img-top"></div>
                        <div class="card-body">
                            <h5 class="card-title">${opp.title}</h5>
                            <p class="card-text text-muted">${opp.description}</p>
                            <ul class="list-unstyled">
                                <li><i class="fas fa-map-marker-alt text-primary"></i> ${opp.location}</li>
                                <li><i class="fas fa-clock text-primary"></i> المدة: ${opp.duration}</li>
                                <li><i class="fas fa-money-bill-wave text-primary"></i> الأجر: ${opp.salary}</li>
                                <li><i class="fas fa-tasks text-primary"></i> ${opp.requirements}</li>
                            </ul>
                            <span class="status-badge ${statusClass}">${statusText}</span>
                        </div>
                    </div>
                </div>
            `;
    }
  });
}

// Display Skills Table
function displaySkillsTable() {
  const tbody = document.getElementById("skills-table-body");
  tbody.innerHTML = skillsData
    .map(
      (s) => `
        <tr><td>${s.skill}</td><td>${s.field}</td><td>${s.level}</td><td>${s.opportunities}</td><td>${s.salary}</td></tr>
    `,
    )
    .join("");
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(
      '.nav-link[href^="#"], .navbar-brand[href^="#"], .hero-buttons a[href^="#"], .footer-links a[href^="#"]',
    )
    .forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        if (href && href !== "#") {
          document
            .querySelectorAll(".nav-link")
            .forEach((l) => l.classList.remove("active"));
          if (this.classList.contains("nav-link")) this.classList.add("active");
          const navbarCollapse = document.getElementById("navbarNav");
          if (navbarCollapse && window.innerWidth < 992) {
            if (typeof bootstrap !== "undefined")
              new bootstrap.Collapse(navbarCollapse, { toggle: false }).hide();
            else navbarCollapse.classList.remove("show");
          }
          setTimeout(() => smoothScrollTo(href), 100);
        }
      });
    });

  document.querySelectorAll(".btn-primary").forEach((btn) => {
    btn.addEventListener("click", function () {
      this.style.transform = "scale(0.95)";
      setTimeout(() => (this.style.transform = ""), 200);
    });
  });

  document.querySelectorAll("#skills-table-body tr").forEach((row, i) => {
    row.style.opacity = "0";
    setTimeout(() => {
      row.style.transition = "opacity 0.5s ease";
      row.style.opacity = "1";
    }, i * 100);
  });
});

// jQuery - Event Handling and Animations
$(document).ready(function () {
  displayOpportunities("all");
  displaySkillsTable();

  // Filter Opportunities by Category
  $(".filter-btn").on("click", function () {
    const filterCategory = $(this).data("filter");
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");
    displayOpportunities(filterCategory);
    $("#opportunities-container").fadeOut(300, function () {
      $(this).fadeIn(300);
    });
  });

  // Update Active State for Links on Scroll
  $(window).on("scroll", function () {
    const scrollPos = $(window).scrollTop() + 100;
    $(".nav-link").each(function () {
      const refElement = $($(this).attr("href"));
      if (
        refElement.length &&
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
      }
    });
  });

  // Form Validation
  $("#contact-form").on("submit", function (e) {
    e.preventDefault();
    let isValid = true;
    const fields = [
      { id: "name", regex: null, msg: "الرجاء إدخال الاسم" },
      {
        id: "email",
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        msg: "الرجاء إدخال بريد إلكتروني صحيح",
      },
      {
        id: "phone",
        regex: /^[0-9]{9,10}$/,
        msg: "الرجاء إدخال رقم هاتف صحيح (9-10 أرقام)",
      },
      { id: "field", regex: null, msg: "الرجاء اختيار المجال" },
    ];

    fields.forEach((f) => {
      const val = $("#" + f.id)
        .val()
        .trim();
      if (val === "" || (f.regex && !f.regex.test(val))) {
        $("#" + f.id)
          .addClass("is-invalid")
          .removeClass("is-valid");
        isValid = false;
      } else {
        $("#" + f.id)
          .removeClass("is-invalid")
          .addClass("is-valid");
      }
    });

    if (isValid) {
      $("#form-message")
        .html(
          '<div class="alert alert-success">تم إرسال طلبك بنجاح! سنتواصل معك قريباً.</div>',
        )
        .slideDown();
      this.reset();
      setTimeout(() => $("#form-message").slideUp(), 5000);
    }
  });

  $(".service-card").on("click", function () {
    alert("شكراً لاهتمامك بخدمة: " + $(this).find("h4").text());
  });

  $(document)
    .on("mouseenter", ".opportunity-card", function () {
      $(this).find(".card").addClass("shadow-lg");
    })
    .on("mouseleave", ".opportunity-card", function () {
      $(this).find(".card").removeClass("shadow-lg");
    });
});
