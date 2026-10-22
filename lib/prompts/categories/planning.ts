import type { PromptSchema } from "../types";

export const planningPrompts: PromptSchema[] = [
  {
    "displayTitle": "Daily Plan Builder",
    "displayDescription": "Turns your priorities and fixed commitments into a realistic, energy-aware daily timeline with buffers, a surprise slot, and an evening shutdown ritual.",
    "id": "planning-001",
    "prompt": "Act as a practical productivity coach and build a realistic daily plan for {day} that I can actually follow.\n\nCONTEXT: This plan is for one person — me — juggling real work and life. My fixed commitments are {commitments}. My top priorities are {priorities}. My energy peaks at {energy}, and my available working hours today are {workdayWindow}. A successful day for me looks like this: {successLooksLike}. Do not invent extra tasks; work only with what I gave you, and be honest if my priorities exceed what fits — say so and suggest what to defer.\n\nHOW TO BUILD THE PLAN:\n1. Block in the fixed commitments first at their exact times; these are immovable.\n2. Classify each priority as deep work (needs focus), shallow work (routine), or admin, and place deep work inside my energy peak window ({energy}). Never schedule two deep-work blocks back to back without a real break.\n3. Insert 10-minute buffers after every deep-work block for transitions, notes, and breathing room.\n4. Leave exactly one open slot of at least 30 minutes for surprises — label it clearly.\n5. If priorities cannot fit inside {workdayWindow}, cut or defer the lowest-impact one and say which one and why, referencing {successLooksLike} as the tiebreaker.\n6. End the day with a 15-minute evening shutdown ritual: review what got done, capture open loops, and set tomorrow's top 3.\n\nOUTPUT STRUCTURE: A timed timeline table (start time, end time, block name, duration, one-line intent for each block), followed by a short \"Top 3 non-negotiables\" list, then one \"if-things-slip\" rule naming the single block to protect at all costs. Keep the timeline realistic — no stacked meetings without breaks, no 12-hour fantasy days. A high-quality result is one I could print, follow hour by hour, and end the day feeling it matched {successLooksLike}.",
    "description": "Generates a timed daily schedule that orders tasks around energy levels, protects buffer time, and ends with a shutdown ritual.",
    "category": "planning",
    "variables": {
      "day": {
        "label": "Day",
        "question": "Which day is this plan for?",
        "type": "date",
        "required": true
      },
      "commitments": {
        "label": "Fixed Commitments",
        "question": "What fixed appointments or commitments do you have?",
        "type": "textarea",
        "placeholder": "e.g., 9-10am standup, 12:30 dentist, 3pm school pickup",
        "required": true
      },
      "priorities": {
        "label": "Top Priorities",
        "question": "What are your top priorities for the day?",
        "type": "textarea",
        "placeholder": "e.g., Finish report draft, call accountant, gym",
        "required": true
      },
      "energy": {
        "label": "Energy Pattern",
        "question": "When is your energy highest?",
        "type": "select",
        "options": [
          "Morning peak",
          "Midday peak",
          "Evening peak",
          "Unpredictable"
        ],
        "required": true
      },
      "workdayWindow": {
        "label": "Working Hours",
        "question": "What hours are actually available for work today?",
        "type": "text",
        "placeholder": "e.g., 8am to 5pm",
        "required": true
      },
      "successLooksLike": {
        "label": "Successful Day",
        "question": "What would make today feel like a success?",
        "type": "textarea",
        "placeholder": "e.g., Report draft submitted and I exercised",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Morning Routine Designer",
    "displayDescription": "Designs a morning routine you will actually stick to, sequenced with durations, triggers, a rushed-day fallback, and a the-night-before setup.",
    "id": "planning-002",
    "prompt": "Act as a habit-design coach and create a morning routine for me that I will genuinely stick to — not an aspirational one I abandon by Thursday.\n\nCONTEXT: I wake at {wakeTime} and must be ready or out the door by {startTime}. The routine must fit inside {minutes} minutes total. My goals for the routine: {goals}. What usually derails my mornings: {drainers}. I already have one reliable habit I can attach new ones to: {anchorHabit}.\n\nDESIGN PRINCIPLES: A routine people keep is short, friction-free, and anchored to existing behavior. Every step must earn its minutes. Start the routine the night before — a good morning is designed the evening prior. Assume some mornings will be rushed, so the routine must degrade gracefully instead of collapsing entirely.\n\nWHAT TO DELIVER:\n1. A the-night-before setup checklist (3-5 items, under 10 minutes) that removes morning decisions — clothes, bag, breakfast, phone placement.\n2. A numbered morning timeline from {wakeTime} to {startTime}: each step with a duration in minutes, a specific trigger (\"after {anchorHabit}, do X\"), and one sentence on why it is placed in that order. Order steps by energy logic: hydrating and movement before screens, calm before chaos.\n3. A friction audit: for each of my drainers ({drainers}), name the exact fix built into this routine.\n4. A rushed-morning protocol: the 3 steps to keep when I am running 20 minutes late, and exactly what to drop first, second, and third.\n5. A weekly adherence check: one question to ask each Sunday and one rule for when to change the routine versus when to recommit to it.\n\nKeep the total at or under {minutes} minutes and sequence habits so each one triggers the next. A high-quality result feels doable on my worst morning, not just my best one.",
    "description": "Creates a sequenced, time-boxed morning routine with triggers, a night-before setup, and a rushed-day fallback.",
    "category": "planning",
    "variables": {
      "wakeTime": {
        "label": "Wake Time",
        "question": "What time do you wake up?",
        "type": "text",
        "placeholder": "e.g., 6:30 AM",
        "required": true
      },
      "startTime": {
        "label": "Ready By",
        "question": "What time must you be ready or out the door?",
        "type": "text",
        "placeholder": "e.g., 8:00 AM",
        "required": true
      },
      "goals": {
        "label": "Routine Goals",
        "question": "What should the routine help you achieve?",
        "type": "textarea",
        "placeholder": "e.g., Exercise, meditation, calm start, no phone",
        "required": true
      },
      "minutes": {
        "label": "Max Minutes",
        "question": "Maximum total minutes for the routine?",
        "type": "number",
        "placeholder": "e.g., 60",
        "required": true
      },
      "drainers": {
        "label": "Morning Derailers",
        "question": "What usually derails your mornings?",
        "type": "textarea",
        "placeholder": "e.g., Hitting snooze, scrolling in bed, can't find keys",
        "required": true
      },
      "anchorHabit": {
        "label": "Anchor Habit",
        "question": "What existing morning habit can new ones attach to?",
        "type": "text",
        "placeholder": "e.g., Brushing my teeth",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Evening Routine Designer",
    "displayDescription": "Builds a calming wind-down routine ending at your chosen bedtime, with obstacle-specific fixes, a screens cutoff, and a brain dump for tomorrow.",
    "id": "planning-003",
    "prompt": "Act as a sleep-hygiene coach and design an evening wind-down routine that actually gets me to lights out at {bedtime}.\n\nCONTEXT: My wind-down window is {windDownMinutes} minutes. The routine's purpose is {goal}. The specific obstacles that keep me from resting: {obstacles}. I need to wake up at {wakeUp}, and right now I usually fall asleep around {currentBedtime} — if that differs from {bedtime} by more than 45 minutes, the routine must include a gradual 1-week ramp (shifting bedtime by 15 minutes every two nights) rather than demanding an overnight change.\n\nDESIGN PRINCIPLES: Wind-down works when stimulation steps down in stages — active to calm, bright to dim, connected to disconnected. Willpower fails at night, so the routine must remove temptations from the environment rather than relying on discipline. Tomorrow's worries are the enemy of sleep, so the routine must park them somewhere trustworthy.\n\nWHAT TO DELIVER:\n1. A timed sequence from the start of wind-down to lights out at {bedtime}, ordered from most active to most calm, with a duration for each activity. Every activity must serve {goal}.\n2. A hard no-screens cutoff time and exactly what replaces the phone (a specific alternative, not just \"read a book\" — name what kind of material).\n3. A 2-minute brain dump template with three prompts (tomorrow's top 3, anything I'm looping on, anything I need to remember) so the mind can release the day.\n4. An obstacle-specific fix for each item in {obstacles} — do not give generic advice; tailor the fix to the obstacle.\n5. A sleepless-night protocol: what to do if I am still awake after 20 minutes (get up, dim light, boring activity, no clock-watching), framed without anxiety.\n6. A one-week adherence check: the two signs the routine is working and when to adjust the bedtime target.\n\nA high-quality result accounts for my real sleep debt, respects the gap between {currentBedtime} and {bedtime}, and gives me a routine I can start tonight.",
    "description": "Produces a sequenced evening wind-down routine that removes obstacles to restful sleep, with a gradual bedtime ramp.",
    "category": "planning",
    "variables": {
      "bedtime": {
        "label": "Bedtime",
        "question": "What is your target lights-out time?",
        "type": "text",
        "placeholder": "e.g., 10:30 PM",
        "required": true
      },
      "windDownMinutes": {
        "label": "Wind-Down Minutes",
        "question": "How many minutes of wind-down do you want?",
        "type": "number",
        "placeholder": "e.g., 45",
        "required": true
      },
      "goal": {
        "label": "Evening Goal",
        "question": "What should the evening routine achieve?",
        "type": "select",
        "options": [
          "Better sleep",
          "Calmer evenings",
          "Reflect and reset"
        ],
        "required": true
      },
      "obstacles": {
        "label": "Obstacles",
        "question": "What currently keeps you from resting well?",
        "type": "textarea",
        "placeholder": "e.g., Late-night scrolling, racing thoughts, noisy house",
        "required": true
      },
      "wakeUp": {
        "label": "Wake-Up Time",
        "question": "What time do you need to wake up?",
        "type": "text",
        "placeholder": "e.g., 6:00 AM",
        "required": true
      },
      "currentBedtime": {
        "label": "Current Sleep Time",
        "question": "What time do you usually actually fall asleep now?",
        "type": "text",
        "placeholder": "e.g., 11:45 PM",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Weekly Review Ritual",
    "displayDescription": "Creates a repeatable weekly review checklist with time boxes, root-cause questions, and a look-ahead that sets up next week.",
    "id": "planning-004",
    "prompt": "Act as a personal operating-system coach and design a weekly review ritual tailored to my life as a {role}.\n\nCONTEXT: I will run this review every {reviewDay} and it must fit in {duration} minutes — no more. The life areas it must cover: {areas}. My longer-term goals for context: {longTermGoals}. I will keep my review notes in {tool}, so format the output to work well there (headings, checkboxes, short prompts).\n\nDESIGN PRINCIPLES: A review people repeat is short, honest, and forward-looking. Looking back should take less than half the time; the majority goes to deciding what next week looks like. Vague reflection (\"how was my week?\") produces vague answers, so every section needs specific questions. The review must end with decisions, not just observations.\n\nTHE RITUAL (time-box each section to total {duration} minutes):\n1. Wins scan: the 3 things that moved forward this week and why they worked — build on what works.\n2. Misses and slips: what slipped, with a one-line honest reason each. Separate \"I chose not to\" from \"I failed to plan for it\" — they need different fixes.\n3. Energy and mood check: one line on what drained me and one on what restored me, tied to {areas}.\n4. Calendar look-ahead: scan next week's calendar and flag the 2 busiest days plus any conflicts with my goals.\n5. Top 3 priorities for next week: chosen by impact, not urgency, and checked against {longTermGoals}.\n6. One thing to stop doing: name it explicitly, with what replaces it or what freed time goes to.\n7. Carry-forward: one open loop from this week that must not be forgotten, with its next action dated.\n\nOUTPUT: A repeatable checklist I can run in {tool} every {reviewDay}, with the time boxes shown, the exact questions to ask, and a completed example using a generic {role} week so I can see what \"done\" looks like. End with the one rule that keeps the review under {duration} minutes when I am tempted to skip it.",
    "description": "Generates a structured weekly review process covering wins, misses, energy, and next-week priorities with time boxes.",
    "category": "planning",
    "variables": {
      "role": {
        "label": "Role",
        "question": "What role is this review for?",
        "type": "text",
        "placeholder": "e.g., Student, freelancer, new parent",
        "required": true
      },
      "reviewDay": {
        "label": "Review Day",
        "question": "Which day should the review happen?",
        "type": "select",
        "options": [
          "Sunday",
          "Monday",
          "Friday",
          "Saturday"
        ],
        "required": true
      },
      "duration": {
        "label": "Duration",
        "question": "How many minutes should the review take?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      },
      "areas": {
        "label": "Life Areas",
        "question": "Which areas of life should the review cover?",
        "type": "textarea",
        "placeholder": "e.g., Work, health, finances, relationships",
        "required": true
      },
      "longTermGoals": {
        "label": "Long-Term Goals",
        "question": "What longer-term goals should the review check against?",
        "type": "textarea",
        "placeholder": "e.g., Get promoted, run a marathon, save $10k",
        "required": true
      },
      "tool": {
        "label": "Review Tool",
        "question": "Where will you keep your review notes?",
        "type": "select",
        "options": [
          "Notebook",
          "Notes app",
          "Task app",
          "Spreadsheet"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Weekly Plan Builder",
    "displayDescription": "Assigns your weekly goals to specific days around fixed events and life constraints, with a theme, a hardest-day backup, and a Friday review checkpoint.",
    "id": "planning-005",
    "prompt": "Act as a week-planning coach and build my plan for the week of {week}.\n\nCONTEXT: My goals for the week: {goals}. My fixed events: {fixedEvents}. The personal and family constraints shaping this week: {lifeConstraints}. I want the week to have a unifying theme: {theme}. I realistically have {capacity} hours of focused time available — do not plan beyond this; if my goals exceed it, say which goal to defer and why.\n\nPLANNING PRINCIPLES: A good week assigns every goal to a specific day instead of leaving it as a vague intention. Hard things go on high-energy days; the hardest day gets identified in advance, not discovered mid-week. No week survives contact with reality, so the plan needs slack and a named backup for the toughest day. Friday is for closing loops, not starting new ones.\n\nWHAT TO DELIVER:\n1. A one-paragraph framing of the theme {theme}: what it means in practice this week and the one question to ask when deciding what fits.\n2. A day-by-day plan (Monday through Sunday): each day lists its assigned goals, the fixed events from {fixedEvents}, and a realistic workload that respects {capacity} and {lifeConstraints}.\n3. The hardest day named in advance, with a lighter backup version of that day's plan for when energy or life intervenes.\n4. One protected recovery block and one completely unscheduled buffer of at least 2 hours somewhere in the week.\n5. A Friday review checkpoint: 20 minutes covering what got done, what carries forward, and the single lesson for next week's plan.\n\nA high-quality result distributes {goals} so no single day is overloaded, honors {theme} without forcing it, and could be followed by a tired version of me on a bad day.",
    "description": "Produces a day-by-day weekly plan that distributes goals realistically across the week around constraints.",
    "category": "planning",
    "variables": {
      "week": {
        "label": "Week Start",
        "question": "Which week is this plan for?",
        "type": "date",
        "required": true
      },
      "goals": {
        "label": "Weekly Goals",
        "question": "What do you want to accomplish this week?",
        "type": "textarea",
        "placeholder": "e.g., Finish proposal, 3 workouts, call mom",
        "required": true
      },
      "fixedEvents": {
        "label": "Fixed Events",
        "question": "What fixed events are already on the calendar?",
        "type": "textarea",
        "placeholder": "e.g., Tue 2pm dentist, Thu all-day offsite",
        "required": true
      },
      "theme": {
        "label": "Week Theme",
        "question": "What theme should unify this week?",
        "type": "text",
        "placeholder": "e.g., Deep work, recovery, connection",
        "required": true
      },
      "capacity": {
        "label": "Focused Hours",
        "question": "How many realistic focused hours do you have this week?",
        "type": "number",
        "placeholder": "e.g., 25",
        "required": true
      },
      "lifeConstraints": {
        "label": "Life Constraints",
        "question": "What family, health, or social constraints shape this week?",
        "type": "textarea",
        "placeholder": "e.g., Kids home Thursday, PT appointment Wed",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Monthly Goal Plan",
    "displayDescription": "Turns monthly goals into weekly actions with a mid-month reassessment checkpoint and a scored month-end review.",
    "id": "planning-006",
    "prompt": "Act as a monthly planning coach and create a focused, executable plan for {month}.\n\nCONTEXT: The one focus for {month} is {focus} — every goal should serve it, and anything that does not should be questioned. My goals: {goals}. My existing commitments that month: {commitments}. I can give these goals about {weeklyAvailability} hours per week, and I will track progress with {trackMethod}.\n\nPLANNING PRINCIPLES: Monthly goals fail when they stay monthly — they must become weekly actions with owners and deadlines. Commitments are not obstacles to complain about; they are constraints to plan around explicitly. Halfway through the month, honest reassessment beats blind persistence: some goals should be cut, not just pushed.\n\nWHAT TO DELIVER:\n1. A focus statement for {month}: one paragraph on what {focus} means and the explicit trade-offs it implies (what I am choosing NOT to do this month).\n2. Four weekly blocks. Each week: the specific actions that advance {goals}, which commitment from {commitments} it must work around and how, and the week's definition of done. Sequence the weeks so momentum builds — early wins first, hardest work in weeks 2-3.\n3. A mid-month checkpoint (around the 15th): five reassessment questions, the criteria for cutting or shrinking a goal versus pushing harder, and how to reallocate the freed time.\n4. A month-end review: score each goal 1-5 with evidence, name the one habit or system to keep, and write the one-paragraph handoff to next month.\n5. A tracking setup for {trackMethod}: exactly what gets logged, when, and the weekly 10-minute ritual for updating it.\n\nKeep every action sized to {weeklyAvailability} hours per week. A high-quality result is specific enough that on any given day of {month} I know exactly what to do next.",
    "description": "Breaks monthly goals into weekly actions with built-in checkpoints for course correction and a scored review.",
    "category": "planning",
    "variables": {
      "month": {
        "label": "Month",
        "question": "Which month is this plan for?",
        "type": "text",
        "placeholder": "e.g., October 2026",
        "required": true
      },
      "focus": {
        "label": "Monthly Focus",
        "question": "What is the one focus for this month?",
        "type": "text",
        "placeholder": "e.g., Health reset",
        "required": true
      },
      "goals": {
        "label": "Goals",
        "question": "What goals do you want to hit this month?",
        "type": "textarea",
        "placeholder": "e.g., Read 2 books, save $500, run 40 miles",
        "required": true
      },
      "commitments": {
        "label": "Existing Commitments",
        "question": "What commitments already occupy this month?",
        "type": "textarea",
        "placeholder": "e.g., Work trip Oct 12-14, in-laws visit",
        "required": true
      },
      "weeklyAvailability": {
        "label": "Weekly Hours",
        "question": "How many hours per week can you give these goals?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "trackMethod": {
        "label": "Tracking Method",
        "question": "How will you track progress?",
        "type": "select",
        "options": [
          "Paper tracker",
          "Spreadsheet",
          "Habit app",
          "Journal"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Quarterly Plan",
    "displayDescription": "Narrows your quarter to three measurable priorities with monthly milestones, a named derailment constraint, and a weekly tracking cadence.",
    "id": "planning-007",
    "prompt": "Act as a strategic planning coach and build a focused quarterly plan for {quarter} {year}.\n\nCONTEXT: The big things I want from this quarter: {bigRocks}. What last quarter taught me: {lessons} — these lessons must visibly shape this plan, not sit in a drawer. The constraint I most fear will derail me: {constraintWorry}. I will track progress with a check-in every {cadence}.\n\nPLANNING PRINCIPLES: A quarter can hold at most three real priorities; everything else is maintenance. Each priority needs a measurable outcome, or it is a wish, not a plan. Last quarter's lessons are only useful if they change this quarter's design — show exactly where each lesson alters a decision. The derailment constraint gets a named mitigation, not a hope.\n\nWHAT TO DELIVER:\n1. The 3 priorities, chosen from {bigRocks}, each with: a one-line statement, a measurable outcome (number, date, or binary done-state), and why it made the cut over the others.\n2. One monthly milestone per priority (3 months x 3 priorities): concrete, verifiable, and sequenced so early months build the foundation.\n3. A lessons-integration section: each lesson from {lessons} mapped to the specific decision it changed in this plan.\n4. A constraint plan for {constraintWorry}: the early-warning sign, the mitigation in place from day one, and the pivot if it hits anyway.\n5. A weekly tracking cadence for {cadence}: the 15-minute ritual, the 3 numbers or checkmarks reviewed, and the rule for when a priority goes red (what happens, who is told, what changes).\n6. A quarter-end retro template: score each priority, capture the 3 lessons, and write the handoff paragraph for next quarter.\n\nA high-quality result fits on two pages, survives a busy week without daily attention, and makes the trade-offs of {quarter} {year} explicit.",
    "description": "Distills a quarter into three measurable priorities with milestones, lesson integration, and a tracking rhythm.",
    "category": "planning",
    "variables": {
      "quarter": {
        "label": "Quarter",
        "question": "Which quarter are you planning?",
        "type": "select",
        "options": [
          "Q1",
          "Q2",
          "Q3",
          "Q4"
        ],
        "required": true
      },
      "year": {
        "label": "Year",
        "question": "Which year?",
        "type": "number",
        "placeholder": "e.g., 2026",
        "required": true
      },
      "bigRocks": {
        "label": "Big Rocks",
        "question": "What are the big things you want to accomplish?",
        "type": "textarea",
        "placeholder": "e.g., Launch website, pass certification, plan wedding",
        "required": true
      },
      "lessons": {
        "label": "Last Quarter Lessons",
        "question": "What did last quarter teach you?",
        "type": "textarea",
        "placeholder": "e.g., Overcommitted in March, mornings work best",
        "required": true
      },
      "constraintWorry": {
        "label": "Biggest Risk",
        "question": "What is the single constraint most likely to derail this quarter?",
        "type": "textarea",
        "placeholder": "e.g., Work travel spikes, childcare gaps",
        "required": true
      },
      "cadence": {
        "label": "Check-In Cadence",
        "question": "How often will you check progress?",
        "type": "select",
        "options": [
          "Weekly",
          "Biweekly",
          "Monthly"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Yearly Vision Plan",
    "displayDescription": "Drafts a one-page present-tense vision narrative for the year, then extracts goals, habits, January first steps, and a quarterly re-read ritual.",
    "id": "planning-008",
    "prompt": "Act as a life-design coach and help me draft a yearly vision for {year} that is inspiring and concrete — never vague.\n\nCONTEXT: The life areas I want to shape: {areas}. My word or theme for the year: {word}. What last year taught me: {lastYear}. What I refuse to repeat this year: {avoidRepeating}. How I want to feel on December 31, {year}: {yearEndFeeling}.\n\nVISION PRINCIPLES: A vision that works is written in the present tense, as if {year} already happened — the brain treats it as a memory to live into, not a wish. Every aspiration must survive the question \"what would I actually DO differently?\" If it cannot become a goal, a habit, or a first step, it is decoration. The word {word} must appear as a decision filter, not a poster slogan: show how it resolves real trade-offs.\n\nWHAT TO DELIVER:\n1. A one-page vision narrative written in present tense, dated December 31, {year}, covering {areas}, weaving in {word} as the through-line, and honestly acknowledging that {avoidRepeating} did not repeat. It should read like a journal entry, not a bullet list.\n2. Three to five annual goals extracted from the narrative, each with a specific success criterion (what is true on Dec 31 that proves it) and the {word} test it passes.\n3. One keystone habit per goal: the smallest repeatable behavior that drives it, with its trigger and frequency.\n4. The first concrete step for January for each goal — something completable in a single week, with a named date.\n5. A quarterly re-read ritual: when to re-read the vision, the 3 questions to ask, and the rule for adjusting goals mid-year without abandoning the vision.\n6. A {word} decision filter: three \"if {word}, then...\" rules for the trade-offs {year} will bring.\n\nKeep it inspiring but grounded: {yearEndFeeling} should feel earned by the plan, not wished for. A high-quality result is something I would proudly re-read every quarter.",
    "description": "Turns reflections and aspirations into a written yearly vision with goals, habits, and January actions.",
    "category": "planning",
    "variables": {
      "year": {
        "label": "Year",
        "question": "Which year are you visioning?",
        "type": "number",
        "placeholder": "e.g., 2027",
        "required": true
      },
      "areas": {
        "label": "Life Areas",
        "question": "Which life areas do you want to shape?",
        "type": "textarea",
        "placeholder": "e.g., Career, health, marriage, finances, faith",
        "required": true
      },
      "word": {
        "label": "Word of the Year",
        "question": "What is your word or theme for the year?",
        "type": "text",
        "placeholder": "e.g., Discipline",
        "required": true
      },
      "lastYear": {
        "label": "Last Year Lessons",
        "question": "What did last year teach you?",
        "type": "textarea",
        "placeholder": "e.g., I thrive with routine; saying no is hard",
        "required": true
      },
      "avoidRepeating": {
        "label": "Not Repeating",
        "question": "What do you refuse to repeat this year?",
        "type": "textarea",
        "placeholder": "e.g., Saying yes to everything, skipping workouts",
        "required": true
      },
      "yearEndFeeling": {
        "label": "Year-End Feeling",
        "question": "How do you want to feel on Dec 31?",
        "type": "text",
        "placeholder": "e.g., Proud, rested, and in control",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Project Kickoff Plan",
    "displayDescription": "Produces a kickoff brief with scope boundaries, RACI-style roles, first actions with owners and dates, communication cadence, and the top risks.",
    "id": "planning-009",
    "prompt": "Act as a project management consultant and create a complete kickoff plan for my project.\n\nCONTEXT: The project is {project}. The objective: {objective}. The team: {team}. The deadline: {deadline}. Known constraints: {constraints}. The stakeholders beyond the team: {stakeholders}. Final decisions rest with {decisionMaker}.\n\nKICKOFF PRINCIPLES: Most projects fail from fuzzy scope, unclear ownership, and slow starts — not from lack of effort. The kickoff must draw bright lines: what is in and what is explicitly out, who owns what (one owner per thing), and what happens in the first two weeks. Communication needs a designed cadence, or it defaults to chaos. Risks named at kickoff are risks that can be managed.\n\nWHAT TO DELIVER — a kickoff brief with these sections:\n1. Scope: a crisp in-scope list, an explicit out-of-scope list (at least 3 items, to prevent creep), and measurable success criteria tied to {objective}.\n2. Roles and responsibilities: each team member from {team} with their owned areas, using a simple owner/supporter/informed model. Name the single decision-maker for scope disputes: {decisionMaker}.\n3. The first 5 actions: each with a named owner, a due date within the first two weeks, and the concrete output that proves it is done.\n4. Communication cadence: what meetings or updates happen, how often, in what channel, who must attend versus who gets a summary — designed for this team's size, not a generic template.\n5. Stakeholder plan for {stakeholders}: what each needs to hear, when, and from whom.\n6. Top 3 risks with a one-line mitigation each, explicitly considering {constraints}.\n7. A kickoff meeting agenda (60 minutes) that walks the team through this brief and ends with everyone knowing their first action.\n\nA high-quality brief is specific enough that {team} could start work the day after reading it, with no follow-up meeting needed to clarify ownership.",
    "description": "Generates a complete project kickoff brief covering scope, roles, first actions, and risks.",
    "category": "planning",
    "variables": {
      "project": {
        "label": "Project",
        "question": "What is the project?",
        "type": "text",
        "placeholder": "e.g., Office move, app redesign",
        "required": true
      },
      "objective": {
        "label": "Objective",
        "question": "What is the project's objective?",
        "type": "textarea",
        "placeholder": "e.g., Move 40 staff to new HQ by March",
        "required": true
      },
      "team": {
        "label": "Team",
        "question": "Who is on the team?",
        "type": "text",
        "placeholder": "e.g., Me, Priya, Sam, external vendor",
        "required": true
      },
      "deadline": {
        "label": "Deadline",
        "question": "What is the deadline?",
        "type": "date",
        "required": true
      },
      "constraints": {
        "label": "Constraints",
        "question": "What constraints exist?",
        "type": "textarea",
        "placeholder": "e.g., $20k budget cap, no downtime allowed"
      },
      "stakeholders": {
        "label": "Stakeholders",
        "question": "Who are the stakeholders beyond the team?",
        "type": "textarea",
        "placeholder": "e.g., Exec sponsor, customers, facilities",
        "required": true
      },
      "decisionMaker": {
        "label": "Decision Maker",
        "question": "Who makes the final call on scope disputes?",
        "type": "text",
        "placeholder": "e.g., Me, or the VP of Ops",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Project Timeline Builder",
    "displayDescription": "Lays out project phases in order with realistic durations, dependencies, buffers, the critical path, and a week-by-week table.",
    "id": "planning-010",
    "prompt": "Act as a project scheduler and build a realistic, defensible timeline for {project}, running from {startDate} to {endDate}.\n\nCONTEXT: The phases: {phases}. The key milestones: {milestones}. Team capacity and availability quirks: {teamCapacity}. Known hard dependencies: {hardDeps}.\n\nSCHEDULING PRINCIPLES: A timeline people trust is built backwards from reality, not forwards from optimism. Every phase needs a duration justified by its actual work content, dependencies must be explicit (not assumed), and buffers protect the plan without hiding in every estimate. The critical path is the sequence that determines the end date — everything else has float. If the phases cannot fit between {startDate} and {endDate}, say so and propose what to cut, parallelize, or extend.\n\nWHAT TO DELIVER:\n1. Each phase from {phases} laid out in order with: duration, start and end dates, what is produced (the tangible output), and its dependencies on other phases — incorporating {hardDeps}.\n2. A dependency map in plain language: which phases must be sequential, which can run in parallel, and where the handoffs need coordination given {teamCapacity}.\n3. Buffer zones: place explicit buffers (aim for 15-20% of total duration) before the highest-risk phases and before the final deadline — never bury padding inside estimates.\n4. The critical path flagged and explained: which phases determine whether {endDate} is met, and the one phase most likely to slip it.\n5. Review checkpoints marked on the timeline: what gets reviewed, by whom, and the decision each checkpoint produces.\n6. Each milestone from {milestones} placed at its date with its done-criteria.\n7. A week-by-week timeline table covering {startDate} to {endDate}.\n8. A slip-response rule: if a phase slips by more than a week, exactly what happens (who decides, what gets re-sequenced or cut).\n\nA high-quality timeline acknowledges {teamCapacity} honestly, shows its math, and gives me confidence defending the dates to anyone.",
    "description": "Creates a phased project timeline with dependencies, buffers, and the critical path flagged.",
    "category": "planning",
    "variables": {
      "project": {
        "label": "Project",
        "question": "What is the project?",
        "type": "text",
        "placeholder": "e.g., Product launch, thesis",
        "required": true
      },
      "startDate": {
        "label": "Start Date",
        "question": "When does the project start?",
        "type": "date",
        "required": true
      },
      "endDate": {
        "label": "End Date",
        "question": "When must it finish?",
        "type": "date",
        "required": true
      },
      "phases": {
        "label": "Phases",
        "question": "What are the project phases?",
        "type": "textarea",
        "placeholder": "e.g., Research, design, build, test, launch",
        "required": true
      },
      "milestones": {
        "label": "Milestones",
        "question": "What are the key milestones?",
        "type": "textarea",
        "placeholder": "e.g., Design approved, beta live, launch",
        "required": true
      },
      "teamCapacity": {
        "label": "Team Capacity",
        "question": "Who is available, and when are they not?",
        "type": "textarea",
        "placeholder": "e.g., 2 devs full-time, designer half-time, Sam on vacation in July",
        "required": true
      },
      "hardDeps": {
        "label": "Hard Dependencies",
        "question": "Any phases that absolutely must wait for another?",
        "type": "textarea",
        "placeholder": "e.g., Testing can't start until build is code-complete"
      }
    }
  },
  {
    "displayTitle": "Milestone Tracker",
    "displayDescription": "Sets up a milestone tracker with done-criteria checklists, owners, early-warning indicators, check-in statuses, and an escalation rule.",
    "id": "planning-011",
    "prompt": "Act as a project controls specialist and set up a milestone tracker for {project} that keeps everyone honest.\n\nCONTEXT: The milestones to track: {milestones}. The owners: {owners} — if an owner is missing for any milestone, assign one explicitly and flag the assumption. Progress will be checked {checkInFrequency}. The person running the check-ins: {checkInOwner}.\n\nTRACKING PRINCIPLES: Milestones slip silently when \"done\" is vague, so every milestone needs a checklist that proves completion — not a feeling, a verification. Owners must be single humans, never groups. The most valuable part of a tracker is not the status column but the leading indicator: the early signal that trouble is coming before the date is missed. Statuses must trigger action: \"at risk\" and \"blocked\" are calls for help, not labels.\n\nWHAT TO DELIVER:\n1. A tracker table with one row per milestone from {milestones}: milestone name, owner (from {owners}), due date, done-criteria checklist (3-5 verifiable items each), and the leading indicator that warns us early if it is about to slip (e.g., \"draft not circulated 5 days before review\").\n2. A status protocol for each {checkInFrequency} check-in run by {checkInOwner}: the exact status format — on track / at risk / blocked — with the definition of each and what the owner must report (progress since last check, confidence in the date, help needed).\n3. An escalation rule: what happens when a milestone goes \"blocked\" (who gets notified within 24 hours, what decision is needed) and when \"at risk\" becomes \"blocked.\"\n4. A dependency note: which milestones depend on which, so a slip in one visibly cascades.\n5. A lightweight celebration rule: how the team marks a milestone hit, because trackers that only record pressure get abandoned.\n\nA high-quality tracker is one {checkInOwner} could run from this document alone, where every milestone's \"done\" is undeniable and no slip arrives as a surprise.",
    "description": "Builds a milestone tracking table with owners, done-criteria, early-warning signals, and an escalation protocol.",
    "category": "planning",
    "variables": {
      "project": {
        "label": "Project",
        "question": "What is the project?",
        "type": "text",
        "placeholder": "e.g., Website rebuild",
        "required": true
      },
      "milestones": {
        "label": "Milestones",
        "question": "What are the milestones?",
        "type": "textarea",
        "placeholder": "e.g., Wireframes done, content written, QA passed",
        "required": true
      },
      "owners": {
        "label": "Owners",
        "question": "Who owns each milestone?",
        "type": "textarea",
        "placeholder": "e.g., Wireframes: Sam, content: me",
        "required": true
      },
      "checkInFrequency": {
        "label": "Check-In Frequency",
        "question": "How often will you check progress?",
        "type": "select",
        "options": [
          "Daily",
          "Weekly",
          "Biweekly",
          "Monthly"
        ],
        "required": true
      },
      "checkInOwner": {
        "label": "Check-In Owner",
        "question": "Who runs the check-in meetings?",
        "type": "text",
        "placeholder": "e.g., Me, or the project manager",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Task Breakdown Builder",
    "displayDescription": "Decomposes a big goal into a work breakdown structure down to tasks under two hours each, with effort, dependencies, and an import-ready list.",
    "id": "planning-012",
    "prompt": "Act as a work-breakdown specialist and decompose {endGoal} into a structure I can actually execute.\n\nCONTEXT: The overall project: {project}. Break it down to {depth} levels of detail, ending in tasks that each take under 2 hours. Constraints shaping the work: {constraints}. I will manage the tasks in {preferredTool}, so the final list must be import-friendly for it (numbered, one task per line, with effort and dependency noted compactly).\n\nBREAKDOWN PRINCIPLES: Big goals paralyze; small tasks move. Every level must decompose cleanly — a parent's scope equals the sum of its children, nothing more, nothing less. Effort estimates are guesses, so keep them rough and honest (use ranges), and mark the three most uncertain estimates explicitly. Dependencies are the hidden killers: a task list without them is a wish list. Order the final list so early wins build momentum before the hard parts.\n\nWHAT TO DELIVER:\n1. The work breakdown structure at {depth} levels: Level 1 = major phases, decomposing down to leaf tasks under 2 hours each. Show the hierarchy clearly (numbered outline, e.g., 1.0, 1.1, 1.1.1).\n2. For each work package (the level above the leaves): its parent, the estimated effort range, and its dependencies — what must be true or finished before it starts, considering {constraints}.\n3. The three most uncertain estimates flagged, with what would make each one bigger or smaller.\n4. A \"start here\" recommendation: the 3 tasks to do first for maximum momentum and learning.\n5. A final numbered task list, one task per line in execution order, formatted for {preferredTool}, each line carrying its effort estimate and dependency code.\n6. A review checkpoint: the question to ask after completing the first 10 tasks to validate whether the estimates and structure still hold.\n\nA high-quality result leaves no task vague enough to procrastinate on — every leaf task is so concrete I could start it in the next five minutes.",
    "description": "Decomposes a project into phased, bite-sized tasks with effort estimates, dependencies, and an import-ready list.",
    "category": "planning",
    "variables": {
      "endGoal": {
        "label": "End Goal",
        "question": "What is the final outcome you want?",
        "type": "text",
        "placeholder": "e.g., Published online course",
        "required": true
      },
      "project": {
        "label": "Project Context",
        "question": "Describe the project in a few lines.",
        "type": "textarea",
        "placeholder": "e.g., 6-module course for beginners, video format",
        "required": true
      },
      "depth": {
        "label": "Levels of Detail",
        "question": "How many levels deep should the breakdown go?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "constraints": {
        "label": "Constraints",
        "question": "What constraints shape this work?",
        "type": "textarea",
        "placeholder": "e.g., Only weekends free, $500 tool budget"
      },
      "preferredTool": {
        "label": "Task Tool",
        "question": "Which tool will you manage the tasks in?",
        "type": "select",
        "options": [
          "Todoist",
          "Notion",
          "Apple Reminders",
          "Paper list",
          "Other"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Prioritization Matrix",
    "displayDescription": "Scores your tasks against weighted criteria with a defined rubric, shows the math, and flags drop candidates and calendar implications.",
    "id": "planning-013",
    "prompt": "Act as a decision analyst and rank my competing tasks with a rigorous prioritization matrix.\n\nCONTEXT: The tasks: {tasks}. The criteria that matter: {criteria}. The weights: {weights}. The bigger picture these tasks serve: {context}. I need my top {topN} priorities identified clearly.\n\nSCORING PRINCIPLES: Scores are meaningless without a shared rubric — define what 1 through 5 means for each criterion before scoring a single task, or the numbers are just vibes. Weights must be applied transparently with the math shown, so I can audit and adjust them. A matrix that ranks everything high is useless; force real differentiation. The output is not just a ranking — it must tell me what to do, what to schedule, and what to drop.\n\nWHAT TO DELIVER:\n1. The scoring rubric: for each criterion in {criteria}, a one-line definition of what scores 1, 3, and 5 mean in the context of {context}.\n2. The full matrix as a table: every task from {tasks} scored 1-5 on every criterion, the weight from {weights} applied, and the weighted total shown — with the arithmetic visible so I can verify it.\n3. The ranked list, highest to lowest, with the top {topN} clearly marked as \"do first\" and a one-line reason each earned its rank.\n4. Drop candidates: any task scoring low across the board, with an explicit recommendation to drop, delegate, or defer it — and the permission to let it go.\n5. A sensitivity note: if the weights in {weights} shifted modestly, which rankings would change? Name the one task whose rank is most fragile.\n6. Calendar implications: what the top {topN} displace — the honest statement of what does NOT get done this cycle.\n\nA high-quality result is defensible: I could show the math to anyone and explain exactly why task #1 beats task #4.",
    "description": "Ranks competing tasks with weighted scoring, a defined rubric, and explicit drop candidates.",
    "category": "planning",
    "variables": {
      "tasks": {
        "label": "Tasks",
        "question": "Which tasks need prioritizing?",
        "type": "textarea",
        "placeholder": "e.g., Fix bug, write proposal, renew insurance",
        "required": true
      },
      "criteria": {
        "label": "Criteria",
        "question": "What criteria matter?",
        "type": "textarea",
        "placeholder": "e.g., Impact, urgency, effort, revenue",
        "required": true
      },
      "weights": {
        "label": "Weights",
        "question": "How should criteria be weighted?",
        "type": "text",
        "placeholder": "e.g., Impact 3x, urgency 2x, effort 1x",
        "required": true
      },
      "context": {
        "label": "Bigger Picture",
        "question": "What bigger goal do these tasks serve?",
        "type": "textarea",
        "placeholder": "e.g., Q3 product launch, getting finances organized",
        "required": true
      },
      "topN": {
        "label": "Top Priorities Needed",
        "question": "How many top priorities do you need identified?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Eisenhower Matrix Sorter",
    "displayDescription": "Sorts your to-do list into Do, Schedule, Delegate, and Delete with reasoning, delegation targets, and a weekly re-sort ritual.",
    "id": "planning-014",
    "prompt": "Act as a time-management coach and sort my to-do list into an Eisenhower matrix for {horizon}.\n\nCONTEXT: My tasks: {tasks}. My current load: {currentLoad}. People or services I could delegate to: {delegateTargets}.\n\nSORTING PRINCIPLES: Urgent is not important — the matrix exists because we chronically confuse the two. Be strict: \"important\" means it advances my actual goals, not that someone is waiting on it. Delegation is a skill, so for each delegated task name the who and the exact handoff. Deletion needs explicit permission — most lists carry tasks that should simply die. The matrix is a snapshot; without a re-sort ritual it rots within a week.\n\nWHAT TO DELIVER:\n1. Four labeled quadrants. Every task from {tasks} placed in exactly one, each with a one-line reason for the placement that references urgency AND importance honestly — call out the tasks I am tempted to mislabel.\n2. Do (urgent + important): ordered by true urgency, each with the concrete next action and a suggested time block, considering {currentLoad}.\n3. Schedule (important, not urgent): each with a proposed date or week, because unscheduled important tasks are just intentions.\n4. Delegate (urgent, not important): each matched to someone in {delegateTargets} with a one-line handoff script — what to ask for, by when, and what \"done\" looks like. If nothing in {delegateTargets} fits, say what kind of help to find instead.\n5. Delete (neither): each with the explicit permission statement for letting it go and what happens if it never gets done (usually: nothing).\n6. A weekly re-sort ritual for {horizon}: 10 minutes, the 3 questions to ask, and the rule for tasks that keep migrating between quadrants.\n\nGiven {currentLoad}, be realistic about how much lands in Do — if everything is urgent, say so and help me renegotiate rather than pretending the matrix fixes overload.",
    "description": "Organizes tasks by urgency and importance into actionable quadrants with delegation scripts and a re-sort ritual.",
    "category": "planning",
    "variables": {
      "tasks": {
        "label": "Tasks",
        "question": "What tasks need sorting?",
        "type": "textarea",
        "placeholder": "e.g., Email backlog, Q3 report, car oil change",
        "required": true
      },
      "horizon": {
        "label": "Time Horizon",
        "question": "What time horizon is this for?",
        "type": "select",
        "options": [
          "This week",
          "This month",
          "This quarter"
        ],
        "required": true
      },
      "currentLoad": {
        "label": "Current Load",
        "question": "How would you describe your current load?",
        "type": "select",
        "options": [
          "Overwhelmed",
          "Busy but managing",
          "Manageable",
          "Light"
        ],
        "required": true
      },
      "delegateTargets": {
        "label": "Delegation Options",
        "question": "Who could you delegate to?",
        "type": "textarea",
        "placeholder": "e.g., Assistant, partner, virtual assistant service"
      }
    }
  },
  {
    "displayTitle": "Time Blocking Template",
    "displayDescription": "Designs a repeating daily template that protects deep work at peak energy, with buffers, meeting batching, interruption rules, and a weekly planning slot.",
    "id": "planning-015",
    "prompt": "Act as a calendar architect and design a repeating daily time-blocking template for my typical day.\n\nCONTEXT: My work hours are {workHours}. My energy pattern: {energy}. Non-negotiables that must fit every day: {mustDo}. My usual meeting load: {meetingLoad}. I want {deepWorkHours} hours of real deep work daily. How interruptions currently hit me: {interruptions}.\n\nTEMPLATE PRINCIPLES: A template works when it is a default, not a straitjacket — it should answer \"what should I be doing now?\" without a decision. Deep work goes in the energy peak ({energy}) and is defended like a meeting with my most important client. Meetings expand to fill available space, so {meetingLoad} determines how aggressively they get batched. Interruptions are designed for, not wished away: the template needs explicit rules for them. The template must include its own maintenance — a weekly slot to plan, and a rule for evolving the template after two weeks of real use.\n\nWHAT TO DELIVER:\n1. The full-day template from the start to the end of {workHours}: named blocks with start/end times and durations, including {mustDo}, deep-work blocks totaling {deepWorkHours} hours placed at {energy}, and buffer zones between context switches.\n2. A meeting strategy matched to {meetingLoad}: when meetings are allowed, how they get batched, and the maximum meeting hours per day before deep work is declared dead.\n3. Interruption rules addressing {interruptions}: office-hours windows for drop-ins, an async triage method (what gets answered now vs. batched), and a 2-minute script for declining gracefully.\n4. A weekly planning slot: when it happens, its 20-minute agenda, and how it customizes the template for the coming week.\n5. A two-week evolution rule: what to track for two weeks and exactly which block to change first based on what the data shows.\n6. The three most common ways this template breaks, and the pre-planned response for each.\n\nA high-quality template respects {mustDo} without apology, protects {deepWorkHours} hours of focus, and is honest about what {meetingLoad} meeting load allows.",
    "description": "Creates a reusable daily schedule template that guards focus time with interruption rules and a weekly planning slot.",
    "category": "planning",
    "variables": {
      "workHours": {
        "label": "Work Hours",
        "question": "What are your typical work hours?",
        "type": "text",
        "placeholder": "e.g., 8am to 5pm",
        "required": true
      },
      "energy": {
        "label": "Energy Pattern",
        "question": "When is your energy highest?",
        "type": "select",
        "options": [
          "Morning peak",
          "Midday peak",
          "Evening peak",
          "Unpredictable"
        ],
        "required": true
      },
      "mustDo": {
        "label": "Non-Negotiables",
        "question": "What must fit into every day?",
        "type": "textarea",
        "placeholder": "e.g., Workout, lunch with kids, inbox zero",
        "required": true
      },
      "meetingLoad": {
        "label": "Meeting Load",
        "question": "How heavy is your typical meeting load?",
        "type": "select",
        "options": [
          "Light",
          "Moderate",
          "Heavy"
        ],
        "required": true
      },
      "deepWorkHours": {
        "label": "Deep Work Target",
        "question": "How many deep-work hours do you want daily?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "interruptions": {
        "label": "Interruptions",
        "question": "How do interruptions usually hit you?",
        "type": "textarea",
        "placeholder": "e.g., Slack pings all day, kids after 3pm",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Calendar Audit",
    "displayDescription": "Compares where your hours actually went against your goals and ideal split, quantifies time sinks, and proposes a revised allocation with a renegotiation script.",
    "id": "planning-016",
    "prompt": "Act as a time auditor and give me an honest, numbers-driven report on how I spent {period}.\n\nCONTEXT: What filled my calendar: {commitments}. My stated goals for the period: {goals}. My ideal time split would be: {idealSplit}. The commitment I already suspect is the problem: {biggestSuspect}.\n\nAUDIT PRINCIPLES: An audit that flatters is worthless — compare actual hours against stated goals without mercy, but also without moralizing. Time sinks hide in recurring commitments that felt reasonable when scheduled; quantify them in hours and as a percentage of the period. Every audit must end in action: one commitment renegotiated, one allocation changed, one re-audit date set. The goal is a calendar that reflects {goals}, not a guilt trip.\n\nWHAT TO DELIVER:\n1. The hour-by-hour accounting: categorize {commitments} into 4-6 buckets (meetings, deep work, admin, personal, etc.) with hours and percentages of {period}.\n2. The gap analysis: each bucket compared against {goals} and {idealSplit} — where the hours went versus where the goals say they should go, with the three largest gaps named.\n3. The top 3 time sinks quantified: hours lost, what they displaced, and whether each is eliminable, reducible, or delegable.\n4. One recurring commitment to renegotiate — address {biggestSuspect} directly: the verdict on it, and a short, polite renegotiation script (what to say, what to propose instead).\n5. A revised weekly allocation: a realistic hour split across the buckets that honors {goals}, with the specific calendar changes to make this week.\n6. A re-audit date and the 3 numbers to track until then, so the next audit measures change, not just activity.\n\nA high-quality audit is specific enough to act on this week: named hours, named commitments, and a script I can actually send.",
    "description": "Analyzes time use versus goals, names the biggest time sinks, and proposes a revised allocation with a script.",
    "category": "planning",
    "variables": {
      "period": {
        "label": "Period",
        "question": "Which period should be audited?",
        "type": "select",
        "options": [
          "Last week",
          "Last month",
          "Last quarter"
        ],
        "required": true
      },
      "commitments": {
        "label": "Commitments",
        "question": "What filled your calendar in that period?",
        "type": "textarea",
        "placeholder": "e.g., 15 hrs meetings, 10 hrs email, 6 hrs commute",
        "required": true
      },
      "goals": {
        "label": "Stated Goals",
        "question": "What were your goals for that period?",
        "type": "text",
        "placeholder": "e.g., Ship feature X, exercise 4x/week",
        "required": true
      },
      "idealSplit": {
        "label": "Ideal Split",
        "question": "What would your ideal time split look like?",
        "type": "textarea",
        "placeholder": "e.g., 40% deep work, 20% meetings, 20% health, 20% rest",
        "required": true
      },
      "biggestSuspect": {
        "label": "Biggest Suspect",
        "question": "Which commitment do you suspect wastes the most time?",
        "type": "text",
        "placeholder": "e.g., The Tuesday status meeting",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Deadline Planner",
    "displayDescription": "Plans backwards from a deadline into weekly chunks with a quality bar, review loops, a 20% buffer, and a slip contingency.",
    "id": "planning-017",
    "prompt": "Act as a deadline strategist and build a backward plan that gets {deliverable} done by {deadline} — with margin, not panic.\n\nCONTEXT: The deliverable: {deliverable}. Due: {deadline}. Total effort needed: {effortHours} hours. My availability: {availability}. What \"excellent\" looks like for this: {qualityBar}. Dependencies outside my control: {dependencies}.\n\nBACKWARD-PLANNING PRINCIPLES: Start from {deadline} and work backwards — forward planning hides the crunch, backward planning exposes it. The hardest chunk goes earliest, when energy and options are highest. A 20% buffer sits before the deadline untouched, not sprinkled optimistically through the plan. \"Done\" must be defined before starting, or the finish line moves. Dependencies in {dependencies} get scheduled first because they have their own timelines.\n\nWHAT TO DELIVER:\n1. A week-by-week countdown from now to {deadline}: each week with its chunk of work, hours allocated from {availability}, and the concrete output due at week's end.\n2. The sequencing logic: which chunk is hardest and why it is scheduled earliest, and how {dependencies} are ordered around their external timelines.\n3. The 20% buffer: its exact dates before {deadline}, what it is reserved for, and the rule for when I am allowed to touch it early (almost never).\n4. The definition of done for {deliverable}: the checklist that proves it meets {qualityBar}, including who reviews it and when.\n5. Review loops: two scheduled review points with a named reviewer or self-review protocol, and what each review can still change.\n6. A daily minimum: the smallest unit of progress that keeps the plan alive on bad days.\n7. The slip contingency: if a week is missed, the exact triage — what gets cut, what gets simplified, what moves into the buffer — in priority order.\n\nCheck the math openly: {effortHours} hours against {availability} across the weeks available. If it does not fit, say so plainly and propose the scope cut that makes it fit, rather than producing a fantasy plan.",
    "description": "Works backwards from a due date to create a realistic countdown with buffers, review loops, and a slip plan.",
    "category": "planning",
    "variables": {
      "deliverable": {
        "label": "Deliverable",
        "question": "What must be delivered?",
        "type": "text",
        "placeholder": "e.g., 20-page report, finished deck",
        "required": true
      },
      "deadline": {
        "label": "Deadline",
        "question": "When is it due?",
        "type": "date",
        "required": true
      },
      "effortHours": {
        "label": "Effort Hours",
        "question": "How many total hours will it take?",
        "type": "number",
        "placeholder": "e.g., 25",
        "required": true
      },
      "availability": {
        "label": "Availability",
        "question": "When can you work on it?",
        "type": "textarea",
        "placeholder": "e.g., Weekday evenings 2 hrs, Sat mornings",
        "required": true
      },
      "qualityBar": {
        "label": "Quality Bar",
        "question": "What does an excellent result look like?",
        "type": "textarea",
        "placeholder": "e.g., Board-ready, data-backed, no typos",
        "required": true
      },
      "dependencies": {
        "label": "Dependencies",
        "question": "Any dependencies outside your control?",
        "type": "textarea",
        "placeholder": "e.g., Waiting on finance for numbers"
      }
    }
  },
  {
    "displayTitle": "Party Planning Checklist",
    "displayDescription": "Builds a chronological party checklist from booking to cleanup: venue, invites, food quantities, delegation flags, and a day-of run sheet.",
    "id": "planning-018",
    "prompt": "Act as an event planner and build a complete, chronological planning checklist for my party.\n\nCONTEXT: The occasion: {occasion}. The date: {date}. Guest count: {guests}. Budget: ${budget}. Venue situation: {venue}. People helping me: {helpers}.\n\nPARTY-PLANNING PRINCIPLES: Parties fail on logistics, not on fun — the checklist must be chronological from today to {date}, because order matters (you cannot send invitations before booking the venue). Critical-path items — things that sell out or need lead time — get booked first and flagged. Food and drink scale with {guests}: give real quantities, not \"plenty of snacks.\" Every task needs an owner from {helpers} or me; unowned tasks do not happen. The day-of run sheet is the actual product — everything before it is preparation for those hours.\n\nWHAT TO DELIVER:\n1. A chronological checklist from now until {date}, grouped by when each task must happen (book now / 4 weeks out / 2 weeks out / week of / day before). Each task: what, owner, deadline.\n2. Critical-path items flagged: the 3-5 things for this {occasion} that must be booked first given {venue}, with why each has lead-time risk.\n3. Invitations timeline: when to send, what info to include, RSVP deadline, and how to chase stragglers.\n4. Food and drinks plan with quantities scaled to {guests}: servings per person math shown, plus a drinks formula (alcoholic and non-alcoholic) and dietary accommodation notes.\n5. Decorations and music plan matched to the {occasion} vibe and {venue}, with a shopping list.\n6. Delegation flags: exactly which tasks go to {helpers}, with what instructions.\n7. A budget tracker: line items summing to no more than ${budget}, with a 10% contingency held back.\n8. A day-of run sheet with times: setup, guest arrival, food service, activities, and the cleanup plan with who does what.\n\nA high-quality result means I could hand the day-of run sheet to {helpers} and the party would run without me micromanaging it.",
    "description": "Generates a full party planning timeline from booking to cleanup with delegation flags and a budget tracker.",
    "category": "planning",
    "variables": {
      "occasion": {
        "label": "Occasion",
        "question": "What is the occasion?",
        "type": "text",
        "placeholder": "e.g., Graduation, housewarming, retirement",
        "required": true
      },
      "date": {
        "label": "Date",
        "question": "When is the party?",
        "type": "date",
        "required": true
      },
      "guests": {
        "label": "Guest Count",
        "question": "How many guests?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is the total budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 800",
        "required": true
      },
      "venue": {
        "label": "Venue",
        "question": "Where will the party be held?",
        "type": "text",
        "placeholder": "e.g., My backyard, rented hall",
        "required": true
      },
      "helpers": {
        "label": "Helpers",
        "question": "Who is helping you plan and run it?",
        "type": "textarea",
        "placeholder": "e.g., My sister, two friends",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Wedding Planning Checklist",
    "displayDescription": "Creates a month-by-month wedding countdown matched to your style and timeline, with vendor strategy, guest-list workflow, and budget allocation.",
    "id": "planning-019",
    "prompt": "Act as a wedding planner and create a complete planning checklist for our wedding on {date}.\n\nCONTEXT: Guest count: {guests}. Budget: ${budget}. Style: {style}. Venue already secured: {venueSecured}. The non-negotiables that matter most to us: {nonNegotiables}.\n\nWEDDING-PLANNING PRINCIPLES: A wedding checklist must count down from the actual months remaining until {date} — not a generic 12-month template if we have 7 months. Booking order follows scarcity: venues, photographers, and popular vendors go first because they sell out; details like favors go last. The budget needs allocation percentages by category so ${budget} does not evaporate on the first three vendors. The guest list is a workflow, not a list — it needs an A-list/B-list method and a tracking system. Every decision should serve {style} and protect {nonNegotiables}.\n\nWHAT TO DELIVER:\n1. A month-by-month countdown from now to {date}: each month listing what to book, what to decide, and what to pay — adapted to the actual time remaining and {style} (account for {venueSecured} honestly: if no venue yet, that is month-one priority).\n2. Must-book-first items: the 4-6 vendors/categories for a {style} wedding that disappear fastest, with booking lead-time guidance.\n3. A vendor shortlist strategy: how many quotes per category, the 5 questions to ask every vendor, and red flags specific to wedding vendors.\n4. A guest-list workflow: the A-list/B-list method for {guests} guests, how to handle plus-ones and kids, invitation and RSVP timeline, and a tracking sheet structure.\n5. A budget allocation: ${budget} split across categories as percentages and dollar amounts, with a 5-10% contingency, and where to splurge versus save given {nonNegotiables}.\n6. Tastings, fittings, and trials scheduled at the right lead times.\n7. The final two weeks: a week-by-week and then day-by-day plan, including the rehearsal, vendor confirmations, payments due, and an emergency kit list.\n8. A day-of timeline from getting-ready to send-off, with vendor arrival times and a point person for every segment.\n\nA high-quality result respects the real calendar, protects {nonNegotiables} in the budget, and leaves no \"oh no, we forgot\" moment in the final month.",
    "description": "Produces a wedding planning timeline matched to your actual months remaining, with vendor strategy and budget allocation.",
    "category": "planning",
    "variables": {
      "date": {
        "label": "Wedding Date",
        "question": "When is the wedding?",
        "type": "date",
        "required": true
      },
      "guests": {
        "label": "Guest Count",
        "question": "How many guests?",
        "type": "number",
        "placeholder": "e.g., 120",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is the total budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 25000",
        "required": true
      },
      "style": {
        "label": "Wedding Style",
        "question": "What style of wedding?",
        "type": "select",
        "options": [
          "Intimate",
          "Traditional",
          "Modern",
          "Rustic",
          "Outdoor"
        ],
        "required": true
      },
      "venueSecured": {
        "label": "Venue Secured",
        "question": "Is the venue already booked?",
        "type": "boolean",
        "required": true
      },
      "nonNegotiables": {
        "label": "Non-Negotiables",
        "question": "What matters most and must be protected?",
        "type": "textarea",
        "placeholder": "e.g., Great food, live band, photos",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Birthday Party Plan",
    "displayDescription": "Plans an age-appropriate birthday party with agenda, food quantities, activities with backups, budget, and a day-of timeline.",
    "id": "planning-020",
    "prompt": "Act as a party planner and design a complete birthday party for {honoree}, who is turning {age}.\n\nCONTEXT: Guest count: {guests}. Theme: {theme}. Location: {location}. Budget: ${budget}. The age ({age}) determines everything about pacing, activities, and food — plan for what {age}-year-olds actually enjoy and how long they actually last.\n\nPARTY PRINCIPLES: Kids' parties run on structure with flexibility: a timed agenda prevents chaos, but every activity needs a backup because {age}-year-olds are unpredictable. Food math is real — give quantities per guest, not vibes. The theme ({theme}) should show up in 3-4 high-impact places, not in 30 tiny details that exhaust the host. The host must enjoy the party too, so build in help and a cleanup plan that does not fall entirely on one person.\n\nWHAT TO DELIVER:\n1. A party agenda with timing: arrival activity (so early guests are not waiting), main activities in order, cake moment, and wind-down — paced for {age}-year-olds' attention spans.\n2. Activities or games matched to age {age} and the {theme} theme: each with how it works in 2-3 sentences, duration, and what to do if it flops (the backup).\n3. Food and drink plan with quantities: per-guest math for {guests} guests shown, cake sizing, and timing of when food is served.\n4. Decorations plan: the 3-4 high-impact {theme} elements for {location}, with a shopping list and cost estimates.\n5. Invitations: when to send, what to include (drop-off vs. stay, end time — the two things parents always ask), and RSVP tracking.\n6. A shopping list with budget estimates, line items summing within ${budget}.\n7. A day-of timeline: setup, party flow, and a cleanup plan with assigned helpers.\n8. A thank-you note plan: a simple system for tracking gifts and givers during the party.\n\nA high-quality result is one where the host ({honoree}'s planner) can relax during the party because every transition and contingency is already decided.",
    "description": "Designs an age-appropriate birthday party with agenda, menu, activities, budget, and logistics.",
    "category": "planning",
    "variables": {
      "honoree": {
        "label": "Honoree",
        "question": "Who is the birthday for?",
        "type": "text",
        "placeholder": "e.g., My daughter Maya",
        "required": true
      },
      "age": {
        "label": "Age Turning",
        "question": "What age are they turning?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "guests": {
        "label": "Guest Count",
        "question": "How many guests?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      },
      "theme": {
        "label": "Theme",
        "question": "What theme should the party have?",
        "type": "text",
        "placeholder": "e.g., Dinosaurs, 80s retro",
        "required": true
      },
      "location": {
        "label": "Location",
        "question": "Where will the party be held?",
        "type": "text",
        "placeholder": "e.g., Our backyard, community room",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is the total budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 350",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Dinner Party Plan",
    "displayDescription": "Designs a dinner party menu with per-guest quantities, a two-day prep schedule, make-ahead strategy, and a host's minute-by-minute evening timeline.",
    "id": "planning-021",
    "prompt": "Act as a dinner-party strategist and plan a complete evening for {guests} guests on {date}.\n\nCONTEXT: The theme or cuisine: {theme}. Dietary needs to accommodate: {dietary}. Budget: ${budget}. My cooking skill level: {cookingSkill} — be honest in the menu about what I can pull off; do not assign a soufflé to a beginner.\n\nDINNER-PARTY PRINCIPLES: The host's enjoyment is the party's ceiling — if I am stressed in the kitchen, guests feel it. That means the menu must be 70% make-ahead, the oven and stovetop must never be double-booked, and dietary needs ({dietary}) are woven into the menu design, not bolted on as an afterthought plate. Timing is the real recipe: work backwards from serving time so everything lands hot. The evening needs a host timeline, because the difference between a relaxed host and a frantic one is knowing what happens at 7:40.\n\nWHAT TO DELIVER:\n1. The menu: courses in serving order with timing between them, designed around {theme} and {cookingSkill}. For each dish: can it be made ahead (and how far ahead), and its role in the evening's pacing.\n2. Quantities per guest for {guests} guests: the math shown for mains, sides, bread, dessert, and drinks — so I buy the right amounts within ${budget}.\n3. Dietary accommodation plan: exactly how {dietary} is handled in each course (adapted dish, separate portion, or naturally compliant menu) without making anyone feel singled out.\n4. A prep schedule starting two days before {date}: day-by-day and then hour-by-hour on the day, with oven and stovetop assignments so nothing collides.\n5. A table-setting plan: layout, what goes where, and one {theme}-appropriate touch that makes it feel intentional.\n6. A drinks strategy: what to serve when, quantities, and a non-alcoholic option that is genuinely good.\n7. The host's evening timeline: minute-by-minute from one hour before guests arrive through dessert, including when to greet, when to disappear to the kitchen, and when to sit down.\n8. A 15-minute reset plan for the morning after.\n\nA high-quality result means I spend the party with my guests, not chained to the stove — the plan should make that literally true.",
    "description": "Creates a themed dinner party plan with menu, prep timeline, quantities, and dietary accommodations.",
    "category": "planning",
    "variables": {
      "guests": {
        "label": "Guest Count",
        "question": "How many guests?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "date": {
        "label": "Date",
        "question": "When is the dinner party?",
        "type": "date",
        "required": true
      },
      "theme": {
        "label": "Theme",
        "question": "What theme or cuisine?",
        "type": "text",
        "placeholder": "e.g., Italian harvest, taco night",
        "required": true
      },
      "dietary": {
        "label": "Dietary Needs",
        "question": "Any dietary restrictions to accommodate?",
        "type": "textarea",
        "placeholder": "e.g., One vegetarian, one nut allergy",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is the food and drink budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 250",
        "required": true
      },
      "cookingSkill": {
        "label": "Cooking Skill",
        "question": "How would you rate your cooking skill?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Confident"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Meeting Agenda Builder",
    "displayDescription": "Writes a tight, outcome-driven meeting agenda with timed segments, owners, pre-reads, marked decision points, and a timekeeping plan.",
    "id": "planning-022",
    "prompt": "Act as a meeting designer and write a tight, outcome-driven agenda for {meeting}.\n\nCONTEXT: Attendees: {attendees} people. Time limit: {duration} minutes — this is a hard stop, not a suggestion. Desired outcomes: {outcomes}. Who is in the room and what they care about: {attendeeStakes}. Meeting type: {meetingType}.\n\nAGENDA PRINCIPLES: Every minute must serve {outcomes}; anything that does not gets cut or moved to email — say explicitly what you cut and why. {meetingType} meetings need different structures: decision meetings need options and a decider, status meetings need exceptions not round-robins, brainstorms need divergence before convergence. Segments need owners and times, or the loudest voice fills the vacuum. Decisions must be marked visibly so the room knows when one is being made. Pre-reads exist so the meeting starts at discussion, not at information transfer.\n\nWHAT TO DELIVER — a shareable agenda with:\n1. The meeting title, date placeholder, {duration}-minute hard stop, and the {outcomes} stated at the top as the contract for the room.\n2. Timed segments that sum to exactly {duration} minutes: each with a name, minutes, owner, and purpose. Order them by decision dependency — decide the things other things depend on first. Calibrate segment count to {meetingType} and {attendees} attendees.\n3. Pre-read assignments: what each attendee (per {attendeeStakes}) must read or prepare beforehand, with a realistic time estimate.\n4. Decision points marked clearly (\"DECISION:\"): the options on the table, who decides, and what happens if the room cannot decide.\n5. A parking lot section with its rule: how off-topic items get captured in under 30 seconds without derailing.\n6. A timekeeping plan: who keeps time, the 5-minute warning protocol, and what gets cut first if the meeting runs long.\n7. The output template: what the notes or decision log should capture so {outcomes} are recorded, not just discussed.\n\nA high-quality agenda is one the attendees could run without me — every segment self-explanatory, every decision pre-framed.",
    "description": "Builds a focused meeting agenda with timed segments, owners, pre-reads, and marked decision points.",
    "category": "planning",
    "variables": {
      "meeting": {
        "label": "Meeting",
        "question": "What is the meeting about?",
        "type": "text",
        "placeholder": "e.g., Q3 roadmap review",
        "required": true
      },
      "attendees": {
        "label": "Attendees",
        "question": "How many attendees?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "duration": {
        "label": "Duration",
        "question": "How many minutes long?",
        "type": "number",
        "placeholder": "e.g., 45",
        "required": true
      },
      "outcomes": {
        "label": "Desired Outcomes",
        "question": "What should the meeting achieve?",
        "type": "textarea",
        "placeholder": "e.g., Decide launch date, assign owners",
        "required": true
      },
      "attendeeStakes": {
        "label": "Attendee Stakes",
        "question": "Who is attending and what do they care about?",
        "type": "textarea",
        "placeholder": "e.g., CFO cares about cost, eng lead cares about timeline",
        "required": true
      },
      "meetingType": {
        "label": "Meeting Type",
        "question": "What kind of meeting is this?",
        "type": "select",
        "options": [
          "Decision",
          "Status update",
          "Brainstorm",
          "Review"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Meeting Prep Checklist",
    "displayDescription": "Prioritizes your highest-leverage prep when time is short: triaged reading, anticipated objections, talking points, and a 5-minute warm-up.",
    "id": "planning-023",
    "prompt": "Act as an executive coach and build a ruthlessly prioritized preparation plan for my meeting.\n\nCONTEXT: The meeting: {meeting}. My role: {role}. Decisions on the table: {decisions}. I have exactly {prepMinutes} minutes to prepare — triage everything to fit. Background I already have: {background}. What I personally want out of this meeting: {myGoal}.\n\nPREP PRINCIPLES: With limited minutes, preparation is triage, not completeness — rank every prep item by leverage and cut from the bottom until it fits {prepMinutes} minutes. The highest-leverage prep is almost always: knowing the decision, knowing the objections, and knowing my one-line position. Walking in with {myGoal} clear prevents me from winning the meeting but losing my objective. A 5-minute warm-up before entering changes presence more than 30 more minutes of reading.\n\nWHAT TO DELIVER:\n1. The prep triage: everything I could do, ranked by leverage, with a cut line drawn at {prepMinutes} minutes — what makes the cut, what gets dropped, and the honest cost of dropping it.\n2. What to read: the minimum reading list with minutes per item and the one question each item must answer for me.\n3. What to bring: documents, data, or artifacts — and the one number or fact most likely to be challenged, with its backup.\n4. Anticipated objections: the 2-3 pushbacks most likely given {background} and {decisions}, each with my response framed in one to two sentences.\n5. My talking points: 3-5 bullets serving {myGoal} in my {role}, each with the outcome it is designed to produce — not just points to make, but moves to win.\n6. Questions to ask: the 2-3 questions that surface hidden concerns or move {decisions} forward.\n7. A 5-minute warm-up routine for right before the meeting: physical reset, mental rehearsal of the opening line, and the posture of someone in the {role} role.\n8. A post-meeting 5-minute capture: what to write down immediately so {myGoal} does not evaporate.\n\nA high-quality result respects that {prepMinutes} minutes is all I have — it tells me what NOT to do as clearly as what to do.",
    "description": "Generates a prioritized prep checklist with talking points, objection handling, and a pre-meeting warm-up.",
    "category": "planning",
    "variables": {
      "meeting": {
        "label": "Meeting",
        "question": "Which meeting are you preparing for?",
        "type": "text",
        "placeholder": "e.g., Budget review with CFO",
        "required": true
      },
      "role": {
        "label": "Your Role",
        "question": "What is your role in this meeting?",
        "type": "text",
        "placeholder": "e.g., Presenter, decision-maker, note-taker",
        "required": true
      },
      "decisions": {
        "label": "Decisions at Stake",
        "question": "What decisions are on the table?",
        "type": "textarea",
        "placeholder": "e.g., Approve $50k spend, choose vendor",
        "required": true
      },
      "prepMinutes": {
        "label": "Prep Minutes",
        "question": "How many minutes do you have to prepare?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      },
      "background": {
        "label": "Background",
        "question": "Any background context on the meeting or people?",
        "type": "textarea",
        "placeholder": "e.g., CFO is cost-focused, project is behind schedule"
      },
      "myGoal": {
        "label": "My Goal",
        "question": "What do you personally want from this meeting?",
        "type": "textarea",
        "placeholder": "e.g., Get approval without extra reporting burden",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Travel Itinerary Builder",
    "displayDescription": "Builds a realistic day-by-day itinerary paced to your travel style, with daily costs, weather backups, and practical booking priorities.",
    "id": "planning-024",
    "prompt": "Act as a travel planner and build a {days}-day itinerary for {destination} that is realistic, not crammed.\n\nCONTEXT: Budget: ${budget} total. My interests: {interests}. Travel style: {travelStyle}. Traveling in: {travelMonth}. Mobility considerations: {mobility}.\n\nITINERARY PRINCIPLES: A good itinerary respects pace — {travelStyle} means building in the right ratio of planned to open time, and no day should require more than it gives. Every day needs one anchor experience tied to {interests}, not five. Costs must be estimated per day and sum within ${budget} honestly, including the boring expenses (transit, tips, snacks). Weather and closures happen: each day gets a real backup, not a shrug. Practical logistics — transit, reservations, timing — are what separate a plan that works from a list of attractions.\n\nWHAT TO DELIVER:\n1. A day-by-day plan for all {days} days: morning, afternoon, and evening blocks. Each block: what, why it fits {interests} and {travelStyle}, realistic duration including transit time, and the estimated cost. Respect {mobility} in every transit and activity choice.\n2. The pacing logic: which days are full, which are light, and the rest or flex time built in — with the reasoning tied to {travelStyle}.\n3. A per-day cost breakdown and a trip total within ${budget}, with a 10% contingency line.\n4. One backup option per day for bad weather or closures, matched to the day's theme.\n5. Practical tips per day: transit specifics, what to book in advance and by when, best timing to avoid crowds, and any local customs or etiquette relevant in {travelMonth}.\n6. A pre-trip booking checklist: the reservations to make now, in priority order.\n7. A packing nods section: 5-7 items specific to {destination} in {travelMonth} that generic lists miss.\n\nA high-quality itinerary could be followed by a tired traveler on day 4 without modification — that is the realism test.",
    "description": "Produces a paced day-by-day travel itinerary with daily costs, weather backups, and booking priorities.",
    "category": "planning",
    "variables": {
      "destination": {
        "label": "Destination",
        "question": "Where are you going?",
        "type": "text",
        "placeholder": "e.g., Kyoto, Japan",
        "required": true
      },
      "days": {
        "label": "Days",
        "question": "How many days is the trip?",
        "type": "number",
        "placeholder": "e.g., 7",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is the total budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 2500",
        "required": true
      },
      "interests": {
        "label": "Interests",
        "question": "What are your interests?",
        "type": "textarea",
        "placeholder": "e.g., Food, temples, hiking, nightlife",
        "required": true
      },
      "travelStyle": {
        "label": "Travel Style",
        "question": "What is your travel style?",
        "type": "select",
        "options": [
          "Relaxed",
          "Balanced",
          "Packed",
          "Luxury"
        ],
        "required": true
      },
      "travelMonth": {
        "label": "Travel Month",
        "question": "When are you traveling?",
        "type": "text",
        "placeholder": "e.g., April 2027",
        "required": true
      },
      "mobility": {
        "label": "Mobility",
        "question": "Any mobility considerations?",
        "type": "select",
        "options": [
          "Full mobility",
          "Limited walking",
          "Wheelchair accessible needed"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Weekend Trip Planner",
    "displayDescription": "Plans a Friday-to-Sunday getaway with lodging tiers, a signature activity per day, logistics, and a full cost estimate.",
    "id": "planning-025",
    "prompt": "Act as a weekend-trip designer and plan a complete Friday-to-Sunday getaway to {destination} for the weekend of {weekend}.\n\nCONTEXT: Going with: {companions}. The vibe I want: {vibe}. Budget: ${budget}. Maximum comfortable drive time: {maxDrive}.\n\nWEEKEND PRINCIPLES: A weekend trip lives or dies on the Friday-to-Sunday arc — arrive and unwind Friday, peak experience Saturday, gentle close Sunday with a realistic departure time. {vibe} should be felt in every choice, from lodging to meals. {companions} determines the real constraints: group dynamics, shared costs, and differing energy. Lodging needs tiers because budgets differ; food needs highlights, not a restaurant database. Logistics (drive, parking, check-in times) are the unglamorous part that determines whether the vibe survives contact with reality.\n\nWHAT TO DELIVER:\n1. The weekend arc: Friday evening arrival and unwind plan, Saturday as the peak day, Sunday morning close with a departure time that respects {maxDrive} — all tuned to {vibe} and {companions}.\n2. One signature activity per day matched to {vibe}, each with duration, cost, and whether it needs advance booking.\n3. Lodging suggestions in three budget tiers (budget / mid / splurge) near {destination}, with what each tier buys you.\n4. Food highlights: 4-6 specific-feeling recommendations (meal + vibe) fitting {vibe}, with approximate costs.\n5. Drive or flight logistics: route, timing to beat traffic, parking situation, and check-in/check-out coordination.\n6. A packing essentials list specific to {destination} and {vibe} — the 10 things that matter, not a generic list.\n7. A total cost estimate within ${budget}: lodging, food, activities, transport — with per-person math if {companions} implies cost-sharing.\n8. A booking checklist in priority order: what to lock in first.\n\nA high-quality plan makes the weekend feel designed, not assembled — every part serving {vibe}.",
    "description": "Designs a complete weekend getaway schedule with lodging tiers, food, logistics, and cost estimates.",
    "category": "planning",
    "variables": {
      "destination": {
        "label": "Destination",
        "question": "Where are you going?",
        "type": "text",
        "placeholder": "e.g., Sedona",
        "required": true
      },
      "weekend": {
        "label": "Weekend",
        "question": "Which weekend?",
        "type": "date",
        "required": true
      },
      "companions": {
        "label": "Companions",
        "question": "Who is going?",
        "type": "text",
        "placeholder": "e.g., My partner and two friends",
        "required": true
      },
      "vibe": {
        "label": "Vibe",
        "question": "What vibe do you want?",
        "type": "select",
        "options": [
          "Relaxing",
          "Adventurous",
          "Cultural",
          "Food-focused"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "Total budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 900",
        "required": true
      },
      "maxDrive": {
        "label": "Max Drive Time",
        "question": "Maximum comfortable drive time?",
        "type": "text",
        "placeholder": "e.g., 3 hours each way",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Road Trip Planner",
    "displayDescription": "Maps a road trip with daily driving legs under 6 hours, overnight stops, fuel math, highlights per leg, and delay contingencies.",
    "id": "planning-026",
    "prompt": "Act as a road-trip planner and map a {days}-day drive from {start} to {end}.\n\nCONTEXT: Budget: ${budget} total. Stops I want along the way: {stops}. Traveling with: {passengers}. Overnight style: {lodging}. Vehicle fuel efficiency is about {mpg} MPG.\n\nROAD-TRIP PRINCIPLES: No driving day should exceed 6 hours behind the wheel — fatigue is the trip-killer, and the math must show it. Each leg needs a reason to exist beyond mileage: one must-see highlight per leg turns transit into travel. Fuel costs are calculable: show the math from distance, {mpg}, and current prices. Overnight stops need booking logic tied to {lodging}. The car is a team member: it needs its own prep checklist. Delays are normal, so the plan needs slack and a contingency, not just hope.\n\nWHAT TO DELIVER:\n1. The route overview: total distance, total drive time, and the leg-by-leg breakdown — each leg under 6 hours of driving, with start/end points, miles, and drive time shown.\n2. Each desired stop from {stops} placed on its leg, plus one must-see highlight per leg with why it is worth the stop and how long to allow.\n3. Overnight stops for each night matched to {lodging}, with booking priority (which nights must be booked ahead vs. which can flex).\n4. Fuel cost estimate: the math shown — total miles ÷ {mpg} × price per gallon — plus a toll estimate if applicable.\n5. A full cost breakdown within ${budget}: fuel, lodging, food, activities, with a contingency line for {passengers}.\n6. A car-prep checklist: fluids, tires (including the spare), emergency kit, and what to check one week before departure.\n7. A snack and meal strategy for driving days: what to pack, where the good food stops are, and how to avoid the gas-station trap.\n8. A contingency plan for delays: the built-in slack day or flex leg, what gets cut first if you lose a day, and the rebooking logic.\n9. A return-home note: if this is one-way vs. round trip, how the end is handled.\n\nA high-quality plan is drivable as written — realistic legs, real costs, and no 9-hour \"easy\" days.",
    "description": "Creates a leg-by-leg road trip route with stops, fuel math, costs, and delay contingencies.",
    "category": "planning",
    "variables": {
      "start": {
        "label": "Start",
        "question": "Where does the trip start?",
        "type": "text",
        "placeholder": "e.g., Phoenix, AZ",
        "required": true
      },
      "end": {
        "label": "End",
        "question": "Where does it end?",
        "type": "text",
        "placeholder": "e.g., San Diego, CA",
        "required": true
      },
      "days": {
        "label": "Days",
        "question": "How many days?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "stops": {
        "label": "Desired Stops",
        "question": "What stops do you want along the way?",
        "type": "textarea",
        "placeholder": "e.g., Grand Canyon, Joshua Tree",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "Total budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 1200",
        "required": true
      },
      "passengers": {
        "label": "Passengers",
        "question": "Who is traveling with you?",
        "type": "text",
        "placeholder": "e.g., Me and my partner",
        "required": true
      },
      "lodging": {
        "label": "Overnight Style",
        "question": "Where will you sleep each night?",
        "type": "select",
        "options": [
          "Hotels",
          "Camping",
          "Mix of both",
          "Friends/family"
        ],
        "required": true
      },
      "mpg": {
        "label": "Fuel Efficiency",
        "question": "About how many MPG does your vehicle get?",
        "type": "number",
        "placeholder": "e.g., 28",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Packing List Generator",
    "displayDescription": "Generates a categorized packing list with quantities scaled to trip length and laundry access, easy-to-forget essentials starred, and a do-not-pack list.",
    "id": "planning-027",
    "prompt": "Act as a packing strategist and generate a complete packing list for my trip.\n\nCONTEXT: Trip type: {tripType}. Length: {days} days. Climate: {climate}. Activities planned: {activities}. Laundry access during the trip: {laundryAccess}. Luggage situation: {luggage}.\n\nPACKING PRINCIPLES: Quantities are math, not guesses — scale clothing to {days} days and {laundryAccess} honestly (no laundry means more sets; laundry access means fewer). {luggage} is a hard constraint: a carry-on-only trip needs a ruthless list, a road trip allows more. The most valuable items on any list are the easy-to-forget essentials — star them. A do-not-pack list saves as much space as the pack list. Everything should layer for {climate} rather than relying on single-use bulky items.\n\nWHAT TO DELIVER:\n1. The list organized by category: clothing, toiletries, tech, documents, health/meds, and misc — each item with a quantity.\n2. Quantity logic shown: the formula used (e.g., \"{days} days, no laundry → 5 tops rotated\") so I can adjust if the trip changes.\n3. Activity-specific gear for {activities}: exactly what each activity requires, nothing generic.\n4. Easy-to-forget essentials starred (medications, chargers, documents, adapters) — the items that ruin trips when forgotten.\n5. A do-not-pack list for {climate} and this {tripType}: the things people overpack for this scenario.\n6. A layering plan for {climate}: how the clothing items combine across conditions, minimizing single-use pieces.\n7. A {luggage} fit check: the list sized to the luggage, with the 3 items to cut first if space is tight.\n8. A night-before and morning-of packing order: what goes in first, what stays out until departure.\n\nA high-quality list is one I can pack from directly, with quantities I trust and nothing I will have to buy at the destination.",
    "description": "Produces a climate- and activity-aware packing list organized by category with quantity math.",
    "category": "planning",
    "variables": {
      "tripType": {
        "label": "Trip Type",
        "question": "What kind of trip is it?",
        "type": "text",
        "placeholder": "e.g., Beach vacation, business conference",
        "required": true
      },
      "days": {
        "label": "Days",
        "question": "How many days?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "climate": {
        "label": "Climate",
        "question": "What is the climate?",
        "type": "select",
        "options": [
          "Hot",
          "Mild",
          "Cold",
          "Mixed"
        ],
        "required": true
      },
      "activities": {
        "label": "Activities",
        "question": "What activities are planned?",
        "type": "textarea",
        "placeholder": "e.g., Hiking, nice dinners, swimming",
        "required": true
      },
      "laundryAccess": {
        "label": "Laundry Access",
        "question": "Will you have laundry access?",
        "type": "boolean",
        "required": true
      },
      "luggage": {
        "label": "Luggage",
        "question": "What is the luggage situation?",
        "type": "select",
        "options": [
          "Carry-on only",
          "Checked bag",
          "Road trip (flexible)"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Moving Plan & Timeline",
    "displayDescription": "Builds an 8-week moving countdown covering decluttering, room-by-room packing, address and utility transfers, and moving-day logistics.",
    "id": "planning-028",
    "prompt": "Act as a moving coordinator and build a complete moving plan from {fromCity} to {toCity}, with moving day on {moveDate}.\n\nCONTEXT: Home size: {homeSize}. Help level: {help}. Budget: ${budget}. Special or fragile items: {specialItems}.\n\nMOVING PRINCIPLES: Moves fail from the packing side, not the truck side — the plan must front-load decluttering because you should never pay to move things you do not want. Packing follows a room-by-room schedule with the least-used rooms first and a \"first-night\" box packed last. Address changes and utility transfers have lead times and hard deadlines; missing them costs real money and comfort. Moving day itself needs an hour-by-hour timeline with owners from {help}. {specialItems} need their own handling plan, not a footnote.\n\nWHAT TO DELIVER:\n1. A week-by-week countdown from 8 weeks out to {moveDate} (compress proportionally if {moveDate} is sooner): each week with its theme, tasks, and owner given {help}.\n2. The declutter phase (weeks 8-6): room-by-room purge order, the keep/donate/sell/trash decision rule, and how to dispose of the donates and sells on a deadline.\n3. The packing schedule by room: which rooms when, boxes and supplies needed for a {homeSize} home, labeling system, and the rule for what stays unpacked until the end.\n4. A handling plan for {specialItems}: packing method, who moves them, and any insurance or pro help needed.\n5. Address changes checklist: every account and subscription to update, with the deadline for each (mail forwarding lead time included).\n6. Utility transfers: what to schedule at {fromCity} (shutoff) and {toCity} (turn-on), with the dates that avoid gaps or double billing.\n7. A budget within ${budget}: movers or truck, supplies, deposits, and the hidden costs (cleaning, tips, overlap rent).\n8. Moving-day logistics: hour-by-hour timeline, who does what from {help}, the loading order (heavy/first-need logic), and the final walkthrough checklist.\n9. The first-night essentials box list: everything needed for night one in {toCity} without opening another box.\n\nA high-quality plan means nothing is packed twice, nothing essential is unreachable on night one, and {moveDate} runs on rails.",
    "description": "Generates a complete moving countdown from decluttering through moving-day logistics and the first-night box.",
    "category": "planning",
    "variables": {
      "moveDate": {
        "label": "Move Date",
        "question": "When is moving day?",
        "type": "date",
        "required": true
      },
      "fromCity": {
        "label": "From",
        "question": "Where are you moving from?",
        "type": "text",
        "placeholder": "e.g., Tempe, AZ",
        "required": true
      },
      "toCity": {
        "label": "To",
        "question": "Where are you moving to?",
        "type": "text",
        "placeholder": "e.g., Austin, TX",
        "required": true
      },
      "homeSize": {
        "label": "Home Size",
        "question": "How big is your current home?",
        "type": "select",
        "options": [
          "Studio",
          "1-bedroom",
          "2-bedroom",
          "3+ bedrooms",
          "House"
        ],
        "required": true
      },
      "help": {
        "label": "Help Level",
        "question": "What help will you have?",
        "type": "select",
        "options": [
          "DIY",
          "Friends helping",
          "Hired movers",
          "Mixed"
        ],
        "required": true
      },
      "budget": {
        "label": "Moving Budget",
        "question": "What is the moving budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 2500",
        "required": true
      },
      "specialItems": {
        "label": "Special Items",
        "question": "Any special, fragile, or bulky items?",
        "type": "textarea",
        "placeholder": "e.g., Piano, 20 houseplants, aquarium"
      }
    }
  },
  {
    "displayTitle": "Relocation Plan",
    "displayDescription": "Plans a full city-to-city relocation with housing search strategy, neighborhood scoring, cost-of-living comparison, and a 30-day landing plan.",
    "id": "planning-029",
    "prompt": "Act as a relocation consultant and plan my move from {currentCity} to {newCity}, complete by {moveDate}.\n\nCONTEXT: My priorities for the new city: {priorities}. Moving budget: ${budget}. Who is moving with me: {household}.\n\nRELOCATION PRINCIPLES: A relocation is two projects: leaving well and landing well. The leaving project (housing search, logistics) needs a timeline working back from {moveDate}. The landing project (the first 30 days in {newCity}) determines whether the move feels successful — plan it as deliberately as the move itself. Neighborhood choice should be scored against {priorities}, not vibes. Cost of living is math: compare the real numbers, including the hidden ones (insurance, taxes, commute). {household} changes every calculation, from housing size to school research.\n\nWHAT TO DELIVER:\n1. A housing search strategy with timeline: when to start, where to search for {newCity}, the application documents to prepare now, and the decision deadline that still leaves buffer before {moveDate}.\n2. Neighborhood research criteria scored against {priorities}: build a simple scoring table for 3-4 candidate neighborhoods covering commute, safety, amenities, schools (if {household} includes kids), and cost.\n3. A cost-of-living comparison: {currentCity} vs. {newCity} on housing, taxes, insurance, utilities, groceries, and commute — with the monthly delta shown and what it means for my budget.\n4. Job or school transition steps: the timeline for resigning/transferring, records to move, and enrollment or onboarding deadlines.\n5. A documents and accounts transfer checklist: ID, voter registration, doctors, banks, subscriptions — each with its deadline relative to {moveDate}.\n6. A 30-day landing plan for after arrival in {newCity}: week-by-week priorities (unpack order, exploring, building routines), the 10 things to do in the first week, and how {household} settles in.\n7. A budget within ${budget}: moving costs, deposits, overlap expenses, and the first-month buffer.\n8. The 3 most common relocation regrets and how this plan prevents each.\n\nA high-quality plan treats {newCity} as a place to land, not just a destination to reach — I should know my first month, not just my moving day.",
    "description": "Creates a city-to-city relocation plan covering housing, costs, transitions, and the first 30 days.",
    "category": "planning",
    "variables": {
      "currentCity": {
        "label": "Current City",
        "question": "Where do you live now?",
        "type": "text",
        "placeholder": "e.g., Chicago, IL",
        "required": true
      },
      "newCity": {
        "label": "New City",
        "question": "Where are you moving?",
        "type": "text",
        "placeholder": "e.g., Denver, CO",
        "required": true
      },
      "moveDate": {
        "label": "Move Date",
        "question": "When must the move be complete?",
        "type": "date",
        "required": true
      },
      "priorities": {
        "label": "Priorities",
        "question": "What matters most in the new city?",
        "type": "textarea",
        "placeholder": "e.g., Good schools, short commute, walkability",
        "required": true
      },
      "budget": {
        "label": "Relocation Budget",
        "question": "What is the relocation budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 8000",
        "required": true
      },
      "household": {
        "label": "Household",
        "question": "Who is moving with you?",
        "type": "text",
        "placeholder": "e.g., Just me, or me + partner + 2 kids",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Home Renovation Plan",
    "displayDescription": "Breaks a renovation into phases with cost estimates, a DIY-vs-hire decision framework, materials list, permits, and a living-through-it plan.",
    "id": "planning-030",
    "prompt": "Act as a renovation consultant and plan the renovation of my {room}.\n\nCONTEXT: Budget: ${budget}. Must be done by {timeline}. Goals: {goals}. The style I want: {style}. Living in the home during renovation: {livingThrough}.\n\nRENOVATION PRINCIPLES: Renovations fail on three things: scope creep, bad sequencing, and no contingency. The plan must phase the work in the order trades actually work (demolition before electrical before drywall before paint — never the reverse). DIY-vs-hire is a decision framework, not a preference: some tasks save money DIY, others cost more when done wrong. Permits and inspections have lead times that must be in the schedule. A 15-20% contingency is not pessimism; it is the industry standard because surprises are guaranteed. If {livingThrough} is yes, the plan needs dust, noise, and bathroom/kitchen survival logistics.\n\nWHAT TO DELIVER:\n1. The project broken into phases in trade-correct order, each with: scope, cost estimate, and duration — summing within ${budget} with the contingency shown as its own line.\n2. A DIY-vs-hire decision for each major task: the framework (skill required, tool cost, permit implications, cost of getting it wrong) applied to my situation, with a clear recommendation per task.\n3. A materials shopping list: what to buy, approximate costs, where to source it, and what to order first given lead times — all serving {goals} and {style}.\n4. Permits and inspections: which ones this {room} renovation likely needs, how to check locally, lead times, and where they sit in the schedule.\n5. A contingency plan: the 15-20% buffer amount in dollars, what it covers, and the rule for when to spend it vs. when to descope.\n6. Contractor vetting guidance (if hiring): how many quotes, the 6 questions to ask, red flags, and payment-schedule rules (never pay in full upfront).\n7. If {livingThrough} is yes: the survival plan — dust containment, which facilities stay usable, the daily reset, and the sanity timeline.\n8. A decision log template: the choices I must make before each phase starts, so indecision never stalls the trades.\n\nA high-quality plan is one a contractor would respect: sequenced correctly, budgeted honestly, and explicit about what I am NOT doing.",
    "description": "Produces a phased renovation plan with costs, DIY guidance, permits, and a contingency buffer.",
    "category": "planning",
    "variables": {
      "room": {
        "label": "Room",
        "question": "Which room or area are you renovating?",
        "type": "text",
        "placeholder": "e.g., Kitchen, master bathroom",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is the budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 15000",
        "required": true
      },
      "timeline": {
        "label": "Timeline",
        "question": "When must it be done?",
        "type": "text",
        "placeholder": "e.g., Before Thanksgiving",
        "required": true
      },
      "goals": {
        "label": "Goals",
        "question": "What do you want the renovation to achieve?",
        "type": "textarea",
        "placeholder": "e.g., More storage, modern look, better lighting",
        "required": true
      },
      "style": {
        "label": "Style",
        "question": "What style are you going for?",
        "type": "text",
        "placeholder": "e.g., Modern farmhouse, minimalist",
        "required": true
      },
      "livingThrough": {
        "label": "Living Through It",
        "question": "Will you live in the home during renovation?",
        "type": "boolean",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Spring Cleaning Plan",
    "displayDescription": "Assigns rooms to days with specific tasks, time estimates, a supplies list, a donate-or-toss decision rule, and a maintenance system.",
    "id": "planning-031",
    "prompt": "Act as a professional organizer and build a spring cleaning plan for my home.\n\nCONTEXT: Home size: {homeSize}. I have {days} days, with about {dailyHours} hours available per day. Priority areas: {focusAreas}. People helping: {helpers}.\n\nCLEANING PRINCIPLES: Deep cleaning works top-to-bottom, back-to-front, dry-before-wet — the plan must encode this so I am not re-cleaning. Rooms get assigned to days by effort, not by preference: {focusAreas} get prime energy. Every task needs a time estimate so {days} days × {dailyHours} hours is a real budget, not a hope. Supplies are gathered once at the start, not discovered mid-task. The donate-or-toss rule must be a decision procedure I can apply in seconds, or clutter just gets rearranged. The plan earns its keep only if it ends with maintenance — otherwise the house is dirty again in a month.\n\nWHAT TO DELIVER:\n1. A day-by-day assignment for all {days} days: which rooms each day, the specific tasks per room in the correct order (declutter → dust high → surfaces → floors), and time estimates per task that fit {dailyHours} hours.\n2. {focusAreas} scheduled on the highest-energy days with extra time allocated and why.\n3. A supplies list: everything needed, bought once before day one, with approximate costs — including the tools that make the jobs in {focusAreas} actually work.\n4. The donate-or-toss decision rule: a 30-second procedure (the questions to ask, the default action when unsure, the \"maybe\" box rule with its expiration date).\n5. Task assignments for {helpers}: who does what, matched to ability and willingness.\n6. A reward at the end: something concrete and scheduled, not \"treat yourself.\"\n7. A maintenance system: the weekly 30-minute reset and the monthly rotation that keeps the deep clean from decaying.\n8. The 3 rooms people always underestimate, with their real time costs called out.\n\nCheck the math openly: total estimated hours vs. {days} × {dailyHours}. If it does not fit, say which rooms get the lighter pass and what \"done enough\" means for them.",
    "description": "Generates a day-by-day deep-cleaning schedule with task times, supplies, decision rules, and maintenance.",
    "category": "planning",
    "variables": {
      "homeSize": {
        "label": "Home Size",
        "question": "How big is your home?",
        "type": "select",
        "options": [
          "Studio",
          "1-bedroom",
          "2-bedroom",
          "3+ bedrooms",
          "House"
        ],
        "required": true
      },
      "focusAreas": {
        "label": "Priority Areas",
        "question": "Which areas need the most attention?",
        "type": "textarea",
        "placeholder": "e.g., Garage, closets, kitchen pantry",
        "required": true
      },
      "days": {
        "label": "Days",
        "question": "Over how many days?",
        "type": "number",
        "placeholder": "e.g., 7",
        "required": true
      },
      "dailyHours": {
        "label": "Hours Per Day",
        "question": "How many hours per day can you give this?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "helpers": {
        "label": "Helpers",
        "question": "Who is helping?",
        "type": "text",
        "placeholder": "e.g., Just me, or me and my partner",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Declutter Plan",
    "displayDescription": "Creates a paced, room-by-room declutter sequence with a keep-or-release framework, sorting categories, and a re-clutter prevention habit.",
    "id": "planning-032",
    "prompt": "Act as a decluttering coach and create a plan I will actually finish — not one that stalls in the closet.\n\nCONTEXT: Areas to declutter: {areas}. My pace: {pace}. My donation goal: {donationGoal}. I can give about {sessionMinutes} minutes per session. My biggest blocker: {biggestBlocker} — the plan must address this directly, not generically.\n\nDECLUTTER PRINCIPLES: Decluttering stalls on decisions, so the plan's core product is a fast decision framework, not motivation. Work in the order that builds momentum: visible wins first, sentimental items last. Every item lands in exactly one of five categories — keep, donate, sell, trash, relocate — with no \"decide later\" pile (or one strictly time-boxed box). {biggestBlocker} gets a named tactic. The end state needs a maintenance habit, or the clutter returns within months.\n\nWHAT TO DELIVER:\n1. A room-by-room sequence for {areas} fitted to {pace}: the order, why that order builds momentum, and what \"done\" looks like per area.\n2. The keep-or-release decision framework: 5 questions answerable in under 30 seconds per item, the default action when torn, and the special protocol for sentimental items.\n3. The five sorting categories (keep, donate, sell, trash, relocate) with the exit plan for each — especially how donates and sells leave the house on a deadline so they do not become new clutter.\n4. A direct tactic for {biggestBlocker}: the specific reframing, constraint, or system that neutralizes it.\n5. Session structure for {sessionMinutes}-minute sessions: warm-up, the main sort, and the 10-minute reset that ends every session with visible progress.\n6. Progress tracking toward {donationGoal}: how to measure it and the milestone celebrations.\n7. The one-in-one-out rule customized to my {areas}: exactly how it works going forward.\n8. A maintenance habit: the weekly 15-minute sweep and the monthly area rotation that prevents re-clutter.\n\nA high-quality plan acknowledges that decluttering is emotional work wearing practical clothes — it should feel like a coach, not a chore list.",
    "description": "Builds a paced decluttering plan with decision frameworks, blocker tactics, and a long-term maintenance habit.",
    "category": "planning",
    "variables": {
      "areas": {
        "label": "Areas",
        "question": "Which areas need decluttering?",
        "type": "textarea",
        "placeholder": "e.g., Closet, home office, kids toys",
        "required": true
      },
      "pace": {
        "label": "Pace",
        "question": "What pace works for you?",
        "type": "select",
        "options": [
          "One room per day",
          "One big weekend",
          "Gradual 30-day"
        ],
        "required": true
      },
      "donationGoal": {
        "label": "Donation Goal",
        "question": "What is your donation or disposal goal?",
        "type": "text",
        "placeholder": "e.g., Fill 10 bags for charity",
        "required": true
      },
      "sessionMinutes": {
        "label": "Minutes Per Session",
        "question": "How many minutes per decluttering session?",
        "type": "number",
        "placeholder": "e.g., 45",
        "required": true
      },
      "biggestBlocker": {
        "label": "Biggest Blocker",
        "question": "What is your biggest decluttering blocker?",
        "type": "textarea",
        "placeholder": "e.g., Guilt about gifts, 'I might need it someday'",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Side Hustle Launch Plan",
    "displayDescription": "Builds a lean launch plan sized to your hours and budget: minimum viable offer, week-by-week build, ranked acquisition tactics, and month-one metrics.",
    "id": "planning-033",
    "prompt": "Act as a lean startup coach and build a launch plan for my side hustle that respects my real constraints.\n\nCONTEXT: The idea: {idea}. I have {hoursPerWeek} hours per week and a ${budget} budget. Target launch date: {launchDate}. My relevant skills: {skills}. My target customer: {targetCustomer}.\n\nLAUNCH PRINCIPLES: A side hustle launches on a minimum viable offer — the smallest thing {targetCustomer} will pay for — not a finished product. With {hoursPerWeek} hours/week, the plan must be ruthless about what NOT to build. Validation comes before building: the plan needs a way to test demand before the launch date. Customer acquisition tactics get ranked by cost and by fit for someone with no audience. Month-one metrics must be leading indicators I control (outreach sent, conversations held), not vanity outcomes I do not.\n\nWHAT TO DELIVER:\n1. The minimum viable offer: exactly what {targetCustomer} gets, the price, and what is deliberately excluded for now — scoped to what my {skills} can deliver in {hoursPerWeek} hours/week.\n2. A demand-validation step to run BEFORE building: the concrete test, what result means \"proceed,\" and what means \"pivot the offer.\"\n3. A week-by-week build plan from now to {launchDate}: each week with its tasks fitted to {hoursPerWeek} hours, the deliverable, and what gets cut if a week is lost.\n4. The first 10 customer acquisition tactics ranked by cost (cheapest first), each with: what to do, time required, expected result, and why it fits someone starting from zero audience.\n5. Pricing rationale: why this price for {targetCustomer}, and the upsell or repeat-purchase path.\n6. Success metrics for month one: 3-5 leading indicators with targets, plus the one lagging indicator that matters.\n7. The lean budget: ${budget} allocated line by line, with the rule for what never gets spent pre-revenue.\n8. The quit-or-commit checkpoint at 90 days: the criteria for doubling down vs. shutting down cleanly.\n\nA high-quality plan is launchable by one tired person with {hoursPerWeek} hours a week — if it requires a team or 40-hour weeks, it is the wrong plan.",
    "description": "Creates a realistic side-hustle launch plan sized to your hours, skills, and budget with validation first.",
    "category": "planning",
    "variables": {
      "idea": {
        "label": "Side Hustle Idea",
        "question": "What is the side hustle idea?",
        "type": "text",
        "placeholder": "e.g., Freelance bookkeeping for realtors",
        "required": true
      },
      "hoursPerWeek": {
        "label": "Hours Per Week",
        "question": "How many hours per week can you commit?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "Startup budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 500",
        "required": true
      },
      "launchDate": {
        "label": "Launch Date",
        "question": "Target launch date?",
        "type": "date",
        "required": true
      },
      "skills": {
        "label": "My Skills",
        "question": "What relevant skills do you bring?",
        "type": "textarea",
        "placeholder": "e.g., Bookkeeping, Excel, client communication",
        "required": true
      },
      "targetCustomer": {
        "label": "Target Customer",
        "question": "Who exactly is the target customer?",
        "type": "text",
        "placeholder": "e.g., Solo realtors doing their own books badly",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Product Launch Checklist",
    "displayDescription": "Organizes a product launch into pre-launch, launch week, and post-launch phases with owners, deadlines, messaging checks, and a minute-by-minute launch-day run sheet.",
    "id": "planning-034",
    "prompt": "Act as a launch manager and create a complete product launch checklist for {product}, launching {launchDate}.\n\nCONTEXT: Target audience: {audience}. Launch channels: {channels}. Price / pricing model: {pricing}. The primary launch goal: {launchGoal}.\n\nLAUNCH PRINCIPLES: A launch is three projects: pre-launch (build the audience and the assets), launch week (execute the spike), and post-launch (convert attention into lasting traction). Every task needs an owner and a deadline — ownerless tasks die quietly. Messaging must be locked before assets are built, and pricing must be sanity-checked before it is public. Launch day itself needs a minute-by-minute run sheet because decisions made under adrenaline are bad decisions. Post-launch follow-up is where most launches leave half their value on the table.\n\nWHAT TO DELIVER:\n1. Pre-launch phase tasks: audience building for {audience}, messaging finalization, pricing checks against {pricing}, landing page essentials checklist, asset creation — each with owner and deadline, working back from {launchDate}.\n2. Messaging lock: the one-line value proposition, the 3 proof points, and the objection-handling lines — approved before any asset is built.\n3. Pricing checks: the validation steps for {pricing} (competitor check, margin math, the \"would I pay this\" test).\n4. Landing page essentials: the sections it must have and the conversion elements specific to {launchGoal}.\n5. Launch week phase: the day-by-day plan across {channels}, with owners, times, and the coordination between channels.\n6. Launch-day minute-by-minute run sheet: from morning checks through the announcement moment to evening monitoring — who does what, when, and the rollback plan if something breaks.\n7. Post-launch phase (days 1-14): follow-up sequences, review/request asks, metrics review, and the retrospective template.\n8. Success metrics for {launchGoal}: the targets, how each is tracked, and the decision rule for what happens if the launch underperforms.\n\nA high-quality checklist means launch day feels boring — because every decision was made weeks ago.",
    "description": "Generates a phased product launch checklist with owners, deadlines, messaging lock, and a launch-day run sheet.",
    "category": "planning",
    "variables": {
      "product": {
        "label": "Product",
        "question": "What product are you launching?",
        "type": "text",
        "placeholder": "e.g., Meal-planning app",
        "required": true
      },
      "launchDate": {
        "label": "Launch Date",
        "question": "When is launch day?",
        "type": "date",
        "required": true
      },
      "audience": {
        "label": "Audience",
        "question": "Who is the target audience?",
        "type": "textarea",
        "placeholder": "e.g., Busy parents aged 30-45",
        "required": true
      },
      "channels": {
        "label": "Channels",
        "question": "Which launch channels?",
        "type": "textarea",
        "placeholder": "e.g., Email list, Instagram, Product Hunt",
        "required": true
      },
      "pricing": {
        "label": "Pricing",
        "question": "What is the price or pricing model?",
        "type": "text",
        "placeholder": "e.g., $29/mo, or $149 one-time",
        "required": true
      },
      "launchGoal": {
        "label": "Launch Goal",
        "question": "What is the primary launch goal?",
        "type": "select",
        "options": [
          "Revenue",
          "Signups",
          "Waitlist",
          "Awareness",
          "Feedback"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Content Calendar Builder",
    "displayDescription": "Builds a themed content calendar with topics, formats, and hooks for every slot, promo/value balance, batching, and a repurposing plan.",
    "id": "planning-035",
    "prompt": "Act as a content strategist and build a {weeks}-week content calendar for {platform}.\n\nCONTEXT: Posting cadence: {cadence}. Content themes: {themes}. Target audience: {audience}. I can spend {hoursPerWeek} hours per week on content.\n\nCALENDAR PRINCIPLES: A calendar that survives is built around {cadence} I can sustain with {hoursPerWeek} hours/week — consistency beats bursts. Every slot needs a topic, a format, AND a hook decided in advance; \"post something about X\" is how calendars die. Promotional content must be outnumbered by value content or the audience tunes out. Each piece should work twice through repurposing. Batching production (one filming day, one writing day) is what makes {cadence} possible on {hoursPerWeek} hours.\n\nWHAT TO DELIVER:\n1. The week-by-week calendar table for all {weeks} weeks: every publishing slot with its date, topic (from {themes}), format suited to {platform}, and the specific hook or opening line — written for {audience}, not generic.\n2. The theme rotation: how {themes} cycle across the {weeks} weeks so no theme exhausts or disappears.\n3. The promo/value balance: the ratio, which slots are promotional, and the rule that keeps selling from overwhelming serving.\n4. The repurposing plan: for each major piece, exactly how it becomes a second piece (with the format transformation named).\n5. The production system: batching schedule fitted to {hoursPerWeek} hours/week, the workflow from idea to published, and the content bank for overflow ideas.\n6. CTA rotation: the calls-to-action cycled across the calendar so every post is not asking for the same thing.\n7. The analytics review: the 3 metrics to check biweekly on {platform}, what each one means, and the adjustment rule (what changes when a metric sags).\n8. The sustainability check: total weekly workload vs. {hoursPerWeek} hours — if it does not fit, which slots get cut first.\n\nA high-quality calendar is one I could hand to a future assistant with zero explanation — every slot is a complete brief.",
    "description": "Builds a themed content calendar with topics, hooks, batching, and a repurposing strategy that fits your hours.",
    "category": "planning",
    "variables": {
      "platform": {
        "label": "Platform",
        "question": "Which platform?",
        "type": "select",
        "options": [
          "Instagram",
          "YouTube",
          "TikTok",
          "Newsletter",
          "Blog",
          "Multi-platform"
        ],
        "required": true
      },
      "cadence": {
        "label": "Posting Cadence",
        "question": "How often will you post?",
        "type": "select",
        "options": [
          "Daily",
          "3x per week",
          "Weekly",
          "Biweekly"
        ],
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "How many weeks should the calendar cover?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "themes": {
        "label": "Content Themes",
        "question": "What themes should content cover?",
        "type": "textarea",
        "placeholder": "e.g., Behind the scenes, tutorials, client wins",
        "required": true
      },
      "audience": {
        "label": "Audience",
        "question": "Who is the audience?",
        "type": "text",
        "placeholder": "e.g., Freelancers learning to raise rates",
        "required": true
      },
      "hoursPerWeek": {
        "label": "Hours Per Week",
        "question": "How many hours per week for content?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Semester Plan",
    "displayDescription": "Maps a semester week by week with study blocks, assignment milestones, exam prep windows, flagged risk weeks, and a burnout-prevention rule.",
    "id": "planning-036",
    "prompt": "Act as an academic coach and plan my semester: {term}.\n\nCONTEXT: My courses: {courses}. My goals: {goals}. Key exam and deadline dates: {examDates}. My work schedule: {workSchedule}. My study style: {studyStyle}.\n\nSEMESTER PRINCIPLES: A semester plan works backwards from {examDates} — exam prep starts two weeks out, not two days. Study blocks are course-specific and recurring; \"study\" as a generic block is how courses get neglected unevenly. The three highest-risk weeks (midterms, project deadlines, finals) need to be flagged now with lighter loads around them. {workSchedule} is a hard constraint, not an afterthought. Burnout prevention is a designed rule, not a hope — it must specify what happens and when.\n\nWHAT TO DELIVER:\n1. A week-by-week semester map for {term}: each week with its study blocks per course (from {courses}), fitted around {workSchedule} and matched to {studyStyle}.\n2. Assignment milestones: every major assignment placed with a start date (not just a due date) and broken into 2-3 sub-deadlines.\n3. Exam prep windows: for each date in {examDates}, a two-week prep ramp with what gets covered each week and the review method.\n4. The three highest-risk weeks flagged: what makes each risky, what gets lightened around it, and the pre-planned response.\n5. Buffer weeks: where the slack lives and the rule for spending it.\n6. A burnout-prevention rule: the specific trigger (e.g., two bad nights' sleep, missed blocks two days running) and the exact recovery protocol.\n7. Office hours and help strategy: for each course in {courses}, when to seek help and the \"stuck for 30 minutes\" rule.\n8. A weekly review ritual (20 min): what to check, how to adjust next week's blocks, all serving {goals}.\n\nA high-quality plan makes {goals} the consequence of the weekly structure, not a matter of motivation in week 14.",
    "description": "Creates a week-by-week semester map with study blocks, milestones, and exam preparation windows.",
    "category": "planning",
    "variables": {
      "term": {
        "label": "Term",
        "question": "Which term?",
        "type": "text",
        "placeholder": "e.g., Fall 2026",
        "required": true
      },
      "courses": {
        "label": "Courses",
        "question": "Which courses are you taking?",
        "type": "textarea",
        "placeholder": "e.g., Bio 201, Chem 150, English 101, Stats",
        "required": true
      },
      "goals": {
        "label": "Goals",
        "question": "What are your semester goals?",
        "type": "textarea",
        "placeholder": "e.g., 3.5 GPA, join study group",
        "required": true
      },
      "examDates": {
        "label": "Key Dates",
        "question": "What are the key exam and deadline dates?",
        "type": "textarea",
        "placeholder": "e.g., Midterms Oct 15-19, finals Dec 8-12",
        "required": true
      },
      "workSchedule": {
        "label": "Work Schedule",
        "question": "What is your work schedule alongside school?",
        "type": "text",
        "placeholder": "e.g., Part-time 20 hrs, evenings and weekends",
        "required": true
      },
      "studyStyle": {
        "label": "Study Style",
        "question": "How do you study best?",
        "type": "select",
        "options": [
          "Solo",
          "Study groups",
          "Mixed"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Course Selection Planner",
    "displayDescription": "Recommends a balanced course schedule with prerequisites verified, difficulty spread, electives matched to interests, and backup picks.",
    "id": "planning-037",
    "prompt": "Act as an academic advisor and help me choose courses for {term} as a {major} major.\n\nCONTEXT: Already taken: {takenCourses}. My interests: {interests}. Target credit load: {creditTarget} credits. Schedule constraints: {scheduleConstraints}.\n\nSELECTION PRINCIPLES: A good schedule balances difficulty — never stack the three hardest courses in one term. Prerequisites and sequencing must be verified, not assumed: a course that requires something I have not taken is not an option. Electives should serve {interests} and my {major} trajectory, not just fill credits. {scheduleConstraints} are hard boundaries. Every plan needs backup picks because sections fill and times conflict.\n\nWHAT TO DELIVER:\n1. The recommended schedule for {term}: each course with credits, why it is in this term (sequencing logic against {takenCourses}), and its difficulty rating — summing to {creditTarget} credits and respecting {scheduleConstraints}.\n2. The difficulty spread: the schedule mapped as heavy/medium/light across the week, with the explicit reasoning for why this mix works.\n3. Prerequisite verification: for each course, the prerequisite chain checked against {takenCourses}, flagging any assumption I must confirm with the department.\n4. Two to three elective recommendations aligned with {interests}: each with what it covers, why it fits my {major} path, and who it suits.\n5. Courses to avoid stacking: the specific combinations that would overload the term and why.\n6. Professor and section guidance: what to look for (and the 3 questions to ask upperclassmen), without fabricating specific professor reputations.\n7. Two backup picks with the trigger for using each (if X fills, take Y).\n8. A registration-day action plan: the order to register, what to have ready, and the add/drop week strategy.\n\nA high-quality result is a schedule I could register for tomorrow — verified, balanced, and fitted to my actual life.",
    "description": "Recommends a balanced, prerequisite-aware course schedule matched to your interests and constraints.",
    "category": "planning",
    "variables": {
      "major": {
        "label": "Major",
        "question": "What is your major?",
        "type": "text",
        "placeholder": "e.g., Business Administration",
        "required": true
      },
      "term": {
        "label": "Term",
        "question": "Which term are you selecting for?",
        "type": "text",
        "placeholder": "e.g., Spring 2027",
        "required": true
      },
      "takenCourses": {
        "label": "Courses Taken",
        "question": "Which relevant courses have you completed?",
        "type": "textarea",
        "placeholder": "e.g., ACC 111, ECN 211, MAT 141",
        "required": true
      },
      "interests": {
        "label": "Interests",
        "question": "What are your academic interests?",
        "type": "textarea",
        "placeholder": "e.g., Marketing, data analysis, startups",
        "required": true
      },
      "creditTarget": {
        "label": "Credit Target",
        "question": "How many credits are you targeting?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      },
      "scheduleConstraints": {
        "label": "Schedule Constraints",
        "question": "Any schedule constraints?",
        "type": "textarea",
        "placeholder": "e.g., No classes before 10am, work Tue/Thu afternoons",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Work Week Planner",
    "displayDescription": "Plans a capacity-honest work week that assigns big wins to peak-energy days, batches admin, protects a meeting-free half day, and leaves 20% unscheduled.",
    "id": "planning-038",
    "prompt": "Act as a work-week coach and plan my week of {week} — one I can actually complete.\n\nCONTEXT: The big wins I want: {bigWins}. Meetings already scheduled: {meetings}. Realistic capacity: {capacityHours} hours. My energy pattern: {energyPattern}. Personal commitments outside work: {personalCommitments}.\n\nWEEK PRINCIPLES: Capacity is a budget: {capacityHours} hours is the ceiling, and the plan must fit under it with 20% unscheduled — the unscheduled time is not laziness, it is where the week absorbs reality. Big wins go on peak-energy days ({energyPattern}), never on meeting-heavy days. Small tasks get batched into admin blocks or they fragment the day. One meeting-free half day is protected like a client meeting. {personalCommitments} are real constraints, not interruptions to plan around resentfully.\n\nWHAT TO DELIVER:\n1. A day-by-day plan for the week: each day with its assigned big-win work (from {bigWins}), the scheduled meetings (from {meetings}), admin batches, and hours — totaling under {capacityHours}.\n2. The energy mapping: which days are peak days per {energyPattern}, which big win sits on each, and why.\n3. The protected meeting-free half day: when it is, what it is for, and the script for defending it.\n4. The 20% unscheduled buffer: where it sits in the week and the rule for spending it.\n5. Admin batching: the 2-3 admin blocks, what goes in them, and the triage rule for what does not.\n6. {personalCommitments} placed visibly in the plan so work does not pretend they do not exist.\n7. A daily theme or intention: one line per day that answers \"what is today for?\"\n8. The Friday wrap: 30 minutes to close loops, update the task list, and write Monday's starting point — so the weekend is actually free.\n\nCheck the math: estimated hours vs. {capacityHours}. If {bigWins} do not fit, name what moves to next week and why — do not silently overload the plan.",
    "description": "Designs a capacity-aware work week with big wins scheduled at peak energy and a Friday wrap.",
    "category": "planning",
    "variables": {
      "week": {
        "label": "Week",
        "question": "Which week?",
        "type": "date",
        "required": true
      },
      "bigWins": {
        "label": "Big Wins",
        "question": "What big wins do you want this week?",
        "type": "textarea",
        "placeholder": "e.g., Ship v2, finalize budget, hire designer",
        "required": true
      },
      "meetings": {
        "label": "Meetings",
        "question": "What meetings are already scheduled?",
        "type": "textarea",
        "placeholder": "e.g., Mon 10am 1:1, Wed 2pm all-hands",
        "required": true
      },
      "capacityHours": {
        "label": "Capacity Hours",
        "question": "Realistic focused hours available?",
        "type": "number",
        "placeholder": "e.g., 32",
        "required": true
      },
      "energyPattern": {
        "label": "Energy Pattern",
        "question": "When is your energy highest?",
        "type": "select",
        "options": [
          "Morning peak",
          "Midday peak",
          "Evening peak",
          "Unpredictable"
        ],
        "required": true
      },
      "personalCommitments": {
        "label": "Personal Commitments",
        "question": "What personal commitments shape this week?",
        "type": "textarea",
        "placeholder": "e.g., Kids' soccer Tue/Thu, date night Friday",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Sprint Planner",
    "displayDescription": "Sizes sprint scope to real team capacity with daily targets, done criteria, a mid-sprint check, a retro, and a buffer task list.",
    "id": "planning-039",
    "prompt": "Act as an agile coach and plan a {sprintLength}-day sprint the team can actually finish.\n\nCONTEXT: The sprint goal: {sprintGoal}. The backlog: {backlog}. Team capacity: {capacityHours} hours across {teamSize} people. Known risks: {risks}.\n\nSPRINT PRINCIPLES: A sprint succeeds when its scope fits its capacity — {capacityHours} hours is the budget, and the plan must show the math. The sprint goal ({sprintGoal}) is the contract: everything in scope serves it, everything else waits. \"Done\" needs a definition before the sprint starts, or done-ness gets negotiated at the end. Daily targets make progress visible; a mid-sprint check catches drift while there is still time. The riskiest item goes first, not last. A buffer list turns \"finished early\" from a surprise into an opportunity.\n\nWHAT TO DELIVER:\n1. The capacity math: {capacityHours} hours across {teamSize} people over {sprintLength} days, minus realistic overhead (meetings, support, context switching) — the true build capacity.\n2. The selected scope: which backlog items from {backlog} make the cut, each with an hour estimate, summing within true capacity — and which items explicitly did NOT make it and why.\n3. Daily targets: what should be true at the end of each day, sequenced so dependencies flow and {risks} are confronted early.\n4. The definition of done: the checklist every item must pass (tested, reviewed, documented — adapted to this work).\n5. The riskiest item named: why it is risky given {risks}, what de-risks it, and its early deadline within the sprint.\n6. A mid-sprint check: when, the 3 questions, and the scope-cut rule if the sprint is behind.\n7. The retro: format, the 3 questions, and how its one action item gets into the next sprint.\n8. The buffer task list: 3-5 small, valuable items from {backlog} to pull in only if the sprint finishes early — never as filler that jeopardizes the goal.\n\nA high-quality sprint plan is one the team would bet on: scoped to capacity, honest about {risks}, and ending with {sprintGoal} demonstrably done.",
    "description": "Creates a right-sized sprint plan with daily targets, checkpoints, risk handling, and a retrospective.",
    "category": "planning",
    "variables": {
      "sprintGoal": {
        "label": "Sprint Goal",
        "question": "What is the sprint goal?",
        "type": "text",
        "placeholder": "e.g., Working checkout flow",
        "required": true
      },
      "sprintLength": {
        "label": "Sprint Length",
        "question": "How many days is the sprint?",
        "type": "number",
        "placeholder": "e.g., 14",
        "required": true
      },
      "backlog": {
        "label": "Backlog",
        "question": "What is in the backlog?",
        "type": "textarea",
        "placeholder": "e.g., Payment UI, email receipts, fraud checks",
        "required": true
      },
      "capacityHours": {
        "label": "Capacity Hours",
        "question": "Total team hours available?",
        "type": "number",
        "placeholder": "e.g., 120",
        "required": true
      },
      "teamSize": {
        "label": "Team Size",
        "question": "How many people are on the team?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "risks": {
        "label": "Known Risks",
        "question": "What risks could derail this sprint?",
        "type": "textarea",
        "placeholder": "e.g., API dependency, unclear requirements"
      }
    }
  },
  {
    "displayTitle": "New Job Onboarding Plan",
    "displayDescription": "Builds a 30-day onboarding plan with a relationship map, learning goals, quick wins, and a 30-60-90 outline.",
    "id": "planning-040",
    "prompt": "Act as an onboarding coach and build a 30-day plan for my new role as {role} at {company}, starting {startDate}.\n\nCONTEXT: My manager: {manager}. Work arrangement: {workMode}. What success looks like in this role: {successLooksLike}. My biggest concern about starting: {biggestConcern} — address it directly in the plan.\n\nONBOARDING PRINCIPLES: The first 30 days are about learning and relationships, not output — but they must still produce visible quick wins that build credibility. Every week needs a mix of who to meet, what to learn, and what to deliver. Questions are the new hire's superpower: plan them deliberately. {workMode} changes the tactics (remote needs more intentional relationship building). The 30-60-90 outline gives the 30 days a direction beyond themselves.\n\nWHAT TO DELIVER:\n1. Week-by-week plan (weeks 1-4): each week with who to meet (names/roles from my network map), what to learn, the quick win to target, and the questions to ask — calibrated to {role} at {company}.\n2. A relationship map: the 8-10 people to know in 30 days, what each one cares about, and the specific ask or offer for the first conversation.\n3. A learning plan: the systems, processes, and context to master, in priority order, with how to learn each (shadow, read, do).\n4. Quick wins: 2-3 visible, low-risk wins matched to {successLooksLike} — things that prove competence without overstepping.\n5. A direct answer to {biggestConcern}: the specific actions in the plan that neutralize it.\n6. {workMode}-specific tactics: how to build visibility and relationships in this arrangement.\n7. A week-one checklist: tools, access, introductions, and logistics to secure in the first 5 days.\n8. The 30-60-90 outline: what months 2 and 3 build toward, with the day-90 success picture tied to {successLooksLike}.\n9. A 30-day self-review: the questions to ask {manager} and myself at day 30.\n\nA high-quality plan makes day 30 feel like a confident checkpoint, not a blur — I should know people, understand the game, and have proof I belong.",
    "description": "Generates a structured first-30-days plan with a relationship map, learning goals, and quick wins.",
    "category": "planning",
    "variables": {
      "role": {
        "label": "Role",
        "question": "What is your new role?",
        "type": "text",
        "placeholder": "e.g., Marketing Manager",
        "required": true
      },
      "company": {
        "label": "Company",
        "question": "Which company?",
        "type": "text",
        "placeholder": "e.g., Acme Corp",
        "required": true
      },
      "startDate": {
        "label": "Start Date",
        "question": "When do you start?",
        "type": "date",
        "required": true
      },
      "manager": {
        "label": "Manager",
        "question": "Who is your manager?",
        "type": "text",
        "placeholder": "e.g., Dana Lee",
        "required": true
      },
      "workMode": {
        "label": "Work Mode",
        "question": "What is the work arrangement?",
        "type": "select",
        "options": [
          "In-office",
          "Hybrid",
          "Remote"
        ],
        "required": true
      },
      "successLooksLike": {
        "label": "Success Looks Like",
        "question": "What does success look like in this role?",
        "type": "textarea",
        "placeholder": "e.g., Own the campaign calendar, trusted by sales team",
        "required": true
      },
      "biggestConcern": {
        "label": "Biggest Concern",
        "question": "What is your biggest concern about starting?",
        "type": "textarea",
        "placeholder": "e.g., Learning the product fast enough",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Career Transition Plan",
    "displayDescription": "Maps a month-by-month transition plan that closes skill gaps, builds proof of ability, sets networking targets, and reframes your resume.",
    "id": "planning-041",
    "prompt": "Act as a career transition coach and build a complete plan for moving from {currentRole} to {targetRole} over {timeline}.\n\nCONTEXT: The skill gaps to close: {gaps}. My financial runway: {runway}. My current network strength in the target field: {networkStrength}.\n\nTRANSITION PRINCIPLES: A career change is a project with three workstreams: skills (close {gaps}), proof (evidence I can do {targetRole} work), and relationships (people who open doors). These run in parallel across {timeline}, not in sequence — waiting to network \"until I'm ready\" is the classic mistake. Proof beats credentials: hiring managers believe portfolios and projects, not course certificates alone. {runway} determines how aggressive the plan can be. {networkStrength} determines where the networking workstream starts.\n\nWHAT TO DELIVER:\n1. A skills map: what I already have from {currentRole} that transfers to {targetRole} (with the translation — how to describe it in the new field's language), versus {gaps} that must be closed, each gap with how to close it (course, project, mentorship) and by when.\n2. A month-by-month plan across {timeline}: each month with its learning focus, proof-building milestone, and networking target — sequenced so early months build foundations and later months produce visible proof.\n3. Five ways to gain proof of ability: concrete, specific to the {currentRole}→{targetRole} move (freelance projects, open-source, volunteering, case studies, a portfolio piece) — each with how to start this month.\n4. Networking targets calibrated to {networkStrength}: who to meet, how many conversations per month, the ask for each stage, and the follow-up system.\n5. A financial plan tied to {runway}: the monthly burn, the decision points, and what happens if the timeline extends.\n6. Resume reframing: how to rewrite {currentRole} experience for {targetRole} roles — the headline, the summary, and 3-5 bullet transformations with before/after examples.\n7. Interview narrative: the 2-minute story of why this transition, addressing the employer's unspoken concern.\n8. Milestone checkpoints: the go/no-go questions at the 1/3 and 2/3 marks of {timeline}.\n\nA high-quality plan treats the transition as inevitable given execution — every month has proof, every gap has a closer, and {targetRole} stops feeling like a leap.",
    "description": "Creates a phased career-change roadmap with learning, portfolio, networking, and financial planning.",
    "category": "planning",
    "variables": {
      "currentRole": {
        "label": "Current Role",
        "question": "What is your current role?",
        "type": "text",
        "placeholder": "e.g., Retail associate",
        "required": true
      },
      "targetRole": {
        "label": "Target Role",
        "question": "What role are you moving toward?",
        "type": "text",
        "placeholder": "e.g., UX designer",
        "required": true
      },
      "timeline": {
        "label": "Timeline",
        "question": "Over what timeline?",
        "type": "text",
        "placeholder": "e.g., 9 months",
        "required": true
      },
      "gaps": {
        "label": "Skill Gaps",
        "question": "What skill gaps do you need to close?",
        "type": "textarea",
        "placeholder": "e.g., Figma, user research, portfolio pieces",
        "required": true
      },
      "runway": {
        "label": "Financial Runway",
        "question": "What is your financial runway for this transition?",
        "type": "text",
        "placeholder": "e.g., 6 months of expenses saved, or employed while transitioning",
        "required": true
      },
      "networkStrength": {
        "label": "Network Strength",
        "question": "How strong is your network in the target field?",
        "type": "select",
        "options": [
          "Starting from zero",
          "A few contacts",
          "Decent network",
          "Strong network"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Job Search Plan",
    "displayDescription": "Sets weekly application and outreach targets with a tracking system, follow-up cadence, interview prep blocks, and a weekly tactics review.",
    "id": "planning-042",
    "prompt": "Act as a job search strategist and build a structured, sustainable search plan for a {targetRole} role in {location}.\n\nCONTEXT: I can dedicate {hoursPerDay} hours per day. My network: {network}. My target salary range: {salaryRange}. My resume status: {resumeStatus}.\n\nSEARCH PRINCIPLES: A job search is a sales pipeline: applications are top-of-funnel, networking is the highest-converting channel, and follow-up is where most candidates quit too early. {hoursPerDay} hours/day is the budget — the plan must fit inside it without burnout. Targets must be weekly and specific (\"10 tailored applications\" beats \"apply a lot\"). Tracking is non-negotiable: without it, follow-ups die and effort evaporates. The weekly review is where tactics get adjusted based on data, not feelings. Interview prep is scheduled before interviews exist, so I am ready when they come.\n\nWHAT TO DELIVER:\n1. Weekly targets fitted to {hoursPerDay} hours/day: applications (quality over quantity — define what \"tailored\" means), networking outreach, and follow-ups — with the time split across the week.\n2. Channel strategy for {targetRole} in {location}: where to find roles (boards, recruiters, direct, referrals), ranked by expected return, with {network} activated specifically.\n3. A tracking system: the spreadsheet or tool setup — columns, status stages, and the follow-up dates that auto-surface.\n4. A follow-up cadence: exactly when and how to follow up after applying (day 7, day 14), after networking conversations, and after interviews — with short template language for each.\n5. Resume and materials plan addressing {resumeStatus}: what to fix first, the tailoring system per application (the 20-minute customization routine), and the LinkedIn profile checklist.\n6. Interview prep blocks: scheduled weekly prep covering the 5 most likely questions for {targetRole}, my stories (STAR format), and questions to ask them — plus a salary negotiation prep tied to {salaryRange}.\n7. A weekly review ritual: the 30-minute Friday session — pipeline numbers, what worked, and the one tactic to change next week.\n8. Burnout guardrails: the signs the search is becoming unsustainable at {hoursPerDay} hours/day and the downshift protocol.\n\nA high-quality plan turns the search into a job with a system — I should know exactly what to do each day and be able to show progress in numbers.",
    "description": "Generates a structured job search with targets, tracking, follow-up cadence, and a weekly tactics review.",
    "category": "planning",
    "variables": {
      "targetRole": {
        "label": "Target Role",
        "question": "What role are you targeting?",
        "type": "text",
        "placeholder": "e.g., Data analyst",
        "required": true
      },
      "location": {
        "label": "Location",
        "question": "Where are you searching?",
        "type": "text",
        "placeholder": "e.g., Remote, or Phoenix AZ",
        "required": true
      },
      "hoursPerDay": {
        "label": "Hours Per Day",
        "question": "How many hours per day can you dedicate?",
        "type": "number",
        "placeholder": "e.g., 2",
        "required": true
      },
      "network": {
        "label": "Network",
        "question": "Who is in your network that could help?",
        "type": "textarea",
        "placeholder": "e.g., Former manager, alumni group, LinkedIn contacts"
      },
      "salaryRange": {
        "label": "Salary Range",
        "question": "What is your target salary range?",
        "type": "text",
        "placeholder": "e.g., $70-85k",
        "required": true
      },
      "resumeStatus": {
        "label": "Resume Status",
        "question": "What is the state of your resume?",
        "type": "select",
        "options": [
          "Needs a full rewrite",
          "Needs tailoring/polish",
          "Ready to send"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Habit Builder",
    "displayDescription": "Designs a habit plan starting from a 2-minute version, with clear done-criteria, obstacle planning, a never-miss-twice rule, and a 30-day review.",
    "id": "planning-043",
    "prompt": "Act as a behavioral design coach and build a habit plan for: {habit}.\n\nCONTEXT: My trigger cue will be {cue}. Frequency: {frequency}. I will track it with {trackMethod}. Why this habit matters to me: {whyMatters}. My past attempts at this: {pastAttempts} — the plan must learn from these, not repeat them.\n\nHABIT PRINCIPLES: Habits form from tiny, consistent repetitions attached to existing cues — so we start with a 2-minute version of {habit} that is embarrassingly easy, because consistency beats intensity in the first month. {cue} must be specific and reliable; vague cues produce vague habits. Obstacles are predictable, so we plan for the three most likely ones now. {pastAttempts} contains the data on what broke before — name the pattern and design around it. The never-miss-twice rule protects the streak from becoming a collapse. {whyMatters} is the fuel for hard days; the plan should surface it.\n\nWHAT TO DELIVER:\n1. The 2-minute starter version of {habit}: exactly what I do, triggered by {cue}, with the precise done-criteria (what counts as \"done\" on day one).\n2. The escalation path: how the habit grows from 2 minutes to the full version over 4 weeks — what increases, when, and the rule for when to hold steady instead of growing.\n3. The cue design: how to make {cue} unmissable (environment setup, reminders) and the backup cue for days the primary cue does not happen.\n4. Obstacle planning: the three most likely obstacles (informed by {pastAttempts}), each with an if-then plan written as \"If [obstacle], then I will [specific action].\"\n5. The tracking setup for {trackMethod}: exactly what gets marked, when, and the weekly 2-minute review.\n6. The never-miss-twice rule: what happens after one miss (the recovery protocol) and what is forbidden after two.\n7. A celebration ritual: the immediate reward after each repetition that wires the habit in.\n8. The 30-day review: the 5 questions to ask, the criteria for graduating to the full habit vs. extending the starter phase, and how {whyMatters} gets revisited.\n\nA high-quality plan makes the first week feel almost too easy — because the failure mode of {pastAttempts} was almost certainly starting too big.",
    "description": "Builds a habit-formation plan with a 2-minute start, obstacle planning, and tracking.",
    "category": "planning",
    "variables": {
      "habit": {
        "label": "Habit",
        "question": "What habit do you want to build?",
        "type": "text",
        "placeholder": "e.g., Read 20 pages daily",
        "required": true
      },
      "cue": {
        "label": "Trigger Cue",
        "question": "What existing cue will trigger it?",
        "type": "text",
        "placeholder": "e.g., After morning coffee",
        "required": true
      },
      "frequency": {
        "label": "Frequency",
        "question": "How often?",
        "type": "select",
        "options": [
          "Daily",
          "Weekdays",
          "Weekly"
        ],
        "required": true
      },
      "trackMethod": {
        "label": "Tracking Method",
        "question": "How will you track it?",
        "type": "select",
        "options": [
          "Paper tracker",
          "Phone app",
          "Calendar marks",
          "Spreadsheet"
        ],
        "required": true
      },
      "whyMatters": {
        "label": "Why It Matters",
        "question": "Why does this habit matter to you?",
        "type": "textarea",
        "placeholder": "e.g., I want to feel sharp and keep learning",
        "required": true
      },
      "pastAttempts": {
        "label": "Past Attempts",
        "question": "What happened with past attempts at this habit?",
        "type": "textarea",
        "placeholder": "e.g., Started strong for a week, then travel broke it"
      }
    }
  },
  {
    "displayTitle": "Habit Stacking Plan",
    "displayDescription": "Chains new habits onto an existing anchor habit in a sequenced routine, with cues per link, a time cap, and an if-then plan for skipped days.",
    "id": "planning-044",
    "prompt": "Act as a habit architect and build a habit stack anchored to my existing habit: {anchorHabit}.\n\nCONTEXT: New habits to stack: {newHabits}. Best time of day: {timeOfDay}. This happens at: {location}. Total time available: {maxMinutes} minutes max.\n\nSTACKING PRINCIPLES: Habit stacking works because {anchorHabit} is already automatic — the new habits borrow its momentum. Order matters: sequence the stack so each habit's completion naturally cues the next, with the easiest habit first to guarantee a win. The whole stack must fit in {maxMinutes} minutes or it will be skipped on busy days. The stack's weak point is the anchor: if {anchorHabit} gets skipped, the whole chain collapses unless there is a backup trigger.\n\nWHAT TO DELIVER:\n1. The sequenced stack as a numbered routine: each habit from {newHabits} in order, with its duration, its specific cue (\"after I finish [previous habit], I will...\"), and the environmental setup at {location} that makes it frictionless.\n2. The sequencing logic: why this order — which transitions are natural, which habit is the momentum starter, and which is the anchor closer.\n3. The time budget: each habit's minutes summing to under {maxMinutes}, with what to trim first on rushed days.\n4. The if-then skip plan: if {anchorHabit} gets skipped, the backup trigger and the minimum viable version of the stack (the 2 habits to keep no matter what).\n5. The first-week ramp: days 1-3 run only the anchor + first new habit, adding one habit every two days — the full stack is earned, not attempted on day one.\n6. A two-week check: the 3 questions that reveal whether the stack is sticking, and the rule for swapping a habit that is not working.\n7. The long-term rule: when and how to add to the stack vs. when to declare it complete.\n\nA high-quality stack feels like one smooth motion at {location}, not five separate chores — the cues should chain so tightly that starting the anchor starts everything.",
    "description": "Chains new habits onto an anchor habit with cues, a time cap, and a skip-day backup plan.",
    "category": "planning",
    "variables": {
      "anchorHabit": {
        "label": "Anchor Habit",
        "question": "What existing habit will anchor the stack?",
        "type": "text",
        "placeholder": "e.g., Brushing teeth",
        "required": true
      },
      "newHabits": {
        "label": "New Habits",
        "question": "Which new habits should be stacked?",
        "type": "textarea",
        "placeholder": "e.g., Floss, 10 squats, gratitude note",
        "required": true
      },
      "timeOfDay": {
        "label": "Time of Day",
        "question": "When does the anchor habit happen?",
        "type": "select",
        "options": [
          "Morning",
          "Midday",
          "Evening",
          "Night"
        ],
        "required": true
      },
      "location": {
        "label": "Location",
        "question": "Where does this routine happen?",
        "type": "text",
        "placeholder": "e.g., Bathroom and bedroom",
        "required": true
      },
      "maxMinutes": {
        "label": "Max Minutes",
        "question": "Maximum total minutes for the stack?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Routine Optimizer",
    "displayDescription": "Diagnoses friction in a current routine, prescribes specific fixes, and designs a measurable 7-day experiment to test the new version.",
    "id": "planning-045",
    "prompt": "Act as a routine diagnostician and optimize my current routine.\n\nCONTEXT: My current routine: {routine}. The friction points: {friction}. The goal: {goal}. What is already working: {whatWorks} — protect this. My constraints: {constraints}.\n\nOPTIMIZATION PRINCIPLES: Optimize, do not rebuild — {whatWorks} stays untouched, and changes are surgical. Friction has causes: diagnose whether each point in {friction} is a sequencing problem, a friction-of-effort problem, a motivation problem, or an environment problem, because each needs a different fix. Every fix must be testable: the 7-day experiment proves what works before I commit. {constraints} are design boundaries, not complaints — the new routine must fit inside them.\n\nWHAT TO DELIVER:\n1. The diagnosis: the three biggest leaks in {routine}, each named with its root cause (sequencing / effort / motivation / environment) and the evidence from {friction}.\n2. The fix menu: for each leak, the specific fix — reorder, remove, automate, shrink, or re-cue the step — with exactly how to implement it inside {constraints}.\n3. The redesigned routine: the full new sequence incorporating the fixes while preserving {whatWorks}, with timings.\n4. The 7-day experiment: what I am testing, the start date, and the daily 1-minute log (what to record).\n5. What to measure: the 2-3 metrics that prove the new version works toward {goal} — defined precisely (not \"feel better\" but \"workouts completed,\" \"minutes saved,\" \"skipped days\").\n6. The decision rule at day 7: the criteria for adopting the new routine, tweaking it, or reverting — with the threshold numbers.\n7. The anti-regression guard: the one check that keeps the old friction from creeping back in month two.\n\nA high-quality result treats my routine like a system to debug, not a moral failing — the tone is curious and the fixes are concrete.",
    "description": "Audits an existing routine for friction and designs a measurable 7-day improvement test.",
    "category": "planning",
    "variables": {
      "routine": {
        "label": "Current Routine",
        "question": "Describe your current routine.",
        "type": "textarea",
        "placeholder": "e.g., Gym after work: change, drive, workout, shower",
        "required": true
      },
      "friction": {
        "label": "Friction Points",
        "question": "Where does it break down?",
        "type": "textarea",
        "placeholder": "e.g., Too tired after work, gym too far",
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What should the optimized routine achieve?",
        "type": "text",
        "placeholder": "e.g., Work out 4x/week consistently",
        "required": true
      },
      "whatWorks": {
        "label": "What's Working",
        "question": "What parts of the routine already work?",
        "type": "textarea",
        "placeholder": "e.g., The workout itself is great once I'm there",
        "required": true
      },
      "constraints": {
        "label": "Constraints",
        "question": "What constraints must the new routine fit?",
        "type": "textarea",
        "placeholder": "e.g., Gym closes at 9pm, kids' bedtime at 8",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Recurring Tasks System",
    "displayDescription": "Builds the simplest possible system for never dropping recurring tasks: frequencies, triggers, owners, a weekly reset, and a slip-catcher.",
    "id": "planning-046",
    "prompt": "Act as a systems designer and build the simplest possible recurring tasks system for me.\n\nCONTEXT: The tasks: {tasks}. Cadence notes: {cadence}. I want to manage it with {tool}. These tasks are shared with: {sharedWith}. My weekly reset day: {resetDay}.\n\nSYSTEM PRINCIPLES: The best system is the simplest one I will actually maintain — complexity is the enemy, so every task gets exactly one home in {tool}. Each task needs a frequency, a trigger (the cue that says \"now\"), and an owner — shared tasks without owners belong to no one. The weekly reset on {resetDay} is the system's heartbeat: it catches what slipped and queues the coming week. A slip-catcher (not guilt) handles misses: the system must answer \"what happens when I miss one\" gracefully.\n\nWHAT TO DELIVER:\n1. Every task from {tasks} assigned: frequency (daily / weekly / monthly / quarterly / yearly), the specific trigger, and the owner (from {sharedWith} or me) — presented as a clean table.\n2. The {tool} setup: exactly how to configure it (lists, recurring entries, reminders) so the system runs with minimal weekly effort — include the setup steps, not just the concept.\n3. The weekly reset ritual for {resetDay}: the 15-minute agenda — review what slipped, confirm next week's recurring items, and the reset checklist.\n4. The slip-catcher: for each frequency tier, what happens on a miss (the grace rule, the catch-up rule, and when a miss becomes a system problem).\n5. The annual and quarterly tasks: pulled out into a separate \"rare but critical\" list with their lead-time reminders, since these are the ones that actually get forgotten.\n6. The simplicity test: the one-page summary of the whole system, and the rule for adding a new recurring task without bloating it.\n\nA high-quality system is invisible when it works: tasks surface exactly when needed, {sharedWith} knows their part, and nothing important ever relies on memory.",
    "description": "Organizes recurring tasks by frequency with triggers, owners, and a weekly reset ritual.",
    "category": "planning",
    "variables": {
      "tasks": {
        "label": "Tasks",
        "question": "Which recurring tasks need a system?",
        "type": "textarea",
        "placeholder": "e.g., Water plants, change air filter, file taxes",
        "required": true
      },
      "cadence": {
        "label": "Cadence Notes",
        "question": "Any cadence notes or constraints?",
        "type": "text",
        "placeholder": "e.g., Filter every 3 months, plants weekly"
      },
      "tool": {
        "label": "Tool",
        "question": "What tool do you want to use?",
        "type": "select",
        "options": [
          "Paper list",
          "Phone reminders",
          "Calendar events",
          "Task app"
        ],
        "required": true
      },
      "sharedWith": {
        "label": "Shared With",
        "question": "Who shares these tasks with you?",
        "type": "text",
        "placeholder": "e.g., Just me, or me and my partner",
        "required": true
      },
      "resetDay": {
        "label": "Reset Day",
        "question": "Which day is your weekly reset?",
        "type": "select",
        "options": [
          "Sunday",
          "Monday",
          "Friday",
          "Saturday"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Bill Payment Schedule",
    "displayDescription": "Organizes bills around paydays so cash flow never goes negative, with reminder triggers, automation picks, and a monthly reconciliation ritual.",
    "id": "planning-047",
    "prompt": "Act as a cash-flow planner and build a bill payment schedule that keeps me safe.\n\nCONTEXT: My bills: {bills}. My paydays: {paydays}. My preferred approach: {method}. I want to keep a minimum checking balance of ${safetyBuffer}. My approximate monthly income: ${monthlyIncome}.\n\nSCHEDULING PRINCIPLES: Bills get scheduled relative to {paydays}, not just by due date — the question is always \"which paycheck covers this?\" Cash flow must never go negative: map the balance across the month and prove it stays above ${safetyBuffer}. {method} determines the automation strategy, but even \"manual control\" needs reminder triggers. Annual and irregular bills are the ambush — they need a sinking-fund line, not surprise. The monthly reconciliation ritual is what keeps the schedule honest over time.\n\nWHAT TO DELIVER:\n1. A calendar-style schedule: every bill from {bills} placed on its pay date, grouped by which paycheck from {paydays} covers it, with amounts.\n2. The cash-flow proof: the running balance across the month showing it never dips below ${safetyBuffer} — and if it would, the exact adjustment (which bill moves, which paycheck covers it).\n3. Reminder triggers: for each bill, when the reminder fires and through what channel, fitted to {method}.\n4. Automation recommendations: which bills to automate first, in what order, and why — respecting {method} (if manual control, which bills stay manual and why).\n5. The annual/irregular bill plan: the sinking-fund monthly set-aside so irregular bills never ambush the checking account.\n6. A monthly 10-minute reconciliation ritual: the checklist — verify autopays ran, confirm balances, adjust next month.\n7. The emergency protocol: if a paycheck is late or short, which bills get paid first (the priority order) and who to call.\n\nA high-quality schedule is one I could stop thinking about: every bill has a paycheck, every paycheck has a plan, and ${safetyBuffer} is never threatened.",
    "description": "Creates a payday-aligned bill schedule with cash-flow proof, automation picks, and reminders.",
    "category": "planning",
    "variables": {
      "bills": {
        "label": "Bills",
        "question": "List your bills with amounts and due dates.",
        "type": "textarea",
        "placeholder": "e.g., Rent $1400 due 1st, electric ~$90 due 15th",
        "required": true
      },
      "paydays": {
        "label": "Paydays",
        "question": "When do you get paid?",
        "type": "text",
        "placeholder": "e.g., 1st and 15th",
        "required": true
      },
      "method": {
        "label": "Payment Method",
        "question": "Preferred payment approach?",
        "type": "select",
        "options": [
          "Autopay everything",
          "Manual control",
          "Mixed approach"
        ],
        "required": true
      },
      "safetyBuffer": {
        "label": "Safety Buffer",
        "question": "Minimum checking balance to keep, in dollars?",
        "type": "number",
        "placeholder": "e.g., 500",
        "required": true
      },
      "monthlyIncome": {
        "label": "Monthly Income",
        "question": "Approximate monthly take-home income in dollars?",
        "type": "number",
        "placeholder": "e.g., 5200",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Savings Goal Plan",
    "displayDescription": "Calculates the monthly and per-paycheck amounts needed to hit a savings target, with spending cuts, automation setup, and withdrawal rules.",
    "id": "planning-048",
    "prompt": "Act as a savings strategist and build a plan to reach ${amount} for {goal} by {deadline}.\n\nCONTEXT: Currently saved: ${currentSaved}. My monthly take-home income: ${monthlyIncome}. Spending I could cut or redirect: {cutCandidates}.\n\nSAVINGS PRINCIPLES: The math comes first: (${amount} − ${currentSaved}) ÷ months remaining = the required monthly amount — show it, then the per-paycheck figure. If the required amount exceeds what {monthlyIncome} allows after essentials, say so and present the real options: extend {deadline}, increase income, or cut deeper into {cutCandidates}. Automation beats willpower: the money must move on payday before I see it. Dipping in needs rules written in advance, or every month has an \"emergency.\" Windfalls need a pre-decided rule too.\n\nWHAT TO DELIVER:\n1. The math, shown clearly: target ${amount}, minus ${currentSaved} saved, divided by the months until {deadline} = monthly amount, then the per-paycheck amount.\n2. The feasibility verdict: does the required amount fit {monthlyIncome}? If yes, the plan. If no, the three levers (time, income, spending) with the specific trade-off for {goal}.\n3. Spending cuts from {cutCandidates}: ranked by dollars freed vs. pain caused, with the exact monthly savings each produces.\n4. The account setup: where to keep the savings (separate from checking — the psychology matters), and the automation: amount, timing relative to payday, and how to set it up.\n5. Rules for dipping in: the 3 situations that allow a withdrawal, the approval process (even if it is just me — the 48-hour rule), and what happens after a dip.\n6. The windfall rule: what percentage of unexpected money goes to {goal} automatically.\n7. A quarterly progress check: the 15-minute review — on track / behind / ahead, and the adjustment for each case.\n8. The finish line: what happens at ${amount} — the transfer, the celebration, and what the freed monthly amount does next.\n\nA high-quality plan makes {goal} feel like a scheduled event, not a wish — the money moves automatically and the rules hold on weak days.",
    "description": "Computes a savings trajectory with feasibility check, automation setup, and rules for withdrawals.",
    "category": "planning",
    "variables": {
      "goal": {
        "label": "Savings Goal",
        "question": "What are you saving for?",
        "type": "text",
        "placeholder": "e.g., Down payment, emergency buffer",
        "required": true
      },
      "amount": {
        "label": "Target Amount",
        "question": "What is the target amount in dollars?",
        "type": "number",
        "placeholder": "e.g., 10000",
        "required": true
      },
      "deadline": {
        "label": "Deadline",
        "question": "By when?",
        "type": "date",
        "required": true
      },
      "currentSaved": {
        "label": "Currently Saved",
        "question": "How much is saved already?",
        "type": "number",
        "placeholder": "e.g., 2000",
        "required": true
      },
      "monthlyIncome": {
        "label": "Monthly Income",
        "question": "Monthly take-home income in dollars?",
        "type": "number",
        "placeholder": "e.g., 5200",
        "required": true
      },
      "cutCandidates": {
        "label": "Spending to Cut",
        "question": "What spending could you cut or redirect?",
        "type": "textarea",
        "placeholder": "e.g., Dining out $200/mo, unused subscriptions",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Debt Payoff Plan",
    "displayDescription": "Builds a month-by-month payoff schedule using your avalanche or snowball strategy, with interest totals, debt-free date, and anti-debt guardrails.",
    "id": "planning-049",
    "prompt": "Act as a debt strategist and build a complete payoff plan.\n\nCONTEXT: My debts: {debts} (list with balances, rates, and minimums). Extra available beyond minimums: ${extraPayment}/month. Strategy: {strategy}. My monthly income: ${monthlyIncome}. Emergency savings status: {emergencyBuffer}.\n\nPAYOFF PRINCIPLES: The math is straightforward but the psychology matters: {strategy} determines the order, and I must commit to it — switching strategies mid-plan is how payoff plans die. Every extra dollar goes to the current target debt; minimums hold the others. When a debt clears, its entire payment (minimum + extra) rolls to the next target — this is the acceleration engine, and the plan must show it working. {emergencyBuffer} matters: with no buffer, every surprise becomes new debt, so the plan addresses it. Guardrails prevent the payoff from being undone by new borrowing.\n\nWHAT TO DELIVER:\n1. The payoff order per {strategy}: each debt from {debts} ranked with the reasoning, the total interest to be paid, and the debt-free date — math shown.\n2. The month-by-month payoff schedule: each month's payment per debt, running balances, and the month each debt clears — fitted to ${extraPayment}/month extra on top of minimums.\n3. The rollover moments: what happens the month after each debt clears — exactly where that freed payment goes, with the acceleration visible in the numbers.\n4. The {emergencyBuffer} question: if no buffer exists, the plan for building a small one ($500-1000) before or alongside the payoff, so surprises do not become new debt.\n5. Motivation milestones: the 3-4 moments to celebrate (first debt cleared, halfway, under $X remaining) — scheduled, not vague.\n6. Anti-debt guardrails: the concrete rules that prevent new debt during the payoff (card usage rules, the 48-hour purchase rule, what counts as a true emergency).\n7. The acceleration options: what an extra $100/month or a windfall does to the debt-free date — the numbers that make extra effort tangible.\n8. Life-after-debt: what the freed monthly payment becomes the month after the last debt clears.\n\nCheck against {monthlyIncome}: if ${extraPayment} is unrealistic, say so and rebuild the plan at a sustainable number rather than producing a fantasy schedule.",
    "description": "Generates a debt payoff order, interest totals, and debt-free date with rollover acceleration and guardrails.",
    "category": "planning",
    "variables": {
      "debts": {
        "label": "Debts",
        "question": "List debts with balances, rates, and minimums.",
        "type": "textarea",
        "placeholder": "e.g., Card A $3200 at 24% min $65; car $8000 at 7%",
        "required": true
      },
      "extraPayment": {
        "label": "Extra Payment",
        "question": "Extra dollars per month beyond minimums?",
        "type": "number",
        "placeholder": "e.g., 200",
        "required": true
      },
      "strategy": {
        "label": "Strategy",
        "question": "Which payoff strategy?",
        "type": "select",
        "options": [
          "Avalanche (highest rate first)",
          "Snowball (smallest first)",
          "Highest payment first"
        ],
        "required": true
      },
      "monthlyIncome": {
        "label": "Monthly Income",
        "question": "Monthly take-home income in dollars?",
        "type": "number",
        "placeholder": "e.g., 5200",
        "required": true
      },
      "emergencyBuffer": {
        "label": "Emergency Buffer",
        "question": "Do you have any emergency savings right now?",
        "type": "select",
        "options": [
          "None",
          "Under $1000",
          "$1000 or more"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Emergency Fund Plan",
    "displayDescription": "Sizes your emergency fund target with tiered coverage, sets contribution math, parking guidance, strict usage rules, and a replenishment protocol.",
    "id": "planning-050",
    "prompt": "Act as a financial safety planner and design my emergency fund.\n\nCONTEXT: Monthly essential expenses: ${monthlyExpenses}. Target coverage: {months} months. Currently saved: ${currentSaved}. Build timeframe: {timeframe}. My income stability: {incomeStability}. Dependents relying on me: {dependents}.\n\nFUND PRINCIPLES: The target is math: ${monthlyExpenses} × {months} = the number — show it. {incomeStability} and {dependents} should pressure-test whether {months} months is actually enough; say so honestly if it is thin. The fund lives somewhere separate, liquid, and boring — never invested, never in checking. \"Emergency\" needs a written definition made in calm times, because stressed times redefine everything. Replenishment is part of the plan from day one: a used fund that is never rebuilt is a one-time fund.\n\nWHAT TO DELIVER:\n1. The target math: ${monthlyExpenses} × {months} months = target, minus ${currentSaved} = remaining, divided across {timeframe} = monthly contribution — all shown.\n2. The adequacy check: given {incomeStability} and {dependents} dependents, is {months} months the right target? Recommend adjusting up or down with reasoning.\n3. The tier approach: tier 1 (one month, instantly accessible) vs. the full fund — how to build in stages so I get protected fast.\n4. Where to park it: the account type criteria (liquid, separate, modest yield), and the automation: amount and payday timing.\n5. The emergency definition: the explicit list of what counts (job loss, medical emergency, essential repair) and what does NOT count (sales, vacations, \"opportunities\") — written to be read in a moment of temptation.\n6. The withdrawal protocol: the steps before touching it (the 48-hour rule, the alternatives checklist), and how much to take (minimum necessary).\n7. The replenishment rule: after any withdrawal, the automatic contribution that rebuilds it, with the timeline.\n8. The milestone plan across {timeframe}: the celebration points ($1k, one month covered, halfway, full) that keep a long build motivating.\n9. The annual review: when to resize the target as ${monthlyExpenses} changes.\n\nA high-quality plan makes the fund feel like insurance I am glad to have, not money sitting idle — the definition and rules do that work.",
    "description": "Defines an emergency fund target with tiered coverage, contribution math, and strict usage rules.",
    "category": "planning",
    "variables": {
      "monthlyExpenses": {
        "label": "Monthly Expenses",
        "question": "Essential monthly expenses in dollars?",
        "type": "number",
        "placeholder": "e.g., 3200",
        "required": true
      },
      "months": {
        "label": "Months of Coverage",
        "question": "How many months of coverage?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "currentSaved": {
        "label": "Currently Saved",
        "question": "How much is saved already?",
        "type": "number",
        "placeholder": "e.g., 1500",
        "required": true
      },
      "timeframe": {
        "label": "Timeframe",
        "question": "Over what timeframe will you build it?",
        "type": "text",
        "placeholder": "e.g., 12 months",
        "required": true
      },
      "incomeStability": {
        "label": "Income Stability",
        "question": "How stable is your income?",
        "type": "select",
        "options": [
          "Stable salary",
          "Variable",
          "Uncertain"
        ],
        "required": true
      },
      "dependents": {
        "label": "Dependents",
        "question": "How many dependents rely on your income?",
        "type": "number",
        "placeholder": "e.g., 0",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Contingency & Backup Plan",
    "displayDescription": "Creates an action-ready playbook with early warning signs, switch triggers, step-by-step activation, and backups ranked by speed versus cost.",
    "id": "planning-051",
    "prompt": "Act as a contingency planner and build an action-ready playbook for the risks I am planning for.\n\nCONTEXT: The risks: {risks}. Impact level if they hit: {impact}. My backup options: {alternatives}. Key contacts in a crisis: {keyContacts}. How fast I must be able to react: {responseTime}. I will review this playbook {reviewFrequency}.\n\nPLAYBOOK PRINCIPLES: A contingency plan is worthless if it cannot be executed under stress — so every risk gets warning signs (how I know it is coming), a trigger point (the exact line that means \"switch to backup now\"), and activation steps simple enough to follow while stressed. Triggers must be observable facts, not feelings (\"supplier misses second deadline,\" not \"things feel shaky\"). Backups get ranked by speed versus cost because {impact} impact means the trade-off matters. The playbook needs a review rhythm ({reviewFrequency}) or it goes stale.\n\nWHAT TO DELIVER — for each risk in {risks}:\n1. Early warning signs: 2-4 observable signals, ordered from earliest to latest, with what to monitor and how often.\n2. The trigger point: the specific, measurable line that activates the backup — written so there is no debate in the moment about whether it has been crossed.\n3. Step-by-step activation instructions: numbered, concrete, starting with the first phone call or action — including who from {keyContacts} does what, fitted to {responseTime}.\n4. The matched backup from {alternatives}: why this backup fits this risk, what it costs, and how fast it activates.\n\nTHEN:\n5. The speed-vs-cost ranking: all backups in a table scored on activation speed and cost, with the recommended default for each risk given {impact}.\n6. The preparation checklist: what to set up NOW (before anything happens) so activation is fast — contacts saved, accounts created, supplies staged.\n7. The {reviewFrequency} review ritual: what to update, what to test, and the drill to run (a tabletop walkthrough of the highest-impact risk).\n8. The communication plan: who gets told what, when, during an activation — because silence during a crisis is its own risk.\n\nA high-quality playbook is one I could hand to {keyContacts} during an actual emergency and have them execute without calling me for clarification.",
    "description": "Builds a risk playbook with early warnings, switch triggers, activation steps, and a review rhythm.",
    "category": "planning",
    "variables": {
      "risks": {
        "label": "Risks",
        "question": "What risks are you planning for?",
        "type": "textarea",
        "placeholder": "e.g., Job loss, car breakdown, supplier delay",
        "required": true
      },
      "impact": {
        "label": "Impact Level",
        "question": "How severe would the impact be?",
        "type": "select",
        "options": [
          "Minor",
          "Moderate",
          "Major",
          "Critical"
        ],
        "required": true
      },
      "alternatives": {
        "label": "Backup Options",
        "question": "What backup options do you have?",
        "type": "textarea",
        "placeholder": "e.g., Freelance work, backup supplier, savings",
        "required": true
      },
      "keyContacts": {
        "label": "Key Contacts",
        "question": "Who are the key contacts in a crisis?",
        "type": "textarea",
        "placeholder": "e.g., Spouse, backup supplier contact, insurance agent",
        "required": true
      },
      "responseTime": {
        "label": "Response Time",
        "question": "How fast must you be able to react?",
        "type": "select",
        "options": [
          "Within hours",
          "Within a day",
          "Within a week"
        ],
        "required": true
      },
      "reviewFrequency": {
        "label": "Review Frequency",
        "question": "How often will you review this playbook?",
        "type": "select",
        "options": [
          "Monthly",
          "Quarterly",
          "Twice a year"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Risk Register Builder",
    "displayDescription": "Builds a scored risk register with likelihood/impact scoring, owners, mitigations, contingency triggers, and a review cadence.",
    "id": "planning-052",
    "prompt": "Act as a risk manager and build a proper risk register for {project}.\n\nCONTEXT: Known risks: {risks}. My risk tolerance: {tolerance}. Key deadline: {deadline}. The register will be reviewed {reviewCadence}.\n\nREGISTER PRINCIPLES: A risk register turns vague worry into managed items. Each risk gets scored on likelihood (1-5) and impact (1-5) with the scales defined first — otherwise scores are theater. Exposure = likelihood × impact, and the register sorts by exposure so attention goes where it belongs. Every risk gets ONE owner (never a committee) and TWO responses: a mitigation (reduce the chance or the damage, done now) and a contingency trigger (the line that activates the backup plan). {tolerance} sets the bar for which risks demand action this week versus which get watched.\n\nWHAT TO DELIVER:\n1. The scoring scales: what likelihood 1-5 and impact 1-5 mean for {project} specifically, calibrated to {tolerance}.\n2. The register table: each risk from {risks} with likelihood, impact, exposure score, owner, mitigation action (with deadline), and contingency trigger — sorted by exposure, highest first.\n3. Risk discovery: 3-5 additional risks I have not named but should consider for this kind of project, scored and added to the register.\n4. The top 3 by exposure: expanded treatment — why they top the list given {tolerance}, the mitigation in detail, and what \"action this week\" concretely means.\n5. The watch list: lower-exposure risks with their monitoring frequency and the signal that would promote them.\n6. The {reviewCadence} review ritual: who attends, the 20-minute agenda, and how scores get updated as {deadline} approaches.\n7. The escalation rule: when a risk's exposure crosses the {tolerance} threshold mid-project, who decides the response and how fast.\n\nA high-quality register is a living document: scored honestly, owned clearly, and reviewed on {reviewCadence} without fail until {deadline}.",
    "description": "Scores project risks by exposure and assigns owners with mitigations and contingency triggers.",
    "category": "planning",
    "variables": {
      "project": {
        "label": "Project",
        "question": "What is the project?",
        "type": "text",
        "placeholder": "e.g., Outdoor festival",
        "required": true
      },
      "risks": {
        "label": "Known Risks",
        "question": "What risks do you already see?",
        "type": "textarea",
        "placeholder": "e.g., Rain, vendor no-show, low turnout",
        "required": true
      },
      "tolerance": {
        "label": "Risk Tolerance",
        "question": "What is your risk tolerance?",
        "type": "select",
        "options": [
          "Low",
          "Medium",
          "High"
        ],
        "required": true
      },
      "deadline": {
        "label": "Key Deadline",
        "question": "What is the key deadline this register protects?",
        "type": "date",
        "required": true
      },
      "reviewCadence": {
        "label": "Review Cadence",
        "question": "How often will the register be reviewed?",
        "type": "select",
        "options": [
          "Weekly",
          "Biweekly",
          "Monthly"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Decision Matrix",
    "displayDescription": "Scores your options against weighted criteria with the math shown, stress-tests the winner, and ends with a clear recommendation.",
    "id": "planning-053",
    "prompt": "Act as a decision analyst and build a rigorous decision matrix for: {decision}.\n\nCONTEXT: My options: {options}. The criteria that matter: {criteria}. Dealbreakers (any option with these is out): {dealbreakers}. I must decide by {decisionDeadline}.\n\nMATRIX PRINCIPLES: A matrix earns trust through transparency: define the 1-5 scale for each criterion in {criteria} before scoring, show every number and the weighting math, and let {dealbreakers} eliminate options before they pollute the scoring. Weights reflect what I actually value — and the matrix must be stress-tested, because a recommendation that collapses when one weight shifts is not a recommendation. The output ends in a decision, not a tie: name the winner, show why, and record it.\n\nWHAT TO DELIVER:\n1. The dealbreaker filter: apply {dealbreakers} to {options} first — any option eliminated, with the reason stated plainly.\n2. The scoring rubric: each criterion in {criteria} defined, with what 1, 3, and 5 mean for {decision} specifically.\n3. The weights: each criterion weighted by importance, with the reasoning for the weighting (one line each) — and an invitation to adjust them.\n4. The full matrix table: surviving options scored 1-5 per criterion, weights applied, totals calculated — all arithmetic visible.\n5. The winner, named, with the margin of victory and which criteria decided it.\n6. The stress test: what would have to change (which weight, which score) for the runner-up to win — the sensitivity analysis that proves the recommendation is robust or reveals it is fragile.\n7. The gut check: the one-paragraph \"does this feel right?\" test — if the matrix winner feels wrong, the framework for figuring out which hidden criterion or weight is missing.\n8. The decision log entry: the decision, the date ({decisionDeadline}), the top 3 reasons, and what would cause me to revisit it.\n\nA high-quality matrix is one I could defend to anyone affected by {decision} — the math is open, the values are explicit, and the recommendation is clear.",
    "description": "Ranks decision options with weighted scoring, a dealbreaker filter, and a stress-test of the result.",
    "category": "planning",
    "variables": {
      "decision": {
        "label": "Decision",
        "question": "What decision are you making?",
        "type": "text",
        "placeholder": "e.g., Which job offer to accept",
        "required": true
      },
      "options": {
        "label": "Options",
        "question": "What are the options?",
        "type": "textarea",
        "placeholder": "e.g., Offer A: higher pay; Offer B: better growth",
        "required": true
      },
      "criteria": {
        "label": "Criteria",
        "question": "What criteria matter?",
        "type": "textarea",
        "placeholder": "e.g., Pay, growth, commute, culture",
        "required": true
      },
      "dealbreakers": {
        "label": "Dealbreakers",
        "question": "Any dealbreakers that eliminate an option outright?",
        "type": "textarea",
        "placeholder": "e.g., More than 45-min commute, pay cut"
      },
      "decisionDeadline": {
        "label": "Decide By",
        "question": "When must you decide?",
        "type": "date",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Pros & Cons Deep Dive",
    "displayDescription": "Goes beyond surface lists with evidence, magnitude, reversibility, second-order effects, and the strongest counter-argument to the recommendation.",
    "id": "planning-054",
    "prompt": "Act as a strategic thinking partner and do a genuinely deep pros and cons analysis for: {decision}.\n\nCONTEXT: I must decide by {deadline}. Stakeholders affected: {stakeholders}. The values that should guide this: {values}. Information I am missing: {informationGaps}.\n\nANALYSIS PRINCIPLES: Surface lists (\"pro: exciting, con: scary\") are useless — every pro and con needs evidence (what makes me believe this?), magnitude (how big, how likely?), and reversibility (can I undo this?). Second-order effects are where the real consequences hide: trace each choice two steps out. Opportunity cost is the price of the road not taken — name it. {stakeholders} experience this decision differently than I do; their perspective gets its own section. The analysis should first close {informationGaps} where cheap to do so, then decide on what is known. It ends with a recommendation AND its strongest counter-argument, because a recommendation that cannot survive its critic is not ready.\n\nWHAT TO DELIVER:\n1. The information triage: which of {informationGaps} can be closed before {deadline}, how (the specific action), and which gaps I must decide around — with how each unclosable gap affects confidence.\n2. The deep pros and cons: each item with evidence, magnitude (scale it: life-changing / significant / minor), likelihood, and reversibility rating. No item without all four.\n3. Second-order effects: for the top 3 pros and top 3 cons, what happens next — the consequence of the consequence.\n4. Opportunity costs: what each choice forecloses, stated explicitly.\n5. The stakeholder lens: how {stakeholders} experience each option — where their interests align with mine and where they diverge.\n6. The values check: each option scored against {values} — the option that wins on paper but violates my values gets flagged, not recommended.\n7. The one-year picture: a paragraph on what life looks like one year after each choice.\n8. The recommendation, with its reasoning chain — followed by the strongest counter-argument to it, steelmanned fairly.\n9. The decision rule: what I should do by {deadline}, and the tripwire that would make me revisit the decision later.\n\nA high-quality analysis changes how I see {decision} — if I learn nothing new from it, it was not deep enough.",
    "description": "Produces an evidence-graded pros and cons analysis with second-order effects and stakeholder perspectives.",
    "category": "planning",
    "variables": {
      "decision": {
        "label": "Decision",
        "question": "What decision are you weighing?",
        "type": "text",
        "placeholder": "e.g., Move across the country",
        "required": true
      },
      "deadline": {
        "label": "Decide By",
        "question": "When must you decide?",
        "type": "date",
        "required": true
      },
      "stakeholders": {
        "label": "Stakeholders",
        "question": "Who else is affected?",
        "type": "textarea",
        "placeholder": "e.g., Partner, kids, aging parents",
        "required": true
      },
      "values": {
        "label": "Guiding Values",
        "question": "What values should guide this decision?",
        "type": "textarea",
        "placeholder": "e.g., Family closeness, financial security, growth",
        "required": true
      },
      "informationGaps": {
        "label": "Information Gaps",
        "question": "What information are you missing?",
        "type": "textarea",
        "placeholder": "e.g., Real cost of living there, job market depth"
      }
    }
  },
  {
    "displayTitle": "Project Pre-Mortem",
    "displayDescription": "Imagines the project failed spectacularly, ranks the plausible causes, and converts them into preventive actions with owners and deadlines.",
    "id": "planning-055",
    "prompt": "Act as a pre-mortem facilitator and run a rigorous failure analysis for {project}, launching {launchDate}.\n\nCONTEXT: The team involved: {team}. My biggest assumption about why this will work: {biggestAssumption} — attack this hardest. What failure would cost: {failureCost}.\n\nPRE-MORTEM PRINCIPLES: The pre-mortem works by granting permission to be pessimistic: it is six months after {launchDate}, {project} failed spectacularly, and the team must explain why. This bypasses the optimism that kills honest risk discussion. Every plausible cause gets named — especially the ones involving {biggestAssumption}, because load-bearing assumptions deserve the most scrutiny. Causes get ranked by likelihood, and the top ones get preventive actions with owners and deadlines NOW, while there is still time. Given {failureCost}, the preventions are cheap insurance.\n\nWHAT TO DELIVER:\n1. The failure scene: a vivid paragraph — it is six months after {launchDate}, {project} has failed. What does the failure look like specifically? (This primes honest thinking.)\n2. The failure causes: every plausible reason, brainstormed without filtering — aim for 10-15, covering execution, market, team ({team}), timing, and assumption failures. Give {biggestAssumption} its own dedicated attack: three ways it could be wrong.\n3. The ranking: causes ordered by likelihood × impact, with the top 5 highlighted.\n4. Preventive actions: for each of the top 5, one concrete action to take NOW that reduces its likelihood or its damage — specific, not \"be careful.\"\n5. Owners and deadlines: each prevention assigned to someone on {team} with a date before {launchDate}.\n6. The assumption tests: for {biggestAssumption}, the cheapest fastest test that would prove or disprove it, and when to run it.\n7. The monitoring plan: the 3 early-warning metrics that would show the failure unfolding, and who watches them.\n8. The {failureCost} framing: the cost of the top preventions vs. the cost of failure — the ROI case for acting now.\n\nA high-quality pre-mortem leaves the team slightly uncomfortable and significantly better prepared — every top risk now has an owner and a date.",
    "description": "Identifies likely failure modes before launch and assigns preventive actions with owners and deadlines.",
    "category": "planning",
    "variables": {
      "project": {
        "label": "Project",
        "question": "What is the project?",
        "type": "text",
        "placeholder": "e.g., New store opening",
        "required": true
      },
      "launchDate": {
        "label": "Launch Date",
        "question": "When does it launch?",
        "type": "date",
        "required": true
      },
      "team": {
        "label": "Team",
        "question": "Who is involved?",
        "type": "textarea",
        "placeholder": "e.g., Store staff, marketing, contractor",
        "required": true
      },
      "biggestAssumption": {
        "label": "Biggest Assumption",
        "question": "What is your biggest assumption about why this will work?",
        "type": "textarea",
        "placeholder": "e.g., That foot traffic will convert at 10%",
        "required": true
      },
      "failureCost": {
        "label": "Cost of Failure",
        "question": "What would failure cost?",
        "type": "text",
        "placeholder": "e.g., $50k and 6 months",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Resource Allocation Plan",
    "displayDescription": "Matches resources to tasks by skill fit and availability, flags over-allocation, names the bottleneck, and proposes a rebalancing.",
    "id": "planning-056",
    "prompt": "Act as a resource manager and create an allocation plan for {project}.\n\nCONTEXT: Available resources: {resources}. Tasks needing them: {tasks}. Constraints: {constraints}. The timeline: {timeline}. If everything competes, the priority is: {priorityTask}.\n\nALLOCATION PRINCIPLES: Resources go to tasks by skill fit first, availability second — the best person for a task who has no hours is not available. Over-allocation is the silent killer: the plan must show each resource's load vs. capacity and flag anyone over 100%. Every project has a bottleneck resource (the one everything waits on); name it and protect it. When conflicts arise, {priorityTask} wins — the plan should show what that costs the losers. {constraints} are hard boundaries, not suggestions.\n\nWHAT TO DELIVER:\n1. The resource inventory: each resource from {resources} with its skills, available hours across {timeline}, and hard limits from {constraints}.\n2. The allocation table: each task from {tasks} matched to its resource(s), with hours assigned and the skill-fit reasoning (one line per match).\n3. The load check: each resource's total assigned hours vs. capacity, with over-allocation flagged in plain language — and the specific fix for each overload (defer, split, or add resource).\n4. The bottleneck: the one resource everything depends on, why it is the constraint, and the protection plan (buffer its time, sequence its work first, never multitask it).\n5. The rebalancing proposal: the concrete changes that resolve the overloads and respect {constraints}.\n6. The conflict rule: when two tasks need the same resource, {priorityTask} wins — show the trade-off explicitly (what slips, by how much).\n7. A weekly view: who is doing what each week across {timeline}, so the plan is readable at a glance.\n8. The reallocation trigger: the signal (a slip, a new task) that means the allocation gets redone, and who decides.\n\nA high-quality plan is honest about scarcity: it shows the math, names the bottleneck, and never pretends a resource has hours it does not.",
    "description": "Allocates people and resources to tasks with overload flags, bottleneck analysis, and a rebalancing proposal.",
    "category": "planning",
    "variables": {
      "project": {
        "label": "Project",
        "question": "What is the project?",
        "type": "text",
        "placeholder": "e.g., Kitchen remodel",
        "required": true
      },
      "resources": {
        "label": "Resources",
        "question": "What resources are available?",
        "type": "textarea",
        "placeholder": "e.g., 2 staff, contractor, $8k, truck",
        "required": true
      },
      "tasks": {
        "label": "Tasks",
        "question": "Which tasks need resources?",
        "type": "textarea",
        "placeholder": "e.g., Demolition, plumbing, painting, cleanup",
        "required": true
      },
      "constraints": {
        "label": "Constraints",
        "question": "What constraints apply?",
        "type": "textarea",
        "placeholder": "e.g., Contractor only weekends, no overtime budget"
      },
      "timeline": {
        "label": "Timeline",
        "question": "What is the timeline for this work?",
        "type": "text",
        "placeholder": "e.g., 6 weeks starting Oct 1",
        "required": true
      },
      "priorityTask": {
        "label": "Priority Task",
        "question": "If everything competes, what wins?",
        "type": "text",
        "placeholder": "e.g., The client deliverable, always",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Supply List Builder",
    "displayDescription": "Builds a categorized supply list with quantities scaled to guest count, costs, sourcing, must-have vs. nice-to-have tiers, and a shopping timeline.",
    "id": "planning-057",
    "prompt": "Act as a procurement planner and build a complete supply list for {event}.\n\nCONTEXT: Guest count: {guests}. Budget: ${budget}. I already have: {existingSupplies}. The event date: {eventDate}. The venue: {venue}.\n\nSUPPLY PRINCIPLES: Quantities scale with {guests} — show the per-person math so the numbers are trustworthy, not guessed. {existingSupplies} gets used first; buying duplicates of what I own is the classic waste. Every item is tiered: must-have (the event fails without it) vs. nice-to-have (cut first if the budget strains). Costs must sum within ${budget} with the math visible. Sourcing matters: where to buy affects price and lead time, and {eventDate} determines what must be ordered now vs. bought last-minute.\n\nWHAT TO DELIVER:\n1. The categorized list: every item needed for {event} at {venue}, organized by category (food/beverage, serving, decor, practical/logistics), with quantities.\n2. The quantity math: per-guest formulas shown for {guests} guests (e.g., drinks per person per hour), so I can rescale if the count changes.\n3. The {existingSupplies} audit: what I already own that covers needs, what needs supplementing, and what gaps remain.\n4. Cost estimates per item and per category, summing within ${budget} — with the must-have total and the nice-to-have total shown separately.\n5. The tiering: must-haves vs. nice-to-haves marked clearly, with the cut list (what goes first if {guests} grows or the budget shrinks).\n6. Sourcing: where to get each category (bulk store, online, rental, borrow) with the price/lead-time reasoning, sequenced by {eventDate}.\n7. The shopping timeline: what to buy/order when, working back from {eventDate}, with the last-minute run list.\n8. The day-before inventory check: the 10-minute verification that everything is on hand.\n\nA high-quality list means I shop once, stay in budget, and nothing is missing on {eventDate}.",
    "description": "Generates a budget-capped supply list with per-guest quantity math, sourcing, and a shopping timeline.",
    "category": "planning",
    "variables": {
      "event": {
        "label": "Event",
        "question": "What is the event or purpose?",
        "type": "text",
        "placeholder": "e.g., Backyard BBQ, classroom party",
        "required": true
      },
      "guests": {
        "label": "Guest Count",
        "question": "How many guests?",
        "type": "number",
        "placeholder": "e.g., 25",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "Budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 300",
        "required": true
      },
      "existingSupplies": {
        "label": "Already Have",
        "question": "What supplies do you already have?",
        "type": "textarea",
        "placeholder": "e.g., Cooler, folding tables, paper plates"
      },
      "eventDate": {
        "label": "Event Date",
        "question": "When is the event?",
        "type": "date",
        "required": true
      },
      "venue": {
        "label": "Venue",
        "question": "Where is the event held?",
        "type": "text",
        "placeholder": "e.g., My backyard, school gym",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Vendor Comparison",
    "displayDescription": "Scores vendor quotes against your criteria in a comparison table, flags red flags, lists pre-signing questions, and recommends a winner with a negotiation tip.",
    "id": "planning-058",
    "prompt": "Act as a procurement advisor and compare vendors for {service}.\n\nCONTEXT: Budget: ${budget}. Quotes received: {quotes}. What matters most: {criteria}. My timeline: {timeline}. My must-haves: {mustHaves}.\n\nCOMPARISON PRINCIPLES: Compare on {criteria}, not on price alone — the cheapest quote that misses {mustHaves} is not a bargain. Normalize the quotes first: make sure each one covers the same scope, or the comparison is meaningless. Red flags in {quotes} (vague scope, no timeline, payment in full upfront, no references) must be named explicitly. The recommendation needs reasoning I can defend, and the negotiation tip should be specific to the winner's quote — not generic haggling advice. Before signing, there are questions that prevent regret; list them.\n\nWHAT TO DELIVER:\n1. The scope normalization: what each quote in {quotes} actually includes, restated comparably — flag any quote that is not really comparable.\n2. The comparison table: each vendor scored against {criteria}, with the must-haves from {mustHaves} as pass/fail gates before scoring.\n3. Budget fit: each quote against ${budget}, including the total cost of ownership (not just the headline price — travel fees, extras, overtime).\n4. Red flags: anything concerning in any quote, named plainly with why it matters.\n5. Questions to ask before signing: the 6-8 questions that protect me, tailored to {service} and {timeline}.\n6. The clear recommendation: which vendor, the reasoning chain tied to {criteria} and {mustHaves}, and the runner-up with when I would choose it instead.\n7. A negotiation tip for the top pick: the specific lever in their quote (scope, timing, payment terms) most likely to move, and exactly what to ask for.\n8. Contract terms to verify: the clauses that must be in writing before money changes hands.\n\nA high-quality comparison is one I could act on today — the winner is clear, the risks are named, and I know exactly what to say in the negotiation.",
    "description": "Compares vendor quotes in a scored table with red flags, pre-signing questions, and a negotiation tip.",
    "category": "planning",
    "variables": {
      "service": {
        "label": "Service",
        "question": "What service do you need?",
        "type": "text",
        "placeholder": "e.g., Wedding photographer",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "Budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 3000",
        "required": true
      },
      "quotes": {
        "label": "Quotes",
        "question": "What quotes have you received?",
        "type": "textarea",
        "placeholder": "e.g., Vendor A $2800, 8 hrs, 400 photos...",
        "required": true
      },
      "criteria": {
        "label": "Criteria",
        "question": "What matters most?",
        "type": "textarea",
        "placeholder": "e.g., Price, reviews, style fit, availability",
        "required": true
      },
      "timeline": {
        "label": "Timeline",
        "question": "What is the timeline for this service?",
        "type": "text",
        "placeholder": "e.g., Needed by Dec 1, event is Dec 15",
        "required": true
      },
      "mustHaves": {
        "label": "Must-Haves",
        "question": "What are the non-negotiable requirements?",
        "type": "textarea",
        "placeholder": "e.g., Licensed and insured, weekend availability",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Volunteer Event Plan",
    "displayDescription": "Plans a volunteer event with role assignments, recruitment and confirmation messaging, a day-of timeline, a rain plan, and a retention follow-up.",
    "id": "planning-059",
    "prompt": "Act as a volunteer coordinator and plan a complete volunteer event for {cause} on {date}.\n\nCONTEXT: Volunteers: {volunteers} people. Tasks to cover: {tasks}. Location: {location}. Budget: ${budget}.\n\nVOLUNTEER PRINCIPLES: Volunteers are donating their time — the plan must respect it with clear roles, a tight timeline, and no standing around. Recruitment is a campaign: the ask, the confirmation, and the reminder are three separate messages. Roles get assigned before arrival, not at arrival. {volunteers} people need a span-of-control plan (team leads for groups). The rain plan is not optional. And the thank-you follow-up is the retention strategy — volunteers who feel appreciated come back.\n\nWHAT TO DELIVER:\n1. Role assignments: every task from {tasks} broken into roles, each with headcount, responsibilities, and the skills or strength needed — summing to {volunteers} people with team leads named.\n2. The recruitment plan: where to find volunteers for {cause}, the ask message (short, specific, with date/time/{location}), and the signup mechanism.\n3. The confirmation sequence: the immediate confirmation message, the one-week reminder, and the day-before reminder — each with what to include (parking, what to bring, weather plan).\n4. The day-of timeline: setup, volunteer check-in and briefing, work blocks with breaks, and teardown — timed, with who runs each segment.\n5. The supplies list within ${budget}: what is needed per role, what can be borrowed or donated, and what must be bought.\n6. The rain plan: the trigger for activating it (when the call gets made), the modified timeline, and what changes for {location}.\n7. The thank-you follow-up: the message sequence after {date} (same-day thanks, the impact report with photos/numbers, the invitation to the next event) — designed so volunteers return.\n8. The debrief: the 30-minute post-event review — what worked, what to change, and the volunteer feedback question.\n\nA high-quality plan treats volunteers like the precious resource they are: no wasted time, clear roles, genuine thanks, and a reason to come back.",
    "description": "Creates a volunteer event plan with roles, recruitment messaging, timeline, and a retention follow-up.",
    "category": "planning",
    "variables": {
      "cause": {
        "label": "Cause",
        "question": "What is the cause?",
        "type": "text",
        "placeholder": "e.g., Park cleanup, food bank drive",
        "required": true
      },
      "date": {
        "label": "Date",
        "question": "When is the event?",
        "type": "date",
        "required": true
      },
      "volunteers": {
        "label": "Volunteers",
        "question": "How many volunteers?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": true
      },
      "tasks": {
        "label": "Tasks",
        "question": "What tasks need covering?",
        "type": "textarea",
        "placeholder": "e.g., Setup, registration, trash pickup, teardown",
        "required": true
      },
      "location": {
        "label": "Location",
        "question": "Where is the event?",
        "type": "text",
        "placeholder": "e.g., Riverside Park, north entrance",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "Budget in dollars for supplies?",
        "type": "number",
        "placeholder": "e.g., 300",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Community Event Plan",
    "displayDescription": "Plans a community event with fundraising built in: planning timeline, revenue-and-cost budget, promotion plan, volunteer roles, and success metrics.",
    "id": "planning-060",
    "prompt": "Act as a community event planner and design a complete plan for {event} on {date}.\n\nCONTEXT: Attendance or fundraising goal: {goal}. Audience: {audience}. Fundraising component: {fundraising}. Budget: ${budget}. Organizing team: {organizers}.\n\nEVENT PRINCIPLES: A community event serves two masters: the experience for {audience} and the goal ({goal}). The budget must show both sides — revenue and costs — because {fundraising} changes every decision. Promotion is a timeline, not a single announcement: it builds in waves toward {date}. {organizers} need clear ownership or planning stalls. Day-of logistics are the product; everything else is preparation. Success gets defined before the event in metrics, and the debrief after turns one event into a repeatable playbook.\n\nWHAT TO DELIVER:\n1. The planning timeline: working back from {date}, the phases (concept, bookings, promotion waves, final prep) with owners from {organizers} and deadlines.\n2. The budget: revenue projections and cost line items within ${budget} — if {fundraising} is yes, the fundraising mechanics (ticket tiers, donations, sponsors, raffle) with realistic targets summing to the goal in {goal}.\n3. The promotion plan: the waves (save-the-date, push, final call), the channels for reaching {audience}, the messaging per wave, and who creates what.\n4. Volunteer roles: what is needed beyond {organizers}, headcount, recruitment, and the day-of assignments.\n5. Day-of logistics: the timeline, setup/teardown, signage, registration or check-in flow, food, sound, and the contingency for weather or low turnout.\n6. The fundraising execution (if {fundraising} is yes): how money gets collected at the event, who handles it, and the reconciliation process.\n7. Success metrics for both attendance and funds: the targets from {goal}, how each is measured, and what \"great\" vs. \"fine\" looks like.\n8. The debrief template: the post-event review — metrics vs. targets, what to repeat, what to change, and the archived playbook for next time.\n\nA high-quality plan makes {event} feel inevitable in its success: promoted right, staffed right, budgeted honestly, and measured against {goal}.",
    "description": "Designs a community event plan with fundraising targets, budget, promotion waves, and a debrief template.",
    "category": "planning",
    "variables": {
      "event": {
        "label": "Event",
        "question": "What is the event?",
        "type": "text",
        "placeholder": "e.g., Neighborhood block party",
        "required": true
      },
      "date": {
        "label": "Date",
        "question": "When is the event?",
        "type": "date",
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What is the attendance or fundraising goal?",
        "type": "text",
        "placeholder": "e.g., 200 attendees, raise $5k",
        "required": true
      },
      "audience": {
        "label": "Audience",
        "question": "Who is the audience?",
        "type": "textarea",
        "placeholder": "e.g., Families in the neighborhood, local businesses",
        "required": true
      },
      "fundraising": {
        "label": "Fundraising",
        "question": "Include a fundraising component?",
        "type": "boolean",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is the expense budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 2000",
        "required": true
      },
      "organizers": {
        "label": "Organizers",
        "question": "Who is on the organizing team?",
        "type": "textarea",
        "placeholder": "e.g., Me, HOA board, two neighbors",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Holiday Plan",
    "displayDescription": "Plans a holiday gathering with traditions protected, food quantities, guest logistics, a two-week prep timeline, and task assignments.",
    "id": "planning-061",
    "prompt": "Act as a holiday coordinator and plan {holiday} for {guests} guests.\n\nCONTEXT: Budget: ${budget}. Traditions to keep: {traditions} — these are non-negotiable and the plan must protect them explicitly. Hosting at: {location}. Who is traveling in: {travelers}.\n\nHOLIDAY PRINCIPLES: Holidays carry emotional weight: {traditions} are the reason people come, so they get scheduled and protected first, not squeezed in. Food math is real — give quantities per guest for {guests} people. {travelers} need logistics (arrival times, sleeping arrangements, airport runs), not assumptions. The prep timeline starts two weeks out because the final 48 hours should be calm. Tasks get assigned to family members with names, or the host does everything and resents the holiday.\n\nWHAT TO DELIVER:\n1. The tradition protection plan: each tradition in {traditions} scheduled at its time, with what it needs (ingredients, props, people) prepared in advance — the guarantee they happen.\n2. Food planning with quantities: the menu, per-guest math for {guests} guests shown, the cooking timeline, and what can be made ahead or delegated.\n3. The decoration plan: what goes up, when, and who does it — scaled to {location} and ${budget}.\n4. Guest logistics for {travelers}: sleeping arrangements (who sleeps where), arrival/departure coordination, airport or station runs, and the house rules communicated kindly in advance.\n5. The activity schedule: what happens when across the holiday — balancing togetherness with downtime, especially for multi-day gatherings.\n6. The two-week prep timeline: week-by-week then day-by-day tasks, with the final 48 hours deliberately light.\n7. Task assignments: every major task owned by a named family member, with the ask framed so it actually gets done.\n8. The budget within ${budget}: food, decor, and extras as line items.\n9. The day-of run sheet: times, sequence, and who is on point for each part of {holiday}.\n10. The host's self-care note: the one boundary or break built in so the host enjoys {holiday} too.\n\nA high-quality plan means the host is present, not performing — {traditions} happen, {guests} guests are fed and comfortable, and nobody is exhausted.",
    "description": "Generates a full holiday hosting plan with protected traditions, logistics, and family task assignments.",
    "category": "planning",
    "variables": {
      "holiday": {
        "label": "Holiday",
        "question": "Which holiday?",
        "type": "text",
        "placeholder": "e.g., Easter, Fourth of July",
        "required": true
      },
      "guests": {
        "label": "Guest Count",
        "question": "How many guests?",
        "type": "number",
        "placeholder": "e.g., 12",
        "required": true
      },
      "traditions": {
        "label": "Traditions",
        "question": "Which traditions must be kept?",
        "type": "textarea",
        "placeholder": "e.g., Egg hunt, grandma's pie recipe",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "Budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 400",
        "required": true
      },
      "location": {
        "label": "Location",
        "question": "Where is it being hosted?",
        "type": "text",
        "placeholder": "e.g., Our house, parents' cabin",
        "required": true
      },
      "travelers": {
        "label": "Travelers",
        "question": "Who is traveling in from out of town?",
        "type": "textarea",
        "placeholder": "e.g., Sister's family of 4, arriving Wed",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Thanksgiving Dinner Plan",
    "displayDescription": "Builds a Thanksgiving cooking timeline working backwards from serving time, with oven and stovetop slot assignments, per-guest quantities, and a leftovers strategy.",
    "id": "planning-062",
    "prompt": "Act as a Thanksgiving logistics commander and plan dinner for {guests} guests.\n\nCONTEXT: Menu: {menu}. Dietary restrictions: {dietary}. My kitchen: {kitchen}. Serving time: {servingTime}. Kitchen helpers: {helpers}.\n\nTHANKSGIVING PRINCIPLES: Thanksgiving is a scheduling problem wearing a cooking problem's clothes. Everything works backwards from {servingTime}: the turkey's rest time, the oven's single cavity, the stovetop's burner count in {kitchen} — these are hard constraints the timeline must respect. {dietary} gets designed into the menu, not apologized for at the table. Make-ahead is the strategy that lets the host eat with everyone: maximize what is done days before. {helpers} need assignments, not hovering. Quantities for {guests} guests are math, and leftovers are a feature to plan, not an accident.\n\nWHAT TO DELIVER:\n1. The backward timeline from {servingTime}: every dish from {menu} placed at its start time, working back through days-before prep, morning-of, and the final hour — fitted to {kitchen}.\n2. Oven and stovetop slot assignments: the hour-by-hour schedule showing which dish occupies the oven and each burner when — with no collisions, and the turkey's rest window used for sides.\n3. The make-ahead list: everything that can be done 1-3 days before, with storage instructions.\n4. Quantities per guest for {guests} guests: turkey weight, sides, bread, dessert, drinks — math shown, fitted to {menu}.\n5. The {dietary} plan: exactly how each restriction is handled per dish, including cross-contamination care.\n6. Assignments for {helpers}: who does what and when, so help is useful instead of chaotic.\n7. The table-setting plan: when it happens (hint: the day before), layout, and the serving logistics (buffet vs. plated, where dishes land).\n8. The day-of host timeline: when to greet guests, when to carve, the 15-minute calm window before {servingTime}.\n9. The leftover strategy: containers ready, the division plan, and the next-day meal ideas.\n10. The 3 most common Thanksgiving timing failures and how this timeline prevents each.\n\nA high-quality plan means the turkey rests, the sides are hot, the host sits down at {servingTime}, and {dietary} guests feel considered — all at once.",
    "description": "Creates a minute-by-minute Thanksgiving cooking plan with oven scheduling, quantities, and dietary care.",
    "category": "planning",
    "variables": {
      "guests": {
        "label": "Guest Count",
        "question": "How many guests?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "menu": {
        "label": "Menu",
        "question": "What is on the menu?",
        "type": "textarea",
        "placeholder": "e.g., Turkey, stuffing, mashed potatoes, pie",
        "required": true
      },
      "dietary": {
        "label": "Dietary Restrictions",
        "question": "Any dietary restrictions?",
        "type": "textarea",
        "placeholder": "e.g., Gluten-free stuffing for two",
        "required": true
      },
      "kitchen": {
        "label": "Kitchen Setup",
        "question": "Describe your kitchen setup.",
        "type": "textarea",
        "placeholder": "e.g., One oven, gas stovetop, small fridge"
      },
      "servingTime": {
        "label": "Serving Time",
        "question": "What time do you want to serve dinner?",
        "type": "text",
        "placeholder": "e.g., 4:00 PM",
        "required": true
      },
      "helpers": {
        "label": "Helpers",
        "question": "Who is helping in the kitchen?",
        "type": "text",
        "placeholder": "e.g., My partner and my mom",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Christmas Prep Timeline",
    "displayDescription": "Counts down from December 1st with weekly tasks, a gift budget tracker, travel logistics, and the Christmas Eve and Day schedules.",
    "id": "planning-063",
    "prompt": "Act as a holiday project manager and build a Christmas prep timeline that keeps December joyful instead of frantic.\n\nCONTEXT: Guests: {guests}. Traveling for the holiday: {traveling}. Traditions: {traditions}. Budget: ${budget}. Kids involved: {kids}. Travel details: {travelDetails}.\n\nCHRISTMAS PRINCIPLES: December fails when everything happens in the final week — the plan distributes decorating, gifts, food, and travel across the month from December 1st. {traditions} are the point; they get protected calendar slots. Gifts need a budget tracker per person, or ${budget} evaporates by December 15th. If {traveling} is yes, travel logistics anchor the timeline. {kids} change the magic logistics (and the secrecy logistics). Christmas Eve and Christmas Day need their own schedules, or the days dissolve into chaos.\n\nWHAT TO DELIVER:\n1. The December 1st countdown: weekly task blocks (week 1: decorate + gift list finalized; week 2: buying + wrapping rhythm; week 3: food prep + travel confirmations; week 4: the calm final days) — each with specific tasks and owners.\n2. The gift system: the recipient list, the per-person budget from ${budget}, gift ideas tracking, buy-by dates, and the wrapping station setup — plus the {kids} secrecy protocol.\n3. The gift budget tracker: a table with recipient, idea, budgeted, spent, and status columns, summing within ${budget}.\n4. {traditions} scheduled: each tradition from {traditions} on the calendar with its prep needs.\n5. Food planning: the Christmas meals, quantities for {guests} guests, what is made ahead, and the grocery runs timed.\n6. Decoration plan: what goes up when, and the takedown date (scheduled now, not discovered in February).\n7. Travel logistics from {travelDetails}: bookings confirmed, packing timeline, pet/house care, and the contingency for delays.\n8. The Christmas Eve schedule: the evening's flow, timed.\n9. The Christmas Day schedule: morning through evening, with downtime built in and {kids} pacing respected.\n10. The delegation list: what others own, so one person is not doing all of December.\n\nA high-quality timeline means December 24th arrives with everything done, {traditions} honored, ${budget} intact, and the magic intact for {kids} kids.",
    "description": "Produces a December countdown plan covering gifts, food, decor, travel, and the holiday schedules.",
    "category": "planning",
    "variables": {
      "guests": {
        "label": "Guest Count",
        "question": "How many guests?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "traveling": {
        "label": "Traveling",
        "question": "Are you traveling for the holiday?",
        "type": "boolean",
        "required": true
      },
      "traditions": {
        "label": "Traditions",
        "question": "Which traditions matter?",
        "type": "textarea",
        "placeholder": "e.g., Christmas Eve service, stockings",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "Total budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 1500",
        "required": true
      },
      "kids": {
        "label": "Kids",
        "question": "How many kids are involved?",
        "type": "number",
        "placeholder": "e.g., 2",
        "required": true
      },
      "travelDetails": {
        "label": "Travel Details",
        "question": "Travel details, if traveling (or leave blank)?",
        "type": "textarea",
        "placeholder": "e.g., Flying to Denver Dec 23, back Dec 27"
      }
    }
  },
  {
    "displayTitle": "Vacation Countdown Plan",
    "displayDescription": "Organizes every pre-trip task by week with now-vs-later flags, a final 48-hour checklist, and a day-of departure timeline.",
    "id": "planning-064",
    "prompt": "Act as a trip logistics coordinator and build a countdown plan for my trip: {trip}, departing {startDate}.\n\nCONTEXT: Remaining budget: ${budget}. Remaining tasks: {tasks}. Traveling with: {travelers}. Home and pet care: {homeCare}.\n\nCOUNTDOWN PRINCIPLES: Pre-trip tasks have wildly different lead times — passports take weeks, packing takes an evening — so the plan organizes by week with now-vs-later flags: what must be done immediately vs. what can wait. The five domains (bookings, documents, packing, home prep, money) each need their own checklist or something gets forgotten. {homeCare} is a real task with a real deadline. The final 48 hours need their own checklist because that is when brains stop working. Day-of needs a timeline working back from departure.\n\nWHAT TO DELIVER:\n1. The week-by-week countdown to {startDate}: each week with its tasks across the five domains (bookings, documents, packing, home prep, money), fitted to how many weeks remain.\n2. Now-vs-later flags: every task from {tasks} marked — do this week, do later, or waiting on something — with the dependencies named.\n3. The bookings audit: what is booked, what is not, confirmation numbers to verify, and the cancellation deadlines to calendar.\n4. The documents checklist: passports, IDs, visas, insurance, reservations — each with its verification step and where copies live (physical + digital).\n5. The money plan: how much of ${budget} is spent vs. remaining, currency or payment setup, and the daily spending framework for the trip.\n6. The home prep plan with {homeCare}: the handoff checklist for whoever watches the home/pets, with contacts and instructions.\n7. The packing timeline: when to start, the staged approach (buy, gather, pack), tied to the trip's needs.\n8. The final 48-hour checklist: the last tasks in order, including the \"charge everything, lock up, documents check\" sequence.\n9. The day-of timeline: working back from departure — when to leave, when to wake, the buffer for {travelers}.\n10. The \"forgot something\" protocol: the 5 things worth turning back for vs. everything else (buy it there).\n\nA high-quality countdown means departure morning is calm: everything is done, {homeCare} is handled, and the only job is to leave.",
    "description": "Creates a week-by-week vacation countdown with a final 48-hour departure checklist.",
    "category": "planning",
    "variables": {
      "trip": {
        "label": "Trip",
        "question": "What is the trip?",
        "type": "text",
        "placeholder": "e.g., Hawaii honeymoon",
        "required": true
      },
      "startDate": {
        "label": "Departure Date",
        "question": "When do you depart?",
        "type": "date",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "Remaining budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 3000",
        "required": true
      },
      "tasks": {
        "label": "Remaining Tasks",
        "question": "What tasks are still open?",
        "type": "textarea",
        "placeholder": "e.g., Book flights, renew passport, find pet sitter",
        "required": true
      },
      "travelers": {
        "label": "Travelers",
        "question": "Who is traveling?",
        "type": "text",
        "placeholder": "e.g., Me and my partner",
        "required": true
      },
      "homeCare": {
        "label": "Home & Pet Care",
        "question": "Who is watching your home or pets?",
        "type": "text",
        "placeholder": "e.g., Neighbor feeding the cat, or boarding",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Staycation Plan",
    "displayDescription": "Designs themed staycation days mixing local outings with home relaxation, with real phone and work boundaries so it feels like time off.",
    "id": "planning-065",
    "prompt": "Act as a staycation designer and plan a {days}-day staycation that actually feels like a vacation.\n\nCONTEXT: Budget: ${budget}. My interests: {interests}. With me: {companions}. Based in: {location}. What I need most: {energyNeed}.\n\nSTAYCATION PRINCIPLES: A staycation fails when it becomes \"days off at home doing chores\" — the plan must create novelty and boundaries. Each day gets a theme so the days feel distinct and designed. The formula is one outing + home-based relaxation per day: the outing creates the vacation feeling, the home time honors {energyNeed}. {location} is the asset — plan the local spots worth visiting that I never prioritize. Meals get planned (cook vs. takeout) or every meal becomes a decision. The critical piece: phone and work boundaries with teeth, or it is not time off.\n\nWHAT TO DELIVER:\n1. The day-by-day plan for all {days} days: each day with its theme, the outing (tied to {interests} and {location}), the home-based relaxation, and the pacing matched to {energyNeed} and {companions}.\n2. Local spots worth visiting: the specific-feeling recommendations for {location} — the places that make a staycation feel like travel.\n3. The meal plan: cook vs. takeout per meal, with 2-3 special meals (the ones that feel like vacation) and the grocery or ordering plan.\n4. The novelty rule: one thing per day I have never done in {location} — the anti-routine engine.\n5. Phone and work boundaries: the specific rules (notifications off, email checked once or never, the auto-reply text, who can reach me and how) — with the enforcement mechanism.\n6. The chore ban: what is explicitly NOT allowed during the staycation, and what gets done before day one so it does not intrude.\n7. The budget within ${budget}: outings, food, and treats as line items.\n8. The closing ritual: how the staycation ends (not with a Sunday-night dread spiral) — the re-entry plan for day {days}+1.\n\nA high-quality staycation leaves me rested and slightly amazed at my own city — {energyNeed} honored, phone forgotten, and {companions} happy.",
    "description": "Designs a home-based vacation with themed days, local outings, meal planning, and work boundaries.",
    "category": "planning",
    "variables": {
      "days": {
        "label": "Days",
        "question": "How many days?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "Budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 400",
        "required": true
      },
      "interests": {
        "label": "Interests",
        "question": "What are your interests?",
        "type": "textarea",
        "placeholder": "e.g., Hiking, museums, trying new restaurants",
        "required": true
      },
      "companions": {
        "label": "Companions",
        "question": "Who is joining?",
        "type": "text",
        "placeholder": "e.g., Just me, or me and my partner",
        "required": true
      },
      "location": {
        "label": "Home Base",
        "question": "What city or area are you based in?",
        "type": "text",
        "placeholder": "e.g., Phoenix, AZ",
        "required": true
      },
      "energyNeed": {
        "label": "Energy Need",
        "question": "What do you need most from this time off?",
        "type": "select",
        "options": [
          "Deep rest",
          "Adventure and novelty",
          "A mix of both"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Family Reunion Plan",
    "displayDescription": "Organizes a multi-day reunion with lodging, all-ages activities, meal strategy, fair cost-splitting, and family communication.",
    "id": "planning-066",
    "prompt": "Act as a family reunion planner and organize our reunion on {date} for {attendees} attendees in {location}.\n\nCONTEXT: Activity ideas: {activities}. Budget per family (rough): ${budgetPerFamily}. Age groups attending: {ageGroups}.\n\nREUNION PRINCIPLES: A reunion serves {ageGroups} simultaneously — the schedule needs options, not a single track, or someone is always bored. Lodging is the first domino: it determines the budget conversation and the logistics. Meals are the social glue: the potluck-vs-catered decision shapes both cost and togetherness. Money needs a fair, transparent splitting plan agreed early, or it poisons the weekend. Communication runs through one channel with one planner voice. And the memories need capturing deliberately, or the weekend evaporates.\n\nWHAT TO DELIVER:\n1. Lodging options for {attendees} people at {location}: 2-3 configurations (all together / clustered / everyone books own), with costs and the booking deadline.\n2. The multi-day activity schedule: each day with options for {ageGroups} — active, relaxed, and kid-focused tracks — built from {activities}, with one all-together anchor moment per day.\n3. The meal strategy: potluck vs. catered vs. mixed, decided with reasoning — including the assignment system if potluck (who brings what, dietary coverage) and the group grocery plan.\n4. The cost-splitting plan: the fair formula for ${budgetPerFamily}-scale costs (per family? per person? kids half?), what is shared vs. individual, how money is collected, and by when.\n5. The communication plan: the family group chat setup, the information packets (when sent, what they contain), and how decisions get made without 40-person threads.\n6. The rain backup: the indoor pivot for {location}, with the trigger for when the call gets made.\n7. The memory capture plan: who takes photos/video, the shared album setup, and the one group moment staged deliberately.\n8. Arrival and departure logistics: staggered arrivals handled, the welcome moment, and the goodbye that is not awkward.\n9. The planner's sanity plan: what the organizer delegates so they enjoy the reunion too.\n\nA high-quality reunion plan means every age group has something to look forward to, nobody fights about money, and {date} becomes a story the family retells.",
    "description": "Produces a multi-day family reunion plan with lodging, meals, cost-splitting, and communication.",
    "category": "planning",
    "variables": {
      "date": {
        "label": "Date",
        "question": "When is the reunion?",
        "type": "date",
        "required": true
      },
      "attendees": {
        "label": "Attendees",
        "question": "How many attendees?",
        "type": "number",
        "placeholder": "e.g., 40",
        "required": true
      },
      "location": {
        "label": "Location",
        "question": "Where will it be held?",
        "type": "text",
        "placeholder": "e.g., Lake cabin in Minnesota",
        "required": true
      },
      "activities": {
        "label": "Activity Ideas",
        "question": "What activity ideas do you have?",
        "type": "textarea",
        "placeholder": "e.g., Cookout, talent show, hiking, kids games",
        "required": true
      },
      "budgetPerFamily": {
        "label": "Budget Per Family",
        "question": "Rough budget per family in dollars?",
        "type": "number",
        "placeholder": "e.g., 500",
        "required": true
      },
      "ageGroups": {
        "label": "Age Groups",
        "question": "What age groups are attending?",
        "type": "text",
        "placeholder": "e.g., Toddlers to grandparents, mostly 30s-60s",
        "required": true
      }
    }
  },
  {
    "displayTitle": "New Baby Arrival Prep",
    "displayDescription": "Builds a trimester-by-trimester prep checklist from nursery setup to hospital bag, paperwork, and the first two weeks home.",
    "id": "planning-067",
    "prompt": "Act as a baby-prep coach and build a complete arrival plan. Due date: {dueDate}.\n\nCONTEXT: Nursery ready: {nurseryReady}. Support network: {support}. Budget: ${budget}. Living situation: {livingSituation}. Work leave situation: {workLeave}.\n\nPREP PRINCIPLES: Baby prep has a natural phasing — trimester by trimester — because energy and urgency change. Gear splits into essentials vs. nice-to-haves, and the plan must be honest about what a newborn actually needs in week one (far less than the registries suggest). {support} is the real infrastructure: the meal train, the sleep shifts, the visitors policy. Paperwork (insurance, pediatrician, documents) has deadlines that do not care about due dates. The first two weeks home need their own plan — meals, sleep shifts, visitors — because that is when the prep either pays off or it does not.\n\nWHAT TO DELIVER:\n1. The trimester-by-trimester checklist: what to do when, phased to energy levels — research and big decisions early, nesting and final prep late.\n2. The nursery setup plan (accounting for {nurseryReady} and {livingSituation}): what the space needs, the layout logic (changing, feeding, sleeping zones), and what can wait.\n3. Gear: essentials vs. nice-to-haves, each essential with what to look for — the honest minimum for week one, budgeted within ${budget}.\n4. The hospital bag checklist: for the birthing parent, the partner, and the baby — packed by week 36.\n5. The paperwork checklist: insurance additions, pediatrician selection, birth certificate and documents, leave paperwork per {workLeave} — each with its deadline.\n6. The {support} activation plan: the meal train setup, who is on call for what, and how to ask for help (the specific asks, pre-written).\n7. The first-two-weeks-home plan: the meal strategy, the sleep shift schedule, the visitors policy (communicated in advance, kindly but firmly), and the \"good enough\" housekeeping standard.\n8. The budget within ${budget}: gear, nursery, and the first-month buffer as line items.\n9. The partner alignment: the 5 conversations to have before {dueDate} (night duties, visitors, feeding plan, money, asking for help).\n10. The \"what nobody tells you\" note: the 3 normal-but-surprising realities of the first two weeks, normalized kindly.\n\nA high-quality plan means {dueDate} arrives with the essentials ready, {support} activated, and the parents-to-be feeling prepared rather than panicked.",
    "description": "Generates a phased baby-arrival checklist covering gear, paperwork, support, and early home life.",
    "category": "planning",
    "variables": {
      "dueDate": {
        "label": "Due Date",
        "question": "What is the due date?",
        "type": "date",
        "required": true
      },
      "nurseryReady": {
        "label": "Nursery Ready",
        "question": "Is the nursery already set up?",
        "type": "boolean",
        "required": true
      },
      "support": {
        "label": "Support Network",
        "question": "Who is in your support network?",
        "type": "textarea",
        "placeholder": "e.g., Grandparents nearby, friend meal train",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "Budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 2000",
        "required": true
      },
      "livingSituation": {
        "label": "Living Situation",
        "question": "Describe your living situation.",
        "type": "text",
        "placeholder": "e.g., 2-bedroom apartment, baby room shares with office",
        "required": true
      },
      "workLeave": {
        "label": "Work Leave",
        "question": "What is the parental leave situation?",
        "type": "textarea",
        "placeholder": "e.g., 12 weeks paid, partner gets 2 weeks",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Pet Adoption Prep",
    "displayDescription": "Plans home pet-proofing, supplies with costs, vet and insurance setup, a first-week adjustment plan, and realistic monthly costs.",
    "id": "planning-068",
    "prompt": "Act as a pet adoption counselor and build a complete readiness plan for adopting a {petType}.\n\nCONTEXT: My home: {home}. My daily schedule: {schedule}. My budget: ${budget} for setup. My pet experience: {petExperience}.\n\nADOPTION PRINCIPLES: The right pet for {home} and {schedule} matters more than the cutest pet — be honest about fit, including which {petType} traits clash with my situation. Preparation has four domains: the home (pet-proofing), the supplies (bought before adoption day), the care team (vet, insurance), and the first week (the adjustment plan that determines everything). {petExperience} sets the learning curve: first-timers need more structure. The monthly cost estimate must be realistic — underestimating it is how pets get rehomed.\n\nWHAT TO DELIVER:\n1. The fit check: how a {petType} fits {home} and {schedule} — the honest pros and cons, and the specific traits to look for (or avoid) in the individual animal given {petExperience}.\n2. Home pet-proofing: the room-by-room checklist for {home} — hazards removed, safe spaces created, done before adoption day.\n3. Essential supplies with costs: everything needed on day one, priced, summing within ${budget} — plus what can wait until week two.\n4. The care team setup: how to choose a vet, the first-visit timeline, pet insurance decision (the math for/against for a {petType}), and emergency vet info saved.\n5. The first-week adjustment plan: day by day — the decompression approach, feeding, the safe space, introductions to {home}, and what NOT to do in week one.\n6. Training or care routines matched to {schedule}: the daily rhythm (feeding, exercise, training sessions) fitted to my actual hours, with the non-negotiable minimums.\n7. The realistic monthly cost estimate: food, vet amortized, insurance, supplies, and the surprise buffer — the true number.\n8. The trial-period mindset: the 2-week and 2-month checkpoints, what adjustment struggles are normal, and when to ask for help vs. when it is truly not working.\n9. The long-term commitments: lifespan, the life changes to plan for, entered into with eyes open.\n\nA high-quality plan means adoption day is calm, the first week builds trust, and the decision was made with full knowledge of what a {petType} costs in money, time, and heart.",
    "description": "Creates a pet adoption readiness plan with fit check, supplies, costs, and first-week routines.",
    "category": "planning",
    "variables": {
      "petType": {
        "label": "Pet Type",
        "question": "What kind of pet?",
        "type": "select",
        "options": [
          "Dog",
          "Cat",
          "Rabbit",
          "Bird",
          "Reptile",
          "Other"
        ],
        "required": true
      },
      "home": {
        "label": "Home Situation",
        "question": "Describe your home situation.",
        "type": "textarea",
        "placeholder": "e.g., Apartment, no yard, roommate with allergies",
        "required": true
      },
      "schedule": {
        "label": "Daily Schedule",
        "question": "What does your daily schedule look like?",
        "type": "text",
        "placeholder": "e.g., Out 9-5 weekdays, home weekends",
        "required": true
      },
      "budget": {
        "label": "Setup Budget",
        "question": "Budget in dollars for initial setup?",
        "type": "number",
        "placeholder": "e.g., 600",
        "required": true
      },
      "petExperience": {
        "label": "Pet Experience",
        "question": "What is your pet experience level?",
        "type": "select",
        "options": [
          "First pet",
          "Some experience",
          "Experienced owner"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Workout Scheduling Plan",
    "displayDescription": "Designs a weekly training split with exercises, sets, and reps, a 4-week progression, rest rules, and a 10-minute busy-day fallback.",
    "id": "planning-069",
    "prompt": "Act as a strength and conditioning coach and build a workout schedule for my goal: {goal}.\n\nCONTEXT: I can train {daysPerWeek} days per week, {sessionLength} minutes per session. Equipment: {equipment}. My training experience: {trainingExperience}. Injuries or limitations: {injuries} — the plan must respect these absolutely.\n\nTRAINING PRINCIPLES: The program must fit {goal} specifically — the exercises, rep ranges, and progression all serve it. {daysPerWeek} days × {sessionLength} minutes is the hard container; the split is designed inside it. Progression is planned, not hoped for: the 4-week block shows exactly what increases and when. {injuries} are non-negotiable constraints — work around them, never through them. Rest is programmed with rules, not left to guilt. And the 10-minute fallback exists because the perfect workout skipped is worth less than the minimum done.\n\nWHAT TO DELIVER:\n1. The weekly split: each of the {daysPerWeek} training days with its focus, fitted to {goal}, {equipment}, and {sessionLength} minutes — with the logic of the split explained.\n2. The session templates: exercises per day with sets, reps, and rest periods — chosen for {trainingExperience} level and avoiding anything that aggravates {injuries}, with substitutions noted.\n3. The 4-week progression plan: what increases each week (weight, reps, sets, or difficulty), the deload or test in week 4, and how to know when to progress vs. hold.\n4. Rest day rules: what rest means (active vs. full), sleep and nutrition minimums that support {goal}, and the signs of under-recovery.\n5. Warm-up and cooldown: the specific 5-8 minute warm-up per session type and the cooldown protocol.\n6. The 10-minute minimum fallback: the exact micro-session for busy days that keeps the habit alive — designed for {equipment}.\n7. The tracking system: what to log each session and the 2 numbers that prove progress toward {goal}.\n8. The 4-week review: what to assess, when to change the program, and the next block's direction.\n\nA high-quality program is one I can follow without a coach in the room: every session is fully specified, {injuries} are respected, and progress toward {goal} is measurable by week 4.",
    "description": "Builds a progressive workout schedule matched to your goal, experience, time, and equipment.",
    "category": "planning",
    "variables": {
      "goal": {
        "label": "Goal",
        "question": "What is your fitness goal?",
        "type": "text",
        "placeholder": "e.g., Build strength, run a 10k",
        "required": true
      },
      "daysPerWeek": {
        "label": "Days Per Week",
        "question": "How many days per week?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "sessionLength": {
        "label": "Session Length",
        "question": "Minutes per session?",
        "type": "number",
        "placeholder": "e.g., 45",
        "required": true
      },
      "equipment": {
        "label": "Equipment",
        "question": "What equipment do you have?",
        "type": "select",
        "options": [
          "No equipment",
          "Home gym",
          "Full gym"
        ],
        "required": true
      },
      "trainingExperience": {
        "label": "Experience Level",
        "question": "What is your training experience?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "injuries": {
        "label": "Injuries/Limitations",
        "question": "Any injuries or physical limitations?",
        "type": "textarea",
        "placeholder": "e.g., Bad left knee, lower back tightness"
      }
    }
  },
  {
    "displayTitle": "Meal Prep Plan",
    "displayDescription": "Designs a weekly menu with shared ingredients to cut waste, a 2-hour prep timeline with order of operations, storage guidance, and a store-section grocery list.",
    "id": "planning-070",
    "prompt": "Act as a meal prep strategist and create a weekly plan.\n\nCONTEXT: Diet: {diet}. Meals to prep: {mealsPerWeek}. People: {people}. Weekly grocery budget: ${groceryBudget}. My cooking skill: {cookingSkill}. Foods we dislike or avoid: {dislikes}.\n\nMEAL PREP PRINCIPLES: The menu is engineered around shared ingredients — the same proteins, grains, and vegetables appearing across meals in different forms — because that is what cuts waste and cost within ${groceryBudget}. {mealsPerWeek} meals for {people} people is the production target; the 2-hour Sunday timeline must show it is achievable with {cookingSkill}. Order of operations matters: what goes in the oven first, what simmers while other things chop. Storage instructions are part of the recipe, not an afterthought — food safety dates included. {dislikes} are respected absolutely. Variety across weeks prevents the #1 meal prep killer: boredom.\n\nWHAT TO DELIVER:\n1. The weekly menu: each of the {mealsPerWeek} meals named, designed for {diet}, scaled to {people} people, avoiding {dislikes} — with the shared-ingredient logic visible (which ingredients repeat where).\n2. The waste-cutting design: the ingredient overlap map showing how nothing gets bought for a single meal, and what happens to scraps and extras.\n3. The 2-hour Sunday prep timeline: order of operations minute by minute — what starts first, what runs in parallel, fitted to {cookingSkill}.\n4. Storage instructions: container types, fridge vs. freezer, and the eat-by dates for each meal (food safety, specific).\n5. The reheating guide: how each meal gets reheated well (not just microwaved into sadness).\n6. The grocery list organized by store section: every item with quantity, estimated cost, summing within ${groceryBudget} — and the pantry staples assumed on hand.\n7. The budget check: the math showing ${groceryBudget} covers {mealsPerWeek} meals × {people} people, with the cost per meal.\n8. The week-2 variety rotation: how to vary the menu next week using the same system, so boredom never sets in.\n\nA high-quality plan means Sunday's 2 hours buy a week of {diet}-compliant eating for {people} — no midweek grocery runs, no wasted food, nothing boring by Thursday.",
    "description": "Generates a waste-cutting weekly meal prep plan with timeline, storage, and organized grocery list.",
    "category": "planning",
    "variables": {
      "diet": {
        "label": "Diet",
        "question": "What diet or preferences?",
        "type": "text",
        "placeholder": "e.g., High-protein, vegetarian",
        "required": true
      },
      "mealsPerWeek": {
        "label": "Meals Per Week",
        "question": "How many meals to prep?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "people": {
        "label": "People",
        "question": "How many people?",
        "type": "number",
        "placeholder": "e.g., 2",
        "required": true
      },
      "groceryBudget": {
        "label": "Grocery Budget",
        "question": "Weekly grocery budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 120",
        "required": true
      },
      "cookingSkill": {
        "label": "Cooking Skill",
        "question": "How would you rate your cooking skill?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Confident"
        ],
        "required": true
      },
      "dislikes": {
        "label": "Dislikes",
        "question": "Any foods to avoid?",
        "type": "textarea",
        "placeholder": "e.g., No cilantro, no spicy food",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Doctor Visit Prep",
    "displayDescription": "Organizes symptoms into a clear timeline with ranked questions, a bring-list, a one-minute opener, and follow-up questions for likely outcomes.",
    "id": "planning-071",
    "prompt": "Act as a patient advocate and prepare me thoroughly for my doctor visit about {reason} on {date}.\n\nCONTEXT: My symptoms: {symptoms}. Relevant history: {history}. This is a {visitType} visit. My #1 concern going in: {mainConcern}.\n\nPREP PRINCIPLES: Doctors have limited minutes — the visit succeeds when I communicate clearly and quickly. Symptoms become a timeline (when it started, how it changed, what helps, what worsens), not a story. {mainConcern} gets addressed explicitly, not hoped for. Questions get ranked because time runs out; the top 3 must be asked. The one-minute opener sets the visit's direction. {history} is organized so nothing relevant is forgotten. And likely outcomes get pre-planned follow-up questions, so I leave with a plan whatever the doctor says.\n\nWHAT TO DELIVER:\n1. The symptom timeline: {symptoms} organized chronologically — onset, progression, severity pattern, triggers, relievers — in the concise format doctors actually want.\n2. The one-minute opener: the scripted summary to deliver in the first 60 seconds that frames {reason} and lands {mainConcern}.\n3. Ranked questions: the full list, then the top 3 marked \"ask no matter what,\" each tied to {reason} or {mainConcern}.\n4. The bring-list: records, medication list (with dosages), previous test results, symptom log, insurance card — everything for a {visitType} visit.\n5. {history} organized: the relevant past condensed to what this doctor needs, in chronological order.\n6. Likely outcomes and their follow-ups: the 3 most probable things the doctor might say/do, each with my follow-up questions ready (\"if they order tests: which, why, when results\" / \"if they prescribe: side effects, interactions, what if it doesn't work\" / \"if they refer: to whom, how urgent\").\n7. The visit notes template: what to write down during the visit (diagnosis, plan, next steps, red flags to watch for).\n8. The post-visit checklist: prescriptions filled, follow-ups scheduled, the summary sent to anyone who needs it.\n9. Red flags: symptoms that would warrant calling back sooner than the follow-up — stated plainly.\n\nA high-quality prep means I walk into {date} calm, cover {mainConcern} in the first minutes, and walk out with answers instead of \"I forgot to ask.\"\n\nNote: this is visit preparation, not medical advice — it organizes what I tell the doctor, never what the doctor should conclude.",
    "description": "Prepares a structured doctor visit brief with symptom timeline, ranked questions, and outcome-based follow-ups.",
    "category": "planning",
    "variables": {
      "reason": {
        "label": "Reason",
        "question": "What is the visit for?",
        "type": "text",
        "placeholder": "e.g., Persistent knee pain",
        "required": true
      },
      "date": {
        "label": "Date",
        "question": "When is the appointment?",
        "type": "date",
        "required": true
      },
      "symptoms": {
        "label": "Symptoms",
        "question": "Describe your symptoms.",
        "type": "textarea",
        "placeholder": "e.g., Pain since March, worse in mornings",
        "required": true
      },
      "history": {
        "label": "Relevant History",
        "question": "Any relevant medical history?",
        "type": "textarea",
        "placeholder": "e.g., Previous injury 2022, current medications"
      },
      "visitType": {
        "label": "Visit Type",
        "question": "Is this a new doctor or an existing one?",
        "type": "select",
        "options": [
          "New doctor/specialist",
          "Existing doctor"
        ],
        "required": true
      },
      "mainConcern": {
        "label": "Main Concern",
        "question": "What is your #1 concern for this visit?",
        "type": "textarea",
        "placeholder": "e.g., Is this arthritis or something worse?",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Car Maintenance Schedule",
    "displayDescription": "Builds a mileage- and date-based maintenance schedule with cost estimates, DIY-vs-shop guidance, warning signs, and seasonal prep.",
    "id": "planning-072",
    "prompt": "Act as an automotive maintenance advisor and build a personalized schedule for my {car}, currently at {mileage} miles.\n\nCONTEXT: Last service: {lastService}. I drive about {annualMiles} miles per year. My climate: {climate}.\n\nSCHEDULE PRINCIPLES: Maintenance has two clocks — mileage and time — and whichever comes first wins; the schedule must show both. {mileage} and {lastService} determine what is due now vs. upcoming. Costs are estimated honestly so nothing is a surprise. DIY-vs-shop is a real decision: some items save money DIY, others risk safety or warranties. Warning signs are the early detection system — know them and you avoid breakdowns. {climate} changes the seasonal prep. The glovebox checklist is the quick-reference that makes the schedule usable.\n\nWHAT TO DELIVER:\n1. The due-now list: from {mileage} and {lastService}, what is overdue or due immediately — with why.\n2. The upcoming schedule: maintenance items ordered by due date/mileage, each with the interval (miles AND months), estimated cost, and how it was derived from {annualMiles}/year.\n3. The major upcoming services: the big ones on the horizon (timing belt/chain, transmission service, coolant, brakes) with their mileage windows and cost ranges — no surprises.\n4. DIY vs. shop guidance: each item marked DIY-friendly (with difficulty and tools needed) or shop-only (with why — safety, special tools, warranty).\n5. Warning signs not to ignore: the sounds, smells, lights, and feelings that mean \"stop driving and get this checked now\" vs. \"schedule soon\" — specific to a {car} at this mileage.\n6. The glovebox checklist: the one-page quick reference — fluid check schedule, tire pressure specs, and the emergency numbers.\n7. Seasonal prep for {climate}: what {climate} demands (battery test before winter, AC check before summer, wiper/fluid swaps) and when.\n8. The records system: what to keep, where, and the resale-value reason for keeping it.\n9. The annual cost estimate: what this schedule costs per year at {annualMiles} miles, so maintenance is budgeted, not surprising.\n\nA high-quality schedule means I always know what is next, what it costs, and whether I can do it myself — no more guessing at the service counter.",
    "description": "Creates a personalized car maintenance schedule with costs, warning signs, and seasonal prep.",
    "category": "planning",
    "variables": {
      "car": {
        "label": "Car",
        "question": "What car do you drive?",
        "type": "text",
        "placeholder": "e.g., 2019 Honda Civic",
        "required": true
      },
      "mileage": {
        "label": "Mileage",
        "question": "Current mileage?",
        "type": "number",
        "placeholder": "e.g., 68000",
        "required": true
      },
      "lastService": {
        "label": "Last Service",
        "question": "What was done at the last service?",
        "type": "text",
        "placeholder": "e.g., Oil change and tire rotation in June",
        "required": true
      },
      "annualMiles": {
        "label": "Annual Miles",
        "question": "About how many miles do you drive per year?",
        "type": "number",
        "placeholder": "e.g., 12000",
        "required": true
      },
      "climate": {
        "label": "Climate",
        "question": "What is your climate like?",
        "type": "select",
        "options": [
          "Hot summers",
          "Cold winters",
          "Mild year-round",
          "Extreme both ways"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Home Maintenance Calendar",
    "displayDescription": "Creates a seasonal home maintenance calendar with monthly checklists, time and cost estimates, safety flags, and a completion log.",
    "id": "planning-073",
    "prompt": "Act as a home maintenance planner and create a calendar for my {homeType} for the {season} season.\n\nCONTEXT: The home is about {homeAge} years old. My climate: {climate}.\n\nMAINTENANCE PRINCIPLES: Maintenance is cheapest when it is preventive — the calendar's job is catching the $50 problem before it becomes the $5,000 problem. {homeAge} determines what is wearing out; {climate} determines what {season} demands. Tasks split into monthly checklists small enough to actually do. Safety-critical items (detectors, gas, electrical, water) get flagged and never deferred. Some tasks need a pro — the calendar says which and why. Every task gets a time and cost estimate so the season is plannable. The log turns maintenance into a record that protects resale value.\n\nWHAT TO DELIVER:\n1. The {season} overview: what this season demands of a {homeType} in {climate} — the theme and the 3 highest-priority items.\n2. Monthly checklists for the {season} months: each task with estimated time, estimated cost, and whether it is DIY or pro — sequenced so dependent tasks order correctly.\n3. Safety-critical flags: the items that protect life and structure (smoke/CO detectors, water heater, electrical, gas, gutters/drainage) marked clearly with their non-negotiable schedule.\n4. The {homeAge}-year-old home watch list: what typically needs attention at this age for a {homeType}, and what to inspect now.\n5. Pro-vs-DIY guidance: which tasks need a licensed professional, what to ask when hiring, and the cost ranges.\n6. The supply list: everything needed for the season's DIY tasks, bought once.\n7. The completion log format: the simple template (date, task, done by, cost, notes) and where to keep it.\n8. The seasonal transition note: what {season} hands off to the next season — the bridge tasks.\n9. The annual rhythm: how this {season} calendar fits into a full-year cycle, so nothing falls between seasons.\n\nA high-quality calendar means the {homeType} is protected through {season} for a known cost and time — no emergency calls that preventive care would have avoided.",
    "description": "Generates a seasonal home maintenance checklist with costs, safety flags, and a completion log.",
    "category": "planning",
    "variables": {
      "homeType": {
        "label": "Home Type",
        "question": "What type of home?",
        "type": "select",
        "options": [
          "Apartment",
          "Condo",
          "Townhouse",
          "Single-family home"
        ],
        "required": true
      },
      "season": {
        "label": "Season",
        "question": "Which season?",
        "type": "select",
        "options": [
          "Spring",
          "Summer",
          "Fall",
          "Winter"
        ],
        "required": true
      },
      "homeAge": {
        "label": "Home Age",
        "question": "About how old is the home?",
        "type": "text",
        "placeholder": "e.g., 15 years, or built in 2008",
        "required": true
      },
      "climate": {
        "label": "Climate",
        "question": "What is your climate like?",
        "type": "select",
        "options": [
          "Hot",
          "Cold",
          "Mild",
          "Humid",
          "Dry"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Garden Planting Calendar",
    "displayDescription": "Builds a beginner-friendly, zone-specific planting calendar with sow dates, spacing, harvest windows, and month-by-month tasks.",
    "id": "planning-074",
    "prompt": "Act as a gardening coach and build a planting calendar for {season} in growing zone {zone}.\n\nCONTEXT: Crops I want: {crops}. My growing space: {gardenSpace}. My gardening experience: {experience}. Sunlight situation: {sunlight}.\n\nGARDEN PRINCIPLES: Timing is everything and it is zone-specific — {zone} determines the dates, not generic advice. Each crop needs its indoor start, transplant, and direct-sow dates, because planting at the wrong time is the #1 beginner failure. Spacing is not optional; crowded plants underperform. {gardenSpace} and {sunlight} are hard constraints that determine what will actually thrive. Keep it realistic for {experience}: fewer crops done well beat many crops done poorly. Succession planting extends the harvest without extending the work.\n\nWHAT TO DELIVER:\n1. The crop-by-crop plan for {crops}: each with indoor start date, transplant date, direct-sow date (whichever apply) for zone {zone} in {season}, spacing requirements, days to maturity, and harvest window.\n2. The reality check for {experience}: which of {crops} are beginner-friendly wins, which are ambitious, and what to do about the ambitious ones (attempt with backup, or defer).\n3. The space plan for {gardenSpace}: where each crop goes given {sunlight} — the layout with companion planting notes and what not to plant together.\n4. The month-by-month task list: soil prep, planting, watering schedule, fertilizing, and pest watch — specific to {season} in zone {zone}.\n5. The watering schedule: how much, how often, adjusted for {season} heat and {gardenSpace} (containers dry faster).\n6. Pest and disease watch: the 4-5 most likely problems for {crops} in {zone}, what they look like, and the organic-first responses.\n7. The succession plan: what gets planted after the first harvests to keep {gardenSpace} producing.\n8. The beginner's toolkit: the minimal tools and supplies needed, with costs.\n9. The 3 mistakes beginners make in zone {zone} for {season}, and how this calendar avoids each.\n\nA high-quality calendar is one I can follow week by week in {gardenSpace} and actually harvest from — timed to {zone}, honest about {experience}, and fitted to {sunlight}.",
    "description": "Produces a zone-specific planting calendar with dates, spacing, layout, and monthly tasks.",
    "category": "planning",
    "variables": {
      "zone": {
        "label": "Growing Zone",
        "question": "What is your growing zone?",
        "type": "text",
        "placeholder": "e.g., 9b",
        "required": true
      },
      "season": {
        "label": "Season",
        "question": "Which growing season?",
        "type": "select",
        "options": [
          "Spring",
          "Summer",
          "Fall",
          "Winter"
        ],
        "required": true
      },
      "crops": {
        "label": "Crops",
        "question": "Which crops do you want to grow?",
        "type": "textarea",
        "placeholder": "e.g., Tomatoes, basil, peppers, lettuce",
        "required": true
      },
      "gardenSpace": {
        "label": "Growing Space",
        "question": "What is your growing space?",
        "type": "text",
        "placeholder": "e.g., 4x8 raised bed plus containers",
        "required": true
      },
      "sunlight": {
        "label": "Sunlight",
        "question": "How much sun does the space get?",
        "type": "select",
        "options": [
          "Full sun (6+ hrs)",
          "Partial sun (3-6 hrs)",
          "Mostly shade"
        ],
        "required": true
      },
      "experience": {
        "label": "Experience",
        "question": "What is your gardening experience?",
        "type": "select",
        "options": [
          "Complete beginner",
          "Some experience",
          "Experienced"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Home Winterizing Checklist",
    "displayDescription": "Prioritizes winterizing tasks by energy savings and damage prevention, with DIY-or-pro guidance, costs, and an emergency kit list.",
    "id": "planning-075",
    "prompt": "Act as a home winterization specialist and create a prioritized checklist for my {homeType} in a {climate} climate.\n\nCONTEXT: Budget: ${budget}. Heating system: {heatingType}. My biggest winter worry: {biggestWorry}.\n\nWINTERIZING PRINCIPLES: Prioritize by two axes: energy savings (what lowers bills) and damage prevention (what avoids disasters) — frozen pipes and heating failures are the expensive ones. {climate} sets the intensity: mild winters need efficiency, harsh winters need survival. {heatingType} determines the specific prep. DIY-vs-pro is a safety decision as much as a money one. {biggestWorry} gets addressed head-on with its own section. The emergency kit is not optional — it is the plan for when prevention is not enough.\n\nWHAT TO DELIVER:\n1. The prioritized checklist: tasks ordered by impact (damage prevention first, then energy savings), each with DIY-vs-pro recommendation, cost estimate, and time — summing within ${budget}.\n2. Plumbing freeze protection: the specific steps for {climate} and a {homeType} — pipe insulation priorities, the faucet-drip protocol, what to do during the cold snap, and the shutoff valve location check.\n3. Heating system prep for {heatingType}: the service checklist, filter schedule, thermostat strategy, and the \"call a pro now\" warning signs.\n4. The building envelope: windows, doors, attic, and the air-sealing priorities with their payback logic.\n5. The {biggestWorry} section: the dedicated plan that neutralizes my specific fear.\n6. The emergency kit list: what to have on hand for power outages and cold snaps in {climate} — heat, light, food, water, communication.\n7. The cold-snap protocol: what to do when extreme cold hits — the checklist to run that night.\n8. The thermostat and energy strategy: the settings that balance comfort and cost all winter.\n9. The spring reversal note: what to undo or check when winter ends.\n\nA high-quality checklist means I face {climate} winter in my {homeType} with {heatingType} heat knowing the pipes are safe, the bills are controlled, and {biggestWorry} is handled.",
    "description": "Generates a prioritized winterizing checklist with freeze protection, heating prep, and an emergency kit.",
    "category": "planning",
    "variables": {
      "homeType": {
        "label": "Home Type",
        "question": "What type of home?",
        "type": "select",
        "options": [
          "Apartment",
          "Condo",
          "Townhouse",
          "Single-family home"
        ],
        "required": true
      },
      "climate": {
        "label": "Climate",
        "question": "How harsh are winters?",
        "type": "select",
        "options": [
          "Mild winters",
          "Moderate winters",
          "Harsh winters"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "Budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 300",
        "required": true
      },
      "heatingType": {
        "label": "Heating System",
        "question": "What type of heating do you have?",
        "type": "text",
        "placeholder": "e.g., Gas furnace, heat pump, baseboard",
        "required": true
      },
      "biggestWorry": {
        "label": "Biggest Worry",
        "question": "What is your biggest winter worry?",
        "type": "textarea",
        "placeholder": "e.g., Pipes freezing while we're away",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Back-to-School Family Plan",
    "displayDescription": "Plans the last two weeks of summer and the first week of school: sleep reset, supplies, forms, logistics, and a family calendar system.",
    "id": "planning-076",
    "prompt": "Act as a family logistics coach and build a back-to-school plan. School starts {schoolStart}.\n\nCONTEXT: Kids: {kids}, ages {ages}. Their schedules: {schedules}. Supplies run still needed: {suppliesNeeded}. After-school care situation: {afterSchoolCare}.\n\nFAMILY PLAN PRINCIPLES: The transition has two phases: the last two weeks of summer (reset sleep, gather supplies, handle forms) and the first week of school (execute logistics flawlessly). Sleep schedule reset starts 10-14 days out — shifting gradually, not the night before. {schedules} drive everything: drop-off, pickup, lunches, and homework all hang off them. The family calendar system is the infrastructure that makes the whole term work. The first week needs a day-by-day logistics plan because that is when systems get tested. {afterSchoolCare} must be locked before day one.\n\nWHAT TO DELIVER:\n1. The last-two-weeks-of-summer plan: the sleep reset schedule (gradual shift tied to {schedules}), the supply shopping (leveraging {suppliesNeeded}), forms and registrations with deadlines, and the \"practice run\" morning.\n2. The supplies and forms checklist: per child (from {kids} kids, ages {ages}), what to buy vs. what the school provides, and every form with its due date.\n3. First-week-of-school logistics, day by day: drop-off plan, pickup plan, lunch system (pack vs. buy, the weekly lunch prep), and the after-school handoff per {afterSchoolCare}.\n4. The homework station setup: where, what it needs, and the routine (when homework happens, the parent's role by age).\n5. The morning routine: timed, per child, with the launch checklist (the 5 things checked before leaving).\n6. The family calendar system for the term: the tool, who updates it, the weekly 15-minute family sync, and how school communications get captured.\n7. Teacher communication: the intro approach, what to share about each child, and the conference prep.\n8. The first-month adjustment check: what to watch for in each child (from {ages}), and when to intervene vs. give it time.\n9. The parent sanity plan: what the adults need in the first two weeks (it is a transition for them too).\n\nA high-quality plan means {schoolStart} arrives with supplies ready, sleep on schedule, logistics rehearsed, and the family calendar running — the first week feels managed, not survived.",
    "description": "Creates a family transition plan from summer into the school year with logistics and a calendar system.",
    "category": "planning",
    "variables": {
      "kids": {
        "label": "Kids",
        "question": "How many kids?",
        "type": "number",
        "placeholder": "e.g., 2",
        "required": true
      },
      "schoolStart": {
        "label": "School Start",
        "question": "When does school start?",
        "type": "date",
        "required": true
      },
      "schedules": {
        "label": "Schedules",
        "question": "What are their school schedules?",
        "type": "textarea",
        "placeholder": "e.g., Emma 8-3 elementary, Jake 7:30-2:45 middle",
        "required": true
      },
      "suppliesNeeded": {
        "label": "Supplies Run Needed",
        "question": "Do you still need a supplies run?",
        "type": "boolean",
        "required": true
      },
      "ages": {
        "label": "Ages",
        "question": "What are their ages?",
        "type": "text",
        "placeholder": "e.g., 7 and 12",
        "required": true
      },
      "afterSchoolCare": {
        "label": "After-School Care",
        "question": "What is the after-school arrangement?",
        "type": "textarea",
        "placeholder": "e.g., Grandma picks up Tue/Thu, aftercare program MWF",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Exam Season Family Plan",
    "displayDescription": "Builds a household support plan around exams: quiet hours, meal strategy, sleep protection, stress relief, support roles, and a celebration.",
    "id": "planning-077",
    "prompt": "Act as a family support strategist and build an exam-season household plan.\n\nCONTEXT: The exams: {exams}. Dates: {examDates}. Who is taking them: {examinee}. Support the household can provide: {support}. The biggest stress point: {biggestStress}.\n\nSUPPORT PRINCIPLES: Exam performance is a household project, not a solo one — sleep, food, quiet, and emotional steadiness all come from the environment. The plan protects the foundations first: sleep schedule, real meals, and quiet hours are non-negotiable infrastructure. {support} gets organized into named roles so help is reliable, not random. Stress needs outlets: scheduled breaks beat breakdowns. The crunch needs boundaries (visitors, screens, noise) communicated in advance. And it ends with a celebration — the finish line matters psychologically.\n\nWHAT TO DELIVER:\n1. The exam calendar: {examDates} mapped with {exams}, each with its prep peak and the taper day before.\n2. Quiet hours: the household quiet schedule around study and sleep, with the rules posted and the exceptions named.\n3. The meal strategy: who cooks what when (leveraging {support}), the exam-day breakfast and lunch plan, snacks that sustain, and the no-cook backup nights.\n4. Sleep protection: the bedtime guardrails for {examinee}, the household's role in protecting them, and the wind-down support.\n5. Stress-relief breaks: the scheduled micro-breaks (movement, fresh air, fun) — when, how long, and who initiates them, addressing {biggestStress}.\n6. Support roles: each household member's named role from {support} (cook, quiet-enforcer, chauffeur, encourager) with what it actually involves.\n7. The boundary rules: visitors, screen time, noise, and social plans during the crunch — communicated to extended family in advance.\n8. Exam-day logistics: transport, what to bring, timing, and the calm-morning protocol per exam in {examDates}.\n9. The stress-signals watch: what tells us {examinee} is struggling (not just studying hard), and the response plan.\n10. The post-exams celebration plan: scheduled now, scaled to the effort — the thing everyone looks forward to.\n\nA high-quality plan means {examinee} feels the whole household rowing with them — and the celebration at the end is already on the calendar.",
    "description": "Designs a household plan that protects sleep, meals, and quiet during exam season, ending in celebration.",
    "category": "planning",
    "variables": {
      "exams": {
        "label": "Exams",
        "question": "Which exams are coming?",
        "type": "textarea",
        "placeholder": "e.g., AP Calculus, state bar, nursing boards",
        "required": true
      },
      "examDates": {
        "label": "Exam Dates",
        "question": "What are the exam dates?",
        "type": "textarea",
        "placeholder": "e.g., May 5, 7, and 12",
        "required": true
      },
      "support": {
        "label": "Support Available",
        "question": "What support can the household provide?",
        "type": "textarea",
        "placeholder": "e.g., Grandma cooks, sibling handles chores"
      },
      "examinee": {
        "label": "Examinee",
        "question": "Who is taking the exams?",
        "type": "text",
        "placeholder": "e.g., My daughter, a high school junior",
        "required": true
      },
      "biggestStress": {
        "label": "Biggest Stress",
        "question": "What is the biggest stress point?",
        "type": "textarea",
        "placeholder": "e.g., She spirals the night before big tests",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Family Screen-Time Plan",
    "displayDescription": "Sets age-appropriate limits, screen-free zones and times, weekday/weekend policy, an earn-extra-time system, and a monthly review.",
    "id": "planning-078",
    "prompt": "Act as a family media coach and design a screen-time plan for {kids} kids, ages {ages}.\n\nCONTEXT: Current rules: {currentRules}. Devices in play: {devices}. The biggest issue right now: {biggestIssue}. Our enforcement style: {enforcementStyle}.\n\nSCREEN-TIME PRINCIPLES: Rules work when they are age-appropriate, specific, and consistently enforced — vague limits produce daily negotiations. {ages} determines the limits: what is fine at 14 is not fine at 6. Zones and times (not just hours) shape the habit: where and when matter as much as how long. {biggestIssue} gets a direct intervention, not a generic rule. Parents model the behavior — the plan includes a parent commitment or it lacks credibility. {enforcementStyle} determines how the rules are introduced and held. The monthly review keeps the plan alive as kids grow.\n\nWHAT TO DELIVER:\n1. Age-appropriate daily limits for {ages}: per child, with the reasoning — weekday vs. weekend differentiated, and what counts as screen time (schoolwork vs. entertainment clarified).\n2. Screen-free zones and times: the places (dinner table, bedrooms) and times (mornings, before bed) that are sacred, with the why for each.\n3. The weekday vs. weekend policy: the two rule sets, written plainly enough to post on the fridge.\n4. The earn-extra-time system: how kids earn bonus time (chores, reading, outdoor play), the exchange rate, and the cap — designed so it builds good habits, not just more screen hours.\n5. Device-specific rules for {devices}: what each device is for, where it lives, and its own limits.\n6. The direct intervention for {biggestIssue}: the specific rule, routine change, or conversation that addresses it.\n7. The parent modeling commitment: the 2-3 specific behaviors parents commit to — because kids enforce fairness ruthlessly.\n8. The rollout conversation: how to introduce this to the kids given {enforcementStyle} — the script for the family meeting, including where kids get input.\n9. The monthly review: what to assess, how kids participate, and the adjustment rules as {ages} change.\n10. The consequence ladder: what happens on violations — graduated, predictable, and related to the offense.\n\nA high-quality plan ends the daily negotiations: the rules are clear, the zones are sacred, {biggestIssue} is addressed, and the parents are visibly following their own rules.",
    "description": "Creates a family screen-time policy with limits, zones, earn-extra system, and a monthly review.",
    "category": "planning",
    "variables": {
      "kids": {
        "label": "Kids",
        "question": "How many kids?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "ages": {
        "label": "Ages",
        "question": "What are their ages?",
        "type": "textarea",
        "placeholder": "e.g., 6, 10, 14",
        "required": true
      },
      "currentRules": {
        "label": "Current Rules",
        "question": "What rules exist today?",
        "type": "textarea",
        "placeholder": "e.g., No rules yet, or 1 hr on school nights"
      },
      "devices": {
        "label": "Devices",
        "question": "Which devices are in play?",
        "type": "textarea",
        "placeholder": "e.g., Tablets, phones, gaming console, TV",
        "required": true
      },
      "biggestIssue": {
        "label": "Biggest Issue",
        "question": "What is the biggest screen-time issue right now?",
        "type": "textarea",
        "placeholder": "e.g., Bedtime battles over tablets",
        "required": true
      },
      "enforcementStyle": {
        "label": "Enforcement Style",
        "question": "What is your enforcement style?",
        "type": "select",
        "options": [
          "Strict and clear",
          "Collaborative",
          "Flexible"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Budget Planning Session",
    "displayDescription": "Runs a zero-based budget session that allocates every dollar, sets category targets, builds in fun money, and defines overspend rules.",
    "id": "planning-079",
    "prompt": "Act as a budget coach and run a complete budget planning session with me.\n\nCONTEXT: Monthly take-home income: ${income}. Fixed costs: {fixedCosts}. Financial goals: {goals}. Planning period: {period}. Typical variable spending: {variableSpending}. My budgeting history: {pastBudgeting} — calibrate the approach to this.\n\nBUDGET PRINCIPLES: Zero-based means every dollar of ${income} gets a job — income minus allocations equals zero, with the math shown. Fixed costs from {fixedCosts} are the foundation; variable spending from {variableSpending} is where the truth lives. {goals} get funded as line items, not leftovers. Fun money is structural, not cheating — budgets without it get abandoned. Overspending needs pre-written rules, or every month is an exception. {pastBudgeting} tells us whether to start simple or go detailed.\n\nWHAT TO DELIVER:\n1. The zero-based budget table: every dollar of ${income} allocated across categories — fixed (from {fixedCosts}), variable (from {variableSpending}, with targets), goals (from {goals}), fun money, and buffer — summing to zero, math shown.\n2. Category targets: each variable category with its target, the reasoning, and the one behavior change that hits it.\n3. The {goals} funding plan: how much per {period} goes to each goal, automated how, and the milestone dates.\n4. Fun money: the amount, the rules (no guilt, no tracking beyond the cap), and why it makes the budget stick.\n5. The sinking funds: irregular expenses (annual bills, holidays, car maintenance) converted to monthly set-asides so they never ambush the budget.\n6. Overspend rules: what happens when a category blows — the 3 options (borrow from another category, adjust next period, or the spending freeze trigger) and which applies when.\n7. The {period} operating rhythm: when money moves, when to check balances, fitted to {period}.\n8. The monthly review ritual: the 20-minute session — what to compare, the 3 questions, and when to rewrite vs. recommit to the budget.\n9. The {pastBudgeting} calibration: given my history, the specific simplification or guardrail that makes THIS budget the one that sticks.\n\nA high-quality session ends with a budget I believe in: every dollar assigned, {goals} funded, fun money protected, and the overspend rules written before I need them.",
    "description": "Builds a zero-based budget with category targets, sinking funds, and a monthly review ritual.",
    "category": "planning",
    "variables": {
      "income": {
        "label": "Income",
        "question": "Monthly take-home income in dollars?",
        "type": "number",
        "placeholder": "e.g., 5200",
        "required": true
      },
      "fixedCosts": {
        "label": "Fixed Costs",
        "question": "List fixed costs.",
        "type": "textarea",
        "placeholder": "e.g., Rent 1400, car 320, insurance 150",
        "required": true
      },
      "goals": {
        "label": "Goals",
        "question": "What financial goals?",
        "type": "textarea",
        "placeholder": "e.g., Save 500/mo, pay off card",
        "required": true
      },
      "period": {
        "label": "Planning Period",
        "question": "What planning period?",
        "type": "select",
        "options": [
          "Weekly",
          "Biweekly",
          "Monthly"
        ],
        "required": true
      },
      "variableSpending": {
        "label": "Variable Spending",
        "question": "What does your typical variable spending look like?",
        "type": "textarea",
        "placeholder": "e.g., Groceries $600, dining $250, gas $150",
        "required": true
      },
      "pastBudgeting": {
        "label": "Budgeting History",
        "question": "What is your budgeting history?",
        "type": "select",
        "options": [
          "First real budget",
          "Tried before, didn't stick",
          "Budget regularly"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "90-Day Goal Plan",
    "displayDescription": "Breaks a goal into three 30-day sprints with themes and measurable outcomes, weekly actions, obstacle plans, and a mid-point pivot checkpoint.",
    "id": "planning-080",
    "prompt": "Act as a 90-day execution coach and build a complete plan for my goal: {goal}, starting {startDate}.\n\nCONTEXT: Key milestones: {milestones}. Likely obstacles: {obstacles}. I can give this {weeklyHours} hours per week. My accountability: {accountability}.\n\n90-DAY PRINCIPLES: Ninety days is long enough for real change and short enough to stay urgent. Three 30-day sprints with distinct themes create natural chapters — each sprint needs its own measurable outcome, not just activity. {weeklyHours} hours/week is the capacity budget; weekly actions must fit inside it. {obstacles} get pre-planned responses now, not improvised later. The mid-point pivot checkpoint is sacred: day 45 is for honest assessment, including the courage to change course. {accountability} is the enforcement mechanism — name how it works concretely.\n\nWHAT TO DELIVER:\n1. The three 30-day sprints: each with its theme, its measurable outcome (tied to {milestones}), and why this sequence builds momentum — sprint 1 foundations, sprint 2 acceleration, sprint 3 finish.\n2. Weekly actions for all 12 weeks: specific, fitted to {weeklyHours} hours/week, each week with its deliverable — no vague weeks.\n3. The milestone map: {milestones} placed on their target dates across the 90 days.\n4. Obstacle plans: each obstacle in {obstacles} with its if-then response and the early warning sign.\n5. The Friday review ritual: the 15-minute weekly check — the 3 numbers or checkmarks, and the rule for adjusting next week.\n6. The day-45 pivot checkpoint: the honest assessment questions, the criteria for staying the course vs. pivoting vs. cutting scope, and how to replan the second half.\n7. The accountability design: how {accountability} works in practice — the check-in rhythm, what gets reported, and what happens on a missed week.\n8. The finish-line definition: what \"done\" looks like on day 90 for {goal} — specific, verifiable, and celebrated.\n9. The day-91 handoff: what the next 90 days build on, so the finish is a foundation, not an end.\n\nA high-quality 90-day plan makes {goal} feel inevitable given execution: every week is specified, {obstacles} are defused in advance, and day 45 cannot be skipped.",
    "description": "Structures 90 days into themed sprints with weekly actions, obstacle plans, and review rituals.",
    "category": "planning",
    "variables": {
      "goal": {
        "label": "Goal",
        "question": "What is the goal?",
        "type": "text",
        "placeholder": "e.g., Launch freelance business",
        "required": true
      },
      "startDate": {
        "label": "Start Date",
        "question": "When does the 90 days start?",
        "type": "date",
        "required": true
      },
      "milestones": {
        "label": "Milestones",
        "question": "What are the key milestones?",
        "type": "textarea",
        "placeholder": "e.g., Website live, 3 clients, $5k revenue",
        "required": true
      },
      "obstacles": {
        "label": "Obstacles",
        "question": "What obstacles do you expect?",
        "type": "textarea",
        "placeholder": "e.g., Limited time, no audience yet",
        "required": true
      },
      "weeklyHours": {
        "label": "Weekly Hours",
        "question": "How many hours per week can you give this goal?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "accountability": {
        "label": "Accountability",
        "question": "What is your accountability setup?",
        "type": "textarea",
        "placeholder": "e.g., Weekly check-in with my brother, or a coach",
        "required": true
      }
    }
  },
  {
    "displayTitle": "30-60-90 Day Plan",
    "displayDescription": "Structures the first 90 days in a role: learning, contribution, and ownership phases with relationship maps, quick wins, and success metrics.",
    "id": "planning-081",
    "prompt": "Act as an executive onboarding coach and build a 30-60-90 day plan for my {role} role at {company}, starting {startDate}.\n\nCONTEXT: My top priorities: {priorities}. The team and stakeholders I need to win over: {stakeholders}. The #1 outcome I must deliver in 90 days: {keyOutcome}.\n\nONBOARDING PRINCIPLES: The phases have distinct jobs — days 1-30 learn (listen more than you act), days 31-60 contribute (deliver quick wins, form opinions), days 61-90 own (lead something real). Quick wins in the first 60 days buy the credibility that funds bigger moves. {stakeholders} are mapped deliberately: supporters, skeptics, and decision-makers get different approaches. {keyOutcome} is the north star every phase points at. Learning is structured — the questions to ask, not just the meetings to attend. Risks and cultural landmines get named early.\n\nWHAT TO DELIVER:\n1. Days 1-30 (Learn): the structured learning plan — who to meet (from {stakeholders}), the questions to ask each, the systems/processes to master, the listening-tour approach. Deliverable: a written assessment of the role, team, and opportunities.\n2. Days 31-60 (Contribute): 2-3 quick wins tied to {priorities} — chosen for visibility and achievability — plus the opinions I should start forming and sharing.\n3. Days 61-90 (Own): the ownership move — the project or responsibility I take full ownership of, driving toward {keyOutcome}.\n4. The stakeholder map: {stakeholders} categorized (supporter/skeptic/decision-maker), each with the relationship plan and meeting cadence.\n5. The {keyOutcome} path: how each phase contributes to the 90-day outcome, with the milestone dates.\n6. The 1:1 strategy: with my manager — the questions for week 1, the check-in rhythm, and how to surface concerns early.\n7. Success metrics: how I measure each phase — the numbers or evidence that say \"on track.\"\n8. Risks and cultural landmines: what to avoid in the first 90 days at {company} (the unwritten rules), and the recovery plan if I step on one.\n9. The 90-day review prep: what to present at day 90 — wins, learnings, and the plan for the next 90.\n\nA high-quality plan means I arrive {startDate} knowing exactly what each phase demands — and day 90 ends with {keyOutcome} delivered and credibility banked.",
    "description": "Builds a phased 90-day onboarding plan with quick wins, stakeholder strategy, and success metrics.",
    "category": "planning",
    "variables": {
      "role": {
        "label": "Role",
        "question": "What is the role?",
        "type": "text",
        "placeholder": "e.g., Marketing Manager",
        "required": true
      },
      "company": {
        "label": "Company",
        "question": "Which company?",
        "type": "text",
        "placeholder": "e.g., Acme Corp",
        "required": true
      },
      "startDate": {
        "label": "Start Date",
        "question": "When do you start?",
        "type": "date",
        "required": true
      },
      "priorities": {
        "label": "Priorities",
        "question": "What are your top priorities?",
        "type": "textarea",
        "placeholder": "e.g., Grow pipeline, fix onboarding emails",
        "required": true
      },
      "stakeholders": {
        "label": "Stakeholders",
        "question": "Who are the key stakeholders to win over?",
        "type": "textarea",
        "placeholder": "e.g., My manager Priya, the sales lead, the CEO",
        "required": true
      },
      "keyOutcome": {
        "label": "Key Outcome",
        "question": "What is the #1 outcome you must deliver in 90 days?",
        "type": "textarea",
        "placeholder": "e.g., Launch the new onboarding email sequence",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Conference Trip Plan",
    "displayDescription": "Maximizes conference ROI with a session plan, networking targets, meeting scheduling, travel logistics, and a post-event follow-up system.",
    "id": "planning-082",
    "prompt": "Act as a conference strategist and plan my trip to {event} in {location} on {dates}.\n\nCONTEXT: Sessions of interest: {sessions}. Budget: ${budget}. My top goal for the trip: {topGoal}.\n\nCONFERENCE PRINCIPLES: Conferences pay off through people and takeaways, not attendance — {topGoal} determines where every hour goes. Sessions get ranked by goal-fit, not FOMO; conflicts get decided in advance. Networking needs targets and tactics, not hope — the 5 people, the opener, the follow-up. Logistics (travel, hotel, meals) are planned once, cheaply, and early. Notes become a trip report within 48 hours or they decay. The budget ${budget} is allocated across travel, stay, food, and the networking that matters.\n\nWHAT TO DELIVER:\n1. The session plan: {sessions} ranked against {topGoal} — must-attend vs. optional — with the conflict decisions made and the backup for each slot.\n2. The networking plan: 5 target people or people-types, how to identify them, the opener for each, and the meeting-scheduling approach (before and during the event).\n3. The daily itinerary: {dates} day by day — sessions, meetings, meals, and buffer — built around {topGoal}.\n4. Travel logistics: flights, hotel, ground transport, and the booking order that minimizes cost within ${budget}.\n5. The budget breakdown: ${budget} allocated across travel, lodging, food, registration extras, and networking — with the 10% contingency.\n6. The packing list: conference-specific (business cards or digital equivalent, chargers, the comfortable shoes, the notebook system).\n7. The note-taking system: the per-session template (3 takeaways, 1 action, people met) so notes are usable later.\n8. The 48-hour trip report: the template for converting notes into the report — key learnings, contacts, and action items — due two days after {dates} ends.\n9. The follow-up system: the 1-week follow-up plan for every meaningful contact — the message, the timing, the ask.\n10. The ROI check: how to judge whether {topGoal} was achieved, and what to do differently next time.\n\nA high-quality plan turns {event} from an expense into an asset: every hour serves {topGoal}, the right 5 people get met, and the follow-up happens on schedule.",
    "description": "Plans a conference trip for maximum ROI with sessions, networking targets, and follow-up systems.",
    "category": "planning",
    "variables": {
      "event": {
        "label": "Event",
        "question": "Which conference/event?",
        "type": "text",
        "placeholder": "e.g., SaaStr Annual",
        "required": true
      },
      "location": {
        "label": "Location",
        "question": "Where is it?",
        "type": "text",
        "placeholder": "e.g., San Mateo, CA",
        "required": true
      },
      "dates": {
        "label": "Dates",
        "question": "What are the dates?",
        "type": "text",
        "placeholder": "e.g., Sept 10-12",
        "required": true
      },
      "sessions": {
        "label": "Sessions",
        "question": "Which sessions interest you?",
        "type": "textarea",
        "placeholder": "e.g., Keynote, pricing workshop, AI panel"
      },
      "budget": {
        "label": "Budget",
        "question": "Budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 2500",
        "required": true
      },
      "topGoal": {
        "label": "Top Goal",
        "question": "What is your #1 goal for this trip?",
        "type": "textarea",
        "placeholder": "e.g., Land 3 partnership conversations",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Study Abroad Plan",
    "displayDescription": "Plans the full study abroad journey: program fit, budget, application timeline, visa and logistics, academics, and safety prep.",
    "id": "planning-083",
    "prompt": "Act as a study abroad advisor and build a complete plan for {program} during {term}.\n\nCONTEXT: Budget: ${budget}. My goals for going: {goals}. My biggest concern: {biggestConcern}. Current language level (if relevant): {languageLevel}.\n\nSTUDY ABROAD PRINCIPLES: The program must fit {goals} — language, academics, career, or adventure — because \"abroad\" is not a goal, it is a location. ${budget} is built honestly: tuition, housing, flights, insurance, visa, and the real monthly cost of living there. The application timeline works backward from deadlines with buffer — visas are the long pole. Academics need pre-approval so credits transfer. Safety prep is practical, not fearful. {biggestConcern} gets its own mitigation plan. And the experience needs a design: the things I will do that make this more than classes in another country.\n\nWHAT TO DELIVER:\n1. Program fit assessment: how {program} in {term} serves each of {goals} — the honest match, including what it will not deliver.\n2. The full budget: ${budget} broken across tuition/program fees, housing, flights, insurance, visa, and monthly living costs (realistic for the destination) — with the funding gap or surplus stated plainly.\n3. The application timeline: working backward from deadlines — application, financial aid/scholarships, acceptance, visa application, booking — each with its date and buffer.\n4. Visa and logistics: the visa type, requirements, timeline, and the logistics checklist (passport validity, insurance, banking abroad, phone plan).\n5. Academics: the courses to take, the credit-transfer pre-approval process, and how they fit my degree plan.\n6. Housing: the options through {program}, the trade-offs, and the recommendation.\n7. The {biggestConcern} mitigation: the specific plan that addresses my fear directly.\n8. Safety and health prep: the practical brief — emergency numbers, health insurance coverage, the embassy registration, and the common-sense rules for the destination.\n9. The experience design: the 5-10 things beyond classes that make {term} abroad count — travel, language, cultural immersion — tied to {goals}.\n10. The pre-departure checklist: the final 30 days, sequenced, nothing forgotten.\n\nA high-quality plan means I board the plane with the budget funded, the visa in hand, credits approved, and {biggestConcern} handled — ready to make {term} the experience {goals} describe.",
    "description": "Builds a complete study abroad plan from budget and visa through academics and safety.",
    "category": "planning",
    "variables": {
      "program": {
        "label": "Program",
        "question": "Which program?",
        "type": "text",
        "placeholder": "e.g., CIEE Barcelona",
        "required": true
      },
      "term": {
        "label": "Term",
        "question": "Which term?",
        "type": "text",
        "placeholder": "e.g., Fall 2027",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "Budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 15000",
        "required": true
      },
      "goals": {
        "label": "Goals",
        "question": "What are your goals for studying abroad?",
        "type": "textarea",
        "placeholder": "e.g., Spanish fluency, international business exposure",
        "required": true
      },
      "biggestConcern": {
        "label": "Biggest Concern",
        "question": "What is your biggest concern?",
        "type": "textarea",
        "placeholder": "e.g., Safety, or being away from family",
        "required": true
      },
      "languageLevel": {
        "label": "Language Level",
        "question": "What is your current language level, if relevant?",
        "type": "text",
        "placeholder": "e.g., Intermediate Spanish"
      }
    }
  },
  {
    "displayTitle": "Internship Plan",
    "displayDescription": "Turns an internship into a career asset: learning goals, a project portfolio, a mentor map, weekly rhythm, and a conversion or recommendation strategy.",
    "id": "planning-084",
    "prompt": "Act as a career coach and build an internship success plan for my {role} internship at {company}, starting {startDate}.\n\nCONTEXT: My learning goals: {learningGoals}. Internship length: {duration}. What I want afterward: {afterGoal}.\n\nINTERNSHIP PRINCIPLES: Internships are judged by what you can show afterward — {learningGoals} become portfolio pieces and resume bullets, not just experiences. The first two weeks set the trajectory: learn fast, ask well, deliver early. Mentors are built deliberately, not hoped for. A signature project — one thing with your name on it — is worth more than months of tasks. Feedback is requested, not waited for. The last month is the conversion campaign toward {afterGoal}.\n\nWHAT TO DELIVER:\n1. The first-two-weeks plan: learning sprint — systems, people, norms — with the questions to ask and the early deliverable that signals competence.\n2. Learning goal mapping: each goal in {learningGoals} tied to specific tasks, skills, and the evidence I will collect.\n3. The signature project: the one substantive thing I will own during {duration} — scoped, proposed to my manager, with milestones.\n4. The mentor map: the 3-4 people to build relationships with, what each offers, and how to approach them.\n5. The weekly rhythm: the operating cadence — 1:1s with my manager, the Friday self-review, the running accomplishments log.\n6. The feedback system: how and when to ask for feedback (not just the midpoint review), and how to act on it visibly.\n7. The portfolio build: what artifacts to save throughout {duration} (respecting confidentiality) so I can show the work later.\n8. The {afterGoal} campaign: the last-month plan — the conversion conversation or the recommendation-letter asks, with timing and scripts.\n9. The resume translation: how each part of the internship becomes resume bullets — drafted as I go, not reconstructed later.\n10. The exit: the handoff document, the thank-yous, and the relationship maintenance plan.\n\nA high-quality plan means I finish {duration} at {company} with a portfolio, mentors, a resume full of proof, and {afterGoal} in motion — not just \"a good experience.\"",
    "description": "Designs an internship plan with learning goals, a signature project, mentors, and a conversion strategy.",
    "category": "planning",
    "variables": {
      "role": {
        "label": "Role",
        "question": "What is the internship role?",
        "type": "text",
        "placeholder": "e.g., Marketing Intern",
        "required": true
      },
      "company": {
        "label": "Company",
        "question": "Which company?",
        "type": "text",
        "placeholder": "e.g., Acme Corp",
        "required": true
      },
      "startDate": {
        "label": "Start Date",
        "question": "When does it start?",
        "type": "date",
        "required": true
      },
      "learningGoals": {
        "label": "Learning Goals",
        "question": "What do you want to learn?",
        "type": "textarea",
        "placeholder": "e.g., Campaign analytics, client communication",
        "required": true
      },
      "duration": {
        "label": "Duration",
        "question": "How long is the internship?",
        "type": "text",
        "placeholder": "e.g., 12 weeks, or June-August",
        "required": true
      },
      "afterGoal": {
        "label": "After Goal",
        "question": "What do you want after the internship?",
        "type": "select",
        "options": [
          "Full-time offer",
          "Strong recommendation letters",
          "Portfolio pieces",
          "Return offer next summer"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Thesis & Dissertation Timeline",
    "displayDescription": "Works backward from the defense date into chapter milestones, research phases, advisor check-ins, and buffer for the inevitable delays.",
    "id": "planning-085",
    "prompt": "Act as a dissertation coach and build a realistic timeline for my {programType}.\n\nCONTEXT: Defense target: {defenseDate}. Chapters: {chapters}. Advisor: {advisor}. Current progress: {currentProgress}. Weekly hours available: {weeklyHours}.\n\nTHESIS PRINCIPLES: Work backward from {defenseDate} — defense prep, revisions, committee review, and writing all need real calendar space, and everything takes longer than planned. {chapters} become milestones with draft deadlines, not one giant \"write thesis\" task. Research and writing overlap; they are not sequential. {advisor} gets a structured check-in rhythm — advisors respond to drafts, not to silence. Buffer is not pessimism; it is the plan surviving contact with reality. {weeklyHours} hours/week is the capacity that sizes every milestone.\n\nWHAT TO DELIVER:\n1. The backward plan from {defenseDate}: defense prep, final revisions, committee review windows, and submission deadlines — each with its real duration.\n2. Chapter milestones: each chapter in {chapters} with its research-complete date, first-draft deadline, and revision window, sequenced for dependencies.\n3. The research phase plan: what research remains (from {currentProgress}), its timeline, and how it overlaps with writing.\n4. The weekly writing system: how {weeklyHours} hours/week convert to pages — the weekly page target, the writing ritual, and the anti-perfectionism rules.\n5. The advisor rhythm with {advisor}: check-in frequency, what to send before each meeting, and how to handle slow feedback.\n6. Committee management: when the committee sees what, and the politics of keeping everyone aligned.\n7. The buffer: where the slack lives in the timeline, and the tripwires that trigger using it vs. cutting scope.\n8. The stuck protocol: what to do when writing stalls — the specific tactics for each kind of stuck (no ideas, too many ideas, perfectionism, exhaustion).\n9. Defense prep: the final 4-6 weeks — presentation build, mock defense, anticipated questions.\n10. The post-defense closeout: revisions, formatting, submission, and the actual finish line.\n\nA high-quality timeline makes {defenseDate} believable: every chapter has a date, {weeklyHours} hours/week has a page target, {advisor} has a rhythm, and the buffer is real.",
    "description": "Creates a defense-date-driven thesis timeline with chapter milestones and an advisor rhythm.",
    "category": "planning",
    "variables": {
      "programType": {
        "label": "Program Type",
        "question": "What type of program?",
        "type": "select",
        "options": [
          "Master's thesis",
          "PhD dissertation",
          "Undergraduate thesis"
        ],
        "required": true
      },
      "defenseDate": {
        "label": "Defense Date",
        "question": "Target defense date?",
        "type": "date",
        "required": true
      },
      "chapters": {
        "label": "Chapters",
        "question": "What are the chapters/sections?",
        "type": "textarea",
        "placeholder": "e.g., Intro, lit review, methods, results, discussion",
        "required": true
      },
      "advisor": {
        "label": "Advisor",
        "question": "Who is your advisor?",
        "type": "text",
        "placeholder": "e.g., Dr. Smith"
      },
      "currentProgress": {
        "label": "Current Progress",
        "question": "Where are you right now?",
        "type": "textarea",
        "placeholder": "e.g., Proposal approved, data half collected",
        "required": true
      },
      "weeklyHours": {
        "label": "Weekly Hours",
        "question": "How many hours per week can you devote?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Research Project Plan",
    "displayDescription": "Structures a research project from question to deliverable: phases, methods, source strategy, milestones, and risk mitigation.",
    "id": "planning-086",
    "prompt": "Act as a research advisor and build a complete plan for my project on {topic}.\n\nCONTEXT: Deadline: {deadline}. Deliverable: {deliverable}. Resources available: {resources}. The research question, as I see it now: {researchQuestion}.\n\nRESEARCH PRINCIPLES: Great research starts with a sharp question — {researchQuestion} gets refined before anything else, because a fuzzy question produces fuzzy work. The project runs in phases (scoping, gathering, analysis, synthesis, writing), each with its own milestone and done-criteria. Sources are chosen strategically: quality beats quantity, and {resources} determine the approach. Analysis needs a method, not just a pile of notes. The deliverable {deliverable} shapes everything — a paper, a presentation, and a report are different projects. Risks (dead ends, inaccessible sources, scope creep) get mitigation plans.\n\nWHAT TO DELIVER:\n1. The refined research question: {researchQuestion} sharpened — scoped to fit {deadline}, with sub-questions that structure the inquiry.\n2. The phase plan: scoping, gathering, analysis, synthesis, and writing/production — each with its milestone, done-criteria, and time allocation within {deadline}.\n3. The source strategy: what to gather given {resources} — the key sources, where to find them, and the quality bar (when to stop gathering and start analyzing).\n4. The analysis method: how findings get organized and interpreted — the framework, the note-taking system, and how evidence maps to claims.\n5. The {deliverable} blueprint: the structure of the final product, section by section, with what each section must accomplish.\n6. Milestones with dates: the checkable progress points from now to {deadline}, each with its evidence of completion.\n7. Risk mitigation: the 3-4 most likely problems (dead ends, source gaps, scope creep, time crunch) with the response for each.\n8. The weekly rhythm: the operating cadence — research blocks, the Friday progress check, and the running outline that grows as findings come in.\n9. The quality bar: what makes this {deliverable} excellent rather than adequate — the standard to hold.\n\nA high-quality plan turns {topic} from an overwhelming subject into a sequenced project with a sharp question, a source strategy, and a {deliverable} blueprint — all landing by {deadline}.",
    "description": "Plans a research project from question refinement through phases to the final deliverable.",
    "category": "planning",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What is the research topic?",
        "type": "text",
        "placeholder": "e.g., Urban heat islands in Phoenix",
        "required": true
      },
      "deadline": {
        "label": "Deadline",
        "question": "What is the deadline?",
        "type": "date",
        "required": true
      },
      "deliverable": {
        "label": "Deliverable",
        "question": "What is the final deliverable?",
        "type": "text",
        "placeholder": "e.g., 20-page paper, or conference presentation",
        "required": true
      },
      "resources": {
        "label": "Resources",
        "question": "What resources are available?",
        "type": "textarea",
        "placeholder": "e.g., University library, survey tools, lab access",
        "required": true
      },
      "researchQuestion": {
        "label": "Research Question",
        "question": "What is your research question as you see it now?",
        "type": "textarea",
        "placeholder": "e.g., How do tree canopies affect neighborhood temperatures?",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Book Writing Plan",
    "displayDescription": "Turns a book idea into an executable plan: outline, word-count math, weekly writing targets, draft phases, and editing and publishing paths.",
    "id": "planning-087",
    "prompt": "Act as a book coach and build a complete writing plan for my book on {topic}.\n\nCONTEXT: Target length: {length}. Deadline: {deadline}. My writing schedule: {schedule}. Publishing path in mind: {publishingPath}.\n\nBOOK PRINCIPLES: Books get finished through arithmetic, not inspiration — {length} divided by writing days equals the daily target, and the plan lives or dies on that number. The outline comes before the drafting: structure is decided once, up front. {schedule} is the capacity constraint; the daily target must survive a bad week. Drafting and editing are separate phases — never edit while drafting. {publishingPath} shapes the finish: traditional, self, or hybrid have different timelines and requirements. The messy middle gets a specific survival plan.\n\nWHAT TO DELIVER:\n1. The word-count math: {length} broken into the daily/weekly target given {schedule} and {deadline} — with the buffer weeks built in, math shown.\n2. The book outline: the full structure — parts, chapters, and what each chapter delivers — designed for {topic}.\n3. The writing system: the ritual, the session structure, and the rules (draft forward only, the \"shitty first draft\" permission, the weekly word-count check).\n4. Draft phases: first draft, structural revision, line edit, proofread — each with its timeline, its job, and its done-criteria.\n5. The messy-middle survival plan: weeks 6-14ish, where most books die — the specific tactics (skip-ahead drafting, the accountability check, the minimum-viable-day rule).\n6. The feedback plan: beta readers — who, when they read what, and what feedback to ask for at each stage.\n7. The {publishingPath} path: the concrete steps, timeline, and costs for this route — proposal or manuscript prep, and what happens after the draft is done.\n8. The weekly review: the 15-minute check — words vs. target, outline drift, and the adjustment rule.\n9. The launch sketch: the pre-launch runway (audience building starts during writing, not after) — the minimum viable launch plan.\n\nA high-quality plan makes the book a math problem with a soul: {length} words at a survivable daily rate, an outline that holds, and a {publishingPath} path that starts before the draft ends.",
    "description": "Builds a book plan with word-count math, outline, draft phases, and a publishing path.",
    "category": "planning",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What is the book about?",
        "type": "text",
        "placeholder": "e.g., Productivity for new managers",
        "required": true
      },
      "length": {
        "label": "Length",
        "question": "Target length?",
        "type": "text",
        "placeholder": "e.g., 50,000 words",
        "required": true
      },
      "deadline": {
        "label": "Deadline",
        "question": "What is your deadline?",
        "type": "date",
        "required": true
      },
      "schedule": {
        "label": "Schedule",
        "question": "What is your writing schedule?",
        "type": "textarea",
        "placeholder": "e.g., 1 hour weekday mornings",
        "required": true
      },
      "publishingPath": {
        "label": "Publishing Path",
        "question": "Which publishing path are you considering?",
        "type": "select",
        "options": [
          "Traditional publishing",
          "Self-publishing",
          "Hybrid",
          "Undecided"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Podcast Launch Plan",
    "displayDescription": "Plans a podcast launch end to end: positioning, the first 5 episodes, production workflow, equipment, launch-week promotion, and growth.",
    "id": "planning-088",
    "prompt": "Act as a podcast launch strategist and build a complete plan for {show}, a {niche} podcast launching {launchDate}.\n\nCONTEXT: Publishing cadence: {cadence}. Format: {format}. My unfair advantage: {advantage}.\n\nPODCAST PRINCIPLES: Positioning wins before audio quality — {show} needs a sharp promise to a specific listener in {niche}, or it drowns. The first 5 episodes launch together (the binge bank) because one episode gives listeners nothing to stay for. Production is a workflow: record, edit, publish — each with its owner, tool, and time cost. {cadence} must be sustainable for a year, not just launch month. Launch week is a campaign, not a day. Growth is a system: guests, cross-promo, and clips — not hope.\n\nWHAT TO DELIVER:\n1. The positioning: {show}'s one-sentence promise, the specific listener, and the 3 differentiators in {niche} — plus the trailer script.\n2. The first 5 episodes: titles, the hook of each, and why this sequence converts a new listener into a subscriber.\n3. The {format} format design: segment structure, episode length, intro/outro, and the repeatable template.\n4. The production workflow: record → edit → publish, each step with tool, time cost, and owner — fitted to {cadence}.\n5. The equipment and setup: the minimum viable kit (mic, recording, hosting) with costs — the \"good enough to launch\" standard.\n6. The pre-launch runway: the 4-6 weeks before {launchDate} — trailer, the binge bank recorded, cover art, listings submitted, audience teasing.\n7. Launch week campaign: the day-by-day promotion plan — where, what, and the ask.\n8. The growth system: guest strategy (who, the outreach template), cross-promotion, and the clip engine for social.\n9. The sustainability check: the real weekly time cost of {cadence} vs. my capacity — and the simplification options if it is too much.\n10. The 90-day success metrics: downloads, reviews, and the leading indicators — with the decision criteria for continuing, pivoting, or pausing.\n\nA high-quality plan launches {show} with a sharp promise, 5 episodes in the bank, a workflow that survives {cadence}, and a growth system — not just a mic and hope.",
    "description": "Creates an end-to-end podcast launch plan from positioning through launch week and growth.",
    "category": "planning",
    "variables": {
      "show": {
        "label": "Show",
        "question": "What is the show called?",
        "type": "text",
        "placeholder": "e.g., The Founder Files",
        "required": true
      },
      "niche": {
        "label": "Niche",
        "question": "What is the niche?",
        "type": "text",
        "placeholder": "e.g., Startup stories",
        "required": true
      },
      "launchDate": {
        "label": "Launch Date",
        "question": "When is the launch date?",
        "type": "date",
        "required": true
      },
      "cadence": {
        "label": "Cadence",
        "question": "How often will you publish?",
        "type": "select",
        "options": [
          "Weekly",
          "Biweekly",
          "Monthly"
        ],
        "required": true
      },
      "format": {
        "label": "Format",
        "question": "What is the episode format?",
        "type": "select",
        "options": [
          "Solo",
          "Interview",
          "Co-hosted",
          "Mixed"
        ],
        "required": true
      },
      "advantage": {
        "label": "Unfair Advantage",
        "question": "What is your unfair advantage?",
        "type": "textarea",
        "placeholder": "e.g., Access to founders in my network"
      }
    }
  },
  {
    "displayTitle": "YouTube Channel Plan",
    "displayDescription": "Plans a YouTube channel launch: positioning, content pillars, the first 10 videos, production workflow, equipment, and a 90-day growth system.",
    "id": "planning-089",
    "prompt": "Act as a YouTube strategist and build a complete channel plan for a {niche} channel launching {launchDate}.\n\nCONTEXT: Upload cadence: {cadence}. Equipment on hand: {equipment}. My on-camera situation: {onCamera}. The viewer I serve: {viewer}.\n\nYOUTUBE PRINCIPLES: The channel is a promise to {viewer} — every video must serve them, and the positioning states it plainly. Content pillars (3-4) organize the channel so viewers know what they get. The first 10 videos are the foundation: searchable evergreen plus the packaging (title/thumbnail) practice. {cadence} must be sustainable — consistency beats intensity. Production is a batchable workflow fitted to {equipment} and {onCamera}. Growth is packaging + consistency + the first-90-day feedback loop.\n\nWHAT TO DELIVER:\n1. The channel positioning: the one-sentence promise to {viewer}, the 3-4 content pillars, and what makes this channel different in {niche}.\n2. The first 10 videos: titles (with packaging logic), the pillar each serves, and the sequence — including which 2-3 are the searchable evergreen anchors.\n3. The packaging system: title formulas, thumbnail principles, and the hook-first-30-seconds structure — with examples for the first 10.\n4. The production workflow: ideation → script → film → edit → publish, each with time cost and batching strategy — fitted to {cadence}, {equipment}, and {onCamera}.\n5. The equipment plan: what {equipment} covers, the gaps, and the minimum upgrades that actually matter (audio first).\n6. The channel setup: name, branding, banner, about section, playlists, and the trailer — the launch-day checklist.\n7. The 90-day content calendar: {cadence} mapped across 12 weeks with video topics assigned to pillars.\n8. The growth system: the feedback loop — which metrics matter when (CTR and retention first), the packaging iteration process, and the collaboration/outreach plan.\n9. The sustainability check: the real weekly hours of {cadence} vs. capacity — and the format simplifications if needed.\n10. The monetization path: the realistic timeline to requirements, and the revenue options beyond ads for {niche}.\n\nA high-quality plan launches the channel with a promise to {viewer}, 10 videos planned and packaged, a workflow that survives {cadence}, and a 90-day feedback loop — built around {equipment} and {onCamera}.",
    "description": "Builds a YouTube launch plan with positioning, content pillars, production workflow, and growth.",
    "category": "planning",
    "variables": {
      "niche": {
        "label": "Niche",
        "question": "What is the niche?",
        "type": "text",
        "placeholder": "e.g., Personal finance for students",
        "required": true
      },
      "cadence": {
        "label": "Cadence",
        "question": "How often will you upload?",
        "type": "select",
        "options": [
          "Weekly",
          "Biweekly",
          "2x per week"
        ],
        "required": true
      },
      "launchDate": {
        "label": "Launch Date",
        "question": "When is the launch date?",
        "type": "date",
        "required": true
      },
      "equipment": {
        "label": "Equipment",
        "question": "What equipment do you have?",
        "type": "textarea",
        "placeholder": "e.g., iPhone 15, ring light, no mic yet"
      },
      "onCamera": {
        "label": "On-Camera",
        "question": "What is your on-camera situation?",
        "type": "select",
        "options": [
          "On camera",
          "Faceless / voiceover",
          "Mixed"
        ],
        "required": true
      },
      "viewer": {
        "label": "Viewer",
        "question": "Who is the viewer you serve?",
        "type": "text",
        "placeholder": "e.g., College students drowning in debt",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Newsletter Launch Plan",
    "displayDescription": "Plans a newsletter launch: positioning, content engine, the first 5 issues, growth from zero, and a monetization path.",
    "id": "planning-090",
    "prompt": "Act as a newsletter strategist and build a complete launch plan for a {topic} newsletter for {audience}, publishing {cadence}, launching {launchDate}.\n\nCONTEXT: My unfair advantage: {advantage}. Monetization goal: {monetization}.\n\nNEWSLETTER PRINCIPLES: The newsletter is a promise kept on schedule — {audience} must know exactly what they get and when, stated in one sentence. The content engine (the repeatable sections) makes {cadence} sustainable; every issue follows the template. The first 5 issues prove the promise — planned before launch. Growth from zero is manual before it is scalable: the first 100 subscribers come from direct outreach. {advantage} is the differentiator to lean on. {monetization} shapes the path but the audience comes first.\n\nWHAT TO DELIVER:\n1. The positioning: the one-sentence promise — what {audience} gets, {cadence}, and why it is worth their inbox — plus the name and tagline options.\n2. The content engine: the repeatable issue template (sections, length, voice) that makes {cadence} sustainable, designed around {advantage}.\n3. The first 5 issues: topics and the hook of each — the sequence that proves the promise to new subscribers.\n4. The welcome sequence: the emails a new subscriber gets — what they deliver and the actions they drive.\n5. The tech setup: platform choice, the signup page, the lead magnet (if any), and the launch-day checklist for {launchDate}.\n6. The zero-to-100 plan: the manual growth tactics — where {audience} already gathers, the direct outreach scripts, the first partnerships.\n7. The 100-to-1000 system: the scalable layer — cross-promotions, guest features, social repurposing, and referrals.\n8. The sustainability check: the real time cost per issue at {cadence} vs. capacity — and the simplification options.\n9. The {monetization} path: the realistic timeline and requirements, and what to build now to enable it later.\n10. The 90-day metrics: open rate, growth, and the leading indicators — with the continue/pivot criteria.\n\nA high-quality plan launches with a promise {audience} wants, a content engine that survives {cadence}, 5 issues planned, and a path from zero to 100 that does not depend on luck.",
    "description": "Creates a newsletter launch plan with positioning, content engine, and a zero-to-1000 growth path.",
    "category": "planning",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What is the newsletter about?",
        "type": "text",
        "placeholder": "e.g., AI tools for small business",
        "required": true
      },
      "audience": {
        "label": "Audience",
        "question": "Who is it for?",
        "type": "text",
        "placeholder": "e.g., Solo founders",
        "required": true
      },
      "cadence": {
        "label": "Cadence",
        "question": "How often will you publish?",
        "type": "select",
        "options": [
          "Daily",
          "Weekly",
          "Biweekly",
          "Monthly"
        ],
        "required": true
      },
      "launchDate": {
        "label": "Launch Date",
        "question": "When is the launch date?",
        "type": "date",
        "required": true
      },
      "advantage": {
        "label": "Unfair Advantage",
        "question": "What is your unfair advantage?",
        "type": "textarea",
        "placeholder": "e.g., I test 10 AI tools a week for clients"
      },
      "monetization": {
        "label": "Monetization",
        "question": "What is your monetization goal?",
        "type": "select",
        "options": [
          "Paid subscriptions",
          "Sponsorships",
          "Sell products/services",
          "Audience first, decide later"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Course Creation Plan",
    "displayDescription": "Plans a course build end to end: promise and audience, module outline, production schedule, pricing, and launch runway.",
    "id": "planning-091",
    "prompt": "Act as a course creation strategist and build a complete plan for my course on {topic}.\n\nCONTEXT: Format: {format}. Launch date: {launchDate}. Planned modules: {modules}. The transformation I promise: {transformation}. My audience: {audience}.\n\nCOURSE PRINCIPLES: Courses sell transformations, not information — {transformation} is the promise every module serves. {modules} become a scoped outline: each module has an outcome, or it gets cut. Production is the long pole: {format} determines the real hours per module. The build schedule works backward from {launchDate} with buffer. Pricing reflects the transformation's value and {audience}'s wallet. The launch runway (audience, waitlist, pre-sale) starts during the build, not after.\n\nWHAT TO DELIVER:\n1. The course promise: the one-sentence transformation for {audience} — specific, believable, and measurable.\n2. The module outline: {modules} developed — each with its learning outcome, lessons, and the student deliverable — with scope cuts where the promise does not need it.\n3. The production plan: per {format}, the workflow per module (outline → record/write → edit → upload), time cost, tools, and total hours.\n4. The build schedule: backward from {launchDate} — module production order, buffer weeks, and the beta round.\n5. The beta plan: the small founding cohort — who, what they get, what feedback to collect, and how it improves the course.\n6. Pricing: the price (or tier) recommendation for {audience} and {transformation}, with the reasoning and the pre-sale strategy.\n7. The launch runway: the 4-6 weeks before {launchDate} — waitlist building, content marketing, and the launch-week sequence.\n8. The student success design: how students actually finish — the onboarding, the pacing, the accountability, and the win they get in week one.\n9. The post-launch plan: support load, the update cadence, and the testimonial collection system.\n10. The validation check: the pre-build test that proves {audience} wants this — run before heavy production.\n\nA high-quality plan turns {topic} into a course {audience} completes: a sharp promise, scoped modules, a production schedule that hits {launchDate}, and a launch runway already running.",
    "description": "Builds an end-to-end course plan from promise and outline through production and launch.",
    "category": "planning",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What is the course about?",
        "type": "text",
        "placeholder": "e.g., Notion for freelancers",
        "required": true
      },
      "format": {
        "label": "Format",
        "question": "What is the course format?",
        "type": "select",
        "options": [
          "Video course",
          "Text/email course",
          "Live cohort",
          "Mixed"
        ],
        "required": true
      },
      "launchDate": {
        "label": "Launch Date",
        "question": "When is the launch date?",
        "type": "date",
        "required": true
      },
      "modules": {
        "label": "Modules",
        "question": "What modules are planned?",
        "type": "textarea",
        "placeholder": "e.g., Setup, workflows, templates, automation",
        "required": true
      },
      "transformation": {
        "label": "Transformation",
        "question": "What transformation does the course promise?",
        "type": "text",
        "placeholder": "e.g., Go from scattered to a running freelance OS in 2 weeks",
        "required": true
      },
      "audience": {
        "label": "Audience",
        "question": "Who is the course for?",
        "type": "text",
        "placeholder": "e.g., Freelancers drowning in admin",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Coaching Program Plan",
    "displayDescription": "Designs a coaching program: promise, curriculum arc, session structure, pricing, client acquisition, and delivery systems.",
    "id": "planning-092",
    "prompt": "Act as a coaching business strategist and design my {niche} coaching program.\n\nCONTEXT: Duration: {durationWeeks} weeks. Ideal clients: {clients}. The outcomes I deliver: {outcomes}. Delivery format: {format}.\n\nCOACHING PRINCIPLES: The program sells {outcomes}, not sessions — the promise is the transformation, priced on its value. The {durationWeeks}-week arc is a curriculum: each phase builds on the last toward the outcome. Sessions need structure (not just conversation) — the framework per session. {clients} determines the marketing: be specific or be invisible. Delivery systems (onboarding, between-session support, offboarding) are what make it feel premium. Client acquisition is designed, not hoped for.\n\nWHAT TO DELIVER:\n1. The program promise: the one-sentence outcome for {clients} — specific, measurable, believable.\n2. The {durationWeeks}-week curriculum arc: phases, what each phase accomplishes, and how they build to {outcomes}.\n3. The session structure: the repeatable framework per session (check-in, teaching, coaching, action) adapted to {format}.\n4. Delivery systems: onboarding (the welcome, the intake, the goal-setting), between-session support (boundaries included), and the offboarding/graduation.\n5. Pricing: the price for {durationWeeks} weeks given {outcomes} and {clients} — with the reasoning, payment options, and the guarantee policy.\n6. The client acquisition plan: where {clients} already are, the lead magnet or entry offer, the sales conversation structure, and the enrollment target.\n7. The intake and fit filter: the application or discovery call that ensures the right clients — the questions that reveal fit.\n8. Testimonial and referral engine: how results get captured and turned into the next clients.\n9. The capacity math: clients per cohort or per week, hours per client, and the revenue at capacity — the business model in numbers.\n10. The 90-day launch plan: from now to first paying clients — sequenced.\n\nA high-quality design turns {niche} expertise into a program {clients} buy for {outcomes}: a real arc, structured sessions, premium delivery, and acquisition that does not rely on luck.",
    "description": "Designs a coaching program with curriculum arc, pricing, delivery systems, and client acquisition.",
    "category": "planning",
    "variables": {
      "niche": {
        "label": "Niche",
        "question": "What is your coaching niche?",
        "type": "text",
        "placeholder": "e.g., Career coaching for engineers",
        "required": true
      },
      "durationWeeks": {
        "label": "Duration",
        "question": "How many weeks is the program?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "clients": {
        "label": "Clients",
        "question": "Who are your ideal clients?",
        "type": "text",
        "placeholder": "e.g., Mid-level engineers seeking promotion",
        "required": true
      },
      "outcomes": {
        "label": "Outcomes",
        "question": "What outcomes do you deliver?",
        "type": "textarea",
        "placeholder": "e.g., Promotion-ready positioning in 8 weeks",
        "required": true
      },
      "format": {
        "label": "Format",
        "question": "What is the delivery format?",
        "type": "select",
        "options": [
          "1:1 coaching",
          "Group program",
          "Hybrid"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Client Onboarding Plan",
    "displayDescription": "Designs a client onboarding experience: the journey map, welcome sequence, kickoff, communication cadence, and early-win plan.",
    "id": "planning-093",
    "prompt": "Act as a client experience designer and build an onboarding plan for {business}'s {service}.\n\nCONTEXT: Current onboarding steps: {steps}. Onboarding timeline: {timeline}. The #1 friction clients hit: {friction}. What a delighted client looks like: {delighted}.\n\nONBOARDING PRINCIPLES: Onboarding is the product's first impression — it determines retention more than the service itself. {steps} get mapped as a journey: every touchpoint, its purpose, and its owner. {friction} is the thing to engineer out first. The early win — value delivered fast — is what makes clients stay. Communication cadence is designed: clients should never wonder what happens next. {delighted} is the standard every step is measured against.\n\nWHAT TO DELIVER:\n1. The onboarding journey map: from signed to fully ramped across {timeline} — every step in {steps} refined, sequenced, with owner and purpose.\n2. The welcome sequence: the first 48 hours — what the client receives, the tone, and the actions that make them feel they made the right choice.\n3. The kickoff: the meeting structure (agenda, questions, the alignment it produces) that starts {service} right.\n4. The friction fix: the direct redesign that eliminates {friction} — the step changed, removed, or automated.\n5. The early-win plan: the first visible value delivered — what, when, and how it is celebrated with the client.\n6. The communication cadence: what the client hears and when across {timeline} — the updates, the check-ins, the \"no surprises\" rule.\n7. Roles and responsibilities: who does what on both sides — the RACI of onboarding, including what the client must provide and by when.\n8. The information collection: the intake done right — what to ask, when, and the system that keeps it from being painful.\n9. The 30/60/90 check-ins: the milestone reviews during {timeline} — what gets measured against {delighted}.\n10. The handoff to ongoing service: how onboarding ends and the steady state begins — the graduation moment.\n\nA high-quality plan makes every new {business} client feel the service working from day one: {friction} gone, an early win delivered, and {delighted} as the norm.",
    "description": "Designs a client onboarding journey with early wins, communication cadence, and friction fixes.",
    "category": "planning",
    "variables": {
      "business": {
        "label": "Business",
        "question": "What is the business?",
        "type": "text",
        "placeholder": "e.g., Brightline Marketing",
        "required": true
      },
      "service": {
        "label": "Service",
        "question": "What service is being onboarded?",
        "type": "text",
        "placeholder": "e.g., Monthly SEO retainer",
        "required": true
      },
      "steps": {
        "label": "Steps",
        "question": "What are the current onboarding steps?",
        "type": "textarea",
        "placeholder": "e.g., Contract, intake form, kickoff call",
        "required": true
      },
      "timeline": {
        "label": "Timeline",
        "question": "What is the onboarding timeline?",
        "type": "text",
        "placeholder": "e.g., 2 weeks",
        "required": true
      },
      "friction": {
        "label": "Friction",
        "question": "What is the #1 friction clients hit?",
        "type": "textarea",
        "placeholder": "e.g., Intake form takes forever",
        "required": true
      },
      "delighted": {
        "label": "Delighted Client",
        "question": "What does a delighted client look like?",
        "type": "textarea",
        "placeholder": "e.g., Sees first ranking improvement in week 2",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Business Plan Outline",
    "displayDescription": "Builds a complete business plan outline: problem, solution, market, model, financials, funding ask, and milestones.",
    "id": "planning-094",
    "prompt": "Act as a business plan advisor and build a complete plan outline for {business}.\n\nCONTEXT: Market: {market}. Revenue model: {revenue}. Funding need: {funding}. The problem I solve: {problem}. My unfair advantage: {advantage}.\n\nBUSINESS PLAN PRINCIPLES: A plan is an argument: {problem} is real and painful, my solution wins, {market} is reachable, and {revenue} works — each section must earn its place in that argument. Numbers must be honest: assumptions stated, not hidden. {funding} determines the ask section's shape. Milestones prove executability — the plan shows the path, not just the destination. Risks are named; investors and partners trust plans that see their own weaknesses.\n\nWHAT TO DELIVER:\n1. Executive summary: the one-page argument — {problem}, solution, {market}, {revenue}, {funding} ask — written last, placed first.\n2. Problem and solution: {problem} evidenced (who feels it, what it costs them), and why my solution wins — with {advantage} central.\n3. Market analysis: {market} sized (TAM/SAM/SOM in plain terms), the trends, and the specific wedge — who I serve first.\n4. Business model: how {revenue} works — pricing, unit economics, and the math that shows it scales.\n5. Go-to-market: how the first customers come — channels, the beachhead, and the 90-day traction plan.\n6. Financial projections: 3-year sketch — revenue, costs, the assumptions behind every number, and the break-even point.\n7. The {funding} ask: how much, what it funds, the milestones it buys, and the terms shape.\n8. Milestones: the 12-month roadmap — the dated proof points that show execution.\n9. Team: who is here, who is missing, and the hires {funding} enables.\n10. Risks and mitigations: the 4-5 real risks — named honestly with the response for each.\n11. The appendix list: what supporting material to attach.\n\nA high-quality outline makes {business} fundable and executable: the argument holds, the numbers are honest, {funding} buys named milestones, and the risks are faced — not hidden.",
    "description": "Creates a full business plan outline from problem and market through financials and funding.",
    "category": "planning",
    "variables": {
      "business": {
        "label": "Business",
        "question": "What is the business?",
        "type": "text",
        "placeholder": "e.g., Mobile car detailing",
        "required": true
      },
      "market": {
        "label": "Market",
        "question": "What is the target market?",
        "type": "text",
        "placeholder": "e.g., Busy suburban professionals",
        "required": true
      },
      "revenue": {
        "label": "Revenue Model",
        "question": "What is the revenue model?",
        "type": "text",
        "placeholder": "e.g., Subscription + one-time services",
        "required": true
      },
      "funding": {
        "label": "Funding",
        "question": "What funding do you need?",
        "type": "text",
        "placeholder": "e.g., $50k seed",
        "required": true
      },
      "problem": {
        "label": "Problem",
        "question": "What problem do you solve?",
        "type": "textarea",
        "placeholder": "e.g., People skip car care because shops waste their day",
        "required": true
      },
      "advantage": {
        "label": "Unfair Advantage",
        "question": "What is your unfair advantage?",
        "type": "textarea",
        "placeholder": "e.g., Existing fleet contracts and a booking app"
      }
    }
  },
  {
    "displayTitle": "Marketing Campaign Plan",
    "displayDescription": "Plans a full campaign: goal and KPIs, audience and message, channel mix, budget allocation, creative, timeline, and measurement.",
    "id": "planning-095",
    "prompt": "Act as a marketing campaign strategist and build a complete plan for {campaign}.\n\nCONTEXT: Goal: {goal}. Budget: ${budget}. Audience: {audience}. Timeline: {timeline}. The single message: {message}.\n\nCAMPAIGN PRINCIPLES: Every campaign serves one {goal} with measurable KPIs — if everything is the goal, nothing is. {audience} gets a real portrait: who they are, where they are, what moves them. {message} is the spine every channel carries. Budget ${budget} is allocated by expected return, not habit. Channels are chosen for {audience}, not trends. Creative is planned before production starts. {timeline} gets phases: tease, launch, sustain. Measurement is designed in, not bolted on.\n\nWHAT TO DELIVER:\n1. Goal and KPIs: {goal} translated into 2-3 measurable KPIs with targets — the numbers that define success.\n2. Audience portrait: {audience} detailed — demographics, watering holes (where they are), motivations, and objections.\n3. The message house: {message} as the spine, with 3 supporting points and the proof for each — plus the CTA.\n4. Channel mix: the channels chosen for {audience}, each with its role, content format, and why it earns its place.\n5. Budget allocation: ${budget} split across channels and creative — with the expected-return reasoning per line.\n6. The creative plan: the assets needed per channel, the production timeline, and the approval process.\n7. The {timeline} phase plan: tease → launch → sustain, each phase with its activities, dates, and purpose.\n8. The content calendar: the dated schedule of every major asset and post across {timeline}.\n9. Measurement plan: what gets tracked, how, the reporting rhythm, and the optimization rules (when to kill, scale, or adjust a channel).\n10. Contingencies: if the budget gets cut 30%, if a channel flops, if the timeline compresses — the pre-planned responses.\n\nA high-quality plan makes {campaign} a machine aimed at {goal}: one message, the right channels for {audience}, ${budget} allocated by return, and measurement designed in from day one.",
    "description": "Builds a complete campaign plan from goal and audience through budget, creative, and measurement.",
    "category": "planning",
    "variables": {
      "campaign": {
        "label": "Campaign",
        "question": "What is the campaign?",
        "type": "text",
        "placeholder": "e.g., Spring product launch",
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What is the campaign goal?",
        "type": "text",
        "placeholder": "e.g., 500 new trial signups",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "Budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 10000",
        "required": true
      },
      "audience": {
        "label": "Audience",
        "question": "Who is the target audience?",
        "type": "textarea",
        "placeholder": "e.g., Operations managers at 50-500 person companies",
        "required": true
      },
      "timeline": {
        "label": "Timeline",
        "question": "What is the campaign timeline?",
        "type": "text",
        "placeholder": "e.g., 6 weeks starting April 1",
        "required": true
      },
      "message": {
        "label": "Core Message",
        "question": "What is the single core message?",
        "type": "textarea",
        "placeholder": "e.g., Cut reporting time from days to minutes",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Sales Pipeline Plan",
    "displayDescription": "Builds a quarterly pipeline plan: target math, stage definitions, activity targets, channel strategy, and weekly management rhythm.",
    "id": "planning-096",
    "prompt": "Act as a sales strategist and build a pipeline plan for {product} for {quarter}.\n\nCONTEXT: Revenue target: {target}. Channels: {channels}. Current pipeline: {currentPipeline}. Average deal size: {avgDeal}. Win rate: {winRate}.\n\nPIPELINE PRINCIPLES: Pipeline is arithmetic: {target} divided by {winRate} and {avgDeal} equals the pipeline coverage needed — the plan starts with this math. Stages need definitions and exit criteria, or the pipeline is fiction. Activity targets (calls, demos, proposals) derive from the math, not from motivation. {channels} each get a strategy and a quota share. {currentPipeline} is audited honestly: what is real, what is hope. The weekly rhythm is the management system that keeps it honest.\n\nWHAT TO DELIVER:\n1. The pipeline math: from {target}, {avgDeal}, and {winRate} — the coverage needed, deals needed, and the gap vs. {currentPipeline} — shown step by step.\n2. The {currentPipeline} audit: deal by deal honesty check — what is real, what needs re-qualifying, what to drop.\n3. Stage definitions: each pipeline stage with entry/exit criteria and the typical duration — the rules that keep the pipeline truthful.\n4. Activity targets: the weekly numbers (outreach, meetings, demos, proposals) that the math demands, split across {channels}.\n5. Channel strategy: each channel in {channels} with its approach, its quota share, and its expected conversion.\n6. The {quarter} week-by-week plan: prospecting blocks, the deal-advancement focus per week, and the push weeks.\n7. Objection handling: the 4-5 objections {product} will face, with the response framework for each.\n8. The weekly pipeline review: the 30-minute ritual — what gets inspected, the 3 questions, and the actions it produces.\n9. Slippage prevention: the early-warning signs per stage and the acceleration plays.\n10. The contingency: if the gap is too big — the options (more activity, bigger deals, channel shift, target renegotiation) with the trigger for each.\n\nA high-quality plan turns {quarter} from a hope into arithmetic: the coverage math is explicit, {currentPipeline} is honest, weekly activities are specified, and {target} has a path — or the gap is named early.",
    "description": "Creates a quarterly sales pipeline plan with coverage math, stages, and activity targets.",
    "category": "planning",
    "variables": {
      "product": {
        "label": "Product",
        "question": "What is the product/service?",
        "type": "text",
        "placeholder": "e.g., CRM software",
        "required": true
      },
      "target": {
        "label": "Target",
        "question": "What is the revenue target?",
        "type": "text",
        "placeholder": "e.g., $250k",
        "required": true
      },
      "quarter": {
        "label": "Quarter",
        "question": "Which quarter?",
        "type": "text",
        "placeholder": "e.g., Q3 2027",
        "required": true
      },
      "channels": {
        "label": "Channels",
        "question": "What are the sales channels?",
        "type": "textarea",
        "placeholder": "e.g., Outbound email, referrals, partnerships",
        "required": true
      },
      "currentPipeline": {
        "label": "Current Pipeline",
        "question": "What does the current pipeline look like?",
        "type": "textarea",
        "placeholder": "e.g., $180k across 12 deals",
        "required": true
      },
      "avgDeal": {
        "label": "Average Deal Size",
        "question": "What is the average deal size?",
        "type": "text",
        "placeholder": "e.g., $15k",
        "required": true
      },
      "winRate": {
        "label": "Win Rate",
        "question": "What is your typical win rate?",
        "type": "text",
        "placeholder": "e.g., 25%",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Hiring Plan",
    "displayDescription": "Plans a hire end to end: role scorecard, sourcing strategy, interview process, evaluation rubric, offer, and 90-day onboarding.",
    "id": "planning-097",
    "prompt": "Act as a hiring strategist and build a complete plan for hiring a {role}, starting {startDate}.\n\nCONTEXT: Budget: {budget} (salary range). Team: {team}. The problem this hire solves: {hireReason}. Must-have vs. nice-to-have: {mustHaves}.\n\nHIRING PRINCIPLES: Hire for the problem: {hireReason} defines the scorecard, not a wishlist. {mustHaves} separates the non-negotiables from the nice-to-haves — the interview tests the former. Sourcing is designed: the channels where this person actually is. Interviews need structure: same questions, a rubric, or it is bias with extra steps. {team} gets a role in the process — and the onboarding. The offer is planned before the final interview. Day one starts the 90-day onboarding that determines whether the hire succeeds.\n\nWHAT TO DELIVER:\n1. The role scorecard: {role} defined by outcomes (what they must achieve in 6-12 months), competencies, and {mustHaves} — the hiring standard.\n2. The job description: written from the scorecard — the honest pitch that attracts the right person and repels the wrong one.\n3. Sourcing strategy: where this person is, channel by channel — with the outreach approach and the employee-referral plan.\n4. The interview process: stages, who interviews, what each stage tests — designed to be rigorous and respectful of candidates' time.\n5. The evaluation rubric: the scorecard turned into interview scoring — same questions, clear criteria, the debrief process.\n6. The {budget} compensation plan: salary positioning, the offer structure, and the negotiation boundaries decided in advance.\n7. Reference and background checks: what to verify and how.\n8. The offer and close: the offer letter elements, the close conversation, and the plan if they hesitate.\n9. The 90-day onboarding: the plan that starts {startDate} — week-by-week, with the manager's role and the success milestones.\n10. The hiring timeline: backward from {startDate} — sourcing, interviews, decision, notice period — with the owner of each step.\n\nA high-quality plan hires for {hireReason} with a scorecard, not a wishlist: structured interviews, a rubric, a {budget} offer planned in advance, and onboarding that starts before day one.",
    "description": "Builds an end-to-end hiring plan from scorecard and sourcing through offer and onboarding.",
    "category": "planning",
    "variables": {
      "role": {
        "label": "Role",
        "question": "What role are you hiring?",
        "type": "text",
        "placeholder": "e.g., Customer Success Manager",
        "required": true
      },
      "startDate": {
        "label": "Start Date",
        "question": "When should they start?",
        "type": "date",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is the salary budget/range?",
        "type": "text",
        "placeholder": "e.g., $70-85k",
        "required": true
      },
      "team": {
        "label": "Team",
        "question": "What team will they join?",
        "type": "textarea",
        "placeholder": "e.g., 5-person success team reporting to me",
        "required": true
      },
      "hireReason": {
        "label": "Hire Reason",
        "question": "What problem does this hire solve?",
        "type": "textarea",
        "placeholder": "e.g., Churn spiked because onboarding is understaffed",
        "required": true
      },
      "mustHaves": {
        "label": "Must-Haves",
        "question": "What are the must-haves vs. nice-to-haves?",
        "type": "textarea",
        "placeholder": "e.g., Must: SaaS onboarding experience. Nice: Salesforce cert",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Team Offsite Plan",
    "displayDescription": "Plans a team offsite that actually builds the team: objectives, agenda, activities, logistics, budget, and follow-through.",
    "id": "planning-098",
    "prompt": "Act as an offsite designer and plan our team offsite on {date} in {location}.\n\nCONTEXT: Attendees: {attendees}. Objectives: {objectives}. Duration: {duration}. Budget: ${budget}. The team dynamic right now: {teamDynamic}.\n\nOFFSITE PRINCIPLES: The offsite serves {objectives} — every session and activity must earn its place against them, or it is just a trip. {teamDynamic} determines the design: a new team needs bonding, a tense team needs honesty, a strong team needs stretch. Agenda balances work, bonding, and downtime — over-scheduling kills the magic. Logistics (travel, food, accessibility) are invisible when done right and ruinous when wrong. ${budget} is allocated to what serves {objectives}. The follow-through plan is designed before the offsite, or the energy evaporates Monday.\n\nWHAT TO DELIVER:\n1. The objectives translation: {objectives} turned into the 2-3 outcomes the offsite must produce — the design brief everything serves.\n2. The agenda: {duration} planned session by session — work blocks, bonding activities, meals, and real downtime — with the purpose of each block tied to {objectives}.\n3. Activities designed for {teamDynamic}: the specific team-builders chosen for where this team actually is — and the ones to avoid.\n4. The work sessions: the facilitated discussions — topics, the format, who leads, and the decisions or outputs each must produce.\n5. Logistics: travel, lodging, meals (dietary needs), accessibility, and the packing/arrival info for {attendees}.\n6. Budget breakdown: ${budget} allocated — venue, food, activities, travel — with the contingency.\n7. Roles: who owns what — the facilitator, the logistics lead, and the attendee prep.\n8. The pre-offsite: what attendees do beforehand (the input that makes sessions work) and the teaser that builds energy.\n9. The follow-through plan: the Monday-after actions — decisions documented, owners assigned, the 30-day check on {objectives}.\n10. The contingency: weather, no-shows, energy dips — the backup plans.\n\nA high-quality offsite returns a team that is closer and clearer: {objectives} advanced, {teamDynamic} honestly addressed, and the follow-through already scheduled.",
    "description": "Designs a team offsite around real objectives with agenda, activities, logistics, and follow-through.",
    "category": "planning",
    "variables": {
      "date": {
        "label": "Date",
        "question": "When is the offsite?",
        "type": "date",
        "required": true
      },
      "attendees": {
        "label": "Attendees",
        "question": "Who is attending?",
        "type": "textarea",
        "placeholder": "e.g., 8-person product team",
        "required": true
      },
      "location": {
        "label": "Location",
        "question": "Where will it be?",
        "type": "text",
        "placeholder": "e.g., Scottsdale resort",
        "required": true
      },
      "objectives": {
        "label": "Objectives",
        "question": "What are the objectives?",
        "type": "textarea",
        "placeholder": "e.g., Align on Q4 roadmap, rebuild trust after reorg",
        "required": true
      },
      "duration": {
        "label": "Duration",
        "question": "How long is the offsite?",
        "type": "text",
        "placeholder": "e.g., 2 days",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "Budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 8000",
        "required": true
      },
      "teamDynamic": {
        "label": "Team Dynamic",
        "question": "What is the team dynamic right now?",
        "type": "textarea",
        "placeholder": "e.g., New team, still forming; or tense after layoffs",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Performance Review Prep",
    "displayDescription": "Prepares a compelling self-review: wins with evidence, growth areas with plans, peer feedback requests, goals, and raise/promotion talking points.",
    "id": "planning-099",
    "prompt": "Act as a career coach and prepare me thoroughly for my performance review on {reviewDate}.\n\nCONTEXT: My role: {role}. My wins this period: {wins}. Growth areas I see: {growth}. What I want from this review: {reviewGoal}.\n\nREVIEW PREP PRINCIPLES: Reviews reward evidence, not adjectives — every win in {wins} gets quantified and tied to business impact. Growth areas in {growth} are framed as owned-and-addressed, never discovered by the manager first. {reviewGoal} shapes the strategy: a raise, a promotion, or a scope change each need different proof. Peer feedback is requested strategically. The self-review is written before the meeting. Tough questions get rehearsed answers. The forward-looking goals close the review on ambition, not just assessment.\n\nWHAT TO DELIVER:\n1. The wins portfolio: {wins} developed — each with metrics, business impact, and the story (situation → action → result) — ordered by strength.\n2. The evidence file: what to gather for each win — numbers, emails, peer quotes — and where it lives.\n3. Growth areas, owned: {growth} framed as self-aware with the improvement plan already in motion — the narrative that turns weakness into trajectory.\n4. The {reviewGoal} strategy: the specific case for my goal — the proof, the market framing (if compensation), and the ask itself, scripted.\n5. Peer feedback requests: who to ask, what to ask them, and when — so the feedback arrives before {reviewDate}.\n6. The self-review draft: the written self-assessment — wins, growth, goals — in the format my company uses.\n7. Tough questions rehearsed: the 5 hardest things my manager might raise, each with my composed response.\n8. The forward goals: 3-4 goals for next period — ambitious, measurable, aligned with the team — to propose in the review.\n9. The meeting game plan: the agenda I want, the opening, how to handle surprises, and the notes to take.\n10. The post-review actions: what to document, the follow-up email, and the 30-day check on commitments made.\n\nA high-quality prep means I walk into {reviewDate} with evidence, not hope: {wins} quantified, {growth} owned, and {reviewGoal} pursued with a real strategy.",
    "description": "Prepares a complete performance review strategy with evidence, growth narrative, and goal planning.",
    "category": "planning",
    "variables": {
      "reviewDate": {
        "label": "Review Date",
        "question": "When is the review?",
        "type": "date",
        "required": true
      },
      "role": {
        "label": "Role",
        "question": "What is your role?",
        "type": "text",
        "placeholder": "e.g., Senior Analyst",
        "required": true
      },
      "wins": {
        "label": "Wins",
        "question": "What are your wins this period?",
        "type": "textarea",
        "placeholder": "e.g., Led migration saving $40k/yr",
        "required": true
      },
      "growth": {
        "label": "Growth Areas",
        "question": "What growth areas do you see?",
        "type": "textarea",
        "placeholder": "e.g., Delegating more, public speaking",
        "required": true
      },
      "reviewGoal": {
        "label": "Review Goal",
        "question": "What do you want from this review?",
        "type": "select",
        "options": [
          "Raise",
          "Promotion",
          "Scope change",
          "Strong rating",
          "Feedback only"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Promotion Plan",
    "displayDescription": "Builds a promotion case and action plan: gap analysis against the next level, evidence building, visibility strategy, and the ask.",
    "id": "planning-100",
    "prompt": "Act as a career strategist and build my promotion plan from {role} to {targetRole}.\n\nCONTEXT: Timeline: {timeline}. My evidence so far: {evidence}. The gaps I suspect: {gaps}. My manager's stance: {managerStance}.\n\nPROMOTION PRINCIPLES: Promotions are granted for sustained next-level performance, not potential — the plan proves I already operate at {targetRole}. {gaps} get closed deliberately with visible assignments. {evidence} is organized into a case file mapped to the level's criteria. Visibility is engineered: the right people must see the work. {managerStance} determines the strategy — an ally gets a partnership plan, a skeptic gets an evidence campaign. The ask is timed and scripted, never sprung.\n\nWHAT TO DELIVER:\n1. The level criteria: what {targetRole} actually requires here — the official rubric decoded into observable behaviors.\n2. Gap analysis: {gaps} assessed honestly against the criteria — which are real, which are stories, and the close-plan for each real one.\n3. The evidence case file: {evidence} organized and mapped to each criterion — with the additional proof to collect over {timeline}.\n4. The assignment strategy: the projects and responsibilities to seek that demonstrate {targetRole}-level work — and how to get them.\n5. The visibility plan: who needs to see the work (beyond my manager), and the mechanisms — presentations, cross-team projects, the brag document.\n6. The {managerStance} strategy: the tailored approach — if ally, the co-built plan with check-ins; if neutral or skeptical, the evidence campaign and the timeline for winning them over.\n7. The brag document: the running record — format, update rhythm, and how it feeds the promotion packet.\n8. The {timeline} roadmap: month by month — gap-closing actions, evidence milestones, and the check-in points.\n9. The ask: when and how to formally pursue the promotion — the conversation script, the packet, and the timing.\n10. If not yet: the contingency — what to do if the answer is \"not yet\" — the specific feedback to extract and the revised timeline.\n\nA high-quality plan makes the promotion a matter of when, not if: {gaps} closing on schedule, evidence mapped to {targetRole} criteria, and {managerStance} handled with the right strategy.",
    "description": "Builds a promotion case with gap analysis, evidence building, visibility, and the ask strategy.",
    "category": "planning",
    "variables": {
      "role": {
        "label": "Role",
        "question": "What is your current role?",
        "type": "text",
        "placeholder": "e.g., Analyst",
        "required": true
      },
      "targetRole": {
        "label": "Target Role",
        "question": "What role are you targeting?",
        "type": "text",
        "placeholder": "e.g., Senior Analyst",
        "required": true
      },
      "timeline": {
        "label": "Timeline",
        "question": "What is your timeline?",
        "type": "text",
        "placeholder": "e.g., Next review cycle (6 months)",
        "required": true
      },
      "evidence": {
        "label": "Evidence",
        "question": "What evidence do you have so far?",
        "type": "textarea",
        "placeholder": "e.g., Led 3 cross-team projects",
        "required": true
      },
      "gaps": {
        "label": "Gaps",
        "question": "What gaps do you suspect?",
        "type": "textarea",
        "placeholder": "e.g., Limited stakeholder visibility",
        "required": true
      },
      "managerStance": {
        "label": "Manager Stance",
        "question": "What is your manager's stance?",
        "type": "select",
        "options": [
          "Supportive ally",
          "Neutral",
          "Skeptical",
          "Unknown"
        ],
        "required": true
      }
    }
  }
];