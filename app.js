// Mock Data Repository for Integrated Dam Safety Management & Monitoring System

const MOCK_DATA = {
    roles: [
        { id: "State Management", name: "State Management" },
        { id: "Chief Engineer", name: "Chief Engineer" },
        { id: "Superintending Engineer", name: "Superintending Engineer" },
        { id: "Executive Engineer", name: "Executive Engineer" },
        { id: "Assistant Executive Engineer", name: "Assistant Executive Engineer" },
        { id: "Assistant Engineer", name: "Assistant Engineer" },
        { id: "Junior Engineer", name: "Junior Engineer" },
        { id: "Dam Authority", name: "Dam Authority" },
        { id: "Vendor/Contractor", name: "Vendor/Contractor" },
        { id: "Consultant", name: "Consultant" }
    ],

    dams: [
        {
            id: "D00123",
            name: "Hirakud Dam",
            district: "Sambalpur",
            circle: "Northern Circle",
            division: "Sambalpur Division",
            basin: "Mahanadi",
            river: "Mahanadi",
            classification: "High Risk",
            lastInspection: "12 Apr 2025",
            nextInspection: "12 Oct 2025",
            status: "RED",
            openObservations: 8,
            overdueActions: 5,
            ongoingWorks: 3,
            delayedWorks: 1,
            physicalProgress: "45%",
            financialProgress: "38%",
            latitude: "21.57",
            longitude: "83.87",
            details: {
                height: "59 m",
                length: "4.8 km (Main Dam)",
                catchment: "83,400 sq km",
                capacity: "5,896 M combat",
                spillwayCapacity: "42,450 cumec",
                yearCompleted: "1957"
            }
        },
        {
            id: "D00124",
            name: "Rengali Dam",
            district: "Angul",
            circle: "Northern Circle",
            division: "Sundargarh Division",
            basin: "Brahmani",
            river: "Brahmani",
            classification: "High Risk",
            lastInspection: "18 Mar 2025",
            nextInspection: "18 Sep 2025",
            status: "AMBER",
            openObservations: 5,
            overdueActions: 2,
            ongoingWorks: 2,
            delayedWorks: 0,
            physicalProgress: "72%",
            financialProgress: "68%",
            latitude: "21.50",
            longitude: "85.03",
            details: {
                height: "68.5 m",
                length: "1,040 m",
                catchment: "25,250 sq km",
                capacity: "3,414 M cum",
                spillwayCapacity: "26,400 cumec",
                yearCompleted: "1985"
            }
        },
        {
            id: "D00125",
            name: "Tikarpada Dam",
            district: "Kalahandi",
            circle: "Western Circle",
            division: "Kalahandi Division",
            basin: "Mahanadi",
            river: "Tel",
            classification: "Medium Risk",
            lastInspection: "05 May 2025",
            nextInspection: "05 Nov 2025",
            status: "GREEN",
            openObservations: 2,
            overdueActions: 0,
            ongoingWorks: 1,
            delayedWorks: 0,
            physicalProgress: "90%",
            financialProgress: "85%",
            latitude: "20.59",
            longitude: "84.78",
            details: {
                height: "42 m",
                length: "680 m",
                catchment: "12,400 sq km",
                capacity: "1,200 M cum",
                spillwayCapacity: "15,000 cumec",
                yearCompleted: "1998"
            }
        },
        {
            id: "D00126",
            name: "Balimela Dam",
            district: "Malkangiri",
            circle: "Southern Circle",
            division: "Koraput Division",
            basin: "Sabari",
            river: "Sileru",
            classification: "High Risk",
            lastInspection: "20 Feb 2025",
            nextInspection: "20 Aug 2025",
            status: "RED",
            openObservations: 7,
            overdueActions: 4,
            ongoingWorks: 2,
            delayedWorks: 1,
            physicalProgress: "30%",
            financialProgress: "22%",
            latitude: "18.15",
            longitude: "82.12",
            details: {
                height: "74 m",
                length: "1,885 m",
                catchment: "4,900 sq km",
                capacity: "2,676 M cum",
                spillwayCapacity: "7,800 cumec",
                yearCompleted: "1977"
            }
        },
        {
            id: "D00127",
            name: "Indravati Dam",
            district: "Nabarangpur",
            circle: "Southern Circle",
            division: "Nabarangpur Division",
            basin: "Indravati",
            river: "Indravati",
            classification: "Medium Risk",
            lastInspection: "11 Jun 2025",
            nextInspection: "11 Dec 2025",
            status: "AMBER",
            openObservations: 3,
            overdueActions: 1,
            ongoingWorks: 1,
            delayedWorks: 0,
            physicalProgress: "60%",
            financialProgress: "55%",
            latitude: "19.27",
            longitude: "82.83",
            details: {
                height: "45 m",
                length: "550 m",
                catchment: "2,630 sq km",
                capacity: "2,300 M cum",
                spillwayCapacity: "8,500 cumec",
                yearCompleted: "1996"
            }
        },
        {
            id: "D00128",
            name: "Upper Kolab Dam",
            district: "Koraput",
            circle: "Southern Circle",
            division: "Koraput Division",
            basin: "Vamsadhara",
            river: "Kolab",
            classification: "Low Risk",
            lastInspection: "15 May 2025",
            nextInspection: "15 Nov 2025",
            status: "GREEN",
            openObservations: 1,
            overdueActions: 0,
            ongoingWorks: 0,
            delayedWorks: 0,
            physicalProgress: "100%",
            financialProgress: "100%",
            latitude: "18.82",
            longitude: "82.68",
            details: {
                height: "55 m",
                length: "650 m",
                catchment: "1,630 sq km",
                capacity: "1,215 M cum",
                spillwayCapacity: "5,500 cumec",
                yearCompleted: "1993"
            }
        },
        {
            id: "D00129",
            name: "Dasamantpur Dam",
            district: "Dhenkanal",
            circle: "Central Circle",
            division: "Dhenkanal Division",
            basin: "Mahanadi",
            river: "Mahanadi",
            classification: "Medium Risk",
            lastInspection: "09 Apr 2025",
            nextInspection: "09 Oct 2025",
            status: "AMBER",
            openObservations: 4,
            overdueActions: 2,
            ongoingWorks: 1,
            delayedWorks: 1,
            physicalProgress: "50%",
            financialProgress: "42%",
            latitude: "20.85",
            longitude: "85.60",
            details: {
                height: "35 m",
                length: "420 m",
                catchment: "4,500 sq km",
                capacity: "350 M cum",
                spillwayCapacity: "4,200 cumec",
                yearCompleted: "2005"
            }
        },
        {
            id: "D00130",
            name: "Sunei Dam",
            district: "Bargarh",
            circle: "Northern Circle",
            division: "Bargarh Division",
            basin: "Mahanadi",
            river: "Supa",
            classification: "Low Risk",
            lastInspection: "22 May 2025",
            nextInspection: "22 Nov 2025",
            status: "GREEN",
            openObservations: 0,
            overdueActions: 0,
            ongoingWorks: 1,
            delayedWorks: 0,
            physicalProgress: "80%",
            financialProgress: "75%",
            latitude: "21.32",
            longitude: "83.62",
            details: {
                height: "30 m",
                length: "2,130 m",
                catchment: "1,200 sq km",
                capacity: "180 M cum",
                spillwayCapacity: "2,800 cumec",
                yearCompleted: "1988"
            }
        }
    ],

    inspections: [
        {
            id: "INSP-2025-001",
            damId: "D00123",
            damName: "Hirakud Dam",
            type: "Pre-Monsoon",
            plannedDate: "12 May 2025",
            team: "Team A (Dr. S. Mohapatra, J. Das)",
            officer: "Executive Engineer, Sambalpur",
            status: "Approved",
            reviewStatus: "Verified & Closed",
            checklist: [
                { item: "Upstream Slope protection check", result: "Crack identified in Block 12" },
                { item: "Drainage Gallery seepage measurements", result: "Flow exceeds threshold by 12%" },
                { item: "Spillway Gate hydromechanical operation", result: "Gate #4 hoisting motor runs hot" },
                { item: "Instrumentation and piezometer readings", result: "Normal" }
            ],
            recommendations: "Immediate grouting of upstream slope Block 12, repair motor hoist gate #4."
        },
        {
            id: "INSP-2025-002",
            damId: "D00124",
            damName: "Rengali Dam",
            type: "Post-Monsoon",
            plannedDate: "18 Mar 2025",
            team: "Team B (M. K. Nayak, S. Sahoo)",
            officer: "Executive Engineer, Angul",
            status: "Submitted",
            reviewStatus: "Awaiting Review",
            checklist: [
                { item: "Foundation gallery inspection", result: "Calcite deposits on joints" },
                { item: "Siltation survey in reservoir", result: "High siltation at active intake zone" },
                { item: "Instrumentation / Piezometers", result: "Piezometer P-3 shows anomalous pressure spike" }
            ],
            recommendations: "Piezometer calibration required. Silt removal plan to be initiated."
        },
        {
            id: "INSP-2025-003",
            damId: "D00126",
            damName: "Balimela Dam",
            type: "Periodic/Annual",
            plannedDate: "20 Feb 2025",
            team: "State Safety Committee Team",
            officer: "Superintending Engineer, Koraput",
            status: "In Progress",
            reviewStatus: "Under Inspection",
            checklist: [
                { item: "Earthen Dam settlement check", result: "Minor settlement observed at Ch. 120" },
                { item: "Toe drain channel clearance", result: "Clogged with heavy weed vegetation" }
            ],
            recommendations: "Clear toe drains immediately to prevent phreatic line surfacing."
        },
        {
            id: "INSP-2025-004",
            damId: "D00127",
            damName: "Indravati Dam",
            type: "Comprehensive",
            plannedDate: "11 Jun 2025",
            team: "External Dam Safety Panel",
            officer: "Chief Engineer, Safety Panel",
            status: "Planned",
            reviewStatus: "Assigned",
            checklist: [],
            recommendations: ""
        }
    ],

    observations: [
        {
            id: "OBS-2025-101",
            damId: "D00123",
            damName: "Hirakud Dam",
            inspectionId: "INSP-2025-001",
            category: "Structural Repairs",
            description: "Major structural cracking along concrete face of block 12, length 4.2m.",
            severity: "Critical",
            authority: "Executive Engineer",
            officer: "S. K. Patnaik, EE",
            targetDate: "30 Jun 2025",
            status: "Action Initiated",
            gps: "21.5721 N, 83.8710 E",
            evidence: "crack_block12_photo.jpg"
        },
        {
            id: "OBS-2025-102",
            damId: "D00123",
            damName: "Hirakud Dam",
            inspectionId: "INSP-2025-001",
            category: "Hydromechanical",
            description: "Spillway gate #4 hoisting mechanism motor overheating and vibrating.",
            severity: "High",
            authority: "Assistant Executive Engineer",
            officer: "B. Pujari, AEE",
            targetDate: "15 Jul 2025",
            status: "Assigned",
            gps: "21.5723 N, 83.8715 E",
            evidence: "spillway_motor_photo.jpg"
        },
        {
            id: "OBS-2025-103",
            damId: "D00124",
            damName: "Rengali Dam",
            inspectionId: "INSP-2025-002",
            category: "Instrumentation",
            description: "Piezometer P-3 shows anomalous hydraulic pressure spike near gallery.",
            severity: "Critical",
            authority: "Executive Engineer",
            officer: "A. K. Rout, EE",
            targetDate: "20 Jun 2025",
            status: "Identified",
            gps: "21.5015 N, 85.0312 E",
            evidence: "piezometer_graph.png"
        },
        {
            id: "OBS-2025-104",
            damId: "D00126",
            damName: "Balimela Dam",
            inspectionId: "INSP-2025-003",
            category: "Civil/Structural",
            description: "Heavy weed clog in seepage discharge channel downstream of earth dam.",
            severity: "Medium",
            authority: "Assistant Engineer",
            officer: "G. C. Biswal, AE",
            targetDate: "31 Aug 2025",
            status: "Action Initiated",
            gps: "18.1567 N, 82.1245 E",
            evidence: "toedrain_clog.jpg"
        }
    ],

    correctiveActions: [
        {
            id: "ACT-2025-201",
            observationId: "OBS-2025-101",
            damName: "Hirakud Dam",
            authority: "Executive Engineer, Sambalpur",
            officer: "S. K. Patnaik, EE",
            targetDate: "30 Jun 2025",
            priority: "Critical",
            progress: "40%",
            status: "In Progress",
            remarks: "Contractor mobilized for epoxy grout injection."
        },
        {
            id: "ACT-2025-202",
            observationId: "OBS-2025-103",
            damName: "Rengali Dam",
            authority: "Executive Engineer, Angul",
            officer: "A. K. Rout, EE",
            targetDate: "20 Jun 2025",
            priority: "Critical",
            progress: "10%",
            status: "Overdue",
            remarks: "Calibration panel delayed in transit. Manual monitoring ongoing."
        },
        {
            id: "ACT-2025-203",
            observationId: "OBS-2025-102",
            damName: "Hirakud Dam",
            authority: "Assistant Executive Engineer",
            officer: "B. Pujari, AEE",
            targetDate: "15 Jul 2025",
            priority: "High",
            progress: "0%",
            status: "Assigned",
            remarks: "Vendor requested for quote to rewind motor."
        }
    ],

    works: [
        {
            id: "WRK-2025-401",
            damId: "D00123",
            damName: "Hirakud Dam",
            description: "Epoxy Grouting & Consolidation Grouting of Spillway Spill face Block 12",
            category: "Structural Repairs",
            division: "Sambalpur Division",
            vendor: "M/s Utkal Infrastructure Ltd.",
            value: "Rs. 42.5 Lakhs",
            startDate: "01 May 2025",
            scheduledCompletion: "15 Jul 2025",
            physicalProgress: "45%",
            financialProgress: "38%",
            status: "In Progress",
            milestones: [
                { title: "Material Mobilization & Surface Prep", weight: "20%", status: "Completed", date: "15 May 2025" },
                { title: "Drilling & Insertion of Grout Nipples", weight: "30%", status: "Completed", date: "05 Jun 2025" },
                { title: "Epoxy Grout Injection Work", weight: "35%", status: "In Progress", date: "Ongoing" },
                { title: "Post-grouting core drilling & permeability test", weight: "15%", status: "Pending", date: "Scheduled" }
            ]
        },
        {
            id: "WRK-2025-402",
            damId: "D00123",
            damName: "Hirakud Dam",
            description: "Procurement, Installation & Calibration of Telemetric Piezometers",
            category: "Instrumentation",
            division: "Sambalpur Division",
            vendor: "Sahu Controls & Instruments",
            value: "Rs. 18.0 Lakhs",
            startDate: "10 May 2025",
            scheduledCompletion: "30 Jun 2025",
            physicalProgress: "15%",
            financialProgress: "10%",
            status: "Delayed",
            milestones: [
                { title: "Sensor Delivery to Site", weight: "40%", status: "Completed", date: "20 May 2025" },
                { title: "Cable Routing and DAQ Box install", weight: "30%", status: "Delayed", date: "Halted due to rain" },
                { title: "Sensor Commissioning & Calibration", weight: "30%", status: "Pending", date: "Scheduled" }
            ]
        },
        {
            id: "WRK-2025-403",
            damId: "D00124",
            damName: "Rengali Dam",
            description: "Restoration of Spillway Gate #3 Hydromechanical Hoist System",
            category: "Hydromechanical",
            division: "Sundargarh Division",
            vendor: "Orissa Engineers Pvt. Ltd.",
            value: "Rs. 24.8 Lakhs",
            startDate: "15 Apr 2025",
            scheduledCompletion: "15 Jun 2025",
            physicalProgress: "72%",
            financialProgress: "68%",
            status: "In Progress",
            milestones: [
                { title: "Dismantling hoist gear assembly", weight: "25%", status: "Completed", date: "30 Apr 2025" },
                { title: "Bushing and gear tooth weld build-up", weight: "35%", status: "Completed", date: "20 May 2025" },
                { title: "Re-assembly and load-testing", weight: "40%", status: "In Progress", date: "Ongoing" }
            ]
        }
    ],

    vendors: [
        {
            name: "M/s Utkal Infrastructure Ltd.",
            activeWorks: 2,
            completedWorks: 12,
            delayedWorks: 1,
            status: "Active (Approved)",
            pendingSubmissions: 1,
            rejectedSubmissions: 0,
            performance: "Good (84/100)"
        },
        {
            name: "Orissa Engineers Pvt. Ltd.",
            activeWorks: 1,
            completedWorks: 18,
            delayedWorks: 0,
            status: "Active (Approved)",
            pendingSubmissions: 0,
            rejectedSubmissions: 1,
            performance: "Excellent (92/100)"
        },
        {
            name: "Sahu Controls & Instruments",
            activeWorks: 1,
            completedWorks: 5,
            delayedWorks: 1,
            status: "Under Watch",
            pendingSubmissions: 2,
            rejectedSubmissions: 2,
            performance: "Average (68/100)"
        }
    ],

    vendorVerifications: [
        {
            id: "VER-2025-801",
            workId: "WRK-2025-401",
            workTitle: "Epoxy Grouting... Block 12",
            vendor: "M/s Utkal Infrastructure Ltd.",
            milestone: "Drilling & Insertion of Grout Nipples (30% weight)",
            activity: "150 nipples fixed, depth verified by AE",
            claimedProgress: "100% of milestone (30% total)",
            photos: ["nipple_grid_photo.jpg", "depth_verify_gauge.jpg"],
            gps: "21.57212 N, 83.87105 E",
            measurements: "Nipple pitch 300mm c/c, hole depth 450mm",
            remarks: "Drill logs verified, signatures attached.",
            status: "Under Verification"
        },
        {
            id: "VER-2025-802",
            workId: "WRK-2025-402",
            workTitle: "Procurement, Installation... Piezometers",
            vendor: "Sahu Controls & Instruments",
            milestone: "Cable Routing and DAQ Box install (30% weight)",
            activity: "Cable conduit laid in gallery, DAQ mounted",
            claimedProgress: "80% of milestone (24% total)",
            photos: ["daq_wall_mount.jpg"],
            gps: "21.5725 N, 83.8708 E",
            measurements: "Conduit run 120 meters",
            remarks: "Some joints in conduit require correction due to water leakage.",
            status: "Returned for Correction"
        }
    ],

    documents: [
        { name: "Hirakud_Annual_Safety_Audit_2024.pdf", dam: "Hirakud Dam", type: "Safety Reports", version: "v2.0", uploader: "S. Mohapatra (CE)", date: "15 Dec 2024", status: "Approved" },
        { name: "Rengali_Gallery_Drainage_Drawing.dwg", dam: "Rengali Dam", type: "Drawings", version: "v1.1", uploader: "R. K. Sahu (EE)", date: "10 Jan 2025", status: "Approved" },
        { name: "Balimela_EAP_Revision_Draft.pdf", dam: "Balimela Dam", type: "EAP", version: "v3.2", uploader: "G. Biswal (AE)", date: "05 Jun 2025", status: "Pending Review" },
        { name: "Indravati_Hydrology_Manual.pdf", dam: "Indravati Dam", type: "O&M Manuals", version: "v1.0", uploader: "P. Mishra (SE)", date: "22 Feb 2023", status: "Approved" }
    ],

    tasks: [
        { id: "TSK-01", task: "Verify Inspection Report INSP-2025-002", dam: "Rengali Dam", assignedTo: "Chief Engineer", priority: "High", dueDate: "25 Jun 2025", status: "Pending Action", type: "Inspection" },
        { id: "TSK-02", task: "Review Critical Observation OBS-2025-103", dam: "Rengali Dam", assignedTo: "Executive Engineer", priority: "Critical", dueDate: "22 Jun 2025", status: "Awaiting Action Plan", type: "Observation" },
        { id: "TSK-03", task: "Verify Progress Submission VER-2025-801", dam: "Hirakud Dam", assignedTo: "Executive Engineer", priority: "Medium", dueDate: "28 Jun 2025", status: "Under Review", type: "Vendor Submission" },
        { id: "TSK-04", task: "Review EAP Document submission", dam: "Balimela Dam", assignedTo: "Superintending Engineer", priority: "High", dueDate: "30 Jun 2025", status: "Awaiting Approval", type: "Document" }
    ],

    alerts: [
        { id: "ALT-01", type: "Critical Observation", text: "New Critical Piezometer Pressure Spike (OBS-2025-103) reported at Rengali Dam.", date: "13 May 2025 10:45 AM", priority: "Critical" },
        { id: "ALT-02", type: "Corrective Action Overdue", text: "Epoxy Grout calibration panel (ACT-2025-202) target date 20 Jun 2025 is overdue.", date: "20 Jun 2025 12:00 AM", priority: "High" },
        { id: "ALT-03", type: "Inspection Assigned", text: "Pre-Monsoon Inspection assigned to Team A for Hirakud Dam.", date: "12 May 2025 09:00 AM", priority: "Medium" },
        { id: "ALT-04", type: "Work Milestone Approaching", text: "Sahu Controls Installation scheduled completion (30 Jun 2025) is approaching but progress is only 15%.", date: "22 Jun 2025 08:30 AM", priority: "High" }
    ],

    auditLogs: [
        { who: "Dr. S. Mohapatra (Chief Engineer)", what: "Approved Inspection Report INSP-2025-001", when: "14 May 2025 11:20 AM", status: "Closed", remarks: "All critical findings recorded in registry." },
        { who: "S. K. Patnaik (EE, Sambalpur)", what: "Assigned Corrective Action ACT-2025-201 to M/s Utkal Infrastructure Ltd.", when: "02 May 2025 04:30 PM", status: "Action Taken", remarks: "Materials mobilized on site." },
        { who: "M/s Utkal Infrastructure Ltd.", what: "Submitted Progress Verification VER-2025-801 for Drilling Nipples", when: "12 Jun 2025 02:15 PM", status: "Submitted", remarks: "Requesting immediate site verification." },
        { who: "B. Pujari (AEE, Sambalpur)", what: "Conducted field inspection check on gate hoist motor #4", when: "13 May 2025 10:00 AM", status: "Verified", remarks: "Electrical load test confirmed vibration and thermal load." }
    ]
};

// Global App State
let CURRENT_ROLE = "Executive Engineer";
let ACTIVE_DAM_ID = "D00123";
let ACTIVE_INSP_ID = "INSP-2025-002";
let ACTIVE_OBS_ID = "OBS-2025-103";
let ACTIVE_WORK_ID = "WRK-2025-401";
let ACTIVE_VERIFY_ID = "VER-2025-801";

// Screen Navigation Manager
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen-view').forEach(screen => {
        screen.classList.remove('active');
    });

    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }

    // Update active class in sidebar links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick')?.includes(screenId)) {
            link.classList.add('active');
        }
    });

    // Update breadcrumbs
    const pageName = screenId.replace('screen-', '').replace('-', ' ').toUpperCase();
    document.getElementById('breadcrumb-current').innerText = pageName;

    // Trigger page-specific loaders
    if (screenId === 'screen-state-dashboard') {
        loadStateDashboard();
    } else if (screenId === 'screen-dam-registry') {
        loadDamRegistry();
    } else if (screenId === 'screen-dam-profile') {
        loadDamProfile(ACTIVE_DAM_ID);
    } else if (screenId === 'screen-inspection-management') {
        loadInspectionManagement();
    } else if (screenId === 'screen-inspection-review') {
        loadInspectionReview(ACTIVE_INSP_ID);
    } else if (screenId === 'screen-observation-management') {
        loadObservationManagement();
    } else if (screenId === 'screen-observation-detail') {
        loadObservationDetail(ACTIVE_OBS_ID);
    } else if (screenId === 'screen-corrective-actions') {
        loadCorrectiveActions();
    } else if (screenId === 'screen-work-management') {
        loadWorkManagement();
    } else if (screenId === 'screen-work-profile') {
        loadWorkProfile(ACTIVE_WORK_ID);
    } else if (screenId === 'screen-vendor-management') {
        loadVendorManagement();
    } else if (screenId === 'screen-vendor-verification') {
        loadVendorVerification(ACTIVE_VERIFY_ID);
    } else if (screenId === 'screen-document-management') {
        loadDocumentManagement();
    } else if (screenId === 'screen-approval-center') {
        loadApprovalCenter();
    } else if (screenId === 'screen-alert-center') {
        loadAlertCenter();
    } else if (screenId === 'screen-reports') {
        loadReportsMIS();
    } else if (screenId === 'screen-historical-record') {
        loadHistoricalAudit();
    } else if (screenId === 'screen-master-data') {
        loadMasterData();
    } else if (screenId === 'screen-user-roles') {
        loadUserRoleManagement();
    } else if (screenId === 'screen-gis-map') {
        renderGISMap();
    }

    // Scroll main content to top
    const mainContent = document.querySelector('.page-content');
    if (mainContent) mainContent.scrollTop = 0;
}

// Set Active User Role and Re-evaluate Access
function setRole(roleName) {
    CURRENT_ROLE = roleName;
    document.getElementById('current-role-display').innerText = CURRENT_ROLE;
    
    // Toggle role-based elements
    const adminElements = document.querySelectorAll('[data-role-restriction="admin"]');
    const engineerElements = document.querySelectorAll('[data-role-restriction="engineer"]');
    const vendorElements = document.querySelectorAll('[data-role-restriction="vendor"]');

    if (CURRENT_ROLE === "Junior Engineer" || CURRENT_ROLE === "Vendor/Contractor") {
        adminElements.forEach(el => el.style.display = 'none');
    } else {
        adminElements.forEach(el => el.style.display = '');
    }

    // Refresh active view to reflect permissions
    const activeView = document.querySelector('.screen-view.active');
    if (activeView) {
        showScreen(activeView.id);
    }
}

// ----------------------------------------------------
// Page Loaders & Dynamic UI Rendering
// ----------------------------------------------------

// 1. Login Logic
function handleLogin(e) {
    if (e) e.preventDefault();
    document.body.classList.remove('logged-out');
    document.body.classList.add('logged-in');
    showScreen('screen-state-dashboard');
}

function handleLogout() {
    document.body.classList.remove('logged-in');
    document.body.classList.add('logged-out');
    showScreen('screen-login');
}

// 2. State Dashboard Loader
function loadStateDashboard() {
    const totalDams = MOCK_DATA.dams.length;
    const criticalObs = MOCK_DATA.observations.filter(o => o.severity === "Critical").length;
    const openActions = MOCK_DATA.correctiveActions.filter(a => a.status === "In Progress" || a.status === "Assigned").length;
    const overdueActions = MOCK_DATA.correctiveActions.filter(a => a.status === "Overdue").length;
    const ongoingWorks = MOCK_DATA.works.filter(w => w.status === "In Progress").length;
    const delayedWorks = MOCK_DATA.works.filter(w => w.status === "Delayed").length;

    document.getElementById('kpi-total-dams').innerText = totalDams;
    document.getElementById('kpi-critical-obs').innerText = criticalObs;
    document.getElementById('kpi-open-actions').innerText = openActions;
    document.getElementById('kpi-overdue-actions').innerText = overdueActions;
    document.getElementById('kpi-ongoing-works').innerText = ongoingWorks;
    document.getElementById('kpi-delayed-works').innerText = delayedWorks;

    // Fill Dam Safety status table on dashboard
    const dashboardStatusBody = document.getElementById('dashboard-status-table');
    if (dashboardStatusBody) {
        dashboardStatusBody.innerHTML = MOCK_DATA.dams.slice(0, 5).map(dam => `
            <tr>
                <td><strong>${dam.name}</strong> (${dam.id})</td>
                <td>${dam.district}</td>
                <td><span class="status-pill ${dam.status.toLowerCase()}">${dam.status}</span></td>
                <td>${dam.openObservations}</td>
                <td>${dam.overdueActions}</td>
                <td>${dam.ongoingWorks}</td>
                <td><button class="wireframe-btn" onclick="drillToDam('${dam.id}')">Drill</button></td>
            </tr>
        `).join('');
    }
}

// 3. Drilldown triggers
function drillToCircle(circle) {
    showScreen('screen-dam-registry');
    document.getElementById('filter-circle').value = circle;
    filterDams();
}

function drillToDam(damId) {
    ACTIVE_DAM_ID = damId;
    showScreen('screen-dam-profile');
}

function drillToWork(workId) {
    ACTIVE_WORK_ID = workId;
    showScreen('screen-work-profile');
}

function drillToInspection(inspId) {
    ACTIVE_INSP_ID = inspId;
    showScreen('screen-inspection-review');
}

function drillToObservation(obsId) {
    ACTIVE_OBS_ID = obsId;
    showScreen('screen-observation-detail');
}

function drillToVerification(verId) {
    ACTIVE_VERIFY_ID = verId;
    showScreen('screen-vendor-verification');
}

// 4. Dam Registry Loader & Filters
function loadDamRegistry() {
    renderDamTable(MOCK_DATA.dams);
}

function renderDamTable(data) {
    const tbody = document.getElementById('registry-table-body');
    if (!tbody) return;

    if (data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="14" style="text-align:center;">No dams match search/filters.</td></tr>`;
        return;
    }

    tbody.innerHTML = data.map(dam => `
        <tr>
            <td>${dam.id}</td>
            <td><strong>${dam.name}</strong></td>
            <td>${dam.district}</td>
            <td>${dam.circle}</td>
            <td>${dam.division}</td>
            <td>${dam.basin}</td>
            <td>${dam.river}</td>
            <td>${dam.classification}</td>
            <td>${dam.lastInspection}</td>
            <td>${dam.nextInspection}</td>
            <td><span class="status-pill ${dam.status.toLowerCase()}">${dam.status}</span></td>
            <td style="text-align:center; font-weight:bold;">${dam.openObservations}</td>
            <td style="text-align:center; font-weight:bold; color:${dam.overdueActions > 0 ? '#ff4d4d' : '#000'}">${dam.overdueActions}</td>
            <td style="text-align:center; font-weight:bold;">${dam.ongoingWorks}</td>
            <td>
                <button class="wireframe-btn" onclick="drillToDam('${dam.id}')">View</button>
            </td>
        </tr>
    `).join('');
}

function filterDams() {
    const query = document.getElementById('search-dam-input').value.toLowerCase();
    const district = document.getElementById('filter-district').value;
    const circle = document.getElementById('filter-circle').value;
    const classification = document.getElementById('filter-classification').value;
    const status = document.getElementById('filter-status').value;

    const filtered = MOCK_DATA.dams.filter(dam => {
        const matchesSearch = dam.name.toLowerCase().includes(query) || 
                              dam.id.toLowerCase().includes(query) ||
                              dam.river.toLowerCase().includes(query);
        const matchesDistrict = !district || dam.district === district;
        const matchesCircle = !circle || dam.circle === circle;
        const matchesClass = !classification || dam.classification === classification;
        const matchesStatus = !status || dam.status === status;

        return matchesSearch && matchesDistrict && matchesCircle && matchesClass && matchesStatus;
    });

    renderDamTable(filtered);
}

function resetDamFilters() {
    document.getElementById('search-dam-input').value = '';
    document.getElementById('filter-district').value = '';
    document.getElementById('filter-circle').value = '';
    document.getElementById('filter-classification').value = '';
    document.getElementById('filter-status').value = '';
    loadDamRegistry();
}

// 5. Dam Profile Loader
function loadDamProfile(damId) {
    const dam = MOCK_DATA.dams.find(d => d.id === damId) || MOCK_DATA.dams[0];
    
    // Header
    document.getElementById('profile-dam-name').innerText = dam.name;
    document.getElementById('profile-dam-id').innerText = dam.id;
    document.getElementById('profile-dam-status').className = `status-pill ${dam.status.toLowerCase()}`;
    document.getElementById('profile-dam-status').innerText = dam.status;
    document.getElementById('profile-dam-district').innerText = dam.district;
    document.getElementById('profile-dam-division').innerText = dam.division;
    document.getElementById('profile-dam-circle').innerText = dam.circle;

    // Summary Cards
    document.getElementById('prof-card-last-insp').innerText = dam.lastInspection;
    document.getElementById('prof-card-next-insp').innerText = dam.nextInspection;
    document.getElementById('prof-card-open-obs').innerText = dam.openObservations;
    document.getElementById('prof-card-overdue-act').innerText = dam.overdueActions;
    document.getElementById('prof-card-ongoing').innerText = dam.ongoingWorks;
    document.getElementById('prof-card-progress').innerText = dam.physicalProgress;

    // Profile Tab: Overview details
    document.getElementById('prof-height').innerText = dam.details.height;
    document.getElementById('prof-length').innerText = dam.details.length;
    document.getElementById('prof-catchment').innerText = dam.details.catchment;
    document.getElementById('prof-capacity').innerText = dam.details.capacity;
    document.getElementById('prof-spillway').innerText = dam.details.spillwayCapacity;
    document.getElementById('prof-completed').innerText = dam.details.yearCompleted;

    // Inspections list for dam
    const damInsps = MOCK_DATA.inspections.filter(i => i.damId === damId);
    document.getElementById('profile-inspections-body').innerHTML = damInsps.length ? damInsps.map(i => `
        <tr>
            <td>${i.id}</td>
            <td>${i.type}</td>
            <td>${i.plannedDate}</td>
            <td>${i.team}</td>
            <td><span class="status-pill ${i.status === 'Approved' ? 'green' : 'amber'}">${i.status}</span></td>
            <td><button class="wireframe-btn" onclick="drillToInspection('${i.id}')">View</button></td>
        </tr>
    `).join('') : `<tr><td colspan="6" style="text-align:center;">No inspections logged for this dam.</td></tr>`;

    // Observations list for dam
    const damObs = MOCK_DATA.observations.filter(o => o.damId === damId);
    document.getElementById('profile-observations-body').innerHTML = damObs.length ? damObs.map(o => `
        <tr>
            <td>${o.id}</td>
            <td>${o.category}</td>
            <td>${o.description}</td>
            <td><span class="status-pill ${o.severity === 'Critical' ? 'red' : 'amber'}">${o.severity}</span></td>
            <td>${o.targetDate}</td>
            <td><span class="status-pill grey">${o.status}</span></td>
            <td><button class="wireframe-btn" onclick="drillToObservation('${o.id}')">Details</button></td>
        </tr>
    `).join('') : `<tr><td colspan="7" style="text-align:center;">No safety observations reported.</td></tr>`;

    // Works list for dam
    const damWorks = MOCK_DATA.works.filter(w => w.damId === damId);
    document.getElementById('profile-works-body').innerHTML = damWorks.length ? damWorks.map(w => `
        <tr>
            <td>${w.id}</td>
            <td>${w.description}</td>
            <td>${w.vendor}</td>
            <td>${w.value}</td>
            <td>
                <div class="progress-bar-wireframe">
                    <div class="progress-fill-wireframe" style="width: ${w.physicalProgress};"></div>
                    <div class="progress-text-wireframe">${w.physicalProgress}</div>
                </div>
            </td>
            <td><span class="status-pill ${w.status === 'Delayed' ? 'red' : 'green'}">${w.status}</span></td>
            <td><button class="wireframe-btn" onclick="drillToWork('${w.id}')">Profile</button></td>
        </tr>
    `).join('') : `<tr><td colspan="7" style="text-align:center;">No construction/rehabilitation works ongoing.</td></tr>`;

    // Documents list for dam
    const damDocs = MOCK_DATA.documents.filter(d => d.dam === dam.name);
    document.getElementById('profile-documents-body').innerHTML = damDocs.length ? damDocs.map(d => `
        <tr>
            <td>${d.name}</td>
            <td>${d.type}</td>
            <td>${d.version}</td>
            <td>${d.uploader}</td>
            <td>${d.date}</td>
        </tr>
    `).join('') : `<tr><td colspan="5" style="text-align:center;">No associated files.</td></tr>`;

    // Timeline audit history for dam
    const auditLogs = MOCK_DATA.auditLogs;
    document.getElementById('profile-history-timeline').innerHTML = auditLogs.map(log => `
        <div class="audit-item">
            <div class="audit-marker"></div>
            <div class="audit-bubble">
                <div class="audit-time">${log.when}</div>
                <div><span class="audit-user">${log.who}</span>: ${log.what}</div>
                ${log.remarks ? `<div style="font-style:italic; color:#666666; margin-top:4px;">Remarks: ${log.remarks}</div>` : ''}
            </div>
        </div>
    `).join('');
}

// Switch sub-tabs inside Dam Profile or Work Profile
function switchTab(tabId, headerElement) {
    // Hide sibling panels
    const parentContainer = headerElement.closest('.tab-container');
    parentContainer.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    parentContainer.querySelectorAll('.tab-header-item').forEach(hdr => {
        hdr.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    headerElement.classList.add('active');
}

// 6. Inspection Management Loader
function loadInspectionManagement() {
    const tbody = document.getElementById('inspection-table-body');
    if (!tbody) return;

    tbody.innerHTML = MOCK_DATA.inspections.map(insp => `
        <tr>
            <td>${insp.id}</td>
            <td><strong>${insp.damName}</strong></td>
            <td>${insp.type}</td>
            <td>${insp.plannedDate}</td>
            <td>${insp.team}</td>
            <td>${insp.officer}</td>
            <td><span class="status-pill ${insp.status === 'Approved' ? 'green' : 'amber'}">${insp.status}</span></td>
            <td><span class="status-pill grey">${insp.reviewStatus}</span></td>
            <td>
                <button class="wireframe-btn" onclick="drillToInspection('${insp.id}')">Review</button>
            </td>
        </tr>
    `).join('');
}

// 7. Plan/Assign Inspection Form
function handleCreateInspection(e) {
    if (e) e.preventDefault();
    const damId = document.getElementById('plan-dam-select').value;
    const dam = MOCK_DATA.dams.find(d => d.id === damId);
    const type = document.getElementById('plan-type-select').value;
    const date = document.getElementById('plan-date').value;
    const team = document.getElementById('plan-team').value;
    const officer = document.getElementById('plan-officer').value;

    const newInsp = {
        id: `INSP-2025-0${MOCK_DATA.inspections.length + 1}`,
        damId: damId,
        damName: dam ? dam.name : "Custom Dam",
        type: type,
        plannedDate: date || "TBD",
        team: team || "Assigned Team",
        officer: officer || "Assigned Officer",
        status: "Planned",
        reviewStatus: "Assigned",
        checklist: [],
        recommendations: ""
    };

    MOCK_DATA.inspections.unshift(newInsp);
    showScreen('screen-inspection-management');
}

// 8. Inspection Review Loader
function loadInspectionReview(inspId) {
    const insp = MOCK_DATA.inspections.find(i => i.id === inspId) || MOCK_DATA.inspections[0];
    const dam = MOCK_DATA.dams.find(d => d.id === insp.damId) || MOCK_DATA.dams[0];

    document.getElementById('rev-dam-name').innerText = insp.damName;
    document.getElementById('rev-dam-id').innerText = insp.damId;
    document.getElementById('rev-dam-safety').innerText = dam.status;
    document.getElementById('rev-dam-safety').className = `status-pill ${dam.status.toLowerCase()}`;
    
    document.getElementById('rev-insp-id').innerText = insp.id;
    document.getElementById('rev-insp-type').innerText = insp.type;
    document.getElementById('rev-insp-date').innerText = insp.plannedDate;
    document.getElementById('rev-insp-team').innerText = insp.team;
    document.getElementById('rev-insp-officer').innerText = insp.officer;

    // Checklist results
    const checklistBody = document.getElementById('rev-checklist-results');
    if (insp.checklist && insp.checklist.length) {
        checklistBody.innerHTML = insp.checklist.map(chk => `
            <div class="checklist-item">
                <input type="checkbox" checked disabled />
                <div>
                    <strong>${chk.item}</strong>
                    <div style="color:#cc0000; font-size:11px;">Result: ${chk.result}</div>
                </div>
            </div>
        `).join('');
    } else {
        checklistBody.innerHTML = `
            <div class="checklist-item"><input type="checkbox" /> Spillway structures check</div>
            <div class="checklist-item"><input type="checkbox" /> Piezometer reading verification</div>
            <div class="checklist-item"><input type="checkbox" /> Gallery drain line cleaning verification</div>
        `;
    }

    // Recommendations
    document.getElementById('rev-recommendations').innerText = insp.recommendations || "Reviewer has not entered recommendations yet.";
    
    // Status indicator flow active node
    document.querySelectorAll('#rev-workflow-indicator .workflow-node').forEach(node => {
        node.classList.remove('active', 'done');
        if (node.innerText === insp.status) {
            node.classList.add('active');
        }
    });
}

function handleInspectionReviewSubmit(action) {
    const statusText = document.getElementById('rev-review-status-text');
    const remarks = document.getElementById('rev-reviewer-remarks').value;

    const insp = MOCK_DATA.inspections.find(i => i.id === ACTIVE_INSP_ID);
    if (!insp) return;

    if (action === 'approve') {
        insp.status = "Approved";
        insp.reviewStatus = "Verified & Closed";
        alert("Inspection report successfully approved and registered into deficency system.");
    } else if (action === 'return') {
        insp.status = "Assigned";
        insp.reviewStatus = "Returned for Correction";
        alert("Inspection report returned back to field team.");
    }

    // Add audit trail log
    MOCK_DATA.auditLogs.unshift({
        who: CURRENT_ROLE,
        what: `${action === 'approve' ? 'Approved' : 'Returned'} Inspection ${ACTIVE_INSP_ID}`,
        when: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
        status: insp.status,
        remarks: remarks || "Processed through Review Center"
    });

    showScreen('screen-inspection-management');
}

// 9. Observation Management Loader
function loadObservationManagement() {
    const tbody = document.getElementById('observation-table-body');
    if (!tbody) return;

    tbody.innerHTML = MOCK_DATA.observations.map(obs => `
        <tr style="${obs.severity === 'Critical' ? 'background-color:#fff2f2; border-left:4px solid #ff4d4d;' : ''}">
            <td>${obs.id}</td>
            <td><strong>${obs.damName}</strong></td>
            <td>${obs.inspectionId}</td>
            <td>${obs.category}</td>
            <td>${obs.description}</td>
            <td><span class="status-pill ${obs.severity === 'Critical' ? 'red' : 'amber'}">${obs.severity}</span></td>
            <td>${obs.authority}</td>
            <td>${obs.targetDate}</td>
            <td><span class="status-pill grey">${obs.status}</span></td>
            <td>
                <button class="wireframe-btn" onclick="drillToObservation('${obs.id}')">Detail</button>
            </td>
        </tr>
    `).join('');
}

function filterObservations(severity) {
    let filtered = MOCK_DATA.observations;
    if (severity !== 'All') {
        filtered = MOCK_DATA.observations.filter(o => o.severity === severity);
    }
    const tbody = document.getElementById('observation-table-body');
    if (tbody) {
        tbody.innerHTML = filtered.map(obs => `
            <tr style="${obs.severity === 'Critical' ? 'background-color:#fff2f2; border-left:4px solid #ff4d4d;' : ''}">
                <td>${obs.id}</td>
                <td><strong>${obs.damName}</strong></td>
                <td>${obs.inspectionId}</td>
                <td>${obs.category}</td>
                <td>${obs.description}</td>
                <td><span class="status-pill ${obs.severity === 'Critical' ? 'red' : 'amber'}">${obs.severity}</span></td>
                <td>${obs.authority}</td>
                <td>${obs.targetDate}</td>
                <td><span class="status-pill grey">${obs.status}</span></td>
                <td>
                    <button class="wireframe-btn" onclick="drillToObservation('${obs.id}')">Detail</button>
                </td>
            </tr>
        `).join('');
    }
}

// 10. Observation Detail Loader
function loadObservationDetail(obsId) {
    const obs = MOCK_DATA.observations.find(o => o.id === obsId) || MOCK_DATA.observations[0];
    
    document.getElementById('obs-det-id').innerText = obs.id;
    document.getElementById('obs-det-dam').innerText = obs.damName;
    document.getElementById('obs-det-insp').innerText = obs.inspectionId;
    document.getElementById('obs-det-desc').innerText = obs.description;
    document.getElementById('obs-det-category').innerText = obs.category;
    document.getElementById('obs-det-severity').innerText = obs.severity;
    document.getElementById('obs-det-severity').className = `status-pill ${obs.severity === 'Critical' ? 'red' : 'amber'}`;
    document.getElementById('obs-det-location').innerText = obs.gps;
    document.getElementById('obs-det-authority').innerText = obs.authority;
    document.getElementById('obs-det-officer').innerText = obs.officer;
    document.getElementById('obs-det-target').innerText = obs.targetDate;

    // Show workflow indicator highlight
    document.querySelectorAll('#obs-workflow-bar .workflow-node').forEach(node => {
        node.classList.remove('active', 'done');
        if (node.innerText === obs.status) {
            node.classList.add('active');
        }
    });
}

function handleAssignCorrectiveAction() {
    // Navigate to Corrective Action screen and prefill or notify
    alert("Triggered corrective action assignment workspace. Forwarding to Work Allocation Panel.");
    showScreen('screen-corrective-actions');
}

// 11. Corrective Action Management Loader
function loadCorrectiveActions() {
    const tbody = document.getElementById('action-table-body');
    if (!tbody) return;

    tbody.innerHTML = MOCK_DATA.correctiveActions.map(act => `
        <tr>
            <td>${act.id}</td>
            <td><strong>${act.observationId}</strong></td>
            <td>${act.damName}</td>
            <td>${act.authority}</td>
            <td>${act.officer}</td>
            <td>${act.targetDate}</td>
            <td><span class="status-pill ${act.priority === 'Critical' ? 'red' : 'amber'}">${act.priority}</span></td>
            <td>
                <div class="progress-bar-wireframe">
                    <div class="progress-fill-wireframe" style="width: ${act.progress};"></div>
                    <div class="progress-text-wireframe">${act.progress}</div>
                </div>
            </td>
            <td><span class="status-pill ${act.status === 'Overdue' ? 'red' : 'grey'}">${act.status}</span></td>
            <td>
                <button class="wireframe-btn" onclick="drillToObservation('${act.observationId}')">Obs</button>
            </td>
        </tr>
    `).join('');
}

// 12. Work Management Loader
function loadWorkManagement() {
    const tbody = document.getElementById('work-table-body');
    if (!tbody) return;

    tbody.innerHTML = MOCK_DATA.works.map(wrk => `
        <tr>
            <td>${wrk.id}</td>
            <td><strong>${wrk.damName}</strong></td>
            <td>${wrk.description}</td>
            <td>${wrk.category}</td>
            <td>${wrk.division}</td>
            <td>${wrk.vendor}</td>
            <td>${wrk.value}</td>
            <td>${wrk.startDate}</td>
            <td>${wrk.scheduledCompletion}</td>
            <td>
                <div class="progress-bar-wireframe">
                    <div class="progress-fill-wireframe" style="width: ${wrk.physicalProgress};"></div>
                    <div class="progress-text-wireframe">${wrk.physicalProgress}</div>
                </div>
            </td>
            <td>
                <div class="progress-bar-wireframe">
                    <div class="progress-fill-wireframe" style="width: ${wrk.financialProgress};"></div>
                    <div class="progress-text-wireframe">${wrk.financialProgress}</div>
                </div>
            </td>
            <td><span class="status-pill ${wrk.status === 'Delayed' ? 'red' : 'green'}">${wrk.status}</span></td>
            <td>
                <button class="wireframe-btn" onclick="drillToWork('${wrk.id}')">View</button>
            </td>
        </tr>
    `).join('');
}

function filterWorks(category) {
    let filtered = MOCK_DATA.works;
    if (category !== 'All') {
        filtered = MOCK_DATA.works.filter(w => w.category === category);
    }
    const tbody = document.getElementById('work-table-body');
    if (tbody) {
        tbody.innerHTML = filtered.map(wrk => `
            <tr>
                <td>${wrk.id}</td>
                <td><strong>${wrk.damName}</strong></td>
                <td>${wrk.description}</td>
                <td>${wrk.category}</td>
                <td>${wrk.division}</td>
                <td>${wrk.vendor}</td>
                <td>${wrk.value}</td>
                <td>${wrk.startDate}</td>
                <td>${wrk.scheduledCompletion}</td>
                <td>
                    <div class="progress-bar-wireframe">
                        <div class="progress-fill-wireframe" style="width: ${wrk.physicalProgress};"></div>
                        <div class="progress-text-wireframe">${wrk.physicalProgress}</div>
                    </div>
                </td>
                <td>
                    <div class="progress-bar-wireframe">
                        <div class="progress-fill-wireframe" style="width: ${wrk.financialProgress};"></div>
                        <div class="progress-text-wireframe">${wrk.financialProgress}</div>
                    </div>
                </td>
                <td><span class="status-pill ${wrk.status === 'Delayed' ? 'red' : 'green'}">${wrk.status}</span></td>
                <td>
                    <button class="wireframe-btn" onclick="drillToWork('${wrk.id}')">View</button>
                </td>
            </tr>
        `).join('');
    }
}

// 13. Work Profile Loader
function loadWorkProfile(workId) {
    const wrk = MOCK_DATA.works.find(w => w.id === workId) || MOCK_DATA.works[0];
    
    document.getElementById('work-prof-id').innerText = wrk.id;
    document.getElementById('work-prof-dam').innerText = wrk.damName;
    document.getElementById('work-prof-vendor').innerText = wrk.vendor;
    document.getElementById('work-prof-desc').innerText = wrk.description;
    document.getElementById('work-prof-value').innerText = wrk.value;
    document.getElementById('work-prof-start').innerText = wrk.startDate;
    document.getElementById('work-prof-completion').innerText = wrk.scheduledCompletion;
    document.getElementById('work-prof-status').innerText = wrk.status;
    document.getElementById('work-prof-status').className = `status-pill ${wrk.status === 'Delayed' ? 'red' : 'green'}`;
    
    document.getElementById('work-prof-phys').innerText = wrk.physicalProgress;
    document.getElementById('work-prof-fin').innerText = wrk.financialProgress;

    // Milestones rendering
    document.getElementById('work-milestones-body').innerHTML = wrk.milestones.map(m => `
        <tr>
            <td>${m.title}</td>
            <td>${m.weight}</td>
            <td><span class="status-pill ${m.status === 'Completed' ? 'green' : 'amber'}">${m.status}</span></td>
            <td>${m.date}</td>
        </tr>
    `).join('');
}

// 14. Vendor Management Loader
function loadVendorManagement() {
    const tbody = document.getElementById('vendor-table-body');
    if (!tbody) return;

    tbody.innerHTML = MOCK_DATA.vendors.map(ven => `
        <tr>
            <td><strong>${ven.name}</strong></td>
            <td style="text-align:center; font-weight:bold;">${ven.activeWorks}</td>
            <td style="text-align:center; font-weight:bold;">${ven.completedWorks}</td>
            <td style="text-align:center; font-weight:bold; color:${ven.delayedWorks > 0 ? '#ff4d4d' : '#000'}">${ven.delayedWorks}</td>
            <td><span class="status-pill ${ven.status.includes('Watch') ? 'amber' : 'green'}">${ven.status}</span></td>
            <td style="text-align:center;">${ven.pendingSubmissions}</td>
            <td style="text-align:center; color:#ff4d4d;">${ven.rejectedSubmissions}</td>
            <td><strong>${ven.performance}</strong></td>
            <td>
                <button class="wireframe-btn" onclick="showVendorSubmissions('${ven.name}')">Submissions</button>
            </td>
        </tr>
    `).join('');
}

function showVendorSubmissions(vendorName) {
    alert(`Loading progress submission verification panel for ${vendorName}`);
    showScreen('screen-vendor-verification');
}

// 15. Vendor Progress Verification Loader
function loadVendorVerification(verId) {
    const ver = MOCK_DATA.vendorVerifications.find(v => v.id === verId) || MOCK_DATA.vendorVerifications[0];
    const work = MOCK_DATA.works.find(w => w.id === ver.workId) || MOCK_DATA.works[0];

    document.getElementById('ver-id').innerText = ver.id;
    document.getElementById('ver-work').innerText = ver.workTitle;
    document.getElementById('ver-vendor').innerText = ver.vendor;
    document.getElementById('ver-milestone').innerText = ver.milestone;
    document.getElementById('ver-activity').innerText = ver.activity;
    document.getElementById('ver-claimed').innerText = ver.claimedProgress;
    document.getElementById('ver-gps').innerText = ver.gps;
    document.getElementById('ver-measure').innerText = ver.measurements;
    document.getElementById('ver-remarks').innerText = ver.remarks;
    document.getElementById('ver-status').innerText = ver.status;

    // Verification Workflow status color
    document.querySelectorAll('#ver-workflow-bar .workflow-node').forEach(node => {
        node.classList.remove('active', 'done');
        if (node.innerText === ver.status) {
            node.classList.add('active');
        }
    });
}

function handleProgressVerification(action) {
    const remarks = document.getElementById('ver-review-remarks').value;
    const ver = MOCK_DATA.vendorVerifications.find(v => v.id === ACTIVE_VERIFY_ID);
    if (!ver) return;

    if (action === 'accept') {
        ver.status = "Accepted";
        alert("Vendor milestone completion successfully accepted and recorded in work profile.");
    } else if (action === 'reject') {
        ver.status = "Rejected";
        alert("Milestone progress submission rejected. Returned for correction.");
    }

    // Add log
    MOCK_DATA.auditLogs.unshift({
        who: CURRENT_ROLE,
        what: `${action === 'accept' ? 'Accepted' : 'Rejected'} vendor submission ${ACTIVE_VERIFY_ID}`,
        when: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
        status: ver.status,
        remarks: remarks || "Milestone verification check complete"
    });

    showScreen('screen-vendor-management');
}

// 16. Document Management Loader
function loadDocumentManagement() {
    const tbody = document.getElementById('document-table-body');
    if (!tbody) return;

    tbody.innerHTML = MOCK_DATA.documents.map(doc => `
        <tr>
            <td><strong>${doc.name}</strong></td>
            <td>${doc.dam}</td>
            <td>${doc.type}</td>
            <td>${doc.version}</td>
            <td>${doc.uploader}</td>
            <td>${doc.date}</td>
            <td><span class="status-pill ${doc.status === 'Approved' ? 'green' : 'amber'}">${doc.status}</span></td>
            <td>
                <button class="wireframe-btn" onclick="alert('Downloading ${doc.name}...')">Get</button>
            </td>
        </tr>
    `).join('');
}

// 17. Approval / Task Center Loader
function loadApprovalCenter() {
    const tbody = document.getElementById('approval-table-body');
    if (!tbody) return;

    tbody.innerHTML = MOCK_DATA.tasks.map(tsk => `
        <tr>
            <td><strong>${tsk.task}</strong></td>
            <td>${tsk.dam}</td>
            <td>${tsk.assignedTo}</td>
            <td><span class="status-pill ${tsk.priority === 'Critical' ? 'red' : 'amber'}">${tsk.priority}</span></td>
            <td>${tsk.dueDate}</td>
            <td><span class="status-pill grey">${tsk.status}</span></td>
            <td>
                <button class="wireframe-btn primary" onclick="handleTaskAction('${tsk.type}', '${tsk.id}')">Action</button>
            </td>
        </tr>
    `).join('');
}

function handleTaskAction(type, taskId) {
    if (type === 'Inspection') {
        drillToInspection('INSP-2025-002');
    } else if (type === 'Observation') {
        drillToObservation('OBS-2025-103');
    } else if (type === 'Vendor Submission') {
        drillToVerification('VER-2025-801');
    } else {
        alert(`Opening workspace for task: ${taskId}`);
    }
}

// 18. Alert Center Loader
function loadAlertCenter() {
    const tbody = document.getElementById('alert-table-body');
    if (!tbody) return;

    tbody.innerHTML = MOCK_DATA.alerts.map(alt => `
        <tr style="${alt.priority === 'Critical' ? 'background-color:#fff2f2;' : ''}">
            <td><span class="status-pill ${alt.priority === 'Critical' ? 'red' : alt.priority === 'High' ? 'amber' : 'grey'}">${alt.priority}</span></td>
            <td><strong>${alt.type}</strong></td>
            <td>${alt.text}</td>
            <td>${alt.date}</td>
            <td>
                <button class="wireframe-btn" onclick="alert('Alert details logged to central repository.')">Dismiss</button>
            </td>
        </tr>
    `).join('');
}

// 19. GIS Map Loader
function renderGISMap() {
    // We already have static markers on the map container
    // Clicking a marker triggers dynamic side panel populate
    console.log("GIS Map rendered.");
}

function selectMapMarker(damId) {
    const dam = MOCK_DATA.dams.find(d => d.id === damId);
    if (!dam) return;

    const panel = document.getElementById('map-popup-panel');
    if (panel) {
        panel.style.display = 'block';
        document.getElementById('map-popup-name').innerText = dam.name;
        document.getElementById('map-popup-id').innerText = dam.id;
        document.getElementById('map-popup-status').innerText = dam.status;
        document.getElementById('map-popup-status').className = `status-pill ${dam.status.toLowerCase()}`;
        document.getElementById('map-popup-inspection').innerText = dam.lastInspection;
        document.getElementById('map-popup-observations').innerText = dam.openObservations;
        document.getElementById('map-popup-works').innerText = dam.ongoingWorks;
    }
}

function closeMapPopup() {
    const panel = document.getElementById('map-popup-panel');
    if (panel) {
        panel.style.display = 'none';
    }
}

// 20. Reports / MIS Loader
function loadReportsMIS() {
    // Generate simple data preview for report criteria
}

function handleGenerateReport(e) {
    if (e) e.preventDefault();
    const type = document.getElementById('report-type-select').value;
    const range = document.getElementById('report-time-select').value;

    const tbody = document.getElementById('report-results-body');
    tbody.innerHTML = `
        <tr>
            <td colspan="4" style="text-align:center; font-weight:bold; background-color:#f9f9f9; padding:15px;">
                Generated report data for [${type}] with range [${range}]
            </td>
        </tr>
        <tr>
            <td>01 Jun 2025</td>
            <td>Deficiency Resolution audit</td>
            <td>System log aggregate</td>
            <td>Success</td>
        </tr>
        <tr>
            <td>15 Jun 2025</td>
            <td>Financial disbursement sheet</td>
            <td>Vendor invoice batch</td>
            <td>Disbursed</td>
        </tr>
    `;
}

// 21. Historical Record / Audit Loader
function loadHistoricalAudit() {
    const tbody = document.getElementById('audit-table-body');
    if (!tbody) return;

    tbody.innerHTML = MOCK_DATA.auditLogs.map(log => `
        <tr>
            <td>${log.when}</td>
            <td><strong>${log.who}</strong></td>
            <td>${log.what}</td>
            <td><span class="status-pill grey">${log.status}</span></td>
            <td>${log.remarks}</td>
        </tr>
    `).join('');
}

// 22. Master Data Loader
function loadMasterData() {
    const container = document.getElementById('master-data-list');
    if (!container) return;

    container.innerHTML = `
        <div class="col-4">
            <div style="border:2px solid #333; border-radius:4px; padding:10px;">
                <h4 style="border-bottom:2px solid #333; padding-bottom:5px; margin-bottom:8px;">Dams Master Data</h4>
                <ul style="list-style:none; font-size:12px;">
                    ${MOCK_DATA.dams.map(d => `<li><strong>${d.id}</strong>: ${d.name}</li>`).join('')}
                </ul>
            </div>
        </div>
        <div class="col-4">
            <div style="border:2px solid #333; border-radius:4px; padding:10px;">
                <h4 style="border-bottom:2px solid #333; padding-bottom:5px; margin-bottom:8px;">Districts & Basins</h4>
                <ul style="list-style:none; font-size:12px;">
                    <li>Mahanadi Basin</li>
                    <li>Brahmani Basin</li>
                    <li>Indravati Basin</li>
                    <li style="margin-top:6px; border-top:1px dashed #ccc; padding-top:4px;">Sambalpur District</li>
                    <li>Angul District</li>
                    <li>Kalahandi District</li>
                </ul>
            </div>
        </div>
        <div class="col-4">
            <div style="border:2px solid #333; border-radius:4px; padding:10px;">
                <h4 style="border-bottom:2px solid #333; padding-bottom:5px; margin-bottom:8px;">Severity Standards</h4>
                <ul style="list-style:none; font-size:12px;">
                    <li><span class="status-pill red">Critical</span> - Immediate 24h action required</li>
                    <li><span class="status-pill amber">High</span> - Action plan in 7 days</li>
                    <li><span class="status-pill grey">Medium</span> - Periodic corrective action</li>
                    <li><span class="status-pill grey">Low</span> - Standard maintenance</li>
                </ul>
            </div>
        </div>
    `;
}

// 23. User / Role Management Loader
function loadUserRoleManagement() {
    const tbody = document.getElementById('user-table-body');
    if (!tbody) return;

    const mockUsers = [
        { name: "Dr. S. Mohapatra", role: "Chief Engineer", dept: "Dam Safety Wing", jurisdiction: "State-wide", status: "Active" },
        { name: "S. K. Patnaik", role: "Executive Engineer", dept: "Sambalpur Division", jurisdiction: "Northern Circle", status: "Active" },
        { name: "B. Pujari", role: "Assistant Executive Engineer", dept: "Sambalpur Division", jurisdiction: "Hirakud Area", status: "Active" },
        { name: "G. C. Biswal", role: "Junior Engineer", dept: "Koraput Division", jurisdiction: "Balimela Area", status: "Active" },
        { name: "M/s Utkal Infrastructure", role: "Vendor/Contractor", dept: "External Agency", jurisdiction: "Contract-specific", status: "Active" }
    ];

    tbody.innerHTML = mockUsers.map(user => `
        <tr>
            <td><strong>${user.name}</strong></td>
            <td>${user.role}</td>
            <td>${user.dept}</td>
            <td>${user.jurisdiction}</td>
            <td><span class="status-pill green">${user.status}</span></td>
            <td>
                <button class="wireframe-btn" onclick="alert('Configuring jurisdiction for ${user.name}')">Modify</button>
            </td>
        </tr>
    `).join('');
}

// Bootstrapping
window.addEventListener('DOMContentLoaded', () => {
    // Show dashboard by default (or login)
    showScreen('screen-login');
});
