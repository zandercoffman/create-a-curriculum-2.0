import type { PromptSchema } from "../types";

export const studyingPrompts: PromptSchema[] = [
  {
    "displayTitle": "Study Schedule Builder",
    "displayDescription": "Builds a detailed week-by-week study schedule with weighted topics, concrete session goals, and built-in review and adjustment rules.",
    "id": "studying-001",
    "prompt": "You are an expert study coach and academic planner. Design a complete, personalized multi-week study schedule for a {learner_level} learner studying {subject} over {weeks} weeks, with {hours_per_week} total study hours available per week and preferred session lengths of about {preferred_session_minutes} minutes (if blank, choose sensible 45-60 minute sessions yourself). The learner must master these topics: {topics}.\n\nStructure your response in four sections. First, a situation summary: restate the total hours, the weekly rhythm, and how you ranked the topics by difficulty and deadline pressure, in two to three sentences. Second, the day-by-day schedule: for each of the {weeks} weeks, list every study day with specific session topics, session lengths, and one concrete goal per session — for example, 'derive all kinematic equations from memory,' never 'study physics.' Keep one full rest day per week with no scheduled work, and end every week with a dedicated review block that revisits the week's hardest material through active recall rather than re-reading. Weight topics so harder or closer-deadline topics get more and earlier sessions, while already-strong topics get lighter maintenance slots.\n\nThird, session design rules: define how each session should open (two-minute retrieval of prior material from memory), what the core work should be (practice problems, self-explanation, or teaching the idea aloud — never passive re-reading), and how each session closes (a five-minute written summary of what was learned and what is still shaky). Fourth, progress and adjustment guidance: give the learner a simple end-of-week checkpoint to re-rank topic difficulty, explain exactly when and how to shift hours between topics if they fall behind, and describe what being on track looks like at the halfway point.\n\nConstraints: never schedule more than the stated weekly hours; place the hardest topics on the learner's highest-energy days where possible; assume access to a standard textbook and class notes only. A high-quality result is a schedule so specific that the learner can open it each morning and know exactly what to do, for how long, and why that task comes today and not later.",
    "description": "Creates a fully specified multi-week study calendar with session-level goals, weekly review blocks, and a progress checkpoint system.",
    "category": "studying",
    "variables": {
      "subject": {
        "label": "Subject",
        "question": "Which subject is this schedule for?",
        "type": "text",
        "placeholder": "e.g., Organic Chemistry",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "How many weeks do you have until the exam?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "hours_per_week": {
        "label": "Weekly Hours",
        "question": "How many study hours per week can you commit?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "topics": {
        "label": "Topics",
        "question": "Which topics must be covered?",
        "type": "textarea",
        "placeholder": "e.g., Stereochemistry, Reaction mechanisms, Spectroscopy",
        "required": true
      },
      "learner_level": {
        "label": "Learner Level",
        "question": "What is the learner's academic level?",
        "type": "text",
        "placeholder": "e.g., College sophomore",
        "required": false
      },
      "preferred_session_minutes": {
        "label": "Session Length",
        "question": "Preferred minutes per study session?",
        "type": "number",
        "placeholder": "e.g., 50",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Exam Countdown Plan",
    "displayDescription": "Turns the days before your exam into a prioritized daily action plan with checkable tasks, quick wins, and tapering review days.",
    "id": "studying-002",
    "prompt": "You are a strategic exam-preparation coach. Build a complete day-by-day countdown plan for {exam} with {days_left} days remaining and roughly {hours_per_day} focused study hours available per day. The learner's weak topics are {weak_topics} and strong topics are {strong_topics}. Their peak focus window is {peak_hours} (if blank, assume afternoon and note the assumption), so schedule the hardest material in those hours.\n\nStructure your output in three parts. First, a strategy overview: state your sequencing logic — which topics come first and why, how many full passes through the material the {days_left} days allow, and how you are trading off weak-topic repair against strong-topic maintenance. Front-load the weak topics aggressively in the first two-thirds of the plan so they get repeated exposure, and taper strong topics into short maintenance slots.\n\nSecond, the daily plan: for each day, give exactly three specific tasks plus one quick win. Every task must be a concrete action with a verifiable done-state — for example, 'complete 15 genetics Punnett-square problems with at least 12 correct' rather than 'study genetics.' The quick win is a small confidence-building task finishable in under 15 minutes. Reserve the final two days entirely for light review and rest: no new material, only low-stakes retrieval, key-term refresh, and logistics such as what to bring and sleep guidance.\n\nThird, daily operating rules: open each day with a ten-minute unaided recall of the previous day's material; define which task absorbs the cut if a task runs long; and give a simple end-of-day confidence rating per topic (1-5) carried forward to the next day. Include an adjustment rule: if a weak topic stays below a 3 rating after two exposures, it earns an extra half-session borrowed from a strong-topic slot.\n\nConstraints: keep daily totals within {hours_per_day} hours; schedule at least one lighter recovery day mid-plan; never introduce new topics in the final two days. A high-quality plan reads like a personal trainer's program: every day has a purpose, every task is checkable, and the learner always knows why today looks the way it does.",
    "description": "Generates a day-by-day countdown with sequenced tasks, confidence tracking, and built-in adjustment rules.",
    "category": "studying",
    "variables": {
      "exam": {
        "label": "Exam",
        "question": "Which exam are you counting down to?",
        "type": "text",
        "placeholder": "e.g., AP Biology",
        "required": true
      },
      "days_left": {
        "label": "Days Left",
        "question": "How many days until the exam?",
        "type": "number",
        "placeholder": "e.g., 21",
        "required": true
      },
      "hours_per_day": {
        "label": "Daily Hours",
        "question": "How many hours per day can you study?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "weak_topics": {
        "label": "Weak Topics",
        "question": "What are your weakest topics?",
        "type": "textarea",
        "placeholder": "e.g., Genetics, Cellular respiration",
        "required": true
      },
      "strong_topics": {
        "label": "Strong Topics",
        "question": "What are your strongest topics?",
        "type": "text",
        "placeholder": "e.g., Ecology, Evolution",
        "required": false
      },
      "peak_hours": {
        "label": "Peak Hours",
        "question": "When is the learner's focus strongest?",
        "type": "select",
        "options": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Notes to Active Recall",
    "displayDescription": "Converts your notes into a tiered active-recall question set — from definitions to application — with a separate answer key.",
    "id": "studying-003",
    "prompt": "You are an expert in learning science specializing in retrieval practice. Convert the study notes below into a complete active-recall question set that the learner will answer from memory before checking any answers.\n\nFollow this exact process. First, read the notes carefully and extract every testable fact, concept, relationship, and application — do not invent material absent from the notes, and do not skip secondary details that could appear on an exam. Then write one focused question per extracted item, phrased to force genuine retrieval rather than recognition: prefer 'Explain why...' and 'What would happen if...' over bare 'What is the definition of...' prompts. Calibrate difficulty for a {learner_level} learner (if blank, infer the level from the notes); challenging but fair.\n\nOrder the full question set in three tiers with clear tier headings. Tier 1 — Foundational recall: definitions, identifications, and basic facts. Tier 2 — Comprehension and connections: explain relationships, compare and contrast, describe processes in order. Tier 3 — Application and reasoning: scenario-based questions requiring the material to solve a problem or predict an outcome. Aim for at least three to five questions in Tier 3 if the notes support it.\n\nFormat rules: number every question; never place an answer beside its question. Put a single answer-key section at the very end, titled 'ANSWER KEY,' numbered to match the questions, with concise correct answers of one to three sentences each — precise enough to grade against. After the answer key, add a short 'How to use this set' section: the cover-then-recall procedure, how to mark questions as known, shaky, or unknown, and how many questions to redo in a second pass.\n\nQuality checks before you finish: every major concept in the notes has at least one question; no question can be answered by copying a phrase verbatim from the notes; the answer key contains no new facts that were not asked about. If the notes contain obvious gaps or ambiguous statements, list them briefly at the end under 'Gaps in the source notes' so the learner can verify them elsewhere.\n\nNotes: {notes}",
    "description": "Rewrites notes as retrieval-based questions ordered by cognitive depth, with usage protocol and gap flags.",
    "category": "studying",
    "variables": {
      "notes": {
        "label": "Notes",
        "question": "Paste the notes you want converted to questions.",
        "type": "textarea",
        "placeholder": "Paste your notes here...",
        "required": true
      },
      "learner_level": {
        "label": "Learner Level",
        "question": "What is the learner's academic level?",
        "type": "text",
        "placeholder": "e.g., High school junior",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Spaced Repetition Calendar",
    "displayDescription": "Maps your material onto a spaced-repetition calendar with expanding intervals, review methods, and a final-72-hours plan.",
    "id": "studying-004",
    "prompt": "You are a learning-science specialist designing a spaced-repetition system. Build a complete review calendar for these topics: {topics}. The learner first studies each topic starting {start_date}, and the exam is on {exam_date}. Each review session should run about {review_minutes} minutes (if blank, default to 20).\n\nApply these spacing rules. Schedule the first review one day after initial learning, then at roughly 3, 7, 14, and 30 days — but compress or extend the sequence so every topic gets at least three review exposures before {exam_date}, prioritizing the highest-weight topics if the calendar is tight. No topic should go more than 14 days without a review touch once learned. If the exam is closer than the full 30-day arc allows, say so explicitly and show the compressed schedule you are using instead.\n\nPresent the calendar as a simple day-by-day table with three columns: Date, Topics to review, and Focus. The Focus column must specify the review method, not just the topic — for example, 'blank-page recall of the Krebs cycle steps' or 'ten mixed practice problems, no notes.' Early reviews should emphasize heavy retrieval practice; later reviews should be faster confidence checks plus interleaved mixed review across topics.\n\nAdd three supporting sections after the table. First, session protocol: exactly what to do in a review session — open with unaided recall, check against source material, re-test only what was missed, log a confidence rating of 1-5 per topic. Second, the 'forgot it' rule: what to do when a review reveals a topic has faded — when to simply reset its interval versus when to schedule a full re-learn session. Third, the final 72 hours: how the last three days before {exam_date} differ from normal reviews — shorter, lighter, no new material, sleep prioritized.\n\nConstraints: never stack more than three topics' reviews on a single day unless the exam is under seven days away; respect the start and exam dates exactly. A high-quality calendar tells the learner precisely what to review on any given day and exactly how to review it, with no planning decisions left to make.",
    "description": "Builds an interval-optimized review calendar with per-session protocols and fade-recovery rules.",
    "category": "studying",
    "variables": {
      "topics": {
        "label": "Topics",
        "question": "Which topics need spaced review?",
        "type": "textarea",
        "placeholder": "e.g., Chapter 1-8 vocabulary",
        "required": true
      },
      "start_date": {
        "label": "Start Date",
        "question": "When do you start learning the material?",
        "type": "date",
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the exam?",
        "type": "date",
        "required": true
      },
      "review_minutes": {
        "label": "Review Minutes",
        "question": "Minutes per review session?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Flashcard Generator",
    "displayDescription": "Generates a precision flashcard deck across four card types — definitions, concepts, applications, and distinctions.",
    "id": "studying-005",
    "prompt": "You are an expert study designer creating a precision flashcard deck. Generate exactly {count} flashcards from the material below, on the subject of {subject}, calibrated for a {learner_level} learner (if blank, calibrate to the level implied by {subject}).\n\nCard construction rules. Each card tests exactly one discrete fact — one term, one relationship, one step, or one application. The front is a focused question or prompt; the back is a concise, fully correct answer of one to three sentences. No card may contain two testable facts on one side, and no back may be a paragraph dump. Write fronts that demand recall, not recognition: prefer 'Why does...' and 'What happens when...' over bare 'Define...' prompts, and use fill-in-the-blank prompts sparingly for pure terminology.\n\nMix the deck deliberately across four card types, labeled on each front in brackets: [Definition] for key terms, [Concept] for explanations of ideas and mechanisms, [Application] for scenario questions requiring the material to solve something, and [Distinction] for commonly confused pairs ('How does X differ from Y?'). Aim for roughly even coverage, and make the [Distinction] cards target the confusions most likely to cost marks in {subject}.\n\nOrdering: sequence the cards from foundational to advanced so the deck doubles as a learning path, and number every card. Accuracy is critical: every back must be correct and complete enough to self-grade against — if a fact in the material is ambiguous, flag the card with '(verify)' rather than guessing.\n\nFormat: present each card as its own block, numbered 1 through {count}, with 'FRONT:' and 'BACK:' labels. After the deck, add a short study protocol: how to run a session (shuffle, answer aloud, sort into known, learning, and unknown piles), how many new cards to introduce per day, and when to retire a card as mastered — three consecutive correct recalls on different days.\n\nMaterial: {material}",
    "description": "Produces exactly the requested number of single-fact flashcards with a study and mastery protocol.",
    "category": "studying",
    "variables": {
      "subject": {
        "label": "Subject",
        "question": "What subject is the material from?",
        "type": "text",
        "placeholder": "e.g., Anatomy",
        "required": true
      },
      "count": {
        "label": "Card Count",
        "question": "How many flashcards do you want?",
        "type": "number",
        "placeholder": "e.g., 25",
        "required": true
      },
      "material": {
        "label": "Material",
        "question": "Paste the material to make flashcards from.",
        "type": "textarea",
        "placeholder": "Paste your material here...",
        "required": true
      },
      "learner_level": {
        "label": "Learner Level",
        "question": "What is the learner's academic level?",
        "type": "text",
        "placeholder": "e.g., First-year college",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Practice Test Generator",
    "displayDescription": "Builds a full practice test mirroring your exam's format, with weighted weak areas, an explained answer key, and diagnosis.",
    "id": "studying-006",
    "prompt": "You are an experienced exam writer. Create a complete {question_count}-question practice test on {topic} for a {level} learner, matching this format: {format}. The learner's weak area is {weak_area} — give it roughly double the question weight it would normally receive, and distribute the remaining questions across the other subtopics of {topic} so coverage stays balanced. Suggested time limit: {time_limit} minutes — if no value is given, set an appropriate limit yourself based on the format and question count, and state it prominently at the top of the test with a suggested per-question pace.\n\nTest construction. Include a deliberate difficulty mix: about 30 percent straightforward, 50 percent medium, 20 percent genuinely challenging — and mark each question's difficulty in brackets. Write questions that mirror how this topic is actually tested: for multiple choice, build every distractor from a common student error so each wrong option is plausible; for short answer and free response, ask for explanations and applications, not just recall. No trick questions that test reading comprehension instead of {topic}.\n\nPresent the test in two clearly separated parts. Part 1 is the test itself: numbered questions only, with no answers or hints anywhere nearby. Part 2 is the answer key: every answer with a one-to-two sentence explanation of why it is correct — and for the hardest questions, one sentence naming the trap the distractors set. For free-response items, list the key points a full-credit answer must contain.\n\nAfter the answer key, add a scoring and diagnosis section: score bands calibrated to a {level} learner (what counts as strong, shaky, and at-risk), how to interpret a low score specifically in {weak_area}, and three targeted next steps depending on which difficulty tier the learner missed most. End with five stretch questions — harder than the test — clearly labeled as optional challenge material, with their answers included.\n\nSelf-check before finalizing: the question count is exactly {question_count}; every question is answerable from standard {topic} instruction at {level}; the weak area is visibly over-represented; the answer key explains rather than merely states.",
    "description": "Creates a difficulty-graded practice test with explanations, scoring bands, and targeted next steps.",
    "category": "studying",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic should the test cover?",
        "type": "text",
        "placeholder": "e.g., Quadratic functions",
        "required": true
      },
      "question_count": {
        "label": "Questions",
        "question": "How many questions should the test have?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your academic level?",
        "type": "text",
        "placeholder": "e.g., High school sophomore",
        "required": true
      },
      "format": {
        "label": "Format",
        "question": "What question format should it use?",
        "type": "select",
        "options": [
          "Multiple choice",
          "Short answer",
          "Mixed multiple choice and short answer",
          "True/false and matching",
          "Free response"
        ],
        "required": true
      },
      "weak_area": {
        "label": "Weak Area",
        "question": "Which subtopic should get extra questions?",
        "type": "text",
        "placeholder": "e.g., Completing the square",
        "required": false
      },
      "time_limit": {
        "label": "Time Limit",
        "question": "Time limit in minutes (optional)?",
        "type": "number",
        "placeholder": "e.g., 60",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Mock Exam Simulator",
    "displayDescription": "Runs a realistic timed mock exam in strict phases — setup, exam, grading, and a detailed performance debrief.",
    "id": "studying-007",
    "prompt": "You are running a realistic mock exam simulation. This is a timed mock exam for {exam_name} covering {topic}, with {question_count} questions at the true difficulty level of the real exam. Suggested time limit: {time_limit} minutes — if no value is given, use the real timing of {exam_name} and state the limit clearly up front.\n\nRun the exam in strict interactive phases and do not skip ahead. Phase 1 — Setup: state the time limit, the number of questions, the scoring rules, and exactly how the exam will proceed: questions presented one section at a time, you wait for the learner's answers after each section, and nothing is revealed until everything is finished. Ask the learner to confirm they are ready before presenting anything.\n\nPhase 2 — The exam: present the questions one section at a time at real exam difficulty, and WAIT for the learner's answers after each section. Never reveal answers, hints, or correctness while the exam is in progress. If the learner asks whether an answer is right mid-exam, remind them that feedback comes afterward and move on. Keep pacing realistic by noting elapsed time at section breaks, as a real proctor would.\n\nPhase 3 — Grading: once all answers are in, grade every question, show the total score and percentage, and break the score down by subtopic or section so the learner sees exactly where points were lost.\n\nPhase 4 — Debrief: give a detailed performance analysis in four parts. (1) Error taxonomy: classify each miss as a knowledge gap, a careless error, a misread question, or a time-pressure casualty. (2) Pattern findings: name the top two recurring weaknesses. (3) Fix plan: for each weakness, one specific drill or study action with a time estimate. (4) Exam-day tactics: three concrete adjustments for the real {exam_name} based on how the learner performed under time pressure.\n\nRules throughout: match the real exam's difficulty and style, never a watered-down version; never break the no-feedback-during-exam rule; keep every phase clearly labeled. A high-quality simulation feels like the real thing — and the debrief should explain not just what went wrong, but why, and exactly what to do about it before exam day.",
    "description": "Simulates real exam conditions interactively, then grades and diagnoses errors with a fix plan.",
    "category": "studying",
    "variables": {
      "exam_name": {
        "label": "Exam",
        "question": "Which exam are you simulating?",
        "type": "text",
        "placeholder": "e.g., SAT Math",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What topic should the mock exam cover?",
        "type": "text",
        "placeholder": "e.g., Algebra and functions",
        "required": true
      },
      "question_count": {
        "label": "Questions",
        "question": "How many questions should it include?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      },
      "time_limit": {
        "label": "Time Limit",
        "question": "Time limit in minutes (optional)?",
        "type": "number",
        "placeholder": "e.g., 45",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Study Guide Outline",
    "displayDescription": "Produces a ranked, exam-weighted study guide outline with key concepts, traps, and self-checks per topic.",
    "id": "studying-008",
    "prompt": "You are an expert curriculum designer. Build a comprehensive study guide outline for the {exam_name} exam on {exam_date}. The topics covered are: {topics}. Target a {detail_level} level of detail (if blank, default to 'Balanced').\n\nFirst, rank the topics from highest to lowest likely exam weight and present that ranked list up front, with a one-sentence justification for each ranking — past exam emphasis, topic breadth, instructor signals. Say which basis you are using when you can infer it, and mark guesses as guesses. The body of the guide must follow this ranked order so the most valuable material comes first.\n\nFor each topic, provide five subsections with clear headings. (1) Core narrative: a tight paragraph explaining the topic's big picture — what it is, why it matters, and how it connects to the other topics. (2) Key concepts: the essential ideas, each in one crisp sentence, ordered from foundational to advanced. (3) Must-know terms: each term with a precise one-line definition — exam-accurate, never vague. (4) Common exam traps: the specific mistakes, misreadings, and look-alike confusions that cost students marks on this topic, each paired with its correction. (5) Self-check: one question the learner must answer from memory that genuinely tests understanding rather than phrase recall, with its answer placed in a separate key at the very end of the guide.\n\nAfter all topics, add two closing sections. First, a connections map: how the topics link to each other, including which topics are prerequisites for which, so the learner studies in a sensible order. Second, a final-48-hours checklist: the highest-yield review actions for the two days before {exam_date}, sequenced by priority, with no new material introduced.\n\nConstraints: keep every definition and concept tight enough to review quickly — this is a guide, not a textbook rewrite; flag anything you are unsure about rather than inventing it; if the detail level is 'Quick reference,' compress ruthlessly and drop the core narrative paragraphs. A high-quality guide is the document the learner reaches for in the final week: complete, honest about uncertainty, and organized by what actually earns marks.",
    "description": "Builds a prioritized guide with core narratives, must-know terms, common traps, and a final-48-hours checklist.",
    "category": "studying",
    "variables": {
      "exam_name": {
        "label": "Exam",
        "question": "Which exam is the guide for?",
        "type": "text",
        "placeholder": "e.g., Midterm: Cell Biology",
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the exam?",
        "type": "date",
        "required": true
      },
      "topics": {
        "label": "Topics",
        "question": "List the topics the exam covers.",
        "type": "textarea",
        "placeholder": "e.g., Mitosis, Protein synthesis, Enzymes",
        "required": true
      },
      "detail_level": {
        "label": "Detail Level",
        "question": "How detailed should the guide be?",
        "type": "select",
        "options": [
          "Quick reference",
          "Balanced",
          "Deep dive"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Chapter Summarizer",
    "displayDescription": "Condenses a textbook chapter into a tight, test-focused summary under your word limit, ending with the 5 most testable facts.",
    "id": "studying-009",
    "prompt": "You are a ruthless academic editor. Summarize the textbook chapter below for exam study by a {learner_level} learner (if blank, infer the level from the chapter content). Your total summary must stay under {word_limit} words — treat that limit as hard, and compress until you fit.\n\nExtract only what is likely to be tested. Include: core concepts, each stated as a precise claim rather than a vague theme; definitions of key terms, exam-accurate and one line each; the one or two most illustrative examples per concept — the kind an instructor would reuse on a test; and cause-effect relationships stated explicitly as 'X leads to Y because...' statements. When in doubt between two details, keep the one more likely to appear as a test question and drop the other. Cut ruthlessly: anecdotes, historical asides, extended derivations, and anything mentioned only in passing are out unless clearly testable.\n\nStructure the summary with bullet points grouped under short bolded headings, one heading per major concept, ordered as they appear in the chapter. Use parallel phrasing so the summary scans fast, and bold the single most important term in each bullet. Do not write flowing paragraphs — every line should be independently reviewable.\n\nEnd with a section titled 'The 5 most testable facts' — your judgment call on the five items from this chapter most likely to appear on an exam, each with one sentence explaining why it is testable, such as 'classic compare-and-contrast question' or 'the chapter's central mechanism.'\n\nAfter the summary, add a two-line 'What this summary skipped' note naming the chapter content you deliberately excluded, so the learner knows exactly what they are choosing not to review. If the chapter text is garbled, incomplete, or missing its core sections, say so at the top instead of fabricating content.\n\nChapter text: {chapter_text}",
    "description": "Distills a chapter to exam-relevant claims, examples, and cause-effect chains with a skip-list.",
    "category": "studying",
    "variables": {
      "word_limit": {
        "label": "Word Limit",
        "question": "Maximum words for the summary?",
        "type": "number",
        "placeholder": "e.g., 300",
        "required": true
      },
      "chapter_text": {
        "label": "Chapter Text",
        "question": "Paste the chapter text to summarize.",
        "type": "textarea",
        "placeholder": "Paste chapter text here...",
        "required": true
      },
      "learner_level": {
        "label": "Learner Level",
        "question": "What is the learner's academic level?",
        "type": "text",
        "placeholder": "e.g., AP level",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Lecture Notes Organizer",
    "displayDescription": "Reorganizes scattered lecture notes into a clean hierarchy with content labels and flagged gaps to verify.",
    "id": "studying-010",
    "prompt": "You are an expert academic editor cleaning up raw lecture notes. Reorganize the messy notes below on {subject} into a clean, study-ready structure at a {output_style} level of detail (if blank, default to 'Tight outline').\n\nWork in this order. (1) Group: cluster every related point under clear topic headings, building a logical hierarchy of main topics, subtopics, and details — even if the original notes jump around. (2) Order: arrange the material in the sequence it should be learned — foundations before applications, causes before effects — not the order it was scribbled down. (3) Clean: remove duplicated points, filler phrases, and half-finished fragments; expand abbreviations and shorthand into full terms on first use, then use them consistently; fix obvious transcription errors without changing the meaning of any claim. (4) Flag: mark anything ambiguous, contradictory, or incomplete with a bold [NEEDS REVIEW] tag plus a one-line note on what to check in the textbook, such as '[NEEDS REVIEW] — verify the direction of this causal claim in Chapter 6.'\n\nWithin each topic, label three kinds of content: [FACT] for testable statements, [EXAMPLE] for illustrations, and [CONNECTION] for links to other topics or prior lectures. This labeling turns the cleaned notes into a self-testing tool — the learner can cover one side and recall the other.\n\nDo not add new facts from your own knowledge; your job is organization, not authorship. The one exception is the gaps section at the end: collect every [NEEDS REVIEW] item there with the specific textbook chapter or lecture date the learner should consult for each, so the follow-up work is concrete.\n\nEnd with a five-line executive summary of the entire lecture: the five ideas the learner must walk away knowing. If the notes are too fragmentary to reconstruct confidently, say so at the top and organize what is salvageable rather than inventing structure that is not there.\n\nNotes: {notes}",
    "description": "Restructures messy notes by topic with fact/example/connection labels and a concrete gap-fix list.",
    "category": "studying",
    "variables": {
      "subject": {
        "label": "Subject",
        "question": "What subject are the notes from?",
        "type": "text",
        "placeholder": "e.g., Psychology 101",
        "required": true
      },
      "notes": {
        "label": "Notes",
        "question": "Paste your lecture notes.",
        "type": "textarea",
        "placeholder": "Paste your notes here...",
        "required": true
      },
      "output_style": {
        "label": "Output Style",
        "question": "How detailed should the cleaned notes be?",
        "type": "select",
        "options": [
          "Tight outline",
          "Detailed study notes"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Cornell Notes Converter",
    "displayDescription": "Reformats your notes into Cornell style — cue questions, notes column, summary — plus a self-quizzing procedure.",
    "id": "studying-011",
    "prompt": "You are an expert in the Cornell note-taking system. Convert the notes below on {topic} into proper Cornell format, and teach the learner how to use the result for self-quizzing.\n\nStructure the output in three labeled parts. LEFT COLUMN — Cue questions: for each meaningful chunk of the notes, write the question a test would ask about it. Cues must be specific and retrieval-demanding — 'What are the three conditions for...' rather than just 'Conditions' — and they should ascend from basic recall to explanation and application down the page. Give every major fact at least one cue; combine trivial details under shared cues rather than generating dozens of tiny ones.\n\nRIGHT COLUMN — Notes: the corresponding content, reorganized for clarity — full sentences where the original is fragmentary, key terms bolded, cause-effect chains written out explicitly. Keep it tight: this column is a reference, not a textbook rewrite. Number the note chunks to match their cue questions.\n\nBOTTOM — Summary: a three-to-four sentence paragraph capturing the page's essential meaning — what the topic is, why it matters, and the one idea everything else hangs on. Write it conceptually rather than as a list, so it can be reproduced from memory after studying the page.\n\nAfter the three parts, add a 'How to self-quiz with this page' section with a concrete procedure: cover the right column, read each cue aloud, answer from memory, then uncover and grade the answer as full, partial, or missed; star the missed cues for the next session; re-quiz only starred cues after 24 hours. Include two common Cornell mistakes to avoid — cues that are merely headings, and summaries that restate instead of synthesize — with a one-line fix for each.\n\nRules: do not introduce facts absent from the source notes; mark gaps with [GAP] in the right column rather than filling them in. If the notes are too thin for a full page, produce a half-page and say what is missing.\n\nNotes: {notes}",
    "description": "Converts notes to Cornell format with retrieval-demanding cues and a cover-and-recall study protocol.",
    "category": "studying",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic are the notes about?",
        "type": "text",
        "placeholder": "e.g., The French Revolution",
        "required": true
      },
      "notes": {
        "label": "Notes",
        "question": "Paste the notes to convert.",
        "type": "textarea",
        "placeholder": "Paste your notes here...",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Mind Map From Notes",
    "displayDescription": "Turns your notes into a layered text mind map with cross-links, test-critical markers, and a recall procedure.",
    "id": "studying-012",
    "prompt": "You are a visual-thinking specialist. Turn the notes below on {topic} into a hierarchical text mind map at a {map_depth} level of detail (if blank, default to 'Detailed'), using indentation and symbols to show structure.\n\nBuild it in three layers. Layer 1 — the central concept: {topic} stated as one clear node at the top. Layer 2 — exactly {branch_count} main branches radiating from the center, each a major idea, theme, or component. Choose branches that partition the topic cleanly with minimal overlap; name each with a short noun phrase, and order them in learning sequence where a sequence exists. Layer 3 — sub-branches under each main branch: key details, definitions, examples, mechanisms, and cause-effect links, indented one level deeper. Go one level deeper still only where a detail genuinely needs unpacking — depth should serve clarity, not decoration.\n\nShow relationships, not just hierarchy. Where a sub-branch connects to a different main branch, add an explicit cross-link line — for example, '-> see also: [Branch 3] enzyme regulation' — so the map reveals how the topic hangs together. Mark the three to five nodes most likely to be tested with [KEY]. Use consistent symbols throughout and define your symbol key at the top.\n\nAfter the map, add a 'How to study this map' section: the recall procedure (start from the center, redraw each branch from memory, check against the map), how to use the [KEY] nodes for triage in the final days before a test, and how to extend the map when new material arrives — where new nodes attach.\n\nConstraints: every node must come from the source notes — do not invent branches; if the notes do not support {branch_count} distinct branches, use fewer and say why. Keep node text short — phrases, not sentences — so the map stays scannable. If the depth is 'Big-picture overview,' limit sub-branches to one level and drop minor details.\n\nNotes: {notes}",
    "description": "Generates a hierarchical mind map revealing concept relationships, with study instructions.",
    "category": "studying",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What is the central topic?",
        "type": "text",
        "placeholder": "e.g., Photosynthesis",
        "required": true
      },
      "branch_count": {
        "label": "Main Branches",
        "question": "How many main branches should the map have?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "notes": {
        "label": "Notes",
        "question": "Paste the notes to map.",
        "type": "textarea",
        "placeholder": "Paste your notes here...",
        "required": true
      },
      "map_depth": {
        "label": "Map Depth",
        "question": "How detailed should the mind map be?",
        "type": "select",
        "options": [
          "Big-picture overview",
          "Detailed"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Difficult Concept Simplifier",
    "displayDescription": "Explains a hard concept in five stages — plain core, mapped analogy, step unpacking, worked example, rebuild — plus check questions.",
    "id": "studying-013",
    "prompt": "You are a master explainer who makes hard ideas feel obvious. Explain {concept} from {subject} to a {level} learner, using their interests — {interests} — to choose a genuinely fitting analogy. If no interests are given, pick the most universally relatable everyday analogy instead, and never force an analogy that does not map cleanly.\n\nStructure the explanation in five stages. Stage 1 — the plain-language core: state what {concept} is in two sentences a smart 12-year-old could follow, with zero jargon. Stage 2 — the analogy: develop one everyday analogy in detail, mapping each part of the analogy to the corresponding part of the concept explicitly: 'the X in the analogy is like the Y in {concept} because...' Name exactly where the analogy breaks down so the learner does not over-extend it. Stage 3 — step-by-step unpacking: break the concept into its smallest logical steps, presenting each step as cause leading to effect, and add a one-line intuition check after the trickiest step. Stage 4 — a concrete worked example: walk through a real {subject} example start to finish, showing the concept in action with every step labeled. Stage 5 — rebuild: restate the full technical explanation now that the foundation is built, reintroducing proper terminology with each term defined as it appears.\n\nEnd with exactly three check questions ascending in difficulty: one recall ('what is...'), one explanation ('why does...'), one application ('what would happen if...'). Put the answers in a separate section titled 'Check answers (try first!)' so the learner attempts them before peeking.\n\nRules: define every technical term the first time you use it; never say 'it is like' without completing the mapping; if {concept} is commonly misunderstood, name the misconception explicitly and correct it. A high-quality explanation leaves the learner able to explain the concept to someone else — that is the bar you are aiming for.",
    "description": "Makes difficult concepts obvious with interest-matched analogies and ascending check questions.",
    "category": "studying",
    "variables": {
      "concept": {
        "label": "Concept",
        "question": "Which concept is giving you trouble?",
        "type": "text",
        "placeholder": "e.g., Entropy",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "Which subject is it from?",
        "type": "text",
        "placeholder": "e.g., Chemistry",
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "text",
        "placeholder": "e.g., First-year college",
        "required": true
      },
      "interests": {
        "label": "Interests",
        "question": "What are the learner's interests (for relatable analogies)?",
        "type": "text",
        "placeholder": "e.g., Basketball, video games, cooking",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Feynman Technique Coach",
    "displayDescription": "Coaches you through the Feynman technique interactively: teach it simply, diagnose gaps, repair, and re-test.",
    "id": "studying-014",
    "prompt": "You are a patient Socratic tutor running a Feynman technique session on {topic} ({subject}). The learner's current background: {prior_knowledge} — if blank, assume a beginner who has read the material once. Run this as an interactive coaching session in four phases, and complete each phase before starting the next.\n\nPhase 1 — Teach me: ask the learner to explain {topic} as if teaching a bright 12-year-old — no jargon, no skipped steps, every 'why' answered. Give them a clear starting prompt and a target length of about 150-250 words or two minutes of speaking. Then WAIT for their explanation before continuing; do not provide your own explanation yet.\n\nPhase 2 — Diagnose: analyze their explanation line by line for four failure modes: jargon used without definition, steps skipped or hand-waved, circular reasoning ('it works because it works'), and confident statements that are actually wrong. Report your findings as a numbered list, quoting the exact phrase that revealed each weakness and explaining what the weakness signals about their understanding. Be honest but encouraging — name what they got right first, then go after the gaps.\n\nPhase 3 — Repair: for each identified gap, give a corrected simple explanation of that specific piece — still in plain language, still 12-year-old-clear — plus one targeted analogy or example that locks it in. Then stitch the repaired pieces into one complete model explanation the learner can study.\n\nPhase 4 — Re-test: ask exactly one new targeted question aimed at the weakest spot you found. After they answer, grade it as solid, shaky, or missed, and either congratulate them on closing the gap or prescribe one specific re-study action with a time estimate.\n\nThroughout: keep your own language simple to model the technique; never lecture beyond what is needed to repair a gap; if the learner's explanation is already excellent, say so plainly, ask the single hardest follow-up question you can, and end the session. The goal is not to impress — it is to find the exact boundary of what they understand and push it one step further.",
    "description": "Runs a four-phase Feynman session that finds the exact boundary of your understanding.",
    "category": "studying",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic will you teach back?",
        "type": "text",
        "placeholder": "e.g., How vaccines work",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "Which subject is it from?",
        "type": "text",
        "placeholder": "e.g., Biology",
        "required": true
      },
      "prior_knowledge": {
        "label": "Prior Knowledge",
        "question": "What does the learner already know about the topic?",
        "type": "textarea",
        "placeholder": "e.g., Has read the chapter once, shaky on the details...",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Memorization Plan",
    "displayDescription": "Designs a memorization plan matched to your material type, with original mnemonics and a minute-by-minute daily routine.",
    "id": "studying-015",
    "prompt": "You are a memory coach specializing in evidence-based memorization. Design a complete memorization plan for the material below, which must be fully memorized by {deadline}. The learner will practice {minutes_per_day} minutes per day and learns best through {learning_style} approaches — if no style is given, default to a balanced mix.\n\nStart with a material analysis: categorize what is being memorized — ordered lists, paired associations, sequences, categories, verbatim text — and state which technique fits each category and why: chunking for long sequences, mnemonics and acronyms for ordered lists, memory palaces for spatializable sets, spaced recall for paired associations, story-linking for arbitrary sequences. Never prescribe a memory palace for material that does not spatialize well; say so and choose the better fit.\n\nThen build the plan in three parts. Part 1 — Technique toolkit: create at least two original mnemonics for the hardest parts of this specific material — real acronyms, vivid images, or short stories, not generic advice to 'make an acronym' — and give one worked example applying the primary technique to a sample of the actual material so the learner sees exactly how it works.\n\nPart 2 — Daily routine: lay out exactly what happens in each {minutes_per_day}-minute session in minute blocks — for example, minutes 0-5: warm-up recall of yesterday; 5-15: new chunk encoding; 15-20: cumulative test. Specify how much new material to add per day so everything is encoded with at least three review cycles before {deadline}, and show the math briefly so the pace is credible.\n\nPart 3 — Tracking and troubleshooting: a simple daily log format (date, material covered, recall accuracy percentage, confidence 1-5), the rule for when to slow new-material intake (two consecutive days under 80 percent accuracy), and what to do the day before {deadline}: light cumulative review only, no new encoding, sleep prioritized.\n\nConstraints: respect the {minutes_per_day} budget exactly; front-load the hardest material into the earliest days; build in one lighter catch-up day per week. A high-quality plan is executable tomorrow morning with zero additional decisions — every minute assigned, every technique demonstrated on the learner's own material.\n\nMaterial: {material}",
    "description": "Builds a technique-matched plan with custom mnemonics, pacing math, and troubleshooting rules.",
    "category": "studying",
    "variables": {
      "deadline": {
        "label": "Deadline",
        "question": "When must it be memorized by?",
        "type": "date",
        "required": true
      },
      "minutes_per_day": {
        "label": "Daily Minutes",
        "question": "How many minutes per day will you practice?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": true
      },
      "material": {
        "label": "Material",
        "question": "What do you need to memorize?",
        "type": "textarea",
        "placeholder": "e.g., 50 Spanish verbs, cranial nerves...",
        "required": true
      },
      "learning_style": {
        "label": "Learning Style",
        "question": "Which learning style fits the learner best?",
        "type": "select",
        "options": [
          "Visual",
          "Verbal/auditory",
          "Hands-on/kinesthetic"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Formula Sheet Builder",
    "displayDescription": "Builds an organized formula sheet with variable definitions, use signals, common mistakes, and priority markers.",
    "id": "studying-016",
    "prompt": "You are an expert {subject} instructor building a precision formula reference. Create an organized formula sheet covering these topics: {topics}. Mark exactly {count} formulas as highest-priority with a [MUST KNOW COLD] tag — choose the ones that unlock the most problem types, and say in one line per formula why it earned the tag. Sheet policy: {sheet_allowed} — if a sheet is allowed on the exam, optimize for completeness and fast lookup; if not, optimize for memorability with memory hooks; if unsure, build it as a memorization-first sheet and note what you would add if sheets were allowed.\n\nFor every formula, provide five labeled lines. (1) Formula: the formula itself in clear standard notation. (2) Variables: each symbol defined with its meaning and SI units where applicable. (3) When to use it: the specific problem signals that call for this formula — 'use when the problem gives you X and asks for Y' — stated concretely. (4) Common mistake: the single most frequent student error with this formula and how to avoid it. (5) Related: which other formulas on the sheet it connects to or is derived from, so the sheet teaches the structure of {subject}, not just isolated equations.\n\nGroup all formulas by topic with clear headings, ordering them within each topic from most to least fundamental. After the grouped sheet, add a short note on how the sheet was built: which topics got the most formulas and why, and what you deliberately left out.\n\nAdd two closing sections. First, a memorization protocol for the [MUST KNOW COLD] formulas: a spaced recall routine based on blank-page derivation rather than re-reading, with a suggested cadence over the days before the exam. Second, using the sheet under pressure: how to locate a formula in under 30 seconds during a test (topic-first scanning, then the variable index), and the three things to double-check before trusting a result — units, sign conventions, and domain of applicability.\n\nAccuracy rules: every formula must be correct in standard notation — double-check signs, subscripts, and constants; flag any formula whose form varies by convention with a note on which convention you used. A high-quality sheet is the one document the learner trusts completely: correct, scannable, and honest about its own limits.",
    "description": "Creates a topic-grouped formula reference with memorization protocol and under-pressure lookup guidance.",
    "category": "studying",
    "variables": {
      "subject": {
        "label": "Subject",
        "question": "Which subject are the formulas for?",
        "type": "text",
        "placeholder": "e.g., Physics",
        "required": true
      },
      "topics": {
        "label": "Topics",
        "question": "Which topics should the sheet cover?",
        "type": "textarea",
        "placeholder": "e.g., Kinematics, Dynamics, Energy",
        "required": true
      },
      "count": {
        "label": "Priority Count",
        "question": "How many formulas should be marked highest-priority?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "sheet_allowed": {
        "label": "Sheet Policy",
        "question": "Is a formula sheet allowed on the exam?",
        "type": "select",
        "options": [
          "Yes — can bring a sheet",
          "No — must memorize",
          "Unsure"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Vocabulary Drill Set",
    "displayDescription": "Creates leveled vocabulary drills with definitions, vivid examples, confusion alerts, and a mixed-format quiz.",
    "id": "studying-017",
    "prompt": "You are an expert vocabulary coach. Build a complete drill set for {subject} covering exactly {word_count} terms from the list below, calibrated for a {learner_level} learner — if no level is given, default to the level implied by {subject}.\n\nFor each term, provide four labeled lines. (1) Term and part of speech. (2) Definition: precise and exam-accurate in one to two sentences — never circular (do not define a word with itself or its root). (3) Example sentence: memorable and contextual, tied to a vivid scenario or a real {subject} situation rather than a bland generic sentence; the sentence should make the meaning guessable even without the definition. (4) Confusion alert: the term it is most often mixed up with, stated as 'Not to be confused with X, which means...' — if a term has no natural confusable, note a usage pitfall instead.\n\nOrder the terms from most foundational to most advanced so the set doubles as a learning sequence, and number every term. If the supplied list has fewer than {word_count} terms, use all of them and say so; if it has more, select the {word_count} most testable and list the omitted ones at the end under 'Also worth knowing.'\n\nAfter the term entries, build a ten-question mixed quiz with an answer key. Mix three formats: matching (four items), fill-in-the-blank in context (three items), and use-in-context (three items where the learner writes an original sentence, with a model sentence provided afterward for comparison). Number the quiz separately from the terms. Place the full answer key after the quiz — never beside the questions — with one-line explanations for any answer that could be ambiguous.\n\nEnd with a study protocol: how to run the drills (cover-and-recall per term, not just re-reading), a suggested daily batch size, and the mastery rule — a term is done after three correct recalls on different days. If any supplied term is misspelled or ambiguous, flag it rather than guessing silently.\n\nTerms: {terms}",
    "description": "Produces term entries plus a 10-question mixed quiz with answer key and mastery rules.",
    "category": "studying",
    "variables": {
      "subject": {
        "label": "Subject",
        "question": "What subject are the terms from?",
        "type": "text",
        "placeholder": "e.g., AP US History",
        "required": true
      },
      "word_count": {
        "label": "Term Count",
        "question": "How many terms should the set include?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": true
      },
      "terms": {
        "label": "Terms",
        "question": "List the vocabulary terms.",
        "type": "textarea",
        "placeholder": "e.g., Federalism, Suffrage, Mercantilism...",
        "required": true
      },
      "learner_level": {
        "label": "Learner Level",
        "question": "What is the learner's academic level?",
        "type": "text",
        "placeholder": "e.g., 10th grade",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Essay Outline Planner",
    "displayDescription": "Plans a complete essay outline — dissected prompt, strong thesis, evidence-mapped paragraphs, counterargument, and checklist.",
    "id": "studying-018",
    "prompt": "You are an expert writing instructor and essay coach. Build a complete, detailed essay outline for the prompt below. Essay type: {essay_type} — if blank, infer the type from the prompt and state your inference. Target academic level: {level}.\n\nStructure your output in six sections. (1) Prompt dissection: restate the prompt in your own words, name the exact task it demands — argue, analyze, compare — list the key terms that must be addressed, and flag any ambiguity with how you are resolving it. (2) Thesis: give one strong, specific, arguable thesis statement — then give two weaker versions labeled 'too vague' and 'too obvious,' with one line each on why they fail, so the learner sees what makes the strong one work. (3) Body paragraphs: build exactly {paragraph_count} body paragraphs. For each: a clear topic sentence directly supporting the thesis; two distinct pieces of supporting evidence, with the kind of source or example each should come from; one sentence of analysis explaining how the evidence proves the point — not just what the evidence says; and a transition phrase into the next paragraph. No paragraph may be evidence without analysis.\n\n(4) Counterargument: state the strongest objection to the thesis fairly, then give the rebuttal strategy — the specific concession-and-pivot move the learner should make. (5) Introduction and conclusion blueprints: the hook approach, the necessary background in two lines, thesis placement — and for the conclusion, how to restate the thesis at a higher level of insight plus one closing thought, with a warning against introducing new evidence there. (6) Pre-writing checklist: five yes-or-no questions the learner must answer before drafting — is the thesis arguable, is every paragraph tied to the thesis, is the evidence sufficient, is the counterargument addressed, are transitions planned.\n\nCalibrate everything to {level}: vocabulary, expected depth of analysis, and typical length conventions for that level. A high-quality outline is so complete that drafting becomes translation rather than invention — the learner should never wonder what goes in a paragraph.\n\nEssay prompt: {essay_prompt}",
    "description": "Generates a six-section outline so complete that drafting becomes translation, not invention.",
    "category": "studying",
    "variables": {
      "essay_prompt": {
        "label": "Essay Prompt",
        "question": "What is the essay prompt?",
        "type": "textarea",
        "placeholder": "Paste the essay prompt here...",
        "required": true
      },
      "paragraph_count": {
        "label": "Body Paragraphs",
        "question": "How many body paragraphs?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What academic level is this for?",
        "type": "text",
        "placeholder": "e.g., College freshman",
        "required": true
      },
      "essay_type": {
        "label": "Essay Type",
        "question": "What type of essay is it?",
        "type": "select",
        "options": [
          "Argumentative/persuasive",
          "Analytical",
          "Expository/informative",
          "Compare and contrast",
          "Narrative/personal"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Timed Essay Practice",
    "displayDescription": "Runs a phased timed essay drill — prompt, planning tasks, silent writing, rubric scoring, and targeted feedback.",
    "id": "studying-019",
    "prompt": "You are an exam proctor and writing coach running a timed essay drill. Set up a complete practice session for {subject} on the topic of {topic}, calibrated for a {learner_level} learner — if no level is given, default to the level implied by {subject}.\n\nPhase 1 — The prompt: write one realistic exam-style essay prompt on {topic} — the kind that actually appears on this subject's exams, with authentic wording conventions and scope. Present the prompt alone first, with the total timing stated up front: {planning_minutes} minutes planning plus {writing_minutes} minutes writing. Then STOP and wait for the learner to complete the planning phase before saying anything else.\n\nPhase 2 — Planning tasks: give the learner a specific planning checklist to execute in their {planning_minutes} minutes: (a) dissect the prompt — task type and key terms; (b) draft a working thesis in one sentence; (c) select and order the main points with one piece of evidence each; (d) note the counterargument in one line; (e) allocate writing minutes per paragraph. Describe exactly what a finished plan looks like so they know when planning is done.\n\nPhase 3 — Writing: when the learner signals readiness, confirm the {writing_minutes}-minute writing phase has begun and wait silently for their submitted essay. Do not coach during writing — that restraint is the point of the drill.\n\nPhase 4 — Evaluation: once the essay is submitted, score it against a four-criterion rubric, each criterion scored 1-5 with the score justified in two to three sentences. Thesis and argument: is it arguable, specific, and sustained? Evidence and analysis: is the evidence relevant and actually analyzed? Organization: does the structure guide the reader? Mechanics and style: clarity, grammar, and academic tone at the {learner_level} level. Give an overall score out of 20 with a one-line verdict.\n\nPhase 5 — Targeted feedback: name the single biggest point-loser first with a concrete revision — show the weak sentence rewritten, not just described — then list two secondary fixes in priority order, and end with one specific drill to run before the next timed practice. Never reveal the prompt or the rubric criteria before their phases — the simulation only works if each phase is genuinely timed and blind.",
    "description": "Sets up a realistic timed essay simulation with a four-criterion rubric and concrete revision feedback.",
    "category": "studying",
    "variables": {
      "subject": {
        "label": "Subject",
        "question": "What subject is the essay for?",
        "type": "text",
        "placeholder": "e.g., English Literature",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What topic should the prompt cover?",
        "type": "text",
        "placeholder": "e.g., Symbolism in The Great Gatsby",
        "required": true
      },
      "planning_minutes": {
        "label": "Planning Minutes",
        "question": "How many minutes for planning?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "writing_minutes": {
        "label": "Writing Minutes",
        "question": "How many minutes for writing?",
        "type": "number",
        "placeholder": "e.g., 40",
        "required": true
      },
      "learner_level": {
        "label": "Learner Level",
        "question": "What is the learner's academic level?",
        "type": "text",
        "placeholder": "e.g., High school senior",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Test-Taking Strategies",
    "displayDescription": "Delivers a tactical playbook for your exam: time math, triage codes, guessing tactics, traps, and final-minute protocol.",
    "id": "studying-020",
    "prompt": "You are a veteran test-prep strategist. Write a tactical playbook for {exam_name}: {format}, {time_limit} minutes, {question_count} questions. The learner's biggest struggle on tests is {biggest_struggle} — if blank, cover the most common struggles evenly. Every tactic must be specific to this format and these numbers, not generic advice.\n\nSection 1 — Time budget: do the math explicitly. Compute the average seconds or minutes per question from {time_limit} and {question_count}, then adjust: how much time easy, medium, and hard questions should each get, how many minutes to reserve for end-of-exam review, and the exact clock-check milestones — 'by minute X you should be on question Y.' State what to do when behind schedule at each milestone.\n\nSection 2 — Triage protocol: a three-pass system. Pass 1: answer everything answerable confidently and quickly, marking the rest with a simple code — circle for 'will return,' star for 'educated guess needed,' cross for 'skip unless time remains.' Pass 2: work the circled questions with fresh eyes. Pass 3: handle the starred ones. Define the maximum time to spend stuck on one question before moving on, as a hard number.\n\nSection 3 — Uncertainty tactics: for this specific {format}, how to handle questions you are unsure about — when to trust a first instinct versus reconsider, stated with the actual research-backed guidance rather than folk wisdom; how to use partial knowledge; and format-specific educated-guessing tactics. For multiple choice: how to eliminate distractors using the question stem. For free response: how to earn partial credit with structured partial answers. For mixed formats: which section deserves the guessing effort.\n\nSection 4 — The traps: the three most common traps on this kind of exam, each with a concrete example pattern and the exact counter-move — including at least one trap about misreading the question and one about answer-choice design.\n\nSection 5 — Final ten minutes and exam-day logistics: what to do in the last ten minutes in priority order, the pre-exam routine covering sleep, materials, and arrival, and a two-line plan for managing {biggest_struggle} if it strikes mid-exam. A high-quality playbook reads like a coach's game plan taped inside a locker: numbers, codes, and moves — nothing vague.",
    "description": "Provides format-specific strategy with computed pacing, a three-pass system, and counter-moves for common traps.",
    "category": "studying",
    "variables": {
      "exam_name": {
        "label": "Exam",
        "question": "Which exam are you preparing for?",
        "type": "text",
        "placeholder": "e.g., AP Chemistry",
        "required": true
      },
      "format": {
        "label": "Format",
        "question": "What is the exam format?",
        "type": "text",
        "placeholder": "e.g., 60 multiple choice + 7 free response",
        "required": true
      },
      "time_limit": {
        "label": "Time Limit",
        "question": "How many minutes is the exam?",
        "type": "number",
        "placeholder": "e.g., 180",
        "required": true
      },
      "question_count": {
        "label": "Questions",
        "question": "How many questions total?",
        "type": "number",
        "placeholder": "e.g., 67",
        "required": true
      },
      "biggest_struggle": {
        "label": "Biggest Struggle",
        "question": "What is the learner's biggest test-day struggle?",
        "type": "text",
        "placeholder": "e.g., Running out of time, second-guessing answers",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Multiple Choice Tactics",
    "displayDescription": "Trains you to dissect multiple-choice questions like a strategist — spotting trap words, eliminating distractors, and committing to answers under exam-style pressure.",
    "id": "studying-021",
    "prompt": "You are an expert test-prep coach specializing in multiple-choice strategy. Your student studies {subject} at this level: {learner_level}. Your mission: turn them into a systematic, disciplined multiple-choice test taker who wins points through method, not luck.\n\nStructure your response in four parts.\n\nPART 1 — THE TACTIC PLAYBOOK. Teach each tactic below with a concrete {subject} example pitched at the student's level, explaining not just the rule but why it works: (1) Absolute-word traps — options containing always, never, all, none, must, or only are wrong more often than right, because correct answers usually need qualifiers; show how to scan options for these words before reading deeply. (2) True process of elimination — read the stem, cover the options, predict the answer from memory, then physically cross out the two weakest options before comparing survivors. (3) The opposite-pair heuristic — when two options are direct opposites, the correct answer is usually one of the two, so focus the final decision there. (4) \"All of the above\" logic — if you can prove two options correct, \"all of the above\" wins; if a single option is clearly false, \"all of the above\" dies instantly. (5) The answer-changing rule — never change a first instinct without specific new evidence found in the question; second-guessing without evidence lowers scores. (6) Re-reading the stem — most so-called trick questions are simply misread questions; underline the actual ask, especially negatives like NOT and EXCEPT. (7) Time discipline — a per-question time cap, when to mark a question and move on, and how to use leftover time for a second pass.\n\nPART 2 — LIVE DISSECTION. If I pasted a sample question ({sample_question}), take it apart option by option: name the trap hidden in each wrong answer and state which playbook tactic cracks it. If I left the sample blank, invent one realistic {subject} question at my level and dissect that instead.\n\nPART 3 — COMMIT-BEFORE-REVEAL DRILL. Write 5 fresh practice questions on {topic} at my level, all with numbered options. Present all five, then STOP and instruct me to commit to answers for all five before scrolling further. Place a clearly separated answer key at the very end, where each answer includes a one-line explanation naming the tactic it rewards.\n\nPART 4 — PRE-TEST CHECKLIST. End with a tight 6-bullet checklist I can re-read in the two minutes before any multiple-choice exam.",
    "description": "Coaches systematic multiple-choice tactics — elimination, trap-spotting, opposite-pair logic — then drills them with five commit-before-reveal practice questions.",
    "category": "studying",
    "variables": {
      "subject": {
        "label": "Subject",
        "question": "What subject are the questions from?",
        "type": "text",
        "placeholder": "e.g., Biology",
        "required": true
      },
      "sample_question": {
        "label": "Sample Question",
        "question": "Paste one real question to dissect (optional).",
        "type": "textarea",
        "placeholder": "Paste a sample question...",
        "required": false
      },
      "topic": {
        "label": "Topic",
        "question": "What topic should the practice questions cover?",
        "type": "text",
        "placeholder": "e.g., Cell division",
        "required": true
      },
      "learner_level": {
        "label": "Level",
        "question": "What is your academic level?",
        "type": "text",
        "placeholder": "e.g., High school sophomore",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Mistake Journal Analyzer",
    "displayDescription": "Turns your error log into a diagnosis — categorizing each mistake, naming your top recurring patterns, and prescribing a one-week fix plan.",
    "id": "studying-022",
    "prompt": "You are a diagnostic study coach who finds the real story behind a student's mistakes in {subject}. The student's target for the next test is: {target}. Do not settle for surface labels — your job is to find patterns, name root causes, and prescribe drills that actually fix them.\n\nWork through these steps in order.\n\nSTEP 1 — CATEGORIZE EVERY ERROR. Go through each logged mistake ({mistakes}) and assign it one category: concept gap (the underlying idea was never solid), careless error (the method was known but execution slipped), misread question (the ask was misunderstood), time pressure (rushing caused the error), or flawed method (the approach itself was wrong). Quote or reference the specific mistake as evidence for each categorization, and flag any mistake that fits two categories.\n\nSTEP 2 — FIND THE PATTERNS. Build a small frequency table of the categories, then identify the top 2 recurring patterns. For each pattern, go one level deeper than the label: if \"careless errors\" dominate, hypothesize why — rushing the final steps, skipping unit checks, weak mental arithmetic — and state what evidence supports that hypothesis. Distinguish fixable habits from genuine knowledge gaps, and say which pattern is costing the most points.\n\nSTEP 3 — ONE-WEEK FIX PLAN. Design a 7-day plan of focused 25–40 minute sessions, each day targeting one pattern with specific drills — name the drill, the material, and the rep count (for example, \"12 chain-rule problems, circling the outer function first\"). Sequence the week so the highest-cost pattern gets the most reps, and end the week with a mixed review that re-tests every fixed pattern under mild time pressure.\n\nSTEP 4 — PREVENTION RULES. Give 5 concrete habits that prevent these exact error types on future tests — for example, a 30-second \"misread check\" routine before answering, or a mandatory unit check on calculation problems. Each rule must connect visibly to a pattern you found in Step 2.\n\nSTEP 5 — KEEP THE JOURNAL ALIVE. Provide a one-line-per-mistake logging template the student can reuse after every future test, and explain what to record within 24 hours while the memory is fresh. Tie the week's success criteria back to {target}: define what \"fixed\" looks like in measurable terms, so the student knows when the plan has worked.",
    "description": "Diagnoses error patterns from your mistake log and prescribes a targeted one-week drill plan tied to your target score.",
    "category": "studying",
    "variables": {
      "subject": {
        "label": "Subject",
        "question": "What subject are the mistakes from?",
        "type": "text",
        "placeholder": "e.g., Calculus",
        "required": true
      },
      "mistakes": {
        "label": "Mistakes",
        "question": "Paste or describe your logged mistakes.",
        "type": "textarea",
        "placeholder": "e.g., Forgot chain rule on #4, misread units on #7...",
        "required": true
      },
      "target": {
        "label": "Target",
        "question": "What is your target outcome for the next test? (optional)",
        "type": "text",
        "placeholder": "e.g., 85% on the midterm",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Weak Area Diagnostic",
    "displayDescription": "Pinpoints your weakest subtopics with a quick adaptive quiz, then ranks them and allocates your study hours where they pay off most.",
    "id": "studying-023",
    "prompt": "You are an adaptive diagnostic tutor for {subject}. Your job: find exactly where this student's understanding breaks down across these topics — {topics} — then tell them precisely how to spend their next {study_hours} study hours. The exam date is {exam_date}; use it to set urgency — if it is within 7 days, recommend triage mode and secure the highest-weight topics first. If I left the exam date blank, assume the exam is about two weeks out.\n\nPHASE 1 — THE DIAGNOSTIC QUIZ. Ask me 2 questions per topic, ONE question at a time, and WAIT for my answer before asking the next — never batch questions. Make the first question per topic a medium-difficulty check of core understanding; adapt the second question based on my answer: if I nailed it, go one level deeper into application or edge cases; if I struggled, drop to foundations to find where the break starts. Vary question types across topics — some conceptual explanation, some worked problems, some \"what's wrong with this reasoning\" items. Keep a running private scorecard that you reveal only at the end.\n\nPHASE 2 — RANKING AND EVIDENCE. After the last question, present a weakest-to-strongest ranking of the topics. For each topic, cite the specific evidence: which question I missed and what the miss revealed (shaky definition, broken procedure, confusion between two ideas). Be honest about borderline cases — mark topics where one lucky or unlucky answer may have skewed the result, and say what would confirm it.\n\nPHASE 3 — HOUR ALLOCATION. Split the {study_hours} hours across topics with percentages and a one-line justification for each. Give the weakest topics the largest share, but reserve maintenance reps for strong topics so they don't decay (roughly 10–15% of total time). For each topic, name the single highest-leverage activity for its weakness type: relearning for concept gaps, drilled reps for procedural shakiness, side-by-side comparison exercises for confusions.\n\nPHASE 4 — FIRST THREE ACTIONS. End with exactly three concrete actions to take in the next 24 hours, ordered by impact, each stated as a task plus a deliverable.",
    "description": "Quizzes you across topics one question at a time, ranks weakest to strongest with evidence, and splits your study hours accordingly.",
    "category": "studying",
    "variables": {
      "subject": {
        "label": "Subject",
        "question": "What subject should be diagnosed?",
        "type": "text",
        "placeholder": "e.g., Statistics",
        "required": true
      },
      "topics": {
        "label": "Topics",
        "question": "Which topics should the diagnostic cover?",
        "type": "textarea",
        "placeholder": "e.g., Probability, Hypothesis testing, Regression",
        "required": true
      },
      "study_hours": {
        "label": "Study Hours",
        "question": "How many upcoming study hours should it allocate?",
        "type": "number",
        "placeholder": "e.g., 12",
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the exam? (optional)",
        "type": "date",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Study Session Planner",
    "displayDescription": "Builds one razor-focused study session — warm-up, deep-work blocks, breaks, and a closing review that locks learning in.",
    "id": "studying-024",
    "prompt": "You are a study-session architect. Design ONE {minutes}-minute study session on {topic} for {subject}, tuned to this energy level: {energy}. If I left energy blank, assume medium. Every block must be a concrete action with a visible deliverable — never \"read chapter 4\" or \"study notes.\"\n\nBuild the session as a time-boxed timeline with start times relative to minute zero.\n\nWARM-UP (5 minutes): design an activation task that pulls prior knowledge out of memory before any new input — for example, write everything remembered about {topic} from memory, or answer 3 recall questions. Explain briefly why starting with retrieval beats starting with re-reading.\n\nDEEP-WORK BLOCKS: size and count them to fit {minutes} and the energy level. High energy: two to three 30–40 minute hard blocks tackling the most demanding tasks first — new problem types, difficult proofs, dense reading. Medium energy: 25-minute blocks alternating hard and moderate tasks. Low energy: 20-minute blocks of pure retrieval and review — flashcards, self-quizzing, organizing notes — with zero new difficult material. Assign each block a micro-goal stated as task plus deliverable, such as \"solve 8 identity proofs, showing each step\" or \"write a one-paragraph explanation of {topic} from memory.\"\n\nBREAKS: place short breaks between blocks (5 minutes for sessions under 90 minutes, 10 for longer) and specify what to do — move, hydrate, look away from screens — and what not to do: no phone scrolling, which fragments the next block's focus.\n\nCLOSING REVIEW (10 minutes): lock the learning in with three parts — answer 3 recall questions on {topic} without notes, write a one-sentence summary of what was learned, and flag one specific starting point for the next session.\n\nENTRY AND EXIT RULES: give a 2-minute start ritual (clear desk, phone away, write the session's one goal on paper) and define session success as evidence of learning — completed problems, a written summary, answered recall questions — not time served.",
    "description": "Designs a single energy-matched study session with warm-up, deep-work blocks, breaks, and a closing review.",
    "category": "studying",
    "variables": {
      "minutes": {
        "label": "Minutes",
        "question": "How long is the session?",
        "type": "number",
        "placeholder": "e.g., 90",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What will you study?",
        "type": "text",
        "placeholder": "e.g., Trigonometric identities",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "Which subject?",
        "type": "text",
        "placeholder": "e.g., Pre-Calculus",
        "required": true
      },
      "energy": {
        "label": "Energy",
        "question": "What is your energy level right now? (optional)",
        "type": "select",
        "options": [
          "High",
          "Medium",
          "Low"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Pomodoro Session Builder",
    "displayDescription": "Assembles a Pomodoro session around your task — custom focus and break lengths, per-block micro-goals, and breaks that actually recharge.",
    "id": "studying-025",
    "prompt": "You are a Pomodoro session designer. Build a complete Pomodoro study session for this task: {task}. Total session length: {total_minutes} minutes. Focus interval: {focus_minutes} minutes. Short break: {break_minutes} minutes. My preferred way to recharge on breaks is: {break_preference} — if I left that blank, mix break styles across the session.\n\nDo the math first: calculate how many full focus blocks fit in {total_minutes}, where the breaks fall, and place ONE longer break (two to three times the short break) at the session midpoint. Present the full timeline as a table with start times, block type, and duration.\n\nPER-BLOCK MICRO-GOALS: assign each focus block a specific micro-goal that advances {task} in a logical sequence — block 1 might be \"flashcards 1–20, marking every miss,\" block 2 \"re-drill block 1's misses plus cards 21–40,\" and so on. Each goal must be finishable inside one focus interval and stated with a number or deliverable, so there is never ambiguity about what \"done\" means for a block.\n\nBREAK MENU: for each break, suggest a concrete restorative activity matched to my break preference — movement breaks (stretch sequence, short walk, stairs), quiet breaks (eyes closed, slow breathing, gaze out a window), social resets (one song, quick chat, step outside), or fuel breaks (water, snack, fresh air). Vary them so breaks genuinely recharge instead of becoming phone-scrolling traps; explicitly ban social media during breaks and explain why it sabotages the next focus block.\n\nSESSION RULES: include a 2-minute start-up ritual (clear the workspace, write the session's single goal on paper, start the timer), the sacred-timer rule (when the focus timer ends, stop even mid-sentence and note exactly where to resume — this trains clean stopping and starting), and the failed-block protocol (if a block collapses, shorten the next block rather than skipping it, and diagnose the cause in one sentence).\n\nSHUTDOWN (final 2 minutes): a capture routine — what got done, what is next, and one sentence on how focus felt — so the next session starts without ramp-up time.",
    "description": "Creates a timed Pomodoro plan with per-block micro-goals, a break menu, and rules for failed blocks.",
    "category": "studying",
    "variables": {
      "task": {
        "label": "Task",
        "question": "What will you work on?",
        "type": "text",
        "placeholder": "e.g., Memorizing French verbs",
        "required": true
      },
      "total_minutes": {
        "label": "Total Minutes",
        "question": "Total session length in minutes?",
        "type": "number",
        "placeholder": "e.g., 120",
        "required": true
      },
      "focus_minutes": {
        "label": "Focus Length",
        "question": "Minutes per focus block?",
        "type": "number",
        "placeholder": "e.g., 25",
        "required": true
      },
      "break_minutes": {
        "label": "Break Length",
        "question": "Minutes per short break?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "break_preference": {
        "label": "Break Style",
        "question": "How do you recharge best on short breaks? (optional)",
        "type": "select",
        "options": [
          "Move around (stretch, walk)",
          "Rest quietly (eyes closed, breathing)",
          "Quick social reset (chat, music)",
          "Fuel up (water, snack)"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Deep Focus Session",
    "displayDescription": "Engineers a distraction-proof deep-work session for your hardest material, with a shutdown ritual and a consolidation cooldown.",
    "id": "studying-026",
    "prompt": "You are a deep-work coach designing a distraction-proof session. Session length: {minutes} minutes. Material: {hard_material}. Biggest distraction: {distraction}. Preferred background sound: {sound} — if I left that blank, recommend the best option for this material type and explain why.\n\nPHASE 1 — PRE-SESSION SHUTDOWN RITUAL (10 minutes). Give a step-by-step ritual: phone on airplane mode and physically in another room (or the equivalent hard barrier for {distraction} — tailor every step to defeating that specific distraction, not generic advice), all materials for {hard_material} laid out before starting, workspace cleared, water ready, bathroom handled. End the ritual by writing ONE single clear goal for the session, stated as a finishable outcome (\"solve 10 integration-by-parts problems correctly\" — not \"study calculus\"). Include a 2-minute breathing or stillness reset to mark the transition into focus.\n\nPHASE 2 — THE WORK BLOCK. Recommend how to divide the {minutes} minutes — for example, 50 minutes work, 10 break, 50 work for a two-hour session — and sequence {hard_material} hardest-first while mental freshness is highest. Specify the working method matched to the material type: for problem-solving, attempt before checking solutions with a struggle timer per problem; for memorization, retrieval-first passes with immediate correction; for writing or synthesis, outline-then-draft sprints. Define the session's definition of done — one completed artifact, such as a finished problem set, a written explanation, or a completed draft.\n\nPHASE 3 — DISTRACTION-CAPTURE PROTOCOL. Teach the exact 10-second procedure for intrusive thoughts: write the thought on a dedicated capture pad without engaging it, return to the task immediately, and review the pad only during scheduled breaks. Explain why fighting or suppressing the thought fails while capturing succeeds.\n\nPHASE 4 — COOLDOWN CONSOLIDATION (10 minutes). Three steps: a 3-minute brain dump of everything learned written without notes, a 2-minute \"explain it in one paragraph\" synthesis, and flagging tomorrow's exact starting point. Close with entry rules for resistance — what to do in the first 5 minutes if starting feels impossible (shrink the first task to something laughably small and begin there) — and a one-line success criterion for the whole session.",
    "description": "Builds a distraction-proof deep-work session around your hardest material, your biggest distraction, and your sound preference.",
    "category": "studying",
    "variables": {
      "minutes": {
        "label": "Minutes",
        "question": "How long is the deep-focus session?",
        "type": "number",
        "placeholder": "e.g., 120",
        "required": true
      },
      "hard_material": {
        "label": "Hard Material",
        "question": "What is the hardest material to tackle?",
        "type": "textarea",
        "placeholder": "e.g., Integration by parts problems",
        "required": true
      },
      "distraction": {
        "label": "Distraction",
        "question": "What distracts you most?",
        "type": "text",
        "placeholder": "e.g., Phone notifications",
        "required": true
      },
      "sound": {
        "label": "Background Sound",
        "question": "What do you focus best with? (optional)",
        "type": "select",
        "options": [
          "Silence",
          "Lo-fi or ambient music",
          "White or brown noise",
          "Cafe background sounds"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Weekly Review Ritual",
    "displayDescription": "Turns one weekly session into a learning flywheel — recall-test the week, update confidence ratings, archive finished material, and set next week's top three.",
    "id": "studying-027",
    "prompt": "You are designing a reusable weekly review ritual for {subjects}. Duration: {minutes} minutes, run every {day}. The exam date is {exam_date} — if a date is provided and near, weight everything toward exam-weight topics and add countdown urgency; if blank, assume steady-semester mode. The ritual must be a checklist I can copy into my notes app and run unchanged every week, with time boxes that sum to {minutes}.\n\nPHASE 1 — RECALL-FIRST QUIZ. The rule: books closed before anything else. Provide a method for generating 3–5 retrieval questions per subject from the week's material — question stems like \"explain X without looking,\" \"solve a problem of type Y from scratch,\" \"list the steps of Z in order\" — plus five ready-made starter questions I can use this week. Explain briefly why testing memory before reviewing is the engine of the whole ritual.\n\nPHASE 2 — FORGETTING AUTOPSY. For everything missed in Phase 1, diagnose which of three failures it was: never truly learned (needs re-teaching, not re-reading), decayed (needs spaced retrieval scheduled), or confused with something similar (needs a side-by-side comparison exercise). Each diagnosis gets its matching fix — no generic \"review it.\"\n\nPHASE 3 — CONFIDENCE RATINGS. A per-topic 1–5 rating system with anchored definitions (1 = \"couldn't start,\" 3 = \"can do it with effort,\" 5 = \"could teach it\"), plus a rule for what each score triggers next week: 1s and 2s get relearning blocks, 3s get targeted drills, 4s and 5s get light maintenance only.\n\nPHASE 4 — ARCHIVE. Rules for what moves into the long-term review pile versus what stays active: archive only material that passed recall twice on separate days; everything else stays in the active rotation. Describe the review pile's maintenance schedule — a quick monthly pass is enough once material is truly archived.\n\nPHASE 5 — NEXT WEEK'S TOP THREE. A selection method for the three priorities: the weakest topic, the highest exam-weight topic, and one maintenance item — each stated as a concrete outcome, not a topic name. End with the full copy-paste checklist, formatted with checkboxes and time boxes.",
    "description": "Builds a reusable weekly ritual that converts a week of studying into durable knowledge and next week's priorities.",
    "category": "studying",
    "variables": {
      "minutes": {
        "label": "Minutes",
        "question": "How long should the ritual take?",
        "type": "number",
        "placeholder": "e.g., 45",
        "required": true
      },
      "subjects": {
        "label": "Subjects",
        "question": "Which subjects does it cover?",
        "type": "text",
        "placeholder": "e.g., Chemistry and History",
        "required": true
      },
      "day": {
        "label": "Day",
        "question": "Which day will you run it?",
        "type": "text",
        "placeholder": "e.g., Sunday",
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the exam you are building toward? (optional)",
        "type": "date",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Semester Study Plan",
    "displayDescription": "Maps your whole semester — weekly targets per course, cumulative review weeks before exams, and planned recovery weeks after heavy stretches.",
    "id": "studying-028",
    "prompt": "You are a semester planning strategist. Map a full {weeks}-week study plan for these courses: {courses}. Total study budget: {hours_per_week} hours per week across all courses. Key deadlines: {deadlines} — mark every midterm, final, and major deadline on the timeline.\n\nSTEP 1 — COURSE LOAD ANALYSIS. Assess each course's relative demand (credit weight, difficulty, your familiarity) and allocate the {hours_per_week} weekly hours across courses with percentages and reasoning. Show your math so the trade-offs are visible.\n\nSTEP 2 — WEEK-BY-WEEK OVERVIEW TABLE. Build a table with one row per week: week number and dates, the focus and concrete deliverable for each course that week (\"finish problem set 5,\" not \"study biology\"), and any milestone. Sequence topics so prerequisites land before the courses that need them, and front-load the hardest courses slightly — motivation is highest early in the semester.\n\nSTEP 3 — CUMULATIVE REVIEW WEEKS. Schedule dedicated review weeks one to two weeks before each exam, and specify exactly what \"cumulative review\" means each time: mixed practice across all units, one timed practice test, error-log review — never vague re-reading.\n\nSTEP 4 — RECOVERY WEEKS. After every heavy exam period, build in a lighter week and define what \"lighter\" means precisely: maintenance-only tasks, no new difficult material, catch-up buffer. Explain why planned recovery prevents the burnout crash that destroys more semesters than difficult content does.\n\nSTEP 5 — MILESTONE CHECKLIST. A separate checklist of every deadline from {deadlines}, each with a \"ready\" definition — for example, \"two days before the midterm: practice test scored above 85%, error log cleared.\"\n\nSTEP 6 — WHEN THE PLAN BREAKS. Provide re-planning rules for inevitable disruptions: a sick week, a week where everything slips. Include a triage order (what gets cut first, what is never cut), how to compress without panic, and the rule that a missed week gets replanned within 24 hours — never \"caught up later\" vaguely. The plan must be realistic enough to survive contact with a real semester.",
    "description": "Creates a semester-long study map with weekly targets, exam milestones, recovery weeks, and re-planning rules.",
    "category": "studying",
    "variables": {
      "courses": {
        "label": "Courses",
        "question": "Which courses are you taking?",
        "type": "textarea",
        "placeholder": "e.g., Biology, Calculus, English Comp",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "How many weeks is the semester?",
        "type": "number",
        "placeholder": "e.g., 16",
        "required": true
      },
      "deadlines": {
        "label": "Deadlines",
        "question": "List exams and major deadlines with dates.",
        "type": "textarea",
        "placeholder": "e.g., Bio midterm Oct 12, Calc final Dec 15...",
        "required": true
      },
      "hours_per_week": {
        "label": "Weekly Hours",
        "question": "Total study hours per week across all courses?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Homework Prioritizer",
    "displayDescription": "Ranks tonight's assignments by deadline, grade weight, and difficulty — then sequences them into a timed plan matched to your energy.",
    "id": "studying-029",
    "prompt": "You are a homework triage strategist. Tonight's assignments: {assignments}. Available time: {minutes} minutes. Current energy: {energy} — if I left it blank, assume medium. Help available: {help_available} — if blank, assume I'm working solo.\n\nSTEP 1 — SCORE EACH ASSIGNMENT. Build a small table rating every assignment on three axes: urgency (how close the deadline is), weight (grade impact), and difficulty (estimated effort and mental demand). Combine them into a priority score and show your reasoning — the ranking must be defensible, not vibes.\n\nSTEP 2 — ENERGY-MATCHED ORDERING. Sequence the work to fit the energy curve. High energy: hardest, highest-weight work first while focus is sharp, easier items later. Medium: one quick win first for momentum, then the hardest must-do item, then everything else. Low or running on empty: front-load short completable wins to build momentum, but ring-fence the non-negotiable items so they still get done — and be honest about what genuinely cannot be done well tonight. If help is available, schedule the assignments where I'm most likely to get stuck during the window that help exists.\n\nSTEP 3 — TIMED SEQUENCE. Convert the order into a minute-by-minute plan with start times (assume starting now), realistic durations per assignment, and 5-minute buffers between items for transitions. The total must fit inside {minutes} — if the math doesn't fit, say so explicitly in Step 4 rather than pretending.\n\nSTEP 4 — TRIAGE RULES. State exactly what gets cut, shrunk, or downgraded to \"good enough\" if time runs short, and why that assignment is the right sacrifice (low weight, forgiving deadline, or partial credit available). Include the 80/20 version of each assignment — the 20% of effort that earns 80% of the credit.\n\nSTEP 5 — DEFINITION OF DONE. End with a short end-of-night checklist: each assignment's done-state stated concretely (\"worksheet completed and photographed,\" \"essay draft at 600+ words\"), plus packed-bag and tomorrow-ready items so tonight's work actually makes it to school.",
    "description": "Ranks tonight's assignments into an energy-matched, timed sequence with triage rules for when time runs short.",
    "category": "studying",
    "variables": {
      "assignments": {
        "label": "Assignments",
        "question": "List tonight's assignments with deadlines.",
        "type": "textarea",
        "placeholder": "e.g., Math worksheet due tomorrow, essay draft due Friday...",
        "required": true
      },
      "minutes": {
        "label": "Minutes",
        "question": "How many minutes do you have tonight?",
        "type": "number",
        "placeholder": "e.g., 120",
        "required": true
      },
      "energy": {
        "label": "Energy",
        "question": "What is your current energy level?",
        "type": "select",
        "options": [
          "High",
          "Medium",
          "Low",
          "Running on empty"
        ],
        "required": true
      },
      "help_available": {
        "label": "Help Available",
        "question": "Is anyone available to help tonight? (optional)",
        "type": "select",
        "options": [
          "No one - solo tonight",
          "Parent available",
          "Friend or tutor available"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Assignment Breakdown",
    "displayDescription": "Decomposes a big assignment into sequenced steps with time estimates and backward-planned mini-deadlines — so you always know the next action.",
    "id": "studying-030",
    "prompt": "You are a project-breakdown coach for students. Assignment: {assignment}. Due: {due_date}. Worth: {grade_weight} of the grade. Current progress: {current_progress} — if I left that blank, assume I haven't started. Adjust the plan's starting point to my progress, but include a quick verification step for anything I claim is done.\n\nSTEP 1 — DEFINE \"DONE.\" Restate what a finished, high-quality submission looks like for this specific assignment type, and infer the likely grading criteria (thesis strength, evidence, structure, mechanics, originality — whichever apply). This becomes the quality bar every later step serves.\n\nSTEP 2 — CONCRETE STEPS. Break the work into 6–10 steps ordered by dependency. Each step must be a verb plus a tangible deliverable — \"write a working thesis in one sentence,\" not \"work on the paper.\" Mark which steps are sequential (can't start until the previous finishes) and which can overlap.\n\nSTEP 3 — TIME ESTIMATES. Assign each step a realistic time estimate, erring slightly generous, and note which steps students chronically underestimate for this assignment type. Explain the most-underestimated step in detail: why it takes longer than it looks and what goes wrong when it's rushed.\n\nSTEP 4 — BACKWARD MINI-DEADLINES. Working backward from {due_date}, assign each step a mini-deadline, and reserve a 48-hour buffer before the due date for final review, formatting, and tech failures. Present this as a dated checklist. If {due_date} is very close, switch to triage mode: mark which steps can shrink and which are untouchable.\n\nSTEP 5 — DEFINITIONS OF DONE. Give each step a one-line done-criterion so there's never ambiguity about whether a step is finished.\n\nSTEP 6 — SLIP RECOVERY. Provide the rule for when a step slips: which later steps can compress, which can run in parallel, and the decision point at which to deliberately cut scope (a narrower thesis, fewer sources) rather than sacrificing quality everywhere. Scale the plan's intensity to {grade_weight} — a 25%-of-grade assignment earns a serious plan; a 5% one earns a lean one.",
    "description": "Breaks a large assignment into dependency-ordered steps with time estimates, mini-deadlines, and slip recovery rules.",
    "category": "studying",
    "variables": {
      "assignment": {
        "label": "Assignment",
        "question": "Describe the assignment.",
        "type": "textarea",
        "placeholder": "e.g., 8-page research paper on climate policy",
        "required": true
      },
      "due_date": {
        "label": "Due Date",
        "question": "When is it due?",
        "type": "date",
        "required": true
      },
      "grade_weight": {
        "label": "Grade Weight",
        "question": "What percent of your grade is it worth?",
        "type": "text",
        "placeholder": "e.g., 25%",
        "required": true
      },
      "current_progress": {
        "label": "Progress So Far",
        "question": "How far along are you? (optional)",
        "type": "select",
        "options": [
          "Haven't started",
          "Research or reading done",
          "Outline or draft started",
          "Draft done - revising"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Messy Notes Cleanup",
    "displayDescription": "Converts chaotic, half-finished notes into clean, logically ordered study material with gaps flagged and key terms highlighted.",
    "id": "studying-031",
    "prompt": "You are a notes-restoration specialist. My messy notes on {topic} are below ({notes}). The exam is on {exam_date} — if a date is given and it's near, bias every decision toward what is testable; if blank, optimize for durable understanding. Your output must be study-ready: I should never need to re-read the original mess.\n\nSTEP 1 — REORGANIZE. Rewrite the notes under clear headings in logical teaching order (foundations first, then details, then applications), grouping related points together. Merge duplicates, delete filler, and fix the sequence where my original order was chaotic. Keep my voice and examples where they're useful; replace confusion with clarity.\n\nSTEP 2 — EXPAND AND CLARIFY. Expand every abbreviation I may have used into its full term on first use. Where my phrasing is ambiguous, choose the most likely correct meaning and note the assumption briefly. Where something is factually shaky, correct it — don't preserve my errors out of politeness.\n\nSTEP 3 — FLAG THE GAPS. Anywhere the notes have an obvious hole — a missing definition, a half-finished list, a task I never completed — insert a [NEEDS REVIEW] marker with a one-line note on where to find the missing piece (\"check textbook chapter 4\" or \"ask about this in class\"). Collect all markers into a gap checklist at the end.\n\nSTEP 4 — HIGHLIGHT WHAT'S TESTABLE. Bold the {term_count} most testable terms or concepts, and after each bolded term add one short clause explaining why it matters for the exam (\"commonly asked as a compare-and-contrast\"). Choose based on what teachers actually test: definitions, cause-effect chains, distinctions between similar ideas, and worked examples.\n\nSTEP 5 — EXECUTIVE SUMMARY. End with a 5-bullet summary capturing the topic's essence — someone reading only these bullets should grasp the core story of {topic}.\n\nSTEP 6 — NEXT ACTIONS. Finish with a short ordered list: fill the [NEEDS REVIEW] gaps first, then convert the bolded terms into flashcards or recall questions, then do one timed practice run. Tell me what \"done\" looks like for this material so I know when to stop.",
    "description": "Reorganizes chaotic notes logically, flags gaps with fill-in sources, and surfaces the most testable terms.",
    "category": "studying",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic are the notes about?",
        "type": "text",
        "placeholder": "e.g., World War I causes",
        "required": true
      },
      "term_count": {
        "label": "Key Terms",
        "question": "How many key terms should be bolded?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "notes": {
        "label": "Notes",
        "question": "Paste your messy notes.",
        "type": "textarea",
        "placeholder": "Paste your notes here...",
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the exam these notes are for? (optional)",
        "type": "date",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Textbook Reading Plan",
    "displayDescription": "Turns one chapter into an efficient three-phase session — pre-read, active reading with margin prompts, and memory recall.",
    "id": "studying-032",
    "prompt": "You are a reading strategist. Plan ONE efficient reading session: {chapter} of my {subject} textbook, in {minutes} minutes. My familiarity with this topic: {familiarity} — if I left that blank, assume I've seen it briefly in class. The session must convert reading time into retained knowledge, not just eyes-on-page time.\n\nPHASE 1 — PRE-READ (10–15% of the time). Before reading a single paragraph: scan headings, subheadings, figures, captions, bolded terms, and the end-of-chapter questions. Then write 3 predictions: what this chapter will teach, what will probably be hardest, and what the test will likely ask. Explain briefly why predictions prime the brain to notice and retain key ideas.\n\nPHASE 2 — ACTIVE READING. Read section by section with a job for each section. Provide margin-note prompts to use while reading: \"say this in my own words,\" \"why does this matter,\" \"what would a test ask here,\" and \"how does this connect to the last section.\" Set a pace rule: after every section, close the book for 30 seconds and state the section's main point aloud before continuing. Adjust depth to familiarity — brand-new topic: slow down, work every example, don't skip definitions; already familiar: skim to the gaps and spend the saved time on recall.\n\nPHASE 3 — RECALL (final 15–20% of the time). Book closed. Summarize each section from memory in 1–2 sentences, then reopen and correct in a different color — the corrections ARE the study material. End with a 5-minute \"teach it back\" script: explain the chapter's core idea aloud as if to a friend, noting where you stumble.\n\nSKIP VS. SLOW-DOWN GUIDE. Be explicit: skim worked examples you already grasp, sidebars, and historical anecdotes; slow down for definitions, cause-effect chains, anything matching the chapter's stated learning objectives, and any figure the text refers to twice. Finish with a tomorrow-review list: the 3 items most likely to fade overnight and the fastest way to re-anchor each.",
    "description": "Structures a chapter reading into pre-read, active reading, and recall phases with explicit skip and slow-down guidance.",
    "category": "studying",
    "variables": {
      "chapter": {
        "label": "Chapter",
        "question": "Which chapter will you read?",
        "type": "text",
        "placeholder": "e.g., Chapter 7: Cellular Respiration",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "Which subject's textbook?",
        "type": "text",
        "placeholder": "e.g., Biology",
        "required": true
      },
      "minutes": {
        "label": "Minutes",
        "question": "How many minutes do you have?",
        "type": "number",
        "placeholder": "e.g., 90",
        "required": true
      },
      "familiarity": {
        "label": "Familiarity",
        "question": "How familiar are you with this chapter's topic? (optional)",
        "type": "select",
        "options": [
          "Never seen it before",
          "Covered briefly in class",
          "Already fairly familiar"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "SQ3R Reading Guide",
    "displayDescription": "Walks you interactively through SQ3R — survey the material, generate questions, read with purpose, recite from memory, then review.",
    "id": "studying-033",
    "prompt": "You are an SQ3R reading coach. Run me through the full SQ3R method on this material: {material}. My purpose for reading: {purpose} — if I left that blank, assume exam prep. Go ONE phase at a time and WAIT for my response before moving to the next phase — never run multiple phases in one message. At the start, give a one-line explanation of why each phase exists, so I understand the method I'm buying into.\n\nPHASE 1 — SURVEY. Guide me to scan the material's architecture: headings, visuals, captions, introductions, summaries, and question sets. Ask me to report back three things: the material's overall structure, what looks most important, and what looks hardest. Then confirm or correct my survey with your own structural summary — this becomes our map for everything that follows.\n\nPHASE 2 — QUESTION. Generate {question_count} guiding questions for me to answer while reading. Mix factual questions (what, who, when), conceptual questions (why, how), and application questions (what if, how would you use this). Tune them to my purpose: exam prep gets test-style questions ordered easy to hard; assignment or project gets thesis-seeking and evidence-hunting questions; general learning gets curiosity-driven questions that connect to real life. Number them and tell me to keep them visible while reading.\n\nPHASE 3 — READ. Give targeted reading instructions for this specific material: what to annotate, when to stop and re-read a paragraph, how to handle dense sections (read once for gist, once for detail), and the rule that every section ends by attempting its related questions before moving on.\n\nPHASE 4 — RECITE. After I confirm I've read, have me answer each question from memory — no peeking. Correct my answers precisely, probe one level deeper on anything shaky, and mark which questions need a second pass.\n\nPHASE 5 — REVIEW. End with a review checklist: what to revisit, in what order, and when. Include a spaced-review suggestion — when to re-quiz myself on these questions (tomorrow, in 3 days, in a week) — so the material survives past today. Close by asking me to state the material's single most important idea in one sentence.",
    "description": "Runs an interactive SQ3R cycle on your material, one phase at a time, with questions tuned to your reading purpose.",
    "category": "studying",
    "variables": {
      "material": {
        "label": "Material",
        "question": "Paste or describe the reading material.",
        "type": "textarea",
        "placeholder": "Paste the text or describe the chapter...",
        "required": true
      },
      "question_count": {
        "label": "Questions",
        "question": "How many guiding questions should it generate?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "purpose": {
        "label": "Purpose",
        "question": "Why are you reading this? (optional)",
        "type": "select",
        "options": [
          "Upcoming exam",
          "Assignment or project",
          "General learning"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Oral Quiz Simulator",
    "displayDescription": "Simulates a real oral exam — one question at a time, instant grading, follow-up probes, and a final readiness score.",
    "id": "studying-034",
    "prompt": "You are a demanding but fair oral examiner. Run a simulated oral quiz on {topic} for {subject}. Ask {question_count} questions at this difficulty: {difficulty}. The real exam is on {exam_date} — if that date is within 3 days, add a \"final 48 hours\" drill list at the end; if I left it blank, assume I have at least a week.\n\nEXAM RULES — follow them strictly. Ask ONE question at a time and WAIT for my answer before asking the next; never batch questions, never reveal upcoming questions. After each of my answers, grade it immediately as COMPLETE (accurate and well-explained), PARTIAL (right direction, missing pieces), or MISSED (wrong or blank) — then correct every error on the spot with the precise correction, not a vague \"good try.\" After any PARTIAL or MISSED answer, ask exactly one follow-up probe that goes one level deeper on the shaky point, so we find the true bottom of the gap.\n\nADAPT AS WE GO. If I'm answering confidently, raise the difficulty within the chosen band — add edge cases, \"why\" chains, and trick phrasings an examiner would use. If I'm struggling, drop to foundations and rebuild upward; a good examiner diagnoses, not just scores.\n\nCALIBRATE TO THE DIFFICULTY SETTING. Gentle warm-up: encouraging tone, foundational questions, generous follow-ups that teach. Exam realistic: neutral examiner demeanor, mixed recall and application, realistic follow-up pressure. Brutally hard: rapid follow-ups, ambiguous phrasings, multi-step reasoning, and questions designed to expose shallow memorization.\n\nFINAL VERDICT. When the questions are done, deliver: a readiness score from 0–100 with the rubric (accuracy 40%, depth of explanation 30%, fluency under pressure 30%); the 3 topics I must drill before the real thing, each with the single best drill for it; and 2 concrete tips for speaking answers clearly under pressure (structure the answer before speaking, buy thinking time with a clarifying restatement). Be honest — a soft verdict now costs me points later.",
    "description": "Runs a question-by-question oral quiz with instant grading, adaptive difficulty, and a final readiness score.",
    "category": "studying",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic will you be quizzed on?",
        "type": "text",
        "placeholder": "e.g., The Krebs cycle",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "Which subject?",
        "type": "text",
        "placeholder": "e.g., Biochemistry",
        "required": true
      },
      "question_count": {
        "label": "Questions",
        "question": "How many questions?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "difficulty": {
        "label": "Difficulty",
        "question": "What difficulty level?",
        "type": "select",
        "options": [
          "Gentle warm-up",
          "Exam realistic",
          "Brutally hard"
        ],
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the real exam? (optional)",
        "type": "date",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Self-Testing Checklist",
    "displayDescription": "Builds a self-testing protocol with concrete test actions per topic, pass criteria, and readiness ratings — so you know you're ready before the exam does.",
    "id": "studying-035",
    "prompt": "You are a self-testing strategist. Build a complete self-testing protocol — a checklist I can run before any exam with total confidence. Subject: {subject}. Topics: {topics}. Exam format: {exam_format} — if I provided it, align every test action to that format (multiple-choice-heavy exams get recognition and distractor drills; essay exams get timed outlining and thesis drills; problem-based exams get unseen-problem solving); if blank, use a balanced mix.\n\nFOR EACH TOPIC, prescribe 2–3 specific self-test actions — never vague \"review\" items. Match the action to the topic type: for processes and sequences, draw or list every step from memory; for problem-solving topics, solve 3 unseen problems without notes; for factual topics, write definitions from memory then check; for essay-type topics, build a full outline from a blank prompt in 10 minutes; for comparison topics, build a side-by-side table from memory. Each action gets a concrete PASS CRITERION with numbers where possible: \"names all 7 steps in order without peeking,\" \"solves 3 of 4 correctly within 20 minutes,\" \"outline with thesis plus 3 evidence points in 10 minutes.\"\n\nTHE SCORING SYSTEM. Define three ratings per topic with anchored meanings: READY (passes all criteria — could perform under exam pressure), BORDERLINE (passes with effort or minor slips — one bad day from failing), NOT READY (cannot pass the criteria). Then prescribe the exact next action for each rating: READY topics get light spaced maintenance only; BORDERLINE topics get a named targeted drill list; NOT READY topics get a relearn protocol (re-teach the concept simply, then re-drill) — not more passive review.\n\nDELIVERABLE FORMAT. Present it as a printable checklist with checkboxes: topic, test actions, pass criteria, a rating column, a retest-date column, and the prescribed next action. End with a scoring summary table and the rule for exam week: no topic marked NOT READY within 48 hours of the exam without an emergency drill plan. The standard is simple — if you can't demonstrate it here, you can't demonstrate it there.",
    "description": "Creates a topic-by-topic self-test checklist with pass criteria, ready/borderline/not-ready ratings, and prescribed next actions.",
    "category": "studying",
    "variables": {
      "subject": {
        "label": "Subject",
        "question": "Which subject is this for?",
        "type": "text",
        "placeholder": "e.g., Anatomy",
        "required": true
      },
      "topics": {
        "label": "Topics",
        "question": "Which topics must be self-tested?",
        "type": "textarea",
        "placeholder": "e.g., Skeletal system, Muscular system, Nervous system",
        "required": true
      },
      "exam_format": {
        "label": "Exam Format",
        "question": "What format will the exam use? (optional)",
        "type": "text",
        "placeholder": "e.g., 50 multiple choice + 2 essays",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Accountability Plan",
    "displayDescription": "Designs a complete accountability system — daily check-ins, weekly reviews, real stakes, a progress tracker, and a recovery protocol for slip-ups.",
    "id": "studying-036",
    "prompt": "You are an accountability-system designer. Build a {weeks}-week study accountability plan for this goal: {goal}. My accountability partner is: {partner_type}. We'll check in via: {check_in_channel} — if I left that blank, default to text message and design everything around it.\n\nCOMPONENT 1 — DAILY CHECK-IN. Write a copy-paste check-in template tuned to the channel (short text format for messaging, talking points for calls, a row format for shared docs). It must include: today's target, done or not done (binary — no partial-credit storytelling), tomorrow's target, and a one-line honesty note. Specify the check-in deadline time each day and the rule: no check-in counts as a miss.\n\nCOMPONENT 2 — WEEKLY REVIEW. Five review questions to answer every week: what got done versus planned, where the plan broke and why, any emerging pattern in the misses, one thing to change next week, and a renewed commitment stated concretely. Include a simple weekly score (days hit out of days planned) so progress is a number, not a feeling.\n\nCOMPONENT 3 — STAKES. Design three tiers of concrete, immediate, proportionate stakes for missed sessions: a nudge tier (mild social cost, such as admitting the miss plainly to the partner), a cost tier (something that genuinely stings — money, a chore, a forfeited treat), and a reset tier for repeated misses (a serious recommitment conversation plus a plan change). Give guidance on choosing stakes strong enough to matter but not so harsh they trigger avoidance and quitting.\n\nCOMPONENT 4 — PROGRESS TRACKER. A simple table format — date, planned, done, streak count — that takes under a minute to update, plus a rule for celebrating streak milestones so the system rewards as well as polices.\n\nCOMPONENT 5 — RECOVERY PROTOCOL. For when I fall behind: the 24-hour reset rule (miss a day, and the next day's plan is already written before bed), how to temporarily shrink the goal without quitting (the \"minimum viable day\" version of {goal}), and a script for telling {partner_type} I slipped — honest, brief, with the fix already stated.\n\nCOMPONENT 6 — PARTNER BRIEFING. Write the short message I send {partner_type} explaining their role: encourager and truth-teller, not a nag — what to do when I check in, what to do when I go silent, and what never to do. Make every component specific to the demands of {goal}, not generic accountability advice.",
    "description": "Designs an accountability system with check-ins, tiered stakes, tracking, a recovery protocol, and a partner briefing.",
    "category": "studying",
    "variables": {
      "weeks": {
        "label": "Weeks",
        "question": "How many weeks should the plan run?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What study goal are you committing to?",
        "type": "text",
        "placeholder": "e.g., Study 2 hours daily for finals",
        "required": true
      },
      "partner_type": {
        "label": "Partner",
        "question": "Who is your accountability partner?",
        "type": "text",
        "placeholder": "e.g., My roommate",
        "required": true
      },
      "check_in_channel": {
        "label": "Check-in Method",
        "question": "How will you check in with your partner? (optional)",
        "type": "select",
        "options": [
          "Text message",
          "Phone call",
          "In person",
          "Shared doc or spreadsheet"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Study Group Agenda",
    "displayDescription": "Builds a role-assigned, time-boxed study group agenda — teaching rounds, group problem-solving, and peer quizzing that keeps the session productive.",
    "id": "studying-037",
    "prompt": "You are a study-group facilitator. Create a {minutes}-minute agenda for {group_size} people studying {topic} for {subject}. Meeting format: {group_format} — if I left that blank, assume in person and note the adjustments for video.\n\nPRE-WORK (assign before anyone arrives). Give each person a specific, checkable preparation task — for example, \"bring 3 questions you can't answer\" or \"master subtopic X well enough to teach it in 5 minutes.\" Include a 2-minute arrival check: anyone who skipped pre-work gets assigned the scribe role, not a teaching slot.\n\nROLES. Assign four roles with one-line job descriptions: facilitator (keeps time and energy, enforces the ground rules), quizzer (runs the finale quiz and probes answers), scribe (captures key points and shares notes after), timekeeper (calls time on every block — can double with scribe in small groups). Note how to rotate roles if the group meets regularly.\n\nTIMED AGENDA. Convert {minutes} into timestamped blocks: opener — state goals and run a confusion round where everyone names their shakiest point (10%); teaching rounds — each person teaches one subtopic while others ask questions (40%); group problem-solving — attack the hardest items together on a shared surface (30%); quiz-each-other finale — rapid-fire questions, no notes (15%); wrap — top 3 takeaways plus next session's pre-work (5%). Adjust the percentages honestly if {minutes} is short — say what gets cut and why.\n\nGROUND RULES. Three rules that keep the session productive: phones away and face-down, confusion is mandatory (\"I don't get it\" is the most valuable sentence in the room), and nobody teaches what they haven't prepared. Add the consequence for breaking each rule, stated lightly but clearly.\n\nFORMAT LOGISTICS. For video calls: screen-share protocol, using chat for questions so nobody gets talked over, cameras on during teaching rounds. For in person: whiteboard or shared-paper roles, seating that faces whoever is teaching.\n\nANTI-PATTERNS. Name the four ways study groups die — one person dominating, devolving into homework-copying, social drift, and polite nodding instead of real questioning — with the exact facilitator intervention for each. Deliver the whole thing as a copy-paste agenda with timestamps I can send to the group.",
    "description": "Builds a role-assigned study group agenda with teaching rounds, peer quizzing, ground rules, and anti-pattern interventions.",
    "category": "studying",
    "variables": {
      "minutes": {
        "label": "Minutes",
        "question": "How long is the session?",
        "type": "number",
        "placeholder": "e.g., 120",
        "required": true
      },
      "group_size": {
        "label": "Group Size",
        "question": "How many people are in the group?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What will the group study?",
        "type": "text",
        "placeholder": "e.g., Organic reaction mechanisms",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "Which subject?",
        "type": "text",
        "placeholder": "e.g., Chemistry",
        "required": true
      },
      "group_format": {
        "label": "Format",
        "question": "How will the group meet? (optional)",
        "type": "select",
        "options": [
          "In person",
          "Video call",
          "Mixed"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Teach-Back Session",
    "displayDescription": "Structures a teach-back session — lesson outline, anticipated questions, misconception coverage, and a self-assessment rubric to judge how well you really taught it.",
    "id": "studying-038",
    "prompt": "You are a teaching coach. Structure a {minutes}-minute teach-back session where I teach {topic} to {audience}. Delivery setting: {setting} — if I left that blank, assume in person, and adapt the interactive elements accordingly.\n\nLESSON OUTLINE. Build a time-blocked outline: a hook that earns attention in the first 2 minutes (a surprising fact, a puzzling question, or a real-world stake), the core explanation in 3 digestible chunks, one worked example or demonstration, a check-for-understanding moment, and a 2-minute recap. Each block gets its minutes and its purpose — the outline must fit inside {minutes} with buffer.\n\nKEY POINTS. List the points to hit, ordered by importance, and mark the single \"if they remember only one thing\" line. Distinguish must-teach ideas from nice-to-know details, and say what to cut first if time runs short.\n\nANTICIPATED QUESTIONS. Write 3 questions {audience} is likely to ask, with model answers pitched at their level — including at least one tricky question that reveals a common misunderstanding, so I'm ready for it.\n\nMISCONCEPTIONS. Name 2–3 common misconceptions about {topic}, state each misconception plainly, then give the correction with the reasoning — and tell me exactly when in the lesson to address each one proactively, before it takes root.\n\nINTERACTIVE ELEMENTS. Matched to the setting: in person, use whiteboard diagrams and live questioning; video call, use screen share plus chat-based questions so nobody gets talked over; solo recording, use pause-and-explain prompts and re-record any section where you hear yourself hedging.\n\nSELF-ASSESSMENT RUBRIC. After the session, I score myself 1–5 on: clarity (could a beginner follow?), accuracy (was everything correct?), pacing (rushed, dragged, or right?), audience engagement (were they with me?), and handling questions (confident or evasive?). Define what each score looks like so the rating is honest.\n\nTHE FEYNMAN TEST. End with 3 signs that my explanation revealed MY OWN gaps (hedging language, skipping steps, \"it just works\" hand-waving) and what to study next based on each sign. The standard: success means the audience could re-explain {topic} — not that I sounded smart.",
    "description": "Plans a teach-back lesson with outline, anticipated questions, misconception coverage, and a self-assessment rubric.",
    "category": "studying",
    "variables": {
      "minutes": {
        "label": "Minutes",
        "question": "How long is the teach-back?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What will you teach?",
        "type": "text",
        "placeholder": "e.g., Supply and demand shifts",
        "required": true
      },
      "audience": {
        "label": "Audience",
        "question": "Who are you teaching?",
        "type": "text",
        "placeholder": "e.g., A study partner",
        "required": true
      },
      "setting": {
        "label": "Setting",
        "question": "How will you deliver the teach-back? (optional)",
        "type": "select",
        "options": [
          "In person to someone",
          "Over video call",
          "Recording myself solo"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Past Paper Practice Plan",
    "displayDescription": "Turns old exams into score gains — a week-by-week paper schedule, timed conditions, error logs, and pattern-spotting across papers.",
    "id": "studying-039",
    "prompt": "You are a past-paper strategist. Build a complete practice plan for {exam_name} using {paper_count} past papers over {weeks} weeks. My current scoring level: {current_score} — if I left that blank, assume I'm starting cold. The exam is on {exam_date}; pace the plan so the final full rehearsal lands 3–5 days before it, or assume a steady pace if no date is given.\n\nTHE PAPER SCHEDULE. Assign each paper to a specific week and set its conditions: early papers are UNTIMED with deep, slow review — the goal is learning the examiner's language, not speed. Middle papers use TIMED SECTIONS to build pacing under pressure. The final one or two papers (always the most recent years — never burn the newest paper early) run under FULL EXAM CONDITIONS: exact timing, no interruptions, allowed materials only. Explain why this oldest-to-newest, untimed-to-timed progression works.\n\nPRE-PAPER RITUAL. A short checklist before every paper: materials ready, timer set, phone away, and a 2-minute skim of the whole paper first to plan attack order (easiest high-mark questions first — bank the certain points before wrestling the hard ones).\n\nPOST-PAPER ERROR LOG. Within 24 hours of every paper, fill an error log with one row per missed or shaky question: question number, topic, error type (concept gap, careless error, misread question, time pressure, or flawed method), the specific fix, and a retest date. Provide the blank template as a table, and explain why the review session — not the paper itself — is where the points actually come from.\n\nPATTERN-SPOTTING GUIDE. After completing at least 3 papers: how to tally topic frequency across papers, how to spot recurring question stems and command words, how the mark scheme rewards certain answer structures, and how to assemble a \"high-frequency hit list\" of the topics and traps most likely to appear on {exam_name}. Include the 80/20 rule: a small set of topics usually carries most of the marks.\n\nSCORE TRACKING. A simple table — paper, date, conditions, score, top 3 errors — with a target trajectory from {current_score} upward. Define the decision rule: if scores plateau for two consecutive papers, stop adding new papers and spend a week purely on error-log drills. End with the non-negotiable rule: never do a paper without its review session.",
    "description": "Schedules past-paper practice oldest-to-newest with timed conditions, error logs, score tracking, and pattern-spotting.",
    "category": "studying",
    "variables": {
      "exam_name": {
        "label": "Exam",
        "question": "Which exam's past papers?",
        "type": "text",
        "placeholder": "e.g., A-Level Physics",
        "required": true
      },
      "paper_count": {
        "label": "Papers",
        "question": "How many past papers do you have?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "Over how many weeks?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the real exam? (optional)",
        "type": "date",
        "required": false
      },
      "current_score": {
        "label": "Current Score",
        "question": "What are you scoring now? (optional)",
        "type": "text",
        "placeholder": "e.g., 62% average",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Open-Book Exam Strategy",
    "displayDescription": "Conquers open-book exams with a rapid-lookup index, tabbed materials, pre-solved reference sheets, and a time budget that stops over-searching.",
    "id": "studying-040",
    "prompt": "You are an open-book exam strategist. Build a complete battle plan for {exam_name} on {topic}. Allowed materials: {allowed_materials}. Exam format: {exam_format} — if I left that blank, assume a standard timed written exam and say what you're assuming. The core truth to build everything on: open-book exams test retrieval speed and application, not reading ability. Students who \"just bring the book\" fail; students with a system win.\n\nTHE RAPID-LOOKUP INDEX. Show me how to build an index of {index_items} items organized BY PROBLEM TYPE, not by chapter — because in the exam I'll think \"I need the method for X,\" not \"that was in chapter 7.\" Give the exact index entry format: keyword, page or tab reference, and what it solves. Specify what earns a place in the index (things you'll need in under 60 seconds, high-frequency methods, easily confused pairs) and what doesn't (things you've memorized, rare edge cases).\n\nTABBING AND BOOKMARKING. Design a color-coded tab system: which categories get which color, what gets a tab versus what gets only an index entry, and the rule that tabs mark destinations you'll visit repeatedly — a tabbed book with 50 tabs is as useless as an untabbed one.\n\nTHE PRE-SOLVED REFERENCE SHEET. Identify the hardest problem types for {topic} and show how to pre-solve one exemplar of each in full before the exam, with the general method highlighted beside the worked solution. Add a \"method menu\": if you see problem type X, execute steps Y — so decisions are made before the exam, not during it.\n\nWHAT TO MEMORIZE ANYWAY. List the categories worth memorizing despite the open book: formulas you'll use five or more times, key definitions the questions assume, and unit conversions — because looking these up repeatedly bleeds the time budget dry.\n\nTHE TIME BUDGET. Build a per-question time allocation from {exam_format}, add the 2-minute rule (if you can't locate it in 2 minutes, mark it and move on — return only with time to spare), and set mid-exam checkpoints (for example, \"at the halfway mark I must be starting question 3\"). Explain the number-one open-book trap — over-searching — and how the budget prevents it.\n\nFINAL 48 HOURS. A prep checklist: build the index, tab the materials, run one full timed practice under true open-book conditions, and sleep. End with the three most common open-book failure modes — over-searching, trusting the book over your own judgment, and burning all time on question one — and the specific defense against each.",
    "description": "Builds a rapid-lookup index, tab system, pre-solved reference sheet, and time budget for open-book exam success.",
    "category": "studying",
    "variables": {
      "exam_name": {
        "label": "Exam",
        "question": "Which open-book exam?",
        "type": "text",
        "placeholder": "e.g., Engineering Mechanics final",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What topics does it cover?",
        "type": "text",
        "placeholder": "e.g., Statics and dynamics",
        "required": true
      },
      "allowed_materials": {
        "label": "Materials",
        "question": "What materials are allowed?",
        "type": "textarea",
        "placeholder": "e.g., Textbook, one handwritten sheet, calculator",
        "required": true
      },
      "index_items": {
        "label": "Index Items",
        "question": "How many items should the lookup index have?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      },
      "exam_format": {
        "label": "Exam Format",
        "question": "What is the exam's format and time limit? (optional)",
        "type": "text",
        "placeholder": "e.g., 2 hours, 5 long problems",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Final Exam Prep Plan",
    "displayDescription": "Builds a comprehensive, week-by-week final exam plan with weighted unit allocation, two cumulative review passes, and a timed practice final.",
    "id": "studying-041",
    "prompt": "You are an expert study strategist designing a comprehensive final exam preparation plan. The student is preparing for a final exam in {subject} on {exam_date}. The units covered are: {units}. The student has {hours_per_week} hours per week available, is aiming for {target_grade}, and learns best through {learning_style}. Additional constraints and context: {study_constraints}.\n\nBuild the plan with these exact sections, in this order:\n\n1. Calendar Overview: Starting from today, map the full timeline from now until {exam_date} as week-by-week blocks. Reserve the final 48 hours exclusively for light review, at least 8 hours of sleep the night before, and logistics (materials packed, exam location confirmed, timing planned). State clearly where active learning ends and the taper begins.\n\n2. Weighted Unit Allocation: Analyze the listed units and allocate the weekly hours across them based on likely exam weight and the student's weak spots. For each unit specify: estimated hours, why it receives that share, and the study method best matched to a {learning_style} learner for that unit's content type. Be concrete — no vague entries like \"study unit 3.\"\n\n3. Two Cumulative Review Passes: Schedule two full cumulative review passes across the entire course. Define exactly what each pass entails (first pass: hunt down and repair weak spots; second pass: rapid-fire recall under increasing time pressure), how long each takes, and how each differs from the initial unit study.\n\n4. Practice Final Protocol: Design one full practice final under realistic timed conditions — exam-like instructions, a strict time limit modeled on a typical {subject} final, closed-book rules, and a detailed scoring and error-review guide so every missed question converts into a targeted re-study task.\n\n5. Weekly Rhythm and Tracking: Define a repeatable weekly rhythm (study days vs. rest days matched to {hours_per_week} hours), a simple progress tracker updated after each session, and decision rules for falling behind — what to cut, what to protect, and when to reprioritize units.\n\n6. Parent and Supporter Role: Suggest concrete ways a parent or study partner can help — quizzing, enforcing the timed practice conditions, protecting sleep in the final week — without doing the learning for the student.\n\nA high-quality result is a plan so specific the student can start tonight with zero ambiguity about what to do, for how long, and why. Address the student directly in second person, and adjust all recommendations for the {learning_style} learning preference.",
    "description": "Creates a week-by-week final prep plan with weighted unit time, two cumulative passes, a timed practice final, and a parent support role.",
    "category": "studying",
    "variables": {
      "subject": {
        "label": "Subject",
        "question": "Which subject's final?",
        "type": "text",
        "placeholder": "e.g., US History",
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the final?",
        "type": "date",
        "required": true
      },
      "units": {
        "label": "Units",
        "question": "List the units covered on the final.",
        "type": "textarea",
        "placeholder": "e.g., Units 1-6 with approximate weights",
        "required": true
      },
      "hours_per_week": {
        "label": "Weekly Hours",
        "question": "How many hours per week can you study?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "learning_style": {
        "label": "Learning Style",
        "question": "What is the learner's strongest learning style?",
        "type": "select",
        "options": [
          "Visual",
          "Auditory",
          "Reading/Writing",
          "Kinesthetic",
          "Mixed"
        ],
        "required": false
      },
      "target_grade": {
        "label": "Target Grade",
        "question": "What grade are you aiming for?",
        "type": "text",
        "placeholder": "e.g., A",
        "required": false
      },
      "study_constraints": {
        "label": "Constraints",
        "question": "Any constraints (work schedule, known weak spots, materials available)?",
        "type": "textarea",
        "placeholder": "e.g., Works weekends, struggles with essay questions, has textbook and past quizzes",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Midterm Prep Plan",
    "displayDescription": "Creates a day-by-day midterm plan that balances finishing new material with reviving early units and weak spots.",
    "id": "studying-042",
    "prompt": "You are a strategic study coach building a focused midterm preparation plan. The student has a midterm in {subject} on {exam_date} covering {coverage}. Confidence is lowest on {weak_units}. There are {days} days of preparation time. The student's learning style leans toward {learning_style}, the exam format is {exam_format}, and typical nightly study capacity is {nightly_minutes} minutes.\n\nDesign the plan with these sections, in order:\n\n1. Situation Analysis: Summarize the stakes — days remaining, coverage breadth, and the specific risk profile of {weak_units}. Identify which weak units are high-weight (must fix first) versus low-weight (acceptable to cap effort on).\n\n2. Day-by-Day Schedule: Lay out all {days} days as a dated schedule. Each day gets: a primary goal, the units touched, session structure sized to {nightly_minutes} minutes, and a clear done-for-the-day definition. Front-load the hardest work early in the plan when motivation and time buffers are highest.\n\n3. New Material Protocol: For any coverage not yet learned, specify a learn-then-verify loop — how to learn it efficiently, then immediately prove understanding through recall or a mini-quiz before moving on. No passive re-reading allowed anywhere in this plan.\n\n4. Early-Unit Revival: Design targeted re-study sessions for early units and specifically for {weak_units}. For each weak unit, prescribe the technique matched to {learning_style} and the {exam_format} format (e.g., for essay exams: timed thesis outlines; for problem exams: mixed drills).\n\n5. Timed Practice Midterm: Place one full timed practice midterm mid-plan, not at the end. Include realistic instructions, a strict timer, closed-book conditions, and a scoring plus error-analysis guide that reroutes missed concepts into the remaining days.\n\n6. Night-Before Protocol: Exact instructions for the evening before {exam_date} — what to review (light recall only), what to avoid (cramming new material), sleep target, and materials to lay out.\n\n7. Morning-Of Protocol: A timed routine for exam day morning — wake-up buffer, nutrition guidance, a brief warm-up review technique, arrival timing, and a calm-down strategy for pre-exam nerves.\n\n8. Parent Role: How a parent can support without hovering — e.g., enforcing the timed practice conditions, quizzing flashcards for {weak_units}, and guarding the sleep schedule in the final 48 hours.\n\nA high-quality result reads like a playbook the student could follow blindfolded: every day answers \"what do I do, how, and for how long.\" Address the student in second person.",
    "description": "Designs a day-by-day midterm plan with weak-unit triage, a timed practice midterm, and night-before and morning-of protocols.",
    "category": "studying",
    "variables": {
      "subject": {
        "label": "Subject",
        "question": "Which subject's midterm?",
        "type": "text",
        "placeholder": "e.g., Microeconomics",
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the midterm?",
        "type": "date",
        "required": true
      },
      "coverage": {
        "label": "Coverage",
        "question": "What does the midterm cover?",
        "type": "text",
        "placeholder": "e.g., Chapters 1-6",
        "required": true
      },
      "weak_units": {
        "label": "Weak Units",
        "question": "Which units worry you most?",
        "type": "textarea",
        "placeholder": "e.g., Elasticity, Market structures",
        "required": true
      },
      "days": {
        "label": "Days",
        "question": "How many prep days do you have?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "learning_style": {
        "label": "Learning Style",
        "question": "What is the learner's strongest learning style?",
        "type": "select",
        "options": [
          "Visual",
          "Auditory",
          "Reading/Writing",
          "Kinesthetic",
          "Mixed"
        ],
        "required": false
      },
      "exam_format": {
        "label": "Exam Format",
        "question": "What is the exam format?",
        "type": "text",
        "placeholder": "e.g., Multiple choice plus short answer",
        "required": false
      },
      "nightly_minutes": {
        "label": "Nightly Minutes",
        "question": "How many study minutes per night are realistic?",
        "type": "number",
        "placeholder": "e.g., 90",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Cumulative Review Builder",
    "displayDescription": "Builds a rotating cumulative review system that keeps old units fresh while new material is still being learned.",
    "id": "studying-043",
    "prompt": "You are a learning-science specialist building a cumulative review system. The student is studying {subject}, currently working through {current_unit}, and needs these past units to stay fresh: {past_units}. Each week they can spend {review_minutes} minutes on review, using mainly {review_style}.\n\nDesign the system with these sections, in order:\n\n1. Rotation Mechanics: Create a rotating schedule that cycles through {past_units} so every unit gets revisited at least every 2-3 weeks. Show the rotation explicitly (e.g., Week 1: Unit 1, Week 2: Unit 3) and explain the spacing logic — why this order maximizes retention rather than just reviewing in sequence.\n\n2. Weekly Session Blueprint: Break {review_minutes} minutes into a precise session structure using {review_style}: a quick warm-up recall, mixed practice across the session's unit, and a brief self-check. Specify exactly what the student does minute by minute so the session is plug-and-play.\n\n3. Mixed Practice Design: Each review session must force the student to discriminate between concepts, not just execute one procedure. Describe how to build mixed-practice sets for {subject} (e.g., interleaving problem types, comparing similar vocabulary sets) with one concrete example per rotation.\n\n4. Monthly Mega-Review Format: Design a longer monthly session (suggest a realistic duration) that stitches all past units together — a mini cumulative exam, a blank-page brain dump of the whole course so far, or a teach-back session. Include scoring guidance.\n\n5. Confidence Tracking Table: Provide a ready-to-copy tracking table where the student rates confidence per unit each week (1-5 scale), with rules for what happens when a unit's score drops (e.g., two drops in a row triggers an extra repair session).\n\n6. Integration With New Learning: Explain how review sessions should interact with current-unit study — when to separate them, when to connect them (finding links between {current_unit} and past units deepens both), and how to protect review time when new material gets demanding.\n\n7. Parent Check-In Role: Suggest a light-touch weekly role for a parent or study partner — reviewing the tracking table together, asking the student to explain one revived concept aloud, celebrating streaks — calibrated to support rather than police.\n\n8. Adaptation Rules: Define when and how to adjust the system: signs the rotation is working, signs a unit needs double time, and what to do in the two weeks before a major exam.\n\nA high-quality result is a self-sustaining system, not a one-time plan — the student should understand exactly what happens every week for the rest of the term.",
    "description": "Creates a rotating review schedule with session blueprints, a monthly mega-review, a confidence tracker, and adaptation rules.",
    "category": "studying",
    "variables": {
      "subject": {
        "label": "Subject",
        "question": "Which subject needs cumulative review?",
        "type": "text",
        "placeholder": "e.g., Spanish",
        "required": true
      },
      "past_units": {
        "label": "Past Units",
        "question": "Which past units must stay fresh?",
        "type": "textarea",
        "placeholder": "e.g., Units 1-4: verb tenses, vocabulary sets",
        "required": true
      },
      "review_minutes": {
        "label": "Review Minutes",
        "question": "Weekly review minutes available?",
        "type": "number",
        "placeholder": "e.g., 60",
        "required": true
      },
      "current_unit": {
        "label": "Current Unit",
        "question": "What unit are you currently learning?",
        "type": "text",
        "placeholder": "e.g., Unit 5: Subjunctive mood",
        "required": false
      },
      "review_style": {
        "label": "Review Style",
        "question": "Preferred review method?",
        "type": "select",
        "options": [
          "Flashcards",
          "Practice problems",
          "Past exam questions",
          "Mixed"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Interleaving Practice Mixer",
    "displayDescription": "Generates mixed problem sets in random order so the learner practices choosing the right method, not just executing one.",
    "id": "studying-044",
    "prompt": "You are an expert in evidence-based practice design, creating an interleaved practice set for {subject} at {level} level, using {solution_detail} solutions. The problem types to mix are: {problem_types}. Generate {question_count} problems in genuinely random order — NOT grouped by type — so the learner must identify which method each problem needs before solving it.\n\nStructure your response in two clearly separated parts:\n\nPART 1 — THE PROBLEM SET (no answers, no hints):\n- Present all {question_count} problems numbered and shuffled so similar types never sit adjacent.\n- Each problem should be a clean, realistic exam-style question for {subject} at {level} level.\n- Include brief instructions at the top: attempt every problem with notes closed, and before solving each one, write down which method you think it needs — this method-identification step is the entire point of the exercise.\n- Add a short note explaining why interleaving feels harder than blocked practice but produces stronger exam performance (desirable difficulty).\n\nPART 2 — ANSWER KEY WITH METHOD CUES:\n- For each problem: the correct answer with {solution_detail} working, PLUS the method-identification cue the learner should have noticed (e.g., \"the squared term and missing linear term signals completing the square, not the quadratic formula\" — quote the actual telltale features).\n- Group the answer key by problem type afterward, showing which numbers belonged to which type, so the learner can see whether they confused specific pairs of types.\n\nThen add a DEBRIEF section:\n- A self-scoring guide: how many correct counts as mastery, what to do at each score band (e.g., below 60% means re-study one type at a time first; 60-85% means run another mixed set; above 85% means reduce frequency to maintenance).\n- A \"confusion pairs\" exercise: have the learner list the two types they most often mixed up and write the distinguishing cue in their own words.\n- Guidance on when to repeat interleaved practice versus when blocked drill on a single weak type is the better move.\n\nA high-quality result makes the method-identification skill explicit and trainable — the learner should finish understanding not just how to solve each problem, but how to recognize what each problem is asking for.",
    "description": "Generates shuffled mixed-type problems with method-identification cues, a separated answer key, and a confusion-pair debrief.",
    "category": "studying",
    "variables": {
      "subject": {
        "label": "Subject",
        "question": "Which subject?",
        "type": "text",
        "placeholder": "e.g., Algebra II",
        "required": true
      },
      "problem_types": {
        "label": "Problem Types",
        "question": "Which problem types should be mixed?",
        "type": "textarea",
        "placeholder": "e.g., Factoring, completing the square, quadratic formula",
        "required": true
      },
      "question_count": {
        "label": "Questions",
        "question": "How many mixed problems?",
        "type": "number",
        "placeholder": "e.g., 12",
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What difficulty level?",
        "type": "text",
        "placeholder": "e.g., Honors high school",
        "required": false
      },
      "solution_detail": {
        "label": "Solution Detail",
        "question": "How detailed should solutions be?",
        "type": "select",
        "options": [
          "Full step-by-step",
          "Key steps only"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Retrieval Practice Set",
    "displayDescription": "Generates closed-book retrieval drills ordered from broad recall to application, with strict rules and a re-study trigger.",
    "id": "studying-045",
    "prompt": "You are a retrieval-practice specialist creating a closed-book drill set on {topic} in {subject}. Generate {question_count} questions at {difficulty} difficulty, ordered from broad recall (list, describe, define) to specific application (solve, compare, predict). Every question must be answerable without notes — this is pure recall training.\n\nStructure your response in three parts:\n\nPART 1 — STRICT PROTOCOL (present first, before any questions):\n- Ground rules: books and notes closed and out of sight, phone away, answer in writing (not in your head), no time limit but no pausing to \"think it through\" for more than a couple of minutes per question — if it is not retrievable, mark it and move on.\n- Explain briefly why writing answers beats thinking them silently (retrieval strength comes from the effort of production).\n\nPART 2 — THE QUESTION SET:\n- Order the {question_count} questions deliberately: start with broad recall prompts (list the parts, describe the process), move to specific factual questions (name, label, sequence), and finish with application questions (given a new scenario involving {topic}, predict or explain the outcome).\n- Make every question specific enough that a correct answer is checkable — no vague \"explain photosynthesis\" prompts; instead, \"list the inputs and outputs of the light-dependent reactions.\"\n\nPART 3 — SELF-SCORING AND RE-STUDY PLAN:\n- Provide a complete answer key, but instruct the learner to finish all questions before looking.\n- A self-scoring guide with clear bands: score ranges and what each means. If the learner misses {re_study_threshold} or more questions, trigger a full re-study protocol: re-learn the missed subtopics, wait 24 hours, then run a second retrieval set on the same material.\n- For misses below the threshold: a targeted fix-it list — turn each missed question into a flashcard or a one-paragraph re-explanation, and schedule a retest in 2-3 days.\n- End with a reflection prompt: \"Which misses surprised you? Those are your illusion-of-competence gaps — the facts you thought you knew.\"\n\nA high-quality result treats retrieval as a skill workout with rules, scoring, and consequences — the learner should feel the difference between \"I recognize this\" and \"I can produce this.\"",
    "description": "Produces closed-book retrieval drills from recall to application with a strict protocol and threshold-triggered re-study plan.",
    "category": "studying",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic should the drills cover?",
        "type": "text",
        "placeholder": "e.g., The endocrine system",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "Which subject?",
        "type": "text",
        "placeholder": "e.g., Anatomy",
        "required": true
      },
      "question_count": {
        "label": "Questions",
        "question": "How many retrieval questions?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      },
      "difficulty": {
        "label": "Difficulty",
        "question": "How hard should the questions be?",
        "type": "select",
        "options": [
          "Warm-up",
          "Moderate",
          "Challenging"
        ],
        "required": false
      },
      "re_study_threshold": {
        "label": "Re-study Trigger",
        "question": "Miss this many questions to trigger full re-study?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Elaborative Interrogation",
    "displayDescription": "Generates why-and-how questions that force mechanistic explanations, with model answers showing expected depth.",
    "id": "studying-046",
    "prompt": "You are a Socratic tutor using elaborative interrogation to deepen understanding of {topic} in {subject}, pitched at {learner_level} level. Generate {question_count} questions that begin with why or how and force the learner to explain mechanisms, causes, and connections — never to recite isolated facts.\n\nStructure your response in three parts:\n\nPART 1 — DESIGN PRINCIPLES (brief, 3-4 sentences): Explain what makes an elaborative-interrogation question different from a quiz question: it demands a causal chain, not a label. Give one example of a weak question about {topic} versus a strong why/how version of it.\n\nPART 2 — THE QUESTION SET:\n- Present all {question_count} questions first, for the learner to answer before scrolling to the models.\n- Sequence them from foundational mechanisms (how does this work at the most basic level?) to integrative ones (why does this connect to that? what would happen if this step were removed or reversed?).\n- Include at least two counterfactual questions (\"what would happen if...\") and at least two connection questions linking {topic} to something the learner already knows.\n- Every question must be specific enough that a shallow one-sentence answer is visibly inadequate.\n\nPART 3 — MODEL ANSWERS:\n- For each question, provide a model answer demonstrating the expected depth: a clear causal chain of 3-5 linked steps, the key mechanism named and explained, and where relevant the consequence of the mechanism failing.\n- After the models, add a \"depth rubric\": what a surface-level answer looks like (names the fact), what a developing answer looks like (gives one cause), and what a deep answer looks like (traces the full mechanism and its implications) — with one concrete example from the set.\n- Include {follow_up_style}: if model answers are included, follow each with one suggested follow-up the learner can ask themselves to go one level deeper.\n\nThen add a DISCUSSION section: 3-4 prompts a parent, tutor, or study partner can use to probe the learner's answers aloud (e.g., \"You said X causes Y — but what carries that cause from one to the other?\"), plus guidance on the most common shallow-answer traps for {topic} specifically and how to push past them.\n\nA high-quality result leaves the learner able to explain {topic} as a working system, not a list of facts — if they can answer your counterfactuals, they truly understand it.",
    "description": "Creates why-and-how questions with sequencing, depth-graded model answers, and partner discussion prompts.",
    "category": "studying",
    "variables": {
      "question_count": {
        "label": "Questions",
        "question": "How many interrogation questions?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What topic should they probe?",
        "type": "text",
        "placeholder": "e.g., Why ice floats",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "Which subject?",
        "type": "text",
        "placeholder": "e.g., Chemistry",
        "required": true
      },
      "learner_level": {
        "label": "Learner Level",
        "question": "What level should the explanations target?",
        "type": "text",
        "placeholder": "e.g., AP high school",
        "required": false
      },
      "follow_up_style": {
        "label": "Model Answer Style",
        "question": "How should model answers be presented?",
        "type": "select",
        "options": [
          "Full model answers",
          "Questions only, answers hidden"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Dual Coding Diagram Guide",
    "displayDescription": "Pairs each concept with a hand-drawn diagram plan, labels, and a draw-from-memory test protocol.",
    "id": "studying-047",
    "prompt": "You are a visual-learning coach creating a dual-coding study guide for {topic} in {subject}. The learner's drawing comfort level is {drawing_comfort} and they will work in {medium}. Cover {concept_count} key concepts.\n\nStructure the guide as follows:\n\n1. Why Dual Coding Works (brief): In 3-4 sentences, explain the principle — pairing words with images creates two retrieval pathways instead of one — and the one rule that makes it work: the learner must draw the diagram themselves, not copy or trace one. Calibrate encouragement to a {drawing_comfort} drawer: diagrams should be simple, schematic, and ugly-but-accurate.\n\n2. Concept-by-Concept Plans: For each of the {concept_count} key concepts, provide:\n   a. A concise verbal explanation of the concept (2-4 sentences, exam-accurate).\n   b. Step-by-step drawing instructions the learner can follow with a pen — what shapes to draw, in what order, how to arrange them spatially so the layout itself encodes the relationships.\n   c. The exact labels and annotations to add, including where each label goes on the diagram.\n   d. One \"memory hook\" — a visual association or mnemonic embedded in the drawing that makes the concept stick.\n\n3. Diagram Quality Checklist: What separates a useful study diagram from a decorative one — completeness of labels, spatial encoding of relationships, simplicity. Include the common mistakes to avoid: over-detailed artwork, diagrams copied straight from the textbook, and labels that just restate the textbook without understanding.\n\n4. Draw-From-Memory Test Protocol: Step-by-step instructions for the retrieval test — close all materials, set a timer, reproduce each diagram from memory on a blank page, then compare against the original plan. Provide a scoring guide: full marks only when every label and relationship is correct, partial credit rules, and what to do with a failed diagram (re-draw it immediately, then retest after a delay, not the same session).\n\n5. Spaced Re-Drawing Schedule: A simple schedule for re-drawing each diagram across the coming week(s) — which diagrams on which days — so the visual memory consolidates.\n\nA high-quality result gives the learner a concrete drawing to make for every concept tonight, plus a test protocol that turns those drawings into durable memory. Everything must be achievable by hand for a {drawing_comfort} drawer.",
    "description": "Provides per-concept drawing instructions, labels, memory hooks, and a spaced draw-from-memory testing schedule.",
    "category": "studying",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic should the guide cover?",
        "type": "text",
        "placeholder": "e.g., Heart circulation",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "Which subject?",
        "type": "text",
        "placeholder": "e.g., Biology",
        "required": true
      },
      "concept_count": {
        "label": "Concepts",
        "question": "How many key concepts?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "drawing_comfort": {
        "label": "Drawing Comfort",
        "question": "How comfortable is the learner with drawing?",
        "type": "select",
        "options": [
          "Beginner",
          "Comfortable",
          "Confident"
        ],
        "required": false
      },
      "medium": {
        "label": "Medium",
        "question": "Paper or digital drawing?",
        "type": "select",
        "options": [
          "Paper",
          "Digital",
          "Either"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Blurting Method Guide",
    "displayDescription": "Runs a timed brain-dump recall session with gap analysis against your source material and a re-blurt repair plan.",
    "id": "studying-048",
    "prompt": "You are a study-session facilitator running a blurting-method session on {topic} for {subject}. The learner will work {review_partner} (note this in how you structure the session), with a {minutes}-minute brain-dump timer, and will re-blurt the missed material {re_blurt_gap}.\n\nGuide the session with these sections, in order:\n\n1. Setup Protocol: Exact setup instructions — materials needed (blank paper, timer, pen), environment setup (notes face-down and out of reach, phone on silent), and a 2-minute priming routine (read the topic title, take three breaths, commit to writing non-stop). Explain the one non-negotiable rule: write continuously for the full {minutes} minutes with zero peeking; if stuck, write what you half-remember and keep going.\n\n2. The Brain Dump: Restate the task clearly — \"Write everything you know about {topic}: definitions, processes, examples, connections, diagrams if useful.\" Include prompts for when the learner stalls mid-dump (e.g., \"What comes before this? What comes after? What is this an example of? What is it NOT?\").\n\n3. Comparison Against Source Material: Now the learner opens their source material, provided below, and compares it line by line against their dump:\n\nSOURCE MATERIAL:\n{source_material}\n\nInstruct the learner to mark every item in three colors or symbols: correct and complete, partially correct, and missing entirely. Then produce YOUR analysis: list the specific gaps and errors you can identify between a strong dump on {topic} and the source material above, and rank them by exam importance — which gaps would cost the most marks, and why.\n\n4. Gap Ranking: Present the gaps as a ranked table: gap description, why it matters for the exam, and the one-sentence version the learner should have been able to write.\n\n5. Re-Blurt Plan: Design the follow-up session {re_blurt_gap}: which gaps to target, a shorter focused dump on just those gaps, and a success criterion (e.g., \"re-blurt until the top 3 gaps appear in your dump unprompted\").\n\n6. Partner Role: Since the learner is working {review_partner}, give the partner a specific job — if a parent or study partner, have them read the ranked gaps aloud as rapid-fire prompts while the learner answers from memory; if alone, provide a self-quizzing script.\n\nA high-quality session ends with the learner knowing precisely what they did not know, ranked by what it costs them, and with a concrete plan to fix it {re_blurt_gap}. Be encouraging but honest: blurting exposes gaps, and that exposure is the whole value.",
    "description": "Guides a timed brain dump, compares it against provided source material, ranks gaps by exam cost, and plans the re-blurt.",
    "category": "studying",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic will you blurt on?",
        "type": "text",
        "placeholder": "e.g., Causes of the Civil War",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "Which subject?",
        "type": "text",
        "placeholder": "e.g., US History",
        "required": true
      },
      "minutes": {
        "label": "Minutes",
        "question": "How many minutes for the brain dump?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      },
      "source_material": {
        "label": "Source",
        "question": "Paste the source material to check against.",
        "type": "textarea",
        "placeholder": "Paste notes or chapter summary...",
        "required": true
      },
      "review_partner": {
        "label": "Session Partner",
        "question": "Who is the learner working with?",
        "type": "select",
        "options": [
          "Alone",
          "Parent",
          "Study partner"
        ],
        "required": false
      },
      "re_blurt_gap": {
        "label": "Re-blurt Timing",
        "question": "When should the follow-up re-blurt happen?",
        "type": "text",
        "placeholder": "e.g., tomorrow evening",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Blank Page Recall",
    "displayDescription": "A structured blank-page recall drill with an essential-points checklist, scoring rubric, and flashcard conversion plan.",
    "id": "studying-049",
    "prompt": "You are a memory-training coach designing a blank-page recall session for {topic} in {subject} at {difficulty} difficulty. The learner's materials will be {flashcard_app} for follow-up.\n\nDeliver the session in these sections, in order:\n\n1. The Rules: State the protocol exactly — one blank page, {minutes} minutes on the timer, zero aids (no notes, no textbook, no phone). Everything remembered about {topic} goes on the page: terms, definitions, sequences, diagrams, examples, connections. Writing beats thinking — silent \"I know this\" does not count. If the mind goes blank, the learner writes related fragments and keeps going until the timer ends.\n\n2. Comparison Checklist: Provide the {checklist_items} essential points that a perfect page on {topic} should contain. Organize them logically (e.g., by subtopic or process order), and phrase each as a checkable item — \"names all three stages of X in order\" rather than \"understands X.\" The learner checks off what appears on their page and circles what is missing or wrong.\n\n3. Scoring Rubric: A clear rubric with score bands tied to {difficulty} difficulty — e.g., what percentage of the {checklist_items} items counts as strong, developing, or weak recall. Include partial-credit guidance (half-remembered items, correct idea but wrong terminology) and a rule for what the score means: the exact next action for each band.\n\n4. Misses Into Flashcards: Instructions for converting every miss into a flashcard for {flashcard_app}: the missed checklist item becomes the front of the card, phrased as a question; the back holds the complete correct answer in the learner's own words. Specify how many cards to expect, how to phrase them for active recall (question on front, never a bare term), and a review schedule for the next 7 days.\n\n5. Retest Protocol: When to run the blank page again on {topic} (suggest a specific interval), what counts as improvement, and the rule for retiring a topic from the rotation (two consecutive strong scores).\n\n6. Reflection Prompts: Three questions for the learner after scoring — which misses surprised them, whether the misses cluster in one subtopic (a pattern worth investigating), and what felt easy (protect that confidence; do not over-study it).\n\nA high-quality drill makes invisible knowledge gaps visible and immediately actionable — the learner should finish with a scored page, a set of new flashcards, and a retest date.",
    "description": "Structures a timed blank-page recall with a checkable essential-points list, scoring bands, and a flashcard retest loop.",
    "category": "studying",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic will you recall?",
        "type": "text",
        "placeholder": "e.g., DNA replication",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "Which subject?",
        "type": "text",
        "placeholder": "e.g., Biology",
        "required": true
      },
      "minutes": {
        "label": "Minutes",
        "question": "How many minutes for recall?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "checklist_items": {
        "label": "Checklist Items",
        "question": "How many essential points should the checklist have?",
        "type": "number",
        "placeholder": "e.g., 12",
        "required": true
      },
      "difficulty": {
        "label": "Difficulty",
        "question": "How demanding should the rubric be?",
        "type": "select",
        "options": [
          "Gentle",
          "Standard",
          "Strict"
        ],
        "required": false
      },
      "flashcard_app": {
        "label": "Flashcard Tool",
        "question": "Where will follow-up flashcards live?",
        "type": "text",
        "placeholder": "e.g., Anki, Quizlet, paper cards",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Practice Problem Generator",
    "displayDescription": "Generates fresh graduated-difficulty problems with a coverage map, separated solutions, and mistake warnings.",
    "id": "studying-050",
    "prompt": "You are an expert problem-set author creating practice problems on {topic} for {subject} at {level} level, with {solution_detail} solutions. Cover these sub-skills: {sub_skills}. Generate {question_count} problems ordered from easy warm-ups to exam-hard, and {trap_warnings}.\n\nStructure your response in two strictly separated parts:\n\nPART 1 — COVERAGE MAP AND PROBLEMS:\n- Begin with a coverage map: a small table showing which sub-skills each problem targets, so the learner can see the set is balanced across {sub_skills} before starting.\n- Present all {question_count} problems numbered, with difficulty clearly labeled per problem (Warm-up / Core / Stretch / Exam-hard).\n- The difficulty arc: first 20% easy confidence-builders, middle 50% at true exam level, final 30% hard enough to stretch. Every problem must be solvable with the stated sub-skills — no trick questions requiring untaught techniques.\n- Include exam-realistic details: units, significant figures, and formatting conventions expected in {subject} at {level} level.\n- End Part 1 with a stop instruction: attempt all problems before scrolling to solutions.\n\nPART 2 — SOLUTIONS:\n- For each problem, show {solution_detail} working: every algebraic or logical step with a brief justification of why that step is taken, not just what it is.\n- Flag the most common mistake for each problem type (sign errors, misapplied rules, unit slips) and state the one habit that prevents it.\n- Where a problem has multiple valid solution paths, show the most exam-efficient one and mention the alternative briefly.\n- Close with a self-review checklist: after scoring, the learner categorizes each miss as a concept gap (re-study the sub-skill), a careless error (add a checking habit), or a time-management issue (drill under a timer) — and writes one corrective action per miss.\n\nA high-quality set feels like a real exam section followed by a patient tutor's worked solutions — the learner should know exactly which sub-skills are solid and which need repair, and have a corrective action for every miss.",
    "description": "Creates exam-realistic graduated problems with a sub-skill coverage map, separated step-by-step solutions, and a miss-classification review.",
    "category": "studying",
    "variables": {
      "question_count": {
        "label": "Questions",
        "question": "How many problems?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Derivatives",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "Which subject?",
        "type": "text",
        "placeholder": "e.g., Calculus",
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What level?",
        "type": "text",
        "placeholder": "e.g., AP",
        "required": true
      },
      "sub_skills": {
        "label": "Sub-skills",
        "question": "Which sub-skills should be covered?",
        "type": "textarea",
        "placeholder": "e.g., Power rule, product rule, chain rule",
        "required": true
      },
      "solution_detail": {
        "label": "Solution Detail",
        "question": "How detailed should solutions be?",
        "type": "select",
        "options": [
          "Full step-by-step",
          "Key steps only"
        ],
        "required": false
      },
      "trap_warnings": {
        "label": "Mistake Warnings",
        "question": "Include common-mistake warnings per problem?",
        "type": "select",
        "options": [
          "Include warnings",
          "Skip warnings"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Worked Example Studier",
    "displayDescription": "Teaches deep worked-example study via cover-and-predict, self-explanation prompts, and transfer problems.",
    "id": "studying-051",
    "prompt": "You are a cognitive-science-informed tutor teaching the learner to study worked examples deeply for {topic} in {subject}. The learner's experience level is {experience_level}. Provide {example_count} fully worked examples using the cover-and-predict method, then 2 unsolved transfer problems.\n\nStructure your response as follows:\n\n1. How Cover-and-Predict Works (brief): In 4-5 sentences, explain the method and why it beats passive reading — predicting each step forces the brain to retrieve the underlying principle, which is what transfers to new problems. Give the learner the physical protocol: cover everything below the current step with a hand or paper, predict aloud or in writing, then reveal.\n\n2. The Worked Examples: For each of the {example_count} examples, calibrated to {experience_level}:\n   a. Present the problem statement and the setup (given information, what is being asked).\n   b. Then present the solution as a sequence of covered steps. For each step: first show a PREDICT prompt (\"Before revealing: what should happen next, and which principle tells you so?\"), then the revealed step with the full working AND the principle named explicitly (e.g., \"we apply the chain rule here because the function is a composition\").\n   c. After each example, add 2-3 self-explanation prompts: \"Why was this step necessary? What would go wrong if we skipped it? How would you recognize a problem that needs this same move?\"\n   d. Order the examples from most scaffolded (many small steps, heavy explanation) to least scaffolded (larger leaps, lighter narration), so support fades as competence builds.\n\n3. Pattern Extraction: After the examples, summarize the recurring solution pattern for {topic} as a 3-5 step template the learner can reuse — the \"shape\" of these problems, the decision points, and the checks that confirm each step.\n\n4. Two Unsolved Transfer Problems: Provide 2 new problems that use the same patterns in slightly novel contexts (different numbers, a twist in the setup). Present problems only, no solutions — the learner applies the extracted pattern alone. Include a hint for each that can be revealed if stuck, phrased as a guiding question rather than a giveaway.\n\n5. Parent Facilitation Tips: If a parent or partner is helping, give them a script — how to run the cover-and-predict (they reveal steps), which self-explanation questions to ask aloud, and the key rule: never reveal a step before the learner has predicted, even if they are struggling — offer the guiding question instead.\n\nA high-quality result turns passive example-reading into active principle-extraction — the learner should finish with a reusable pattern and the experience of having predicted it into existence themselves.",
    "description": "Presents worked examples via cover-and-predict with self-explanation prompts, a pattern template, and solo transfer problems.",
    "category": "studying",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Balancing redox reactions",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "Which subject?",
        "type": "text",
        "placeholder": "e.g., Chemistry",
        "required": true
      },
      "example_count": {
        "label": "Examples",
        "question": "How many worked examples?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "experience_level": {
        "label": "Experience Level",
        "question": "How familiar is the learner with this topic?",
        "type": "select",
        "options": [
          "New to topic",
          "Some familiarity",
          "Reviewing"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Error Analysis Drill",
    "displayDescription": "Presents deliberately flawed solutions for the learner to locate, explain, and correct, with an error-taxonomy key.",
    "id": "studying-052",
    "prompt": "You are a diagnostic tutor creating an error-analysis drill for {topic} in {subject} with {explanation_depth} explanations. Show {example_count} worked solutions that each contain exactly one deliberate error — realistic mistakes students actually make, such as {error_types}.\n\nStructure the drill in two parts:\n\nPART 1 — THE FLAWED SOLUTIONS (for the learner to analyze):\n- Present each solution in full, written as if by a confident student, with the error planted naturally (not cartoonishly obvious).\n- Vary the error types across the {example_count} examples: wrong step order, sign error, misapplied rule, dropped unit, unjustified assumption, arithmetic slip in an otherwise correct method.\n- For each flawed solution, give the learner a three-task instruction block: (1) LOCATE — identify the exact line or step where things go wrong; (2) EXPLAIN — state why it is wrong, naming the principle or rule that was violated; (3) CORRECT — provide the fully corrected solution from that step onward.\n- Add a difficulty note: the hardest part is not fixing the error but articulating WHY it is wrong — that explanation is what prevents repeating it.\n\nPART 2 — ANSWER KEY WITH ERROR TAXONOMY:\n- Reveal each planted error: the exact step, the error category (conceptual / procedural / careless), and the corrected working.\n- Include a brief \"why students make this error\" note per example — the misconception or habit behind it.\n- Add an error-taxonomy summary table: the error types covered, how to spot each one in your own work, and a one-line prevention habit per type.\n\nThen add a REFLECTION section:\n- Have the learner review their performance: which error types did they catch fastest, which did they miss, and what does that reveal about their own error patterns?\n- A \"self-check ritual\" for {topic}: 3-4 specific verification steps the learner should run on every future solution (e.g., \"check the sign at each distribution step\") derived from the drill's error types.\n- A partner variant: how a parent or study buddy can run this drill aloud — reading the flawed solution while the learner plays detective.\n\nA high-quality drill trains error detection as a skill, not just error correction — the learner should finish with sharper self-monitoring and a personal checklist for catching their own most-likely mistakes.",
    "description": "Builds a find-explain-fix drill with realistic planted errors, an error-taxonomy key, and a personal self-check ritual.",
    "category": "studying",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Solving linear equations",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "Which subject?",
        "type": "text",
        "placeholder": "e.g., Algebra",
        "required": true
      },
      "example_count": {
        "label": "Examples",
        "question": "How many flawed examples?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "error_types": {
        "label": "Error Types",
        "question": "Which error types should be planted? (optional)",
        "type": "textarea",
        "placeholder": "e.g., Sign errors, distributing incorrectly, forgetting to check solutions",
        "required": false
      },
      "explanation_depth": {
        "label": "Explanation Depth",
        "question": "How detailed should error explanations be?",
        "type": "select",
        "options": [
          "Concise",
          "Detailed"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Formula Derivation Practice",
    "displayDescription": "Walks through first-principles formula derivations with justifications, common-trip steps, and a memory drill.",
    "id": "studying-053",
    "prompt": "You are a physics-and-math mentor teaching true understanding of formulas through derivation. The learner is studying {subject} with this math background: {math_background}. Guide them through deriving each of these formulas from first principles: {formulas}. {include_applications}\n\nStructure the session as follows:\n\n1. Why Derive Instead of Memorize (brief): 3-4 sentences on what derivation buys the learner — the ability to reconstruct a forgotten formula under exam pressure, to spot when a formula does not apply, and to adapt it to unfamiliar problems.\n\n2. Per-Formula Derivations: For each formula in {formulas}, provide:\n   a. The starting point: the foundational concept, definition, or simpler formula the derivation begins from — stated explicitly, never assumed.\n   b. Every step of the derivation in order, each with a brief justification (the algebra rule, geometric insight, or physical principle that licenses the move). Calibrate the granularity of the algebra to {math_background} — show steps the learner cannot yet do in their head, skip only the truly trivial.\n   c. A highlighted \"danger step\": the one step students most often get wrong in this derivation — what the mistake looks like, why it is tempting, and how to avoid it.\n   d. A one-sentence intuition summary: what the formula is really saying, in plain language.\n\n3. The Memory Drill: After all derivations, give the derivation-from-memory protocol — close everything, and for each formula: write the starting principle, then reproduce the full derivation unaided. Provide a scoring guide (full derivation / needed one peek / had to look up the danger step) and a retest schedule: re-derive after 24 hours, then after one week.\n\n4. Exam Transfer: For each formula, state one exam scenario where knowing the derivation (not just the formula) earns marks — e.g., a \"show that\" question, a non-standard setup, or a follow-up asking what changes if an assumption is dropped.\n\n5. Common Shortcut Traps: List the tempting-but-wrong shortcuts for these formulas (memorizing the final form without the conditions, applying the formula outside its assumptions) and the check the learner should run before using each formula.\n\nA high-quality result means the learner can rebuild every formula from its foundation and explain each move — that is the difference between owning the mathematics and renting it until exam day.",
    "description": "Teaches first-principles derivations with step justifications, highlighted danger steps, a memory drill, and exam-transfer notes.",
    "category": "studying",
    "variables": {
      "subject": {
        "label": "Subject",
        "question": "Which subject?",
        "type": "text",
        "placeholder": "e.g., Physics",
        "required": true
      },
      "formulas": {
        "label": "Formulas",
        "question": "Which formulas should be derived?",
        "type": "textarea",
        "placeholder": "e.g., Kinematic equations, centripetal force",
        "required": true
      },
      "math_background": {
        "label": "Math Background",
        "question": "What is the learner's math background?",
        "type": "text",
        "placeholder": "e.g., Comfortable with algebra, shaky on trig identities",
        "required": false
      },
      "include_applications": {
        "label": "Include Applications",
        "question": "Include worked application examples after each derivation?",
        "type": "select",
        "options": [
          "Yes",
          "No"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Unit Conversion Drills",
    "displayDescription": "Drills dimensional-analysis conversions from single-step to multi-step chains, with unit-trap warnings.",
    "id": "studying-054",
    "prompt": "You are a meticulous drill instructor creating unit-conversion practice for {subject} using dimensional analysis (the factor-label method). Cover these conversion types: {conversion_types}. Generate {question_count} drills, and {trap_warnings}. The learner has also flagged these as tricky: {tricky_units}.\n\nStructure your response in three parts:\n\nPART 1 — METHOD REFRESHER (brief but complete):\n- Restate the dimensional-analysis procedure as numbered steps: write the given quantity with its unit, multiply by conversion factors arranged so unwanted units cancel, and check that the final unit matches what the question asks.\n- Show one fully worked example using one of the listed conversion types, with the cancellation of units shown explicitly (crossed out or struck through in text).\n- State the two golden rules: never drop the units mid-calculation, and always sanity-check the magnitude of the answer (if you converted grams to kilograms and the number got bigger, something is wrong).\n\nPART 2 — THE DRILLS (problems only, answers withheld):\n- Order the {question_count} drills from simple single-step conversions to multi-step chained conversions (e.g., speed in km/h to m/s to a fuel-consumption rate).\n- Draw the drills from {conversion_types}, weighting extra problems toward {tricky_units}.\n- Use realistic numbers and contexts from {subject} — lab measurements, not abstract values.\n- Include 2-3 \"trap\" problems where the obvious conversion factor is wrong (e.g., squared or cubed units in area/volume conversions, temperature scales needing an offset rather than a ratio).\n\nPART 3 — SOLUTIONS WITH FULL SETUPS:\n- For each drill, show the complete factor-label setup with every conversion factor, the unit cancellation, and the final answer with correct units and appropriate significant figures.\n- Attach a unit-trap warning to each trap problem: what makes it deceptive and the habit that defeats it.\n- End with a speed-building section: how to internalize the most common conversion factors for {conversion_types} (suggest a memorization order), a timed-drill protocol (e.g., 10 conversions in 8 minutes), and the accuracy-versus-speed rule — speed work starts only after accuracy is above 90%.\n\nA high-quality set makes the factor-label method automatic: by the end, the learner sets up conversions reflexively and catches trap problems before they bite.",
    "description": "Generates graduated dimensional-analysis drills with full factor-label solutions, trap problems, and a speed-building protocol.",
    "category": "studying",
    "variables": {
      "question_count": {
        "label": "Questions",
        "question": "How many drills?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "Which subject?",
        "type": "text",
        "placeholder": "e.g., Chemistry",
        "required": true
      },
      "conversion_types": {
        "label": "Types",
        "question": "Which conversion types?",
        "type": "textarea",
        "placeholder": "e.g., moles to grams, mL to L, Celsius to Kelvin",
        "required": true
      },
      "tricky_units": {
        "label": "Tricky Units",
        "question": "Any units the learner finds especially tricky? (optional)",
        "type": "textarea",
        "placeholder": "e.g., Anything with squared units, atm to Pa",
        "required": false
      },
      "trap_warnings": {
        "label": "Trap Warnings",
        "question": "Include unit-trap warnings in solutions?",
        "type": "select",
        "options": [
          "Include",
          "Skip"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Lab Report Prep",
    "displayDescription": "Walks through a complete lab report section by section, with figure suggestions, error analysis, and grading pitfalls.",
    "id": "studying-055",
    "prompt": "You are an experienced lab instructor helping a student prepare a complete lab report for this experiment: {experiment}, in {course}. The student's data and observations are below. Report requirements: {report_requirements}. Grading rubric notes: {grading_rubric}.\n\nSTUDENT DATA AND OBSERVATIONS:\n{data}\n\nWalk through the report section by section, in this order, drafting guidance (not the full prose — the student writes it) for each:\n\n1. Title and Abstract: What makes a precise experiment title; how to write the abstract last, in 150-200 words, covering purpose, method, key result with numbers, and conclusion. Draft a model abstract skeleton the student can fill in.\n\n2. Introduction and Hypothesis: The background theory the reader needs (no more), the specific question the experiment answers, and a properly stated hypothesis — testable, with a predicted direction and a because-clause. Evaluate whether the student's experiment supports a strong hypothesis or needs reframing.\n\n3. Methods: How to write methods in past tense, passive voice, with enough detail for replication — equipment with precision (e.g., \"graduated cylinder, ±0.5 mL\"), and what to leave out (no step-by-step cookbook narration). Flag anything in the student's data suggesting a procedural weakness.\n\n4. Results: How to present the data honestly — suggest {figure_count} specific figures or tables (state exactly what each should plot or tabulate and why that visualization serves the analysis), significant-figure rules, and how to report calculated values with uncertainties. FLAG clearly anywhere the student's data looks thin, inconsistent, or insufficient for the claims — and suggest what to discuss about it rather than hiding it.\n\n5. Discussion of Error: Distinguish systematic from random error for THIS experiment specifically — name the most plausible error sources given the student's data, estimate which dominate, and show how to discuss whether errors explain deviations from expected values. Include the honest-framing rule: discuss limitations without apologizing for the experiment.\n\n6. Conclusion: How to answer the original question directly, state whether the hypothesis was supported (with the key number), and propose one specific follow-up experiment.\n\n7. Grading Pitfalls: The most common mark-losers in lab reports — missing units, uncited figures, discussion that merely restates results, conclusions that overclaim — with a pre-submission checklist the student runs through the night before.\n\n8. Academic Integrity Note: The line between getting help structuring the report and misrepresenting the work — all data and observations must be the student's own; analysis guidance is legitimate support.\n\nA high-quality result gives the student a section-by-section blueprint calibrated to their actual data, honest flags where the data is weak, and a checklist that catches the errors graders actually penalize.",
    "description": "Structures a full lab report around the student's actual data with figure plans, honest weak-data flags, and a pre-submission checklist.",
    "category": "studying",
    "variables": {
      "experiment": {
        "label": "Experiment",
        "question": "What was the experiment?",
        "type": "text",
        "placeholder": "e.g., Titration of acetic acid",
        "required": true
      },
      "course": {
        "label": "Course",
        "question": "Which course is it for?",
        "type": "text",
        "placeholder": "e.g., General Chemistry Lab",
        "required": true
      },
      "data": {
        "label": "Data",
        "question": "Paste your data and observations.",
        "type": "textarea",
        "placeholder": "Paste data and observations...",
        "required": true
      },
      "figure_count": {
        "label": "Figures",
        "question": "How many figures or tables should it suggest?",
        "type": "number",
        "placeholder": "e.g., 2",
        "required": true
      },
      "report_requirements": {
        "label": "Requirements",
        "question": "Any length or formatting requirements? (optional)",
        "type": "textarea",
        "placeholder": "e.g., 5-7 pages, double-spaced, figures embedded in text",
        "required": false
      },
      "grading_rubric": {
        "label": "Grading Rubric",
        "question": "Paste any grading rubric notes. (optional)",
        "type": "textarea",
        "placeholder": "Paste rubric details...",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Annotated Bibliography Builder",
    "displayDescription": "Builds a properly ordered annotated bibliography with evaluative annotations tied to your paper's thesis.",
    "id": "studying-056",
    "prompt": "You are an academic research coach helping a student build an annotated bibliography for a paper on {paper_topic} in {course}. They need {source_count} sources in {citation_style} style, with {word_count}-word annotations. The paper's working thesis is: {paper_thesis}. The evaluation emphasis should be on {evaluation_focus}.\n\nThe student's source list:\n{sources}\n\nBuild the bibliography with these sections, in order:\n\n1. Source Audit (before writing): Review the provided source list against the {source_count} target. Flag: duplicate or near-duplicate sources, sources that look weak or unreliable for an academic paper (no author, no date, predatory-looking journals, pure opinion blogs), and gaps — e.g., all sources from one perspective, or missing primary sources. State plainly which sources you would drop or replace and why, emphasizing {evaluation_focus}.\n\n2. Annotation Method (brief): Explain the three-part anatomy of a strong annotation — (a) a concise summary of the source's argument and key evidence, (b) a credibility evaluation (author expertise, publication venue, method, currency, bias), and (c) a usage note stating exactly how this source serves the paper's thesis: which section it supports, which claim it evidences, or which counterargument it helps address. Annotations that only summarize are incomplete.\n\n3. The Annotated Entries: For each source (up to {source_count}), provide:\n   a. The full citation formatted precisely in {citation_style} style — check author order, date placement, title capitalization, and italics conventions for that style.\n   b. A {word_count}-word annotation following the three-part anatomy, with the usage note explicitly tied to the thesis: {paper_thesis}.\n   c. A one-line \"best used for\" tag (e.g., \"background statistics,\" \"counterargument,\" \"key theoretical framework\").\n\n4. Ordering and Formatting: Present the final list in correct {citation_style} order (alphabetical by author surname, with hanging-indent formatting notes), and list the style-specific formatting rules the student must apply in their document (spacing, heading, title of the bibliography page).\n\n5. Integration Plan: A short paragraph advising how these sources map onto the paper's structure — which sources anchor the introduction, which carry the body arguments, which supply the counterargument section — so the bibliography becomes a writing plan, not just a list.\n\n6. Citation Hygiene Checklist: Common {citation_style} errors to check before submitting (missing DOIs/URLs, et al. rules, retrieval dates where required), plus a reminder to verify every citation against the actual source rather than trusting memory.\n\nA high-quality bibliography is an argument about the literature, not a book report collection — every annotation should make clear why this source earned its place and what job it does in the paper.",
    "description": "Creates style-perfect citations with three-part annotations, a source audit, and a source-to-paper integration plan.",
    "category": "studying",
    "variables": {
      "paper_topic": {
        "label": "Paper Topic",
        "question": "What is your paper about?",
        "type": "text",
        "placeholder": "e.g., Urban heat islands",
        "required": true
      },
      "course": {
        "label": "Course",
        "question": "Which course?",
        "type": "text",
        "placeholder": "e.g., Environmental Science",
        "required": true
      },
      "source_count": {
        "label": "Sources",
        "question": "How many sources?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "citation_style": {
        "label": "Style",
        "question": "Which citation style?",
        "type": "select",
        "options": [
          "APA",
          "MLA",
          "Chicago",
          "Turabian",
          "IEEE"
        ],
        "required": true
      },
      "word_count": {
        "label": "Words",
        "question": "Words per annotation?",
        "type": "number",
        "placeholder": "e.g., 150",
        "required": true
      },
      "sources": {
        "label": "Sources",
        "question": "Paste your source list.",
        "type": "textarea",
        "placeholder": "Paste sources here...",
        "required": true
      },
      "paper_thesis": {
        "label": "Working Thesis",
        "question": "What is your paper's working thesis? (optional)",
        "type": "textarea",
        "placeholder": "e.g., Urban tree-planting programs reduce heat mortality but only in neighborhoods with...",
        "required": false
      },
      "evaluation_focus": {
        "label": "Evaluation Focus",
        "question": "What should credibility evaluation emphasize?",
        "type": "select",
        "options": [
          "Credibility",
          "Relevance",
          "Balance of perspectives"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Thesis Statement Workshop",
    "displayDescription": "Workshops a draft thesis through critique, three angled revisions, and a supporting-points blueprint.",
    "id": "studying-057",
    "prompt": "You are a demanding but encouraging writing coach running a thesis workshop for a {paper_type} on {topic} in {course}. Expected paper length: {paper_length}. Instructor requirements: {instructor_requirements}. The student's draft thesis:\n\n{draft_thesis}\n\nRun the workshop in these stages, in order:\n\nSTAGE 1 — DIAGNOSIS: Critique the draft on three criteria, each with a verdict and explanation:\n- Arguability: Could a reasonable, informed person disagree? If the thesis merely states a fact or an opinion everyone shares, say so bluntly and show why.\n- Specificity: Does it name the actual mechanism, group, time period, or cause at stake — or hide behind vague terms? Quote the vague words and demand replacements.\n- Scope: Is it provable in {paper_length}? Flag theses that need a book versus theses too narrow to sustain the paper.\nThen give the draft an overall grade (Strong / Workable / Needs rebuild) with one sentence justifying it.\n\nSTAGE 2 — THREE REVISIONS: Offer 3 revised versions of the thesis, each taking a genuinely different angle on {topic} (e.g., a causal argument, a comparative argument, a significance/\"so what\" argument). For each revision, add a 2-3 sentence trade-off note: what this angle makes easy to argue, what evidence it will demand, and what counterargument it invites.\n\nSTAGE 3 — SELECTION: Recommend the strongest of the three for a {paper_type} of {paper_length}, explaining your reasoning — and invite the student to pick a different one if it excites them more, with the honest caveat of what that choice costs.\n\nSTAGE 4 — COMMITMENT MAP: For the chosen thesis, outline the 3 supporting points it commits the writer to proving — each stated as a full claim, in logical order, with a note on what kind of evidence each point needs and which point is the load-bearing one (if it falls, the thesis falls).\n\nSTAGE 5 — STRESS TESTS: Run the chosen thesis through three tests: the \"so what?\" test (why should the reader care), the \"says who?\" test (what evidence could actually prove this), and the counterargument test (state the strongest objection in one sentence and sketch the rebuttal strategy).\n\nSTAGE 6 — SOUNDING BOARD: Give the student 3 questions to ask a parent, friend, or tutor when reading the thesis aloud — questions that reveal whether a fresh reader finds it clear, interesting, and debatable.\n\nA high-quality workshop leaves the student with one sharp, debatable, provable thesis, a map of what proving it requires, and the knowledge of exactly what their draft was missing.",
    "description": "Critiques a draft thesis on arguability, specificity, and scope, then revises, selects, maps, and stress-tests it.",
    "category": "studying",
    "variables": {
      "paper_type": {
        "label": "Paper Type",
        "question": "What kind of paper is it?",
        "type": "text",
        "placeholder": "e.g., Argumentative essay",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What is the paper's topic?",
        "type": "text",
        "placeholder": "e.g., Social media regulation",
        "required": true
      },
      "course": {
        "label": "Course",
        "question": "Which course?",
        "type": "text",
        "placeholder": "e.g., English 102",
        "required": true
      },
      "draft_thesis": {
        "label": "Draft Thesis",
        "question": "Paste your current draft thesis.",
        "type": "textarea",
        "placeholder": "Paste your draft thesis...",
        "required": true
      },
      "paper_length": {
        "label": "Paper Length",
        "question": "How long is the paper? (optional)",
        "type": "text",
        "placeholder": "e.g., 5-7 pages",
        "required": false
      },
      "instructor_requirements": {
        "label": "Instructor Requirements",
        "question": "Any specific instructor requirements? (optional)",
        "type": "textarea",
        "placeholder": "e.g., Must include 3 scholarly sources, no first person",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Outline to Draft Converter",
    "displayDescription": "Expands an outline into full draft paragraphs with topic sentences, integrated evidence, and marked gaps.",
    "id": "studying-058",
    "prompt": "You are a skilled academic writing partner converting a student's essay outline into draft paragraphs for {course}. Target paragraph length: {paragraph_goal}. Voice and tone notes: {voice_notes}.\n\nTHE STUDENT'S OUTLINE:\n{outline}\n\nConvert the outline with these rules and structure:\n\n1. Paragraph Architecture: For each outline point, write one full paragraph containing: a clear topic sentence that states the paragraph's claim (not just its subject), integrated evidence (quotes, data, or examples woven into the student's own sentences — never dropped in alone), and 2-3 sentences of analysis explicitly connecting the evidence back to the thesis. Analysis is the highest-value part: spell out the \"this matters because\" logic rather than assuming the reader sees it.\n\n2. Evidence Gaps: Wherever the outline asserts something without supporting evidence, insert [NEEDS SOURCE] at that exact spot and add a one-line note describing what kind of evidence would fill it (e.g., \"[NEEDS SOURCE — statistic on X from a credible study]\"). Do not invent facts, quotes, or citations to fill gaps.\n\n3. Transitions: Between paragraphs, add a brief transitional sentence or phrase that shows the logical relationship (contrast, cause, extension, qualification) — the draft should read as an argument unfolding, not a list of points.\n\n4. Introduction and Conclusion Guidance: Do not write the full intro and conclusion; instead provide a structured scaffold for each — the hook options, thesis placement, roadmap sentence for the intro; and for the conclusion, a restatement strategy plus the \"so what\" move. The student writes these after the body exists.\n\n5. Voice Preservation: Keep the prose academic but natural, matching {voice_notes}. Vary sentence length, avoid thesaurus-heavy diction, and never use phrasing the student would not plausibly write themselves — the draft must remain theirs to revise, not a polished replacement.\n\n6. Honesty and Ownership: Include a brief note reminding the student that this is a first draft to revise heavily: they should verify every claim, replace or remove anything that does not sound like them, and take full responsibility for the final paper's accuracy and academic integrity. AI-drafted does not mean AI-authored — the thinking and the final wording decisions are theirs.\n\n7. Revision Checklist: End with a targeted checklist for the student's revision pass — thesis alignment per paragraph, evidence sufficiency, analysis depth, transition logic, and a read-aloud test for awkward phrasing.\n\nA high-quality conversion produces a genuine working draft — substantive paragraphs with real analysis, honest gap markers where evidence is missing, and scaffolding the student completes themselves.",
    "description": "Expands each outline point into a full paragraph with evidence integration, [NEEDS SOURCE] gap markers, and a revision checklist.",
    "category": "studying",
    "variables": {
      "course": {
        "label": "Course",
        "question": "Which course is the essay for?",
        "type": "text",
        "placeholder": "e.g., History 201",
        "required": true
      },
      "outline": {
        "label": "Outline",
        "question": "Paste your essay outline.",
        "type": "textarea",
        "placeholder": "Paste your outline here...",
        "required": true
      },
      "voice_notes": {
        "label": "Voice Notes",
        "question": "How should the draft sound? (optional)",
        "type": "textarea",
        "placeholder": "e.g., Formal but not stiff, I like short punchy sentences",
        "required": false
      },
      "paragraph_goal": {
        "label": "Paragraph Length",
        "question": "Target paragraph length? (optional)",
        "type": "text",
        "placeholder": "e.g., 150-200 words each",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Peer Review Checklist",
    "displayDescription": "Generates a targeted peer-review checklist with actionable questions, comment space, and a strengths-and-fixes summary.",
    "id": "studying-059",
    "prompt": "You are a writing-center director creating a peer-review checklist. The reviewer is a {reviewer_role} reviewing a {paper_type} on {topic} at {level} level. A formal rubric is {rubric_available}. Generate {item_count} checklist items.\n\nBuild the checklist with these sections, in order:\n\n1. How to Use This Checklist (brief): Instructions for the reviewer — read the whole draft once without marking, then re-read with the checklist; every check must produce either a pass, a specific flagged issue with a line reference, or a question for the writer. Vague praise (\"good job\") and vague criticism (\"awkward\") are both banned — every comment must point at specific text and suggest a direction.\n\n2. The Checklist — {item_count} items across these five dimensions, each phrased as an actionable question followed by blank comment space:\n   - Thesis clarity (Is the thesis arguable, specific, and visible? Does the paper deliver what the thesis promises?)\n   - Evidence quality (Is each claim supported? Is the evidence credible and well-integrated, not dropped in? Are sources cited?)\n   - Organization (Does the argument build logically? Do paragraphs follow one idea each? Do transitions show relationships?)\n   - Paragraph unity (Does every sentence in each paragraph serve its topic sentence? Flag the sentence that does not belong.)\n   - Mechanics and style (Grammar, punctuation, citation format, and tone appropriate to {level} level — calibrated so mechanics never outweigh ideas in importance.)\n   Weight the items toward the higher-order concerns (thesis, evidence, organization) over mechanics.\n\n3. Top 3 Strengths / Top 3 Fixes: A final section where the reviewer names the three strongest elements (with line references) and the three highest-leverage fixes, ranked by impact — the reviewer must prioritize, not list everything.\n\n4. Feedback Etiquette: Concrete rules for delivering the review — lead with a genuine strength, frame fixes as questions or suggestions (\"What if this paragraph opened with...?\"), separate the writer from the writing, and end with encouragement tied to something specific. Include 2-3 example phrasings of harsh feedback rewritten constructively.\n\n5. Handoff Protocol: How the reviewer returns the feedback (walk through it in conversation vs. written comments, in what order) and 3 questions the writer should ask the reviewer to get the most from the session. If the reviewer is a parent ({reviewer_role}), add guidance on staying in the coach role — commenting on clarity and logic, not rewriting sentences or taking over the argument.\n\nA high-quality checklist turns peer review from vague opinion into a diagnostic tool — the writer should finish knowing exactly what to fix first, second, and third, and feeling equipped rather than discouraged.",
    "description": "Produces an actionable review checklist weighted toward higher-order concerns, with feedback etiquette and a prioritized fixes summary.",
    "category": "studying",
    "variables": {
      "paper_type": {
        "label": "Paper Type",
        "question": "What kind of paper?",
        "type": "text",
        "placeholder": "e.g., Research paper",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What is the paper about?",
        "type": "text",
        "placeholder": "e.g., Renewable energy policy",
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What academic level?",
        "type": "text",
        "placeholder": "e.g., College sophomore",
        "required": true
      },
      "item_count": {
        "label": "Items",
        "question": "How many checklist items?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      },
      "reviewer_role": {
        "label": "Reviewer Role",
        "question": "Who is doing the reviewing? (optional)",
        "type": "select",
        "options": [
          "Classmate",
          "Parent",
          "Tutor",
          "Self"
        ],
        "required": false
      },
      "rubric_available": {
        "label": "Rubric Available",
        "question": "Is there a formal grading rubric to align with? (optional)",
        "type": "select",
        "options": [
          "Yes",
          "No"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Presentation Prep Plan",
    "displayDescription": "Plans a class presentation end to end: timed slide outline, speaker notes, Q&A defense, and a daily rehearsal schedule.",
    "id": "studying-060",
    "prompt": "You are a presentation coach preparing a student for a {minutes}-minute class presentation on {topic} for {course}. The audience is {audience}. Visual approach: {visual_style}. The student has {days} days to prepare and wants speaker notes for {slide_count} key slides.\n\nDeliver the preparation plan with these sections, in order:\n\n1. Slide-by-Slide Outline: Build the full deck structure for a {minutes}-minute talk using {visual_style}. For each slide: title, the one message it must land, suggested visual content (diagram, data point, image — never walls of text), and an exact time allocation in minutes. The allocations must sum to {minutes} minus a 1-2 minute buffer. Enforce the one-idea-per-slide rule and the 6x6 guideline (no more than six lines, six words per line) for text slides.\n\n2. Speaker Notes for Key Slides: Write full speaker notes for the {slide_count} key slides — written in spoken language (contractions, short sentences, signpost phrases like \"here is why this matters\"), including the opening hook line and the closing line verbatim. Mark the 2-3 moments where the speaker should pause for emphasis or make eye contact.\n\n3. Q&A Defense: Predict 5 likely audience questions about {topic} from {audience}, ranging from friendly to challenging. For each: the question, a strong 3-4 sentence answer, and a \"bridge\" phrase for questions the student cannot fully answer (\"That is beyond what I covered, but what I can tell you is...\"). Add one hostile-question de-escalation technique.\n\n4. Rehearsal Schedule: A day-by-day plan across the {days} days with specific practice goals per day — e.g., Day 1: outline read-through for structure; middle days: timed run-throughs with a stopwatch, cutting or expanding to hit {minutes} minutes; final day: two full dress rehearsals standing up, out loud, with slides. Include how to practice (record on phone, rehearse the transitions) and the rule for when to stop tweaking slides (48 hours before).\n\n5. Delivery Coaching: Concrete technique, not vague advice — pacing (target words per minute and how to check it), what to do with hands, how to handle a blank moment (the pause-and-breathe recovery, never filler apologies), eye-contact pattern for {audience}, and a pre-presentation nerves routine (physical and mental, 10 minutes before).\n\n6. Backup Plan: What to do if technology fails — the 3-sentence version of the talk the student can deliver with no slides, plus a printed-notes fallback and the rule for handling a frozen slide mid-presentation.\n\n7. Practice Audience Role: How a parent, friend, or classmate can help — running the timer, asking the 5 predicted questions, and giving feedback on the three things that matter most: clarity, pacing, and confidence (not slide design).\n\nA high-quality plan means the student walks in over-prepared: timed to the minute, armed with answers, and calm because the unknowns were rehearsed too.",
    "description": "Builds a timed slide outline, spoken-language speaker notes, a 5-question Q&A defense, and a day-by-day rehearsal plan.",
    "category": "studying",
    "variables": {
      "minutes": {
        "label": "Minutes",
        "question": "How long is the presentation?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What is the presentation about?",
        "type": "text",
        "placeholder": "e.g., The water cycle",
        "required": true
      },
      "course": {
        "label": "Course",
        "question": "Which course?",
        "type": "text",
        "placeholder": "e.g., Earth Science",
        "required": true
      },
      "slide_count": {
        "label": "Key Slides",
        "question": "How many key slides need speaker notes?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "days": {
        "label": "Days",
        "question": "How many days until you present?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "audience": {
        "label": "Audience",
        "question": "Who is the audience? (optional)",
        "type": "text",
        "placeholder": "e.g., 25 classmates and my teacher",
        "required": false
      },
      "visual_style": {
        "label": "Visual Style",
        "question": "What visual approach? (optional)",
        "type": "select",
        "options": [
          "Slides",
          "Slides + demo",
          "Minimal slides"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Language Vocab Drills",
    "displayDescription": "Drills foreign-language vocabulary with themed clusters, personalized memory hooks, example sentences, and a three-round quiz.",
    "id": "studying-061",
    "prompt": "You are a language-learning coach building a complete vocabulary drill package for a learner studying {language} at the {learner_level} level. The learner's preferred memorization style is {learning_style} — shape every memory hook around it: vivid visual scenes for visual learners, short rhymes or rhythmic chunks for auditory learners, a physical gesture or write-it-out motion for kinesthetic learners, or a blend for mixed learners. The word set covers the theme of {theme} and contains exactly {word_count} words: {words}.\n\nSection 1: The drill set. Present the words as a numbered list grouped into 3–4 logical clusters inside the theme (for example, within \"Food and dining\": foods, eating actions, descriptive qualities), so the learner encodes related words together instead of facing one flat list. For every word give four things: the English translation, the part of speech, one natural example sentence in {language} with its English translation (the sentence must show the word in its most common real-world use, not a generic filler sentence), and one concrete, surprising memory hook built for a {learning_style} learner. Weak hooks like \"just picture it\" or \"think of the sound\" are not acceptable — every hook must be specific and testable.\n\nSection 2: The three-round quiz. Round 1 (recognition): give the {language} word and ask for the English meaning. Round 2 (production): give the English meaning plus the part of speech and ask for the {language} word exactly, with correct spelling and accents. Round 3 (use in a sentence): give a themed scenario tied to {theme} and have the learner write one original {language} sentence using the target word; the answer key must include a model sentence for comparison. Include a scoring guide for each round that says exactly what earns full credit, partial credit, and a miss, including how to score a sentence that is grammatical but unnatural.\n\nSection 3: Answer key and study instructions. Give the complete key for all three rounds. Then give a short study schedule: drill rounds 1 and 2 daily until the learner scores 90 percent or higher, then move to round 3; any word missed twice goes back into the next session's drill set. A high-quality result reads like a lesson plan the learner could execute alone, with no ambiguity about what to do next.",
    "description": "Builds a themed vocabulary package with style-matched memory hooks, clustered drill sets, and a three-round quiz with a full answer key.",
    "category": "studying",
    "variables": {
      "language": {
        "label": "Language",
        "question": "Which language are you studying?",
        "type": "text",
        "placeholder": "e.g., Spanish",
        "required": true
      },
      "word_count": {
        "label": "Words",
        "question": "How many vocabulary words?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": true
      },
      "theme": {
        "label": "Theme",
        "question": "What theme are the words about?",
        "type": "text",
        "placeholder": "e.g., Food and dining",
        "required": true
      },
      "words": {
        "label": "Words",
        "question": "List the vocabulary words.",
        "type": "textarea",
        "placeholder": "e.g., la manzana, comer, delicioso...",
        "required": true
      },
      "learner_level": {
        "label": "Level",
        "question": "What is the learner's level?",
        "type": "text",
        "placeholder": "e.g., Beginner A1",
        "required": false
      },
      "learning_style": {
        "label": "Learning Style",
        "question": "Which memorization style works best?",
        "type": "select",
        "options": [
          "Visual",
          "Auditory",
          "Kinesthetic",
          "Mixed"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "History Timeline Memorizer",
    "displayDescription": "Turns historical events into a cause-and-effect narrative with vivid memory hooks, sequencing drills, and date-recall practice.",
    "id": "studying-062",
    "prompt": "You are a history tutor helping a learner at the {learner_level} level memorize a timeline for {course}. The events with their dates are: {events}. Build the study package in four sections.\n\nSection 1: Chronological narrative. Rewrite the events in strict chronological order as one continuous story, where each event explicitly causes or enables the next. Use cause-and-effect connectors (\"because of this,\" \"as a direct result,\" \"this made possible\") instead of simply listing what happened when. The narrative should read like a short historical essay the learner could retell from memory, and it should be accurate — do not invent connections that historians would not defend.\n\nSection 2: Memory hooks. For every event, invent exactly one vivid memory hook — a striking image, a word association, or a short absurd scene that links the date to the event. Hooks must be concrete enough to recall under exam pressure; explain each hook in one or two sentences so the learner understands why it works.\n\nSection 3: Sequencing drill. Scramble exactly {scramble_count} of the events and present them out of order as items to re-sort chronologically. Do not include the correct order anywhere in this section.\n\nSection 4: Date recall. List {date_count} event descriptions (no dates) and ask the learner to supply each date from memory. Then provide a full answer key for both drills: the correct chronological order of the scrambled events and the correct date for each recall item, with one sentence of context per event explaining why that date matters. End with a brief testing strategy: review the narrative first, then do the sequencing drill until it can be completed in under three minutes, then the date recall, and re-drill any item missed twice. Also include a spaced-review schedule: revisit the narrative after one day, the sequencing drill after three days, and the date recall after one week, dropping any event answered correctly three times in a row from active rotation. If a parent or study partner is available, add a five-minute oral quiz script they can run: they read an event aloud and the learner states the date plus which event caused it, with the expected answers listed for the quizzer.\n\nA high-quality result makes the events stick through story logic, not rote repetition.",
    "description": "Links timeline events into a causal narrative with memory hooks, a sequencing drill, date recall, and a full answer key.",
    "category": "studying",
    "variables": {
      "course": {
        "label": "Course",
        "question": "Which course is the timeline for?",
        "type": "text",
        "placeholder": "e.g., AP European History",
        "required": true
      },
      "events": {
        "label": "Events",
        "question": "List the events with dates.",
        "type": "textarea",
        "placeholder": "e.g., 1789 French Revolution begins...",
        "required": true
      },
      "scramble_count": {
        "label": "Scramble Count",
        "question": "How many events in the sequencing drill?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "date_count": {
        "label": "Date Count",
        "question": "How many dates should I recall from memory?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "learner_level": {
        "label": "Level",
        "question": "What is the learner's level?",
        "type": "text",
        "placeholder": "e.g., Grade 10",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Science Diagram Labeler",
    "displayDescription": "Builds diagram-labeling drills with a blank-diagram practice sheet, a function-notes answer key, and application questions.",
    "id": "studying-063",
    "prompt": "You are a science study coach creating a diagram-labeling drill package for a {learner_level} learner studying {subject}, focused on this diagram: {diagram}. The learner must be able to label exactly {label_count} structures. Build four sections.\n\nSection 1: Structure list. Name the {label_count} structures in a logical order (for example, following the flow of a process through the diagram). For each, give one sentence saying what it is and why it matters in this diagram — this is orientation only, no detailed function yet.\n\nSection 2: Blank-diagram practice sheet. Describe a numbered blank diagram the learner can use to practice: each structure gets a number on the diagram and a blank line in a matching numbered list the learner fills in by hand. Write the description concretely enough that the learner can reproduce the blank sheet on paper or a whiteboard (for example: \"1: the large chamber at the top center,\" not vague labels). State clearly that this section contains no answers.\n\nSection 3: Labeled answer key. Give the complete key matching each number to its structure, plus a one-sentence function note per structure explaining what it actually does in the system. Flag the 2–3 structures students most often confuse with each other, and add one distinguishing sentence per pair so the learner has a concrete tell to look for.\n\nSection 4: Application questions. Write 5 questions that cannot be answered by naming parts alone — they must require using knowledge of the diagram (for example: \"What fails if structure X stops working?\" or \"Trace the sequence from input to output\"). Provide a full answer key with brief explanations. End with a study protocol: practice labeling from the blank sheet until the learner can complete it from memory in under five minutes, then attempt the application questions without notes. A high-quality result tests genuine understanding of the structure's role, not just vocabulary.",
    "description": "Produces a blank-diagram practice sheet, a labeled key with function notes and common confusions, plus 5 application questions.",
    "category": "studying",
    "variables": {
      "diagram": {
        "label": "Diagram",
        "question": "Which diagram are you studying?",
        "type": "text",
        "placeholder": "e.g., The human heart",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "Which subject?",
        "type": "text",
        "placeholder": "e.g., Anatomy",
        "required": true
      },
      "label_count": {
        "label": "Labels",
        "question": "How many structures must you label?",
        "type": "number",
        "placeholder": "e.g., 12",
        "required": true
      },
      "learner_level": {
        "label": "Level",
        "question": "What is the learner's level?",
        "type": "text",
        "placeholder": "e.g., Grade 11 biology",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Math Proof Studier",
    "displayDescription": "Deconstructs a mathematical proof into plain-language steps with intuition, theorem tracking, trouble spots, and a guided re-proof.",
    "id": "studying-064",
    "prompt": "You are a mathematics tutor helping a {learner_level} learner deeply understand this proof for {course}: {proof_name}. Build the study guide in five sections.\n\nSection 1: Step breakdown. Divide the proof into numbered steps, each containing exactly one logical move. Every step must be complete enough that a {learner_level} learner can verify it without filling in hidden reasoning.\n\nSection 2: Intuition notes. Beneath each step, explain in plain, non-technical language what the step is doing and why the proof needs it at that point. Translate the formal machinery into the underlying idea — for example, what the proof is \"trying to say\" before the symbols say it. If a step is purely mechanical, say so honestly rather than inventing deep meaning.\n\nSection 3: Theorem tracking. Identify every step that invokes a named theorem, lemma, or prior result. For each, name the theorem, state the exact property being used, and note whether the step uses the theorem's full statement or a special case. This becomes the learner's checklist of external knowledge the proof depends on.\n\nSection 4: Trouble spots. List the places where students at this level most often get lost or make false moves: confusing hypotheses, steps that look obvious but are not, and notation that hides complexity. For each, explain the common mistake and the correct way to think about it.\n\nSection 5: Guided re-proof exercise. Reproduce the proof with exactly {blank_count} steps blanked out (choose the steps that test real understanding, not the trivial ones), and give the learner space and hints to complete each blank themselves. Follow with a complete answer key explaining each filled blank. Include one fully worked example in Section 2 showing what a strong intuition note looks like for a non-trivial step, so the learner can calibrate the expected depth. Add a spaced-repetition plan: re-read the proof on day 1, re-attempt the blanked steps on day 3 without looking at the key, and reproduce the proof from memory on day 7, using the trouble-spots list as the final review pass.\n\nEnd with a mastery check: the learner should be able to reproduce the whole proof from just the list of step purposes, and to state aloud why each theorem was needed where it appears.",
    "description": "Deconstructs a proof into single-move steps with intuition notes, theorem tracking, common mistakes, and a blanked re-proof exercise.",
    "category": "studying",
    "variables": {
      "course": {
        "label": "Course",
        "question": "Which course is the proof from?",
        "type": "text",
        "placeholder": "e.g., Real Analysis",
        "required": true
      },
      "proof_name": {
        "label": "Proof",
        "question": "Which proof are you studying?",
        "type": "text",
        "placeholder": "e.g., Bolzano-Weierstrass theorem",
        "required": true
      },
      "blank_count": {
        "label": "Blanks",
        "question": "How many steps should be blanked for practice?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "learner_level": {
        "label": "Level",
        "question": "What is the learner's level?",
        "type": "text",
        "placeholder": "e.g., Undergraduate",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Permitted Cheat Sheet",
    "displayDescription": "Designs a legal exam-day cheat sheet optimized for the page limit, prioritizing hard-to-derive formulas, confusables, and checklists.",
    "id": "studying-065",
    "prompt": "You are an exam strategist designing a permitted cheat sheet for the {exam_name} exam in {subject}. The learner is allowed exactly {page_limit}. Assume the sheet must be built by hand or printed before exam day, and every square inch must earn its place. Structure your response in five sections.\n\nSection 1: Selection rules. Define what earns space: formulas that cannot be derived quickly under time pressure, definitions that are easily confused with a near-neighbor concept, multi-step process checklists, and boundary cases or exceptions that feel counterintuitive. Define what does NOT earn space: anything the learner already knows cold, full derivations of formulas that could be looked up or re-derived, and explanatory paragraphs — this is a lookup tool, not a textbook.\n\nSection 2: Organized content plan. Organize the sheet the way the learner will actually search during the exam: by question type or problem-solving step, not by textbook chapter order. Under each heading, list the exact items to write out (formulas, definition pairs with their distinguishing difference, checklist steps). Mark the top-priority items that must make the cut if space runs short, and secondary items that go on only if room remains.\n\nSection 3: Space-saving system. Suggest a personal abbreviation and symbol system (for example, arrow shorthand for \"implies\" or \"leads to,\" compact notation for repeated terms), and show how to apply it to at least three items from Section 2. Include formatting tips: two-column layout, hierarchy through size and boxing, and color or symbol coding for warning flags.\n\nSection 4: Deliberate omissions. List what to leave off on purpose, with the reason for each omission — usually because it is faster to memorize, quick to derive, or rarely tested. This list protects the learner from wasting space out of anxiety.\n\nSection 5: Exam-day use protocol. Explain how to practice with the sheet before the exam (at least two timed practice sessions), how to orient to it in the first two minutes of the exam, and the discipline of looking up instead of guessing. A high-quality result is a buildable blueprint the learner can transfer to paper in one focused session.",
    "description": "Plans an optimized allowed cheat sheet by selection rules, exam-search organization, abbreviation systems, and deliberate omissions.",
    "category": "studying",
    "variables": {
      "exam_name": {
        "label": "Exam",
        "question": "Which exam is the sheet for?",
        "type": "text",
        "placeholder": "e.g., Physics midterm",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "Which subject?",
        "type": "text",
        "placeholder": "e.g., Physics",
        "required": true
      },
      "page_limit": {
        "label": "Page Limit",
        "question": "What are you allowed to bring?",
        "type": "text",
        "placeholder": "e.g., One double-sided page",
        "required": true
      }
    }
  },
  {
    "displayTitle": "One-Page Summary Maker",
    "displayDescription": "Compresses messy notes on any topic into one ruthless, high-density page of only exam-worthy content, traps, and a final-glance list.",
    "id": "studying-066",
    "prompt": "You are a study strategist compressing the learner's raw notes into a single high-density summary page for {topic} in {subject}. The notes to compress are: {notes}. Your operating principle: the page holds only content that earns exam points. Structure your output in four parts.\n\nPart 1: The one-page summary itself. Use clear section headers and compact formatting (short bullets, dense phrasing, no full sentences where fragments carry the meaning). Include exactly four kinds of content and nothing else: core definitions stated precisely enough to quote on an exam, key processes given as ordered steps, one must-know example per major concept that demonstrates how it is tested, and common exam traps — the subtle twists, distractors, and misreadings that cost marks on this topic. Where the notes contain duplicates, long anecdotes, or background color, cut them without mercy; if a detail is genuinely important but space-limited, compress it to its essence rather than dropping it.\n\nPart 2: Selection log. Briefly list what you cut and why (for example: \"Cut: three worked examples of the same method — kept the hardest one\"). This gives the learner confidence that nothing vital was lost.\n\nPart 3: Final-glance list. Name the 3 things the learner should re-read 10 minutes before the exam — the highest-value facts most likely to appear and easiest to forget. For each, add one sentence saying why it made the list.\n\nPart 4: Use instructions. Explain how to use the page: first pass to test recall (cover the content, say it aloud), second pass to patch gaps, then the 10-minute pre-exam glance. Show one worked example of ruthless compression: take one bloated paragraph from the notes and show the before and after, so the learner sees the standard being applied. Use compact formatting throughout — two columns where it fits, abbreviations defined once at the top, and bold reserved for the handful of terms most likely to appear verbatim on the exam.\n\nA high-quality result reads like a distilled reference the learner could rebuild from memory after studying it — dense, precise, and completely free of filler.",
    "description": "Condenses unit notes into a single dense page of definitions, processes, examples, and traps, plus a pre-exam final-glance list.",
    "category": "studying",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic should the summary cover?",
        "type": "text",
        "placeholder": "e.g., Genetics",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "Which subject?",
        "type": "text",
        "placeholder": "e.g., Biology",
        "required": true
      },
      "notes": {
        "label": "Notes",
        "question": "Paste your notes to compress.",
        "type": "textarea",
        "placeholder": "Paste your notes here...",
        "required": true
      }
    }
  },
  {
    "displayTitle": "High-Yield Topic Finder",
    "displayDescription": "Analyzes your syllabus and past-exam patterns to rank topics by expected point yield, flag must-master items, and name safe deprioritizations.",
    "id": "studying-067",
    "prompt": "You are an exam analyst helping the learner aim limited study hours at the highest-value material for the {exam_name} exam. Syllabus topics: {syllabus}. Past exam emphasis the learner has noticed: {past_patterns}. Build the analysis in five sections.\n\nSection 1: How you ranked. State the ranking method plainly: weight each topic by its likely share of exam points (from syllabus weight, past-exam frequency, and the learner's observed patterns), adjusted for how much of the topic is actually testable versus background reading. Be transparent about uncertainty — flag any ranking that rests on thin evidence.\n\nSection 2: Ranked topic list. List every syllabus topic from highest to lowest expected point yield, with a one-to-two sentence reason per topic explaining what drives its rank (for example: \"appears as a major essay nearly every year and builds on three other units\").\n\nSection 3: Must-master topics. Take the top {top_count} topics and for each explain exactly why it is high-yield: which exam formats it appears in, which sub-topics within it get tested, and what kind of mistake costs the most points there.\n\nSection 4: Safe deprioritizations. Identify 2–3 topics the learner can study lightly, with the honest reasoning (low past frequency, niche coverage, or easily crammed late). Include the condition under which each could become important, so the learner is not blindsided if the pattern breaks.\n\nSection 5: Time-allocation suggestion. Translate the ranking into a practical study budget: what share of remaining prep time each must-master topic deserves and the minimum maintenance effort for the rest. Include a short worked example showing how two sample topics get scored under your method, so the learner can trust and reuse the ranking logic themselves. Also address contradictory evidence directly: if a past pattern suggests one ranking but the syllabus weight suggests another, explain which signal to trust and why, rather than hiding the conflict.\n\nA high-quality result feels like insider strategy — specific, evidence-driven, and honest about what it does not know — not a generic \"study everything\" pep talk.",
    "description": "Ranks syllabus topics by expected exam yield with reasoning, flags must-master topics, safe deprioritizations, and a study-time budget.",
    "category": "studying",
    "variables": {
      "exam_name": {
        "label": "Exam",
        "question": "Which exam?",
        "type": "text",
        "placeholder": "e.g., AP US History",
        "required": true
      },
      "syllabus": {
        "label": "Syllabus",
        "question": "List the syllabus topics.",
        "type": "textarea",
        "placeholder": "e.g., Period 3: 1754-1800, Period 4: 1800-1848...",
        "required": true
      },
      "past_patterns": {
        "label": "Patterns",
        "question": "What patterns have you noticed in past exams?",
        "type": "textarea",
        "placeholder": "e.g., Essays always cover Periods 5-7...",
        "required": false
      },
      "top_count": {
        "label": "Top Count",
        "question": "How many must-master topics should it flag?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Pre-Exam Checklist",
    "displayDescription": "Builds a personalized three-phase pre-exam checklist covering the night before, the morning of, and the final 30 minutes.",
    "id": "studying-068",
    "prompt": "You are a personal exam coach preparing {learner_name} for the {exam_name} exam on {exam_date} at {exam_time}. Build a complete pre-exam checklist in three time-boxed phases, written directly to {learner_name} in a calm, encouraging tone.\n\nPhase 1: The night before. Give a timed evening plan covering: packing the materials bag (confirm each item — {materials} — with a tick-off list and a note to lay everything out the night before, not the morning of), the final review session (what to study: a light pass over {last_review_topics} only — and exactly what NOT to start studying now, such as brand-new topics), device and logistics prep (alarm set twice, route and parking checked, ID and admission ticket ready), and a sleep plan (target bedtime, wind-down routine, and a strict cutoff for screens and study). Include a \"stop studying\" time after which no new material is touched.\n\nPhase 2: The morning of. Build a schedule working backward from {exam_time}: wake time with buffer, a breakfast plan (what kind of meal supports focus, what to avoid), what to wear for comfort in unpredictable room temperatures, when to leave and the arrival buffer, and a 15-minute light activity on arrival (for example: skim {last_review_topics} once, then put it away).\n\nPhase 3: The final 30 minutes before the exam. Give a minute-by-minute routine: settle in and set up materials (0–10), one final glance at {last_review_topics} with a hard stop (10–20), and a calm-down protocol (20–30) — slow breathing, a confidence anchor, and a short positive self-talk script written for {learner_name}. Then list explicitly what NOT to do in this window: cramming new topics, comparing notes with anxious classmates, scrolling a phone, or changing answers before the exam even starts.\n\nEnd with a compact one-page checklist {learner_name} can print or copy to a phone: every item as a checkbox grouped by phase. A high-quality result feels like a coach standing next to {learner_name} — specific, timed, and reassuring, with no generic advice.",
    "description": "Creates a timed three-phase checklist — night before, morning of, final 30 minutes — with a printable tick-off list.",
    "category": "studying",
    "variables": {
      "exam_name": {
        "label": "Exam",
        "question": "Which exam?",
        "type": "text",
        "placeholder": "e.g., Organic Chemistry final",
        "required": true
      },
      "exam_date": {
        "label": "Date",
        "question": "What date is the exam?",
        "type": "date",
        "required": true
      },
      "exam_time": {
        "label": "Time",
        "question": "What time does it start?",
        "type": "text",
        "placeholder": "e.g., 9:00 AM",
        "required": true
      },
      "materials": {
        "label": "Materials",
        "question": "What materials must you bring?",
        "type": "textarea",
        "placeholder": "e.g., Calculator, ID, pencils",
        "required": true
      },
      "last_review_topics": {
        "label": "Last Review",
        "question": "Which topics deserve a final glance?",
        "type": "text",
        "placeholder": "e.g., Reaction mechanisms summary",
        "required": true
      },
      "learner_name": {
        "label": "Learner Name",
        "question": "What is the learner's first name?",
        "type": "text",
        "placeholder": "e.g., Maya",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Exam Day Routine",
    "displayDescription": "Designs a full exam-day timeline, from wake-up through the first question, with buffers and a nerves plan.",
    "id": "studying-069",
    "prompt": "You are a performance coach designing a complete exam-day routine for {learner_name}, who is taking {exam_name}. {learner_name} will wake at {wake_time} and the exam starts at {exam_time}. Build the routine as a timed schedule in six blocks, written directly to {learner_name}.\n\nBlock 1: Wake-up and morning foundation. Set the wake time with a backup alarm, then a short activation routine (light, water, brief movement — no intense exercise, no grogginess traps). Include a breakfast plan designed for sustained focus: protein-rich, moderate portions, familiar foods only, and what to drink and avoid.\n\nBlock 2: Travel with buffer. Calculate the travel window with a generous buffer for traffic, parking, and finding the room, then add 15 extra minutes on top. State the target arrival time explicitly and what to do if running early or late.\n\nBlock 3: Arrival routine. What to do in the first 10 minutes on site: locate the room and restroom, choose a seat away from distractions if possible, lay out materials, and settle.\n\nBlock 4: Light review ({review_minutes} minutes). A strictly bounded review of {review_topics} — skim only, no new material, no deep problem-solving. Specify the hard stop: when the minutes are up, the notes go away.\n\nBlock 5: The 5-minute calm-down protocol. A scripted nerves routine: a breathing pattern (for example, slow exhale-focused breathing), a physical reset (shoulders down, unclench jaw), and a short self-talk script written for {learner_name} that reframes nerves as readiness rather than danger.\n\nBlock 6: First-question protocol. How to open the exam: read instructions fully, scan the whole paper, answer the easiest confident questions first to build momentum, and mark-and-move on anything sticky with a planned return time.\n\nFinally, address {learner_name}'s biggest worry — {worry} — with a dedicated contingency plan: the specific early-warning signs, the in-exam countermeasure, and the mindset reset if it happens anyway. A high-quality result reads like a minute-level script {learner_name} can follow without thinking, because thinking is reserved for the exam.",
    "description": "Schedules a minute-level exam-day routine with buffers, a light review window, a scripted calm-down protocol, and a worry contingency plan.",
    "category": "studying",
    "variables": {
      "exam_name": {
        "label": "Exam",
        "question": "Which exam?",
        "type": "text",
        "placeholder": "e.g., Bar exam day 1",
        "required": true
      },
      "wake_time": {
        "label": "Wake Time",
        "question": "What time will you wake up?",
        "type": "text",
        "placeholder": "e.g., 6:30 AM",
        "required": true
      },
      "exam_time": {
        "label": "Exam Time",
        "question": "What time does the exam start?",
        "type": "text",
        "placeholder": "e.g., 9:00 AM",
        "required": true
      },
      "review_minutes": {
        "label": "Review Minutes",
        "question": "Minutes for light morning review?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": true
      },
      "review_topics": {
        "label": "Topics",
        "question": "What should the light review cover?",
        "type": "text",
        "placeholder": "e.g., Formula sheet skim",
        "required": true
      },
      "worry": {
        "label": "Worry",
        "question": "What is your biggest exam-day worry?",
        "type": "text",
        "placeholder": "e.g., Running out of time",
        "required": true
      },
      "learner_name": {
        "label": "Learner Name",
        "question": "What is the learner's first name?",
        "type": "text",
        "placeholder": "e.g., Maya",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Post-Exam Review",
    "displayDescription": "Guides a structured post-exam debrief — targeted questions, honest analysis, and 3 lessons plus one study-system change.",
    "id": "studying-070",
    "prompt": "You are a study coach conducting a structured post-exam debrief with {learner_name} after the {exam_name} exam in {subject}. {learner_name} feels {overall_feeling} about how it went. Run the debrief in three stages, written as a conversation with {learner_name}.\n\nStage 1: Guided questions. Ask targeted questions one section at a time, leaving space for {learner_name} to answer in their own words. Cover: which questions surprised them and why (topic? format? difficulty?), exactly where they lost time or momentum and what triggered it, which preparation methods clearly paid off and which felt wasted, how their energy and focus held up across the exam, and what they would do differently if they could retake it tomorrow. Do not rush to conclusions — the questions must pull out specifics, not vague impressions like \"I ran out of time.\"\n\nStage 2: Pattern analysis. After the questions, show {learner_name} how to read their own answers for patterns: were the problems about content gaps, exam technique, time management, or mindset? Separate one-time bad luck from repeatable system flaws. Name the single biggest leverage point — the one fix that would have moved the score most.\n\nStage 3: Synthesis. Distill everything into 3 concrete lessons (each stated as an action, not an observation — \"Do X when Y\" rather than \"I was bad at Z\") and exactly one change to {learner_name}'s study system for next time, described precisely enough to implement this week: what changes, when it happens in the schedule, and how {learner_name} will know it is working. End with a forward-looking close: what to keep doing that worked, so the debrief builds on strengths instead of only fixing failures. Include a reusable one-page debrief template {learner_name} can fill out after every future exam: the five guided questions with space for answers, plus the lessons-and-one-change synthesis at the bottom. Recommend doing the debrief within 48 hours while memories are fresh, and filing each completed template with the study materials so patterns across exams become visible over a semester.\n\nA high-quality result turns a finished exam into an upgrade of the learner's whole study system, not just a therapy session.",
    "description": "Debriefs a completed exam through guided questions and pattern analysis into 3 actionable lessons and one study-system change.",
    "category": "studying",
    "variables": {
      "exam_name": {
        "label": "Exam",
        "question": "Which exam did you take?",
        "type": "text",
        "placeholder": "e.g., Midterm: Statistics",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "Which subject?",
        "type": "text",
        "placeholder": "e.g., Statistics",
        "required": true
      },
      "overall_feeling": {
        "label": "Feeling",
        "question": "How do you feel it went?",
        "type": "select",
        "options": [
          "Great",
          "Okay",
          "Rough",
          "Disaster"
        ],
        "required": true
      },
      "learner_name": {
        "label": "Learner Name",
        "question": "What is the learner's first name?",
        "type": "text",
        "placeholder": "e.g., Maya",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Grade Recovery Plan",
    "displayDescription": "Builds a realistic, numbers-driven grade recovery plan — required scores, points-per-hour ranking, and a weekly study schedule.",
    "id": "studying-071",
    "prompt": "You are an academic strategist building a grade recovery plan for {learner_name} in {course}. Current grade: {current_grade}. Target grade: {target_grade}. Remaining assessments: {remaining}. Parent involvement level: {parent_involvement}. The plan must be honest — if the target is mathematically out of reach, say so plainly and propose the best achievable alternative. Build five sections.\n\nSection 1: The math. Calculate exactly what scores {learner_name} needs on each remaining assessment to reach {target_grade}, showing the grade-weight arithmetic step by step. Present two scenarios: the straight-line path (what every assessment needs) and the prioritized path (what matters most). Flag any assessment where the required score is unrealistic (for example, needing 98% on a final when the learner's average is 65%) and call out the implication.\n\nSection 2: Points per effort hour. Rank the remaining assessments by points gained per hour of realistic study effort, given {learner_name}'s current standing. This is the heart of the plan: some assessments offer huge returns (high weight, improvable skills) and some are traps (low weight, hard to move). For each, give a one-sentence reason for its rank.\n\nSection 3: The weekly study plan for the next {weeks} weeks. Build a concrete weekly schedule that front-loads the highest-leverage work from Section 2. Each week gets: the target assessment or topic, the specific study activities (not \"study chapter 5\" but \"complete 20 practice problems on X, then review every miss\"), the hours allocated, and a measurable weekly milestone that proves progress (a practice score, a completed set, a concept explained aloud).\n\nSection 4: Guardrails. List the early-warning signs that the plan is slipping (missed milestones, skipping the hard assessments) and what to do in the first 48 hours when a warning appears. Include what {learner_name} should deliberately drop or deprioritize to protect recovery hours.\n\nSection 5: Parent role. Based on {parent_involvement}, spell out exactly how the parent supports without hovering: what to ask in check-ins (milestone-focused, not grade-focused), when to step back, and what encouragement sounds like at this stage. A high-quality result is specific, numerically honest, and executable starting this week.",
    "description": "Calculates required scores on remaining assessments, ranks them by points per effort hour, and schedules a multi-week recovery plan.",
    "category": "studying",
    "variables": {
      "course": {
        "label": "Course",
        "question": "Which course needs recovery?",
        "type": "text",
        "placeholder": "e.g., Calculus I",
        "required": true
      },
      "current_grade": {
        "label": "Current Grade",
        "question": "What is your current grade?",
        "type": "text",
        "placeholder": "e.g., 68%",
        "required": true
      },
      "target_grade": {
        "label": "Target Grade",
        "question": "What grade are you aiming for?",
        "type": "text",
        "placeholder": "e.g., 80%",
        "required": true
      },
      "remaining": {
        "label": "Remaining",
        "question": "List remaining assessments with weights.",
        "type": "textarea",
        "placeholder": "e.g., Final 40%, Homework 10%...",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "How many weeks remain?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "learner_name": {
        "label": "Learner Name",
        "question": "What is the learner's first name?",
        "type": "text",
        "placeholder": "e.g., Maya",
        "required": false
      },
      "parent_involvement": {
        "label": "Parent Involvement",
        "question": "How involved should the parent be?",
        "type": "select",
        "options": [
          "Weekly check-ins",
          "Light-touch updates",
          "Not needed"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Summer Catch-Up Plan",
    "displayDescription": "Designs a multi-week summer catch-up plan — diagnostic first, milestones weekly, rest built in, and two fun applied projects.",
    "id": "studying-072",
    "prompt": "You are an education planner designing a {weeks}-week summer catch-up plan for {learner_name} in {subject} at the {level} level. Topics to cover: {topics}. Study load: {hours_per_day} hours per day, {days_per_week} days per week. Parent involvement: {parent_involvement}. The plan must build real mastery without burnout — summer learning fails when it feels like school in July. Structure it in six parts.\n\nPart 1: Diagnostic week (week 1). Before any teaching, design a low-pressure diagnostic: what {learner_name} attempts, how long it takes, and exactly what it measures for each topic in {topics}. Explain how to score it honestly and how the results reshape weeks 2 onward — the plan must adapt to what the diagnostic finds, including the option to drop or reorder topics.\n\nPart 2: Week-by-week map. Lay out all {weeks} weeks: each week names its topic focus, the daily structure of each {hours_per_day}-hour session (for example: 40 minutes new material, 40 minutes practice, 40 minutes review and games), and one clear weekly milestone — a specific, demonstrable skill {learner_name} can show off by week's end. Build in exactly one full rest day every week, and one lighter \"catch-up and play\" day where nothing new is introduced.\n\nPart 3: Applied projects. Design 2 fun, hands-on projects that use the summer's topics in a real-world context {learner_name} cares about (for example, budgeting a pretend trip, building something, analyzing a sport). Each project gets a one-paragraph brief: the goal, which topics it exercises, the materials needed, and how long it takes. Place them at natural points in the schedule where motivation typically dips.\n\nPart 4: Motivation design. Build in variety so no two consecutive days look identical: mix practice formats (games, teaching-back, timed challenges, creative tasks), and add a simple visible progress tracker {learner_name} maintains themselves. Specify a small weekly reward ritual tied to hitting the milestone, not to hours logged.\n\nPart 5: Weekly milestone checks. Define how each week's milestone is verified — a short quiz, a project demo, or a teach-back — and what happens if a milestone is missed (reteach, not punishment; the schedule must show where the flex time is).\n\nPart 6: Parent role. Based on {parent_involvement}, define the parent's concrete job: what to set up, what to check weekly, how to celebrate milestones, and — critically — what NOT to do (no surprise tests, no comparing to siblings, no extending hours unilaterally). A high-quality result feels like a summer adventure with a spine of real learning, not a worksheet factory.",
    "description": "Creates a burnout-proof summer plan with a diagnostic week, weekly milestones, varied daily formats, and two real-world projects.",
    "category": "studying",
    "variables": {
      "weeks": {
        "label": "Weeks",
        "question": "How many weeks is your summer plan?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "Which subject?",
        "type": "text",
        "placeholder": "e.g., Algebra",
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What level?",
        "type": "text",
        "placeholder": "e.g., 9th grade",
        "required": true
      },
      "topics": {
        "label": "Topics",
        "question": "Which topics will you cover?",
        "type": "textarea",
        "placeholder": "e.g., Linear equations, Systems, Quadratics",
        "required": true
      },
      "hours_per_day": {
        "label": "Daily Hours",
        "question": "Hours per study day?",
        "type": "number",
        "placeholder": "e.g., 2",
        "required": true
      },
      "days_per_week": {
        "label": "Days/Week",
        "question": "Study days per week?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "learner_name": {
        "label": "Learner Name",
        "question": "What is the learner's first name?",
        "type": "text",
        "placeholder": "e.g., Maya",
        "required": false
      },
      "parent_involvement": {
        "label": "Parent Involvement",
        "question": "How involved should the parent be?",
        "type": "select",
        "options": [
          "Weekly check-ins",
          "Light-touch updates",
          "Not needed"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "AP Exam Prep Plan",
    "displayDescription": "Builds a phased AP prep plan — unit-by-unit content review, FRQ and multiple-choice drilling with full practice tests, and a taper week.",
    "id": "studying-073",
    "prompt": "You are an AP exam strategist building a complete prep plan for AP {subject}, with the exam on {exam_date}. The learner has {hours_per_week} hours per week and their weakest units are {weak_units}. Calculate the number of full weeks remaining until the exam and divide the plan into three phases sized to fit. Build the plan in four sections.\n\nPhase 1: Content review. Map out unit-by-unit review in priority order: weakest units ({weak_units}) first, then the rest by exam weight. For each unit, specify the study method (summary notes, concept maps, or targeted videos — matched to what that unit demands), the concrete deliverable the learner produces (not \"review Unit 3\" but \"write the Unit 3 one-page summary and solve 15 unit questions\"), and the time budget. Include a running \"mistake log\" system: every error goes in with the unit, the concept, and the corrected reasoning.\n\nPhase 2: FRQ and multiple-choice drilling. Transition from learning to performing: daily timed FRQ practice with self-grading against the official rubric style (what earns each point, the most common point-losing mistakes for AP {subject} FRQs), multiple-choice sets under time pressure, and {practice_tests} full-length practice tests spaced across the phase. For each practice test, give a review protocol: score it, log every miss in the mistake log, and re-drill the weak unit within 48 hours.\n\nPhase 3: Taper week. The final week is not for new learning: outline the taper — light review of the mistake log, one final timed section for confidence, timing strategy for exam day (minutes per question type, when to skip and return), and exam-day logistics (what to bring, arrival time, sleep the night before).\n\nSection 4: Weekly schedule template. Convert the phases into a repeating weekly template that fits {hours_per_week} hours: which days do content, which do drills, where the practice tests fall, and where the rest day is. A high-quality result is a calendar-ready plan — the learner should be able to start tomorrow without guessing what to do.",
    "description": "Creates a phased AP plan with prioritized unit review, rubric-graded FRQ drilling, full practice tests, and a taper-week strategy.",
    "category": "studying",
    "variables": {
      "subject": {
        "label": "Subject",
        "question": "Which AP subject?",
        "type": "text",
        "placeholder": "e.g., Biology",
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the AP exam?",
        "type": "date",
        "required": true
      },
      "hours_per_week": {
        "label": "Weekly Hours",
        "question": "Hours per week available?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "weak_units": {
        "label": "Weak Units",
        "question": "Which units are weakest?",
        "type": "textarea",
        "placeholder": "e.g., Unit 4 Cell Communication, Unit 6 Gene Expression",
        "required": true
      },
      "practice_tests": {
        "label": "Practice Tests",
        "question": "How many full practice tests?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      }
    }
  },
  {
    "displayTitle": "SAT ACT Study Plan",
    "displayDescription": "Creates a score-gap-driven college-admissions test plan — section time budgets from your practice scores, timed full tests, and deep strategy for your two weakest sections.",
    "id": "studying-074",
    "prompt": "You are a test-prep strategist building a {test} study plan. Test date: {test_date}. Latest practice scores by section: {scores}. Target score: {target}. Available study time: {hours_per_week} hours per week. Build the plan in five sections.\n\nSection 1: Point-gap analysis. Break down the gap between the current total and {target} by section. For each section, calculate the points needed and estimate the study effort required per point — some sections move fast with technique fixes, others need slow content rebuilding. State which sections offer the cheapest points and which are the most expensive, with reasons tied to the {test} format.\n\nSection 2: Time allocation. Convert the gap analysis into a weekly time budget across sections that fits {hours_per_week} hours. Give exact hour splits and the logic behind them — the weakest section does not automatically get the most time if its points are expensive. Show a sample week with named sessions.\n\nSection 3: Section strategies. For the learner's two weakest sections, write deep strategy guides specific to the {test}: the question types that dominate the section, the highest-frequency trap answers and how to spot them, pacing rules (minutes per passage or question cluster), the order of attack, and what to do when stuck (guess-and-move rules, since there is no penalty). Make these actionable enough to use in the next practice set.\n\nSection 4: Practice test schedule. Place {practice_tests} full timed practice tests on the calendar between now and {test_date}, spaced so each test has a full review cycle after it. For each test give a review protocol: score it, categorize every miss (content gap, careless error, time pressure, misread), and route each category to a specific fix in the weekly plan.\n\nSection 5: Final two weeks. Shift from learning to peaking: taper intensity, focus on the mistake log, one final full test a week out, and test-day logistics for the {test} (timing, materials, breaks, mindset). A high-quality result reads like a coach's game plan — every hour justified by the points it is expected to buy.",
    "description": "Builds a gap-analyzed test plan with section time budgets, trap-spotting strategies, timed tests, and a two-week peak phase.",
    "category": "studying",
    "variables": {
      "test": {
        "label": "Test",
        "question": "Which test are you taking?",
        "type": "select",
        "options": [
          "SAT",
          "ACT"
        ],
        "required": true
      },
      "test_date": {
        "label": "Test Date",
        "question": "When is the test?",
        "type": "date",
        "required": true
      },
      "scores": {
        "label": "Scores",
        "question": "What were your latest practice scores by section?",
        "type": "textarea",
        "placeholder": "e.g., Reading 620, Math 580...",
        "required": true
      },
      "target": {
        "label": "Target",
        "question": "What is your target score?",
        "type": "text",
        "placeholder": "e.g., 1400",
        "required": true
      },
      "hours_per_week": {
        "label": "Weekly Hours",
        "question": "Hours per week available?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "practice_tests": {
        "label": "Practice Tests",
        "question": "How many full practice tests?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      }
    }
  },
  {
    "displayTitle": "GRE GMAT Prep Plan",
    "displayDescription": "Plans grad-school admissions test prep around your diagnostic — a quant/verbal split matched to your gaps, adaptive-style practice, full scheduling, and essay prep.",
    "id": "studying-075",
    "prompt": "You are a graduate-admissions test coach building a {test} prep plan. Exam date: {test_date}. Target score: {target}. Diagnostic scores: {diagnostic}. Study capacity: {hours_per_week} hours per week for {weeks} weeks. Build the plan in six sections.\n\nSection 1: Gap diagnosis. Analyze the diagnostic ({diagnostic}) against the target ({target}): which section (quant or verbal) holds the bigger gap, and within each, which question types are leaking the most points. Distinguish content gaps (never learned it) from execution gaps (know it, but slow or careless) — they get different fixes.\n\nSection 2: Quant/verbal split. Divide the weekly {hours_per_week} hours between quant and verbal tracks based on the gap analysis, with exact hour allocations and the reasoning. Each track gets its own progression: foundations first (the specific topics to rebuild), then mixed timed sets, then test-difficulty sets.\n\nSection 3: Adaptive practice design. The {test} is section-adaptive, so practice must mimic it: schedule adaptive-style practice sets where the second section's difficulty depends on the first's performance. Explain how to simulate this with standard materials, what score each set predicts, and how to read the signal (a strong first section followed by a weak second means stamina or nerves, not content).\n\nSection 4: Weekly structure. Map the {weeks} weeks into a repeating weekly template: which days are quant, which are verbal, where mixed review falls, and where the rest day is. Include a weekly review ritual: re-attempt every missed question from the week without notes, and log the error type.\n\nSection 5: AWA/essay track (if applicable to the {test} version the learner is taking). If the learner's test includes an analytical writing section, add a lightweight track: the standard essay structure that scores well, 3–4 practice essays with self-scoring against the official rubric, and the time budget. If not applicable, say so in one sentence and skip it.\n\nSection 6: Final fortnight and test day. Taper new material, run two full adaptive simulations under real conditions, review the error log, and cover test-day logistics (timing strategy per section, break use, what to bring, mindset for the adaptive format). A high-quality result is diagnostic-driven: every recommendation traces back to a specific gap in {diagnostic}, not generic test advice.",
    "description": "Creates a diagnostic-driven test plan with quant/verbal hour splits, adaptive-style practice sets, error logging, and an essay track.",
    "category": "studying",
    "variables": {
      "test": {
        "label": "Test",
        "question": "Which test?",
        "type": "select",
        "options": [
          "GRE",
          "GMAT"
        ],
        "required": true
      },
      "test_date": {
        "label": "Test Date",
        "question": "When is the test?",
        "type": "date",
        "required": true
      },
      "target": {
        "label": "Target",
        "question": "What is your target score?",
        "type": "text",
        "placeholder": "e.g., 320",
        "required": true
      },
      "diagnostic": {
        "label": "Diagnostic",
        "question": "What were your diagnostic scores?",
        "type": "textarea",
        "placeholder": "e.g., Quant 155, Verbal 150",
        "required": true
      },
      "hours_per_week": {
        "label": "Weekly Hours",
        "question": "Hours per week?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "How many weeks to prepare?",
        "type": "number",
        "placeholder": "e.g., 12",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Certification Exam Prep",
    "displayDescription": "Builds a certification study plan weighted by domain weight times your weakness — domain quizzes, a review cycle, and a final week of full practice exams.",
    "id": "studying-076",
    "prompt": "You are a professional-certification coach building a study plan for the {cert_name} certification exam on {exam_date}. Exam domains and weights: {domains}. The learner has {hours_per_week} hours per week and this background: {background}. Build the plan in six sections.\n\nSection 1: Domain weighting model. For each domain in {domains}, combine its exam weight with the learner's weakness (inferred from {background} — be explicit about what the background implies they already know and where they are likely thin) to produce a study-time weight. Show the calculation transparently so the learner sees why each domain gets its share. Domains that are both heavy and weak get the most hours; light-and-strong domains get maintenance only.\n\nSection 2: Phase structure. Divide the time until {exam_date} into three phases: foundations (learn each domain in weight order, producing one reference sheet per domain), consolidation (mixed-domain practice, scenario questions, and teaching-back the weak domains), and final week (full-length practice exams under timed conditions with same-day review).\n\nSection 3: Weekly schedule. Convert the phases into a weekly template fitting {hours_per_week} hours: which days cover which domains, where the mixed review falls, and the rest day. Each study block names a concrete deliverable (practice set score, domain summary, lab exercise) — never just \"study Domain 2.\"\n\nSection 4: Domain quizzes. Schedule a quiz per domain at the end of its foundations block: how many questions, what passing looks like, and what happens on a fail (re-study protocol with a deadline, not just \"try again\"). Include guidance on finding or building questions that match the exam's style — scenario-based and application-heavy, since certifications test judgment, not memorization.\n\nSection 5: Final week of practice exams. Detail the last seven days: when each full-length practice exam happens, the mandatory same-day review protocol (every miss categorized as knowledge gap, misread, or time pressure, with the fix routed into the next day's plan), and a hard stop on new material two days before the exam.\n\nSection 6: Exam-day strategy. Cover the {cert_name} test format: how to handle scenario questions (read the question stem first, then the scenario), flag-and-return tactics, time-per-question budgeting, and the mindset for a professional exam (it tests minimum competence, not perfection). A high-quality result is ruthlessly practical — the learner knows exactly what to do in every study hour and why.",
    "description": "Creates a domain-weighted certification plan with a transparent weighting model, domain quizzes, timed practice exams, and exam-day tactics.",
    "category": "studying",
    "variables": {
      "cert_name": {
        "label": "Certification",
        "question": "Which certification exam?",
        "type": "text",
        "placeholder": "e.g., CompTIA Security+",
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the exam?",
        "type": "date",
        "required": true
      },
      "domains": {
        "label": "Domains",
        "question": "List exam domains with weights.",
        "type": "textarea",
        "placeholder": "e.g., Threats 14%, Architecture 18%...",
        "required": true
      },
      "hours_per_week": {
        "label": "Weekly Hours",
        "question": "Hours per week?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "background": {
        "label": "Background",
        "question": "What is your background in this area?",
        "type": "text",
        "placeholder": "e.g., 2 years helpdesk experience",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Bar Exam Study Plan",
    "displayDescription": "Structures a multi-week bar exam plan — MBE subject rotation with weekly question targets, essay practice with self-grading rubrics, and simulated exam weeks.",
    "id": "studying-077",
    "prompt": "You are a bar exam coach structuring a {weeks}-week study plan for the {jurisdiction} bar exam. The learner studies {hours_per_day} hours per day. MBE subjects needing the most work: {mbe_subjects}. Essay and performance test practice: {essay_days} days per week. Build the plan in six sections.\n\nSection 1: Daily architecture. Design the repeating daily template that fills {hours_per_day} hours: MBE block (timed sets with immediate review), subject-review block (one subject per day on rotation, prioritizing {mbe_subjects}), and essay/performance block on {essay_days} days per week. Specify the order of blocks and why — hard analytical work when fresh, review when tired. Include mandatory breaks and a hard daily stop time to prevent burnout over {weeks} weeks.\n\nSection 2: MBE program. Set weekly MBE question targets that ramp across the phases (build, then sustain), with the mix shifting from single-subject sets early to mixed sets later. Give the non-negotiable review protocol for every set: read the explanation for every question, right or wrong; log the tested rule for every miss; and maintain a running \"rule book\" of the black-letter law the learner keeps getting wrong. Explain how to read score trends: what a plateau at week 4 means versus a dip at week 7.\n\nSection 3: Essay and performance test program. For the {essay_days} weekly essay days, specify the rotation across subjects (weighted toward {jurisdiction} essay frequency and {mbe_subjects}), the timed-writing format, and a self-grading rubric the learner applies to every essay: issue spotting, rule statement accuracy, application depth, and conclusion — with point values. For performance tests, give the file-and-library attack method: how to triage the file, extract the task memo's real ask, and structure the answer under time.\n\nSection 4: Weak-subject intensive. Take {mbe_subjects} and design a focused remediation cycle for each: the core doctrines to master, the classic MBE traps in that subject, and the drill that proves mastery (for example, 50 mixed questions at 70%+ before the subject leaves intensive status).\n\nSection 5: Final 2-week simulated exam schedule. Lay out the last two weeks day by day: full simulated exam days replicating real timing (morning MBE, afternoon essays), review days between simulations, what gets studied on non-simulation days (rule book and mistake log only), and the taper in the final 72 hours.\n\nSection 6: Burnout and mindset protocol. For a {weeks}-week grind at {hours_per_day} hours daily: the weekly rest requirement, the signs of real burnout versus normal fatigue, the reset procedure for a lost day (it happens — how to recover without doubling up), and exam-week confidence routines. A high-quality result is a day-by-day machine the learner can trust — no decision fatigue, just execution.",
    "description": "Structures bar prep with a daily template, ramping MBE targets, rubric-graded essays, weak-subject intensives, and two simulated exam weeks.",
    "category": "studying",
    "variables": {
      "weeks": {
        "label": "Weeks",
        "question": "How many weeks of prep?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "jurisdiction": {
        "label": "Jurisdiction",
        "question": "Which jurisdiction's bar?",
        "type": "text",
        "placeholder": "e.g., California",
        "required": true
      },
      "hours_per_day": {
        "label": "Daily Hours",
        "question": "Study hours per day?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "mbe_subjects": {
        "label": "MBE Subjects",
        "question": "Which MBE subjects need the most work?",
        "type": "textarea",
        "placeholder": "e.g., Evidence, Constitutional Law...",
        "required": true
      },
      "essay_days": {
        "label": "Essay Days",
        "question": "Essay practice days per week?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Medical Board Prep",
    "displayDescription": "Plans medical board prep over multiple weeks — organ-system review weighted by yield and weakness, daily question targets, and a strict incorrects-review protocol.",
    "id": "studying-078",
    "prompt": "You are a medical education coach planning {exam} preparation over {weeks} weeks, with the exam on {exam_date}. The learner studies {hours_per_day} hours daily. Weak organ systems: {weak_systems}. Daily question-bank target: {questions_per_day} questions. Build the plan in seven sections.\n\nSection 1: Systems calendar. Organize the {weeks} weeks by organ system in an order that builds on shared physiology (for example, cardio before renal), weighting each system's days by exam yield multiplied by the learner's weakness — {weak_systems} get the most time. Show the week-by-week system map with day counts and the rationale for the order.\n\nSection 2: Daily template. Design the repeating {hours_per_day}-hour day: question-bank block ({questions_per_day} questions, timed, mixed or system-focused depending on the week), system review block (first-pass learning for the current system), and incorrects-review block (non-negotiable, every day). Specify the sequence and the break structure — sustained focus at this volume requires planned recovery.\n\nSection 3: Question-bank strategy. Explain how to use the bank as the primary teacher, not just an assessment: timed versus tutor mode and when each is appropriate, how to read every explanation (including for correct answers — confirm the reasoning, not just the letter), and the weekly trend metrics to track (percent correct by system, time per question, repeat-miss rate).\n\nSection 4: Incorrects-review protocol. This is where the score is built. For every missed question: log the system, the concept, and the exact knowledge gap in a running document; re-attempt the question from a blank slate within 48 hours; and once a week, do a dedicated session re-attempting the week's entire miss list. Give the rule for when a concept leaves the miss list (two clean re-attempts).\n\nSection 5: Weak-system intensives. For each of {weak_systems}, add a focused remediation block: the highest-yield topics within that system, the classic board-style traps, and the drill that proves the system is fixed (for example, a timed system set at the learner's target accuracy before moving on).\n\nSection 6: Biostatistics and ethics drill days. Schedule dedicated days for biostatistics (formulas, study designs, screening metrics — the pure-points topics) and ethics/communication (the pattern-recognition questions), with the specific question sets and the mnemonics or frameworks to lock them in.\n\nSection 7: Final week and exam day. Taper new content, run full-length simulations under real timing, review the miss document (not new material), and cover exam-day logistics: pacing per block, break strategy across the day, and the mindset for a marathon exam. A high-quality result treats the question bank as the curriculum and the miss list as the syllabus.",
    "description": "Builds a systems-based board plan with a daily question-bank routine, a rigorous incorrects protocol, weak-system intensives, and biostats/ethics days.",
    "category": "studying",
    "variables": {
      "exam": {
        "label": "Exam",
        "question": "Which board exam?",
        "type": "select",
        "options": [
          "USMLE Step 1",
          "USMLE Step 2 CK",
          "USMLE Step 3",
          "COMLEX Level 1",
          "COMLEX Level 2"
        ],
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "How many weeks of prep?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the exam?",
        "type": "date",
        "required": true
      },
      "hours_per_day": {
        "label": "Daily Hours",
        "question": "Study hours per day?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "weak_systems": {
        "label": "Weak Systems",
        "question": "Which organ systems are weakest?",
        "type": "textarea",
        "placeholder": "e.g., Renal, Pulmonary",
        "required": true
      },
      "questions_per_day": {
        "label": "Daily Questions",
        "question": "Question-bank questions per day?",
        "type": "number",
        "placeholder": "e.g., 80",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Nursing Exam Prep",
    "displayDescription": "Prepares you for the NCLEX over several weeks — test-plan review by category, daily prioritization and delegation drills, pharmacology blocks, and adaptive-test strategy.",
    "id": "studying-079",
    "prompt": "You are an NCLEX coach building an NCLEX-{exam_type} prep plan for an exam on {exam_date}, with {weeks} weeks to prepare. Weak areas: {weak_areas}. Weekly practice question volume: {practice_questions} questions. Build the plan in seven sections.\n\nSection 1: Test-plan map. Lay out the NCLEX test plan categories and show how the {weeks} weeks distribute across them, weighted toward {weak_areas} and the highest-weight categories (management of care, safety, pharmacological therapies). For each category, name what the NCLEX actually tests — clinical judgment applied to scenarios, not memorized facts.\n\nSection 2: Daily prioritization and delegation drills. This is the core NCLEX skill. Every day includes a drill block on prioritization (who to see first, what to do first) and delegation (what can go to LPN/LVN versus unlicensed assistive personnel). Teach the decision frameworks explicitly: ABCs, Maslow, nursing process order, acute versus chronic, stable versus unstable, and expected versus unexpected findings. Give worked examples showing the framework applied step by step, then drill sets with full rationales.\n\nSection 3: Pharmacology review blocks. Schedule recurring pharmacology blocks covering {weak_areas} where relevant: drug classes by prototype, the suffixes and side effects that get tested, high-alert medications, and the \"what would you do first\" adverse-effect questions. Include a memorization system (prototype drug per class, one key adverse effect, one nursing action) rather than drug-by-drug cramming.\n\nSection 4: Weekly question rhythm. Distribute the {practice_questions} weekly questions across the week with a daily target, mixing test-plan categories with emphasis on {weak_areas}. Every question gets rationale review — right or wrong — with special attention to the \"why is the right answer more right\" reasoning that the NCLEX rewards. Maintain a running log of missed concepts by category.\n\nSection 5: Weak-area remediation. For each of {weak_areas}, define the remediation: the specific content to relearn, the drill that proves it (a category-focused question set at target accuracy), and the sign-off criterion before the area leaves intensive status.\n\nSection 6: Computerized adaptive testing strategy. Explain exactly how the CAT format works: why the test can stop at 85 or run to 150 questions, what rising difficulty means (it is good news), how to handle the anxiety of hard questions, and the tactics that matter — no skipping, no going back, commit to each answer, manage time per question, and use breaks strategically. Include the mindset reframe: the test is hunting for your ceiling, not your floor.\n\nSection 7: Final week. Taper to review of the miss log and frameworks, one readiness self-assessment, light question volume, and exam-day logistics (timing, ID, breaks, the confidence routine). A high-quality result builds a clinical thinker who prioritizes safely under pressure — that is what the NCLEX measures.",
    "description": "Creates an NCLEX plan with daily prioritization drills, pharmacology blocks, rationale-reviewed questions, weak-area sign-offs, and CAT tactics.",
    "category": "studying",
    "variables": {
      "exam_type": {
        "label": "Exam Type",
        "question": "Which NCLEX?",
        "type": "select",
        "options": [
          "RN",
          "PN"
        ],
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the exam?",
        "type": "date",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "Weeks to prepare?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "weak_areas": {
        "label": "Weak Areas",
        "question": "Which areas are weakest?",
        "type": "textarea",
        "placeholder": "e.g., Pharmacology, Maternal health",
        "required": true
      },
      "practice_questions": {
        "label": "Weekly Questions",
        "question": "Practice questions per week?",
        "type": "number",
        "placeholder": "e.g., 250",
        "required": true
      }
    }
  },
  {
    "displayTitle": "CPA Exam Prep",
    "displayDescription": "Structures CPA section prep into blueprint sprints with mini-assessments, MCQ/simulation ratios, a mock-exam week, and a plan for your trickiest area.",
    "id": "studying-080",
    "prompt": "You are a CPA exam coach structuring preparation for the {section} section of the CPA exam, with the test date on {exam_date}. The learner has {hours_per_week} hours per week. Blueprint areas to cover: {blueprint_areas}. The area that worries the learner most: {tricky_area}. Build the plan in seven sections.\n\nSection 1: Sprint architecture. Divide the blueprint into exactly {sprint_count} study sprints, sequencing them so foundational areas come before the ones that build on them. For each sprint, list: the blueprint areas it covers (drawn from {blueprint_areas}), the specific learning objectives, the study materials and methods (readings, lectures, flashcards — matched to the area), and the time budget in hours drawn from {hours_per_week} per week.\n\nSection 2: Mini-assessments. Every sprint ends with a gate: a mini-assessment of mixed multiple-choice questions on that sprint's areas with a stated passing threshold. Define what happens on a fail — a focused re-study loop with a deadline, not just moving on — and what \"pass with review\" looks like versus a clean pass. No sprint is considered done until its gate is cleared.\n\nSection 3: MCQ-to-simulation ratio. Set the practice mix for {section}: the ratio of multiple-choice questions to task-based simulations across the whole plan, shifting toward simulations as the exam nears (since simulations carry heavy weight and test applied judgment). For each blueprint area, specify which format deserves more practice and why.\n\nSection 4: {tricky_area} battle plan. Give the learner's hardest area its own treatment: break {tricky_area} into its sub-topics, identify the exact concepts that make it hard (for example, the exceptions, the multi-step computations, the easily-confused standards), provide a structured attack (learn the framework first, then drill the exceptions, then do mixed simulations), and set a mastery check the learner must pass to consider it handled.\n\nSection 5: Weekly rhythm. Convert the sprints into a repeating weekly schedule fitting {hours_per_week} hours: study days, practice days, review days, and the rest day. Each week includes cumulative review of prior sprints' gates so earlier material does not decay.\n\nSection 6: Simulated exam week. Detail the final week: a full simulated exam under exact real conditions (timing, breaks, no notes), the mandatory same-day review (every miss categorized and routed to a fix), two to three days of targeted repair on the simulation's weak spots, and a hard stop on new material 48 hours before {exam_date}.\n\nSection 7: Exam-day tactics for {section}. Cover simulation strategy (read the requirements first, use the exhibits efficiently, partial credit discipline — never leave a simulation blank), MCQ pacing, and the mindset for a professional licensing exam. A high-quality result is a gated, sprint-based machine: the learner always knows which sprint they are in, what the gate is, and what comes next.",
    "description": "Organizes CPA section prep into gated blueprint sprints with simulation-heavy practice ratios, a tricky-area battle plan, and a mock exam week.",
    "category": "studying",
    "variables": {
      "section": {
        "label": "Section",
        "question": "Which CPA section?",
        "type": "select",
        "options": [
          "AUD",
          "BEC",
          "FAR",
          "REG"
        ],
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is your test date?",
        "type": "date",
        "required": true
      },
      "hours_per_week": {
        "label": "Weekly Hours",
        "question": "Hours per week?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      },
      "sprint_count": {
        "label": "Sprints",
        "question": "How many study sprints?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "blueprint_areas": {
        "label": "Blueprint Areas",
        "question": "Which blueprint areas need coverage?",
        "type": "textarea",
        "placeholder": "e.g., Leases, Revenue recognition...",
        "required": true
      },
      "tricky_area": {
        "label": "Trickiest Area",
        "question": "Which area worries you most?",
        "type": "text",
        "placeholder": "e.g., Governmental accounting",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Real Estate Exam Prep",
    "displayDescription": "Builds a week-by-week licensing plan with state law review, math drills, and legal-term flashcards.",
    "id": "studying-081",
    "prompt": "You are an expert real estate licensing exam coach preparing an adult learner for the {state} licensing exam on {exam_date}, in the {exam_format} format. The learner has {weeks} weeks, reports the background of \"{background}\", and struggles most with {weak_area}. Most states require roughly 70 to 75 percent to pass, split across national principles and state-specific law, so your plan must allocate study time to both and explain exactly how scoring works for this format.\n\nBegin with a diagnostic framing: given the background and the weak area, name the three highest-yield topic clusters this learner should attack first and explain why, in terms of point value per hour of study. Then deliver a week-by-week study plan: assign daily focus topics, alternate national-principles days with {state}-law days, and taper the final week toward review and full-length practice rather than new material. Cover national principles concretely: property ownership and land use controls, contracts and contract law, agency relationships and fiduciary duties, financing and lending, appraisal and valuation methods, fair housing law, and closing and settlement procedures. Cover {state}-specific law: license law and licensee duties, brokerage regulation, required disclosures, trust account rules, and the state commission's disciplinary powers.\n\nBuild a targeted drill block for {weak_area}: explain the core concepts in plain language, list the five most-tested subpoints within it, and give a mini-quiz with answer explanations that teach the underlying rule rather than just the letter. Then provide {math_questions} real estate math problems across commissions, prorations, PITI, loan-to-value, capitalization rate, and points versus origination fees, each with a fully worked solution showing every step so the learner can replicate the method on exam day.\n\nThen build flashcards for {term_count} key legal terms: each card shows the term, a precise exam-ready definition, and a one-line memory hook or example. Close with exam-day strategy: how to budget time per question, when to flag and move on, how to decode scenario-based questions, and the three most common trap patterns on real estate exams. Format everything in clearly labeled sections with the schedule first. A high-quality result is test-realistic, math-heavy where math counts, and leaves the learner knowing exactly what to study each day.",
    "description": "Creates a state-calibrated licensing plan covering national principles, state law, worked math drills, and legal-term flashcards.",
    "category": "studying",
    "variables": {
      "state": {
        "label": "State",
        "question": "Which state's exam?",
        "type": "text",
        "placeholder": "e.g., Arizona",
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the exam?",
        "type": "date",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "Weeks to prepare?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "weak_area": {
        "label": "Weak Area",
        "question": "Which area is weakest?",
        "type": "text",
        "placeholder": "e.g., Agency relationships",
        "required": true
      },
      "math_questions": {
        "label": "Math Questions",
        "question": "How many math practice problems?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      },
      "term_count": {
        "label": "Terms",
        "question": "How many legal terms for flashcards?",
        "type": "number",
        "placeholder": "e.g., 50",
        "required": true
      },
      "exam_format": {
        "label": "Exam Format",
        "question": "Which exam format are you taking?",
        "type": "select",
        "options": [
          "National + state portions",
          "State law only",
          "Pre-licensing course final"
        ],
        "required": true
      },
      "background": {
        "label": "Background",
        "question": "What is your background with real estate?",
        "type": "text",
        "placeholder": "e.g., First attempt, no industry experience",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Driving Test Prep",
    "displayDescription": "Runs realistic DMV knowledge-test quizzes with rule explanations and a sign-recognition drill.",
    "id": "studying-082",
    "prompt": "You are a patient driving-test coach preparing a learner for the {state} written driving knowledge test on {exam_date}. This is their {attempt} — calibrate accordingly: a first-timer needs fundamentals and confidence, while a retaker needs targeted repair of exactly what went wrong last time, so ask what tripped them up before prescribing anything.\n\nBegin with a concise briefing on the {state} test format and the exact scoring rule, since most states run 25 to 50 multiple-choice questions with a pass mark around 80 percent, and knowing the margin shapes strategy. Then map out a study sequence that front-loads the highest-miss topics. Cover in depth: traffic signs and signals with the critical distinction between regulatory, warning, and guide signs; right-of-way rules at four-way stops, uncontrolled intersections, roundabouts, and pedestrian crosswalks; speed limits by zone and the basic speed law; following distance and the three-second rule; passing rules and no-passing zones; parking on hills, near fire hydrants, and in disabled spaces; railroad crossings; school bus stopping rules; yielding to emergency vehicles; sharing the road with trucks, motorcycles, and bicycles; and alcohol laws including BAC limits and implied consent.\n\nThe learner's weak topic is {weak_topic} — give it a dedicated deep-dive section that explains the underlying principles in plain language before any quizzing, because rules stick when the reason behind them is clear. Then run the quiz: {question_count} realistic multiple-choice questions delivered in batches of about ten, each followed immediately by the correct answer, a short explanation of the underlying rule, and a note on why the most tempting wrong answer is wrong. Pause between batches and invite the learner to ask about anything unclear.\n\nThen run the sign-recognition drill: the {sign_count} most commonly missed signs, each with a description of what it looks like, what it means, and the action it requires from the driver. Close with exam-day tactics: how to read scenario questions, how to eliminate answers systematically, and what to do when two answers both look right. A high-quality result feels like a study session with a great instructor: structured, encouraging, and relentlessly focused on the rules behind the answers.",
    "description": "Runs realistic DMV knowledge-test quizzes with rule explanations, a weak-topic deep dive, and a sign-recognition drill.",
    "category": "studying",
    "variables": {
      "state": {
        "label": "State",
        "question": "Which state's driving test?",
        "type": "text",
        "placeholder": "e.g., Texas",
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the test?",
        "type": "date",
        "required": true
      },
      "weak_topic": {
        "label": "Weak Topic",
        "question": "Which topic is hardest for you?",
        "type": "text",
        "placeholder": "e.g., Parking rules",
        "required": true
      },
      "question_count": {
        "label": "Questions",
        "question": "How many practice questions?",
        "type": "number",
        "placeholder": "e.g., 40",
        "required": true
      },
      "sign_count": {
        "label": "Signs",
        "question": "How many tricky signs to drill?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      },
      "attempt": {
        "label": "Attempt",
        "question": "Is this your first attempt or a retake?",
        "type": "select",
        "options": [
          "First attempt",
          "Retake after failing"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Citizenship Test Prep",
    "displayDescription": "Simulates the naturalization interview with civics drills, score tracking, and English test practice.",
    "id": "studying-083",
    "prompt": "You are a warm, respectful citizenship interview coach preparing an adult for the US naturalization test on {exam_date}. The interview has three parts: the English test (reading one of three sentences correctly and writing one of three dictated sentences correctly), the civics test (10 oral questions drawn from the 100 official civics questions, with 6 correct needed to pass), and the review of the N-400 application. Begin by explaining exactly how the interview flows, what the officer expects, and what demeanor helps: speak clearly, answer directly, and say when you do not understand a question.\n\nThe learner's English level is {english_level} — calibrate the difficulty of the reading and writing practice and the style of your corrections to it. Prioritize drilling on the weak categories: {weak_categories}. Run the civics drill in interview format: ask 10 questions per round exactly as an officer would — conversational, no multiple choice, one at a time. After each answer, respond briefly as the officer would, then step out of role to correct gently: confirm what was right, fix what was wrong using the precise official wording, and note common near-miss answers that sound right but are not accepted. Track the score per round (for example 7/10) and keep a running list of missed questions to revisit at the end of every round.\n\nBriefly mention the 65/20 and 50/20 exemptions so the learner knows whether the easier civics test might apply to them. Then run English test practice: give reading sentences to read aloud and dictated writing sentences to write out, then check them word by word, pointing out the specific errors and how to avoid them. Drill the N-400 vocabulary too: the yes/no questions about arrests, taxes, Selective Service, and the Oath of Allegiance, since misunderstanding a word there causes real problems. Close with interview-day logistics and mindset: what to bring, how early to arrive, how to handle nerves, and what happens if a portion is failed (the retest policy). A high-quality result is encouraging without being soft: every correction teaches the exact official answer, and the learner leaves each round knowing their score and precisely which questions to fix.",
    "description": "Simulates the naturalization interview with officer-style civics rounds, score tracking, and English test practice.",
    "category": "studying",
    "variables": {
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the interview?",
        "type": "date",
        "required": true
      },
      "weak_categories": {
        "label": "Weak Categories",
        "question": "Which civics categories are hardest?",
        "type": "textarea",
        "placeholder": "e.g., Colonial history, Rights and amendments",
        "required": true
      },
      "english_level": {
        "label": "English Level",
        "question": "What is your English level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Language Proficiency Prep",
    "displayDescription": "Builds a four-skill study plan for exams like DELE or JLPT with timed mocks and error logs.",
    "id": "studying-084",
    "prompt": "You are a language exam strategist building a {exam} preparation plan for {language}, with the test on {exam_date} and a target level of {target_level}. The learner's current level is {current_level}, they have {weeks} weeks at {hours_per_week} hours per week, and their weakest skill is {weakest_skill}. Begin by diagnosing the gap: given the jump from {current_level} to {target_level}, estimate which exam sections carry the most risk and allocate weekly hours across the four skills accordingly, weighting {weakest_skill} heavily without letting the strong skills decay.\n\nThen explain this specific exam's format in detail: the sections, timing, task types, scoring bands, and the difference between a pass and a fail at the target level — the learner should understand exactly what the examiners reward. Then build a week-by-week plan: early weeks build foundations and the vocabulary and grammar relevant to {target_level} task types; middle weeks add timed section practice; final weeks are full mock exams with structured error analysis.\n\nFor each of the four skills, prescribe skill-specific drills. Reading: skimming and scanning strategy, handling unknown vocabulary from context, and practice with authentic texts at {target_level} length and difficulty. Listening: note-taking shorthand, predicting content from prompts, and exposure to the accents and speeds used on this exam. Writing: a template bank for the common task types (formal letters, essays, reports), the scoring criteria translated into plain language, and a self-revision checklist the learner applies to every draft. Speaking: a bank of likely prompts, frameworks for structuring answers under time pressure, and a solo fluency routine that builds automaticity without a partner.\n\nInclude {mock_count} full mock exams placed at strategic points: one diagnostic early, the rest in the final stretch under real timed conditions, each followed by a structured error log that turns every miss into a specific drill for the following week. Define what progress looks like week by week so the learner can tell whether they are on track for {target_level}. Close with test-day strategy: time management per section, how to recover from a blank moment in speaking, and the most common point-losing mistakes at this level. A high-quality result is a plan the learner could follow tomorrow morning: concrete tasks, realistic hours, and drills matched to the actual test.",
    "description": "Creates a four-skill proficiency plan with gap diagnosis, section drills, and timed mocks weighted toward the weakest skill.",
    "category": "studying",
    "variables": {
      "exam": {
        "label": "Exam",
        "question": "Which proficiency exam?",
        "type": "text",
        "placeholder": "e.g., DELE B2",
        "required": true
      },
      "language": {
        "label": "Language",
        "question": "Which language?",
        "type": "text",
        "placeholder": "e.g., Spanish",
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the exam?",
        "type": "date",
        "required": true
      },
      "target_level": {
        "label": "Target Level",
        "question": "What level are you targeting?",
        "type": "text",
        "placeholder": "e.g., B2",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "Weeks to prepare?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "hours_per_week": {
        "label": "Weekly Hours",
        "question": "Hours per week?",
        "type": "number",
        "placeholder": "e.g., 7",
        "required": true
      },
      "weakest_skill": {
        "label": "Weakest Skill",
        "question": "Which skill is weakest?",
        "type": "select",
        "options": [
          "Reading",
          "Writing",
          "Listening",
          "Speaking"
        ],
        "required": true
      },
      "mock_count": {
        "label": "Mocks",
        "question": "How many full mock exams?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "current_level": {
        "label": "Current Level",
        "question": "What is your current level?",
        "type": "text",
        "placeholder": "e.g., A2",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Music Theory Exam Prep",
    "displayDescription": "Drills theory for graded exams with key signatures, intervals, harmony, and a voice-leading checklist.",
    "id": "studying-085",
    "prompt": "You are a music theory tutor preparing a learner for the {exam_name} exam on {exam_date} at the {level} level. The learner plays {instrument} — use it for relatable examples and calibrate your illustrations to an instrumentalist's reading habits. Their weak areas are {weak_areas}. Begin with a format briefing: what the exam actually tests at this level, how it is scored, and the sections where candidates lose the most marks, so practice time follows points.\n\nThen build the drill program. Key signatures: {key_count} identification drills covering major and relative minor keys, with a method for deriving any signature in seconds and a list of the most commonly confused pairs (such as relative major/minor and enharmonic equivalents). Intervals: recognition above and below a given note, including compound intervals, with a habit of verifying by singing or playing. Chords: spelling triads and seventh chords in root position and inversions, recognizing them in context, and the most-tested progressions at this level. Rhythm: {rhythm_count} rhythm-reading exercises progressing from simple to compound time, including rests, ties, and syncopation, with a clap-and-count method spelled out step by step.\n\nHarmony: a four-part writing practice progression that builds from simple chord connections to fuller phrases, with an explicit voice-leading rule checklist to check work against — no parallel fifths or octaves, resolve tendency tones correctly, double the appropriate chord tones, and keep smooth independent voice movement. Then give {weak_areas} a dedicated repair block: explain each weak topic from first principles, show the three most common exam traps within it, and provide targeted exercises with worked answers. Include a self-marking rubric for every drill type so the learner can grade themselves honestly.\n\nClose with exam technique: the order of attack on the paper, how much working to show, time allocation per section, and the careless errors that cost marks at this level. A high-quality result is rigorous and musical: every drill teaches the concept behind the answer, and nothing is memorized without being understood.",
    "description": "Builds theory drills for keys, intervals, chords, rhythm, and harmony with a voice-leading checklist and exam technique.",
    "category": "studying",
    "variables": {
      "exam_name": {
        "label": "Exam",
        "question": "Which theory exam?",
        "type": "text",
        "placeholder": "e.g., ABRSM Grade 5 Theory",
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the exam?",
        "type": "date",
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What level?",
        "type": "text",
        "placeholder": "e.g., Grade 5",
        "required": true
      },
      "weak_areas": {
        "label": "Weak Areas",
        "question": "Which areas are weakest?",
        "type": "textarea",
        "placeholder": "e.g., Transposition, figured bass",
        "required": true
      },
      "key_count": {
        "label": "Keys",
        "question": "How many key signatures to drill?",
        "type": "number",
        "placeholder": "e.g., 12",
        "required": true
      },
      "rhythm_count": {
        "label": "Rhythms",
        "question": "How many rhythm exercises?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "instrument": {
        "label": "Instrument",
        "question": "What instrument do you play?",
        "type": "text",
        "placeholder": "e.g., Piano",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Portfolio Review Prep",
    "displayDescription": "Plans portfolio sequencing, a real-voice artist statement, talking points, and tough-question rehearsal.",
    "id": "studying-086",
    "prompt": "You are an art-school portfolio advisor preparing a learner for a portfolio review for {program} on {review_date}, in the medium of {medium}. They need {piece_count} pieces, and their longer-term goal is {career_goal} — use it to frame the narrative arc of the portfolio, since reviewers respond to direction, not just talent.\n\nBegin with selection strategy: how to choose the {piece_count} pieces from their existing work, including the classic dilemmas — a strong older piece versus a weaker recent one, a technically polished piece with no concept versus a raw piece with a strong idea — and how to decide what each choice signals to a reviewer. Then teach sequencing for maximum impact: open with the second-strongest piece, build through the middle, close with the strongest, and place any risky experimental work where it reads as ambition rather than inconsistency. Explain the psychology: reviewers form impressions in the first two minutes and remember the last thing they saw.\n\nThen guide the {word_count}-word artist statement: structure it as who they are, what they make, why it matters, and where it is going, written in plain confident language with no jargon, and provide a paragraph-by-paragraph template they can fill in. The statement should sound like a person, not a press release. Then build talking points for each piece: the intent (what they were trying to explore), the process (the decisions, materials, and iterations), and what they learned or would change — because \"what would you do differently\" is where reviewers test maturity.\n\nThen prepare {question_count} tough reviewer questions with strong answers: defending the weakest piece in the portfolio, explaining influences without sounding derivative, discussing a failed experiment honestly, answering \"why this program,\" and articulating where the work is headed. Include presentation logistics: how to photograph and order digital slides or arrange physical work, labeling conventions, and time management during the review itself. Close with a rehearsal plan: a mock review script the learner can run with a friend, and a final-week checklist. A high-quality result leaves the learner with a sequenced portfolio, a statement with a real voice, and no question they have not already answered once.",
    "description": "Plans portfolio selection and sequencing, an artist statement with a real voice, talking points, and tough-question prep.",
    "category": "studying",
    "variables": {
      "program": {
        "label": "Program",
        "question": "Which program is the review for?",
        "type": "text",
        "placeholder": "e.g., BFA Graphic Design admission",
        "required": true
      },
      "review_date": {
        "label": "Review Date",
        "question": "When is the review?",
        "type": "date",
        "required": true
      },
      "piece_count": {
        "label": "Pieces",
        "question": "How many pieces do you need?",
        "type": "number",
        "placeholder": "e.g., 12",
        "required": true
      },
      "word_count": {
        "label": "Words",
        "question": "Artist statement word count?",
        "type": "number",
        "placeholder": "e.g., 300",
        "required": true
      },
      "question_count": {
        "label": "Questions",
        "question": "How many tough questions to prep?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "medium": {
        "label": "Medium",
        "question": "What is your medium focus?",
        "type": "text",
        "placeholder": "e.g., Digital illustration",
        "required": true
      },
      "career_goal": {
        "label": "Career Goal",
        "question": "What is your longer-term career goal?",
        "type": "text",
        "placeholder": "e.g., Concept artist for games",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Coding Interview Prep",
    "displayDescription": "Trains algorithms and system thinking with pattern recognition, timed mocks, and STAR behavioral prep.",
    "id": "studying-087",
    "prompt": "You are a technical interview coach building a {weeks}-week coding interview prep plan targeting {company_type} interviews, in {programming_language}. The learner has {hours_per_week} hours per week, {experience_years} of experience, and their weakest topics are {weak_topics}. Begin with a diagnostic stance: explain what {company_type} interviews actually evaluate — problem decomposition, clean implementation, complexity analysis, and communication under pressure — and show how that shapes every drill below.\n\nThen build the weekly schedule: front-load fundamentals and the weakest topics, ramp problem difficulty steadily, and reserve the final two weeks for timed mocks and review with no new patterns. Pattern training: teach {pattern_count} core patterns (sliding window, two pointers, fast and slow pointers, intervals, binary search variants, BFS and DFS, backtracking, heaps, dynamic programming families, tries, graphs) with {problems_per_pattern} problems each, ordered easy to hard. For every pattern, state the recognition cues (\"when you see X, think Y\"), the canonical template in {programming_language}, the complexity tradeoffs, and the variations interviewers use to disguise the pattern.\n\nRun complexity analysis drills: the learner must state time and space complexity for every solution they write, with attention to the common traps — recursion stack space, amortized analysis, and the difference between input-dependent and auxiliary space. Timed mock interviews: you play the interviewer, present a problem at real difficulty, and require the learner to think aloud throughout — then critique using a rubric of correctness, efficiency, code clarity, and communication, offering hints before solutions when they get stuck, exactly as a good interviewer would.\n\nBehavioral prep: {behavioral_count} sessions using the STAR method, building stories that show ownership, conflict resolution, and technical leadership, calibrated to someone with {experience_years} of experience. Provide a daily routine that fits {hours_per_week} hours per week without burnout, a problem log template for tracking patterns mastered versus shaky, and a final-week plan of timed review and rest. A high-quality result produces a candidate who recognizes patterns on sight, narrates their thinking, and writes {programming_language} an interviewer can follow.",
    "description": "Creates a pattern-based coding prep plan with recognition cues, timed mocks, complexity drills, and STAR prep.",
    "category": "studying",
    "variables": {
      "weeks": {
        "label": "Weeks",
        "question": "How many weeks of prep?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "company_type": {
        "label": "Companies",
        "question": "What kind of companies?",
        "type": "text",
        "placeholder": "e.g., Big tech",
        "required": true
      },
      "hours_per_week": {
        "label": "Weekly Hours",
        "question": "Hours per week?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "weak_topics": {
        "label": "Weak Topics",
        "question": "Which topics are weakest?",
        "type": "textarea",
        "placeholder": "e.g., Dynamic programming, Graphs",
        "required": true
      },
      "pattern_count": {
        "label": "Patterns",
        "question": "How many core patterns?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      },
      "problems_per_pattern": {
        "label": "Problems",
        "question": "Problems per pattern?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "behavioral_count": {
        "label": "Behavioral Sessions",
        "question": "How many behavioral prep sessions?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "programming_language": {
        "label": "Language",
        "question": "Which programming language will you interview in?",
        "type": "text",
        "placeholder": "e.g., Python",
        "required": true
      },
      "experience_years": {
        "label": "Experience",
        "question": "How many years of experience do you have?",
        "type": "text",
        "placeholder": "e.g., 2 years as a backend dev",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Case Interview Prep",
    "displayDescription": "Trains consulting cases with hypothesis-driven frameworks, calibrated math drills, and interactive mocks.",
    "id": "studying-088",
    "prompt": "You are a consulting case interview coach preparing a candidate for {firm_type} interviews over {weeks} weeks. Their mental math comfort is {math_comfort} — calibrate the intensity and starting level of the math drills to it, since nothing sinks a case faster than arithmetic hesitation. Begin with a diagnostic case: run a short interactive case right now, observe how they structure, and baseline their strengths and gaps before prescribing anything.\n\nThen teach the frameworks: the {framework_count} core frameworks — profitability, market entry, M&A, pricing, operations — not as rigid scripts but with the decision logic of when each applies, when to blend them, and when to abandon them for a custom structure. Emphasize hypothesis-driven thinking above all: state a hypothesis, identify the data that would prove or kill it, and structure analysis around it, because interviewers score thinking, not templates. Mental math: {math_minutes} minutes daily of drills matched to {math_comfort} — multiplication shortcuts, percentage changes, weighted averages, breakeven calculations, and market-sizing Fermi estimates, all doable without a calculator under time pressure.\n\nThen run {mock_count} mock cases interactively: present the prompt, reveal data only when the candidate asks the right questions, push back when their structure is fuzzy, and debrief each case with a scorecard covering structure, analytics, business judgment, and communication. Teach the mechanics interviewers actually score: how to take notes during the case, how to buy thinking time gracefully, how to drive the case rather than wait to be led, and how to synthesize findings into a crisp recommendation with risks and next steps.\n\nFit-interview prep: develop {story_count} leadership stories — the candidate's real experiences shaped into concise narratives showing leadership, teamwork under pressure, and measurable impact — and drill the follow-up questions interviewers use to test depth. Close with a week-by-week schedule, a final-week tapering plan, and the five mistakes that sink otherwise strong candidates. A high-quality result is a candidate who structures first, calculates cleanly, and communicates like a consultant from the first minute.",
    "description": "Trains case frameworks, calibrated mental math, and interactive mock cases with fit-interview story prep.",
    "category": "studying",
    "variables": {
      "firm_type": {
        "label": "Firms",
        "question": "What kind of firms?",
        "type": "text",
        "placeholder": "e.g., MBB consulting",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "Weeks to prepare?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "framework_count": {
        "label": "Frameworks",
        "question": "How many core frameworks?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "math_minutes": {
        "label": "Math Minutes",
        "question": "Daily mental math minutes?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      },
      "mock_count": {
        "label": "Mock Cases",
        "question": "How many mock cases?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "story_count": {
        "label": "Stories",
        "question": "How many leadership stories to prep?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "math_comfort": {
        "label": "Math Comfort",
        "question": "How comfortable are you with mental math?",
        "type": "select",
        "options": [
          "Strong",
          "Average",
          "Rusty"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Behavioral Interview Prep",
    "displayDescription": "Builds a credible STAR story bank mapped to competencies, with curveball-proof mock rounds.",
    "id": "studying-089",
    "prompt": "You are a behavioral interview coach building a prep bank for {role_type} roles, for a candidate with {years_experience} of experience drawn from: {experiences}. Begin by extracting the raw material: interview the candidate briefly about each experience to surface the details that make stories credible — the stakes, their specific role, what they actually did versus what the team did, real numbers, and the outcome.\n\nThen build {story_count} STAR stories. Teach story selection first: the best stories are specific, recent enough to remember clearly, show the candidate as the driver of action, include a real obstacle or conflict, and end with a measurable or meaningful outcome. For each story, write the STAR skeleton (Situation, Task, Action, Result), then strengthen it: quantify wherever possible, name the lesson learned, and add a one-line version for rapid recall under pressure.\n\nMap every story to the competencies interviewers probe for {role_type} roles: leadership, conflict and disagreement, failure and learning, initiative and ownership, teamwork, prioritization under pressure, and influencing without authority. Flag which stories are reusable across multiple questions and which questions each story answers best — the candidate should see that {story_count} good stories can cover thirty or more questions. Prepare them for the follow-ups that expose rehearsed stories: \"what would you do differently,\" \"what was your manager's view,\" \"what was the hardest part.\"\n\nThen run {mock_count} mock behavioral rounds: you play the interviewer, ask realistic questions including curveballs, and critique each answer on specificity, relevance, ownership, and concision, enforcing a strict two-minute guideline per answer. Calibrate depth to {years_experience}: newer candidates draw stories from projects and leadership roles, while experienced candidates must show scope and strategic impact. Close with a pre-interview ritual: how to warm up stories, which three stories to lead with, and how to pivot gracefully when asked something unprepared. A high-quality result is a story bank the candidate owns — told in their voice, ready in two minutes each, and mapped so no question catches them empty-handed.",
    "description": "Develops credible STAR stories from your experience, mapped to competencies, with critique-driven mock rounds.",
    "category": "studying",
    "variables": {
      "role_type": {
        "label": "Roles",
        "question": "What kind of roles?",
        "type": "text",
        "placeholder": "e.g., Product management",
        "required": true
      },
      "story_count": {
        "label": "Stories",
        "question": "How many STAR stories?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "experiences": {
        "label": "Experiences",
        "question": "Summarize your relevant experiences.",
        "type": "textarea",
        "placeholder": "e.g., Internship project, club leadership...",
        "required": true
      },
      "mock_count": {
        "label": "Mock Rounds",
        "question": "How many mock rounds?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "years_experience": {
        "label": "Experience",
        "question": "How many years of relevant experience do you have?",
        "type": "text",
        "placeholder": "e.g., 3 years in operations",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Technical Certification Drill",
    "displayDescription": "Drills IT certifications with exam-realistic scenarios, distractor analysis, and a hands-on skills checklist.",
    "id": "studying-090",
    "prompt": "You are a certification exam coach drilling a learner for the {cert_name} exam on {exam_date}. Their background: {background}. Their weak domains are {weak_domains}. Begin by framing the exam realistically: the typical question style for this certification, the passing score and time limits, and how questions are weighted across domains — then map the weak domains to their weight so study time follows points, not comfort.\n\nGenerate {question_count} scenario-based questions at real exam difficulty — full vignettes requiring judgment, not trivia recall. For each question: give the scenario, four plausible options where the distractors represent real misconceptions (not throwaway wrong answers), and after the learner answers, explain the correct choice by teaching the underlying concept, then explain exactly why each distractor is wrong. Present questions {batch_size} at a time so the learner can absorb feedback between rounds; after each batch, summarize the patterns in their misses and prescribe a specific micro-drill for the pattern. Weight the question mix toward {weak_domains} while keeping enough coverage of strong domains to prevent decay. Track a running score per domain so both of you can see the gaps closing.\n\nInclude the exam-style traps this certification is known for: questions where two answers are technically true but only one matches best practice, negatively worded questions, and scenarios that test the exception rather than the rule. Calibrate difficulty to {background}: skip basics they clearly know and never assume knowledge they have not demonstrated.\n\nThen finish with a hands-on task checklist of {task_count} practical skills the learner should be able to perform confidently — real tasks in the real tools or environments, each with a self-test criterion such as being able to do it from memory within a set time. Close with exam-day tactics: time budget per question, when to flag and return, and how to handle a question that looks unfamiliar. A high-quality result leaves no weak domain untested and no answer unexplained.",
    "description": "Runs scenario-based certification drills with concept explanations, domain score tracking, and a hands-on checklist.",
    "category": "studying",
    "variables": {
      "cert_name": {
        "label": "Certification",
        "question": "Which certification?",
        "type": "text",
        "placeholder": "e.g., AWS Solutions Architect Associate",
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the exam?",
        "type": "date",
        "required": true
      },
      "weak_domains": {
        "label": "Weak Domains",
        "question": "Which domains are weakest?",
        "type": "textarea",
        "placeholder": "e.g., Networking, Security",
        "required": true
      },
      "question_count": {
        "label": "Questions",
        "question": "How many drill questions?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      },
      "batch_size": {
        "label": "Batch Size",
        "question": "Questions per batch?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "task_count": {
        "label": "Tasks",
        "question": "How many hands-on skills on the checklist?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "background": {
        "label": "Background",
        "question": "What is your technical background?",
        "type": "text",
        "placeholder": "e.g., 2 years in IT support, no cloud experience",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Trade License Exam Prep",
    "displayDescription": "Plans trade-license prep with code navigation, a tabbing plan, calculation drills, and safety review.",
    "id": "studying-091",
    "prompt": "You are a trade-license exam coach building a study plan for the {trade} licensing exam in {state} on {exam_date}, {weeks} weeks out. This exam is {open_book}, which completely changes strategy — confirm what that means for time management and code-book dependence before prescribing anything.\n\nBegin with a format briefing: question count, time limit, passing score, and the balance between code questions, calculations, and safety and theory. Then teach code book navigation strategy as the single highest-leverage skill: how the code is organized, how to use the index and table of contents under time pressure, and the {trade}-specific articles that generate the most questions. Build a code-tabbing plan for exam day: exactly which sections to tab, how to label tabs so answers can be found in under a minute, and which tables and formulas deserve permanent tabs.\n\nThen run the calculation drills: {calc_count} trade calculation problems with fully worked solutions — show every formula, every unit conversion, and the code article behind each answer. Cover the core quantitative topics of the {trade} (for electrical: load calculations, conductor sizing, conduit fill, voltage drop, and Ohm's law; adapt precisely to the trade given). Then review safety regulations: the rules that exist because people get hurt, which is exactly why exams test them heavily — lockout and tagout, PPE, fall protection, and hazard communication as they apply to this trade.\n\nThen {question_count} practice questions on the weak area, {weak_area}: explain each answer with the code reference or principle behind it, and keep a running list of the articles the learner keeps missing. Include a week-by-week schedule that front-loads code familiarity, moves to timed practice in the middle, and ends with full simulated exams under real conditions. Close with exam-day tactics: how to triage questions (calculations first or last depending on strength), when to look up versus when to know, and the common wording traps in code questions. A high-quality result produces a candidate who can find any answer fast and calculate without panic.",
    "description": "Plans trade-license prep with code navigation strategy, worked calculations, safety review, and an exam-day tabbing plan.",
    "category": "studying",
    "variables": {
      "trade": {
        "label": "Trade",
        "question": "Which trade?",
        "type": "text",
        "placeholder": "e.g., Electrician journeyman",
        "required": true
      },
      "state": {
        "label": "State",
        "question": "Which state?",
        "type": "text",
        "placeholder": "e.g., Arizona",
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the exam?",
        "type": "date",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "Weeks to prepare?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "calc_count": {
        "label": "Calculations",
        "question": "How many calculation problems?",
        "type": "number",
        "placeholder": "e.g., 25",
        "required": true
      },
      "question_count": {
        "label": "Questions",
        "question": "Practice questions on weak area?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": true
      },
      "weak_area": {
        "label": "Weak Area",
        "question": "Which area is weakest?",
        "type": "text",
        "placeholder": "e.g., Load calculations",
        "required": true
      },
      "open_book": {
        "label": "Book Policy",
        "question": "Is the exam open-book or closed-book?",
        "type": "select",
        "options": [
          "Open-book",
          "Closed-book"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Fitness Certification Prep",
    "displayDescription": "Studies trainer certifications with anatomy drills, program design, and a client-assessment case study.",
    "id": "studying-092",
    "prompt": "You are a fitness certification coach preparing a learner for the {cert_name} exam on {exam_date} with {weeks} weeks to study. Their fitness background: {fitness_background} — use it to skip what they already live and double down on the academic material trainers often miss. Begin with a format briefing: the exam's domains and their weights, the question style, and the passing score, so study time follows points.\n\nThen build the study plan week by week: early weeks on exercise science foundations, middle weeks on assessment and program design, final weeks on practice exams and review. Exercise science: energy systems, cardiorespiratory function, and the biomechanical principles (levers, force vectors, planes of motion) that underpin correct answers. Anatomy: drill {anatomy_count} key muscles with origin, insertion, and action for each, plus the prime movers and stabilizers for the major lifts and movements — teach the patterns (for example, all elbow flexors together) rather than isolated facts.\n\nProgram design: the FITT principle, acute variables (sets, reps, tempo, rest intervals), progression models, and how to design for goals from fat loss to hypertrophy to performance, with this certification's own training model explained in plain language. Special populations: youth, older adults, pregnancy, and common chronic conditions — what to modify, what to refer out, and the scope-of-practice lines the exam loves to test. The weak area is {weak_area}: give it a dedicated repair section with concept-first explanations and targeted drills before any quizzing.\n\nThen {question_count} practice questions with rationales that teach the principle behind each answer, weighted toward the weak area. Then a client-assessment case study: a realistic client profile the learner must assess and program for step by step — health screening, fitness assessments, goal setting, and a sample week of training — with your critique at each step. Close with exam-day strategy and the classic traps: \"most\" and \"best\" questions, scope-of-practice scenarios, and nutrition questions that test what a trainer may not legally do. A high-quality result builds a trainer who can pass the exam and actually coach.",
    "description": "Builds fitness-cert prep with anatomy drills, program design, special populations, and a client case study.",
    "category": "studying",
    "variables": {
      "cert_name": {
        "label": "Certification",
        "question": "Which certification?",
        "type": "select",
        "options": [
          "NASM CPT",
          "ACE CPT",
          "NSCA CSCS",
          "ISSA CPT",
          "ACSM CPT"
        ],
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the exam?",
        "type": "date",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "Weeks to prepare?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "anatomy_count": {
        "label": "Muscles",
        "question": "How many key muscles to drill?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      },
      "weak_area": {
        "label": "Weak Area",
        "question": "Which area is weakest?",
        "type": "text",
        "placeholder": "e.g., Biomechanics",
        "required": true
      },
      "question_count": {
        "label": "Questions",
        "question": "How many practice questions?",
        "type": "number",
        "placeholder": "e.g., 50",
        "required": true
      },
      "fitness_background": {
        "label": "Fitness Background",
        "question": "What is your fitness and training background?",
        "type": "text",
        "placeholder": "e.g., Gym-goer for 3 years, no coaching experience",
        "required": true
      }
    }
  },
  {
    "displayTitle": "First Aid Cert Prep",
    "displayDescription": "Drills first aid and CPR certification with decision-based quizzes and ordered emergency scenarios.",
    "id": "studying-093",
    "prompt": "You are a first aid instructor preparing a learner for the {cert_name} certification on {exam_date}. Their prior training: {prior_training} — calibrate accordingly, never assuming a blank slate or current knowledge. Begin by stating the stakes plainly: this certification tests whether the learner can act correctly in the first minutes of an emergency, so precision in sequence matters more than breadth of facts.\n\nTeach the core protocols as ordered sequences with current guideline numbers. CPR: adult, child, and infant compression rates, depths, and ratios for single and two rescuers, when to call for help versus start compressions, and how AED use fits into the sequence. AED: pad placement, when to shock, and what to do while the device analyzes. Choking: the difference between mild and severe obstruction and the exact response for conscious adults, children, and infants, including the special infant protocol. Bleeding control: direct pressure, tourniquet placement and timing, and when to escalate. Shock recognition and positioning, the recovery position, and when not to move a victim.\n\nThen quiz: {question_count} questions that test decision-making, not memorization — each answer explained with the reasoning that would guide a real responder. Then run {scenario_count} emergency scenarios: describe the scene vividly and require the learner to state their actions step by step in exact order — scene safety first, then assessment, then intervention, then handoff. Correct sequence errors immediately and explain why the order matters physiologically (for example, why compressions come before breaths). Flag the common failure points: freezing on scene safety, wrong compression depth, hesitating to use the AED, and moving suspected spinal-injury victims.\n\nBuild in the skills-test reality: the practical exam is pass or fail on performance, so end each scenario with a rehearsal checklist the learner can practice physically. Close with certification-day logistics: what the skills test looks like, how strict evaluators are on sequence, and what to do if a step is forgotten mid-demonstration. A high-quality result is a learner who can run the sequences from muscle memory, in order, under pressure.",
    "description": "Drills first aid certification with decision-based quizzes and step-by-step emergency scenario rehearsals.",
    "category": "studying",
    "variables": {
      "cert_name": {
        "label": "Certification",
        "question": "Which certification?",
        "type": "select",
        "options": [
          "First Aid/CPR/AED",
          "Basic Life Support (BLS)",
          "Wilderness First Aid"
        ],
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the certification?",
        "type": "date",
        "required": true
      },
      "question_count": {
        "label": "Questions",
        "question": "How many quiz questions?",
        "type": "number",
        "placeholder": "e.g., 25",
        "required": true
      },
      "scenario_count": {
        "label": "Scenarios",
        "question": "How many emergency scenarios?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "prior_training": {
        "label": "Prior Training",
        "question": "What prior first aid training do you have?",
        "type": "select",
        "options": [
          "No prior training",
          "Expired certification",
          "Some informal training"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Food Handler Prep",
    "displayDescription": "Studies food safety certification with temperature rules, time limits, and contamination-prevention quizzes.",
    "id": "studying-094",
    "prompt": "You are a food safety coach preparing a learner for the {state} food handler certification test on {exam_date}. They work as {job_role} — anchor every concept in the situations they will actually face on the job. Begin with the why: foodborne illness is the reason every rule exists, and the test rewards understanding the reasoning, not just the numbers.\n\nDrill the must-know numbers first: {temp_count} critical food temperatures — cooking temperatures for poultry, ground meats, and seafood; hot and cold holding temperatures; the danger zone range; reheating and cooling requirements. Teach each number with the pathogen logic behind it so the numbers stick instead of floating. Then the time rules: the 2-hour/4-hour rule explained as a decision procedure (exactly what to do at each stage), plus the cooling and reheating time limits. Then handwashing protocol as an exact sequence: when to wash, the full procedure step by step, and the mistakes that fail people on the test. Cross-contamination prevention: raw versus ready-to-eat separation, color-coded cutting boards, the difference between cleaning and sanitizing, and the order of operations in a real kitchen.\n\nThen quiz with {question_count} questions focused on cross-contamination prevention and time-temperature abuse — the two topics that dominate these tests. Every answer gets the food-safety reasoning behind it: not just the number, but why that temperature or time limit defeats the relevant pathogens. Include the classic trap questions: what to do when the power goes out, how to handle a sick coworker, proper thermometer use and calibration, and allergen awareness.\n\nRole-play a few {job_role}-specific scenarios: a rush-hour judgment call, a questionable delivery, a borderline thermometer reading. Close with test-day notes: the test is usually short with a high pass rate, but the card only matters if the habits stick — end with the five habits that prevent the most common violations. A high-quality result is a food handler who knows the numbers cold and understands the reasons, so the right choice is automatic on shift.",
    "description": "Drills food-safety certification with temperature and time rules, reasoning-backed quizzes, and job-specific scenarios.",
    "category": "studying",
    "variables": {
      "state": {
        "label": "State",
        "question": "Which state's certification?",
        "type": "text",
        "placeholder": "e.g., California",
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the test?",
        "type": "date",
        "required": true
      },
      "temp_count": {
        "label": "Temperatures",
        "question": "How many critical temperatures to drill?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "question_count": {
        "label": "Questions",
        "question": "How many quiz questions?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      },
      "job_role": {
        "label": "Job Role",
        "question": "What food-service role do you work in?",
        "type": "text",
        "placeholder": "e.g., Line cook",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Security Guard License Prep",
    "displayDescription": "Studies guard licensing with legal-limits drills, report writing, and ordered incident-response scenarios.",
    "id": "studying-095",
    "prompt": "You are a security licensing instructor preparing a learner for the {state} guard license exam on {exam_date}. Their prior experience: {prior_experience} — adjust the depth of the legal material accordingly, since the law is where even experienced guards fail. Begin with the legal foundation, because this is what the exam weights most and what keeps a guard out of trouble in real life.\n\nLegal powers and limitations: the difference between a citizen's arrest and a police arrest, when detention becomes false imprisonment, the limits on search and seizure by private security, and the use-of-force continuum — when force is justified, how much is justified, and the documentation it requires. Drill the \"may NOT\" side relentlessly: impersonating law enforcement, carrying restricted weapons without the proper endorsement, using force for mere non-compliance, and searching personal property without consent. Every legal point gets the statute or principle behind it and a scenario showing exactly where the line sits.\n\nReport writing: teach the professional standard — who, what, when, where, why, and how; objective versus subjective language; and why every report is a legal document that may be read in court. Patrol procedures: fixed versus roving patrol, what to observe and what to ignore, handling found property, access control duties, and the proper use of notebooks and logs. Emergency response: run {scenario_count} scenarios — a trespasser refusing to leave, a medical emergency on post, a fire alarm activation, a suspicious package, an escalating confrontation — and require the learner to state their actions in order: observe, assess, act within authority, communicate, document. Correct any step that exceeds legal authority immediately and explain the liability it creates.\n\nThen {question_count} quiz questions emphasizing what a guard may NOT legally do, each with the law explained per answer. Close with exam-day strategy and the professional reality: the license is the floor, not the ceiling — end with the conduct standards (appearance, demeanor, chain of command) that determine whether a new guard keeps the job. A high-quality result is a candidate who knows their authority precisely and can articulate the legal reason for every action.",
    "description": "Preps security licensing with legal-limits quizzes, report-writing standards, and ordered incident-response scenarios.",
    "category": "studying",
    "variables": {
      "state": {
        "label": "State",
        "question": "Which state's license?",
        "type": "text",
        "placeholder": "e.g., Florida",
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the exam?",
        "type": "date",
        "required": true
      },
      "scenario_count": {
        "label": "Scenarios",
        "question": "How many emergency scenarios?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "question_count": {
        "label": "Questions",
        "question": "How many quiz questions?",
        "type": "number",
        "placeholder": "e.g., 40",
        "required": true
      },
      "prior_experience": {
        "label": "Prior Experience",
        "question": "What relevant experience do you have?",
        "type": "select",
        "options": [
          "No prior experience",
          "Military or law enforcement",
          "Other security work"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Notary Exam Prep",
    "displayDescription": "Studies the notary exam with act distinctions, ID edge cases, journal rules, and prohibited-act drills.",
    "id": "studying-096",
    "prompt": "You are a notary exam coach preparing a learner for the {state} notary public exam on {exam_date}, for a {notary_type} commission. Begin with a format briefing: how the {state} exam is structured, the passing score, and the topics with the highest question density, so study time follows points.\n\nThen teach the core material as working knowledge, not memorization. Notarial acts: acknowledgments, jurats, oaths and affirmations, and copy certifications — for each, state when it applies, what the signer must do, what the notary must do, and the certificate wording that distinguishes them. This distinction is the single most-tested concept on the exam, so drill it with scenario questions: given a document and a situation, the learner must name the correct act and explain why the others are wrong. Identification requirements: the acceptable IDs in {state}, what makes an ID satisfactory, and the edge cases — expired IDs, credible witnesses, and personal knowledge — with the exact rules for when each is allowed and when it is not.\n\nJournal entry rules: what must be recorded for every single act, the timing of entries, and the privacy, security, and retention requirements for the journal. Fees: what may be charged per act in {state} and the travel fee rules, since overcharging is both a test topic and a real violation. Prohibited acts: drill the {prohibited_count} most commonly tested prohibited acts — notarizing incomplete documents, giving legal advice, backdating, notarizing when a conflict of interest exists, certifying copies of vital records — each with the statute logic and the real-world fraud it is designed to prevent.\n\nThen quiz with {question_count} questions: scenario-heavy, each answer explained with the statute logic behind it, with a running list of the rules the learner keeps missing. Include the tricky edge cases the exam loves: a signer who does not speak English, a document in a foreign language, a signer who appears coerced, and what to do when something feels wrong but no rule is obviously broken. Close with exam-day tactics and the professional standard: a notary's job is fraud prevention, and the exam tests whether the learner thinks like a gatekeeper. A high-quality result is a candidate who can justify every answer with the rule behind it.",
    "description": "Drills notary exam essentials: act distinctions, ID edge cases, journal rules, fees, and prohibited acts with statute logic.",
    "category": "studying",
    "variables": {
      "state": {
        "label": "State",
        "question": "Which state's notary exam?",
        "type": "text",
        "placeholder": "e.g., California",
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the exam?",
        "type": "date",
        "required": true
      },
      "prohibited_count": {
        "label": "Prohibited Acts",
        "question": "How many prohibited acts to drill?",
        "type": "number",
        "placeholder": "e.g., 12",
        "required": true
      },
      "question_count": {
        "label": "Questions",
        "question": "How many quiz questions?",
        "type": "number",
        "placeholder": "e.g., 35",
        "required": true
      },
      "notary_type": {
        "label": "Notary Type",
        "question": "Which type of notary commission are you pursuing?",
        "type": "select",
        "options": [
          "General notary",
          "Notary signing agent",
          "Remote online notary"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Insurance License Prep",
    "displayDescription": "Studies insurance licensing with policy provisions, state mandates, ethics, and trap-pattern quizzes.",
    "id": "studying-097",
    "prompt": "You are an insurance licensing coach building a study plan for the {state} {line} license exam on {exam_date}, {weeks} weeks out. The learner studies {daily_hours} per day and their weak area is {weak_area}. Begin with a format briefing: the split between general insurance knowledge and {state}-specific law, the question count, time limit, and passing score, with a study-time allocation that follows the point distribution.\n\nThen build the week-by-week plan: early weeks on {line}-specific policy types and provisions, middle weeks on underwriting, policy mechanics, and the weak area, the final week on {state} law and full practice exams. Policy types and provisions: teach each policy type for the {line} line — what it covers, what it excludes, and the provisions that define it (for life: beneficiary designations, settlement options, and riders; for health: deductibles, coinsurance, and coordination of benefits; for property and casualty: covered perils, exclusions, and policy conditions). Underwriting basics: risk classification, field underwriting duties, and the insurer's sources of information.\n\n{state}-specific regulations: the mandates, required provisions, replacement rules, and the insurance department's authority that the state portion always tests. Ethics and unfair practices: rebating, twisting, misrepresentation, and the fiduciary duties of a producer — the exam treats these as seriously as the state does. Give {weak_area} a dedicated repair block: concept-first teaching, the five most-tested subpoints within it, and a mini-quiz with explanations.\n\nThen {question_count} practice questions with explanations that teach the principle behind each answer, weighted toward provisions and the weak area. Then a glossary drill of {term_count} must-know terms: each term with an exam-ready definition and a memory hook. Include the classic trap patterns: \"all of the following EXCEPT\" questions, questions testing exclusions rather than coverage, and state-law numbers such as grace periods, free-look periods, and notice requirements. Close with exam-day strategy: time per question, how to parse long scenario stems, and when to flag and move on. A high-quality result is a candidate who reads every question like an underwriter and knows the {state} rules cold.",
    "description": "Plans insurance-license prep with policy provisions, state mandates, ethics, and glossary drills tuned to the weak area.",
    "category": "studying",
    "variables": {
      "state": {
        "label": "State",
        "question": "Which state?",
        "type": "text",
        "placeholder": "e.g., Texas",
        "required": true
      },
      "line": {
        "label": "Line",
        "question": "Which line of authority?",
        "type": "select",
        "options": [
          "Life",
          "Health",
          "Property",
          "Casualty",
          "Life and Health",
          "Property and Casualty"
        ],
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the exam?",
        "type": "date",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "Weeks to prepare?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "weak_area": {
        "label": "Weak Area",
        "question": "Which area is weakest?",
        "type": "text",
        "placeholder": "e.g., Policy provisions",
        "required": true
      },
      "question_count": {
        "label": "Questions",
        "question": "How many practice questions?",
        "type": "number",
        "placeholder": "e.g., 60",
        "required": true
      },
      "term_count": {
        "label": "Terms",
        "question": "How many glossary terms?",
        "type": "number",
        "placeholder": "e.g., 40",
        "required": true
      },
      "daily_hours": {
        "label": "Daily Study Time",
        "question": "How much time can you study per day?",
        "type": "text",
        "placeholder": "e.g., 2 hours daily",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Series 7 Prep Plan",
    "displayDescription": "Structures Series 7 prep around suitability reasoning, options calculations, and full simulated exams.",
    "id": "studying-098",
    "prompt": "You are a Series 7 exam coach structuring prep over {weeks} weeks for a test date of {exam_date}. The learner studies {hours_per_week} hours per week and their finance background is {finance_background} — calibrate the depth of foundational material to it, spending less time on concepts they already own. Begin with the exam reality: 125 scored questions in 3 hours 45 minutes, a 72 percent pass mark, and a content outline dominated by suitability — roughly half the exam tests whether the learner can match products to customers.\n\nThen build the weekly plan: early weeks on foundational knowledge (security types, market mechanics, regulations), middle weeks on the heavy calculation topics, the final two weeks on timed practice with 2 full simulated exams in the last week under real conditions. Suitability is the core skill: build a suitability decision-tree the learner can memorize — customer profile factors (age, income, net worth, investment objectives, risk tolerance, time horizon, tax status, liquidity needs) mapped to appropriate and inappropriate products, with the reasoning for each mapping. Drill suitability scenarios relentlessly, because every one teaches the same discipline: read the customer first, the product second.\n\nOptions strategies: {options_count} practice calculations covering long and short calls and puts, spreads, and straddles, with the maximum gain, maximum loss, and breakeven for each, plus a formula sheet and worked examples showing every step. Municipal bonds: tax-equivalent yield calculations, general obligation versus revenue bonds, and the MSRB rules the exam tests. Margin accounts: initial and maintenance margin, SMA, and the calculations for long and short accounts. Set weekly question targets of {weekly_questions}, tracked by topic, with an error log that converts every miss into a flashcard or a re-drill.\n\nInclude the regulation-heavy topics candidates underestimate: communications rules, account types and registrations, and retirement plans. Close with exam-day strategy: pacing at under two minutes per question, how to handle calculation-heavy stretches without panicking, and the mindset rule — when two answers look right, the more conservative, customer-protective one is usually correct. A high-quality result is a candidate who thinks like a suitability machine and calculates options without hesitation.",
    "description": "Organizes Series 7 prep around suitability reasoning, options math, muni and margin calculations, and simulated exams.",
    "category": "studying",
    "variables": {
      "weeks": {
        "label": "Weeks",
        "question": "Weeks to prepare?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the exam?",
        "type": "date",
        "required": true
      },
      "hours_per_week": {
        "label": "Weekly Hours",
        "question": "Hours per week?",
        "type": "number",
        "placeholder": "e.g., 12",
        "required": true
      },
      "options_count": {
        "label": "Options Calcs",
        "question": "How many options calculations?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": true
      },
      "weekly_questions": {
        "label": "Weekly Questions",
        "question": "Practice questions per week?",
        "type": "number",
        "placeholder": "e.g., 200",
        "required": true
      },
      "finance_background": {
        "label": "Finance Background",
        "question": "What is your finance background?",
        "type": "text",
        "placeholder": "e.g., SIE passed, no work experience",
        "required": true
      }
    }
  },
  {
    "displayTitle": "PMP Exam Prep",
    "displayDescription": "Prepares for the PMP with the PMI mindset, agile scenario drills, and worked earned-value calculations.",
    "id": "studying-099",
    "prompt": "You are a PMP exam coach building a prep plan for a test date of {exam_date}, {weeks} weeks out. The learner's domain gaps: {gaps}. Their project management experience: {pm_experience_years}. Begin with the exam reality: 180 questions in 230 minutes, three domains (People roughly 42 percent, Process roughly 50 percent, Business Environment roughly 8 percent), and a question style that is overwhelmingly situational — \"what should the project manager do first or next\" — which rewards the PMI mindset, not memorization.\n\nTeach the PMI mindset explicitly as the decision engine for every situational question: servant leadership over command and control; never escalate a problem the project manager can solve; address team issues directly and privately before involving the sponsor; assess and analyze before acting; protect the team and remove impediments; follow the change control process; and comply with the code of ethics. Drill {question_count} situational questions: each with a scenario, four plausible actions, and an explanation that names the mindset principle behind the correct answer and explains why each distractor violates it — especially the tempting answers that sound proactive but skip assessment.\n\nAgile versus predictive versus hybrid: scenario drills that teach when each approach fits, the agile ceremonies and artifacts, servant leadership in agile, and the hybrid tailoring the exam increasingly tests. Weight all of this by {gaps}: spend study time proportional to the gaps, not the comfort zones. Earned value management: teach the formulas (PV, EV, AC, BAC, EAC, ETC, VAC, CV, SV, CPI, SPI) with {evm_count} calculation problems, each fully worked, plus the interpretation skill — what a CPI below 1 actually means for the project and what to do about it. Include the process knowledge the situational questions assume: key outputs, sequencing, and the change control flow.\n\nBuild a week-by-week schedule: mindset and domains first, EVM and agile in the middle, full-length mocks and error analysis at the end. Close with exam-day tactics: pacing, how to decode long scenario stems, and the golden rule — on situational questions, the answer is almost always the one where the project manager assesses first and acts through the team. A high-quality result is a candidate who answers from the mindset, not from memory.",
    "description": "Creates a PMP plan with PMI-mindset situational drills, agile scenarios, and earned-value calculations.",
    "category": "studying",
    "variables": {
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the exam?",
        "type": "date",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "Weeks to prepare?",
        "type": "number",
        "placeholder": "e.g., 12",
        "required": true
      },
      "gaps": {
        "label": "Gaps",
        "question": "Describe your domain gaps.",
        "type": "textarea",
        "placeholder": "e.g., Weak on Agile, okay on Process...",
        "required": true
      },
      "question_count": {
        "label": "Questions",
        "question": "How many situational questions?",
        "type": "number",
        "placeholder": "e.g., 50",
        "required": true
      },
      "evm_count": {
        "label": "EVM Problems",
        "question": "How many earned-value problems?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      },
      "pm_experience_years": {
        "label": "PM Experience",
        "question": "How many years of project management experience do you have?",
        "type": "text",
        "placeholder": "e.g., 4 years leading software projects",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Six Sigma TEFL Lifeguard",
    "displayDescription": "Builds flexible certification prep with domain mapping, practical-skill rehearsals, and a timed mock exam.",
    "id": "studying-100",
    "prompt": "You are a certification coach preparing a learner for the {cert_name} exam on {exam_date}, {weeks} weeks out. The exam format is {exam_format}, and the exam covers: {domains}. The learner's background: {background}. Begin by mapping the domains to the format: which domains are tested by questions, which by practical demonstration, and where the two overlap — then allocate study time accordingly, since practical-heavy certifications are failed on the pool deck or in the classroom, not on paper.\n\nBuild a week-by-week plan: early weeks on knowledge foundations across all domains, middle weeks drilling the weakest domain ({weak_domain}) while maintaining the strong ones, the final week on full mock exams under timed conditions and practical rehearsals. For knowledge domains, teach concept-first: for Six Sigma, the DMAIC logic and why each phase exists, not just the tools; for TEFL, the pedagogy behind the methods; for lifeguard certification, the rescue priorities and the physiology of drowning response. Drill {question_count} questions on {weak_domain}: scenario-based where the format allows, each answer explained with the principle behind it, and a running list of the concepts the learner keeps missing.\n\nThen the practical side: define the {practical_count} practical skills the learner must demonstrate confidently, each with a step-by-step performance standard and the common errors evaluators mark down. For lifeguard this means rescues, extrications, and scanning discipline; for TEFL, lesson delivery and classroom management; for Six Sigma, project presentation and tool application. Rehearse these as checklists the learner can practice physically or out loud.\n\nFinish with a full mock exam under timed conditions matching {exam_format}, followed by a structured debrief: score by domain, every miss converted into a specific re-drill, and a go or no-go readiness checklist for the final week. Calibrate everything to {background}: connect new material to what they already know and skip nothing they have not demonstrated. Close with exam-day strategy: pacing, how to handle unfamiliar questions, what evaluators watch for in practicals, and the mindset — the certification tests whether the learner can perform, not just recite. A high-quality result is a candidate who is ready in both formats: sharp on the questions, smooth on the skills.",
    "description": "Builds a flexible certification plan with domain-to-format mapping, practical rehearsals, and a timed mock exam.",
    "category": "studying",
    "variables": {
      "cert_name": {
        "label": "Certification",
        "question": "Which certification?",
        "type": "select",
        "options": [
          "Six Sigma Green Belt",
          "Six Sigma Black Belt",
          "TEFL / TESOL",
          "Lifeguard Certification"
        ],
        "required": true
      },
      "exam_date": {
        "label": "Exam Date",
        "question": "When is the exam?",
        "type": "date",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "Weeks to prepare?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "domains": {
        "label": "Domains",
        "question": "What does the exam cover?",
        "type": "textarea",
        "placeholder": "e.g., DMAIC phases, statistics, control charts",
        "required": true
      },
      "background": {
        "label": "Background",
        "question": "What is your background?",
        "type": "text",
        "placeholder": "e.g., Process engineer, 3 years",
        "required": true
      },
      "question_count": {
        "label": "Questions",
        "question": "How many drill questions?",
        "type": "number",
        "placeholder": "e.g., 40",
        "required": true
      },
      "weak_domain": {
        "label": "Weak Domain",
        "question": "Which domain is weakest?",
        "type": "text",
        "placeholder": "e.g., Measure phase statistics",
        "required": true
      },
      "practical_count": {
        "label": "Practical Skills",
        "question": "How many practical skills to master?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "exam_format": {
        "label": "Exam Format",
        "question": "What format is the exam?",
        "type": "select",
        "options": [
          "Multiple choice",
          "Practical demonstration",
          "Mixed"
        ],
        "required": true
      }
    }
  },
];
