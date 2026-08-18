// ============================================================
// Odisha Dam Safety Mobile Field App — Logic & Simulator
// ============================================================

// App Global State
let IS_ONLINE = true;
let ACTIVE_SCREEN = "screen-mob-login";
let SELECTED_DAM_ID = "D00123";
let CURRENT_INSP_ID = "INSP-2025-01";
let CURRENT_MOBILE_ROLE = "Junior Engineer"; // Default field role

let PENDING_SYNC_ITEMS = {
    inspections: 0,
    observations: 0,
    works: 0
};

// Simulated Local Storage Database for offline mode
const LOCAL_DB = {
    inspectionsDrafts: [],
    observationsDrafts: [],
    workProgressDrafts: [],
    checklistStore: {}
};

// Mobile Role Permissions Matrix
const MOBILE_ROLE_PERMISSIONS = {
    roles: [
        { id: "Junior Engineer", name: "Junior Engineer", title: "Field Inspector", icon: "hgi-search-01" },
        { id: "Assistant Engineer", name: "Assistant Engineer", title: "Sub-Divisional Officer", icon: "hgi-clipboard" },
        { id: "Executive Engineer", name: "Executive Engineer", title: "Division In-Charge", icon: "hgi-bank" },
        { id: "Vendor/Contractor", name: "Vendor/Contractor", title: "Executing Agency", icon: "hgi-crane" }
    ],

    // Navigation tab access per role
    navAccess: {
        "Junior Engineer":     ["tab-home", "tab-inspections", "tab-works", "tab-alerts", "tab-more"],
        "Assistant Engineer":  ["tab-home", "tab-inspections", "tab-works", "tab-alerts", "tab-more"],
        "Executive Engineer":  ["tab-home", "tab-inspections", "tab-works", "tab-alerts", "tab-more"],
        "Vendor/Contractor":   ["tab-home", "tab-works", "tab-more"]
    },

    // Permitted screens per role
    screenAccess: {
        "Junior Engineer":     ["screen-mob-login", "screen-mob-dashboard", "screen-mob-inspections", "screen-mob-dam-profile", "screen-mob-details", "screen-mob-checklist", "screen-mob-record-observation", "screen-mob-evidence", "screen-mob-observation-detail", "screen-mob-corrective-action", "screen-mob-work-progress", "screen-mob-review-submit", "screen-mob-sync", "screen-mob-alerts", "screen-mob-profile"],
        "Assistant Engineer":  ["screen-mob-login", "screen-mob-dashboard", "screen-mob-inspections", "screen-mob-dam-profile", "screen-mob-details", "screen-mob-checklist", "screen-mob-record-observation", "screen-mob-evidence", "screen-mob-observation-detail", "screen-mob-corrective-action", "screen-mob-work-progress", "screen-mob-review-submit", "screen-mob-sync", "screen-mob-alerts", "screen-mob-profile"],
        "Executive Engineer":  ["screen-mob-login", "screen-mob-dashboard", "screen-mob-inspections", "screen-mob-dam-profile", "screen-mob-details", "screen-mob-checklist", "screen-mob-record-observation", "screen-mob-evidence", "screen-mob-observation-detail", "screen-mob-corrective-action", "screen-mob-work-progress", "screen-mob-review-submit", "screen-mob-sync", "screen-mob-alerts", "screen-mob-profile"],
        "Vendor/Contractor":   ["screen-mob-login", "screen-mob-dashboard", "screen-mob-work-progress", "screen-mob-evidence", "screen-mob-sync", "screen-mob-profile"]
    },

    // Action capabilities
    canFillChecklist: ["Junior Engineer", "Assistant Engineer"],
    canRecordObservation: ["Junior Engineer", "Assistant Engineer", "Executive Engineer"],
    canApproveOnSite: ["Executive Engineer"],
    canLogWorkProgress: ["Junior Engineer", "Assistant Engineer", "Vendor/Contractor"]
};

// Check role permission helper
function canMob(role, permission) {
    const list = MOBILE_ROLE_PERMISSIONS[permission];
    return list && list.includes(role);
}

// Console Log helper for simulator panel
function writeSimConsole(message) {
    const consoleBox = document.getElementById('sim-console');
    if (!consoleBox) return;

    const time = new Date().toLocaleTimeString();
    const line = document.createElement('div');
    line.className = 'console-line';
    
    let color = '#38bdf8';
    if (message.includes('ERROR') || message.includes('DENIED')) color = '#f87171';
    else if (message.includes('SUCCESS')) color = '#4ade80';
    else if (message.includes('WARNING')) color = '#fbbf24';

    line.innerHTML = `[${time}] <span style="color:${color}">${message}</span>`;
    consoleBox.appendChild(line);
    consoleBox.scrollTop = consoleBox.scrollHeight;
}

// ============================================================
// 1. Navigation & Screen Controller
// ============================================================

function showMobileScreen(screenId) {
    const allowedScreens = MOBILE_ROLE_PERMISSIONS.screenAccess[CURRENT_MOBILE_ROLE] || [];
    
    // RBAC Check for mobile screen
    if (screenId !== 'screen-mob-login' && !allowedScreens.includes(screenId)) {
        writeSimConsole(`ACCESS DENIED: Role ${CURRENT_MOBILE_ROLE} cannot open ${screenId}`);
        alert(`Access Restricted\n\nYour mobile role "${CURRENT_MOBILE_ROLE}" does not have permission to view this section.`);
        return;
    }

    ACTIVE_SCREEN = screenId;
    
    // Hide all mobile screens
    document.querySelectorAll('.mobile-screen-view').forEach(screen => {
        screen.classList.remove('active');
    });

    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }

    // Update Bottom Tab highlight
    document.querySelectorAll('.mobile-nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Auto highlight based on screenId
    if (['screen-mob-dashboard', 'screen-mob-login'].includes(screenId)) {
        const t = document.getElementById('tab-home');
        if (t) t.classList.add('active');
    } else if (['screen-mob-inspections', 'screen-mob-details', 'screen-mob-checklist', 'screen-mob-review-submit'].includes(screenId)) {
        const t = document.getElementById('tab-inspections');
        if (t) t.classList.add('active');
    } else if (['screen-mob-work-progress'].includes(screenId)) {
        const t = document.getElementById('tab-works');
        if (t) t.classList.add('active');
    } else if (['screen-mob-alerts'].includes(screenId)) {
        const t = document.getElementById('tab-alerts');
        if (t) t.classList.add('active');
    } else if (['screen-mob-profile'].includes(screenId)) {
        const t = document.getElementById('tab-more');
        if (t) t.classList.add('active');
    }

    // Update screen headers & titles
    updateHeaderTitle(screenId);

    // Apply role-based visibility across the UI
    applyMobileRoleAccess();

    // Refresh dynamic screen content
    if (screenId === 'screen-mob-dashboard') {
        loadMobileDashboard();
    } else if (screenId === 'screen-mob-inspections') {
        loadMobileInspections();
    } else if (screenId === 'screen-mob-dam-profile') {
        loadMobileDamProfile(SELECTED_DAM_ID);
    } else if (screenId === 'screen-mob-details') {
        loadMobileInspectionDetails();
    } else if (screenId === 'screen-mob-checklist') {
        loadMobileChecklist();
    } else if (screenId === 'screen-mob-sync') {
        loadSyncCenter();
    } else if (screenId === 'screen-mob-alerts') {
        loadMobileAlerts();
    } else if (screenId === 'screen-mob-corrective-action') {
        loadMobileCorrectiveAction();
    } else if (screenId === 'screen-mob-observation-detail') {
        loadMobileObservationDetail();
    } else if (screenId === 'screen-mob-work-progress') {
        loadMobileWorkProgress();
    } else if (screenId === 'screen-mob-profile') {
        loadMobileProfile();
    }

    writeSimConsole(`NAV: Switched to screen ${screenId}`);
}

// Update Header Title
function updateHeaderTitle(screenId) {
    const titleEl = document.getElementById('mob-header-title');
    if (!titleEl) return;

    const titles = {
        'screen-mob-login': 'Dam Safety Login',
        'screen-mob-dashboard': 'Field Dashboard',
        'screen-mob-inspections': 'Assigned Jobs',
        'screen-mob-dam-profile': 'Dam Profile',
        'screen-mob-details': 'Inspection Info',
        'screen-mob-checklist': 'Safety Checklist',
        'screen-mob-record-observation': 'Log Observation',
        'screen-mob-evidence': 'Capture Evidence',
        'screen-mob-observation-detail': 'Defect Details',
        'screen-mob-corrective-action': 'Corrective Task',
        'screen-mob-work-progress': 'Works Progress',
        'screen-mob-review-submit': 'Review & Submit',
        'screen-mob-sync': 'Sync Center',
        'screen-mob-alerts': 'Field Alarms',
        'screen-mob-profile': 'My Account'
    };

    titleEl.innerText = titles[screenId] || "Dam Safety Wing";
}

// ============================================================
// 2. Mobile Role-Based Access Control (RBAC)
// ============================================================

function setMobileRole(role) {
    CURRENT_MOBILE_ROLE = role;
    
    // Update role select in simulator panel
    const sel = document.getElementById('sim-role-select');
    if (sel) sel.value = role;

    writeSimConsole(`ROLE CHANGE: Active mobile profile changed to ${role}`);
    
    // Update banner text
    const bannerTxt = document.getElementById('mob-role-banner-text');
    if (bannerTxt) bannerTxt.innerText = `Role: ${role}`;

    // Apply visibility rules
    applyMobileRoleAccess();

    // If on restricted screen, navigate to dashboard
    const allowed = MOBILE_ROLE_PERMISSIONS.screenAccess[CURRENT_MOBILE_ROLE] || [];
    if (!allowed.includes(ACTIVE_SCREEN) && ACTIVE_SCREEN !== 'screen-mob-login') {
        showMobileScreen('screen-mob-dashboard');
    } else {
        showMobileScreen(ACTIVE_SCREEN);
    }
}

function applyMobileRoleAccess() {
    const allowedTabs = MOBILE_ROLE_PERMISSIONS.navAccess[CURRENT_MOBILE_ROLE] || [];
    const isVendor = CURRENT_MOBILE_ROLE === "Vendor/Contractor";

    // Show/hide bottom navigation tabs based on role
    ["tab-home", "tab-inspections", "tab-works", "tab-alerts", "tab-more"].forEach(tabId => {
        const el = document.getElementById(tabId);
        if (el) {
            el.style.display = allowedTabs.includes(tabId) ? 'flex' : 'none';
        }
    });

    // Mobile Dashboard dynamic view by role
    const inspSummaryCard = document.getElementById('dash-insp-summary');
    const vendorWorkCard  = document.getElementById('dash-vendor-summary');
    const startInspBtn    = document.getElementById('dash-start-insp-btn');
    const logWorkBtn      = document.getElementById('dash-log-work-btn');

    if (isVendor) {
        if (inspSummaryCard) inspSummaryCard.style.display = 'none';
        if (vendorWorkCard)  vendorWorkCard.style.display  = 'block';
        if (startInspBtn)    startInspBtn.style.display    = 'none';
        if (logWorkBtn)      logWorkBtn.style.display      = 'flex';
    } else {
        if (inspSummaryCard) inspSummaryCard.style.display = 'block';
        if (vendorWorkCard)  vendorWorkCard.style.display  = 'none';
        if (startInspBtn)    startInspBtn.style.display    = 'flex';
        if (logWorkBtn)      logWorkBtn.style.display      = 'none';
    }

    // Role banner update
    const roleBanner = document.getElementById('mob-role-banner');
    if (roleBanner) {
        roleBanner.style.display = ACTIVE_SCREEN === 'screen-mob-login' ? 'none' : 'flex';
        const txt = document.getElementById('mob-role-banner-text');
        if (txt) txt.innerText = `Logged in: ${CURRENT_MOBILE_ROLE}`;
    }
}

// ============================================================
// 3. Offline Mode Simulation
// ============================================================

function setNetworkStatus(online) {
    IS_ONLINE = online;
    const body = document.body;
    const banner = document.getElementById('mob-offline-banner');
    const headerIndicator = document.getElementById('mob-net-indicator');

    if (IS_ONLINE) {
        body.classList.remove('offline');
        if (banner) banner.style.display = 'none';
        if (headerIndicator) headerIndicator.style.display = 'none';
        const chk = document.getElementById('sim-network-chk');
        if (chk) chk.checked = true;
        writeSimConsole("SYSTEM: Network connection ONLINE. Cloud sync enabled.");
    } else {
        body.classList.add('offline');
        if (banner) banner.style.display = 'flex';
        if (headerIndicator) {
            headerIndicator.style.display = 'inline-block';
            headerIndicator.innerText = "OFFLINE";
        }
        const chk = document.getElementById('sim-network-chk');
        if (chk) chk.checked = false;
        writeSimConsole("SYSTEM WARNING: Offline Mode. All records will be stored locally in SQLite cache.");
    }

    // Refresh sync center if open
    if (ACTIVE_SCREEN === 'screen-mob-sync') loadSyncCenter();
}

// ============================================================
// 4. Login & Authentication
// ============================================================

function handleMobileLogin(e) {
    if (e) e.preventDefault();
    writeSimConsole(`AUTH SUCCESS: Logged in as ${CURRENT_MOBILE_ROLE}`);
    showMobileScreen('screen-mob-dashboard');
}

function handleLogout() {
    writeSimConsole("AUTH: User logged out");
    showMobileScreen('screen-mob-login');
}

// ============================================================
// 5. Dashboard Data Loader
// ============================================================

function loadMobileDashboard() {
    const totalPending = PENDING_SYNC_ITEMS.inspections + PENDING_SYNC_ITEMS.observations + PENDING_SYNC_ITEMS.works;
    const pendEl = document.getElementById('dash-pending-sync');
    const offlineEl = document.getElementById('dash-offline-count');
    const lastSyncEl = document.getElementById('dash-last-sync');

    if (pendEl) pendEl.innerText = totalPending;
    if (offlineEl) offlineEl.innerText = totalPending;
    if (lastSyncEl) lastSyncEl.innerText = new Date().toLocaleDateString() + " 10:30 AM";
    
    // Bottom nav sync badge counter
    const navBadge = document.getElementById('nav-sync-badge');
    if (navBadge) {
        if (totalPending > 0) {
            navBadge.style.display = 'flex';
            navBadge.innerText = totalPending;
        } else {
            navBadge.style.display = 'none';
        }
    }
}

// ============================================================
// 6. Inspections & Dam Profiles
// ============================================================

const ASSIGNED_INSPECTIONS = [
    { id: "INSP-2025-01", damId: "D00123", name: "Hirakud Dam", type: "Pre-Monsoon Inspection", date: "Today, 18 Aug 2026", priority: "High", location: "Sambalpur" },
    { id: "INSP-2025-02", damId: "D00124", name: "Rengali Dam", type: "Periodic Safety Audit", date: "22 Aug 2026", priority: "High", location: "Angul" },
    { id: "INSP-2025-03", damId: "D00126", name: "Balimela Dam", type: "Comprehensive Structural Review", date: "28 Aug 2026", priority: "Medium", location: "Malkangiri" }
];

function loadMobileInspections() {
    const listBody = document.getElementById('mob-inspections-list');
    if (!listBody) return;

    listBody.innerHTML = ASSIGNED_INSPECTIONS.map(insp => `
        <div class="mobile-list-item" onclick="drillToDamProfile('${insp.damId}')">
            <div>
                <strong style="font-size:13px; color:var(--gov-navy);">${insp.name}</strong>
                <div style="font-size:11px; color:#475569; margin-top:2px;">${insp.type}</div>
                <div style="font-size:10px; color:var(--gov-red); font-weight:700; margin-top:2px; display:flex; align-items:center; gap:4px;"><i class="hgi-stroke hgi-calendar-03"></i> Planned: ${insp.date}</div>
            </div>
            <div style="text-align:right;">
                <span class="status-pill ${insp.priority === 'High' ? 'red' : 'amber'}">${insp.priority}</span>
                <div style="font-size:10px; color:#64748b; margin-top:4px; display:flex; align-items:center; justify-content:flex-end; gap:3px;"><i class="hgi-stroke hgi-maps-location-01"></i> ${insp.location}</div>
            </div>
        </div>
    `).join('');
}

function drillToDamProfile(damId) {
    SELECTED_DAM_ID = damId;
    showMobileScreen('screen-mob-dam-profile');
}

const MOBILE_DAMS_MOCK = {
    D00123: { name: "Hirakud Dam", id: "D00123", district: "Sambalpur", division: "Sambalpur Division", circle: "Northern Circle", basin: "Mahanadi", river: "Mahanadi", type: "Composite Masonry & Earth", safetyClass: "High Risk (RED status)", lastInsp: "12 Apr 2025", nextInsp: "12 Oct 2025", criticalObs: 8, openObs: 12, works: 3 },
    D00124: { name: "Rengali Dam", id: "D00124", district: "Angul", division: "Sundargarh Division", circle: "Northern Circle", basin: "Brahmani", river: "Brahmani", type: "Concrete Gravity", safetyClass: "High Risk (AMBER status)", lastInsp: "18 Mar 2025", nextInsp: "18 Sep 2025", criticalObs: 2, openObs: 5, works: 2 },
    D00126: { name: "Balimela Dam", id: "D00126", district: "Malkangiri", division: "Koraput Division", circle: "Southern Circle", basin: "Sabari", river: "Sileru", type: "Earthfill Gravity", safetyClass: "High Risk (RED status)", lastInsp: "20 Feb 2025", nextInsp: "20 Aug 2025", criticalObs: 4, openObs: 7, works: 1 }
};

function loadMobileDamProfile(damId) {
    const dam = MOBILE_DAMS_MOCK[damId] || MOBILE_DAMS_MOCK.D00123;
    
    document.getElementById('mob-prof-name').innerText = dam.name;
    document.getElementById('mob-prof-id').innerText = dam.id;
    document.getElementById('mob-prof-dist').innerText = dam.district;
    document.getElementById('mob-prof-div').innerText = dam.division;
    document.getElementById('mob-prof-basin').innerText = dam.basin;
    document.getElementById('mob-prof-river').innerText = dam.river;
    document.getElementById('mob-prof-type').innerText = dam.type;
    document.getElementById('mob-prof-class').innerText = dam.safetyClass;
    document.getElementById('mob-prof-lastinsp').innerText = dam.lastInsp;
    
    document.getElementById('mob-prof-crit').innerText = dam.criticalObs;
    document.getElementById('mob-prof-open').innerText = dam.openObs;
    document.getElementById('mob-prof-works').innerText = dam.works;
}

function handleStartInspection() {
    showMobileScreen('screen-mob-details');
}

function loadMobileInspectionDetails() {
    const dam = MOBILE_DAMS_MOCK[SELECTED_DAM_ID] || MOBILE_DAMS_MOCK.D00123;
    document.getElementById('mob-det-damname').innerText = dam.name;
    document.getElementById('mob-det-damid').innerText = dam.id;
}

// ============================================================
// 7. Checklists & Observation Logging
// ============================================================

const CHECKLIST_ITEMS = [
    { section: "Structural & Masonry", items: [
        { id: "str_cracks", label: "Upstream / Downstream Face Cracks" },
        { id: "str_settlement", label: "Foundation & Crest Settlement" },
        { id: "str_seepage", label: "Contraction Joint Seepage" }
    ]},
    { section: "Spillway & Hydromechanical", items: [
        { id: "sp_leakage", label: "Radial Crest Gate Seal Leakage" },
        { id: "sp_hoist", label: "Hoist Motor & Gearing Mechanism" }
    ]},
    { section: "Drainage Gallery & Instruments", items: [
        { id: "dr_clog", label: "Drainage Hole Calcification / Flow" },
        { id: "inst_piezo", label: "Piezometer Pressure Readings" }
    ]}
];

function loadMobileChecklist() {
    const container = document.getElementById('mob-checklist-container');
    if (!container) return;

    container.innerHTML = CHECKLIST_ITEMS.map(sect => `
        <div class="mobile-section-hdr">${sect.section}</div>
        ${sect.items.map(item => {
            const currentVal = LOCAL_DB.checklistStore[item.id] || "";
            return `
                <div class="checklist-mobile-row">
                    <div class="checklist-mobile-label">${item.label}</div>
                    <div class="checklist-btn-group">
                        <button type="button" class="chk-btn ${currentVal === 'OK' ? 'active-ok' : ''}" onclick="selectChecklistItem('${item.id}', 'OK', this)">OK</button>
                        <button type="button" class="chk-btn ${currentVal === 'Issue' ? 'active-issue' : ''}" onclick="selectChecklistItem('${item.id}', 'Issue', this)">Issue</button>
                        <button type="button" class="chk-btn ${currentVal === 'NA' ? 'active-na' : ''}" onclick="selectChecklistItem('${item.id}', 'NA', this)">N/A</button>
                    </div>
                </div>
            `;
        }).join('')}
    `).join('');
}

function selectChecklistItem(itemId, value, btnElement) {
    LOCAL_DB.checklistStore[itemId] = value;
    
    // Toggle active styles on buttons
    const parentGroup = btnElement.parentElement;
    parentGroup.querySelectorAll('.chk-btn').forEach(btn => {
        btn.className = 'chk-btn';
    });

    if (value === 'OK') btnElement.classList.add('active-ok');
    else if (value === 'Issue') {
        btnElement.classList.add('active-issue');
        setTimeout(() => {
            if (confirm("Defect identified on item. Would you like to record a detailed safety observation and take geotagged photos?")) {
                showMobileScreen('screen-mob-record-observation');
            }
        }, 200);
    }
    else if (value === 'NA') btnElement.classList.add('active-na');

    writeSimConsole(`CHECKLIST: Item ${itemId} set to ${value}`);
}

function handleSaveObservation(e) {
    if (e) e.preventDefault();

    const desc = document.getElementById('mob-obs-desc').value;
    const category = document.getElementById('mob-obs-cat').value;
    const severity = document.getElementById('mob-obs-sev').value;
    const target = document.getElementById('mob-obs-target').value;

    const newObs = {
        id: `OBS-MOB-00${LOCAL_DB.observationsDrafts.length + 1}`,
        description: desc || "Structural defect logged.",
        category: category,
        severity: severity,
        targetDate: target || "30 Sep 2026",
        damId: SELECTED_DAM_ID,
        gps: "21.5721 N, 83.8710 E",
        status: "Identified",
        photos: attachedPhotos
    };

    LOCAL_DB.observationsDrafts.push(newObs);
    PENDING_SYNC_ITEMS.observations++;
    
    writeSimConsole(`SUCCESS: Observation recorded (${severity}). Saved to offline queue.`);
    alert("Observation saved! Tagged with GPS: 21.5721 N, 83.8710 E");
    
    attachedPhotos = [];
    document.getElementById('mob-obs-desc').value = '';
    showMobileScreen('screen-mob-checklist');
}

// ============================================================
// 8. Photographic Evidence & GPS Camera Simulation
// ============================================================

let attachedPhotos = [];
function handleAttachPhoto() {
    const photoId = `dam_photo_${attachedPhotos.length + 1}.jpg`;
    attachedPhotos.push(photoId);
    
    const previewArea = document.getElementById('mob-photo-previews');
    if (previewArea) {
        previewArea.innerHTML += `
            <div class="photo-geotag-card">
                <div class="photo-geotag-img"><i class="hgi-stroke hgi-camera-01"></i></div>
                <div class="photo-geotag-meta">
                    <strong>${photoId}</strong><br>
                    GPS: 21.5721°N, 83.8710°E<br>
                    ${new Date().toLocaleTimeString()}
                </div>
            </div>
        `;
    }

    writeSimConsole(`CAMERA: Geotagged photo ${photoId} captured (GPS: 21.5721 N, 83.8710 E)`);
    alert(`Photo captured successfully!\n\nFile: ${photoId}\nGPS: 21.57212°N, 83.87105°E\nAccuracy: ±3.2m\nTimestamp: ${new Date().toLocaleTimeString()}`);
}

// ============================================================
// 9. Sync Center & Cloud Push
// ============================================================

function loadSyncCenter() {
    document.getElementById('sync-insps-count').innerText = PENDING_SYNC_ITEMS.inspections;
    document.getElementById('sync-obs-count').innerText = PENDING_SYNC_ITEMS.observations;
    document.getElementById('sync-works-count').innerText = PENDING_SYNC_ITEMS.works;

    const statusEl = document.getElementById('sync-connection-text');
    if (statusEl) {
        if (IS_ONLINE) {
            statusEl.innerText = "Connected (Online)";
            statusEl.style.color = "var(--gov-green)";
        } else {
            statusEl.innerText = "Offline Mode Active (No Network)";
            statusEl.style.color = "var(--gov-red)";
        }
    }
}

function triggerSyncNow() {
    if (!IS_ONLINE) {
        alert("ERROR: Cannot synchronize while in OFFLINE mode. Please enable network simulation in the control panel.");
        writeSimConsole("ERROR: Sync failed — device is offline.");
        return;
    }

    const total = PENDING_SYNC_ITEMS.inspections + PENDING_SYNC_ITEMS.observations + PENDING_SYNC_ITEMS.works;
    if (total === 0) {
        alert("All local drafts are already synchronized with the Central Dam Registry.");
        return;
    }

    writeSimConsole("SYNC: Connecting to State Water Resources Cloud Gateway...");
    setTimeout(() => {
        writeSimConsole(`SYNC SUCCESS: Uploaded ${total} field items to Central Registry.`);
        
        PENDING_SYNC_ITEMS.inspections = 0;
        PENDING_SYNC_ITEMS.observations = 0;
        PENDING_SYNC_ITEMS.works = 0;

        LOCAL_DB.inspectionsDrafts = [];
        LOCAL_DB.observationsDrafts = [];
        LOCAL_DB.workProgressDrafts = [];

        loadSyncCenter();
        loadMobileDashboard();
        alert("Synchronization complete! All records uploaded to Central Management Portal.");
    }, 1000);
}

// ============================================================
// 10. Rehabilitation Works Progress Logging
// ============================================================

function handleSubmitWorkProgress(e) {
    if (e) e.preventDefault();
    const milestone = document.getElementById('mob-work-milestone').value;
    const progress = document.getElementById('mob-work-progress-val').value;
    
    LOCAL_DB.workProgressDrafts.push({
        milestone: milestone,
        percentage: progress,
        date: new Date().toLocaleDateString()
    });
    PENDING_SYNC_ITEMS.works++;
    
    writeSimConsole(`SUCCESS: Work progress saved offline: ${milestone} at ${progress}%`);
    alert(`Progress report logged (${progress}% completed).\nSaved in offline queue for cloud sync.`);
    showMobileScreen('screen-mob-dashboard');
}

// ============================================================
// 11. Review & Submit
// ============================================================

function loadMobileReviewSubmit() {
    const totalItems = Object.keys(LOCAL_DB.checklistStore).length;
    
    document.getElementById('rev-chk-complete').innerText = `${totalItems} checklist items reviewed`;
    document.getElementById('rev-obs-count').innerText = `${LOCAL_DB.observationsDrafts.length} observations logged`;
    document.getElementById('rev-photos-count').innerText = `${attachedPhotos.length} photos attached`;

    const warningEl = document.getElementById('rev-warning-msg');
    if (totalItems < 3) {
        warningEl.style.display = 'block';
        warningEl.innerText = "⚠️ Incomplete Checklist: Statutory pre-monsoon compliance requires all items checked.";
    } else {
        warningEl.style.display = 'none';
    }
}

function handleMobileFinalSubmit() {
    PENDING_SYNC_ITEMS.inspections++;
    writeSimConsole("SUCCESS: Completed field inspection draft saved to local database.");
    alert("Inspection Report finalized! Added to Sync Queue.");
    showMobileScreen('screen-mob-dashboard');
}

// ============================================================
// 12. Profile & Alarms
// ============================================================

function loadMobileProfile() {
    const nameMap = {
        "Junior Engineer": { name: "G. C. Biswal", title: "Junior Engineer (Civil)", div: "Sambalpur Division" },
        "Assistant Engineer": { name: "B. Pujari", title: "Assistant Engineer", div: "Northern Circle" },
        "Executive Engineer": { name: "S. K. Patnaik", title: "Executive Engineer", div: "Odisha Central Wing" },
        "Vendor/Contractor": { name: "M/s Utkal Infrastructure", title: "Executing Contractor", div: "Rehabilitation Package #04" }
    };
    const prof = nameMap[CURRENT_MOBILE_ROLE] || nameMap["Junior Engineer"];
    
    const nameEl = document.getElementById('mob-profile-name');
    const titleEl = document.getElementById('mob-profile-role');
    const divEl = document.getElementById('mob-profile-div');

    if (nameEl) nameEl.innerText = prof.name;
    if (titleEl) titleEl.innerText = prof.title;
    if (divEl) divEl.innerText = prof.div;
}

function loadMobileAlerts() {}
function loadMobileObservationDetail() {}
function loadMobileCorrectiveAction() {}
function loadMobileWorkProgress() {}

// ============================================================
// Bootstrapping
// ============================================================

window.addEventListener('DOMContentLoaded', () => {
    setNetworkStatus(true);
    setMobileRole("Junior Engineer");
    writeSimConsole("Mobile Field App Initialized. Ready.");
});
