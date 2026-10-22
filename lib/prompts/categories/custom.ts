import type { PromptSchema } from "../types";

export const customPrompts: PromptSchema[] = [
  {
    "displayTitle": "Brainstorm Session Facilitator",
    "displayDescription": "Runs a structured brainstorm on your challenge with safe, bold, and wildcard ideas, then ranks the best.",
    "id": "custom-001",
    "prompt": "Act as a brainstorming facilitator for {challenge}. Generate {count} diverse ideas across three categories — safe, bold, and unconventional — then pick the three most promising and explain why each could work. End with one wildcard idea that breaks a hidden assumption about {challenge}.",
    "description": "Facilitates a structured brainstorming session that produces categorized ideas and a wildcard that challenges assumptions.",
    "category": "custom",
    "variables": {
      "challenge": {
        "label": "Challenge",
        "question": "What challenge or topic should we brainstorm about?",
        "type": "text",
        "placeholder": "e.g., Reducing customer churn",
        "required": true
      },
      "count": {
        "label": "Idea Count",
        "question": "How many ideas should be generated?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Mind Map Builder",
    "displayDescription": "Turns a central topic into a branched text mind map with themes, details, and hidden connections.",
    "id": "custom-002",
    "prompt": "Build a text-based mind map for {central_topic}. Place it at the center, then branch into {branches} main themes, each with 3-5 sub-branches of specific details, examples, or questions. Use clear indentation and short node labels, and add one extra branch exploring connections between themes I might miss.",
    "description": "Generates a hierarchical text mind map that breaks a topic into themes, sub-branches, and cross-connections.",
    "category": "custom",
    "variables": {
      "central_topic": {
        "label": "Central Topic",
        "question": "What is the central topic of the mind map?",
        "type": "text",
        "placeholder": "e.g., Launching a podcast",
        "required": true
      },
      "branches": {
        "label": "Main Branches",
        "question": "How many main branches should the map have?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Reverse Brainstorm Tool",
    "displayDescription": "Flips your goal on its head to find failure modes, then converts them into preventive actions.",
    "id": "custom-003",
    "prompt": "Use reverse brainstorming on {goal}. First list {count} ways to guarantee failure or make the problem worse, then flip each failure into a positive insight or preventive action. Group the flipped ideas by theme, rank the top three by impact, and tell me which hidden assumption each one exposes.",
    "description": "Applies reverse brainstorming to surface failure modes and convert them into actionable preventive insights.",
    "category": "custom",
    "variables": {
      "goal": {
        "label": "Goal",
        "question": "What goal should we reverse-brainstorm?",
        "type": "text",
        "placeholder": "e.g., A successful product launch",
        "required": true
      },
      "count": {
        "label": "Failure Ideas",
        "question": "How many ways to fail should we list first?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      }
    }
  },
  {
    "displayTitle": "SCAMPER Idea Spark",
    "displayDescription": "Applies all seven SCAMPER lenses to evolve your idea into a stronger concept with a pitch.",
    "id": "custom-004",
    "prompt": "Apply the SCAMPER technique to this idea: {idea}. Walk through all seven lenses — Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse — giving {examples} concrete ideas per lens. Then select the single most promising idea from each lens and combine them into one evolved concept with a one-paragraph pitch.",
    "description": "Runs an idea through the seven SCAMPER lenses and synthesizes the best sparks into one evolved concept.",
    "category": "custom",
    "variables": {
      "idea": {
        "label": "Idea",
        "question": "What idea should SCAMPER be applied to?",
        "type": "textarea",
        "placeholder": "e.g., A subscription box for local snacks",
        "required": true
      },
      "examples": {
        "label": "Ideas Per Lens",
        "question": "How many ideas per SCAMPER lens?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Six Thinking Hats",
    "displayDescription": "Examines your topic through de Bono's six hats — facts, feelings, risks, benefits, creativity, and process.",
    "id": "custom-005",
    "prompt": "Analyze this topic using de Bono's Six Thinking Hats: {topic}. Give a distinct section for each hat: White (facts and data), Red (emotions and gut reactions), Black (risks and criticism), Yellow (benefits and optimism), Green (creative alternatives), Blue (process and next steps). Finish with a balanced verdict and the single most important unanswered question.",
    "description": "Produces a six-perspective analysis of a topic covering facts, emotions, risks, benefits, creativity, and next steps.",
    "category": "custom",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic should be analyzed with the Six Thinking Hats?",
        "type": "textarea",
        "placeholder": "e.g., Switching our team to a four-day week",
        "required": true
      }
    }
  },
  {
    "displayTitle": "SWOT Analysis Builder",
    "displayDescription": "Builds a detailed SWOT with evidence-based points and a strategy section linking strengths to opportunities.",
    "id": "custom-006",
    "prompt": "Build a SWOT analysis for {subject}. List {items} distinct points under each quadrant — Strengths, Weaknesses, Opportunities, Threats — keeping each point specific and evidence-based rather than generic. Then write a short strategy section connecting strengths to opportunities and proposing two concrete moves to address the biggest weakness or threat.",
    "description": "Creates a thorough SWOT analysis with specific quadrant points and a strategy for acting on them.",
    "category": "custom",
    "variables": {
      "subject": {
        "label": "Subject",
        "question": "What should the SWOT analysis cover?",
        "type": "text",
        "placeholder": "e.g., My freelance design business",
        "required": true
      },
      "items": {
        "label": "Points Per Quadrant",
        "question": "How many points per SWOT quadrant?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Weighted Decision Matrix",
    "displayDescription": "Scores your options against weighted criteria in a table and recommends a winner with honest caveats.",
    "id": "custom-007",
    "prompt": "Build a weighted decision matrix for choosing between these options: {options}. First propose {criteria} evaluation criteria relevant to my situation, assign sensible default weights from 1-5 while stating your assumptions, then score every option per criterion in a table, compute weighted totals, and recommend the winner with honest caveats.",
    "description": "Constructs a scored, weighted comparison table across your options and recommends the best choice.",
    "category": "custom",
    "variables": {
      "options": {
        "label": "Options",
        "question": "What options are you choosing between?",
        "type": "textarea",
        "placeholder": "e.g., Job offer A, job offer B, staying put",
        "required": true
      },
      "criteria": {
        "label": "Criteria Count",
        "question": "How many evaluation criteria should be used?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      }
    }
  },
  {
    "displayTitle": "10-10-10 Decision Lens",
    "displayDescription": "Maps each option's consequences across 10 minutes, 10 months, and 10 years to reveal the right call.",
    "id": "custom-008",
    "prompt": "Help me decide about {decision} using the 10-10-10 framework. For each of my main options, describe the likely consequences in 10 minutes, 10 months, and 10 years — emotional, practical, and financial. Then identify which option my future self would thank me for, and name the one question I should answer before committing.",
    "description": "Evaluates a decision through short, medium, and long-term consequences to surface the wisest choice.",
    "category": "custom",
    "variables": {
      "decision": {
        "label": "Decision",
        "question": "What decision are you weighing?",
        "type": "text",
        "placeholder": "e.g., Whether to move to a new city",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Regret Minimization Check",
    "displayDescription": "Projects you into the future to compare lifetime regret across options and find the least-regretted path.",
    "id": "custom-009",
    "prompt": "Apply regret minimization to this choice: {choice}. Project me to age {age} looking back: for each option I am considering, describe the specific regrets I might feel and rate their intensity from 1-10. Then identify the option with the least lifetime regret, separate genuine risk from mere fear, and suggest one low-cost experiment that reduces uncertainty.",
    "description": "Compares the future regret of each option to reveal the choice your older self would endorse.",
    "category": "custom",
    "variables": {
      "choice": {
        "label": "Choice",
        "question": "What choice should we apply regret minimization to?",
        "type": "text",
        "placeholder": "e.g., Quitting my job to start a business",
        "required": true
      },
      "age": {
        "label": "Future Age",
        "question": "What age should we project forward to?",
        "type": "number",
        "placeholder": "e.g., 80",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Clarity Rewriter",
    "displayDescription": "Rewrites dense or jargon-heavy text into clear prose without losing meaning, with an edit-by-edit breakdown.",
    "id": "custom-010",
    "prompt": "Rewrite the following text for maximum clarity: {text}. Remove jargon, cut redundant words, split long sentences, and make the main point unmissable — without changing the meaning or losing important details. Return the rewritten version first, then a short list of the key edits you made and why.",
    "description": "Transforms unclear writing into sharp, readable prose and explains each significant edit.",
    "category": "custom",
    "variables": {
      "text": {
        "label": "Text",
        "question": "What text should be rewritten for clarity?",
        "type": "textarea",
        "placeholder": "Paste the text here",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Tone Shifter",
    "displayDescription": "Rewrites your text in a new tone while keeping every fact intact, with notes on what changed.",
    "id": "custom-011",
    "prompt": "Rewrite this text in a {tone} tone: {text}. Keep all the facts and core meaning intact while adjusting word choice, rhythm, and formality to match the requested tone. Deliver the rewritten version, then briefly explain three specific changes you made to achieve it.",
    "description": "Adapts the tone of any text to fit your audience while preserving its meaning and facts.",
    "category": "custom",
    "variables": {
      "tone": {
        "label": "Target Tone",
        "question": "What tone should the rewrite use?",
        "type": "select",
        "options": [
          "Friendly",
          "Professional",
          "Persuasive",
          "Playful",
          "Formal",
          "Empathetic"
        ],
        "required": true
      },
      "text": {
        "label": "Text",
        "question": "What text should be rewritten?",
        "type": "textarea",
        "placeholder": "Paste the text here",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Text Shortener",
    "displayDescription": "Compresses long text to your target word count while preserving every key point and nuance.",
    "id": "custom-012",
    "prompt": "Shorten this text to roughly {target_words} words: {text}. Preserve every key point, fact, and nuance — cut examples, filler, and repetition first. If hitting the target would lose something essential, keep it and note the trade-off. Return the shortened version with its exact word count.",
    "description": "Condenses text to a target length by cutting filler first and flagging any unavoidable trade-offs.",
    "category": "custom",
    "variables": {
      "text": {
        "label": "Text",
        "question": "What text should be shortened?",
        "type": "textarea",
        "placeholder": "Paste the text here",
        "required": true
      },
      "target_words": {
        "label": "Target Words",
        "question": "Roughly how many words should the result be?",
        "type": "number",
        "placeholder": "e.g., 100",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Outline Expander",
    "displayDescription": "Grows a bare outline into full prose with transitions, examples, and research gaps flagged.",
    "id": "custom-013",
    "prompt": "Expand this outline into {detail_level}: {outline}. For each point, develop the argument, add transitions between sections, and include one concrete example or piece of evidence per major point. Keep the original structure and order, and flag any point that needs more research with [NEEDS RESEARCH].",
    "description": "Expands a skeletal outline into developed prose with examples, transitions, and flagged research gaps.",
    "category": "custom",
    "variables": {
      "outline": {
        "label": "Outline",
        "question": "What outline should be expanded?",
        "type": "textarea",
        "placeholder": "Paste your outline here",
        "required": true
      },
      "detail_level": {
        "label": "Detail Level",
        "question": "How fully should the outline be expanded?",
        "type": "select",
        "options": [
          "Brief paragraphs",
          "Detailed sections",
          "Full-length draft"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "TLDR Summarizer",
    "displayDescription": "Boils any content down to three bullets and one takeaway, under your word limit.",
    "id": "custom-014",
    "prompt": "Give me a TL;DR of this content: {content}. Write exactly three bullet points capturing the core message, plus one sentence stating the single takeaway that matters most. Ignore tangents, examples, and background unless they change the meaning. Keep the whole summary under {max_words} words.",
    "description": "Distills long content into three essential bullets and a single must-know takeaway.",
    "category": "custom",
    "variables": {
      "content": {
        "label": "Content",
        "question": "What content should be summarized?",
        "type": "textarea",
        "placeholder": "Paste the content here",
        "required": true
      },
      "max_words": {
        "label": "Max Words",
        "question": "What is the maximum word count for the summary?",
        "type": "number",
        "placeholder": "e.g., 100",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Executive Summary Writer",
    "displayDescription": "Turns long material into a two-minute executive brief with bottom line, findings, and actions.",
    "id": "custom-015",
    "prompt": "Write an executive summary of this material for a {audience}: {content}. Lead with the bottom line, then cover key findings, implications, and recommended actions in tight, skimmable paragraphs with bolded subheads. Keep it under {word_limit} words and write so a busy executive grasps everything in two minutes.",
    "description": "Converts dense material into a skimmable executive summary with findings and recommended actions.",
    "category": "custom",
    "variables": {
      "content": {
        "label": "Material",
        "question": "What material should be summarized?",
        "type": "textarea",
        "placeholder": "Paste the material here",
        "required": true
      },
      "audience": {
        "label": "Audience",
        "question": "Who is the summary for?",
        "type": "text",
        "placeholder": "e.g., Startup founders",
        "required": true
      },
      "word_limit": {
        "label": "Word Limit",
        "question": "What is the maximum word count?",
        "type": "number",
        "placeholder": "e.g., 300",
        "required": true
      }
    }
  },
  {
    "displayTitle": "ELI5 Explainer",
    "displayDescription": "Explains any concept in simple words and a child-friendly analogy, jargon-free.",
    "id": "custom-016",
    "prompt": "Explain {concept} like I am five years old. Use only simple everyday words, one short analogy involving something a child knows, and short sentences. Avoid all jargon — if a technical term is unavoidable, define it in plain words immediately. End with a one-sentence summary a five-year-old could repeat.",
    "description": "Breaks down a complex concept into child-simple language with an everyday analogy.",
    "category": "custom",
    "variables": {
      "concept": {
        "label": "Concept",
        "question": "What concept should be explained simply?",
        "type": "text",
        "placeholder": "e.g., Blockchain",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Expert-Level Explainer",
    "displayDescription": "Goes deep on a concept — mechanisms, debates, edge cases — for someone with real background.",
    "id": "custom-017",
    "prompt": "Explain {concept} at an expert level for someone with background in {background}. Go deep: cover underlying mechanisms, current debates, edge cases, and where the field's consensus breaks down. Use precise terminology, reference key frameworks or results by name, and end with three open questions researchers are still wrestling with.",
    "description": "Delivers a rigorous deep-dive on a concept including debates, edge cases, and open research questions.",
    "category": "custom",
    "variables": {
      "concept": {
        "label": "Concept",
        "question": "What concept should be explained at expert level?",
        "type": "text",
        "placeholder": "e.g., Transformer attention mechanisms",
        "required": true
      },
      "background": {
        "label": "Background",
        "question": "What background does the reader have?",
        "type": "text",
        "placeholder": "e.g., Machine learning engineering",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Analogy Generator",
    "displayDescription": "Creates original analogies from everyday domains to make a hard concept click, ranked by clarity.",
    "id": "custom-018",
    "prompt": "Generate {count} original analogies explaining {concept}. Each analogy should map the concept onto a different everyday domain such as cooking, sports, or travel, highlight exactly which parts correspond, and note where the analogy breaks down. Rank them from clearest to most creative, and label the single best one for a beginner.",
    "description": "Produces ranked, original analogies for a concept with honest notes on where each one breaks down.",
    "category": "custom",
    "variables": {
      "concept": {
        "label": "Concept",
        "question": "What concept needs analogies?",
        "type": "text",
        "placeholder": "e.g., Compound interest",
        "required": true
      },
      "count": {
        "label": "Analogy Count",
        "question": "How many analogies should be generated?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Bullets to Paragraph",
    "displayDescription": "Converts rough bullet points into smooth natural prose without adding or dropping facts.",
    "id": "custom-019",
    "prompt": "Convert these bullet points into a smooth flowing paragraph in a {style} style: {bullets}. Preserve every fact and point — merge, reorder, and add transitions as needed, but do not add new claims or drop anything. The result should read as natural prose, not a list in disguise.",
    "description": "Transforms bullet points into polished paragraph prose that preserves every original fact.",
    "category": "custom",
    "variables": {
      "bullets": {
        "label": "Bullet Points",
        "question": "What bullet points should be converted?",
        "type": "textarea",
        "placeholder": "Paste your bullets here",
        "required": true
      },
      "style": {
        "label": "Style",
        "question": "What writing style should the paragraph use?",
        "type": "select",
        "options": [
          "Professional",
          "Conversational",
          "Formal",
          "Persuasive"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Action Items Extractor",
    "displayDescription": "Pulls every action item from messy text with owners, deadlines, and vagueness flags.",
    "id": "custom-020",
    "prompt": "Extract every action item from this text: {text}. For each one, write the task in imperative form, name the likely owner if stated or mark it Unassigned, note any deadline mentioned, and flag items that are vague with [NEEDS CLARIFICATION]. Present them as a clean numbered list, most urgent first.",
    "description": "Scans text for action items and returns them as a prioritized list with owners and deadlines.",
    "category": "custom",
    "variables": {
      "text": {
        "label": "Text",
        "question": "What text should action items be extracted from?",
        "type": "textarea",
        "placeholder": "Paste meeting notes or messages here",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Key Dates Extractor",
    "displayDescription": "Finds every date, deadline, and commitment in text and sorts them into a chronological list.",
    "id": "custom-021",
    "prompt": "Extract every date, deadline, and time-bound commitment from this text: {text}. For each, give the date in {date_format} format, what happens on it, and who is responsible if mentioned. Sort chronologically, flag any conflicting dates with [CONFLICT], and call out dates approaching within two weeks relative to {reference_date}.",
    "description": "Pulls all dates and deadlines from text into a sorted timeline with conflicts and upcoming items flagged.",
    "category": "custom",
    "variables": {
      "text": {
        "label": "Text",
        "question": "What text should dates be extracted from?",
        "type": "textarea",
        "placeholder": "Paste the document here",
        "required": true
      },
      "date_format": {
        "label": "Date Format",
        "question": "How should dates be formatted?",
        "type": "select",
        "options": [
          "MM/DD/YYYY",
          "DD MMM YYYY",
          "YYYY-MM-DD",
          "Written out"
        ],
        "required": true
      },
      "reference_date": {
        "label": "Reference Date",
        "question": "What is today's date for the two-week check?",
        "type": "date",
        "required": true
      }
    }
  },
  {
    "displayTitle": "FAQ Generator",
    "displayDescription": "Turns your material into a real-world FAQ with skeptical questions answered, ordered basic to advanced.",
    "id": "custom-022",
    "prompt": "Turn this material into a FAQ of {count} questions and answers: {source}. Write questions the way a real {audience} would ask them — including the skeptical ones — and answer each in 2-4 sentences. Order from most basic to most advanced, and mark any question the material does not fully answer with [NOT COVERED].",
    "description": "Generates a practical FAQ from source material with authentic audience questions and honest coverage gaps.",
    "category": "custom",
    "variables": {
      "source": {
        "label": "Source Material",
        "question": "What material should the FAQ be based on?",
        "type": "textarea",
        "placeholder": "Paste the material here",
        "required": true
      },
      "count": {
        "label": "Question Count",
        "question": "How many FAQ entries should be written?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "audience": {
        "label": "Audience",
        "question": "Who will be reading this FAQ?",
        "type": "text",
        "placeholder": "e.g., First-time homebuyers",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Quiz From Text",
    "displayDescription": "Builds a mixed-format quiz from any material with a separate explained answer key.",
    "id": "custom-023",
    "prompt": "Build a {question_count}-question quiz from this material at {difficulty} difficulty: {text}. Use a mix of multiple choice, true/false, and short-answer questions covering both main ideas and important details. Put all questions first, then a separate answer key with one-line explanations for each answer.",
    "description": "Creates a varied quiz from your material with questions up front and an explained answer key.",
    "category": "custom",
    "variables": {
      "text": {
        "label": "Material",
        "question": "What material should the quiz cover?",
        "type": "textarea",
        "placeholder": "Paste the material here",
        "required": true
      },
      "question_count": {
        "label": "Question Count",
        "question": "How many questions should the quiz have?",
        "type": "number",
        "placeholder": "e.g., 12",
        "required": true
      },
      "difficulty": {
        "label": "Difficulty",
        "question": "What difficulty level?",
        "type": "select",
        "options": [
          "Easy",
          "Medium",
          "Hard",
          "Mixed"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Discussion Question Builder",
    "displayDescription": "Generates debate-sparking discussion questions sequenced for momentum, with facilitator notes.",
    "id": "custom-024",
    "prompt": "Generate {count} discussion questions about {topic} for a {setting}. Mix factual, analytical, and open-ended questions that spark genuine debate rather than single right answers. Order them to build momentum, and add a brief facilitator note for the two questions most likely to divide the room.",
    "description": "Produces sequenced discussion questions designed to spark real debate, with notes for the facilitator.",
    "category": "custom",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic are the discussion questions about?",
        "type": "text",
        "placeholder": "e.g., Universal basic income",
        "required": true
      },
      "count": {
        "label": "Question Count",
        "question": "How many questions should be generated?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "setting": {
        "label": "Setting",
        "question": "Where will the discussion happen?",
        "type": "select",
        "options": [
          "Classroom",
          "Book club",
          "Team meeting",
          "Community group"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Interview Question Generator",
    "displayDescription": "Drafts role-specific interview questions with STAR behavioral prompts and strong-answer guides.",
    "id": "custom-025",
    "prompt": "Draft {count} interview questions for a {role} position at a {company_type}. Cover skills, experience, problem-solving, and culture fit — include at least two behavioral questions using the STAR format and one scenario question. For each question, add what a strong answer sounds like in one line.",
    "description": "Creates targeted interview questions for a role including behavioral and scenario prompts with answer guides.",
    "category": "custom",
    "variables": {
      "role": {
        "label": "Role",
        "question": "What role are you hiring for?",
        "type": "text",
        "placeholder": "e.g., Marketing manager",
        "required": true
      },
      "count": {
        "label": "Question Count",
        "question": "How many questions should be drafted?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "company_type": {
        "label": "Company Type",
        "question": "What kind of company is hiring?",
        "type": "text",
        "placeholder": "e.g., Early-stage SaaS startup",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Survey Question Designer",
    "displayDescription": "Designs an unbiased survey with smart ordering and a measurement note for every question.",
    "id": "custom-026",
    "prompt": "Design a survey of {count} questions to learn about {research_goal}. Mix question types — multiple choice, rating scales, and at most two open-ended questions — order them to avoid bias with general questions before specific ones and sensitive questions last, and add a one-line note on what each question measures. Avoid leading wording.",
    "description": "Designs a bias-aware survey with varied question types, smart ordering, and per-question measurement notes.",
    "category": "custom",
    "variables": {
      "research_goal": {
        "label": "Research Goal",
        "question": "What do you want to learn from the survey?",
        "type": "text",
        "placeholder": "e.g., Why users cancel their subscriptions",
        "required": true
      },
      "count": {
        "label": "Question Count",
        "question": "How many survey questions?",
        "type": "number",
        "placeholder": "e.g., 12",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Feedback Request Drafter",
    "displayDescription": "Writes a warm, low-pressure message asking for exactly the feedback you want by a clear date.",
    "id": "custom-027",
    "prompt": "Draft a message asking {recipient} for feedback on {subject}. Be specific about wanting {feedback_type}, make it easy to decline, suggest {deadline} as a soft deadline, and keep the tone warm and low-pressure. Include a subject line if it would be sent as an email.",
    "description": "Drafts a polite, specific feedback request that makes responding easy and declining painless.",
    "category": "custom",
    "variables": {
      "recipient": {
        "label": "Recipient",
        "question": "Who are you asking for feedback?",
        "type": "text",
        "placeholder": "e.g., My former manager",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What do you want feedback on?",
        "type": "text",
        "placeholder": "e.g., My conference talk draft",
        "required": true
      },
      "feedback_type": {
        "label": "Feedback Type",
        "question": "What kind of feedback do you want?",
        "type": "select",
        "options": [
          "Honest critique",
          "Quick gut reaction",
          "Detailed review",
          "One specific aspect"
        ],
        "required": true
      },
      "deadline": {
        "label": "Soft Deadline",
        "question": "When would you like the feedback by?",
        "type": "date",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Constructive Feedback Coach",
    "displayDescription": "Helps you deliver kind, direct feedback using the SBI model with a forward-looking close.",
    "id": "custom-028",
    "prompt": "Help me give constructive feedback to {recipient} about this situation: {situation}. Use the SBI model — describe the Situation, the specific Behavior, and the Impact — then suggest one concrete change and end with an encouraging forward-looking note. Keep it direct but kind, and flag any phrasing that could sound like a personal attack.",
    "description": "Coaches you through giving SBI-structured feedback that is direct, kind, and action-oriented.",
    "category": "custom",
    "variables": {
      "recipient": {
        "label": "Recipient",
        "question": "Who is receiving the feedback?",
        "type": "text",
        "placeholder": "e.g., A teammate",
        "required": true
      },
      "situation": {
        "label": "Situation",
        "question": "What happened that needs feedback?",
        "type": "textarea",
        "placeholder": "Describe the situation factually",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Apology Letter Writer",
    "displayDescription": "Writes a sincere apology that takes responsibility, names the harm, and offers amends without groveling.",
    "id": "custom-029",
    "prompt": "Write a sincere apology letter about this situation to {recipient}: {situation}. Take full responsibility without excuses, name the specific harm caused, express genuine remorse, state what I will do differently, and offer to make amends — without groveling or over-explaining. Match the tone to our relationship: {relationship}.",
    "description": "Drafts a genuine apology letter with accountability, remorse, and a concrete path to make amends.",
    "category": "custom",
    "variables": {
      "situation": {
        "label": "Situation",
        "question": "What are you apologizing for?",
        "type": "textarea",
        "placeholder": "Describe what happened",
        "required": true
      },
      "recipient": {
        "label": "Recipient",
        "question": "Who is the apology for?",
        "type": "text",
        "placeholder": "e.g., My business partner",
        "required": true
      },
      "relationship": {
        "label": "Relationship",
        "question": "What is your relationship to them?",
        "type": "select",
        "options": [
          "Friend",
          "Partner",
          "Family member",
          "Colleague",
          "Client"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Thank-You Note Writer",
    "displayDescription": "Writes a personal, specific thank-you note that shows gratitude through detail, not clichés.",
    "id": "custom-030",
    "prompt": "Write a warm thank-you note to {recipient} for this reason: {reason}. Be specific about what they did and why it mattered to me, keep it to {length}, and make it feel personal rather than generic. Avoid clichés like empty superlatives — show the gratitude through detail instead.",
    "description": "Composes a heartfelt thank-you note grounded in specific details about what the person did.",
    "category": "custom",
    "variables": {
      "recipient": {
        "label": "Recipient",
        "question": "Who are you thanking?",
        "type": "text",
        "placeholder": "e.g., My mentor",
        "required": true
      },
      "reason": {
        "label": "Reason",
        "question": "What are you thanking them for?",
        "type": "text",
        "placeholder": "e.g., The referral that landed my interview",
        "required": true
      },
      "length": {
        "label": "Length",
        "question": "How long should the note be?",
        "type": "select",
        "options": [
          "A few sentences",
          "One short paragraph",
          "A full letter"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Condolence Message Writer",
    "displayDescription": "Writes a brief, sincere condolence message free of platitudes, with an offer of specific support.",
    "id": "custom-031",
    "prompt": "Write a heartfelt condolence message to {recipient} regarding {loss}. Keep it brief, sincere, and free of platitudes — no empty reassurances about reasons or timing. Acknowledge their grief, offer specific support rather than a vague open-ended offer, and close with warmth. Aim for 3-5 sentences.",
    "description": "Drafts a compassionate condolence message that acknowledges grief and offers concrete support.",
    "category": "custom",
    "variables": {
      "recipient": {
        "label": "Recipient",
        "question": "Who is the message for?",
        "type": "text",
        "placeholder": "e.g., A coworker",
        "required": true
      },
      "loss": {
        "label": "Loss",
        "question": "What loss are they grieving?",
        "type": "text",
        "placeholder": "e.g., The passing of their father",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Congratulations Message Writer",
    "displayDescription": "Writes a specific, warm congratulations message that honors the effort behind the achievement.",
    "id": "custom-032",
    "prompt": "Write a congratulations message to {recipient} for this achievement: {achievement}. Make it specific — reference what they accomplished and the effort behind it — keep the tone {tone}, and add one forward-looking line of encouragement. Keep it short enough to send as a text or card.",
    "description": "Composes a personalized congratulations message that celebrates both the win and the work behind it.",
    "category": "custom",
    "variables": {
      "recipient": {
        "label": "Recipient",
        "question": "Who are you congratulating?",
        "type": "text",
        "placeholder": "e.g., My sister",
        "required": true
      },
      "achievement": {
        "label": "Achievement",
        "question": "What did they achieve?",
        "type": "text",
        "placeholder": "e.g., Passing the bar exam",
        "required": true
      },
      "tone": {
        "label": "Tone",
        "question": "What tone should the message have?",
        "type": "select",
        "options": [
          "Warm",
          "Playful",
          "Formal",
          "Heartfelt"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Difficult Conversation Script",
    "displayDescription": "Scripts a tough talk with facts, I-statements, likely responses, and a path forward.",
    "id": "custom-033",
    "prompt": "Write a script for a difficult conversation with {person} about this issue: {issue}. Open with the goal of the conversation, state the facts without blame, share how it affects me using I-statements, invite their perspective with an open question, and propose a path forward. Include likely responses and how to handle each calmly.",
    "description": "Builds a complete script for a difficult conversation including responses to likely pushback.",
    "category": "custom",
    "variables": {
      "person": {
        "label": "Person",
        "question": "Who is the conversation with?",
        "type": "text",
        "placeholder": "e.g., My roommate",
        "required": true
      },
      "issue": {
        "label": "Issue",
        "question": "What is the difficult issue to discuss?",
        "type": "textarea",
        "placeholder": "Describe the issue factually",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Negotiation Script Builder",
    "displayDescription": "Builds a full negotiation script with talking points, objection responses, and a walk-away plan.",
    "id": "custom-034",
    "prompt": "Build a negotiation script for this situation: {situation}, where my goal is {goal}. Give me an opening line, my three key talking points with supporting reasons, responses to the {objections} most likely pushbacks, my walk-away point, and a graceful way to close whether it succeeds or not.",
    "description": "Creates a complete negotiation playbook from opener to close, including objection handling.",
    "category": "custom",
    "variables": {
      "situation": {
        "label": "Situation",
        "question": "What are you negotiating?",
        "type": "text",
        "placeholder": "e.g., A salary increase",
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What outcome do you want?",
        "type": "text",
        "placeholder": "e.g., A 10% raise",
        "required": true
      },
      "objections": {
        "label": "Objection Count",
        "question": "How many likely pushbacks should be covered?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Elevator Pitch Builder",
    "displayDescription": "Writes a tight timed elevator pitch plus a ten-second version for any idea or venture.",
    "id": "custom-035",
    "prompt": "Write a {duration}-second elevator pitch for {subject} aimed at {audience}. Hook with the problem in one sentence, present the solution in two, add one credibility point or proof, and close with a clear ask. Then give me a one-line version for when I only have ten seconds.",
    "description": "Crafts a timed elevator pitch with hook, solution, proof, and ask — plus an ultra-short version.",
    "category": "custom",
    "variables": {
      "subject": {
        "label": "Subject",
        "question": "What is the pitch about?",
        "type": "text",
        "placeholder": "e.g., My meal-prep startup",
        "required": true
      },
      "audience": {
        "label": "Audience",
        "question": "Who are you pitching to?",
        "type": "text",
        "placeholder": "e.g., Angel investors",
        "required": true
      },
      "duration": {
        "label": "Duration",
        "question": "How many seconds should the pitch run?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Presentation Outline Maker",
    "displayDescription": "Outlines a timed talk with hooks, evidence per point, Q&A prep, and visual cues.",
    "id": "custom-036",
    "prompt": "Create a presentation outline on {topic} for {audience} lasting about {minutes} minutes. Structure it as: hook, three main points with supporting evidence each, a story or example per point, anticipated questions with answers, and a memorable closing call to action. Note where visuals would help.",
    "description": "Builds a timed presentation outline with narrative structure, evidence, and anticipated questions.",
    "category": "custom",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What is the presentation about?",
        "type": "text",
        "placeholder": "e.g., Remote work productivity",
        "required": true
      },
      "audience": {
        "label": "Audience",
        "question": "Who is the audience?",
        "type": "text",
        "placeholder": "e.g., Company leadership",
        "required": true
      },
      "minutes": {
        "label": "Minutes",
        "question": "How long should the talk run?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Slide Content Writer",
    "displayDescription": "Writes sparse, punchy slide content with headlines, trimmed bullets, and visual suggestions.",
    "id": "custom-037",
    "prompt": "Write the content for a {slide_count}-slide deck about {topic}. For each slide give a concise headline of max 8 words, 3-5 bullets trimmed to essential phrases, and a note on what visual would work best. Keep text sparse — slides support the talk, they do not replace it.",
    "description": "Drafts minimalist slide content with strong headlines and visual direction for each slide.",
    "category": "custom",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What is the deck about?",
        "type": "text",
        "placeholder": "e.g., Q3 marketing results",
        "required": true
      },
      "slide_count": {
        "label": "Slide Count",
        "question": "How many slides should the deck have?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Speaker Notes Writer",
    "displayDescription": "Writes natural what-to-actually-say notes per slide with transitions and emphasis cues.",
    "id": "custom-038",
    "prompt": "Write detailed speaker notes for a presentation on {topic} with these slide headlines: {headlines}. For each slide, write what I should actually say in a natural conversational tone — about {words_per_slide} words — including transitions into the next slide and one pause-or-emphasis cue per slide.",
    "description": "Generates conversational speaker notes with transitions and delivery cues for every slide.",
    "category": "custom",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What is the presentation about?",
        "type": "text",
        "placeholder": "e.g., Our expansion strategy",
        "required": true
      },
      "headlines": {
        "label": "Slide Headlines",
        "question": "What are the slide headlines, in order?",
        "type": "textarea",
        "placeholder": "List one headline per line",
        "required": true
      },
      "words_per_slide": {
        "label": "Words Per Slide",
        "question": "Roughly how many spoken words per slide?",
        "type": "number",
        "placeholder": "e.g., 120",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Meeting Notes Formatter",
    "displayDescription": "Turns raw messy notes into a scannable document with decisions, actions, and owners.",
    "id": "custom-039",
    "prompt": "Format these raw meeting notes into a clean professional document: {notes}. Structure it with: date and attendees extracted where possible, key decisions, discussion summary by topic, action items with owners and deadlines, and open questions. Use headers and bullets so it is scannable in under a minute.",
    "description": "Reformats rough meeting notes into a structured document with decisions and action items.",
    "category": "custom",
    "variables": {
      "notes": {
        "label": "Raw Notes",
        "question": "What are the raw meeting notes?",
        "type": "textarea",
        "placeholder": "Paste your unformatted notes here",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Professional Email Drafter",
    "displayDescription": "Drafts a concise email with a clear subject, point-first opener, and specific call to action.",
    "id": "custom-040",
    "prompt": "Draft a {tone} email to {recipient} about {purpose}. Include a clear subject line, a one-sentence opener stating the point, the necessary details in short paragraphs, and a specific call to action with a deadline if relevant. Keep it under {max_words} words and sign off appropriately for the tone.",
    "description": "Writes a tight, professional email with a strong subject line and a clear ask.",
    "category": "custom",
    "variables": {
      "recipient": {
        "label": "Recipient",
        "question": "Who is the email for?",
        "type": "text",
        "placeholder": "e.g., A prospective client",
        "required": true
      },
      "purpose": {
        "label": "Purpose",
        "question": "What is the email about?",
        "type": "text",
        "placeholder": "e.g., Proposing a project timeline",
        "required": true
      },
      "tone": {
        "label": "Tone",
        "question": "What tone should the email use?",
        "type": "select",
        "options": [
          "Professional",
          "Friendly",
          "Formal",
          "Urgent"
        ],
        "required": true
      },
      "max_words": {
        "label": "Max Words",
        "question": "Maximum word count?",
        "type": "number",
        "placeholder": "e.g., 150",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Follow-Up Email Writer",
    "displayDescription": "Writes a warm, non-pushy follow-up that references last contact and names one clear next step.",
    "id": "custom-041",
    "prompt": "Write a follow-up email to {recipient} regarding {context}. Reference our last contact on {last_contact}, restate the value or request briefly without sounding pushy, and include one clear next step. Keep it under 100 words, warm but professional, with a subject line that does not look like a nudge.",
    "description": "Drafts a concise follow-up email that re-engages without pressure and drives one next step.",
    "category": "custom",
    "variables": {
      "recipient": {
        "label": "Recipient",
        "question": "Who are you following up with?",
        "type": "text",
        "placeholder": "e.g., A hiring manager",
        "required": true
      },
      "context": {
        "label": "Context",
        "question": "What is the follow-up about?",
        "type": "text",
        "placeholder": "e.g., The proposal I sent last week",
        "required": true
      },
      "last_contact": {
        "label": "Last Contact",
        "question": "When was your last contact with them?",
        "type": "date",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Cold Outreach Writer",
    "displayDescription": "Writes a personalized cold message with a researched opener, one proof point, and a low-friction ask.",
    "id": "custom-042",
    "prompt": "Write a cold outreach message to a {recipient_role} at {company} about {offer}. Open with a specific, researched observation about them — not flattery — connect it to the problem I solve in two sentences, add one proof point, and close with a low-friction ask such as a 15-minute call. Keep it under 150 words.",
    "description": "Composes a targeted cold outreach message built on a genuine observation and a soft call to action.",
    "category": "custom",
    "variables": {
      "recipient_role": {
        "label": "Recipient Role",
        "question": "What is the recipient's role?",
        "type": "text",
        "placeholder": "e.g., VP of Sales",
        "required": true
      },
      "company": {
        "label": "Company",
        "question": "What company do they work at?",
        "type": "text",
        "placeholder": "e.g., A mid-size logistics firm",
        "required": true
      },
      "offer": {
        "label": "Offer",
        "question": "What are you offering?",
        "type": "text",
        "placeholder": "e.g., A CRM onboarding service",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Resume Bullet Improver",
    "displayDescription": "Rewrites weak resume bullets with power verbs and quantified results, one line each.",
    "id": "custom-043",
    "prompt": "Improve these resume bullet points using strong action verbs and quantified results: {bullets}. For each original, give an improved version starting with a power verb, adding metrics or scope where detail is missing and marking guesses with [ESTIMATE], and cutting filler. Keep each bullet to one line.",
    "description": "Transforms flat resume bullets into punchy, metric-driven one-liners with strong action verbs.",
    "category": "custom",
    "variables": {
      "bullets": {
        "label": "Bullet Points",
        "question": "What resume bullets should be improved?",
        "type": "textarea",
        "placeholder": "Paste your bullets, one per line",
        "required": true
      }
    }
  },
  {
    "displayTitle": "LinkedIn About Writer",
    "displayDescription": "Writes a first-person LinkedIn About section with a hook, highlights, and a call to action.",
    "id": "custom-044",
    "prompt": "Write a LinkedIn About section for a {job_title} with {years} years of experience in {industry}. Write in first person, open with a hook about what drives my work, cover 2-3 career highlights with results, state what I am looking for next, and end with a call to action. Keep it conversational, around 200 words.",
    "description": "Drafts a compelling LinkedIn About section that blends personality, proof, and next steps.",
    "category": "custom",
    "variables": {
      "job_title": {
        "label": "Job Title",
        "question": "What is your job title?",
        "type": "text",
        "placeholder": "e.g., Product designer",
        "required": true
      },
      "years": {
        "label": "Years",
        "question": "How many years of experience?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "industry": {
        "label": "Industry",
        "question": "What industry are you in?",
        "type": "text",
        "placeholder": "e.g., Fintech",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Professional Bio Writer",
    "displayDescription": "Writes a human-sounding third-person bio at any length, from one-liner to full profile.",
    "id": "custom-045",
    "prompt": "Write a {length} professional bio for {name}, a {role} known for {known_for}. Write in third person, lead with the most impressive credential, weave in personality without fluff, and end with a current focus or fun fact. Make it sound human, not like a template.",
    "description": "Creates a polished professional bio tailored to length, with credentials and a touch of personality.",
    "category": "custom",
    "variables": {
      "name": {
        "label": "Name",
        "question": "Whose bio is this?",
        "type": "text",
        "placeholder": "e.g., Jordan Lee",
        "required": true
      },
      "role": {
        "label": "Role",
        "question": "What is their role?",
        "type": "text",
        "placeholder": "e.g., Data scientist",
        "required": true
      },
      "known_for": {
        "label": "Known For",
        "question": "What are they known for?",
        "type": "text",
        "placeholder": "e.g., Open-source ML tooling",
        "required": true
      },
      "length": {
        "label": "Length",
        "question": "How long should the bio be?",
        "type": "select",
        "options": [
          "One-liner",
          "Short paragraph",
          "Full bio"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Social Caption Writer",
    "displayDescription": "Writes platform-ready caption options in varied styles with a matching voice and hashtags.",
    "id": "custom-046",
    "prompt": "Write {count} social media caption options for a post about {topic} on {platform}. Vary the approach — one storytelling, one bold statement, one question-driven — keep each within the platform's natural length, match a {voice} voice, and add 3-5 relevant hashtags only where they fit the platform.",
    "description": "Generates multiple caption options for a post, each in a different style matched to the platform.",
    "category": "custom",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What is the post about?",
        "type": "text",
        "placeholder": "e.g., Our new product launch",
        "required": true
      },
      "platform": {
        "label": "Platform",
        "question": "Which platform is this for?",
        "type": "select",
        "options": [
          "Instagram",
          "LinkedIn",
          "X",
          "TikTok",
          "Facebook"
        ],
        "required": true
      },
      "voice": {
        "label": "Voice",
        "question": "What voice should the captions use?",
        "type": "select",
        "options": [
          "Bold",
          "Friendly",
          "Witty",
          "Inspirational",
          "Professional"
        ],
        "required": true
      },
      "count": {
        "label": "Caption Count",
        "question": "How many caption options?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Blog Post Outliner",
    "displayDescription": "Builds a full blog outline with SEO subheads, story slots, and flagged research needs.",
    "id": "custom-047",
    "prompt": "Create a detailed blog post outline on {topic} for {audience}. Include a working title, hook intro angle, 4-6 main sections with 2-3 subpoints each, a spot for a real example or story, SEO-friendly subheadings, and a conclusion with a call to action. Note where research or quotes are needed.",
    "description": "Produces a complete blog post outline with structure, SEO subheads, and research checkpoints.",
    "category": "custom",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What is the blog post about?",
        "type": "text",
        "placeholder": "e.g., Email marketing for creators",
        "required": true
      },
      "audience": {
        "label": "Audience",
        "question": "Who is the target reader?",
        "type": "text",
        "placeholder": "e.g., Solo founders",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Blog Intro Writer",
    "displayDescription": "Writes multiple blog opening paragraphs in distinct styles and recommends the best fit.",
    "id": "custom-048",
    "prompt": "Write {count} different opening paragraphs for a blog post titled {title} aimed at {audience}. Try distinct angles — a surprising statistic, a relatable story, a bold claim, a question — each under 80 words. Label each with its technique and recommend which fits the topic best.",
    "description": "Drafts several blog intros using different hook techniques and recommends the strongest one.",
    "category": "custom",
    "variables": {
      "title": {
        "label": "Title",
        "question": "What is the blog post title?",
        "type": "text",
        "placeholder": "e.g., Why mornings beat nights for deep work",
        "required": true
      },
      "audience": {
        "label": "Audience",
        "question": "Who is the reader?",
        "type": "text",
        "placeholder": "e.g., Knowledge workers",
        "required": true
      },
      "count": {
        "label": "Intro Count",
        "question": "How many intro versions?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Headline Generator",
    "displayDescription": "Generates clickable headlines in mixed formats with the three strongest starred and explained.",
    "id": "custom-049",
    "prompt": "Generate {count} headlines for {topic} in a {style} style. Mix formats — how-to, listicle, question, bold claim, curiosity gap — keep each under 12 words, avoid clickbait that overpromises, and star the three strongest with a one-line reason each for why they would get clicks.",
    "description": "Creates varied, honest headlines across formats and explains why the top three would perform.",
    "category": "custom",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What is the headline about?",
        "type": "text",
        "placeholder": "e.g., Saving money on groceries",
        "required": true
      },
      "count": {
        "label": "Headline Count",
        "question": "How many headlines?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      },
      "style": {
        "label": "Style",
        "question": "What style should the headlines use?",
        "type": "select",
        "options": [
          "Professional",
          "Playful",
          "Bold",
          "Curious"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Story Idea Generator",
    "displayDescription": "Generates original genre story ideas with premise, conflict, and a fresh twist each.",
    "id": "custom-050",
    "prompt": "Generate {count} original story ideas in the {genre} genre around the theme of {theme}. For each, give a one-sentence premise, the central conflict, and a one-line twist or hook that makes it fresh. Avoid genre clichés and vary the settings, stakes, and tones across ideas.",
    "description": "Produces fresh story ideas with premises, conflicts, and twists while avoiding genre clichés.",
    "category": "custom",
    "variables": {
      "count": {
        "label": "Idea Count",
        "question": "How many story ideas?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "genre": {
        "label": "Genre",
        "question": "What genre?",
        "type": "select",
        "options": [
          "Mystery",
          "Sci-fi",
          "Fantasy",
          "Romance",
          "Thriller",
          "Literary"
        ],
        "required": true
      },
      "theme": {
        "label": "Theme",
        "question": "What theme should the stories explore?",
        "type": "text",
        "placeholder": "e.g., Second chances",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Character Builder",
    "displayDescription": "Builds a layered character profile with contradiction, wound, voice, and pressure behavior.",
    "id": "custom-051",
    "prompt": "Build a rich character profile for a {role} in a {genre} story. Cover: name and age, appearance in two sentences, personality with one contradiction, backstory wound, current goal versus hidden need, distinctive voice or speech habit, and what they would do under pressure. Make them feel like a real person, not an archetype.",
    "description": "Develops a psychologically rich character with contradictions, wounds, and a distinctive voice.",
    "category": "custom",
    "variables": {
      "role": {
        "label": "Role",
        "question": "What is the character's role in the story?",
        "type": "text",
        "placeholder": "e.g., Reluctant detective",
        "required": true
      },
      "genre": {
        "label": "Genre",
        "question": "What genre is the story?",
        "type": "text",
        "placeholder": "e.g., Noir mystery",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Worldbuilding Assistant",
    "displayDescription": "Builds a coherent fictional world with premise, culture, conflict, and sensory detail.",
    "id": "custom-052",
    "prompt": "Help me build a fictional world for {project}. Define: the core premise in one paragraph, geography and climate, political power structure, economy and daily life, one cultural custom that shapes everything, the central conflict brewing, and three sensory details that make it feel alive. Flag any logic gaps.",
    "description": "Creates a detailed, internally consistent fictional world with culture, politics, and brewing conflict.",
    "category": "custom",
    "variables": {
      "project": {
        "label": "Project",
        "question": "What is the world for?",
        "type": "text",
        "placeholder": "e.g., My debut fantasy novel",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Plot Twist Ideas",
    "displayDescription": "Generates foreshadowable plot twists with planted clues, ranked by shock versus plausibility.",
    "id": "custom-053",
    "prompt": "Generate {count} plot twist ideas for a story where {premise}. Each twist must be foreshadowable — include the subtle clue planted earlier — and reframe what the reader thought they knew. Rank by shock value versus plausibility, and warn me about any twist that risks feeling like a cheat.",
    "description": "Invents fair-play plot twists with hidden clues and warns against twists that would feel cheap.",
    "category": "custom",
    "variables": {
      "count": {
        "label": "Twist Count",
        "question": "How many plot twists?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "premise": {
        "label": "Premise",
        "question": "What is the story's premise?",
        "type": "textarea",
        "placeholder": "Summarize your story setup",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Dialogue Polisher",
    "displayDescription": "Rewrites stiff dialogue with subtext, rhythm, and distinct voices, plus improvement notes.",
    "id": "custom-054",
    "prompt": "Polish this dialogue for natural speech: {dialogue}. Cut stiff exposition, add subtext so characters do not say exactly what they mean, vary sentence rhythms between speakers, and give each speaker one distinctive verbal tic. Return the polished version plus a note on the two biggest improvements.",
    "description": "Refines dialogue to sound natural with subtext, varied rhythms, and distinct character voices.",
    "category": "custom",
    "variables": {
      "dialogue": {
        "label": "Dialogue",
        "question": "What dialogue should be polished?",
        "type": "textarea",
        "placeholder": "Paste the dialogue here",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Poem Starter Kit",
    "displayDescription": "Gives evocative poem starters with a first line, a striking image, and a writing constraint.",
    "id": "custom-055",
    "prompt": "Give me {count} poem starters on the theme of {theme} in a {mood} mood. Each starter: an evocative first line, a striking image to build on, and a suggested form or constraint such as three stanzas or no adjectives. Make them specific enough to actually write from, not vague prompts.",
    "description": "Delivers concrete poem starters with first lines, images, and forms matched to your mood.",
    "category": "custom",
    "variables": {
      "count": {
        "label": "Starter Count",
        "question": "How many poem starters?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "theme": {
        "label": "Theme",
        "question": "What theme should the poems explore?",
        "type": "text",
        "placeholder": "e.g., Leaving home",
        "required": true
      },
      "mood": {
        "label": "Mood",
        "question": "What mood should the starters carry?",
        "type": "select",
        "options": [
          "Melancholic",
          "Joyful",
          "Reflective",
          "Fierce",
          "Tender"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Journaling Prompt Set",
    "displayDescription": "Creates a sequenced set of deep journaling prompts that move from surface to depth.",
    "id": "custom-056",
    "prompt": "Create a set of {count} journaling prompts about {focus} for {duration} of daily writing. Sequence them from surface-level to deep, mix reflective, creative, and action-oriented prompts, and make each one a single open-ended question I cannot answer with yes or no.",
    "description": "Builds a progressive journaling sequence with open-ended prompts that deepen over time.",
    "category": "custom",
    "variables": {
      "count": {
        "label": "Prompt Count",
        "question": "How many journaling prompts?",
        "type": "number",
        "placeholder": "e.g., 14",
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the journaling focus on?",
        "type": "text",
        "placeholder": "e.g., Career change",
        "required": true
      },
      "duration": {
        "label": "Duration",
        "question": "Over what period?",
        "type": "select",
        "options": [
          "One week",
          "Two weeks",
          "One month"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Reflection Question Pack",
    "displayDescription": "Writes probing reflection questions that go beyond surface lessons to values and emotions.",
    "id": "custom-057",
    "prompt": "Write {count} reflection questions to help me process this experience: {experience}. Go beyond surface-level lessons — probe emotions, assumptions challenged, what I would repeat, what I would change, and what this reveals about my values. Order them so answering flows like a conversation with myself.",
    "description": "Generates deep reflection questions that unpack emotions, assumptions, and values from an experience.",
    "category": "custom",
    "variables": {
      "count": {
        "label": "Question Count",
        "question": "How many reflection questions?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "experience": {
        "label": "Experience",
        "question": "What experience are you reflecting on?",
        "type": "text",
        "placeholder": "e.g., My first year managing a team",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Values Clarifier",
    "displayDescription": "Clarifies your core values through ranking and trade-off scenarios, ending in a usable statement.",
    "id": "custom-058",
    "prompt": "Help me clarify my core values around {life_area}. Start with a list of ten values for me to rank, then probe my top three with scenario questions that reveal trade-offs, and finish by drafting a one-paragraph values statement I can actually use for decisions. Push back gently where my stated values conflict with my described behavior.",
    "description": "Guides a values-clarification exercise with ranking, trade-off scenarios, and a decision-ready statement.",
    "category": "custom",
    "variables": {
      "life_area": {
        "label": "Life Area",
        "question": "What area of life should we clarify values for?",
        "type": "text",
        "placeholder": "e.g., Work and career",
        "required": true
      }
    }
  },
  {
    "displayTitle": "SMART Goal Setter",
    "displayDescription": "Turns a vague goal into a SMART goal with milestones, dates, and an obstacle plan.",
    "id": "custom-059",
    "prompt": "Turn this vague goal into a SMART goal: {goal}. Rewrite it to be Specific, Measurable, Achievable, Relevant, and Time-bound — showing each criterion explicitly — then break it into {milestones} milestones with target dates, and name the single biggest obstacle plus how to handle it.",
    "description": "Converts a fuzzy aspiration into a concrete SMART goal with milestones and obstacle planning.",
    "category": "custom",
    "variables": {
      "goal": {
        "label": "Goal",
        "question": "What is your vague goal?",
        "type": "text",
        "placeholder": "e.g., Get in shape",
        "required": true
      },
      "milestones": {
        "label": "Milestones",
        "question": "How many milestones should it be broken into?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Personal Mission Statement",
    "displayDescription": "Drafts three mission statement versions from your strengths and passions, then recommends one.",
    "id": "custom-060",
    "prompt": "Help me write a personal mission statement based on: my strengths ({strengths}), what I care about ({passions}), and the impact I want ({impact}). Draft three versions — bold, grounded, and poetic — each under 40 words, then recommend one and explain why it fits best.",
    "description": "Crafts three distinct personal mission statements from your inputs and recommends the strongest.",
    "category": "custom",
    "variables": {
      "strengths": {
        "label": "Strengths",
        "question": "What are your key strengths?",
        "type": "text",
        "placeholder": "e.g., Listening, systems thinking",
        "required": true
      },
      "passions": {
        "label": "Passions",
        "question": "What do you care deeply about?",
        "type": "text",
        "placeholder": "e.g., Helping founders grow",
        "required": true
      },
      "impact": {
        "label": "Impact",
        "question": "What impact do you want to have?",
        "type": "text",
        "placeholder": "e.g., Stronger local businesses",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Personal Mantra Creator",
    "displayDescription": "Creates short, believable mantras for your purpose with the psychology behind the top pick.",
    "id": "custom-061",
    "prompt": "Create {count} personal mantra options for this purpose: {purpose}. Each should be short (under 10 words), present-tense, believable rather than grandiose, and memorable enough to recall under stress. Explain the psychology behind your top pick and suggest when to repeat it.",
    "description": "Generates memorable, psychologically grounded mantras tailored to your specific purpose.",
    "category": "custom",
    "variables": {
      "count": {
        "label": "Mantra Count",
        "question": "How many mantra options?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "purpose": {
        "label": "Purpose",
        "question": "What is the mantra for?",
        "type": "text",
        "placeholder": "e.g., Staying calm before presentations",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Gratitude Practice Builder",
    "displayDescription": "Builds a sustainable daily gratitude system with deepening prompts and hard-day variations.",
    "id": "custom-062",
    "prompt": "Build a {duration} gratitude practice around {focus}. Give me a simple daily format with 3 prompts per day that go deeper than surface-level lists, weekly reflection questions, and one creative variation for days when gratitude feels hard. Keep the whole system under five minutes a day.",
    "description": "Designs a quick daily gratitude practice with progressive prompts and options for difficult days.",
    "category": "custom",
    "variables": {
      "duration": {
        "label": "Duration",
        "question": "How long should the practice run?",
        "type": "select",
        "options": [
          "7-day",
          "30-day",
          "Ongoing"
        ],
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the gratitude practice focus on?",
        "type": "text",
        "placeholder": "e.g., Relationships at work",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Weekly Reflection Review",
    "displayDescription": "Guides a structured weekly review covering wins, lessons, energy, and next week's focus.",
    "id": "custom-063",
    "prompt": "Guide me through a weekly reflection for the week of {week}. Ask about: top wins, the biggest challenge and what it taught me, energy drains versus energy givers, one relationship to invest in, and the single most important focus for next week. Structure it as questions I answer, with a summary template at the end.",
    "description": "Walks you through a weekly review of wins, challenges, energy, and priorities for next week.",
    "category": "custom",
    "variables": {
      "week": {
        "label": "Week",
        "question": "Which week are you reflecting on?",
        "type": "date",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Lessons Learned Capture",
    "displayDescription": "Captures honest lessons from a project with root causes and owned action items for next time.",
    "id": "custom-064",
    "prompt": "Help me capture lessons learned from {project_or_event}. Structure it as: what we set out to do, what actually happened, what went well and why, what did not go well with root causes not blame, and 3-5 actionable lessons for next time with owners. Keep it honest and forward-looking.",
    "description": "Produces a candid lessons-learned document with root causes and actionable takeaways.",
    "category": "custom",
    "variables": {
      "project_or_event": {
        "label": "Project or Event",
        "question": "What project or event should we review?",
        "type": "text",
        "placeholder": "e.g., The website relaunch",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Team Retrospective Facilitator",
    "displayDescription": "Facilitates a full retrospective with icebreaker, Start-Stop-Continue, and prioritized action items.",
    "id": "custom-065",
    "prompt": "Facilitate a retrospective for a {team_type} team after {sprint_or_project}. Provide: an icebreaker question, a Start-Stop-Continue framework with example prompts, guidance on surfacing the elephant in the room safely, a voting method to prioritize issues, and a template for turning the top 3 into action items.",
    "description": "Runs a complete team retrospective from icebreaker to prioritized, owned action items.",
    "category": "custom",
    "variables": {
      "team_type": {
        "label": "Team Type",
        "question": "What kind of team is this?",
        "type": "text",
        "placeholder": "e.g., Product engineering",
        "required": true
      },
      "sprint_or_project": {
        "label": "Sprint or Project",
        "question": "What sprint or project just finished?",
        "type": "text",
        "placeholder": "e.g., Sprint 12",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Checklist Builder",
    "displayDescription": "Builds a thorough phased checklist with critical-path flags and verification checkpoints.",
    "id": "custom-066",
    "prompt": "Build a comprehensive checklist for {task}. Break it into logical phases, order steps by dependency, mark critical-path items with [CRITICAL], add verification checkpoints where mistakes are costly, and include a before-you-start prep section. Make it thorough enough that a beginner could follow it.",
    "description": "Creates a detailed, dependency-ordered checklist with critical flags a beginner can follow.",
    "category": "custom",
    "variables": {
      "task": {
        "label": "Task",
        "question": "What task needs a checklist?",
        "type": "text",
        "placeholder": "e.g., Publishing a podcast episode",
        "required": true
      }
    }
  },
  {
    "displayTitle": "SOP Writer",
    "displayDescription": "Writes a new-hire-proof standard operating procedure with steps, mistakes, and troubleshooting.",
    "id": "custom-067",
    "prompt": "Write a standard operating procedure for {process} performed by a {role}. Include: purpose, scope, required tools and materials, numbered steps with expected outcomes per step, common mistakes and how to avoid them, and a troubleshooting section. Write so a new hire can follow it without asking questions.",
    "description": "Drafts a complete SOP with clear steps, expected outcomes, and troubleshooting for new hires.",
    "category": "custom",
    "variables": {
      "process": {
        "label": "Process",
        "question": "What process needs an SOP?",
        "type": "text",
        "placeholder": "e.g., Processing customer refunds",
        "required": true
      },
      "role": {
        "label": "Role",
        "question": "Who performs this process?",
        "type": "text",
        "placeholder": "e.g., Support specialist",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Template Maker",
    "displayDescription": "Creates a reusable template with labeled sections, bracket placeholders, and a filled example.",
    "id": "custom-068",
    "prompt": "Create a reusable template for {document_type} used for {purpose}. Include labeled sections with placeholder text in [BRACKETS], brief guidance under each section header on what goes there, and a filled-in mini example. Design it so I can copy it fresh each time.",
    "description": "Builds a copy-ready template with guidance notes and a worked example for reference.",
    "category": "custom",
    "variables": {
      "document_type": {
        "label": "Document Type",
        "question": "What kind of document is the template for?",
        "type": "text",
        "placeholder": "e.g., Project kickoff brief",
        "required": true
      },
      "purpose": {
        "label": "Purpose",
        "question": "What will the template be used for?",
        "type": "text",
        "placeholder": "e.g., Aligning stakeholders",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Comparison Table Builder",
    "displayDescription": "Builds a fact-based comparison table with criteria columns and a recommendation for your use case.",
    "id": "custom-069",
    "prompt": "Build a comparison table for these options: {options}. Choose {criteria_count} relevant criteria, present a markdown table with options as columns, fill each cell with specific facts rather than vague adjectives, add a bottom-line row per option, and finish with a recommendation for this use case: {use_case}.",
    "description": "Produces a detailed comparison table with factual cells and a tailored recommendation.",
    "category": "custom",
    "variables": {
      "options": {
        "label": "Options",
        "question": "What options should be compared?",
        "type": "textarea",
        "placeholder": "List the options to compare",
        "required": true
      },
      "criteria_count": {
        "label": "Criteria Count",
        "question": "How many comparison criteria?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "use_case": {
        "label": "Use Case",
        "question": "What is your specific use case?",
        "type": "text",
        "placeholder": "e.g., A 10-person remote team",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Timeline Builder",
    "displayDescription": "Builds a chronological timeline grouped into eras with turning points and present-day relevance.",
    "id": "custom-070",
    "prompt": "Build a timeline of {subject} covering {period}. List events chronologically with dates, give a one-sentence significance for each, and group them into 3-5 eras with labels. Highlight the three most pivotal turning points and end with how this history shapes the present.",
    "description": "Creates an era-grouped timeline that connects historical events to their present-day impact.",
    "category": "custom",
    "variables": {
      "subject": {
        "label": "Subject",
        "question": "What should the timeline cover?",
        "type": "text",
        "placeholder": "e.g., The electric vehicle industry",
        "required": true
      },
      "period": {
        "label": "Period",
        "question": "What time period should it span?",
        "type": "text",
        "placeholder": "e.g., 1990 to today",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Process Explainer",
    "displayDescription": "Explains any process stage by stage with an analogy for the tricky part and a recap.",
    "id": "custom-071",
    "prompt": "Explain the process of {process} to a {audience} audience. Break it into clear numbered stages, explain what happens and why at each stage, use one everyday analogy for the trickiest part, define any jargon on first use, and end with a one-paragraph recap of the whole flow.",
    "description": "Breaks a complex process into clear stages with analogies and jargon-free explanations.",
    "category": "custom",
    "variables": {
      "process": {
        "label": "Process",
        "question": "What process should be explained?",
        "type": "text",
        "placeholder": "e.g., How mortgages get approved",
        "required": true
      },
      "audience": {
        "label": "Audience",
        "question": "Who is the explanation for?",
        "type": "text",
        "placeholder": "e.g., First-time buyers",
        "required": true
      }
    }
  },
  {
    "displayTitle": "How-To Guide Writer",
    "displayDescription": "Writes a complete how-to guide with materials, steps, common mistakes, and troubleshooting.",
    "id": "custom-072",
    "prompt": "Write a complete how-to guide for {task} aimed at a {skill_level}. Include: what you will need, numbered steps with the why behind tricky ones, common mistakes with fixes, and a troubleshooting section for when things go wrong. Keep steps actionable, not theoretical.",
    "description": "Produces a practical step-by-step guide with mistake prevention and troubleshooting for real-world use.",
    "category": "custom",
    "variables": {
      "task": {
        "label": "Task",
        "question": "What task should the guide teach?",
        "type": "text",
        "placeholder": "e.g., Brewing pour-over coffee",
        "required": true
      },
      "skill_level": {
        "label": "Skill Level",
        "question": "What is the reader's skill level?",
        "type": "select",
        "options": [
          "Complete beginner",
          "Some experience",
          "Intermediate"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Tutorial Outline Builder",
    "displayDescription": "Outlines a tutorial from prerequisites to capstone with exercises and stuck-points flagged.",
    "id": "custom-073",
    "prompt": "Create a tutorial outline teaching {skill} to {audience}. Sequence lessons from prerequisite knowledge to a capstone project, give each lesson a goal and estimated time, include one hands-on exercise per lesson, and mark where learners typically get stuck with a tip to unstick them.",
    "description": "Designs a lesson-by-lesson tutorial plan with exercises, timing, and trouble-spot guidance.",
    "category": "custom",
    "variables": {
      "skill": {
        "label": "Skill",
        "question": "What skill should the tutorial teach?",
        "type": "text",
        "placeholder": "e.g., Figma auto-layout",
        "required": true
      },
      "audience": {
        "label": "Audience",
        "question": "Who is learning?",
        "type": "text",
        "placeholder": "e.g., Junior designers",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Workshop Planner",
    "displayDescription": "Plans a timed workshop agenda with activities, materials, energizers, and buffer strategy.",
    "id": "custom-074",
    "prompt": "Plan a {duration}-hour workshop on {topic} for {audience_size} participants. Structure the agenda in time blocks mixing teaching, activities, and discussion; include materials needed, one energizer, small-group exercise instructions, and a closing reflection. Build in buffer time and note what to cut if running behind.",
    "description": "Creates a complete workshop plan with timed blocks, activities, materials, and contingency notes.",
    "category": "custom",
    "variables": {
      "duration": {
        "label": "Duration",
        "question": "How many hours is the workshop?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "topic": {
        "label": "Topic",
        "question": "What is the workshop about?",
        "type": "text",
        "placeholder": "e.g., Giving better feedback",
        "required": true
      },
      "audience_size": {
        "label": "Audience Size",
        "question": "How many participants?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Icebreaker Generator",
    "displayDescription": "Generates setting-appropriate icebreakers with timing notes, including options for shy folks.",
    "id": "custom-075",
    "prompt": "Generate {count} icebreaker questions for {setting} with {audience}. Mix light and fun with mildly thoughtful — nothing too personal — and include two that work specifically for shy participants. Label each with why it works and the best moment to use it.",
    "description": "Produces tailored icebreaker questions with usage guidance for any group setting.",
    "category": "custom",
    "variables": {
      "count": {
        "label": "Icebreaker Count",
        "question": "How many icebreakers?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "setting": {
        "label": "Setting",
        "question": "What is the setting?",
        "type": "text",
        "placeholder": "e.g., A team offsite",
        "required": true
      },
      "audience": {
        "label": "Audience",
        "question": "Who is participating?",
        "type": "text",
        "placeholder": "e.g., New hires",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Name Generator",
    "displayDescription": "Generates on-vibe name ideas with connotation checks and top-three rationale.",
    "id": "custom-076",
    "prompt": "Generate {count} name ideas for {thing} with a {vibe} vibe. Mix styles — descriptive, invented, metaphorical — check each for obvious negative connotations, note domain and social-handle friendliness where relevant, and star your top three with reasons. Avoid anything trademark-risky or hard to spell.",
    "description": "Brainstorms distinctive, practical names across styles with safety checks and ranked favorites.",
    "category": "custom",
    "variables": {
      "count": {
        "label": "Name Count",
        "question": "How many name ideas?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      },
      "thing": {
        "label": "Thing",
        "question": "What needs a name?",
        "type": "text",
        "placeholder": "e.g., A dog-walking app",
        "required": true
      },
      "vibe": {
        "label": "Vibe",
        "question": "What vibe should the names have?",
        "type": "select",
        "options": [
          "Professional",
          "Playful",
          "Bold",
          "Elegant",
          "Minimal"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Slogan Generator",
    "displayDescription": "Writes memorable slogans tied to real brand benefits, with strategy notes on the best.",
    "id": "custom-077",
    "prompt": "Write {count} slogan options for {brand} targeting {audience}. Keep each under 8 words, make them memorable through rhythm, contrast, or wordplay, tie each to a specific brand benefit, and explain the strategy behind your top three. Avoid generic claims about being the best or offering quality service.",
    "description": "Crafts punchy slogans anchored to real benefits, with the thinking behind the top picks.",
    "category": "custom",
    "variables": {
      "count": {
        "label": "Slogan Count",
        "question": "How many slogan options?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "brand": {
        "label": "Brand",
        "question": "What is the brand?",
        "type": "text",
        "placeholder": "e.g., A local bakery",
        "required": true
      },
      "audience": {
        "label": "Audience",
        "question": "Who is the target audience?",
        "type": "text",
        "placeholder": "e.g., Busy parents",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Research Plan Builder",
    "displayDescription": "Builds a scoped research plan with sub-questions, source types, milestones, and bias watch-outs.",
    "id": "custom-078",
    "prompt": "Build a research plan for investigating this question: {question}. Define the scope, list the key sub-questions to answer, suggest {source_count} types of sources to consult with where to find them, propose a method for organizing findings, set milestones, and flag likely biases or gaps to watch for.",
    "description": "Creates a structured research plan from scope to sources, milestones, and bias safeguards.",
    "category": "custom",
    "variables": {
      "question": {
        "label": "Research Question",
        "question": "What question are you investigating?",
        "type": "text",
        "placeholder": "e.g., Do standing desks improve focus?",
        "required": true
      },
      "source_count": {
        "label": "Source Types",
        "question": "How many types of sources should be suggested?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Source Credibility Checker",
    "displayDescription": "Evaluates a source's credibility across author, evidence, bias, and recency with a clear verdict.",
    "id": "custom-079",
    "prompt": "Evaluate the credibility of this source for my research on {topic}: {source_info}. Assess: author expertise, publication reputation, evidence quality, potential bias or funding influence, and recency. Give a verdict of strong, usable with caution, or unreliable with reasons, and suggest what corroborating source to find.",
    "description": "Assesses whether a source is trustworthy and recommends what to corroborate it with.",
    "category": "custom",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What is your research topic?",
        "type": "text",
        "placeholder": "e.g., Sleep and memory",
        "required": true
      },
      "source_info": {
        "label": "Source Info",
        "question": "Describe the source to evaluate.",
        "type": "textarea",
        "placeholder": "e.g., Author, publication, date, key claims",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Debate Prep Both Sides",
    "displayDescription": "Prepares you to argue either side with strong arguments, rebuttals, weak points, and closers.",
    "id": "custom-080",
    "prompt": "Prepare me to debate this motion — I need BOTH sides: {motion}. For the proposition: three strongest arguments with supporting evidence. For the opposition: three strongest arguments with evidence. Then give each side's likely rebuttals to the other, the single weakest point on each side, and two killer closing lines per side.",
    "description": "Builds a complete two-sided debate brief with arguments, rebuttals, and closing lines.",
    "category": "custom",
    "variables": {
      "motion": {
        "label": "Motion",
        "question": "What is the debate motion?",
        "type": "text",
        "placeholder": "e.g., Social media does more harm than good",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Argument Strengthener",
    "displayDescription": "Fortifies your argument with evidence, objection rebuttals, and a vivid persuasive example.",
    "id": "custom-081",
    "prompt": "Strengthen my argument that {claim}. Add the strongest supporting evidence and reasoning, anticipate the {objections} most likely objections with rebuttals, tighten the logic chain step by step, and suggest one vivid example or analogy that makes it persuasive. Flag any weak links honestly.",
    "description": "Reinforces an argument with evidence, preemptive rebuttals, and honest weak-spot flagging.",
    "category": "custom",
    "variables": {
      "claim": {
        "label": "Claim",
        "question": "What claim should be strengthened?",
        "type": "textarea",
        "placeholder": "e.g., Remote work increases productivity",
        "required": true
      },
      "objections": {
        "label": "Objection Count",
        "question": "How many likely objections should be rebutted?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Counterargument Finder",
    "displayDescription": "Steelmans the opposition against your position and tells you what would change your mind.",
    "id": "custom-082",
    "prompt": "Find the strongest counterarguments against this position: {position}. Steelman the opposition — present their case better than they would — rank counterarguments by strength, and for each note whether it refutes, weakens, or merely complicates my position. End with what evidence would change my mind.",
    "description": "Surfaces the strongest opposing arguments, fairly stated and ranked, with mind-changing criteria.",
    "category": "custom",
    "variables": {
      "position": {
        "label": "Position",
        "question": "What position should be challenged?",
        "type": "textarea",
        "placeholder": "State your position clearly",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Logical Fallacy Checker",
    "displayDescription": "Audits an argument for named fallacies with quotes, plain-language explanations, and fixes.",
    "id": "custom-083",
    "prompt": "Check this argument for logical fallacies: {argument}. Identify each fallacy by name, quote the offending passage, explain in plain language why it is a fallacy, rate its severity, and suggest how to fix the reasoning. If the argument is sound, say so and explain what makes it strong.",
    "description": "Scans an argument for logical fallacies and explains each one with severity ratings and fixes.",
    "category": "custom",
    "variables": {
      "argument": {
        "label": "Argument",
        "question": "What argument should be checked?",
        "type": "textarea",
        "placeholder": "Paste the argument here",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Data Interpreter",
    "displayDescription": "Translates raw data into plain-language patterns, surprises, limitations, and decisions.",
    "id": "custom-084",
    "prompt": "Interpret this data for me: {data}. Summarize the key patterns in plain language, highlight the most important comparisons, note any surprising or counterintuitive findings, flag limitations or missing context, and suggest what decision this data supports — with appropriate caution.",
    "description": "Turns raw data into clear insights with caveats and a cautious decision recommendation.",
    "category": "custom",
    "variables": {
      "data": {
        "label": "Data",
        "question": "What data should be interpreted?",
        "type": "textarea",
        "placeholder": "Paste or describe the data",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Chart Explainer",
    "displayDescription": "Explains what a chart really shows, including details casual viewers miss and misleading reads.",
    "id": "custom-085",
    "prompt": "Explain what this chart shows: {chart_description}. Describe the axes and what each visual element represents, state the main trend or takeaway in one sentence, point out two details a casual viewer would miss, and note one way the chart could mislead if read carelessly.",
    "description": "Decodes a chart's message, hidden details, and potential misreadings in plain language.",
    "category": "custom",
    "variables": {
      "chart_description": {
        "label": "Chart Description",
        "question": "Describe the chart to explain.",
        "type": "textarea",
        "placeholder": "e.g., A bar chart of monthly sales by region",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Survey Results Analyzer",
    "displayDescription": "Analyzes survey results into headline findings, segments, surprises, and three actions.",
    "id": "custom-086",
    "prompt": "Analyze these survey results: {results}. Summarize the headline findings, segment responses by {segment} if the data allows, identify the most surprising result and the most actionable one, note sample-size caveats, and recommend three concrete actions based on the data.",
    "description": "Distills survey data into findings, segments, and three concrete recommended actions.",
    "category": "custom",
    "variables": {
      "results": {
        "label": "Results",
        "question": "What are the survey results?",
        "type": "textarea",
        "placeholder": "Paste the results or summary data",
        "required": true
      },
      "segment": {
        "label": "Segment",
        "question": "How should responses be segmented?",
        "type": "text",
        "placeholder": "e.g., By age group",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Weighted Pros and Cons",
    "displayDescription": "Builds a weighted pros-cons table that reveals which single factor would flip the outcome.",
    "id": "custom-087",
    "prompt": "Build a weighted pros-and-cons analysis for {decision}. List all pros and cons, assign each factor a weight from 1-5 by importance while showing your reasoning, multiply through in a table, and give a verdict — plus name the single factor that would flip the outcome if it changed.",
    "description": "Weighs every pro and con by importance to deliver a verdict and identify the swing factor.",
    "category": "custom",
    "variables": {
      "decision": {
        "label": "Decision",
        "question": "What decision needs a pros-and-cons analysis?",
        "type": "text",
        "placeholder": "e.g., Accepting the job offer",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Meeting Icebreaker Set",
    "displayDescription": "Generates quick under-two-minute icebreakers tailored to your meeting type and video calls.",
    "id": "custom-088",
    "prompt": "Generate {count} quick icebreakers specifically for kicking off a {meeting_type} meeting with {team_size} people. Keep each under two minutes, make them relevant to work without being boring, include one that surfaces useful context for the meeting topic, and note which work best on video calls.",
    "description": "Creates fast, work-relevant icebreakers tuned to your meeting type and team size.",
    "category": "custom",
    "variables": {
      "count": {
        "label": "Icebreaker Count",
        "question": "How many icebreakers?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "meeting_type": {
        "label": "Meeting Type",
        "question": "What kind of meeting is it?",
        "type": "text",
        "placeholder": "e.g., Weekly standup",
        "required": true
      },
      "team_size": {
        "label": "Team Size",
        "question": "How many people attend?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Event Name Generator",
    "displayDescription": "Generates event names in clever, descriptive, and intriguing styles with top-three rationale.",
    "id": "custom-089",
    "prompt": "Generate {count} name ideas for a {event_type} event about {theme}. Mix clever, descriptive, and intriguing styles; make sure each name hints at what attendees get; avoid overused words like summit or expo unless they genuinely fit; and star the top three with a one-line rationale each.",
    "description": "Brainstorms distinctive event names across styles, ranked with clear reasoning.",
    "category": "custom",
    "variables": {
      "count": {
        "label": "Name Count",
        "question": "How many event name ideas?",
        "type": "number",
        "placeholder": "e.g., 12",
        "required": true
      },
      "event_type": {
        "label": "Event Type",
        "question": "What kind of event is it?",
        "type": "text",
        "placeholder": "e.g., Networking mixer",
        "required": true
      },
      "theme": {
        "label": "Theme",
        "question": "What is the event's theme?",
        "type": "text",
        "placeholder": "e.g., Sustainable startups",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Tagline Writer",
    "displayDescription": "Writes punchy taglines capturing your essence, with the concept behind each top pick.",
    "id": "custom-090",
    "prompt": "Write {count} tagline options for {subject} that capture this essence: {essence}. Keep each under 10 words, aim for memorability through rhythm or contrast, avoid jargon and generic superlatives, and explain the concept behind your top three picks.",
    "description": "Crafts memorable taglines rooted in your core essence, with strategy notes on the best.",
    "category": "custom",
    "variables": {
      "count": {
        "label": "Tagline Count",
        "question": "How many tagline options?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What is the tagline for?",
        "type": "text",
        "placeholder": "e.g., A freelance copywriting service",
        "required": true
      },
      "essence": {
        "label": "Essence",
        "question": "What essence should it capture?",
        "type": "text",
        "placeholder": "e.g., Honest, no-fluff marketing",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Mission vs Vision Clarifier",
    "displayDescription": "Drafts distinct mission and vision statements and recommends the strongest pair.",
    "id": "custom-091",
    "prompt": "Help me write distinct mission and vision statements for {organization}. First clarify the difference with a one-line definition of each, then draft three mission options covering what we do, for whom, and why it matters, plus three vision options describing the future we are building toward, and recommend the strongest pair with reasons.",
    "description": "Produces clear mission and vision options for an organization and recommends the best pairing.",
    "category": "custom",
    "variables": {
      "organization": {
        "label": "Organization",
        "question": "What organization is this for?",
        "type": "text",
        "placeholder": "e.g., A community food bank",
        "required": true
      }
    }
  },
  {
    "displayTitle": "OKR Goal Setter",
    "displayDescription": "Sets one ambitious objective with measurable key results and a weekly check-in format.",
    "id": "custom-092",
    "prompt": "Help me set OKRs for {objective_area} for the {timeframe}. Draft one ambitious objective in plain language, then 3-4 measurable key results with specific numbers and deadlines. Check that each key result is truly measurable, flag any that are actually tasks in disguise, and suggest a weekly check-in format.",
    "description": "Builds a complete OKR set with measurable key results and a rhythm for tracking them.",
    "category": "custom",
    "variables": {
      "objective_area": {
        "label": "Objective Area",
        "question": "What area should the OKRs cover?",
        "type": "text",
        "placeholder": "e.g., Customer onboarding",
        "required": true
      },
      "timeframe": {
        "label": "Timeframe",
        "question": "What is the OKR timeframe?",
        "type": "select",
        "options": [
          "Quarter",
          "Half-year",
          "Year"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "KPI Picker",
    "displayDescription": "Recommends ranked KPIs with definitions, measurement notes, gaming warnings, and counter-metrics.",
    "id": "custom-093",
    "prompt": "Recommend {count} KPIs for tracking {goal} in this context: {context}. For each KPI: define it precisely, explain why it matters, note how to measure it, warn about how it could be gamed, and pair it with a counter-metric. Rank them by importance and flag vanity metrics to avoid.",
    "description": "Selects meaningful KPIs with gaming safeguards and counter-metrics, ranked by importance.",
    "category": "custom",
    "variables": {
      "count": {
        "label": "KPI Count",
        "question": "How many KPIs should be recommended?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What goal are you tracking?",
        "type": "text",
        "placeholder": "e.g., Newsletter growth",
        "required": true
      },
      "context": {
        "label": "Context",
        "question": "What is the context?",
        "type": "text",
        "placeholder": "e.g., A bootstrapped SaaS",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Stakeholder Mapper",
    "displayDescription": "Maps stakeholders on a power-interest grid with tailored engagement strategies per quadrant.",
    "id": "custom-094",
    "prompt": "Map the stakeholders for {project}. List each stakeholder or group, plot them on a power-versus-interest grid described in text, note what each one wants and fears, and recommend a specific engagement strategy per quadrant — manage closely, keep satisfied, keep informed, or monitor.",
    "description": "Identifies project stakeholders, plots their influence, and prescribes engagement strategies.",
    "category": "custom",
    "variables": {
      "project": {
        "label": "Project",
        "question": "What project needs stakeholder mapping?",
        "type": "text",
        "placeholder": "e.g., The office relocation",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Risk Brainstorm",
    "displayDescription": "Brainstorms categorized risks with likelihood-impact ratings and mitigations for the top three.",
    "id": "custom-095",
    "prompt": "Brainstorm risks for {project_or_plan}. Generate risks across categories — financial, operational, reputational, technical, and human — rate each by likelihood and impact as High, Medium, or Low, identify the top three by expected damage, and propose one concrete mitigation per top risk.",
    "description": "Surfaces risks across five categories with ratings and concrete mitigations for the worst three.",
    "category": "custom",
    "variables": {
      "project_or_plan": {
        "label": "Project or Plan",
        "question": "What project or plan should be risk-assessed?",
        "type": "text",
        "placeholder": "e.g., Launching in a new market",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Assumption Tester",
    "displayDescription": "Pressure-tests your plan's load-bearing assumptions with evidence checks and cheap validation tests.",
    "id": "custom-096",
    "prompt": "Pressure-test the key assumptions behind this plan: {plan}. List the {assumption_count} most load-bearing assumptions, and for each: state what evidence supports it, what would prove it wrong, and design one cheap, fast test to validate it. Rank them by risk — which assumption, if wrong, sinks the plan?",
    "description": "Finds the riskiest assumptions in a plan and designs fast, cheap tests to validate each one.",
    "category": "custom",
    "variables": {
      "plan": {
        "label": "Plan",
        "question": "What plan should be pressure-tested?",
        "type": "textarea",
        "placeholder": "Describe your plan",
        "required": true
      },
      "assumption_count": {
        "label": "Assumption Count",
        "question": "How many assumptions should be tested?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      }
    }
  },
  {
    "displayTitle": "First-Principles Breakdown",
    "displayDescription": "Strips a problem to fundamental truths and rebuilds a solution from scratch.",
    "id": "custom-097",
    "prompt": "Break down this problem using first-principles thinking: {problem}. Strip away assumptions and conventions to the fundamental truths, rebuild the solution from those truths step by step, challenge me on any assumption I smuggle back in, and contrast the first-principles solution with the conventional approach.",
    "description": "Deconstructs a problem to its fundamentals and rebuilds a solution free of inherited assumptions.",
    "category": "custom",
    "variables": {
      "problem": {
        "label": "Problem",
        "question": "What problem should be broken down?",
        "type": "text",
        "placeholder": "e.g., High customer support costs",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Five Whys Analysis",
    "displayDescription": "Drills past symptoms with five whys to find the true root cause and a root-level fix.",
    "id": "custom-098",
    "prompt": "Run a Five Whys analysis on this problem: {problem}. Ask why five times, or until we hit a root cause, digging past symptoms each round, then state the root cause clearly, distinguish it from contributing factors, and propose one fix targeting the root — not the symptoms.",
    "description": "Traces a problem through five layers of why to expose the root cause and a targeted fix.",
    "category": "custom",
    "variables": {
      "problem": {
        "label": "Problem",
        "question": "What problem should be analyzed?",
        "type": "textarea",
        "placeholder": "Describe the problem and its symptoms",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Fishbone Diagram Guide",
    "displayDescription": "Guides you through building an Ishikawa diagram with categorized causes and root-cause picks.",
    "id": "custom-099",
    "prompt": "Guide me in building a fishbone (Ishikawa) diagram for this problem: {problem}. Define the head as the effect, then generate potential causes across the standard categories — People, Process, Equipment, Materials, Environment, Management — with 2-3 specific causes each, and help me pick the most likely root causes to investigate first.",
    "description": "Walks through a fishbone diagram across six cause categories to isolate likely root causes.",
    "category": "custom",
    "variables": {
      "problem": {
        "label": "Problem",
        "question": "What problem should the diagram analyze?",
        "type": "text",
        "placeholder": "e.g., Declining product quality",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Pareto Analysis Helper",
    "displayDescription": "Applies 80/20 analysis to your data to find the vital few causes worth focusing on.",
    "id": "custom-100",
    "prompt": "Apply Pareto analysis to this situation: {situation}, using this data: {data}. Identify which 20% of causes drive roughly 80% of the effect, present the ranking clearly, quantify the concentration, suggest where to focus effort for maximum leverage, and note any caveats about the data quality.",
    "description": "Runs an 80/20 analysis on your data to pinpoint where focused effort pays off most.",
    "category": "custom",
    "variables": {
      "situation": {
        "label": "Situation",
        "question": "What situation should be analyzed?",
        "type": "text",
        "placeholder": "e.g., Customer complaints",
        "required": true
      },
      "data": {
        "label": "Data",
        "question": "What data should the analysis use?",
        "type": "textarea",
        "placeholder": "Paste or describe the data",
        "required": true
      }
    }
  }
];
