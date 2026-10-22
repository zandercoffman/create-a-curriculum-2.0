import type { PromptSchema } from "../types";

export const curriculumPrompts: PromptSchema[] = [
  {
    "displayTitle": "Curriculum Generator",
    "displayDescription": "Creates a complete, ready-to-use educational curriculum with a scope and sequence, learning objectives, your chosen number of detailed lessons, activities, and more.",
    "id": "curriculum-generator-1",
    "prompt": "Create a complete, detailed, and practical educational curriculum for a child who wants to learn about {topic}.\n\nAt the very beginning of the curriculum, include these two lines exactly as written:\n\nSTUDENT NAME:\nSTUDENT APPLICATION ID#:\n\nDo not place a title, introduction, explanation, or any other text before these two lines.\n\nAfter the student information lines, create the curriculum as a complete educational program that a parent, tutor, teacher, or other adult could realistically use without having to design the lessons themselves.\n\nAlso take into account the following additional information provided by the parent, and let it shape the curriculum wherever relevant:\n\n{otherInfo}\n\nIf additional information is provided above, use it to adapt the language level, pacing, activity choices, examples, and materials — for example, the child's age or learning style should influence how each lesson is taught, and any constraints mentioned (such as available time or materials on hand) must be respected throughout. If it is empty, proceed normally.\n\nFirst, create a clear and engaging curriculum title based specifically on {topic}. The curriculum should feel like a genuine educational program rather than a generic AI-generated list of activities.\n\nThen provide a curriculum overview explaining what the child will learn, why {topic} is educationally valuable, what major concepts will be explored, how the learning will progress, and what the child should understand or be able to do by the end of the curriculum.\n\nNext, create a detailed Scope and Sequence covering exactly {lessonCount} lessons. Show how the curriculum progresses from foundational concepts toward deeper understanding and application. Explain the major concepts, skills, vocabulary, and ideas introduced in each lesson and how each lesson builds upon the previous one. Make the progression logical and appropriate for a child learning about {topic} for the first time unless the nature of the topic requires a different sequence.\n\nThen provide comprehensive Learning Objectives for the curriculum. Objectives must be specific and measurable rather than vague. Describe what the child should be able to identify, describe, explain, demonstrate, compare, classify, apply, analyze, create, or evaluate after completing the curriculum. Make sure the objectives directly connect to the lessons, activities, assessments, and final project.\n\nAfter the objectives, create exactly {lessonCount} detailed lessons in a deliberate instructional order.\n\nFor every lesson, include all of the following sections:\n\n1. Lesson Number and Title — Give the lesson a clear, descriptive title related specifically to {topic}.\n\n2. Purpose — Explain what the lesson accomplishes and why it belongs at this point in the sequence.\n\n3. Learning Objectives — List the specific things the child should know, understand, or be able to do by the end of the lesson.\n\n4. Key Concepts — Identify and explain the important concepts, vocabulary, facts, principles, skills, or terminology introduced or reinforced.\n\n5. Instruction / Teaching Content — Provide detailed teaching content that a parent, tutor, or teacher could actually use. Do not merely state what the child should learn. Explain the information, concepts, examples, and ideas that should be taught.\n\n6. Guided Learning — Explain how the adult should guide the child through the material. Include questions, demonstrations, examples, observations, discussion prompts, or modeling when appropriate.\n\n7. Activity — Create a specific, engaging, topic-specific activity. The activity must have a clear educational purpose and must directly reinforce the lesson's objectives. Provide step-by-step instructions, explain what the child does, explain what the adult does, identify any preparation required, and identify the materials needed.\n\n8. Practice / Application — Give the child an opportunity to actively apply the knowledge or skills from the lesson rather than simply repeat information. Make this specific to {topic}.\n\n9. Discussion and Reflection Questions — Provide thoughtful questions that encourage the child to explain their reasoning, make connections, apply concepts, or reflect on what they learned.\n\n10. Assessment — Include a lesson-specific assessment that determines whether the child achieved the lesson objectives. Use an appropriate combination of questions, demonstrations, short written responses, observations, problem-solving, creative work, or topic-specific tasks.\n\n11. Expected Outcome — Explain what successful completion of the lesson should look like and what evidence would demonstrate that the child understood the material.\n\nMake sure the {lessonCount} lessons are interconnected. Earlier lessons should establish the foundations, middle lessons should deepen or expand the previous learning, later lessons should emphasize greater application or independent thinking, and the final lesson should synthesize the knowledge and skills developed throughout the curriculum. Adapt this progression intelligently to the nature of {topic} rather than forcing an inappropriate structure.\n\nAfter the lessons, create a comprehensive Final Assessment. The final assessment should measure the major learning objectives from the entire curriculum rather than simply testing memorization. Include an appropriate combination of knowledge questions, application questions, demonstrations, problem-solving, creative tasks, explanation, and reflection depending on the nature of {topic}. Explain what successful completion demonstrates. When appropriate, include a simple evaluation rubric or criteria that a parent or teacher can use to determine whether the child has demonstrated sufficient understanding.\n\nThen create a meaningful Culminating Project related specifically to {topic}. The project should require the child to combine knowledge and skills from multiple lessons and produce a clearly defined final product, presentation, demonstration, model, experiment, written piece, creative work, or other appropriate outcome. Provide the project purpose, required materials, step-by-step instructions, expected final product, and evaluation criteria. Whenever possible, allow the project to build upon work the child completed during earlier lessons.\n\nFinally, at the very end of the curriculum, provide a comprehensive Materials List containing every material, supply, tool, book, resource, piece of equipment, or other item required or recommended throughout the curriculum.\n\nThe Materials List must consolidate everything mentioned in the lessons, activities, assessments, and culminating project. Do not list an item that is never actually used, and do not require an item in a lesson without including it in the final Materials List.\n\nFor every material or resource, provide:\n\n- Material / Resource Name\n- Purpose\n- How It Is Used\n- Specific Lesson(s) Used In\n- Specific Activity, Assessment, or Project Used In\n- Technique, Method, or Application\n- Why It Is Helpful\n- Whether It Is Required or Optional\n- A reasonable substitute when one is available\n\nFavor affordable, commonly available, household, classroom, library, or free resources whenever they can accomplish the same educational goal. Only recommend specialized or expensive materials when they provide a meaningful educational benefit for learning {topic}.\n\nIf the curriculum requires specialized equipment, explain exactly how it is used and include appropriate child-safety considerations when relevant. If a book, website, software, tool, product, or other resource is recommended, explain exactly how it contributes to the curriculum rather than simply listing it.\n\nThroughout the entire curriculum, make the content highly specific to {topic}. Do not create a generic curriculum and simply insert the topic name. Tailor the learning objectives, scope and sequence, teaching content, examples, activities, discussion questions, assessments, culminating project, and materials specifically to {topic}.\n\nIf {topic} is broad, intelligently narrow it into a manageable {lessonCount}-lesson curriculum while still providing meaningful coverage of the most foundational and educationally valuable concepts. If {topic} contains multiple possible areas of study, prioritize concepts that naturally build upon one another and explain them in a logical progression.\n\nUse clear, age-appropriate language. Make the curriculum educationally meaningful rather than merely entertaining. Balance direct instruction, guided practice, independent application, creativity, discussion, and assessment. Encourage curiosity, critical thinking, problem-solving, and independent thought whenever appropriate.\n\nAvoid filler content, repetitive activities, vague objectives, generic activities, and unnecessary materials. Every activity should have a clear connection to a learning objective, and every assessment should measure something that was actually taught or practiced.\n\nThe final result must be a complete, ready-to-use educational curriculum rather than an outline or brief description.\n\nThe final curriculum must follow this exact overall order:\n\n1. STUDENT NAME:\n2. STUDENT APPLICATION ID#:\n3. Curriculum Title\n4. Curriculum Overview\n5. Scope and Sequence\n6. Learning Objectives\n7. Lessons 1 through {lessonCount}\n8. Final Assessment\n9. Culminating Project\n10. Comprehensive Materials List\n\nDo not explain your process or discuss these instructions. Simply produce the finished curriculum.",
    "description": "Generates a complete educational curriculum for a child based on a chosen topic and lesson count, including a logical scope and sequence, measurable learning objectives, detailed lessons, topic-specific activities, guided learning, practice, assessments, a culminating project, and a comprehensive materials list with detailed explanations of how every resource is used.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Learning topic",
        "question": "What would you like the child to learn about?",
        "type": "textarea",
        "placeholder": "e.g., astronomy, dinosaurs, photography, marine biology, ancient Egypt, coding, gardening",
        "required": true
      },
      "lessonCount": {
        "label": "Number of Lessons",
        "question": "How many lessons should the curriculum include?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "otherInfo": {
        "label": "Other Info",
        "question": "Is there anything else the AI should know?",
        "type": "textarea",
        "placeholder": "e.g., the child's age, interests, learning style, available time, or materials on hand",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Unit Plan Builder",
    "displayDescription": "Builds a multi-week unit plan with weekly objectives, sequenced lessons, hands-on activities, formative and summative assessments, and differentiation.",
    "id": "curriculum-001",
    "prompt": "You are helping a parent design a complete {weeks}-week unit on {topic} for {subject}, built for a homeschool or parent-led setting with sessions of about {sessionMinutes} minutes. The learner's starting point: {learnerExperience}.\n\nBegin with a unit rationale written for the parent: why {topic} matters beyond the classroom, what real-world situations it shows up in, and what the learner will be able to do by the end that they cannot do now. Then define 4-6 measurable unit objectives aligned to {standards}, each tagged with the standard code it satisfies so the parent has a record for portfolios or state requirements.\n\nStructure the unit week by week. For each week, provide: the week's focus question, 2-3 sequenced lessons with their own mini-objectives, one hands-on activity or real-world application (a project, experiment, field observation, or interview — not just worksheets), a quick formative check the parent can run in under 10 minutes, and notes on how this week's learning builds on the last. Sequence the weeks so concepts progress from concrete and foundational to abstract and complex, and say explicitly why the order works.\n\nInclude one summative assessment at the end that genuinely measures the objectives — a project, presentation, or test with a scoring guide — plus a mid-unit checkpoint so the parent can catch problems early. Add differentiation: what to simplify or scaffold if the learner struggles in a given week, and what to deepen if they race ahead.\n\nClose with a pacing reality check (which weeks are heavy, where to build in a catch-up day), a short materials list for the whole unit, and a one-paragraph parent guide on the parent's role: when to teach directly, when to step back, and what questions to ask that build thinking instead of just checking answers.\n\nFinally, build the unit's memory system: a one-page running log where the parent notes after each week what actually happened versus the plan — what took longer, what clicked, what flopped. This log becomes the unit's second edition: next time the family teaches {topic}, the plan improves itself. File the log with the unit materials, and treat the unit as a living document rather than a script — the best {weeks}-week units are rewritten in the margins as they are taught.",
    "description": "Generates a complete multi-week unit plan with learning objectives, lesson sequencing, hands-on activities, formative and summative assessments aligned to your standards, differentiation strategies, and a realistic pacing guide a parent can follow.",
    "category": "curriculum",
    "variables": {
      "subject": {
        "label": "Subject",
        "question": "What subject is the unit for?",
        "type": "text",
        "placeholder": "e.g., 7th Grade Science",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What topic should the unit cover?",
        "type": "text",
        "placeholder": "e.g., Ecosystems",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "How many weeks should the unit span?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "standards": {
        "label": "Standards",
        "question": "Which standards should objectives align to?",
        "type": "text",
        "placeholder": "e.g., NGSS MS-LS2",
        "required": true
      },
      "sessionMinutes": {
        "label": "Session length",
        "question": "How many minutes is each learning session?",
        "type": "number",
        "placeholder": "e.g., 60",
        "required": true
      },
      "learnerExperience": {
        "label": "Learner experience",
        "question": "How familiar is your learner with this topic already?",
        "type": "select",
        "options": [
          "Brand new to it",
          "Some exposure",
          "Has studied it before"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Curriculum Map Maker",
    "displayDescription": "Maps an entire course onto a term-by-term grid — units, essential questions, standards, assessments — and flags coverage gaps.",
    "id": "curriculum-002",
    "prompt": "You are helping a parent map out an entire {course} across a {termCount} divided into {termCountLabel}. This is the big-picture blueprint: every unit in teaching order, each with its essential question, the core standards it addresses, its key assessment, and an estimated number of weeks.\n\nStart by listing the units in the sequence you recommend, and for each one explain briefly why it sits where it does — what earlier unit it depends on and what later unit it prepares the learner for. The order must be pedagogically defensible, not just traditional. For every unit include: 2-3 essential questions that give the unit intellectual direction, the specific standards covered (with codes), the major assessment that proves learning happened, and the estimated weeks with a note on which units tend to run long.\n\nThen run a coverage audit. Go through the relevant standards for {course} systematically and flag any that are unaddressed, only partially addressed, or addressed only once with no reinforcement. For each gap, suggest the specific unit where it fits naturally and what would need to be added — a lesson, an activity, or an assessment item — to close it. Also flag the reverse problem: units that are overloaded with standards and would benefit from trimming.\n\nAdd a spiraling plan: identify 3-4 foundational skills or concepts that should resurface in later units for cumulative review, and mark exactly where each one reappears. End with a parent-facing summary: the story of the course in plain language (what the learner will be able to do by the end of the {termCount}), the three most important units to protect if time runs short, and which units can be compressed without real loss. Deliver it as a clean grid the parent can pin to the wall, followed by the audit and the summary.",
    "description": "Builds a curriculum map for a full course across terms, sequencing every unit with essential questions, core standards, key assessments, and estimated weeks, then audits the map for standards gaps and suggests where missing standards fit.",
    "category": "curriculum",
    "variables": {
      "course": {
        "label": "Course",
        "question": "Which course should be mapped?",
        "type": "text",
        "placeholder": "e.g., 9th Grade World History",
        "required": true
      },
      "termCount": {
        "label": "Terms",
        "question": "How many terms or quarters does the course run?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "termCountLabel": {
        "label": "Term label",
        "question": "What do you call each term?",
        "type": "select",
        "options": [
          "Semesters",
          "Quarters",
          "Trimesters",
          "Marking periods"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Scope and Sequence",
    "displayDescription": "Lays out a full scope and sequence — what to teach, in what order, with prerequisites, pacing, and cumulative review points.",
    "id": "curriculum-003",
    "prompt": "You are helping a parent plan the full arc of {gradeLevel} {subject} across {months} months, with roughly {weeklyHours} hours per week available for this subject.\n\nFirst, define the scope: the complete set of topics a {gradeLevel} learner should encounter in {subject} this year, grouped into logical units. For each unit, state the prerequisite skills it depends on — be specific (not \"basic math\" but \"fluent multiplication facts to 12x12 and the ability to simplify fractions\"). Order the units in the sequence you would actually teach them, and for each transition explain the pedagogical logic: what the earlier unit provides that the later one needs.\n\nAdd pacing guidance in weeks per unit, calibrated to {weeklyHours} hours per week, and be honest about which units typically take longer than expected and why. Mark cumulative review points — specific weeks where earlier skills deliberately resurface inside new material so nothing learned in month two is forgotten by month six. Suggest the review format each time (a warm-up set, a mixed practice day, a project that reuses the skill).\n\nInclude a \"trim and stretch\" guide: if the family falls behind, which units can be condensed and which must never be rushed; if they run ahead, which units deserve enrichment and extension. Flag any unit where the difficulty jumps sharply and give the parent a heads-up on the warning signs that the learner is not ready to move on.\n\nDeliver the sequence as a month-by-month table followed by the per-unit prerequisite notes, the review-point schedule, and the trim-and-stretch guide. A parent should finish reading it knowing exactly what happens in October, what must be solid before January, and what to do when December gets derailed.\n\nClose the plan with the parent's monthly review ritual: on the first Sunday of each month, the parent spends 20 minutes comparing the plan to reality — which units finished on pace, which prerequisites proved shakier than expected, what the next month's {subject} work assumes. One page of notes per month keeps the {months}-month arc honest, and the accumulated notes become next year's scope and sequence — a plan that learns from being taught.",
    "description": "Creates a month-by-month scope and sequence for a grade level and subject, breaking content into logically ordered units with prerequisite skills, week-level pacing guidance, cumulative review points, and a clear explanation of why the sequence works.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level is this for?",
        "type": "text",
        "placeholder": "e.g., 5th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Math",
        "required": true
      },
      "months": {
        "label": "Months",
        "question": "How many instructional months?",
        "type": "number",
        "placeholder": "e.g., 9",
        "required": true
      },
      "weeklyHours": {
        "label": "Weekly time",
        "question": "About how many hours per week will go to this subject?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Learning Objectives Writer",
    "displayDescription": "Turns any topic into measurable, observable learning objectives tagged by thinking level and ready to paste into a plan.",
    "id": "curriculum-004",
    "prompt": "You are helping a parent turn the topic of {topic} in {subject} into a set of clear, measurable learning objectives for a {gradeLevel} learner. Write about {objectiveCount} objectives.\n\nEvery objective must follow the same rigorous anatomy: an observable action verb (one the parent can actually see or hear — \"explain,\" \"solve,\" \"construct,\" never \"understand\" or \"appreciate\"), the conditions under which the learner performs (given what materials, prompts, or constraints), and the criterion for mastery (how well or how consistently — a percentage, a number of correct trials, a quality bar). Show the parent this anatomy once with a worked example, then use it for every objective so the set is internally consistent.\n\nTag each objective with its level from {taxonomy} and make sure the set genuinely spans the taxonomy: include foundational objectives (recall, comprehension) and push into higher-order ones (analysis, evaluation, creation) appropriate for {gradeLevel}. Do not cluster everything at the bottom. For each higher-order objective, add a one-line note on what evidence would convince the parent the learner truly reached that level.\n\nOrder the objectives in the sequence the learner would master them, so the list doubles as a learning progression the parent can check off. Add a short \"common writing mistakes\" note: show two weak objectives on this same topic and rewrite them correctly, so the parent learns the pattern and can write their own later.\n\nDeliver the final product as a numbered list, each item self-contained and ready to paste into a lesson plan, unit plan, or homeschool portfolio. A high-quality set lets a stranger read any objective and know exactly what the child must do, under what conditions, and what counts as success.\n\nBefore finalizing, run the parent self-review on the finished set: read each objective aloud and ask whether two different parents could interpret its mastery criterion differently — if yes, tighten the criterion until only one reading survives. Check that the objectives tell a story of progression a stranger could follow, and confirm that every objective is assessable with materials the family actually has. Keep the final list where the parent will see it during teaching — taped inside the unit plan — because objectives only work when they are consulted, not filed.",
    "description": "Writes measurable learning objectives for a topic with observable action verbs, conditions and criteria for mastery, thinking-level tags from your chosen taxonomy, and a numbered list formatted for direct use in lesson plans or portfolios.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic are the objectives for?",
        "type": "text",
        "placeholder": "e.g., Fractions",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Math",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 4th Grade",
        "required": true
      },
      "taxonomy": {
        "label": "Taxonomy",
        "question": "Which taxonomy should levels reference?",
        "type": "select",
        "options": [
          "Bloom's Taxonomy",
          "Revised Bloom's",
          "Webb's Depth of Knowledge",
          "SOLO Taxonomy"
        ],
        "required": true
      },
      "objectiveCount": {
        "label": "Number of objectives",
        "question": "About how many objectives do you want?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Standards Alignment Audit",
    "displayDescription": "Audits an existing unit against your standards — fully, partially, or not addressed — with specific fixes for every gap.",
    "id": "curriculum-005",
    "prompt": "You are helping a parent audit their existing unit against the standards it is supposed to meet. The standards: {standards}. The unit being audited: {unitSummary}.\n\nRun the audit in three passes and report each one clearly.\n\nPass one — coverage: go standard by standard and classify each as fully addressed, partially addressed, or not addressed, with the evidence from the unit summary that justifies each classification. Be strict: a standard mentioned in an objective but never taught or assessed counts as not addressed. Present this as a table with the standard code, the classification, and the evidence.\n\nPass two — objective-assessment alignment: for each unit objective, check whether the assessments in the unit actually measure it. Flag mismatches specifically: objectives assessed only by recall items when they demand analysis, skills taught through activities but never formally checked, assessments that test things no objective claims. Name each mismatch and explain why it matters for the learner.\n\nPass three — fixes: for every gap and mismatch found, prescribe a specific fix — not \"add more practice\" but \"add a 20-minute lesson in week 2 where the learner compares two primary sources and writes a one-paragraph claim, assessed with this 3-point check.\" Prioritize the fixes by impact: which three changes would do the most for the learner's actual mastery, and which are nice-to-have polish.\n\nClose with an honest verdict: is this unit fundamentally sound and needing tweaks, or does it need structural rework? Give the parent a one-page action checklist ordered by priority so they know exactly what to change first. The tone should be constructive and specific — the parent should feel equipped, not judged.\n\nTurn the audit into a living record the family keeps: file the coverage table with the unit plan, date it, and revisit it after teaching the unit once — real classroom evidence often reveals misalignments the paper audit missed. Note which fixes were applied and which were deferred, with the reason, so next year's version of this unit starts from knowledge rather than memory. If the unit will be submitted for any review or portfolio, attach the before-and-after: the original gap list alongside the fixes, which demonstrates reflective teaching practice far better than a perfect first draft ever could.",
    "description": "Audits a unit plan against a set of standards, reporting which standards are fully, partially, or not addressed, which objectives misalign with their assessments, and the specific fixes that close each gap.",
    "category": "curriculum",
    "variables": {
      "standards": {
        "label": "Standards",
        "question": "Which standards should be audited against?",
        "type": "text",
        "placeholder": "e.g., Common Core ELA 6-8",
        "required": true
      },
      "unitSummary": {
        "label": "Unit summary",
        "question": "Summarize the unit: objectives, lessons, assessments.",
        "type": "textarea",
        "placeholder": "e.g., 3-week unit on argumentative writing with...",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Formative Assessment Ideas",
    "displayDescription": "Generates quick, no-grading formative checks that surface misconceptions and tell you the next teaching move.",
    "id": "curriculum-006",
    "prompt": "You are helping a parent design {count} formative assessment ideas for {topic} in a {gradeLevel} {subject} setting. Each idea must take under {minutes} minutes, require no grading, and work one-on-one or in a small family setting — not just in a classroom of thirty.\n\nFor each idea, provide four things. First, the check itself: exactly what the parent asks or has the learner do, written as a script or a concrete task. Second, the misconception it hunts: the specific wrong idea or fragile understanding this check is designed to expose for {topic} at the {gradeLevel} level — name the misconception plainly, because a check without a target is just a quiz. Third, a response decoder: what a strong response looks like, what a shaky-but-close response looks like, and what each of two or three typical wrong responses reveals about the learner's thinking. Fourth, the next move: the precise instructional action for each response type — what to reteach, what question to ask next, or what to assign — so the parent never stares at a wrong answer wondering what to do.\n\nVary the formats across the {count} ideas: an oral explanation, a quick sketch or model, a sorting or ranking task, a predict-then-observe moment, an error-analysis (\"find the mistake in this worked example\"). Sequence them so the parent can see which checks fit before teaching, during teaching, and after teaching.\n\nEnd with a 5-minute nightly routine: how the parent logs what these checks revealed and uses it to plan tomorrow's session. A high-quality result makes the parent feel like they have X-ray vision into the child's understanding, not just a pile of worksheets.\n\nBuild a misconception bank as these checks get used: each time a check exposes a wrong idea, log it in one line — the topic, the misconception, the check that caught it. Within a month the parent owns a personalized diagnostic library for {topic} that no published resource could match, because it is built from their own learner's thinking. Revisit the bank before planning each new unit: the misconceptions listed there are the first things to preempt in the next topic, and the checks that caught them can often be adapted with minimal changes.",
    "description": "Generates quick formative assessment ideas that take minutes, require no grading, reveal specific student misconceptions, and pair every check with what the responses mean and the exact next instructional move.",
    "category": "curriculum",
    "variables": {
      "count": {
        "label": "Count",
        "question": "How many formative ideas?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Photosynthesis",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 7th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Science",
        "required": true
      },
      "minutes": {
        "label": "Max minutes",
        "question": "Maximum minutes per check?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Summative Assessment Designer",
    "displayDescription": "Designs an end-of-unit summative assessment with a blueprint table, mixed item types, answer key, and 100-point scoring plan.",
    "id": "curriculum-007",
    "prompt": "You are helping a parent build a summative assessment for {topic} in {gradeLevel} {subject} — the final proof of what the learner actually learned.\n\nStart with a blueprint table before writing a single question. Map every item to the specific learning objective it measures and its level from {taxonomy}. Check the blueprint for balance: are the most important objectives weighted most heavily? Does the thinking-level mix match what was actually taught (never test analysis if the unit only practiced recall)? Show the parent this table first and explain any trade-offs you made, so they understand what the test can and cannot claim about learning.\n\nThen write the assessment using a mix of {itemTypes}. For each item include: clear, unambiguous directions written at {gradeLevel} reading level, the point value, and any stimulus material (passages, diagrams, data sets) the learner needs. Build in at least one item targeting the most common misconception for this topic — the wrong answers should be plausible enough that only real understanding avoids them. Avoid trick questions, ambiguous wording, and vocabulary harder than the content being tested.\n\nProvide a complete answer key with acceptable variations for open-ended items (show two or three acceptable answers, not one), plus a scoring guide: partial-credit rules for multi-step items, what earns full vs. partial credit, and a suggested breakdown totaling 100 points with a simple grade or mastery-band conversion the parent can explain to the learner.\n\nClose with an administration guide: recommended time, allowed materials, whether it should be open- or closed-book and why, and three reflection questions the parent and learner discuss afterward to turn the test into a learning event rather than just a verdict.\n\nAfter the assessment is given, close the loop with a 20-minute item review: for each item, note what percentage of the possible points the learner earned and sort the items into solid, shaky, and missed. A missed item on a well-taught objective signals a teaching gap to fix; a missed item on a poorly weighted objective signals a blueprint problem to fix next time. Keep this one-page analysis with the test — it is the single most useful document for planning the reteach, and it turns every summative assessment into professional development for the parent as a teacher.",
    "description": "Designs a complete summative assessment with an objective-by-objective blueprint table, a mix of item types at varied thinking levels, clear student directions, an answer key with acceptable variations, and a scoring breakdown totaling 100 points.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., The Civil War",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 8th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., History",
        "required": true
      },
      "taxonomy": {
        "label": "Taxonomy",
        "question": "Which taxonomy for the blueprint?",
        "type": "select",
        "options": [
          "Bloom's Taxonomy",
          "Revised Bloom's",
          "Webb's Depth of Knowledge"
        ],
        "required": true
      },
      "itemTypes": {
        "label": "Item types",
        "question": "Which item types should it include?",
        "type": "text",
        "placeholder": "e.g., multiple choice, short answer, one essay",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Rubric Generator",
    "displayDescription": "Creates an analytic rubric with clear criteria, student-friendly performance levels, point values, and real-world descriptors.",
    "id": "curriculum-008",
    "prompt": "You are helping a parent create an analytic rubric for this assignment: {assignment}, in {gradeLevel} {subject}.\n\nDefine {criteriaCount} criteria that capture what genuinely matters in this assignment — separate content mastery from presentation, and weight the criteria accordingly so a beautiful but wrong product cannot outscore an ugly but correct one. For each criterion, write {levels} performance levels in student-friendly language the {gradeLevel} learner can read and understand themselves. Each level needs: a clear label, a point value, a descriptor of what the work shows at that level, and a one-line \"looks like\" snapshot — a concrete picture of actual student work at that level, so the difference between levels is visible, not abstract.\n\nBuild the rubric so it teaches, not just judges: the top level should describe excellence the learner can aspire to, and the level descriptions should double as revision guidance (a learner reading the level above theirs should know exactly what to improve). Include the total possible score and a simple conversion to whatever grading or mastery language the family uses.\n\nAdd a parent guide section: how to introduce the rubric before the learner starts (never after), how to use it for a mid-project check-in, and how to deliver rubric-based feedback that the learner can act on — one strength to name, one specific gap, one concrete next step. Warn against the two classic rubric failures: criteria so vague they invite arguing (\"good effort\"), and levels that describe the absence of errors rather than the presence of quality. Deliver the rubric as a clean table plus the parent guide.\n\nCalibrate the rubric before first use: apply it to two sample pieces of work — one strong, one middling, real or imagined — and check that the scores feel right and that two readings of the same piece land in the same levels. If a criterion produces wildly different scores depending on mood, its descriptors need sharpening. Share the calibrated rubric with the learner before work begins and keep a copy visible during the project; a rubric consulted mid-work improves the work, while a rubric revealed at grading time only explains the grade.",
    "description": "Creates an analytic rubric for any assignment with defined criteria, leveled performance descriptors in student-friendly language, point values per level, a total score, and a one-line picture of what each level looks like in practice.",
    "category": "curriculum",
    "variables": {
      "assignment": {
        "label": "Assignment",
        "question": "What is being assessed?",
        "type": "text",
        "placeholder": "e.g., Persuasive essay",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 6th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., English",
        "required": true
      },
      "criteriaCount": {
        "label": "Criteria count",
        "question": "How many criteria?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "levels": {
        "label": "Performance levels",
        "question": "How many performance levels?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Project Brief Designer",
    "displayDescription": "Writes a motivating student-facing project brief with driving question, phased milestones, deliverables, and grading weight.",
    "id": "curriculum-009",
    "prompt": "You are helping a parent write a project brief for {projectTopic} in {subject} that their {gradeLevel} learner will read directly. The project runs {weeks} weeks. The brief must be complete enough that the learner knows exactly what to do, motivating enough that they want to do it, and structured enough that the parent can track progress without hovering.\n\nOpen with a driving question — a genuine, open-ended question about {projectTopic} that has no single right answer and connects to the real world. Then a \"why this matters\" section: two or three concrete ways this project connects to real life, real careers, or real problems, written to a {gradeLevel} reader, not to an educator.\n\nBreak the {weeks} weeks into phases with clear milestones. For each phase specify: the goal, the concrete deliverable (what the learner hands in or shows), the checkpoint with the parent (what they review together and what \"on track\" looks like), and the deadline. Build in one structured peer- or family-feedback moment before the final product, because the best revision happens mid-project, not after grading.\n\nDefine the final product precisely — format, length or scope, required elements — and state the grading weight and the 3-4 criteria it will be judged on, in learner-friendly language. Include a \"getting unstuck\" section: the three most common places learners stall on this kind of project and exactly what to do at each one.\n\nKeep the tone encouraging and direct, the instructions unambiguous, and the whole brief printable on two pages. End with a one-paragraph parent companion note the learner does not see: what to watch for, when to intervene, and when to let productive struggle happen.\n\nPlan the brief's launch day as its own 20-minute event: the parent presents the driving question before handing over the brief, lets the learner react and ask questions, then walks through the phases together — with the learner paraphrasing each milestone in their own words to confirm understanding. End the launch by having the learner name their first concrete action and when they will do it, because a project that starts moving on day one keeps moving. File the signed-off brief where both parent and learner can see it; it becomes the project's constitution when motivation dips in week two.",
    "description": "Writes a student-facing project brief with a driving question, real-world relevance, phased milestones, per-phase deliverables, teacher checkpoints, and grading weight — in a tone that motivates and instructions that leave nothing ambiguous.",
    "category": "curriculum",
    "variables": {
      "projectTopic": {
        "label": "Project topic",
        "question": "What is the project about?",
        "type": "text",
        "placeholder": "e.g., Design a water filtration prototype",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Science",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "How many weeks will the project run?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level is this project for?",
        "type": "text",
        "placeholder": "e.g., 8th grade",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Interdisciplinary Unit",
    "displayDescription": "Designs an interdisciplinary unit weaving two subjects around one theme — shared questions, integrated activities, and one culminating product.",
    "id": "curriculum-010",
    "prompt": "You are helping a parent design an interdisciplinary unit for a {gradeLevel} learner that genuinely weaves together {subjectA} and {subjectB} around the theme of {theme}, running about {weeks} weeks. The bar is high: this must be true integration, not two separate units stapled together with a shared title.\n\nStart by articulating the theme as a lens: write 3-4 shared essential questions about {theme} that cannot be fully answered from either subject alone — questions where the {subjectA} perspective and the {subjectB} perspective each supply something the other lacks. Then map each subject's contribution: the specific {subjectA} concepts and skills the unit teaches, the specific {subjectB} concepts and skills, and — critically — the connection points where one subject's content illuminates the other's.\n\nDesign integrated learning activities where both subjects are in play at once: a {subjectA} investigation whose results become the raw material for a {subjectB} task, a debate or analysis that requires evidence from both disciplines, a field experience or interview that the learner processes through both lenses. Sequence them so understanding compounds across the {weeks} weeks rather than alternating subjects day by day.\n\nThe unit culminates in one product that draws on both subjects authentically — not a {subjectA} project plus a {subjectB} paragraph, but a single piece of work that would be weaker without both disciplines. Define the product, its required elements from each subject, and a simple scoring guide that evaluates both the disciplinary content and the quality of the integration itself.\n\nAdd per-subject alignment notes (which standards each part satisfies), a materials list, and a parent guide on facilitating interdisciplinary thinking: the questions to ask when the learner treats the subjects as separate (\"How does what you found in {subjectA} change your {subjectB} conclusion?\"). End with one honest note on the biggest risk of interdisciplinary units — superficial connections — and how this design avoids it.",
    "description": "Designs an interdisciplinary unit connecting two subjects around a shared theme, with essential questions, each subject's contribution, integrated activities, a culminating product drawing on both, and per-subject standards alignment notes.",
    "category": "curriculum",
    "variables": {
      "subjectA": {
        "label": "First subject",
        "question": "What is the first subject?",
        "type": "text",
        "placeholder": "e.g., Science",
        "required": true
      },
      "subjectB": {
        "label": "Second subject",
        "question": "What is the second subject?",
        "type": "text",
        "placeholder": "e.g., Art",
        "required": true
      },
      "theme": {
        "label": "Theme",
        "question": "What unifying theme?",
        "type": "text",
        "placeholder": "e.g., Patterns in nature",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 4th Grade",
        "required": true
      },
      "weeks": {
        "label": "Unit length",
        "question": "How many weeks should this unit run?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Differentiated Lesson Plan",
    "displayDescription": "Rebuilds one lesson with three tiered paths — struggling, on-level, advanced — plus grouping guidance and a regroup checkpoint.",
    "id": "curriculum-011",
    "prompt": "You are helping a parent differentiate this lesson for their {gradeLevel} learner across three readiness levels. The lesson: {lessonSummary}. The topic: {topic}.\n\nFirst, identify the lesson's non-negotiable core: the one or two understandings every learner must walk away with, regardless of level. State it plainly — this is the anchor that keeps the three paths from drifting into three different lessons.\n\nThen build three parallel paths — struggling, on-level, advanced — and for each one adapt all three dimensions. Content: how the concept is introduced and represented (concrete manipulatives or visuals vs. abstract symbols, amount of new vocabulary per session, pre-teaching of prerequisites). Process: what the learner actually does — the struggling path gets more scaffolding, worked examples, and smaller steps; the on-level path follows the standard sequence; the advanced path gets fewer repetitions and moves faster to application, extension, or open-ended problems. Product: what counts as success for each path — adjusted expectations that still demand real thinking, never just \"do fewer problems.\"\n\nFor a parent-led or small-group setting, include flexible grouping guidance: when to work together on the shared core (openings, discussions, closings) and when to split into level-specific work, plus how to group without labeling children (\"we are trying two different approaches today\" beats \"the easy group and the hard group\"). Add one specific checkpoint midway — a quick task or question — that tells the parent whether the learner is on the right path or needs to move up or down, with the exact signal to watch for.\n\nEnd with a one-paragraph note on dignity: how to keep the struggling path feeling like real learning rather than a watered-down consolation, and how to keep the advanced path challenging rather than just more work. The parent should finish with three clear, teachable paths and the confidence to switch between them mid-lesson.",
    "description": "Differentiates a lesson summary into three readiness-level paths, adapting content delivery, process activities, and product expectations for each level, with flexible grouping suggestions and a checkpoint for regrouping.",
    "category": "curriculum",
    "variables": {
      "lessonSummary": {
        "label": "Lesson summary",
        "question": "Summarize the original lesson.",
        "type": "textarea",
        "placeholder": "e.g., 50-min intro to equivalent fractions...",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Equivalent fractions",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level is the learner at?",
        "type": "text",
        "placeholder": "e.g., 4th grade",
        "required": true
      }
    }
  },
  {
    "displayTitle": "IEP Accommodation Ideas",
    "displayDescription": "Suggests concrete, realistic classroom accommodations matched to a student's support needs — including quick wins for tomorrow.",
    "id": "curriculum-012",
    "prompt": "You are helping a parent or teacher support a {gradeLevel} learner with the following support needs: {supportNeeds}. The context is {activityType} — a general-education setting, so every suggestion must be realistic for one adult managing a full group, not a one-on-one therapy session.\n\nOrganize the accommodations into three arenas. Instruction: how content is presented and explained — pre-teaching routines, visual supports, chunking, modeling, language adjustments, and assistive approaches that fit {activityType}. Be concrete: name the actual strategy and describe what it looks like in practice during this specific activity, not generic advice like \"provide support.\" Assessment: how the learner shows what they know without the support need masking their actual understanding — alternate response formats, extended or chunked time, read-aloud options, reduced copying load, and how to keep the academic bar at grade level while changing the access route. Environment: seating, sensory considerations, movement opportunities, peer structures, and materials organization that reduce friction during {activityType}.\n\nSeparate the list into \"start tomorrow\" quick wins — five things requiring zero purchases and under ten minutes of prep — and \"build over the month\" systems that take more setup but pay off long-term. For each accommodation, note what success looks like so the adult knows whether it is working, and what to try if it is not.\n\nAdd two guardrails. First, dignity: accommodations should be as invisible as possible and framed as tools, not crutches — include language the adult can use with the learner (\"this is how your brain works best\"). Second, the line between accommodation and modification: be explicit about which suggestions change how the learner accesses the work versus which would change what the learner is expected to learn, so expectations stay honest. End with a simple one-page tracking template: accommodation, date started, observed effect, keep-or-adjust decision.\n\nReview the accommodations monthly with a simple keep-or-fade decision: which supports the learner still needs, which have become habits the learner owns independently, and which never worked and should be replaced. The goal of every accommodation is its own eventual obsolescence — supports should scaffold the learner toward independence, not become permanent fixtures. Celebrate each faded support explicitly with the learner; nothing builds self-efficacy like noticing you no longer need the help you once did.",
    "description": "Suggests practical accommodations for instruction, assessment, and the learning environment tailored to a student's support needs, with realistic strategies for a general-education setting and quick wins to start immediately.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 5th Grade",
        "required": true
      },
      "supportNeeds": {
        "label": "Support needs",
        "question": "What are the student's support needs?",
        "type": "textarea",
        "placeholder": "e.g., ADHD: difficulty sustaining attention...",
        "required": true
      },
      "activityType": {
        "label": "Activity type",
        "question": "What kind of classroom activity?",
        "type": "text",
        "placeholder": "e.g., whole-class novel study",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Enrichment Menu Builder",
    "displayDescription": "Builds a self-directed enrichment menu of extension activities that deepen the topic — with completion checks, not busywork.",
    "id": "curriculum-013",
    "prompt": "You are helping a parent build an enrichment menu for {topic} in {gradeLevel} {subject} — for the learner who finishes early, masters the basics quickly, or simply wants more. Create {count} self-directed extension activities across these categories: {categories}. Where natural, weave in the learner's interest in {learnerInterest} to make the menu feel personal rather than generic.\n\nSet a ruthless quality bar: every activity must deepen understanding of {topic}, not just add volume. A good enrichment task asks the learner to apply the concept in a new context, analyze it, create something with it, or connect it to the real world. A bad one is more of the same worksheet. For each activity, include a one-line \"why this stretches thinking\" note so the parent can defend the menu as real learning.\n\nEach activity must be completable in under {minutes} minutes with minimal parent help. That means: crystal-clear student-facing directions written for independent work, a complete materials list using things the family already has or free digital tools, and a defined endpoint so the learner knows when they are done. Add a simple completion check per item — a question to answer, a product to show, a reflection to write — that proves engagement without requiring the parent to grade anything.\n\nVary the activity types deliberately: some analytical, some creative, some hands-on, some research-based, so different strengths get their moment. Include at least one activity that produces something the learner can share or teach back — teaching is the deepest form of enrichment.\n\nDeliver the menu in a format the learner can choose from directly (a grid or list they can point at), plus a short parent guide: how to introduce the menu, how often to refresh it, and how to tell the difference between a learner who needs enrichment and one who is rushing through core work to get to the fun stuff.",
    "description": "Builds an enrichment menu of self-directed extension activities that genuinely deepen the topic, each completable with minimal help inside a time limit, with a simple completion check per item.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., The solar system",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 3rd Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Science",
        "required": true
      },
      "count": {
        "label": "Activity count",
        "question": "How many enrichment activities?",
        "type": "number",
        "placeholder": "e.g., 9",
        "required": true
      },
      "categories": {
        "label": "Categories",
        "question": "Which activity categories?",
        "type": "text",
        "placeholder": "e.g., create, research, teach others",
        "required": true
      },
      "minutes": {
        "label": "Max minutes",
        "question": "Max minutes per activity?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      },
      "learnerInterest": {
        "label": "Learner interests",
        "question": "What is your learner interested in? (used to theme activities)",
        "type": "text",
        "placeholder": "e.g., dinosaurs, basketball, coding",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Remediation Plan Maker",
    "displayDescription": "Turns assessment results into a targeted small-group remediation plan with sequenced sessions and clear exit criteria.",
    "id": "curriculum-014",
    "prompt": "You are helping a parent build a remediation plan from real assessment evidence. The results: {assessmentData}. Design {sessions} small-group (or one-on-one) sessions of {minutes} minutes each.\n\nStart with diagnosis, not activities. Analyze the data to identify the actual gaps: distinguish between prerequisite gaps (missing foundations from earlier learning), fragile understanding (the learner was taught it but it never solidified), and performance errors (careless mistakes masking real knowledge). Rank the gaps by leverage — which one or two, if fixed, would unlock the most downstream learning — and say explicitly what NOT to remediate (things that look weak in the data but are actually symptoms of a deeper gap).\n\nSequence the {sessions} sessions to attack the highest-leverage gap first. For each session provide: the single focused objective, a warm-up that reactivates the prerequisite, an explicit teaching segment that approaches the concept differently from the original instruction (if the first explanation worked, remediation would be unnecessary — so offer a new representation: visual, concrete, story-based, or pattern-based), guided practice with the parent actively coaching, and a 3-minute exit probe that measures exactly that session's objective.\n\nDefine exit criteria in observable terms: what the learner must demonstrate, and how consistently, for the parent to declare the gap closed and return to grade-level work. Include a \"what if it does not work\" branch: after how many sessions to try a different approach, and what the next approach should be.\n\nConstrain materials to what the family already has — household objects, free printables, library books — and note where each session's activity comes from. End with a simple tracking sheet: session, objective, probe result, next step. The parent should finish knowing precisely what is broken, the order to fix it in, and how they will know it is fixed.\n\nProtect the learner's confidence through the remediation arc: open session one by naming the plan honestly and hopefully ('we found exactly what needs work, and we have a plan to fix it'), celebrate each session's exit-probe wins visibly, and mark the graduation moment when the exit criteria are met — a small ritual that closes the chapter. Remediation that feels like punishment creates avoidance; remediation that feels like a training montage creates momentum. The parent's framing is half the intervention.",
    "description": "Creates a remediation plan from assessment data: identifies prerequisite gaps, sequences targeted small-group sessions with specific activities and checks, defines exit criteria, and favors materials the family already has.",
    "category": "curriculum",
    "variables": {
      "assessmentData": {
        "label": "Assessment data",
        "question": "Paste or summarize the assessment results.",
        "type": "textarea",
        "placeholder": "e.g., 12 of 24 students missed items on...",
        "required": true
      },
      "sessions": {
        "label": "Sessions",
        "question": "How many reteach sessions?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "minutes": {
        "label": "Minutes per session",
        "question": "Minutes per session?",
        "type": "number",
        "placeholder": "e.g., 25",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Lesson Hooks Generator",
    "displayDescription": "Generates attention-grabbing lesson hooks and warm-ups — 3-5 minute curiosity sparkers with little or no setup.",
    "id": "curriculum-015",
    "prompt": "You are helping a parent open lessons on {topic} for a {gradeLevel} {subject} learner with a bang. Generate {count} hooks and warm-up activities, each taking 3-5 minutes and needing little or no setup — things a parent can launch at the kitchen table without a trip to the store.\n\nDefine what makes a hook work before listing them: a good hook creates a gap between what the learner knows and what they want to know — a puzzle, a surprise, a prediction they care about being right on. A bad hook is decoration (\"fun fact!\") that the lesson never returns to. For each of the {count} ideas, provide: the exact opener (the words to say or the thing to show), the curiosity gap it opens, and the bridge line that connects the hook into the lesson's first teaching point — because a hook the lesson abandons teaches the learner that openings do not matter.\n\nVary the formats deliberately across the set: a provocative question with no single right answer, an image or object to observe and wonder about, a 60-second demonstration with a surprising result, a puzzle or paradox, a 2-minute story that ends on a cliffhanger the lesson resolves, and a prediction task where the learner commits to an answer before learning the concept. Mix formats that activate prior knowledge (connecting {topic} to what the learner already knows) with formats that spark fresh curiosity (making the learner need the new idea).\n\nNote which hooks double as informal prior-knowledge checks — what the learner's response reveals about readiness — and flag any hook that needs a 30-second safety or sensitivity note. End with a one-paragraph guide on hook discipline: use the same hook family sparingly, never let the hook run longer than the teaching it introduces, and always close the curiosity gap by the lesson's end or the learner stops trusting your openings.",
    "description": "Generates attention-grabbing lesson hooks and warm-up activities that spark curiosity or activate prior knowledge in 3-5 minutes with minimal setup, across varied formats from provocative questions to quick demos.",
    "category": "curriculum",
    "variables": {
      "count": {
        "label": "Count",
        "question": "How many hooks?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Ratios",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 6th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Math",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Exit Ticket Designer",
    "displayDescription": "Designs end-of-class exit tickets — under 5 minutes, mixing content checks with reflection, plus a 3-tier sorting guide.",
    "id": "curriculum-016",
    "prompt": "You are helping a parent end lessons on {topic} at the {gradeLevel} level with a sharp exit ticket routine. Design {count} exit ticket templates, each completable in under 5 minutes.\n\nEvery ticket must do two jobs: check today's content and build the learner's awareness of their own understanding. Structure each ticket with 2-3 quick content checks targeting the day's core ideas — including at least one item aimed at the classic misconception for this part of {topic} — plus exactly one reflective prompt (\"What is still fuzzy for you?\" or \"What would you ask an expert about today?\"). The reflection prompt is not filler: it trains metacognition and hands the parent tomorrow's starting point.\n\nFor each ticket, provide a 3-tier sorting guide the parent can apply in about two minutes: what a \"got it\" response looks like (the key phrases or correct reasoning), what \"shaky\" looks like (partially right, right answer with shaky reasoning, or the known misconception surfacing), and what \"lost\" looks like. Then pair each tier with tomorrow's move: got it means proceed, shaky means a 5-minute targeted warm-up (give the exact warm-up), lost means reteach the concept a different way before moving on (give the alternate approach).\n\nVary the response formats across the {count} tickets so the routine stays fresh: one written, one sketch-or-diagram, one explain-it-aloud (with what the parent listens for), one error-find. Keep the language at {gradeLevel} reading level and the physical format simple — half a sheet of paper or a notebook page, never a production.\n\nEnd with the weekly pattern: how the parent files the sorted tickets and spots trends across the week (the same misconception three days running means the teaching approach needs changing, not the child). A great exit ticket takes five minutes to complete and saves thirty minutes of guessing tomorrow.",
    "description": "Designs exit ticket templates that take under five minutes, blend quick content checks with one reflective prompt, and include a simple got-it / shaky / lost sorting guide so tomorrow's warm-up practically plans itself.",
    "category": "curriculum",
    "variables": {
      "count": {
        "label": "Count",
        "question": "How many exit ticket designs?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Thesis statements",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 9th Grade",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Socratic Discussion Questions",
    "displayDescription": "Crafts Socratic seminar questions — opening, analytical, and reflective — with facilitation notes for when discussion stalls.",
    "id": "curriculum-017",
    "prompt": "You are helping a parent lead a Socratic seminar on {textOrTopic} with a {gradeLevel} {subject} learner (one-on-one or small group). Write {count} questions sequenced to build a real discussion, not a quiz in disguise.\n\nStructure the set in three movements. Opening questions (the first third): accessible, personal, confidence-building — questions with no wrong answer that get the learner talking and thinking, connecting {textOrTopic} to their own experience. Core analytical questions (the middle): the heart of the seminar — questions with no single right answer that demand evidence, comparison, and reasoning. Each core question should target a genuine tension, ambiguity, or decision point in {textOrTopic}, and include a follow-up probe in parentheses that pushes past the first answer (\"What in the text makes you say that?\" \"Who would disagree with you, and what would they point to?\"). Closing questions (the final third): reflective and transfer-oriented — what this means, what changed in the learner's thinking, how it connects to the world beyond the text.\n\nAdd facilitation notes written for a parent, not a trained seminar leader: how to open (the exact first two minutes), the art of wait time (count to seven silently), how to deepen a thin answer without leading it, what to do with silence (three specific recovery moves when discussion stalls), and how to close so the learner leaves with one crystallized insight rather than a blur.\n\nInclude a short \"Socratic norms\" card the parent reads aloud at the start — listen fully, build on ideas, disagree with ideas not people, everyone contributes — and a simple self-assessment the learner completes afterward: one idea they are surer of, one question they are still carrying. The goal is a conversation the learner remembers, not coverage of material.\n\nKeep a seminar journal across discussions: after each seminar the learner records the question that challenged them most, the idea they changed their mind about, and one question they are still carrying about {textOrTopic}. Over a term, the journal becomes a map of the learner's intellectual growth — and rereading early entries is one of the most powerful metacognitive experiences a {gradeLevel} learner can have. The parent adds one line per seminar too: what worked in the facilitation, to sharpen for next time.",
    "description": "Writes Socratic seminar questions with confidence-building openers, core analytical questions with no single right answer, closing reflections, and facilitation notes including follow-ups and stall recovery.",
    "category": "curriculum",
    "variables": {
      "count": {
        "label": "Count",
        "question": "How many questions?",
        "type": "number",
        "placeholder": "e.g., 12",
        "required": true
      },
      "textOrTopic": {
        "label": "Text or topic",
        "question": "What text or topic is the seminar on?",
        "type": "text",
        "placeholder": "e.g., 'To Kill a Mockingbird' Ch. 1-5",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 10th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., English",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Worksheet Generator",
    "displayDescription": "Builds a scaffolded practice worksheet — simple to challenging, mixed formats, worked example, and a full answer key.",
    "id": "curriculum-018",
    "prompt": "You are helping a parent create a practice worksheet on {topic} for {gradeLevel} {subject} with {problems} problems. This is deliberate practice, not busywork — every problem should earn its place.\n\nStructure the worksheet in sections with clear directions per section, ordered by cognitive demand. Section one: fluency builders that lock in the core procedure or facts (the learner should feel successful here). Section two: application problems that place {topic} in real contexts a {gradeLevel} learner recognizes — money, time, games, household situations — so the skill transfers beyond the page. Section three: a smaller set of stretch problems requiring multi-step reasoning or connecting {topic} to earlier learning. Mix {formats} across sections so the learner practices the concept through different response modes, not just one.\n\nOpen the worksheet with a worked example at the top: a fully solved problem with each step labeled and a one-line note on why that step happens — the learner's reference model for the whole set. Keep directions short and unambiguous; test every direction by imagining a literal-minded child following it exactly.\n\nFinish with a complete answer key showing key steps, not just final answers — the parent needs to see the reasoning path to diagnose where a wrong answer went off track. Add a parent scoring guide: which problems are the \"must-gets\" (core mastery), which are \"should-gets\" (solid understanding), and which are \"bonus\" (stretch), plus what each pattern of misses suggests about what to reteach.\n\nClose with a usage note: how to assign the worksheet (all at once vs. in chunks), when to stop and reteach instead of pushing through, and the rule that a worksheet is a diagnostic tool first and a grade second.\n\nRotate the worksheet's role across the week to keep practice fresh: use one as guided practice with the parent coaching, one as independent work, and one as a 'teach-back' where the learner explains two solved problems aloud as if teaching them. The same problems teach different skills depending on the role — solving builds fluency, explaining builds understanding. File completed worksheets by topic rather than by date; when {topic} resurfaces months later, the filed set becomes the instant review packet.",
    "description": "Generates a practice worksheet with problems ordered from simple to challenging, mixed question formats, clear per-section directions, a worked example at the top, and a complete answer key showing key steps.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Multiplying decimals",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 5th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Math",
        "required": true
      },
      "problems": {
        "label": "Problem count",
        "question": "How many problems?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      },
      "formats": {
        "label": "Formats",
        "question": "Which question formats?",
        "type": "text",
        "placeholder": "e.g., computation, word problems, error analysis",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Quiz Generator",
    "displayDescription": "Writes a focused, time-boxed quiz with varied formats, a misconception-targeting question, and an explained answer key.",
    "id": "curriculum-019",
    "prompt": "You are helping a parent write a {questions}-question quiz on {topic} for {gradeLevel} {subject} that fits comfortably inside a {minutes}-minute period — including time for directions and a final check, not just answering.\n\nDesign with a blueprint mindset: before writing, allocate the {questions} questions across the topic's key ideas so the most important ideas get the most weight, and note which {formats} you will use for each. Mix the formats deliberately — a quiz of all one type tests test-taking as much as content. Keep every item at {gradeLevel} reading level: the quiz measures {subject} knowledge, not reading stamina, so strip unnecessary verbiage and define any non-content vocabulary.\n\nInclude one question engineered around the most common misconception for this topic: the distractors or the prompt should be plausible enough that a learner with the misconception will confidently choose wrong, while true understanding leads right. Note in the answer key which misconception this item hunts and what a wrong answer reveals.\n\nProvide a complete answer key with brief explanations for every item — one to two sentences on why the answer is correct, so the parent can explain rather than just mark. Add a scoring guide: points per question, what score range signals mastery vs. shaky vs. needs reteach, and the specific reteach move for each possible weak spot the quiz might expose.\n\nAdd an administration note: closed or open notes and why, what the learner may use, and a 3-minute post-quiz routine where parent and learner review the two most-missed items together — because the quiz's real value is the conversation after it, not the score on it.\n\nUse the quiz as unit intelligence, not just a score: log each item's result in a simple tracker across the unit's quizzes, and watch for patterns — the sub-topic missed twice is a reteach candidate, the format consistently missed signals a test-skill gap rather than a content gap. Share the pattern (not just the grade) with the learner: 'you have fractions solid and word problems shaky, so this week we attack word problems' turns assessment into a coaching conversation. Retire quiz items the learner has mastered and write fresh ones for the weak spots, so each quiz measures the frontier of learning, not old victories.",
    "description": "Writes a focused quiz that fits the class period, mixes question formats, includes one item targeting the most common misconception, and provides an answer key with brief explanations at grade reading level.",
    "category": "curriculum",
    "variables": {
      "questions": {
        "label": "Question count",
        "question": "How many questions?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., The water cycle",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 4th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Science",
        "required": true
      },
      "minutes": {
        "label": "Minutes",
        "question": "How many minutes for the quiz?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": true
      },
      "formats": {
        "label": "Formats",
        "question": "Which question formats?",
        "type": "text",
        "placeholder": "e.g., multiple choice and short answer",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Exam Builder",
    "displayDescription": "Constructs a full-length exam with timed sections, varied formats, partial-credit rules, and a complete scoring guide.",
    "id": "curriculum-020",
    "prompt": "You are helping a parent build a full-length exam on {topic} for {gradeLevel} {subject}, designed for a {minutes}-minute period. This is a serious assessment instrument, so build it like one.\n\nStructure the exam into clearly labeled sections, each with a suggested time allocation that sums to about 80% of the period (leave buffer for reading directions and review). Include {questionCount} total questions across {formats}, distributed so the exam samples the whole topic proportionally — the parent should be able to see which questions cover which sub-topic at a glance. Order the sections to build confidence: start accessible, peak in the middle, end with one genuine stretch item that separates deep understanding from surface competence.\n\nWrite every item with exam discipline: one clear task per item, unambiguous wording, no trick questions, no \"gotchas\" that punish careful readers, and reading load appropriate to {gradeLevel}. For multi-step items, break the steps visibly so partial understanding can earn partial credit.\n\nProvide a complete answer key with full solutions, plus a scoring guide with explicit partial-credit rules — what earns 3 of 5 points vs. 1 of 5, how to handle a correct answer with missing work, how to handle the right method with an arithmetic slip. Include a total-points-to-mastery-band conversion the parent can explain in one sentence.\n\nClose with an exam-day protocol: allowed materials, seating and distraction setup for a home environment, what to do if the learner freezes (a scripted 2-minute reset), and a post-exam review session plan where the learner reworks missed items for partial credit back — because the exam should be a learning event, not just a verdict. Add one academic-integrity note scaled for home use: how to keep the exam honest without turning the house into a surveillance state.\n\nTreat the exam as a course-correction instrument for the parent, not just the learner: after scoring, sort the missed points by sub-topic and ask which misses reflect teaching gaps versus learning gaps versus exam-design flaws — each gets a different fix. Keep the exam and its analysis in the portfolio; months later it becomes the most efficient possible review tool, because nothing revisits {topic} faster than reworking the exact items that once proved difficult.",
    "description": "Builds a full-length exam with time-boxed sections, varied question formats, a complete answer key, and a scoring guide with partial-credit rules — designed for the actual length of your class period.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Algebra I: linear functions",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 8th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Math",
        "required": true
      },
      "minutes": {
        "label": "Minutes",
        "question": "Exam length in minutes?",
        "type": "number",
        "placeholder": "e.g., 60",
        "required": true
      },
      "questionCount": {
        "label": "Question count",
        "question": "Total number of questions?",
        "type": "number",
        "placeholder": "e.g., 25",
        "required": true
      },
      "formats": {
        "label": "Formats",
        "question": "Which question formats?",
        "type": "text",
        "placeholder": "e.g., MC, multi-step, one free-response",
        "required": true
      }
    }
  },
  {
    "displayTitle": "PBL Experience Designer",
    "displayDescription": "Designs a full project-based learning experience — entry event, driving question, inquiry checkpoints, authentic audience, and dual assessment.",
    "id": "curriculum-021",
    "prompt": "You are helping a parent design a project-based learning experience on {topic} for a {gradeLevel} {subject} learner, lasting {weeks} weeks. This is not a project tacked onto a unit — the project IS the unit, and the learning happens through doing real work.\n\nStart with the entry event: a vivid, curiosity-detonating launch (a letter from a fictional client, a puzzling artifact, a field observation, a provocative video) that makes the learner need the project's knowledge. Write the actual entry event script or scenario the parent can run, not just a description of one.\n\nThen craft the driving question: open-ended, genuinely debatable, and anchored in {topic} — a question the learner cannot answer on day one and cannot Google in five minutes. Show how every phase of the project feeds back into answering it.\n\nMap the {weeks} weeks as sustained inquiry, not a march to a deadline. For each week: the investigation focus, the key activities, the milestone deliverable, and a checkpoint where the parent reviews progress with the learner using specific look-fors (not \"how is it going?\"). Build in at least two structured feedback cycles — from the parent, a peer, or a family member — before the final product, with a protocol for giving useful critique.\n\nDefine the final product and its authentic audience: real people beyond the parent who will see, use, or judge the work (community members, an expert interview, a public display, a published piece). Specify what the audience does with the product — audience without purpose is just show-and-tell.\n\nAssess both content mastery and collaboration/process: provide a simple two-part scoring guide, a reflection where the learner evaluates their own inquiry process, and a parent debrief guide. End with a troubleshooting section: the three ways PBL typically derails at home (scope creep, the parent doing the work, stalling in week two) and the specific move that prevents each.",
    "description": "Designs a complete project-based learning experience from entry event to public product, with a driving question, sustained inquiry checkpoints, an authentic audience, and assessment of both content mastery and collaboration.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Urban food deserts",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 9th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Social Studies",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "How many weeks?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Inquiry Lesson Planner",
    "displayDescription": "Plans an inquiry lesson where the learner discovers the concept through a puzzling phenomenon, investigation, and transfer.",
    "id": "curriculum-022",
    "prompt": "You are helping a parent plan an inquiry-based lesson on {concept} for a {gradeLevel} {subject} learner, where the child discovers the idea instead of being told it. Available materials: {materials}. Structure the lesson in five phases and write it so the parent knows exactly what to do — and what NOT to do — in each.\n\nEngage: open with a puzzling phenomenon related to {concept} — something the learner can observe that contradicts their expectations. Describe the phenomenon setup precisely and give the parent the exact opening question. The rule: no explaining yet, no vocabulary yet. Curiosity first.\n\nExplore: the learner investigates hands-on with {materials}. Provide a clear investigation procedure with 3-5 steps, an observation or data-recording sheet the learner fills in, and guardrails that keep the exploration productive without scripting the discovery. Include what the parent should be doing during this phase (observing, asking clarifying questions, resisting the urge to explain).\n\nExplain: now the learner constructs the explanation. Give the parent a sequence of scaffolding questions that guide the learner from their observations to the concept — questions that narrow and focus thinking without handing over the answer. Include the \"if they get stuck\" ladder: three progressively more supportive prompts, and the line the parent must not cross (telling). End this phase with the formal vocabulary and definition, introduced AFTER the understanding exists.\n\nElaborate: a transfer task where the learner applies {concept} to a new situation — a different example, a what-if scenario, a real-world case. Evaluate: a quick check that measures the concept, not recall of the activity.\n\nClose with a parent coaching note on the hardest part of inquiry teaching: tolerating productive struggle, and how to tell the difference between struggle that leads to discovery and frustration that needs intervention.\n\nDocument the discovery: have the learner record their investigation in a simple lab-journal format — the phenomenon observed, the prediction made, the data collected, the explanation constructed, and the moment the idea clicked. This journal becomes the learner's own textbook for {concept}, written in their words from their experience, and reviewing it before the next assessment beats rereading any handout. The parent adds a one-line facilitation note per inquiry lesson: which scaffolding question unlocked the thinking, building a personal repertoire over time.",
    "description": "Plans a full inquiry-based lesson in the engage-explore-explain-elaborate-evaluate arc, with a puzzling phenomenon, hands-on investigation using your materials, teacher questions that scaffold without giving answers, and a transfer task.",
    "category": "curriculum",
    "variables": {
      "concept": {
        "label": "Concept",
        "question": "What concept will students discover?",
        "type": "text",
        "placeholder": "e.g., How shadows change",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 2nd Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Science",
        "required": true
      },
      "materials": {
        "label": "Materials",
        "question": "What investigation materials are available?",
        "type": "text",
        "placeholder": "e.g., flashlights, objects, white paper",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Flipped Classroom Plan",
    "displayDescription": "Splits a topic into at-home content and active class time — pre-work design, minute-by-minute agenda, and accountability.",
    "id": "curriculum-023",
    "prompt": "You are helping a parent run a flipped learning session on {topic} for a {gradeLevel} {subject} learner. The model: content acquisition happens independently before the session, and the {sessionMinutes}-minute live session is reserved entirely for {inClassFocus} — active, supported, higher-order work.\n\nDesign the pre-work first, because the flip lives or dies here. Specify exactly what the learner does before the session: which video, reading, or interactive resource (suggest specific free options or describe what to look for), the guiding task that keeps them active rather than passive (a note-taking frame, 3 questions to answer, examples to find), and — critically — a completion check the parent can verify in two minutes. The pre-work should take no more than 20-30 minutes and must be completable independently by a {gradeLevel} learner. Include a \"pre-work rescue\" plan: a 10-minute condensed version for the learner who arrives unprepared, so one skipped video does not waste the whole session.\n\nThen design the in-class session minute by minute around {inClassFocus}. Open with a 5-minute pre-work debrief that surfaces confusion (not a re-lecture of the video). Spend the core of the session on application: problems, discussions, projects, or labs where the parent coaches in real time. Build in at least one structured peer or family interaction and one individual accountability moment. End with a 5-minute synthesis where the learner articulates what they can now do that they could not do before the session.\n\nAdd an accountability system for chronic pre-work skippers that is instructive rather than punitive, and a parent reflection guide: three questions to ask after the session to judge whether the flip worked (was the live time truly active? did the pre-work actually prepare them?). End with an honest note on when NOT to flip — topics where live first-exposure beats video — so the parent uses this tool selectively.",
    "description": "Creates a flipped classroom plan specifying the at-home pre-work with a completion check, a minute-by-minute in-class agenda built around active application, and accountability for learners who skip the pre-work.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Balancing chemical equations",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 10th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Chemistry",
        "required": true
      },
      "inClassFocus": {
        "label": "In-class focus",
        "question": "What should class time focus on?",
        "type": "text",
        "placeholder": "e.g., problem-solving stations",
        "required": true
      },
      "sessionMinutes": {
        "label": "Class length",
        "question": "How many minutes is the in-person session?",
        "type": "number",
        "placeholder": "e.g., 60",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Experiential Learning Activity",
    "displayDescription": "Turns a topic into a hands-on real-world experience — setup, safety, debrief sequence, and reflection that locks in the concept.",
    "id": "curriculum-024",
    "prompt": "You are helping a parent design an experiential learning activity for {topic} at the {gradeLevel} level, taking place {setting}. The principle: the learner lives the concept first, then names it — experience before explanation.\n\nDescribe the concrete experience in vivid, runnable detail: what the learner does, sees, touches, or makes; the exact setup steps the parent completes beforehand; and the flow of the experience itself from the learner's perspective. Keep it achievable in a single session with ordinary resources — no specialty equipment, no elaborate staging. The experience must genuinely embody {topic}, not merely decorate it: after living it, the learner should have raw material (observations, data, artifacts, memories) that the concept will organize.\n\nProvide a complete materials and setup list with quantities, prep time, and cost (aim for zero or near-zero). Add safety and logistics notes specific to {setting}: the real risks of this activity, how to mitigate each, what to do if something goes wrong, and any permissions or supervision the setting requires. Include an accommodation for a learner who cannot participate physically — a meaningful observer, documenter, or director role that keeps them inside the learning, not watching from outside.\n\nThen design the debrief sequence, which is where experience becomes learning. Provide 5-7 reflection prompts in a deliberate order: first recall (what happened?), then analysis (what patterns did you notice?), then connection (how does this explain {topic}?), then transfer (where else does this show up in real life?). Include the parent's bridging explanation — the 2-minute \"here is the concept your experience just taught you\" moment — and one follow-up task within 48 hours that revisits the concept so the memory consolidates.\n\nEnd with a quality test: three questions the parent can ask to check whether the experience actually taught {topic} or was just fun.\n\nSchedule the experience's echo: one week later, revisit {topic} through a 10-minute conversation starter connected to the activity ('remember when we... — where else have you seen that since?'), and one month later, a single transfer question on a quiz or in discussion. These spaced echoes are what convert a memorable day into durable learning; without them, even the best experience fades into 'that fun thing we did once.' Note in the plan which follow-up worked, so the family's experiential repertoire keeps its strongest hits.",
    "description": "Designs an experiential learning activity with a concrete real-world experience, materials and setup, safety and logistics notes, a debrief sequence with reflection prompts connecting experience to concept, and an accommodation for non-physical participation.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Erosion and weathering",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 5th Grade",
        "required": true
      },
      "setting": {
        "label": "Setting",
        "question": "Where will this activity take place?",
        "type": "select",
        "options": [
          "At home",
          "Outdoors nearby",
          "Community location"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Engagement Strategy Kit",
    "displayDescription": "Diagnoses a disengaged class and prescribes specific, low-prep engagement tactics — including openers and transitions.",
    "id": "curriculum-025",
    "prompt": "You are helping a parent or teacher whose {gradeLevel} {subject} class is {engagementIssue} while learning {topic}. Diagnose first, then prescribe.\n\nStart with a quick diagnosis section: what {engagementIssue} usually signals (boredom from too-easy work, shutdown from too-hard work, irrelevance, fatigue, social dynamics, lack of autonomy) and 3-4 diagnostic questions the adult can ask or observations to make this week to pin down the actual cause — because the wrong treatment for disengagement makes it worse. Note which causes are about {topic} itself versus about the learning environment.\n\nThen prescribe 8 specific engagement strategies for teaching {topic}, each with three parts: what the adult does (exact moves, scripts, or setup), what the learners do (the active behavior, not \"listen\"), and why it works (the mechanism — autonomy, competence, relatedness, curiosity, or movement — in one sentence). Prioritize low-prep tactics a busy parent or teacher can launch tomorrow. Include one strategy engineered for the first 5 minutes of the session (the engagement window that sets the tone) and one for transitions (the moment attention typically collapses).\n\nCalibrate every strategy to the diagnosed issue: a class that is checked out from boredom needs challenge and choice; a class shutting down from difficulty needs safety and small wins — say which of your 8 strategies serve which cause so the adult picks correctly.\n\nAdd a two-week implementation plan: which 2-3 strategies to start with, what to observe, and how to tell if engagement is genuinely improving (observable behaviors, not vibes). End with an honest caveat: engagement tactics cannot fix a curriculum problem — include three signs that {topic} itself needs redesigning rather than better delivery, and what to change if so.\n\nSustain the gains past the first two weeks with a maintenance rhythm: keep the 2-3 winning strategies as permanent fixtures of the {subject} routine, retire the ones that felt forced, and introduce one new strategy per month so the toolkit keeps growing without overwhelming anyone. Once a month, run the 5-minute engagement audit: which moments of the session does the learner lean into, and which do they endure? Follow the lean-in moments — they reveal what actually motivates this learner, which is more valuable than any generic strategy list. And revisit the original diagnosis quarterly, because {engagementIssue} in September often has a different cause than {engagementIssue} in February.",
    "description": "Suggests targeted engagement strategies for a specific disengagement problem, each with teacher moves, student moves, and the why behind it — prioritizing low-prep tactics plus dedicated openers and transition strategies.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 8th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Math",
        "required": true
      },
      "engagementIssue": {
        "label": "Engagement issue",
        "question": "Describe the engagement problem.",
        "type": "textarea",
        "placeholder": "e.g., passive, phones out, only 3 students participate...",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "Current topic?",
        "type": "text",
        "placeholder": "e.g., Linear equations",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Pacing Calendar Builder",
    "displayDescription": "Builds a week-by-week pacing calendar with buffer days, assessment windows, and trim strategies for units that run long.",
    "id": "curriculum-026",
    "prompt": "You are helping a parent build a pacing calendar for {course} running from {startDate} to {endDate}. The units to distribute: {units}.\n\nWork with the real calendar, not an idealized one. Start by mapping the actual available weeks between {startDate} and {endDate}, then subtract the weeks that are not really teaching weeks — holidays, breaks, testing windows, known disruptions — and say how many true instructional weeks remain. Only then distribute the units: assign each unit an explicit week range (e.g., \"Weeks 4-6\"), sized by the unit's actual weight and difficulty, not by equal slicing.\n\nBuild in buffer deliberately: reserve at least one flex week per term for review and reteach, placed AFTER the units that historically need it most, and mark them on the calendar as protected — the first thing families sacrifice under pressure and the thing they miss most. Mark assessment windows (unit tests, projects, portfolio reviews) so heavy weeks are visible in advance and two major assessments never collide.\n\nFlag the units that historically run long for {course}: name why each one expands (a difficult concept, a big project, prerequisite gaps surfacing) and give a specific trim strategy for each — what to condenate, what to cut, what to move — so the parent has a pre-approved plan instead of panicking in week 9.\n\nPresent the calendar as a week-by-week table (week number, dates, unit, key events), followed by the buffer rationale, the assessment map, and the trim strategies. End with a monthly 15-minute pacing review routine: what to check, the two numbers that matter (weeks used vs. planned, units complete vs. planned), and the decision rule for when to deploy a trim strategy versus when to let the schedule slip.\n\nRun the calendar as a living document with a 15-minute monthly review: compare planned versus actual week positions, move the remaining units honestly rather than hoping to 'catch up,' and deploy a trim strategy the moment the gap exceeds one week — early trims are surgical, late trims are amputations. Keep a one-line log of what caused each slip (illness, a unit that ran long, life) so next year's {course} calendar is built from evidence instead of optimism.",
    "description": "Builds a pacing calendar distributing units across exact week ranges between two dates, with buffer days for review and reteach, marked assessment windows, and trim strategies for historically long units.",
    "category": "curriculum",
    "variables": {
      "course": {
        "label": "Course",
        "question": "Which course?",
        "type": "text",
        "placeholder": "e.g., 7th Grade ELA",
        "required": true
      },
      "startDate": {
        "label": "Start date",
        "question": "When does the term start?",
        "type": "date",
        "required": true
      },
      "endDate": {
        "label": "End date",
        "question": "When does the term end?",
        "type": "date",
        "required": true
      },
      "units": {
        "label": "Units",
        "question": "List the units in order.",
        "type": "textarea",
        "placeholder": "e.g., Unit 1: Personal narrative...",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Strategy Picker",
    "displayDescription": "Compares instructional strategies for your exact objective and class profile, then gives a step-by-step plan for the winner.",
    "id": "curriculum-027",
    "prompt": "You are helping a parent or teacher choose the right instructional strategy for this objective: {objective}, with a {gradeLevel} learner or class described as: {classProfile}.\n\nDo not just pick a favorite strategy — reason it out. First, break the objective into what it actually demands: is it skill acquisition, concept formation, memorization, analysis, creation, or some blend? Name the cognitive work the learner must do, because strategy must match the work.\n\nThen compare three candidate strategies head to head. For each: describe it in two sentences, list its genuine pros for THIS objective and THIS {classProfile}, list its genuine cons and risks, and give it a fit rating with a one-line justification. Be honest — include at least one popular strategy that is a poor fit here and explain why, so the parent learns to evaluate rather than collect tactics.\n\nRecommend the winner and give a complete step-by-step implementation plan: preparation (materials, setup, anything to print or arrange), the session flow in timed phases with the adult's exact moves and the learner's tasks at each phase, the check-for-understanding moments built in, and the most common way this strategy fails with this profile — plus the preventive move.\n\nAdd a \"make it yours\" section: two or three adaptation dials the parent can turn (more structure vs. more independence, more examples vs. faster pace, individual vs. collaborative) depending on how the learner responds in the first ten minutes. End with a success metric: what the parent should observe by the end of the session if the strategy worked, stated in observable terms.\n\nEvaluate the strategy after its first full use with a 10-minute debrief: did the learner do the cognitive work the objective demanded, or did the strategy's mechanics eat the thinking time? Keep what worked, adjust one variable at a time (timing, grouping, example choice), and note the result — this is how a parent builds a personal pedagogy instead of collecting disconnected tactics. Log the winning strategy with its {classProfile} context in a simple teaching journal; six months from now, that journal entry will be worth more than any article, because it describes what works with this learner.",
    "description": "Recommends the best instructional strategy for a specific objective and class profile by comparing three candidates on fit, then delivers a step-by-step implementation plan with timing and materials for the winning strategy.",
    "category": "curriculum",
    "variables": {
      "objective": {
        "label": "Objective",
        "question": "What is the learning objective?",
        "type": "text",
        "placeholder": "e.g., Compare fractions with unlike denominators",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 4th Grade",
        "required": true
      },
      "classProfile": {
        "label": "Class profile",
        "question": "Describe the class.",
        "type": "textarea",
        "placeholder": "e.g., 28 students, mixed ability, short attention spans...",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Resource List Curator",
    "displayDescription": "Curates free, level-matched resources — each with a reading level and a one-line note on exactly how to use it.",
    "id": "curriculum-028",
    "prompt": "You are helping a parent gather teaching resources for {topic} in {gradeLevel} {subject}. Find resources across these types: {resourceTypes}. Format needs: {formatNeeds}. Hard constraints: everything must be free or very low-cost, nothing behind a paywall, and everything must be genuinely usable by a parent teaching one child — not materials that assume a classroom of thirty or a school license.\n\nFor each resource provide: the title, the type, where to find it (describe it precisely enough to locate — site name plus what to search), the reading or difficulty level calibrated to {gradeLevel} (and flag anything that runs above or below level), and a one-line \"use it like this\" note — the exact instructional job it does in the unit (introduces the concept, provides practice, offers an alternative explanation, extends learning, assesses understanding). A resource without a job is clutter; every item must earn its slot.\n\nCurate, do not dump: aim for a tight, high-quality list where each item is the best of its type, and say briefly why you chose it over alternatives. Organize the list by unit phase — launch, teach, practice, extend, assess — so the parent sees when to use what. Include a mix that serves different learners: at least one strong visual or video resource, one text resource, one interactive or hands-on resource, and one reference the parent can use to deepen their own understanding before teaching.\n\nAdd a quality-and-safety pass: note any resource with ads, account requirements, or content the parent should preview first, and give a 5-minute vetting checklist the parent can apply to any resource they find themselves later (accuracy, level match, bias, distraction load). End with the three highest-leverage picks if the parent only has time for three.\n\nMaintain the resource list as a living document: after using each resource, the parent adds a one-line verdict — what it was actually good for, what age it suited, whether it is worth keeping. Within a year the family owns a curated {subject} library matched to their learner, and the vetting checklist becomes second nature. Share the best finds with one other homeschooling family; curation compounds when it is communal, and explaining why a resource works sharpens the parent's own judgment about {topic}.",
    "description": "Curates free or low-cost resources across your chosen formats for a topic, noting each item's difficulty level, excluding paywalled content, and writing a one-line classroom-use note for every resource.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., The American Revolution",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 5th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., History",
        "required": true
      },
      "resourceTypes": {
        "label": "Resource types",
        "question": "Which resource types?",
        "type": "text",
        "placeholder": "e.g., videos, articles, interactives, printables",
        "required": true
      },
      "formatNeeds": {
        "label": "Format needs",
        "question": "Any format needs? (e.g., printable worksheets, videos under 10 min, audiobooks)",
        "type": "text",
        "placeholder": "e.g., printable, no videos over 15 minutes",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Virtual Field Trip Plan",
    "displayDescription": "Plans a virtual field trip with pre-visit background, a focused observation guide, debrief, tech needs, and a low-tech backup.",
    "id": "curriculum-029",
    "prompt": "You are helping a parent plan a virtual field trip for a {gradeLevel} {subject} learner, connected to {topic}. The trip should feel like an expedition, not a video played at the learner.\n\nStart by recommending a specific virtual destination — a named virtual tour, live cam, museum digital collection, or interactive site genuinely connected to {topic} — and justify the choice: what the learner will encounter there that they cannot get from a textbook. Include a low-tech backup option (a photo collection, a recorded tour, a book-based alternative) for the day the internet fails.\n\nDesign the pre-visit activity: background knowledge the learner needs for the visit to make sense, delivered as a 15-20 minute task with a concrete product (a question list, a prediction sheet, a vocabulary map). The pre-visit should create purpose — the learner arrives at the virtual destination with questions they want answered, not blank attention.\n\nCreate the during-visit observation guide: focused tasks, not passive watching. Include 4-6 observation prompts tied directly to {topic} (\"Find evidence of...\", \"Sketch and label...\", \"Record three examples of...\"), a simple recording sheet structure, and pause points where the parent stops and discusses. Build in one \"choice moment\" where the learner follows their own curiosity within the destination — agency keeps attention alive.\n\nDesign the debrief activity for the same day or next morning: a synthesis task where the learner connects what they saw to the unit's concepts (a comparison, a labeled diagram from memory, a short presentation to a family member). Provide the debrief questions and what strong answers sound like.\n\nList tech requirements precisely (device, bandwidth needs, accounts, ad-blocker or full-screen tips) and a 5-minute tech check to run the day before. End with an extension: one follow-up rabbit hole for the fascinated learner.\n\nExtend the trip's value with the 'one-week-later' rule: seven days after the visit, the learner revisits their observation notes and writes the three things they remember most clearly and why — the act of retrieval is what moves the experience into long-term memory. Keep the recording sheets in the unit folder; when {topic} is assessed later, those sheets become personalized study material no textbook can match. Log which virtual destinations delivered and which disappointed, building the family's own field-trip guide over time.",
    "description": "Plans a complete virtual field trip with a chosen destination, pre-visit background activity, during-visit observation guide with focused tasks, synthesizing debrief, tech requirements, and a low-tech backup plan.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 3rd Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Science",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What topic does it connect to?",
        "type": "text",
        "placeholder": "e.g., Marine habitats",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Edtech Tool Recommender",
    "displayDescription": "Matches your teaching situation to the right edtech tools — compared on cost, setup, and learning curve, with a rollout plan.",
    "id": "curriculum-030",
    "prompt": "You are helping a parent choose edtech tools for this situation: {situation}, with a {gradeLevel} learner and this device access: {deviceAccess}.\n\nRecommend 3-5 tools — no more, because choice overload kills adoption. For each tool provide: what it does in one sentence, the exact job it does in THIS situation (not its marketing pitch), cost (free tier limits spelled out — what is actually free vs. gated), setup time honestly estimated, learning curve for both the parent and a {gradeLevel} learner, and fit notes for {deviceAccess} (does it work on a shared family tablet? does it need an email account? how heavy is it on bandwidth?).\n\nCompare the tools head to head in a table on cost, setup time, learning curve, and best-for, then give a clear recommendation: which ONE to start with and why, which to add second if the first sticks, and which to skip for now. Prioritize free options and tools that respect children's privacy — flag any tool with advertising, data collection concerns, or social features the parent should know about.\n\nThen provide a rollout plan that prevents the classic failure (excited signup, one use, abandonment): how to introduce the tool to the learner (the 5-minute demo script), how the parent models it first, the first three tasks to do together before independent use, the common issues in week one with fixes (login problems, confusion about where to click, the learner gaming the system instead of learning), and a two-week check-in: what usage pattern means it is working.\n\nEnd with an exit strategy: how to export or save the learner's work if the tool is abandoned, and the signs that a tool is adding friction rather than value and should be dropped without guilt.\n\nAudit the toolkit quarterly with three questions: is the learner still using it voluntarily, is it producing learning or just activity, and is the total tool count creeping upward? Retire tools that fail the audit without sentimentality — every abandoned tool left installed is friction and distraction. Keep a one-page 'tool stack' note: what each surviving tool does, the login details, and what student work lives where, so a fresh start after a device change or a long break takes minutes instead of a weekend.",
    "description": "Recommends edtech tools matched to your situation and device access, comparing cost, setup time, and learning curve, with a step-by-step rollout plan and troubleshooting — prioritizing free options.",
    "category": "curriculum",
    "variables": {
      "situation": {
        "label": "Situation",
        "question": "What do you need the tools to do?",
        "type": "textarea",
        "placeholder": "e.g., I want formative quizzes and peer feedback...",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 7th Grade",
        "required": true
      },
      "deviceAccess": {
        "label": "Device access",
        "question": "What devices do students have?",
        "type": "select",
        "options": [
          "1:1 Chromebooks",
          "1:1 iPads",
          "Shared cart",
          "BYOD",
          "Limited access"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Parent Curriculum Letter",
    "displayDescription": "Writes a warm, jargon-free parent letter explaining the unit's goals, key dates, home support tips, and a dinner-table conversation starter.",
    "id": "curriculum-031",
    "prompt": "You are helping a teacher or parent write a letter to families about an upcoming unit: {unitName} in {gradeLevel} {subject}. Key dates to include: {keyDates}. The audience is busy parents, many of whom have not thought about {subject} since they were students themselves. Tone: warm, clear, completely jargon-free — every education term must be translated into plain language or cut.\n\nStructure the letter in five short sections with clear headings, skimmable in under three minutes. First, what we are learning and why it matters: the unit's goals stated as what the child will be able to do (not curriculum codes), plus one sentence on why this matters in real life — the answer to \"when will I ever use this?\" that the parent can borrow at the dinner table. Second, what students will actually do: the activities, projects, and experiences in concrete terms (\"they will build...\", \"they will debate...\"), so parents can picture it. Third, key dates: {keyDates} presented as a clean mini-calendar with what each date means and what the parent needs to do (nothing, sign something, help gather materials). Fourth, how to help at home: 4-5 specific, realistic actions — questions to ask, things to notice, small ways to reinforce — with an explicit, kind boundary: how to support without doing the work, and what to do instead when the child is stuck (hint: ask them to explain their thinking, don't explain it for them). Fifth, one dinner-table conversation starter: a genuinely interesting question about {unitName} that a {gradeLevel} child would want to answer, giving the family a window into the learning.\n\nKeep it to one page. End with an invitation: how and when to reach out with questions, framed so parents feel welcome rather than burdensome. Add a short \"before you send\" checklist for the writer: jargon scan, date accuracy, tone check (does this sound like a partner or a lecturer?).",
    "description": "Writes a parent-facing letter about an upcoming unit — learning goals in plain language, what students will do, key dates, concrete ways parents can help without doing the work, and a dinner-table conversation starter.",
    "category": "curriculum",
    "variables": {
      "unitName": {
        "label": "Unit name",
        "question": "What is the unit called?",
        "type": "text",
        "placeholder": "e.g., Our Solar System",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 3rd Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Science",
        "required": true
      },
      "keyDates": {
        "label": "Key dates",
        "question": "What are the key dates parents should know? (tests, projects, events)",
        "type": "text",
        "placeholder": "e.g., Unit test Oct 12, project due Oct 20",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Homeschool Weekly Planner",
    "displayDescription": "Builds a balanced one-week homeschool schedule — core academics, projects, reading, breaks, field time, and independent tasks.",
    "id": "curriculum-032",
    "prompt": "You are helping a parent build a one-week homeschool plan for a {gradeLevel} learner covering {subjects}. The week runs {daysPerWeek} days at {hoursPerDay} learning hours per day. Priorities for this week: {priorities}.\n\nDesign the week as a day-by-day schedule with time blocks, not a vague list. Balance the days across four kinds of learning: core academics (the non-negotiable skill work), hands-on projects (making, building, experimenting), reading time (both assigned and free-choice), and genuine breaks — including movement, outdoor time, and unstructured time, because a homeschool day without breaks produces a homeschool day without learning. Alternate high-focus and low-focus blocks; never stack three heavy academic sessions back to back.\n\nFor each block specify: the subject or activity, the duration, the concrete task (not \"do math\" but \"complete lesson 14 and the practice set, then the 5-minute fluency game\"), whether the learner works independently or with the parent, and what \"done\" looks like. Mark every independent task with an (I) so the parent can see their own freed-up time at a glance, and make sure independent tasks are truly independent for a {gradeLevel} learner — no \"independent\" task that secretly requires constant help.\n\nInclude one field activity during the week: a trip, outdoor investigation, interview, or community experience connected to one of the {subjects}, with the learning purpose stated and a 10-minute follow-up task that locks in the learning. Honor the {priorities} by giving those areas protected prime-time slots early in the week, not leftovers on Friday.\n\nAdd a parent operations note: prep needed Sunday evening (materials, printing, setups — keep it under 30 minutes), the week's single most important session to protect if the week goes sideways, and a Friday 10-minute review routine: what got done, what slipped, and one adjustment for next week. The schedule should feel full but breathable — a plan the family can actually live inside.",
    "description": "Builds a one-week homeschool plan balancing core academics, hands-on projects, reading, and breaks across your chosen days and hours, with a field activity and clear marking of independent vs. parent-led tasks.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 4th Grade",
        "required": true
      },
      "subjects": {
        "label": "Subjects",
        "question": "Which subjects should be covered?",
        "type": "text",
        "placeholder": "e.g., math, ELA, science, history, art",
        "required": true
      },
      "daysPerWeek": {
        "label": "Days per week",
        "question": "How many school days per week?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "hoursPerDay": {
        "label": "Hours per day",
        "question": "Learning hours per day?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "priorities": {
        "label": "Priorities",
        "question": "Any priorities or focus areas for this week?",
        "type": "text",
        "placeholder": "e.g., catch up on math, start the science project",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Homeschool Year Planner",
    "displayDescription": "Maps a full homeschool year — term arcs, major projects, field experiences, portfolio checkpoints, and built-in breaks.",
    "id": "curriculum-033",
    "prompt": "You are helping a parent map a full homeschool year for a {gradeLevel} learner studying {subjects}. Divide the year into {terms} terms, build in {breakWeeks} weeks of breaks, and calibrate the overall pace to: {pacePreference}.\n\nFor each term, design a unit arc per subject: the term's driving question or theme, the 2-4 units in sequence with their core objectives, one major project or deep investigation, and one field experience (trip, interview, outdoor study, community event) that anchors the learning in the real world. Sequence the terms so skills compound across the year — what term one builds that term two assumes — and name those dependencies explicitly so the parent sees the year's logic, not just a list.\n\nSet portfolio checkpoints at natural moments (end of each term at minimum): what the learner selects, what they write about each piece (a reflection prompt per piece: what I learned, what was hard, what I would do differently), and how the collection shows growth over time — because the portfolio is both the assessment and the record. Add record-keeping notes a state reviewer would respect: attendance-friendly logging, work samples to keep, and how to document hours or progress without drowning in paperwork.\n\nDistribute the {breakWeeks} break weeks intentionally — not just at holidays but as recovery weeks after the heaviest terms — and mark one \"flex week\" per term with no new content, reserved for catch-up, deep dives, or rest. Calibrate workload to {pacePreference}: a gentle pace means fewer subjects per day and longer projects; accelerated means compacted basics with room for passion pursuits — spell out what the pace choice changes in practice.\n\nEnd with a year-at-a-glance table (term, dates, theme, major project, field experience, checkpoint) and a \"when the year goes off track\" guide: the three most common derailments and the specific recovery move for each, including which terms can absorb a lost month and which cannot.",
    "description": "Maps a full homeschool year across terms with per-subject unit arcs, major projects and field experiences per term, portfolio checkpoints documenting growth, built-in break weeks, and record-keeping-friendly documentation notes.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 6th Grade",
        "required": true
      },
      "subjects": {
        "label": "Subjects",
        "question": "Which subjects?",
        "type": "text",
        "placeholder": "e.g., math, ELA, science, history",
        "required": true
      },
      "terms": {
        "label": "Terms",
        "question": "How many terms?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "breakWeeks": {
        "label": "Break weeks",
        "question": "How many break weeks total?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "pacePreference": {
        "label": "Pace",
        "question": "What pace suits your family this year?",
        "type": "select",
        "options": [
          "Gentle",
          "Steady",
          "Accelerated"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Semester Overview Builder",
    "displayDescription": "Summarizes a semester's full arc — unit snapshots, milestone dates, and early warnings for workload peaks.",
    "id": "curriculum-034",
    "prompt": "You are helping a parent or teacher create a semester overview for {course}, running from {startDate} to {endDate}. This is the document that lives on the fridge: the whole semester's story at a glance.\n\nFor each unit in the semester, write a 2-3 line snapshot: what it covers, its essential question (the big idea the unit answers), and its major assessment (the proof of learning). Order the units in teaching sequence and add a one-line note per unit on what it assumes from the previous one — the connective tissue that makes the semester a progression rather than a playlist.\n\nBuild a milestone calendar: every test, project due date, presentation, and portfolio checkpoint, placed on actual dates between {startDate} and {endDate}. Then do the workload analysis that makes this document valuable: scan the calendar for peak weeks where multiple heavy demands collide, flag each one, and suggest a specific adjustment in advance (move this deadline, lighten that week's new content, convert a test to a project). Nobody should discover a triple-peak week the Sunday before it hits.\n\nAdd a \"protect and trim\" guide: the 2-3 units or milestones that carry the semester's core learning and must be protected at all costs, and the items that can shrink or go if time runs short — decided now, calmly, not mid-crisis.\n\nDeliver the overview as: the unit snapshots in sequence, the milestone calendar, the peak-week analysis with adjustments, and the protect-and-trim guide. A parent or teacher reading it should be able to answer in ten seconds: what are we doing in October, when is the big project, and which week do I need to brace for.\n\nShare a learner-facing version of this overview with the student: a one-page semester map showing the unit journey in their language ('by December you will be able to...'), the milestone dates that affect them, and the peak weeks flagged honestly ('this week will be intense — we will plan for it together'). Learners who can see the semester's arc take more ownership of its pacing, and the visible finish lines make the hard weeks feel purposeful rather than endless. Revisit the map together at each term boundary: check off what was conquered, adjust what slipped, and recommit to what is next.",
    "description": "Creates a semester overview with 2-3 line unit summaries, essential questions, major assessments, milestone dates, and flagged workload peaks so pacing problems get fixed before they happen.",
    "category": "curriculum",
    "variables": {
      "course": {
        "label": "Course",
        "question": "Which course?",
        "type": "text",
        "placeholder": "e.g., Algebra I",
        "required": true
      },
      "startDate": {
        "label": "Start date",
        "question": "Semester start date?",
        "type": "date",
        "required": true
      },
      "endDate": {
        "label": "End date",
        "question": "Semester end date?",
        "type": "date",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Year-Long Curriculum Map",
    "displayDescription": "Charts every unit across the school year on a month grid — standards, assessments, and deliberate cumulative review touchpoints.",
    "id": "curriculum-035",
    "prompt": "You are helping a parent chart a full year of {gradeLevel} {subject} on a month-by-month grid. The standards that must be covered: {standards}.\n\nPlace each unit on the grid with: the month(s) it occupies, its core content in one line, the specific standards it addresses (with codes), and its major assessment. Then run the coverage verification the parent cannot easily do by eye: go through {standards} one by one and confirm each appears at least once — produce a checklist showing every standard, where it is taught, and where it is assessed. Flag any standard that is taught but never assessed, or assessed but never really taught.\n\nDesign the spiraling deliberately: identify the 3-5 foundational skills or concepts of {gradeLevel} {subject} that decay without reuse, and mark the exact later units where each one resurfaces — not as reteaching, but embedded in new work (last year's fractions inside this year's ratios). For each spiral touchpoint, note the format: warm-up set, project requirement, or assessment item.\n\nAdd cumulative review touchpoints as protected calendar events: 3-4 points in the year (after natural unit clusters) where the learner revisits earlier material through mixed practice or a cumulative task, with the specific content each review covers. Explain to the parent why this matters in one paragraph: the forgetting curve, and how spaced revisiting is the difference between \"covered\" and \"learned.\"\n\nEnd with a risk scan: which months are overloaded, where a single bad month would cascade into the spring, and the two contingency moves if the family falls a month behind (what compresses safely, what must not be skipped). Deliver the month grid first, then the standards checklist, then the spiral map, then the risk scan.\n\nTreat the year map as a promise to revisit: at each term boundary, the parent spends 30 minutes with the grid — checking off standards truly mastered (not merely covered), moving anything that slipped, and confirming the spiral touchpoints ahead are still positioned to catch the skills that need them. The map on the wall should show pencil marks and revisions by spring; a pristine year-long plan in May is evidence it was never really used. Photograph the marked-up grid at year's end as the starting template for next year.",
    "description": "Charts a year-long curriculum map placing each unit on a month grid with its standards, major assessments, and cumulative review touchpoints, verifying every standard appears and noting which units spiral back to it.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 7th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Math",
        "required": true
      },
      "standards": {
        "label": "Standards",
        "question": "Which standards must be covered?",
        "type": "textarea",
        "placeholder": "e.g., list of standard codes...",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Skill Progression Ladder",
    "displayDescription": "Breaks a complex skill into a rung-by-rung ladder from novice to mastery — with sample tasks, success criteria, and plateau-breakers.",
    "id": "curriculum-036",
    "prompt": "You are helping a parent break the skill of {skill} in {gradeLevel} {subject} into a clear progression ladder with {levels} rungs, from complete novice to genuine mastery.\n\nDefine each rung with three elements: what the learner CAN DO at this rung, stated as observable behaviors (\"writes a paragraph with a clear topic sentence and two supporting details,\" not \"writes well\"); a sample task that demonstrates the rung — a concrete activity the parent can assign and watch; and the success criteria to advance — exactly what must be shown, and how consistently, before climbing to the next rung. Make the rungs genuinely distinct: a parent should be able to watch the learner work for ten minutes and place them on the ladder without guessing.\n\nOrder the rungs so each one is a learnable step from the last — no leaps where the learner must suddenly \"just get it.\" If a leap is unavoidable in the skill's nature, mark it explicitly and provide a bridging mini-step.\n\nName the common plateaus: the 2-3 rungs where learners typically stall on {skill}, why the stall happens (the specific sub-skill or misconception that blocks progress), and the targeted intervention that breaks through — a different practice format, a worked-example study session, a constraint that forces the missing sub-skill. This is the most valuable part of the ladder; be specific.\n\nAdd a parent usage guide: how to place the learner initially (a 15-minute diagnostic task you design), how often to reassess (not every day — suggest a rhythm), how to celebrate rung climbs so the learner sees progress, and the critical rule: the ladder measures the skill, never the child — a learner is \"working on rung 3,\" not \"a rung-3 kid.\"\n\nDeliver the ladder as a table (rung, can-do, sample task, advance when), followed by the plateau guide and the usage notes.",
    "description": "Builds a skill progression ladder with defined rungs from novice to mastery, each with observable abilities, a sample demonstrating task, advancement criteria, common plateaus, and what moves a learner past each one.",
    "category": "curriculum",
    "variables": {
      "skill": {
        "label": "Skill",
        "question": "Which skill?",
        "type": "text",
        "placeholder": "e.g., Multi-paragraph essay writing",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 5th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., English",
        "required": true
      },
      "levels": {
        "label": "Levels",
        "question": "How many rungs on the ladder?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Prerequisite Analyzer",
    "displayDescription": "Maps the prerequisite sub-skills a topic depends on — with 5-minute diagnostics and a plan for when the class lacks them.",
    "id": "curriculum-037",
    "prompt": "You are helping a parent make sure their {gradeLevel} learner is actually ready for {topic} before teaching it — because most \"my child doesn't get it\" moments are prerequisite gaps wearing a disguise.\n\nMap the prerequisites as a dependency chain: list every sub-skill the learner must already have to succeed at {topic}, ordered from most foundational to most immediate, and show how they stack (which ones {topic} draws on directly, which ones support those). Be granular and honest: name the specific skills (\"can add fractions with unlike denominators\") not vague categories (\"good at math\"). Include the hidden prerequisites too — the reading level, vocabulary, or study skills {topic} quietly assumes.\n\nFor each prerequisite, design a diagnostic check the parent can run in under 5 minutes: 2-3 quick questions or a tiny task, plus what a passing response looks like. The checks should be efficient enough to run in one 20-minute session before the unit begins.\n\nThen provide the decision framework for the results. If the learner has everything: proceed, with one note on which prerequisite to keep warm during the unit. If one prerequisite is missing: teach a focused 1-2 session bridge (sketch what it covers) before starting {topic}. If several are missing: do not start {topic} yet — provide a 1-2 week prerequisite repair sequence ordered by dependency, with the same diagnostic checks as exit tickets. Give the parent the exact language for explaining a delay to the learner so it feels like building a foundation, not being held back.\n\nEnd with a \"during the unit\" watchlist: the 2-3 moments in {topic} where each prerequisite typically gets tested, and the quick re-check to run if the learner stumbles there. Readiness is not a one-time gate; it is something you keep verifying.\n\nRe-run the fastest diagnostic checks as warm-ups during the {topic} unit itself: the prerequisite most likely to wobble under pressure gets a 2-minute re-check at the start of the lessons that depend on it most. This catches the decay early — the learner who passed the fraction check in September but fumbles it inside algebra in October needs a 10-minute refresher, not a crisis. Log which prerequisites proved fragile; that intelligence makes next year's readiness check sharper before {topic} is even scheduled.",
    "description": "Analyzes a topic's prerequisite sub-skills ordered by dependency, with a quick under-5-minute diagnostic check for each and concrete actions if much of the class lacks a prerequisite.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Dividing fractions",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 6th Grade",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Mastery Learning Plan",
    "displayDescription": "Designs a mastery-based progression — proficiency checkpoints, retake rules, corrective activities, and multi-pace tracking.",
    "id": "curriculum-038",
    "prompt": "You are helping a parent run {unitTopic} in {gradeLevel} {subject} as true mastery learning: the learner advances only after proving proficiency, not when the calendar says so. The retake policy to build in: {retakePolicy}.\n\nBreak the unit into mastery checkpoints — natural mastery-sized chunks (not too small, not whole chapters). For each checkpoint define: the specific skills or understandings it covers, the proficiency criteria stated as observable performance (\"solves 8 of 10 multi-step problems correctly, showing work\" — never \"understands\"), and the assessment format (a short probe, a task, an explanation — matched to what is being measured).\n\nImplement the retake policy: {retakePolicy}. Spell out the mechanics: how soon a learner can retry, what must happen between attempts (this is the key — a retake without new learning is just hoping), how many attempts are reasonable before the approach changes, and how the final record reflects the journey (mastery date, not a penalty average). Design a corrective activity for EACH checkpoint — a different-angle reteach (new representation, new examples, targeted practice on the missed sub-skill), because repeating the original lesson is the definition of insanity in remediation.\n\nExplain pacing for a parent-led setting where the learner moves at their own speed: how to keep momentum without rushing, what the parent does while the learner is \"stuck\" on a checkpoint (the parent's job shifts to coach and diagnostician), how to handle a checkpoint that takes three times longer than expected (the diagnostic questions that reveal whether it is a gap, a mismatch, or a motivation issue), and how to keep the year's overall schedule honest when mastery takes longer than planned.\n\nInclude a tracking sheet design: checkpoint, date attempted, result, corrective action taken, date mastered — one row per checkpoint, visible to the learner so progress is tangible. End with the parent mindset shift in one paragraph: from \"covering material\" to \"building unshakeable foundations,\" and why the short-term slowness pays off.",
    "description": "Designs a mastery-based progression plan with defined proficiency checkpoints, retake rules, corrective activities per checkpoint, multi-speed pacing guidance, and a tracking sheet design.",
    "category": "curriculum",
    "variables": {
      "unitTopic": {
        "label": "Unit topic",
        "question": "What unit?",
        "type": "text",
        "placeholder": "e.g., Quadratic functions",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 9th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Math",
        "required": true
      },
      "retakePolicy": {
        "label": "Retake policy",
        "question": "What retake policy?",
        "type": "select",
        "options": [
          "Unlimited retakes",
          "2 retakes max",
          "1 retake per checkpoint",
          "Retakes with correction work first"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Vocabulary Program Builder",
    "displayDescription": "Builds a multi-week vocabulary program — tier-appropriate word selection, a weekly routine, varied practice, and usage-based assessment.",
    "id": "curriculum-039",
    "prompt": "You are helping a parent build a {weeks}-week vocabulary program for {topic} in {gradeLevel} {subject}. Select {wordCount} words total — and select them like a curator, not a dictionary: prioritize high-utility academic words the learner will meet again (tier 2 words) plus the essential domain terms {topic} requires (tier 3). For each word, note why it made the cut and flag any with tricky multiple meanings or misleading cognates at the {gradeLevel} level.\n\nDesign the weekly routine as a four-beat rhythm the family can sustain for {weeks} weeks: Introduce (first encounter with the word in a rich context, not a definition list — a sentence, image, or scenario from {topic}, themed where possible around {learnerInterests}); Practice (active manipulation — sorting, matching, sentence building, word maps); Apply (using the words in real reading, writing, or discussion about {topic}); Review (spaced revisiting of earlier weeks' words so nothing evaporates). Specify which {activityTypes} fit each beat and give one fully worked example of each beat using a real word from the list.\n\nBuild in word-learning strategies, not just word lists: teach the learner to attack unknown words with morphology (prefixes, roots, suffixes common in {subject}), context clues, and reference habits — 2-3 mini-lessons on these strategies across the {weeks} weeks, because the goal is a word-learner, not a word-memorizer.\n\nDesign the cumulative assessment to test usage in context, never isolated definitions: sentence completion requiring real meaning, choosing the word that fits a scenario, using 3-4 words in an original paragraph about {topic}, explaining a word's meaning to someone else. Include a simple scoring guide and a \"word wall\" or journal system for tracking the growing collection.\n\nEnd with the parent's weekly time budget (keep it honest and small) and the one rule that makes or breaks vocabulary programs: words must be met, used, and revisited — a word seen once is a word lost.",
    "description": "Builds a multi-week vocabulary program with carefully selected tier-appropriate words, a weekly introduce-practice-apply-review routine, varied activity types, and cumulative assessment testing real usage in context.",
    "category": "curriculum",
    "variables": {
      "weeks": {
        "label": "Weeks",
        "question": "How many weeks?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What topic or unit?",
        "type": "text",
        "placeholder": "e.g., Ecosystems unit",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 4th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Science",
        "required": true
      },
      "wordCount": {
        "label": "Word count",
        "question": "How many words total?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      },
      "activityTypes": {
        "label": "Activity types",
        "question": "Which practice activity types?",
        "type": "text",
        "placeholder": "e.g., word maps, games, writing prompts",
        "required": true
      },
      "learnerInterests": {
        "label": "Learner interests",
        "question": "What is your learner interested in? (used for example sentences and activities)",
        "type": "text",
        "placeholder": "e.g., space, animals, video games",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Reading List Curator",
    "displayDescription": "Curates a leveled, diverse reading list on your theme — hooks, reading levels, discussion questions, and smart pairings.",
    "id": "curriculum-040",
    "prompt": "You are helping a parent build a reading list of {count} books for a {gradeLevel} learner on the theme of {theme}. Format preference: {bookFormat}. This list should feel like a curated shelf, not an algorithm's output.\n\nBalance deliberately across four axes: genres ({genres} — make sure each requested genre is genuinely represented, not tokenized); reading levels spanning {levelRange} (include accessible on-ramps, on-level anchors, and stretch titles, and mark each book's level clearly so the parent can sequence or choose wisely); diverse authors and perspectives (own-voices where the theme involves lived experience, a mix of backgrounds, and — where {theme} touches culture or history — perspectives that complicate rather than confirm); and format availability matching {bookFormat}.\n\nFor each book provide: a one-line hook written to make a {gradeLevel} learner want to open it (a question, a dare, a vivid image — not a summary), the reading level, any content notes the parent should know (mature themes, intensity, reading stamina required — brief and non-alarmist), and one discussion question that goes beyond comprehension into interpretation or connection. Then add pairing notes: which titles talk to each other (same theme from different angles, contrasting perspectives, a fiction/nonfiction pair), so the parent can build mini text-sets.\n\nSequence the list in a suggested reading order with a one-line rationale per placement, and include a \"if you only read three\" shortlist. End with a parent guide: how to run a 15-minute book conversation (not a quiz), what to do when the learner bounces off a book (permission to abandon, with a rule), and how to use the library to source the list for free.\n\nSource the list for free with a library-first strategy: give the parent the exact search approach — which 3-4 titles to request first (the anchors the rest of the list orbits), how to use interlibrary loan for the harder-to-find picks, and the 'two-week rule' (if a book has not arrived in two weeks, substitute the designated backup title rather than stalling the reading plan). Note which titles are worth owning versus borrowing (the rereadable favorites, the reference-worthy nonfiction), and add one digital-access tip for {bookFormat} so format is never the barrier between the learner and the next book.",
    "description": "Curates a reading list balancing genres, reading levels, and diverse authors and perspectives, with a one-line hook, reading level, and discussion question per book, plus notes on which titles pair well together.",
    "category": "curriculum",
    "variables": {
      "count": {
        "label": "Book count",
        "question": "How many books?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 5th Grade",
        "required": true
      },
      "theme": {
        "label": "Theme",
        "question": "What theme?",
        "type": "text",
        "placeholder": "e.g., Resilience",
        "required": true
      },
      "genres": {
        "label": "Genres",
        "question": "Which genres to balance?",
        "type": "text",
        "placeholder": "e.g., fiction, nonfiction, poetry",
        "required": true
      },
      "levelRange": {
        "label": "Level range",
        "question": "Reading level range?",
        "type": "text",
        "placeholder": "e.g., grades 3-6",
        "required": true
      },
      "bookFormat": {
        "label": "Format",
        "question": "What format do you prefer?",
        "type": "select",
        "options": [
          "Any format",
          "Physical books",
          "Ebooks",
          "Audiobooks"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Lab Activity Designer",
    "displayDescription": "Designs a safe, structured hands-on science lab — guiding question, materials, procedure, data tables, safety, and analysis.",
    "id": "curriculum-041",
    "prompt": "You are helping a parent run a hands-on science lab on {topic} with a {gradeLevel} learner, working in a group of {groupSize} (adjust all quantities and roles for this group size — including the case of {groupSize} being one learner plus the parent).\n\nOpen with a guiding question — a genuine scientific question about {topic} that the lab will answer, phrased so the learner cares about the outcome. Follow with a hypothesis prompt that teaches what a good hypothesis is: a testable prediction with reasoning (\"I predict ___ because ___\"), plus two sentence starters at {gradeLevel} level and an example of a weak hypothesis rewritten strong.\n\nProvide a materials list with exact quantities scaled for {groupSize}, favoring household or dollar-store items, with a \"if you don't have this, use that\" substitution column. Then the step-by-step procedure: numbered, imperative, each step one action, with the observations to record marked inline. Include a ready-to-copy data table template with labeled columns and units, plus space for qualitative observations — because young scientists need to see that noticing counts as data.\n\nSafety is non-negotiable: list the real hazards of this specific lab (not generic \"be careful\"), the precautions that mitigate each, what protective gear is actually needed, and the cleanup procedure step by step including disposal. Add a \"stop and get the parent\" rule for the one moment in the lab where adult hands must take over.\n\nClose with analysis questions sequenced from observations to conclusions: what did you observe, what patterns appear in the data, what claim can you make, what evidence supports it, what would you change if you ran it again. Include sample strong answers so the parent knows what good scientific thinking sounds like at {gradeLevel}, and a one-paragraph \"the science behind it\" explainer giving the parent the content knowledge to field follow-up questions confidently.",
    "description": "Designs a complete hands-on lab activity with a guiding question, hypothesis prompt, quantified materials list, step-by-step procedure, data table template, safety precautions, cleanup instructions, and analysis questions moving from observation to conclusion.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What is the lab about?",
        "type": "text",
        "placeholder": "e.g., Density of liquids",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 6th Grade",
        "required": true
      },
      "groupSize": {
        "label": "Group size",
        "question": "Students per lab group?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Math Problem Set Builder",
    "displayDescription": "Builds a three-tier math problem set — fluency, application, challenge — with real-world contexts and fully worked solutions.",
    "id": "curriculum-042",
    "prompt": "You are helping a parent build a math problem set on {topic} for {gradeLevel} with {count} total problems in three tiers: fluency builders, application problems, and {challengeCount} challenge problems. Mix {formats} across the set.\n\nTier one — fluency builders (about 40% of the set): clean, focused practice on the core procedure or fact set of {topic}. These should build automaticity and confidence; vary the numbers enough to prevent pattern-matching without thinking, and include a few \"naked number\" reversals that check flexible understanding, not just memorized steps.\n\nTier two — application problems (about 40%): {topic} embedded in real-world contexts a {gradeLevel} learner actually encounters — money, time, measurement, games, cooking, building. Each problem should require the learner to mathematize the situation first (decide what to compute) before computing — that decision is where transfer lives. Keep the reading load light so the math, not the paragraph, is the challenge.\n\nTier three — challenge problems ({challengeCount} items): multi-step reasoning, connections to earlier topics, \"find all possibilities\" or \"explain why\" tasks that reward depth over speed. These should be genuinely hard but solvable — the kind of problem a learner remembers.\n\nOrder the full set from simple to challenging overall, with clear tier headings and per-tier directions. Provide a complete solution key showing every step of work for every problem — the parent must be able to trace exactly where a wrong answer diverged. Add a parent diagnostic guide: the 2-3 most common error patterns for {topic} at {gradeLevel}, what each wrong answer typically signals, and the 5-minute reteach for each.\n\nEnd with a usage protocol: assign in chunks rather than all at once, the \"two-in-a-row wrong means stop and diagnose\" rule, and how to use the challenge tier (offer, never require — and celebrate attempts, not just successes).\n\nBuild the learner's error intelligence over time: keep a running 'mistake log' where the learner records each error pattern they notice in themselves ('I keep dropping negative signs in step 3') with the correction in their own words. Reviewing the log for two minutes before each new set prevents more errors than any amount of extra practice, because it targets the learner's actual failure modes rather than generic difficulty. Celebrate when a logged error stops appearing — that is the visible shape of {topic} mastery.",
    "description": "Builds a leveled math problem set with fluency builders, real-world application problems, and challenge items, in mixed formats, with a complete solution key showing work for every problem.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Solving two-step equations",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 7th Grade",
        "required": true
      },
      "count": {
        "label": "Total problems",
        "question": "Total problems?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": true
      },
      "challengeCount": {
        "label": "Challenge problems",
        "question": "How many challenge problems?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "formats": {
        "label": "Formats",
        "question": "Which formats?",
        "type": "text",
        "placeholder": "e.g., computation, word problems, puzzles",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Essay Prompt Writer",
    "displayDescription": "Writes essay prompts specific enough to guide a thesis but open enough for original thought — with length, key elements, and pitfalls.",
    "id": "curriculum-043",
    "prompt": "You are helping a parent create {count} essay prompts on {topic} for {gradeLevel} {subject}, in the {essayType} style. Each prompt must thread a needle: specific enough that the learner knows what a good thesis looks like, open enough that ten learners could write ten different essays.\n\nFor each prompt provide: the prompt itself, written in direct address to the learner; a \"what a strong thesis does here\" note with two sample thesis directions (not full theses — directions, so the learner still does the thinking); the expected length calibrated to {gradeLevel}; the 3-4 key elements the essay must address (the non-negotiable content or moves); and 2-3 common pitfalls specific to this prompt — the predictable weak moves learners make on this topic (the plot summary instead of analysis, the five-paragraph straitjacket, the thesis that merely restates the prompt) — with a one-line redirect for each.\n\nCalibrate the {essayType} demands explicitly: if it is argumentative, require claim, evidence, and counterargument; if analytical, require a how-or-why question answered through evidence; if narrative or reflective, require scene, reflection, and meaning. Name the moves the genre requires so the parent can teach them, not just assign them.\n\nSequence the {count} prompts from most scaffolded to most open, so the parent can assign them in order across a term as the learner's independence grows. Add a parent coaching section: how to help with brainstorming without writing the essay (the question-based conference), a simple pre-writing requirement for each prompt (thesis plus three evidence bullets approved before drafting), and a revision checklist the learner uses before the parent ever reads a draft. The prompts should make the parent feel like a writing coach, not a grader.\n\nGrade the resulting essays efficiently with a focused-response protocol: read each essay twice — first for the thinking (thesis strength, evidence quality, reasoning), then for the craft (structure, clarity, conventions) — and comment on only the 2-3 highest-leverage improvements per draft, because a page of red ink teaches nothing. Respond as a reader first ('this paragraph convinced me when...') and an evaluator second; learners revise for readers, not for rubrics. Keep an error log across the {count} prompts' essays: the patterns that repeat become the next round of mini-lessons, closing the loop between writing, feedback, and instruction.",
    "description": "Writes essay prompts in your chosen style with clear thesis guidance, expected length, key elements to address, and the common pitfalls to warn students about before they start.",
    "category": "curriculum",
    "variables": {
      "count": {
        "label": "Count",
        "question": "How many prompts?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., The causes of the Great Depression",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 11th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., US History",
        "required": true
      },
      "essayType": {
        "label": "Essay type",
        "question": "What essay style?",
        "type": "select",
        "options": [
          "Argumentative",
          "Analytical",
          "Expository",
          "Narrative",
          "Compare and contrast",
          "Synthesis"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Debate Topic Generator",
    "displayDescription": "Generates genuinely debatable topics with balanced pro/con framings, evidence leads, and judging criteria.",
    "id": "curriculum-044",
    "prompt": "You are helping a parent or teacher run debates for {gradeLevel} {subject} connected to the unit on {unit}. Generate {count} debate topics.\n\nApply a strict debatability test to each topic: a reasonable, informed {gradeLevel} learner could genuinely hold either side, and the topic connects to real content from {unit} rather than being pure opinion (\"best ice cream flavor\" is not a debate). If a topic fails the test, replace it — do not include duds. Ensure every topic is age-appropriate: no topics requiring background the learner does not have, no topics that put a child's identity or family on trial, nothing that collapses into cruelty.\n\nFor each topic provide: a clear resolution stated as a debatable proposition (\"Resolved: ...\"); 2-3 strong arguments for each side, each grounded in the unit's content rather than rhetoric tricks; one specific piece of evidence the learner should find (a statistic, a primary source, an expert finding) with a hint on where to look; and the clash points — where the two sides' arguments directly collide, which is where real debating happens.\n\nInclude judging criteria covering three dimensions: argument quality (logic, structure, responsiveness), evidence use (relevance, accuracy, citation), and rebuttal (did they actually answer the other side?). Provide a simple ballot the parent or a peer judge can use in real time.\n\nAdd a debate format guide scaled for home or small class: a simple structure (constructive, cross-examination questions, rebuttal, closing) with time limits that fit one session, speaker roles if teams are small, and norms that keep it fierce but kind. End with a reflection prompt for after the debate: what argument from the other side was strongest, and did anyone's mind change — because the point is thinking, not winning.\n\nClose each debate with the 'strongest other side' ritual: every participant names the single best argument they heard from the opposing side and what made it strong. This habit is the entire point of debate as education — it trains intellectual honesty, the ability to hold that smart people disagree for good reasons. Keep a debate journal across the {count} topics: the resolutions, the verdicts, and each learner's one-line reflection on what changed their thinking, which becomes a remarkable record of a mind learning to reason.",
    "description": "Generates debate topics connected to your unit, each with a clear resolution, strong arguments for both sides, a piece of evidence to find, and judging criteria covering argument quality, evidence use, and rebuttal.",
    "category": "curriculum",
    "variables": {
      "count": {
        "label": "Count",
        "question": "How many topics?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 8th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Civics",
        "required": true
      },
      "unit": {
        "label": "Unit",
        "question": "Which unit do they connect to?",
        "type": "text",
        "placeholder": "e.g., Branches of government",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Group Role Assigner",
    "displayDescription": "Designs group roles with real responsibilities, accountability checks, and a peer evaluation that catches free-riding early.",
    "id": "curriculum-045",
    "prompt": "You are helping a parent or teacher set up group work for a {gradeLevel} {subject} project on {projectTopic}, with groups of {groupSize}. The goal: every member does real, visible, indispensable work — no passengers, no one-person shows.\n\nDesign distinct roles with real responsibilities, not titles. For each role define: the job in one sentence, the 3-4 concrete tasks only that role performs (if another role could do it, it is not distinct enough), the deliverable that proves the role did its work, and the skills it builds. Scale the roles to {groupSize} so no role is decorative and no essential work is unassigned. Examples of real roles: researcher, synthesizer, designer, presenter, fact-checker — each owning a piece the final product cannot survive without.\n\nAdd a rotation or fixed-term decision with a recommendation: when to rotate roles (builds versatility, prevents typecasting) versus when to keep them fixed (builds depth, suits short projects), and the schedule either way. Build in individual accountability checks at two points: a mid-project check where each member shows their role's progress against the role deliverable, and a peer evaluation form — short, specific, and completed privately — with questions that surface free-riding early (\"Who did you depend on this week? What did they deliver?\"). Include what the adult does with the peer evaluation results: the conversation script for addressing imbalance without turning the group into a courtroom.\n\nProvide the teacher-during-group-work playbook: what to observe, the 3 questions that diagnose a struggling group in 60 seconds, when to intervene vs. let productive struggle run, and the 2-minute mid-session reset for a group that has stalled.\n\nEnd with a launch script: how to introduce roles on day one so learners take them seriously, and the one rule that makes group work function — every role's work must be visible to the group every session.",
    "description": "Designs distinct group roles with genuine responsibilities, a rotation schedule, individual accountability checks, a peer evaluation form, and guidance on what the teacher does during group work.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 7th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Science",
        "required": true
      },
      "projectTopic": {
        "label": "Project topic",
        "question": "What is the project?",
        "type": "text",
        "placeholder": "e.g., Rube Goldberg machine",
        "required": true
      },
      "groupSize": {
        "label": "Group size",
        "question": "Students per group?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Station Rotation Planner",
    "displayDescription": "Plans a timed station rotation lesson — teacher-led, independent, and collaborative stations with student-facing directions.",
    "id": "curriculum-046",
    "prompt": "You are helping a parent or teacher plan a station rotation lesson on {topic} for {gradeLevel} {subject}, running {minutes} minutes with {stationCount} stations.\n\nDesign the stations as a purposeful mix: at least one teacher-led station (direct instruction, guided practice, or targeted support), at least one independent station (practice, reading, or digital work the learner does solo), and at least one collaborative station (discussion, joint problem-solving, or peer teaching). For each station provide: the station's specific job within the lesson (which facet of the learning objective it serves — state this explicitly so the stations form a complete picture, not {stationCount} random activities), student-facing directions clear enough to follow without the teacher present, the exact materials and setup, the expected product or evidence of work, and what early finishers do without disrupting others.\n\nBuild the timing architecture: minutes per station, transition time between stations (with the transition routine — signal, movement path, materials handoff — because transitions are where station lessons die), and a buffer for the opening launch and closing synthesis. The total must fit {minutes} minutes honestly, not aspirationally.\n\nWrite the launch script: the 5-minute whole-group opening that explains the rotation system, sets behavioral expectations, and frames the learning goal — plus what to do with the learner who did not listen to directions (the 30-second reteach, not a lecture).\n\nAdd a teacher-at-stations guide: what the adult does while groups rotate (especially how to run the teacher-led station without neglecting the room), the 2-minute check-in question per station that reveals whether it is working, and the most common failure mode of station lessons (one station becomes the bottleneck) with the preventive design move.\n\nClose with the synthesis: a 5-minute whole-group debrief where learners connect what each station taught into the full objective — because stations without synthesis are just activities.",
    "description": "Plans a station rotation lesson with a mix of teacher-led, independent, and collaborative stations, student-facing directions per station, transition timing for the period, and an explanation of how each station serves the objective.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Parts of speech",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 3rd Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., ELA",
        "required": true
      },
      "stationCount": {
        "label": "Station count",
        "question": "How many stations?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "minutes": {
        "label": "Total minutes",
        "question": "Total class minutes?",
        "type": "number",
        "placeholder": "e.g., 60",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Learning Centers Designer",
    "displayDescription": "Designs self-directed learning centers with independent directions, materials, timing, and accountability products.",
    "id": "curriculum-047",
    "prompt": "You are helping a parent or teacher design {centerCount} learning centers for {topic} at the {gradeLevel} level. Centers run with minimal adult direction — so the directions must be bulletproof.\n\nFor each center provide: the task, stated as a clear learning job (not \"explore the bin\"); the complete materials list with quantities and setup notes; student directions written for independent work — numbered steps, one action per step, with a visual or example where a {gradeLevel} learner might misread; the expected time to complete; and a simple accountability product — something the learner produces that proves engagement (a recording sheet, a sorted set, a labeled diagram, a 3-sentence reflection), designed to be checkable in under a minute per child.\n\nMake the centers genuinely different from each other in modality: hands-on manipulation, reading and responding, creating or building, game or puzzle, technology or listening — so that across {centerCount} centers every learner finds an entry point and no two centers feel like the same worksheet in disguise. Each center should teach or reinforce a distinct facet of {topic}; list which facet each one serves.\n\nDesign the rotation schedule: how learners move through the centers (free choice, assigned rotation, must-do plus may-do), how many centers per session, and the signal system for transitions. Include the early-finisher plan: what learners do when done with a center (extension task at the center, free-choice return to a favorite, or a challenge card) — never \"sit quietly,\" which punishes efficiency.\n\nAdd the adult's role during center time: the observation checklist (what to watch for at each center), the 60-second fix for the center that is not working, and how to introduce all {centerCount} centers on day one without a 40-minute directions lecture (the staggered launch: introduce two, add the rest across the week).\n\nEnd with a refresh plan: after how many uses to rotate or replace center tasks, and the signs a center has gone stale.",
    "description": "Designs self-directed learning centers with clear tasks, materials lists, independent student directions, time expectations, accountability products, a rotation schedule, and early-finisher plans.",
    "category": "curriculum",
    "variables": {
      "centerCount": {
        "label": "Center count",
        "question": "How many centers?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Measurement",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 2nd Grade",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Morning Meeting Planner",
    "displayDescription": "Plans a complete morning meeting — greeting, share, group activity, and morning message — with SEL language to model.",
    "id": "curriculum-048",
    "prompt": "You are helping a parent or teacher plan a {minutes}-minute morning meeting for a {gradeLevel} class, focused on {focus}. Morning meeting sets the emotional temperature for the whole day — design it with that weight.\n\nStructure the meeting in four components with minute allocations totaling {minutes}. Greeting: a greeting routine that ensures every child is seen and named — provide 2-3 greeting options suited to {gradeLevel} (handshake variations, silent greetings for shy days, a whole-group chant) and note how the greeter role rotates. Share: a share prompt connected to {focus} that is personal but safe — give the exact prompt, the sharing structure (pair-share then a few volunteers, or round-robin with pass option), and the listening norm the group practices. Activity: an interactive group activity building connection or practicing a skill related to {focus} — describe it fully with rules, and keep it inclusive (no elimination games, no spotlight activities that humiliate the slow or shy). Message: a morning message that previews the day's learning in 3-4 sentences, written on a board or chart, with one interactive element (a question to answer, a word to find, a prediction to make).\n\nWeave in SEL language the adult can model authentically throughout: sentence frames for naming feelings, for disagreeing kindly, for asking for help — tied to {focus}, not generic posters. Provide the exact phrases, because adults need scripts as much as children do.\n\nAdd a backup activity: a 3-minute filler for the day time runs short or energy runs wrong (too wild or too flat), with a calm-down and a liven-up variant. End with a facilitation note: the two most common morning meeting failures (it becomes a lecture; it runs 25 minutes) and the structural preventions — the timer rule and the \"meeting, not lesson\" mantra.\n\nEvolve the meeting across the year with a monthly refresh: retire the greeting or activity the class has outgrown, introduce one new element tied to the current {focus} need, and once a month let a student plan and lead the meeting — ownership deepens the ritual's meaning. Keep a tiny log of which activities generated the best energy and conversation; by spring the parent owns a proven morning-meeting repertoire calibrated to this specific group, which is worth more than any book of generic activities.",
    "description": "Plans a timed morning meeting with a greeting, share prompt, interactive group activity, and a morning message previewing the day, plus modelable SEL language and a backup activity for short time.",
    "category": "curriculum",
    "variables": {
      "minutes": {
        "label": "Minutes",
        "question": "How many minutes?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 2nd Grade",
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the meeting focus on?",
        "type": "text",
        "placeholder": "e.g., kindness and including others",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Classroom Procedures Plan",
    "displayDescription": "Maps the essential classroom procedures to teach, practice, and reteach — in order, with modeling scripts.",
    "id": "curriculum-049",
    "prompt": "You are helping a teacher create a procedures plan for a {gradeLevel} {setting} with about {classSize} students. Procedures are the invisible curriculum: every minute spent teaching them in week one saves ten minutes weekly all year.\n\nList the essential procedures to teach, organized by the day's flow: arrival (entering, belongings, morning task), transitions (moving between activities, getting attention signals), materials (distribution, collection, supplies, technology), asking for help (when stuck, when finished, when it is an emergency), independent and group work norms, and dismissal (packing, exiting, end-of-day jobs). For each procedure specify the exact desired behavior in observable terms — \"voices off, eyes on me within 5 seconds of the chime\" beats \"listen well.\"\n\nSequence the introduction across the first two weeks: which 3-4 procedures day one must have (arrival, attention signal, dismissal — the survival set), what gets added each subsequent day, and why this order prevents the chaos that derails week one. For each procedure provide the teach-it-like-a-lesson plan: the adult models the right way AND the wrong way (children remember the contrast), the class practices it immediately, and the adult narrates what they see (\"I see Maya's backpack is already hung up — that is exactly it\").\n\nInclude the practice-and-reinforce system: how procedures get rehearsed until automatic (the first-week repetition schedule), how positive narration maintains them, and the correction hierarchy when a procedure slips (remind, rehearse, reteach — never punish a procedure that was never truly taught).\n\nAdd the mid-year reteach protocol: the signs procedures are decaying (the 3 observable symptoms), the January-style reset week plan, and how to reteach without shaming (\"we are leveling up our transitions\" not \"you forgot everything\"). End with a one-page procedures poster list the teacher can post — procedure names only, as the class's shared reference.\n\nAudit the procedures twice a year with fresh eyes: watch the class for one full day and note every procedure that now takes longer than it should or produces friction — those are the reteach candidates, and the mid-year reset exists precisely for them. Involve the students in the audit for one procedure ('how could our transitions be smoother?'); learners who help design procedures follow them with pride rather than compliance. Keep the one-page poster current — cross out, rewrite, reprint — so the wall always matches the room's reality.",
    "description": "Creates a classroom procedures plan listing essential procedures, the order to introduce them, how to model and practice each one, and how to reteach when procedures break down mid-year.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 4th Grade",
        "required": true
      },
      "setting": {
        "label": "Setting",
        "question": "What classroom setting?",
        "type": "select",
        "options": [
          "Elementary self-contained",
          "Middle school",
          "High school",
          "Special education",
          "Art/Music/PE special"
        ],
        "required": true
      },
      "classSize": {
        "label": "Class size",
        "question": "How many students are in the class?",
        "type": "number",
        "placeholder": "e.g., 24",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Culturally Responsive Audit",
    "displayDescription": "Audits a unit for cultural responsiveness — representation, centered vs. missing perspectives, and concrete replacement resources.",
    "id": "curriculum-050",
    "prompt": "You are helping a parent audit this unit for cultural responsiveness. The unit: {unitSummary}. The learner's background (in general terms): {learnerBackground}.\n\nEvaluate the unit across four dimensions, and be specific — name the actual materials, examples, and language at issue, not generalities.\n\nRepresentation: who appears in the unit's materials, examples, images, stories, and word problems? Tally whose faces, names, and lives show up and whose do not. Flag tokenism (one diverse example in a sea of sameness) as clearly as absence.\n\nPerspective: whose viewpoint does the content center, and whose is missing or flattened? For history and social topics this means narrative voice; for literature it means whose stories are told and who tells them; for math and science it means whose contributions are credited and which cultural contexts frame the problems. Name the missing perspectives concretely.\n\nConnection: where does the unit invite THIS learner — {learnerBackground} — to connect the content to their own culture, family knowledge, language, or community? Identify the missed opportunities: the lesson where a family interview, a bilingual resource, or a community example would have made the content land harder.\n\nLanguage: scan for deficit-based framing — language that positions the learner's background as a problem to overcome rather than a resource (\"despite their background,\" lowered expectations disguised as kindness, word problems that assume affluent suburban defaults). Quote the offending phrasing and rewrite it.\n\nFor every issue found, provide a specific fix: a replacement resource (title and where to find it), a revised activity, or rewritten language — not \"add diversity\" but the actual thing to add. Prioritize the three highest-impact changes. End with an asset-framing note for the parent: 3-4 concrete ways this learner's background is an intellectual resource for this unit (funds of knowledge the family already has), and one reflection question the parent revisits monthly to keep the audit alive.",
    "description": "Audits a unit for cultural responsiveness across representation, perspective, student connection, and language, providing specific replacement resources and revised activities for every issue found.",
    "category": "curriculum",
    "variables": {
      "unitSummary": {
        "label": "Unit summary",
        "question": "Summarize the unit: texts, activities, assessments.",
        "type": "textarea",
        "placeholder": "e.g., 3-week westward expansion unit using...",
        "required": true
      },
      "learnerBackground": {
        "label": "Learner background",
        "question": "Briefly describe your learner's cultural/family background (general terms only, no sensitive details)",
        "type": "textarea",
        "placeholder": "e.g., Mexican-American family, bilingual household",
        "required": false
      }
    }
  },
  {
    "displayTitle": "UDL Lesson Check",
    "displayDescription": "Reviews a lesson through the UDL lens — engagement, representation, action/expression — with concrete alternative pathways.",
    "id": "curriculum-051",
    "prompt": "You are helping a parent review this lesson through a Universal Design for Learning lens. The lesson: {lessonSummary}. The learner's profile: {learnerProfile}.\n\nAssess the lesson against the three UDL principles, one at a time, with a verdict for each: where the lesson already offers multiple pathways, and where it offers exactly one — because a single pathway is a barrier wearing a lesson plan.\n\nMultiple means of engagement (the WHY): does the lesson offer genuine choices that recruit interest — choices in topic angle, in level of challenge, in working alone or together? Does it build in relevance to the learner's life ({learnerProfile} matters here), and does it sustain effort with clear goals and feedback, or does it assume motivation? Name the engagement gaps specifically.\n\nMultiple means of representation (the WHAT): is the content available through more than one channel — or is it \"read this chapter\" and nothing else? Check for alternatives in perception (visual, auditory, tactile options), in language (vocabulary support, multiple explanation angles), and in comprehension (background activation, pattern-highlighting, guided connections). Flag every concept taught through a single representation.\n\nMultiple means of action and expression (the HOW): can the learner show understanding in more than one way, or is there exactly one acceptable product? Check for options in physical action, in expression and communication (write, speak, build, draw, perform), and in executive function support (goal-setting scaffolds, planning templates, checklists for multi-step work).\n\nFor each gap found, prescribe a concrete alternative — not an add-on or extra credit, but a genuine parallel pathway (e.g., \"instead of only the textbook section, offer the 8-minute video explainer plus the illustrated diagram walk, and let the learner choose\"). Prioritize fixes by the learner's profile: which 3 changes remove the biggest barriers for THIS learner.\n\nEnd with a UDL one-page checklist the parent can reuse on future lessons, and a reframing note: UDL is not about lowering the bar — the learning goal stays fixed while the paths multiply.",
    "description": "Reviews a lesson against the three UDL principles and, for every gap found, suggests a concrete alternative pathway giving learners genuine choice in how they access content and demonstrate learning.",
    "category": "curriculum",
    "variables": {
      "lessonSummary": {
        "label": "Lesson summary",
        "question": "Summarize the lesson.",
        "type": "textarea",
        "placeholder": "e.g., 45-min lecture + worksheet on...",
        "required": true
      },
      "learnerProfile": {
        "label": "Learner profile",
        "question": "Briefly describe your learner's strengths and barriers (e.g., strong visually, struggles with long readings)",
        "type": "textarea",
        "placeholder": "e.g., loves building things, loses focus during lectures",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Bloom's Question Set",
    "displayDescription": "Writes leveled questions from recall to creation across all six thinking levels — labeled, with a model answer at the top.",
    "id": "curriculum-052",
    "prompt": "You are helping a parent build a complete leveled question set about {topic} for a {gradeLevel} learner, spanning all six levels of {taxonomy} with {perLevel} questions per level.\n\nWrite the questions level by level, from lower-order to higher-order thinking, and label every question with its level — the labels teach the parent what each level demands. For each level, follow its discipline: the lowest levels ask for accurate recall and clear explanation in the learner's own words (no parroting); the middle levels ask the learner to use the knowledge — apply it to new situations, break it into parts, find patterns; the highest levels ask the learner to judge, defend, and create — questions with no single right answer where the quality of reasoning is the point.\n\nCalibrate every question to {gradeLevel}: the vocabulary, the expected depth, and the background knowledge assumed. A recall question that requires college vocabulary is a vocabulary test; an evaluation question answerable in one word is not evaluation. For the highest level, include one sample strong answer that shows the parent what excellent thinking looks like — the use of evidence, the consideration of counterarguments, the originality — so they can recognize it when their learner produces it.\n\nAdd a parent facilitation guide: for each level, the follow-up probe that deepens a thin answer (\"What makes you say that?\" \"Can you give an example?\" \"What would change your mind?\"), and the wait-time and rephrasing moves for when the learner stalls. Include a \"level-up\" ladder: how to take a learner's answer at one level and nudge it to the next (\"You described what happened — now tell me why it had to happen that way\").\n\nEnd with a usage map: which levels suit a quick check-in, which suit a deep discussion, which suit an assessment — and the warning that a diet of only lower-level questions produces learners who can recite {topic} but cannot think with it.",
    "description": "Writes leveled questions spanning all six levels of your chosen taxonomy, labeled by level and ordered from lower to higher-order thinking, with a sample strong answer for the highest-level question.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic or text?",
        "type": "text",
        "placeholder": "e.g., Chapter 7 of the novel",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 6th Grade",
        "required": true
      },
      "taxonomy": {
        "label": "Taxonomy",
        "question": "Which taxonomy?",
        "type": "select",
        "options": [
          "Bloom's Taxonomy",
          "Revised Bloom's",
          "Webb's Depth of Knowledge"
        ],
        "required": true
      },
      "perLevel": {
        "label": "Per level",
        "question": "Questions per level?",
        "type": "number",
        "placeholder": "e.g., 2",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Think-Pair-Share Prompts",
    "displayDescription": "Creates think-pair-share prompts with sentence starters, listening tasks, synthesis questions, and equity moves.",
    "id": "curriculum-053",
    "prompt": "You are helping a parent or teacher create {count} think-pair-share prompts for {topic} in {gradeLevel} {subject}, usable one-on-one, in small groups, or in a full class.\n\nEach prompt must work in three distinct phases — design all three, not just the question. Think (1 minute silent): give the exact prompt plus a sentence starter the learner completes in writing or silently (\"One reason ___ might be true is...\"). The starter matters: it lowers the blank-page barrier and gives every learner an entry point, not just the quick thinkers. Pair (2 minutes): the learner discusses with a partner — but give the partner a listening task, not just \"discuss\" (e.g., \"listen for the strongest piece of evidence your partner uses, then restate it before adding your own\"). The listening task is what makes pair time thinking time instead of chat time. Share (whole group): a synthesis question that builds on what pairs discussed — not \"what did you say?\" but \"where did pairs disagree, and what would settle it?\" — so the share phase creates new thinking rather than reporting old thinking.\n\nWrite prompts that genuinely benefit from all three phases: questions with enough substance for silent thought, enough debatability for partner exchange, and enough depth for group synthesis. Avoid yes/no questions and pure recall — a think-pair-share on \"what year did...\" wastes the structure.\n\nInclude equity moves for each prompt: how to ensure every voice gets heard — the random reporter (the listener reports, not the thinker), the written-first rule (everyone writes before anyone speaks), the \"build on\" requirement (each share must connect to a previous one), and what to do with the dominant voice and the silent one. For the one-on-one parent setting, adapt: the parent plays the pair role with a genuine listening task of their own, modeling the thinking aloud.\n\nEnd with a timing discipline note: the three phases must stay tight (1-2-3 minutes) or the routine collapses — and a troubleshooting line for the most common failure, the pair phase dissolving into off-task talk.",
    "description": "Creates think-pair-share prompts structured in three phases — silent thinking with sentence starters, partner discussion with a listening task, and whole-class synthesis — with equity moves so every voice is heard.",
    "category": "curriculum",
    "variables": {
      "count": {
        "label": "Count",
        "question": "How many prompts?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Theme in short stories",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 7th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., ELA",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Jigsaw Activity Designer",
    "displayDescription": "Designs a jigsaw lesson — expert pieces, guiding questions, teaching templates, and individual accountability checks.",
    "id": "curriculum-054",
    "prompt": "You are helping a parent or teacher design a jigsaw activity on {topic} for {gradeLevel} {subject}, fitting a {minutes}-minute period with the content divided into {pieces} expert pieces.\n\nDivide {topic} into {pieces} pieces that are genuinely interdependent — each piece must contain something the others need, so the home-group teaching phase is necessary rather than ceremonial. Name each piece, define its boundaries precisely (what it covers and what it does not, to prevent overlap and gaps), and check that the pieces are roughly equal in difficulty and workload; an unbalanced jigsaw breeds resentment.\n\nFor each expert piece write: 3-4 guiding questions the expert group uses to master their piece (questions that drive to the piece's core ideas, not trivia), the key takeaways the experts must be able to teach (stated as \"after your teaching, your group should be able to...\"), and the common misunderstanding experts develop about this piece with the correction.\n\nCreate the teaching template each expert uses when returning to their home group: a structured mini-lesson frame (the 2-minute explanation, the one visual or example, the check question they ask their group) — because {gradeLevel} learners do not naturally know how to teach, and unstructured \"teach your group\" produces mumbling. Include sentence starters for the expert teacher.\n\nAdd the individual accountability check at the end: a short individual task covering ALL {pieces} (not just the learner's own), so listening to others mattered. Provide the check questions and answer key.\n\nLay out the timing for {minutes} minutes: expert group study, teaching rounds, accountability check, and debrief — with the transition mechanics between phases. End with the two classic jigsaw failure modes (an expert group that never really learned its piece; a home group that tunes out during teaching) and the specific structural preventions for each.\n\nDebrief the jigsaw method itself with the learners afterward: what made a good expert teacher, what helped them learn from a peer, and what they would do differently as an expert next time. This meta-reflection builds the collaboration skills the jigsaw is secretly teaching alongside {topic} — listening, explaining, depending on others. Keep the expert guiding questions and teaching templates on file; a well-designed jigsaw on {topic} can be re-skinned for the next topic in a fraction of the time, and learners get better at the format every round.",
    "description": "Designs a complete jigsaw activity dividing content into expert pieces with guiding questions, a teaching template experts use with their home group, individual accountability, and timing for the period.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Types of government",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 6th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Social Studies",
        "required": true
      },
      "pieces": {
        "label": "Expert pieces",
        "question": "How many content pieces?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "minutes": {
        "label": "Minutes",
        "question": "Total class minutes?",
        "type": "number",
        "placeholder": "e.g., 50",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Gallery Walk Planner",
    "displayDescription": "Plans a gallery walk with purposeful stations, active response tasks, rotation timing, and a synthesizing debrief.",
    "id": "curriculum-055",
    "prompt": "You are helping a parent or teacher plan a gallery walk for {gradeLevel} on {topic}: {stationCount} stations, {minutes} minutes total. The cardinal rule: learners respond and think at every station — nobody just looks and walks.\n\nDesign each of the {stationCount} stations with: the content or prompt displayed (a text excerpt, image, data set, artifact, question, or problem — varied across stations so the walk has rhythm), and a response task the learner completes before moving on. The response tasks are the lesson: analyzing, comparing, questioning, sketching, ranking, connecting to {topic}'s core ideas. Provide a recording sheet structure that organizes the {stationCount} responses (a table, a set of boxes, a guided notes page) — learners need somewhere for their thinking to land.\n\nVary the station demands deliberately: some stations ask for observation, some for analysis, some for evaluation, some for creation. Sequence the stations so the walk builds — early stations establish foundation, later stations demand synthesis across what was seen. Mark one station as the \"lynchpin\" station carrying the walk's most important idea.\n\nSet the rotation mechanics for {minutes} minutes: time per station, the movement signal and direction (avoiding traffic jams), what learners do if they finish a station early (the extension prompt posted at each station), and the rule for the station that is crowded (the overflow task). Include setup notes: what to print, post, or arrange, and the 10-minute setup checklist.\n\nDesign the debrief as the payoff: 5-7 discussion questions that synthesize ACROSS stations (\"Which two stations disagreed with each other?\" \"What pattern appeared in every station?\" \"What is still unresolved?\") — because the learning of a gallery walk lives in the connections between stations, not within any single one. End with a 3-minute individual exit reflection capturing each learner's one big takeaway.\n\nPhotograph or file the station responses after the walk: the recording sheets become a ready-made study guide for {topic}, personalized by the learner's own observations, and the lynchpin station's responses make an excellent formative assessment the parent can score in minutes. Note which stations generated the richest responses and which fell flat — next gallery walk keeps the winners' formats and retires the losers'. Over a year, the family builds a repertoire of station types proven to make their learner think.",
    "description": "Plans a gallery walk with content-rich stations, response tasks students complete while circulating, timed rotations, and debrief questions synthesizing learning across stations.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 9th Grade",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Industrial Revolution inventions",
        "required": true
      },
      "stationCount": {
        "label": "Station count",
        "question": "How many stations?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "minutes": {
        "label": "Minutes",
        "question": "Total minutes?",
        "type": "number",
        "placeholder": "e.g., 40",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Peer Review Protocol",
    "displayDescription": "Creates a structured peer review protocol — norms, guided feedback forms, sentence starters, and revision planning.",
    "id": "curriculum-056",
    "prompt": "You are helping a parent or teacher create a peer review protocol for {assignmentType} in {gradeLevel} {subject}, designed for a {minutes}-minute session. The goal is feedback the writer can actually use — not \"good job\" and not demolition.\n\nStart with reviewer norms, stated as commitments learners make out loud: read the whole piece before commenting, comment on the work not the person, be specific enough to act on, balance strengths with growth areas. Include the mindset frame: the reviewer's job is to make the writer's work stronger, not to grade it.\n\nBuild the guided feedback form around the assignment's real criteria: 4-6 specific look-fors tied to what {assignmentType} demands at {gradeLevel} (not generic \"grammar\" — the actual moves: \"Does the introduction name the claim clearly? Highlight the sentence.\"). For each look-for provide a checkbox or scale plus a comment line, so reviewers must point to evidence in the text. Add sentence starters for kind and useful feedback (\"One strength of your ___ is ___ because ___.\" \"A question your reader might have is ___.\" \"To strengthen ___, you could try ___.\") — {gradeLevel} learners need the language of helpful critique modeled, not assumed.\n\nStructure the {minutes}-minute session: silent reading with the form, reviewer writes feedback, partners discuss (the writer asks clarifying questions; the reviewer explains), then the writer completes a revision plan: the 2-3 specific changes they will make, in priority order, before the next draft. The revision plan is the accountability — review without a plan evaporates.\n\nAdd the teacher monitoring guide: what to circulate and listen for, the 3 signs of low-quality reviewing (vague praise, copy-editing only, personal comments) with the redirect script for each, and how to pair reviewers (complementary strengths, never the struggling writer with the harsh critic).\n\nEnd with a reflection: the writer names one change they will make and one thing they will keep — closing the loop between feedback and revision.",
    "description": "Creates a peer review protocol with reviewer norms, a guided feedback form tied to rubric criteria, sentence starters for kind and useful feedback, a revision planning step, and teacher quality monitoring.",
    "category": "curriculum",
    "variables": {
      "assignmentType": {
        "label": "Assignment type",
        "question": "What is being peer reviewed?",
        "type": "text",
        "placeholder": "e.g., Rough drafts of personal essays",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 8th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., ELA",
        "required": true
      },
      "minutes": {
        "label": "Minutes",
        "question": "Session length in minutes?",
        "type": "number",
        "placeholder": "e.g., 45",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Self-Assessment Builder",
    "displayDescription": "Builds a student self-assessment tool — success criteria, rating scales, evidence-based reflection, and goal setting.",
    "id": "curriculum-057",
    "prompt": "You are helping a parent create a self-assessment tool for {skillOrTask} at the {gradeLevel} level — a tool the learner uses themselves, without the parent grading it. The purpose is honest self-knowledge: teaching the learner to judge their own work accurately, which is a skill that outlasts any single assignment.\n\nStart with student-friendly success criteria: 4-6 \"I can\" statements describing {skillOrTask} done well, written in language a {gradeLevel} learner reads independently. Each statement must be observable — the learner should be able to point to their work and say \"here is where I did this.\" Avoid vague criteria (\"I did my best\"); demand concrete ones (\"I included evidence for each of my claims\").\n\nBuild the {scaleType} self-rating scale with real descriptors at each level — not just numbers, but what each level looks like in practice for {skillOrTask}. The descriptors must make the middle levels honorable: the scale should describe growth stages, not \"perfect vs. failure,\" or learners will either inflate or despair.\n\nAdd reflection prompts that demand evidence, not feelings: \"Which criterion is your strongest? Point to the exact part of your work that shows it.\" \"Which criterion needs work? What specifically would you change?\" \"What did you try that did not work, and what did you learn from it?\" — because \"I think I did okay\" teaches nothing.\n\nInclude the goal-setting section: the learner names ONE next step (singular — focus beats lists), states what they will do differently next time in concrete terms, and sets a check date. Provide the parent's role guide: how to respond to the self-assessment (affirm accurate judgment first, then discuss gaps — never override the learner's rating with your own in the first pass), and how to handle the two distortions: the harsh self-critic and the inflated self-grader, with the calibration conversation script for each.\n\nEnd with a reuse note: this same tool structure works for any skill — show the parent the template pattern so they can build the next one themselves.",
    "description": "Builds a self-assessment tool with student-friendly success criteria, a descriptive self-rating scale, reflection prompts demanding evidence, and a goal-setting section — usable without teacher grading.",
    "category": "curriculum",
    "variables": {
      "skillOrTask": {
        "label": "Skill or task",
        "question": "What skill or task?",
        "type": "text",
        "placeholder": "e.g., Giving a persuasive speech",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 7th Grade",
        "required": true
      },
      "scaleType": {
        "label": "Scale type",
        "question": "What rating scale?",
        "type": "select",
        "options": [
          "Emoji scale",
          "1-4 numeric",
          "Not yet / Getting there / Got it",
          "Traffic light"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Portfolio Requirements",
    "displayDescription": "Defines portfolio requirements — piece selection, reflection prompts, growth evidence, and a presentation or defense format.",
    "id": "curriculum-058",
    "prompt": "You are helping a parent define portfolio requirements for {courseOrSubject} at the {gradeLevel} level. A portfolio is an argument: \"here is what I learned and here is the proof.\" Design the requirements so the portfolio makes that argument well.\n\nSpecify {pieceCount} required pieces across these categories: {categories}. For each required piece define: what it is (with enough specificity to guide selection — not \"a writing sample\" but \"one revised piece of analytical writing showing your best thinking\"), whether it is student-choice or required, and what it is meant to demonstrate. Balance the portfolio across the categories so it represents the whole course, not just the learner's favorite kind of work.\n\nFor each piece, write reflection prompts the learner answers in writing: what this piece shows about my learning, what was difficult and how I handled it, what I would do differently now, and how this piece connects to one other piece in the portfolio. The reflections are where growth becomes visible — require them, and require specificity (quote your own work; point to the exact paragraph).\n\nDesign the growth-over-time mechanism: at least one \"then and now\" pairing (an early piece alongside a later piece on a similar skill, with a written comparison), so the portfolio documents a trajectory, not just a greatest-hits album.\n\nDefine the presentation or defense format: who the audience is (parent, family, a mentor), how long, the structure (tour of 3 key pieces, the growth story, questions), and 3-4 questions the audience asks. Provide a simple scoring guide for the parent covering completeness, reflection quality, evidence of growth, and presentation — with the emphasis weighted toward reflection and growth over polish.\n\nEnd with logistics: physical or digital format, the collection rhythm through the term (what gets filed when, so it is not all assembled in a panic), and the one rule that keeps portfolios honest — include the struggle pieces, not just the triumphs.",
    "description": "Defines student portfolio requirements with specified pieces across categories, per-piece reflection prompts, growth-over-time evidence, a presentation or defense format, and a teacher scoring guide.",
    "category": "curriculum",
    "variables": {
      "courseOrSubject": {
        "label": "Course",
        "question": "Which course or subject?",
        "type": "text",
        "placeholder": "e.g., 10th Grade English",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 10th Grade",
        "required": true
      },
      "pieceCount": {
        "label": "Piece count",
        "question": "How many pieces?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "categories": {
        "label": "Categories",
        "question": "Which piece categories?",
        "type": "text",
        "placeholder": "e.g., best work, most improved, creative piece",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Capstone Project Planner",
    "displayDescription": "Plans a multi-week capstone — proposal template, milestones, mentor check-ins, public showcase, and process-plus-product evaluation.",
    "id": "curriculum-059",
    "prompt": "You are helping a parent plan a capstone project for a {gradeLevel} {subject} learner on the theme of {theme}, spanning {weeks} weeks. A capstone is the learner's magnum opus for the term: independent, substantial, and public.\n\nStart with the student proposal template the learner completes before anything begins: the driving question or goal, why {theme} matters to them personally, the proposed final product (with format options, not a single mandated form), the 3-4 milestones they anticipate, the resources they will need, and the help they expect to need from the parent or a mentor. Include the proposal review conference: the questions the parent asks to test whether the scope is right (ambitious but finishable in {weeks} weeks), and the scope-negotiation script for proposals that are too big, too small, or too vague.\n\nMap the {weeks} weeks into phases with deliverables: proposal and planning, research and exploration, creation and building, revision and refinement, showcase preparation. For each phase: the goal, the concrete deliverable, and the mentor or parent check-in — scheduled, with specific look-fors and the feedback protocol (ask first, advise second, never take over). Build in one formal \"pivot point\" mid-project where changing direction is explicitly allowed, because the best capstones evolve.\n\nDesign the public showcase: the format (exhibition evening, presentation to family and mentors, published work, community demonstration), the audience, the learner's role (presenting, demonstrating, answering questions — not just displaying), and how the audience participates (feedback forms, Q&A, celebration).\n\nCreate evaluation criteria covering both process (planning quality, persistence through difficulty, use of feedback, time management — evidenced by the project journal) and product (content mastery, craft, originality, connection to {theme}). Require a project journal throughout: weekly entries logging decisions, obstacles, and changes of mind — the journal is the window into the process grade.\n\nEnd with the parent's hardest job description: being the scaffolder who does not become the builder — the specific lines between supporting and taking over, and what to do when the learner wants to quit in week three.",
    "description": "Plans a capstone project with a student proposal template, phased milestones and deliverables, mentor check-in schedule, public showcase format, and evaluation criteria covering both process and product.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 12th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., English",
        "required": true
      },
      "theme": {
        "label": "Theme",
        "question": "Capstone theme?",
        "type": "text",
        "placeholder": "e.g., Voice and identity",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "How many weeks?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Data-Driven Reteach Plan",
    "displayDescription": "Turns assessment data into a focused reteach plan — group vs. individual gaps, new strategies, and a proving re-assessment.",
    "id": "curriculum-060",
    "prompt": "You are helping a parent or teacher build a reteach plan from real assessment data. The data: {dataSummary}. Design {days} days of whole-class (or full-learner) reteach.\n\nStart with triage analysis. Sort the missed objectives into two piles: group gaps (most learners missed it — this is a teaching problem, own it without blame) and individual gaps (a few learners missed it — this needs small-group or individual follow-up, not whole-class reteach). For each group gap, diagnose the likely cause from the response patterns: was the concept never really understood, was it understood but misapplied under test conditions, or was the assessment item itself flawed? Name the cause, because the reteach strategy depends on it.\n\nDesign the {days} reteach days targeting only the group gaps — reteaching everything is just reteaching nothing. For each day: the single gap addressed, the fresh strategy (it must differ from the original instruction — new representation, new examples, new modality; doing the same lesson louder is not a strategy), the 15-20 minute core activity, and the exit probe that measures exactly that gap. Sequence the days so foundational gaps come before dependent ones.\n\nFor the individual gaps, design a parallel track: a short list of targeted tasks or mini-conferences per learner, runnable while the rest do extension work — so no learner sits through reteach of something they already know.\n\nDefine the re-assessment that proves the gap closed: new items (never the same test — that measures memory, not learning), parallel in difficulty to the original, with the mastery threshold stated. Include the decision rule: what happens if the re-assessment still shows the gap (the three options: a second reteach with a third strategy, prerequisite repair, or acceptance with a plan to spiral it later).\n\nEnd with a 10-minute data routine for next time: how to log item-level results during grading so the next reteach plan takes minutes to build, not hours.",
    "description": "Builds a reteach plan from assessment data, separating whole-class gaps from individual ones, designing targeted reteach days with fresh strategies, and defining the re-assessment that proves the gap closed.",
    "category": "curriculum",
    "variables": {
      "dataSummary": {
        "label": "Data summary",
        "question": "Summarize the assessment data.",
        "type": "textarea",
        "placeholder": "e.g., 60% missed Q4-Q6 on multi-step...",
        "required": true
      },
      "days": {
        "label": "Reteach days",
        "question": "How many reteach days?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Small Group Intervention",
    "displayDescription": "Designs targeted small-group intervention sessions — warm-up, explicit teaching, guided practice, and progress probes.",
    "id": "curriculum-061",
    "prompt": "You are helping a parent or teacher design a small-group intervention for {gradeLevel} learners performing below benchmark on {skill}. Plan {sessions} sessions of {minutes} minutes each. This is intensive, targeted repair — not homework help, not general tutoring.\n\nDefine entry and exit criteria first, in measurable terms: the benchmark score or observable performance that puts a learner IN this group, and the performance that graduates them OUT. Name the specific sub-skills of {skill} the intervention targets — intervention fails when it targets \"reading\" instead of \"decoding multisyllabic words.\" Include a 10-minute placement probe the adult runs before session one to confirm each learner actually belongs here.\n\nStructure every one of the {sessions} sessions identically — struggling learners need predictable architecture: a 5-minute warm-up reactivating the previous session's learning (spaced retrieval, not new content); an explicit teaching segment (8-12 minutes) where the adult models the sub-skill with think-aloud, using a different representation than the classroom instruction that already failed these learners; guided practice where the adult coaches in real time with immediate corrective feedback (the feedback timing is the intervention — delayed feedback does not rewire the error); and a 3-minute progress-monitoring probe — the same format every session, graphed, so growth is visible to the learner and the adult.\n\nSequence the {sessions} sessions as a skill ladder: each session's sub-skill builds on the last, and state the dependency explicitly. Build in cumulative review: session four's warm-up revisits session one's skill, because intervention learners forget fastest.\n\nDefine the non-responder protocol: after how many sessions of flat progress the adult changes approach, what the changed approach looks like (smaller step size, different modality, prerequisite repair), and when to seek further evaluation rather than more of the same. Include the motivation design: how to keep learners who have already \"failed\" at {skill} willing to try — small wins engineered into every session, progress graphs they can see, and language that separates the skill from the self.\n\nEnd with a fidelity checklist: the 5 things that must happen every session for this to count as intervention rather than tutoring.",
    "description": "Designs a small-group intervention with sequenced sessions of warm-up, explicit teaching, guided practice, and progress-monitoring probes, plus entry/exit criteria and next steps for non-responders.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 3rd Grade",
        "required": true
      },
      "skill": {
        "label": "Skill",
        "question": "Which skill?",
        "type": "text",
        "placeholder": "e.g., Multi-digit subtraction",
        "required": true
      },
      "sessions": {
        "label": "Sessions",
        "question": "How many sessions?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "minutes": {
        "label": "Minutes per session",
        "question": "Minutes per session?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Gifted Extension Projects",
    "displayDescription": "Designs open-ended extension projects for gifted learners — original thinking, real-world problems, and depth-rewarding rubrics.",
    "id": "curriculum-062",
    "prompt": "You are helping a parent design {count} extension projects for gifted {gradeLevel} learners studying {topic} in {subject}. The learner's interests: {learnerInterests}. Each project runs about {weeks} weeks and should be completable mostly independently.\n\nSet the bar correctly: gifted learners do not need MORE work — they need DIFFERENT work. Every project must demand original thinking, authentic research, or genuine creation: an unsolved question, a real problem without a known answer, a product that did not exist before. Ban the three gifted-education sins: more of the same problems, fancier formatting of the same content, and \"enrichment\" that is just harder computation. For each project include a one-line \"why this is worthy of a gifted mind\" justification.\n\nConnect each project to a real-world problem or professional practice related to {topic}: the learner works the way a real researcher, designer, engineer, writer, or analyst works — with authentic methods, real data or sources, and real constraints. Weave in {learnerInterests} where natural so the projects feel chosen, not assigned.\n\nFor each project provide: the driving question or challenge, the professional role the learner steps into, the investigation or creation process in phases, the expected final product (with format freedom — let the learner choose how to show mastery), the resources they will need (real sources, tools, experts to consult), and the {weeks}-week milestone map with check-in points where the parent reviews progress without directing it.\n\nInclude a rubric per project that rewards depth and creativity over volume: criteria like originality of insight, quality of evidence and reasoning, sophistication of the product, and persistence through difficulty — with descriptors that make \"went deep\" score higher than \"did a lot.\" Add the parent's role guide for gifted independent work: how to coach without controlling, the questions that deepen thinking (\"What surprised you?\" \"What would an expert disagree with?\"), and how to handle perfectionism — the gifted learner's most common enemy — including when to enforce \"done is better than perfect.\"",
    "description": "Designs extension projects requiring original thinking or research on real-world problems, completable mostly independently, with rubrics rewarding depth and creativity over volume.",
    "category": "curriculum",
    "variables": {
      "count": {
        "label": "Count",
        "question": "How many projects?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 5th Grade",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Simple machines",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Science",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "Weeks to complete?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "learnerInterests": {
        "label": "Learner interests",
        "question": "What is your learner passionate about? (used to theme the projects)",
        "type": "text",
        "placeholder": "e.g., astronomy, architecture, debate",
        "required": false
      }
    }
  },
  {
    "displayTitle": "ELL Scaffold Designer",
    "displayDescription": "Adds language scaffolds to any lesson for English learners — vocabulary, sentence frames, modified texts — without lowering rigor.",
    "id": "curriculum-063",
    "prompt": "You are helping a parent or teacher add English-learner scaffolds to this lesson: {lessonSummary}. The learners are at {proficiencyLevel} English proficiency. The iron rule: scaffold the LANGUAGE, never dilute the CONTENT — the learner masters the same {lessonSummary} concepts as everyone else, through a more supported language path.\n\nProvide vocabulary pre-teaching: identify the 8-12 words essential to this lesson (separate the content vocabulary from the instructional vocabulary — learners often fail on words like \"compare\" or \"justify,\" not just the science terms), and for each give a student-friendly definition, a visual or gesture cue, and a {proficiencyLevel}-appropriate example sentence. Include a 10-minute pre-teach routine the adult runs before the lesson.\n\nSupply sentence frames and starters for every speaking and writing task in the lesson: frames calibrated to {proficiencyLevel} (more complete frames for lower proficiency, open stems for higher), covering the academic moves the lesson requires — describing, comparing, explaining cause and effect, justifying with evidence. Show one frame in use with lesson content so the adult sees the pattern.\n\nProvide modified text support: how to make the lesson's reading accessible — glossed key terms in the margin, chunked paragraphs with stop-and-check questions, a simplified-but-not-babyish alternate version of the hardest passage (same concepts, controlled language), and permission to use the home language strategically (preview in L1, then tackle in English — the research-backed bridge).\n\nDesign low-language-load ways to show understanding: labeled diagrams, sorting and matching tasks, demonstrations, graphic organizers with word banks — assessment formats where limited English cannot hide real content knowledge. Include the participation plan: structured ways the learner speaks in the lesson (rehearsed contributions, partner pre-talk before whole-group sharing) so they practice academic English in safety.\n\nEnd with a \"what NOT to do\" list: the common ELL mistakes this lesson invites (seating them silently with a worksheet, mistaking language struggle for content struggle, over-simplifying until the rigor is gone) and the correct move for each.",
    "description": "Designs ELL scaffolds for a lesson at a given proficiency level: pre-taught vocabulary with visuals, sentence frames for speaking and writing, modified or glossed texts, and low-language-load ways to show understanding — with content rigor intact.",
    "category": "curriculum",
    "variables": {
      "lessonSummary": {
        "label": "Lesson summary",
        "question": "Summarize the lesson.",
        "type": "textarea",
        "placeholder": "e.g., 50-min lesson on the water cycle with...",
        "required": true
      },
      "proficiencyLevel": {
        "label": "Proficiency level",
        "question": "What proficiency level?",
        "type": "select",
        "options": [
          "Entering",
          "Emerging",
          "Developing",
          "Expanding",
          "Bridging"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Choice Board Builder",
    "displayDescription": "Builds a tic-tac-toe choice board with varied activities, balanced difficulty, and clear completion rules.",
    "id": "curriculum-064",
    "prompt": "You are helping a parent build a choice board for {topic} in {gradeLevel} {subject}: {rows} rows by {columns} activities. The promise of a choice board is real choice — so every path through the board must genuinely teach {topic}, and no path may be the \"easy way out.\"\n\nDesign the {rows} x {columns} grid with activities varying across {activityTypes}. Balance the difficulty with engineering precision: map each activity to the learning objective and verify that ANY valid completion path (e.g., any three in a row, or the required selection rule you set) covers the full objective. If the completion rule is \"any three,\" then every possible three-in-a-row must be a complete learning experience — audit the rows, columns, and diagonals explicitly and fix the ones that are not.\n\nVary the modalities across the grid so different learners find their strengths: analytical tasks, creative tasks, hands-on tasks, research tasks, communication tasks. No two adjacent activities should feel the same. Include at least one activity that connects {topic} to the learner's real life and one that involves teaching the concept to someone else.\n\nWrite brief, independent directions for each activity — the learner chooses and starts without the parent explaining. Each activity needs: the task in 2-3 sentences, the materials (household or free), the expected time, and the completion evidence (what the learner shows or hands in). Keep the whole board to one printable page.\n\nSet the completion rules explicitly: how many activities, any required \"must-do\" squares (use these for the non-negotiable core of {topic}), whether tic-tac-toe lines or free choice, and the deadline. Add the parent's quality-control guide: how to review completed activities quickly (the 2-minute check per activity), what to do when a learner always picks the easiest squares (the \"challenge square\" rule), and how to refresh the board next time without rebuilding from scratch.\n\nEnd with a reflection prompt the learner completes after finishing: which activity taught them the most and why — because choosing well is itself a skill worth developing.",
    "description": "Builds a choice board with varied activities across your chosen types, balanced so every path meets the objective, with completion rules and independent student directions.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., The Civil Rights Movement",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 8th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., History",
        "required": true
      },
      "rows": {
        "label": "Rows",
        "question": "How many rows?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "columns": {
        "label": "Columns",
        "question": "How many columns?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "activityTypes": {
        "label": "Activity types",
        "question": "Which activity types?",
        "type": "text",
        "placeholder": "e.g., create, analyze, perform, write",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Genius Hour Planner",
    "displayDescription": "Plans a full genius hour program — launch, pitches, research phases, stuck-protocols, showcase, and tracking.",
    "id": "curriculum-065",
    "prompt": "You are helping a parent or teacher launch a genius hour program for {gradeLevel}: {weeks} weeks, {minutes} per session. Genius hour is passion-driven inquiry — learners choose what to explore, and the adult's job is structure without control.\n\nDesign the launch sequence (first 1-2 sessions): how to introduce the concept so learners grasp the freedom AND the responsibility, the idea-generation activities (wonder walls, interest mapping, \"what bugs you about the world\" prompts), and the pitch process — each learner pitches their project idea in 2 minutes covering: my question, why I care, what I will make or find out, what I need. Provide the pitch feedback protocol: the audience asks clarifying and deepening questions, never judges. Include the proposal approval checkpoint: the criteria a project must meet (a real question, a feasible scope for {weeks} weeks, a tangible outcome) and the kind redirection script for ideas that are too big, too small, or not really inquiry.\n\nMap the research and creation phases across the {weeks} weeks with milestone check-ins: what learners should have by week 2 (question refined, sources found), the midpoint (substantial progress, first obstacles met), and week {weeks}-minus-1 (product taking shape). For each check-in give the adult's conference questions — the 5-minute conversation that keeps a project alive without taking it over.\n\nCreate the stuck protocol — the most important document in genius hour: a posted, learner-facing flowchart for \"I don't know what to do.\" Steps: re-read your question, try one new source type, ask a peer, use the \"expert interview\" option, and only then ask the adult. Include the adult's response script that coaches rather than rescues.\n\nDesign the final showcase: format, audience (beyond the class — families, other classes, community), each learner's presentation structure, and how the audience engages. Add the tracking sheet for monitoring {studentCount} learners: project, question, milestone status, stuck flags, conference notes — one row per learner, glanceable in 2 minutes.\n\nEnd with the assessment philosophy: grade the process (question quality, research depth, persistence, reflection) not the polish of the product — and say why, in language that convinces a skeptical parent.",
    "description": "Plans a passion-project genius hour program with a launch and pitch process, research and creation phases with milestone check-ins, a stuck-protocol, final showcase format, and a teacher tracking sheet.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 6th Grade",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "How many weeks?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "minutes": {
        "label": "Minutes per session",
        "question": "Minutes per session?",
        "type": "number",
        "placeholder": "e.g., 60",
        "required": true
      },
      "studentCount": {
        "label": "Student count",
        "question": "How many students?",
        "type": "number",
        "placeholder": "e.g., 28",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Makerspace Challenge",
    "displayDescription": "Designs an open-ended makerspace build challenge — challenge statement, materials, constraints, judging, and redesign reflection.",
    "id": "curriculum-066",
    "prompt": "You are helping a parent or teacher design a makerspace challenge for {gradeLevel} around the theme of {theme}. Available materials: {materials}. The spirit: constrained creativity — tight limits, wide freedom inside them.\n\nWrite the challenge statement as a mission, not an assignment: a vivid scenario with a user to serve, a problem to solve, and a reason it matters — all connected to {theme}. (\"Design a...\" beats \"Build a...\"; a client with a need beats a rubric.) Include the design brief the learners receive: the goal, the constraints, the success criteria — everything they need, nothing they do not.\n\nSet the constraints from {materials} plus explicit limits on time, size, and budget (even play budget — constraint drives ingenuity). List exactly which materials are allowed and in what quantities; scarcity is a feature, so be deliberately limited. Add 2-3 \"twist constraints\" that force creative thinking (a required moving part, a height minimum, a material that must be incorporated unconventionally).\n\nCreate judging criteria that reward creativity and iteration over polish: originality of solution, how well it serves the stated user or need, evidence of testing and redesign (require the design log — sketches, failed attempts, changes made), craftsmanship appropriate to {gradeLevel}, and the learner's ability to explain their design decisions. Provide a simple judging sheet and suggest who judges (peers with criteria, a guest, the learners themselves with reflection).\n\nBuild in the iteration cycle structurally: a mid-challenge test-and-improve session where every builder must test their creation against the criteria, document what failed, and revise — because the redesign is where the learning lives, not the first build. Add reflection prompts for the end: what would you redesign with one more day, what constraint helped you most, what failed and what it taught you.\n\nInclude setup, safety, and cleanup logistics for the materials involved, and a facilitation note: the adult's job is to protect the struggle — when to help (safety, stuck beyond the protocol) and when to walk away.",
    "description": "Designs a makerspace challenge with an engaging challenge statement, allowed materials, time/size/budget constraints, judging criteria rewarding creativity and iteration, and redesign reflection prompts.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 4th Grade",
        "required": true
      },
      "theme": {
        "label": "Theme",
        "question": "What theme?",
        "type": "text",
        "placeholder": "e.g., Bridges that hold weight",
        "required": true
      },
      "materials": {
        "label": "Materials",
        "question": "What materials are available?",
        "type": "text",
        "placeholder": "e.g., cardboard, tape, straws, string",
        "required": true
      }
    }
  },
  {
    "displayTitle": "STEM Challenge Designer",
    "displayDescription": "Creates a standards-aligned STEM challenge through the full engineering design process — brief, testing, redesign, and science connections.",
    "id": "curriculum-067",
    "prompt": "You are helping a parent or teacher design a STEM challenge for {gradeLevel} that teaches {concept} through the full engineering design process. Teams of {groupSize}. Aligned to: {standards}. The non-negotiable: the science learning must be real — this is {concept} taught through building, not building with {concept} sprinkled on top.\n\nWrite the design brief as an engineering mission: the problem, the user or context, the performance goal stated measurably (not \"build a bridge\" but \"build a bridge spanning 30cm that holds 500g\"), and the constraints (materials, time, size, budget). List the available materials precisely with quantities per team of {groupSize}.\n\nStructure the engineering design process explicitly across the sessions: Ask (clarify the problem and constraints — provide the 3 questions teams must answer before touching materials), Imagine (brainstorming protocol with the \"no judging, build on ideas\" rule and required sketching — every team produces 2+ sketched concepts), Plan (select a design and justify the choice against the constraints), Create (build with the adult circulating, not directing), Test (the testing protocol: exactly how performance is measured, with a data recording sheet — measurements must be genuinely quantitative so redesign has something to optimize), Improve (the structured redesign cycle: analyze test data, identify the failure point, change ONE variable, rebuild, retest — and document it all in the design log).\n\nWrite the connection questions that link the build back to {concept}: asked after testing, these force learners to explain their results in scientific terms (\"Your tower fell at this height — what does that tell you about center of mass?\"). Include sample strong answers so the adult recognizes real understanding. Map each phase to {standards} with the specific standard codes.\n\nAdd team roles for {groupSize} (scaled so every member has essential work), the materials management system, safety notes for the tools involved, and a showcase where teams present their design decisions and test data — engineers defend their work with evidence. End with the assessment: a simple rubric weighting the design process and science explanation over the final product's performance, because a team that tested, failed, and understood beats a team that got lucky.",
    "description": "Designs a STEM challenge teaching a concept through the engineering design process, with a design brief, constraints, materials, measurable testing protocol, redesign cycle, and connection questions linking the build to the science.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 5th Grade",
        "required": true
      },
      "concept": {
        "label": "Concept",
        "question": "Which science concept?",
        "type": "text",
        "placeholder": "e.g., Energy transfer",
        "required": true
      },
      "standards": {
        "label": "Standards",
        "question": "Which standards?",
        "type": "text",
        "placeholder": "e.g., NGSS 4-PS3",
        "required": true
      },
      "groupSize": {
        "label": "Group size",
        "question": "How many learners per build team?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Art Integration Lesson",
    "displayDescription": "Integrates visual art into an academic lesson so the art genuinely teaches the concept — with process, materials, and dual assessment.",
    "id": "curriculum-068",
    "prompt": "You are helping a parent design an art-integrated lesson connecting {artForm} to {topic} in {gradeLevel} {subject}. The iron rule: the art must TEACH the concept — the learner should understand {topic} better because they made the art, not merely decorate something they already learned. If you removed the {subject} content, the art activity should collapse; if you removed the art, the {subject} understanding should be thinner.\n\nStart by articulating the concept-to-art connection explicitly: which aspect of {topic} does {artForm} make visible, tangible, or manipulable that words alone cannot? (A cell becomes understandable when you build it; a historical narrative becomes real when you storyboard it; a fraction becomes intuitive when you mix the color ratios.) Name the mechanism — this is the lesson's thesis, and everything else serves it.\n\nThen provide the step-by-step art process: numbered steps the parent can follow with a {gradeLevel} learner, each step labeled with what the learner is DOING artistically and what they are LEARNING conceptually at that moment — the dual track made visible. List all materials with quantities and low-cost substitutions, prep time, and workspace setup.\n\nDesign the dual assessment: how the parent evaluates the art skill (craft, technique, effort — with {gradeLevel}-appropriate expectations, not art-school standards) AND separately how they evaluate the {subject} understanding the art was meant to build (the 3-4 questions or the labeling task that proves the concept landed). Keep the two judgments distinct so a beautiful-but-wrong piece gets honest feedback on both axes.\n\nAdd adaptations for the learner who says \"I can't draw\" (or sculpt, or paint): the role of reference images, templates, and structured techniques that guarantee a respectable result; the reframing language (\"we are diagramming, not decorating\"); and the choice-based alternatives that preserve the concept connection for the truly resistant.\n\nEnd with a gallery moment: how the finished work gets displayed or shared, and the artist's statement prompt where the learner explains in 3-4 sentences what their art shows about {topic} — because articulating the connection is the final consolidation of the learning.",
    "description": "Designs an art-integrated lesson where the art activity truly teaches the academic concept, with the concept-to-art connection, step-by-step art process, materials, dual assessment of art skill and content, and adaptations for reluctant artists.",
    "category": "curriculum",
    "variables": {
      "artForm": {
        "label": "Art form",
        "question": "Which art form?",
        "type": "text",
        "placeholder": "e.g., Collage",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What academic topic?",
        "type": "text",
        "placeholder": "e.g., Fraction equivalence",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 3rd Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Math",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Music Integration Lesson",
    "displayDescription": "Uses music and rhythm to teach an academic concept — with a no-instruments activity, student-created lyrics, and a retention check.",
    "id": "curriculum-069",
    "prompt": "You are helping a parent design a music-integrated lesson for {topic} in {gradeLevel} {subject}, using {musicElement} as the teaching vehicle. No instruments required — voice, body percussion, and everyday objects only.\n\nBegin with the connection thesis: exactly how does {musicElement} encode or reinforce {topic}? (Rhythm patterns embody math ratios; melody contours map to story arcs or data trends; song structure mirrors essay structure; call-and-response drills vocabulary.) State the cognitive mechanism in one paragraph — the parent should understand WHY this works, not just follow steps. The music must carry the content's structure, not just its vocabulary: a song that merely lists terms is a mnemonic trick, while a rhythm that IS the pattern teaches the concept.\n\nDesign the classroom-friendly activity step by step: the warm-up (a 3-minute rhythm or listening game that tunes ears and bodies), the core activity where learners use {musicElement} to explore {topic} (learning an existing chant then analyzing what it encodes, or building their own), and the creation task where learners compose their own lyrics, chant, or rhythm piece that correctly represents the concept — with the constraint that the music must be ACCURATE (a catchy chant with wrong content is worse than no chant). Provide one complete worked example: your own chant or lyric about {topic} with the concept annotated line by line.\n\nInclude the \"music actually helped\" assessment: a short retention check given a few days later comparing recall of the musical content versus traditionally taught content, plus the learner's self-report on what the music made easier. Be honest about the limits: name what {musicElement} teaches well about {topic} and what it cannot teach, so the parent pairs it with direct instruction rather than replacing it.\n\nAdd adaptations for the self-conscious learner (humming instead of singing, group chanting where no one is exposed, rhythm-only options) and the noise reality of a home setting (how to do this without driving the household mad).",
    "description": "Designs a music-integrated lesson using a musical element to teach or reinforce the concept, with the music-content connection, a classroom-friendly no-instruments activity, student-created lyrics or chants, and a retention assessment.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Multiplication facts",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 3rd Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Math",
        "required": true
      },
      "musicElement": {
        "label": "Music element",
        "question": "Which music element?",
        "type": "select",
        "options": [
          "Rhythm and chant",
          "Songwriting",
          "Listening analysis",
          "Movement to music",
          "Instrument patterns"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Drama Lesson Designer",
    "displayDescription": "Designs a drama-based lesson — scenario, roles, warm-up, enactment, and a debrief that connects embodiment to the objective.",
    "id": "curriculum-070",
    "prompt": "You are helping a parent design a drama-based lesson on {topic} for {gradeLevel} {subject} using this format: {dramaFormat}. The premise: the body remembers what the mind merely read — but only if the drama is structured so the embodied experience genuinely illuminates {topic}.\n\nWrite the scenario or roles fully: the situation, each role's perspective and objectives within the scene, and the tension or decision point that makes it dramatic (drama without tension is just reading aloud in costumes). Calibrate the scenario's complexity to {gradeLevel} — enough substance to think with, not so much that learners drown in plot. Provide role cards the parent can hand out: each with the character's viewpoint, 2-3 things the character knows, and one secret or complication revealed mid-scene.\n\nStructure the lesson in three phases. Warm-up (5-8 minutes): a low-risk physical or vocal activity that loosens bodies and builds ensemble — with a specific shy-student-safe variant, because the warm-up is where reluctant participants decide whether this is safe. Enactment: the scene itself, with clear start/stop mechanics, the parent's facilitator role (narrator, timekeeper, freeze-caller — never the star), and 2-3 \"freeze and think\" pause points where the action stops and learners speak their character's inner thoughts aloud. Debrief (10-15 minutes): the phase where drama becomes learning — sequenced questions moving from in-role (\"What did your character want?\") to out-of-role (\"What does this show us about {topic}?\" \"Where do we see this in real life?\"). Write the debrief questions fully and explain the bridge: how each question connects the felt experience back to the learning objective.\n\nEstablish the safety norms up front: participation choices (everyone participates, but roles vary in exposure — offer narrator, director, or designer roles for the truly reluctant), the \"step out\" signal anyone can use, no mocking rule with its enforcement, and the debrief ritual that returns everyone to themselves (name, shake off the role, one real-world connection).\n\nEnd with the assessment: what the parent listens for in the debrief as evidence that {topic} was understood — and the written follow-up (a 5-minute in-role journal entry or perspective comparison) that captures the learning for the record.",
    "description": "Designs a drama-based lesson in your chosen format with written scenarios and roles, structured warm-up, enactment, and debrief, plus safety norms for shy students.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., The Boston Tea Party",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 5th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., History",
        "required": true
      },
      "dramaFormat": {
        "label": "Drama format",
        "question": "Which drama format?",
        "type": "select",
        "options": [
          "Role-play",
          "Tableau",
          "Hot seating",
          "Readers theater",
          "Improvised scenes",
          "Mantle of the expert"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Primary Source Analysis",
    "displayDescription": "Builds a document-based primary source activity — sourcing, close reading, corroboration, and claim-evidence writing.",
    "id": "curriculum-071",
    "prompt": "You are helping a parent build a primary source analysis activity for {gradeLevel} on {historicalTopic}, working with {sourceCount} sources. The goal is historical thinking, not historical trivia: by the end, the learner should reason like a historian — sourcing, contextualizing, and corroborating — not just collect facts.\n\nSelect or fully describe {sourceCount} sources on {historicalTopic} chosen for productive tension: sources that disagree with each other, represent different perspectives (winners and losers, insiders and outsiders, official and personal), or reveal different facets of the same event. For each source provide: a full description (what it is, who made it, when, in what circumstances), where the parent can find the actual text or image (archive, collection, or search terms), its reading difficulty at {gradeLevel} level with any vocabulary pre-teaching needed, and why THIS source earned its place in the set.\n\nWrite sourcing questions for each source — the questions historians ask first: who created this and what was their position? When and why was it made — what was the author trying to accomplish? Who was the intended audience, and how might that shape the message? What is missing — whose voice is not here? Provide sample strong answers so the parent can guide without lecturing.\n\nWrite close-reading questions per source: 3-4 questions that force slow, careful reading (what does the author claim explicitly? what language reveals attitude? what can you infer that is not stated?), sequenced from literal to inferential.\n\nDesign the corroboration task: the structured comparison where the learner places the sources side by side — where they agree, where they conflict, and how to weigh them (which source is most trustworthy on which question, and why). Provide the comparison frame (a table or graphic organizer structure).\n\nEnd with a claim-evidence writing prompt: a genuine historical question about {historicalTopic} the learner answers in a paragraph or short essay using at least two sources, with a simple scoring guide covering claim clarity, evidence selection, sourcing awareness, and acknowledgment of conflicting evidence. Add the parent's facilitation note: how to run the \"historians disagree\" conversation when the learner wants one right answer.",
    "description": "Builds a primary source analysis activity with described sources, sourcing questions on author/context/purpose, per-source close-reading questions, a corroboration task, and a claim-evidence writing prompt with scoring guide.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 8th Grade",
        "required": true
      },
      "historicalTopic": {
        "label": "Historical topic",
        "question": "What historical topic?",
        "type": "text",
        "placeholder": "e.g., Westward expansion",
        "required": true
      },
      "sourceCount": {
        "label": "Source count",
        "question": "How many sources?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Timeline Builder Activity",
    "displayDescription": "Designs a timeline activity where learners sequence events, analyze cause-and-effect, and defend a what-if scenario.",
    "id": "curriculum-072",
    "prompt": "You are helping a parent design a timeline activity for {topic} at the {gradeLevel} level. Provide the {eventCount} key events to sequence — and choose them like a historian: not just the famous moments, but the turning points, the causes, and at least one event whose significance is debatable (so the timeline invites argument, not just ordering).\n\nFor each event give: the date or date range, a 2-3 sentence description written at {gradeLevel} level, why it matters to {topic} (its significance — every event on a timeline must earn its place), and one \"look closer\" detail — a vivid fact, quote, or image description that makes the event memorable. Flag the 2-3 events learners most often mis-sequence or misunderstand, with the correction.\n\nRecommend the timeline format with a genuine choice: a physical timeline (wall, string, floor — the kinesthetic value of walking the timeline, best for {gradeLevel} engagement) or a digital timeline (the tools, the multimedia advantages), with setup instructions for the recommended option and the materials needed.\n\nWrite analysis questions that move beyond sequencing into historical thinking: cause-and-effect chains (which event made which later event possible — draw the arrows), turning points (at which moment did {topic}'s story change direction, and what is the evidence), continuity and change (what stayed the same across the whole timeline despite the events), and periodization (where would you divide this timeline into eras, and why there).\n\nDesign the what-if extension: the learner selects one event, alters it plausibly, and defends the consequences in writing or discussion — with the ground rules for good counterfactual thinking (change ONE thing, follow the logic rigorously, stay plausible to the period). Provide the evaluation criteria: plausibility of the altered scenario, quality of the causal reasoning, use of timeline evidence.\n\nEnd with a parent debrief guide: the 3 questions that turn the finished timeline from a craft project into an understanding of {topic} as a story with causes.",
    "description": "Designs a timeline activity with key events to sequence, physical or digital format options, cause-and-effect analysis questions, and a what-if extension where students defend plausible consequences.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., The American Revolution",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 5th Grade",
        "required": true
      },
      "eventCount": {
        "label": "Event count",
        "question": "How many key events?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Current Events Connector",
    "displayDescription": "Creates a repeatable weekly routine connecting your topic to today's news — with analysis protocol and discussion norms.",
    "id": "curriculum-073",
    "prompt": "You are helping a parent build a weekly current-events routine that connects {topic} in {gradeLevel} {subject} to today's news — a standing appointment where the classroom meets the real world.\n\nDesign the repeatable weekly structure with named steps the family can run in 20-30 minutes: the article hunt (how the learner finds a news story connected to {topic} — which sources are appropriate for {gradeLevel}, the search strategy, and the parent's pre-screening role), the read-and-annotate pass (what to mark: connections to the unit, new vocabulary, questions raised), the analysis protocol, the connection discussion, and the 3-minute log entry where the learner records the story and its link to {topic} in an ongoing journal.\n\nWrite the 5-question analysis protocol — the same five questions every week, so analysis becomes a habit: What happened (the facts, stripped of opinion)? Which of our {topic} concepts does this connect to, and how exactly? Whose perspective does this story center, and whose is missing? What is the difference between what the article reports and what it implies? What question does this raise that we cannot answer yet? Provide a worked example applying all five questions to a sample story type related to {topic}.\n\nSpecify how the learner connects each story back to the unit's concepts: the sentence frames (\"This is an example of ___ because ___\"), the requirement to cite the specific lesson or idea, and the monthly synthesis where the learner reviews four weeks of entries and writes the pattern they see.\n\nEstablish discussion norms for controversial topics — because the news will eventually bring one: the ground rules (attack ideas, not people; distinguish facts from values; everyone gets heard), the parent's facilitator moves when the learner is upset by a story (acknowledge, contextualize, empower — plus when to simply skip a story that is too much for {gradeLevel}), and the media-literacy sidebar: how to check whether a story is trustworthy before analyzing it.\n\nEnd with the parent's curation guide: 4-5 reliable, {gradeLevel}-appropriate news sources and the 5-minute Sunday routine for queueing the week's options.",
    "description": "Creates a current-events connection routine linking the topic to today's news, with a repeatable weekly structure, a 5-question analysis protocol, unit-concept connections, and norms for controversial topics.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What unit topic?",
        "type": "text",
        "placeholder": "e.g., Government and civic participation",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 9th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Civics",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Service Learning Project",
    "displayDescription": "Plans a service learning project tying curriculum to a real community need — preparation, action, reflection, and dual assessment.",
    "id": "curriculum-074",
    "prompt": "You are helping a parent plan a service learning project for a {gradeLevel} learner that connects {subject} content on {topic} to a real community need. Community context: {communityContext}. The standard is high: this must be learning THROUGH service, not volunteering with a worksheet stapled on — the {subject} content should make the service better, and the service should make the {subject} content real.\n\nDesign the preparation phase: the learner researches the community need first — who is affected, what is already being done, what the root causes are — using interviews, observation, or local sources. Provide the research questions, the community-partner outreach template (how the family respectfully approaches an organization in {communityContext}), and the {subject}-content briefing: the specific {topic} knowledge the learner brings to the project and how it applies. Include the project proposal the learner writes: the need, the plan, the {subject} connection, and the success criteria.\n\nPlan the action phase with full logistics: the timeline, the tasks, the materials, transportation and scheduling for a family, the safety considerations specific to the work, the adult's supervision role, and the documentation the learner keeps during action (photos, logs, hours — the service record).\n\nBuild the structured reflection as the intellectual core — reflection is what converts service into learning. Provide 5-7 prompts sequenced across the project: before (\"What do you expect to find? What {topic} concepts do you expect to use?\"), during (\"What surprised you? Where did the {subject} content actually help?\"), and after (\"How did this change your understanding of {topic}? What did the community teach you that the curriculum could not? What would you do differently?\"). Include one creative reflection option beyond writing.\n\nDesign the dual assessment: a service rubric (reliability, respect for the community, quality of contribution — judged partly by the community partner's feedback) and a learning rubric (the {topic} understanding demonstrated, the quality of reflection, the connection between content and experience). End with the ethics guide: how to serve without saviorism, how to ensure the project genuinely helps rather than burdens the community partner, and the follow-up the family commits to after the project ends.",
    "description": "Plans a service learning project connecting subject content to a real community need, with a research preparation phase, action logistics and safety, structured reflection linking service to content, and assessment of both service and learning.",
    "category": "curriculum",
    "variables": {
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Science",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Water quality",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 7th Grade",
        "required": true
      },
      "communityContext": {
        "label": "Community",
        "question": "What kind of community are you in? (helps suggest realistic partners)",
        "type": "text",
        "placeholder": "e.g., suburban neighborhood, small town, urban area",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Career Connection Lesson",
    "displayDescription": "Connects a unit to real careers — research tasks, hands-on mini-tasks mirroring real work, and skills reflection.",
    "id": "curriculum-075",
    "prompt": "You are helping a parent design a career-connection lesson linking {topic} in {gradeLevel} {subject} to the real world of work. Identify {careerCount} careers genuinely connected to {topic} — not the obvious clichés, but the range: the direct practitioners, the behind-the-scenes specialists, and one surprising career the learner would never guess connects to this topic. For each career give: the job title, what the person actually does day to day (concrete tasks, not prestige descriptions), how {topic} shows up in their work specifically, the education path honestly described (including non-college routes where they exist), and one interesting reality of the job kids do not expect.\n\nDesign the research task: the learner investigates ONE of the {careerCount} careers in depth — through a real interview (provide the outreach email template and 8-10 interview questions a {gradeLevel} learner can ask), a day-in-the-life video analysis (what to watch for), or a professional-profile study. Specify the deliverable: a career profile the learner creates, with required elements.\n\nCreate the hands-on mini-task: a 30-45 minute activity where the learner DOES a simplified version of real work from one of these careers using {topic} — the junior version of the professional's actual task, not a word search about jobs. Describe it fully with materials and the \"this is what professionals actually do\" framing that gives it weight.\n\nEnd with the skills reflection: guide the learner to identify which skills this {subject} unit is building (analytical thinking, precision, communication, persistence) and map each to what employers in these careers value — with the honest note that the unit is not job training but skill building, and that the same skills transfer across many fields. Include a parent discussion guide: the 4 questions that turn \"what do you want to be?\" from a pressured interrogation into an exploratory conversation.\n\nFollow the lesson with the 'career lens' habit: for the next two weeks, whenever {topic} appears in daily life or the news, the parent names which of the {careerCount} careers would touch it and how — the engineer, the analyst, the craftsperson behind the ordinary moment. This drip-feed of career awareness does more than any single lesson to expand a {gradeLevel} learner's sense of possible futures. End the fortnight by asking the learner which career intrigued them most and why; the answer is valuable guidance for future unit choices.",
    "description": "Designs a career-connection lesson linking the topic to real careers, with a research or interview task, a hands-on mini-task mirroring professional work, and reflection on employer-valued skills the unit builds.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Statistics and data",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 8th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Math",
        "required": true
      },
      "careerCount": {
        "label": "Career count",
        "question": "How many careers to feature?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Financial Literacy Lesson",
    "displayDescription": "Teaches money skills through a realistic decision scenario — with the math, common mistakes, and a family conversation task.",
    "id": "curriculum-076",
    "prompt": "You are helping a parent teach {moneyTopic} to a {gradeLevel} learner — not as vocabulary to memorize, but as decisions to practice. Build the entire lesson around ONE realistic scenario the learner decides through, because financial literacy is a behavior, not a subject.\n\nWrite the scenario in full: a situation a {gradeLevel} learner can imagine themselves in (or will be in soon) involving {moneyTopic}, with real numbers, real trade-offs, and no obviously correct answer — the learner must weigh options, calculate consequences, and live with the trade-off. Provide the scenario brief the learner reads, the decision they must make, and the information they have (plus what they must figure out).\n\nSpecify the math and concepts the learner must apply to decide well: the calculations (worked for the parent in the answer guide), the concepts ({moneyTopic} principles in plain language), and the tools (a simple budget sheet, a comparison table, or a decision matrix you provide as a template). The learner does the math because the decision requires it — never math for math's sake.\n\nHighlight the 3-4 common mistakes people make with {moneyTopic}: the predictable traps (the minimum-payment trap, the \"I deserve it\" splurge, ignoring the fine print, confusing wants with needs in the moment) — present each as a mini case study of someone who got it wrong, with the cost quantified, because cautionary tales stick.\n\nStructure the lesson: scenario launch, individual decision work with the math, the reveal (what actually happens with each choice — run the numbers forward 6-12 months so consequences are visible), and the debrief discussion questions connecting the scenario to real life.\n\nDesign the take-home task: a real family conversation — the learner interviews a parent about a {moneyTopic} decision the family actually made (a purchase, a savings choice, a budget trade-off), with 5 interview questions provided. Include the parent's guide for answering honestly and age-appropriately. Keep everything jargon-light: define each term the first time it appears, in words a {gradeLevel} learner owns. End with the one habit this lesson is really installing, stated as a rule the learner can carry for life.",
    "description": "Designs a financial literacy lesson built around a realistic scenario the learner decides through, with the math and concepts to apply, common mistakes highlighted, and a take-home family conversation task.",
    "category": "curriculum",
    "variables": {
      "moneyTopic": {
        "label": "Money topic",
        "question": "Which money topic?",
        "type": "text",
        "placeholder": "e.g., Budgeting a paycheck",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 9th Grade",
        "required": true
      }
    }
  },
  {
    "displayTitle": "SEL Lesson Planner",
    "displayDescription": "Plans an SEL lesson woven into your subject content — check-in, content connection, realistic practice, and teacher modeling language.",
    "id": "curriculum-077",
    "prompt": "You are helping a parent plan a social-emotional learning lesson for a {gradeLevel} learner, targeting the competency of {competency}, woven into {subject} content on {topic}. The weaving matters: this is not an SEL lesson with {subject} sprinkled on top, nor a {subject} lesson with feelings bolted on — the {competency} skill should be practiced THROUGH the {subject} work.\n\nOpen with a check-in: a 5-minute opener where the learner names where they are today — provide 2-3 check-in formats suited to {gradeLevel} (feelings scale, weather report, rose-bud-thorn) and the parent's response moves (acknowledge without fixing, note what you hear, bridge into the lesson). The check-in is data: it tells the parent what emotional state the learning is landing in.\n\nBuild the content connection explicitly: how does {topic} in {subject} naturally involve {competency}? (Historical figures making hard decisions under pressure; scientists persisting through failed experiments; characters navigating conflict; mathematicians checking their work with self-discipline.) Name the connection in one paragraph — this is the lesson's thesis — and design the {subject} activity so the competency gets exercised in the course of doing real academic work.\n\nDesign the practice activity: a realistic scenario where the learner applies {competency} — a situation a {gradeLevel} learner actually faces (a group disagreement, a frustrating problem, a tempting shortcut, a peer conflict), processed through the lens of the {subject} content. Provide the scenario, the decision points, and the guided practice structure (model, try, reflect — not just \"discuss\").\n\nProvide the teacher modeling language: the exact words the parent uses to model {competency} authentically during the lesson — including naming their own real moment (\"I felt frustrated when..., so I...\"). Script 3-4 model phrases, because adults need the language as much as children do, and children detect performed vulnerability instantly.\n\nClose with a reflection: 3-4 prompts connecting the competency to the learner's own life this week, plus one tiny commitment (\"one time this week I will...\"). End with a parent note: SEL is caught more than taught — the 2-3 everyday moments this week where the parent can reinforce {competency} outside the lesson.",
    "description": "Plans a social-emotional learning lesson targeting a specific competency within your subject content, with a check-in opener, content connection, realistic scenario practice, closing reflection, and authentic teacher modeling language.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 4th Grade",
        "required": true
      },
      "competency": {
        "label": "Competency",
        "question": "Which SEL competency?",
        "type": "select",
        "options": [
          "Self-awareness",
          "Self-management",
          "Social awareness",
          "Relationship skills",
          "Responsible decision-making"
        ],
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "Which subject to weave it into?",
        "type": "text",
        "placeholder": "e.g., ELA",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "Current topic?",
        "type": "text",
        "placeholder": "e.g., Character motivations",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Substitute Plan Writer",
    "displayDescription": "Writes a foolproof substitute plan — class overview, self-contained lessons with keys, early-finisher work, and tech-failure backup.",
    "id": "curriculum-078",
    "prompt": "You are helping a teacher write a substitute plan for {gradeLevel} {subject} on {date}, covering {periods} periods. The operating assumption: the substitute has never met these students, may not know {subject} deeply, and will face at least one surprise. Make it foolproof.\n\nStart with the class overview — everything a stranger needs in the first 5 minutes: the daily schedule with exact times, the classroom map (where things are), the attention signal and core procedures (stated as the exact words and actions, not \"they know the routine\"), key students to know (the reliable helpers by name-role, e.g. \"the student who can explain the tech setup\"; medical or behavioral needs described factually with the action to take — no labels, no diagnoses in writing), and the dismissal procedure step by step.\n\nWrite {lessonCount} self-contained lessons a non-specialist can run: each with a clear objective, minute-by-minute flow, fully scripted directions (the exact words to say), all materials listed and located (\"the worksheets are in the blue tray by the door\"), and a complete answer key. The lessons should be meaningful — review, practice, or enrichment of current content — never busywork, because a wasted day costs momentum. Each lesson needs a built-in early-finisher extension so fast workers do not become disruptions.\n\nAdd the contingency section: what to do if technology fails (the no-tech version of each lesson, stated plainly), if a lesson finishes early (the backup activity with its own directions), if the class is difficult (the escalation path: who to call, where to send a student, what NOT to do), and the end-of-day note template the sub fills in (what got done, what did not, behavior notes, messages for the teacher).\n\nEnd with the teacher's prep checklist for the night before: what to print, what to lay out, what to tell the neighboring teacher. A great sub plan is a love letter to your future absent self — and to the substitute who deserves to succeed.",
    "description": "Writes a substitute teacher plan with a full class overview, self-contained lessons a non-specialist can run with answer keys, early-finisher work, and tech-failure contingencies — assuming the sub has never met the students.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 6th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Science",
        "required": true
      },
      "date": {
        "label": "Date",
        "question": "What date is the absence?",
        "type": "date",
        "required": true
      },
      "periods": {
        "label": "Periods",
        "question": "How many periods to cover?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "lessonCount": {
        "label": "Lesson count",
        "question": "How many sub lessons?",
        "type": "number",
        "placeholder": "e.g., 2",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Emergency Sub Kit",
    "displayDescription": "Builds a grab-and-go emergency sub kit — no-prep activities for any day of the year, plus a class info sheet template.",
    "id": "curriculum-079",
    "prompt": "You are helping a teacher build an emergency sub kit for {gradeLevel} {subject}: {activityCount} activities that a substitute can run with ZERO preparation, on any day of the year, having never met the class. This kit lives in a folder on the desk for the morning the teacher wakes up sick.\n\nDesign each of the {activityCount} activities to be genuinely meaningful — review and thinking, not word searches. For each activity provide: student-facing directions clear enough that the class can start with the sub just reading them aloud; all materials specified as \"already in this folder\" (everything self-contained — no \"print from the drive,\" no tech dependencies); an estimated time; and an answer key or completion check the sub can use without subject expertise. Vary the activities: a reading-and-responding task, a creative application task, a review game playable without prep, a reflective writing task, a puzzle or logic task tied to {subject} thinking — so the kit covers different days and moods.\n\nCalibrate every activity to {gradeLevel} independence: a {gradeLevel} learner must be able to do this with a stranger supervising. Include the \"if they finish early\" extension per activity and the \"if the class struggles\" simplification the sub can deploy without judgment calls.\n\nAdd the one-page class info sheet template: schedule with times, the attention signal, 2-3 reliable student helpers (by role, filled in by the teacher), medical or allergy notes placeholder (factual, action-oriented), dismissal procedure, and the neighboring teacher to ask for help. Include the rules for the sub — stated in the teacher's voice, matching classroom norms (not generic \"be good\" rules but the actual 4-5 rules of this room), plus what the sub should do in the last 10 minutes (the wrap-up routine that returns the room in order).\n\nEnd with the teacher's assembly checklist: what goes in the folder, how to keep it current (the 10-minute start-of-term refresh), and where the folder lives so a colleague can grab it if the teacher cannot even call in.",
    "description": "Builds an emergency sub kit with no-prep activities that work any time of year, each with student directions, answer keys, time estimates, a class info sheet template, and sub rules matching your norms.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 5th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., ELA",
        "required": true
      },
      "activityCount": {
        "label": "Activity count",
        "question": "How many activities?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      }
    }
  },
  {
    "displayTitle": "First Day Plan",
    "displayDescription": "Plans a first day that builds relationships, teaches essential procedures, teases the first unit, and nails the logistics.",
    "id": "curriculum-080",
    "prompt": "You are helping a teacher plan the first day of school for {gradeLevel} {subject}. The first day has three jobs — and only three: students should leave feeling known, feeling safe (they understand how the room works), and feeling curious about what is coming. Everything in the plan must serve one of those three.\n\nBuild a minute-by-minute agenda for the day. Open with relationship-building before any logistics: a welcome activity where every student is seen and named within the first 15 minutes (provide 2-3 options calibrated to {gradeLevel} — from playful introductions to meaningful share prompts), and the teacher's own authentic introduction (the 2-minute story that makes you human, with guidance on what to share and what not to).\n\nTeach the essential procedures — but only the survival set: arrival, the attention signal, materials, asking for help, dismissal. For each: the 3-minute teach (model, practice, narrate), because procedures taught on day one are procedures that hold all year. Explicitly list what NOT to teach on day one (the full syllabus, every rule, the grading policy lecture) — restraint is the plan.\n\nInclude the curiosity teaser for the first unit: {firstUnit}. Design a 15-20 minute experience — a mystery, a puzzling demo, an intriguing question, a strange artifact — that makes students NEED the unit without teaching it yet. Write it fully: the setup, the reveal, and the closing line that sends them home thinking.\n\nHandle the logistics invisibly: seating (the day-one arrangement and why), supplies (collected without chaos — the system), dismissal (rehearsed, because day-one dismissal disasters are legendary). Build in buffer time between every block — the first day always runs long.\n\nEnd with the teacher's evening reflection: 5 questions to answer that night (who did I not connect with? which procedure needs reteaching tomorrow? what surprised me?), turning day one into intelligence for day two. Add the \"night before\" checklist: room setup, materials laid out, and the mindset note — calm confidence is the real lesson plan.",
    "description": "Plans the first day of school with a minute-by-minute agenda balancing relationship-building, essential procedures taught and practiced, a curiosity-sparking teaser for the first unit, and full logistics.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 7th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Math",
        "required": true
      },
      "firstUnit": {
        "label": "First unit",
        "question": "What is the first unit?",
        "type": "text",
        "placeholder": "e.g., Ratios and proportional reasoning",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Review Game Designer",
    "displayDescription": "Designs a classroom review game with fair rules, full participation scoring, leveled questions, and a tiebreaker round.",
    "id": "curriculum-081",
    "prompt": "You are helping a parent or teacher design a review game for {topic} in {gradeLevel} {subject}, fitting a {minutes}-minute class. The game format to use: {gameFormat}. The design challenge: review games easily become \"the three fastest kids answer while everyone else watches\" — engineer against that from the start.\n\nWrite the complete rules: how teams are formed (mixed-ability, and how to form them in 2 minutes), turn structure, how questions are drawn or assigned, and scoring that rewards thinking over speed — build in mechanisms so every student must participate (all-play rounds where every team answers simultaneously, individual accountability within teams, catch-up mechanics that keep trailing teams in the game). Specify what happens on wrong answers (does the other team steal? does the team get a lifeline?) and how you prevent the game from rewarding guessing.\n\nProvide {questionCount} review questions with answers, deliberately varied in difficulty: roughly a third accessible (every team can score — keeps morale), a third on-level (the core {topic} content that must be reviewed), a third stretch (separates deep understanding, worth more points). Tag each question with its difficulty and the sub-topic it covers, so the parent can see the coverage at a glance. Include at least two questions targeting the classic misconceptions of {topic} — the review is most valuable where understanding is most fragile.\n\nAdd a tiebreaker round: 2-3 sudden-death questions escalating in difficulty, with the tiebreak procedure stated (no arguments at the end — decide now how ties resolve).\n\nStructure the {minutes} minutes: setup and team formation, rules explanation (under 3 minutes — demonstrate, do not lecture), gameplay with a visible scoreboard, and a 5-minute cool-down where the class revisits the 2-3 most-missed questions as pure teaching (the game exposed the gaps; now close them). List materials needed — keep them minimal — and the room setup.\n\nEnd with the debrief question for the adult: did the game reveal that {topic} is learned, or just that some kids are fast? — and what to reteach tomorrow based on the scoreboard patterns.",
    "description": "Designs a review game for your topic and time limit with fair rules and scoring so every student participates, leveled review questions with answers, and a tiebreaker round.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., Cell organelles",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 7th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Science",
        "required": true
      },
      "minutes": {
        "label": "Minutes",
        "question": "How many minutes?",
        "type": "number",
        "placeholder": "e.g., 45",
        "required": true
      },
      "gameFormat": {
        "label": "Game format",
        "question": "Which game format?",
        "type": "select",
        "options": [
          "Jeopardy-style",
          "Team tournament",
          "Board race",
          "Mystery puzzle",
          "Quiz show buzzer",
          "Escape challenge"
        ],
        "required": true
      },
      "questionCount": {
        "label": "Question count",
        "question": "How many review questions?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Classroom Escape Room",
    "displayDescription": "Builds a classroom escape room — story premise, content-driven puzzles, hint system, and a learning debrief.",
    "id": "curriculum-082",
    "prompt": "You are helping a parent or teacher build a classroom escape room on {topic} for {gradeLevel} {subject} with {puzzleCount} puzzles. The golden rule: every puzzle's solution must REQUIRE applying {topic} — a puzzle solvable by random guessing or pure logic with no content is decoration, not learning.\n\nCreate the story premise: a 2-3 paragraph narrative that gives the escape urgency and meaning, connected to {topic} (a lab lockdown, a historical mystery, a coded message from a scientist). Write the briefing script the adult reads to launch it — dramatic, clear, and establishing the rules in under 3 minutes.\n\nDesign the {puzzleCount} puzzles in a deliberate sequence: each puzzle states the content it tests, the materials or setup needed (favor printable puzzles, combination locks or lock-box alternatives, envelopes, and QR-free low-tech solutions — include a no-budget version of every lock mechanism), the exact steps to solve it (so the adult can verify and troubleshoot), and the code, key, or checkpoint it yields. Sequence them so solving puzzle N provides what puzzle N+1 needs — a true chain, or a hub-and-spoke if the group is large. Calibrate difficulty to {gradeLevel}: challenging enough to require thought, solvable within the time with the hint system.\n\nBuild the hint system with three tiers per puzzle: Tier 1 nudges attention (\"re-read the second paragraph\"), Tier 2 narrows the approach (\"the dates matter — put them in order\"), Tier 3 nearly gives it away — and the costing rule (each hint costs time or points) so teams use hints strategically rather than as a first resort. Include the adult's hint-delivery script: hints guide, never give.\n\nSet the logistics: total time, team size and roles within teams, the room setup map, what happens when a team finishes early (the bonus challenge), and what happens if NOBODY finishes (the graceful ending that still debriefs the learning).\n\nDesign the debrief as the real lesson: for each puzzle, the content question it embodied, what the solution demonstrated about {topic}, and the 2-3 synthesis questions connecting the whole experience to the unit's objectives. End with the individual exit ticket: one thing about {topic} the escape room made click.",
    "description": "Builds an academic escape room with a story premise, puzzles whose solutions require applying the content, lock codes or checkpoints, a non-spoiling hint system, and a debrief connecting each puzzle to the objective.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic?",
        "type": "text",
        "placeholder": "e.g., The periodic table",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 8th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Science",
        "required": true
      },
      "puzzleCount": {
        "label": "Puzzle count",
        "question": "How many puzzles?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Mock Trial Planner",
    "displayDescription": "Plans a full mock trial — courtroom roles, evidence packet, step-by-step procedure, and jury deliberation guide.",
    "id": "curriculum-083",
    "prompt": "You are helping a parent or teacher plan a mock trial for {gradeLevel} on {caseTopic}, with a class of {studentCount}. The case must be age-appropriate, genuinely arguable (the evidence must support BOTH sides — a rigged case teaches nothing), and rich enough in {caseTopic} content that preparing for trial IS learning the unit.\n\nAssign courtroom roles scaled for {studentCount}: the essential roles (judge, prosecution and defense attorneys, witnesses for both sides, jury) plus meaningful roles for everyone else (bailiff, court reporter, legal analysts, press corps with reporting assignments — no spectators). For each role define the responsibilities, the preparation required, and what a strong performance looks like. Provide a role-assignment strategy that matches roles to learners' strengths while stretching them.\n\nWrite the simplified evidence packet: the case background (a 1-page narrative establishing facts both sides agree on), 4-6 exhibits (documents, diagrams, witness statements, data — described fully so the parent can produce them), the stipulated facts vs. the disputed facts (clearly separated — the trial lives in the disputed zone), and the applicable \"law\" or decision standard simplified for {gradeLevel} (what the jury must decide and by what standard).\n\nOutline the trial procedure step by step with time allocations: opening statements, direct examinations, cross-examinations, closing statements, jury instructions, deliberation, verdict. Provide the opening and closing statement frameworks — the structural templates (theme, roadmap, evidence preview; summary, rebuttal, final appeal) with sentence starters, NOT scripts to read, because the thinking must be the learners'.\n\nCreate the jury deliberation guide: the verdict criteria stated precisely, the deliberation questions that structure discussion (what do we know, what is disputed, which witnesses were credible and why, does the evidence meet the standard), the foreperson's role, and how to handle a hung jury (the instructional value of disagreement).\n\nAdd the preparation timeline (how many sessions to build the case knowledge before trial day), the teacher-as-judge guide (when to intervene, how to rule on objections at {gradeLevel} level), and the post-verdict debrief connecting the trial back to {caseTopic}'s real content — because the trial is the vehicle, not the destination.",
    "description": "Plans a classroom mock trial with assigned courtroom roles, a simplified evidence packet with exhibits, step-by-step trial procedure, statement frameworks, and a jury deliberation guide with verdict criteria.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 8th Grade",
        "required": true
      },
      "caseTopic": {
        "label": "Case topic",
        "question": "What is the case about?",
        "type": "text",
        "placeholder": "e.g., A historical figure on trial",
        "required": true
      },
      "studentCount": {
        "label": "Student count",
        "question": "How many students?",
        "type": "number",
        "placeholder": "e.g., 28",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Science Fair Guide",
    "displayDescription": "Guides a science fair project from testable question to display board — with a backward timeline and judge-interview prep.",
    "id": "curriculum-084",
    "prompt": "You are helping a parent guide a {gradeLevel} learner through a science fair project on {topicArea}. Experience level: {experienceLevel}. The fair date: {fairDate}. Calibrate your guidance to the experience level — a first-timer needs the full scaffold and confidence-building; a returner needs the push toward genuine experimental sophistication.\n\nWalk through the scientific method as a project, not a poster: choosing a testable question (provide the question formula — \"How does [independent variable] affect [dependent variable]?\" — plus 5-6 sample questions about {topicArea} at {gradeLevel} level and the test that separates a testable question from a research topic); writing a real hypothesis (prediction WITH reasoning, and what to do when the learner has no basis for reasoning yet); designing a fair test (identify variables explicitly — what changes, what is measured, what stays the same — with the control condition explained in plain language); collecting data (how many trials, the data table template, what counts as a valid measurement); and graphing results (which graph type for this data, labeled axes, what the graph should show).\n\nThen the display board, section by section: title, question, hypothesis, variables, procedure, data tables, graph, results, conclusion (did the data support the hypothesis — and the critical lesson that a \"wrong\" hypothesis is still good science), and the \"what I would do differently\" reflection judges love. Describe what goes on each panel and what strong vs. weak looks like.\n\nBuild the timeline BACKWARD from {fairDate}: the milestones (question approved, experiment complete, data analyzed, board built, practice presentation done) with dates, buffer days included, and the weekly check-in questions the parent asks. Adjust the timeline's intensity for {experienceLevel}.\n\nAdd judge-interview prep: the 8 questions judges always ask, strong answer frames for each, the 2-minute project pitch the learner rehearses, and how to handle \"I don't know\" (the honest, impressive version). End with the parent's role contract: the specific tasks parents MAY do (drive, fund, supervise safety) and must NOT do (the experiment, the board, the thinking) — signed in spirit, because everyone knows how this goes.",
    "description": "Creates a step-by-step science fair guide from choosing a testable question through hypothesis, fair-test design, data collection and graphing, display board sections, a backward-planned timeline, and judge interview tips.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 6th Grade",
        "required": true
      },
      "topicArea": {
        "label": "Topic area",
        "question": "What topic area?",
        "type": "text",
        "placeholder": "e.g., Plant growth",
        "required": true
      },
      "fairDate": {
        "label": "Fair date",
        "question": "When is the science fair?",
        "type": "date",
        "required": true
      },
      "experienceLevel": {
        "label": "Experience",
        "question": "Has your learner done a science fair before?",
        "type": "select",
        "options": [
          "First science fair",
          "Has done one before"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Book Club Planner",
    "displayDescription": "Plans a book club unit — reading schedule, rotating roles, discussion arcs from comprehension to analysis, and creative responses.",
    "id": "curriculum-085",
    "prompt": "You are helping a parent or teacher plan a book club unit for {gradeLevel} around the book: {bookTitle}, running {weeks} weeks with {sessionCount} discussion sessions. The goal is a reading experience learners remember — discussion that feels like a great conversation, not a quiz with snacks.\n\nDesign the reading schedule across {weeks} weeks: break {bookTitle} into reading chunks at natural narrative breaks (not arbitrary page counts), calibrate chunk size to {gradeLevel} stamina, and mark the 2-3 \"do not rush\" sections where the book's richest material lives. Include the pre-reading launch: the 20-minute session that sells the book (the hook, the context, the first chapter read aloud) and sets the reading contract.\n\nAssign rotating discussion roles so every session has structure: 4-5 roles (discussion director with prepared questions, passage picker with significant excerpts, connector linking the book to life or other texts, word wizard with striking language, illustrator or scene-sketch artist) — each with a preparation template the learner completes while reading. Rotate roles every session so everyone practices every thinking move.\n\nWrite the {sessionCount} session discussion arcs, sequenced from comprehension to analysis: early sessions establish story and character (who, what, where — with the passages that matter); middle sessions probe motive, theme, and craft (why did the character..., what is the author doing with...); late sessions demand judgment and connection (was the character right? what does this say about our world?). For each session provide 5-7 questions with the key passages they reference and the follow-up probes that deepen thin answers.\n\nAdd creative response options beyond essays: the {gradeLevel}-appropriate choices (character playlists, alternate endings, letters between characters, story maps, dramatic scenes) with brief rubrics. Build the accountability system for falling behind: the buddy check-in, the catch-up plan that does not punish (audiobook + key chapters), and the spoiler-free discussion norms that protect readers who are on pace.\n\nEnd with the culminating celebration: a final session format worthy of the book (a themed discussion, a creative showcase, a \"book awards\" ceremony) that honors the reading journey.",
    "description": "Plans a classroom book club with a paced reading schedule, rotating discussion roles, session discussion arcs moving from comprehension to analysis, creative response options, and accountability for falling behind.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 5th Grade",
        "required": true
      },
      "bookTitle": {
        "label": "Book title",
        "question": "Which book?",
        "type": "text",
        "placeholder": "e.g., Wonder",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "How many weeks?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "sessionCount": {
        "label": "Session count",
        "question": "How many discussion sessions?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Poetry Unit Designer",
    "displayDescription": "Designs a poetry unit sequencing forms from accessible to complex — mentor poems, writing scaffolds, craft mini-lessons, and a finale.",
    "id": "curriculum-086",
    "prompt": "You are helping a parent or teacher design a poetry unit for {gradeLevel} spanning {weeks} weeks. The mission: move learners from \"poetry is boring/confusing\" to writing poems they are proud of — through immersion, imitation, and finally invention.\n\nSequence {formCount} poetic forms from accessible to complex across the {weeks} weeks. Start where {gradeLevel} learners can succeed immediately (list poems, odes to ordinary things, concrete forms with clear patterns), build through forms demanding more craft (metaphor-driven poems, persona poems, structured forms), and end with free choice or the most challenging form. For each form provide: a mentor poem (a real, excellent poem — name it — that shows the form at its best, chosen for {gradeLevel} resonance), a guided writing scaffold (the frame, word bank, or step-by-step imitation process that lets a beginner produce a real poem in one session), and the \"what makes this form sing\" note — the craft secret the parent points out in the mentor poem.\n\nBuild in daily mini-lessons on craft across the unit: imagery (show don't tell, with the 2-minute sensory exercise), line breaks (where the breath goes, with the same sentence broken three ways), sound (alliteration, rhyme, rhythm — heard before analyzed), metaphor and simile (the \"is\" vs. \"like\" upgrade), and revision (the 3-pass method: cut, sharpen, sound-check). Each mini-lesson: 10 minutes, one mentor example, one try-it task.\n\nDesign the workshop rhythm: the weekly cycle of immersion (reading poems), imitation (scaffolded writing), sharing (the brave 5 minutes — with the safety norms that make sharing possible), and revision. Include the reluctant-poet strategies: the permission slips (\"poems don't have to rhyme,\" \"prose poems count\"), the low-floor entry points, and what to do with the learner who writes three lines and stops.\n\nEnd with the celebration: a poetry performance (the open-mic format, audience norms, how to introduce a poem) or publication (the class anthology — layout, cover, author bios), because poems need an audience to become real. Provide the parent's anthology-assembly guide and the reflection prompt where each learner names what kind of poet they discovered they are.",
    "description": "Designs a multi-week poetry unit sequencing poetic forms from accessible to complex, each with a mentor poem and writing scaffold, daily craft mini-lessons, and a performance or publication celebration.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 4th Grade",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "How many weeks?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "formCount": {
        "label": "Form count",
        "question": "How many poetic forms?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Grammar Mini-Lessons",
    "displayDescription": "Creates bite-size grammar mini-lessons tied to student writing — mentor sentences, explicit rules, practice, and application.",
    "id": "curriculum-087",
    "prompt": "You are helping a parent create {count} grammar mini-lessons for {gradeLevel}, targeting these topics: {grammarTopics}. The philosophy: grammar serves writing — every mini-lesson must end with the learner's own writing measurably better, or it was just grammar trivia.\n\nOrder the {count} lessons from most to least impactful on writing quality: sentence boundaries and fragments first (nothing matters if sentences do not work), then the errors that most damage clarity and credibility at {gradeLevel}, down to the polish items. Justify the order briefly so the parent understands the triage.\n\nStructure each 10-minute mini-lesson identically: the hook (60 seconds) — a mentor sentence from real writing (literature, the learner's own past work, or a vivid example you provide) where the target concept shines; name what you notice before naming the rule. The explicit teaching (3 minutes) — the rule stated plainly in {gradeLevel} language, with 2-3 clear examples AND one non-example showing the boundary (learners need to see where the rule stops). The guided practice (3 minutes) — 3-4 quick items the learner does with the parent coaching in real time, engineered around the common error patterns for this topic. The application (4 minutes) — the learner finds or fixes the concept in their OWN writing: revising yesterday's paragraph, editing a draft, or writing 3 new sentences using the concept correctly. The application step is non-negotiable — it is where grammar becomes writing skill.\n\nFor each lesson name the #1 error pattern {gradeLevel} learners make with this topic and the 30-second correction script. Provide all practice items with an answer key.\n\nEnd with the integration plan: how these mini-lessons attach to the learner's real writing work (the \"grammar lens\" revision pass on every draft), the tracking sheet (concept, date taught, seen in writing? — because taught is not learned until it appears unprompted), and the rule for when to stop mini-lessons and just let the learner write.",
    "description": "Creates 10-minute grammar mini-lessons ordered by impact on writing quality, each with a mentor-sentence hook, explicit rule teaching, guided practice, and an application task in the student's own writing.",
    "category": "curriculum",
    "variables": {
      "count": {
        "label": "Count",
        "question": "How many mini-lessons?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 6th Grade",
        "required": true
      },
      "grammarTopics": {
        "label": "Grammar topics",
        "question": "Which grammar topics?",
        "type": "text",
        "placeholder": "e.g., commas, subject-verb agreement, apostrophes",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Research Paper Scaffold",
    "displayDescription": "Scaffolds a research paper into phased weeks — question to citation — with checkpoints, mini-lessons, and plagiarism prevention.",
    "id": "curriculum-088",
    "prompt": "You are helping a parent scaffold a research paper on {topic} for {gradeLevel} {subject} across {weeks} weeks. The architecture: break the monster into phases, each with a visible deliverable — because \"write a research paper\" paralyzes, but \"this week, produce an annotated bibliography of 5 sources\" mobilizes.\n\nPhase 1 — Question: the learner narrows {topic} to a genuine research question (provide the narrowing funnel: topic → aspect → question, with 3-4 sample questions at {gradeLevel} level and the test that separates a researchable question from a Google-able fact). Deliverable: the approved question plus a one-paragraph \"why this question matters.\"\n\nPhase 2 — Sources: finding and evaluating. Teach source evaluation explicitly (the 4-question credibility check calibrated to {gradeLevel}), provide the source log template, and set the source requirements (how many, what types — and why each type matters). Mini-lesson: how to skim for relevance in 3 minutes.\n\nPhase 3 — Notes: the note-taking system that prevents plagiarism structurally — the two-column method (source notes on one side, MY thinking on the other, color-coded or labeled), the \"no copying full sentences\" rule, and the paraphrase practice exercise with examples of too-close vs. genuinely restated.\n\nPhase 4 — Outline: thesis plus structured evidence. Provide the outline template, the thesis workshop (3 sample thesis directions for this paper's likely questions), and the rule that every body paragraph's claim must connect to the thesis.\n\nPhase 5 — Draft: the writing sprint with permission to write badly (the \"zero draft\" mindset), section by section, with the parent's role defined as coach not editor.\n\nPhase 6 — Revise: the revision checklist (global before local — structure before commas), the read-aloud test, and one peer or parent feedback round with the specific feedback form.\n\nPhase 7 — Cite: the citation format taught through examples (not rules memorization), the bibliography builder template, and the final polish checklist.\n\nFor each phase: the student task, the checkpoint deliverable with its due date across the {weeks} weeks, the 10-minute mini-lesson the parent teaches, and the tool or template provided. Build in the plagiarism-prevention approach throughout (process checkpoints make copy-paste nearly impossible — explain why to the parent). End with the final rubric focus: the 4-5 criteria the paper is actually graded on, shared with the learner from day one.",
    "description": "Scaffolds a research paper across weeks in phases from question to citation, each with student tasks, checkpoint deliverables, teacher mini-lessons, tools and templates, plus plagiarism prevention and rubric focus.",
    "category": "curriculum",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What research topic?",
        "type": "text",
        "placeholder": "e.g., Renewable energy solutions",
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 10th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., English",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "How many weeks?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Media Literacy Lesson",
    "displayDescription": "Teaches media literacy through real examples — analysis framework, contrasting cases, ethical creation task, and discussion norms.",
    "id": "curriculum-089",
    "prompt": "You are helping a parent design a media literacy lesson for {gradeLevel} on {mediaTopic}. The goal is not cynicism (\"everything is manipulation\") but skilled citizenship: a learner who can take apart a media message, see how it was built to influence them, and then build responsibly themselves.\n\nOpen with a hook using a REAL, current example of {mediaTopic} — something a {gradeLevel} learner has actually encountered (an ad, an influencer post, a viral video, a news graphic). Describe the example fully (since you cannot link it, describe it precisely enough for the parent to find a current equivalent), what makes it gripping, and the opening question that cracks it open (\"What is this trying to make you feel — and how?\").\n\nTeach one clear analysis framework the learner can reuse forever: the 5 key questions of media literacy (who created this and why? what techniques attract attention? what lifestyles or values are shown — and omitted? how might different people interpret this? who benefits if I believe this?) — each question explained with a {mediaTopic} example at {gradeLevel} level, plus a one-page reference card the learner keeps.\n\nGuide the analysis of {exampleCount} contrasting examples: choose them to disagree with each other (two ads for similar products with opposite tactics, two news graphics framing the same data differently, an influencer post vs. its sponsored disclosure). For each: the guided walkthrough (apply the 5 questions step by step with sample answers), then the learner's independent analysis with the same frame. The contrast is the teacher — difference makes technique visible.\n\nThen the creation task: the learner PRODUCES their own media message about a {gradeLevel}-appropriate topic USING the techniques they analyzed — but ethically (disclose persuasion intent, no deception, no manipulation of vulnerable audiences). Provide the creation brief, the technique checklist, and the reflection: \"How did it feel to use these techniques? What does that teach you about being on the receiving end?\"\n\nAdd discussion norms for sensitive content ({mediaTopic} may touch on body image, politics, or identity): the ground rules, the parent's moves if the learner is distressed, and the line between analyzing a message and endorsing it. End with the ongoing practice: the 2-minute \"ad autopsy\" the family can do anytime — keeping the skill alive beyond the lesson.",
    "description": "Designs a media literacy lesson with a real-example hook, a teachable analysis framework, guided analysis of contrasting examples, an ethical media-creation task, and norms for sensitive content.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 8th Grade",
        "required": true
      },
      "mediaTopic": {
        "label": "Media topic",
        "question": "Which media topic?",
        "type": "text",
        "placeholder": "e.g., Identifying bias in news headlines",
        "required": true
      },
      "exampleCount": {
        "label": "Example count",
        "question": "How many contrasting examples?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Digital Citizenship Lesson",
    "displayDescription": "Teaches digital citizenship through realistic scenarios and decision practice — empowering, never fear-based.",
    "id": "curriculum-090",
    "prompt": "You are helping a parent design a digital citizenship lesson for {gradeLevel} on {citizenshipTopic}. Tone requirement: empowering, never fear-based. The learner should leave feeling capable and savvy — not scared of the internet. Fear produces secrecy; competence produces good decisions.\n\nOpen with a realistic scenario the learner discusses: write a vivid, {gradeLevel}-authentic situation involving {citizenshipTopic} — the group chat dilemma, the friend's photo, the comment thread, the app permission request — with characters, dialogue snippets, and a genuine decision point (no obvious right answer, or the lesson is a lecture). Provide the discussion questions that unpack it: what are the characters feeling, what are the stakes, what options do they actually have, what would a savvy person do.\n\nTeach the key principles behind {citizenshipTopic} as tools, not rules: 3-4 principles stated as \"smart digital citizens...\" (think before posting because screenshots are forever — but framed as reputation ownership, not threat; protect private information as boundary-setting, not paranoia; treat people with the same respect online as off, because the screen hides the impact). For each principle: the one-sentence version, the why in {gradeLevel} language, and a concrete example.\n\nRun the decision-practice activity: {scenarioCount} dilemmas in small groups (or parent-child pairs), each a 5-minute scenario with 2-3 plausible actions to choose between. For each dilemma provide the scenario, the options, and the debrief — what each choice leads to, and the principle it exercises. The practice must feel real: use the platforms and situations {gradeLevel} learners actually inhabit.\n\nClose with the commitment: a personal pledge the learner writes in their own words (provide the pledge frame, not the pledge — it must be theirs), OR a family conversation task where the learner teaches the parent one thing from the lesson (the teaching cements the learning, and the parent learns the learner's digital world).\n\nAdd the parent's ongoing role: the 3 conversation habits that keep digital citizenship alive (the curious question instead of the spyware, the \"show me something interesting\" invitation, the calm response when the learner reports a problem — because punishment for reporting guarantees silence next time). End with resources: where the family turns when a real {citizenshipTopic} problem occurs.",
    "description": "Designs a digital citizenship lesson opening with a realistic scenario, teaching key principles, running small-group decision practice on dilemmas, and closing with a personal pledge or family conversation.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 5th Grade",
        "required": true
      },
      "citizenshipTopic": {
        "label": "Topic",
        "question": "Which topic?",
        "type": "text",
        "placeholder": "e.g., Kind communication online",
        "required": true
      },
      "scenarioCount": {
        "label": "Scenario count",
        "question": "How many dilemma scenarios?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Morning Work Designer",
    "displayDescription": "Designs a week of independent morning work — spiral review, predictable format, self-checking keys, and fresh daily variety.",
    "id": "curriculum-091",
    "prompt": "You are helping a parent or teacher design one week (5 days) of morning work for {gradeLevel} {subject}: independent work learners complete in the first {minutes} minutes of the session, spiraling previously taught skills on these topics: {topics}.\n\nEstablish the week's architecture first: a predictable daily format the learner masters on Monday and then runs independently Tuesday through Friday — because morning work must need zero directions after day one. Design the format as 3-4 short sections (e.g., 2 fluency items, 1 application problem, 1 review-from-last-week item, 1 \"stretch or reflect\" closer), with the section types constant but the content and the surface format varying daily to keep it fresh.\n\nFor each of the 5 days write the complete set: the specific items targeting {topics} in spiral rotation (no topic appears two days running; every topic appears at least twice across the week — spaced retrieval is the entire point), calibrated so a {gradeLevel} learner finishes in {minutes} minutes working independently. Include the answer key for fast self-checking: answers plus the one-line method reminder per item so the learner can self-correct rather than just self-score.\n\nVary the format across the week deliberately while keeping the structure predictable: Monday might be straightforward practice, Tuesday a matching or sorting task, Wednesday an error-find (\"the teacher made 3 mistakes — find them\"), Thursday a visual or diagram task, Friday a mini-challenge plus week reflection. Same skeleton, different skin.\n\nAdd the implementation guide: the Monday launch (how to teach the format in 10 minutes), the self-checking routine (when and how learners check — immediately after finishing, with the \"circle what you missed and write why\" step that converts checking into learning), what the adult does during morning work (the 5-minute circulation that spots who is struggling before the lesson begins), and the data use: how Friday's patterns inform next week's morning work topics.\n\nEnd with the design rules that keep morning work purposeful: never new content (morning work reviews; it does not teach), never longer than {minutes} minutes (it is the on-ramp, not the lesson), and the monthly refresh — how to rotate {topics} out as mastery solidifies and new ones in as the curriculum advances.",
    "description": "Designs a week of morning work for independent completion in the first minutes of class, with daily spiral review of previously taught skills, a predictable learn-once format, fast self-checking answer keys, and varied formats across the week.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 3rd Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Math",
        "required": true
      },
      "minutes": {
        "label": "Minutes",
        "question": "How many minutes of morning work?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      },
      "topics": {
        "label": "Topics",
        "question": "Which skills should it spiral-review?",
        "type": "text",
        "placeholder": "e.g., place value, addition, telling time",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Homework Policy Builder",
    "displayDescription": "Drafts a research-informed homework policy — purpose, time limits, late-work procedures, parent guidance, and exceptions.",
    "id": "curriculum-092",
    "prompt": "You are helping a parent or teacher draft a homework policy for {gradeLevel} {subject} — one that is defensible, humane, and actually followed. Ground it in what research says about homework effectiveness (which you should summarize honestly in one paragraph for the policy's preamble: the diminishing returns, the age gradient — less value in early grades — and what the effective homework studies actually show works).\n\nDefine the purpose of homework in this class in one clear statement — and then enforce it: every assignment type the policy allows must serve that purpose. Name the 3-4 legitimate homework purposes (practice of a learned skill, preparation for tomorrow, extension for the curious, family-involved reflection) and explicitly ban the illegitimate ones (new content taught by worksheet, busywork, punishment homework).\n\nSet nightly time limits calibrated to {gradeLevel} (state the number and the research basis), with the \"stop rule\": if homework exceeds the limit, the learner stops and the parent writes a note — no penalty. Define what counts as meaningful vs. busywork with concrete examples from {subject} (meaningful: 10 targeted problems on today's skill; busywork: 40 identical problems, coloring a map with no analysis).\n\nWrite the late-work and missing-work procedures: the grace system (how many grace passes per term and how they work), the late penalty structure (or the no-penalty-with-plan alternative — present the trade-offs honestly and recommend one), the missing-work recovery process (the 48-hour plan, not the zero-and-move-on), and how chronic missing work triggers a conversation rather than just a grade.\n\nDefine the parent's role: 4-5 specific ways to help without doing the work (the homework spot, the check-in question, what to do when the child is stuck for 10 minutes, when to email the teacher instead of pushing through), stated warmly but firmly — the policy must protect the parent-child relationship from homework wars.\n\nAddress the exceptions: {exceptionCases} — write the specific accommodations for each (not \"exceptions will be made\" but what actually happens). End with the policy in two formats: the full version for the handbook and the one-page family-friendly version, plus the annual review question: is this policy producing learning or just compliance?",
    "description": "Drafts a homework policy grounded in research on effectiveness, defining homework's purpose, nightly time limits, meaningful vs. busywork standards, late and missing work procedures, parent support guidance, and exception cases.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 7th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Math",
        "required": true
      },
      "exceptionCases": {
        "label": "Exceptions",
        "question": "Which exception cases should it address?",
        "type": "text",
        "placeholder": "e.g., absences, IEP accommodations, weekends",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Class Newsletter Writer",
    "displayDescription": "Drafts a warm, skimmable classroom newsletter — learning highlights, what's next, shout-outs, dates, and home support.",
    "id": "curriculum-093",
    "prompt": "You are helping a teacher draft a {frequency} classroom newsletter for {gradeLevel}, covering {timePeriod}. The reader is a busy parent skimming on a phone — design for the skim: clear headings, short sections, warm tone, zero jargon, readable in under 3 minutes.\n\nStructure the newsletter in six sections. Opening (2-3 sentences): a genuine, specific moment from {timePeriod} — something real that happened in the room, not \"what a wonderful month!\" Learnings: what students learned, translated into parent-friendly language — state each as what the child can now DO (\"your child can now...\"), 3-4 items max, each one line. Coming next: what is ahead in plain terms plus anything the parent needs to prepare (materials, conversations, calendar holds) — this section prevents 90% of parent emails. Student highlights: {highlightCount} shout-outs — but write them as effort-and-growth celebrations (\"Maya revised her story three times until the ending landed\") not just achievement announcements, and rotate who gets featured across issues so every child appears over time. Important dates: the clean list — date, event, action needed (if any). Home support: ONE concrete way families can support learning this period — a question to ask, a 10-minute activity, a thing to notice — specific enough to do tonight, small enough to actually happen.\n\nWrite the entire draft in final copy: headlines, body text, and a warm sign-off — not an outline the teacher must finish. Keep sentences short, cut every education acronym (or translate it on first use), and read it aloud mentally for warmth: this newsletter is a relationship document disguised as an information document.\n\nAdd the teacher's production notes at the end (not part of the newsletter): the 20-minute assembly workflow, where to source the highlight material during {timePeriod} (the running note file habit), the photo-permission reminder, and the consistency rule — a {frequency} newsletter ships on schedule even when it is short, because reliability builds more trust than length.",
    "description": "Drafts a classroom newsletter covering the time period with parent-friendly learning summaries, upcoming content, student highlights, important dates, and one concrete way families can support learning at home.",
    "category": "curriculum",
    "variables": {
      "frequency": {
        "label": "Frequency",
        "question": "How often is the newsletter?",
        "type": "select",
        "options": [
          "Weekly",
          "Biweekly",
          "Monthly",
          "Quarterly"
        ],
        "required": true
      },
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 2nd Grade",
        "required": true
      },
      "timePeriod": {
        "label": "Time period",
        "question": "Which period does it cover?",
        "type": "text",
        "placeholder": "e.g., October 1-15",
        "required": true
      },
      "highlightCount": {
        "label": "Highlights",
        "question": "How many student highlights?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Conferencing Planner",
    "displayDescription": "Plans parent-teacher conferences — structure, talking-point templates, jargon-free data, action plans, and difficult conversations.",
    "id": "curriculum-094",
    "prompt": "You are helping a teacher plan parent-teacher conferences for a {gradeLevel} class, with {minutes} minutes per family. {minutes} minutes is short — so the plan must make every minute count while keeping the human connection central. Families should leave feeling like partners, not defendants.\n\nDesign the conference structure as timed blocks: the opening (2 minutes) — genuine welcome, one specific positive observation about the child (prepared in advance, never generic), and the agenda frame (\"I'd love to share strengths, one growth area, and our plan — and hear your perspective\"). Strengths (3-4 minutes) — 2-3 specific strengths with EVIDENCE (the work sample, the observed moment — \"here is what she did\" beats \"she's great\"). Growth area (3-4 minutes) — ONE priority growth area (not a list — a list overwhelms and nothing gets done), framed as \"where we are headed next\" with the plan already sketched. Family perspective (3 minutes) — the questions that invite partnership (\"What are you seeing at home?\" \"What motivates him?\"). Action plan (2 minutes) — the written one-pager the family takes home: the goal, what the school will do, what the family can do (2-3 specific, small actions), and when you will check in next.\n\nCreate talking-point templates for {studentTypes}: for each type, the strengths to lead with, how to frame the growth area honestly but kindly, the data to bring, and the specific action plan — so no teacher walks in unprepared for any profile.\n\nWrite the data-without-jargon guide: how to present reading levels, scores, and benchmarks in plain language (\"this means she can...\"), the one work sample to bring per child and why THAT one, and what never to do (no surprise bad news, no comparing to other children, no acronym soup).\n\nAdd the difficult-conversation playbook: the de-escalation moves when a parent is upset (listen fully first, reflect back, separate the problem from the person), the script for delivering hard news honestly (\"I want to be straightforward with you because early help matters\"), and the follow-up protocol that turns a tense conference into an ongoing partnership.\n\nEnd with the logistics: the scheduling system, the timer discipline, the buffer plan for the conference that runs over, and the end-of-night 10-minute debrief the teacher does while impressions are fresh.",
    "description": "Plans parent-teacher conferences with a timed structure, talking-point templates for different student profiles, jargon-free data presentation, follow-up action plans, and guidance for difficult conversations.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 4th Grade",
        "required": true
      },
      "minutes": {
        "label": "Minutes per family",
        "question": "Minutes per conference?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      },
      "studentTypes": {
        "label": "Student types",
        "question": "Which student profiles need templates?",
        "type": "text",
        "placeholder": "e.g., thriving, struggling, inconsistent effort",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Field Trip Planner",
    "displayDescription": "Plans an educational field trip — pre-trip purpose, on-site observation tasks, full logistics, and post-trip consolidation.",
    "id": "curriculum-095",
    "prompt": "You are helping a parent or teacher plan a field trip for {gradeLevel} to {destination}, connecting to {topic} in {subject}. A field trip without learning design is an expensive bus ride — build the learning around the visit in three phases.\n\nPhase 1 — Pre-trip (the purpose builders): 1-2 short lessons that give the visit intellectual purpose. The learner should arrive with background knowledge (what they will see and why it matters to {topic}), 3-4 personal investigation questions they genuinely want answered, and the observation skills they will need (what to look at, how to record it). Provide the pre-trip lesson outlines and the question-generation activity. Include the behavior and expectation briefing — framed as \"how thoughtful visitors act,\" not a threat list.\n\nPhase 2 — During the visit: a student task that structures attention without killing wonder. Design the observation guide or scavenger task: 6-8 focused prompts tied to {topic} (\"Find an example of ___ and sketch it,\" \"Ask a guide/staff member ___\"), a recording format (the field journal layout), built-in choice (2-3 \"follow your curiosity\" options), and the buddy/pair system for accountability. Specify what the adult does during the visit (facilitate, prompt, document — not lecture in front of exhibits).\n\nPhase 3 — Post-trip (the cement): a next-day activity where the visit becomes lasting learning — the synthesis task connecting what was seen to {topic}'s concepts (a comparison, a labeled diagram from memory, a presentation, a thank-you letter that includes one thing learned), plus the reflection prompts. Provide the debrief discussion questions and what strong connections sound like.\n\nHandle the logistics completely: timing (departure, travel, on-site blocks, return — with buffer), group organization and the chaperone ratio with chaperone briefing notes (their job description: supervise AND prompt thinking), lunch plan, the cost estimate broken down per student with the funding or collection plan, and transportation. Write the permission slip key points: the information it must contain (purpose, itinerary, costs, what to bring/wear, emergency contacts, medical needs, the photo policy) — the checklist the organizer verifies before sending.\n\nEnd with the contingency plans: bad weather, a closed exhibit, a student emergency — the 3 backup moves decided in advance, not improvised on the sidewalk.",
    "description": "Plans a field trip with purpose-building pre-trip lessons, a student observation or scavenger task during the visit, complete logistics, permission slip key points, and a post-trip activity cementing the learning.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 4th Grade",
        "required": true
      },
      "destination": {
        "label": "Destination",
        "question": "Where is the trip?",
        "type": "text",
        "placeholder": "e.g., Local history museum",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What topic does it connect to?",
        "type": "text",
        "placeholder": "e.g., Local indigenous history",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Social Studies",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Guest Speaker Guide",
    "displayDescription": "Prepares a guest speaker visit — invitation email, student pre-work, timed visit structure, and thank-you follow-up.",
    "id": "curriculum-096",
    "prompt": "You are helping a parent or teacher prepare a guest speaker visit for {gradeLevel} {subject}: a {speakerProfession} connected to {topic}. The visit runs {minutes} minutes. A great guest visit is 80% preparation — the speaker's expertise only lands if the learners are ready to receive it.\n\nWrite the invitation email in final, sendable form: the warm introduction, who the learners are ({gradeLevel}, studying {topic}), why THIS speaker (the specific connection — flattery with substance), exactly what you are asking for ({minutes} minutes, the format, 2-3 suggested talking points tied to the unit — speakers do better with guidance than with \"talk about your job\"), the date options, and the logistics (parking, check-in, tech setup, the contact person). Include the confirmation follow-up: the 1-week reminder with the final details and the day-before check.\n\nDesign the student pre-work: background research on the profession (what does a {speakerProfession} actually do — the 15-minute research task with the guided questions), {questionCount} prepared questions per learner — but teach question craft first: the 10-minute mini-lesson on strong vs. weak questions (specific over generic, \"how\" and \"why\" over \"what,\" one question that connects to {topic}), with examples of each. Collect and curate the questions in advance: select the best, eliminate duplicates, and sequence them.\n\nStructure the {minutes}-minute visit: the student-led introduction (a learner introduces the speaker — with the intro script template), the speaker's talk (with the 2-3 anchor topics you requested), the Q&A (the facilitation: who calls on whom, the follow-up question rule, what to do with a dead question), and the closing (the thank-you, the photo if appropriate, the transition back to class).\n\nPlan the follow-up: the thank-you notes (the structure — one specific thing learned, one question it raised — not generic thanks), and the reflection connecting the talk to the unit: 3-4 prompts linking what the speaker said to {topic}'s concepts, plus the discussion of \"what surprised you and why.\" End with the speaker-stewardship note: the thank-you email the adult sends within 24 hours and the relationship maintenance that turns one visit into a recurring resource.",
    "description": "Prepares a guest speaker visit with a ready-to-send invitation email, student background research and prepared questions, a timed visit structure, and follow-up thank-you notes plus unit-connecting reflection.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 6th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Science",
        "required": true
      },
      "speakerProfession": {
        "label": "Speaker profession",
        "question": "What does the speaker do?",
        "type": "text",
        "placeholder": "e.g., Civil engineer",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "Which unit topic?",
        "type": "text",
        "placeholder": "e.g., Structures and forces",
        "required": true
      },
      "questionCount": {
        "label": "Question count",
        "question": "How many prepared questions?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "minutes": {
        "label": "Visit minutes",
        "question": "How many minutes for the visit?",
        "type": "number",
        "placeholder": "e.g., 40",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Cross-Curricular Project",
    "displayDescription": "Coordinates a shared cross-curricular project — driving question, joint timeline, split deliverables, and fair shared grading.",
    "id": "curriculum-097",
    "prompt": "You are helping two teachers (or a parent teaching both subjects) design a cross-curricular project for {gradeLevel} linking {subjectA} and {subjectB} through the theme of {theme}, running about {weeks} weeks. The project must be ONE project genuinely served by both subjects — not two assignments sharing a due date.\n\nCreate the shared driving question: a question about {theme} that requires both {subjectA} thinking and {subjectB} thinking to answer well — and show why: the {subjectA} lens contributes X, the {subjectB} lens contributes Y, and neither alone suffices. This justification is the project's immune system against drifting into two separate projects.\n\nBuild the week-by-week timeline both teachers follow across the {weeks} weeks: each week shows what happens in {subjectA} time, what happens in {subjectB} time, the milestone both sides share, and the handoff points (where work from one class feeds the other — e.g., the {subjectA} research becomes the data for the {subjectB} product). Mark the joint checkpoints where both teachers review progress together.\n\nAssign deliverable ownership explicitly: which deliverables count for {subjectA} (assessed on {subjectA} criteria), which for {subjectB}, and which are shared — with the rule that no single piece of student work gets graded twice for the same thing. Design the shared grading approach that avoids double-punishing: the split rubric (each teacher scores only their subject's criteria on shared products), the grade-combining method stated plainly, and the policy for when a student excels in one subject's portion but struggles in the other's.\n\nCreate the coordination checklist for the two teachers: the 5 planning conversations to have before launch (and when), the shared document system (one source of truth for deadlines and expectations), the mid-project calibration check (are both classes on pace? are expectations aligned?), and the conflict protocol for when the two subjects' demands collide in a student's week.\n\nEnd with the learner-facing project brief: the one-page overview the student receives showing the whole {weeks}-week arc, both subjects' roles, and the final showcase — plus the parent communication note explaining why this project counts in two classes and how grading works, so families are allies, not confused.",
    "description": "Designs a cross-curricular project linking two subjects through a shared theme, with a joint driving question, a week-by-week timeline both teachers follow, clear deliverable ownership, fair shared grading, and a teacher coordination checklist.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 7th Grade",
        "required": true
      },
      "subjectA": {
        "label": "First subject",
        "question": "First subject?",
        "type": "text",
        "placeholder": "e.g., ELA",
        "required": true
      },
      "subjectB": {
        "label": "Second subject",
        "question": "Second subject?",
        "type": "text",
        "placeholder": "e.g., History",
        "required": true
      },
      "theme": {
        "label": "Theme",
        "question": "Shared theme?",
        "type": "text",
        "placeholder": "e.g., Migration stories",
        "required": true
      },
      "weeks": {
        "label": "Project length",
        "question": "About how many weeks will the project run?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Summer Learning Plan",
    "displayDescription": "Builds a low-pressure summer plan — reading, real-world math, a passion project, and outdoor exploration — that feels like summer.",
    "id": "curriculum-098",
    "prompt": "You are helping a parent build a summer learning plan for a learner finishing {gradeLevel}, to prevent learning loss in {subjects} without ruining summer. The plan runs {weeks} weeks at a maximum of {minutesPerDay} minutes per day. The learner's interests: {learnerInterests}. The design philosophy: stealth learning — the summer should feel like summer, with learning smuggled inside things the child actually wants to do.\n\nStructure each week around four light pillars, not a school schedule. Reading: a {gradeLevel} summer reading approach built on choice — help the parent build the book stack (5-8 titles mixing {learnerInterests} with 2 stretch picks), the daily reading rhythm (20 minutes, same time daily, parent reads too — modeling beats mandating), and the no-book-report rule (replace reports with 5-minute conversations using 3 provided discussion prompts per book). Real-world math: {subjects}-related math embedded in summer life — cooking and scaling recipes, trip planning and mileage, budgeting for a project, game statistics — with 2-3 concrete activities per week, each under 20 minutes. The passion project: ONE project across the {weeks} weeks driven by {learnerInterests} (build something, learn a skill, investigate a question, create something) — provide the project-launch conversation guide, 3 milestone check-ins, and the end-of-summer showcase (show the family what you made). Outdoor exploration: weekly nature or neighborhood investigations tied loosely to {subjects} — the observation journal format, 4-5 starter missions, and the \"bring back one question\" ritual.\n\nDesign the weekly rhythm: which pillars on which days (never all four daily — 2 per day max), the {minutesPerDay}-minute cap enforced by the timer rule, and the planned OFF weeks (at least 2 weeks of the {weeks} with nothing — rest is part of the plan, say so explicitly so parents do not feel guilty).\n\nCreate the simple family check-in: a 10-minute Sunday conversation (what was fun this week, what did you notice/learn, what is the plan for next week) with the 4 questions provided — tracking without worksheets. Include the \"summer slide\" honesty note: which skills actually decay over summer for a {gradeLevel} learner in {subjects} (and which do not — reassure where reassurance is due), so the plan targets the real risks.\n\nEnd with the August re-entry: the 2-week gentle ramp before school starts (what to revisit, how to rebuild the routine) so September does not begin with shock.",
    "description": "Builds a summer learning plan preventing learning loss with light daily activities mixing reading, real-world math, one passion project, and outdoor exploration — designed to feel like summer, not school, with a simple family check-in.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level just finished?",
        "type": "text",
        "placeholder": "e.g., 3rd Grade",
        "required": true
      },
      "subjects": {
        "label": "Subjects",
        "question": "Which subjects to maintain?",
        "type": "text",
        "placeholder": "e.g., reading and math",
        "required": true
      },
      "weeks": {
        "label": "Weeks",
        "question": "How many weeks?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "minutesPerDay": {
        "label": "Minutes per day",
        "question": "Max minutes per day?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      },
      "learnerInterests": {
        "label": "Learner interests",
        "question": "What is your learner into right now? (used to theme activities)",
        "type": "text",
        "placeholder": "e.g., bugs, basketball, drawing",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Curriculum Night Script",
    "displayDescription": "Scripts a curriculum night presentation — slide-by-slide talking points, parent-help guidance, tough Q&A, and a memorable takeaway.",
    "id": "curriculum-099",
    "prompt": "You are helping a teacher write a curriculum night presentation script for {gradeLevel} {subject}, lasting {minutes} minutes. The audience: parents who are deciding, consciously or not, whether they trust you with their child this year. Every minute should build that trust.\n\nStructure the {minutes} minutes in five movements with time allocations. Welcome and teacher story (15%): the 2-minute authentic story — why you teach, one thing you love about {subject}, one thing about you as a person — with guidance on the line between warm and oversharing. What students will learn (30%): the year's arc in plain language — the 4-5 big capabilities stated as \"by June, your child will be able to...\", one vivid example per unit that parents can picture, and the honest note on what is challenging this year and how you will support students through it. How they will be assessed (20%): grading in plain English — what counts, how much, what a grade means and does not mean — plus how parents can see progress during the year (not just at report card time). How parents can help (20%): 4-5 specific, realistic actions calibrated to {gradeLevel} (the conversation starters, the homework stance, when to contact you) — and the explicit permission slip: \"you do not need to teach {subject} at home; here is what actually helps.\" Q&A (15%): the facilitation plan.\n\nWrite slide-by-slide talking points: for each slide, the slide's title, the 2-3 spoken points (in natural spoken language, not bullet-reading), and the timing. Include the one memorable takeaway line — the sentence parents repeat in the parking lot — crafted around what makes this {subject} class distinctive.\n\nPrepare the tough-question handling for {toughTopics}: for each likely tough question, the acknowledge-reframe-answer structure (acknowledge the concern genuinely, reframe to shared values, answer honestly), the phrases that defuse without dodging, and the parking-lot move for questions that need a private conversation (\"That deserves more time than we have tonight — can we talk Thursday?\").\n\nEnd with the logistics checklist for the night itself: room setup, handouts (the one-pager families take home), the sign-in that captures emails, and the follow-up email within 48 hours — because curriculum night's trust compounds when the follow-through is fast.",
    "description": "Writes a curriculum night presentation script with a timed structure, slide-by-slide talking points, plain-language learning goals, parent support guidance, tough-question Q&A handling, and one memorable takeaway line.",
    "category": "curriculum",
    "variables": {
      "gradeLevel": {
        "label": "Grade level",
        "question": "What grade level?",
        "type": "text",
        "placeholder": "e.g., 6th Grade",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What subject?",
        "type": "text",
        "placeholder": "e.g., Math",
        "required": true
      },
      "minutes": {
        "label": "Minutes",
        "question": "Presentation length in minutes?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": true
      },
      "toughTopics": {
        "label": "Tough topics",
        "question": "Which tough topics might come up?",
        "type": "text",
        "placeholder": "e.g., new grading policy, homework load",
        "required": true
      }
    }
  }
];
