# Sentinel AI

### AI-Powered Campus Threat Intelligence and Response Platform

Sentinel AI is a prototype designed to detect, verify, connect, and prioritize physical and digital threat signals within a campus environment.

The core idea is simple:

> **Threats are fragmented. Information exists, but intelligence is missing.**

Instead of treating every report as an isolated event, Sentinel AI aims to identify relationships between seemingly separate signals and turn them into actionable incident intelligence.

---

## Core Workflow

**DETECT → VERIFY → CONNECT → RESPOND**

### Detect
Collects threat signals from different sources such as:

- Text reports
- Images
- URLs
- QR codes
- Voice reports
- Location information

### Verify
Evaluates available evidence, context, and credibility of the reported information.

### Connect
Identifies relationships between seemingly separate reports based on factors such as location, content, and incident context.

### Respond
Prioritizes the potential threat and provides a recommended response for human review.

---

## Problem

Campus threats can appear in different forms and through different reporting channels.

### Physical Threats

- Fire or electrical hazards
- Medical emergencies
- Accidents
- Suspicious activity

### Digital Threats

- Phishing
- Scam messages
- Fake notices
- Impersonation
- Fraudulent internship offers

A major challenge is that related reports may be treated as separate events.

For example:

- A student reports a burning smell near Block B.
- Another reports a power outage in Block B.
- Another report contains an image showing smoke.

Individually, these may appear to be unrelated reports.

Together, they may indicate a **possible electrical incident**.

---

## Prototype

The current version is a **frontend prototype** demonstrating the intended Sentinel AI workflow.

### Prototype Screens

1. **Report Incident**
   - Submit a threat report
   - Select threat type
   - Provide location and severity
   - Add evidence options

2. **AI Analysis**
   - Demonstrates the Detect → Verify → Connect → Respond pipeline
   - Displays risk level and confidence
   - Shows related reports
   - Provides a recommended response

3. **Incident Dashboard**
   - Displays identified incidents
   - Shows risk levels and statuses
   - Highlights newly identified incidents

4. **Incident Details**
   - Displays evidence
   - Related reports
   - Analysis
   - Recommended response
   - Incident status

---

## Demo Scenario

The current prototype demonstrates a predefined electrical incident scenario.

Example signals:

- Burning smell near Block B
- Power outage near Block B
- Smoke observed near an electrical area

Sentinel AI connects these signals into:

**Possible Electrical Incident**

**Risk:** CRITICAL  
**Confidence:** 91%

The prototype then recommends notifying campus security and maintenance and restricting access until the situation is physically verified.

---

## Technology Stack

- **Frontend:** React
- **Build Tool:** Vite
- **Language:** JavaScript
- **Styling:** CSS
- **Current Data:** Local simulated demo data

---

## Current Prototype Status

This repository currently contains a **frontend demonstration**.

The analysis shown in the prototype is simulated using predefined demo data.

> **No real AI model is currently connected.**

The prototype is designed so that the simulated analysis can later be replaced with a real AI analysis service and backend incident-correlation system.

---

## Future Development

Planned areas for future implementation include:

- Real AI-powered threat analysis
- Multimodal image and text analysis
- URL and QR-code analysis
- Voice report transcription
- Backend API and database
- Real incident correlation
- Location and time-based relationship detection
- Notifications for relevant campus teams
- Authentication and access control
- Real-time incident monitoring

---

## Responsible Use

Sentinel AI is intended as a **decision-support system, not autonomous policing**.

AI-generated risk assessments and recommendations should be reviewed and verified by authorized human personnel before action is taken.

---

## Running Locally

Clone or download this repository and install the dependencies:

```bash
npm install
