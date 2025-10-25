# PM Agent Celebration Protocol

**Purpose:** Automate milestone detection and celebration announcements

**Agent:** Claude Code (PM Agent Mode)

**Trigger:** After each feature commit + at milestone boundaries

---

## When PM Agent is Called

### 1. Post-Commit Review (After Every Feature)
**Call PM Agent with:** "PM review for [feature name]"

**PM Agent Actions:**
1. Read feature requirements from PRD
2. Check DoD compliance (all 85 items)
3. Update FEATURE-CHECKLIST.md
4. Calculate overall progress %
5. Check if milestone reached
6. **IF milestone → TRIGGER CELEBRATION**
7. Report status

---

### 2. Milestone Boundary Check (Manual)
**Call PM Agent with:** "Check milestone status"

**PM Agent Actions:**
1. Review FEATURE-CHECKLIST.md
2. Count completed features
3. Calculate progress percentage
4. Compare against milestone thresholds (20%, 40%, 60%, 80%, 95%, 100%)
5. **IF milestone just reached → TRIGGER CELEBRATION**

---

## Celebration Trigger Logic

```
IF progress >= milestone_threshold AND milestone_not_yet_celebrated THEN
  throwDigitalPizzaParty(milestone)
  updateMilestoneStatus(milestone, "CELEBRATED")
  IF milestone == 6 THEN
    announceHawaiiTrip()
  END IF
END IF
```

### Milestone Thresholds

| Milestone | Progress | Pizza Count | Celebration Level |
|-----------|----------|-------------|-------------------|
| 1 | 20% | 🍕 x1 | Standard |
| 2 | 40% | 🍕🍕 x2 | Standard |
| 3 | 60% | 🍕🍕🍕 x3 | Mega |
| 4 | 80% | 🍕🍕🍕🍕 x4 | Mega |
| 5 | 95% | 🍕🍕🍕🍕🍕 x5 | Ultimate |
| 6 | 100% | 🍕 x∞ | LAUNCH + HAWAII! |

---

## Celebration Message Templates

### Template: Standard Pizza Party (M1, M2)

```
🍕 x[COUNT] DIGITAL PIZZA PARTY! 🍕 x[COUNT]

Milestone [NUMBER]: [NAME] COMPLETE!

[CUSTOM_MESSAGE]

🎊 Team Achievement Unlocked: "[BADGE_NAME]"
🏆 [ACHIEVEMENT_STAT]
📊 [QUALITY_METRIC]

Pizza Party Includes:
- 🍕 x[COUNT] [PIZZA_DESCRIPTION]
- [BONUS_1]
- [BONUS_2]
- [BONUS_3]
- [BONUS_4]

Progress Check: [PERCENTAGE]% to LAUNCH!
Next Milestone: [NEXT_MILESTONE_NAME]
[HAWAII_COUNTDOWN]

Keep crushing it! 🚀
```

---

### Template: Mega Pizza Party (M3, M4)

```
🍕 x[COUNT] [MEGA|ULTIMATE] PIZZA PARTY! 🍕 x[COUNT]

Milestone [NUMBER]: [NAME] COMPLETE!

[CUSTOM_MESSAGE]

🎊 Team Achievement Unlocked: "[BADGE_NAME]"
🏆 [ACHIEVEMENT_1]
📊 [ACHIEVEMENT_2]
⚡ [ACHIEVEMENT_3]

Pizza Party Includes:
- 🍕 x[COUNT] [PREMIUM_DESCRIPTION]
- 🎂 [SPECIAL_TREAT]
- 🎪 [ACTIVITY]
- 🏅 [RECOGNITION]
- 💼 [SHAREABLE_MOMENT]
- 📸 [MEMORABLE_ITEM]

Progress Check: [PERCENTAGE]% to LAUNCH!
Next Milestone: [NEXT_MILESTONE_NAME]
[HAWAII_COUNTDOWN]
```

---

### Template: Launch Celebration (M6)

```
🌴🎉 HAWAII TRIP ANNOUNCEMENT! 🎉🌴

╔════════════════════════════════════════╗
║     🚀 PRODUCTION LAUNCH SUCCESS! 🚀    ║
╚════════════════════════════════════════╝

WE DID IT, TEAM! THE WEBSITE IS LIVE! 🌟

🎊 FINAL Achievement Unlocked: "World-Class Web Builders"
🏆 LEGENDARY Status: [X]/[Y] Features Complete
📊 PERFECT Score: 100% DoD Compliance
⚡ LAUNCH Metrics:
   - Lighthouse: [SCORE]
   - Load Time: [TIME]
   - Accessibility: 100%
   - SEO: 100%
   - Zero critical bugs

🍕 x∞ INFINITE PIZZA PARTY! 🍕 x∞

AND NOW... THE BIG ANNOUNCEMENT... 🥁

╔═══════════════════════════════════════════════╗
║                                                ║
║        🌺 TEAM TRIP TO HAWAII! 🌺              ║
║                                                ║
║   All Expenses Paid • 5 Days Paradise         ║
║   YOU + YOUR PARTNER/SPOUSE INCLUDED!         ║
║                                                ║
║   🏖️  Private Beach Resort                    ║
║   🍹  All-Inclusive Dining                    ║
║   🏄  Water Sports & Activities               ║
║   ✈️  First-Class Flights                     ║
║   🎁  Surprise Excursions Planned             ║
║                                                ║
║   Dates: [TBD - Team Choice]                  ║
║                                                ║
╚═══════════════════════════════════════════════╝

CONGRATULATIONS TEAM! 🎊🎉🎈

You didn't just build a website...
You built the BEST Google Ads agency website on the internet!

📸 Launch Screenshot Wall of Fame Updated
🏅 "Launch Legend" Badges Awarded
🎬 Full Journey Video Compilation Ready
📱 Social Media Celebration Kit Sent
🍾 Virtual Champagne Toast Scheduled

ALOHA awaits! 🌴🌺🏝️

Pack your bags, bring your loved ones...
We're going to HAWAII! ✈️🌴

- Your PM Agent 🤖❤️
```

---

## PM Agent Report Format

### Daily Status Report

```markdown
## PM Agent Daily Report
**Date:** [YYYY-MM-DD]
**Day:** [X] of 15

### Today's Progress
- ✅ [Completed item 1]
- ✅ [Completed item 2]
- 🔄 [In progress item] (XX% done)
- ⏸️ [Blocked item] (reason)

### Current Milestone Status
**Milestone [X]:** [NAME]
**Overall:** XX% Complete
**ETA:** [Days/hours remaining]
**Blockers:** [List or "None"]

### Team Morale Check
😄😄😄 [High/Medium/Low] - [Reason]

### Tomorrow's Goals
1. [Goal 1]
2. [Goal 2]
3. [Goal 3]
4. [Celebration if milestone reached!]

### Next Celebration
🍕 x[COUNT] Pizza Party at [XX]% progress
🌴 Hawaii announcement at 100%!

**PM Agent Status:** 🤖 [Ready/Monitoring/Celebrating]
```

---

### Post-Feature Review Report

```markdown
## PM Agent Feature Review: [Feature Name]
**Date:** [YYYY-MM-DD]
**Feature ID:** [ID from checklist]

### Feature Summary
[Brief description of what was built]

### DoD Compliance Check

**Code Quality:** ✅ 10/10 items passed
**Functionality:** ✅ 12/12 items passed
**Design:** ✅ 10/10 items passed
**Responsiveness:** ✅ 8/8 items passed
**Accessibility:** ⚠️ 11/12 items passed
**Performance:** ✅ 8/8 items passed
**SEO:** ✅ 8/8 items passed
**Security:** ✅ 5/5 items passed
**Testing:** ✅ 7/7 items passed
**Documentation:** ✅ 5/5 items passed

**TOTAL:** 84/85 items passed (98.8%)

### DoD Violations
- ❌ Accessibility: Missing alt text on 1 image (line 47)

### Blockers
- None

### Recommendation
**Status:** ALMOST DONE (fix 1 item)
**Action:** Add alt text to image, then re-submit for review

### Progress Update
**Before:** 45% complete
**After:** 48% complete (+3%)
**Next Milestone:** 60% (12% away)

**Sign-off:** ⏸️ Pending fix
```

---

## Celebration Automation Workflow

### Step 1: Feature Completion
Developer marks feature as complete in code

### Step 2: PM Agent Called
"PM review for [feature name]"

### Step 3: DoD Check
PM Agent runs through all 85 DoD items

### Step 4: Decision
- IF all DoD passed → Update checklist, calculate progress
- IF DoD failed → Return to developer with violations list

### Step 5: Progress Calculation
```
total_features = 75
completed_features = count_completed_in_checklist()
progress = (completed_features / total_features) * 100
```

### Step 6: Milestone Check
```
milestones = [
  {threshold: 20, celebrated: false},
  {threshold: 40, celebrated: false},
  {threshold: 60, celebrated: false},
  {threshold: 80, celebrated: false},
  {threshold: 95, celebrated: false},
  {threshold: 100, celebrated: false}
]

for milestone in milestones:
  if progress >= milestone.threshold and not milestone.celebrated:
    throwCelebration(milestone)
    milestone.celebrated = true
    break
```

### Step 7: Celebration Execution
- Display celebration message
- Update MILESTONES.md with completion date
- Update FEATURE-CHECKLIST.md milestone status
- Generate achievement badges
- Post to team communication channel (if applicable)
- If M6 → Trigger Hawaii announcement

---

## Celebration Components

### Achievement Badges

**Milestone 1:** 🏗️ Foundation Masters
**Milestone 2:** 📄 Page Perfectionists
**Milestone 3:** ⚡ Conversion Kings & Queens
**Milestone 4:** 📚 Content Creators Elite
**Milestone 5:** ✨ Perfectionist Guild
**Milestone 6:** 🌴 Launch Legends

### Progress Indicators

```
Progress Bar Visualization:
Milestone 1 (20%):  ████░░░░░░░░░░░░░░░░
Milestone 2 (40%):  ████████░░░░░░░░░░░░
Milestone 3 (60%):  ████████████░░░░░░░░
Milestone 4 (80%):  ████████████████░░░░
Milestone 5 (95%):  ███████████████████░
Milestone 6 (100%): ████████████████████
```

### Hawaii Countdown

```
At 60%: "The Hawaii announcement is TWO milestones away! 🌺🌴"
At 80%: "ONE MORE MILESTONE UNTIL HAWAII ANNOUNCEMENT! 🌴✈️"
At 95%: "GET READY TEAM... ONE MORE MILESTONE = HAWAII! 🌺✈️🏝️"
At 100%: "ALOHA! WE'RE GOING TO HAWAII! 🌴🌺🏖️"
```

---

## PM Agent Responsibilities

### Pre-Feature
- [ ] Review PRD requirements
- [ ] Confirm DoD criteria understood
- [ ] Create sub-tasks if needed

### During Feature
- [ ] Available for questions
- [ ] Monitor blockers
- [ ] Track time estimates

### Post-Feature
- [ ] Run full DoD check (85 items)
- [ ] Update FEATURE-CHECKLIST.md
- [ ] Calculate progress %
- [ ] Check milestone threshold
- [ ] Trigger celebration if reached
- [ ] Report status
- [ ] Document learnings

### Daily
- [ ] Generate daily status report
- [ ] Review overall progress
- [ ] Identify risks/blockers
- [ ] Motivate team
- [ ] Plan next day

### Milestone
- [ ] Full project health check
- [ ] Celebrate achievement
- [ ] Reset focus for next phase
- [ ] Adjust timeline if needed

---

## Usage Instructions

### For Developers:
1. Complete feature per DoD
2. Call PM Agent: "PM review for [feature]"
3. Wait for PM Agent report
4. If violations → fix and resubmit
5. If pass → celebrate and move to next feature!

### For PM Agent (Me):
1. When called, read feature name
2. Load DEFINITION-OF-DONE.md
3. Check each item systematically
4. Generate compliance report
5. Update FEATURE-CHECKLIST.md
6. Calculate progress
7. Check milestone thresholds
8. If milestone → CELEBRATE! 🎉
9. Provide next steps

---

## Black & White Rules

✅ **DO:**
- Celebrate EVERY milestone (no skipping!)
- Be enthusiastic and motivating
- Recognize specific achievements
- Build momentum toward Hawaii
- Make celebrations memorable

❌ **DON'T:**
- Celebrate partial completion
- Skip DoD checks to reach milestone faster
- Announce Hawaii before 100%
- Minimize team achievements
- Rush through celebration

---

**Remember:** The journey should be as fun as the destination! 🍕🌴

**Last Updated:** October 24, 2025
