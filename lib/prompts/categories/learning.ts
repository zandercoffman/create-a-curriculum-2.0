import type { PromptSchema } from "../types";

export const learningPrompts: PromptSchema[] = [
  {
    "displayTitle": "30-Day Language Learning Plan",
    "displayDescription": "Builds a day-by-day 30-day study plan for any language, phased week by week and matched to your level, time, and motivation.",
    "id": "learning-001",
    "prompt": "Design a 30-day self-study plan for learning {language}. I am at the {currentLevel} level, I can study {dailyMinutes} minutes per day, and my reason for learning is: {motivation}. Treat this as a practical study calendar I can follow day by day, not a theory document.\n\nStructure the plan as four weekly phases with a clear progression. Week 1 (foundations) should cover the sounds, core high-frequency vocabulary, and survival phrases that unlock everything else. Week 2 (building) should add grammar patterns and listening comprehension for everyday situations tied to {motivation}. Week 3 (stretch) should push me into real-world use slightly beyond my comfort zone. Week 4 (consolidation) should recycle everything into fluent recall. Give each week a measurable goal written as an observable behavior (for example, \"hold a 2-minute self-introduction without notes\") rather than a vague aspiration.\n\nFor each of the 30 days, provide a concrete task list that fits inside {dailyMinutes} minutes and mixes vocabulary, grammar, listening, and speaking in roughly a 40/25/20/15 split — never a day of only flashcards. Tell me exactly what to do, not just what to study: \"listen to a 5-minute clip twice and write down every word you recognize\" beats \"practice listening.\" End each day with a 2-minute self-check question so I can confirm I actually learned something before moving on.\n\nInclude a simple progress tracker I can fill in daily: date, minutes studied, what I completed, one thing I feel confident about, one thing still shaky. Add a weekly review session on days 7, 14, 21, and 28 that recycles earlier material using spaced repetition — specify exactly which earlier content returns each week and why, so nothing fades.\n\nFinally, include rules for missed days (how to catch up without doubling up and burning out), guidance on when to move faster or slower than the plan, and a short list of resource *types* suited to a {currentLevel} learner (graded readers, slow podcasts, shadowing audio) aligned with {motivation}. Calibrate the whole plan so it is challenging but completable: a 30-day plan I finish beats a perfect one I abandon.",
    "description": "Generates a phased 30-day language plan with measurable weekly goals, concrete daily task lists, a progress tracker, and spaced review sessions.",
    "category": "learning",
    "variables": {
      "language": {
        "label": "Language",
        "question": "Which language do you want to learn?",
        "type": "text",
        "placeholder": "e.g., Spanish",
        "required": true
      },
      "currentLevel": {
        "label": "Current Level",
        "question": "What is your current level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Some Basic Phrases",
          "Can Hold Simple Conversations",
          "Intermediate"
        ],
        "required": true
      },
      "dailyMinutes": {
        "label": "Daily Minutes",
        "question": "How many minutes can you study each day?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      },
      "motivation": {
        "label": "Motivation",
        "question": "Why are you learning this language?",
        "type": "textarea",
        "placeholder": "e.g., I am moving to Mexico City for work in six months and want to handle daily life in Spanish",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Conversation Practice Partner",
    "displayDescription": "Turns the AI into a patient conversation partner who asks questions, corrects you kindly, and keeps you talking.",
    "id": "learning-002",
    "prompt": "Act as my {language} conversation partner at the {level} level. The topic is {topic}, and my reason for practicing is: {goal}. Your job is to keep me talking as much as possible, not to lecture me.\n\nFollow these interaction rules strictly. Ask me one question at a time and wait for my answer before continuing. Keep your own replies short — no more than two sentences — so I do at least 70 percent of the talking. Use vocabulary and sentence structures appropriate to a {level} speaker: stretch me slightly, but never bury me. If I clearly cannot answer, do not explain; rephrase the question more simply or offer me two choices I can respond to.\n\nAfter each of my replies, handle corrections in this exact order. First, briefly acknowledge what I said so I feel heard. Second, if I made errors, correct them gently: show my original sentence with the error highlighted, give the corrected version, and in one short sentence explain why. Correct at most two errors per reply — prioritize the ones that block understanding or that I keep repeating, and note patterns you see across turns. Third, suggest one more natural or idiomatic way to phrase my sentence, marked as optional color rather than a correction. Then continue the conversation with your next question.\n\nStructure the session like this. Start with a two-question warm-up about my day to get me talking easily, then move into {topic}, then run three deeper questions that connect {topic} to {goal}. End with a 3-minute wrap-up: list the 3 to 5 most important corrections from the session, the error pattern I should watch for, and one specific thing I did well.\n\nIf I switch to English, respond in {language} anyway with a gentle nudge back. Never break character to give a grammar lecture mid-conversation; save all teaching for the wrap-up. A high-quality session leaves me having spoken in long stretches, with corrections that feel encouraging rather than deflating.",
    "description": "Runs a structured conversation session with turn-taking rules, gentle prioritized corrections, natural phrasing upgrades, and a wrap-up review.",
    "category": "learning",
    "variables": {
      "language": {
        "label": "Language",
        "question": "Which language should we practice?",
        "type": "text",
        "placeholder": "e.g., French",
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your speaking level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What should we talk about?",
        "type": "text",
        "placeholder": "e.g., Travel plans",
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "Why are you practicing conversation?",
        "type": "textarea",
        "placeholder": "e.g., I have a job interview in Portuguese next month and need to sound natural",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Grammar Concept Explainer",
    "displayDescription": "Explains any grammar rule in plain language with annotated examples, common mistakes, and a graduated practice set.",
    "id": "learning-003",
    "prompt": "Teach me the {language} grammar concept of {concept} as a {level} learner. Here is what currently confuses me about it: {confusion}. Build the lesson around that confusion — it tells you where my mental model is wrong, so address it directly rather than teaching the concept as if I were a blank slate.\n\nStart with the core rule stated in one plain sentence with no jargon. Then give me three annotated examples in order of increasing complexity. For each example, show the original sentence, a literal word-by-word translation, a natural translation, and one sentence explaining exactly which part of the rule is at work in that example. Where {confusion} applies, point out how the example resolves it.\n\nNext, list the two or three most common mistakes learners make with {concept}. For each mistake, show a wrong sentence, the corrected version, and a short explanation of *why* learners make that error — usually because of a false pattern from another concept or from English. Include the genuine exceptions and edge cases to the rule, with a memory aid for each so exceptions feel learnable rather than random.\n\nFinish with five practice sentences for me to complete, graduated from easy to tricky, where the last two specifically target {confusion}. Provide an answer key, but do not just give the answers: explain the reasoning for each one so I can self-correct on future sentences. End with a one-paragraph self-check guide — three questions I can ask myself whenever I use {concept} in the wild to know whether I got it right.\n\nKeep every explanation tied to meaning and use, not terminology. If a grammatical term is unavoidable, define it in plain words the first time it appears.",
    "description": "Builds a lesson around your specific confusion, with plain-rule statements, annotated examples, mistake analysis, and an explained answer key.",
    "category": "learning",
    "variables": {
      "language": {
        "label": "Language",
        "question": "Which language's grammar are you learning?",
        "type": "text",
        "placeholder": "e.g., German",
        "required": true
      },
      "concept": {
        "label": "Concept",
        "question": "Which grammar concept should be explained?",
        "type": "text",
        "placeholder": "e.g., The subjunctive mood",
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "confusion": {
        "label": "What's Confusing",
        "question": "What specifically confuses you about this concept?",
        "type": "textarea",
        "placeholder": "e.g., I never know when to use it versus the indicative, and the triggers all blur together",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Pronunciation Drills",
    "displayDescription": "Builds targeted pronunciation drills with articulation guidance, native-language interference fixes, and minimal-pair work.",
    "id": "learning-004",
    "prompt": "Create a pronunciation drill set for {language} focused on these sounds or patterns: {sounds}. I am a {level} learner whose first language is {nativeLanguage}. Use that information: tell me which substitutions speakers of {nativeLanguage} typically make for each target sound, and build the drills around breaking those specific habits.\n\nFor each sound, begin with articulation guidance in plain words: exactly where the tongue goes, what the lips do, whether the vocal cords vibrate, and how the air flows. Describe what the sound should *feel* like, not just what it should sound like, so I can self-correct without a teacher listening. Name the {nativeLanguage} sound I am probably substituting, and give me one physical cue that blocks the substitution.\n\nThen provide the drills. For each sound, list five practice words in order of difficulty — starting with the sound in an easy position (between vowels, for example) and ending with it in the hardest position. Include one minimal-pair contrast exercise per sound (two words that differ only in that sound), with a self-test: I say one at random and check whether a listener — or my own recording — can tell which I meant. Finish each sound with one short practice sentence that uses it several times.\n\nAdd a 5-minute warm-up routine to do before the drills, a recording-and-compare protocol so I can track my own progress week to week, and clear criteria for when a sound is \"good enough\" to stop drilling it. Match all vocabulary to a {level} learner so I am not tripping over unknown words while working on sounds. A high-quality drill set leaves me knowing exactly what my mouth should do and how to tell when it did it right.",
    "description": "Creates interference-aware pronunciation drills with feel-based articulation cues, graded words, minimal pairs, and a self-assessment protocol.",
    "category": "learning",
    "variables": {
      "language": {
        "label": "Language",
        "question": "Which language are you working on?",
        "type": "text",
        "placeholder": "e.g., Mandarin",
        "required": true
      },
      "sounds": {
        "label": "Sounds",
        "question": "Which sounds or patterns do you struggle with?",
        "type": "textarea",
        "placeholder": "e.g., The rolled R, the th sound",
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "nativeLanguage": {
        "label": "First Language",
        "question": "What is your first language?",
        "type": "text",
        "placeholder": "e.g., English",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Vocabulary Building System",
    "displayDescription": "Sets up a themed week of vocabulary with memory hooks, collocations, and spaced review ending in a cumulative quiz.",
    "id": "learning-005",
    "prompt": "Build a one-week personal vocabulary system for {language} around the theme of {theme}. I am a {level} learner and want {wordsPerDay} new words per day. Design this so the words actually stick and become usable, not just recognizable on a flashcard.\n\nFor each day, give me {wordsPerDay} words chosen for frequency and usefulness within {theme} at the {level} level — real words I will encounter, not rare showpieces. For every word, provide: the translation, the part of speech, one natural example sentence (matched to {level} difficulty), one memory hook (a vivid image, a sound-alike, or a word-origin story — vary the hook type across the week so I am not getting the same trick seven days straight), and one common collocation so I learn the word the way natives actually use it.\n\nAdd a daily review routine built on spaced repetition: specify exactly which earlier days' words return on each new day and in what format (active recall from memory, never passive rereading). Include a 5-minute morning warm-up and an evening self-test for each day.\n\nFinish the week with a Friday cumulative quiz that recycles all the week's words in brand-new contexts — sentences and situations I have not seen before — so it tests real acquisition rather than memorized card order. Mix the formats: fill-in-the-blank, translation both directions, and one short paragraph I write using at least ten of the words.\n\nClose with guidance on which words deserve extra attention (the ones I will actually need) versus which can stay at recognition level, and a rule for how to keep the strongest words alive in week two without redoing the whole system.",
    "description": "Builds a seven-day themed vocabulary plan with memory hooks, collocations, spaced review, and a new-context cumulative quiz.",
    "category": "learning",
    "variables": {
      "language": {
        "label": "Language",
        "question": "Which language are you learning?",
        "type": "text",
        "placeholder": "e.g., Italian",
        "required": true
      },
      "theme": {
        "label": "Theme",
        "question": "What theme should the vocabulary cover?",
        "type": "text",
        "placeholder": "e.g., Cooking and restaurants",
        "required": true
      },
      "wordsPerDay": {
        "label": "Words Per Day",
        "question": "How many new words per day?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your level?",
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
    "displayTitle": "Language Immersion Plan",
    "displayDescription": "Designs a home immersion schedule fitted to your actual daily routine, with time-slot activities and weekly stretch challenges.",
    "id": "learning-006",
    "prompt": "Create a home immersion plan for learning {language} at the {level} level, targeting about {hoursPerDay} hours of daily exposure. Here is what a typical day looks like for me: {dailyRoutine}. Fit the plan to that reality — assign specific activities to the time slots I actually have (morning, commute, work breaks, evening), not to an idealized schedule.\n\nDistribute the four modes of exposure across my day with intent: listening (podcasts, shows, audio matched to {level}), reading (graded articles, subtitles, short texts), shadowing (repeating aloud right behind a speaker), and thinking in the language (narrating my own actions silently). Put the hardest, most active work — shadowing and thinking — in the slots where I have the most energy, and passive listening in the low-energy slots. Give me exact activity instructions for each slot, including what to listen to or read at the {level} level.\n\nSet clear rules for when English is allowed and when it is not, with named exceptions (work emergencies, safety, genuine confusion) so the rules survive contact with real life. Include two background-exposure upgrades that cost no extra time: switching my phone's language, labeling household objects, or similar.\n\nAdd a weekly immersion challenge that pushes me slightly beyond my comfort zone — for example, a 30-minute conversation with a tutor, watching one episode with no subtitles, or ordering food entirely in {language} — with the challenge escalating slightly each week for four weeks.\n\nFinally, include a simple daily tracking method (minutes per mode, one win, one struggle) and honest burnout guards: signs I am overdoing it, and how to scale back without quitting. A good plan should make {language} unavoidable in my day, not add a second job to it.",
    "description": "Fits an immersion schedule to your real routine with energy-matched activities, English-use rules, weekly challenges, and burnout guards.",
    "category": "learning",
    "variables": {
      "language": {
        "label": "Language",
        "question": "Which language do you want to immerse in?",
        "type": "text",
        "placeholder": "e.g., Japanese",
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your current level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "hoursPerDay": {
        "label": "Hours Per Day",
        "question": "How many hours of daily exposure can you manage?",
        "type": "number",
        "placeholder": "e.g., 2",
        "required": true
      },
      "dailyRoutine": {
        "label": "Daily Routine",
        "question": "Describe your typical day (schedule, commute, free time):",
        "type": "textarea",
        "placeholder": "e.g., Up at 7, 40-min drive to work, desk job, home by 6, free after 8pm",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Python Learning Roadmap",
    "displayDescription": "Maps a paced, project-based path from your current level to a concrete Python goal with a capstone brief.",
    "id": "learning-007",
    "prompt": "Build a learning roadmap for Python starting from {skillLevel} and ending with the ability to complete this goal: {goal}. I can study about {weeklyHours} hours per week — pace the roadmap to that reality, with rough time estimates per stage so I can see the whole journey in calendar terms.\n\nSequence the topics so each stage genuinely builds on the last, and state the dependency explicitly (\"you need X before Y because...\"). For each stage, list the core concepts, one small hands-on project with clear acceptance criteria (how I know it works), and the debugging skill that stage teaches — because learning Python is half learning to fix Python.\n\nFlag the concepts beginners most often misunderstand at each stage (mutability, scope, references, the difference between == and is, and similar traps), showing the wrong mental model and the corrected one. Calibrate difficulty to {skillLevel}: skip nothing I need, belabor nothing I already know.\n\nEnd with a capstone project brief directly tied to {goal}: a concrete specification with requirements, constraints, and a definition of done that proves I am ready. Include what \"ready for {goal}\" actually looks like in practice — the tasks I should be able to do unaided — and a short list of resource types per stage (interactive tutorials, documentation sections, practice sites) rather than a link dump.\n\nStructure the output as a staged roadmap I can print and check off, with milestones that feel like real achievements, not homework assignments.",
    "description": "Generates a paced, project-driven Python roadmap with misconception warnings, time estimates, and a capstone brief tied to your goal.",
    "category": "learning",
    "variables": {
      "skillLevel": {
        "label": "Skill Level",
        "question": "What is your current coding level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Some Coding Experience",
          "Comfortable Programmer"
        ],
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What do you want to be able to do with Python?",
        "type": "text",
        "placeholder": "e.g., Automate spreadsheet reports",
        "required": true
      },
      "weeklyHours": {
        "label": "Weekly Hours",
        "question": "How many hours per week can you study?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      }
    }
  },
  {
    "displayTitle": "JavaScript Learning Roadmap",
    "displayDescription": "Lays out a JavaScript path with cumulative mini-projects, classic gotcha warnings, and understanding checkpoints.",
    "id": "learning-008",
    "prompt": "Create a JavaScript learning roadmap starting at {skillLevel} and ending with the ability to build {goal}. I learn best by {learningStyle} — shape the stages and projects around that preference rather than fighting it.\n\nOrder the concepts from fundamentals to advanced, and for each stage state what it unlocks later so I understand why the order matters. After each section, include one mini project that combines everything learned so far — each project should be a small but complete thing I could show someone, building toward {goal} piece by piece.\n\nHighlight where JavaScript behaves unexpectedly for beginners: type coercion, the this keyword, scope and closures, asynchronous execution, and equality quirks. For each gotcha, show the surprising behavior, explain the underlying rule in plain language, and give me the one habit that avoids the trap.\n\nAdd checkpoint questions after each section that verify real understanding before moving on — questions that ask me to predict what code does or explain *why* something works, never questions I can answer by reciting a definition. Include what a good answer looks like so I can self-grade honestly.\n\nClose with a final build brief for {goal}: the features it should have, the order to build them in, and the specific roadmap skills each feature exercises. The roadmap should read as a build log in advance — every stage producing something tangible.\n\nAdd a section on getting unstuck: the debugging workflow for JavaScript specifically (reading error messages, using console and debugger effectively, isolating problems with minimal reproductions), and which resources to reach for at each stage when {learningStyle} alone is not enough — because the difference between learners who finish roadmaps and those who stall is rarely talent; it is having a protocol for confusion.",
    "description": "Produces a JavaScript sequence with showable mini-projects, plain-language gotcha explanations, and predict-the-code checkpoints.",
    "category": "learning",
    "variables": {
      "skillLevel": {
        "label": "Skill Level",
        "question": "What is your current coding level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Some Coding Experience",
          "Comfortable Programmer"
        ],
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What do you want to build with JavaScript?",
        "type": "text",
        "placeholder": "e.g., An interactive portfolio site",
        "required": true
      },
      "learningStyle": {
        "label": "Learning Style",
        "question": "How do you learn best?",
        "type": "select",
        "options": [
          "Building Projects",
          "Watching Tutorials",
          "Reading Documentation",
          "A Mix Of Everything"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Web Development Path",
    "displayDescription": "Charts a beginner-to-job-ready web path with portfolio projects per phase and a realistic timeline.",
    "id": "learning-009",
    "prompt": "Map a complete beginner-to-job-ready web development learning path for someone starting at {startingPoint} who wants to build {goal}. My target timeline is {timeline} — pace the phases to that horizon honestly, and say plainly what is realistic within it versus what would need more time.\n\nSplit the path into phases: markup (HTML semantics and accessibility), styling (CSS layout, responsive design), interactivity (JavaScript and the DOM), and deployment (hosting, domains, version control basics). For each phase, list the core skills in learning order, explain why each skill comes where it does, and assign one portfolio-worthy project with acceptance criteria — the project should be something I would be proud to show an employer, not a tutorial clone.\n\nFor each phase, name the most common beginner traps and how to avoid them (tutorial hell, copying without understanding, skipping fundamentals, deploying nothing). Tell me what to deliberately skip or defer at each stage so I do not drown in the ecosystem.\n\nDefine what \"job-ready\" concretely means for someone building {goal}: the skills I should demonstrate, what my portfolio should contain, and the gaps employers actually notice. Include a simple progress-tracking structure per phase and a rule for when I am ready to move on (a small self-assessment, not a feeling). The output should feel like a mentor's honest plan — ambitious, but honest about the work involved.\n\nAdd a portfolio-presentation guide: how to present each phase project (the README that tells the story, the live demo link, the code a reviewer will actually read), what employers look for in junior portfolios (finished work, clean fundamentals, evidence of problem-solving — not framework bingo), and the three interview questions these projects should prepare me to answer. The path ends not at the last tutorial but at the first application sent with confidence.",
    "description": "Maps a phased, honestly paced web development plan with portfolio projects, trap warnings, and a concrete job-ready definition.",
    "category": "learning",
    "variables": {
      "startingPoint": {
        "label": "Starting Point",
        "question": "Where are you starting from?",
        "type": "select",
        "options": [
          "No Coding Experience",
          "Some HTML-CSS Experience",
          "Comfortable With One Language"
        ],
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What kind of sites do you want to build?",
        "type": "text",
        "placeholder": "e.g., Small business websites",
        "required": true
      },
      "timeline": {
        "label": "Timeline",
        "question": "What is your target timeline?",
        "type": "select",
        "options": [
          "3 Months",
          "6 Months",
          "1 Year",
          "No Rush"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Data Structures Study Plan",
    "displayDescription": "Teaches core data structures through analogies and a decision framework for choosing the right one.",
    "id": "learning-010",
    "prompt": "Design a data structures learning plan using {language} for a {level} learner. I practice best by {practiceStyle} — shape the exercises around that.\n\nCover arrays, linked lists, stacks, queues, hash tables, trees, and graphs, ordered so each structure builds intuition for the next (start with what I already use implicitly, then reveal the machinery). For each structure, give me: a real-world analogy that captures how it actually behaves under load, the core operations with their costs explained in plain words before any Big-O notation, one guided exercise where you walk me through the implementation thinking, and one solo exercise to do on my own with a solution I can check.\n\nAfter the structures, teach the skill that matters most: choosing the right one. Give me a decision framework — a set of questions about the operations I need (lookups? ordering? insertions?) that leads to the right structure — and walk through three realistic problems showing how the choice changes the solution.\n\nEnd with a spaced-review plan that cycles back through earlier structures so they do not decay, plus a short list of the misunderstandings that signal I have memorized rather than understood (and how to fix each). Calibrate depth to {level}: a {level} learner needs working intuition and selection judgment, not textbook proofs.\n\nAdd a plain-language treatment of efficiency: what Big-O notation is actually claiming, taught through the growth lens (how the work grows as the input grows), with the three complexity classes I will meet constantly and what each feels like in practice. Then give me a practice protocol for making structure selection reflexive: a five-minute daily exercise where I take a random problem and name the right structure — with reasoning — before solving anything.",
    "description": "Builds data-structure intuition in a dependency-aware order, with a selection decision framework and spaced review.",
    "category": "learning",
    "variables": {
      "language": {
        "label": "Language",
        "question": "Which programming language should examples use?",
        "type": "text",
        "placeholder": "e.g., Python",
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner Programmer",
          "Intermediate Programmer",
          "Preparing For Interviews"
        ],
        "required": true
      },
      "practiceStyle": {
        "label": "Practice Style",
        "question": "How do you practice best?",
        "type": "select",
        "options": [
          "Coding Challenges",
          "Tracing Through Examples",
          "Visual Diagrams",
          "A Mix"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Debugging Coach",
    "displayDescription": "Walks you through systematic debugging on your actual broken code, teaching the method so you need it less next time.",
    "id": "learning-011",
    "prompt": "Act as my debugging coach. Here is my {language} code:\n\n{problemCode}\n\nThe error I am seeing is: {errorMessage}\n\nHere is what I have already tried: {whatYouTried}. Do not repeat those steps back to me as suggestions — build on them or rule them out explicitly.\n\nWalk me through a systematic debugging process in this order. First, translate the error message into plain language: tell me what the error is actually complaining about and which part of my code it points to, because error messages are often misleading about location. Second, list three likely causes in order of probability, and for each one explain briefly why it fits the symptoms. Third, for each hypothesis, show me exactly how to test it — the specific print statement, breakpoint, or experiment to run, and what result would confirm or eliminate that cause. Teach me to test before changing code, not after.\n\nFourth, once the cause is identified, explain the fix and — critically — *why* it works, so I understand the underlying concept rather than memorizing a patch. If the bug reveals a gap in my understanding of {language} (scoping, types, async behavior, mutability), name that gap and give me a two-sentence lesson on it.\n\nEnd with a short debugging checklist I can reuse on future bugs: the five questions to ask in order before touching the code. Coach me like someone who wants to get better at debugging, not just someone who wants this one bug fixed. If my code or error message is ambiguous, ask me one clarifying question before theorizing rather than guessing.",
    "description": "Mentors you through error translation, ranked hypotheses, and hypothesis testing on your real code, ending with a reusable checklist.",
    "category": "learning",
    "variables": {
      "language": {
        "label": "Language",
        "question": "Which language is the code written in?",
        "type": "text",
        "placeholder": "e.g., JavaScript",
        "required": true
      },
      "problemCode": {
        "label": "Code",
        "question": "Paste the code that is not working:",
        "type": "textarea",
        "placeholder": "Paste your code here",
        "required": true
      },
      "errorMessage": {
        "label": "Error",
        "question": "What error message are you seeing?",
        "type": "textarea",
        "placeholder": "Paste the error message",
        "required": true
      },
      "whatYouTried": {
        "label": "Already Tried",
        "question": "What have you already tried?",
        "type": "textarea",
        "placeholder": "e.g., I added console.log before line 12 and the value was undefined",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Git Learning Plan",
    "displayDescription": "Teaches Git through a realistic workflow on your OS, with safe throwaway-repo exercises and a command cheat sheet.",
    "id": "learning-012",
    "prompt": "Create a hands-on Git learning plan for someone with {experience} experience who wants to {goal}. I work on {operatingSystem} — give me the exact commands and setup notes for that platform, including any GUI-vs-terminal differences I should know about.\n\nTeach through a realistic workflow in this order: initializing a repository, making commits with good messages, branching, merging, resolving merge conflicts, and collaborating through remotes and pull requests. For each concept, explain what is happening conceptually (what the repository actually looks like after the command) before giving the command, because Git makes no sense as memorized incantations.\n\nAfter each concept, give me a safe practice exercise I can run in a throwaway repository, with the exact setup commands to create it and the expected outcome so I can verify I did it right. Include at least one exercise where I deliberately break something — a bad merge, a commit on the wrong branch — and then fix it, since recovery is where real Git confidence comes from.\n\nAddress the {goal} angle directly: if I want to contribute to open source, teach forking and pull-request etiquette; if it is for personal projects, emphasize backup and history habits; if for a team job, emphasize branch conventions and clean history.\n\nFinish with a one-page cheat sheet of the essential commands, each with a one-line explanation of what it does and when to reach for it, plus a \"never do this\" list of the commands that rewrite shared history and why they are dangerous. A good plan leaves me unafraid of Git — able to experiment freely because I know how to recover.",
    "description": "Builds Git confidence through conceptual explanations, deliberate break-and-fix exercises, and a recovery-focused cheat sheet.",
    "category": "learning",
    "variables": {
      "experience": {
        "label": "Experience",
        "question": "How much Git have you used?",
        "type": "select",
        "options": [
          "Never Used Git",
          "Used It Casually",
          "Comfortable With Basics"
        ],
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What do you want to use Git for?",
        "type": "text",
        "placeholder": "e.g., Contributing to open source",
        "required": true
      },
      "operatingSystem": {
        "label": "Operating System",
        "question": "Which operating system do you use?",
        "type": "select",
        "options": [
          "Windows",
          "Mac",
          "Linux"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "SQL Starter Guide",
    "displayDescription": "Takes you from zero to real queries in your database's dialect, with an invented dataset and a capstone project.",
    "id": "learning-013",
    "prompt": "Teach me SQL from scratch as a {experience} learner whose goal is {goal}. I will be working in {database} — write all examples and syntax notes in that dialect, and flag wherever it differs from standard SQL so I do not learn habits that break elsewhere.\n\nProgress in this order: SELECT and WHERE (reading data), ORDER BY and LIMIT, aggregate functions with GROUP BY, JOINs (start with what a join actually means before the syntax), subqueries, and finally combining everything. For each concept, give me one worked example against a sample dataset you invent — design the dataset around {goal} (for example, marketing data if that is my goal) so every example feels relevant. Show the query, the result table, and a plain-language explanation of what the query asked for.\n\nAfter each section, give me two practice queries to write myself: one straightforward, one that requires combining the new concept with an earlier one. Provide solutions with explanations, not just the code.\n\nName the misconceptions that trap beginners at each stage: the difference between WHERE and HAVING, why GROUP BY changes what SELECT can contain, what NULL does to comparisons, and how joins silently multiply rows. For each, show the wrong mental model and the corrected one.\n\nFinish with a mini project brief tied to {goal}: a realistic dataset description, five questions the data should answer, and acceptance criteria for each. End with guidance on how to keep practicing — what kinds of questions to invent for myself — so the learning continues after the guide ends.",
    "description": "Progresses from SELECT to subqueries in your database's dialect, with a goal-themed dataset, misconception fixes, and a mini project.",
    "category": "learning",
    "variables": {
      "experience": {
        "label": "Experience",
        "question": "What is your experience level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Some Experience",
          "Comfortable With Spreadsheets"
        ],
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What do you want to use SQL for?",
        "type": "text",
        "placeholder": "e.g., Analyzing marketing data",
        "required": true
      },
      "database": {
        "label": "Database",
        "question": "Which database will you use?",
        "type": "select",
        "options": [
          "SQLite",
          "PostgreSQL",
          "MySQL",
          "SQL Server",
          "Not Sure Yet"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Regex Explainer",
    "displayDescription": "Demystifies any regex piece by piece in your flavor, with stricter/looser variations and graded test cases.",
    "id": "learning-014",
    "prompt": "Teach me regular expressions by building up to this pattern: {pattern}. I will be using regex in {flavor} for the purpose of {useCase} — explain everything in that flavor's syntax and warn me about the flavor-specific quirks that would surprise someone coming from elsewhere (escaping rules, lookaround support, and similar).\n\nBreak the pattern into its smallest meaningful pieces. For each piece, show the exact characters, explain in plain language what it matches, and give one concrete example string it matches plus one it rejects — and why. Build the pattern back up piece by piece so I see how the parts combine, rather than presenting the finished pattern as a magic spell.\n\nThen show me three variations: one stricter version (what would I change to reject more inputs, and when would I want that), one looser version (what would I relax, and what risk does that introduce), and one alternative pattern that solves {useCase} more robustly or more readably than the original. For each variation, explain the trade-off explicitly.\n\nFinish with five test strings against the original pattern. For each, tell me whether it matches and walk through the matching process step by step so I can see the engine's logic. End with the two or three regex habits that prevent most real-world bugs: anchoring, escaping user input, and testing edge cases like empty strings. A good explanation leaves me able to read any pattern of similar complexity, not just this one.",
    "description": "Deconstructs your pattern atom by atom in your regex flavor, with trade-off-aware variations and step-by-step match tracing.",
    "category": "learning",
    "variables": {
      "pattern": {
        "label": "Pattern",
        "question": "Which regex pattern do you want to understand?",
        "type": "text",
        "placeholder": "e.g., ^[\\w.]+@[\\w]+\\.[a-z]+$",
        "required": true
      },
      "useCase": {
        "label": "Use Case",
        "question": "What do you want to use regex for?",
        "type": "text",
        "placeholder": "e.g., Validating form input",
        "required": true
      },
      "flavor": {
        "label": "Regex Flavor",
        "question": "Which tool or language's regex will you use?",
        "type": "select",
        "options": [
          "JavaScript",
          "Python",
          "PCRE / PHP",
          "Java",
          ".NET",
          "Grep / Command Line"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "AI Literacy Guide",
    "displayDescription": "Briefs you on how AI works and fails, grounded in your role and the tools you actually use.",
    "id": "learning-015",
    "prompt": "Give me a practical AI literacy briefing. I am a {role}, my focus is {focus}, and the AI tools I actually use are: {aiTools}. Ground every example in those tools and my work — abstract explanations of transformers will not help me; concrete stories about my kind of tasks will.\n\nExplain in plain language how modern AI systems learn (training on patterns in data, predicting likely outputs) and — more importantly — where they go wrong: hallucinated facts stated with total confidence, outdated knowledge, sycophancy (agreeing with my wrong premises), and failures at counting, logic, and precise instruction-following. For each failure mode, give me one realistic example set in a {role}'s work, showing what the mistake looks like in practice and why it is easy to miss.\n\nThen give me a checklist for evaluating AI-generated information before I trust it or share it, tailored to {focus}. The checklist should cover: verifying factual claims against a primary source, spotting the linguistic tells of a hallucination, knowing which tasks to never delegate fully, and what to do when the AI contradicts itself.\n\nClose with a short section on using AI well rather than fearing it: which parts of my work benefit most from AI assistance, which parts I should keep firmly human, and one habit that separates skilled AI users from over-trusting ones. The briefing should leave me neither awestruck nor paranoid — just competent.\n\nAdd a section on AI in my actual workflow: map the tasks of a {role} to trust tiers — safe to delegate with review, safe to delegate with verification, and never delegate — with a concrete {role} example in each tier. End with how to stay literate as the tools change: the two durable principles (verify important claims, understand the failure modes) that survive every model release, and the one news-reading habit that keeps me ahead of the hype cycle without drowning in it.",
    "description": "Delivers a role-grounded AI briefing with realistic failure examples and a practical trust-but-verify checklist.",
    "category": "learning",
    "variables": {
      "role": {
        "label": "Role",
        "question": "What is your role or profession?",
        "type": "text",
        "placeholder": "e.g., High school teacher",
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the briefing focus on?",
        "type": "select",
        "options": [
          "Understanding How AI Works",
          "Using AI Tools Responsibly",
          "Spotting AI Errors and Hype"
        ],
        "required": true
      },
      "aiTools": {
        "label": "AI Tools",
        "question": "Which AI tools do you use?",
        "type": "text",
        "placeholder": "e.g., ChatGPT for drafting, Copilot for coding",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Cybersecurity Basics",
    "displayDescription": "Turns security fundamentals into concrete weekly actions, organized around your biggest worry.",
    "id": "learning-016",
    "prompt": "Teach me practical cybersecurity fundamentals at the {level} level with an emphasis on {focus}. My biggest security worry right now is: {biggestWorry}. Start there — address that worry first with concrete steps, then build out the full foundation.\n\nCover passwords, phishing, software updates, network safety, and backups — but teach them as daily habits, not theory. For each area, give me: one concrete action to take this week (with exact steps, not \"use strong passwords\" but \"install this type of tool and do this with it\"), one warning sign to watch for that tells me something is wrong, and one free habit that costs nothing and takes under two minutes.\n\nExplain the *why* behind each habit in one or two sentences — enough that I understand what attack the habit blocks, because habits I understand survive longer than rules I memorize. Include two realistic attack scenarios aimed at someone in my {focus} situation, walking through how the attack works and exactly which of my new habits would have stopped it.\n\nCalibrate everything to {level}: no jargon without definitions, no enterprise tools for a personal-safety learner. End with a prioritized 30-day action list ordered by impact-per-effort, so if I do nothing else, the first five items cover most of my risk. The goal is a learner who is meaningfully safer by next week, not one who can define malware.\n\nAdd an incident-response mini-guide: what to do in the first hour if I suspect I have been hacked, phished, or infected — the steps in order (disconnect, preserve evidence, change passwords from a clean device, who to call), because panicking wrong is worse than the attack. Then tailor the {focus} angle: for family safety, the kid-specific conversations and parental controls that actually work; for small business, the employee-training minimum and the backup rule that saves companies.",
    "description": "Leads with your biggest worry, then builds habit-based defenses with attack scenarios and a 30-day prioritized action list.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your technical level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Somewhat Tech-Savvy",
          "IT Professional"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the emphasis be?",
        "type": "select",
        "options": [
          "Personal Safety",
          "Small Business Protection",
          "Family Safety"
        ],
        "required": true
      },
      "biggestWorry": {
        "label": "Biggest Worry",
        "question": "What is your biggest security worry?",
        "type": "text",
        "placeholder": "e.g., Someone hacking my email and locking me out",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Spreadsheet Mastery",
    "displayDescription": "Builds spreadsheet skill in your platform from basics to pivot tables, anchored to your real use case.",
    "id": "learning-017",
    "prompt": "Build a spreadsheet learning plan for a {level} user working in {platform} who wants to {useCase}. Write all formulas and instructions in {platform}'s syntax, and note where the other major platform differs so I do not learn something that breaks if I switch.\n\nSequence the learning from basic arithmetic and cell references, through logical functions and text functions, to lookup functions, pivot tables, and data cleaning. For each function, give me one realistic example drawn from {useCase} — real data I might actually have, not foo/bar placeholders — and explain what problem the function solves before showing its syntax. Teach me to read a function's structure (what each argument is for) rather than memorizing formulas.\n\nEnd each section with a small practice dataset I can recreate in under five minutes, plus two tasks to complete with it: one guided, one I figure out myself. Include the errors beginners hit most in {platform} (relative vs absolute references, numbers stored as text, the classic VLOOKUP column trap) with the fix for each.\n\nFinish with a capstone spreadsheet brief for {useCase}: what the finished spreadsheet should do, how it should be laid out so someone else can understand it, and the quality checks that prove it is correct (spot-checks, totals that reconcile). Close with three habits of people whose spreadsheets never break: documenting assumptions, separating inputs from formulas, and one backup rule. A good plan makes me dangerous with real data, not just fluent in function names.",
    "description": "Sequences spreadsheet skills in your platform's syntax with realistic examples, a rebuildable dataset per section, and a capstone brief.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your spreadsheet level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "useCase": {
        "label": "Use Case",
        "question": "What do you want to use spreadsheets for?",
        "type": "text",
        "placeholder": "e.g., Tracking freelance income",
        "required": true
      },
      "platform": {
        "label": "Platform",
        "question": "Which spreadsheet app do you use?",
        "type": "select",
        "options": [
          "Google Sheets",
          "Microsoft Excel",
          "Both"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Prompt Engineering Guide",
    "displayDescription": "Teaches effective prompting for your AI tool with weak-to-strong rewrites and graded practice exercises.",
    "id": "learning-018",
    "prompt": "Teach me to write effective prompts for {aiTool} at the {experience} level, focused on {useCase}. Make every example about {useCase} — generic \"write me a poem\" examples will not transfer to my real work.\n\nCover these techniques in order: role-setting (when it helps and when it is decoration), giving context (what the AI needs to know and what is noise), constraints (how to bound the output usefully), examples (few-shot prompting done right), and output formats (getting structure you can actually use). For each technique, show a weak prompt about {useCase}, diagnose exactly why it is weak, then show the improved version and explain what each change buys me. The diagnosis matters more than the rewrite — I need to learn to see weakness in my own prompts.\n\nAddress the failure modes of prompting itself: over-constraining until the output is robotic, under-constraining until it is useless, and the temptation to fix bad outputs with longer prompts instead of better structure. Teach me the iterate loop: run, diagnose the specific gap, change one thing, rerun.\n\nFinish with three practice exercises matched to {useCase}, ordered by difficulty, where I write the prompt and you critique it against the techniques taught. Provide a strong example answer for each exercise so I can compare. End with a one-page prompting checklist I can run through before sending any important prompt — the five questions that catch most weak prompts before they waste a run.\n\nAdd two advanced techniques for after the fundamentals are solid: chaining (breaking a big {useCase} task into a prompt sequence where each output feeds the next, with what to verify between steps) and structured outputs (getting JSON, tables, or formatted results reliably — the instruction patterns that work and the ones models ignore). Then teach output evaluation: how to judge whether a result is good enough, the three failure signatures to watch for in {useCase} outputs, and when to iterate versus when to start over with a reframed prompt.",
    "description": "Teaches prompting through diagnosed weak-to-strong rewrites in your use case, with critiqued exercises and a pre-send checklist.",
    "category": "learning",
    "variables": {
      "experience": {
        "label": "Experience",
        "question": "How much have you used AI tools?",
        "type": "select",
        "options": [
          "New To AI Tools",
          "Regular AI User",
          "Building AI Workflows"
        ],
        "required": true
      },
      "useCase": {
        "label": "Use Case",
        "question": "What do you want to use AI prompts for?",
        "type": "text",
        "placeholder": "e.g., Drafting lesson plans",
        "required": true
      },
      "aiTool": {
        "label": "AI Tool",
        "question": "Which AI tool do you mainly use?",
        "type": "text",
        "placeholder": "e.g., ChatGPT, Claude, Gemini",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Machine Learning Intro",
    "displayDescription": "Introduces ML with everyday analogies and a first-project outline, calibrated to your math comfort.",
    "id": "learning-019",
    "prompt": "Introduce me to machine learning. My background is {background}, my goal is {goal}, and my comfort with math is: {mathComfort}. Calibrate every explanation to that math comfort — use intuition and visuals where I am shaky, and precise language where I can handle it. Never hide behind equations I cannot follow, and never dumb down what I can handle.\n\nExplain supervised, unsupervised, and reinforcement learning with one everyday analogy each, then go one level deeper: for each paradigm, name a real problem of type {goal} it would suit, what the \"training data\" would concretely be, and what a good versus bad result looks like in that context.\n\nWalk through how a model is actually trained and evaluated: what training means in plain terms, what a train/test split is protecting against, and what overfitting looks and feels like (with a concrete example). Explain the key vocabulary — features, labels, loss, validation — as working concepts I will use, not glossary entries.\n\nOutline a first hands-on project aimed at {goal}: the problem statement, what data I would need and where someone like me could realistically get it, the simplest model type to start with and why, the steps in order, and what success looks like versus what \"it ran without errors\" looks like — because those are very different things. Include the three most common beginner traps (dirty data, leaking the answer into training, and evaluating on the wrong metric) with how to spot each.\n\nEnd with an honest map of what comes after this introduction: the topics in learning order and which ones my {mathComfort} math level currently gates.",
    "description": "Explains ML paradigms through goal-relevant analogies, demystifies training and evaluation, and scopes a realistic first project.",
    "category": "learning",
    "variables": {
      "background": {
        "label": "Background",
        "question": "What is your background?",
        "type": "select",
        "options": [
          "Non-Technical",
          "Programmer",
          "Data Analyst"
        ],
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What do you want to achieve with machine learning?",
        "type": "text",
        "placeholder": "e.g., Predict customer churn",
        "required": true
      },
      "mathComfort": {
        "label": "Math Comfort",
        "question": "How comfortable are you with math?",
        "type": "select",
        "options": [
          "Math Makes Me Nervous",
          "Okay With High-School Math",
          "Comfortable With Statistics",
          "Strong Math Background"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Game Development Intro",
    "displayDescription": "Maps a concepts-first path into game dev with a milestone-broken starter game in your chosen engine.",
    "id": "learning-020",
    "prompt": "Map an entry path into game development for a {level} learner interested in {focus}. I am considering working in {engine} — tailor the tooling advice, first-project suggestion, and learning resources to that choice, and be honest about where {engine} helps or complicates a beginner's path.\n\nStart with concepts before code: the game loop, input handling, basic physics, collision detection, and simple AI. Explain each concept with a concrete example from a well-known game I have probably played, so the ideas land before any implementation. Connect the concepts to each other — show how the loop drives input, input drives physics, physics needs collision — so I see one system, not five topics.\n\nThen suggest a first playable mini-game suited to {focus} and {level} in {engine}: small enough to finish, real enough to be proud of. Break that game into milestones, and for each milestone state the specific skill it teaches, what \"done\" looks like (playable criteria, not code criteria), and the concept from the first section it exercises.\n\nInclude the beginner traps specific to game dev: scope creep (with a rule for cutting features), tutorial-copying without understanding, and polishing art before the game is fun. End with a clear \"what next\" ladder: the three skills to learn after the first game, in order, and how each unlocks a bigger second project. The path should end with a finished game, because nothing teaches game development like shipping one.\n\nAdd practical guidance on the two things beginners neglect: art and sound on a zero budget (where to find free assets that do not look terrible, the placeholder-art philosophy — fun first, pretty later — and the one audio upgrade that makes any game feel ten times more polished), and playtesting (how to watch someone play without explaining, what to note, and the rule that the player's confusion is always the game's fault). End with the scope-control contract: the feature-cutting questions to ask weekly so the first game actually ships.",
    "description": "Teaches game concepts through familiar games, then breaks a finishable starter game into skill-teaching milestones.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your programming level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Some Programming Experience",
          "Experienced Programmer"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What interests you most?",
        "type": "select",
        "options": [
          "2D Games",
          "3D Games",
          "Game Design Concepts"
        ],
        "required": true
      },
      "engine": {
        "label": "Engine",
        "question": "Which engine are you considering?",
        "type": "select",
        "options": [
          "Godot",
          "Unity",
          "Unreal Engine",
          "Not Sure Yet"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Cloud Computing Basics",
    "displayDescription": "Explains cloud fundamentals in plain terms for your provider, with a safe first exercise and cost-trap warnings.",
    "id": "learning-021",
    "prompt": "Explain cloud computing fundamentals to a {experience} learner aiming for {goal}. I am most interested in {provider} — use its terminology and service names in examples, while noting the generic concept behind each so I am not locked into one vendor's vocabulary.\n\nStart with what the cloud actually is: someone else's computers, rented by the minute, accessed over the network. Demystify the marketing — explain what problem each core service solves in plain terms. Cover virtual machines (renting a computer), storage (renting a hard drive, and the crucial difference between block, object, and file storage), and networking (how those rented pieces talk to each other and to the internet).\n\nCompare the three main service models — infrastructure, platform, and software as a service — with one concrete example each tied to {goal}, and a rule of thumb for when each model is the right choice. Explain regions, availability zones, and why \"the cloud\" still has a physical location that matters for speed, cost, and law.\n\nGive me a safe first hands-on exercise in {provider}: the exact clicks or commands to launch something small, what I should observe, and — critically — how to shut it all down afterward so I am not billed. Then list the cost traps beginners fall into: leaving resources running, misunderstanding data-transfer pricing, and picking oversized instances, with the one habit that prevents each.\n\nCalibrate depth to {experience}: no assumed networking knowledge, but no condescension either. End with a \"what this unlocks\" map showing which cloud skills lead toward {goal} and in what order to learn them.",
    "description": "Teaches cloud concepts in your provider's terms, with a shut-down-safe first exercise and the billing traps to avoid.",
    "category": "learning",
    "variables": {
      "experience": {
        "label": "Experience",
        "question": "What is your technical background?",
        "type": "select",
        "options": [
          "Non-Technical",
          "Programmer",
          "IT Professional"
        ],
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What do you want to do with cloud skills?",
        "type": "text",
        "placeholder": "e.g., Host a small web app",
        "required": true
      },
      "provider": {
        "label": "Provider",
        "question": "Which cloud provider interests you?",
        "type": "select",
        "options": [
          "AWS",
          "Google Cloud",
          "Microsoft Azure",
          "Not Sure Yet"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Linux Basics",
    "displayDescription": "Teaches the Linux shell from the filesystem up in your distro, with safe exercises and a cheat sheet.",
    "id": "learning-022",
    "prompt": "Teach me Linux from the {experience} level toward {goal}. I will be using {distro} — give me the exact commands and package-manager notes for that distribution, and flag where other distros differ so I am not confused later.\n\nStart with the mental model: the filesystem as a single tree, everything-is-a-file, permissions as three groups with three rights, and the shell as a conversation with the computer. Teach me to *think* in paths and pipes before memorizing commands, because the commands make sense once the model is right.\n\nThen build to the twenty most useful commands, grouped by job: navigating, inspecting files, creating and moving things, searching, managing processes, and getting help. For each command give one realistic example tied to {goal}, explain what each part of the command does, and name the one flag I will use most. Teach the help system (man, --help) as a skill, not an afterthought — the goal is a learner who can teach themselves new commands.\n\nInclude one safe practice exercise per section that I can run without risk, with the expected output described so I can verify. Add a \"dangerous commands\" warning box: the commands that can destroy data, what makes them dangerous, and the safety habits (backups, double-checking paths, never pasting commands I do not understand) that keep me safe.\n\nFinish with a one-page cheat sheet: commands grouped by job, the essential flags for each, and what each one is for — formatted to print and keep beside the keyboard. Close with the three skills to learn next on the road to {goal}, in order.",
    "description": "Builds Linux skill from mental models to twenty essential commands, with distro-specific notes and a printable cheat sheet.",
    "category": "learning",
    "variables": {
      "experience": {
        "label": "Experience",
        "question": "How much terminal experience do you have?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Used The Terminal A Little",
          "Windows Power User"
        ],
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What do you want to use Linux for?",
        "type": "text",
        "placeholder": "e.g., Managing a home server",
        "required": true
      },
      "distro": {
        "label": "Distribution",
        "question": "Which Linux distribution will you use?",
        "type": "select",
        "options": [
          "Ubuntu",
          "Debian",
          "Fedora",
          "Arch",
          "WSL on Windows",
          "Not Sure Yet"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Networking Fundamentals",
    "displayDescription": "Explains how the internet works through analogies, a URL trace, and diagnostic commands for your OS.",
    "id": "learning-023",
    "prompt": "Teach me computer networking fundamentals at the {level} level with a focus on {focus}. I use {operatingSystem} — give me the diagnostic commands in that system's syntax.\n\nExplain IP addresses, DNS, ports, and the request-response cycle using everyday analogies, but make each analogy earn its keep: after the analogy, state the one way the analogy breaks down, so I do not carry a false mental model forward. Build the concepts in dependency order — each idea should feel necessary for the next.\n\nThen walk me through exactly what happens when I type a URL into a browser and press enter, step by step, naming which concept from the lesson is at work at each step: DNS lookup, TCP handshake, TLS, the HTTP request, the server's response, rendering. This trace should tie the whole lesson together into one story.\n\nEnd with three diagnostic commands I can run on {operatingSystem} right now that reveal what is happening on a real network. For each: the exact command, what it shows me, how to read one line of its output, and one real situation where it would solve a problem (\"my internet is slow\" or \"I can't reach that site\").\n\nCalibrate to {level} and keep {focus} as the lens: if the focus is home networking, weight the practical half; if career foundations, weight the conceptual half and name what comes next. Close with the three ideas that, if I truly understand them, mean I understand networking's core.",
    "description": "Covers IP, DNS, and ports through honest analogies, traces a full web request, and adds OS-specific diagnostics.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your technical level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Some Tech Knowledge",
          "IT Student"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the emphasis be?",
        "type": "select",
        "options": [
          "How The Internet Works",
          "Home Network Setup",
          "Career Foundations"
        ],
        "required": true
      },
      "operatingSystem": {
        "label": "Operating System",
        "question": "Which operating system do you use?",
        "type": "select",
        "options": [
          "Windows",
          "Mac",
          "Linux"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Databases Intro",
    "displayDescription": "Introduces database concepts and walks you through designing a schema for your own project idea.",
    "id": "learning-024",
    "prompt": "Introduce me to databases at the {experience} level, focused on {focus}. I have a project in mind: {projectIdea}. Use it as the running example throughout — every concept should be illustrated with my project's data, and the lesson should end with a real schema design for it.\n\nExplain tables, keys, relationships, and indexes in plain language, building the mental model first: a table as a well-organized spreadsheet with rules, a key as the thing that makes each row findable, a relationship as a promise between tables, an index as the book's index applied to data. For each concept, show what goes wrong without it, using {projectIdea} as the victim — bad design should feel painful before good design feels clever.\n\nCompare relational and document-style databases with one concrete use case each, then recommend which fits {projectIdea} and why — with the honest trade-offs of that choice, not a sales pitch.\n\nWalk through designing a small schema for {projectIdea} step by step: list the entities, define the tables and columns, choose the keys, draw the relationships (described clearly in text), and add the indexes the queries will need. Then show how the design changes as requirements grow: add two realistic new requirements and evolve the schema, explaining what breaks and how to fix it. This evolution is the real lesson — schemas are living things.\n\nClose with the five design mistakes beginners make most (storing lists in one column, no keys, duplicating data across tables, and similar) with a one-line rule that prevents each.",
    "description": "Teaches database concepts through your own project idea, ending with an evolvable schema design and classic mistake warnings.",
    "category": "learning",
    "variables": {
      "experience": {
        "label": "Experience",
        "question": "What is your experience level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Some Programming",
          "No Database Experience"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the emphasis be?",
        "type": "select",
        "options": [
          "Core Concepts",
          "Choosing A Database",
          "Schema Design"
        ],
        "required": true
      },
      "projectIdea": {
        "label": "Project Idea",
        "question": "What project do you have in mind?",
        "type": "textarea",
        "placeholder": "e.g., An app for tracking my book collection and lending",
        "required": true
      }
    }
  },
  {
    "displayTitle": "APIs Explainer",
    "displayDescription": "Explains APIs with a restaurant analogy and guides your first successful call in your language.",
    "id": "learning-025",
    "prompt": "Explain APIs to a {background} learner building toward {project}. I code in {language} — write the guided exercise in that language with working sample code I can actually run.\n\nStart with what an API is, using the restaurant analogy: I (the customer) do not go into the kitchen; I order from the menu (the documented endpoints), the waiter (the request) carries my order, and the kitchen (the server) returns my food (the response). Extend the analogy to cover the key ideas: the menu as documentation, special orders as parameters, the bill as rate limits, and the secret password for regulars as authentication. Then step out of the analogy and state each concept plainly, so I am not left reasoning through waiters forever.\n\nWalk through a real request and response step by step: the URL structure, the HTTP method and what it means, headers, the body going out, the status code coming back, and the response body. Use an example tied to {project} so every piece feels relevant. Explain authentication (API keys vs OAuth, in plain terms: what each one is proving and when each is used) and rate limits (why they exist and how to behave when you hit one) without jargon.\n\nFinish with a guided exercise: show me how to read a real API's documentation (what to look for, what to ignore), then give me complete {language} code that makes a first successful call against a free public API related to {project}, with each line explained. Include what to do when it fails — the three most common first-call errors and their fixes. End with the habits of a good API citizen and the one documentation-reading skill that transfers to every API I will ever meet.",
    "description": "Demystifies APIs through an extended analogy and a worked request, ending with runnable first-call code in your language.",
    "category": "learning",
    "variables": {
      "background": {
        "label": "Background",
        "question": "What is your background?",
        "type": "select",
        "options": [
          "Non-Technical",
          "Beginner Programmer",
          "Experienced Programmer"
        ],
        "required": true
      },
      "project": {
        "label": "Project",
        "question": "What project do you want APIs for?",
        "type": "text",
        "placeholder": "e.g., A weather dashboard",
        "required": true
      },
      "language": {
        "label": "Language",
        "question": "Which programming language do you use?",
        "type": "text",
        "placeholder": "e.g., Python",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Data Visualization Guide",
    "displayDescription": "Teaches chart selection and honest design for your data type, audience, and tool, with before-and-after fixes.",
    "id": "learning-026",
    "prompt": "Teach me data visualization for {dataType}, aimed at {audience}. I build charts in {tool} — give me the how-to notes for that tool, not generic advice I cannot execute.\n\nCover choosing the right chart type with a decision framework: what question am I answering (comparison? trend? composition? distribution?), and which chart answers exactly that question. For each common chart type, state what it is good at, what it is bad at, and the one situation where people misuse it most.\n\nTeach the five most misleading chart designs — truncated axes, dual axes with mismatched scales, 3D effects, cherry-picked time ranges, and area distortions — showing what each one hides and why it misleads {audience} specifically. Then cover the principles of clear labeling, honest color use (including colorblind-safe choices), and titles that state the takeaway.\n\nGive me three before-and-after examples using {dataType}: a bad chart described precisely, a diagnosis of everything wrong with it, and the fixed version with an explanation of each change. These should be detailed enough that I could rebuild both versions in {tool}.\n\nFinish with a checklist I can run on any chart I make — ten yes-or-no questions covering honesty, clarity, and audience fit. Close with the one habit that separates good visualizers from bad ones: designing the takeaway first and the chart second.\n\nAdd a section on storytelling with data for {audience}: how to structure a sequence of charts as a narrative (context, complication, resolution — not a data dump), the annotation techniques that guide interpretation without distorting it, and dashboard principles for {tool} (one screen, one question; hierarchy of metrics; what to leave out). End with the ethics of persuasion: the line between emphasizing a true finding and manufacturing one — with the test I can run on any visualization I make.",
    "description": "Covers chart selection and honest design with tool-specific rebuildable fixes and a ten-point quality checklist.",
    "category": "learning",
    "variables": {
      "dataType": {
        "label": "Data Type",
        "question": "What kind of data will you visualize?",
        "type": "text",
        "placeholder": "e.g., Monthly sales figures",
        "required": true
      },
      "audience": {
        "label": "Audience",
        "question": "Who will read your charts?",
        "type": "text",
        "placeholder": "e.g., Non-technical managers",
        "required": true
      },
      "tool": {
        "label": "Tool",
        "question": "Which tool do you use for charts?",
        "type": "select",
        "options": [
          "Excel",
          "Google Sheets",
          "Python",
          "Tableau",
          "Power BI",
          "Something Else"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Data Literacy",
    "displayDescription": "Trains you to read charts critically and interrogate data claims, starting from a claim you recently saw.",
    "id": "learning-027",
    "prompt": "Build my data literacy as a {role} focused on {focus}. A data claim I recently encountered and was not sure about: {recentClaim}. Use it as the running case study — dissect it fully as the capstone of the lesson, so the skills land on something real.\n\nTeach me to read charts critically: axes, baselines, sample sizes, and what the chart designer chose not to show. Teach me to spot misleading statistics in news and reports: the classic tricks (relative vs absolute change, survivorship bias, confusing correlation with causation, misleading averages) with one concrete example of each drawn from the kind of media a {role} actually consumes.\n\nExplain what averages hide — when the mean lies, what the median reveals, and why the distribution matters more than any single number — with a worked example using simple numbers I can follow. Then teach me the questions to ask about any dataset: who collected this, who is missing, what was the incentive, and what would change my mind.\n\nInclude five real-world examples of data being misused, each with the trick named, the truth uncovered, and the one question that would have exposed it. Then apply the full toolkit to {recentClaim}: walk through the interrogation step by step and reach a verdict I can defend.\n\nEnd with a one-page checklist for evaluating any data claim — the questions in order, designed to fit on an index card. The goal is a reflex, not a reference manual: I should feel the suspicion before I remember the checklist.",
    "description": "Trains critical data reading with misuse case studies, then applies the full toolkit to a claim you actually encountered.",
    "category": "learning",
    "variables": {
      "role": {
        "label": "Role",
        "question": "What is your role?",
        "type": "text",
        "placeholder": "e.g., Marketing analyst",
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the emphasis be?",
        "type": "select",
        "options": [
          "Reading Charts Critically",
          "Spotting Misleading Statistics",
          "Evaluating Data Claims"
        ],
        "required": true
      },
      "recentClaim": {
        "label": "Recent Claim",
        "question": "What data claim did you recently see and feel unsure about?",
        "type": "textarea",
        "placeholder": "e.g., A headline said a food increases lifespan by 30% and I did not know whether to believe it",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Algebra Foundations",
    "displayDescription": "Rebuilds algebra around your sticking points, from expressions to functions, with worked examples and self-checks.",
    "id": "learning-028",
    "prompt": "Build my algebra foundations from the {currentLevel} level toward {goal}. The topics that trip me up most are: {stickingPoints}. Weight the lesson toward those — give them extra worked examples, extra mistake analysis, and their own dedicated self-checks, rather than treating every topic equally.\n\nSequence the essentials in dependency order: expressions (what they are and how to simplify), equations (the balance model — whatever you do to one side, you do to the other — and why it works), inequalities (where the rules change and why), functions (inputs, outputs, and notation as a language), and graphing (what a graph is actually telling you). For each topic, explain the *idea* before the procedure, because procedures without ideas are what make algebra feel like magic tricks.\n\nGive me three worked examples per topic: one basic, one medium, and one designed around {stickingPoints} where relevant. Show every step with the reasoning for that step — never just the algebra, always the *why* of the move. After the examples, name the typical mistakes for that topic with the wrong thinking exposed and corrected.\n\nAfter each topic, give me a short self-check (three questions) with solutions explained, so I can confirm understanding before moving on. Finish with a mixed review set that combines everything — because real problems do not announce which topic they belong to — and a readiness statement: what I should be able to do unaided that proves I am ready for {goal}.\n\nKeep the tone encouraging but honest: name which parts are genuinely hard and why, so struggle feels normal rather than shameful.",
    "description": "Sequences algebra by dependency with idea-first explanations, sticking-point-weighted examples, and per-topic self-checks.",
    "category": "learning",
    "variables": {
      "currentLevel": {
        "label": "Current Level",
        "question": "What is your current level?",
        "type": "select",
        "options": [
          "Rusty Beginner",
          "Middle School Level",
          "High School Level"
        ],
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "Why are you learning algebra?",
        "type": "text",
        "placeholder": "e.g., Preparing for a placement test",
        "required": true
      },
      "stickingPoints": {
        "label": "Sticking Points",
        "question": "Which algebra topics trip you up most?",
        "type": "textarea",
        "placeholder": "e.g., Negative numbers in equations, and word problems in general",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Calculus Intuition Builder",
    "displayDescription": "Builds real intuition for calculus concepts through visuals and physical meaning, targeting your specific confusion.",
    "id": "learning-029",
    "prompt": "Build my intuition for {concept} in calculus. My background is {background}, and here is what confuses me about it: {confusion}. Treat {confusion} as the central puzzle of the lesson — everything should build toward resolving it, not just covering the topic generically.\n\nExplain what {concept} means visually and physically *before* showing any formulas. Draw the picture in words: what would I see on a graph, what is moving, what is being measured. Connect it to something physical I have experienced — speed, growth, accumulation — so the concept has a body, not just symbols. Only then introduce the notation, and when you do, translate each symbol back into the picture: this squiggle means *that* thing you can see.\n\nWalk through two concrete examples step by step, narrating the thinking at each step: what am I looking at, what am I trying to find, why does this move make sense. Make the second example a variation that specifically illuminates {confusion}.\n\nName the misconception that trips up most learners with {concept}, show the wrong intuition and where it comes from, then repair it with the correct picture. Address {confusion} directly here — show me the exact point where my mental model goes wrong and what to replace it with.\n\nFinish with three practice problems that test understanding rather than memorization: problems where plugging into a formula blindly gives the wrong answer, but seeing the picture gives the right one. Provide solutions that explain the reasoning, and end with a one-paragraph summary I could use to explain {concept} to a friend — because if I can teach it, I understand it.",
    "description": "Teaches calculus through pictures and physical meaning first, built around resolving your specific confusion.",
    "category": "learning",
    "variables": {
      "concept": {
        "label": "Concept",
        "question": "Which calculus concept do you want to understand?",
        "type": "text",
        "placeholder": "e.g., Derivatives",
        "required": true
      },
      "background": {
        "label": "Background",
        "question": "What is your background?",
        "type": "select",
        "options": [
          "Pre-Calculus Student",
          "First-Time Calculus Learner",
          "Returning Learner"
        ],
        "required": true
      },
      "confusion": {
        "label": "Confusion",
        "question": "What specifically confuses you about this concept?",
        "type": "textarea",
        "placeholder": "e.g., I can compute derivatives but I do not really know what they mean",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Statistics Foundations",
    "displayDescription": "Teaches statistics as a way of thinking in your field, from description to inference with a test-selection guide.",
    "id": "learning-030",
    "prompt": "Teach me statistics from the {background} level toward {goal}. My field is {field} — draw every example, dataset, and application from it, so the concepts attach to problems I actually care about.\n\nCover the ideas in the order that builds understanding: descriptive statistics (summarizing data honestly), probability basics (the language of uncertainty), distributions (what data shapes look like and why), sampling (how a part speaks for the whole, and when it lies), and inference (drawing conclusions beyond the data). For each concept, give one real-world example from {field}, explain the *question* the concept answers before the mechanics, and show one worked calculation with every step explained.\n\nAfter each section, include two practice problems: one mechanical (can I do the procedure) and one conceptual (do I know when and why to use it), with explained solutions. Name the misinterpretation that traps beginners at each stage — especially around p-values, confidence intervals, and correlation — and correct it plainly.\n\nEnd with a practical guide to choosing the right test or method for a question: a decision flow based on what I am trying to learn (comparing groups? finding relationships? predicting?) and what kind of data I have, illustrated with three {field} scenarios worked through the decision process. Close with guidance on reading statistical claims in {field} critically — the five questions that separate a solid finding from a shaky one. The goal is statistical thinking I can use, not formulas I can recite.",
    "description": "Progresses from description to inference with field-grounded examples, misinterpretation fixes, and a test-selection decision flow.",
    "category": "learning",
    "variables": {
      "background": {
        "label": "Background",
        "question": "What is your math background?",
        "type": "select",
        "options": [
          "No Math Background",
          "Comfortable With Algebra",
          "Programmer"
        ],
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What do you want to use statistics for?",
        "type": "text",
        "placeholder": "e.g., Reading research papers",
        "required": true
      },
      "field": {
        "label": "Field",
        "question": "What is your field or area of interest?",
        "type": "text",
        "placeholder": "e.g., Public health",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Mental Math Trainer",
    "displayDescription": "Coaches mental calculation with shortcut techniques, timed drills, and mastery tracking tuned to your weak spots.",
    "id": "learning-031",
    "prompt": "Act as my mental math trainer. I am at the {level} level, my focus is {focus}, and the calculations that slow me down most are: {weakSpot}. Design every session around {weakSpot} — the shortcuts I learn should directly attack the arithmetic I actually struggle with.\n\nRun the training as a coach, not a textbook. Each session: teach me two or three shortcut techniques, demonstrating each with a fully worked example where you narrate the mental steps (what I hold in my head, what I say to myself, where people go wrong). Then drill me with ten timed problems using the new techniques. After I answer, correct my method when I go wrong — do not just mark right or wrong, but diagnose *where* the method broke down and give me the fix.\n\nTrack my mastery explicitly: keep a running list of which techniques I have mastered, which are shaky, and which need more practice, and show me the list at the start of each session. Increase difficulty only when I demonstrate readiness — define readiness as getting at least 8 of 10 correct with the technique applied smoothly, and say so.\n\nCalibrate everything to {level} and {focus}: a {focus} learner needs different shortcuts than a competition-speed learner, so choose techniques by usefulness to my actual life. Include one \"no-calculator challenge\" per session drawn from {focus} (estimating a tip, checking a bill, comparing prices) so the skill transfers out of the drills.\n\nStructure your first response as Session 1: a quick diagnostic of {weakSpot} (three problems to reveal exactly where I struggle), then the first two techniques. End each session with what to practice before next time and the specific sign that I am ready for harder material.",
    "description": "Runs coached training sessions with narrated techniques, diagnosed errors, a visible mastery tracker, and real-life transfer challenges.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should we focus on?",
        "type": "select",
        "options": [
          "Everyday Arithmetic",
          "Percentages and Tips",
          "Competition Speed"
        ],
        "required": true
      },
      "weakSpot": {
        "label": "Weak Spot",
        "question": "Which calculations slow you down most?",
        "type": "text",
        "placeholder": "e.g., Multiplying two-digit numbers, figuring out percentages",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Geometry Proofs Guide",
    "displayDescription": "Teaches rigorous proof-writing from anatomy to independence, with fading hints and model solutions.",
    "id": "learning-032",
    "prompt": "Teach me to write geometry proofs at the {level} level, starting with {concept}. My goal is: {goal}. Calibrate the rigor and the choice of theorems to that goal — a class student needs the standard curriculum theorems, a competition student needs creative ones.\n\nBegin with the anatomy of a proof: what a proof is actually doing (building an unbroken chain from what is given to what must be shown), the roles of givens, definitions, postulates, and previously proven theorems, and what counts as a valid justification for each step versus hand-waving. Explain the difference between knowing something is true and proving it — this is the conceptual leap that makes proofs click.\n\nShow one complete two-column proof about {concept}, with the reasoning for every single step made explicit: not just \"SAS\" but why SAS applies here and what would be missing if it did not. Annotate the proof with the strategic thinking — how would I have known to draw that auxiliary line, to look for those congruent parts? Teach the *search* process, not just the finished product.\n\nThen give me three theorems to prove myself, ordered by difficulty, with hints that get progressively lighter: the first with heavy scaffolding (the key insight named, steps partially filled), the second with a nudge, the third with nothing but the statement. Provide full model solutions I can check against — and crucially, for each model solution, include a \"how you might have found this\" paragraph revealing the discovery path, plus the common wrong turns and why they fail.\n\nClose with a proof self-review checklist: the five questions that catch most invalid proofs (unjustified steps, assuming the conclusion, misused theorems) and guidance on how {goal} will test this skill.",
    "description": "Walks through proof anatomy and discovery strategy, then assigns theorems with fading hints and wrong-turn analysis.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "High School Student",
          "Returning Learner",
          "Competition Prep"
        ],
        "required": true
      },
      "concept": {
        "label": "Concept",
        "question": "Which concept should we start with?",
        "type": "text",
        "placeholder": "e.g., Triangle congruence",
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "Why are you learning proofs?",
        "type": "text",
        "placeholder": "e.g., To pass my geometry class with confidence",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Trigonometry Starter",
    "displayDescription": "Builds trig from the unit circle to identities, with visuals and practice aimed at your hardest part.",
    "id": "learning-033",
    "prompt": "Introduce me to trigonometry. My background is {background}, my goal is {goal}, and the part I find hardest is: {hardestPart}. Give {hardestPart} double weight — more explanation, more examples, and its own practice set.\n\nBuild the unit circle conceptually before anything else: what it is, why a circle of radius 1 is the perfect tool, and how an angle becomes a point with coordinates. Make sine and cosine *mean* something — the x and y of that point — before they are ever functions to memorize. Connect them to right triangles (ratios in a familiar shape) and to waves (why the same functions describe oscillation), so trig feels like one idea wearing three outfits.\n\nShow where trigonometry appears in the real world, weighted toward {goal}: if I am preparing for physics, emphasize vectors and oscillations; if for surveying or navigation, emphasize triangulation. Every application should answer \"what problem does trig solve here that nothing else can.\"\n\nUse visual explanations throughout — describe each diagram precisely enough that I could sketch it. Work through three problems step by step: one unit-circle, one triangle, and one targeting {hardestPart}. Then give me a set of identity practice exercises with full solutions, teaching identities as patterns to recognize (not lines to memorize) and showing the two or three moves that prove most of them.\n\nEnd with a concept map: how the unit circle, triangles, graphs, and identities connect into one structure, and a self-test — five questions whose answers prove I understand rather than remember.",
    "description": "Builds trig understanding from a conceptual unit circle, with hardest-part-weighted practice and identities as patterns.",
    "category": "learning",
    "variables": {
      "background": {
        "label": "Background",
        "question": "What is your math background?",
        "type": "select",
        "options": [
          "Algebra Student",
          "Geometry Student",
          "Adult Learner"
        ],
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What is your goal?",
        "type": "text",
        "placeholder": "e.g., Preparing for physics class",
        "required": true
      },
      "hardestPart": {
        "label": "Hardest Part",
        "question": "What part of trig do you find hardest?",
        "type": "text",
        "placeholder": "e.g., Understanding what radians actually are",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Pre-Calculus Bridge",
    "displayDescription": "Builds a paced bridge to calculus around your weak areas, with refreshers and readiness checklists per topic.",
    "id": "learning-034",
    "prompt": "Create a pre-calculus bridge plan from my current level of {currentLevel}. I need to be ready by {deadline} — pace the plan to that date, and be honest if the timeline is tight: tell me what to prioritize and what can be learned lightly.\n\nCover functions, transformations, polynomials, exponentials, logarithms, and an introduction to limits. Weight everything toward my weak areas: {weakAreas}. Those topics get the full treatment — concept refresher, extra worked examples, dedicated mistake analysis — while stronger topics get efficient reviews.\n\nFor each topic, provide: a concept refresher that explains the *idea* (what a logarithm is actually saying, what a transformation does to a graph's meaning), two worked examples with reasoning narrated at each step, the typical errors and their fixes, and a readiness checklist — specific things I can do unaided that prove I am prepared for calculus (not \"understand functions\" but \"given a transformed graph, write its equation\").\n\nSequence the topics so each prepares the next, and explicitly connect each one forward: \"you are learning logarithms now because calculus will ask you to differentiate them, and that is painless if this is solid.\" This forward-linking is what makes it a bridge rather than a review.\n\nEnd with a cumulative readiness assessment: a mixed set of problems spanning all topics with solutions, and a scoring guide that tells me honestly whether I am ready for calculus, nearly ready (with the specific gaps to close), or need more time on {weakAreas}. Include a catch-up protocol for falling behind that does not involve doubling the workload.",
    "description": "Creates a deadline-paced pre-calculus plan weighted to your weak areas, with forward-links to calculus and an honest readiness assessment.",
    "category": "learning",
    "variables": {
      "currentLevel": {
        "label": "Current Level",
        "question": "What is your current level?",
        "type": "select",
        "options": [
          "Algebra II Student",
          "Rusty Graduate",
          "Self-Studying"
        ],
        "required": true
      },
      "weakAreas": {
        "label": "Weak Areas",
        "question": "Which topics are your weak areas?",
        "type": "textarea",
        "placeholder": "e.g., Logarithms, function transformations",
        "required": true
      },
      "deadline": {
        "label": "Deadline",
        "question": "When do you need to be calculus-ready?",
        "type": "text",
        "placeholder": "e.g., When my calculus class starts in January",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Statistics Intuition Builder",
    "displayDescription": "Builds gut-level statistical understanding through thought experiments, aimed at where you will actually use it.",
    "id": "learning-035",
    "prompt": "Build my statistical intuition around {concept}. My background is {background}, and I will encounter this concept in: {useContext}. Ground every thought experiment in {useContext} — abstract urns and dice will not stick; situations from my world will.\n\nUse no heavy formulas. Instead, build understanding through thought experiments I can run in my head, imagined simulations (\"picture flipping this coin 1000 times — what would you see?\"), and visual reasoning. Show me *why* the concept works, not just that it does: trace the logic from a simple observation to the surprising conclusion, step by step, so the result feels inevitable rather than magical.\n\nContrast the intuitive wrong answer with the correct one explicitly. Name the wrong intuition, explain why it feels right (what true pattern it is misapplying), then show where it breaks. This contrast is the core of the lesson — intuition is rebuilt by confronting the old one, not by ignoring it.\n\nCalibrate to {background}: if I am non-technical, stay in stories and pictures; if I have some statistics, connect the intuition to the formalism I half-remember; if I am a programmer, offer the mental simulation as code I could run.\n\nFinish with three scenario questions set in {useContext} that test whether I truly get it — questions where the gut answer is wrong and the trained intuition is right. Provide the answers with the reasoning chain spelled out, and end with a one-sentence version of the intuition I can carry in my pocket: the compressed insight that {concept} reduces to.",
    "description": "Develops statistical gut feeling through world-grounded thought experiments, wrong-intuition confrontations, and scenario tests.",
    "category": "learning",
    "variables": {
      "concept": {
        "label": "Concept",
        "question": "Which concept do you want to understand intuitively?",
        "type": "text",
        "placeholder": "e.g., P-values",
        "required": true
      },
      "background": {
        "label": "Background",
        "question": "What is your background?",
        "type": "select",
        "options": [
          "Non-Math Background",
          "Some Statistics",
          "Programmer"
        ],
        "required": true
      },
      "useContext": {
        "label": "Use Context",
        "question": "Where will you encounter this concept?",
        "type": "text",
        "placeholder": "e.g., Reading medical studies for work",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Physics Intuition Builder",
    "displayDescription": "Builds physical intuition through thought experiments, calibrated to your math level.",
    "id": "learning-036",
    "prompt": "Build my physical intuition for {topic}. I am a {level} learner and my math level is {mathLevel} — use exactly as much mathematics as I can follow: physical reasoning first, equations only where they clarify rather than obscure, and every symbol translated back into physical meaning.\n\nStart with a thought experiment or an everyday observation I have definitely experienced. Make me predict what happens before you explain — the prediction creates the curiosity that the explanation then satisfies. Then explain the underlying principle in plain language, building from the observation to the general rule, so the principle feels discovered rather than dictated.\n\nWalk through two worked examples step by step: the first straightforward, the second one that exposes a subtlety. In each, narrate the physical reasoning before any calculation: what is happening, which principle applies, what I expect qualitatively. Only then do the math that {mathLevel} supports.\n\nFinish with three conceptual questions designed to reveal whether I understand the idea or am just following formulas — questions where plugging numbers into an equation gives the wrong answer but physical reasoning gives the right one. Provide the answers with the reasoning chain, and name the specific formula-plugging habit each question is designed to break.\n\nEnd with the one-sentence physical insight that {topic} reduces to — the compressed understanding I should carry forward — and one everyday phenomenon I can now see differently because of it.\n\nAdd bridges to what comes next: the mathematical tools that will deepen this intuition later (named without being required now), and two safe at-home observations or mini-experiments that let me see {topic} in action this week — with what to look for and what each result demonstrates. Close with a misconception-repair summary: the three wrong intuitions about {topic} I most likely arrived with, each replaced by its corrected picture in one sentence, so I can self-test anytime.",
    "description": "Teaches physics through prediction-driven thought experiments and math-calibrated reasoning, testing real understanding.",
    "category": "learning",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "Which physics topic do you want to understand?",
        "type": "text",
        "placeholder": "e.g., Newton's laws",
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Curious Beginner",
          "High School Student",
          "College Student"
        ],
        "required": true
      },
      "mathLevel": {
        "label": "Math Level",
        "question": "What is your math level?",
        "type": "select",
        "options": [
          "Basic Algebra",
          "Comfortable With Algebra",
          "Know Some Calculus"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Chemistry Basics",
    "displayDescription": "Teaches chemistry as connected ideas with household examples matched to your lab access.",
    "id": "learning-037",
    "prompt": "Teach me chemistry fundamentals at the {level} level with an emphasis on {focus}. My lab access is: {labAccess}. Shape every hands-on suggestion around that reality — kitchen-safe experiments if that is all I have, richer ones if I have a real lab.\n\nCover atoms, the periodic table, bonding, and reactions as one connected story rather than isolated facts. Show the through-line: the structure of the atom explains the periodic table's shape, the table's patterns explain bonding behavior, and bonding explains why reactions happen. Each concept should feel like the inevitable next chapter, not a new subject.\n\nFor each concept, give one kitchen or household example I can observe myself (cooking, cleaning, rusting, dissolving), with what to look for and what it demonstrates. Include three practice problems per section with explained solutions, and make at least one problem per section a \"predict what happens\" question rather than a calculation — prediction builds chemical intuition.\n\nAdd a guide to reading chemical equations with confidence: what each part of the notation means, how to check that an equation is balanced and *why* balance is non-negotiable (conservation of mass, in plain terms), and how to read what an equation is actually telling you about the reaction.\n\nName the misconceptions that make chemistry feel like memorization (the periodic table as random, bonding types as rigid categories, equations as math puzzles) and replace each with the underlying pattern. End with a concept map of the whole story on one page and the three ideas that unlock everything else.",
    "description": "Connects atoms to reactions as one story with household observations, prediction problems, and an equation-reading guide.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "High School Student",
          "Adult Learner"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the emphasis be?",
        "type": "text",
        "placeholder": "e.g., Everyday chemistry",
        "required": true
      },
      "labAccess": {
        "label": "Lab Access",
        "question": "What kind of hands-on access do you have?",
        "type": "select",
        "options": [
          "Kitchen Only",
          "School Lab",
          "Home Experiment Kit",
          "No Hands-On, Theory Only"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Organic Chemistry Intro",
    "displayDescription": "Teaches organic chemistry as visual patterns on your timeline, replacing memorization with mechanism logic.",
    "id": "learning-038",
    "prompt": "Introduce me to organic chemistry. My background is {background}, my goal is {goal}, and my deadline is {deadline}. Pace the introduction to that deadline and prioritize ruthlessly: tell me what matters most for {goal} and what can wait.\n\nTeach functional groups as a visual vocabulary first — the alphabet of the subject. For each major group, show its structure, teach me to recognize it on sight in any molecule, and explain in one sentence what personality it gives the molecule (what it *wants* to do). Drill recognition before reaction: I should be able to point at groups in complex structures before I learn a single mechanism.\n\nThen show how structure determines reactivity through three worked mechanisms, narrated step by step with the electron logic made explicit: what is electron-rich, what is electron-poor, and why the electrons move where they do. Teach me to *read* a mechanism like a story rather than memorize it like a dance — the patterns (nucleophile attacks electrophile, and variations) that replace hundreds of memorized reactions.\n\nHighlight the pattern-recognition framework explicitly: the five or six mechanistic patterns that underlie most introductory reactions, with how to spot which pattern a new reaction follows. Give me practice problems that build in stages: first naming and recognizing, then drawing mechanisms for familiar reactions, then predicting products for unfamiliar ones — with the reasoning shown for each.\n\nEnd with a study strategy for {deadline}: how to practice (drawing, not rereading), the highest-yield topics for {goal}, and the warning signs that I am memorizing instead of understanding.",
    "description": "Builds functional-group recognition into mechanistic pattern thinking, with staged practice and a deadline-driven study strategy.",
    "category": "learning",
    "variables": {
      "background": {
        "label": "Background",
        "question": "What is your background?",
        "type": "select",
        "options": [
          "General Chemistry Student",
          "Pre-Med Student",
          "Curious Learner"
        ],
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What is your goal?",
        "type": "text",
        "placeholder": "e.g., Surviving organic chemistry I",
        "required": true
      },
      "deadline": {
        "label": "Deadline",
        "question": "When is your exam or deadline?",
        "type": "text",
        "placeholder": "e.g., My final is in 8 weeks",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Biology Systems Overview",
    "displayDescription": "Explains any body system as an integrated machine, grounded in why you are learning it.",
    "id": "learning-039",
    "prompt": "Give me a clear overview of the {system} system in biology at the {level} level. I am learning this because: {purpose}. Weight the detail toward what {purpose} actually requires — a future nurse needs different depth than a curious parent — and say explicitly what I can skim.\n\nExplain what the system does (its job in one sentence), how its parts work together as an integrated machine (not a list of parts — the *flow* of what happens), and how it connects to two other body systems, because systems never work alone. Use one everyday analogy for the system's overall function, then drop the analogy and explain the real mechanics — analogies open the door but must not become the understanding.\n\nInclude a labeled-parts walkthrough: the major structures in a sensible order (follow the flow — blood, air, food, or signals — through the system), what each part does, and what goes wrong when each part fails. The failure modes make the functions memorable.\n\nCorrect two common misconceptions about the {system} system explicitly: state the myth, explain why people believe it, and replace it with the truth. Then give me five review questions with answers — three testing understanding of how the system works, two scenario-based (\"what would happen if...\") that test whether I can reason with the knowledge.\n\nEnd with a one-page summary structured for {purpose}: the must-know terms, the must-understand processes, and the one big idea about the {system} system that organizes everything else.",
    "description": "Presents a body system as an integrated flow with failure modes, myth corrections, and a purpose-weighted summary.",
    "category": "learning",
    "variables": {
      "system": {
        "label": "System",
        "question": "Which body system should we cover?",
        "type": "select",
        "options": [
          "Nervous",
          "Digestive",
          "Circulatory",
          "Respiratory",
          "Immune",
          "Endocrine"
        ],
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Middle School",
          "High School",
          "College Intro"
        ],
        "required": true
      },
      "purpose": {
        "label": "Purpose",
        "question": "Why are you learning this?",
        "type": "text",
        "placeholder": "e.g., I am studying for a nursing prerequisite",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Genetics Basics",
    "displayDescription": "Teaches inheritance and DNA through your curiosity question, with worked examples and heredity myth-busting.",
    "id": "learning-040",
    "prompt": "Teach me genetics fundamentals at the {level} level, focused on {focus}. One genetics question I have always wondered about: {curiosity}. Answer it as the capstone of the lesson — build the concepts I need, then resolve my question with them, so the knowledge lands on genuine curiosity.\n\nExplain DNA, genes, inheritance patterns, and mutations as a connected story: DNA as the instruction set, genes as the recipes, inheritance as how recipes get passed down and mixed, mutations as typos with consequences ranging from nothing to everything. Describe the key diagrams in words precisely enough that I could sketch them: the double helix, a chromosome with gene loci, and how alleles pair.\n\nWork through two Punnett square examples step by step — one simple monohybrid cross, one trickier (dihybrid or incomplete dominance, matched to {focus}) — narrating what each box means biologically, not just how to fill the grid. Then connect the squares to real inheritance: what they predict, what they do not, and why real traits are usually messier.\n\nAddress the most common misunderstandings about heredity head-on: dominant does not mean common or better, genes are not destiny, \"a gene for X\" is almost always an oversimplification. For each myth, explain the grain of truth that makes it believable and the fuller picture that replaces it.\n\nEnd with five practice problems with full solutions, ordered by difficulty, and then the answer to {curiosity} — worked through with the concepts just taught. Close with guidance on reading genetics news critically: the three questions that separate a real finding from a hyped one.",
    "description": "Covers DNA to inheritance with narrated Punnett squares, myth corrections, and your curiosity question as the capstone.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "High School Student",
          "College Intro",
          "Curious Adult"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the emphasis be?",
        "type": "select",
        "options": [
          "Inheritance Patterns",
          "DNA and Genes",
          "Modern Applications"
        ],
        "required": true
      },
      "curiosity": {
        "label": "Curiosity",
        "question": "What genetics question have you always wondered about?",
        "type": "textarea",
        "placeholder": "e.g., Why do I look like my mom but act like my dad?",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Ecology Overview",
    "displayDescription": "Teaches ecosystems as one connected story, linking your chosen ecosystem to the nature around you.",
    "id": "learning-041",
    "prompt": "Give me an ecology overview at the {level} level centered on {ecosystem}. I live in/near: {localEnvironment}. Wherever possible, connect the concepts to nature I can actually observe in {localEnvironment} — ecology learned through a distant reef stays abstract; ecology I can see on a walk stays with me.\n\nCover energy flow, food webs, population dynamics, and human impact as one connected story, not four topics. Show the through-line: energy enters, moves through the web, populations rise and fall with it, and human actions tug on every thread. Use specific examples from {ecosystem} throughout, naming real species and real interactions rather than generic \"producers and consumers.\"\n\nInclude two case studies: one ecosystem in balance (what stability actually looks like — dynamic, not static) and one under stress (what broke, the cascade that followed, and what recovery required). For each, draw out the general principle the case teaches, so the stories become portable knowledge.\n\nAdd a \"see it yourself\" section tied to {localEnvironment}: three specific observations I can make locally that demonstrate the concepts (a food web in a park, succession in a vacant lot, human impact on a waterway), with what to look for and what it shows.\n\nEnd with five discussion questions that connect ecology to daily life — food choices, yards, voting, consumption — questions with no single right answer but better and worse reasoning. Provide brief guidance on what strong reasoning looks like for each. The overview should leave me seeing ecosystems everywhere, including in {localEnvironment}.",
    "description": "Presents ecology as a connected narrative with balance/stress case studies and local observation assignments.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Middle School",
          "High School",
          "College Intro"
        ],
        "required": true
      },
      "ecosystem": {
        "label": "Ecosystem",
        "question": "Which ecosystem should we center on?",
        "type": "text",
        "placeholder": "e.g., A coral reef",
        "required": true
      },
      "localEnvironment": {
        "label": "Local Environment",
        "question": "Where do you live (for local nature connections)?",
        "type": "text",
        "placeholder": "e.g., Suburban Phoenix, near desert preserves",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Human Anatomy Overview",
    "displayDescription": "Teaches anatomy structures at your needed depth, with analogies, a self-quiz, and memorize-vs-understand guidance.",
    "id": "learning-042",
    "prompt": "Teach me human anatomy focused on the {focus} area. My purpose is {purpose}, and the depth I need is: {detailLevel}. Calibrate ruthlessly to that depth — name the structures that matter for {purpose}, and explicitly mark what I can skip.\n\nWalk through the major structures in a logical order (follow the flow of blood, air, or signals through the area). For each structure, explain what it does, how it works together with its neighbors, and give one memorable analogy — then state where the analogy breaks down, so it aids memory without replacing understanding.\n\nFor each structure, add a clinical or practical anchor tied to {purpose}: what goes wrong here, what that feels like, or why a professional needs to know this. Purpose-anchored anatomy sticks; floating Latin names do not.\n\nInclude a self-quiz with ten labeling questions ordered from easy to hard, with an answer key that explains each answer (not just names it). Then give me the crucial triage list: the terms most worth memorizing verbatim, the concepts worth understanding deeply without memorizing names, and the details I can safely look up when needed. This triage is the difference between efficient study and drowning.\n\nClose with study tactics matched to {detailLevel}: how to use spaced repetition for the memorize list, how to test the understand list (hint: explain it aloud), and the three mistakes anatomy students make that waste the most time.\n\nAdd clinical and practical correlations for {purpose}: for each major structure, the one thing that goes wrong most often in real life and what it feels like — because function learned through dysfunction is function remembered. Then give me a spaced-repetition protocol specific to anatomy: how to build the deck (one fact per card, image-based where possible), the daily review budget that actually works, and the weekly self-testing ritual that converts short-term memorization into the durable knowledge {purpose} demands.",
    "description": "Walks through anatomical structures with purpose anchors, analogy limits, a triaged memorize-vs-understand list, and study tactics.",
    "category": "learning",
    "variables": {
      "focus": {
        "label": "Focus",
        "question": "Which area should we focus on?",
        "type": "select",
        "options": [
          "Musculoskeletal",
          "Cardiovascular",
          "Nervous",
          "Digestive",
          "Full-Body Overview"
        ],
        "required": true
      },
      "purpose": {
        "label": "Purpose",
        "question": "Why are you learning anatomy?",
        "type": "text",
        "placeholder": "e.g., Personal training certification",
        "required": true
      },
      "detailLevel": {
        "label": "Detail Level",
        "question": "How deep do you need to go?",
        "type": "select",
        "options": [
          "Big-Picture Overview",
          "Solid Working Knowledge",
          "Detailed Exam Prep"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Astronomy Starter",
    "displayDescription": "Starts your stargazing with a season-aware observing plan matched to your skies and equipment.",
    "id": "learning-043",
    "prompt": "Start my astronomy learning journey around the interest of {interest}. My equipment is {equipment} and my skies are {skyConditions}. Every target you suggest must be realistic for that combination — no recommending faint galaxies to a city observer with binoculars. Note that it is currently September, so weight the observing plan toward autumn skies in the Northern Hemisphere unless I say otherwise.\n\nTeach me to find and understand what I am seeing. For the current season, give me: the constellations to learn first (in an order that builds a mental map of the sky, each one leading to the next), the planets and the Moon with what to look for in each, and the deep-sky objects actually worth attempting with {equipment} under {skyConditions}. For each target, explain how to find it (star-hopping directions from something I can already see) and what it actually is — the object should get more interesting the more I understand it, not less.\n\nInclude a month-by-month observing plan for the next six months: what is best each month, what is new, and one challenge object per month that stretches my skill. Add the core concepts I need alongside: scale (honest numbers that convey how empty space is), light (why some things are bright, what color tells us), and motion (why the sky changes nightly and yearly).\n\nAdd practical guidance: how to dark-adapt my eyes, what to bring, how to use a star chart or app without ruining night vision, and the beginner mistakes (too much magnification, giving up too early) that end observing sessions prematurely. End with what comes after the first six months — the fork in the road between deeper observing, astrophotography, and cosmology reading — tied to {interest}.",
    "description": "Builds stargazing skill with realistic seasonal targets, find-it-yourself directions, and a six-month observing plan.",
    "category": "learning",
    "variables": {
      "interest": {
        "label": "Interest",
        "question": "What interests you most?",
        "type": "select",
        "options": [
          "Stargazing Basics",
          "Planets and The Moon",
          "Deep-Sky Objects",
          "Cosmology Concepts"
        ],
        "required": true
      },
      "equipment": {
        "label": "Equipment",
        "question": "What equipment do you have?",
        "type": "select",
        "options": [
          "Naked Eye",
          "Binoculars",
          "Small Telescope"
        ],
        "required": true
      },
      "skyConditions": {
        "label": "Sky Conditions",
        "question": "How dark are your skies?",
        "type": "select",
        "options": [
          "Bright City",
          "Suburbs",
          "Rural / Dark Skies"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Climate Science Explainer",
    "displayDescription": "Explains climate science clearly at your starting view, with evidence-graded answers to skeptical questions.",
    "id": "learning-044",
    "prompt": "Explain climate science to a {background} learner focused on {focus}. My starting view is: {startingView}. Meet me there — if I am skeptical, lead with evidence and steelman the doubts before answering them; if I am convinced, skip the persuasion and go deeper into mechanisms; if I am curious, build from the physics up. Never preach; always show the reasoning.\n\nCover the greenhouse effect (the actual physics, in plain terms — what the molecules do to infrared light), the evidence for human influence (multiple independent lines: the isotopic fingerprint, the observed warming pattern, the timing), and how models make projections (what they are, what they assume, where they are strong and where they are uncertain). Throughout, distinguish settled science from active debate explicitly — label each claim with its confidence level and say what would change it. This honesty is what makes the settled parts trustworthy.\n\nAnswer the five most common skeptical questions with the evidence behind each answer: present the skeptical argument fairly and at its strongest, then the data that addresses it, then the remaining legitimate uncertainty. Do not strawman — a skeptic who feels heard keeps listening.\n\nCalibrate depth to {background} and keep {focus} central: if my focus is projections, spend real time on how models work and what the ranges mean; if impacts, connect the physics to the consequences.\n\nEnd with what the science says about the most effective responses — presented as findings, not advocacy — and a short guide to evaluating future climate claims I encounter: the three checks that separate solid science from spin on any side.",
    "description": "Covers greenhouse physics, evidence, and projections with confidence-labeled claims and fairly answered skeptic questions.",
    "category": "learning",
    "variables": {
      "background": {
        "label": "Background",
        "question": "What is your background?",
        "type": "select",
        "options": [
          "General Reader",
          "Student",
          "Professional"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the focus be?",
        "type": "text",
        "placeholder": "e.g., How models make projections",
        "required": true
      },
      "startingView": {
        "label": "Starting View",
        "question": "What is your current view on climate change?",
        "type": "select",
        "options": [
          "Convinced It Is Real and Human-Caused",
          "Curious and Undecided",
          "Skeptical of the Claims"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Historical Era Deep Dive",
    "displayDescription": "Guides a deep dive into any era through your chosen angle, with sources, a timeline, and a capstone essay.",
    "id": "learning-045",
    "prompt": "Guide me through a deep dive into {era} at the {depth} level. The angle that interests me most is: {angle}. Organize the dive around that angle — let it be the thread that connects events, while still giving me enough of the full picture that nothing important is missing.\n\nStart with a vivid overview of the world at that time: what daily life felt like, what people believed, what constrained them. History learned as lived experience sticks; history learned as a list of dates does not. Then walk through the key events, figures, and forces in chronological order, showing how each caused or enabled the next — build the causal chain explicitly, because \"and then\" is not an explanation.\n\nWeight the narrative toward {angle}: if I care about daily life, linger on social history; if warfare, explain the campaigns' logic; if politics, trace the power struggles. But flag the two or three things outside my angle that I must understand anyway to avoid a distorted picture.\n\nInclude two primary-source excerpts (quoted at useful length) with guided reading questions that teach me to squeeze meaning from them: what the author wants me to think, what they reveal unintentionally, what they cannot see. Provide a timeline of the essential dates worth memorizing, with a memory logic for each (why this date matters, not just when).\n\nEnd with a final essay question that tests real understanding — one requiring synthesis and judgment, not recall — plus a brief guide to what a strong answer would argue and what evidence it would use. Calibrate the volume of detail to {depth} honestly.",
    "description": "Walks through an era as lived experience and causal chain, weighted to your angle, with sources and a synthesis essay.",
    "category": "learning",
    "variables": {
      "era": {
        "label": "Era",
        "question": "Which historical era do you want to explore?",
        "type": "text",
        "placeholder": "e.g., The Roman Empire",
        "required": true
      },
      "depth": {
        "label": "Depth",
        "question": "How deep should the dive go?",
        "type": "select",
        "options": [
          "Quick Overview",
          "Thorough Deep Dive",
          "Research-Level Detail"
        ],
        "required": true
      },
      "angle": {
        "label": "Angle",
        "question": "What angle interests you most?",
        "type": "text",
        "placeholder": "e.g., Daily life of ordinary people",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Historical Thinking Skills",
    "displayDescription": "Teaches evidence analysis through your case-study era, with conflicting accounts and a claim-evaluation rubric.",
    "id": "learning-046",
    "prompt": "Teach me historical thinking skills at the {level} level using {era} as our case study. I want these skills because: {purpose}. Keep that purpose visible — every skill should be framed as something I will actually use for {purpose}, not an academic exercise.\n\nCover the four core skills, each with one guided exercise using real (or realistic) material from {era}. Sourcing: who made this, when, and why — and how that shapes what it says. Contextualization: what was normal then that is not normal now, and how that changes the reading. Corroboration: what other evidence agrees or disagrees, and how to weigh conflicts. Close reading: squeezing meaning from word choice, emphasis, and omission.\n\nFor each skill, do a worked example first (you think aloud through the analysis), then give me an exercise to try with a model answer showing strong work — including what a weak answer would miss.\n\nThen give me two conflicting accounts of the same event from {era}. Walk me through analyzing them against each other: where they agree (and why agreement matters), where they conflict, what each author's position explains about the difference, and what I can responsibly conclude. This is the heart of the lesson — history as detective work.\n\nEnd with a rubric I can use to evaluate any historical claim I encounter: the questions in order, what good answers look like, and the red flags that mark unreliable history. Close by connecting each skill back to {purpose} explicitly.",
    "description": "Trains sourcing, contextualization, and corroboration through worked examples and conflicting accounts, ending with a reusable rubric.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "High School Student",
          "College Student",
          "Adult Learner"
        ],
        "required": true
      },
      "era": {
        "label": "Era",
        "question": "Which era should we use as a case study?",
        "type": "text",
        "placeholder": "e.g., The American Civil War",
        "required": true
      },
      "purpose": {
        "label": "Purpose",
        "question": "Why do you want these skills?",
        "type": "text",
        "placeholder": "e.g., To evaluate history claims I see online",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Primary Source Reading Guide",
    "displayDescription": "Teaches confident primary-source reading with a modeled analysis, practice sources, and a reusable worksheet.",
    "id": "learning-047",
    "prompt": "Teach me to read primary sources from {era} with confidence. My experience level is {experience}, and I am most interested in this kind of source: {sourceType}. Weight the examples and exercises toward {sourceType}, since different sources demand different reading skills.\n\nStart by demystifying what primary sources are and are not: why they are valuable, why they are treacherous, and the beginner's mistake of treating them as transparent windows into the past. Calibrate to {experience} — if I am new, define every term; if advanced, skip the basics and go straight to technique.\n\nWalk me through sourcing, contextualizing, and close-reading a sample {sourceType} document from {era} that you provide (quoted at useful length). Think aloud through the analysis: show me exactly what questions to ask of any source, in what order, and what each question reveals. Model the curiosity — the follow-up questions, the noticed oddities — not just the conclusions.\n\nThen give me two more {sourceType} sources from {era} to analyze myself, with a structured worksheet: the questions to answer, space for observations before conclusions, and prompts that force me past surface reading. Provide model answers showing what strong analysis looks like — including the subtle observations a strong reader catches and a weak one misses — so I can calibrate my own work.\n\nEnd with a one-page source-reading checklist I can apply to any primary source I ever encounter, and guidance on the most common misreadings of {era} sources specifically.",
    "description": "Models think-aloud source analysis, then assigns two sources with a structured worksheet and calibrated model answers.",
    "category": "learning",
    "variables": {
      "era": {
        "label": "Era",
        "question": "Which era's sources should we work with?",
        "type": "text",
        "placeholder": "e.g., Medieval Europe",
        "required": true
      },
      "experience": {
        "label": "Experience",
        "question": "How much experience do you have with primary sources?",
        "type": "select",
        "options": [
          "New To Primary Sources",
          "Some Experience",
          "Advanced"
        ],
        "required": true
      },
      "sourceType": {
        "label": "Source Type",
        "question": "What kind of sources interest you most?",
        "type": "select",
        "options": [
          "Letters and Diaries",
          "Speeches",
          "Laws and Official Documents",
          "Newspapers",
          "A Mix"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Ancient History Survey",
    "displayDescription": "Surveys ancient civilizations through your chosen angle, with a comparative timeline and big-picture review.",
    "id": "learning-048",
    "prompt": "Give me a sweeping survey of ancient history focused on {focus}. What draws me to this is: {angle}. Let {angle} be the interpretive thread — the question the survey keeps returning to — while covering the civilizations in their proper order.\n\nMove through the major civilizations in sequence, and for each one answer: what made it distinctive, what it contributed that lasted, and how it connected to the others through trade, war, and ideas. The connections are the point — ancient history as a web, not a parade of isolated empires. Show the transmissions: the technology, the religions, the crops, the alphabets that traveled.\n\nKeep {angle} alive throughout: if I care about technology, trace the tools; if religion, the beliefs; if daily life, the ordinary people behind the monuments. End each civilization's section with one sentence connecting it back to {angle}.\n\nInclude a comparative timeline showing the civilizations side by side — what was happening simultaneously in different places — because simultaneity breaks the illusion that history happened one thing at a time. Explain three pivotal moments in depth: moments where history could have gone differently, with what was at stake and why the outcome mattered.\n\nFinish with review questions that test big-picture understanding rather than trivia: questions about patterns, causes, and connections, with brief guidance on what strong answers address. The survey should leave me with a mental map of the ancient world, not a pile of facts.\n\nAdd a section on how we know what we know: the types of evidence ancient historians work with (texts, inscriptions, archaeology — and what each can and cannot tell us), one famous case where new evidence overturned the old story, and the honest limits — what is lost forever and how historians reason responsibly in the gaps. This turns the survey from a story into an understanding of history as a discipline. End with three accessible next reads matched to {angle} for when the survey leaves me hungry.",
    "description": "Traces ancient civilizations as a connected web around your interpretive angle, with a comparative timeline and pivotal moments.",
    "category": "learning",
    "variables": {
      "focus": {
        "label": "Focus",
        "question": "What should the survey focus on?",
        "type": "select",
        "options": [
          "Mediterranean World",
          "Ancient Asia",
          "Global Overview"
        ],
        "required": true
      },
      "angle": {
        "label": "Angle",
        "question": "What draws you to ancient history?",
        "type": "text",
        "placeholder": "e.g., How ordinary people actually lived",
        "required": true
      }
    }
  },
  {
    "displayTitle": "US History Survey",
    "displayDescription": "Teaches US history as a connected narrative of turning points, tracing the theme you choose.",
    "id": "learning-049",
    "prompt": "Teach me US history as a connected narrative from the {startingPoint} to the present, aimed at a {level} learner. The theme I want to trace through the whole story is: {theme}. Use it as a through-line — show how {theme} evolves, reverses, and resurfaces across eras — while keeping the full narrative intact.\n\nOrganize around turning points rather than a list of dates: the moments where the country's direction changed, with what came before, what happened, and what became possible or impossible after. For each era, show how its conflicts shaped the next — the causal chain that makes history feel like a story instead of a catalog.\n\nWeave {theme} through every era explicitly: a short \"theme tracker\" note per era showing where {theme} stands at that point in the story. This gives me two learnings at once — the narrative and the deep pattern.\n\nInclude a timeline of twenty essential events with one-sentence significance notes (why each one *matters*, not just what happened), two primary-source excerpts with guided reading questions, and an essay prompt that ties {theme} to the broader narrative — a question requiring synthesis across eras, with guidance on what a strong thesis would argue.\n\nCalibrate to {level}: for test prep, weight the essential events and likely-tested concepts; for an adult learner, weight the causal understanding and the theme. End with the three patterns in American history that keep repeating, and why recognizing them matters for understanding the present.",
    "description": "Organizes US history around turning points with a theme tracker, essential-events timeline, sources, and a synthesis essay.",
    "category": "learning",
    "variables": {
      "startingPoint": {
        "label": "Starting Point",
        "question": "Where should the narrative begin?",
        "type": "select",
        "options": [
          "Colonial Era",
          "Revolution",
          "Civil War",
          "20th Century"
        ],
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "High School Student",
          "Adult Learner",
          "Test Prep"
        ],
        "required": true
      },
      "theme": {
        "label": "Theme",
        "question": "What theme should we trace through the story?",
        "type": "text",
        "placeholder": "e.g., The expansion of who counts as 'we'",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Civics and Government Explainer",
    "displayDescription": "Explains how government works in your context, with real examples and a personal civic-action guide.",
    "id": "learning-050",
    "prompt": "Explain how government works at the {level} level for a learner in {context}. I want to be able to: {civicGoal}. Shape the lesson toward that — the concepts I need most get the deepest treatment, and everything connects back to what I can actually do.\n\nCover the branches of government, how laws are made, elections, and individual rights. For each concept, connect it to a recent real-world example — something from the news I might recognize — so the structure feels alive rather than textbook. Explain not just what each branch does, but the *tensions* between them: the friction is where the interesting civics lives.\n\nCalibrate to {level}: for a new citizen, emphasize rights, responsibilities, and how to participate; for a student, emphasize the structures and the reasoning behind them; for a curious adult, emphasize how it all connects to current events.\n\nInclude five scenario questions that test whether I can apply the concepts — realistic situations (a law I dislike, a right I want to exercise, an election I want to influence) where I must reason from the structures, not recite them. Provide the reasoning for each answer.\n\nEnd with a personalized guide tied to {civicGoal}: how to find reliable information about my own representatives and local issues in {context}, the concrete steps for the civic actions I want to take, and how to evaluate political claims I encounter — the three checks that separate substance from spin. The lesson should leave me not just informed but equipped.",
    "description": "Connects government structures to real examples and your civic goals, with application scenarios and a local-action guide.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Student",
          "New Citizen",
          "Curious Adult"
        ],
        "required": true
      },
      "context": {
        "label": "Context",
        "question": "What is your context?",
        "type": "text",
        "placeholder": "e.g., A US state",
        "required": true
      },
      "civicGoal": {
        "label": "Civic Goal",
        "question": "What do you want to be able to do?",
        "type": "text",
        "placeholder": "e.g., Understand ballot measures and vote confidently",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Economics Principles",
    "displayDescription": "Teaches core economics through your context and a real economic question, with mental models and application practice.",
    "id": "learning-051",
    "prompt": "Teach me core economics principles at the {level} level with examples from {context}. An economic question I genuinely want answered: {economicQuestion}. Build toward answering it as the capstone — every principle should earn its place by helping resolve my question.\n\nCover supply and demand, incentives, trade-offs, opportunity cost, and market structures. Teach each principle through everyday situations from {context} first, then name the principle — the example creates the need, the label organizes it. Work through three classic scenarios step by step (a price change, a policy intervention, a business decision), narrating the economic reasoning at each step: who responds, what changes, what the second-order effects are.\n\nTeach the five mental models economists use most: thinking on the margin, opportunity cost, incentives drive behavior, trade creates value, and unintended consequences. For each model, give me the one-sentence version, one {context} example, and one situation where the model misleads if applied blindly — because models are tools, not truths.\n\nInclude five practice questions that test application rather than definitions: scenarios where I must use the principles to predict or explain, with the reasoning shown in the answers. Calibrate difficulty to {level}.\n\nEnd by answering {economicQuestion} fully, using the principles taught — showing the complete chain of reasoning — and name which mental models did the work. Close with guidance on reading economic news: the three questions that separate real analysis from punditry.\n\nAdd a behavioral economics coda: the ways real humans deviate from the rational model — loss aversion, present bias, social proof — with one {context} example each, and what these deviations mean for predicting behavior, including my own. Then turn the lens inward: apply the mental models to three personal decisions connected to {economicQuestion}, showing economics as a thinking tool for my own life rather than just a subject about markets. End with the single most useful economic habit: asking what something is compared to, and at what cost, before any significant choice.",
    "description": "Covers economic principles through contextual scenarios and mental models, culminating in the answer to your own question.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "High School Student",
          "College Intro",
          "Adult Learner"
        ],
        "required": true
      },
      "context": {
        "label": "Context",
        "question": "What context should examples come from?",
        "type": "text",
        "placeholder": "e.g., Small business decisions",
        "required": true
      },
      "economicQuestion": {
        "label": "Your Question",
        "question": "What economic question do you want answered?",
        "type": "textarea",
        "placeholder": "e.g., Why did rent in my city double in five years?",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Philosophy Intro",
    "displayDescription": "Introduces philosophy through your big question, teaching fair argument reconstruction and a reading path.",
    "id": "learning-052",
    "prompt": "Introduce me to philosophy through the lens of {interest} at the {level} level. A question that has been on my mind: {bigQuestion}. Use it as the gateway — show me how philosophers would approach my question, then widen to the field.\n\nPresent the major branches briefly (enough to orient, not to exhaust), then dive into three big questions within {interest}, including one connected to {bigQuestion}. For each question, present the strongest arguments on each side — steelmanned, at their best — and teach me the discipline of reconstructing an argument fairly before criticizing it. Show me what a charitable reconstruction looks like versus a strawman, because this single skill is most of what philosophical thinking is.\n\nInclude two thought experiments to work through interactively: present the scenario, ask for my judgment before revealing the philosophical moves, then walk through what the experiment is designed to test and the main responses philosophers have given. The interactivity matters — philosophy learned passively stays trivia.\n\nAddress {bigQuestion} directly: map the philosophical positions relevant to it, show where they disagree and why, and give me the conceptual tools to think about it more clearly — not an answer, but better thinking.\n\nEnd with a reading path from accessible to challenging, calibrated to {level}: where to start, what each work will give me, and what to read next when I am ready. Close with the one habit that makes someone philosophical: the question to ask of any claim, philosophical or otherwise.",
    "description": "Presents philosophy's big questions through your own, with steelmanned arguments, interactive thought experiments, and a reading path.",
    "category": "learning",
    "variables": {
      "interest": {
        "label": "Interest",
        "question": "Which area interests you most?",
        "type": "select",
        "options": [
          "Ethics",
          "Logic and Reasoning",
          "Meaning and Existence",
          "Political Philosophy"
        ],
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Curious Beginner",
          "Student",
          "Serious Self-Study"
        ],
        "required": true
      },
      "bigQuestion": {
        "label": "Big Question",
        "question": "What philosophical question is on your mind?",
        "type": "textarea",
        "placeholder": "e.g., Is it ever okay to lie to protect someone?",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Psychology Basics",
    "displayDescription": "Teaches psychology fundamentals grounded in your application, separating evidence from popular myth.",
    "id": "learning-053",
    "prompt": "Teach me psychology fundamentals at the {level} level, focused on {focus}. I want to apply this to: {application}. Every concept should connect to {application} — the research matters most where it touches my life.\n\nCover the major perspectives (biological, cognitive, behavioral, psychodynamic, humanistic, sociocultural) as different lenses on the same phenomena, showing what each lens reveals and what it misses. Then cover the key findings within {focus}: what the research actually shows, stated carefully, with the strength of the evidence noted.\n\nFlag the popular myths the evidence does not support — learning styles, the 10% brain myth, and others relevant to {focus} — and for each myth explain why it is appealing, what the evidence actually says, and what to believe instead. Myth-busting without replacement leaves a vacuum; always supply the truer picture.\n\nExplain three classic studies clearly: what the researchers did, what they found, what it means, and the legitimate criticisms — because understanding the criticisms is understanding the science. Connect each study to {application} explicitly.\n\nInclude five practice questions with explained answers, calibrated to {level}, and end with guidance on reading psychology claims in the media critically: the questions that separate solid findings from overhyped headlines, applied to one recent-style claim relevant to {application}. The goal is a learner who trusts the science without worshipping it.\n\nAdd research-methods literacy: how psychology knows what it claims — the difference between correlational and experimental evidence, why replication matters, and what a single study can and cannot prove — so I can weigh findings instead of just collecting them. Then apply everything to {application} directly: take three specific situations from {application}, analyze each with the concepts taught, and prescribe the psychologically informed move in each case. End with a further-reading ladder: the accessible books that deepen {focus} without the textbook slog.",
    "description": "Covers psychology perspectives and classic studies with evidence-graded claims, myth corrections, and media-literacy guidance.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "High School Student",
          "College Intro",
          "Curious Adult"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "Which branch should we focus on?",
        "type": "select",
        "options": [
          "Cognitive Psychology",
          "Social Psychology",
          "Developmental",
          "Abnormal Psychology"
        ],
        "required": true
      },
      "application": {
        "label": "Application",
        "question": "How do you want to apply psychology?",
        "type": "textarea",
        "placeholder": "e.g., Understanding my team's dynamics at work",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Linguistics Intro",
    "displayDescription": "Introduces the science of language using languages you know, with hands-on analysis exercises.",
    "id": "learning-054",
    "prompt": "Introduce me to linguistics at the {level} level with an emphasis on {focus}. The languages I know are: {languagesKnown}. Draw every example from these languages — the hidden patterns of linguistics are most startling in speech I use every day.\n\nCover phonetics (the sounds we make and how), morphology (how words are built), syntax (how words combine), and semantics (how meaning works). For each area, start with something I can observe in {languagesKnown} right now — a pattern I have used ten thousand times without noticing — then reveal the system behind it. The delight of linguistics is recognition, so engineer those moments.\n\nShow the hidden patterns explicitly: the rules I follow unconsciously, the distinctions my languages make that others do not (and vice versa), and what that reveals about how language and mind interact — weighted toward {focus}.\n\nInclude three hands-on analysis exercises using data from {languagesKnown}: small puzzles where I discover a pattern myself (a sound rule, a word-formation process, a sentence structure constraint), with the answers explained step by step — including the reasoning path, so I learn to *do* analysis, not just admire it.\n\nEnd with a guide to exploring any language's structure on my own: the questions to ask, the patterns to hunt for, and the order to investigate in. Close with the one big idea of linguistics that changes how I hear everyday speech forever.\n\nAdd two frontiers that hook most learners: language change (how the patterns just covered are shifting right now in {languagesKnown} — with examples audible in contemporary speech) and language acquisition (how children crack the code so fast, and what that reveals about the hidden patterns). End with a fieldwork challenge: pick one unfamiliar language, apply the exploration guide to it for one week, and report three discoveries — because doing linguistics once beats reading about it ten times. Include where to find good data (grammars, corpora, native speakers) for the investigation.",
    "description": "Reveals the hidden patterns of your own languages through observation-driven lessons and do-it-yourself analysis puzzles.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Curious Beginner",
          "Student",
          "Language Enthusiast"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the emphasis be?",
        "type": "select",
        "options": [
          "Sounds and Speech",
          "Grammar Structures",
          "Language and Mind"
        ],
        "required": true
      },
      "languagesKnown": {
        "label": "Languages Known",
        "question": "Which languages do you know?",
        "type": "text",
        "placeholder": "e.g., English and some Spanish",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Storytelling Craft",
    "displayDescription": "Teaches story craft for your medium through beat-by-beat analysis and exercises built around your story idea.",
    "id": "learning-055",
    "prompt": "Teach me the craft of storytelling for {medium} at the {level} level. I am working on (or dreaming about) this story: {storyIdea}. Use it as the running workshop piece — every principle should be applied to {storyIdea} as well as explained in the abstract.\n\nBreak down the fundamentals: story structure (what actually makes a beginning, middle, and end cohere), character desire (why a protagonist needs a *want* with teeth), conflict (the engine — no conflict, no story), and stakes (why the reader should care, and how to raise them honestly). For each principle, analyze one well-known {medium} example beat by beat, showing the principle at work in the wild — and apply the principle to {storyIdea}, diagnosing what is strong and what is missing.\n\nGive me three writing exercises that isolate each skill: one for structure, one for character desire and conflict, one for stakes. Each exercise should use {storyIdea} as raw material where possible, come with a clear constraint (constraints force craft), and include what good work looks like so I can self-evaluate.\n\nProvide a revision checklist specific to {medium} at the {level} level: the questions to ask of a draft in order, from structural (does the story work?) down to line level. End with criteria for knowing when a story draft is working — the signs, felt and observable, that distinguish a draft with a pulse from one that is merely competent. Calibrate all examples and expectations to {level}: ambitious but not crushing.",
    "description": "Breaks down story structure and character through example analysis and applies every principle to your own story idea.",
    "category": "learning",
    "variables": {
      "medium": {
        "label": "Medium",
        "question": "What medium are you writing for?",
        "type": "select",
        "options": [
          "Short Stories",
          "Novels",
          "Screenplays",
          "Personal Essays"
        ],
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "storyIdea": {
        "label": "Story Idea",
        "question": "What story are you working on or dreaming about?",
        "type": "textarea",
        "placeholder": "e.g., A short story about a retired lighthouse keeper who gets one last visitor",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Essay Writing Coach",
    "displayDescription": "Coaches you from thesis to final draft on your deadline, with paragraph-level feedback and a submission checklist.",
    "id": "learning-056",
    "prompt": "Coach me through writing an essay on {topic} for a {level} audience. My deadline is {deadline} — pace the coaching to it, and tell me honestly what is achievable in the time left.\n\nWork in this order. First, help me narrow a thesis: interrogate my topic with questions until we land on a claim that is arguable, specific, and appropriately scoped for {level}. A weak thesis dooms the essay, so do not let me proceed with a vague one — push back with alternatives.\n\nSecond, build an outline with one clear point per paragraph, where each point's relationship to the thesis is explicit. Teach me the logic of paragraph order: why this point before that one, how the argument builds.\n\nThird, strengthen evidence and transitions: what counts as evidence for this topic and audience, how to integrate it without letting quotes do the thinking, and how to write transitions that show the *reasoning* between paragraphs rather than just signaling movement.\n\nThen review my draft paragraph by paragraph as I share it: flag weak arguments (and name the weakness — unsupported, circular, off-thesis), vague language (with concrete replacements), and structural problems. Be direct — kind but unsparing, like a good editor.\n\nEnd with a final checklist covering structure, clarity, and citation basics appropriate to {level}, plus a last-pass routine for the final hour before {deadline}: what to check in what order when time is short. The coaching should leave me with a better essay and better essay-writing instincts.",
    "description": "Guides thesis-narrowing, outlining, and evidence work, then gives direct paragraph-level feedback against your deadline.",
    "category": "learning",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What is your essay topic?",
        "type": "text",
        "placeholder": "e.g., The causes of urbanization",
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "Who is the audience?",
        "type": "select",
        "options": [
          "High School",
          "College",
          "Graduate",
          "Professional"
        ],
        "required": true
      },
      "deadline": {
        "label": "Deadline",
        "question": "When is the essay due?",
        "type": "text",
        "placeholder": "e.g., This Friday",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Copywriting Basics",
    "displayDescription": "Teaches copywriting for your product and purpose, with practice briefs and specific draft critiques.",
    "id": "learning-057",
    "prompt": "Teach me copywriting fundamentals for {purpose} at the {level} level. What I will be writing about: {product}. Make every example and exercise about {product} — copywriting learned on my real product transfers; copywriting learned on widgets does not.\n\nCover the core principles: headlines (the job of a headline and the formulas that work), hooks (opening lines that earn the next line), benefits over features (translating what it *is* into what it *does for them*), and calls to action (what makes people click, and the friction that stops them). For each principle, show one weak and one strong example written for {product} — the contrast teaches faster than rules alone — and diagnose exactly what makes the weak one weak.\n\nTeach me the reader's psychology briefly: what the reader is thinking when they arrive, the objections forming in their head, and how each part of the copy answers those objections in order. Good copy is applied empathy.\n\nGive me three practice briefs to write against, each a realistic {purpose} assignment for {product} with a defined audience and goal. Critique my drafts with specific fixes — not \"make it punchier\" but \"this headline promises X while the body delivers Y; try this instead\" — and explain the principle behind each fix.\n\nEnd with a formula sheet for common {purpose} formats: the structures I can reuse, when each fits, and the one-line purpose of each section within the formula. Calibrate to {level}: foundations solid before advanced tactics.",
    "description": "Teaches headlines, hooks, and CTAs through weak-vs-strong examples for your product, with critiqued practice briefs.",
    "category": "learning",
    "variables": {
      "purpose": {
        "label": "Purpose",
        "question": "What will you write copy for?",
        "type": "select",
        "options": [
          "Marketing Emails",
          "Product Pages",
          "Social Media Ads",
          "Website Copy"
        ],
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate"
        ],
        "required": true
      },
      "product": {
        "label": "Product",
        "question": "What will you be writing about?",
        "type": "text",
        "placeholder": "e.g., Handmade leather wallets",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Poetry Craft",
    "displayDescription": "Teaches poetry through close readings and exercises shaped by the poets you love.",
    "id": "learning-058",
    "prompt": "Teach me the craft of poetry at the {level} level with a focus on {focus}. The poets or poems I love are: {inspiration}. Study them with me — analyze what they do technically, so my taste becomes instruction rather than just admiration.\n\nCover the core craft elements: imagery (concrete over abstract, and why), line breaks (what a line break *does* — the pause, the emphasis, the double meaning), sound (rhythm, music, and mouthfeel), and the demands of {focus} specifically. For each element, do a close reading of a poem you provide: quote the key lines, show the technique operating, and explain the effect — then connect it to something in {inspiration}, so I see my taste has a technical vocabulary.\n\nGuide me through three writing exercises that build each skill separately: one for image, one for line, one for sound — each with a sharp constraint that forces the skill (constraints are the teacher). Give honest, specific feedback on my drafts: name what is working and why, name what is not and offer concrete alternatives. No empty praise — I want to improve, not be flattered.\n\nTeach me a revision process for taking a poem from rough to finished: the order of operations (what to fix first, what to fix last), how to know when a poem is done versus abandoned, and the questions to ask of every line. End with guidance on developing further: what to read next given {inspiration} and {focus}, and the practice habit that builds a poet over time.",
    "description": "Builds poetic craft through close readings connected to your taste, constrained exercises, and an honest revision process.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the focus be?",
        "type": "select",
        "options": [
          "Free Verse",
          "Formal Forms",
          "Spoken Word"
        ],
        "required": true
      },
      "inspiration": {
        "label": "Inspiration",
        "question": "Which poets or poems do you love?",
        "type": "text",
        "placeholder": "e.g., Mary Oliver, Ocean Vuong",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Speech Structure Coach",
    "displayDescription": "Builds a timed speech outline engineered for your audience and the response you want from them.",
    "id": "learning-059",
    "prompt": "Help me structure a {length} speech on {topic} for {audience}. What I want the audience to think, feel, or do afterward: {speechGoal}. Engineer every structural choice toward that outcome — a speech is a machine for producing a response, and the response determines the design.\n\nBuild the structure in three parts. Opening hook: give me three hook options tailored to {audience} and {topic} (a story, a startling fact, a question), with why each would work on *this* audience — then recommend one. Body: a clear three-part arc with transitions, where each part has a stated purpose (what it must accomplish in the audience's mind) and a time allocation fitting {length}. Close: a memorable ending engineered for {speechGoal} — the final image, line, or call that the audience carries out of the room.\n\nMap each section to its timing so the whole speech fits {length} with breathing room. Give me a fill-in outline: the skeleton with prompts telling me what belongs in each slot and the common mistake for that slot (the anecdote that goes nowhere, the data dump, the apologetic opening).\n\nTeach me the techniques that make each point land on {audience}: concrete over abstract, one idea per section, repetition with variation for the key line. Include a rehearsal checklist that tests *structure* before delivery — can I state each section's purpose from memory? does the arc survive a one-minute summary? — because a well-structured speech survives mediocre delivery, but not vice versa.\n\nEnd with the two structural risks for this specific speech and how the outline guards against them.",
    "description": "Creates an outcome-engineered speech structure with hook options, a fill-in outline, and a structure-first rehearsal checklist.",
    "category": "learning",
    "variables": {
      "length": {
        "label": "Length",
        "question": "How long is the speech?",
        "type": "select",
        "options": [
          "2-5 Minutes",
          "5-15 Minutes",
          "15+ Minutes"
        ],
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What is the speech about?",
        "type": "text",
        "placeholder": "e.g., Why cities need more trees",
        "required": true
      },
      "audience": {
        "label": "Audience",
        "question": "Who is the audience?",
        "type": "text",
        "placeholder": "e.g., A community board meeting",
        "required": true
      },
      "speechGoal": {
        "label": "Speech Goal",
        "question": "What should the audience think, feel, or do afterward?",
        "type": "textarea",
        "placeholder": "e.g., I want them to approve funding for the tree-planting proposal",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Speaking Delivery Practice",
    "displayDescription": "Coaches vocal delivery with drills targeting your known weakness, plus warm-ups and a nerve routine.",
    "id": "learning-060",
    "prompt": "Coach my speaking delivery for a {context} at the {level} level. What I already know about my delivery: {knownWeakness}. Start there — design the coaching around fixing {knownWeakness} first, since the biggest weakness sets the ceiling.\n\nAsk me to describe a recent practice run (or do one now and report back): what I said, how long it took, and what felt off. From that description, assess my pace, pauses, vocal variety, and body language — tell me what you infer, what you cannot know from a description, and the one diagnostic question that would clarify it.\n\nThen prescribe three targeted drills that fix the weakest area first. Each drill needs: exactly what to do, how long to do it, what correct feels like, and how I will know it is working. Drills beat advice — \"pause more\" is advice; \"read this paragraph inserting a two-beat pause at every period\" is a drill.\n\nInclude a warm-up routine (voice and body, five minutes, doable in a hallway), a recording-and-review protocol (what to record, what to listen for on playback, the three things to note before re-recording), and a pre-performance routine for managing nerves — grounded in what actually works (breathing, reframing, preparation rituals), not \"just relax.\"\n\nCalibrate to {level} and {context}: a {context} has specific delivery demands — name them. End with a practice schedule for the next two weeks and the observable signs that {knownWeakness} is improving.\n\nAdd two high-leverage extras: handling Q&A (the listen-pause-structure technique, bridging back to your message, and the graceful admission of not knowing that builds more credibility than bluffing) and virtual delivery for {context} (camera eye-line, energy calibration for the screen, and the setup checks that prevent technical amateur-hour). Close with the long game: the monthly maintenance practice that keeps delivery sharp after this {context} is over, and how to build a personal feedback loop — the two people to recruit and the specific feedback to ask them for.",
    "description": "Diagnoses delivery from your practice run, prescribes feel-based drills for your weakest area, and adds warm-ups and nerves protocol.",
    "category": "learning",
    "variables": {
      "context": {
        "label": "Context",
        "question": "What is the speaking context?",
        "type": "select",
        "options": [
          "Presentation",
          "Interview",
          "Toast or Speech",
          "Video Recording"
        ],
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "knownWeakness": {
        "label": "Known Weakness",
        "question": "What do you struggle with most in delivery?",
        "type": "text",
        "placeholder": "e.g., I rush when nervous and mumble the endings of sentences",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Creative Nonfiction Coach",
    "displayDescription": "Coaches true-story writing around your project, with scene craft, ethics guidance, and a two-stage revision framework.",
    "id": "learning-061",
    "prompt": "Coach me in creative nonfiction for {form} at the {level} level. What I am writing (or want to write): {project}. Keep {project} at the center — every technique should be demonstrated on it as well as explained generally.\n\nTeach the core craft: scene-building (how to put the reader *in* the moment — sensory detail, action, dialogue — versus summarizing it), reflection (how to think on the page without preaching, and where reflection belongs in a scene), and voice (what it is, how it differs from style, and how to find mine without performing). Analyze one published excerpt to show each technique in action: quote the key passages, name what the writer is doing, and connect it to a choice I face in {project}.\n\nTeach the ethics of writing about real people seriously: consent, composite characters, memory's unreliability, the duty to the living subjects versus the duty to the truth. Give me a framework for the hard decisions, not just rules — because the hard cases are where rules run out.\n\nGive me three generative exercises designed to produce material for {project}: one for scene, one for reflection, one for voice — each with a constraint that forces the skill. Provide specific feedback on my drafts: what is working and why, what is not with concrete alternatives, always tied to craft principles.\n\nEnd with a revision framework that separates structural edits (does the piece *work*? is the arc sound? is the reflection earned?) from line edits (never polish sentences in a scene you might cut). Give me the order of operations and the questions for each pass, calibrated to {form} and {level}.",
    "description": "Teaches scene, reflection, and voice through excerpt analysis applied to your project, with real-people ethics and staged revision.",
    "category": "learning",
    "variables": {
      "form": {
        "label": "Form",
        "question": "Which form are you writing?",
        "type": "select",
        "options": [
          "Memoir Essay",
          "Personal Essay",
          "Literary Journalism"
        ],
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "project": {
        "label": "Project",
        "question": "What are you writing or want to write?",
        "type": "textarea",
        "placeholder": "e.g., An essay about the summer I worked at my grandfather's store",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Screenwriting Basics",
    "displayDescription": "Teaches screenplay craft for your format through your story idea, with a premise-to-outline worksheet.",
    "id": "learning-062",
    "prompt": "Teach me screenwriting fundamentals for a {format} at the {level} level. My story idea: {storyIdea}. Build the entire lesson around developing {storyIdea} — I should end with a real outline, not just knowledge about outlines.\n\nCover the essentials: three-act structure (what each act must accomplish dramatically, not just page counts), scene construction (every scene needs a want, an obstacle, and a turn — teach me to test scenes against this), dialogue that sounds human (subtext, voice, and why real speech transcribed is terrible dialogue), and proper formatting (the conventions that mark a professional, taught as the *reasons* behind the rules).\n\nWalk through one sample scene beat by beat — ideally from a well-known {format} — showing the want/obstacle/turn machinery operating, then help me apply the same analysis to a key scene from {storyIdea}.\n\nGive me a premise-to-outline worksheet for {storyIdea}: the questions in order (logline, protagonist's want and need, inciting incident, act breaks, climax, resolution), with guidance on what strong answers look like and the common failure at each step. Then three writing exercises: one for scene construction, one for dialogue (with a subtext constraint), one for visual storytelling (no dialogue allowed).\n\nEnd with a checklist for a professional-looking first draft specific to {format}: formatting, length targets, and the story questions the draft must answer. Calibrate expectations to {level} — honest about how much rewriting a first draft needs.\n\nAdd the rewriting reality: why the first draft is for discovery and the rewrite is for the audience, the order of rewrite passes (story first — structure, character, stakes — then scenes, then dialogue, formatting last), and the diagnostic questions for each pass. Then teach me to get useful feedback: who to show the draft to at {level}, the specific questions to ask (never whether they liked it — always where they got bored and where they were confused), and how to distinguish a note that reveals a real problem from a note that prescribes a solution I should ignore.",
    "description": "Covers structure, scenes, and dialogue through sample-scene breakdowns, developing your story idea into a real outline.",
    "category": "learning",
    "variables": {
      "format": {
        "label": "Format",
        "question": "What format are you writing?",
        "type": "select",
        "options": [
          "Short Film",
          "Feature Film",
          "TV Pilot"
        ],
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate"
        ],
        "required": true
      },
      "storyIdea": {
        "label": "Story Idea",
        "question": "What is your story idea?",
        "type": "textarea",
        "placeholder": "e.g., A heist movie where the crew are all retirees",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Journalism Basics",
    "displayDescription": "Teaches reporting and news writing for your beat, with community exercises and a fact-checking checklist.",
    "id": "learning-063",
    "prompt": "Teach me journalism basics at the {level} level, focused on {focus}. The beat or community I want to cover: {beat}. Ground every exercise in {beat} — journalism is learned by reporting real things, not by studying abstractions.\n\nCover the foundations: news values (what makes something news, and how news judgment differs by outlet), sourcing (finding people who know, getting them to talk, protecting them), interviewing (preparation, the questions that open people up, listening), the inverted pyramid (what it is, when to use it, when to break it), and ethics (accuracy, fairness, conflicts, harm — with the hard cases, not just the easy rules).\n\nFor each principle, show one strong and one weak example drawn from the world of {beat}: the contrast teaches faster than the rule. Calibrate to {level}: a student needs the classroom-to-newsroom bridge; a citizen journalist needs credibility-building; an aspiring professional needs portfolio thinking.\n\nGive me three reporting exercises I can actually do in {beat}: each with a defined assignment, who to talk to, what to ask, and what a successful result looks like. Include a fact-checking checklist — the verification steps in order, from confirming names and numbers to the two-source rule and when it applies.\n\nEnd with guidance on writing a clean 500-word news story: the structure, the lead (with three lead options for my exercise story and why each works or does not), and the editing pass that separates publishable from draft. Close with how to keep learning: what to read, what to practice, and the habit that builds a journalist.",
    "description": "Covers news values, sourcing, and ethics through beat-specific examples, real reporting assignments, and verification checklists.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Student",
          "Beginner Citizen Journalist",
          "Aspiring Professional"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the focus be?",
        "type": "select",
        "options": [
          "News Reporting",
          "Feature Writing",
          "Investigative Basics"
        ],
        "required": true
      },
      "beat": {
        "label": "Beat",
        "question": "What beat or community do you want to cover?",
        "type": "text",
        "placeholder": "e.g., My town's school board and local development",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Technical Writing Guide",
    "displayDescription": "Teaches task-based documentation for your audience, built around the document you actually need to write.",
    "id": "learning-064",
    "prompt": "Teach me technical writing for {audience} at the {level} level. The document I actually need to write: {targetDocument}. Use it as the workshop piece — I should finish the lesson with a real draft underway, not just principles.\n\nCover the foundations: clarity (what makes a sentence hard to follow and how to fix it), structure (how readers actually use documentation — they scan, they skip, they arrive mid-page), task-based organization (organizing by what the reader wants to *do*, not by what the product *is*), and writing instructions people can actually follow (prerequisites stated, steps atomic and verifiable, expected results shown).\n\nCalibrate everything to {audience}: end users need jargon-free task flows and error recovery; developers need precise reference material and working code; internal teams need context and decision rationale. Show me how the same information gets written three different ways for these audiences, using {targetDocument} as the example.\n\nInclude before-and-after rewrites of weak examples relevant to {targetDocument}: the weak version, a diagnosis of exactly what fails, and the rewrite with each change explained. Then give me three practice documents to write — graduated, culminating in a section of {targetDocument} — with detailed feedback on each.\n\nEnd with a style checklist covering consistency, terminology management, and formatting — the unglamorous disciplines that make documentation feel professional — plus a testing method: how to verify my docs work by watching a real reader use them. Close with the one question to ask of every paragraph I write.",
    "description": "Teaches audience-calibrated, task-based documentation through diagnosed rewrites and practice culminating in your real document.",
    "category": "learning",
    "variables": {
      "audience": {
        "label": "Audience",
        "question": "Who will read your documentation?",
        "type": "select",
        "options": [
          "End Users",
          "Developers",
          "Internal Teams"
        ],
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate"
        ],
        "required": true
      },
      "targetDocument": {
        "label": "Target Document",
        "question": "What document do you need to write?",
        "type": "textarea",
        "placeholder": "e.g., A user guide for our team's new scheduling feature",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Grant Writing Guide",
    "displayDescription": "Teaches grant proposals for your grant type, built around your project idea with a rejection-proofing checklist.",
    "id": "learning-065",
    "prompt": "Teach me grant writing fundamentals for {grantType} at the {level} level. My project idea: {projectIdea}. Develop the lesson as a working session on {projectIdea} — every section taught should produce a draft paragraph for my actual proposal.\n\nCover the anatomy of a winning proposal: the needs statement (proving the problem with data and story, and why *my* framing of the need matters), goals versus objectives (the distinction funders care about most, with examples of each done right and wrong), budgets that tell a story (every line justified by the narrative, no mystery numbers), and evaluation plans (how I will prove it worked — designed before the project starts, not after).\n\nFor each section, show one strong and one weak example relevant to {grantType}: diagnose the weak one's exact failures (vague need, immeasurable objectives, unjustified budget) and show what the strong one does differently. Calibrate to {level}: beginners need the full architecture explained; intermediates need the refinements that separate funded from almost-funded.\n\nGive me a proposal outline template customized for {grantType}, then three practice exercises on {projectIdea} — drafting my needs statement, converting a goal into measurable objectives, and justifying three budget lines — with feedback criteria for each.\n\nEnd with a submission checklist covering the mistakes that get proposals rejected: the eligibility misreads, the formatting violations, the deadline logistics, and the narrative red flags reviewers spot in the first page. Close with how funders actually read proposals (hint: not front to back) and what that means for where my strongest material goes.",
    "description": "Covers proposal anatomy through strong-vs-weak examples for your grant type, with draft-producing exercises and a submission checklist.",
    "category": "learning",
    "variables": {
      "grantType": {
        "label": "Grant Type",
        "question": "What kind of grants will you pursue?",
        "type": "select",
        "options": [
          "Nonprofit Programs",
          "Arts Projects",
          "Research",
          "Community Initiatives"
        ],
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate"
        ],
        "required": true
      },
      "projectIdea": {
        "label": "Project Idea",
        "question": "What is your project idea?",
        "type": "textarea",
        "placeholder": "e.g., An after-school art program for teens in my neighborhood",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Marketing Fundamentals",
    "displayDescription": "Teaches positioning and messaging for your context and goal, through real campaign autopsies.",
    "id": "learning-066",
    "prompt": "Teach me marketing fundamentals at the {level} level for {context}. My marketing goal is: {marketingGoal}. Every concept should be applied to {marketingGoal} — marketing learned on my real objective transfers; marketing learned on case studies alone does not.\n\nCover the foundations: positioning (the mental slot I want to own, and why \"better\" is not a position), target audiences (how to define them by behavior and need, not demographics alone), messaging (the hierarchy from promise to proof), and channels (where the audience actually is, and how channel shapes message).\n\nTeach through real campaign examples — including failures. For each, do an autopsy: what they were trying to do, why it worked or failed, and the principle the outcome demonstrates. Weight the examples toward situations resembling {context} where possible.\n\nGive me three exercises applied to {marketingGoal}: defining my audience (with the questions that reveal a real audience versus a persona poster), writing a positioning statement (with the tests that expose a weak one — could a competitor claim it? does it guide decisions?), and sketching a simple campaign plan (objective, audience, message, channels, measure of success). Provide feedback criteria for each exercise so I can self-evaluate honestly.\n\nEnd with the measurement mindset: how to know if marketing is working, the vanity metrics that mislead beginners, and the one question to ask before spending anything. Calibrate depth to {level}: foundations rock-solid before tactics.\n\nAdd the measurement and iteration loop: the metrics that matter for {marketingGoal} (and the vanity metrics to ignore), how to set up a simple test (one variable, a clear hypothesis, enough time), and how to read results without fooling myself. Then address ethics briefly: the line between persuasion and manipulation in {context}, with the transparency test — would I be comfortable if the customer could see exactly what I am doing? End with a 90-day action plan: what to do in weeks 1-2, month 1, and quarter 1 to turn these fundamentals into momentum for {marketingGoal}.",
    "description": "Covers positioning, audiences, and messaging through campaign autopsies, with exercises applied to your marketing goal.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Aspiring Professional"
        ],
        "required": true
      },
      "context": {
        "label": "Context",
        "question": "What context are you learning marketing for?",
        "type": "text",
        "placeholder": "e.g., A local bakery",
        "required": true
      },
      "marketingGoal": {
        "label": "Marketing Goal",
        "question": "What should your marketing achieve?",
        "type": "textarea",
        "placeholder": "e.g., Get 50 catering inquiries per month within six months",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Personal Finance Literacy",
    "displayDescription": "Builds money fundamentals as one system, calibrated to your situation with realistic numbers.",
    "id": "learning-067",
    "prompt": "Build my personal finance literacy at the {level} level, focused on {focus}. My financial situation: {situation}. Use realistic numbers based on {situation} throughout — abstract advice about \"saving 20%\" means nothing without my numbers; concrete math with my numbers changes behavior.\n\nTeach budgeting, emergency funds, debt payoff strategies, and the basics of saving and investing as one connected system, not separate tips. Show the order of operations: what comes first and why (the logic of the sequence matters more than any single tactic), and how each piece supports the others. For {focus}, go deep: if budgeting, teach the method that fits my psychology; if debt, compare avalanche versus snowball honestly including the behavioral science; if savings, teach the automation that makes it happen.\n\nGive me a starter budget template to fill in, with the categories that matter and the ones beginners overcomplicate. Include three decision exercises built from {situation}: realistic trade-off decisions (pay debt or save? which expense to cut?) with the reasoning worked through, so I learn to *think* financially rather than follow rules.\n\nTeach the five money habits that matter most — the small set of behaviors that drive most outcomes — and for each, the specific implementation (not \"spend less\" but the mechanism that makes spending less automatic). Name the psychological traps that sabotage each habit and the defense against each.\n\nEnd with a 90-day action plan ordered by impact, calibrated to {level} and {situation}: what to do in the first week, the first month, the first quarter. Close with when to get professional help and what kind.",
    "description": "Connects budgeting, debt, and saving into an ordered system with your-numbers math, decision exercises, and a 90-day plan.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Some Knowledge",
          "Ready To Optimize"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the focus be?",
        "type": "select",
        "options": [
          "Budgeting Basics",
          "Getting Out Of Debt",
          "Building Savings"
        ],
        "required": true
      },
      "situation": {
        "label": "Situation",
        "question": "Describe your financial situation:",
        "type": "textarea",
        "placeholder": "e.g., I earn $3,200/month, have $8k in credit card debt, and no savings",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Business Idea Validation",
    "displayDescription": "Validates your idea at your current stage with interview scripts, competitor analysis, and a pursue-or-pivot scorecard.",
    "id": "learning-068",
    "prompt": "Help me validate the business idea of {idea} for the market of {market}. Where I am right now: {stage}. Meet me at {stage} — do not make me redo work I have done, and do not skip the steps I have not.\n\nWalk me through the validation sequence in order. First, problem interviews: give me the exact questions to ask potential customers — questions that reveal real pain without leading the witness (never \"would you buy this?\"), plus how to find people to talk to, how many conversations is enough, and how to interpret what I hear (what counts as evidence versus politeness).\n\nSecond, competitor analysis: how to find the real competitors (including the non-obvious ones — the spreadsheet, the manual workaround, doing nothing), what to learn from each, and how to map where {idea} would actually be different in a way customers pay for.\n\nThird, a minimum-viable-test plan: the smallest, cheapest experiment that would produce real evidence about {idea} — a landing page, a concierge test, a pre-sale — with what to measure and what result would mean what. Design it for {stage}: bigger tests if I have traction, tiny ones if I am starting.\n\nEnd with a scorecard that tells me whether to pursue, pivot, or drop the idea: the criteria, how to weight the evidence I have gathered, and — critically — what specific evidence would change the verdict. A good validation ends with a decision I can defend, not with vague encouragement. Include the cognitive traps that corrupt validation (confirmation bias, sunk cost, asking friends) and the discipline that defeats each.",
    "description": "Guides stage-appropriate validation through unbiased interviews, real competitor mapping, and an evidence-weighted decision scorecard.",
    "category": "learning",
    "variables": {
      "idea": {
        "label": "Idea",
        "question": "What is your business idea?",
        "type": "text",
        "placeholder": "e.g., Meal kits for seniors",
        "required": true
      },
      "market": {
        "label": "Market",
        "question": "Who is the target market?",
        "type": "text",
        "placeholder": "e.g., Retirees in suburban areas",
        "required": true
      },
      "stage": {
        "label": "Stage",
        "question": "What stage are you at?",
        "type": "select",
        "options": [
          "Just An Idea",
          "Talked To Some People",
          "Built Something Small",
          "Have Early Users"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Negotiation Skills",
    "displayDescription": "Teaches negotiation for your context and your upcoming situation, with a worksheet and coached role-plays.",
    "id": "learning-069",
    "prompt": "Teach me negotiation skills for {context} at the {level} level. The specific situation I am preparing for: {situation}. Build the entire lesson as preparation for {situation} — I should walk away with a plan, not just principles.\n\nCover the foundations: preparation (what to research and why it is most of the negotiation), interests versus positions (what people say they want versus what they actually need — and how to uncover the latter), anchoring (how first numbers shape everything, and how to set or counter them), and handling objections (the difference between a real objection and a tactic, and the response to each).\n\nTeach through two realistic {context} scenarios I can practice — one modeled closely on {situation}. For each scenario, give me the setup, the other party's likely moves, and the decision points where the negotiation is won or lost.\n\nGive me a pre-negotiation worksheet customized for {situation}: my interests, my best alternative if this fails (and how to strengthen it before I sit down), my opening, my walk-away point, the questions I will ask, and the concessions I am prepared to make in what order. This worksheet is the deliverable — preparation is the skill.\n\nInclude three role-play exercises where you play the other side: start cooperative, then add pressure, then throw a curveball. Coach my responses with specific feedback after each round. End with a post-negotiation review process: the questions to ask after every negotiation so each one makes me better at the next. Calibrate tactics and expectations to {level}: fundamentals flawless before advanced moves.",
    "description": "Builds negotiation skill as preparation for your real situation, with a customized worksheet and escalating role-plays.",
    "category": "learning",
    "variables": {
      "context": {
        "label": "Context",
        "question": "What kind of negotiation?",
        "type": "select",
        "options": [
          "Salary",
          "Buying and Selling",
          "Freelance Rates",
          "Everyday Deals"
        ],
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "situation": {
        "label": "Situation",
        "question": "What specific negotiation are you preparing for?",
        "type": "textarea",
        "placeholder": "e.g., Negotiating a raise at my annual review next month",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Leadership Basics",
    "displayDescription": "Teaches new-leader fundamentals for your role and team, with scenarios and a weekly reflection template.",
    "id": "learning-070",
    "prompt": "Teach me leadership fundamentals for a {role} at the {level} level. My team situation: {teamContext}. Ground every scenario and piece of advice in {teamContext} — leadership is always leadership *of these people in this situation*.\n\nCover the core skills: setting direction (how to give people a clear picture of where we are going and why it matters), giving feedback (the structure of feedback that changes behavior without damaging the relationship — including the positive kind most new leaders skip), running effective one-on-ones (the agenda, the questions that surface real issues, the listening), and handling underperformance (the conversation sequence, the documentation, the compassion-with-standards balance).\n\nFor each skill, give me one realistic scenario set in {teamContext}: the situation, what is really going on beneath the surface, and two approaches — one that backfires and one that works — with why each produces its outcome. The contrast teaches the judgment, not just the technique.\n\nGive me three practice exercises: realistic situations from {teamContext} to work through with model responses showing strong leadership thinking. Include a weekly leadership reflection template: the five questions to ask every Friday (what did my team need that I gave? what did they need that I missed? and similar) that compound into leadership growth.\n\nEnd with the five habits that separate new managers who thrive from those who struggle — the small, repeatable behaviors, not the grand philosophies — and the three traps new leaders fall into (doing instead of leading, avoiding hard conversations, confusing busyness with impact) with the early warning sign for each. Calibrate to {level}: permission to be a beginner, with high standards anyway.",
    "description": "Covers direction, feedback, and one-on-ones through team-grounded scenarios, with a compounding weekly reflection template.",
    "category": "learning",
    "variables": {
      "role": {
        "label": "Role",
        "question": "What is your leadership role?",
        "type": "select",
        "options": [
          "New Manager",
          "Team Lead",
          "Aspiring Leader"
        ],
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate"
        ],
        "required": true
      },
      "teamContext": {
        "label": "Team Context",
        "question": "Describe your team situation:",
        "type": "textarea",
        "placeholder": "e.g., I lead 4 junior developers, two are new hires, morale is shaky after a reorg",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Accounting Basics",
    "displayDescription": "Teaches accounting as one connected system for your purpose, with a worked example and your software in mind.",
    "id": "learning-071",
    "prompt": "Teach me accounting basics at the {level} level for {purpose}. The tool I use (or plan to use): {accountingTool}. Reference how the concepts appear in {accountingTool} — where the debits and credits hide in the interface — so the theory connects to the tool I actually touch.\n\nExplain the accounting equation, debits and credits, and the three financial statements as one connected system, not separate topics. Build the logic: the equation must balance, debits and credits are the mechanism that keeps it balanced, every transaction touches the equation, and the financial statements are three views of the same underlying reality. Show the connections explicitly at every step — this is the insight that makes accounting click.\n\nWork through a small business example from transaction to statements: ten realistic transactions for a business like one relevant to {purpose}, journal entries for each with the reasoning (which accounts, debit or credit, why), then the trial balance, then all three statements derived from it. I should see the whole machine run once, end to end.\n\nInclude ten practice journal entries with full solutions — each solution showing the reasoning, not just the answer — ordered from straightforward to tricky (the ones involving prepayments, accruals, and depreciation that confuse beginners). Then give me a guide to reading any income statement with confidence: what each line means, the three ratios that tell the story, and the red flags that signal trouble.\n\nCalibrate to {level} and keep {purpose} central: a business owner needs decision-useful reading skills; a student needs exam-ready mechanics. End with the five habits that keep books clean and the two mistakes that create the biggest messes.",
    "description": "Connects the accounting equation to financial statements through a full worked example, with tool-referenced practice entries.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Business Student",
          "Small Business Owner"
        ],
        "required": true
      },
      "purpose": {
        "label": "Purpose",
        "question": "Why are you learning accounting?",
        "type": "text",
        "placeholder": "e.g., Managing my freelance books",
        "required": true
      },
      "accountingTool": {
        "label": "Accounting Tool",
        "question": "What tool do you use or plan to use?",
        "type": "select",
        "options": [
          "QuickBooks",
          "Xero",
          "Wave",
          "Spreadsheets",
          "None Yet"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Investing Basics",
    "displayDescription": "Teaches investing fundamentals for your horizon and risk comfort, with portfolio sketches and mistake warnings.",
    "id": "learning-072",
    "prompt": "Teach me investing fundamentals at the {level} level with a focus on {focus}. My time horizon is {horizon} and my comfort with risk is: {riskComfort}. Every recommendation must respect both — a {horizon} horizon with {riskComfort} risk comfort implies a specific posture, and I want to understand the reasoning, not just receive a prescription.\n\nCover the foundations: risk and return (why they are inseparable, and what \"risk\" actually means — volatility, permanent loss, and inflation erosion are different risks), diversification (what it protects against and what it cannot), and index investing (why the simple approach beats most active attempts, with the evidence). Use historical examples — the crashes, the recoveries, the long flat stretches — to make the abstractions visceral.\n\nTeach the psychology that ruins returns as a core topic, not a footnote: loss aversion, recency bias, panic selling, performance chasing. For each bias, show the behavior, the cost (in realistic numbers for {focus}), and the structural defense (automation, rules, ignorance-as-strategy).\n\nGive me three portfolio sketches for different goals within {focus}, each with the reasoning: why this allocation for this goal, what could go wrong, and what I would do when it does. Include a checklist for evaluating any investment I encounter — the questions that expose fees, risks, and hype — and the five beginner mistakes to avoid, each with its real-world cost.\n\nBe honest about what investing cannot do and what it does not require: no stock-picking genius needed, no perfect timing possible. End with the first three concrete steps for someone at {level} with a {horizon} horizon, and what \"staying the course\" actually looks like in practice. This is education, not financial advice — say so, and explain why that distinction matters.",
    "description": "Covers risk, diversification, and investor psychology with horizon-calibrated portfolios and an investment evaluation checklist.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Some Knowledge",
          "Ready To Invest"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the focus be?",
        "type": "select",
        "options": [
          "Retirement",
          "General Wealth Building",
          "Understanding Markets"
        ],
        "required": true
      },
      "horizon": {
        "label": "Time Horizon",
        "question": "What is your investment time horizon?",
        "type": "select",
        "options": [
          "Under 3 Years",
          "3-10 Years",
          "10-25 Years",
          "25+ Years"
        ],
        "required": true
      },
      "riskComfort": {
        "label": "Risk Comfort",
        "question": "How do you feel about investment risk?",
        "type": "select",
        "options": [
          "Very Cautious",
          "Somewhat Cautious",
          "Comfortable With Ups and Downs"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Taxes Basics",
    "displayDescription": "Explains taxes in plain language for your situation, starting from what worries you most.",
    "id": "learning-073",
    "prompt": "Teach me tax basics at the {level} level for a {situation}. What worries me most about taxes: {taxWorry}. Address {taxWorry} first and thoroughly — then build the full picture around it.\n\nExplain income, deductions, credits, and brackets in plain language, with the distinctions beginners blur: deduction versus credit (and why the difference matters enormously), marginal versus effective rate (with a worked example showing the most common misunderstanding), and what \"taxable income\" actually means after the layers are peeled.\n\nWalk through a realistic return step by step for someone in {situation}: the forms involved, what goes where, the order of operations, and the decisions at each step. Flag the deductions and credits people in my situation most often miss — the specific ones, with who qualifies and what they are worth.\n\nInclude a document-gathering checklist: everything I need to collect before filing, where to find each item, and the timeline (when documents arrive, when to start). Add the record-keeping habits that make next year painless.\n\nGive me clear guidance on when professional help is worth paying for versus doing it myself: the complexity thresholds, the cost-benefit math, and what a good preparer does that software does not. Name the red flags of bad preparers too.\n\nCalibrate to {level}: a first-time filer needs the full orientation; a self-employed learner needs estimated payments and business deductions. End with the three things to do this week and the calendar of tax dates that matter for {situation}. Note where the information is US-specific and what to check if my jurisdiction differs.",
    "description": "Walks through a realistic return for your situation with commonly missed deductions, a document checklist, and pro-vs-DIY guidance.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "First-Time Filer",
          "Some Experience",
          "Self-Employed"
        ],
        "required": true
      },
      "situation": {
        "label": "Situation",
        "question": "Describe your tax situation:",
        "type": "text",
        "placeholder": "e.g., Single filer with freelance income",
        "required": true
      },
      "taxWorry": {
        "label": "Biggest Worry",
        "question": "What worries you most about taxes?",
        "type": "text",
        "placeholder": "e.g., I am afraid I will miss something and get penalized",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Project Management Basics",
    "displayDescription": "Teaches project fundamentals by planning your real project, with templates and derailment-proofing habits.",
    "id": "learning-074",
    "prompt": "Teach me project management fundamentals at the {level} level for {context}. The real project I want to plan: {realProject}. Use it as the workshop — every concept should be applied to {realProject} as it is taught, so I finish with an actual plan, not just knowledge.\n\nCover the foundations in the order a project actually unfolds: scoping (defining what is in and out — the most important and most skipped step), work breakdown (decomposing {realProject} into tasks small enough to estimate and assign), scheduling (dependencies, the critical path, and why everything takes longer than expected), risk management (identifying what could go wrong with {realProject} specifically, and the response for each), and stakeholder communication (who needs to know what, when, and in what form).\n\nGive me three planning exercises that build {realProject}'s plan piece by piece: the scope statement, the work breakdown, and the risk register — each with a template, a worked example, and feedback criteria so I can judge my own work.\n\nProvide templates for a project plan and a status update, filled in with {realProject} as the example. Teach me the five habits that keep projects from derailing: the weekly review, the honest status, the scope-change discipline, the dependency watch, and the buffer that protects the deadline — with what each habit looks like in practice for {context}.\n\nEnd with the failure patterns: the five ways projects like {realProject} typically die, the early warning sign of each, and the intervention. Calibrate to {level}: enough rigor to work, not so much process that a beginner drowns in it.",
    "description": "Builds a real plan for your project through scoping, breakdown, and risk exercises, with templates and failure-pattern warnings.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Aspiring PM"
        ],
        "required": true
      },
      "context": {
        "label": "Context",
        "question": "What context will you manage projects in?",
        "type": "text",
        "placeholder": "e.g., Community event planning",
        "required": true
      },
      "realProject": {
        "label": "Real Project",
        "question": "What real project do you want to plan?",
        "type": "textarea",
        "placeholder": "e.g., Organizing a neighborhood cleanup day for 50 volunteers",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Agile Basics",
    "displayDescription": "Explains agile as a working system for your team, with sprint walkthroughs and failure-mode warnings.",
    "id": "learning-075",
    "prompt": "Teach me agile fundamentals at the {level} level for a {role}. My team looks like this: {teamContext}. Ground every ceremony and artifact in {teamContext} — agile is a team operating system, and it only makes sense fitted to an actual team.\n\nExplain sprints, backlogs, standups, and retrospectives as a working system rather than jargon: the sprint as a feedback loop, the backlog as ordered options, the standup as a coordination pulse, the retro as the improvement engine. Show how the pieces connect — what breaks when one piece is missing — because agile fails as often from missing pieces as from bad ones.\n\nWalk through two full sprint cycles for a team like {teamContext}: the planning (how work gets chosen and sized), the daily rhythm, the review (what \"done\" means and how to demo), and the retrospective (how to surface real issues and actually change something). Make it concrete — who says what, what gets written down, what good looks like.\n\nInclude a starter backlog template with five example items written for {teamContext}, plus guidance on writing good user stories: the format, what makes one ready, and the tests that expose a bad one. Calibrate to {role}: a team member needs participation skills; an aspiring scrum master needs facilitation skills.\n\nEnd with the five dysfunctions that make agile fail in practice — cargo-cult ceremonies, the backlog as a wish list, standups as status reports to a boss, retros with no action, velocity as a weapon — with the symptom and the fix for each, applied to {teamContext}. Close with how to start: the smallest agile experiment a team like mine could run next week.",
    "description": "Walks through full sprint cycles fitted to your team, with a starter backlog and the dysfunctions that break agile.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "New To Agile",
          "Team Member",
          "Aspiring Scrum Master"
        ],
        "required": true
      },
      "role": {
        "label": "Role",
        "question": "What is your role?",
        "type": "text",
        "placeholder": "e.g., Software team member",
        "required": true
      },
      "teamContext": {
        "label": "Team Context",
        "question": "Describe your team:",
        "type": "textarea",
        "placeholder": "e.g., 6-person marketing team, remote, juggling many small requests",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Sales Skills",
    "displayDescription": "Teaches sales fundamentals for what you sell, with a discovery bank and coached role-plays.",
    "id": "learning-076",
    "prompt": "Teach me sales fundamentals for {context} at the {level} level. What I sell: {offering}. Every example, script, and exercise should be built around {offering} — sales skill is product-specific, and generic training stays generic.\n\nCover the foundations: discovery questions (how to uncover the real problem, the cost of the problem, and the decision process — the questions that make the sale before any pitch), handling objections (the difference between a real concern and a brush-off, and the response structure for each), presenting value (translating features into outcomes the buyer cares about, in the buyer's language), and closing (recognizing buying signals and asking plainly — the part beginners avoid and professionals treat as service).\n\nGive me a discovery-question bank customized for {offering}: the questions in the order to ask them, what each question reveals, and the follow-ups that go deeper. Include two realistic {context} call scenarios I can practice — one straightforward, one difficult — with the buyer's likely objections and the strong responses.\n\nInclude three role-play exercises where you play the buyer: start with an interested prospect, then a skeptical one, then one with a specific hard objection relevant to {offering}. Coach my responses with specific feedback after each round — what worked, what to change, the exact rephrasing.\n\nEnd with a follow-up system template that keeps deals moving without being pushy: the cadence, the value-add touches, and when to let go. Calibrate to {level}: the foundations of trust and discovery before advanced closing technique. Close with the mindset shift that separates order-takers from salespeople.",
    "description": "Covers discovery, objections, and closing for your offering, with a custom question bank and buyer role-plays.",
    "category": "learning",
    "variables": {
      "context": {
        "label": "Context",
        "question": "What sales context?",
        "type": "select",
        "options": [
          "B2B",
          "Retail",
          "Freelance Services",
          "Startup"
        ],
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "offering": {
        "label": "Offering",
        "question": "What do you sell?",
        "type": "text",
        "placeholder": "e.g., Custom websites for local restaurants",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Networking Skills",
    "displayDescription": "Teaches professional networking for your goal and style, with scripts and a sustainable weekly routine.",
    "id": "learning-077",
    "prompt": "Teach me professional networking skills at the {level} level for the goal of {goal}. My social style is: {socialStyle}. Design the tactics around {socialStyle} — networking advice that fights someone's nature gets ignored; advice that works with it gets used.\n\nCover the foundations: where to find the right people (the specific places — online and off — where people relevant to {goal} gather), how to start conversations that are not awkward (the openers that work, why they work, and the mindset shift from \"impressing\" to \"being curious\"), following up with value (what to send, when, and the line between thoughtful and transactional), and maintaining relationships over time (the light-touch system that keeps connections warm without becoming a chore).\n\nGive me three outreach message templates customized for {goal} and {socialStyle}: the cold introduction, the warm follow-up after meeting someone, and the ask (for advice, an introduction, or an opportunity) — each with the psychology of why it gets answered and the mistakes that get it ignored.\n\nInclude scripts for the common situations: asking for introductions, reaching out after a long silence, exiting a conversation gracefully, and following up when someone goes quiet. Provide a weekly networking routine fitted to {socialStyle} and {level}: the specific actions, the time required, and how to track it without it feeling like a second job.\n\nEnd with the long game: how relationships compound, the giving-first principle in practice (what \"giving value\" concretely means for someone at my stage), and the networking mistakes that burn bridges. The goal is a system I will actually maintain, not a burst of enthusiasm.",
    "description": "Teaches finding people and following up with value, through style-fitted scripts, templates, and a maintainable routine.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Experienced But Rusty"
        ],
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What is your networking goal?",
        "type": "text",
        "placeholder": "e.g., Breaking into product design",
        "required": true
      },
      "socialStyle": {
        "label": "Social Style",
        "question": "How would you describe your social style?",
        "type": "select",
        "options": [
          "Introverted - Prefer One-On-One",
          "Ambivert - Flexible",
          "Extroverted - Love Groups"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Interview Skills Coach",
    "displayDescription": "Coaches you for your target role with mock interviews, answer frameworks, and a question bank.",
    "id": "learning-078",
    "prompt": "Coach me for {interviewType} interviews at the {level} level in the field of {field}. I am targeting: {targetRole}. Tailor every question, framework, and piece of feedback to {targetRole} — interview skill is specific, and generic preparation produces generic answers.\n\nTeach the foundations: the STAR method (with what each letter must accomplish and the mistakes that hollow it out), research preparation (what to learn about the organization, where to find it, and how to use it in answers without sounding rehearsed), and handling tough questions (the pause-then-structure technique, bridging back to strengths, and what to do when you genuinely do not know).\n\nRun mock interviews where you play the interviewer: ask me one question at a time, wait for my answer, then give specific feedback — what landed, what to cut, the stronger framing — before the next question. Start with warm-ups, move to {targetRole}-specific questions, then throw two curveballs. Calibrate difficulty to {level}: supportive for first-timers, demanding for the seasoned.\n\nGive me a bank of the twenty most common questions for {interviewType} interviews in {field}, each with a strong answer framework (not a script — the structure to fill with my experience) and the trap hidden in the question. Include the questions *I* should ask them, with what each question signals.\n\nEnd with a post-interview follow-up plan: the thank-you (timing, content, what it accomplishes), the self-review (what to note while it is fresh), and how to handle waiting, rejection, and offers. The coaching should leave me walking in prepared, not just informed.",
    "description": "Runs calibrated mock interviews with specific feedback, plus a twenty-question bank with frameworks and a follow-up plan.",
    "category": "learning",
    "variables": {
      "interviewType": {
        "label": "Interview Type",
        "question": "What kind of interview?",
        "type": "select",
        "options": [
          "Job",
          "College Admissions",
          "Internship"
        ],
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "First-Timer",
          "Some Experience",
          "Seasoned"
        ],
        "required": true
      },
      "field": {
        "label": "Field",
        "question": "What field is the interview for?",
        "type": "text",
        "placeholder": "e.g., Nursing",
        "required": true
      },
      "targetRole": {
        "label": "Target Role",
        "question": "What specific role or program are you targeting?",
        "type": "text",
        "placeholder": "e.g., Pediatric nurse residency at City General",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Speed Reading Trainer",
    "displayDescription": "Trains reading speed for your material with technique drills, honest comprehension tracking, and a target pace.",
    "id": "learning-079",
    "prompt": "Train my reading speed at the {level} level for {material}. My current reading speed is about {currentSpeed}, and my target is: {readingGoal}. Design the training as a bridge from {currentSpeed} to {readingGoal} — with milestones, not just techniques.\n\nTeach the core techniques, each with one drill: sub-vocalization reduction (how to stop \"hearing\" every word, and what to do instead), chunking (widening the fixation span — with exercises that train the eyes, not just the idea), and previewing (surveying structure before reading, so the brain knows what it is looking for). For each technique, explain *why* it works cognitively and where its limits are — honesty about limits is what separates training from hype.\n\nThen time me on practice passages appropriate to {material}: give me a passage, have me read it, then test both my words-per-minute and my comprehension with specific questions. Track both numbers explicitly across sessions — speed without comprehension is skimming, and I want you to tell me honestly when speed is hurting understanding. Define the trade-off clearly: which materials reward speed, and which demand slowness.\n\nIncrease difficulty gradually: faster targets, denser {material}, longer passages. Set the milestone ladder from {currentSpeed} to {readingGoal} with what each milestone should feel like.\n\nCalibrate to {level} and end with the honest verdict section: what speed reading can and cannot do for {material}, the materials where I should deliberately slow down, and the daily 10-minute maintenance drill that keeps the skill after training ends.",
    "description": "Coaches speed techniques with timed drills on your material, tracking WPM against comprehension with honest limits.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "material": {
        "label": "Material",
        "question": "What will you be reading?",
        "type": "select",
        "options": [
          "Textbooks",
          "Professional Reading",
          "General Books"
        ],
        "required": true
      },
      "currentSpeed": {
        "label": "Current Speed",
        "question": "What is your current reading speed (rough WPM, or 'not sure')?",
        "type": "text",
        "placeholder": "e.g., Around 200 WPM, or not sure",
        "required": true
      },
      "readingGoal": {
        "label": "Reading Goal",
        "question": "What is your target?",
        "type": "text",
        "placeholder": "e.g., 400 WPM with solid comprehension of textbooks",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Memory Techniques Coach",
    "displayDescription": "Teaches memory systems on your material against your deadline, with a personal system design.",
    "id": "learning-080",
    "prompt": "Teach me memory techniques at the {level} level for remembering {material}. My deadline is: {deadline}. Pace the training to {deadline} — prioritize the techniques with the highest return for {material} in the time available, and say what to skip if time is short.\n\nTeach four techniques, each with a live demonstration on my actual {material}: the memory palace (how to build one from a place I know intimately, how to place items, how to walk it), chunking (how to group {material} into memorable units — the grouping strategy matters more than the technique), spaced repetition (the schedule, why the intervals work, and how to run it with minimal tools), and vivid association (how to make associations bizarre enough to stick, with the line between memorable and distracting).\n\nFor each technique, demonstrate it on a real piece of {material} first — do not explain abstractly and leave me to apply it. Then have me apply it to another piece with your feedback: correct my palace construction, sharpen my associations, fix my chunking.\n\nTeach the crucial distinction: techniques for *encoding* (getting it in) versus systems for *retention* (keeping it). Then help me design my personal memory system for {material}: which techniques for which kinds of content, the weekly maintenance routine that keeps it alive past {deadline}, and how to handle the volume (what to memorize deeply, what to keep at recognition, what to externalize to notes).\n\nCalibrate to {level} and end with the honest limits: what memory techniques cannot do, when understanding beats memorization, and the warning signs that I am memorizing what I should be comprehending.",
    "description": "Demonstrates four memory techniques on your material, coaches your application, and designs a maintainable personal system.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "material": {
        "label": "Material",
        "question": "What do you want to remember?",
        "type": "text",
        "placeholder": "e.g., Anatomy terms",
        "required": true
      },
      "deadline": {
        "label": "Deadline",
        "question": "When do you need to have it memorized?",
        "type": "text",
        "placeholder": "e.g., My exam is in 3 weeks",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Critical Thinking Exercises",
    "displayDescription": "Builds critical thinking with scored exercises on your topic, including a bias-check on your own beliefs.",
    "id": "learning-081",
    "prompt": "Build my critical thinking at the {level} level around {topic}. A belief I hold fairly strongly: {strongBelief}. Use it in the bias-checking exercise — thinking critically about neutral topics is easy; the skill is tested on beliefs I care about. Handle {strongBelief} with respect: the goal is sharper thinking, not changing my mind.\n\nGive me five exercises, each with a worked example first (you think aloud through the reasoning), then my turn with scoring and specific feedback:\n\n1. Spotting assumptions: find the unstated premises in a {topic} argument — the things that must be true for the conclusion to follow. Teach me the question that reveals them.\n2. Evaluating evidence: weigh a piece of evidence for a {topic} claim — its source, its strength, what would weaken or strengthen it.\n3. Detecting logical fallacies: identify the fallacy in three {topic} arguments, name it, and explain why the reasoning fails even if the conclusion might be true.\n4. Steelmanning opposing views: reconstruct the strongest version of the case against {strongBelief} — fairly, at its best — before any criticism. This is the hardest exercise and the most valuable.\n5. Checking my own biases: examine how confirmation bias, motivated reasoning, and tribal loyalty might be shaping my view of {strongBelief}, with concrete tests I can run on myself.\n\nScore each attempt with specific feedback: what I caught, what I missed, and the sharper move. Calibrate difficulty to {level}.\n\nEnd with a daily five-minute thinking routine: the short practice that keeps these muscles alive — one claim examined, one assumption spotted, one steelman attempted. Close with the meta-lesson: critical thinking is not cynicism, and the goal is truer beliefs, not the performance of skepticism.",
    "description": "Trains assumption-spotting, evidence evaluation, and steelmanning with scored exercises, including one on your own beliefs.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Student",
          "Professional",
          "Curious Adult"
        ],
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What topic should exercises use?",
        "type": "text",
        "placeholder": "e.g., News about AI",
        "required": true
      },
      "strongBelief": {
        "label": "Strong Belief",
        "question": "What is a belief you hold fairly strongly?",
        "type": "textarea",
        "placeholder": "e.g., I believe remote work is better for most knowledge workers",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Research Skills Guide",
    "displayDescription": "Teaches research on your actual topic, from source evaluation to synthesis, with escalating practice tasks.",
    "id": "learning-082",
    "prompt": "Teach me research skills at the {level} level for {purpose}. What I need to research: {researchTopic}. Use {researchTopic} as the live case throughout — I should end with real research underway, not just research knowledge.\n\nCover the full pipeline in order: finding reliable sources (where to look beyond the first page of search results, calibrated to {level} — library databases for college, industry sources for professionals), evaluating credibility (the criteria: authority, evidence, bias, currency — with one strong and one weak source example per criterion, drawn from the world of {researchTopic}), taking useful notes (the system that prevents the \"I read it but lost it\" problem: source, claim, evidence, my question — captured at reading time), synthesizing findings (how to turn a pile of notes into an argument — the patterns across sources, the disagreements that matter), and citing properly (the why of citation as well as the how, in the style {purpose} requires).\n\nGive me a research plan template filled in for {researchTopic}: the questions to answer, the source types to consult, the order to tackle them, and the milestones. Then three practice tasks of increasing difficulty on {researchTopic}: evaluate two sources head-to-head, synthesize three sources into one paragraph, and outline the full argument — each with feedback criteria.\n\nEnd with a checklist for a trustworthy final product: the questions that catch weak research before submission (are my claims proportional to my evidence? have I represented disagreements fairly? can every factual claim be traced to a source?). Calibrate depth and source types to {level} and {purpose}.",
    "description": "Covers the research pipeline on your live topic, with source showdowns, synthesis practice, and a trustworthiness checklist.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "High School",
          "College",
          "Professional"
        ],
        "required": true
      },
      "purpose": {
        "label": "Purpose",
        "question": "What will you research for?",
        "type": "text",
        "placeholder": "e.g., A capstone paper",
        "required": true
      },
      "researchTopic": {
        "label": "Research Topic",
        "question": "What do you need to research?",
        "type": "text",
        "placeholder": "e.g., The effects of urban green spaces on mental health",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Logic and Reasoning",
    "displayDescription": "Teaches argument evaluation with graded practice drawn from where you actually encounter arguments.",
    "id": "learning-083",
    "prompt": "Teach me logic and reasoning at the {level} level, focused on {focus}. Where I encounter arguments most: {argumentContext}. Draw the practice arguments from {argumentContext} — logic learned on my real disagreements transfers; logic learned on textbook syllogisms stays in the textbook.\n\nCover the foundations: deductive versus inductive arguments (what each promises and what each can deliver), validity versus soundness (the distinction that unlocks everything — a valid argument can still be unsound, and most bad arguments fail at one specific point), and the ten most common fallacies with everyday examples from {argumentContext}. For each fallacy, show the pattern, a realistic example, why it is tempting, and the precise question that exposes it.\n\nGive me fifteen arguments to evaluate, drawn from {argumentContext} and ordered by difficulty: for each, I judge whether it is good reasoning, name any fallacy, and explain. Provide full explanations for every answer — including the reasoning path, so I learn to *do* the analysis. Make the later ones genuinely tricky: arguments that look fallacious but are not, and ones that look solid but smuggle a bad premise.\n\nThen give me a framework for building airtight arguments of my own: stating the conclusion plainly, choosing premises the audience already grants, making the inference explicit, and anticipating the strongest objection. Include a self-review checklist for my own reasoning.\n\nCalibrate to {focus}: everyday arguments get applied fallacy-spotting; formal logic gets symbolization basics; debate gets refutation structure. End with the habit that matters most: the pause between hearing an argument and accepting it.",
    "description": "Covers argument types and fallacies with fifteen context-drawn evaluations and an argument-building framework.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the focus be?",
        "type": "select",
        "options": [
          "Everyday Arguments",
          "Formal Logic",
          "Debate Skills"
        ],
        "required": true
      },
      "argumentContext": {
        "label": "Argument Context",
        "question": "Where do you encounter arguments most?",
        "type": "text",
        "placeholder": "e.g., Political discussions with family, online debates",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Drawing Fundamentals",
    "displayDescription": "Teaches drawing from seeing to shading, with a practice routine fitted to your daily time.",
    "id": "learning-084",
    "prompt": "Teach me drawing fundamentals at the {level} level, focused on {focus}. I can practice {dailyMinutes} minutes per day — design the routine to that exact budget, because a routine I can keep beats an ideal one I abandon.\n\nCover the foundations in the order that builds real skill: line control (the physical confidence to put down the line you mean), seeing shapes instead of symbols (the perceptual shift that is most of drawing — drawing what is there, not the cartoon-symbol your brain substitutes), proportion (measuring relationships, not guessing), and shading (value as the thing that makes drawings look three-dimensional).\n\nFor each skill, give me one guided exercise with exact instructions: what to draw, how long to spend, what to pay attention to, and what success looks like at {level}. The exercises should be doable with basic materials and produce visible progress — early wins keep beginners drawing.\n\nGive me a {dailyMinutes}-minute daily practice routine: the warm-up, the main exercise (rotating through the skills across the week), and the cool-down. Include criteria for judging my own progress — what improvement actually looks like at each stage, so I can tell I am getting better even when it does not feel like it — and the five beginner mistakes that stall improvement (with the fix for each, since most are one insight away from solved).\n\nWeight everything toward {focus}: the exercises, the examples, and the progress criteria should serve the drawing I actually want to do. End with what comes after fundamentals: the next three skills in order for {focus}, and how to know when I am ready for each.",
    "description": "Builds drawing skill through guided exercises and a time-fitted daily routine, with self-evaluation criteria and stall-fixers.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Some Experience",
          "Intermediate"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the focus be?",
        "type": "select",
        "options": [
          "Sketching",
          "Portraits",
          "Still Life"
        ],
        "required": true
      },
      "dailyMinutes": {
        "label": "Daily Minutes",
        "question": "How many minutes per day can you practice?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Photography Basics",
    "displayDescription": "Teaches exposure and composition on your camera for your purpose, starting from your biggest frustration.",
    "id": "learning-085",
    "prompt": "Teach me photography basics at the {level} level with a {camera} for the purpose of {purpose}. My biggest frustration right now: {frustration}. Solve {frustration} early in the lesson — a quick win builds the motivation for the deeper work.\n\nCover the foundations through hands-on assignments I can shoot today: exposure (the triangle — aperture, shutter, ISO — taught as trade-offs, not settings: what each choice *buys* me and what it *costs*), composition (the principles that guide the eye, and when to break them), and light (the real subject of every photograph — direction, quality, color — and how to see it before shooting). For every setting on my {camera}, explain the *why* before the how.\n\nCalibrate to {camera}: smartphone shooters need composition and light mastery plus the phone's computational tricks; DSLR/mirrorless shooters need the exposure triangle and lens choices; film shooters need deliberation and the discipline of limited frames. For {purpose}, weight the examples and assignments toward the shots I will actually take.\n\nGive me five photo challenges I can do this week, each with a clear brief, the skill it isolates, and evaluation criteria so I can judge my own results honestly. Include a simple editing workflow that improves any image: the five adjustments in order, what each fixes, and when to stop — because over-editing is the beginner's signature.\n\nEnd with the two habits that separate improving photographers from stuck ones (shooting deliberately and reviewing critically), and a 30-day practice plan for {purpose}.",
    "description": "Teaches the exposure triangle as trade-offs on your camera, with a frustration-first quick win and critiqued weekly challenges.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Some Experience",
          "Intermediate"
        ],
        "required": true
      },
      "camera": {
        "label": "Camera",
        "question": "What camera will you use?",
        "type": "select",
        "options": [
          "Smartphone",
          "DSLR or Mirrorless",
          "Film"
        ],
        "required": true
      },
      "purpose": {
        "label": "Purpose",
        "question": "What do you want to photograph?",
        "type": "text",
        "placeholder": "e.g., Family events",
        "required": true
      },
      "frustration": {
        "label": "Frustration",
        "question": "What is your biggest photography frustration?",
        "type": "text",
        "placeholder": "e.g., My indoor photos always come out blurry or yellow",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Music Theory Starter",
    "displayDescription": "Teaches music theory as sound first on your instrument, aimed at your musical goal.",
    "id": "learning-086",
    "prompt": "Start my music theory learning at the {level} level for {instrument}. My musical goal is: {musicalGoal}. Every concept should point toward {musicalGoal} — theory learned in service of a musical desire sticks; theory learned as abstraction evaporates.\n\nTeach notes, intervals, scales, and chords as sounds first and notation second. For each concept, give me one listening exercise: what to play or listen to on my {instrument}, what to listen *for*, and the moment of recognition to wait for. Only after the sound is in my ears, show me the notation — as a way of writing down what I already hear, not as the thing itself.\n\nCalibrate to {instrument}: piano learners get the visual layout advantage; guitarists get shapes and patterns; other instruments get their own physical logic. Show me where each concept lives *on my instrument* — the physical location of the knowledge.\n\nGive me three play-along practice routines: one for intervals and ear recognition, one for scales as musical material (not finger exercises), one for chords and progressions. Each routine needs a clear method, a time suggestion, and what \"getting it\" sounds like.\n\nInclude a chord-building cheat sheet: how any chord is constructed from its formula, the progressions that underlie most popular music, and how to transpose. End with a path from theory to improvising my first simple melody: the steps in order, each one small enough to feel safe, culminating in something I can actually play for someone. Close with the practice habit that builds musicianship over months, not days.",
    "description": "Introduces theory through listening-first exercises on your instrument, with play-along routines and a path to improvisation.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Some Playing Experience"
        ],
        "required": true
      },
      "instrument": {
        "label": "Instrument",
        "question": "What instrument do you play?",
        "type": "text",
        "placeholder": "e.g., Piano",
        "required": true
      },
      "musicalGoal": {
        "label": "Musical Goal",
        "question": "What do you want to be able to do musically?",
        "type": "text",
        "placeholder": "e.g., Play my favorite songs by ear and improvise a little",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Video Editing Basics",
    "displayDescription": "Teaches editing in your software through a guided project, with story-driven technique choices.",
    "id": "learning-087",
    "prompt": "Teach me video editing basics at the {level} level for {purpose}. My editing software is {software} — give me the exact steps, panel names, and keyboard shortcuts for {software}, not generic instructions I have to translate.\n\nTeach through one guided practice project suited to {purpose}: from importing and organizing footage, through the rough cut, to refining, audio, color, and export. At every stage, explain *when each technique serves the story*: cutting on action versus cutting on emotion, why pacing is a storytelling decision, what transitions actually communicate (and why most of them communicate \"amateur\"). Technique without story judgment produces competent-looking boredom.\n\nCover the foundations in project order: cutting (the three kinds of cuts and when each is right), pacing (how shot length controls feeling, with examples), audio levels (why bad audio kills videos faster than bad picture — dialogue clarity, music ducking, the loudness target), and color correction (the simple corrections that fix 90% of footage, in order).\n\nGive me three editing exercises after the guided project: one for pacing (re-cut the same footage two ways and feel the difference), one for audio (fix a badly mixed clip), one for storytelling (cut a 60-second story from provided-style raw footage). Include a keyboard-shortcut cheat sheet for {software} — the dozen shortcuts that actually matter, learned in the order I will need them — and an export checklist for clean final files (settings for {purpose}, the pre-export review pass, the common export failures).\n\nEnd with the beginner mistakes that mark every early edit and the single habit — watching my own cuts with fresh eyes — that fixes most of them.",
    "description": "Teaches story-driven editing in your software through a guided project, with software-specific shortcuts and an export checklist.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Some Experience"
        ],
        "required": true
      },
      "purpose": {
        "label": "Purpose",
        "question": "What will you edit?",
        "type": "select",
        "options": [
          "YouTube Videos",
          "Social Media Clips",
          "Family Memories",
          "Short Films"
        ],
        "required": true
      },
      "software": {
        "label": "Software",
        "question": "Which editing software do you use?",
        "type": "select",
        "options": [
          "Premiere Pro",
          "DaVinci Resolve",
          "Final Cut Pro",
          "CapCut",
          "Something Else"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Design Principles",
    "displayDescription": "Teaches design principles in your tool for your context, with rebuildable before-and-after redesigns.",
    "id": "learning-088",
    "prompt": "Teach me core design principles at the {level} level for {context}. My design tool is {tool} — where relevant, tell me how to execute each principle in {tool} (which panel, which control), so the knowledge is usable immediately.\n\nCover the foundations: contrast (making different things look different — the engine of visual interest), hierarchy (guiding the eye in the order *I* choose, not the order it wanders), alignment (the invisible lines that make designs feel intentional), balance (distributing visual weight), and color theory (the relationships that harmonize, the ones that clash, and accessibility — contrast ratios that real people can read).\n\nTeach through before-and-after redesigns of weak examples relevant to {context}: show the weak version described precisely, diagnose every violation (this headline has no hierarchy because...), then the fixed version with each change explained. Make the redesigns detailed enough that I could rebuild both in {tool}.\n\nGive me three design exercises for {context} — graduated from guided (fix this broken design) to open (design this from scratch) — each with critique criteria so I can evaluate my own work: the specific questions to ask (does the eye go where I want? can I squint-test the hierarchy?).\n\nEnd with a checklist I can run on any design I make — the ten checks in order — and guidance on developing taste through deliberate study: what to look at, what to ask about it, and how to build a swipe file that actually teaches. Calibrate to {level}: a non-designer needs permission and principles; an intermediate needs refinement and critique vocabulary.",
    "description": "Teaches contrast, hierarchy, and color through rebuildable redesigns in your tool, with a universal quality checklist.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Non-Designer"
        ],
        "required": true
      },
      "context": {
        "label": "Context",
        "question": "What will you design for?",
        "type": "text",
        "placeholder": "e.g., Social media graphics",
        "required": true
      },
      "tool": {
        "label": "Tool",
        "question": "Which design tool do you use?",
        "type": "select",
        "options": [
          "Canva",
          "Figma",
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Something Else"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "UX Design Basics",
    "displayDescription": "Teaches UX end-to-end on your project idea, from research to usability testing.",
    "id": "learning-089",
    "prompt": "Teach me UX design fundamentals at the {level} level toward {goal}. The project I want to design: {projectIdea}. Run the entire lesson as a real project on {projectIdea} — I should finish with genuine UX work done, not just UX knowledge.\n\nCover the process end to end: user research (how to learn what users need — the interview questions, the observations, and how to do useful research with zero budget), personas (what they are for, what makes one useful versus decorative — build one for {projectIdea}), wireframing (thinking in flows before pixels, the fidelity question), prototyping (how interactive it needs to be to answer *this* question), and usability testing (how to run a test, what to watch for, how to turn observations into changes).\n\nFor each phase, do it for {projectIdea}: the research plan, the persona, the wireframe descriptions, the prototype scope, the test script — with the reasoning shown, so I learn the *judgment*, not just the artifacts.\n\nGive me three practice exercises that deepen the skills: one research synthesis, one wireframe critique (with the vocabulary of good critique — specific, actionable, tied to user goals), and one usability test analysis. Include a template for documenting design decisions: the decision, the alternatives considered, the evidence, the trade-off accepted — because UX is decision-making under uncertainty, and the documentation is where the thinking lives.\n\nEnd with the five usability heuristics every design should pass, applied to {projectIdea}, and a portfolio guide for {goal}: what to show, how to present process (not just screens), and what hiring managers actually look for. Calibrate to {level}: career switchers need the portfolio and vocabulary; expanding designers need the process rigor.",
    "description": "Walks through research to usability testing as real work on your project, with decision documentation and portfolio guidance.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Career Switcher",
          "Designer Expanding Skills"
        ],
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What is your UX goal?",
        "type": "text",
        "placeholder": "e.g., A portfolio for job applications",
        "required": true
      },
      "projectIdea": {
        "label": "Project Idea",
        "question": "What do you want to design?",
        "type": "text",
        "placeholder": "e.g., A habit-tracking app for busy parents",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Knitting Starter",
    "displayDescription": "Teaches knitting from cast-on to finished project at your pace, with handedness-aware instructions.",
    "id": "learning-090",
    "prompt": "Teach me knitting from absolute zero at the {pace} pace toward making {project}. My dominant hand for crafting is: {handedness}. Write all instructions for {handedness} knitters — which hand holds what, which direction things move — because mirrored instructions are the silent killer of beginner tutorials.\n\nCover the foundations in the order I will need them: casting on (one reliable method, taught slowly — this is the first hurdle and it must feel conquerable), the knit stitch (the motion broken into micro-steps with what each step should feel like in my hands), the purl stitch (and how it relates to knit — the insight that unlocks everything), and binding off (finishing cleanly so the work does not unravel).\n\nDescribe each motion in words precise enough to follow without video: hand positions, yarn path, what \"right\" feels like versus what the common wrong version feels like. Include the troubleshooting sense — how to *see* what went wrong by reading the stitches, because knitters who can read their work can fix their work.\n\nTeach me to read a simple pattern: what the abbreviations mean, how to follow a row, how to keep track of where I am. Then give me a first-project plan for {project}: the exact materials list (yarn weight, needle size, how much to buy — with what to look for in the store), the pattern written out, row by row, and milestones so I can see progress.\n\nInclude troubleshooting for the five most common beginner problems — dropped stitches (how to pick them back up), accidental yarn-overs, twisting, uneven tension, and the mystery growing stitch count — each with the fix and the prevention. Pace everything to {pace}: a relaxed learner gets encouragement and smaller sessions; an ambitious one gets stretch goals. End with what to make second, and why.",
    "description": "Teaches knit and purl with feel-based, handedness-aware instructions, pattern reading, and a complete first-project plan.",
    "category": "learning",
    "variables": {
      "pace": {
        "label": "Pace",
        "question": "What pace do you prefer?",
        "type": "select",
        "options": [
          "Relaxed",
          "Steady",
          "Ambitious"
        ],
        "required": true
      },
      "project": {
        "label": "Project",
        "question": "What is your first project?",
        "type": "select",
        "options": [
          "Scarf",
          "Dishcloth",
          "Hat"
        ],
        "required": true
      },
      "handedness": {
        "label": "Handedness",
        "question": "Which is your dominant hand for crafting?",
        "type": "select",
        "options": [
          "Right-Handed",
          "Left-Handed"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Woodworking Basics",
    "displayDescription": "Teaches safe woodworking in your workspace with your tools, through guided projects that produce real things.",
    "id": "learning-091",
    "prompt": "Teach me woodworking basics at the {level} level in a {workspace} with a focus on {focus}. The tools I already own: {toolsOwned}. Build the tool recommendations around what I have — tell me what to buy first to fill the gaps, what I can do without, and what to never buy until I need it.\n\nSafety first, and seriously: the non-optional rules (eye and ear protection, no loose clothing or gloves near spinning blades, how to stand, the respect-awe balance for sharp tools), the specific dangers of each tool I will use, and the workshop setup habits for a {workspace} — dust, noise, and neighbor considerations included. Safety taught as craft pride, not as scolding.\n\nThen the skills in order: measuring and marking (why woodworking is mostly measuring — the marking knife, the story stick, measuring twice as a system not a slogan), cutting (saw technique for my tools: the body mechanics, letting the saw do the work), and joining (from simple butt joints and screws up to the joints that suit {focus}, with what each joint is good for and its strength).\n\nGive me one guided project per skill that produces something genuinely useful for {focus} — not practice scraps but real objects, because useful things get finished. Each project needs: the cut list, the steps in order, the skill it teaches, and the quality check that tells me I did it right.\n\nInclude a minimal tool list with what to buy first (in priority order, with what to look for and what to avoid in each), and fixes for the five most common beginner mistakes — with the cause of each, because fixing the cause beats sanding the symptom. Calibrate everything to {workspace}: small-apartment woodworking is a real discipline with its own solutions (hand tools, quiet hours, compact storage). End with the second project to attempt and the skill it will demand.",
    "description": "Covers safety, measuring, and joinery through useful guided projects, with a prioritized buy-first tool list for your space.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Some Experience"
        ],
        "required": true
      },
      "workspace": {
        "label": "Workspace",
        "question": "What is your workspace?",
        "type": "select",
        "options": [
          "Small Apartment",
          "Garage",
          "Full Workshop"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the focus be?",
        "type": "select",
        "options": [
          "Furniture",
          "Small Projects",
          "Repairs"
        ],
        "required": true
      },
      "toolsOwned": {
        "label": "Tools Owned",
        "question": "What tools do you already own?",
        "type": "textarea",
        "placeholder": "e.g., A cordless drill, a handsaw, clamps, a tape measure",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Pottery Starter",
    "displayDescription": "Starts pottery for your studio access and focus, with feel-based instruction and defect troubleshooting.",
    "id": "learning-092",
    "prompt": "Start my pottery learning at the {level} level, focused on {focus}. My clay access is: {studioAccess}. Shape every recommendation around {studioAccess} — wheel instruction is useless without a wheel, and home hand-builders need different guidance than studio members.\n\nTeach through one guided first piece suited to {focus} and {studioAccess}. Cover clay preparation (wedging — why, how, and how to know it is ready), then the core skills: for wheel throwing, centering (the make-or-break skill — the body position, the pressure, the patience, and how to know when it is centered), pulling walls (the rhythm of it, inside hand versus outside hand), and trimming (when, how much, the tools); for hand building, pinching, coiling, and slab work with the joining technique that keeps pieces from cracking apart.\n\nDescribe the *feel* of each step — what right feels like in the hands — because pottery is a tactile art and \"centered\" is something you feel before you see. Include the signs that something is going wrong early enough to fix it, and when to abandon a piece versus rescue it (beginners rescue too long; teach the judgment).\n\nInclude a glazing basics overview: what glaze is, the application methods, what can go wrong in the kiln, and — critically for {studioAccess} — the firing logistics (who fires it, what it costs, the turnaround). Add a practice schedule: how often to practice, what to work on each session, and how progress feels in pottery (it is non-linear; set expectations honestly).\n\nEnd with troubleshooting for cracking, warping, and collapsing — each with the cause (drying too fast, uneven walls, weak joins) and the fix — plus the second piece to attempt and what it will teach. Calibrate to {level}: encouragement with honesty about the learning curve.",
    "description": "Guides a first piece with tactile feel-based instruction, firing logistics for your access, and cause-based defect fixes.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Some Classes"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the focus be?",
        "type": "select",
        "options": [
          "Wheel Throwing",
          "Hand Building"
        ],
        "required": true
      },
      "studioAccess": {
        "label": "Clay Access",
        "question": "How will you access clay and a kiln?",
        "type": "select",
        "options": [
          "Community Studio Membership",
          "Taking Classes",
          "Home Setup",
          "Not Sure Yet"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Watercolor Basics",
    "displayDescription": "Teaches watercolor with your supplies for your subject, through guided paintings and problem fixes.",
    "id": "learning-093",
    "prompt": "Teach me watercolor fundamentals at the {level} level, focused on {focus}. The supplies I have: {supplies}. Recommend only what I actually need to add — watercolor has a notorious gear trap, and I want the minimal kit that produces real results.\n\nCover the foundations through one guided painting per technique: washes (flat, graded, variegated — the control of water, which is the whole medium), wet-on-wet versus wet-on-dry (what each does, when each is right, and the timing judgment in between), color mixing (the limited palette philosophy — why fewer colors mix cleaner — plus how to mix the colors {focus} actually needs), and brush control (the strokes, the pressure, painting with the brush's belly versus its tip).\n\nFor each guided painting, give me the subject (chosen for {focus}), the steps in order with drying times, what to watch for at each stage, and the point of no return where I should stop touching it. Watercolor's central discipline is knowing when to stop — teach it explicitly.\n\nGive me a minimal supply list (paper matters more than paint — explain why, with what to buy), three practice exercises that isolate the hard skills (a wash chart, a wet-on-wet sky, a limited-palette study), and fixes for muddy colors, blooms (backruns), and overworking — each with the cause and the prevention, because prevention beats rescue in watercolor.\n\nEnd with a simple daily practice routine that fits a busy schedule and the mindset shift from \"producing paintings\" to \"practicing seeing.\" Calibrate to {level}: permission to make bad paintings while building the hand.",
    "description": "Teaches washes and mixing through guided paintings for your subject, with a minimal kit and cause-based problem fixes.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Some Experience"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the focus be?",
        "type": "select",
        "options": [
          "Landscapes",
          "Portraits",
          "Abstract"
        ],
        "required": true
      },
      "supplies": {
        "label": "Supplies",
        "question": "What watercolor supplies do you already have?",
        "type": "textarea",
        "placeholder": "e.g., A student-grade pan set, two round brushes, some mixed-media paper",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Digital Art Starter",
    "displayDescription": "Starts digital art on your hardware for your focus, with a critique checklist and consistent workflow.",
    "id": "learning-094",
    "prompt": "Start my digital art journey at the {level} level, focused on {focus}. My hardware is: {hardware}. Tailor the brush settings, canvas advice, and workflow to {hardware} — a mouse painter and a tablet painter need different guidance, and iPad workflows differ from desktop ones.\n\nCover the digital foundations: layers (what they are conceptually, the layer discipline that keeps files manageable — naming, grouping, non-destructive habits), brushes (the three brushes a beginner actually needs and what each is for, plus the settings that matter: opacity, flow, pressure), blending (the techniques, and when blending is the wrong answer — sharp edges are a feature), and basic color theory (the relationships that make digital color sing, and the picker habits that produce mud).\n\nTeach through three guided exercises that build on each other, all aimed at {focus}: first, values (a grayscale study — because value does the heavy lifting in all art), then color (a limited-palette piece), then a finished {focus} piece combining both. Each exercise needs the steps, what to pay attention to, and what good looks like at {level}.\n\nCover the fundamental drawing skills that transfer from traditional media — construction, proportion, gesture — honestly: the tablet does not draw for you, and the exercises that build the hand matter as much as the software skills.\n\nGive me a practice routine, a critique checklist (the questions that catch weak work: values first, then composition, then color — in that order), and guidance on developing a consistent workflow: from thumbnail to finished piece, the stages in order, so I stop wandering. Calibrate to {level}: a traditional artist switching needs translation of existing skills; a complete beginner needs the drawing foundations given equal weight with the digital ones.",
    "description": "Covers layers, brushes, and blending on your hardware through progressive value-to-color exercises with a critique checklist.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Traditional Artist Switching"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the focus be?",
        "type": "select",
        "options": [
          "Illustration",
          "Character Design",
          "Concept Art"
        ],
        "required": true
      },
      "hardware": {
        "label": "Hardware",
        "question": "What hardware will you draw with?",
        "type": "select",
        "options": [
          "Drawing Tablet (No Screen)",
          "Pen Display Tablet",
          "iPad With Pencil",
          "Mouse Only"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "3D Modeling Intro",
    "displayDescription": "Introduces 3D modeling in your software toward your goal, through a guided first model and practice builds.",
    "id": "learning-095",
    "prompt": "Introduce me to 3D modeling at the {level} level toward {goal}. My software is: {software}. Give me the exact tool names, hotkeys, and panel locations for {software} — 3D software is notoriously interface-heavy, and generic instructions leave beginners lost in menus.\n\nTeach through one guided first model built step by step, chosen to serve {goal}: navigation (the viewport controls — learn these first, because everything else is painful without them), primitives (starting shapes and when each is the right starting point), extrusion (the workhorse operation — what it does conceptually, not just which button), and modifiers (non-destructive power, and the modifier stack order that confuses everyone).\n\nFor each tool, explain the *logic* behind it — what it is doing to the geometry — so I am thinking in 3D rather than memorizing clicks. Narrate the decision points in the guided model: why start with this primitive, why extrude here, why add that edge loop. The decisions are the education.\n\nGive me three practice models of increasing difficulty after the guided one, each with a brief spec (what to build, the key techniques it exercises) and the common failure at that stage. Include a topology basics overview: edge flow, quads versus triangles, why topology matters (deformation, subdivision) — taught visually, with what good and bad topology look like.\n\nEnd with a rendering checklist for clean final images: lighting setup, camera angle, materials basics, and render settings in {software} — plus the beginner rendering mistakes (blown-out lights, noisy renders, bad framing) and their fixes. Close with the learning path toward {goal}: the next three skills in order.",
    "description": "Builds 3D fundamentals in your software through a decision-narrated first model, practice builds, and a rendering checklist.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Some Experience"
        ],
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What do you want to model?",
        "type": "text",
        "placeholder": "e.g., Game assets",
        "required": true
      },
      "software": {
        "label": "Software",
        "question": "Which 3D software will you use?",
        "type": "select",
        "options": [
          "Blender",
          "Maya",
          "3ds Max",
          "ZBrush",
          "Not Sure Yet"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Cooking Fundamentals",
    "displayDescription": "Teaches cooking through the five core techniques, adapted to your diet and focused on your goals.",
    "id": "learning-096",
    "prompt": "Teach me cooking fundamentals at the {level} level, focused on {focus}. My dietary needs or restrictions: {dietaryNeeds}. Every dish, ingredient, and substitution must respect {dietaryNeeds} — no teaching me a cream sauce I cannot eat.\n\nCover the foundations: knife skills (the grip, the claw, the rocking motion — with safety as the first lesson and speed as the last), heat control (the actual skill of cooking — what different heats do to food, how to tell by look/sound/smell, adjusting on the fly), and seasoning (salt as the primary tool: when, how much, tasting as you go — plus acid, fat, and heat as the supporting cast).\n\nTeach the five techniques behind most recipes — sautéing, roasting, braising, steaming/boiling, and baking fundamentals — with one guided dish per technique chosen for {focus} and {dietaryNeeds}. For each dish: the recipe, the technique demonstrated at each step, what to watch for (the sensory cues — color, sound, smell — that tell you what is happening), and the judgment calls (when it is done, how to adjust).\n\nGive me a starter pantry and equipment list: the essentials that earn their space, what to buy first, what to skip — calibrated to {level} and {dietaryNeeds}. Add three practice meals that combine the techniques (real dinners, not drills), and fixes for the five most common beginner cooking mistakes — each with the cause (too crowded a pan, impatience, under-seasoning) and the correction.\n\nEnd with the mindset that makes cooks: tasting constantly, recipes as guidelines not laws, and the weekly cooking habit (one new dish a week) that builds the skill. Include how to adapt any recipe to {dietaryNeeds} — the substitution logic, not just a list.",
    "description": "Teaches knife skills, heat control, and seasoning through diet-respecting guided dishes, with sensory cues and mistake fixes.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Can Follow Recipes",
          "Intermediate"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the focus be?",
        "type": "select",
        "options": [
          "Everyday Meals",
          "Healthy Cooking",
          "Baking Basics"
        ],
        "required": true
      },
      "dietaryNeeds": {
        "label": "Dietary Needs",
        "question": "Any dietary needs or restrictions?",
        "type": "text",
        "placeholder": "e.g., Vegetarian, lactose intolerant",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Car Maintenance Basics",
    "displayDescription": "Teaches driveway-friendly maintenance for your vehicle and your tools, with clear DIY-vs-mechanic lines.",
    "id": "learning-097",
    "prompt": "Teach me car maintenance basics at the {level} level for my {vehicle}. The tools I have on hand: {toolsOnHand}. Every walkthrough must be doable with {toolsOnHand} plus at most one or two inexpensive additions — which you should name explicitly rather than assuming a full garage.\n\nCover the essentials through hands-on walkthroughs I can do in my driveway: checking fluids (oil, coolant, brake, transmission, washer — where each reservoir is on a {vehicle}-type car, how to read each dipstick or sight glass, what the levels and colors mean), tire care (pressure, tread depth with the penny test, rotation logic, what uneven wear is telling me), battery health (terminals, corrosion, the voltage check, jump-starting safely), and warning lights (what each major light means, which ones mean \"stop driving now\" versus \"schedule service soon\").\n\nFor each check, explain what it *reveals* — the diagnostic logic, not just the procedure — so I am learning to understand my car, not just perform rituals. Calibrate to {level}: a complete beginner needs the location-and-identification level first; someone with some knowledge needs the interpretation level.\n\nGive me a seasonal maintenance calendar for {vehicle}: what to check or do each season and why the season matters. Include a trunk emergency kit list (the items that actually get used, not the fantasy kit), and — critically — clear rules for when to DIY versus call a mechanic: the safety lines (brakes, steering, anything under a lifted car without proper stands), the complexity lines, and the cost lines where DIY stops saving money.\n\nEnd with the three habits that keep a car healthy for years and the warning signs that mean \"do not drive this to the shop — tow it.\"",
    "description": "Covers fluids, tires, and warning lights with tool-realistic driveway walkthroughs, a seasonal calendar, and DIY safety lines.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Some Knowledge"
        ],
        "required": true
      },
      "vehicle": {
        "label": "Vehicle",
        "question": "What vehicle do you have?",
        "type": "text",
        "placeholder": "e.g., 2018 sedan",
        "required": true
      },
      "toolsOnHand": {
        "label": "Tools On Hand",
        "question": "What tools do you have available?",
        "type": "text",
        "placeholder": "e.g., Basic socket set, jack, tire pressure gauge",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Home Repair Basics",
    "displayDescription": "Teaches essential repairs for your home type and focus, with safety rules and call-a-pro boundaries.",
    "id": "learning-098",
    "prompt": "Teach me home repair basics at the {level} level, focused on {focus}. My home situation is: {homeType}. Calibrate everything to {homeType} — renters need the landlord conversation and the reversible fixes; homeowners need the long-term thinking and the permit awareness.\n\nCover the essential tools first: the starter kit that handles 80% of repairs, what to buy versus borrow, and the quality tiers (where cheap is fine, where it is not). Then the safety rules that are never optional: electrical (breaker off, test before touching — the procedure, not just the rule), water (know where your shutoffs are *before* the leak), ladders, and chemicals.\n\nTeach the repairs every homeowner or renter should handle, weighted to {focus}: patching walls (the full sequence — prep, fill, sand, prime, paint — with the drying times beginners skip), fixing leaks (diagnosing the source before wrenching, the washer replacements that solve most drips), basic electrical safety (what I can safely do versus what needs an electrician — the line drawn clearly), and unclogging drains (the escalation ladder from plunger to snake to call-for-help). Each repair gets a step-by-step walkthrough with the tools needed, the time required, and what \"done right\" looks like.\n\nInclude clear lines for when to call a professional: the safety thresholds, the code and permit triggers, and the cost math where DIY stops making sense. For {homeType}, add the specific guidance (renter: what to attempt versus request; owner: what affects resale and insurance).\n\nEnd with the preventive habits — the seasonal checks that stop repairs from being needed — and the three skills to learn next for {focus}. Calibrate depth to {level}: confidence-building wins first, then the harder stuff.",
    "description": "Teaches essential repairs with home-type calibration, non-optional safety procedures, and clear professional-help thresholds.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Some DIY Experience"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the focus be?",
        "type": "select",
        "options": [
          "Plumbing Basics",
          "Electrical Safety",
          "General Repairs",
          "Painting and Walls"
        ],
        "required": true
      },
      "homeType": {
        "label": "Home Type",
        "question": "What is your home situation?",
        "type": "select",
        "options": [
          "Apartment Renter",
          "House Renter",
          "Homeowner",
          "Condo Owner"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Gardening Basics",
    "displayDescription": "Teaches gardening for your space, climate, and growing goal, with a seasonal calendar and troubleshooting.",
    "id": "learning-099",
    "prompt": "Teach me gardening basics at the {level} level for a {space}, with the goal of growing {goal}. My climate is: {climate}. Every plant recommendation and calendar date must fit {climate} — generic advice is how beginners plant the wrong thing at the wrong time.\n\nCover the foundations: soil (what good soil is, how to assess mine with simple tests, how to improve it — the single highest-leverage gardening skill), sunlight (how to map my {space}'s light honestly, and matching plants to the light I *have* rather than the light I wish I had), watering (how much, how often, the finger test — plus the overwatering epidemic that kills more plants than drought), and plant selection matched to my {climate}, {space}, and {goal}.\n\nGive me a seasonal planting calendar for {climate}: what to plant when, what to do each season, and the tasks beginners forget (succession planting, hardening off transplants). Provide a starter plant list for {goal} in {space} — specific varieties known to be forgiving for beginners in climates like mine, with why each made the list.\n\nInclude three guided projects from seed to harvest suited to {space} and {goal}: each with the timeline, the steps, what success looks like at each stage, and what to do when it goes sideways. Add troubleshooting for pests, wilting, and poor growth — each with the diagnosis process (what to look at, in what order) before the treatment, because treating the wrong cause wastes a season.\n\nCalibrate to {level} and end with the honest expectations: what the first season realistically yields, the mistakes every beginner makes (and which ones actually matter), and the one habit — daily observation — that teaches more than any guide.",
    "description": "Covers soil, light, and watering for your climate and space, with a seasonal calendar, forgiving plant picks, and diagnostics.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Some Experience"
        ],
        "required": true
      },
      "space": {
        "label": "Space",
        "question": "What space will you garden in?",
        "type": "select",
        "options": [
          "Balcony",
          "Small Yard",
          "Large Garden",
          "Indoor"
        ],
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What do you want to grow?",
        "type": "select",
        "options": [
          "Vegetables",
          "Herbs",
          "Flowers"
        ],
        "required": true
      },
      "climate": {
        "label": "Climate",
        "question": "What is your climate or growing zone?",
        "type": "text",
        "placeholder": "e.g., Hot desert, Phoenix AZ area — zone 9b",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Sewing Starter",
    "displayDescription": "Teaches sewing on your machine from setup to finished project, with machine-specific troubleshooting.",
    "id": "learning-100",
    "prompt": "Teach me sewing from scratch at the {level} level toward making {project}. My sewing machine is: {sewingMachine}. Reference {sewingMachine} specifically where it matters — threading paths, tension dials, and presser feet differ by machine, and machine-specific guidance prevents the most common beginner stall: \"my machine doesn't look like the tutorial.\"\n\nCover the foundations in order: machine setup (unboxing to ready — bobbin winding, threading the machine following *its* path, needles and what the numbers mean), straight stitches (the practice drills that build control: following lines, pivoting corners, backstitching to lock), zigzag stitches (what it is for — finishing edges, stretch fabrics — and the width/length judgment), and reading a simple pattern (the envelope, the symbols, the cutting layout — patterns have their own language and it must be decoded before cutting).\n\nGive me one guided practice piece per skill: each with the fabric to use (start forgiving — woven cotton, not slippery or stretchy), the exact steps, and what good looks like versus what needs redoing. Calibrate to {level}: a complete beginner needs the threading ritual made foolproof; someone with hand-sewing experience needs the machine-thinking translation (the machine does not sew like a hand).\n\nProvide a starter supply list (the essentials, the nice-to-haves, what not to buy yet), then a first-project walkthrough for {project}: materials, cutting, assembly order, the tricky steps flagged in advance with how to handle them.\n\nEnd with fixes for tangled thread (birdnesting — the cause is almost always threading or tension, with the diagnostic order), skipped stitches (needle issues), and uneven seams (guiding versus pushing the fabric) — each with the cause-first fix. Close with the second project to attempt and the new skill it introduces.",
    "description": "Teaches machine setup, stitches, and pattern reading with machine-specific guidance and cause-first troubleshooting.",
    "category": "learning",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is your level?",
        "type": "select",
        "options": [
          "Complete Beginner",
          "Some Hand Sewing"
        ],
        "required": true
      },
      "project": {
        "label": "Project",
        "question": "What is your first project?",
        "type": "select",
        "options": [
          "Tote Bag",
          "Pillowcase",
          "Simple Garments",
          "Repairs and Alterations"
        ],
        "required": true
      },
      "sewingMachine": {
        "label": "Sewing Machine",
        "question": "What sewing machine do you have?",
        "type": "text",
        "placeholder": "e.g., Brother XM2701, or 'none yet — need a recommendation'",
        "required": true
      }
    }
  }
];
