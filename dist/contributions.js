/**
 * Visitor contributions — country names that hang as horizontal letter-cloth rows.
 * Persisted in localStorage so refresh keeps the curtain.
 */

const STORAGE_KEY = "budarina-contributions";
export const MAX_NAME_LEN = 40;
export const MAX_ENTRIES = 64;

/** Target px between letter columns — readable, not stretched across the stage. */
export const TARGET_CELL_PX = 12;

/**
 * Destinations already in the project — seed the cloth so it isn’t empty.
 * Order matches COUNTRY_ORDER / side navigation.
 */
export const SEED_CONTRIBUTIONS = [
  "Vietnam",
  "China",
  "Japan",
  "Kazakhstan",
  "Russia",
  "France",
  "India",
  "UK",
  "Norway",
  "Italy",
  "USA",
  "Brazil",
  "Iran"
];

/**
 * Canonical display names (English short forms).
 * Matches in-app labels where they exist: USA, UK, Russia, etc.
 */
const COUNTRY_NAMES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "DR Congo",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "UK",
  "Ukraine",
  "United Arab Emirates",
  "Uruguay",
  "USA",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];

/**
 * Common short names / official variants → canonical display name.
 * Keys are passed through countryKey() when the lookup map is built.
 */
const COUNTRY_ALIASES = {
  // USA (project label)
  us: "USA",
  usa: "USA",
  "u s": "USA",
  "u s a": "USA",
  america: "USA",
  "united states": "USA",
  "united states of america": "USA",
  "the united states": "USA",
  "the united states of america": "USA",

  // UK (project label)
  uk: "UK",
  "u k": "UK",
  gb: "UK",
  britain: "UK",
  "great britain": "UK",
  england: "UK",
  scotland: "UK",
  wales: "UK",
  "northern ireland": "UK",
  "united kingdom": "UK",
  "united kingdom of great britain and northern ireland": "UK",
  "the united kingdom": "UK",

  // Russia (project label)
  russia: "Russia",
  "russian federation": "Russia",

  // Other common aliases / older or official names
  "czech republic": "Czechia",
  czechoslovakia: "Czechia",
  "cote divoire": "Ivory Coast",
  "republic of cote divoire": "Ivory Coast",
  swaziland: "Eswatini",
  "cape verde": "Cabo Verde",
  "democratic republic of the congo": "DR Congo",
  "democratic republic of congo": "DR Congo",
  drcongo: "DR Congo",
  drc: "DR Congo",
  "congo kinshasa": "DR Congo",
  "republic of the congo": "Congo",
  "congo brazzaville": "Congo",
  "republic of congo": "Congo",
  "korea republic of": "South Korea",
  "republic of korea": "South Korea",
  rok: "South Korea",
  "democratic peoples republic of korea": "North Korea",
  dprk: "North Korea",
  "korea dpr": "North Korea",
  burma: "Myanmar",
  "east timor": "Timor-Leste",
  "timor leste": "Timor-Leste",
  holland: "Netherlands",
  "the netherlands": "Netherlands",
  "viet nam": "Vietnam",
  "syrian arab republic": "Syria",
  "iran islamic republic of": "Iran",
  "islamic republic of iran": "Iran",
  persia: "Iran",
  "lao peoples democratic republic": "Laos",
  "lao pdr": "Laos",
  macedonia: "North Macedonia",
  fyrom: "North Macedonia",
  "republic of north macedonia": "North Macedonia",
  uae: "United Arab Emirates",
  "u a e": "United Arab Emirates",
  "holy see": "Vatican City",
  vatican: "Vatican City",
  "the vatican": "Vatican City",
  "state of palestine": "Palestine",
  "palestinian territories": "Palestine",
  "bosnia herzegovina": "Bosnia and Herzegovina",
  bosnia: "Bosnia and Herzegovina",
  "federated states of micronesia": "Micronesia",
  "brunei darussalam": "Brunei",
  turkiye: "Turkey",
  "republic of turkiye": "Turkey",
  "slovak republic": "Slovakia",
  "republic of moldova": "Moldova",
  "united republic of tanzania": "Tanzania",
  "bolivia plurinational state of": "Bolivia",
  "venezuela bolivarian republic of": "Venezuela",
  "saint vincent": "Saint Vincent and the Grenadines",
  "st vincent": "Saint Vincent and the Grenadines",
  "st vincent and the grenadines": "Saint Vincent and the Grenadines",
  "st kitts and nevis": "Saint Kitts and Nevis",
  "st lucia": "Saint Lucia",
  "sao tome": "Sao Tome and Principe",
  "sao tome and principe": "Sao Tome and Principe",
  antigua: "Antigua and Barbuda",
  trinidad: "Trinidad and Tobago",
  png: "Papua New Guinea",
  aotearoa: "New Zealand",
  rsa: "South Africa"
};

/** Fold accents/punctuation so "U.S.A.", "Côte d'Ivoire" match cleanly. */
export function countryKey(raw) {
  return String(raw ?? "")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/['’.]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const COUNTRY_LOOKUP = (() => {
  const map = new Map();
  for (const name of COUNTRY_NAMES) {
    map.set(countryKey(name), name);
  }
  for (const [alias, canonical] of Object.entries(COUNTRY_ALIASES)) {
    map.set(countryKey(alias), canonical);
  }
  return map;
})();

/**
 * Resolve raw input to a canonical country display name, or null if unknown.
 */
export function resolveCountryName(raw) {
  const key = countryKey(raw);
  if (!key) return null;
  return COUNTRY_LOOKUP.get(key) ?? null;
}

export function loadContributions() {
  let list = [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        list = parsed
          .map((s) => String(s).trim().replace(/\s+/g, " "))
          .filter((s) => s.length > 0)
          .slice(0, MAX_ENTRIES);
      }
    }
  } catch {
    list = [];
  }

  // Always include the project’s destinations so the cloth isn’t empty.
  const have = new Set(list.map((s) => s.toLowerCase()));
  let changed = false;
  for (const name of SEED_CONTRIBUTIONS) {
    if (list.length >= MAX_ENTRIES) break;
    if (have.has(name.toLowerCase())) continue;
    list.push(name);
    have.add(name.toLowerCase());
    changed = true;
  }
  if (changed || list.length === 0) {
    if (list.length === 0) list = SEED_CONTRIBUTIONS.slice(0, MAX_ENTRIES);
    saveContributions(list);
  }
  return list;
}

export function saveContributions(list) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(list.slice(0, MAX_ENTRIES))
    );
  } catch {
    /* quota / private mode */
  }
}

/**
 * Trim, collapse spaces, reject empty / over-long / non-countries.
 * Accepted names are normalized to a canonical display form (e.g. "usa" → "USA").
 */
export function normalizeContribution(raw) {
  const name = String(raw ?? "")
    .trim()
    .replace(/\s+/g, " ");
  if (!name) return { ok: false, error: "empty" };
  if ([...name].length > MAX_NAME_LEN) return { ok: false, error: "too_long" };
  const canonical = resolveCountryName(name);
  if (!canonical) return { ok: false, error: "not_a_country" };
  return { ok: true, name: canonical };
}

export function addContribution(raw) {
  const result = normalizeContribution(raw);
  if (!result.ok) return result;
  const list = loadContributions();
  if (list.length >= MAX_ENTRIES) {
    return { ok: false, error: "full", list };
  }
  list.push(result.name);
  saveContributions(list);
  return { ok: true, name: result.name, list };
}

/**
 * Pack country names left → right across `gridW`, wrapping to new rows when full.
 * Names are appended in order (newest ends up further right / on later rows).
 * @returns {string[]} rows, each exactly `gridW` characters
 */
export function wrapContributionNames(names, gridW) {
  const w = Math.max(2, gridW | 0);
  const rows = [];
  let row = [];

  const flush = () => {
    while (row.length < w) row.push(" ");
    rows.push(row.slice(0, w).join(""));
    row = [];
  };

  const placeWord = (wordChars) => {
    if (!wordChars.length) return;
    if (wordChars.length > w) {
      if (row.length) flush();
      let rest = wordChars.slice();
      while (rest.length > w) {
        rows.push(rest.slice(0, w).join(""));
        rest = rest.slice(w);
      }
      row = rest;
      return;
    }
    const gap = row.length ? 1 : 0;
    if (row.length + gap + wordChars.length <= w) {
      if (gap) row.push(" ");
      row.push(...wordChars);
    } else {
      flush();
      row.push(...wordChars);
    }
  };

  for (const name of names) {
    placeWord(Array.from(name || ""));
  }
  if (row.length || !rows.length) flush();
  while (rows.length < 2) flush();
  return rows;
}

/**
 * Build source text for horizontal writing: words fill width, then wrap.
 */
export function contributionsClothText(names, gridW) {
  return wrapContributionNames(names, gridW).join("");
}

/**
 * Grid settings for a horizontal cloth that fills stage width with dense columns.
 * Names flow left → right; wrap to the next hanging row when the line is full.
 * @param {string[]} names
 * @param {number} [stageW] stage CSS width — used to size columns (~12px cells)
 */
export function contributionsGrid(names, stageW = 0) {
  const fromWidth =
    stageW > 40 ? Math.floor(stageW / TARGET_CELL_PX) + 1 : 0;
  // Fill the stage width; wrap long names instead of widening the grid.
  const gridW = Math.max(16, fromWidth, 2);
  const rows = wrapContributionNames(names, gridW);
  const gridH = Math.max(2, rows.length);
  while (rows.length < gridH) {
    rows.push(" ".repeat(gridW));
  }
  return {
    gridW,
    gridH,
    writing: "horizontal",
    cloth: rows.join(""),
    font: '"JetBrains Mono", ui-monospace, monospace'
  };
}
