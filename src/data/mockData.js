// ---------------------------------------------------------------
// ALL DEMO DATA LIVES IN THIS FILE.
// Nothing here comes from a real AI model or a real backend.
// Later, replace these exports with results from an API.
// ---------------------------------------------------------------

// ---------- Report form options ----------

export const threatTypes = [
  { id: 'physical', label: 'Physical Incident' },
  { id: 'digital', label: 'Digital Threat' },
  { id: 'suspicious', label: 'Suspicious Activity' },
  { id: 'other', label: 'Other' },
]

export const severityLevels = [
  { id: 'low', label: 'Low' },
  { id: 'medium', label: 'Medium' },
  { id: 'high', label: 'High' },
  { id: 'critical', label: 'Critical' },
]

export const evidenceOptions = [
  { id: 'image', label: 'Upload Image' },
  { id: 'url', label: 'Enter URL' },
  { id: 'qr', label: 'Upload / Scan QR' },
  { id: 'voice', label: 'Voice Report' },
]

// Used by the "Fill demo report" button on the report form.
export const demoReport = {
  threatType: 'physical',
  description: 'Burning smell near Block B',
  evidenceType: 'image',
  location: 'Block B',
  severity: 'high',
}

// ---------- DETECT -> VERIFY -> CONNECT -> RESPOND ----------

export const pipelineSteps = [
  {
    id: 'detect',
    label: 'Detect',
    description: 'Read the incoming report and pick out the key signals.',
  },
  {
    id: 'verify',
    label: 'Verify',
    description: 'Check the available evidence, context and credibility.',
  },
  {
    id: 'connect',
    label: 'Connect',
    description: 'Find other reports that may belong to the same incident.',
  },
  {
    id: 'respond',
    label: 'Respond',
    description: 'Assign a risk level and recommend an action.',
  },
]

// ---------- Simulated analysis result (Screen 2) ----------

export const analysisResult = {
  incidentId: '01', // links to the incident in the list below
  threat: 'Possible Electrical Incident',
  risk: 'CRITICAL',
  confidence: 91,
  evidence: [
    'Burning smell reported near Block B',
    'Power outage reported in Block B',
    'Smoke image associated with the location',
  ],
  relatedReports: [
    'Power outage near Block B',
    'Smoke observed near electrical room',
    'Burning smell reported by another student',
  ],
  recommendedActions: [
    'Notify campus security and maintenance.',
    'Restrict access to the affected area until verified.',
  ],
  // Short result shown under each step once it finishes.
  stepResults: {
    detect: 'Signal extracted: burning smell, Block B',
    verify: '3 pieces of supporting evidence found',
    connect: '3 related reports detected',
    respond: 'Risk assessed and action recommended',
  },
}

// ---------- Incidents (Screen 3) ----------

export const incidents = [
  {
    id: '01',
    title: 'Possible Electrical Incident',
    location: 'Block B',
    category: 'Physical',
    risk: 'CRITICAL',
    relatedReports: 3,
    status: 'Under Review',
    confidence: 91,
    evidence: [
      'Burning smell near Block B',
      'Power outage',
      'Smoke image',
    ],
    relatedReportTexts: [
      'Power outage near Block B',
      'Smoke observed near electrical room',
      'Burning smell reported by another student',
    ],
    analysis:
      'The available signals indicate that multiple reports may be associated with the same physical incident.',
    recommendedResponse: [
      'Notify campus security.',
      'Notify maintenance.',
      'Restrict access to the affected area.',
      'Verify the incident physically.',
    ],
  },
  {
    id: '02',
    title: 'Possible Recruitment Scam',
    location: 'Online',
    category: 'Digital',
    risk: 'HIGH',
    relatedReports: 8,
    status: 'Investigating',
    confidence: 84,
    evidence: [
      'Internship offer shared in several student group chats',
      'Registration fee requested through a personal payment account',
      'Linked website is not associated with any listed company',
    ],
    analysis:
      'Several reports describe the same offer and payment request, which may indicate a single coordinated scam targeting students.',
    recommendedResponse: [
      'Warn students through official campus channels.',
      'Ask the placement office to confirm the offer is not genuine.',
      'Report the website and payment account to the relevant providers.',
      'Collect further reports from affected students.',
    ],
  },
  {
    id: '03',
    title: 'Suspicious Activity',
    location: 'Block C',
    category: 'Physical',
    risk: 'MEDIUM',
    relatedReports: 2,
    status: 'Under Review',
    confidence: 68,
    evidence: [
      'Unfamiliar person reported near a Block C side entrance',
      'Second report describes a similar person checking doors',
    ],
    analysis:
      'Two separate reports mention similar behaviour in the same area. The evidence is limited, so this needs further verification.',
    recommendedResponse: [
      'Ask campus security to patrol Block C.',
      'Review available camera footage for the area.',
      'Follow up with the students who submitted the reports.',
      'Keep the incident under review.',
    ],
  },
  {
    id: '04',
    title: 'Phishing Campaign',
    location: 'Student Portal',
    category: 'Digital',
    risk: 'HIGH',
    relatedReports: 6,
    status: 'Contained',
    confidence: 88,
    evidence: [
      'Emails imitating the student portal login page',
      'Link leads to a look-alike login page',
      'Six separate students reported the same message',
    ],
    analysis:
      'The reports describe the same message and link, which suggests one phishing campaign aimed at portal credentials.',
    recommendedResponse: [
      'Block the malicious link.',
      'Notify the IT department.',
      'Advise affected students to reset their passwords.',
      'Monitor for new reports of the same message.',
    ],
  },
]
