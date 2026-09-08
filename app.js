const pillars = {
  materials: {
    label: "MATERIALS",
    tagline: "What it's made from",
    owner: "manufacturer",
    questions: [
      ["M1","Are the principal materials or ingredients identified?","The product composition must be known.","BOM, ingredient specification, formulation or product specification."],
      ["M2","Can the source or origin of principal materials be traced?","Key inputs should be traceable beyond the brand.","Supplier records, invoices, certificates of origin or supplier declarations."],
      ["M3","Does the product use recycled content where technically appropriate?","Award only where a meaningful recycled-content claim is evidenced.","Supplier declaration, certificate or independently verified recycled-content percentage."],
      ["M4","Are renewable or responsibly sourced materials used where relevant?","Relevant certifications or sourcing controls should support the claim.","FSC, PEFC, certified sourcing record, supplier certification or equivalent."],
      ["M5","Have higher-impact materials been replaced with lower-impact alternatives?","There should be a documented reason for the improvement.","Previous/current specification, LCA, comparison study or design decision record."],
      ["M6","Have unnecessary materials or components been eliminated?","Assess both product and packaging.","Current design specification and evidence of component reduction."],
      ["M7","Has product or packaging material weight been optimised?","Lightweighting or right-sizing should be demonstrated.","Current/previous weight specs, benchmark or packaging optimisation record."],
      ["M8","Are problematic substances or materials controlled or avoided?","Restrictions should be documented rather than assumed.","SDS register, restricted substances list, supplier compliance declaration or test result."],
      ["M9","Is secondary and tertiary packaging minimised?","Assess cartons, films, dividers and pallets.","Packaging BOM, shipper specification or palletisation record."],
      ["M10","Are material sustainability claims independently substantiated?","Higher confidence should come from stronger evidence.","Third-party certification, test report, EPD, LCA or independently verified supplier data."]
    ]
  },
  method: {
    label: "METHOD",
    tagline: "How it's made",
    owner: "manufacturer",
    questions: [
      ["MD1","Is the manufacturing facility identified?","The actual site making the SKU must be known.","Facility name/address, manufacturing agreement or purchase record."],
      ["MD2","Is manufacturing energy consumption measured?","Energy should be measured for the relevant facility or process.","Electricity/fuel bills, submeter data or production energy records."],
      ["MD3","Is energy efficiency actively managed?","Look for actions, targets and results.","Energy plan, project records, equipment upgrades or consumption trend."],
      ["MD4","Is verified renewable electricity used?","Renewable claims must be evidenced.","Electricity contract, renewable certificate, PPA or on-site generation data."],
      ["MD5","Is water consumption measured?","Where relevant to production.","Water bills, meter records or process logs."],
      ["MD6","Are measures in place to reduce water consumption?","Improvements should be documented.","Project records, process changes, equipment specs or measured reduction."],
      ["MD7","Is production waste measured?","Waste should be quantified, not described generally.","Waste reports, invoices, weighbridge data or internal records."],
      ["MD8","Is production waste avoided, reused or recycled?","Award for demonstrated diversion or prevention.","Waste contractor reports, reuse logs or production-loss data."],
      ["MD9","Are hazardous chemicals and emissions appropriately controlled?","Relevant environmental risks must be managed.","SDS register, permits, procedures, monitoring or compliance records."],
      ["MD10","Is there a documented environmental management or improvement system?","Formal or equivalent systems may qualify.","ISO 14001, EMS, policy, objectives, audits and improvement records."]
    ]
  },
  makers: {
    label: "MAKERS",
    tagline: "Who makes it",
    owner: "manufacturer",
    questions: [
      ["MK1","Is the final manufacturer identified?","The legal or trading entity making the SKU should be known.","Manufacturing agreement, facility details or supplier master record."],
      ["MK2","Are significant upstream suppliers identifiable?","Focus on material suppliers that materially influence the product.","Approved supplier list, purchase records or supply-chain map."],
      ["MK3","Is compliance with applicable labour law evidenced?","Do not rely only on a generic policy.","Declaration plus payroll sample, audit report or legal compliance review."],
      ["MK4","Are safe working conditions demonstrated?","The manufacturer should show active worker-safety management.","OHS/WHS policy, incident records, audit, ISO 45001 or equivalent."],
      ["MK5","Are forced labour and child labour prohibited and controlled?","This is a critical BTRMRK criterion.","Supplier code, contracts, due-diligence procedure or modern-slavery controls."],
      ["MK6","Are workers paid in accordance with legal wage requirements?","Evidence should cover the relevant facility/workforce.","Payroll sample, audit or independent certification."],
      ["MK7","Are working hours and overtime appropriately controlled?","Where relevant to the manufacturing location.","Timesheets, HR policy or social audit."],
      ["MK8","Can workers raise grievances safely?","There should be a credible mechanism.","Grievance policy, hotline/process and anonymised records."],
      ["MK9","Are significant suppliers subject to responsible-sourcing requirements?","Standards should extend beyond the final factory.","Supplier code and signed supplier acknowledgement."],
      ["MK10","Are labour or social claims independently checked?","Independent verification materially strengthens the score.","SMETA, SA8000, amfori BSCI or equivalent social audit/certification."]
    ]
  },
  journey: {
    label: "JOURNEY",
    tagline: "How it gets to you",
    owner: "distributor",
    questions: [
      ["J1","Are major material and ingredient origins known?","Distributor may rely on verified manufacturer evidence.","Supplier origin declarations, invoices or supply-chain map."],
      ["J2","Is the final manufacturing location known?","The distributor must know where the SKU was produced.","Manufacturing record or supplier declaration."],
      ["J3","Is the route from manufacturer to primary market documented?","The main freight route should be traceable.","Bills of lading, freight records, carrier reports or route map."],
      ["J4","Is routine air freight avoided?","Emergency air freight should be distinguished from normal supply.","Freight invoices, carrier data or 12-month shipment summary."],
      ["J5","Are lower-impact freight modes prioritised where practical?","Assess actual modal choice rather than policy alone.","Freight policy plus shipment records."],
      ["J6","Are shipments consolidated to reduce unnecessary transport?","Look at order and container efficiency.","Container utilisation, shipment frequency or pallet consolidation records."],
      ["J7","Is transport packaging optimised?","Assess cartons, void fill, wrap and palletisation.","Transport packaging spec, pallet plan or optimisation study."],
      ["J8","Is local or regional sourcing used where it demonstrably reduces impact?","Local should not automatically earn a point.","Supplier locations plus comparison or evidence supporting the benefit."],
      ["J9","Are distribution emissions measured?","Methodology should be defined and repeatable.","Carrier emissions report or documented freight-emissions calculation."],
      ["J10","Is there evidence of ongoing transport-impact reduction?","Improvement should be measurable.","Year-on-year data, targets, route optimisation or mode-shift records."]
    ]
  },
  after: {
    label: "AFTER",
    tagline: "What happens next",
    owner: "distributor",
    questions: [
      ["A1","Is the intended end-of-use pathway defined?","The expected outcome should be clear for the target market.","Packaging/product specification and market disposal guidance."],
      ["A2","Can the principal packaging or product realistically be recycled, reused, refilled or composted?","Technical possibility alone is not enough.","Recognised recyclability guidance, testing or recovery-system evidence."],
      ["A3","Is that pathway available in the product's primary market?","Infrastructure must exist where the product is actually sold.","Council, regulator, DRS, recycler or collection-program evidence."],
      ["A4","Can main components be easily separated where necessary?","Assess consumer effort and design.","Physical review, packaging drawings or design specification."],
      ["A5","Are components compatible with the intended recovery stream?","Ink, labels, liners, closures and coatings may matter.","Recycler guidance, compatibility test or packaging assessment."],
      ["A6","Are problematic end-of-life materials avoided?","Avoid components that commonly contaminate recovery streams.","Material specification or design-for-recycling review."],
      ["A7","Are consumers clearly told what to do with the product or packaging?","Instructions should be specific to the market.","Final packaging artwork, disposal label or QR destination."],
      ["A8","Does the design maximise material recovery?","Design should support the intended after-use pathway.","Design-for-recycling assessment or packaging review."],
      ["A9","Is there an established collection or recovery system?","This can include kerbside, deposit return, take-back or refill.","Program documentation, contracts or recognised scheme details."],
      ["A10","Is there evidence the claimed recovery pathway works in practice?","Prefer observed recovery evidence over theoretical claims.","Recovery data, recycler confirmation or independent assessment."]
    ]
  }
};

const state = {
  manufacturer: {},
  distributor: {},
  meta: {}
};

const manufacturerContainer = document.getElementById("manufacturer");
const distributorContainer = document.getElementById("distributor");
const reviewContainer = document.getElementById("review");
const template = document.getElementById("questionTemplate");

function renderPillar(key, pillar) {
  const wrapper = document.createElement("section");
  wrapper.className = "pillar-section";
  wrapper.innerHTML = `
    <div class="pillar-title">
      <div>
        <h2>${pillar.label}</h2>
        <p>${pillar.tagline}</p>
      </div>
      <strong id="${key}-tab-score">0 / 5</strong>
    </div>
  `;

  pillar.questions.forEach(([code, question, help, evidence]) => {
    const node = template.content.cloneNode(true);
    const article = node.querySelector(".question");
    article.dataset.code = code;
    article.dataset.pillar = key;
    article.dataset.owner = pillar.owner;

    node.querySelector(".question-code").textContent = code;
    node.querySelector(".question-text").textContent = question;
    node.querySelector(".question-help").textContent = help;
    node.querySelector(".required-evidence").textContent = evidence;

    const score = node.querySelector(".question-score");
    const status = node.querySelector(".evidence-status");
    const notes = node.querySelector(".evidence-notes");
    const ref = node.querySelector(".evidence-ref");

    const save = () => {
      const owner = pillar.owner;
      state[owner][code] = {
        score: Number(score.value),
        status: status.value,
        notes: notes.value,
        reference: ref.value,
        pillar: key
      };

      // Evidence rule: no evidence supplied = score forced to 0
      if (status.value === "none" && Number(score.value) > 0) {
        score.value = "0";
        state[owner][code].score = 0;
      }
      calculate();
      saveLocal();
    };

    score.addEventListener("change", save);
    status.addEventListener("change", save);
    notes.addEventListener("input", save);
    ref.addEventListener("input", save);

    wrapper.appendChild(node);
  });

  return wrapper;
}

Object.entries(pillars).forEach(([key, pillar]) => {
  const target = pillar.owner === "manufacturer" ? manufacturerContainer : distributorContainer;
  target.appendChild(renderPillar(key, pillar));
});

function getQuestionResult(code, owner) {
  return state[owner][code] || { score: 0, status: "none", notes: "", reference: "" };
}

function pillarRawScore(key) {
  const p = pillars[key];
  return p.questions.reduce((sum, [code]) => sum + getQuestionResult(code, p.owner).score, 0);
}

function pillarScoreFive(key) {
  return pillarRawScore(key) / 2;
}

function roundToHalf(n) {
  return Math.round(n * 2) / 2;
}

function calculate() {
  let totalFive = 0;

  Object.keys(pillars).forEach(key => {
    const five = pillarScoreFive(key);
    totalFive += five;
    const summary = document.querySelector(`.pillar-summary[data-pillar="${key}"] strong`);
    if (summary) summary.textContent = `${five.toFixed(five % 1 ? 1 : 0)} / 5`;
    const tabScore = document.getElementById(`${key}-tab-score`);
    if (tabScore) tabScore.textContent = `${five.toFixed(five % 1 ? 1 : 0)} / 5`;
  });

  const exact = totalFive / 5;
  const publicScore = roundToHalf(exact);
  document.getElementById("publicScore").textContent = `${publicScore.toFixed(publicScore % 1 ? 1 : 0)} / 5`;

  const answered = Object.keys(state.manufacturer).length + Object.keys(state.distributor).length;
  document.getElementById("scoreState").textContent =
    answered === 0 ? "Not yet assessed" : `Underlying score ${exact.toFixed(2)} / 5`;

  renderReview(exact, publicScore);
}

function renderReview(exact, publicScore) {
  const rows = Object.entries(pillars).map(([key,p]) => {
    const raw = pillarRawScore(key);
    const five = raw / 2;
    const verified = p.questions.filter(([code]) => getQuestionResult(code, p.owner).status === "verified").length;
    const partial = p.questions.filter(([code]) => getQuestionResult(code, p.owner).status === "partial").length;
    return `
      <tr>
        <td><strong>${p.label}</strong><br><span style="color:#6d6d69">${p.owner === "manufacturer" ? "Manufacturer" : "Distributor"}</span></td>
        <td>${raw.toFixed(raw % 1 ? 1 : 0)} / 10</td>
        <td>${five.toFixed(five % 1 ? 1 : 0)} / 5</td>
        <td>${verified} verified / ${partial} partial</td>
      </tr>
    `;
  }).join("");

  reviewContainer.innerHTML = `
    <div class="review-header">
      <div>
        <p class="eyebrow">COMBINED SKU RESULT</p>
        <h2>${escapeHtml(document.getElementById("productName").value || "Unnamed product")}</h2>
        <p>${escapeHtml(document.getElementById("sku").value || "No SKU entered")}</p>
      </div>
      <div class="review-score">${publicScore.toFixed(publicScore % 1 ? 1 : 0)} / 5</div>
    </div>

    <table class="review-table">
      <thead>
        <tr>
          <th>Pillar</th>
          <th>Raw</th>
          <th>Rating</th>
          <th>Evidence</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>

    <div class="notice">
      <strong>Public BTRMRK:</strong> ${publicScore.toFixed(publicScore % 1 ? 1 : 0)} / 5.
      The underlying assessment score is ${exact.toFixed(2)} / 5 and is rounded to the nearest 0.5 for public display.
      This demo forces any question with “Not supplied” evidence to a score of 0.
    </div>
  `;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[c]));
}

document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

["sku","productName","market","manufacturerName","distributorName"].forEach(id => {
  document.getElementById(id).addEventListener("input", e => {
    state.meta[id] = e.target.value;
    saveLocal();
    calculate();
  });
});

document.getElementById("resetBtn").addEventListener("click", () => {
  if (!confirm("Reset the entire BTRMRK assessment for this SKU?")) return;
  localStorage.removeItem("btrmrkAssessment");
  location.reload();
});

function saveLocal() {
  localStorage.setItem("btrmrkAssessment", JSON.stringify(state));
}

function loadLocal() {
  const saved = localStorage.getItem("btrmrkAssessment");
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    Object.assign(state, parsed);

    Object.entries(state.meta || {}).forEach(([id, value]) => {
      const el = document.getElementById(id);
      if (el) el.value = value;
    });

    document.querySelectorAll(".question").forEach(article => {
      const code = article.dataset.code;
      const owner = article.dataset.owner;
      const item = state[owner]?.[code];
      if (!item) return;
      article.querySelector(".question-score").value = item.score ?? 0;
      article.querySelector(".evidence-status").value = item.status ?? "none";
      article.querySelector(".evidence-notes").value = item.notes ?? "";
      article.querySelector(".evidence-ref").value = item.reference ?? "";
    });
  } catch (e) {
    console.warn("Could not load saved BTRMRK assessment", e);
  }
}

loadLocal();
calculate();
