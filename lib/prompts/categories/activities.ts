import type { PromptSchema } from "../types";

export const activitiesPrompts: PromptSchema[] = [
  {
    "displayTitle": "Hobby Finder Quiz",
    "displayDescription": "Runs a five-question diagnostic and matches you to five concrete hobbies with starter gear, real costs, and first-week plans.",
    "id": "activities-001",
    "prompt": "Act as a hobby coach whose goal is to find me a hobby I will actually stick with for years, not try once and abandon. My starting context: I am drawn to {interests}, I have about {time} free hours per week, my comfortable monthly hobby budget is {budget}, my social style is {social}, and I want to rule out anything like {avoided}.\n\nFirst, give me the diagnostic quiz: exactly five multiple-choice questions (each with 4 options) engineered to reveal what the context above cannot tell you. They should uncover (1) how I instinctively spend an unplanned free hour, (2) my indoor / outdoor / digital leaning, (3) whether I recharge alone or with people, (4) my tolerance for a steep first-month learning curve versus wanting quick early wins, and (5) whether I want a skill I can get measurably better at or pure decompression. Keep each question to one line so the quiz takes under two minutes.\n\nThen do the analysis. Explain in two or three sentences how you interpreted my answers before recommending anything, so I can correct you if you misread me. Then recommend five concrete, distinct hobbies (no two from the same category — do not give me three variations on crafts). For each hobby provide: a pitch tied specifically to my interests and quiz answers, not a generic description; a realistic startup cost split into essential gear versus nice-to-have gear with actual item names; the expected monthly running cost including any hidden recurring fees you must flag honestly; a typical session length and how many sessions per week fit my {time} hours; the single hardest part of month one and a practical way to push through it; one local or online community where I can find accountability and beginner help; and a concrete first-week plan naming three specific sessions and exactly what to do in each.\n\nFinish with a quick-start ranking: order the five by how likely I am to still be doing them in 90 days, name the single one I should try this weekend, and tell me the very first step (under 20 minutes) to take today. A high-quality result means I could order the starter gear tonight and know exactly what to do Saturday morning. Nothing you suggest may exceed my budget or my weekly hours, and do not sugarcoat steep learning curves.",
    "description": "A five-question hobby diagnostic that maps your answers to five distinct hobbies, each with starter gear costs, first-month obstacles, communities, and a concrete first-week action plan.",
    "category": "activities",
    "variables": {
      "interests": {
        "label": "Interests",
        "question": "What topics or activities already catch your attention?",
        "type": "textarea",
        "placeholder": "e.g., cooking, the outdoors, making things",
        "required": true
      },
      "time": {
        "label": "Weekly Hours",
        "question": "How many free hours per week can you give a hobby?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What monthly hobby budget feels comfortable?",
        "type": "select",
        "options": [
          "Free or nearly free",
          "Under $50 a month",
          "Under $150 a month",
          "Money is no object"
        ],
        "required": true
      },
      "social": {
        "label": "Social Style",
        "question": "Do you prefer solo, social, or mixed activities?",
        "type": "select",
        "options": [
          "Mostly solo",
          "Mostly social",
          "A mix of both"
        ],
        "required": true
      },
      "avoided": {
        "label": "Rule Out",
        "question": "Anything you definitely want to rule out?",
        "type": "textarea",
        "placeholder": "e.g., anything with loud noises, competitive sports",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Weekend Activity Ideas",
    "displayDescription": "Generates ten ranked weekend ideas matched to your city, group, weather, budget, and the ages of everyone going.",
    "id": "activities-002",
    "prompt": "Act as a local experience planner building a weekend shortlist I can act on immediately. The situation: I am in or near {city}, planning for {groupType}, the group includes these ages: {ages}, the per-person budget is {budget}, and the weather will be {weather}.\n\nGenerate exactly ten activity ideas that are genuinely doable this coming weekend in or near {city} — real categories of places and activities, with specific enough detail that I can look them up and book or show up (for example, name the type of venue, neighborhood, or park style, not just 'go somewhere fun'). Spread the ten across the weekend: include at least two that work best Saturday morning, two for Saturday afternoon/evening, two for Sunday, and leave the rest flexible.\n\nFor each idea include: a two-sentence description of what the experience actually feels like; estimated cost per person with a note on what drives the cost (tickets, food, rentals); typical total duration including travel time; who in my group it suits best given the ages {ages} (flag anything with age restrictions, height minimums, or stamina demands); why it fits my weather, budget, and group situation specifically; and one practical logistics note (best arrival time, parking or transit tip, or reservation need).\n\nRank all ten by how memorable and distinctive the experience is — prioritize the ones we will still be talking about next month over the obvious defaults. Then close with a 'top 3 weekend' suggestion: pick three ideas that combine into a great two-day flow (one per time block), and explain why they work together. A high-quality result reads like advice from a friend who knows my city, not a generic travel list. Do not suggest anything that requires booking more than a week out, and be honest where your knowledge of {city} is thin by framing suggestions as the right kind of place to find rather than inventing specific venue names you cannot verify.",
    "description": "Ten weekend ideas ranked by memorability, each with per-person costs, durations, age fit, logistics notes, and a suggested three-idea two-day flow.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city or area are you planning for?",
        "type": "text",
        "placeholder": "e.g., Austin",
        "required": true
      },
      "groupType": {
        "label": "Group",
        "question": "Who is going?",
        "type": "select",
        "options": [
          "Solo",
          "Partner",
          "Friends",
          "Family"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is the per-person budget?",
        "type": "select",
        "options": [
          "Free",
          "Under $25",
          "$25 to $75",
          "$75 to $150",
          "Splurge"
        ],
        "required": true
      },
      "weather": {
        "label": "Weather",
        "question": "What weather should the ideas suit?",
        "type": "select",
        "options": [
          "Sunny",
          "Rainy",
          "Either works"
        ],
        "required": true
      },
      "ages": {
        "label": "Ages in Group",
        "question": "What are the ages of the people going?",
        "type": "text",
        "placeholder": "e.g., 8, 12, 35, 68",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Rainy Day Activity List",
    "displayDescription": "Builds a complete rainy day itinerary with indoor outings, at-home options, kid-friendly picks, costs, and two backup plans.",
    "id": "activities-003",
    "prompt": "Act as a rainy-day strategist for a group of {groupSize} people in {city} with {hours} hours to fill. The goal is a day that feels intentional and cozy, not a day killed waiting for the rain to stop.\n\nBuild a full plan in two layers. Layer one: an outing route — 2 to 3 indoor destinations in {city} (museums, markets, arcades, climbing gyms, workshops, cafes with character) that fit a group of {groupSize}. For each stop give: what it is and what makes it worth going in the rain specifically, estimated cost per person, how long to spend there, and a logistics note (neighborhood or area to look in, parking or transit, whether to book ahead). Arrange the stops into a loose hour-by-hour schedule with realistic transition and travel times between them, plus one good lunch spot that fits the rainy mood.\n\nLayer two: an at-home fallback plan in case the group would rather stay in — a cozy home lineup with 2 to 3 activity blocks (a cooking or baking project, a game or movie setup, a creative project) that together fill the same {hours} hours, with a supply list I can grab in one grocery run.\n\nThen add two backup options: one backup if an outing stop is unexpectedly closed, and one backup if half the group bails and it becomes a small crew. If kids are likely in the mix given the group size, flag which stops are genuinely kid-friendly versus adult-oriented, and note anything needing rain gear for getting between stops. Close with a 'pack tonight' checklist: what to lay out this evening so the morning starts smooth. Calibrate the outing layer to the kids' ages ({kidsAges}) when provided: toddlers need a one-anchor-stop day with nap windows protected, elementary kids thrive on hands-on stops like children's museums or climbing gyms, and teens need at least one stop with autonomy or a photo-worthy hook or they will check out mentally. For mixed ages, rank each stop by which age band it serves best and make sure no age band sits bored through two stops in a row. Add a rain-day pacing rule: after every 90 minutes indoors, build in a 15-minute reset — a snack, fresh air under an awning, a silly car game between stops — because cooped-up groups deteriorate faster than any plan expects.\n\nA high-quality result means I can wake up, check the rain, and follow the plan without a single extra decision.",
    "description": "A two-layer rainy day plan — an indoor outing route plus a cozy at-home fallback — with costs, kid-fit flags, transition times, and a night-before packing checklist.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city or area are you planning for?",
        "type": "text",
        "placeholder": "e.g., Portland",
        "required": true
      },
      "groupSize": {
        "label": "Group Size",
        "question": "How many people are in your group?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours should the plan fill?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "kidsAges": {
        "label": "Kids' Ages",
        "question": "Any kids in the group? List their ages (leave blank if none).",
        "type": "text",
        "placeholder": "e.g., 5 and 9",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Sunny Day Activity List",
    "displayDescription": "Maps a morning-to-evening sunny day with heat-smart timing, per-stop packing lists, shade breaks, and a hot-weather backup.",
    "id": "activities-004",
    "prompt": "Act as a sunny-day architect for {groupSize} people in {city} at a {activityType} energy level. The day should use the sunshine fully without anyone getting scorched, dehydrated, or exhausted by 3 p.m.\n\nDesign a morning-to-evening flow with 3 to 4 stops that progress logically across the day (for example: an active morning stop, a midday food break somewhere cool, a water or shaded afternoon stop, and a golden-hour wind-down). For each stop include: what to do there and why it earns its time slot, the ideal arrival window to beat crowds and heat, estimated cost per person, how long to stay, and a stop-specific packing list (not one generic list — what THIS stop needs, like water shoes for the creek or a change of clothes after the splash pad).\n\nBuild heat management into the plan itself: schedule the most exposed stop for before 11 a.m., name the shadiest or air-conditioned backup activity for the 1-4 p.m. danger zone with a clear trigger for switching to it (temperature, cloud cover, or group energy), and include a hydration and sun-protection rhythm (when to reapply sunscreen, how much water per person to bring, signs someone needs a break).\n\nClose with: a consolidated master packing list for the car, a morning prep timeline working backward from the first stop's arrival time, and two 'make it special' touches — a small surprise detail at one stop and a photo moment suggestion. If kids are coming ({kidFriendly}), add the kid-specific engineering to every stop: which stops have shade structures and bathrooms within a two-minute walk, where stroller wheels actually work versus where they do not, the snack-and-water cadence that prevents the 2 p.m. meltdown (a real schedule, not just \"bring snacks\"), and one moment of kid currency per stop — the playground, the splash feature, the thing they get to choose. For an adult-only group, shift the wind-down later and add the one indulgent stop kids would have vetoed, like the rooftop bar or the long leisurely lunch. Either way, name the day's single point of failure — the stop most likely to go wrong — and the ten-minute fix that saves it.\n\nA high-quality result means a parent or organizer can execute the day from the plan alone, with every transition and contingency already decided.",
    "description": "A heat-smart sunny day itinerary with timed stops, per-stop packing lists, a midday shade backup with clear switch triggers, and a morning prep timeline.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city or area are you planning for?",
        "type": "text",
        "placeholder": "e.g., San Diego",
        "required": true
      },
      "groupSize": {
        "label": "Group Size",
        "question": "How many people are in your group?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "activityType": {
        "label": "Energy Level",
        "question": "What energy level do you want?",
        "type": "select",
        "options": [
          "Active and adventurous",
          "Relaxed and easygoing",
          "A mix of both"
        ],
        "required": true
      },
      "kidFriendly": {
        "label": "Kids Coming?",
        "question": "Are kids coming along?",
        "type": "select",
        "options": [
          "No kids",
          "Yes, young kids",
          "Yes, teens"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Free Things To Do Nearby",
    "displayDescription": "Finds fifteen genuinely free outings near you, matched to your interests, with best times, logistics, and a trip-value ranking.",
    "id": "activities-005",
    "prompt": "Act as a local free-fun researcher for {city} within about {radius} miles, tuned to my interest in {interests}. The goal is fifteen things that are actually free — no 'free with a catch' traps like venues that charge for parking more than the attraction is worth, or 'free days' that require booking weeks out. If a cost is unavoidable, say so upfront.\n\nMix the categories: parks and trails, free museum days or always-free galleries, community events, scenic viewpoints, public art and architecture, libraries with standout programs, and quirky local landmarks. For each of the fifteen include: a one-sentence description of why it is worth the trip; the best day and time to go (including when to avoid it); how long a visit takes; exact logistics — which neighborhood or area it is in, parking or transit details, and whether anything needs reserving; and one insider tip that elevates the visit (the best entrance, the quiet hour, the free guided tour, the overlook nobody knows).\n\nThen sort all fifteen by trip value — how memorable the experience is relative to the travel time from {city} — and label the top five as 'do these first.' Flag the three best options for {interests} specifically, and mark each entry with who it suits (solo, couples, families with kids, dog-friendly). Close with a 'free weekend' suggestion: combine three entries into a no-cost Saturday itinerary with timing. Do not invent specific venue names you cannot verify for {city}; where you are unsure, describe the right kind of place to look for and how to find it. Apply the accessibility lens from {mobilityNeeds} to every single entry, not as a separate section: flag the genuinely step-free options (the parking-to-entrance reality, not just the website's \"accessible\" badge), seating availability on trails and inside venues, accessible restroom locations, and which outdoor spots have paved or firm surfaces versus gravel, sand, or steep grades. Where an entry cannot be made accessible, say so plainly and name the nearest equivalent that can. Add a sensory note where relevant — crowd density, noise level, shade — since accessibility is not only mobility. The result must be usable as-is by someone with those needs, with no extra research required.\n\nA high-quality result feels like it came from someone who actually explores {city} on foot.",
    "description": "Fifteen verified-feeling free outings ranked by trip value, each with best times, logistics, insider tips, and a no-cost Saturday itinerary combining the best picks.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city or area should I search near?",
        "type": "text",
        "placeholder": "e.g., Denver",
        "required": true
      },
      "radius": {
        "label": "Radius",
        "question": "How far are you willing to travel in miles?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": true
      },
      "interests": {
        "label": "Interests",
        "question": "What kinds of activities do you enjoy?",
        "type": "text",
        "placeholder": "e.g., hiking, art, history",
        "required": true
      },
      "mobilityNeeds": {
        "label": "Accessibility",
        "question": "Any mobility or accessibility needs to account for?",
        "type": "textarea",
        "placeholder": "e.g., stroller-friendly, wheelchair accessible",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Budget Date Ideas",
    "displayDescription": "Brainstorms twelve under-budget dates with a creative at-home option, full cost math, and the small details that make each one romantic.",
    "id": "activities-006",
    "prompt": "Act as a date architect who believes romance is about thoughtfulness, not spending. Plan for a couple in {city} with a hard cap of ${budget} total and a {vibe} vibe.\n\nBrainstorm exactly twelve date ideas that genuinely fit under ${budget} including every cost (transportation, parking, food, tips — do the real math, not the sticker price). Mix the formats: at least three daytime options, at least three evening options, at least four outdoors, at least four indoors, and exactly one creative DIY at-home date that feels like an event, not just 'stay in and watch something.'\n\nFor each idea include: the full cost breakdown showing it stays under ${budget}; why it works as a date — specifically what it does for connection (does it create conversation, shared laughter, a team challenge, a beautiful moment?); one small detail that elevates it from nice to memorable (the specific spot to sit, the thing to bring, the moment to plan for); and the best timing (day of week, time of day) plus any booking or arrival tip.\n\nOrder the twelve from most romantic-and-memorable to most casual-and-fun, and mark your top three picks with why they win. Avoid the tired defaults unless you can give them a genuinely fresh twist — and if you do, explain the twist concretely. Run every food-involving idea through {dietaryNotes}: name the specific menu items or cuisines that work, the questions to ask when booking, and the backup dish at each restaurant so nobody ends up with a sad side salad. For the DIY at-home date, build the menu around the restrictions from the start — give the full recipe with the restriction-safe swaps already made, not as an afterthought. Lean into the \"food as the date\" principle for at least two ideas: the experiences where cooking or tasting together IS the connection — the dumpling-folding night, the taco-truck crawl with a rating ballot — since shared food effort creates better conversation than passive restaurant sitting.\n\nA high-quality result gives me a date I could plan tonight, text about tomorrow, and execute this weekend without a single awkward 'so what should we do?' moment. Do not suggest anything that quietly exceeds the budget with extras, and do not recommend venues you cannot verify in {city} — describe the right kind of place and how to find it instead.",
    "description": "Twelve date ideas with honest full cost breakdowns, connection-building rationale, one elevating detail each, and a ranked top three you can plan tonight.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city or area are you planning for?",
        "type": "text",
        "placeholder": "e.g., Chicago",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your total spending limit in dollars?",
        "type": "number",
        "placeholder": "e.g., 50",
        "required": true
      },
      "vibe": {
        "label": "Vibe",
        "question": "What mood should the date have?",
        "type": "select",
        "options": [
          "Romantic",
          "Adventurous",
          "Cozy",
          "Playful"
        ],
        "required": true
      },
      "dietaryNotes": {
        "label": "Food Notes",
        "question": "Any food restrictions or preferences for date meals?",
        "type": "textarea",
        "placeholder": "e.g., vegetarian, no alcohol",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Solo Adventure Day Planner",
    "displayDescription": "Designs a themed solo day with a stop-by-stop route, solo lunch pick, packing list, safety plan, and evening reflection prompts.",
    "id": "activities-007",
    "prompt": "Act as a solo-adventure designer planning one full day for me on {date} near {city} at a {energy} energy level. A solo day done well feels like a gift, not like being alone — design for that.\n\nStart by giving the day a theme that ties the stops together (examples: 'the city I never noticed,' 'water and stone,' 'a day of small museums,' 'coffee shop crawl with purpose'). Then lay out a morning-to-evening route with 4 to 5 specific stops: for each stop, what to do there, why it belongs in this theme, how long to stay, and the ideal arrival time. Include one excellent solo lunch spot — somewhere a person alone feels comfortable lingering, not rushed — with what to order and the best seat or area to ask for.\n\nAdd the practical layer: a packing list tailored to the route and the {energy} energy level (comfort items included — this is a day for me); a simple budget estimate; and a safety plan for being alone — share-the-itinerary checklist, check-in times, what to do if a stop feels off, and phone battery management.\n\nClose with three reflection prompts for the evening that go deeper than 'what did you do today' — prompts that connect the day's experiences to what I am working through in life right now — plus a one-paragraph framing for how to journal the day so it becomes a memory, not just a log. Let {intention} shape the day's texture, not just its stops. If the intention is rest, protect unscheduled margins between stops and choose the lingering lunch; if it is clarity, add a solo walking stretch with a specific thinking prompt and the notebook rule (phone away, pen out); if it is adventure, put the boldest stop first while energy is high. Build the day's arc around the intention — morning as arrival, midday as the heart, evening as integration — and add one intention anchor: a small tangible ritual like a letter to yourself, a photo series with a theme, or one meaningful purchase that makes the day's purpose something you keep.\n\nA high-quality result reads like a day designed by someone who knows me, where every stop earns its place and I return home feeling restored rather than just tired.",
    "description": "A themed solo day with a stop-by-stop route, a linger-worthy lunch spot, a solo safety plan, and deep evening reflection prompts that turn the day into a memory.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city or area are you planning for?",
        "type": "text",
        "placeholder": "e.g., Seattle",
        "required": true
      },
      "date": {
        "label": "Date",
        "question": "What day is the adventure?",
        "type": "date",
        "required": true
      },
      "energy": {
        "label": "Energy Level",
        "question": "What energy level do you want?",
        "type": "select",
        "options": [
          "High energy and active",
          "Low-key and reflective",
          "A mix of both"
        ],
        "required": true
      },
      "intention": {
        "label": "Day's Intention",
        "question": "What do you want this day to give you? (optional)",
        "type": "textarea",
        "placeholder": "e.g., clear my head before a big decision",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Friend Group Hangout Ideas",
    "displayDescription": "Generates twelve original hangout ideas with setup checklists, per-person costs, and the reason each one becomes a story.",
    "id": "activities-008",
    "prompt": "Act as a social architect for a friend group of {groupSize} with a {budget} per-person budget and a {vibe} vibe. The enemy here is the default — dinner and a movie, 'just hanging out' — so every idea must have a built-in reason it becomes a story we retell.\n\nGenerate twelve hangout ideas, and make at least half of them things this group has probably never done together. For each idea include: the concept in two sentences and why it is memorable (what is the specific moment friends will talk about afterward?); how it actually works for a group of {groupSize} — the mechanics, not just the idea (how do people participate, what keeps it from stalling, what does the host do while it runs); an organizer's checklist of what to arrange in advance with lead times (bookings, supplies, group chat messages); estimated cost per person with the real math; and a difficulty rating for the organizer (easy lift versus project).\n\nBalance the set: include at least three free options, at least two that get people moving or outside, at least two creative or hands-on, and at least one that works if the weather turns. Mark each idea with the group size it fits best (intimate 3-5, medium 6-10, big crew 10+) so I can filter. End with your top three picks for a {vibe} vibe and the single easiest one to organize this week — the one I could text the group about tonight. Add the invitation mechanics for your top pick: the exact group-chat message to send (casual, low-pressure, with a clear RSVP ask), how to handle the \"maybe\" people without chasing them, and the minimum headcount that still makes each idea work. Include flake-proofing: mark which ideas survive half the group canceling and which need a backup plan, plus the weather pivot for every outdoor pick. Close the loop with a \"next time\" system — a shared photo album, a quick rating vote after each hangout — so the group builds a repertoire of proven hits instead of starting from zero every month.\n\nA high-quality result makes me the friend who always has a plan, with every idea executable from the details given.",
    "description": "Twelve hangout ideas with real mechanics, organizer checklists, cost math, and a 'text the group tonight' easiest pick — no default dinner-and-a-movie filler.",
    "category": "activities",
    "variables": {
      "groupSize": {
        "label": "Group Size",
        "question": "How many friends are in the group?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is the per-person budget?",
        "type": "select",
        "options": [
          "Free",
          "Under $20",
          "$20 to $50",
          "$50 to $100"
        ],
        "required": true
      },
      "vibe": {
        "label": "Vibe",
        "question": "What vibe should the hangout have?",
        "type": "select",
        "options": [
          "Chill and easy",
          "Active and outdoorsy",
          "Creative and hands-on",
          "Big energy"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Family Game Night Planner",
    "displayDescription": "Organizes a full family game night around your kids' ages — specific game picks, a timed schedule, snack breaks, and a scoring system.",
    "id": "activities-009",
    "prompt": "Act as a family game night director planning one evening for {groupSize} people, ages {ages}, lasting about {duration} minutes. The parent's job here is part host, part referee, part hype-person — design the night so the parent can actually enjoy it too, not just manage it.\n\nRecommend four to six specific, real games (name actual titles, not 'a card game') matched to the age spread {ages}: every game must be playable by the youngest player with a small handicap or team-up rule you spell out, and still interesting for the oldest. Include at least one cooperative game where the family wins or loses together, and at least one short high-energy game for when attention fades. For each game give: why it fits this exact age mix, setup time, a two-minute teach script the parent can read, and the handicap or pairing rule for younger kids.\n\nBuild a timed schedule for the {duration} minutes: arrival and snack setup, game blocks with which game goes when and why that order works (open light, peak with the main event, close with something silly), two snack breaks, and a wind-down. Design a simple scoring system across the night — team points, not cutthroat elimination — and a prize structure where everyone gets something (funniest play, best teamwork, champion) so no kid ends the night in tears.\n\nAdd a snack menu with prep-ahead items and a 'no sticky fingers on the cards' rule, plus a parent cheat sheet: the three most common arguments that erupt during family games and exactly how to defuse each one. If I list games in {ownedGames}, build the night around them first: slot each owned game into the schedule where it fits best, write the two-minute teach script for any the family has not played in a while, and only recommend purchases for the gaps the shelf cannot fill. For any game you suggest buying, name the exact title, the real price, and why it earns a permanent shelf spot beyond this one night. Follow the shelf-audit principle: the best game night uses what the family already owns plus one new spark, not a shopping trip disguised as a plan.\n\nA high-quality result means the parent can print this and run the night without improvising a single rule.",
    "description": "A printable game night plan with age-matched real game picks, a two-minute teach script per game, a timed schedule, team scoring, and a parent's argument-defusal cheat sheet.",
    "category": "activities",
    "variables": {
      "groupSize": {
        "label": "Group Size",
        "question": "How many family members are playing?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "ages": {
        "label": "Ages",
        "question": "What are the ages of the players?",
        "type": "text",
        "placeholder": "e.g., 6, 9, 14, 35, 40",
        "required": true
      },
      "duration": {
        "label": "Duration",
        "question": "How long should the game night last in minutes?",
        "type": "number",
        "placeholder": "e.g., 120",
        "required": true
      },
      "ownedGames": {
        "label": "Games You Own",
        "question": "Any games you already own that should be included? (optional)",
        "type": "textarea",
        "placeholder": "e.g., Ticket to Ride, Uno, Codenames",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Kids Activities By Age",
    "displayDescription": "Recommends ten hands-on activities precisely matched to your child's age, with materials, step-by-step instructions, and safety flags.",
    "id": "activities-010",
    "prompt": "Act as an early-childhood activity specialist designing ten hands-on activities for a {age}-year-old, filling {hours} hours in a {setting} setting. The parent is the guide here — every activity should be something a parent can set up in under 10 minutes and enjoy participating in, not just supervise from the couch.\n\nFor each activity calibrate to the developmental reality of age {age}: attention span, fine motor ability, frustration tolerance, and what 'fun' means at this age (hint: process over product). For each of the ten include: the activity name and a one-line hook; exact materials with household substitutes for anything you would have to buy; step-by-step instructions written for the parent, including the setup, the first thing to say to the child to launch it, and how to participate alongside them; an honest estimate of adult involvement (hands-on, nearby, or independent); the activity's hidden learning value (what skill it quietly builds — do not make this feel like school); how to make it easier if the child struggles and harder if they breeze through it; approximate active time plus cleanup time; and any safety flag for this age with the specific precaution.\n\nOrder the ten into a suggested sequence across the {hours} hours that alternates high-energy and calm activities so the day has a rhythm, and mark which two make the best 'anchor' activities if you only have energy for a couple. Close with a parent prep checklist: everything to gather the night before, grouped by activity. Thread {interests} through the activities wherever given: if the child is obsessed with dinosaurs, the sensory bin becomes a fossil dig and the art project becomes dinosaur footprints — show this translation explicitly for at least three activities so the parent learns the pattern and can reuse it. The obsession is the hook that buys an extra twenty minutes of engagement per activity; name exactly where each activity plugs into it. If no interests are given, default to the universal toddler hooks — water, dumping and filling, things that go — and say so plainly.\n\nA high-quality result means a parent can read one activity block and start it immediately with what is already in the house.",
    "description": "Ten age-calibrated activities sequenced into a day rhythm, each with household materials, a launch script for the parent, hidden learning value, and safety flags.",
    "category": "activities",
    "variables": {
      "age": {
        "label": "Age",
        "question": "How old is the child?",
        "type": "number",
        "placeholder": "e.g., 7",
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours should the activities fill?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "setting": {
        "label": "Setting",
        "question": "Where will the activities happen?",
        "type": "select",
        "options": [
          "Indoor",
          "Outdoor",
          "Either works"
        ],
        "required": true
      },
      "interests": {
        "label": "Child's Interests",
        "question": "What is the child currently obsessed with? (optional)",
        "type": "textarea",
        "placeholder": "e.g., dinosaurs, building things, water play",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Teen Activity Ideas",
    "displayDescription": "Lists twelve activities a teenager will actually say yes to, with costs, independence levels, and the parent logistics handled for you.",
    "id": "activities-011",
    "prompt": "Act as a youth-culture translator generating twelve activity ideas for a {teenAge}-year-old into {interests}, for a group of {groupSize}. The critical constraint: nothing that feels childish, babyish, or like a parent's idea of fun. Teens opt out the moment something feels forced — every idea must pass the 'would a {teenAge}-year-old post about this without embarrassment' test.\n\nFor each idea include: what it is and the specific hook that makes it appealing to teens (status, skill, social currency, aesthetic, adrenaline — name the actual draw); cost with the real math; whether it is drop-off friendly, needs a parent present, or is teen-independent; the parent logistics to handle (rides, money, permission slips, curfews, safety notes — spelled out so the parent is not texting for details later); and whether it builds a real skill, with at least three of the twelve being genuine skill-builders (not disguised chores).\n\nMix free and low-cost options, and include at least two that connect to {interests} directly, at least two that work solo for days the group is not available, and at least one that gets the teen out of the house with minimal parent involvement. Flag anything with age minimums, waiver requirements, or supervision ratios. End with your top three 'highest yes-rate' picks and one conversation starter the parent can use to pitch each one without sounding like they are selling it. Add the parent-teen negotiation layer: for each idea, write the one-line pitch the teen hears (lead with status, autonomy, or fun — never safety or enrichment) separately from the logistics the parent handles invisibly. Spell out the money mechanics — who pays, how much cash the teen needs in hand, whether the price is teen-affordable if they go with friends later — since cost is the silent killer of teen plans. Mark each idea on the independence gradient: parent-driven, parent-adjacent, or teen-owned, and make sure at least three are teen-owned, because the ideas they choose themselves are the ones that actually happen.\n\nA high-quality result respects the teen's autonomy while quietly giving the parent everything needed to make it happen.",
    "description": "Twelve teen-approved ideas with the real appeal hook, parent logistics spelled out, drop-off ratings, and pitch lines that do not sound like a parent selling it.",
    "category": "activities",
    "variables": {
      "teenAge": {
        "label": "Age",
        "question": "How old is the teen?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      },
      "interests": {
        "label": "Interests",
        "question": "What is the teen into?",
        "type": "text",
        "placeholder": "e.g., music, skating, gaming",
        "required": true
      },
      "groupSize": {
        "label": "Group Size",
        "question": "How many teens are involved?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Date Night Ideas",
    "displayDescription": "Builds a rotating set of eight date nights — varied formats, full itineraries with timing, cost breakdowns, and one surprise per night.",
    "id": "activities-012",
    "prompt": "Act as a relationship ritual designer creating a rotating date night system for a couple in {city}, repeating {frequency}, with a {budget} budget per date. The goal is not eight random ideas — it is a rotation that keeps the relationship's spark alive for months without repeating or defaulting to the same restaurant.\n\nCreate eight distinct date nights with deliberately varied formats: at least two going-out adventures, at least two stay-at-home experiences that still feel like events, at least one active or outdoorsy, at least one slow and intimate, and at least one that involves learning something new together. Assign each date to a position in the rotation and explain the sequencing logic (why this order keeps energy and novelty balanced across the {frequency} cycle).\n\nFor each date include: a loose itinerary with timing from 'leave the house' to 'home'; a line-item cost breakdown that stays inside {budget} including the costs couples forget (parking, tips, the dessert you will inevitably order); one surprise element — a specific small gesture, secret stop, or reveal built into the night that keeps it feeling fresh even on repeat; a conversation prompt or shared challenge for the date that goes deeper than small talk; and a rain or cancellation backup that preserves the spirit of the plan.\n\nClose with a 'keep it alive' section: how to evolve the rotation over time, a simple ritual for rating each date afterward (so future dates get better), and three rules for protecting date night from schedule creep. Add the planning ritual that makes the system stick: a fifteen-minute monthly \"date draft\" where the couple picks the next dates from the rotation, alternates who plans (the planner does the bookings, the other just shows up), and blocks the shared calendar with the anti-creep rules enforced. Include a simple budget tracker — a running monthly total against the {budget} per-date cap — so the rotation stays honest. Add the repair clause: what to do when a date flops or gets skipped three times running, with the honest conversation prompt and the replacement rule, because systems die from skipped weeks, not bad dates.\n\nA high-quality result is a system the couple can run for six months, not a list they use once.",
    "description": "Eight sequenced date nights forming a six-month rotation system, each with timing, cost math, a built-in surprise, deeper conversation prompts, and schedule-protection rules.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city or area are you planning for?",
        "type": "text",
        "placeholder": "e.g., Nashville",
        "required": true
      },
      "frequency": {
        "label": "Frequency",
        "question": "How often do you do date night?",
        "type": "select",
        "options": [
          "Weekly",
          "Every two weeks",
          "Monthly"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is the per-date budget?",
        "type": "select",
        "options": [
          "Under $40",
          "$40 to $80",
          "$80 to $150",
          "Splurge"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Anniversary Date Planner",
    "displayDescription": "Designs a milestone anniversary around your year and style — full itinerary, signature experience, personal ritual, and honest budget.",
    "id": "activities-013",
    "prompt": "Act as a milestone celebration designer planning our {anniversaryYear} anniversary in {city} with a {style} style. Milestone years deserve more than a nice dinner — design a day or evening that feels like a chapter marker in the relationship.\n\nBuild a full itinerary with timing from morning to night (or afternoon to late evening for an evening-focused plan): where to go, what to do at each stop, how long to stay, and the transitions between stops. Anchor the day around one signature experience worthy of a {anniversaryYear} anniversary — something with genuine wow factor that fits the {style} style, not just an expensive version of a normal date. Explain why this experience matches this specific milestone year (what the year represents and how the experience honors it).\n\nInclude dinner plans with the kind of restaurant or setting that fits, plus reservation timing advice. Add one meaningful personal touch the couple creates themselves — a letter exchange with prompts, a ritual, a small handmade element — with exact instructions so it actually happens instead of staying an intention. Provide a realistic line-item budget breakdown, and a weather backup for any outdoor portion that preserves the romance rather than feeling like a downgrade.\n\nClose with a 'day-before' checklist (confirmations, what to wear, what to pack, the personal touch materials) and one piece of advice for being present during the celebration instead of managing logistics. Add the memory-making layer that separates a milestone from a nice evening: one genuine surprise the partner does not see coming (the sealed letter to open at dinner, the recreated first-date detail, video messages from friends — with the collection timeline starting two weeks out), and one ritual that marks the year itself (the time capsule, the annual photo in the same spot, the question you ask each other every anniversary and write down). Include the photo plan so the day is captured without anyone living behind a phone, and the \"year in review\" conversation prompts for the quiet moment — the three questions that turn dinner into a chapter marker.\n\nA high-quality result should make the couple feel the day was designed around their specific story, not pulled from a generic anniversary template.",
    "description": "A milestone anniversary built around your specific year — signature experience, personal ritual with instructions, timed itinerary, budget breakdown, and a day-before checklist.",
    "category": "activities",
    "variables": {
      "anniversaryYear": {
        "label": "Anniversary Year",
        "question": "Which anniversary are you celebrating?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "city": {
        "label": "City",
        "question": "What city or area are you planning for?",
        "type": "text",
        "placeholder": "e.g., Charleston",
        "required": true
      },
      "style": {
        "label": "Style",
        "question": "What style should the celebration have?",
        "type": "select",
        "options": [
          "Grand and memorable",
          "Intimate and quiet",
          "Adventurous and bold"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "First Date Ideas",
    "displayDescription": "Suggests eight low-pressure first dates engineered for easy conversation, graceful exits, and natural ways to extend a great one.",
    "id": "activities-014",
    "prompt": "Act as a first-date strategist for {city} with a {budget} budget and a {setting} setting. A great first date does three jobs: keeps conversation flowing naturally, allows a graceful exit if there is no chemistry, and gives a natural way to extend the evening if there is. Every idea must serve all three.\n\nSuggest eight first date ideas. For each include: the concept and why the activity itself generates conversation (what you will naturally talk about, point at, react to, or do together — not just sitting across a table hoping for topics); the ideal length and the built-in exit points (where the date naturally ends if it is not working, with no awkwardness); the real cost with the math; two or three conversation starters that arise organically from the activity itself; a backup move — a specific nearby second stop — if the date is going well and you want to extend it, including how to suggest it casually; and one practical tip (arrival timing, what to wear, what to avoid ordering or doing).\n\nOrder the eight from lowest-pressure to most impressive, and mark the two best 'can't-miss' picks with why they win. Include at least two options that work well on a weeknight (under two hours) and at least one that is genuinely distinctive for {city}. Add a short pre-date checklist: the three things to confirm or prepare in the hour before. Add the pre-date and post-date protocol. Before: the confirmation text the day before (warm without pressure — write the wording), the arrival strategy (who gets there first, where to wait, the first-sixty-seconds plan, since openings set the tone). During: graceful-exit scripts for the no-chemistry scenario — the exact kind lines that end things at a natural exit point without cruelty. After: two pre-scouted \"extension moves\" per idea for when there IS chemistry (the nearby dessert spot, the walk route) that feel spontaneous, plus the follow-up text guidance — when to send it, what it says, and the one thing never to do.\n\nA high-quality result removes first-date anxiety by making every scenario — great, okay, or bad — already handled.",
    "description": "Eight first dates engineered for conversation, graceful exits, and natural extensions — with organic conversation starters, weeknight options, and a pre-date checklist.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city or area are you planning for?",
        "type": "text",
        "placeholder": "e.g., Minneapolis",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your spending limit?",
        "type": "select",
        "options": [
          "Under $30",
          "$30 to $60",
          "$60 to $100"
        ],
        "required": true
      },
      "setting": {
        "label": "Setting",
        "question": "What kind of setting do you prefer?",
        "type": "select",
        "options": [
          "Casual",
          "A little upscale",
          "Outdoor",
          "Creative"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Double Date Ideas",
    "displayDescription": "Plans six double dates where two couples actually mix — with couple-blending mechanics, costs, bookings, and ride-over icebreakers.",
    "id": "activities-015",
    "prompt": "Act as a double-date architect for two couples in {city}, {budget} per couple, with a {vibe} vibe. The classic double-date failure is two couples sitting at one table having two separate conversations. Every idea must include a built-in mechanic that mixes the couples naturally — a shared challenge, a team split, a rotation, or a task that requires all four people.\n\nPlan six double date ideas. For each include: the concept and the specific mixing mechanic (exactly how the couples blend — who teams with whom, when you split and rejoin, what forces interaction); cost per couple with the real math; anything to book in advance and how far ahead; the ideal timing and duration; why it suits a {vibe} vibe; and one thing to avoid (the version of this idea that would flop).\n\nInclude at least two ideas with friendly competition between mixed teams, at least one low-key conversational option for couples who prefer talking to doing, and at least one that works if one couple is significantly more adventurous than the other. Provide one icebreaker question set for the ride over — five questions that are fun for people who know each other a little but not deeply (no generic 'what do you do' — make them specific, playful, and revealing). End with your top two picks and a group-text message I can send to pitch each one. Add the couple-dynamics engineering. For each idea, name the likely friction point — one couple more competitive, different spending comfort, the friend who is always late — and the design choice that neutralizes it: handicaps, cost-splitting stated upfront, a start time with a built-in buffer. Include the invitation framing: who invites whom, how the cost is communicated before anyone commits (write the exact message), and the group-chat norms. End with the \"second double date\" test: the one question to ask yourselves afterward, and the rotation idea that turns the foursome into a tradition rather than a one-off.\n\nA high-quality result makes the evening feel like four friends, not two couples who happen to be in the same place.",
    "description": "Six double dates with explicit couple-mixing mechanics, per-couple costs, booking lead times, ride-over icebreakers, and ready-to-send pitch texts.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city or area are you planning for?",
        "type": "text",
        "placeholder": "e.g., Dallas",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is the per-couple budget?",
        "type": "select",
        "options": [
          "Under $60",
          "$60 to $120",
          "$120 to $200"
        ],
        "required": true
      },
      "vibe": {
        "label": "Vibe",
        "question": "What vibe should the evening have?",
        "type": "select",
        "options": [
          "Relaxed",
          "Friendly competition",
          "Adventurous"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Picnic Planner",
    "displayDescription": "Plans the whole picnic — travel-proof menu with recipes, dietary accommodations, categorized packing list, setup strategy, and lawn games.",
    "id": "activities-016",
    "prompt": "Act as a picnic producer planning a picnic on {date} at {location} for {guests} people, accommodating these dietary needs: {dietaryNeeds}. A great picnic is 80 percent logistics — the food must survive transport, the setup must handle sun and bugs, and everything must pack out cleanly.\n\nDesign the full menu: appetizers, mains, sides, drinks, and dessert, with every dish chosen for travel durability (nothing that wilts, melts, or needs reheating). For each dish give a concise recipe or assembly instructions scaled to {guests} people, note which dietary needs it satisfies, and mark what can be made the night before versus day-of. Include a prep timeline working backward from departure time.\n\nBuild a packing checklist grouped by category: food and containers, serving gear, comfort (blankets, shade, seating), weather and bugs (sunscreen, repellent, layers), cleanup (trash bags, wipes, containers for leftovers), and entertainment. Advise on the setup strategy for {location}: how to pick the actual spot (sun versus shade balance, wind direction, distance from parking and restrooms), how to arrange the spread so {guests} people can serve themselves without a traffic jam, and how to keep food safe in the heat (cooler strategy, the two-hour rule).\n\nSuggest three lawn games suited to the group size with quick rules, and include a rain backup plan with a clear go/no-go decision time the morning of. Close with a 'load the car' order — what goes in first and last so nothing gets crushed. Add the site-setup choreography: the arrival order (blankets first, then shade, then food — who carries what from the car in how many trips), the layout that keeps food safe (sun versus shade placement, the cooler discipline rule, the two-hour perishables clock with the honest food-safety line), and the bug and wind defenses (the specific gear, not just \"bring repellent\"). Include the pack-out system — trash bags, the leftover plan, the five-minute leave-no-trace sweep — and the comfort upgrades that separate a good picnic from a great one: real plates, the speaker at low volume, the one lawn game, the blanket anchors.\n\nA high-quality result means showing up relaxed because every detail was decided in advance.",
    "description": "A complete picnic production plan: travel-proof menu with scaled recipes, dietary coverage, categorized packing list, spot-selection strategy, food safety, games, and a rain backup.",
    "category": "activities",
    "variables": {
      "date": {
        "label": "Date",
        "question": "What day is the picnic?",
        "type": "date",
        "required": true
      },
      "location": {
        "label": "Location",
        "question": "Where will the picnic be?",
        "type": "text",
        "placeholder": "e.g., Riverside Park",
        "required": true
      },
      "guests": {
        "label": "Guests",
        "question": "How many people are coming?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "dietaryNeeds": {
        "label": "Dietary Needs",
        "question": "Any dietary restrictions to accommodate?",
        "type": "textarea",
        "placeholder": "e.g., one vegetarian, one nut allergy",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Hiking Day Planner",
    "displayDescription": "Builds a safe, well-paced hiking day — two matched trail options, a timed itinerary, packing list, safety checklist, and kid pacing notes.",
    "id": "activities-017",
    "prompt": "Act as a hiking guide planning a day in the {trailArea} area for {groupSize} people at a {difficulty} difficulty level. The plan must match the weakest hiker, not the strongest — an over-ambitious route ruins the day for everyone.\n\nRecommend two specific trail options in {trailArea} suited to {difficulty} and a group of {groupSize}: for each give distance, elevation gain, estimated moving time, the highlights that make it worth choosing, and the honest crux (the hardest section and who might struggle). Recommend one as the primary and one as the backup, with why.\n\nBuild the full itinerary: drive time from the likely start point, arrival time (with the 'trailhead by' time that beats crowds and heat), the hike broken into segments with rest stops, a turnaround time with a hard rule for honoring it, summit or viewpoint linger time, and return timing. Include a packing list split into personal gear each hiker carries and group gear one person carries, a food and water plan (how much per person, when to eat), and a safety checklist: the ten essentials adapted to this hike, weather abort criteria, wildlife or terrain hazards specific to {trailArea}, and an emergency plan (who has the first aid kit, cell coverage expectations, what to do if someone gets hurt).\n\nAdd Leave No Trace reminders specific to the area, pacing guidance for mixed fitness levels (how the fast hikers stay happy without abandoning the slow ones), and a post-hike food stop suggestion. Use {fitnessSpread} to set the plan's honesty level: state the pace you will actually walk (show the time math, not the trailhead-sign fantasy), compute the turnaround time before you start — the non-negotiable clock time when the group turns back regardless of the summit — and assign the sweep role to an experienced hiker with an explicit job description. For wide fitness spreads, design the route with a natural bailout point and frame it as a feature, not a failure. Add the group-gear distribution (who carries the first aid kit, the water filter, the extra layer) so weight is shared fairly and nobody is the pack mule.\n\nA high-quality result is a plan a first-time hike leader can execute with total confidence.",
    "description": "A hike-leader-ready plan: two matched trails with honest difficulty notes, a timed itinerary with turnaround rules, split packing lists, and a {trailArea}-specific safety checklist.",
    "category": "activities",
    "variables": {
      "trailArea": {
        "label": "Trail Area",
        "question": "What area do you want to hike in?",
        "type": "text",
        "placeholder": "e.g., the Blue Ridge Mountains",
        "required": true
      },
      "difficulty": {
        "label": "Difficulty",
        "question": "What difficulty level fits the group?",
        "type": "select",
        "options": [
          "Easy",
          "Moderate",
          "Hard"
        ],
        "required": true
      },
      "groupSize": {
        "label": "Group Size",
        "question": "How many hikers?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "fitnessSpread": {
        "label": "Fitness Range",
        "question": "How would you describe the group's fitness range?",
        "type": "select",
        "options": [
          "Everyone is similarly fit",
          "Mixed — some much fitter than others",
          "Includes kids or older hikers"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Beach Day Planner",
    "displayDescription": "Organizes a full beach day — arrival strategy, categorized packing, easy beach food, group games, sun protection rhythm, and dinner plans.",
    "id": "activities-018",
    "prompt": "Act as a beach day coordinator for {groupSize} people at {beach}, staying about {hours} hours. A great beach day is won or lost before 10 a.m. — arrival timing, spot selection, and shade decide everything.\n\nStart with the arrival strategy: the best arrival time for {beach} to get parking and a good spot, where to park (lot versus street, costs, how early it fills), and how to pick the actual spot on the sand (distance from water, lifeguard proximity, wind, crowd patterns). Then a packing list grouped by category: shade and seating, sun protection, swim gear, food and drink (cooler strategy), entertainment, and the 'save the day' items people always forget.\n\nPlan the food: easy beach-friendly meal ideas that survive sand and heat, a hydration plan for {hours} hours in the sun, and nearby dinner options for after the beach with price ranges. Suggest three beach games suited to a group of {groupSize} with quick rules and what gear each needs.\n\nBuild in a sun protection rhythm: when to reapply sunscreen across {hours} hours, shade breaks, and signs of heat exhaustion to watch for in the group. Include a kid-safety section if children are likely present (water rules, buddy system, meeting point), a trash and leave-no-trace pack-out plan, and an end-of-day wind-down: the best nearby spot for sunset or dinner and a 15-minute pack-up routine. If kids are coming ({kidsComing}), add the kid-shift layer: the water-safety briefing (the buddy system, the flagged swim zone, the adult supervision rotation so coverage never gaps), the sand-management kit (the baby powder trick, the pop-up shade, mesh bags), the snack-and-sunscreen timetable (reapply every 80 minutes — set the phone alarms), and the backup activities for when the waves get boring (the scavenger hunt list, the hole-digging contest). For an adult-only group, shift toward the long float, the book, and the sunset stay — and say which arrival-time rules can relax.\n\nA high-quality result means arriving to an empty beach, leaving with sandy feet and zero regrets.",
    "description": "A beach day won before 10 a.m.: arrival and parking strategy, categorized packing, sand-proof food, group games, a sun protection rhythm, and a pack-out routine.",
    "category": "activities",
    "variables": {
      "beach": {
        "label": "Beach",
        "question": "Which beach are you going to?",
        "type": "text",
        "placeholder": "e.g., Santa Monica Beach",
        "required": true
      },
      "groupSize": {
        "label": "Group Size",
        "question": "How many people are going?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours will you stay?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "kidsComing": {
        "label": "Kids Coming?",
        "question": "Are kids coming to the beach?",
        "type": "select",
        "options": [
          "No kids",
          "Yes, young kids",
          "Yes, older kids or teens"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Camping Weekend Planner",
    "displayDescription": "Plans a complete camping weekend — gear checklists, camp meal recipes, a week-before packing timeline, setup tips, and campfire activities.",
    "id": "activities-019",
    "prompt": "Act as a camp director planning a {nights}-night camping weekend at {campsite} for {groupSize} people. The goal is a trip where the outdoors feels like an adventure, not an endurance test — which means gear, food, and setup must be handled before anyone is hungry, cold, or setting up a tent in the dark.\n\nProvide a complete gear checklist split three ways: must-have (the trip fails without it), nice-to-have (comfort upgrades worth the space), and do-not-bring (the stuff people overpack). Mark which items can be shared across the {groupSize} campers so nobody duplicates the camp stove four times. Note what first-timers most often forget.\n\nBuild a meal plan for the full {nights} nights plus travel days: simple camp recipes for each breakfast, lunch, dinner, and campfire snack, with a master grocery list organized by store section and a cooler-packing strategy. Every recipe must be doable on a camp stove or fire with minimal cleanup — include the 'cook it in foil' and 'one-pot' tricks.\n\nAdd a packing timeline for the week before (what to buy, charge, prep, and pack on which day), campsite setup tips in the right order (tent first, kitchen second — explain why), a first-night arrival plan that assumes you reach camp near dusk, and four evening campfire activities with instructions (stories, games, stargazing, cooking projects). Include first-timer tips throughout, a weather backup mindset (what to do if it rains all weekend), and a leave-no-trace pack-out checklist for the last morning. Design for the beginners in {experienceMix} without boring the veterans: add the first-timer briefing — the twenty-minute camp-setup lesson on arrival (tent, sleep system, the headlamp rule, where the bathrooms are), the buddy pairing (each newbie with a veteran for night one), and the explicit permission structure (it is okay to say you are cold, to turn in at nine, to ask for help). For all-veteran groups, upgrade the trip: the harder hike, the backcountry option, the camp-cooking challenge. Either way, start one camp tradition — the story round, the sunrise coffee, the night-one ritual — because traditions are what bring people back.\n\nA high-quality result means even a first-time camper feels prepared, not anxious.",
    "description": "A camp-director-grade plan: shared gear checklists, fire-friendly meal recipes, a week-before timeline, dusk-arrival setup order, and four campfire activities.",
    "category": "activities",
    "variables": {
      "campsite": {
        "label": "Campsite",
        "question": "Where are you camping?",
        "type": "text",
        "placeholder": "e.g., Yosemite",
        "required": true
      },
      "nights": {
        "label": "Nights",
        "question": "How many nights?",
        "type": "number",
        "placeholder": "e.g., 2",
        "required": true
      },
      "groupSize": {
        "label": "Group Size",
        "question": "How many campers?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "experienceMix": {
        "label": "Experience Mix",
        "question": "Any first-time campers in the group?",
        "type": "select",
        "options": [
          "Everyone has camped before",
          "Some first-timers",
          "Everyone is new to camping"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Stargazing Night Planner",
    "displayDescription": "Sets up a perfect stargazing night — what is actually visible on your date, how to find each object, comfort setup, and sky photography tips.",
    "id": "activities-020",
    "prompt": "Act as an astronomy guide planning a stargazing night on {date} at {location} for a {experience} group. The magic of stargazing is knowing what you are looking at — so this plan must turn 'pretty stars' into a guided tour of the actual sky that night.\n\nStart with timing: the best arrival time, when true darkness begins (accounting for twilight on {date}), the peak viewing window, and the moon phase that night with an honest assessment of how it affects viewing. Then the sky guide for {date}: the 5 to 8 best targets actually visible — constellations, planets, the moon's features, any meteor shower or ISS pass — each with plain-language directions for finding it (start from a bright star everyone knows, then star-hop), what it looks like to the naked eye versus binoculars, and one fascinating fact to share about each.\n\nCover equipment honestly for a {experience} group: whether binoculars or a telescope are worth bringing, what kind to borrow or buy cheap, and how to share one telescope among a group without long boring waits. Add the comfort setup: what to bring for hours of lying outside (blankets, reclining chairs, warm layers, hot drinks, red flashlights), red-light etiquette so nobody ruins anyone's night vision, and a simple sky-photography section (phone settings that actually work, what a basic tripod can capture, realistic expectations).\n\nClose with a 30-minute opening talk script the host can read to set up the night, and a 'wow moment' to save for last. Add the group-hosting layer for a {experience} crowd: the ten-minute opening talk script (the night's theme, the scale-setting fact, one mind-bending number), the \"while you wait\" engagement for telescope lines (naked-eye challenges, the constellation stories worth retelling), and the red-light discipline briefing with the actual why (the thirty-minute dark-adaptation science, stated plainly). Include the comfort-and-warmth reality check — the temperature drop after midnight, the layers-per-hour rule, the hot drink plan — and the cloud backup: an indoor astronomy program (the documentary pick, the app-guided tour) so the night is not wasted if the sky closes.\n\nA high-quality result means the group leaves knowing the names of things in the sky, not just that it was pretty.",
    "description": "A guided-tour stargazing night: exact sky targets for your date with star-hop directions, equipment honesty, comfort setup, red-light etiquette, and an opening talk script.",
    "category": "activities",
    "variables": {
      "date": {
        "label": "Date",
        "question": "What night are you going?",
        "type": "date",
        "required": true
      },
      "location": {
        "label": "Location",
        "question": "Where will you stargaze?",
        "type": "text",
        "placeholder": "e.g., Joshua Tree",
        "required": true
      },
      "experience": {
        "label": "Experience",
        "question": "What is the group's experience level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Experienced"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Photography Walk Challenge",
    "displayDescription": "Turns a walk into a themed photo challenge — twelve creative shot prompts, a light-aware route, camera tips, and a judging format.",
    "id": "activities-021",
    "prompt": "Act as a photography mentor designing a photo walk challenge at {location}, lasting {duration} hours, with a {theme} theme. This should work for any camera including phones — the challenge is about seeing, not gear.\n\nWrite twelve creative shot prompts that fit the {theme} theme and the reality of {location}. Each prompt should be specific enough to act on immediately (not 'capture beauty' but something like 'a reflection that lies to you') and varied across techniques: composition, light, story, detail, motion, and people. Order them from warm-up easy to genuinely challenging, and note which ones pair well with phone cameras versus benefit from a real camera.\n\nDesign a walking route through {location} with 4 to 6 stops, noting the best light at each stop for the time of day and which prompts to shoot where. Add camera settings guidance for the conditions (phone tips included: exposure lock, HDR, portrait mode use), and a short 'photographer's eye' warm-up exercise to do before the first shot.\n\nFinish with a judging or sharing format for afterward: a simple scoring rubric (creativity, technique, theme fit), how to run the share-back (project, print, or phone-pass), and prize or recognition ideas. Include one constraint that makes it interesting — a limitation like 'no zooming' or 'shoot only in black and white for an hour' — and explain why constraints improve creativity. Add the critique-and-share structure that turns a walk into growth: the mid-walk huddle (one prompt everyone shoots together, then compare — the five-minute lesson in seeing differently), the end-of-walk share (each person picks their best two; the group names what works before what to improve), and the 48-hour follow-up (the edit-and-post challenge, the shared album or hashtag). Include the phone-photographer equalizers — the techniques where phones beat cameras (panoramas, night mode, the ultra-wide) — so nobody feels under-gunned, plus the \"one constraint\" twist for round two (the whole route in black and white, or shadows only).\n\nA high-quality result means participants come home with photos they are proud of and a new way of seeing.",
    "description": "A mentor-designed photo walk: twelve technique-varied shot prompts, a light-aware route with stop assignments, phone and camera tips, and a share-back judging format.",
    "category": "activities",
    "variables": {
      "location": {
        "label": "Location",
        "question": "Where will the photo walk be?",
        "type": "text",
        "placeholder": "e.g., downtown Phoenix",
        "required": true
      },
      "duration": {
        "label": "Duration",
        "question": "How many hours will the walk last?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "theme": {
        "label": "Theme",
        "question": "What theme should the challenge have?",
        "type": "select",
        "options": [
          "Architecture",
          "Nature",
          "Street life",
          "Light and shadow"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Museum Day Planner",
    "displayDescription": "Plans a fatigue-proof museum day — must-see route, crowd-dodging timing, rest breaks, and one interactive experience worth doing.",
    "id": "activities-022",
    "prompt": "Act as a museum strategist planning a day at {museum} for {groupSize} people over {hours} hours. Museum fatigue is real — most people burn out after 90 minutes of wandering. This plan must beat fatigue with pacing, not willpower.\n\nRecommend the must-see exhibits and galleries at {museum} (the 6 to 10 highlights worth the trip, not everything), and design an efficient route between them that minimizes backtracking. For each highlight give: what it is, why it matters (the one story or detail that makes it click), and how long to spend. Schedule the route around crowds: which wings to hit first, the best time for the popular exhibits, and where to go when the tour buses arrive.\n\nBuild in the anti-fatigue structure: scheduled rest and snack breaks every 60 to 90 minutes with where to take them (the good benches, the cafe, the quiet gallery), a midday longer break, and an energy-management note for the group leader on reading the room. Add one interactive or behind-the-scenes experience worth doing (a demo, a workshop, a guided tour, a hands-on gallery) with booking details.\n\nInclude practical logistics: ticket types and whether to buy ahead, bag and coat check, the best entrance to use, food options inside versus nearby, and a kid-engagement layer if children are in the group (a scavenger hunt through the galleries, sketching prompts, the 'find the weirdest thing' game). Close with a 20-minute wind-down ritual — the gift shop strategy and one question to discuss on the way home. Tune the route to {kidsAges} when kids come: lead with the high-interaction galleries (the hands-on wing, the dinosaurs, the armor court) while energy is fresh, run a scavenger hunt through the quiet galleries (write the eight-item hunt list matched to the ages), and place the cafe break before the meltdown window, not after. For an adult-only group, add the slow-looking exercise — the ten-minute single-artwork stop with three looking prompts — and the special-exhibition call (worth it or skip, with the honest assessment). Either way, name the exit strategy: the gift-shop timebox and the one-souvenir rule.\n\nA high-quality result means leaving energized instead of glazed over.",
    "description": "A fatigue-proof museum day: a highlights-only route with crowd-dodging timing, scheduled recovery breaks, one bookable experience, and kid-engagement tactics.",
    "category": "activities",
    "variables": {
      "museum": {
        "label": "Museum",
        "question": "Which museum are you visiting?",
        "type": "text",
        "placeholder": "e.g., the Art Institute of Chicago",
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours do you have?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "groupSize": {
        "label": "Group Size",
        "question": "How many people are going?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "kidsAges": {
        "label": "Kids' Ages",
        "question": "Any kids coming? List ages (leave blank if none).",
        "type": "text",
        "placeholder": "e.g., 7 and 10",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Library Visit Planner",
    "displayDescription": "Turns a library trip into a mission — a floor-by-floor game plan, resource hunting list, librarian tactics, and a checkout shortlist.",
    "id": "activities-023",
    "prompt": "Act as a research concierge planning a {hours}-hour library visit focused on a {goal}, for someone interested in {interests}. Most people use 5 percent of what a library offers — this plan should unlock the other 95 percent.\n\nBuild a floor-by-floor (or section-by-section) game plan for the {hours} hours: which sections to hit in what order, how long to spend in each, and what to look for in each one relative to the {goal}. Include the non-book resources people miss: databases, digital archives, maker spaces, recording studios, special collections, interlibrary loan, and librarian-curated lists.\n\nGive me five specific types of books or resources to hunt for, with example titles or call-number areas where possible, and a search strategy for the catalog (exact search terms and filters to use for the {goal}). Teach me how to use the librarians efficiently: the exact questions to ask at the reference desk, how to request a research consultation, and how to get materials from other branches.\n\nAdd a quiet-corner strategy for the deep work portion (where the good seats are, power outlet maps, the floors to avoid), a note-taking or capture system for the visit, and end with a checkout shortlist template: the 5 to 8 items to walk out with, prioritized. Close with one 'level up' move — a library card perk or service to activate before leaving. Add the librarian-leverage playbook: the reference-desk script (including the magic phrase — \"I'm working on {goal}; what would you recommend that I wouldn't find on my own?\"), how to request a special-collections viewing, and the interlibrary-loan walkthrough for the book they do not carry. Include the digital unlock: the library apps to install before arriving (ebooks, audiobooks, streaming, the newspaper access), with the login steps. End with the take-home system — the holds to place, the reading list to export, the return reminder on the calendar — because a library visit that ends at the door wastes half its value.\n\nA high-quality result turns a casual visit into a productive expedition.",
    "description": "A library expedition plan: section-by-section game plan, catalog search tactics, reference-desk scripts, deep-work seating strategy, and a prioritized checkout shortlist.",
    "category": "activities",
    "variables": {
      "interests": {
        "label": "Interests",
        "question": "What are you interested in?",
        "type": "text",
        "placeholder": "e.g., history, sci-fi, cooking",
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours will you spend?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What is the main goal of the visit?",
        "type": "select",
        "options": [
          "Discover new reads",
          "Research a topic",
          "Quiet work session"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Bookstore Crawl",
    "displayDescription": "Plans a bookstore crawl across the city — a routed stop list, a book hunt challenge, budget strategy, and break planning.",
    "id": "activities-024",
    "prompt": "Act as a book-crawl organizer planning a bookstore crawl across {city}, lasting {hours} hours, with a ${budget} book budget. This should feel like a treasure hunt, not a shopping trip.\n\nPick four to six bookstores in {city} with genuinely different specialties (new, used, rare, genre-specific, indie with character) and design an efficient route between them with travel times and the best order to visit. For each stop give: what it is known for, the section to head straight to, a time budget, and one thing to look for that you can only find there.\n\nCreate a book hunt challenge with categories to find at each stop (examples: a book with a red cover from before 1980, the weirdest title in the store, a book by an author from {city}) — make it playful with a points system and a small prize. Build the ${budget} budget strategy: how much to allocate per stop, the 'sleep on it' rule for anything over a set price, and how to decide between the hunt finds and the wishlist.\n\nPlan coffee or snack breaks between stores at specific points in the route, add used-store etiquette (the unwritten rules that keep you welcome), and close with a post-crawl ritual: the unbagging, the reading-pile prioritization, and how to track what you bought. Personalize the hunt to {readingTaste}: for each stop, name the exact shelf or section where that taste lives and the \"if you like X, ask for Y\" question for the bookseller. Build the budget strategy around the taste — where to splurge (the rare find, the signed copy) versus where to hunt bargains (the used-store stack). Add the crawl rituals: the one-book-per-store limit (with the exception rule for the once-in-a-lifetime find), the coffee-shop debrief with the show-and-tell round, and the end-of-day \"best find\" vote. Include the carrying logistics — the tote bag, the car-drop midpoint — because books get heavy by store four.\n\nA high-quality result means coming home with books you love, stories from the hunt, and zero buyer's remorse.",
    "description": "A routed bookstore crawl with distinct specialty stops, a points-based book hunt challenge, a per-stop budget strategy, and a post-crawl unbagging ritual.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city are you crawling?",
        "type": "text",
        "placeholder": "e.g., Portland",
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours do you have?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your book budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 60",
        "required": true
      },
      "readingTaste": {
        "label": "Reading Taste",
        "question": "What do you love to read? (optional)",
        "type": "textarea",
        "placeholder": "e.g., sci-fi, memoirs, cookbooks",
        "required": false
      }
    }
  },

  {
    "displayTitle": "Cooking Challenge",
    "displayDescription": "Sets up a full cooking competition — theme, surprise constraint, scoring rubric, timeline, shopping list, and safety rules.",
    "id": "activities-025",
    "prompt": "Act as a cooking competition producer setting up a challenge with the theme {theme}, for a {skillLevel} cook making {servings} servings, with these dietary limits to respect: {dietaryNotes}. The challenge should feel like a real episode of a cooking show — structured, fair, and genuinely fun to cook and to judge.\n\nWrite the complete rulebook: the objective (what 'winning' means for the {theme} theme), the time limit with a suggested breakdown (prep, cook, plate), whether cooks work solo or in teams, and what happens if someone finishes early. Then design the surprise constraint — the twist revealed at the start that forces creativity (a mystery ingredient, a banned technique, a plating requirement, a one-pan rule) — calibrated so a {skillLevel} cook finds it challenging but not impossible, and explain why this specific twist fits the theme.\n\nBuild the judging system: four to five criteria (taste, creativity, presentation, theme fit, technique) with a 1-10 scoring rubric describing what each score level looks like, who judges, whether tasting is blind, and how ties break. Include a timeline for the whole event from doors-open to winner announced, a shopping list for pantry basics and shared staples (so cooks bring only their specialty items), and station setup guidance for a home kitchen.\n\nAdd kitchen safety rules specific to a competitive environment (knife handling under time pressure, raw protein protocols, fire safety), ideas for plating and presentation a {skillLevel} cook can actually execute, and a post-challenge ritual — the group tasting order, how to give feedback that is honest but kind, and what to do with {servings} servings of food afterward. Add the judging and hosting layer. Design the scorecard with categories and point weights matched to the {theme} theme — taste, creativity, presentation, use of the twist — and the tasting protocol (hot food first, palate cleansers between entries, the judging order). Write the host's running script: the countdown calls, the twist-reveal wording, the results ceremony. Include the fairness mechanics: how to handicap the {skillLevel} spread if cooks differ, the tiebreaker rule, and the prize (the trophy, the apron, the dish-duty exemption). End with the cleanup plan — who does what — because the show is not over until the kitchen is clean.\n\nA high-quality result means the host can print the rulebook and run the event without improvising.",
    "description": "A complete cooking-show-style rulebook: timed rounds, a calibrated surprise twist, a 1-10 judging rubric, shopping list, safety rules, and a kind-feedback tasting ritual.",
    "category": "activities",
    "variables": {
      "theme": {
        "label": "Theme",
        "question": "What is the challenge theme?",
        "type": "text",
        "placeholder": "e.g., tacos with a twist",
        "required": true
      },
      "skillLevel": {
        "label": "Skill Level",
        "question": "What is the cook's skill level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "servings": {
        "label": "Servings",
        "question": "How many servings?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "dietaryNotes": {
        "label": "Dietary Limits",
        "question": "Any dietary restrictions the dishes must respect? (optional)",
        "type": "textarea",
        "placeholder": "e.g., no pork, one gluten-free taster",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Bake-Off Planner",
    "displayDescription": "Organizes a friendly bake-off — fair rules, judging categories, anonymous score sheets, ingredient lists, and tiebreakers.",
    "id": "activities-026",
    "prompt": "Act as a bake-off commissioner organizing a competition for {bakers} bakers on the theme {theme}, judged by {judging}, at {venue}. The two things that ruin amateur bake-offs are unfair judging and logistical chaos — design against both.\n\nWrite the rules first: who can enter what (one entry per baker, baked at home or on-site — decide and justify), the theme interpretation boundaries (how strict is {theme}?), drop-off or bake-start times, labeling and anonymity protocols, and how entries are displayed. Then design the judging system for {judging}: if blind tasting, the exact procedure for anonymizing entries; if point scoring, a score sheet with categories and weights; if category awards, the award list (best taste, best presentation, most creative, best theme fit, plus a people's choice). Provide the actual score sheet layout the judges will use and a tiebreaker procedure that feels fair.\n\nBuild the event timeline: setup, entry intake and display, judging rounds with tasting order (palate cleansers between entries), deliberation, awards, and the group tasting party afterward. List ingredients and equipment the organizer provides versus what bakers bring, scaled for {bakers} competitors, with a budget estimate for the organizer's supplies.\n\nAdd: tips for presenting bakes so judging is about the baking not the packaging, photography of the entries before tasting, how to keep the competition friendly when someone loses (the host's script for announcing results), what to do with leftover baked goods, and a {venue}-specific logistics note (oven access, table space, refrigeration). Add the day-of timeline: the minute-by-minute schedule from doors-open through setup, judging, and awards, with who does what when. Include the crowd-pleasing extras that make it an event rather than a drop-off: the people's-choice vote (the token or sticker system), the tasting table for non-competitors, the photo setup with the entries. Cover the edge cases: the late arrival, the tie, the controversial judging call (the head judge's final-word rule), and the leftover plan. Close with the thank-you message and results-announcement template for after the event.\n\nA high-quality result means every baker feels the contest was fair and the day runs itself.",
    "description": "A commissioner's complete bake-off kit: fair rules, anonymity protocols, printable score sheets, a tasting-party timeline, and a host script for announcing winners kindly.",
    "category": "activities",
    "variables": {
      "bakers": {
        "label": "Bakers",
        "question": "How many bakers are competing?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "theme": {
        "label": "Theme",
        "question": "What is the bake-off theme?",
        "type": "text",
        "placeholder": "e.g., chocolate desserts",
        "required": true
      },
      "judging": {
        "label": "Judging Style",
        "question": "How should judging work?",
        "type": "select",
        "options": [
          "Blind tasting",
          "Point scoring",
          "Category awards"
        ],
        "required": true
      },
      "venue": {
        "label": "Venue",
        "question": "Where will the bake-off be held? (optional)",
        "type": "text",
        "placeholder": "e.g., my kitchen and living room",
        "required": false
      }
    }
  },
  {
    "displayTitle": "New Recipe Night",
    "displayDescription": "Plans a full new-cuisine night — menu, backward prep timeline, organized grocery list, and atmosphere touches that match the cuisine.",
    "id": "activities-027",
    "prompt": "Act as a culinary experience designer planning a new recipe night featuring {cuisine} cuisine, fitted into a {cookingTime}-minute cooking window, respecting these dietary needs: {dietaryNeeds}, for a cook at a {cookSkill} level. The goal is not just dinner — it is a small cultural immersion that ends with a meal you are proud of.\n\nBuild the full menu: appetizer, main, and side (plus a simple drink pairing, alcoholic or not), each dish chosen so the whole menu is genuinely finishable in {cookingTime} minutes by a {cookSkill} cook — be honest about what to simplify or buy pre-made, and say so explicitly rather than pretending everything is from scratch. For each dish give a concise recipe with the {dietaryNeeds} adaptations built in, not bolted on.\n\nWrite the prep timeline working backward from serving time: what happens at T-minus 90, 60, 30, 15, and 0, including when to start rice or noodles, when to chop, and the exact order that keeps a {cookSkill} cook calm. List the grocery list organized by store section, marking which items are one-time pantry investments for future {cuisine} cooking versus tonight-only perishables.\n\nAdd the atmosphere layer: music that matches the cuisine (specific playlist search terms), table-setting touches, and one cultural note about the cuisine to share at the table — the story behind a dish or ingredient. Close with a 'what I learned' tasting exercise: three questions to discuss over the meal about flavors and techniques, so the night builds skill, not just dinner. Add the cultural-immersion layer that makes it more than dinner: the ten-minute pre-cooking briefing (the cuisine's flavor logic — its holy trinity of aromatics, its balance principles), the music playlist to cook to, and the table-setting touch that honors the cuisine. Include the technique spotlight: the one skill this menu teaches (the knife cut, the tempering, the fold) with a practice drill before the real cooking starts. End with the tasting ritual — how to eat it properly, what to notice in each bite — and the \"next time\" teaser: the one dish this night prepares you to attempt.\n\nA high-quality result means walking into the kitchen at T-minus 90 with total clarity.",
    "description": "A cultural-immersion dinner plan: an honest {cookingTime}-minute menu with built-in dietary adaptations, a backward prep timeline, sectioned grocery list, and table conversation.",
    "category": "activities",
    "variables": {
      "cuisine": {
        "label": "Cuisine",
        "question": "Which cuisine do you want to try?",
        "type": "text",
        "placeholder": "e.g., Thai",
        "required": true
      },
      "cookingTime": {
        "label": "Cooking Time",
        "question": "How many minutes do you have for cooking?",
        "type": "number",
        "placeholder": "e.g., 60",
        "required": true
      },
      "dietaryNeeds": {
        "label": "Dietary Needs",
        "question": "Any dietary restrictions?",
        "type": "textarea",
        "placeholder": "e.g., vegetarian, dairy-free",
        "required": false
      },
      "cookSkill": {
        "label": "Cooking Skill",
        "question": "How would you describe the cook's skill? (optional)",
        "type": "select",
        "options": [
          "Beginner",
          "Comfortable home cook",
          "Experienced"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Month-Long Cuisine Exploration",
    "displayDescription": "Structures a four-week deep dive into one cuisine — weekly themes, skill-building recipes, a buy-once pantry list, and tasting exercises.",
    "id": "activities-028",
    "prompt": "Act as a culinary mentor designing a month-long exploration of {cuisine} cuisine, cooking {mealsPerWeek} meals per week, respecting these dietary needs: {dietaryNeeds}. This should build real intuition for the cuisine — by week four, the cook should understand its flavor logic, not just follow recipes.\n\nStructure the month as four weekly themes that progress from foundations to fluency: week 1 the essential techniques and base flavors, week 2 the everyday home dishes, week 3 regional variation or celebration dishes, week 4 improvisation and 'cook without a recipe' confidence. Assign each week two to three specific recipes (scaled to {mealsPerWeek} meals) with difficulty ratings, active versus passive time, and which technique each recipe teaches.\n\nProvide the buy-once pantry list: every shelf-stable staple, spice, sauce, and oil needed for the month, organized by where to find them (regular grocery versus Asian/Latin/international market), with approximate total cost and what keeps for future months. Add a weekly shopping list for perishables.\n\nBuild in the learning system: a weekly tasting-note exercise with a template (what I tasted, what surprised me, what technique I used, what I would change) so progress is visible, a 'flavor map' of the cuisine's core taste building blocks to reference, and a week-4 capstone: a meal cooked without a recipe using the month's techniques. Include honest pacing advice — which weeks are heavy, where to use leftovers strategically, and how to handle a week where only one meal happens. Add the pantry-building plan: the essential ingredients and tools to acquire in week one (the starter kit with costs and where to buy them), what gets used up versus what lasts for months, and the storage guidance. Include the learning infrastructure: the one cookbook or channel worth following for this cuisine, the flavor-journal template (what to record after each meal — the tastes, the surprises, the adjustments), and the week-four \"cook without a recipe\" test with its safety net (the formula card). End with the graduation meal: the week-four dinner party plan that shows off the month.\n\nA high-quality result ends the month with a cook who thinks in the cuisine, not just cooks from it.",
    "description": "A four-week culinary mentorship: themed weekly progression, technique-teaching recipes, a buy-once pantry investment list, tasting-note templates, and a cook-without-a-recipe capstone.",
    "category": "activities",
    "variables": {
      "cuisine": {
        "label": "Cuisine",
        "question": "Which cuisine do you want to explore?",
        "type": "text",
        "placeholder": "e.g., Japanese",
        "required": true
      },
      "mealsPerWeek": {
        "label": "Meals Per Week",
        "question": "How many meals per week will you cook?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "dietaryNeeds": {
        "label": "Dietary Needs",
        "question": "Any dietary restrictions to build around? (optional)",
        "type": "textarea",
        "placeholder": "e.g., pescatarian, low sodium",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Craft Night Planner",
    "displayDescription": "Organizes a craft night for your group — beginner-proof instructions, a per-person supply budget, workspace setup, timeline, and cleanup plan.",
    "id": "activities-029",
    "prompt": "Act as a craft night host planning an evening for {guests} people making {craft}, with a ${budget} total budget, and these ages in the group: {ages}. The host's nightmare is half the table stuck while the other half finishes early — design the evening so everyone stays in flow.\n\nWrite step-by-step instructions for {craft} that a total beginner can follow without the host hovering: break the project into 4 to 6 clear stages, give the 'say this' framing for introducing each stage, include photos-or-diagrams descriptions where a visual matters, and add a troubleshooting box for each stage (the two things that go wrong and the 30-second fix). Provide two variations: a simplified version for younger or less patient crafters and an advanced twist for experienced hands, so the {guests} guests finish at roughly the same time.\n\nBuild the logistics: a complete supplies list with quantities for {guests} people, per-person cost math that stays inside ${budget}, where to buy cheap (dollar store versus craft store versus online), and what can be shared versus what each person needs. Describe the workspace setup: table covering, lighting, seating, how to arrange shared supplies for {guests} people, and ventilation or mess precautions specific to {craft}.\n\nWrite the evening timeline (arrival and setup, demo, crafting blocks with a stretch break, show-and-tell, cleanup), a cleanup plan with supply assignments, and age-specific notes from {ages} on safety (sharp tools, hot glue, fumes) and attention span. Close with display or gifting ideas for the finished pieces. Add the host's crowd-management playbook: the staggered-start trick (early arrivers do the prep stage so nobody waits), the floater role (the experienced crafter who circulates helping, so the host is not trapped at one table), and the pace checkpoints (at thirty and sixty minutes, what everyone should have finished — with the catch-up fast track for stragglers). Include the take-home finishing: drying or curing instructions, the care card to send with each piece, the group photo moment. End with the budget reconciliation — the per-person cost math against ${budget} — and the leftover-materials plan.\n\nA high-quality result means the host crafts alongside everyone instead of running rescue missions all night.",
    "description": "A host-proof craft night: staged beginner instructions with fixes, simplified and advanced variations, per-person supply math, workspace setup, and a timed evening flow.",
    "category": "activities",
    "variables": {
      "craft": {
        "label": "Craft",
        "question": "What craft will you make?",
        "type": "text",
        "placeholder": "e.g., candle making",
        "required": true
      },
      "guests": {
        "label": "Guests",
        "question": "How many people are coming?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is the total budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 50",
        "required": true
      },
      "ages": {
        "label": "Ages",
        "question": "What are the ages of the crafters? (optional)",
        "type": "text",
        "placeholder": "e.g., 8, 12, 34, 36",
        "required": false
      }
    }
  },
  {
    "displayTitle": "DIY Project Picker",
    "displayDescription": "Recommends three DIY projects matched to your skill, time, budget, and workspace — with tools, costs, steps, and mistakes to avoid.",
    "id": "activities-030",
    "prompt": "Act as a DIY mentor recommending projects for someone at a {skillLevel} level, with about {hours} hours of work time, a ${budget} budget, and this workspace: {workspace}. The right project at the wrong skill level becomes an expensive pile of materials — match honestly.\n\nRecommend exactly three DIY projects that all fit the constraints. For each project include: what it is and what the finished result looks like (be specific — dimensions, function, style); why it suits a {skillLevel} skill level and where it will stretch them just enough; the complete tool list marking which tools are must-own versus borrowable versus rentable; materials with itemized cost estimates that total under ${budget}; a step-by-step overview with time estimates per phase across the {hours} hours; the three most common mistakes beginners make on this exact project and how to avoid each; a difficulty rating with what makes it hard; and workspace requirements checked against {workspace} (noise, dust, drying space, ventilation).\n\nRank the three by impressiveness relative to effort — the 'wow per hour' factor — and name the single best first project with the first three actions to take this week (what to buy, what to watch, what to measure). Add a universal safety section: the protective gear that matters for these projects and the one safety rule beginners always ignore. Add the decision framework for choosing among the three projects: the honest difficulty ranking, which project teaches the most transferable skill, and which one a {skillLevel} DIYer is most likely to actually finish (the completion-likelihood score with the reasoning shown). Include the shopping trip plan: the single store run with the aisle-by-aisle list, what to ask the staff, and the return-policy safety net for the wrong purchase. End with the \"first cut\" ritual: the twenty-minute starter task for the chosen project that builds momentum before the real work begins.\n\nA high-quality result means reading it and knowing exactly which project to start Saturday morning.",
    "description": "Three honestly-matched DIY projects with borrow-versus-buy tool lists, itemized costs, phase-by-phase steps, the three classic mistakes per project, and a this-week action plan.",
    "category": "activities",
    "variables": {
      "skillLevel": {
        "label": "Skill Level",
        "question": "What is your DIY skill level?",
        "type": "select",
        "options": [
          "Total beginner",
          "Some experience",
          "Pretty handy"
        ],
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours can you spend?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 75",
        "required": true
      },
      "workspace": {
        "label": "Workspace",
        "question": "What kind of workspace do you have? (optional)",
        "type": "text",
        "placeholder": "e.g., apartment balcony, garage with workbench",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Painting Session Guide",
    "displayDescription": "Guides a complete painting session — exact supply list, setup, timed stages with focus points, and fixes for muddy colors and overworking.",
    "id": "activities-031",
    "prompt": "Act as a painting instructor guiding a {duration}-minute session in {medium}, for a beginner painting {subject}. The beginner's real enemies are muddy colors, overworking, and quitting at the ugly middle stage — coach directly against all three.\n\nStart with the exact supply list: every brush, paint color, surface, and tool needed, with budget-friendly options and what not to skimp on (the one supply where cheap ruins the experience). Include setup: workspace covering, water jars, palette layout in the order colors get mixed, and lighting.\n\nBreak the {duration} minutes into timed stages with a clear focus for each: the loose underpainting or sketch block, the big shapes and values block, the color and detail block, and the 'step back and stop' finishing block. For each stage say what to do, what to deliberately NOT do yet, and the checkpoint question to ask before moving on. Weave in color-mixing guidance specific to {medium} and {subject} (which three mixtures do 80 percent of the work).\n\nAdd a troubleshooting section for the classic beginner problems: muddy colors (why it happens and the fix), overworking (how to recognize the moment to stop), the painting looking 'wrong' at the halfway point (why the ugly stage is normal and how to push through), and {medium}-specific issues like drying too fast or water control. Close with how to photograph the finished piece, one framing or display idea, and the single exercise to repeat next session that builds the most skill. Add the ugly-middle-stage survival guide: the specific moment (usually two-thirds through) when the painting looks terrible, what is actually happening (values not yet established, colors over-blended), and the three moves that rescue it (step back six feet, squint, fix the darkest dark and lightest light first). Include the {medium}-specific rescue techniques (lifting in watercolor, the palette-knife save in acrylics, the wipe-back in oils). End with the finishing ritual: how to know when to stop (the twenty-four-hour rule), signing the work, and photographing it in good light.\n\nA high-quality result means a beginner finishes with a painting they are willing to hang up.",
    "description": "An instructor-led painting session: budget supply list, timed stages with checkpoints, color-mixing shortcuts, and direct coaching through the ugly middle stage.",
    "category": "activities",
    "variables": {
      "medium": {
        "label": "Medium",
        "question": "Which medium will you use?",
        "type": "select",
        "options": [
          "Acrylics",
          "Watercolor",
          "Oils"
        ],
        "required": true
      },
      "subject": {
        "label": "Subject",
        "question": "What will you paint?",
        "type": "text",
        "placeholder": "e.g., a mountain sunset",
        "required": true
      },
      "duration": {
        "label": "Duration",
        "question": "How many minutes for the session?",
        "type": "number",
        "placeholder": "e.g., 90",
        "required": true
      }
    }
  },
  {
    "displayTitle": "30-Day Drawing Challenge",
    "displayDescription": "Builds a progressive 30-day drawing plan — daily skill-stacking prompts, medium-specific technique tips, and milestone reviews at days 10, 20, 30.",
    "id": "activities-032",
    "prompt": "Act as a drawing coach building a 30-day challenge in {medium} for a {skillLevel}, at {dailyMinutes} minutes a day, working toward this goal: {goal}. Thirty random prompts do not build skill — this challenge must stack skills so day 30 is visibly better than day 1.\n\nDesign the progression in four weekly phases: week 1 lines, shapes, and seeing (training the hand and eye); week 2 value, shading, and form; week 3 composition and the subject matter behind {goal}; week 4 putting it together with longer finished pieces. Write a specific daily prompt for all 30 days — each prompt names exactly what to draw and the one technique to focus on, building on previous days. Keep every prompt doable in {dailyMinutes} minutes with household subjects (no exotic setups).\n\nAdd {medium}-specific technique tips matched to each week's focus (for example, charcoal blending in week 2, ink confidence in week 3), schedule weekly review-and-redo days where the artist redraws a week-1 piece to see growth, and build milestone check-ins at days 10, 20, and 30 with specific self-assessment questions and a photo-your-progress ritual.\n\nInclude the motivation system: rules for missed days that keep the streak alive without guilt (the 'never miss twice' rule, 5-minute minimum viable sessions), what to do on low-energy days, and a day-30 celebration that showcases the work. Close with 'what next' — the three skills to practice after the challenge to keep growing toward {goal}. Add the accountability and review system: the daily post-or-file ritual (the sketchbook photo, the shared album), the weekly review protocol (lay out seven days, circle the best line, name the one thing that improved), and the day-fifteen midpoint check against {goal} (what is on track, what needs a remedial drill). Include the slump plan for week three — the usual motivation dip — with the smaller-prompt fallback and the permission to draw badly. End with the day-thirty finale: the finished-piece brief, the before-and-after comparison setup, and how to choose the next thirty days.\n\nA high-quality result is a training program, not a prompt list.",
    "description": "A coach-built 30-day drawing program: four skill-stacking phases, 30 specific daily prompts, redo days that prove growth, and a guilt-free system for missed days.",
    "category": "activities",
    "variables": {
      "medium": {
        "label": "Medium",
        "question": "Which medium will you draw with?",
        "type": "select",
        "options": [
          "Pencil sketching",
          "Ink",
          "Charcoal",
          "Watercolor"
        ],
        "required": true
      },
      "skillLevel": {
        "label": "Skill Level",
        "question": "What is your current level?",
        "type": "select",
        "options": [
          "Complete beginner",
          "Some experience",
          "Intermediate"
        ],
        "required": true
      },
      "dailyMinutes": {
        "label": "Daily Minutes",
        "question": "How many minutes per day?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": true
      },
      "goal": {
        "label": "Drawing Goal",
        "question": "What do you want to be able to draw by day 30? (optional)",
        "type": "text",
        "placeholder": "e.g., realistic portraits of my kids",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Journaling Session",
    "displayDescription": "Designs a mood-matched journaling session — warm-up, five layered prompts, timed pacing, a closing ritual, and guidance for recurring themes.",
    "id": "activities-033",
    "prompt": "Act as a reflective writing guide designing a {minutes}-minute journaling session for someone feeling {mood}, focused on {focus}, with this journaling experience: {journalExperience}. The session should move the writer from surface noise to something true — not just venting, but arriving somewhere new.\n\nStructure the {minutes} minutes in four movements: a 5-minute warm-up exercise that loosens the writing hand and quiets the inner critic (a timed free-write with a specific starting sentence); five layered prompts that descend from surface to depth — prompt 1 names what is happening, prompt 2 explores how it feels in the body and day-to-day, prompt 3 asks why it matters, prompt 4 imagines the wiser-self perspective, prompt 5 commits to one small action or acceptance — each matched to {mood} and {focus} so they feel personal, not generic; timed pacing for each section with a note on when to keep writing past the timer; and a closing ritual (a one-sentence summary, a gratitude line, or a symbolic gesture like closing the notebook deliberately).\n\nAdd guidance for what to do when recurring themes surface across sessions: how to recognize a pattern, three questions that turn a repeated complaint into insight, and when a theme suggests talking to someone rather than only journaling. Include a note on privacy and honesty (write like no one will read it), and calibrate the depth of the prompts to {journalExperience} — gentler entry points for beginners, sharper questions for experienced journalers. For the brand-new: add the permission-setting intro (there is no wrong way, the pen keeps moving, spelling does not matter) and shorter prompts with sentence starters. For regulars: add the advanced twists (the unsent letter, the dialogue with the feeling, the future-self interview). Include the post-session integration: the two-minute highlight-and-action step (underline the truest sentence, name one tiny action it asks for), and the re-reading ritual (the monthly flip-through with the pattern-spotting questions). End with the streak design: the minimum viable session for busy days.\n\nA high-quality result leaves the writer feeling clearer than when they sat down, with one actionable insight in hand.",
    "description": "A guided journaling session in four movements — warm-up, five descending prompts, timed pacing, a closing ritual — plus a framework for turning recurring themes into insight.",
    "category": "activities",
    "variables": {
      "mood": {
        "label": "Mood",
        "question": "How are you feeling right now?",
        "type": "text",
        "placeholder": "e.g., restless and unfocused",
        "required": true
      },
      "minutes": {
        "label": "Minutes",
        "question": "How many minutes do you have?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the session focus on?",
        "type": "select",
        "options": [
          "Gratitude",
          "Reflection",
          "Goal setting",
          "Free write"
        ],
        "required": true
      },
      "journalExperience": {
        "label": "Experience",
        "question": "How much journaling experience do you have? (optional)",
        "type": "select",
        "options": [
          "Brand new to journaling",
          "I journal occasionally",
          "I journal regularly"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Creative Writing Sprint",
    "displayDescription": "Runs a timed writing sprint — warm-up, three layered prompt choices, check-in structure, unsticking techniques, and a revision checklist.",
    "id": "activities-034",
    "prompt": "Act as a writing coach running a {minutes}-minute creative writing sprint in {genre} around the theme of {promptTheme}, for a writer at a {writerLevel} level. A sprint works because of pressure and permission — the timer creates urgency, and the rules remove the inner editor. Design both.\n\nOpen with a 5-minute warm-up exercise that gets words flowing without stakes (a sensory-list drill or a 'worst first line' game tied loosely to {promptTheme}). Then offer three layered writing prompts to choose from, each approaching {promptTheme} from a different angle: one character-driven, one image-driven, one constraint-driven (a formal limitation like a second-person narrator or a 200-word cap). For each prompt give the setup in two sentences, the opening line to steal if stuck, and what 'success' looks like for a {writerLevel} writer — calibrated so it is ambitious but reachable.\n\nStructure the {minutes} minutes with check-in points: when to choose the prompt, the halfway 'keep going' nudge with a mid-sprint complication to inject if the draft stalls, and the final 5-minute landing. Add a toolkit for getting unstuck mid-sprint: five specific techniques (write the scene backward, switch senses, ask the character a question, skip to the ending, lower the bar to 'bad on purpose') with when to use each.\n\nClose with a quick revision checklist for polishing the draft afterward: the {genre}-specific pass (what to check first in flash fiction versus memoir), the three cuts to make, and one question to ask a reader. Calibrate to {writerLevel}. For beginners: add the craft micro-lesson before each prompt (the one technique to try — showing versus telling, the concrete image, the strong verb). For experienced writers: add the constraint escalations (the lipogram, the second-person twist, the time-jump). Include the sharing protocol: the read-aloud circle rules (only \"what stayed with me\" feedback — never critique in a sprint), and the revision invitation (the ten-minute expansion exercise for the piece with the most heat). End with the sprint-series plan: how to run this weekly with rotating themes and a growing crew.\n\nA high-quality result means finishing the sprint with a draft that has a pulse — and wanting to do it again tomorrow.",
    "description": "A coach-run writing sprint: a stakes-free warm-up, three angled prompt choices with stealable opening lines, mid-sprint unsticking tools, and a {genre}-specific revision pass.",
    "category": "activities",
    "variables": {
      "genre": {
        "label": "Genre",
        "question": "What genre do you want to write?",
        "type": "select",
        "options": [
          "Flash fiction",
          "Poetry",
          "Short story",
          "Memoir"
        ],
        "required": true
      },
      "minutes": {
        "label": "Minutes",
        "question": "How many minutes for the sprint?",
        "type": "number",
        "placeholder": "e.g., 45",
        "required": true
      },
      "promptTheme": {
        "label": "Theme",
        "question": "What theme should the prompts use?",
        "type": "text",
        "placeholder": "e.g., second chances",
        "required": true
      },
      "writerLevel": {
        "label": "Writing Level",
        "question": "How would you describe your writing experience? (optional)",
        "type": "select",
        "options": [
          "Just starting out",
          "I write sometimes",
          "Experienced writer"
        ],
        "required": false
      }
    }
  },

  {
    "displayTitle": "Music Jam Session Planner",
    "displayDescription": "Plans a jam session around your exact lineup — skill-matched song picks, parts assignments, running order, and a recording setup.",
    "id": "activities-035",
    "prompt": "Act as a jam session musical director for players at these instruments and levels: {instruments}, jamming for {duration} hours at {venue}. The difference between a great jam and a frustrating one is song choice matched to the weakest player — arrange everything so the least experienced musician has a part they can nail.\n\nSuggest five songs that fit the combined lineup: for each song name the key, the tempo feel, who plays what part (with a simplified part written out in plain language for the beginners), and why this song works for this specific group. Order the five into a running order that warms up easy, peaks with the most exciting tune, and cools down — with scheduled breaks that protect voices, hands, and ears.\n\nDesign the warm-up routine (15 minutes: tuning together, a rhythm lock-in exercise, a simple 12-bar or loop everyone can play), then give improvisation scaffolding so jamming does not fall apart: which songs get a solo section, the 'trading fours' or vamp structure to use, hand signals for ending a song, and the one rule that keeps jams musical instead of chaotic.\n\nAdd a recording setup section for {venue}: the simplest phone or interface placement that captures a decent room mix, what to record (full takes versus highlights), and how to review takes afterward without killing the vibe. Include {venue}-specific practical notes (noise limits, neighbor considerations, power and space for the lineup), a 'what to bring' checklist per player, and a closing ritual — the last song and how to end the session on a high. Add the session-flow management: the warm-up tune everyone can play blind, the signal system for endings and solos (the head nod, the foot stomp — agree on them before the first song), and the volume discipline rule (the quietest instrument sets the ceiling). Include the recording setup for {venue} (the phone placement that actually captures decent audio, the one-take rule, the track-naming habit), and the conflict defusers: the nonstop soloist, the rushing tempo, the energy dip (the snack break, the genre-switch palate cleanser). End with the \"next jam\" lock-in: the date and the one song to learn before then.\n\nA high-quality result means everyone leaves feeling like a musician, especially the beginners.",
    "description": "A musical director's jam plan: five songs with assigned simplified parts for beginners, a warm-up routine, improv scaffolding with hand signals, and a simple recording setup.",
    "category": "activities",
    "variables": {
      "instruments": {
        "label": "Instruments",
        "question": "Who plays what, and at what level?",
        "type": "textarea",
        "placeholder": "e.g., guitar (intermediate), drums (beginner), bass (beginner)",
        "required": true
      },
      "duration": {
        "label": "Duration",
        "question": "How many hours will you jam?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "venue": {
        "label": "Venue",
        "question": "Where will you jam? (optional)",
        "type": "text",
        "placeholder": "e.g., garage, rented rehearsal room",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Learn-An-Instrument Starter Day",
    "displayDescription": "Designs a first day on a new instrument — hourly milestones, what to have ready, beginner mistake fixes, and a week-two practice routine.",
    "id": "activities-036",
    "prompt": "Act as a patient first-day music teacher designing a {hours}-hour starter day for learning the {instrument} as a total beginner. If 'Something else' was chosen, the instrument is {instrumentName}. Day one should end with the student playing something recognizable — that single win is what creates day two.\n\nBreak the {hours} hours into sessions of 45-60 minutes with real breaks (hands and brains fatigue fast on day one). For each session set a concrete milestone: session 1 — holding the instrument correctly and making a clean first sound; session 2 — the first three notes or chords with a simple exercise; session 3 — putting it together into a simple recognizable song or groove; final session — playing it through and recording it. For each milestone give the exact exercise, what 'good enough to move on' sounds like, and how long to spend before moving on regardless.\n\nList everything to have ready before starting: the instrument itself (rent versus buy guidance for {instrument}, what a decent beginner setup costs), accessories (tuner, picks, stand, metronome app), and the learning materials (the one video or book to follow, not ten). Add a 'beginner mistakes with fixes' section: the five physical mistakes every beginner makes on {instrument} (death grip, bad posture, ignoring the tuner, practicing too fast, skipping the hard part) with the specific correction for each.\n\nClose with a practice routine for the following week: 20 minutes a day broken into what to do each day, how to know you are improving, and the milestone that means you are ready for lesson two. Add the frustration management that determines whether there is a day two: the five-minute rule (when stuck, play the thing you CAN do, then return), the hand-care breaks (the stretch routine, the honest callus timeline for strings), and the expectation calibration (what day one realistically sounds like — plus the recording to make today so week-four you can hear the growth). Include the gear check for the {instrument} (tune before anything; the setup issues that make beginners quit — high action, dead strings — and the twenty-dollar fixes). End with the day-two plan: the fifteen-minute daily routine that keeps the win alive.\n\nA high-quality result turns 'I have always wanted to learn' into 'I played something today.'",
    "description": "A first-day lesson plan that ends with a recognizable song: session milestones, rent-versus-buy guidance, five beginner mistakes with fixes, and a 20-minute daily week-two routine.",
    "category": "activities",
    "variables": {
      "instrument": {
        "label": "Instrument",
        "question": "Which instrument do you want to learn?",
        "type": "select",
        "options": [
          "Guitar",
          "Piano",
          "Ukulele",
          "Drums",
          "Violin",
          "Something else"
        ],
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours can you dedicate?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "instrumentName": {
        "label": "Other Instrument",
        "question": "If you chose 'Something else,' which instrument? (optional)",
        "type": "text",
        "placeholder": "e.g., harmonica",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Dance Party Planner",
    "displayDescription": "Plans a dance party with a DJ-style playlist arc, budget lighting, a night timeline, and games that get shy guests moving.",
    "id": "activities-037",
    "prompt": "Act as a party DJ and event planner for a {duration}-hour dance party for {guests} people with a {theme} theme, with these ages in the mix: {ages}. A dance party lives or dies on energy management — the playlist, lighting, and timeline must build the night like a story with a peak, not a flat four hours of loud music.\n\nBuild the playlist arc in five phases: arrival and warm-up (music people can talk over, {theme}-flavored), the first dance floor fillers (universally known songs that pull hesitant dancers out), the peak hour (highest energy, the songs {guests} people will lose their minds to), the surprise shift (a genre twist or throwback block that re-energizes the room), and the cool-down closer (the last three songs including the final song people remember). Name example songs per phase matched to {theme} and {ages}, with approximate timing for each phase across the {duration} hours.\n\nAdd the physical layer: lighting and decor on a budget that actually transforms a room (the three highest-impact cheap upgrades), the snack and drink station setup (what to serve, where to place it so it does not kill the dance floor, when to refresh), and a timeline for the night (doors, playlist start, games, peak, wind-down).\n\nInclude three dance games designed to get shy guests moving without humiliation (no spotlight solos — think group formation dances, dance-offs in teams, follow-the-leader chains), with when to deploy each. Close with host logistics: volume and neighbor considerations, a photo moment setup, and the 'keep it going or end it well' decision framework for the last 30 minutes. Add the host's energy-management duties: how to read the room (the three signs the floor is dying and the rescue move for each — the anthem drop, the line dance, the tempo shift), the request-handling policy (when requests are welcome versus when the arc wins), and the MC moments (the welcome, the peak-hour hype, the last-song ritual). Include the non-music production: the lighting plan (the thirty dollars of gear that transforms a room), the floor layout (furniture to the walls, drinks away from speakers), and the neighbor plan (the warning text, the cutoff time). End with the teardown playlist and the designated cleanup crew.\n\nA high-quality result means the host DJs with confidence and the dance floor never empties.",
    "description": "A DJ-and-planner dance party kit: a five-phase playlist arc with example songs, budget lighting upgrades, a night timeline, and three shy-guest-friendly dance games.",
    "category": "activities",
    "variables": {
      "theme": {
        "label": "Theme",
        "question": "What is the party theme?",
        "type": "text",
        "placeholder": "e.g., 90s throwback",
        "required": true
      },
      "guests": {
        "label": "Guests",
        "question": "How many guests?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      },
      "duration": {
        "label": "Duration",
        "question": "How many hours will it run?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "ages": {
        "label": "Ages",
        "question": "What are the guests' ages? (optional)",
        "type": "text",
        "placeholder": "e.g., mostly 25-35, a few kids",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Karaoke Night Planner",
    "displayDescription": "Sets up a karaoke night — song list by era, a fair rotation system, house rules, group numbers, and first-timer confidence tips.",
    "id": "activities-038",
    "prompt": "Act as a karaoke host planning a night for {guests} people at {location}, featuring {songEras} hits, with this equipment situation: {equipment}. Great karaoke is engineered: the song list, the rotation order, and the room energy are all design decisions.\n\nCreate the starter song list: 20 songs from {songEras} split into crowd-pleasers everyone knows (the singalong anthems), duets and group numbers (including three whole-room numbers with assigned parts), show-off songs for the confident singers, and secret weapons — the unexpected picks that bring the house down. Mark each song's difficulty and energy level so the host can read the room.\n\nDesign a fair rotation system for {guests} people that guarantees everyone sings without the night stalling: how the sign-up works, how to order the first five singers (start strong but not intimidating), the 'new singer priority' rule, duet handling, and what to do when someone hogs the mic. Write five house rules that keep energy high (cheer for everyone, no booing, the phone-filming consent rule, time limits on slow songs in a row).\n\nAdd {location}-specific guidance: for at-home, the {equipment} setup (TV, speakers, mic options at three price points, latency fixes); for bars or private rooms, booking tips, arrival timing, and drink minimums. Include a first-timer confidence kit: the three easiest starter songs, the buddy-duet strategy, and what to say to someone refusing to sing. End with the finale: the closing group song and how to end the night at the peak, not the fade. Add the hosting mechanics: the rotation system (the signup sheet, the new-singer priority rule, how to keep confident singers from hogging the mic), the energy engineering (the host's opening number to break the ice, group songs placed at the thirty- and ninety-minute marks, the duet ambush), and the {equipment} optimization (mic technique coaching, the echo setting, the lyrics display setup). Include the shy-singer on-ramps (group numbers first, the \"bring a friend\" rule, the low-stakes early slots) and the finale: the whole-room closer plus the awards (best performance, bravest pick, best duet).\n\nA high-quality result means even the shyest guest sings by the end.",
    "description": "A karaoke host's playbook: a 20-song era-matched list with difficulty ratings, a fair rotation system, five energy-keeping house rules, and a first-timer confidence kit.",
    "category": "activities",
    "variables": {
      "guests": {
        "label": "Guests",
        "question": "How many people are coming?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "location": {
        "label": "Location",
        "question": "Where will it be?",
        "type": "select",
        "options": [
          "At home",
          "A karaoke bar",
          "A rented private room"
        ],
        "required": true
      },
      "songEras": {
        "label": "Song Eras",
        "question": "Which eras should the songs come from?",
        "type": "select",
        "options": [
          "80s",
          "90s",
          "2000s",
          "A mix of everything"
        ],
        "required": true
      },
      "equipment": {
        "label": "Equipment",
        "question": "What karaoke equipment do you have or plan to get? (optional)",
        "type": "textarea",
        "placeholder": "e.g., just a TV and phone, no mics yet",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Board Game Night Planner",
    "displayDescription": "Curates a board game night for your player count — specific game picks, a play schedule, snack pairings, and fast rules-teaching tips.",
    "id": "activities-039",
    "prompt": "Act as a board game curator planning a night for {players} players who like {gameStyle} games, running about {duration} hours. The group already owns: {ownedGames}. The number one killer of game night is the 45-minute rules explanation — every pick must be teachable fast or taught smart.\n\nRecommend three specific games (real titles) that all support {players} players and fit {gameStyle}: prioritize games from {ownedGames} where they fit, and only suggest purchases for a genuinely better fit. For each game give: why it works for this exact player count (many games break at odd numbers — address this), real play time, the 5-minute teach script (the three rules that matter, in teaching order, and what to skip until it comes up), and the ideal player temperament it suits.\n\nBuild the play schedule for {duration} hours: a light opener (under 30 minutes, gets people laughing), the main event (the meat of the night), and a closer (short, high-energy, ends on a laugh — never end on a brutal 2-hour strategy game). Include buffer time for teaching and setup between games.\n\nAdd snack pairings that respect the games (no greasy fingers on cards — specific snack picks), drink guidance, table setup for {players} people, and a 'rules disputes' protocol (the 60-second rule: look it up once, then house-rule it and move on). Close with what to play next time based on how this night goes — two follow-up picks for if the group loved it versus wanted something lighter. Add the teach-fast system: for each game, the five-minute teach script (the hook, the goal, the three rules that matter, \"you'll learn the rest as we play\"), what to hold back until the table asks for it, and the practice-round protocol. Include the night's flow management: the opener game while people arrive, the main event, the closer (short and silly) — with the pivot rule (if a game is not clicking by round three, the graceful abort and the backup pick). End with collection-building advice: the next two purchases for this group's taste, and the \"shelf of shame\" rule for unplayed games.\n\nA high-quality result means more playing, less rulebook-reading.",
    "description": "A curator's game night: three count-perfect real game picks with 5-minute teach scripts, a three-act play schedule, game-safe snacks, and a rules-dispute protocol.",
    "category": "activities",
    "variables": {
      "players": {
        "label": "Players",
        "question": "How many players?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "gameStyle": {
        "label": "Game Style",
        "question": "What style of games do you like?",
        "type": "select",
        "options": [
          "Strategy",
          "Party games",
          "Cooperative",
          "Classics"
        ],
        "required": true
      },
      "duration": {
        "label": "Duration",
        "question": "How many hours will you play?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "ownedGames": {
        "label": "Games You Own",
        "question": "Which board games do you already own? (optional)",
        "type": "textarea",
        "placeholder": "e.g., Catan, Wavelength, Just One",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Card Game Tournament",
    "displayDescription": "Organizes a card tournament — bracket or rotation format for your player count, clear rules per game, schedule, and stake-matched prizes.",
    "id": "activities-040",
    "prompt": "Act as a tournament director organizing a card game tournament for {players} players featuring these games: {games}, at a {prizeLevel} stakes level, with this entry arrangement: {buyIn}. A home tournament needs the structure of a real event and the vibe of a party — build both.\n\nDesign the format around {players} players: choose between bracket elimination, round-robin, or rotation stations, and justify the choice (elimination is exciting but benches people — for a social night, favor formats where everyone plays the whole time). Detail exactly how it works: how players are seeded or grouped, how many rounds, how winners advance or points accumulate, and what eliminated or waiting players do (the side game that keeps them in the room).\n\nWrite clear rules and scoring for each game in {games}: the variant being played (name it — there are six kinds of poker), the scoring system, time limits per round to prevent stalling, and how ties break. Build the schedule with round times, breaks, and a realistic end time.\n\nMatch the prizes to {prizeLevel} and {buyIn}: specific prize ideas (trophy concepts for fun stakes, a prize pool split for real stakes), how the pool is divided, and the awards ceremony script. Add the host's toolkit: a printed bracket or scoreboard template description, the chip or score-keeping system, snack and drink timing so food does not interrupt play, and three house rules that prevent the classic arguments (misdeals, slow play, phone use). Add the event-production layer: the check-in and seating chart, the blind or round timer with the visible clock, the dealer rotation, and the break schedule (when, how long, the snack restock moment). Include the drama engineering: the featured table, the live standings board, the comeback mechanic (the second-chance bracket or the bounty on the leader). Cover the money handling for {prizeLevel} stakes (the envelope system, payouts on the spot, the written record) and the dispute protocol (the floor rule, the director's final call). End with the champion's ceremony and the locked-in rematch date.\n\nA high-quality result runs like a casino night and feels like a party.",
    "description": "A tournament director's kit: the right format for your player count, variant-specific rules, a timed schedule, stake-matched prizes, and argument-preventing house rules.",
    "category": "activities",
    "variables": {
      "players": {
        "label": "Players",
        "question": "How many players?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "games": {
        "label": "Games",
        "question": "Which card games will be played?",
        "type": "text",
        "placeholder": "e.g., poker, rummy, hearts",
        "required": true
      },
      "prizeLevel": {
        "label": "Stakes",
        "question": "What should the stakes be?",
        "type": "select",
        "options": [
          "Just for fun",
          "Small fun prizes",
          "Real prizes"
        ],
        "required": true
      },
      "buyIn": {
        "label": "Entry Fee",
        "question": "Is there an entry fee or buy-in per player? (optional)",
        "type": "text",
        "placeholder": "e.g., $10 each into the prize pool, none",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Puzzle Night",
    "displayDescription": "Organizes a puzzle night — the right puzzles for your group size and ages, team structure, scoring, and a competitive-meets-cozy timeline.",
    "id": "activities-041",
    "prompt": "Act as a puzzle night host for {guests} people over {hours} hours, centered on {puzzleType}, with these ages in the group: {ages}. Puzzle night should feel like a cozy competition — think lodge vibes, not exam hall. Design for conversation and collaboration, with just enough rivalry to make it exciting.\n\nRecommend the specific puzzles or formats for {puzzleType} and {guests} people: for jigsaw, the piece count and image type that fits {hours} hours and the group (and whether one big puzzle or team puzzles works better); for crossword, the format (giant group solve versus team race); for escape-style, 2 to 3 specific puzzle types with difficulty curve; for logic puzzles, a curated set from easy to devious. Calibrate everything to {ages} — kids need winnable moments, adults need genuine challenge.\n\nCreate the team structure: how to split {guests} people into teams (mix ages and skill levels deliberately — give the exact mixing method), team names, and a scoring system that rewards both speed and creativity (bonus points for style, teamwork, or the best wrong answer). Write the timeline mixing competitive rounds with relaxed free-puzzle time, so intensity breathes.\n\nAdd the atmosphere: snack and drink ideas that do not damage puzzle pieces, background music guidance, lighting, and the table setup for {guests} puzzlers. Include a host script for kicking off the night, tiebreaker puzzles, and prize ideas. Add the competition-and-comfort design: the team formation (how to split {guests} people fairly — the draft, the age-balanced rule for {ages}), the scoring or progress system (piece-count milestones, timed checkpoints, the bonus mini-puzzle twist), and the prize (the puzzle trophy, first pick of the next puzzle). Include the atmosphere spec: the table setup (lighting, sorting trays, the snack station safely away from the pieces), the background music, and the pacing (when to drop the twist). End with the wind-down: the group photo of the finished work and the puzzle-swap exchange.\n\nA high-quality result means guests leave saying 'we have to do this again.'",
    "description": "A cozy-competition puzzle night: calibrated puzzle picks for your group size and ages, mixed-skill teams, a breathing timeline, and puzzle-safe snacks.",
    "category": "activities",
    "variables": {
      "guests": {
        "label": "Guests",
        "question": "How many people are coming?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "puzzleType": {
        "label": "Puzzle Type",
        "question": "What kind of puzzles should it focus on?",
        "type": "select",
        "options": [
          "Jigsaw",
          "Crossword",
          "Escape-style puzzles",
          "Logic puzzles"
        ],
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours will it run?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "ages": {
        "label": "Ages",
        "question": "What are the guests' ages? (optional)",
        "type": "text",
        "placeholder": "e.g., 9, 14, 38, 41",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Trivia Night Planner",
    "displayDescription": "Builds a full trivia night — round formats, sample questions, answer sheets, scoring, and host techniques for pacing and energy.",
    "id": "activities-042",
    "prompt": "Act as a trivia night producer for {teams} teams across {rounds} rounds covering these categories: {categories}. The audience is {audience}. A great trivia night is a show — the questions are the script, and the host is the performer. Produce both.\n\nDesign each of the {rounds} rounds with a distinct format (not just 'ten questions' every round): include at least one audio or picture round, one speed round, one wager-style round where teams bet points, and a final high-stakes question. For each round specify the format, the question style, point values, and how answers are submitted. Write three sample questions per round as style examples (not the actual questions — show the difficulty and flavor), calibrated to {audience} so the night is challenging but winnable.\n\nBuild the hosting kit: printable answer sheet layout, a scoring system with a live leaderboard method, tiebreaker questions with a sudden-death procedure, and the host's script — the opening monologue, transitions between rounds, how to handle disputes (the challenge flag rule), and energy techniques for the dead stretch in round 3 (the halftime game, the bonus physical challenge, the comedy break).\n\nAdd logistics: ideal team size for {teams} teams, recommended question count per round for pacing, total runtime estimate, AV and mic setup, and prize ideas scaled to the group. Close with the host's golden rules: never read questions monotonously, always repeat answers, and how to make the last-place team feel like winners. Add the showmanship playbook: the host's opening monologue (the energy-setter, the rules delivered with humor), the between-round entertainment (the halftime game, the music, the standings tease), and the dispute protocol (the challenge flag, the phone-a-friend veto, the host's final word). Include the scoring theater: the live leaderboard, the dramatic final-question reveal (collect wagers first, then answers, then the reveal from last place to first). Cover the {audience} calibration (difficulty tuning, the joke questions) and the prizes (winners, best team name, the last-place booby prize).\n\nA high-quality result means teams are already asking when the next one is.",
    "description": "A trivia producer's show kit: distinct round formats with sample questions, a host script with energy techniques, dispute rules, scoring, and tiebreakers.",
    "category": "activities",
    "variables": {
      "teams": {
        "label": "Teams",
        "question": "How many teams will compete?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "categories": {
        "label": "Categories",
        "question": "What categories should the questions cover?",
        "type": "text",
        "placeholder": "e.g., movies, science, sports",
        "required": true
      },
      "rounds": {
        "label": "Rounds",
        "question": "How many rounds?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "audience": {
        "label": "Audience",
        "question": "Who is playing? (optional)",
        "type": "text",
        "placeholder": "e.g., coworkers, mixed-age family",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Scavenger Hunt Creator",
    "displayDescription": "Creates a full scavenger hunt — clever age-calibrated clues, boundaries, bonus challenges, scoring, and safety rules.",
    "id": "activities-043",
    "prompt": "Act as a scavenger hunt designer creating a hunt at {location} for {players} players with a {theme} theme and {clues} clues, for players aged {ages}. The hunt should feel like an adventure, not a worksheet — every clue should make players think, move, or laugh.\n\nWrite all {clues} clues now: each clue leads to a specific spot or object plausible at {location}, written in the voice of {theme} (riddles, rhymes, ciphers, or story narration — vary the clue types so no two consecutive clues work the same way). Calibrate difficulty to {ages}: include the solving logic for each clue (so the host can give hints), order them from easy confidence-builders to genuinely tricky, and mark which clues need a host-planted item or a photo task.\n\nDefine the game structure: team splits for {players} players (with a mixing method), boundaries of the play area with a simple map description, the rules (stay together, no running near roads, what counts as 'found'), the time limit with checkpoint timing, a scoring system (base points per clue plus bonus challenges: photo missions, style points, the secret bonus clue), and the prize for winners.\n\nAdd the safety layer for {location} and {ages}: the buddy rule, the host's communication method, hazards to brief (traffic, water, off-limits areas), and what to do if a team is lost or a player is hurt. Include a host timeline: setup (planting clues), kickoff script, mid-hunt check-ins, and the finish-line celebration. Add the game-master operations: the start-line briefing script (the rules, the boundaries, the safety line, the photo-proof requirement), the staggered start for multiple teams (the interval, different first clues so teams do not bunch up), and the live hint system (the three-hint budget per team, how to ask). Include the scoring (points per clue, the time bonus, style points for the best team photo) and the finish-line ceremony (the order of return, the tiebreaker challenge, the awards). End with the debrief: the best-moments round and the shared photo album.\n\nA high-quality result means the host can print the clues and run the hunt tomorrow.",
    "description": "A print-and-run scavenger hunt: {clues} themed clues with hint logic, team splits, bonus photo missions, scoring, and an age-calibrated safety plan.",
    "category": "activities",
    "variables": {
      "location": {
        "label": "Location",
        "question": "Where will the hunt take place?",
        "type": "text",
        "placeholder": "e.g., the neighborhood park",
        "required": true
      },
      "players": {
        "label": "Players",
        "question": "How many players?",
        "type": "number",
        "placeholder": "e.g., 12",
        "required": true
      },
      "theme": {
        "label": "Theme",
        "question": "What theme should the hunt have?",
        "type": "text",
        "placeholder": "e.g., pirate treasure",
        "required": true
      },
      "clues": {
        "label": "Clues",
        "question": "How many clues should there be?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "ages": {
        "label": "Ages",
        "question": "What are the players' ages? (optional)",
        "type": "text",
        "placeholder": "e.g., 7-10 year olds",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Geocaching Adventure",
    "displayDescription": "Plans a beginner geocaching outing — app setup, a difficulty-graded cache route, etiquette, packing list, and a snack stop.",
    "id": "activities-044",
    "prompt": "Act as a geocaching guide planning a {hours}-hour adventure near {city} for {groupSize} people who are brand new to it, including kids aged {kidsAges}. Geocaching turns an ordinary walk into a treasure hunt — the plan should preserve that magic while removing every beginner frustration.\n\nStart with the setup briefing: which app to install, the free versus premium decision (be honest about what free gets you), how to create accounts, the three settings to configure before leaving home, and how to pick good first caches (difficulty 1-1.5, regular size, recent 'found it' logs, low muggle traffic) — including how to read a cache page like a pro (hint decoding, attribute icons, recent logs as intel).\n\nMap a route with five to eight caches of increasing difficulty: for each cache describe the type of hide beginners should expect, the search strategy to teach at that stop (the 'think like the hider' lesson), and what success looks like. Build the {hours}-hour timeline with travel between caches, a difficulty progression that builds confidence, and a planned snack or picnic stop at the scenic midpoint.\n\nCover geocaching etiquette thoroughly: stealth around non-players, trading rules (trade even or up, the trackable protocol — move them along, do not keep them), logging etiquette (what makes a good online log), and cache maintenance ethics (if you cannot find it, log a DNF honestly). Add the packing list (pen, tweezers, trade trinkets, gloves, water), kid-specific roles from {kidsAges} (navigator, spotter, log signer) so children stay engaged, and phone battery management. Close with 'what next' — how to hide your first cache and join the local community. Add the field-day choreography: the cache route (three to five caches in a logical loop with drive and walk times, ordered easy-to-satisfying), the group roles (the navigator, the spotter, the log signer — rotate so kids aged {kidsAges} each get a real job), and the find protocol (the search pattern, the fifteen-minute rule before taking the hint, the stealth technique near muggles). Include the kid-engagement layer (the trackable-treasure story, the trade-item bag with the fair-trade rule) and the log-and-hide etiquette (sign, rehide exactly as found, log online later). End with the \"next hunt\" hook: the puzzle cache to attempt once everyone is hooked.\n\nA high-quality result means the group finds every cache and catches the bug.",
    "description": "A beginner-proof geocaching day: app setup and cache-reading skills, a confidence-building cache route, trading and trackable etiquette, and kid roles that keep them hooked.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city or area are you exploring?",
        "type": "text",
        "placeholder": "e.g., Boulder",
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours do you have?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "groupSize": {
        "label": "Group Size",
        "question": "How many people are going?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "kidsAges": {
        "label": "Kids' Ages",
        "question": "Any kids coming? List ages (leave blank if none).",
        "type": "text",
        "placeholder": "e.g., 6 and 9",
        "required": false
      }
    }
  },

  {
    "displayTitle": "Volunteering Day Planner",
    "displayDescription": "Plans a meaningful volunteer day matched to your cause — specific opportunity types, sign-up steps, what to bring, and how to make it recurring.",
    "id": "activities-045",
    "prompt": "Act as a volunteer coordinator planning a volunteering day in {city} focused on {cause}, for {hours} hours, for this group: {groupType}. The best volunteer days match the work to the people — a family with small kids should not be sorted into heavy lifting, and a solo adult should not be stuck in a role meant for twenty people.\n\nSuggest three specific types of volunteer opportunities for {cause} in {city} that fit {hours} hours and {groupType}: for each describe the actual work (what you will do hour by hour), who it suits and who it does not, what to expect on arrival, what to bring and wear, any age minimums or physical requirements, how to sign up (the typical process — online form, orientation, walk-in), and what skills are genuinely useful versus nice to have. Be honest about the unglamorous parts of each role so expectations are set.\n\nRecommend one of the three as the best fit with reasoning tied to {groupType}, then build the day plan: the sign-up steps with lead times, a morning-of checklist, and a timeline for the {hours} hours including breaks.\n\nAdd the meaning layer: a pre-volunteering framing conversation (why this cause, what to look for), a reflection exercise for afterward with three discussion questions that go beyond 'how was it,' and a concrete plan for making it recurring — the cadence that works for {groupType}, how to stay connected to the organization, and how to bring friends next time. Close with what to do if the day is emotionally heavy (some {cause} work is) — how to debrief and take care of each other. Add the group-coordination layer for {groupType}: the sign-up message (what to say, the commitment ask, the minimum headcount), the carpool and arrival plan, and the role assignments matched to actual people (who leads, who handles the kids, who brings the camera). Include the impact-maximizing details: the questions to ask the organizer beforehand (what is actually needed versus what merely feels good), the skill-matching (put the {cause}-relevant skills where they count), and the follow-through (the thank-you, the photos, the recurring-date proposal). End with the reflection: the one question for the ride home that makes it stick.\n\nA high-quality result turns one day of helping into the start of a habit.",
    "description": "A volunteer day matched to your people: three specific opportunity types with honest role descriptions, sign-up steps, a reflection exercise, and a plan to make it recurring.",
    "category": "activities",
    "variables": {
      "cause": {
        "label": "Cause",
        "question": "What cause do you want to support?",
        "type": "select",
        "options": [
          "Environment",
          "Hunger relief",
          "Animal shelter",
          "Community aid",
          "Youth mentoring"
        ],
        "required": true
      },
      "city": {
        "label": "City",
        "question": "What city are you in?",
        "type": "text",
        "placeholder": "e.g., Tucson",
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours can you give?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "groupType": {
        "label": "Who's Volunteering",
        "question": "Who is volunteering? (optional)",
        "type": "text",
        "placeholder": "e.g., me and two kids (8 and 11), a group of coworkers",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Community Cleanup Organizer",
    "displayDescription": "Organizes a neighborhood cleanup — supply list with donation sources, role assignments, recruitment message, zone strategy, and celebration plan.",
    "id": "activities-046",
    "prompt": "Act as a community organizer helping me run a cleanup at {location} with {volunteers} volunteers over {hours} hours. I already have these supplies: {supplies}. A cleanup succeeds on logistics, not enthusiasm — the plan must answer every 'what do I do' before anyone asks it.\n\nBuild the supply list accounting for {supplies}: bags, gloves, grabbers, buckets, first aid, water, sunscreen, and signage — with quantities for {volunteers} people, where to get donations (the specific ask: hardware stores, the city, local businesses), and what to buy as backup. Assign roles: team leads (ratio to volunteers), supply runners, a first-aid and safety lead, a photographer, and a check-in coordinator — with a one-line job description for each.\n\nDraft the recruitment outreach: a short message for social media or neighborhood groups and a separate ask for local businesses (donations or promotion), both with the essential details and a tone that gets yeses. Design the zone map strategy: how to divide {location} into zones for {volunteers} people, which zones get the most people and why, the rotation plan, and where the central supply and trash staging points go.\n\nWrite the day-of timeline for {hours} hours (check-in, safety briefing script, work blocks, the halfway regroup, final sweep), the safety briefing itself (traffic, sharp objects, heat, what not to pick up), and the small celebration afterward that makes volunteers come back next time. Close with the follow-up: thank-you messages, before-and-after photos, and how to report results to the city if relevant. Add the volunteer-experience design: the check-in station (sign-in, the safety-briefing script, team assignments by zone), the zone map (divide {location} into named zones with a team lead each, the progress tracking), and the morale system (the weigh-in leaderboard, the weirdest-find contest, the mid-event snack break). Include the disposal logistics (the sorted piles — trash, recycling, hazardous — the pickup arrangement with the city, the before-and-after photos for the report). End with the thank-you: the group photo, the results announcement (pounds collected), and the next-cleanup sign-up.\n\nA high-quality result means {volunteers} people show up and never stand around wondering what to do.",
    "description": "A complete cleanup operations plan: donation-sourced supplies, role assignments, copy-paste recruitment messages, a zone coverage map, and a safety briefing script.",
    "category": "activities",
    "variables": {
      "location": {
        "label": "Location",
        "question": "Where will the cleanup happen?",
        "type": "text",
        "placeholder": "e.g., Mill Avenue",
        "required": true
      },
      "volunteers": {
        "label": "Volunteers",
        "question": "How many volunteers do you expect?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours will it run?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "supplies": {
        "label": "Supplies on Hand",
        "question": "What cleanup supplies do you already have? (optional)",
        "type": "textarea",
        "placeholder": "e.g., 30 trash bags, a first aid kit",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Skill Swap Meetup",
    "displayDescription": "Sets up a skill exchange — timed teaching rounds, a partner-matching system, ground rules, and follow-up so connections continue.",
    "id": "activities-047",
    "prompt": "Act as a skill-swap facilitator setting up a meetup for {participants} people where I teach {mySkill} and want to learn {wantedSkill}, at {venue}. The core design challenge: everyone arrives with something to teach and something to learn, and the format must make both happen without chaos.\n\nDesign the format around timed teaching rounds: the round length that fits {participants} people (short enough to keep energy, long enough to learn something real), how many rounds fit the evening, and the rotation mechanic — exactly how people find their next partner each round. Build the matching system: a pre-event skill inventory (the simple form everyone fills out), how to pair people so every round has a teacher-learner match, and what happens when {wantedSkill} has more learners than teachers (the group-lesson fallback).\n\nWrite the ground rules that make swaps work: the 'teach one thing well' principle (one concrete skill per round, not a lecture), the no-judgment rule for beginners, time-keeping enforcement, and the exchange etiquette (reciprocity expectations, no selling). Build the schedule with breaks and a closing circle where people share what they learned.\n\nAdd the {venue}-specific setup (seating for pairs, demo space, noise management), a materials checklist (what teachers typically need to bring), and the follow-up system so connections continue: the shared contact list, the 'swap again' poll, and how to turn one meetup into a monthly series. Include facilitation tips for the host: the opening script that sets the tone, how to rescue a round where a pairing is not working, and how to close on a high. Add the matching and quality layer: the pre-event skill inventory (the form everyone fills in — \"I can teach / I want to learn\" — and how you pair people before the night), the teaching toolkit (the three-point lesson template every teacher gets: the demo, the try-it, the takeaway), and the quality floor (the minimum-viable-lesson standard, the floater helpers for struggling pairs). Include the {venue} setup (the station layout, the noise management, the materials table) and the closing circle (each person demos one thing they learned — the night's proof). End with the next-meetup pairing.\n\nA high-quality result means strangers leave as each other's teachers.",
    "description": "A facilitator's skill-swap blueprint: timed round format, a pre-event matching system, ground rules that keep it generous, and a follow-up system for a monthly series.",
    "category": "activities",
    "variables": {
      "mySkill": {
        "label": "My Skill",
        "question": "What skill will you teach?",
        "type": "text",
        "placeholder": "e.g., basic photography",
        "required": true
      },
      "wantedSkill": {
        "label": "Wanted Skill",
        "question": "What skill do you want to learn?",
        "type": "text",
        "placeholder": "e.g., sourdough baking",
        "required": true
      },
      "participants": {
        "label": "Participants",
        "question": "How many people will join?",
        "type": "number",
        "placeholder": "e.g., 12",
        "required": true
      },
      "venue": {
        "label": "Venue",
        "question": "Where will the meetup be held? (optional)",
        "type": "text",
        "placeholder": "e.g., community center room",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Language Exchange Meetup",
    "displayDescription": "Structures a language exchange — fair time-split formats, topic cards for three sessions, rotation rules, and a vocabulary game.",
    "id": "activities-048",
    "prompt": "Act as a language exchange designer structuring a meetup for learning {language} at a {level} level with {groupSize} participants. Attendance mix: {mix}. The classic failure is one language dominating and beginners going silent — design the structure so both languages get equal airtime and shy speakers get safe on-ramps.\n\nDesign the conversation formats: the core time-split mechanic (for example, 25 minutes per language with a hard switch ritual), pair versus small-group configurations for {groupSize} people, and how to handle the {mix} mix — if native speakers attend, how to deploy them as anchors without them lecturing; if all learners, how to keep conversation from stalling (the question-card lifeline, the dictionary rule).\n\nWrite topic cards for the first three sessions: each session gets a theme with 8 to 10 conversation prompts calibrated to {level} (concrete and personal for beginners, opinion and story-based for advanced), plus the 10 most useful phrases for that theme in {language} with pronunciations. Suggest partner rotation rules (when to rotate, how to avoid the same pairs, the 'stay if it is flowing' exception).\n\nAdd the closing vocabulary game for each meeting (a 10-minute game that reviews the session's words — describe the mechanics), tips for shy speakers (the preparation ritual before attending, sentence starters, permission to be bad), and the between-meetings system: the shared vocab list, the accountability buddy, and how to measure progress monthly. Add the shy-speaker on-ramps: the warm-up game (the two-minute pair intro with question cards), the structured first round (topic cards with key vocabulary printed on them — nobody faces a blank conversation), and the correction protocol (the gentle recast rule, the notebook moment, when NOT to correct). Include the {mix} handling (the native-speaker briefing: slow down, no showing off, your job is encouragement) and the level-bridging for {level} (the buddy pairing, the simplified track for true beginners). End with the take-home: the phrase of the night, the resource share, and the next-meetup theme vote.\n\nA high-quality result means participants actually speak more {language} each week.",
    "description": "A language exchange that actually works: enforced time-split formats, three sessions of level-calibrated topic cards, rotation rules, and shy-speaker on-ramps.",
    "category": "activities",
    "variables": {
      "language": {
        "label": "Language",
        "question": "Which language do you want to practice?",
        "type": "text",
        "placeholder": "e.g., Spanish",
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
      "groupSize": {
        "label": "Group Size",
        "question": "How many participants?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "mix": {
        "label": "Group Mix",
        "question": "Will native speakers attend, or is everyone learning? (optional)",
        "type": "select",
        "options": [
          "All learners",
          "Some native speakers",
          "Mostly native speakers"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Book Club Starter",
    "displayDescription": "Launches a book club that lasts — five discussion-rich starter picks, a meeting format, spoiler rules, and a fair book-selection system.",
    "id": "activities-049",
    "prompt": "Act as a book club founder launching a club for {members} members reading {genre}, meeting {meetingFrequency}, gathering at {meetingPlace}. Most book clubs die by meeting three — they pick the wrong first book, the discussion fizzles, or logistics kill momentum. Design against all three.\n\nRecommend five starter books in {genre} chosen for discussion potential, not just quality: each pick needs debatable characters, an ambiguous ending or theme, and something members will disagree about. For each book give the pitch, why it sparks discussion (the specific question it raises), page count and reading pace for {meetingFrequency}, and content warnings where relevant. Order them so book one is the irresistible hook.\n\nDesign the meeting format: the ideal length, the arc (social time, structured discussion, book selection, social close), and the discussion question structure — provide 8 to 10 questions for the first book as a template, moving from plot to character to theme to personal connection, plus the facilitator's techniques for drawing out quiet members and redirecting the member who read a different book.\n\nSet the ground rules: spoilers (the page-number rule), attendance expectations, the 'did not finish' policy (come anyway — and how), and how to pick future books fairly (the nomination and voting system that prevents one taste dominating). Add {meetingPlace}-specific logistics and snack and venue rotation ideas that keep hosting fair. Close with the 90-day survival plan: what to do when attendance dips and how to recruit member two through {members}. Add the discussion-facilitation kit: the question framework for each meeting (the opener everyone can answer, the deep-dives, the closer that lands), how to handle the dominator and the silent member (the round-robin rule, the write-first-then-share technique), and the spoiler policy. Include the logistics that kill clubs: the scheduling system (the poll, the reminder cadence), the {meetingPlace} setup, and the honest attendance rule. End with the \"meeting two\" test: what must be true after meeting two for the club to survive — and the pivot plan if it is not.\n\nA high-quality result is a club still meeting a year from now.",
    "description": "A founder's book club kit: five debate-ready starter picks with discussion templates, a meeting arc, fair book voting, and a 90-day survival plan.",
    "category": "activities",
    "variables": {
      "genre": {
        "label": "Genre",
        "question": "What genre will the club read?",
        "type": "select",
        "options": [
          "Fiction",
          "Mystery",
          "Sci-fi and fantasy",
          "Nonfiction",
          "Classics"
        ],
        "required": true
      },
      "members": {
        "label": "Members",
        "question": "How many members?",
        "type": "number",
        "placeholder": "e.g., 7",
        "required": true
      },
      "meetingFrequency": {
        "label": "Frequency",
        "question": "How often will you meet?",
        "type": "select",
        "options": [
          "Weekly",
          "Every two weeks",
          "Monthly"
        ],
        "required": true
      },
      "meetingPlace": {
        "label": "Meeting Place",
        "question": "Where will the club meet? (optional)",
        "type": "text",
        "placeholder": "e.g., rotating homes, a library room",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Running Club Starter",
    "displayDescription": "Starts a running club where nobody gets left behind — pace groups, three starter routes, a safe four-week ramp, and social glue.",
    "id": "activities-050",
    "prompt": "Act as a run club founder starting a club in {city} for {level} runners meeting on {meetingDay}, with this club goal: {clubGoal}. The founding promise of a good run club: nobody gets dropped, nobody gets hurt, everybody comes back.\n\nDesign the pace group system for {level} runners: how many groups, the pace ranges, how to assign people on day one (the honest self-sort method), the group leader role (sweep runners, regroup points), and the rule that no group ever leaves anyone behind. Suggest three starter routes in {city} with distances, terrain, water and bathroom access, lighting for evening runs, and what makes each route good for a group.\n\nWrite the four-week ramp plan that builds safely: weekly distance and intensity progression, the walk-run intervals for true beginners, one fun workout per week (not just easy miles), and rest guidance. Add beginner injury prevention: the five mistakes that injure new runners (too much too soon, wrong shoes, skipping warm-up, ignoring pain, bad surfaces) with the fix for each, and when to see a professional.\n\nBuild the social glue around {clubGoal}: the post-run coffee ritual, the first group race goal with a training timeline, how to welcome newcomers every single week (the buddy system), and the communication channel setup. Include {meetingDay}-specific logistics (parking, meetup spot visibility, weather policies). Add the new-runner onboarding: the first-visit experience (the buddy assignment, the \"no runner left behind\" speech, the post-run coffee ritual that actually retains people), the eight-week beginner bridge plan (walk-run intervals graduating into the slowest group), and the injury-prevention basics (the warm-up routine, the \"too much too soon\" warning signs, when to rest versus push). Include the {clubGoal} programming: how the weekly calendar serves the goal (the long run, the social run, the workout day), and the communication hub (the channel, the route posts, the weather call protocol).\n\nA high-quality result means week-five attendance is higher than week one.",
    "description": "A founder's run club blueprint: a no-drop pace group system, three vetted routes, a four-week safe ramp, injury prevention, and the rituals that build week-five attendance.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city is the club in?",
        "type": "text",
        "placeholder": "e.g., Tempe",
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What level are most runners?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "meetingDay": {
        "label": "Meeting Day",
        "question": "What day will you meet?",
        "type": "select",
        "options": [
          "Saturday",
          "Sunday",
          "A weekday evening"
        ],
        "required": true
      },
      "clubGoal": {
        "label": "Club Goal",
        "question": "What is the club's main goal? (optional)",
        "type": "text",
        "placeholder": "e.g., train for a 10K together, social fitness",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Cycling Route Planner",
    "displayDescription": "Maps a ride matched to your fitness — elevation-aware routing, rest stops, repair kit, road hazards, a bailout option, and a post-ride food spot.",
    "id": "activities-051",
    "prompt": "Act as a ride leader mapping a cycling route starting at {startPoint}, covering about {distance} miles with {scenery} scenery, for a rider at this fitness level: {fitnessLevel}. First, sanity-check the {distance} miles against {fitnessLevel} honestly — if it is ambitious, say so and explain how the bailout option makes it safe to attempt.\n\nMap the route: turn-by-turn style segment breakdown with distances, elevation notes per segment (where the climbs are, how long, how steep), and rest stops placed before the hard parts, not after. Flag traffic and safety concerns honestly: the sketchy intersections, roads with no shoulder, sections to avoid at certain times, and the local rules riders forget (helmet laws, light requirements).\n\nList what to bring: the repair kit essentials (tube, levers, pump or CO2, multi-tool — and the 2-minute flat-fix refresher), nutrition and hydration for {distance} miles (how much water, when to eat, the bonk warning signs), and clothing for the conditions. Add the bailout option: the exact point where a tired rider can cut the ride short, how the shortcut works, and the no-shame framing for using it.\n\nSuggest a post-ride food spot near the finish with why it earns it, and close with the ride-day checklist: bike check (the ABC quick check), what to eat beforehand, and the group-riding etiquette if others join (pace lines, hand signals, regroup points). Add the ride-day execution: the nutrition timing (what to eat the night before and morning of, the on-bike fueling schedule with calories and water per hour for {distance} miles), the mechanical-issue protocol (the flat-fix drill, the chain-drop recovery, when to call for a pickup), and what to carry beyond the flat kit (the layers, the cash, the charged phone). Detail the bailout option (the exact turn, the pickup plan, the no-shame framing that makes it safe to attempt the distance), and the post-ride recovery (the meal timing, the stretch routine, the bike clean).\n\nA high-quality result means finishing the ride strong instead of calling for a pickup at mile 18.",
    "description": "A ride leader's route plan: an honest distance sanity-check, elevation-graded segments, road hazard flags, a repair and fueling kit, and a no-shame bailout point.",
    "category": "activities",
    "variables": {
      "startPoint": {
        "label": "Start Point",
        "question": "Where will the ride start?",
        "type": "text",
        "placeholder": "e.g., the Greenbelt trailhead",
        "required": true
      },
      "distance": {
        "label": "Distance",
        "question": "How many miles do you want to ride?",
        "type": "number",
        "placeholder": "e.g., 25",
        "required": true
      },
      "scenery": {
        "label": "Scenery",
        "question": "What kind of scenery do you want?",
        "type": "select",
        "options": [
          "Urban",
          "Waterfront",
          "Hills",
          "Parks"
        ],
        "required": true
      },
      "fitnessLevel": {
        "label": "Fitness Level",
        "question": "How would you describe the rider's fitness? (optional)",
        "type": "select",
        "options": [
          "New to cycling",
          "Rides occasionally",
          "Rides regularly"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Yoga Flow Session",
    "displayDescription": "Designs a sequenced yoga flow — warm-up to peak to cool-down with hold times, transition cues, modifications, and a guided relaxation script.",
    "id": "activities-052",
    "prompt": "Act as a yoga teacher designing a {minutes}-minute flow at a {level} level with a {focus} focus, for a practitioner with these limitations: {limitations}. Sequence is everything — the flow must warm the right areas before demanding from them, peak intelligently, and land softly.\n\nSequence the full {minutes} minutes: centering and breath awareness, warm-up (joint mobilization and gentle sun salutations), the building phase toward the peak pose or peak sequence for {focus}, the peak itself, the counterpose and cool-down, and savasana. For each pose give hold times (breath counts), the transition cue to the next pose, and the key alignment cue that prevents the common mistake in that pose.\n\nWeave in modifications throughout, not as an afterthought: specific options for tight hips, weak wrists, knee sensitivity, and limited hamstring flexibility — plus how to adapt for {limitations}. Add breathing cues for each phase (when to use ujjayi, when to simply breathe naturally, the exhale-led calming breaths for cool-down), and note where beginners typically hold their breath so the practitioner can watch for it.\n\nFinish with a short guided relaxation script for savasana (written to be read aloud, about 2 minutes) and a closing intention tied to {focus}. Add the practice container: room setup, props needed with household substitutes, and the 'how this flow fits a week' note (what to pair it with, how often to repeat). Weave the {limitations} modifications into every pose — not as a separate list: for each pose give the prop setup, the range-of-motion alternative, and the \"skip it and do this instead\" swap, with the clear pain-versus-sensation guidance (the line between productive stretch and warning signal). Include the breath coaching (when to cue inhales versus exhales, the count rhythm through the flow), the teacher's voice script for approaching the peak pose (the build-up cues, the graceful bailout), and the savasana that lands softly (the guided release, the silence length, the gentle return). End with the home-practice bridge: the fifteen-minute version.\n\nA high-quality result feels like a class, not a pose list.",
    "description": "A teacher-sequenced yoga flow: breath-counted holds, transition cues, built-in modifications for common limitations, phase-matched breathing, and a read-aloud savasana script.",
    "category": "activities",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What level should the flow be?",
        "type": "select",
        "options": [
          "Beginner",
          "Gentle",
          "Power"
        ],
        "required": true
      },
      "minutes": {
        "label": "Minutes",
        "question": "How many minutes?",
        "type": "number",
        "placeholder": "e.g., 45",
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the flow focus on?",
        "type": "select",
        "options": [
          "Flexibility",
          "Strength",
          "Relaxation"
        ],
        "required": true
      },
      "limitations": {
        "label": "Limitations",
        "question": "Any injuries, pain, or physical limitations? (optional)",
        "type": "textarea",
        "placeholder": "e.g., sore lower back, weak wrists",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Home Workout Circuit",
    "displayDescription": "Builds a timed home circuit around your equipment and goal — exercise order, intervals, form cues, warm-up, cool-down, and progression tracking.",
    "id": "activities-053",
    "prompt": "Act as a strength coach building a {minutes}-minute home workout circuit using {equipment}, for the goal of {goal}, for someone at this fitness level: {fitnessLevel}. A home circuit must be brutally efficient — no waiting for machines, no wasted transitions, every minute earning its place.\n\nLay out the exercises in order with the training logic explained (why this sequence: push-pull balance, upper-lower alternation, where the heart rate spikes and where it recovers). For each exercise give: work and rest intervals (or reps and sets), the exact form cues that prevent injury (the two things to get right), the common form mistake and how it feels when you are doing it wrong, and the regression if it is too hard and the progression when it gets easy.\n\nInclude a 5-minute dynamic warm-up matched to the day's movements and a cool-down stretch routine targeting what was worked. Add the progression system: how to track performance across weeks (the simple log format), when to increase difficulty (the 'two clean rounds' rule), and a 4-week progression map showing how the circuit evolves.\n\nCalibrate everything to {fitnessLevel} and {equipment} honestly — a beginner with no equipment gets a different workout than an intermediate with dumbbells, and the plan must reflect that rather than offering one generic circuit. Close with the adherence design: the minimum viable workout for low-motivation days (the 10-minute version that keeps the streak), and the weekly schedule showing where this circuit fits. Add the progression engine: how to make each exercise harder next week (the progression ladder per movement — reps, then tempo, then load or leverage), the four-week program structure (which days, how the circuit evolves), and the tracking sheet (what to record each session). Include the {fitnessLevel} calibration (the regression for every exercise — the day-one version — and the test for when to level up), the warm-up that actually prepares (the five-minute joint prep, the activation set), and the recovery note (soreness versus injury signals, the sleep and protein basics).\n\nA high-quality result is a program, not a list of exercises.",
    "description": "A coach-built home program: a sequenced circuit with form cues and mistake fixes, a 5-minute warm-up, a 4-week progression map, and a 10-minute minimum-viable version.",
    "category": "activities",
    "variables": {
      "equipment": {
        "label": "Equipment",
        "question": "What equipment do you have?",
        "type": "select",
        "options": [
          "No equipment",
          "Dumbbells",
          "Resistance bands",
          "Full home gym"
        ],
        "required": true
      },
      "minutes": {
        "label": "Minutes",
        "question": "How many minutes do you have?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      },
      "goal": {
        "label": "Goal",
        "question": "What is the main goal?",
        "type": "select",
        "options": [
          "Strength",
          "Cardio",
          "Full body"
        ],
        "required": true
      },
      "fitnessLevel": {
        "label": "Fitness Level",
        "question": "How would you describe your current fitness? (optional)",
        "type": "select",
        "options": [
          "Just starting out",
          "Somewhat active",
          "Pretty fit"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Try-A-New-Sport Day",
    "displayDescription": "Plans a low-pressure sport-sampling day — beginner-friendly local options with real intro costs, gear notes, and a two-sport schedule.",
    "id": "activities-054",
    "prompt": "Act as a sports sampler planning a try-a-new-sport day near {city} for {groupSize} people at a {intensity} intensity level, with about this budget per person: {budget}. The goal is discovery without embarrassment — everyone tries, nobody performs.\n\nSuggest four beginner-friendly sports actually available near {city}: for each give what the beginner experience is really like (the first-hour reality, not the marketing), where to try it (the specific type of facility or club to look for), typical intro or drop-in costs with the real math against {budget}, what gear is provided versus rented versus must-buy, and the beginner-friendliness rating with why.\n\nBuild the sample schedule: pick the two sports that pair best in one day (complementary energy demands, nearby locations, logical order — the more technical one first while fresh), with timing, travel between venues, food and rest breaks, and total cost per person. Explain the pairing logic.\n\nAdd the beginner's survival guide: what to wear for each sport, the etiquette rules beginners always break (and how to avoid them), how to ask for help without feeling foolish, the 'everyone was bad once' framing for the group, and how to evaluate afterward which sport deserves a second try (the three questions to ask). Include {intensity}-appropriate pacing so nobody is wrecked by sport two. Add the embarrassment-proofing: for each sport, the \"everyone is terrible at first\" normalization (what the first hour really feels like, the skill that clicks first), the what-to-wear guidance (so nobody shows up wrong), and the buddy pairing (nobody tries anything alone). Include the day's schedule: the order of the four sports (most accessible first, most fun last), the transition times, the lunch break, and the energy management. End with the vote: the ranking ballot and the \"we are doing this one again\" commitment — the day fails if it does not produce a next step.\n\nA high-quality result means the group tries bold things and laughs the whole day.",
    "description": "A discovery day without embarrassment: four vetted beginner sports with honest first-hour reality, intro cost math, a paired two-sport schedule, and beginner etiquette.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city or area are you in?",
        "type": "text",
        "placeholder": "e.g., Mesa",
        "required": true
      },
      "intensity": {
        "label": "Intensity",
        "question": "What intensity level?",
        "type": "select",
        "options": [
          "Low",
          "Medium",
          "High"
        ],
        "required": true
      },
      "groupSize": {
        "label": "Group Size",
        "question": "How many people are going?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "budget": {
        "label": "Budget Per Person",
        "question": "Rough budget per person in dollars? (optional)",
        "type": "number",
        "placeholder": "e.g., 40",
        "required": false
      }
    }
  },

  {
    "displayTitle": "Tennis Session Planner",
    "displayDescription": "Plans a focused tennis session — warm-up, three weakness-targeting drills, a competitive finisher, and a practice focus for the week.",
    "id": "activities-055",
    "prompt": "Act as a tennis coach planning a {minutes}-minute session for {players} players at a {level} level, targeting this weakness: {weakness}. A session without a theme is just hitting — every drill must connect to getting better at something specific.\n\nStructure the {minutes} minutes in four blocks: a dynamic warm-up (the exact movements, in order, with durations — not just 'warm up'), three drills that target common {level}-level weaknesses and {weakness} specifically (for each drill: the setup, the execution, what the coach watches for, the scoring or counting method that keeps it competitive, and how long to run it), and a fun game format to finish that uses the drilled skill under pressure (king of the court, tiebreak games, target challenges — matched to {players} players).\n\nAdd the logistics: what to bring (balls, water, the right shoes, sun protection), court booking tips (surface choice, how far ahead to book, the best times for {level} players), and partner rotation ideas if there are more than two players so nobody waits long.\n\nClose with the practice focus for the week after: the single drill to repeat twice, what improvement looks like, and how to self-assess. Include {level}-appropriate technique cues for the drilled skill (the one adjustment that fixes 80 percent of errors) and a note on managing mixed energy when {players} includes varying commitment levels. Add the {weakness} diagnostic layer: the three checkpoints that reveal the root cause rather than the symptom, the one drill that isolates it, and the feel-cue that fixes it (the image or sensation, not the technical lecture). Include the competitive wrapper: how to turn each drill into a game (the scoring, the pressure element), the between-drill reset (the water break, one teaching point maximum), and the match-play block at the end where the weakness gets tested under real pressure. End with the homework: the ten-minute solo drill for the week and what to watch for.\n\nA high-quality result means walking off the court better at something than when you walked on.",
    "description": "A coach-structured tennis session: a real dynamic warm-up, three drills wired to your weakness with scoring, a pressure-tested finisher, and a one-drill homework assignment.",
    "category": "activities",
    "variables": {
      "level": {
        "label": "Level",
        "question": "What is the group's level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "players": {
        "label": "Players",
        "question": "How many players?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "minutes": {
        "label": "Minutes",
        "question": "How many minutes will you play?",
        "type": "number",
        "placeholder": "e.g., 90",
        "required": true
      },
      "weakness": {
        "label": "Weakness to Target",
        "question": "What weakness should the drills target? (optional)",
        "type": "text",
        "placeholder": "e.g., backhand consistency, second serve",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Basketball Pickup Organizer",
    "displayDescription": "Organizes a pickup run — fair team splits, house rules, a rotation system, warm-up, and conflict-proofing for competitive games.",
    "id": "activities-056",
    "prompt": "Act as a pickup basketball commissioner organizing a {hours}-hour run at {court} for {players} players, with this skill mix: {skillMix}. Pickup dies from three things: unfair teams, no rotation, and arguments. Design the run so none of those happen.\n\nSet up the team splits: the drafting method for {players} players (captains, serpentine, or skill-balanced assignment — choose based on {skillMix} and explain why), how to handle odd numbers, and the rebalancing rule (when and how teams get re-drafted if one dominates). Write the house rules: game length (to 11, win by 2 — calibrate to {hours} hours), foul calls (the honor system protocol), out-of-bounds, and the 'next' system.\n\nDesign the rotation so nobody sits too long: the winner-stays format with a game cap, the queue system for {players} players, and what waiting players do (the sideline shootaround game). Add the warm-up routine (dynamic movements and shooting progression, 10 minutes), and what to bring: water, a first aid basics kit, an extra ball, and a pump.\n\nInclude the culture section: how to keep it competitive without fights (the talk-versus-taunt line, the foul-call etiquette, de-escalation when tempers rise), how to welcome the weakest player so they come back, and the end-of-run ritual (the final game, the cool-down, the group photo or post-game spot). Calibrate physicality expectations to {skillMix}. Add the conflict-prevention system: the foul-calling protocol (the honor system, the \"call your own\" rule, the shoot-for-it resolution), the argument defuser (the commissioner's call, the replay-the-point rule, the cool-down sub), and the playing-time fairness (the rotation clock, the sit-two rule for winners-stay-on). Include the {skillMix} balancing (the handicaps that keep games close — the weaker team's head start, the star-player restrictions), and the post-run hang (the food spot that becomes the tradition, the group-chat photo drop, the season leaderboard).\n\nA high-quality result means the run becomes a weekly institution.",
    "description": "A commissioner's pickup blueprint: fair drafting for your skill mix, house rules, a rotation queue, warm-up, first aid kit, and the culture that prevents fights.",
    "category": "activities",
    "variables": {
      "players": {
        "label": "Players",
        "question": "How many players?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "court": {
        "label": "Court",
        "question": "Where will you play?",
        "type": "text",
        "placeholder": "e.g., the park courts on 5th",
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours will you play?",
        "type": "number",
        "placeholder": "e.g., 2",
        "required": true
      },
      "skillMix": {
        "label": "Skill Mix",
        "question": "How would you describe the skill range? (optional)",
        "type": "select",
        "options": [
          "Everyone is roughly equal",
          "Wide range from beginners to strong players",
          "Mostly beginners"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Rock Climbing Gym First Visit",
    "displayDescription": "Preps a first climbing gym visit — arrival walkthrough, intro lesson options, first climbs to try, etiquette, and what to wear.",
    "id": "activities-057",
    "prompt": "Act as a climbing gym insider prepping a first visit in {city} on {date} for {guests} people, with these concerns in the group: {concerns}. First visits fail when people feel lost, scared, or sore in the wrong way — remove all three.\n\nWalk through arrival: what to expect at the front desk (waivers, the facility tour, shoe and harness rental sizing), how intro lessons and belay classes work (what they cost, how long, whether to book ahead for {date}), and the gym layout (bouldering versus top-rope versus auto-belay areas — where beginners should start and why).\n\nRecommend the first climbs: which bouldering problems or routes to try first (the grade system decoded for {city} gyms), route-reading basics (how to spot the holds for your color, planning three moves ahead), and a progression for the visit (start embarrassingly easy, build to a satisfying challenge). Cover safety and etiquette thoroughly: the bouldering fall zone rule, never walking under climbers, brushing holds, and the top-rope communication calls.\n\nAdd what to wear and bring (the clothing that actually matters, tape for fingers, water, snacks), address {concerns} directly (fear of heights strategy, what to do about old injuries), the post-climb food plan, and stretches plus recovery for next-day soreness (which muscles will hurt and why that is normal). Close with 'if you loved it': the membership versus punch-pass math and the two skills to learn next. Address {concerns} head-on in a dedicated section. For fear of heights: the desensitization path (start on the low traverse, the ten-foot rule, the controlled-falls practice). For strength worries: the technique-first framing (feet over hands, the three beginner moves that matter more than pull-ups). For injury fears: the falling and landing coaching, the auto-belay trust drill. Include the post-visit plan: the soreness forecast (the forearm reality, the rest days), the membership-versus-punch-card math, and the skill path (the three milestones before the lead-climbing class).\n\nA high-quality result turns intimidation into obsession.",
    "description": "An insider's first-visit briefing: the arrival walkthrough, grade system decoded, first-climb progression, safety etiquette, and direct answers to your group's concerns.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city are you in?",
        "type": "text",
        "placeholder": "e.g., Phoenix",
        "required": true
      },
      "date": {
        "label": "Date",
        "question": "What day are you going?",
        "type": "date",
        "required": true
      },
      "guests": {
        "label": "Guests",
        "question": "How many people are going?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "concerns": {
        "label": "Concerns",
        "question": "Any concerns in the group, like fear of heights or injuries? (optional)",
        "type": "textarea",
        "placeholder": "e.g., one person is nervous about heights",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Kayaking Trip Planner",
    "displayDescription": "Plans a kayaking trip — route with water conditions, rental outfitters, safety gear, capsize basics for beginners, and a lunch stop.",
    "id": "activities-058",
    "prompt": "Act as a paddling guide planning a {hours}-hour kayaking trip at {location} for {groupSize} people with {experience} experience. Swimming ability in the group: {swimAbility}. Water demands respect proportional to inexperience — calibrate every safety decision to the {experience} level.\n\nRecommend rental outfitters or launch points at {location} (what to look for in an outfitter, typical rental costs, what is included), then map the route: put-in and take-out points, distance, expected current and wind conditions, and the section-by-section breakdown (where it is calm, where it gets interesting, where to stay alert). Build the {hours}-hour timeline with paddling blocks, rest stops, and a riverside or lakeside lunch stop.\n\nCover safety for {experience} paddlers: the safety gear list (PFD rules — non-negotiable — whistle, bilge, what to wear for water temperature not air temperature), capsize basics taught before launching (the wet exit, how to get back in with help, when to just hold the boat and wait), the buddy system, and the abort criteria (weather changes, fatigue, the turnaround time). Address {swimAbility} directly in the safety plan.\n\nAdd the enjoyment layer: what to look for along the route (wildlife, scenery, the quiet stretches), photography tips from a kayak, and the post-paddle routine (changing, the food stop, what to do about the inevitable soreness). Include leave-no-trace for waterways. Calibrate explicitly to {swimAbility}: the PFD non-negotiables, the capsize drill for weak swimmers (practice in shallow water first, the buddy pairing, the stay-with-the-boat rule), and the route choice that keeps everyone within quick rescue distance. Include the stroke fundamentals (the torso-rotation lesson, the three strokes that matter, the brace), the weather-reading (the wind-against-tide warning, the abort signals everyone must know), and the group management (the lead and sweep boats, the regroup eddies, the headcount ritual). End with the dry-off debrief: the warm drink and the what-we-learned round.\n\nA high-quality result means everyone comes back wanting a longer trip.",
    "description": "A paddling guide's trip plan: a conditions-honest route map, rental guidance, capsize training for beginners, a swim-ability-calibrated safety plan, and a lunch stop.",
    "category": "activities",
    "variables": {
      "location": {
        "label": "Location",
        "question": "Where will you kayak?",
        "type": "text",
        "placeholder": "e.g., Saguaro Lake",
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours on the water?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "groupSize": {
        "label": "Group Size",
        "question": "How many kayakers?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "experience": {
        "label": "Experience",
        "question": "What is the group's experience?",
        "type": "select",
        "options": [
          "Beginner",
          "Some experience",
          "Experienced"
        ],
        "required": true
      },
      "swimAbility": {
        "label": "Swimming Ability",
        "question": "Can everyone in the group swim confidently? (optional)",
        "type": "select",
        "options": [
          "Yes, everyone swims well",
          "Mostly, with one or two weak swimmers",
          "No, some non-swimmers"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Fishing Trip Planner",
    "displayDescription": "Plans a fishing trip — licenses, species-specific spots and timing, a beginner gear checklist, bait basics, and backup activities.",
    "id": "activities-059",
    "prompt": "Act as a fishing guide planning a trip on {date} at {location} for {groupSize} people targeting {target} fish. Group fishing experience: {fishingExperience}. A group trip succeeds when the beginners catch something early and the experienced anglers still have a challenge — design for both.\n\nCover licenses first: the exact license requirements for {location} (resident versus non-resident, day versus annual, where to buy them online or locally, and how far ahead). Then the fishing intelligence for {target} at {location} on {date}: the best spots (shore access points, structure to look for), the best times of day and why, how seasonal patterns affect the bite, and realistic expectations (what a good day looks like for beginners).\n\nBuild the gear checklist for {fishingExperience} anglers: the beginner setup (rod, reel, line weight — specific enough to buy or rent confidently), terminal tackle and bait basics for the target species (live bait versus lures, the two rigs that catch the most fish), and what the experienced anglers should bring differently. Include what to do with a catch (keep, photograph, release — the handling ethics and the cleaning basics if keeping).\n\nAdd the day timeline (arrival before the bite window, the midday lull plan), non-fishing activities for anyone who gets bored (the backup kit: snacks, a swim spot, nature watching), food and shade planning, and the end-of-day ritual. Add the beginner's-first-fish engineering: rig the beginners' rods yourself (the simple rig, the bobber, the bait choice), put them on the highest-probability spot first, and give the five-minute casting lesson (the sidearm motion, the release timing) with the practice drill on grass before water. Include the {fishingExperience} split: the challenge for the veterans (the lure-only stretch, the sight-fishing spot) while beginners soak bait. Cover the catch handling (the grip, the hook removal, the quick photo, the clean release) and the keep-or-release plan with the cleaning station logistics.\n\nA high-quality result means the beginners are hooked — on fishing, not just on the trip.",
    "description": "A guide's fishing day: license specifics, species-and-season bite intelligence, a buy-or-rent gear checklist, catch handling ethics, and boredom-proof backup activities.",
    "category": "activities",
    "variables": {
      "date": {
        "label": "Date",
        "question": "What day are you going?",
        "type": "date",
        "required": true
      },
      "location": {
        "label": "Location",
        "question": "Where will you fish?",
        "type": "text",
        "placeholder": "e.g., Bartlett Lake",
        "required": true
      },
      "groupSize": {
        "label": "Group Size",
        "question": "How many people are going?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "target": {
        "label": "Target",
        "question": "What kind of fishing?",
        "type": "select",
        "options": [
          "Freshwater",
          "Saltwater",
          "Either works"
        ],
        "required": true
      },
      "fishingExperience": {
        "label": "Experience",
        "question": "What is the group's fishing experience? (optional)",
        "type": "select",
        "options": [
          "Total beginners",
          "Some have fished before",
          "Experienced anglers"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Birdwatching Outing",
    "displayDescription": "Plans a birdwatching outing — likely species with ID features and calls, the best trails, optics basics, and a sighting checklist.",
    "id": "activities-060",
    "prompt": "Act as a birding guide planning a {hours}-hour outing at {location} in {season} for a {experience} group. Gear situation: {gear}. The joy of birding is learning to notice — the plan should train eyes and ears, not just list birds.\n\nList the 8 to 12 species most likely to be seen at {location} in {season}: for each give identifying features (size, shape, field marks — the 'what to actually look for'), the call or song described in words plus a mnemonic, where in the habitat to look, and the one confusion species and how to tell them apart. Order the list from easiest to spot to the rewarding challenge birds.\n\nSuggest the best trails or spots within {location}: the route that hits the most habitats in {hours} hours, the ideal start time ({season} mornings have a logic — explain it), and the quiet corners where birds actually are. Cover optics for {experience} birders given {gear}: binocular basics (how to adjust, the scanning technique, what magnification matters), field guide or app recommendations, and whether a scope is worth it.\n\nAdd the fieldcraft: quiet-approach etiquette (how to move, where to stand, the whisper protocol), how to pish responsibly, and habitat manners. Provide a simple checklist format for logging sightings with space for notes, and a group game (the friendly competition that keeps {experience} birders engaged without disturbing birds). Close with what to do after: how to log on eBird and the one skill to practice next outing. Add the skill-building layer for a {experience} group: the \"birding by impression\" lesson (size, shape, and behavior before plumage), the ear-training drill (the five most common songs with mnemonics, the call-and-response practice), and the optics coaching for {gear} (the binocular setup — diopter, eye relief — the steady-hold technique, the scope etiquette). Include the outing flow: the dawn-start rationale, the habitat rotation (why you move every thirty minutes), the sit-and-listen stops, and the list-keeping (the eBird tutorial, the day-list reveal at the end).\n\nA high-quality result means the group leaves hearing birds they never noticed before.",
    "description": "A birding guide's outing: a season-specific species list with calls and confusion species, a habitat-covering route, optics coaching, fieldcraft etiquette, and a sighting checklist.",
    "category": "activities",
    "variables": {
      "location": {
        "label": "Location",
        "question": "Where will you go birdwatching?",
        "type": "text",
        "placeholder": "e.g., the Riparian Preserve",
        "required": true
      },
      "season": {
        "label": "Season",
        "question": "What season is the outing?",
        "type": "select",
        "options": [
          "Spring",
          "Summer",
          "Fall",
          "Winter"
        ],
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "experience": {
        "label": "Experience",
        "question": "What is the group's experience?",
        "type": "select",
        "options": [
          "Beginner",
          "Some experience",
          "Experienced"
        ],
        "required": true
      },
      "gear": {
        "label": "Optics",
        "question": "What birding gear do you already have? (optional)",
        "type": "text",
        "placeholder": "e.g., one pair of binoculars, no field guide",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Gardening Day Planner",
    "displayDescription": "Plans a productive garden day — season-prioritized tasks, plant picks for your space, tool list, a work schedule with breaks, and aftercare.",
    "id": "activities-061",
    "prompt": "Act as a garden coach planning a {hours}-hour gardening day in a {space} during {season}, with this main goal: {gardenGoal}. A garden day needs ruthless prioritization — {season} dictates what matters, and trying to do everything means finishing nothing.\n\nPrioritize the task list for {season} in a {space}: the must-do seasonal tasks (planting, pruning, soil prep, pest checks — whatever {season} demands), ordered by impact, with honest time estimates. Mark what to skip this time (the tasks that feel productive but do not matter now). Suggest specific plants or seeds suited to the {space} and {season} with varieties that actually perform, spacing, and sun requirements.\n\nList the tools and supplies needed: what to have on hand, what to buy (with approximate costs), and the {space}-specific essentials (balcony weight limits, community plot rules, backyard scale). Build the morning-to-afternoon schedule with breaks placed before exhaustion hits, sequencing heavy work early and detail work later.\n\nAdd the aftercare: watering and care notes for everything planted (the first-two-weeks schedule that determines survival), the pest and disease watch list for {season}, and what to observe over the next month. Tie tasks to {gardenGoal} so every hour serves the goal. Close with the 'next session' list — what this day sets up for next time. Add the {gardenGoal}-first task triage: reorder the seasonal list so every task serves the goal directly, and cut anything that does not (the honest \"skip it\" list with the reasoning). Include the shopping list for the day (the exact plants, soil amendments, and tools — with quantities for a {space}), the soil-prep sequence most beginners skip (the test, the amendment, the mulch layer), and the watering setup check (the irrigation audit, the timer setting). End with the aftercare calendar: the specific tasks for weeks two, four, and eight so the day's work survives.\n\nA high-quality result means ending the day tired, dirty, and with a garden measurably better than the morning.",
    "description": "A garden coach's workday: {season}-prioritized tasks with time estimates, variety-specific plant picks, a buy list, an energy-smart schedule, and a two-week aftercare plan.",
    "category": "activities",
    "variables": {
      "space": {
        "label": "Space",
        "question": "What kind of garden space do you have?",
        "type": "select",
        "options": [
          "Balcony",
          "Backyard",
          "Community plot"
        ],
        "required": true
      },
      "season": {
        "label": "Season",
        "question": "What season is it?",
        "type": "select",
        "options": [
          "Spring",
          "Summer",
          "Fall",
          "Winter"
        ],
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours do you have?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "gardenGoal": {
        "label": "Garden Goal",
        "question": "What is the main goal for the garden? (optional)",
        "type": "text",
        "placeholder": "e.g., grow tomatoes and herbs, make it beautiful",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Farmers Market Visit",
    "displayDescription": "Turns a market trip into a tasting tour — what's in season, a stall strategy, five vendor questions, a prioritized list, and three meals from the haul.",
    "id": "activities-062",
    "prompt": "Act as a market insider planning a farmers market visit in {city} with a ${budget} budget and a focus on {dietaryFocus}. I am cooking these meals afterward: {mealPlans}. The difference between a good market trip and a great one is strategy — what is in season, which stalls to hit first, and what questions unlock the good stuff.\n\nStart with the seasonal intelligence: what is at peak right now (and what is just starting or fading), the produce worth buying in quantity, and what to skip (the out-of-season items vendors sell anyway). Design the route strategy: which stalls to hit first (the popular ones that sell out), the loop that avoids backtracking, and the tasting etiquette that vendors appreciate.\n\nProvide five questions to ask vendors that go beyond small talk — questions that reveal what is best this week, how to store it, and the preparation the vendor recommends. Build the shopping list organized by priority (must-buy, worth-it-if-good, skip-if-over-budget) with price expectations so the ${budget} budget holds, calibrated to {dietaryFocus}.\n\nAdd the freshness detective guide: how to spot the freshest produce (the specific signs per category — greens, stone fruit, herbs, eggs), the red flags of resold wholesale produce, and the 'ask when it was picked' test. Close with three meals built from the haul around {mealPlans} and {dietaryFocus}, plus storage tips so nothing wilts before cooking day. Add the vendor-relationship playbook: the questions that unlock the good stuff (\"what came in this morning?\", \"what's best for {mealPlans}?\", \"what do you do with the seconds?\"), the end-of-day discount timing, and the regular-customer moves (the pre-order, the bulk buy). Include the {dietaryFocus} shopping strategy: which stalls serve it best, the label-reading for prepared foods, and the get-home meal-prep plan (wash, store, and the cook order for {mealPlans} so nothing wilts). End with the budget tracker: the running-total method that keeps the trip inside ${budget}.\n\nA high-quality result means coming home with the week's best food and the vendors knowing your name.",
    "description": "A market insider's playbook: peak-season intelligence, a sellout-proof stall route, five vendor questions that unlock the good stuff, freshness detective skills, and haul-to-meal planning.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city are you in?",
        "type": "text",
        "placeholder": "e.g., Scottsdale",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 40",
        "required": true
      },
      "dietaryFocus": {
        "label": "Dietary Focus",
        "question": "What are you shopping for?",
        "type": "text",
        "placeholder": "e.g., fresh vegetables and fruit",
        "required": true
      },
      "mealPlans": {
        "label": "Meal Plans",
        "question": "Any specific meals you want to cook from the haul? (optional)",
        "type": "textarea",
        "placeholder": "e.g., stir-fries and salads this week",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Flea Market Treasure Hunt",
    "displayDescription": "Runs a flea market hunt — ten specific targets with fair prices, bargaining tactics, an efficient route, quality-spotting tips, and scoring.",
    "id": "activities-063",
    "prompt": "Act as a flea market veteran setting up a treasure hunt in {city} with a ${budget} budget and a hunt theme of {theme}. Getting finds home: {transport}. A flea market rewards the prepared — the hunters with a list, price knowledge, and a route find the treasures; everyone else finds clutter.\n\nWrite the target list: ten specific finds within {theme} (not 'something cool' — concrete items like 'a brass table lamp under 18 inches'), each with a fair price range for {city} markets, what 'good condition' looks like for that item, and the maximum to pay before walking away. Order the list from the most-likely finds to the long-shot grails.\n\nTeach the bargaining: the tactics that work (the friendly opener, the bundle discount, the walk-away, the end-of-day deal) and the etiquette that keeps vendors happy (never insult the price, know when not to haggle), calibrated for {city} market culture. Design the route plan: which sections to hit first (the good stuff goes early), how to scan a stall in 60 seconds, and the second-pass strategy for price drops.\n\nAdd the quality-spotting guide for {theme}: how to tell real from fake or repro, the construction details that signal quality, and the flaws that are dealbreakers versus fixable. Build the scoring system for the hunt (points per find, bonus for under-budget, style points), factor in {transport} for large finds (what fits, what needs a truck or delivery), and close with the cleaning and authentication steps for the day's haul. Add the negotiation masterclass: the opening-offer formula (sixty to seventy percent of asking at {city} markets), the walk-away power move, the bundle-discount ask, and the end-of-day timing advantage. Include the authentication basics for {theme} (the marks, the materials, the common reproductions to watch for), the {transport} logistics (the measurements to bring, the tie-downs, the vehicle-loading plan), and the restoration triage (what to clean, what to repair, what to leave alone for value). End with the regret audit: the twenty-four-hour rule for big purchases.\n\nA high-quality result means coming home with finds worth bragging about.",
    "description": "A veteran's treasure hunt: ten concrete targets with walk-away prices, bargaining tactics and etiquette, a 60-second stall scan method, authentication tips, and hunt scoring.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city are you hunting in?",
        "type": "text",
        "placeholder": "e.g., Pasadena",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 100",
        "required": true
      },
      "theme": {
        "label": "Theme",
        "question": "What are you hunting for?",
        "type": "select",
        "options": [
          "Vintage clothes",
          "Furniture",
          "Collectibles",
          "Home decor"
        ],
        "required": true
      },
      "transport": {
        "label": "Transport",
        "question": "How will you get large finds home? (optional)",
        "type": "text",
        "placeholder": "e.g., SUV, will need delivery for furniture",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Thrift Flip Challenge",
    "displayDescription": "Designs a thrift flip challenge — what to hunt with 'good bones' criteria, a step-by-step transformation plan, cost breakdown, and profit math.",
    "id": "activities-064",
    "prompt": "Act as a flip mentor designing a thrift flip challenge: ${budget} total budget, flipping {item}, with a {timeline}-day deadline. After the flip I plan to: {sellIntent}. The flip lives or dies at the sourcing stage — 80 percent of success is buying the right piece.\n\nTeach the hunt: exactly what to look for in {item} at thrift stores (the 'good bones' criteria — solid structure, quality materials, fixable flaws), the flaws that are dealbreakers versus the ones that are easy fixes, how to check for the hidden problems (smells, stains, wobble, missing parts), and the best days and times to hunt. Give three example 'buy this, not that' comparisons specific to {item}.\n\nBuild the transformation plan step by step: prep, repair, the actual flip work, and finishing — with time estimates per phase across the {timeline} days, the materials list with costs itemized inside the ${budget} budget, and the tools needed (buy versus borrow). Add the finishing details that make it look professional rather than DIY (the sanding grits, the paint technique, the hardware swap).\n\nCover documentation: the before-and-after photo method (lighting, angles, staging) that shows the transformation honestly. Add the beginner mistakes section (skipping prep, the wrong paint, over-improving beyond the piece's value), and if {sellIntent} involves selling, the profit math: realistic resale pricing for flipped {item}, where to sell, fees, and whether this flip can actually make money. Add the flip-economics worksheet: the all-in cost math (purchase price, materials, fees, shipping) against the {sellIntent} plan, the minimum sale price that makes the hours worthwhile, and the kill criteria (when to abandon a piece rather than throw good money after bad). Include the transformation plan for {item} (the step-by-step with the material list and costs), the photography and listing guide for {sellIntent} (the photos that sell, the title keywords, the pricing strategy), and the timeline checkpoints for the {timeline}-day deadline (sourced by day X, transformed by day Y, listed by day Z).\n\nA high-quality result means a finished piece you are proud to show off — or sell.",
    "description": "A flip mentor's challenge: 'good bones' sourcing criteria with buy-this-not-that examples, a phased transformation plan inside budget, pro finishing details, and honest profit math.",
    "category": "activities",
    "variables": {
      "budget": {
        "label": "Budget",
        "question": "What is your total budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 50",
        "required": true
      },
      "item": {
        "label": "Item Type",
        "question": "What will you flip?",
        "type": "select",
        "options": [
          "Clothing",
          "Furniture",
          "Home decor"
        ],
        "required": true
      },
      "timeline": {
        "label": "Timeline",
        "question": "How many days do you have?",
        "type": "number",
        "placeholder": "e.g., 14",
        "required": true
      },
      "sellIntent": {
        "label": "End Goal",
        "question": "Do you plan to keep it, gift it, or sell it? (optional)",
        "type": "select",
        "options": [
          "Keep it",
          "Gift it",
          "Sell it"
        ],
        "required": false
      }
    }
  },

  {
    "displayTitle": "Upcycling Project Picker",
    "displayDescription": "Matches your on-hand materials to three upcycling projects — with steps, extra supply costs, pro finishing tips, and difficulty ratings.",
    "id": "activities-065",
    "prompt": "Act as an upcycling designer matching these materials I have: {materials}, to projects for a {skillLevel} skill level with about {hours} hours of work. The finished piece will live here: {endUse}. The difference between upcycling and clutter-craft is design intent — every project must be something you would actually keep or gift.\n\nRecommend three projects using {materials}: for each give the concept (what it becomes, with dimensions and style), why it suits {skillLevel} and fits in {hours} hours, and how it fits {endUse} (scale, style, durability for its setting). Provide step-by-step instructions with time estimates per phase, the extra supplies needed with itemized costs, and the tools required.\n\nAdd the finishing section that separates amateur from polished: surface prep, the paint or stain technique, sealing for durability, and the hardware or details that elevate it. Rate each project's difficulty honestly with what makes it hard, and rank the three by how impressive the result looks relative to effort.\n\nInclude the design judgment: which of the three best uses the materials' character (the wood grain, the patina, the shape) rather than fighting it, the mistakes that make upcycled pieces look cheap (and how to avoid them), and what to do with leftover materials. Add the design-intent filter: for each project, the \"would I actually buy this?\" test, the style references (the aesthetic it should hit for {endUse}), and the finish quality bar (the sanding, the sealing, the hardware choices that separate craft from clutter). Include the {skillLevel} tool guidance (the must-have tools, the workarounds for tools you lack, the safety basics), the {materials} prep (cleaning, deconstructing, the parts inventory), and the {hours}-hour schedule (the build order with drying-time planning). End with the styling: how to place and light the finished piece in {endUse}.\n\nA high-quality result means a finished piece guests ask where you bought.",
    "description": "A designer's upcycling match: three projects built around your materials' character, phased instructions, pro finishing techniques, and honest difficulty ratings.",
    "category": "activities",
    "variables": {
      "materials": {
        "label": "Materials",
        "question": "What materials do you have to work with?",
        "type": "textarea",
        "placeholder": "e.g., old pallets, mason jars, fabric scraps",
        "required": true
      },
      "skillLevel": {
        "label": "Skill Level",
        "question": "What is your skill level?",
        "type": "select",
        "options": [
          "Beginner",
          "Some experience",
          "Pretty handy"
        ],
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours can you spend?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "endUse": {
        "label": "End Use",
        "question": "Where will the finished piece live, or who is it for? (optional)",
        "type": "text",
        "placeholder": "e.g., my living room, a gift for mom",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Knitting Starter Session",
    "displayDescription": "Guides a first knitting session — exact yarn and needle picks, cast-on through finishing, mistake fixes, and care instructions.",
    "id": "activities-066",
    "prompt": "Act as a patient knitting teacher guiding a {hours}-hour beginner session to make a {project}. Supplies on hand: {supplies}. Knitting clicks when the hands learn before the brain overthinks — the session must keep needles moving with early wins.\n\nSpecify the exact supplies accounting for {supplies}: the yarn weight and fiber to buy (and why — the beginner-friendly choice that shows stitches clearly and forgives mistakes), the exact needle size and type, and what not to buy (the pretty yarn that will make a beginner cry). If {supplies} covers it, say what is still missing.\n\nWalk through the session in order: how to hold yarn and needles (the two common grips — pick one and commit), casting on with the method that gives the stretchiest edge, the knit stitch broken into four micro-movements with what each should feel like, working the first rows of the {project} (how many stitches to cast on, the pattern in plain language), and finishing: binding off, weaving in ends, and blocking if needed.\n\nAdd the rescue section: dropped stitches (how to spot and fix them three rows down), uneven tension (why it happens and the rhythm fix), the accidental extra stitches (where they come from), and when to tink back versus when to just keep going. Close with care instructions for the finished {project}, what the session's practice swatch taught, and what to knit next with the difficulty progression. Add the mistake-recovery training: the three beginner errors (the dropped stitch, the accidental yarn-over, the twisted cast-on) with the fix for each — taught BEFORE they happen, with the \"tink\" (knit backwards) drill. Include the rhythm coaching (the hand positions, the tension trick, the twenty-minute practice blocks with hand stretches), the pattern-reading lesson (the abbreviations cheat sheet, how to count rows, the lifeline technique), and the {project} finishing (the bind-off, weaving in ends, the blocking that makes it look professional). End with the next-project ladder.\n\nA high-quality result means finishing the session with something wearable or usable — and the urge to cast on again.",
    "description": "A teacher's first knitting session: exact beginner-proof supply picks, micro-movement stitch instruction, a rescue guide for dropped stitches, and the what-next progression.",
    "category": "activities",
    "variables": {
      "project": {
        "label": "Project",
        "question": "What do you want to knit?",
        "type": "select",
        "options": [
          "Scarf",
          "Beanie",
          "Dishcloth"
        ],
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours for the session?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "supplies": {
        "label": "Supplies on Hand",
        "question": "Do you already have any yarn or needles? (optional)",
        "type": "textarea",
        "placeholder": "e.g., some worsted yarn, no needles yet",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Pottery Class Planner",
    "displayDescription": "Plans a pottery outing — wheel versus hand-building for beginners, what to expect and wear, fee breakdowns, and first-timer centering tips.",
    "id": "activities-067",
    "prompt": "Act as a pottery studio insider planning an outing in {city} on {date} for {guests} people. Pottery experience in the group: {potteryExperience}. The right class choice determines whether the group leaves with pride or frustration — match the format to the people.\n\nCompare the class types honestly for {potteryExperience} beginners: wheel throwing (the romantic choice — thrilling, humbling, most first pieces wobble) versus hand building (coiling, pinching, slab — more control, more keepers). Recommend which suits this group with reasoning, and what each class typically includes: instruction time, clay amount, glazing and firing, and the pickup timeline (the 3-4 week wait nobody warns you about).\n\nExplain what to expect: the studio arrival, the clay preparation, the actual making (step by step for the recommended format), and the glazing decision (choose now or later — the trade-offs). Cover what to wear (the clay reality: it gets everywhere — specific clothing and shoe guidance), what is included in typical class fees versus surprise extras, and how to evaluate a studio (class size, instructor attention, kiln reliability).\n\nAdd first-timer technique tips: centering on the wheel (the body mechanics that actually work), the 'slow down' mantra, what to do when the clay collapses (it will — the recovery move), and how to not get discouraged comparing your piece to the instructor's demo. Close with the pickup plan (when and how finished pieces are collected, what can go wrong in firing), the group photo moment, and what to try in class two. Add the day-of experience design: the arrival briefing (the apron, the clay, the wheel or table assignment), the instructor-leverage tips (the questions to ask, the demo to request, exactly when to ask for hands-on help), and the realistic output forecast for {potteryExperience} (what you will actually make — the honest keeper rate). Include the glaze and firing explainer (the timeline — why pickup takes three to four weeks — the glaze choices, the food-safety note), the {date} booking tactics (the best time slots, the group-discount ask), and the at-home follow-up (the care instructions, the next-class path).\n\nA high-quality result means muddy hands and genuine pride.",
    "description": "A studio insider's pottery outing: an honest wheel-versus-hand-building recommendation, fee breakdowns, centering technique, and the firing-and-pickup timeline.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city are you in?",
        "type": "text",
        "placeholder": "e.g., Gilbert",
        "required": true
      },
      "date": {
        "label": "Date",
        "question": "What day are you going?",
        "type": "date",
        "required": true
      },
      "guests": {
        "label": "Guests",
        "question": "How many people are going?",
        "type": "number",
        "placeholder": "e.g., 2",
        "required": true
      },
      "potteryExperience": {
        "label": "Experience",
        "question": "Any pottery experience in the group? (optional)",
        "type": "select",
        "options": [
          "No experience at all",
          "Tried it once",
          "Some experience"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Improv Class Finder",
    "displayDescription": "Finds the right improv class — format comparisons, what a first class really looks like, stage-fright strategies, and home warm-up games.",
    "id": "activities-068",
    "prompt": "Act as an improv community guide helping me find a class in {city} with {experience} experience, available on {schedule}. My goal: {improvGoal}. Improv schools vary wildly in culture — the right fit matters more than the right curriculum.\n\nExplain the main class formats and which fit {experience} beginners: the 6-8 week level-one course (the standard path), drop-in jams (low commitment, high variance), weekend intensives, and performance-track versus play-focused schools. For each format give the typical cost, time commitment, class size, and the culture it attracts — then recommend the best fit for {improvGoal} and {schedule}.\n\nDescribe what a typical first class actually looks like, minute by minute: the warm-up games, the first scene exercises, how much performing versus watching, and the moments beginners find scary (with reassurance for each). Cover what to wear and bring (the practical stuff — layers, water, no scripts needed), and how to evaluate a school before committing (the free audit class, what to watch for in the room's energy).\n\nAdd the stage-fright section: why improv fear is different from stage fright (it is fear of looking stupid, not of audiences), the three reframes that dissolve it, and what to do when your mind goes blank mid-scene (the specific recovery moves). Provide three at-home warm-up games to try before the first class, with instructions for solo or partner practice. Close with how to find your people after class one — jams, teams, and the community beyond the classroom. Add the first-class survival guide: what actually happens in level one (the warm-ups, the first scene, the \"yes, and\" drill), the vulnerability curve (week-one terror to week-four play — the normalization that keeps people coming), and the classmate dynamics (the support rule, the no-blocking etiquette). Include the {improvGoal} alignment (which schools and teachers serve performance versus play versus confidence), the {schedule} reality check (the attendance policy, the makeup options), and the practice between classes (the daily five-minute drill, the jam attendance habit). End with the showcase decision (to perform or not — the honest pros and cons).\n\nA high-quality result turns 'I could never' into 'when does level two start.'",
    "description": "An improv insider's guide: format comparisons matched to your goal, a minute-by-minute first-class walkthrough, blank-mind recovery moves, and pre-class warm-up games.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city are you in?",
        "type": "text",
        "placeholder": "e.g., Los Angeles",
        "required": true
      },
      "experience": {
        "label": "Experience",
        "question": "What is your experience level?",
        "type": "select",
        "options": [
          "None",
          "Some",
          "Experienced"
        ],
        "required": true
      },
      "schedule": {
        "label": "Schedule",
        "question": "When are you available?",
        "type": "select",
        "options": [
          "Weeknights",
          "Weekends",
          "Either works"
        ],
        "required": true
      },
      "improvGoal": {
        "label": "Your Goal",
        "question": "What do you want from improv? (optional)",
        "type": "text",
        "placeholder": "e.g., have fun and meet people, perform someday",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Open Mic Night Planner",
    "displayDescription": "Plans an open mic night for performers and audiences — set prep and stage tips for {performanceType}, plus the best venues for watching.",
    "id": "activities-069",
    "prompt": "Act as an open mic veteran planning a night in {city} on {date} for {performanceType}. My role: {role}. Cover both angles thoroughly — the performer prep and the audience guide — since the best nights often convert watchers into performers.\n\nFor the performer angle: help pick and prepare the set — how many minutes to prepare for {performanceType} (and the golden rule of preparing less than the slot), set structure (opener, middle, closer), how sign-ups actually work (arrive early, the list politics, what 'bringer' means), stage craft (mic technique, handling silence, the first 30 seconds that decide everything), and the recovery plan if it goes badly (it might — the reframe that keeps you coming back).\n\nFor the audience angle: the best venue types in {city} for quality {performanceType} acts (what distinguishes a good room), arrival timing for good seats, the etiquette that matters (when to clap, the heckling line, phone policies), and how to spot the night's hidden gem versus the regulars.\n\nAdd the practical layer: typical cover charges and drink minimums, what to wear, who to bring (the supportive friend protocol), and the post-show plan. Address {role} directly in the recommendations. Add the room-reading guide for {role}: the venue types in {city} (the supportive bar, the serious listening room, the chaotic late-night — and which suits a first-timer), the regulars' etiquette (the light signal, the heckler handling, the \"don't plug, just play\" rule), and the networking (the host relationship, the other performers, the follow-up). For performers: the post-set review (record it, name the one thing to fix) and the booking path from open mic to feature slot. For audience: the front-row versus back-bar choice, the tipping norm, and how to become a regular.\n\nA high-quality result means walking in knowing exactly how the night works — whether holding a guitar or a drink.",
    "description": "A veteran's open mic playbook: set-building and sign-up politics for performers, venue and etiquette guidance for audiences, and the recovery plan for a rough set.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city are you in?",
        "type": "text",
        "placeholder": "e.g., Austin",
        "required": true
      },
      "date": {
        "label": "Date",
        "question": "What night are you going?",
        "type": "date",
        "required": true
      },
      "performanceType": {
        "label": "Performance Type",
        "question": "What kind of open mic?",
        "type": "select",
        "options": [
          "Music",
          "Comedy",
          "Poetry"
        ],
        "required": true
      },
      "role": {
        "label": "Your Role",
        "question": "Are you performing, watching, or undecided? (optional)",
        "type": "select",
        "options": [
          "Performing",
          "Watching",
          "Undecided"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Poetry Slam Night",
    "displayDescription": "Hosts a poetry slam — rules and scoring, warm-up writing prompts, judge scorecards, running order, and first-timer performance tips.",
    "id": "activities-070",
    "prompt": "Act as a slam host organizing a poetry slam night for {groupSize} people at {location} around the theme {theme}. Poetry experience in the room: {poetryExperience}. A house slam should feel electric but safe — competitive enough to thrill, supportive enough that first-timers volunteer.\n\nWrite the rules: time limits (the classic 3-minute rule with the grace period and penalty), the no-props no-costumes standard (and whether to relax it for a house slam), original-work expectations, and how the {theme} theme factors into scoring (or does not). Design the scoring: judge selection (5 judges, mixing poets and audience), the 0-10 scale with what each range means, dropping high and low, and the scorecard layout.\n\nProvide three warm-up writing prompts tied to {theme}, calibrated to {poetryExperience} — prompts that produce performable drafts in 10 minutes, with the specific constraint that makes each one stage-ready. Create the running order strategy (sacrificial first poet, where to place the nervous first-timer, the anchor closer), with breaks placed to sustain energy across {groupSize} performers.\n\nAdd first-timer performance tips: memorization versus page (the honest trade-offs), mic technique, pacing and breath, what to do with shaky hands, and the mindset reframe. Include {location}-specific hosting notes (at home: the stage setup; coffee shop or bar: permissions and noise), how to record the best pieces (audio setup and consent), and the awards — meaningful for winners, kind for everyone. Add the performer-coaching layer for {poetryExperience}: the piece-selection guide (the three-minute arc — the hook, the turn, the landing), the memorization-versus-page decision, and the performance coaching (the breath, the pace, the eye contact, the mic technique). Include the host's energy script (the welcome that sets the safe-but-electric tone, the sacrificial poet to calibrate judges, the score call-and-response), the {theme} curation (how the theme shapes the night without constraining it), and the audience-judge briefing (the scoring guidance, the bias watch). End with the encore and the next-slam date.\n\nA high-quality result means the quietest person in the room performs.",
    "description": "A slam host's complete kit: house rules, judge scorecards, {theme} writing prompts that produce stage-ready drafts, running-order strategy, and first-timer courage.",
    "category": "activities",
    "variables": {
      "groupSize": {
        "label": "Group Size",
        "question": "How many people are coming?",
        "type": "number",
        "placeholder": "e.g., 12",
        "required": true
      },
      "location": {
        "label": "Location",
        "question": "Where will it be held?",
        "type": "select",
        "options": [
          "At home",
          "A coffee shop",
          "A bar"
        ],
        "required": true
      },
      "theme": {
        "label": "Theme",
        "question": "What theme should the slam have?",
        "type": "text",
        "placeholder": "e.g., home",
        "required": true
      },
      "poetryExperience": {
        "label": "Experience Mix",
        "question": "What is the poetry experience in the room? (optional)",
        "type": "select",
        "options": [
          "Mostly first-timers",
          "A mix",
          "Mostly experienced poets"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Concert Night Planner",
    "displayDescription": "Plans a full concert night — ticket strategy, pre-show dinner timing, venue logistics, and the touches that make it more than just a show.",
    "id": "activities-071",
    "prompt": "Act as a concert night architect for {genre} music in {city} on {date}, with a ${budget} total budget, going with {companions}. A concert night is won in the planning — the show is two hours, but the night is six.\n\nBuild the ticket strategy: where to buy (primary versus resale, the fee traps), how to pick seats for {genre} (when floor beats seats, the sound-versus-view trade-offs by venue type), price tracking tactics, and the buy-now-versus-wait decision. Work the full ${budget} budget: tickets, fees, dinner, drinks, parking or transit, merch — the line-item math.\n\nPlan the pre-show: dinner with a reservation timed to the doors and opener schedule (the buffer that absorbs delays), what to wear for {genre} crowds and venue conditions, and what to bring (the bag policy reality — what gets confiscated, the clear-bag rules). Cover parking or transit strategy (the exit plan matters as much as arrival), and the set-time intelligence (when the headliner actually starts for {genre} shows).\n\nAdd the experience layer: the pre-show ritual that builds anticipation, where to stand or sit for the best experience at different moments, the encore strategy (stay or beat the crowd — the honest trade-off), and the post-show wind-down spot. Include tips for making the night special beyond the show for {companions} — the photo, the setlist hunt, the merch decision framework. Add the day-of playbook: the arrival timing (doors versus set time, the merch-first move, the bathroom-before-the-opener rule), the {genre} crowd norms (the pit etiquette, the phone policy, the encore reality), and the exit strategy (the beat-the-crowd timing, the rideshare surge dodge). Include the {companions} coordination (the meeting point, the ticket transfer, the group chat for the night), the running budget total against ${budget} (the merch decision rule), and the memory capture (the one-photo rule, the setlist save). End with the post-show wind-down plan.\n\nA high-quality result means the night feels like an event, not an errand with loud music.",
    "description": "A concert night architect's plan: fee-dodging ticket strategy, a line-item budget, dinner timed to doors, venue logistics, and the rituals that make it an event.",
    "category": "activities",
    "variables": {
      "genre": {
        "label": "Genre",
        "question": "What genre of music?",
        "type": "text",
        "placeholder": "e.g., indie rock",
        "required": true
      },
      "city": {
        "label": "City",
        "question": "What city is the concert in?",
        "type": "text",
        "placeholder": "e.g., Phoenix",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is the total budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 150",
        "required": true
      },
      "date": {
        "label": "Date",
        "question": "What night is the concert?",
        "type": "date",
        "required": true
      },
      "companions": {
        "label": "Who's Going",
        "question": "Who are you going with? (optional)",
        "type": "text",
        "placeholder": "e.g., my partner, three friends",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Theater Night Planner",
    "displayDescription": "Plans a theater night — best-value seats, pre-show dinner timing, dress guidance, show background, and post-show discussion questions.",
    "id": "activities-072",
    "prompt": "Act as a theater night curator for {show} in {city} with {guests} people and a ${budget} budget. The occasion: {occasion}. Theater rewards preparation — knowing the story's shape beforehand transforms watching from following plot to savoring craft.\n\nBuild the seat strategy for best value: the seating zones decoded (where the sightlines and acoustics are actually best versus where they charge the most), the price tiers, when to buy (rush, lottery, and discount realities for {show}), and the obstructed-view gamble. Work the ${budget} budget across tickets, dinner, drinks, and transport.\n\nPlan the pre-show dinner: restaurant type and reservation timed to curtain (the 90-minute rule with buffer), what to wear (the modern dress code reality — what is expected versus what is comfortable), and arrival timing (when to actually be in seats). Provide the background briefing on {show}: the story premise without spoilers, what to listen and watch for (the motifs, the staging choices, the performance to notice), and the one piece of context that deepens everything.\n\nAdd post-show discussion questions that make the night memorable — questions about choices, not just opinions ('what did the director want us to feel in act two?' beats 'did you like it?'). Tailor touches to {occasion} (the anniversary upgrade, the birthday surprise at intermission). Add the pre-show preparation: the story primer (the plot's shape, the themes to watch for, the \"listen for this moment\" guidance — spoiler-free), the program reading (the director's note, the cast to watch), and the {occasion} framing (the dinner conversation starter, the toast). Include the intermission strategy (the bar-line dodge, the discussion prompts, the restroom timing), the etiquette refresher (the phone, the cough drops, the applause moments), and the post-show debrief (the three questions that turn watching into savoring). End with the next-show selection guide.\n\nA high-quality result means the group talks about the show for days.",
    "description": "A theater curator's evening: value-decoded seating, discount realities, a spoiler-free briefing on what to watch for, and discussion questions about craft, not just opinion.",
    "category": "activities",
    "variables": {
      "show": {
        "label": "Show",
        "question": "What show are you seeing?",
        "type": "text",
        "placeholder": "e.g., Hamilton",
        "required": true
      },
      "city": {
        "label": "City",
        "question": "What city is the theater in?",
        "type": "text",
        "placeholder": "e.g., New York",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is the total budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 200",
        "required": true
      },
      "guests": {
        "label": "Guests",
        "question": "How many people are going?",
        "type": "number",
        "placeholder": "e.g., 2",
        "required": true
      },
      "occasion": {
        "label": "Occasion",
        "question": "Is this for a special occasion? (optional)",
        "type": "text",
        "placeholder": "e.g., anniversary, birthday",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Comedy Show Night",
    "displayDescription": "Plans a comedy night — venue types decoded, arrival timing, pre-show plans, etiquette, and a late-night finish.",
    "id": "activities-073",
    "prompt": "Act as a comedy night guide for {city} on {date} for {groupSize} people. Comedy taste in the group: {comedyTaste}. Comedy is the most venue-sensitive night out — the room makes or breaks the show, so choose it deliberately.\n\nDecode the venue types: the classic comedy club (the two-drink minimum reality, seating, the opener-feature-headliner structure), improv theaters (what long-form versus short-form feels like), indie rooms and bar shows (cheap, raw, hit-or-miss — how to pick a good one), and big theater tours. Recommend the best fit for {comedyTaste} and {groupSize} people, with what each night typically costs all-in.\n\nPlan the evening: arrival timing for good seats (the front-row trade-off — explain it honestly), the pre-show dinner or drinks plan with timing, and the show-night timeline. Cover etiquette thoroughly: the heckling rule (never — and what to do if someone near you does), phone policies, when laughter is expected versus when silence is respectful, and how comics handle a tough crowd (so the group reads the room correctly).\n\nCalibrate to {comedyTaste} — what to expect from clean versus edgy rooms, content warnings worth knowing, and who in the group might be uncomfortable where. Finish with the late-night dessert or drinks spot for the post-show debrief (the 'best bit' conversation is half the fun). Add the night-of playbook: the arrival timing (the early-show versus late-show trade-off, the seating strategy — the front is the splash zone, the middle is the sweet spot), the two-drink-minimum math (what it actually costs, the non-alcoholic options), and the audience rules (the one line: do not heckle). Include the {comedyTaste} matching (which styles and formats to seek or avoid, how to read a lineup poster), the show's rhythm (when to arrive, when the best material lands), and the post-show (the meet-and-greet etiquette, the merch table). End with the \"next show\" picker guide.\n\nA high-quality result means laughing until it hurts with zero awkward surprises.",
    "description": "A comedy insider's night: venue types decoded for your taste, the two-drink-minimum reality, arrival and seating strategy, etiquette, and a post-show debrief spot.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city are you in?",
        "type": "text",
        "placeholder": "e.g., Chicago",
        "required": true
      },
      "date": {
        "label": "Date",
        "question": "What night are you going?",
        "type": "date",
        "required": true
      },
      "groupSize": {
        "label": "Group Size",
        "question": "How many people are going?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "comedyTaste": {
        "label": "Comedy Taste",
        "question": "What kind of comedy does the group like? (optional)",
        "type": "text",
        "placeholder": "e.g., clean improv, edgy stand-up",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Sports Game Outing",
    "displayDescription": "Organizes a game day — ticket value strategy, tailgate or pre-game plan, stadium logistics, newcomer fan etiquette, and a post-game spot.",
    "id": "activities-074",
    "prompt": "Act as a game day coordinator for a {sport} game in {city} for {groupSize} people with a ${budget} total budget. Fan level in the group: {fanLevel}. A great game day is a full-day experience — the game is the centerpiece, but the tailgate, the stadium rituals, and the crew make the memory.\n\nBuild the ticket strategy: the seating sections decoded for {sport} (where the atmosphere is versus where the view is, the value sweet spots, what to avoid), when to buy (price movement patterns), the resale market realities, and the fee math. Work the ${budget} budget: tickets, fees, food and drinks inside (the stadium markup reality), parking or transit, and merch.\n\nPlan the pre-game: the tailgate setup (what to bring, the menu that works from a cooler, games for the lot, timing to enter the stadium) or the bar alternative near the stadium, calibrated to {fanLevel}. Cover stadium logistics: clear bag rules and what actually gets confiscated, entry timing (when lines peak), the best gates, and where everything is inside.\n\nAdd the fan experience layer for {fanLevel}: the chants and traditions to know, when to stand and cheer, the etiquette newcomers violate (leaving early, blocking views, rival-fan conduct), and how to handle a blowout loss gracefully. Finish with the post-game plan: the celebration spot for a win, the consolation spot for a loss, and the exit strategy that beats the traffic. Add the tailgate-or-pregame plan: the setup (the arrival time, the spot strategy, the grill-or-no-grill decision), the menu (the make-ahead food, the cooler math for {groupSize} people), and the lot games (cornhole, the prop bets, the playlist). Include the stadium rituals for {sport} (the anthems, the chants, the inning-break traditions — the {fanLevel} briefing so newcomers feel like insiders), the in-stadium economics (the food prices, the one splurge actually worth it), and the exit plan (the traffic dodge, the post-game spot). End with the tradition starter: the one ritual this crew repeats every game.\n\nA high-quality result means even the non-fans in the group have a great day.",
    "description": "A game day coordinator's playbook: value-decoded seating, fee-honest ticket math, a tailgate menu and timeline, stadium logistics, and traditions that include the non-fans.",
    "category": "activities",
    "variables": {
      "sport": {
        "label": "Sport",
        "question": "Which sport?",
        "type": "select",
        "options": [
          "Baseball",
          "Basketball",
          "Football",
          "Soccer",
          "Hockey"
        ],
        "required": true
      },
      "city": {
        "label": "City",
        "question": "What city is the game in?",
        "type": "text",
        "placeholder": "e.g., Kansas City",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is the total budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 250",
        "required": true
      },
      "groupSize": {
        "label": "Group Size",
        "question": "How many people are going?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "fanLevel": {
        "label": "Fan Level",
        "question": "How would you describe the group's fandom? (optional)",
        "type": "select",
        "options": [
          "Die-hard fans",
          "Casual fans",
          "Mostly there for the experience"
        ],
        "required": false
      }
    }
  },

  {
    "displayTitle": "Arcade Night",
    "displayDescription": "Plans an arcade night — the right arcade type for your group, must-play games, three friendly competitions, and max playtime per dollar.",
    "id": "activities-075",
    "prompt": "Act as an arcade night strategist for {city}, {groupSize} people, with a ${budget} total budget. Ages in the group: {ages}. Not all arcades are equal — the venue type determines whether the night is nostalgic, competitive, or a money pit.\n\nRecommend the arcade types that fit {groupSize} people and {ages}: the classic coin-op arcade, the barcade (adults-only reality check), the family entertainment center, the Japanese-style arcade with rhythm and prize games, and the retro free-play bar. For each type give the vibe, typical pricing model, and who it suits — then recommend the best fit with reasoning.\n\nSuggest the must-play games across eras: the classics everyone should try once, the modern standouts, and the multiplayer games that fit {groupSize} people (the 4-player cabinets, the versus fighters, the co-op shooters). Create three friendly competitions with real stakes: the tournament format for each (bracket, high-score chase, team relay), the rules, and how to keep it fun for the worst player in the group.\n\nBuild the budget strategy for ${budget}: card versus coin economics, which games eat money fastest (and the skill-based alternatives), the 'set a per-person play budget' system, and prize counter math (when the tickets are worth it and when they are a trap). Add the food and drinks plan with timing, and calibrate game picks to {ages} (kid-height cabinets, content appropriateness). Add the budget-warfare tactics for ${budget}: the pricing models decoded (coin-op versus card versus free-play — the real cost per hour of each), the high-value games (the quarter-eaters versus the long-plays), and the prize-counter honesty (the expected-value math, the \"play for fun, not the prize\" rule). Include the {ages} game plan (the classics for the adults, the ticket-spitters for the kids, the rhythm games for the teens), the competition formats (the tournament bracket, the high-score chase, the co-op missions), and the food break timing. End with the champion's photo and the rematch call.\n\nA high-quality result means maximum play, minimum wallet damage, and a champion crowned by night's end.",
    "description": "An arcade strategist's night: venue types matched to your group, must-play games by era, three structured competitions, and the economics of maximum play per dollar.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city are you in?",
        "type": "text",
        "placeholder": "e.g., Denver",
        "required": true
      },
      "groupSize": {
        "label": "Group Size",
        "question": "How many people are going?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is the total budget in dollars?",
        "type": "number",
        "placeholder": "e.g., 80",
        "required": true
      },
      "ages": {
        "label": "Ages",
        "question": "What are the ages in the group? (optional)",
        "type": "text",
        "placeholder": "e.g., 10, 14, 35, 38",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Bowling Night",
    "displayDescription": "Organizes a bowling night — lane strategy, side games, prize ideas, beginner coaching, and a keep-it-fun vibe for all skill levels.",
    "id": "activities-076",
    "prompt": "Act as a bowling night host for {groupSize} people on {date} with a {prizeLevel} prize setup. Bowling skill in the group: {skillMix}. Bowling works as a group night because the skill gap is funny rather than frustrating — lean into that with formats where bad bowling is entertainment.\n\nPlan the lane logistics: how many games to book for {groupSize} people (the math of pace — games per hour per lane), lane strategy (one lane versus two, when to split), shoe rental tips, and ball selection guidance (the weight rule of thumb, finding the right fit). Create the fun side games: the lowest-score challenge (with rules that make gutter balls strategic), strike and spare bets, the team baker format where players alternate frames, and the trick-shot finale — each with quick rules and how scoring works.\n\nMatch prizes to {prizeLevel}: specific prize ideas from silly trophies to real stakes, the awards ceremony (most improved, best celebration, the coveted gutter crown), and how to make last place feel like a win. Add beginner coaching: the four-step approach simplified, the spare-shooting secret, and the one adjustment that fixes most gutter balls — plus how experienced players can mentor without lecturing.\n\nInclude the food and drinks plan with timing (when to order so it does not interrupt the games), and calibrate the competitive formats to {skillMix} so beginners are never humiliated. Close with the group photo tradition and the rematch challenge. Add the format engineering for {skillMix}: the handicap system (the pins-per-game adjustment that keeps it genuinely close), the fun formats (the low-score-wins round, the trick-shot frame, the split-team scramble combining scores across lanes), and the {prizeLevel} prize structure (the categories — high score, most improved, best gutter ball — so everyone can win something). Include the pace management (the between-frames entertainment, the food-order timing, the cosmic-bowling upgrade decision) and the shoe-and-ball comfort tips. End with the issued rematch challenge.\n\nA high-quality result means everyone — especially the worst bowler — wants to come back.",
    "description": "A bowling host's playbook: lane math for your group size, side games where bad bowling is entertainment, skill-calibrated prizes, and 60-second beginner coaching.",
    "category": "activities",
    "variables": {
      "date": {
        "label": "Date",
        "question": "What night are you going?",
        "type": "date",
        "required": true
      },
      "groupSize": {
        "label": "Group Size",
        "question": "How many people are going?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "prizeLevel": {
        "label": "Prize Setup",
        "question": "What kind of prizes should there be?",
        "type": "select",
        "options": [
          "No prizes, just for fun",
          "Small fun prizes",
          "Real prizes"
        ],
        "required": true
      },
      "skillMix": {
        "label": "Skill Mix",
        "question": "What is the bowling skill range? (optional)",
        "type": "select",
        "options": [
          "Mostly beginners",
          "A wide mix",
          "Mostly experienced"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Mini Golf Outing",
    "displayDescription": "Plans a mini golf outing — how to pick a great course, trick-shot challenges, a team format, prizes, and pace etiquette.",
    "id": "activities-077",
    "prompt": "Act as a mini golf outing planner for {city} on {date} for {groupSize} people. Putting skill in the group: {skillMix}. Mini golf is secretly the perfect group activity — low skill floor, high comedy ceiling, built-in conversation between holes. Plan it like the main event, not a filler.\n\nGuide the course pick: what makes a great mini golf course (hole variety, maintenance, the water features versus gimmicks debate, shade for {date} weather), the red flags of a bad course, and how to choose between the themed extravaganza and the classic layout for {groupSize} people. Include booking and arrival timing (when courses are packed, the twilight discount trick).\n\nCreate the side challenges: trick-shot holes (the bank shot, the loop, the jump — with which holes suit each), a team format for {groupSize} people (scramble versus alternate shot, how to balance {skillMix}), the mulligan economy (how many, when they can be bought with dares), and the prize for the winner plus the consolation awards (best meltdown, most creative cheating).\n\nAdd pace-of-play etiquette (the group-ahead protocol, when to pick up the ball), the post-game ice cream or dinner spot, and photo challenge ideas per hole. Calibrate competition to {skillMix} so beginners laugh with the group, not at themselves. Add the competition design for {skillMix}: the handicap strokes (the extra putts for beginners, the one-club challenge for the ringers), the side bets and prizes (the hole-in-one jackpot, the worst-hole booby prize), and the team formats (the scramble, the alternate-shot pairs). Include the course strategy (reading the breaks, the bank-shot holes, the water-hazard go-or-lay-up decision), the courtesy code (the group behind you, the six-stroke-max rule), and the nineteenth-hole finish (the ice cream or drink stop, the scorecard ceremony). End with the scheduled rematch.\n\nAdd the course-review ritual: the scorecard awards (the comeback player, the trick shot of the day, the most creative line), the group photo at the signature hole, and the season leaderboard if this becomes a tradition — because the nineteenth hole is where mini golf legends are made.\n\nA high-quality result means the scorecard becomes a souvenir.",
    "description": "A mini golf main-event plan: course selection criteria, trick-shot challenges, a team format with a mulligan economy, pace etiquette, and a scorecard worth keeping.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city are you in?",
        "type": "text",
        "placeholder": "e.g., Orlando",
        "required": true
      },
      "date": {
        "label": "Date",
        "question": "What day are you going?",
        "type": "date",
        "required": true
      },
      "groupSize": {
        "label": "Group Size",
        "question": "How many people are going?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "skillMix": {
        "label": "Skill Mix",
        "question": "What is the putting skill range? (optional)",
        "type": "select",
        "options": [
          "Mostly beginners",
          "A wide mix",
          "Secretly competitive"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Escape Room Planner",
    "displayDescription": "Plans an escape room outing — theme picks for your group, booking and pricing realities, team strategy with role assignments, and a debrief dinner.",
    "id": "activities-078",
    "prompt": "Act as an escape room strategist for {city}, {players} players, at a {difficulty} difficulty level. The occasion: {occasion}. Escape rooms reward communication more than cleverness — the plan must turn {players} individuals into a team before the timer starts.\n\nRecommend theme types for {players} players at {difficulty}: the genres (heist, horror, mystery, adventure, sci-fi) with what each demands (horror needs nerve, heist needs organization), which themes suit first-timers versus veterans, and how to read difficulty ratings honestly (a 'moderate' room with {players} beginners is actually hard). Explain booking and pricing: private versus public rooms (why private is worth it for groups), the per-person cost math, and how far ahead to book.\n\nBuild the team strategy: role assignments before entering (the searcher, the puzzle solver, the communicator who announces finds, the timekeeper), the communication protocol (call out everything, the 'hands off my puzzle' rule, when to ask for hints — the hint economy: use them early, not as a last resort), and the first-five-minutes system (split up, search high and low, gather and inventory).\n\nSet expectations for first-timers (you will not escape — and that is normal and fun), calibrate {difficulty} honestly, and add the debrief dinner plan: the restaurant type that fits reliving the experience, the 'best moment' conversation starters, and — for {occasion} — how to make the night feel celebratory. Add the team-assembly protocol: the role draft (pick order by birthday or draw, one trade allowed, roles matched to actual strengths), the communication system (the \"found something\" callout, the central clue board, the no-hoarding rule), and the hint strategy (when to ask — the ten-minute-stuck rule — and how many hints {difficulty} allows). Include the {occasion} framing (the team name, the photo, the stakes), the room-selection intelligence (reading reviews, private versus public booking, age-appropriateness), and the debrief (what worked, the next-room pick).\n\nA high-quality result means the team walks out closer than they walked in, escaped or not.",
    "description": "An escape room strategist's plan: theme picks matched to your group, the private-room case, role assignments, hint economy rules, and a debrief dinner that relives the best moments.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city are you in?",
        "type": "text",
        "placeholder": "e.g., San Antonio",
        "required": true
      },
      "players": {
        "label": "Players",
        "question": "How many players?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "difficulty": {
        "label": "Difficulty",
        "question": "What difficulty level?",
        "type": "select",
        "options": [
          "Beginner-friendly",
          "Moderate",
          "Expert"
        ],
        "required": true
      },
      "occasion": {
        "label": "Occasion",
        "question": "Is this for a special occasion? (optional)",
        "type": "text",
        "placeholder": "e.g., birthday, team building",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Ice Skating Outing",
    "displayDescription": "Plans an ice skating outing — session picks, rental and layering guidance, beginner technique, rink etiquette, and a warm-up food stop.",
    "id": "activities-079",
    "prompt": "Act as an ice skating outing planner for {city} on {date} for {groupSize} people with {experience} experience. Ages in the group: {ages}. Ice skating is joyful precisely because everyone starts wobbly — the plan should make falling funny and safe rather than scary.\n\nCover the session choice: public skate versus lessons (when the 30-minute beginner lesson is worth it for {experience} skaters), how to read the rink schedule (the crowded Saturday afternoon versus the blissful weekday morning), and admission plus rental pricing. Give rental and clothing guidance: skate fit (the snug-not-painful rule, lace technique), what to wear for warmth without bulk (layers, gloves are non-negotiable, the helmet question for kids from {ages}), and what to leave at home.\n\nTeach the beginner technique for {experience} skaters: how to stand up, the marching-then-gliding progression, how to stop (the snowplow, simply), how to fall safely (the tuck-and-roll that prevents wrist injuries), and how to get up. Add rink etiquette: direction of travel, the center-versus-edge rule, no stopping in traffic lanes, and how experienced skaters share ice with beginners.\n\nInclude the group management for {groupSize} people (the buddy system, meeting points, when to take breaks), calibrate to {ages} (kid-specific tips: the skating aid debate, lesson recommendations), and the warm-up finale: the best nearby hot drink or food spot with what to order. Add the falling-and-getting-up curriculum for {experience} skaters: the safe-fall technique (the side fall, the hands-in rule), the getting-up method (the one-knee push), and the wall-graduation plan (the three-lap milestone before letting go). Include the {ages} kid layer (the skate-aid or bucket option, when the beginner lesson is worth it, the hot-chocolate bribe timing), the clothing spec (the layers, the mandatory gloves, the thin socks), and the session flow (the first-thirty-minutes wobble, the practice drills, the free-skate reward). End with the next-visit skill ladder.\n\nA high-quality result means rosy cheeks, proud wobbles, and hot chocolate earned.",
    "description": "A skating outing that makes falling fun: session timing strategy, rental fit and layering guidance, safe-fall technique, rink etiquette, and kid-specific tips.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city are you in?",
        "type": "text",
        "placeholder": "e.g., Boston",
        "required": true
      },
      "date": {
        "label": "Date",
        "question": "What day are you going?",
        "type": "date",
        "required": true
      },
      "groupSize": {
        "label": "Group Size",
        "question": "How many people are going?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "experience": {
        "label": "Experience",
        "question": "What is the group's experience?",
        "type": "select",
        "options": [
          "Beginner",
          "Some experience",
          "Experienced"
        ],
        "required": true
      },
      "ages": {
        "label": "Ages",
        "question": "What are the ages in the group? (optional)",
        "type": "text",
        "placeholder": "e.g., 6, 9, 34",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Roller Skating Night",
    "displayDescription": "Plans a themed roller skating night — outfit ideas, a matching playlist, rental tips, beginner moves, rink games, and late-night food.",
    "id": "activities-080",
    "prompt": "Act as a roller rink party planner for {city} on {date} for {groupSize} people with a {theme} theme. Skating ability in the group: {skatingAbility}. Roller skating nights run on nostalgia and momentum — the theme, music, and games must keep wheels rolling and energy high.\n\nBuild the {theme} theme out: outfit ideas at three effort levels (the easy win, the committed look, the showstopper), how the theme shows up in decor and the group photo, and the playlist matched to {theme} (the must-play songs, the skate-dance tracks, the slow-song break). Suggest skate rental tips: quad versus inline for {skatingAbility} beginners, sizing, and what to wear (the sock rule, knee protection for the nervous).\n\nTeach the beginner moves for {skatingAbility} skaters: the stance, the stride, stopping (the T-stop and the wall — honestly), turning, and how to fall without injury. Design three rink games for {groupSize} people: the limbo skate, the relay race, the couples skate challenge — with rules and how to include beginners safely.\n\nAdd the night's flow: arrival and skate fitting, the warm-up laps, game timing, the theme photo moment, and the late-night food plan (the post-rink spot that fits {theme} energy). Include rink etiquette (direction, passing, the center for beginners) and calibrate games to {skatingAbility} so nobody gets hurt showing off. Add the skate-party games for {skatingAbility}: the limbo, the relay races, the freeze skate, the couples skate — each with the safety framing and the ability-tiered version. Include the {theme} photo ops (the backdrop spot, the group pose, the slow-song moment), the rental optimization (quad versus inline for {skatingAbility}, the fit check, the protective gear for beginners), and the energy arc (the warm-up laps, the game block, the free-skate finale, the last-song ritual). End with the photo share and the next-theme vote.\n\nA high-quality result means the group leaves already planning the next theme.",
    "description": "A rink party planner's night: a fully-built theme with outfit tiers, a matched playlist, beginner move instruction, three inclusive rink games, and a late-night food plan.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city are you in?",
        "type": "text",
        "placeholder": "e.g., Atlanta",
        "required": true
      },
      "date": {
        "label": "Date",
        "question": "What night are you going?",
        "type": "date",
        "required": true
      },
      "groupSize": {
        "label": "Group Size",
        "question": "How many people are going?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "theme": {
        "label": "Theme",
        "question": "What theme should the night have?",
        "type": "select",
        "options": [
          "Retro",
          "Neon",
          "Casual"
        ],
        "required": true
      },
      "skatingAbility": {
        "label": "Skating Ability",
        "question": "What is the group's skating ability? (optional)",
        "type": "select",
        "options": [
          "Mostly beginners",
          "A mix",
          "Mostly confident skaters"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Winter Sledding Day",
    "displayDescription": "Plans a sledding day — how to find safe hills, sled buying versus renting, a layering guide, crowded-hill safety rules, and hot drinks.",
    "id": "activities-081",
    "prompt": "Act as a winter day coordinator for a sledding day on {date} at {location} for {groupSize} people. Gear situation: {gear}. Ages in the group: {ages}. Sledding is simple fun with real risks — the plan must maximize the joy while treating hill safety seriously.\n\nGuide the hill hunt for {location}: how to find the best local hills (the park department sledding hill lists, the neighborhood knowledge), what makes a hill safe (gentle runout, no trees or roads at the bottom, the slope angle sweet spot), and the red flags that mean 'find another hill.' Calibrate hill picks to {ages} — toddlers need bunny slopes, teens want the big hill, and the plan should include both if the ages span.\n\nCover the {gear} situation: sled types worth buying versus renting (the disc, the toboggan, the foam slider — what each does best), what to look for when buying (steering, brakes, durability), approximate costs, and the DIY alternatives. Write the layering guide: the base-mid-shell system, the extremities (two pairs of gloves — one always gets wet), and what not to wear (the scarf-around-the-neck hazard).\n\nEstablish the safety rules for crowded hills: the one-way system (walk up the side, sled down the middle), the clear-the-bottom rule, spacing between sledders, and the adult's job as hill monitor. Add the hot drinks and food plan (the thermos strategy, the warming-up spot), and the backup indoor activity if conditions are bad on {date} — with the morning-of decision criteria. Add the hill-session choreography: the climb-and-ride rotation (the path up separated from the run down, the queue order for {groupSize} people), the sled optimization for {gear} (the wax trick, the steering techniques — feet versus rope — the tandem rules), and the {ages} safety tiers (the toddler tow-behind, the kid hill versus the big hill, the helmet call). Include the cold management (the warm-up breaks, the dry-socks bag, the hot-drink thermos), the collision protocol (the walk-away check, when to sit out), and the golden-hour finale (the last run, the snow-angel photo).\n\nA high-quality result means red cheeks, full thermoses, and everyone in one piece.",
    "description": "A winter coordinator's sledding day: safe-hill criteria by age, a buy-versus-rent sled guide, a real layering system, crowded-hill safety rules, and a bad-weather backup.",
    "category": "activities",
    "variables": {
      "date": {
        "label": "Date",
        "question": "What day are you going?",
        "type": "date",
        "required": true
      },
      "location": {
        "label": "Location",
        "question": "What area are you sledding in?",
        "type": "text",
        "placeholder": "e.g., the foothills north of town",
        "required": true
      },
      "groupSize": {
        "label": "Group Size",
        "question": "How many people are going?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "gear": {
        "label": "Gear",
        "question": "Do you own sleds already?",
        "type": "select",
        "options": [
          "We own sleds",
          "We need to rent or buy",
          "A mix of both"
        ],
        "required": true
      },
      "ages": {
        "label": "Ages",
        "question": "What are the ages in the group? (optional)",
        "type": "text",
        "placeholder": "e.g., 5, 8, 33, 35",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Fall Leaf-Peeping Drive",
    "displayDescription": "Maps a leaf-peeping drive — peak-color timing, the best routes, photo stops, a cozy lunch break, and a rainy-day version.",
    "id": "activities-082",
    "prompt": "Act as a fall foliage guide mapping a leaf-peeping drive through {region} on {date}, lasting about {hours} hours. Riding along: {passengers}. Peak color is a moving target — the plan must chase it intelligently and have a beautiful day even if the timing is slightly off.\n\nRecommend the route: the best roads through {region} for color (the scenic byways versus the back roads locals know), direction of travel for the best light, and total drive time within {hours} hours. Add the timing intelligence: how to check peak-color forecasts for {date}, the elevation rule (color moves down the mountains as the season progresses), and what to do if you are a week early or late (the micro-climate trick — where color lingers).\n\nPlan the stops: 4 to 6 photo stops at scenic overlooks with what makes each one special, the ideal time of day per stop for light, and one longer stop for walking among the trees (not just driving past them). Add the cozy lunch or cider stop — the place that makes the day feel like fall, with what to order — calibrated to {passengers}.\n\nInclude the comfort packing list (layers, blankets, the thermos, camera gear), driving safety for leaf-season roads (the tourist traffic reality, parking at overlooks, the wet-leaves braking warning), and the rainy-day backup version of the route (the covered stops, the towns worth exploring in the rain). Add the chase-the-color intelligence: the peak-forecast sources (the foliage maps, the local reports, the elevation-and-latitude math), the {date} timing call (early, peak, or late — with the pivot plan for each), and the direction strategy (drive toward the color, the higher-elevation-first rule). Include the {passengers} comfort plan (the snack box, the playlist, the stop cadence — the scenic pullouts, the cider mill, the overlook picnic), the photography (the golden-hour timing, the polarizer tip, the no-drone zones), and the small-town stops (the farm stand, the general store).\n\nA high-quality result means coming home with photos that look like postcards and a thermos-shaped memory.",
    "description": "A foliage guide's drive: peak-color timing intelligence, a light-optimized route, photo stops, a cozy cider break, and a rainy-day backup version.",
    "category": "activities",
    "variables": {
      "region": {
        "label": "Region",
        "question": "What region will you drive through?",
        "type": "text",
        "placeholder": "e.g., the Blue Ridge Parkway",
        "required": true
      },
      "date": {
        "label": "Date",
        "question": "What day are you going?",
        "type": "date",
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours for the drive?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "passengers": {
        "label": "Passengers",
        "question": "Who is riding along? (optional)",
        "type": "text",
        "placeholder": "e.g., my partner, two kids",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Spring Flower Walk",
    "displayDescription": "Plans a spring bloom walk — the best viewing spots, ideal timing for light and crowds, flower ID tips, and flower photography guidance.",
    "id": "activities-083",
    "prompt": "Act as a spring bloom guide planning a flower walk in {city} on {date} for {groupSize} people, lasting {hours} hours. Shooting with: {photoGear}. Flower season is brief and specific — the plan must hit the right place at the right moment.\n\nRecommend the viewing spots: the best gardens, trails, or neighborhoods in {city} for blooms around {date} (what is actually blooming then — cherry blossoms, wildflowers, tulips — with the honest peak window), the ideal time of day balancing light and crowds, and the route through the best spot for {hours} hours. Include one lesser-known alternative in case the famous spot is packed.\n\nTeach the flower ID layer: the 6 to 8 blooms most likely to be seen, with identifying features (petal count, color patterns, leaf shape, scent), the lookalikes, and the stories behind two of them (the history or ecology that makes them interesting). Add the etiquette: stay on paths, the no-picking rule and why it matters, and how to enjoy without damaging.\n\nProvide photography tips for {photoGear}: the golden-hour positioning, getting low for the bee's-eye view, background blur techniques, the overcast-day advantage, and the compositions that work for flowers specifically. Add the picnic or cafe stop to round out the walk, calibrated to {groupSize} people. Add the peak-bloom timing tactics: the bloom-trackers to watch (the garden's social feeds, the citizen reports), the {date} flexibility (the plus-or-minus five-day window, the backup weekend), and the crowd-dodging (the opening-time arrival, the weekday advantage, the lesser-known entrance). Include the {photoGear} photography guide (the macro approach, the overcast-light advantage, the background control, the bee-and-butterfly patience), the {groupSize} logistics (the meeting point, the pace groups, the picnic), and the bloom-beyond (the second location for the late bloomers).\n\nAdd the bloom journal: the pressed-flower page, the species checklist with the satisfying checkmarks, and the \"same time next year\" calendar reminder — because flower season rewards the planner, and next spring's self will thank you.\n\nA high-quality result means the group notices flowers for the rest of the spring.",
    "description": "A bloom guide's walk: peak-window spot picks, a flower ID lesson with lookalikes, no-pick etiquette, photography techniques for your gear, and a cafe finish.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city are you walking in?",
        "type": "text",
        "placeholder": "e.g., Washington DC",
        "required": true
      },
      "date": {
        "label": "Date",
        "question": "What day are you going?",
        "type": "date",
        "required": true
      },
      "groupSize": {
        "label": "Group Size",
        "question": "How many people are going?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "photoGear": {
        "label": "Camera Gear",
        "question": "What will you shoot with? (optional)",
        "type": "select",
        "options": [
          "Phone",
          "Dedicated camera"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Seasonal Bucket List Builder",
    "displayDescription": "Builds a seasonal bucket list for your household — {items} ideas balanced across cost, setting, and season-uniqueness, with a printable tracker.",
    "id": "activities-084",
    "prompt": "Act as a seasonal experience designer building a {season} bucket list of {items} activities for {city}. This list is for: {household}. A bucket list fails when it is all big-ticket items or all 'someday' dreams — balance it so the season actually gets lived.\n\nBuild the {items} items with deliberate balance: mix free and paid (at least a third free), indoor and outdoor, solo-friendly and group ideas, quick wins (under 2 hours) and day adventures, and at least three that are unique to {season} in {city} (the things you can only do now). For each item include: the activity, estimated cost, the best timing within the season (early, peak, or late {season} — and why), who it is perfect for given {household}, and the 'make it happen' note (what to book, who to text, what to buy).\n\nOrder the list by season chronology where timing matters (the early-{season} items first), and mark the five 'do not miss' items — the ones {household} will regret skipping. Add the anti-skip design: for each of the five, the smallest possible version (the 30-minute version that still counts) so busy weeks do not kill momentum.\n\nEnd with the tracking checklist format: a printable layout with checkboxes, date-completed space, and a rating column — plus the season-end ritual (the review night, the photo roundup, picking next season's list). Add the list-execution system: the scheduling (plot the {items} items across the {season} weeks — the calendar with the anchor events first), the accountability (the shared list, the photo proof, the check-off ritual), and the {household} assignment (who owns which item, the kid-pick versus adult-pick balance). Include the budget pacing (the spend spread across the season, the free-week buffers between big tickets), the weather pivots (the indoor swap for each outdoor item), and the season finale (the last-weekend celebration, the favorites vote, the next-season teaser).\n\nA high-quality result means {season} ends with stories, not with 'we should have.'",
    "description": "A season actually lived: {items} balanced activities with cost and timing, five do-not-miss picks, 30-minute minimum versions, and a printable tracking ritual.",
    "category": "activities",
    "variables": {
      "season": {
        "label": "Season",
        "question": "Which season is the bucket list for?",
        "type": "select",
        "options": [
          "Spring",
          "Summer",
          "Fall",
          "Winter"
        ],
        "required": true
      },
      "items": {
        "label": "Items",
        "question": "How many activities should be on the list?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": true
      },
      "city": {
        "label": "City",
        "question": "What city or area are you in?",
        "type": "text",
        "placeholder": "e.g., Flagstaff",
        "required": true
      },
      "household": {
        "label": "Household",
        "question": "Who is the bucket list for? (optional)",
        "type": "text",
        "placeholder": "e.g., family with two kids, couple",
        "required": false
      }
    }
  },

  {
    "displayTitle": "30-Day Personal Challenge",
    "displayDescription": "Designs a 30-day challenge around your deeper 'why' — four building phases, specific daily actions, check-ins, and slip-proof rules.",
    "id": "activities-085",
    "prompt": "Act as a challenge architect designing a 30-day personal challenge focused on {challenge}, at {dailyMinutes} minutes a day. My deeper motivation: {why}. Most challenges fail in week two — design the psychology, not just the tasks, so this one survives the motivation dip.\n\nStructure the 30 days into four weekly phases that build on each other: week 1 foundations and habit installation (easy wins that build identity), week 2 skill building (the core practice deepens), week 3 the stretch (meaningful difficulty increase), week 4 integration and mastery (combining everything, preparing for life after day 30). Give a specific daily action for each of the 30 days — concrete verbs, not vague intentions — calibrated to {dailyMinutes} minutes and the {challenge} focus, with the difficulty curve mapped across the phases.\n\nBuild the support systems: weekly check-in questions (three per week that measure progress and feeling, tied to {why}), a simple tracking method (the visual tracker design — what to mark daily and what the streak looks like), and the missed-day rules that keep one slip from ending the challenge (the never-miss-twice rule, the minimum viable day version at 5 minutes, how to restart after three missed days without shame).\n\nAdd the motivation engineering: the week-two dip survival kit (what to do when it feels pointless), the accountability mechanism matched to personality, and the day-30 celebration that honors the work. Close with 'after the challenge': how to convert 30 days into an ongoing practice. Add the identity layer that makes it stick: the \"I am someone who...\" statement tied to {why}, the environment design (the cues placed, the friction removed, the visual tracker location), and the social contract (who knows about the challenge, the check-in rhythm, the stakes). Detail the week-two dip protocol (the three warning signs, the emergency responses — shrink the task, change the time of day, phone a friend), the travel and disruption plan (the hotel-room version, the sick-day rule, the never-miss-twice law), and the day-thirty-one design (the maintenance mode, the next-challenge seed).\n\nA high-quality result means day 30 feels like a beginning, not an ending.",
    "description": "A challenge architect's 30-day program: four building phases with specific daily actions, week-two dip survival, slip-proof rules, and a day-30 celebration.",
    "category": "activities",
    "variables": {
      "challenge": {
        "label": "Challenge Focus",
        "question": "What should the challenge focus on?",
        "type": "select",
        "options": [
          "Fitness",
          "Creativity",
          "Mindfulness",
          "Social connection",
          "Learning"
        ],
        "required": true
      },
      "dailyMinutes": {
        "label": "Daily Minutes",
        "question": "How many minutes per day?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": true
      },
      "why": {
        "label": "Your Why",
        "question": "Why does this challenge matter to you? (optional)",
        "type": "textarea",
        "placeholder": "e.g., I want to feel strong again after a tough year",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Digital Detox Day",
    "displayDescription": "Plans a full offline day — hour-by-hour replacement activities for your exact screen habits, prep steps, and urge-surfing strategies.",
    "id": "activities-086",
    "prompt": "Act as a digital wellness guide planning a {hours}-hour digital detox day in a {location} setting. My usual screen time goes to: {activities}. Others in the house: {household}. A detox fails when the phone-shaped hole in the day is not filled — every screen habit needs a deliberate offline replacement, or the urge wins.\n\nBuild the hour-by-hour plan for {hours} hours: for each block name the offline activity that replaces a specific habit from {activities} (the morning scroll becomes the porch coffee and notebook; the evening streaming becomes the project night), with what to have ready for each. Sequence the day with energy in mind — active morning, restful midday, creative afternoon, reflective evening — and include transition rituals between blocks.\n\nCover the preparation: who to notify and what to say (the message template), auto-reply and voicemail setup, the phone's physical exile plan (where it goes, the lockbox or drawer method), what to do about genuine emergencies (the landline or designated contact protocol), and how to handle {household} (inviting them, or detoxing solo while they scroll nearby).\n\nAdd the urge toolkit: what to do in the first 30 minutes (the hardest window), the urge-surfing technique for cravings, the 'I need to look something up' protocol (the notebook capture method), and the evening journaling exercise that processes the day (three prompts about attention, boredom, and presence). Close with the re-entry plan: how to come back online intentionally the next morning instead of binging. Add the {household} coordination: the house-meeting script (what to announce, the ground rules — no showing you their phone, the emergency contact chain), the shared-activity blocks (the meal cooked together, the walk, the game), and the protected solo blocks (the reading hour, the project time). Include the work-boundary plan (the out-of-office message, the true-emergency filter, the one scheduled check-in if work cannot fully wait), the evening reflection ritual (the three journal prompts, the letter to yourself), and the next-morning re-entry (the intentional first hour, the app audit, the one boundary worth keeping).\n\nA high-quality result means discovering the day is longer — and richer — than you remembered.",
    "description": "A digital wellness guide's offline day: every screen habit gets an offline replacement, a phone-exile protocol, urge-surfing techniques, and an intentional re-entry plan.",
    "category": "activities",
    "variables": {
      "hours": {
        "label": "Hours",
        "question": "How many hours will the detox last?",
        "type": "number",
        "placeholder": "e.g., 12",
        "required": true
      },
      "location": {
        "label": "Setting",
        "question": "Where will you spend the day?",
        "type": "select",
        "options": [
          "Home",
          "Outdoors",
          "A mix of both"
        ],
        "required": true
      },
      "activities": {
        "label": "Screen Habits",
        "question": "What do you usually do on screens?",
        "type": "textarea",
        "placeholder": "e.g., social media, streaming, news",
        "required": false
      },
      "household": {
        "label": "Household",
        "question": "Who else will be around that day? (optional)",
        "type": "text",
        "placeholder": "e.g., partner joining in, kids doing their own thing",
        "required": false
      }
    }
  },
  {
    "displayTitle": "At-Home Spa Day",
    "displayDescription": "Creates a spa day at home — an ordered treatment schedule, DIY recipes from common ingredients, ambiance design, and a nourishment plan.",
    "id": "activities-087",
    "prompt": "Act as a spa therapist designing an at-home spa day lasting {hours} hours with a {treatments} focus. Skin sensitivities or preferences: {skinNotes}. A home spa day works when it has the structure of a real spa — an ordered treatment sequence, not random pampering — and the ambiance that signals 'this is an event.'\n\nBuild the treatment schedule in the correct order (the sequence matters: exfoliation before masks, heat before cool, the scalp-to-toe logic), with timing for each treatment fitted to {hours} hours and the {treatments} focus. For each treatment give the DIY recipe using common kitchen ingredients (exact measurements, the {skinNotes} substitutions, what each ingredient does), application instructions, and how long to leave it on.\n\nDesign the ambiance: the music (specific playlist types or search terms), lighting (candles, dimmers, the bathroom transformation), scents (the essential oil or simmer-pot blends), and the little luxuries (the warmed towels trick, the infused water recipes, the robe-and-slippers uniform). List everything to have on hand beforehand in a single shopping and gathering checklist.\n\nAdd the nourishment plan for the day: the hydrating drinks schedule, the light healthy meal (with a simple recipe) timed between treatments, and what to avoid (the heavy meal that ruins the floaty feeling). Close with the wind-down: the final treatment, the rest period, and how to carry the calm into the evening. Add the {skinNotes} safety layer: the patch-test protocol for every DIY recipe (the inner-arm test, the twenty-minute wait), the ingredient swap chart (the alternatives for common irritants — fragrance, citrus oils, nut oils), and the \"stop immediately\" signals. Include the treatment-order science (why exfoliation precedes masks, the heat-then-cool logic, the scalp-to-toe flow), the {treatments} deep dive (the extended rituals for the focus area — the bath-soak sequence, the facial massage technique, the hair treatment), and the ambiance arc (the playlist flow, the lighting transitions, the scent layering). End with the evening wind-down (the herbal tea, the early bed).\n\nA high-quality result means emerging genuinely restored, not just smelling like oatmeal.",
    "description": "A therapist-designed home spa: a correctly-sequenced treatment schedule with DIY recipes and sensitivity swaps, full ambiance design, and a day-long nourishment plan.",
    "category": "activities",
    "variables": {
      "hours": {
        "label": "Hours",
        "question": "How many hours do you have?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "treatments": {
        "label": "Treatment Focus",
        "question": "What should the spa day focus on?",
        "type": "select",
        "options": [
          "Full day of treatments",
          "Express session",
          "Bath-focused relaxation"
        ],
        "required": true
      },
      "skinNotes": {
        "label": "Skin Notes",
        "question": "Any skin sensitivities, allergies, or scent preferences? (optional)",
        "type": "textarea",
        "placeholder": "e.g., sensitive skin, dislike lavender",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Meditation Day Retreat",
    "displayDescription": "Structures a self-guided meditation retreat — sequenced practices, simple instructions, journaling prompts, steady-energy meals, and a closing ritual.",
    "id": "activities-088",
    "prompt": "Act as a retreat leader structuring a {hours}-hour self-guided meditation day in a {setting} setting, for a {experience} meditator. My intention: {intention}. A solo retreat needs the container a teacher would provide — the schedule, the instructions, and the permission to rest — or the day dissolves into napping and phone-checking.\n\nSequence the day: opening intention-setting, then alternating sitting, walking, and guided practices with durations and break times across {hours} hours, calibrated to {experience} (shorter sits with more guidance for beginners, longer silent blocks for advanced). For each practice write simple self-instructions: the posture setup, what to do with the mind (the specific technique — breath counting, body scan, open awareness), and what to do when it falls apart (the kind troubleshooting for restlessness, sleepiness, and pain).\n\nWeave in journaling prompts between sessions that deepen the retreat (not productivity journaling — the noticing prompts), suggest meals that keep energy steady (what to eat, when, and the caffeine and sugar guidance), and design the space setup for {setting} (the cushion arrangement, the phone exile, the altar or focal point).\n\nAdd the restlessness survival kit (the walking meditation reset, the permission to shorten a sit), noble silence guidelines for the day (including how to handle others in the house), and the gentle closing ritual that integrates the day — the dedication, the re-entry plan, and how to carry one practice into daily life around {intention}. Add the {experience}-calibrated practice menu. For beginners: the guided-audio recommendations (the specific tracks, the body-scan script), the shorter sits with explicit permission slips, the \"what to do with the fireworks in your head\" briefing. For the experienced: the longer silent blocks, the inquiry or koan prompt, the walking-sit ratios. Weave in {intention} (the morning dedication, the midday check-in — \"am I honoring my intention?\" — the evening harvest), the walking-meditation routes for {setting} (the indoor path, the outdoor loop, the pace guidance), and the difficult-emotions protocol (the RAIN technique, when to journal instead of sit). End with the closing ritual (the spoken dedication, the staged return to noise, the one daily practice to keep).\n\nA high-quality result means ending the day quieter inside than you started.",
    "description": "A retreat leader's solo day: a sequenced practice schedule with self-instructions, restlessness troubleshooting, steady-energy meals, and an integration closing ritual.",
    "category": "activities",
    "variables": {
      "hours": {
        "label": "Hours",
        "question": "How many hours for the retreat?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "setting": {
        "label": "Setting",
        "question": "Where will the retreat be?",
        "type": "select",
        "options": [
          "Home",
          "Outdoors",
          "A quiet venue"
        ],
        "required": true
      },
      "experience": {
        "label": "Experience",
        "question": "What is your meditation experience?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "intention": {
        "label": "Intention",
        "question": "What is your intention for the retreat? (optional)",
        "type": "textarea",
        "placeholder": "e.g., to slow down and hear myself think",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Vision Board Party",
    "displayDescription": "Hosts a vision board party — reflection prompts before cutting, materials with budget options, an evening flow, and a meaningful sharing circle.",
    "id": "activities-089",
    "prompt": "Act as a vision board party host for {guests} people over {hours} hours, focused on: {focusAreas}. Supplies already on hand: {supplies}. The boards are only as good as the reflection before the cutting — without it, the night produces pretty collages of random magazines. Design the inner work first, the crafts second.\n\nWrite the reflection prompts to complete before anyone touches scissors: the guided visualization (written as a script the host reads — the future-self walkthrough for {focusAreas}), followed by three written prompts (what I want to feel, what I am releasing, the one bold desire) with timing. Explain why this order matters.\n\nList all materials accounting for {supplies}: boards or canvases, magazines and image sources (where to get good ones free), scissors, glue, markers, stickers, and the nice-to-have upgrades — with budget options and per-person cost math for {guests} people. Structure the evening: arrival and intention-setting, the reflection block, creation time with the right music (specific playlist guidance for an inspiring but focused mood), and the sharing circle (the format — what each person shares, the listening rules, how to handle vulnerability).\n\nAdd hosting details: the workspace setup for {guests} creators, snack and drink ideas that do not damage boards, how to display the finished boards at home (the placement advice that keeps them visible), and the follow-up (the 3-month check-in message to the group). Add the {focusAreas} deep-dive prompts: for each focus area, the three questions that surface the real desire beneath the Pinterest cliché (not \"a beach house\" but \"what would my mornings feel like?\"), the values-clarification exercise, and the anti-vision (what you are done with — the release column). Include the {supplies} optimization (the shopping list for what is missing, the magazine sourcing — library discards, the dentist-office ask — the print-your-own option), the hosting flow for {guests} people (the arrival activity, the music, the sharing-circle format), and the follow-up (the ninety-day check-in, the board refresh ritual).\n\nA high-quality result means guests leave with clarity, not just crafts.",
    "description": "A host's vision board night: a guided future-self visualization script, reflection-before-cutting, per-person supply math, and a sharing circle with listening rules.",
    "category": "activities",
    "variables": {
      "guests": {
        "label": "Guests",
        "question": "How many people are coming?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "focusAreas": {
        "label": "Focus Areas",
        "question": "What life areas should the boards focus on?",
        "type": "text",
        "placeholder": "e.g., career, travel, health",
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours will it run?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "supplies": {
        "label": "Supplies on Hand",
        "question": "What craft supplies do you already have? (optional)",
        "type": "textarea",
        "placeholder": "e.g., scissors, glue sticks, old magazines",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Road Trip Stop Planner",
    "displayDescription": "Plans the stops that make the drive the trip — daily highlights, quirky detours, regional food, fuel planning, and a flexible daily template.",
    "id": "activities-090",
    "prompt": "Act as a road trip curator planning the stops for a {days}-day trip along this route: {route}, with interests in {interests}. Traveling: {travelers}. The stops are the trip — the driving is just how you get between the good parts. Curate accordingly.\n\nRecommend two to three stops per day along {route}: for each stop give what to see or do, how long to spend (with the honest minimum that makes it worth stopping), what it costs, and why it fits {interests} and {travelers}. Mark each stop as must-see, worth-it-if-time, or skip-if-tired so the plan flexes with energy.\n\nAdd the road trip flavor: the quirky roadside attractions worth the detour (with the honest assessment of which are actually fun), the best food stops by region (the local specialties and where to get them), and the scenic stretches where the drive itself is the attraction. Cover the logistics: gas and rest planning (the fuel-stop strategy for remote stretches), the daily mileage sanity check, and lodging rhythm across {days} days.\n\nBuild the flexible daily template: the morning launch routine, the stop cadence (drive 2 hours, stop 1 hour — adjusted for {travelers}), the evening wind-down, and the decision framework for adding or skipping stops on the fly. Include the car kit (snacks, entertainment, emergency basics) and the playlist or podcast strategy for long stretches. Add the {travelers}-specific planning: the kid math (the stop frequency, the snack arsenal, the backseat entertainment kit), the pet logistics (the pet-friendly stops, the never-leave-in-car rule, the vet records), the group-decision protocol (the driver rotation, the music veto rules, the food democracy). Include the {route} intelligence (the construction zones, the fuel-desert stretches, the cell-dead zones with offline maps downloaded), the {interests} deep cuts (the second-tier stops only locals know, the festival or event timing worth routing around), and the daily rhythm (the morning launch routine, the sunset target, the lodging check-in buffer).\n\nA high-quality result means the drive home is spent talking about the stops, not enduring them.",
    "description": "A curator's road trip: prioritized daily stops with honest time minimums, quirky detours worth it, regional food, fuel strategy, and a flex-with-energy daily template.",
    "category": "activities",
    "variables": {
      "route": {
        "label": "Route",
        "question": "What is your road trip route?",
        "type": "text",
        "placeholder": "e.g., Phoenix to San Diego via I-8",
        "required": true
      },
      "days": {
        "label": "Days",
        "question": "How many days is the trip?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "interests": {
        "label": "Interests",
        "question": "What kinds of stops interest you?",
        "type": "select",
        "options": [
          "Food",
          "Nature",
          "History",
          "Quirky stops"
        ],
        "required": true
      },
      "travelers": {
        "label": "Travelers",
        "question": "Who is traveling? (optional)",
        "type": "text",
        "placeholder": "e.g., two adults, a dog, a 7-year-old",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Train Trip Planner",
    "displayDescription": "Plans a scenic train journey — the best segments and which side to sit on, seat versus sleeper math, station stopovers, and onboard comfort.",
    "id": "activities-091",
    "prompt": "Act as a rail travel specialist planning a {days}-day train trip along {route} with a {budget} budget. Traveling with: {companions}. Train travel is a different art from flying — the journey is the destination, and the planning is about comfort, scenery, and rhythm, not speed.\n\nBreak down the route: the most scenic segments (with mile markers or landmarks if known), which side of the train to sit on for each segment and why, the best times of day for each stretch, and the segments where scenery gives way to nap time. Compare seat versus sleeper options honestly for {days} days: the cost math against {budget}, what the sleeper actually includes (meals, privacy, the bed reality), and who should splurge versus who is fine in coach.\n\nPlan the station stopovers worth exploring: which stops have enough layover time to see something, what to do in 2 hours versus overnight, and the luggage logistics. List what to pack for onboard comfort (the pillow, the layers, the entertainment, the food strategy — dining car versus packed meals with the cost comparison), and add onboard entertainment ideas for the long stretches (the journey rituals: the observation car hours, the card games, the journaling).\n\nCover the practical realities: delays (the freight-priority truth and how to buffer connections), the dining car etiquette, safety and valuables, and booking timing for the best fares. Add the {companions} cabin strategy: the seating configuration (the facing pairs, the roomette math for two, the family bedroom for more), the shared-packing plan (the communal snack bag, the entertainment pool), and the together-apart rhythm (the observation-car hours, the solo book time). Include the {budget} optimization (the fare buckets — book early, the midweek discount — the sleeper-versus-coach break-even, the dining-car versus café-car math), the {route} segment guide (the must-be-awake stretches, the sit-on-this-side notes, the station leg-stretch timing), and the delay kit (the buffer night, the flexible connections, the entertainment reserve).\n\nA high-quality result means watching America roll past the window instead of watching the clock.",
    "description": "A rail specialist's journey plan: scenic segments with sit-on-this-side guidance, honest sleeper math, stopover picks, delay buffering, and onboard comfort strategy.",
    "category": "activities",
    "variables": {
      "route": {
        "label": "Route",
        "question": "What is your train route?",
        "type": "text",
        "placeholder": "e.g., Chicago to Seattle",
        "required": true
      },
      "days": {
        "label": "Days",
        "question": "How many days is the trip?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your total budget?",
        "type": "select",
        "options": [
          "Budget",
          "Mid-range",
          "Comfortable"
        ],
        "required": true
      },
      "companions": {
        "label": "Companions",
        "question": "Who is traveling with you? (optional)",
        "type": "text",
        "placeholder": "e.g., my partner",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Staycation Itinerary",
    "displayDescription": "Builds a staycation that feels like a getaway — daily plans mixing tourist favorites with hidden gems, a home upgrade, and no-chores rules.",
    "id": "activities-092",
    "prompt": "Act as a staycation designer building a {days}-day itinerary in {city} with a {vibe} vibe and about this daily budget: {dailyBudget}. The enemy of the staycation is the ordinary — errands, chores, and the couch. Design the mindset as carefully as the activities.\n\nPlan each of the {days} days with morning, afternoon, and evening blocks: mix the tourist favorites you have never done (the things locals skip — be honest about which are actually worth it) with local hidden gems (the neighborhoods, spots, and experiences tourists miss). For each block give the activity, timing, cost against {dailyBudget}, and why it earns its slot. Sequence the days with an arc: day one unwinds, the middle days explore, the last day savors.\n\nAdd the getaway illusion: the one nice hotel night or the home upgrade that makes it feel like a trip (the specific touches — the hotel breakfast, the blackout curtains and turned-down bed at home), and the no-chores rule list (the written agreement: no laundry, no inbox, the phone boundaries) that protects the vacation feeling.\n\nInclude the food strategy (the restaurant splurges versus the picnic days, the cooking-together night), the daily budget estimates itemized, and the 'tourist in your own city' mindset prompts. Close with the re-entry plan: how to return to normal life without the staycation evaporating instantly. Add the {vibe}-specific day architecture. For relaxing: the unscheduled margins, the spa or sauna bookings, the nap-positive schedule. For adventurous: the dawn starts, the physical challenges, the new-skill lesson. For cultural: the museum deep-dives, the historic-neighborhood walks, the performance night. Include the {city} local's-eye picks (the tourist traps to skip with the honest why, the neighborhood gems), the {dailyBudget} allocation (the splurge day versus the free days, the running total method), and the home-base upgrades (the one hotel night option, the blackout-curtain and minibar DIY). End with the re-entry buffer (the meeting-free Monday).\n\nA high-quality result means needing a vacation from your vacation — in the best way.",
    "description": "A staycation that feels like travel: a {days}-day arc of tourist favorites and hidden gems, a getaway-illusion upgrade, written no-chores rules, and itemized daily budgets.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city are you staycationing in?",
        "type": "text",
        "placeholder": "e.g., Scottsdale",
        "required": true
      },
      "days": {
        "label": "Days",
        "question": "How many days?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "vibe": {
        "label": "Vibe",
        "question": "What vibe should the staycation have?",
        "type": "select",
        "options": [
          "Relaxing",
          "Adventurous",
          "Cultural"
        ],
        "required": true
      },
      "dailyBudget": {
        "label": "Daily Budget",
        "question": "Rough daily budget in dollars? (optional)",
        "type": "number",
        "placeholder": "e.g., 150",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Neighborhood Walk Bingo",
    "displayDescription": "Creates a walk bingo game — a 5x5 card with easy-to-tricky spots, rules and tiebreakers, a find-maximizing route, and prizes.",
    "id": "activities-093",
    "prompt": "Act as a game designer creating a neighborhood walk bingo for {players} players around {location}, lasting {duration} hours. Player ages: {ages}. The card is the game — it must be tuned to what is actually findable around {location}, with a difficulty curve that keeps everyone hunting until the end.\n\nDesign the 5x5 bingo card: 25 things to spot around {location}, ranging from easy gimmes (a red door, a dog) to genuinely tricky finds (a specific architectural detail, something that should not be there), calibrated to {ages} so kids and adults both have winnable squares. Include the free center square with a fun twist. Vary the square types: visual finds, sounds, counting challenges, and photo missions.\n\nWrite the rules: how bingo is won (line, blackout, or points — recommend for {players} players and {duration} hours), the verification method (photo proof rules), the tiebreaker, whether players work solo or in teams, and the boundaries of the play area. Suggest the route that maximizes finds around {location}: direction, the streets with the richest spotting, and pacing for {duration} hours.\n\nAdd the prize for the winner (scaled to the group), the consolation fun (the best-photo award), and kid-specific engagement from {ages} (the junior card variation if ages span widely). Include safety notes for walking the area. Add the {ages} card-tuning: the picture-card version for pre-readers (images instead of words), the junior-varsity twelve-square card for the under-sevens, the expert extensions for teens (the photo-challenge squares, the riddle clues). Include the game-running kit (the printed cards, the daubers or stickers, the rules sheet, the tiebreaker lightning round), the {location} route (the loop with the highest find-density, the rest stop, the bathroom), the {duration}-hour pacing (the start-line briefing, the halfway huddle, the finish-line ceremony), and the prizes (the winner's pick, the best-photo award, the participation stickers).\n\nA high-quality result turns a regular walk into the most competitive hour of the week.",
    "description": "A game designer's walk bingo: a 25-square card tuned to your neighborhood with a real difficulty curve, photo-verification rules, a find-maximizing route, and prizes.",
    "category": "activities",
    "variables": {
      "location": {
        "label": "Location",
        "question": "What neighborhood or area?",
        "type": "text",
        "placeholder": "e.g., Old Town",
        "required": true
      },
      "players": {
        "label": "Players",
        "question": "How many players?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "duration": {
        "label": "Duration",
        "question": "How many hours?",
        "type": "number",
        "placeholder": "e.g., 2",
        "required": true
      },
      "ages": {
        "label": "Ages",
        "question": "What are the players' ages? (optional)",
        "type": "text",
        "placeholder": "e.g., 7, 10, 35",
        "required": false
      }
    }
  },
  {
    "displayTitle": "30-Day Photo Challenge",
    "displayDescription": "Builds a progressive 30-day photo challenge — daily skill-stacking prompts for your camera, weekly technique tips, and milestone assignments.",
    "id": "activities-094",
    "prompt": "Act as a photography coach building a 30-day challenge with a {theme} theme, shooting on {camera}, at {dailyMinutes} minutes a day. Building toward: {photoGoal}. Every prompt must be doable close to home — the challenge dies the first time a prompt requires a special trip.\n\nWrite a specific daily prompt for all 30 days: each prompt names exactly what to shoot and the one technique or way of seeing it teaches, progressing from fundamentals (light, composition, focus) through {theme}-specific skills to creative risk-taking in week 4. Calibrate every prompt to {camera} (phone prompts use phone strengths; DSLR prompts use manual controls; film prompts respect the frame limit).\n\nAdd the weekly technique tips: one focused lesson per week matched to the prompts (week 1: seeing light; week 2: composition; week 3: {theme} craft; week 4: developing style), the milestone assignments at days 10, 20, and 30 (the bigger shoots that prove growth — including re-shooting a day-1 prompt), and the sharing or review format (the daily post ritual, the weekly cull, how to get useful feedback).\n\nInclude the motivation system: the missed-day rules, the 5-minute minimum version, and what to do when the prompts feel repetitive (the constraint-twist technique). Tie the arc to {photoGoal} so day 30 delivers visible progress toward it. Add the {photoGoal}-aligned curriculum: map each week's prompts to the goal (the portrait week for a family-portrait goal — the window-light lesson, the candid-versus-posed drill), the progression proof (the reshoot-comparison protocol for day 1 versus day 30, the contact-sheet review method), and the {camera}-specific technique tracks (the phone's portrait mode and editing apps, the DSLR's aperture-priority lessons, the film camera's thirty-six-frame discipline). Include the feedback loop (the weekly cull — keep five — the critique questions), the sharing ritual (the daily post, the hashtag, the accountability buddy), and the finale (the printed book or the mini-exhibition).\n\nA high-quality result means a stronger portfolio and sharper eyes in 30 days.",
    "description": "A coach's 30-day photo program: 30 close-to-home prompts that stack skills, weekly technique lessons, milestone re-shoots that prove growth, and a sharing ritual.",
    "category": "activities",
    "variables": {
      "theme": {
        "label": "Theme",
        "question": "What theme should the challenge have?",
        "type": "select",
        "options": [
          "Nature",
          "Street",
          "Portraits",
          "Abstract"
        ],
        "required": true
      },
      "dailyMinutes": {
        "label": "Daily Minutes",
        "question": "How many minutes per day?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      },
      "camera": {
        "label": "Camera",
        "question": "What will you shoot with?",
        "type": "select",
        "options": [
          "Phone",
          "DSLR or mirrorless",
          "Film"
        ],
        "required": true
      },
      "photoGoal": {
        "label": "Photo Goal",
        "question": "What photography skill do you want to build? (optional)",
        "type": "text",
        "placeholder": "e.g., better portraits of my family",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Micro-Adventure Planner",
    "displayDescription": "Plans a close-to-home expedition — a quest framing, mapped stops, a small packing kit, and a field log that makes it feel epic.",
    "id": "activities-095",
    "prompt": "Act as an expedition leader planning a micro-adventure near {city} that fits in {hours} hours with an {adventureType} style. Fitness and mobility notes: {fitnessNotes}. A micro-adventure works through framing — the same streets become an expedition when there is a mission, a map, and a log.\n\nGive the adventure a mission or quest framing for {adventureType}: the objective (not just 'explore' — a concrete quest like 'map every mural in the district' or 'find the city's best taco in three stops'), the stakes (what is won or proven), and the expedition name. Map the stops: 4 to 6 locations near {city} in a logical route with what to do at each, how long to spend, and how each stop advances the quest.\n\nList the small packing kit: the essentials (water, snacks, charged phone, cash), the {adventureType}-specific gear (headlamp for night adventures, appetite for food crawls), and the documentation tools. Design the field log: the format (notes, photos, sketches, ratings), what to record at each stop, and the expedition debrief questions for afterward.\n\nCalibrate everything to {fitnessNotes} (distance, terrain, accessibility, rest stops), add safety notes for {adventureType} (night adventure visibility, urban exploration boundaries and legality, nature trail preparedness), and include the 'expedition rules' that make it feel real (no phones except for the log, the team roles). Add the {fitnessNotes} route engineering: the distance-and-elevation budget, the bailout points, the rest-stop placement, the surface notes (pavement versus trail versus stairs), and the honest difficulty rating. Include the {adventureType} quest kit (the mission-briefing card, the clue envelopes, the field-journal prompts), the {city} spot research (the hidden-gem database — the murals, the viewpoints, the oddities — with addresses and hours), the team roles (the navigator, the photographer, the snack officer), and the debrief (the expedition log, the rating, the next-quest vote).\n\nA high-quality result proves adventure is a mindset, not a plane ticket.",
    "description": "An expedition leader's micro-adventure: a quest with real stakes, a mapped route, a field log format, expedition rules, and safety calibrated to your fitness.",
    "category": "activities",
    "variables": {
      "city": {
        "label": "City",
        "question": "What city are you near?",
        "type": "text",
        "placeholder": "e.g., Tempe",
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours do you have?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "adventureType": {
        "label": "Adventure Type",
        "question": "What kind of adventure?",
        "type": "select",
        "options": [
          "Urban exploration",
          "Nature",
          "Food crawl",
          "Night adventure"
        ],
        "required": true
      },
      "fitnessNotes": {
        "label": "Fitness Notes",
        "question": "Any fitness or mobility considerations? (optional)",
        "type": "textarea",
        "placeholder": "e.g., bad knee, prefer flat routes",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Learn-To-Juggle Day",
    "displayDescription": "Teaches juggling in one day — staged drills from one-ball tosses to the three-ball cascade, mistake fixes, and a week-after practice plan.",
    "id": "activities-096",
    "prompt": "Act as a juggling instructor designing a {hours}-hour learn-to-juggle day using {props}, practicing {setting}. Practice space: {practiceSpace}. Juggling is learned in stages that cannot be skipped — the day must respect the progression or it produces frustration instead of a cascade.\n\nBreak the day into stages: stage 1 — one-ball tosses (the foundation: consistent height, the scoop, catching without chasing); stage 2 — two-ball exchange (the timing that unlocks everything); stage 3 — the three-ball cascade (the flash, then 3 catches, then 6, then continuous). For each stage give the specific drills, how many successful reps signal readiness to advance, how long to spend before moving on regardless, and what to do while {setting} (solo focus cues, partner drills, group games).\n\nAdd the troubleshooting clinic for the five most common mistakes: throwing forward (the wall drill fix), uneven heights, the panic catch, balls colliding, and practicing too long without breaks — each with the diagnosis and the specific correction. Calibrate to {props} (scarves float and forgive, balls are honest, clubs come later — adjust expectations).\n\nInclude the {practiceSpace} setup (ceiling height, breakables, the over-the-bed trick for drops), the rest schedule (hands and focus fatigue are real — the work-rest rhythm), the week-after practice routines (the 10-minute daily plan that locks in the cascade), and the fun trick goals to aim for next (columns, the shower, behind the back — ordered by difficulty). Add the {practiceSpace} setup guide: the ceiling-height check, the breakables evacuation, the flooring (the drop-friendly surface), the wall-backstop trick for the two-ball stage. Include the {props}-specific technique (the scarf float timing, the ball scoop, the club spin — the first-throw drill for each), the {setting} dynamics (the solo focus blocks, the partner toss-exchange, the group cascade circle), the frustration protocol (the five-minute rule, the drop-count game that makes misses fun), and the {hours}-hour schedule (the stage timings, the break rhythm, the video-yourself checkpoints). End with the week-after plan (the ten-minute daily drill, the trick ladder).\n\nA high-quality result means ending the day with a real, if wobbly, cascade.",
    "description": "A juggling instructor's day plan: a no-skipped-stages progression with advancement criteria, five mistake fixes, practice-space setup, and a 10-minute daily lock-in routine.",
    "category": "activities",
    "variables": {
      "hours": {
        "label": "Hours",
        "question": "How many hours can you practice?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "props": {
        "label": "Props",
        "question": "What will you juggle with?",
        "type": "select",
        "options": [
          "Balls",
          "Clubs",
          "Scarves"
        ],
        "required": true
      },
      "setting": {
        "label": "Setting",
        "question": "Are you learning solo or with others?",
        "type": "select",
        "options": [
          "Solo",
          "With a friend",
          "With a group"
        ],
        "required": true
      },
      "practiceSpace": {
        "label": "Practice Space",
        "question": "Where will you practice? (optional)",
        "type": "text",
        "placeholder": "e.g., living room with high ceilings, backyard",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Magic Tricks Night",
    "displayDescription": "Teaches five magic tricks in difficulty order — step-by-step methods, performance patter, exposure-proofing, and a mini-show running order.",
    "id": "activities-097",
    "prompt": "Act as a magic coach planning a tricks night for {guests} people, at a {skillLevel} level, using {props}. Performing at: {venue}. Magic is 30 percent method and 70 percent performance — teach the tricks, but coach the showmanship harder.\n\nTeach five tricks in order of difficulty using {props}: for each give the effect (what the audience sees), the step-by-step method, the setup, and the difficulty rating. Calibrate to {skillLevel} (self-working and bold for beginners, sleight-based for advanced). For each trick add the performance coaching: the patter lines to say during each phase (write them out), where to look, how to pace the reveal, and the showmanship principle it teaches.\n\nAdd the exposure-proofing section: the common mistakes that give each trick away and how to prevent them, the angle management for {guests} people at {venue} (where to stand, what to never do), and the recovery lines for when a trick goes wrong (the professional's secret: the out that turns failure into a laugh).\n\nDesign the mini-show running order: the opener (visual, quick, establishes credibility), the middle (the interactive piece that involves the audience), the closer (the impossible one they will talk about), with transitions and the encore policy. Include practice guidance (the mirror work, the rehearsal count before performing) and the ethics note (never reveal methods to the audience). Add the {venue} staging: the performance area (the lighting, the background, the audience sightlines), the close-up versus parlor decision for {guests} people (the table-hopping option, the seated-show format), and the sound (the music cues, the mic for larger rooms). Include the {skillLevel} trick ladder (the opener that always works, the middle that builds, the closer that kills — with difficulty-matched methods), the {props} mastery (the setup checklist, the reset between tricks, the backup prop), the audience management (the volunteer selection, the heckler line, the child volunteer), and the rehearsal plan (the mirror work, the ten-run rule).\n\nA high-quality result means {guests} people questioning reality by night's end.",
    "description": "A magic coach's show plan: five difficulty-ordered tricks with written patter, angle management, mistake recovery lines, and a mini-show arc with an impossible closer.",
    "category": "activities",
    "variables": {
      "guests": {
        "label": "Guests",
        "question": "How many people are in the audience?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "skillLevel": {
        "label": "Skill Level",
        "question": "What is the performer's skill level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "props": {
        "label": "Props",
        "question": "What props will you use?",
        "type": "select",
        "options": [
          "Cards",
          "Coins",
          "Household items"
        ],
        "required": true
      },
      "venue": {
        "label": "Venue",
        "question": "Where will you perform? (optional)",
        "type": "text",
        "placeholder": "e.g., living room, backyard party",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Chess Club Starter",
    "displayDescription": "Starts a chess club that keeps members — mixed meeting formats, a simple rating ladder, a three-month improvement curriculum, and social glue.",
    "id": "activities-098",
    "prompt": "Act as a chess club founder starting a club for {members} members at a {level} level, meeting {meetingFrequency}. Meeting at: {venue}. Chess clubs die when they become either too serious (beginners flee) or too casual (improvers stagnate) — design the formats so both thrive.\n\nDesign the meeting formats in rotation: the casual play night (the social anchor), the lesson night (one concept taught well — the curriculum below), the tournament night (the competitive spike), and the special events (simuls, bughouse night, puzzle competitions). For {members} members meeting {meetingFrequency}, propose the rotation calendar and how long each format runs.\n\nBuild the three-month improvement curriculum for {level} players: month 1 fundamentals (the concepts that actually matter at this level — not opening memorization), month 2 tactics and calculation, month 3 putting it together with game review. For each month give the lesson topics, the practice assignments, and how to measure improvement.\n\nSet up the simple rating ladder: the system (challenge rules, how ratings move, the newcomer placement), and why it motivates without intimidating. Add the social glue: how to welcome total beginners (the buddy system, the handicap formats like pawn-and-move odds that make games competitive), the communication channel, and the {venue}-specific setup (boards, clocks, space). Add the {level}-calibrated programming. For beginners: the piece-movement refresher, the checkmate-pattern of the month, the no-clock casual games. For mixed: the handicap system (the odds games, the simultaneous exhibition), the mentorship pairing. For advanced: the deep-analysis sessions, the tournament prep. Include the {venue} logistics (the board-and-clock inventory, the setup diagram, the noise level), the {meetingFrequency} calendar (the three-month arc — the themes, the special events, the ladder deadlines), the {members}-person community (the chat channel, the new-member welcome, the code of conduct). End with the growth plan (the outreach, the library or school partnership).\n\nA high-quality result means month-four attendance beating month one.",
    "description": "A founder's chess club: a four-format meeting rotation, a three-month tactics-first curriculum, a friendly rating ladder, and handicap formats that welcome beginners.",
    "category": "activities",
    "variables": {
      "members": {
        "label": "Members",
        "question": "How many members?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "level": {
        "label": "Level",
        "question": "What is the average level?",
        "type": "select",
        "options": [
          "Beginner",
          "Mixed",
          "Advanced"
        ],
        "required": true
      },
      "meetingFrequency": {
        "label": "Frequency",
        "question": "How often will you meet?",
        "type": "select",
        "options": [
          "Weekly",
          "Every two weeks",
          "Monthly"
        ],
        "required": true
      },
      "venue": {
        "label": "Venue",
        "question": "Where will the club meet? (optional)",
        "type": "text",
        "placeholder": "e.g., library meeting room, coffee shop",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Astronomy Club Night",
    "displayDescription": "Hosts an astronomy club night — the best targets for your date, equipment sharing, an opening talk, and a read-aloud constellation tour.",
    "id": "activities-099",
    "prompt": "Act as an astronomy club host planning a night on {date} at {location} for {groupSize} people with {experience} experience. Telescope situation: {telescope}. A club night should feel like a guided expedition through the universe, not a parking lot with expensive tubes — structure the wonder.\n\nBuild the viewing program for {date}: the 6 to 10 best targets actually visible that night (planets, the moon's terminator features, deep-sky showpieces, any special events), each with how to find it (star-hop directions from naked-eye landmarks), what it looks like through different apertures given {telescope}, and the one mind-bending fact per target. Order them as the night's narrative: start easy and bright, build to the deep-sky showstoppers, save one jaw-dropper for late.\n\nCover the equipment reality for {experience} members: telescope and binocular basics (the 5-minute 'how to use the club scope' briefing), the sharing system for {groupSize} people around limited equipment (the viewing queue that keeps everyone engaged — the 'while you wait' activities), and red-light etiquette (the rules, why they matter, the loaner red flashlights).\n\nPlan the opening: a 15-minute talk or demo script (the night's theme, what is special about this sky, the scale-setting exercise), then the constellation tour script written to read aloud (the stories behind the patterns, the pointer stars, audience participation moments). Add the logistics: arrival and setup timing, warmth and comfort, the cloud backup plan, and how to end the night (the final target, the group photo attempt). Add the {date}-specific sky program: the moon phase and rise/set times, the planet visibility, the deep-sky showpieces for the season, any ISS or satellite passes, the meteor-shower status — each with find-it directions and the best viewing time. Include the {telescope} equipment plan (the setup order, the alignment procedure, the eyepiece progression, the sharing rotation for {groupSize} people), the {experience} talk track (the beginner constellation tour, the intermediate star-hop challenges, the advanced imaging tips), the {location} site prep (the arrival time, the red-light rule, the power needs), and the cloudy-night backup program.\n\nA high-quality result means members leave feeling the universe got bigger.",
    "description": "A club host's astronomy night: a narrative-ordered target list with star-hop directions, an equipment-sharing system, a read-aloud constellation tour, and an opening talk script.",
    "category": "activities",
    "variables": {
      "date": {
        "label": "Date",
        "question": "What night is it?",
        "type": "date",
        "required": true
      },
      "location": {
        "label": "Location",
        "question": "Where will you observe?",
        "type": "text",
        "placeholder": "e.g., the desert pullout on Route 87",
        "required": true
      },
      "groupSize": {
        "label": "Group Size",
        "question": "How many people are coming?",
        "type": "number",
        "placeholder": "e.g., 10",
        "required": true
      },
      "experience": {
        "label": "Experience",
        "question": "What is the group's experience?",
        "type": "select",
        "options": [
          "Beginner",
          "Some experience",
          "Experienced"
        ],
        "required": true
      },
      "telescope": {
        "label": "Telescope Access",
        "question": "What telescopes or binoculars will be available? (optional)",
        "type": "textarea",
        "placeholder": "e.g., one 8-inch dobsonian, a few binoculars",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Nature Journaling Outing",
    "displayDescription": "Guides a nature journaling outing — noticing-sharpening prompts, sketching for non-artists, a page layout template, and a sit-spot practice.",
    "id": "activities-100",
    "prompt": "Act as a nature journaling guide for a {hours}-hour outing at {location}, focused on {focus}. Drawing experience: {drawingExperience}. Nature journaling is 90 percent noticing and 10 percent drawing — the outing must train attention first, with sketching as the tool that forces you to look longer.\n\nDesign the outing flow for {hours} hours: the arrival warm-up (the 5-minute sensory inventory that switches the brain into noticing mode), 2 to 3 guided observation stops tied to {focus} at {location}, the sit-spot exercise for deep observation (how to choose the spot, the 20-minute protocol: 5 minutes just sitting, 10 minutes observing one thing, 5 minutes recording), and the closing share circle.\n\nProvide the observation prompts that sharpen noticing: the 'I notice, I wonder, it reminds me of' framework with {focus}-specific examples, the comparison prompts (this leaf versus that leaf), the scale prompts (the tiny world, the landscape), and the questions that turn looking into curiosity. Teach the simple sketching techniques for non-artists calibrated to {drawingExperience}: the contour line, the thumbnail sketch, mapping versus drawing, and how to record what you cannot draw (the written snapshot, the color swatch, the measurement).\n\nGive the page layout template for entries (the labeled sections: date, place, weather, observations, sketches, questions), the packing list (journal type, pencils versus pens, the sit-upon, layers), and the habit plan: how to keep journaling afterward (the weekly sit-spot, the 10-minute daily note, joining the community). Add the {focus}-specific prompt banks. For plants: the leaf-architecture study, the life-cycle tracking, the bark-rubbing technique. For birds: the behavior-first notes, the song mnemonics, the flight-pattern sketches. For landscapes: the thumbnail value studies, the weather journaling, the seasonal-change tracking. Include the {drawingExperience} scaffolding (the absolute-beginner shape drills, the contour exercises, the \"draw the negative space\" trick), the {location} site guide (the best spots, the sit-spot selection, the seasonal highlights), the {hours}-hour flow (the warm-up, the deep dive, the share), and the kit list (the journal, the pens, the sit-upon).\n\nA high-quality result means participants never walk past nature the same way again.",
    "description": "A guide's journaling outing: attention-training observation prompts, non-artist sketching techniques, a page template, a sit-spot protocol, and a keep-going habit plan.",
    "category": "activities",
    "variables": {
      "location": {
        "label": "Location",
        "question": "Where will the outing be?",
        "type": "text",
        "placeholder": "e.g., the botanical garden",
        "required": true
      },
      "hours": {
        "label": "Hours",
        "question": "How many hours?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "focus": {
        "label": "Focus",
        "question": "What should the journaling focus on?",
        "type": "select",
        "options": [
          "Plants",
          "Birds",
          "Landscapes",
          "All of nature"
        ],
        "required": true
      },
      "drawingExperience": {
        "label": "Drawing Experience",
        "question": "How would you describe your drawing experience? (optional)",
        "type": "select",
        "options": [
          "I cannot draw at all",
          "A little experience",
          "Comfortable sketching"
        ],
        "required": false
      }
    }
  }
];