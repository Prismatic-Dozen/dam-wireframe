// JavaScript Logic for Odisha Dam Safety Mobile Field App Simulator

// App State
let IS_ONLINE = true;
let ACTIVE_SCREEN = "screen-mob-login";
let SELECTED_DAM_ID = "D00123";
let CURRENT_INSP_ID = "INSP-2025-001";
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

// Console Log helper for simulator panel
function writeSimConsole(message) {
    const consoleBox = document.getElementById('sim-console');
    if (!consoleBox) return;

    const time = new Date().toLocaleTimeString();
    const line = document.createElement('div');
    line.className = 'console-line';
    line.innerHTML = `[${time}] <span style="color:${message.includes('ERROR') ? '#ff4d4d' : message.includes('SUCCESS') ? '#4dff4d' : '#33ff33'}">${message}</span>`;
    
    consoleBox.appendChild(line);
    consoleBox.scrollTop = consoleBox.scrollHeight;
}

// 1. Navigation Controller
function showMobileScreen(screenId) {
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
        document.getElementById('tab-home').classList.add('active');
    } else if (['screen-mob-inspections', 'screen-mob-details', 'screen-mob-checklist', 'screen-mob-review-submit'].includes(screenId)) {
        document.getElementById('tab-inspections').classList.add('active');
    } else if (['screen-mob-work-progress'].includes(screenId)) {
        document.getElementById('tab-works').classList.add('active');
    } else if (['screen-mob-alerts'].includes(screenId)) {
        document.getElementById('tab-alerts').classList.add('active');
    } else if (['screen-mob-profile'].includes(screenId)) {
        document.getElementById('tab-more').classList.add('active');
    }

    // Update screen headers
    updateHeaderTitle(screenId);

    // Refresh dynamic lists
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
    }

    writeSimConsole(`NAV: Screen changed to ${screenId}`);
}

// Update mobile view titles
function updateHeaderTitle(screenId) {
    const titleEl = document.getElementById('mob-header-title');
    if (!titleEl) return;

    let title = "Dam Safety Wing";
    if (screenId === 'screen-mob-dashboard') title = "Field Dashboard";
    else if (screenId === 'screen-mob-inspections') title = "Assigned Inspections";
    else if (screenId === 'screen-mob-dam-profile') title = "Dam Profile";
    else if (screenId === 'screen-mob-details') title = "Inspection Details";
    else if (screenId === 'screen-mob-checklist') title = "Checklist Tasks";
    else if (screenId === 'screen-mob-record-observation') title = "Record Observation";
    else if (screenId === 'screen-mob-evidence') title = "Capture Photo Evidence";
    else if (screenId === 'screen-mob-observation-detail') title = "Observation Details";
    else if (screenId === 'screen-mob-corrective-action') title = "Corrective Actions";
    else if (screenId === 'screen-mob-work-progress') title = "Progress Capture";
    else if (screenId === 'screen-mob-review-submit') title = "Review & Submit";
    else if (screenId === 'screen-mob-sync') title = "Sync Center";
    else if (screenId === 'screen-mob-alerts') title = "Field Alarms";
    else if (screenId === 'screen-mob-profile') title = "My Profile";

    titleEl.innerText = title;
}

// 2. Offline Mode Toggles
function setNetworkStatus(online) {
    IS_ONLINE = online;
    const body = document.body;
    const banner = document.getElementById('mob-offline-banner');
    const headerIndicator = document.getElementById('mob-net-indicator');

    if (IS_ONLINE) {
        body.classList.remove('offline');
        banner.style.display = 'none';
        headerIndicator.style.display = 'none';
        document.getElementById('sim-network-chk').checked = true;
        writeSimConsole("SYSTEM: Network status switched to ONLINE. Cloud synced active.");
    } else {
        body.classList.add('offline');
        banner.style.display = 'flex';
        headerIndicator.style.display = 'inline-block';
        headerIndicator.innerText = "OFFLINE";
        document.getElementById('sim-network-chk').checked = false;
        writeSimConsole("SYSTEM WARNING: Offline Mode Enabled. All data will write locally.");
    }

    // Refresh active screen state
    showMobileScreen(ACTIVE_SCREEN);
}

// Login
function handleMobileLogin(e) {
    if (e) e.preventDefault();
    writeSimConsole("AUTH SUCCESS: Logged in as Field Assistant Engineer");
    showMobileScreen('screen-mob-dashboard');
}

// Dashboard Loader
function loadMobileDashboard() {
    // Fill local badges
    const totalPending = PENDING_SYNC_ITEMS.inspections + PENDING_SYNC_ITEMS.observations + PENDING_SYNC_ITEMS.works;
    document.getElementById('dash-pending-sync').innerText = totalPending;
    document.getElementById('dash-last-sync').innerText = new Date().toLocaleDateString() + " 10:30 AM";
    document.getElementById('dash-offline-count').innerText = totalPending;
    
    // Bottom nav sync queue badge indicator
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

// Inspections List Loader
const ASSIGNED_INSPECTIONS = [
    { id: "INSP-2025-01", damId: "D00123", name: "Hirakud Dam", type: "Pre-Monsoon Inspection", date: "Today, 13 Aug 2026", priority: "High", location: "Sambalpur" },
    { id: "INSP-2025-02", damId: "D00124", name: "Rengali Dam", type: "Periodic Safety Audit", date: "18 Aug 2026", priority: "High", location: "Angul" },
    { id: "INSP-2025-03", damId: "D00126", name: "Balimela Dam", type: "Comprehensive Structural Review", date: "20 Aug 2026", priority: "Medium", location: "Malkangiri" }
];

function loadMobileInspections() {
    const listBody = document.getElementById('mob-inspections-list');
    if (!listBody) return;

    listBody.innerHTML = ASSIGNED_INSPECTIONS.map(insp => `
        <div class="mobile-list-item" onclick="drillToDamProfile('${insp.damId}')">
            <div>
                <strong style="font-size:13px;">${insp.name}</strong>
                <div style="font-size:10px; color:#555; margin-top:2px;">Type: ${insp.type}</div>
                <div style="font-size:10px; color:#cc0000; font-weight:bold; margin-top:2px;">Planned: ${insp.date}</div>
            </div>
            <div style="text-align:right;">
                <span class="status-pill ${insp.priority === 'High' ? 'red' : 'amber'}" style="font-size:8px;">${insp.priority}</span>
                <div style="font-size:9px; color:#666; margin-top:4px;">${insp.location}</div>
            </div>
        </div>
    `).join('');
}

function drillToDamProfile(damId) {
    SELECTED_DAM_ID = damId;
    showMobileScreen('screen-mob-dam-profile');
}

// Dam Profile Loader
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

// Start Inspection Clicked
function handleStartInspection() {
    showMobileScreen('screen-mob-details');
}

// Inspection Details Loader
function loadMobileInspectionDetails() {
    const dam = MOBILE_DAMS_MOCK[SELECTED_DAM_ID] || MOBILE_DAMS_MOCK.D00123;
    document.getElementById('mob-det-damname').innerText = dam.name;
    document.getElementById('mob-det-damid').innerText = dam.id;
}

// Checklist Loader
const CHECKLIST_ITEMS = [
    { section: "Dam Structure", items: [
        { id: "str_cracks", label: "Concrete/Masonry Cracks" },
        { id: "str_settlement", label: "Foundation/Crest Settlement" },
        { id: "str_seepage", label: "Structural Joints Seepage" }
    ]},
    { section: "Spillway Wing", items: [
        { id: "sp_leakage", label: "Spillway Crest Leakage" },
        { id: "sp_hoist", label: "Hoist motor & gearing tooth wear" }
    ]},
    { section: "Drainage Gallery", items: [
        { id: "dr_clog", label: "Drainage pipe calcification/clog" }
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
                        <button class="chk-btn ${currentVal === 'OK' ? 'active-ok' : ''}" onclick="selectChecklistItem('${item.id}', 'OK', this)">OK</button>
                        <button class="chk-btn ${currentVal === 'Issue' ? 'active-issue' : ''}" onclick="selectChecklistItem('${item.id}', 'Issue', this)">Issue</button>
                        <button class="chk-btn ${currentVal === 'NA' ? 'active-na' : ''}" onclick="selectChecklistItem('${item.id}', 'NA', this)">N/A</button>
                    </div>
                </div>
            `;
        }).join('')}
    `).join('');
}

function selectChecklistItem(itemId, value, btnElement) {
    LOCAL_DB.checklistStore[itemId] = value;
    
    // Toggle active styles on siblings
    const parentGroup = btnElement.parentElement;
    parentGroup.querySelectorAll('.chk-btn').forEach(btn => {
        btn.className = 'chk-btn';
    });

    if (value === 'OK') btnElement.classList.add('active-ok');
    else if (value === 'Issue') {
        btnElement.classList.add('active-issue');
        
        // Auto prompt user to Record Observation!
        setTimeout(() => {
            if (confirm("You marked an ISSUE. Would you like to record a detailed safety observation and take photographs?")) {
                showMobileScreen('screen-mob-record-observation');
            }
        }, 300);
    }
    else if (value === 'NA') btnElement.classList.add('active-na');

    writeSimConsole(`CHECKLIST: Item ${itemId} set to ${value}`);
}

// 7. Record Observation Logic
function handleSaveObservation(e) {
    if (e) e.preventDefault();

    const desc = document.getElementById('mob-obs-desc').value;
    const category = document.getElementById('mob-obs-cat').value;
    const severity = document.getElementById('mob-obs-sev').value;
    const target = document.getElementById('mob-obs-target').value;

    const newObs = {
        id: `OBS-MOB-00${LOCAL_DB.observationsDrafts.length + 1}`,
        description: desc || "No description provided.",
        category: category,
        severity: severity,
        targetDate: target || "TBD",
        damId: SELECTED_DAM_ID,
        gps: "21.5721 N, 83.8710 E",
        status: "Identified",
        photos: attachedPhotos
    };

    LOCAL_DB.observationsDrafts.push(newObs);
    PENDING_SYNC_ITEMS.observations++;
    
    writeSimConsole(`SUCCESS: Safety Observation recorded offline. Severity: ${severity}`);
    
    // Reset attached photo list
    attachedPhotos = [];
    document.getElementById('mob-obs-desc').value = '';
    
    showMobileScreen('screen-mob-checklist');
}

// 8. Capture Photo Simulator
let attachedPhotos = [];
function handleAttachPhoto() {
    const photoId = `photo_field_${attachedPhotos.length + 1}.jpg`;
    attachedPhotos.push(photoId);
    
    // Render preview list
    const previewArea = document.getElementById('mob-photo-previews');
    if (previewArea) {
        previewArea.innerHTML += `
            <div class="wireframe-photo-placeholder" style="height:90px; width:100px; margin-right:8px; display:inline-block; vertical-align:top;">
                <span>📷 ${photoId}</span>
                <div style="font-size:6px; margin-top:2px;">Geotagged Checked</div>
            </div>
        `;
    }

    writeSimConsole(`CAMERA: Geotagged photo ${photoId} captured successfully.`);
    alert("Photograph captured! Image size: 2.1 MB. Coordinates stamped: 21.57212 N, 83.87105 E");
}

// Sync Center Loader
function loadSyncCenter() {
    document.getElementById('sync-insps-count').innerText = PENDING_SYNC_ITEMS.inspections;
    document.getElementById('sync-obs-count').innerText = PENDING_SYNC_ITEMS.observations;
    document.getElementById('sync-works-count').innerText = PENDING_SYNC_ITEMS.works;

    const statusEl = document.getElementById('sync-connection-text');
    if (IS_ONLINE) {
        statusEl.innerText = "Connected (Online)";
        statusEl.style.color = "green";
    } else {
        statusEl.innerText = "Offline Mode Active";
        statusEl.style.color = "red";
    }
}

// Sync Clicked
function triggerSyncNow() {
    if (!IS_ONLINE) {
        alert("ERROR: Cannot synchronize while device is in OFFLINE mode. Please connect to a network or toggle Online status on the control panel.");
        writeSimConsole("ERROR: Sync failed. Network not available.");
        return;
    }

    const total = PENDING_SYNC_ITEMS.inspections + PENDING_SYNC_ITEMS.observations + PENDING_SYNC_ITEMS.works;
    if (total === 0) {
        alert("No unsynced local drafts found in local SQLite database.");
        return;
    }

    writeSimConsole("SYNC: Connecting to Water Resources Cloud Gateway...");
    setTimeout(() => {
        writeSimConsole(`SYNC SUCCESS: Uploaded ${total} field reports to Dam Registry.`);
        
        // Reset counts
        PENDING_SYNC_ITEMS.inspections = 0;
        PENDING_SYNC_ITEMS.observations = 0;
        PENDING_SYNC_ITEMS.works = 0;

        LOCAL_DB.inspectionsDrafts = [];
        LOCAL_DB.observationsDrafts = [];
        LOCAL_DB.workProgressDrafts = [];

        loadSyncCenter();
        loadMobileDashboard();
        alert("Synchronization complete! Central Management Dashboard updated.");
    }, 1200);
}

// Progress Submit (Screen 11)
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
    
    writeSimConsole(`SUCCESS: Work progress submission saved offline. Milestone: ${milestone} at ${progress}%`);
    alert("Work progress saved offline! Sync when network becomes available.");
    showMobileScreen('screen-mob-dashboard');
}

// Review & Submit (Screen 12)
function loadMobileReviewSubmit() {
    const totalItems = Object.keys(LOCAL_DB.checklistStore).length;
    const issues = Object.values(LOCAL_DB.checklistStore).filter(val => val === 'Issue').length;
    
    document.getElementById('rev-chk-complete').innerText = `${totalItems} items completed`;
    document.getElementById('rev-obs-count').innerText = LOCAL_DB.observationsDrafts.length;
    document.getElementById('rev-photos-count').innerText = attachedPhotos.length;

    const warningEl = document.getElementById('rev-warning-msg');
    if (totalItems < 5) {
        warningEl.style.display = 'block';
        warningEl.innerText = "⚠️ WARNING: Checklist has incomplete sections. Mandatory safety verification required.";
    } else {
        warningEl.style.display = 'none';
    }
}

function handleMobileFinalSubmit() {
    PENDING_SYNC_ITEMS.inspections++;
    writeSimConsole("SUCCESS: Completed field inspection draft saved to offline database.");
    alert("Inspection saved! Draft stored in Sync queue.");
    showMobileScreen('screen-mob-dashboard');
}

// Mobile Alerts
function loadMobileAlerts() {
    // Fill static alert cards
}

// Observation details
function loadMobileObservationDetail() {
    // Fill details
}

// Corrective action details
function loadMobileCorrectiveAction() {
    // Fill details
}

// Work Progress loader
function loadMobileWorkProgress() {
    // Initialize slider values
}

// Bootstrapping
window.addEventListener('DOMContentLoaded', () => {
    // Set simulator default mode
    setNetworkStatus(true);
});
