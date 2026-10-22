import type { PromptSchema } from "../types";

export const shoppingPrompts: PromptSchema[] = [
  {
    "displayTitle": "Product Research Brief",
    "displayDescription": "A deep-dive research brief on any product category: specs that matter versus marketing fluff, real owner feedback themes, price anchors, red flags, and a buy-now-or-wait verdict.",
    "id": "shopping-001",
    "prompt": "Act as a personal product research advisor helping me decide what to buy in the {product} category, not just whether to buy one. My rough budget is {budget_limit}, my buying timeline is {decision_timeline}, and here is how I will actually use it: {use_context}.\n\nStructure your research brief in five parts. First, a category overview: what products in this category really do, the main types or subcategories on the market, and which type fits my use context best. Cut through the marketing names and explain what actually differs between the types in real use.\n\nSecond, a specs-that-matter breakdown: which features and specifications genuinely affect real-world performance and longevity, versus which are marketing fluff or numbers that don't translate into noticeable differences. Include typical price anchors for entry, mid-range, and premium tiers, and note where the sweet spot of value usually sits.\n\nThird, real owner feedback themes: the pros owners consistently praise after months of ownership, the recurring cons and complaints, and known reliability patterns or quality-control lotteries. Fourth, a smart-buyer section: what to verify before buying (trial periods, return windows, warranty length and what it actually covers, support quality), red flags that signal a bad product or listing, dealbreaker issues to watch for, and whether now is a good time to buy or worth waiting for a seasonal sale.\n\nFinish with a decision framework: five self-diagnostic questions tied directly to my use context that I should answer for myself, then a clear recommendation \u2014 buy now, wait, or skip \u2014 with your reasoning. Be concrete enough that I could act on this brief today without doing more research.\n\nFinally, ground the brief in my reality: note which specs and features matter most for my stated use context and which I can safely ignore, flag any accessory or companion purchases the category usually requires (and whether they are truly necessary), and call out household factors \u2014 noise, size, storage, other people affected \u2014 that I should weigh. Keep every claim practical and decision-relevant: I should finish reading knowing exactly what to buy, what to avoid, and what to do next.",
    "description": "Tell the AI the product, your budget, timeline, and real use case; get back a structured brief with what to verify, dealbreakers, and a clear decision framework.",
    "category": "shopping",
    "variables": {
      "product": {
        "label": "Product",
        "question": "What product do you want researched?",
        "type": "text",
        "placeholder": "e.g., Robot Vacuum",
        "required": true
      },
      "budget_limit": {
        "label": "Budget Limit",
        "question": "What is your rough budget for this purchase?",
        "type": "number",
        "placeholder": "e.g., 500",
        "required": false
      },
      "use_context": {
        "label": "Use Context",
        "question": "How and where will you actually use this?",
        "type": "textarea",
        "placeholder": "e.g., Daily 5-mile city commute, some light off-road trails",
        "required": true
      },
      "decision_timeline": {
        "label": "Timeline",
        "question": "When are you planning to buy?",
        "type": "select",
        "options": [
          "Buying this week",
          "Buying this month",
          "Researching for a future purchase"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Side-by-Side Comparison",
    "displayDescription": "A head-to-head comparison built around your budget, top priority, real use case, and existing devices \u2014 with a table, total cost of ownership, and a clear winner.",
    "id": "shopping-002",
    "prompt": "Compare {product_a} and {product_b} head to head for a buyer with a hard budget cap of {budget} whose top priority is {priority}. My primary use case is: {use_case}. These are the devices and ecosystem the product must work with: {existing_devices}.\n\nStart with price reality: current street prices for each, how often each goes on sale, typical sale prices, and whether either ever dips under my budget at a trustworthy retailer. Then build a side-by-side comparison table covering price, key features, real-world performance, build quality and materials, battery life or operating costs where relevant, warranty length and terms, customer support quality, and software or app experience.\n\nGo deeper than spec sheets. Evaluate how each performs for MY use case specifically \u2014 not general benchmarks \u2014 including any known quirks, bugs, or limitations owners report. Assess long-term durability: common failure modes, repairability, parts availability, and how each holds up after a year or more. Compare total cost of ownership: required accessories, subscriptions, consumables, and resale value. Check compatibility with my ecosystem and flag anything that would be annoying to live with daily.\n\nThen give a verdict section written explicitly for a buyer whose top priority is {priority}: name the winner, state the two decisive reasons, and describe the runner-up's one scenario where it would still be the better pick. Add a tiebreaker: one real-world test, demo, or question I can use to confirm the choice for myself. End with dealbreaker flags \u2014 any issue with either product that should disqualify it for someone with my use case or ecosystem.\n\nAlso tell me how to sanity-check the verdict myself: which review sources to trust for this category, what patterns in one-star reviews should concern me versus what is normal noise, and where to buy each product so the return policy and price protection work in my favor. If my budget is tight, identify which features I could give up with the least regret, and whether a certified refurbished or previous-generation model is a smart fallback.",
    "description": "Compare two products with your budget cap and priority; get a side-by-side table, durability and cost analysis, dealbreaker flags, and a verdict matched to your needs.",
    "category": "shopping",
    "variables": {
      "product_a": {
        "label": "First Product",
        "question": "What is the first product to compare?",
        "type": "text",
        "placeholder": "e.g., Sony WH-1000XM5",
        "required": true
      },
      "product_b": {
        "label": "Second Product",
        "question": "What is the second product to compare?",
        "type": "text",
        "placeholder": "e.g., Bose QuietComfort 45",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 400",
        "required": true
      },
      "priority": {
        "label": "Top Priority",
        "question": "What matters most to you?",
        "type": "select",
        "options": [
          "Lowest price",
          "Best performance",
          "Best durability",
          "Easiest to use"
        ],
        "required": true
      },
      "use_case": {
        "label": "Use Case",
        "question": "What is your primary use case for this product?",
        "type": "textarea",
        "placeholder": "e.g., Working in a noisy open office 8 hours a day",
        "required": true
      },
      "existing_devices": {
        "label": "Existing Devices",
        "question": "What devices or ecosystem must it work with?",
        "type": "text",
        "placeholder": "e.g., iPhone, Windows laptop, Google Home",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Honest Pros and Cons",
    "displayDescription": "A brutally honest pros-and-cons breakdown weighted to your usage pattern, budget, and how long you need it to last \u2014 with dealbreaker screening and a buy-or-pass verdict.",
    "id": "shopping-003",
    "prompt": "Give me a brutally honest pros-and-cons breakdown of {product} \u2014 I want the truth a friend would give, not a sales pitch. My usage pattern will be: {usage_pattern}. My budget ceiling is {price_paid_or_budget}, and I expect it to last {ownership_horizon}.\n\nList at least six pros grounded in what long-term owners consistently praise: things that hold up after months of real use, not first-week impressions. Then list at least six cons drawn from recurring owner complaints: annoyances, hidden costs, design compromises, things reviewers glossed over. Weigh the severity of each con against my usage pattern \u2014 a minor flaw for a casual user can be a dealbreaker for a heavy one, so call that out explicitly.\n\nDedicate a section to dealbreaker screening: known reliability failures or defect patterns, warranty and customer-support quality, whether the product is headed toward obsolescence, mandatory subscriptions or app dependence, and any safety or privacy concerns. Flag anything here in plain language \u2014 do not bury the red flags.\n\nThen do buyer matching: describe the exact buyer this product is perfect for (usage habits, expectations, budget), and the buyer who should avoid it and why, referencing my usage pattern directly. Finish with a clear verdict for my situation \u2014 buy, consider only on sale, or pass \u2014 plus the one thing I would most regret not knowing before buying, and the best alternative to look at if I pass.\n\nTo keep me from buying blind, triangulate your assessment: summarize what professional reviewers agree on, what long-term owners on forums and retail sites agree on, and where the two disagree \u2014 and explain why. If the product has a strong competitor, or a previous generation that owners say was better, name it and explain the tradeoff. Finally, give me a short in-store or at-home inspection checklist: the three things to test, look at, or ask about before committing, so I can verify your conclusions firsthand.",
    "description": "Pick a product and describe how you'll use it; get six-plus honest pros and cons, reliability red flags, buyer matching, and a clear verdict for your situation.",
    "category": "shopping",
    "variables": {
      "product": {
        "label": "Product",
        "question": "Which product should I analyze?",
        "type": "text",
        "placeholder": "e.g., Dyson V15 Detect",
        "required": true
      },
      "usage_pattern": {
        "label": "Usage Pattern",
        "question": "How will you actually use this product?",
        "type": "textarea",
        "placeholder": "e.g., Daily gym use, about an hour each morning",
        "required": true
      },
      "price_paid_or_budget": {
        "label": "Budget Ceiling",
        "question": "What is your budget ceiling for this purchase?",
        "type": "number",
        "placeholder": "e.g., 250",
        "required": false
      },
      "ownership_horizon": {
        "label": "Ownership Horizon",
        "question": "How long do you need it to last?",
        "type": "select",
        "options": [
          "1-2 years",
          "3-5 years",
          "5+ years"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Best Budget Pick Finder",
    "displayDescription": "Hunts the best value pick in any category under your budget \u2014 where budget models cut corners, whether those cuts matter for you, and how not to buy a dud.",
    "id": "shopping-004",
    "prompt": "Find the best budget-friendly {product_category} under {budget}. My main use case is: {use_case}. Features I absolutely must have: {must_have_features}. My buying timeline is: {buying_timeline}.\n\nCompare three to four affordable options that genuinely fit my budget \u2014 no bait-and-switch picks that are always out of stock or only cheap in a stripped-down variant. For each option, give the model name, current price, and a short honest profile: its strengths, its single biggest weakness, and exactly where it cuts corners versus premium models. Then connect those corners to MY use case: does the cheaper motor, smaller capacity, shorter battery, or flimsier build actually matter for how I will use it, or is it a compromise I can live with?\n\nRecommend one best-value pick for my use case and explain the decisive reasoning in two or three sentences. Include a don't-get-a-dud pre-purchase checklist: what review patterns to look for (for example, what ratio of one-star complaints about the same defect counts as a warning), whether new, refurbished, or open-box is the smarter buy in this category, warranty coverage to insist on, and where to buy so the return policy protects me. Name one or two cheap options to actively avoid and why.\n\nFinally, advise on timing: given my timeline, is it worth waiting for a seasonal sale, and is there a price point slightly above my budget where quality jumps enough to be worth stretching?\n\nSince I am shopping at the budget end, be specific about the traps in this category: the brand-name tax versus genuine quality, models that look identical but differ by retailer, warranty fine print that guts the coverage on cheap models, and 'too cheap to be true' listings that signal refurbs sold as new. If certified refurbished or open-box is genuinely the smart play here, explain which sellers to trust and what the return window should be. Close with a ranked shortlist: first choice, the runner-up to grab if the first is out of stock, and the one to avoid at all costs.",
    "description": "Name a category, budget, use case, and must-have features; get 3\u20134 honest budget options, a best-value recommendation, and a pre-purchase checklist.",
    "category": "shopping",
    "variables": {
      "product_category": {
        "label": "Category",
        "question": "What category are you shopping in?",
        "type": "text",
        "placeholder": "e.g., Air Fryer",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your maximum budget?",
        "type": "number",
        "placeholder": "e.g., 150",
        "required": true
      },
      "use_case": {
        "label": "Use Case",
        "question": "How will you mainly use it?",
        "type": "text",
        "placeholder": "e.g., Quick weeknight dinners for two",
        "required": true
      },
      "must_have_features": {
        "label": "Must-Have Features",
        "question": "What features are non-negotiable for you?",
        "type": "textarea",
        "placeholder": "e.g., Must have app control and auto-shutoff",
        "required": true
      },
      "buying_timeline": {
        "label": "Buying Timeline",
        "question": "How soon are you buying?",
        "type": "select",
        "options": [
          "This week",
          "This month",
          "Can wait for a sale"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Gift Finder by Recipient",
    "displayDescription": "Personalized gift ideas matched to the recipient's interests, age, and past reactions \u2014 ten specific picks across three price tiers, ranked by thoughtfulness-per-dollar.",
    "id": "shopping-005",
    "prompt": "Suggest gift ideas for {recipient} who is into {interests}. Their approximate age and life stage: {age_or_stage}. How they have reacted to gifts in the past: {past_gifts_reaction}. Things to avoid: {avoids}. My budget is {budget}.\n\nGive me ten specific gift suggestions \u2014 named products, brands, or experiences, not vague categories like 'something for hikers.' Spread them across three price tiers that all fit under my budget: a few thoughtful picks under a third of the budget, mid-range options, and one or two near the top of the budget for maximum impact. For each suggestion, state what it is, its approximate price, and why it fits THIS specific person \u2014 tie it to an interest, a past reaction, or something about their life stage. Prioritize thoughtful and unique over generic: a $25 item that clearly shows I know them beats a $60 generic one.\n\nInclude a short avoid list: gifts that seem right for someone with these interests but would miss the mark, with the reason why. Consider practical constraints like whether they have space for it, whether it is consumable, and whether it creates an obligation for them. Finish with your top three picks ranked by thoughtfulness-per-dollar, and give me one presentation tip for your number-one pick \u2014 how to wrap it, what to write in the card, or when to give it \u2014 so it lands as more than the price tag suggests.\n\nMake the list feel personal by connecting at least half the picks to something specific I told you about them \u2014 an interest, a habit, or a life-stage detail \u2014 and say what the connection is, so I understand the reasoning and can riff on it. Include one 'stretch' idea slightly above my budget that would be worth it if I can find it on sale or secondhand, and one zero-cost or nearly-free pairing idea (a note, a playlist, a home-cooked meal) that elevates any of the picks. If any suggestion needs sizing, personalization, or lead time, flag that explicitly so I do not get caught short.",
    "description": "Describe the recipient, their interests, and your budget; get ten specific, non-generic gift ideas with prices, an avoid list, and a presentation tip.",
    "category": "shopping",
    "variables": {
      "recipient": {
        "label": "Recipient",
        "question": "Who is the gift for?",
        "type": "text",
        "placeholder": "e.g., My sister",
        "required": true
      },
      "interests": {
        "label": "Interests",
        "question": "What are they into?",
        "type": "textarea",
        "placeholder": "e.g., Hiking, watercolor painting, true crime podcasts",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your gift budget?",
        "type": "number",
        "placeholder": "e.g., 75",
        "required": true
      },
      "age_or_stage": {
        "label": "Age / Life Stage",
        "question": "Roughly what age or life stage are they in?",
        "type": "text",
        "placeholder": "e.g., Late 20s, new parent",
        "required": false
      },
      "past_gifts_reaction": {
        "label": "Past Gift Reactions",
        "question": "How have they reacted to gifts in the past?",
        "type": "textarea",
        "placeholder": "e.g., Loved the handmade photo album, never used the gadget",
        "required": false
      },
      "avoids": {
        "label": "Things to Avoid",
        "question": "Anything to steer clear of for this person?",
        "type": "textarea",
        "placeholder": "e.g., No scented products, no alcohol",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Gift Finder by Occasion",
    "displayDescription": "Occasion-ready gift ideas with etiquette rules and hard order-by deadlines worked backward from your date \u2014 plus local or digital pivots if time is short.",
    "id": "shopping-006",
    "prompt": "Help me find a gift for a {occasion} happening on {date}. The recipient is my {relationship}, and I want to spend about {budget}. Here is what I know about their personality and tastes: {recipient_personality}. Practical constraints to respect: {gift_constraints}.\n\nSuggest eight specific, occasion-appropriate gift ideas \u2014 named products or experiences with approximate prices that fit my budget. Make sure the mix includes one safe classic that always works for this occasion, one thoughtful or unexpected pick tailored to their personality, and one experience-based option. For each, explain briefly why it suits both the occasion and this person, and note anything that would make it hard to pull off in time.\n\nCover the etiquette rules for this occasion: typical spending norms for my relationship to the recipient, whether gifts are expected to be wrapped or presented a certain way, group-gift norms, and common faux pas to avoid. Then work backward from {date} and give me hard timing deadlines: the last day to order with standard shipping, with expedited shipping, and for anything handmade or personalized that needs lead time. If the date is too close for shipping, pivot at least three of the suggestions to things I can get locally, print, or arrange digitally. End with your recommended pick and a concrete plan for getting it to them on time.\n\nGiven the budget, show me how the money stretches: for at least two suggestions, note a budget version and a splurge version and what the extra spend actually buys in terms of impact. If the occasion involves other givers \u2014 group gifts, registries, or plus-ones \u2014 explain how to coordinate without overstepping. Finally, give me a fallback plan: the single best option if I have to buy something in person within 24 hours of the date, including where to find it and how to present it so it still feels intentional rather than last-minute.",
    "description": "Name the occasion, date, relationship, and budget; get eight specific ideas, etiquette guidance, shipping deadlines, and a plan to get it there on time.",
    "category": "shopping",
    "variables": {
      "occasion": {
        "label": "Occasion",
        "question": "What is the occasion?",
        "type": "text",
        "placeholder": "e.g., Housewarming party",
        "required": true
      },
      "date": {
        "label": "Date",
        "question": "When is the occasion?",
        "type": "date",
        "required": true
      },
      "relationship": {
        "label": "Relationship",
        "question": "What is your relationship to the recipient?",
        "type": "text",
        "placeholder": "e.g., Close friend",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your gift budget?",
        "type": "number",
        "placeholder": "e.g., 50",
        "required": true
      },
      "recipient_personality": {
        "label": "Recipient's Tastes",
        "question": "What is their personality and taste like?",
        "type": "textarea",
        "placeholder": "e.g., Practical minimalist who values experiences over things",
        "required": true
      },
      "gift_constraints": {
        "label": "Constraints",
        "question": "Any practical constraints (space, allergies, travel, etc.)?",
        "type": "textarea",
        "placeholder": "e.g., Small apartment, nut allergy",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Gift Finder Under Budget",
    "displayDescription": "Stretches a fixed gift budget for maximum perceived value \u2014 single standout gift versus a smart bundle, with presentation tricks that make it feel generous.",
    "id": "shopping-007",
    "prompt": "I have exactly {budget} to spend on a gift for {recipient}. They are into: {interests}. The occasion is: {occasion}.\n\nFind the best possible gift or gift combination at exactly this price point \u2014 my goal is maximum perceived value per dollar. Compare two strategies head to head: one standout single gift versus a small bundled combination, and recommend the stronger approach for this recipient and occasion, with your reasoning. If the bundle wins, show the exact budget split across two to four items, each named and priced.\n\nWhatever you recommend, include presentation advice so a modest budget feels generous: wrapping, a handwritten card, pairing the gift with an experience like cooking a meal together, and timing the moment. Also include an avoid list \u2014 the kinds of items that look cheap or thoughtless at this price point even though they fit the budget \u2014 and steer me toward items where the money goes into quality rather than packaging or branding.\n\nFinish with a concrete shopping plan: the exact item or items to buy, where to get them (store or site names), and the final total so I can see it lands at or just under {budget}. Make sure at least one suggestion feels personal to their interests, not just the safest generic option at that price.\n\nIf the budget is tight, show me how to punch above it honestly: a DIY or handmade element that adds real personal value, a thrifted or refurbished find that beats anything new at this price, or a small experience paired with a token gift. Warn me about the presentation mistakes that make a small gift feel smaller \u2014 skimping on wrapping, giving it late, or apologizing for the price. End with a quick confidence check: in two sentences, tell me why this gift will land well for this specific person, so I can give it without second-guessing.",
    "description": "Set an exact budget and describe the recipient; get a single-gift vs. bundle strategy, a budget split, an avoid list, and a concrete shopping plan.",
    "category": "shopping",
    "variables": {
      "budget": {
        "label": "Budget",
        "question": "What is your exact gift budget?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      },
      "recipient": {
        "label": "Recipient",
        "question": "Who is the gift for?",
        "type": "text",
        "placeholder": "e.g., My coworker",
        "required": true
      },
      "interests": {
        "label": "Their Interests",
        "question": "What are they into?",
        "type": "textarea",
        "placeholder": "e.g., Coffee, retro video games, trail running",
        "required": true
      },
      "occasion": {
        "label": "Occasion",
        "question": "What is the occasion?",
        "type": "text",
        "placeholder": "e.g., Birthday",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Grocery List From Meal Plan",
    "displayDescription": "Converts any meal plan into a store-ordered grocery list with quantities scaled to your servings, duplicates merged, and a pantry-check section so you don't double-buy.",
    "id": "shopping-008",
    "prompt": "Turn this meal plan into an organized, ready-to-shop grocery list: {meal_plan}. I am cooking for {servings} servings. My preferred store is: {preferred_store}. Pantry check setting: {pantry_check} \u2014 if true, identify staples I very likely already have at home (cooking oils, salt, pepper, common spices, flour, sugar) and list them in a separate 'check your pantry first' section rather than adding them to the buy list.\n\nGroup everything I need to buy by store section \u2014 produce, dairy and eggs, meat and seafood, bakery, pantry and dry goods, frozen, and spices and condiments \u2014 so I can move through the store in order. Combine duplicate ingredients across meals into single line items with total quantities, and scale every quantity to {servings} servings; where the plan is vague (for example 'some cheese'), give a sensible estimated amount. Note any item where the exact amount depends on a choice I am making, such as protein portions, and give a default.\n\nAdd a short 'verify before you buy' list of things people commonly already own (butter, soy sauce, garlic) so I do not double-buy. If I named a preferred store, note any items that might be hard to find there and suggest a swap. Keep the final list clean and copy-ready: quantities first, no commentary inline, with the pantry-check section at the bottom.\n\nSince the plan covers multiple days, add a short 'cook once, use twice' note: ingredients that should be prepped in bulk (chopped veg, grains, marinated proteins) and meals where leftovers intentionally become another meal's component. Also flag any meal whose ingredients are perishable enough that I should shop mid-week if I cannot cook it early \u2014 mark those with a simple asterisk and a one-line note. Keep the annotations brief so the list stays scannable, and make sure quantities still reflect the full {servings} servings for the week.",
    "description": "Paste a meal plan and set your servings; get a clean, copy-ready list grouped by store section with a 'check your pantry first' section.",
    "category": "shopping",
    "variables": {
      "meal_plan": {
        "label": "Meal Plan",
        "question": "Paste your meal plan:",
        "type": "textarea",
        "placeholder": "e.g., Mon: chicken stir fry, Tue: tacos...",
        "required": true
      },
      "servings": {
        "label": "Servings",
        "question": "How many servings are you cooking for?",
        "type": "number",
        "placeholder": "e.g., 2",
        "required": true
      },
      "preferred_store": {
        "label": "Preferred Store",
        "question": "Where do you usually shop?",
        "type": "text",
        "placeholder": "e.g., Trader Joe's",
        "required": false
      },
      "pantry_check": {
        "label": "Pantry Check",
        "question": "Should I flag pantry staples you might already have?",
        "type": "boolean",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Pantry Staples List",
    "displayDescription": "A complete shelf-stable pantry list sized to your household, diet, and cooking frequency \u2014 organized by category with quantities and a restock priority order.",
    "id": "shopping-009",
    "prompt": "Build a complete pantry staples shopping list for a {household_size}-person household that follows a {dietary} diet and cooks {cooking_frequency}. Our kitchen and storage space is: {kitchen_space}. The cuisines we lean toward: {cuisine_style}. Budget cap: {budget_cap}.\n\nOrganize the list by category: grains and carbs, proteins and legumes, canned and jarred goods, oils and vinegars, spices and seasonings, baking basics, and condiments and sauces. Give rough quantities for each item, sized for {household_size} people cooking {cooking_frequency} \u2014 be realistic, not aspirational. Skip anything perishable entirely; this list should be shelf-stable or long-lasting only. Respect the dietary pattern strictly throughout: no dairy-based items if dairy-free, no gluten if gluten-free, and so on.\n\nFavor the workhorse ingredients that unlock the most meals per dollar, and weight the list toward our cuisine style where it makes sense. Respect the storage-space constraint: no bulk ten-pound bags for a small kitchen, and no duplicates of things that do the same job. End with a restock priority order \u2014 the ten items to buy first if I cannot get everything in one trip \u2014 plus brief storage tips (what needs airtight containers, what to keep away from heat) that keep staples fresh longest.\n\nSince diets and cuisines vary so much, tailor the spice and seasoning section to our cuisine style and the dietary pattern \u2014 the five seasonings that will do the most work for us \u2014 and note one or two specialty items worth seeking out rather than settling for the generic version. Advise on buying strategy: which categories are worth buying in bulk or store-brand to save money, and which are worth the name brand or the better grade. Finally, include a 'do not buy yet' list: staples that look essential on generic lists but go stale before a household of our size and cooking frequency would ever use them.",
    "description": "Give your household size, diet, and cooking frequency; get a categorized pantry list with realistic quantities, workhorse picks, and storage tips.",
    "category": "shopping",
    "variables": {
      "household_size": {
        "label": "Household Size",
        "question": "How many people are in your household?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "dietary": {
        "label": "Diet",
        "question": "Any dietary pattern to follow?",
        "type": "select",
        "options": [
          "No restrictions",
          "Vegetarian",
          "Vegan",
          "Gluten-free",
          "Dairy-free",
          "Keto"
        ],
        "required": true
      },
      "cooking_frequency": {
        "label": "Cooking Frequency",
        "question": "How often do you cook?",
        "type": "select",
        "options": [
          "Daily",
          "A few times a week",
          "Weekends only"
        ],
        "required": true
      },
      "kitchen_space": {
        "label": "Kitchen Space",
        "question": "How much pantry storage space do you have?",
        "type": "select",
        "options": [
          "Small / limited storage",
          "Average",
          "Large pantry"
        ],
        "required": true
      },
      "budget_cap": {
        "label": "Budget Cap",
        "question": "Any budget cap for stocking the pantry?",
        "type": "number",
        "placeholder": "e.g., 150",
        "required": false
      },
      "cuisine_style": {
        "label": "Cuisine Style",
        "question": "What cuisines do you lean toward?",
        "type": "text",
        "placeholder": "e.g., Italian and Mexican",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Weekly Meal-Plan Groceries",
    "displayDescription": "A full 7-day meal plan plus shopping list that stays inside your grocery budget \u2014 ingredients repeat to cut waste, every meal fits your time limit and diet.",
    "id": "shopping-010",
    "prompt": "Create a 7-day meal plan for a {diet} diet covering {meals_per_day} meals per day for a household of {household_size}, with a weekly grocery budget of {budget}. I can spend {cooking_time} on each meal. Extra dietary notes: {dietary_notes}.\n\nDesign the week so ingredients repeat across meals to cut waste and cost \u2014 plan proteins, produce, and grains so each appears at least twice. Show the plan day by day with named meals for each slot, and keep prep realistic for my cooking-time limit: every meal should be genuinely doable within {cooking_time}, and note any component that can be batch-cooked once and reused (rice, grilled chicken, roasted vegetables). Respect the diet strictly and incorporate the dietary notes.\n\nThen generate the complete shopping list: grouped by store section (produce, dairy and eggs, meat and seafood, pantry, frozen), with estimated quantities scaled to {household_size} people and an estimated cost per line. Total it up and stay within {budget} \u2014 if something does not fit, swap it and say what changed. Include two or three flexible swap options per meal slot so I can adjust for cravings or what is on sale. End with the estimated grand total, flag which meals or ingredients drive the cost most, and give one money-saving swap that would bring the total down further without breaking the diet or the time limit.\n\nMake the plan genuinely cookable by including a short Sunday-prep session: the 60 to 90 minutes of batch work (grains, proteins, washed and chopped produce, sauces) that makes the weekday meals fast, with an ordered task list. Note storage guidance for prepped components \u2014 what keeps, what does not, and for how long. Finally, add a midweek freshness check: which meals to front-load because their produce will not last, and which meals are flexible enough to slide to the end of the week without quality loss.",
    "description": "Set diet, meals per day, household size, and budget; get a week of named meals, a section-grouped shopping list with costs, swaps, and a total.",
    "category": "shopping",
    "variables": {
      "diet": {
        "label": "Diet",
        "question": "What diet should the meal plan follow?",
        "type": "select",
        "options": [
          "No restrictions",
          "Vegetarian",
          "Vegan",
          "High-protein",
          "Low-carb",
          "Mediterranean"
        ],
        "required": true
      },
      "meals_per_day": {
        "label": "Meals Per Day",
        "question": "How many meals per day should it cover?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "budget": {
        "label": "Grocery Budget",
        "question": "What is your weekly grocery budget?",
        "type": "number",
        "placeholder": "e.g., 120",
        "required": true
      },
      "household_size": {
        "label": "Household Size",
        "question": "How many people are you cooking for?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "cooking_time": {
        "label": "Time Per Meal",
        "question": "How much time can you spend per meal?",
        "type": "select",
        "options": [
          "Under 20 minutes",
          "20-40 minutes",
          "No time limit"
        ],
        "required": true
      },
      "dietary_notes": {
        "label": "Dietary Notes",
        "question": "Any extra dietary notes or dislikes?",
        "type": "textarea",
        "placeholder": "e.g., One person dislikes mushrooms",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Price Comparison Worksheet",
    "displayDescription": "Side-by-side price worksheet across sellers with true total costs, fees, and a clear cheapest-pick highlight.",
    "id": "shopping-011",
    "prompt": "I am buying {product} and need to compare {quantity} different sellers or options side by side before I spend anything. My hard budget cap is {budget}, so every option must be judged on true out-the-door cost, not the advertised sticker price.\n\nFirst, briefly restate the exact product, including the specific model, size, or configuration if my description is ambiguous, and note any assumptions you are making. Then build the comparison worksheet as a table with one row per option and columns for: seller name, base price, shipping or pickup cost, estimated tax, warranty or protection-plan cost, required accessories or extra fees, estimated delivery or pickup time, return window and restocking-fee policy, and total out-the-door cost.\n\nPull in a realistic mix of sellers: the manufacturer's own store, major national retailers, marketplace sellers, and at least one warehouse club or local retailer option where relevant, since prices and policies vary widely. Whether to include refurbished or open-box rows: {include_refurbished} \u2014 if yes, give those rows their own clearly labeled section so they do not get confused with new-unit prices. Rank the options by total cost and clearly highlight the row that is the true cheapest once every fee is counted, which is often not the one with the lowest sticker price.\n\nFor each option at or near my {budget} cap, flag whether it fits the cap and call out what I would sacrifice to make it fit. Add a short 'hidden cost watch' note for each option: things buyers of {product} commonly overlook, such as required memberships, installation or setup fees, accessory bundles that are actually mandatory, or shipping surcharges for oversized items. End with a short verdict: the single best option for value, one risk or catch on that option to double-check before checkout, and concrete next steps \u2014 what to verify with the seller (stock status, price-match policy, coupon stacking, final delivery date) so I can complete the purchase confidently by {deadline}.",
    "description": "Compares multiple sellers for one product with full out-the-door cost tables, budget filtering, and a confident final pick.",
    "category": "shopping",
    "variables": {
      "product": {
        "label": "Product",
        "question": "What are you buying?",
        "type": "text",
        "placeholder": "e.g., KitchenAid Stand Mixer",
        "required": true
      },
      "quantity": {
        "label": "Number of Options",
        "question": "How many sellers or options should it compare?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "budget": {
        "label": "Budget Cap",
        "question": "What is your budget cap?",
        "type": "number",
        "placeholder": "e.g., 400",
        "required": true
      },
      "deadline": {
        "label": "Purchase Deadline",
        "question": "When do you need it by?",
        "type": "text",
        "placeholder": "e.g., End of November",
        "required": false
      },
      "include_refurbished": {
        "label": "Include Refurbished/Open-Box",
        "question": "Should refurbished or open-box options be included in the comparison?",
        "type": "boolean",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Buy Now or Wait Advisor",
    "displayDescription": "Buy-now-or-wait verdict with sale-cycle analysis, price-drop odds, and a target price and decision date.",
    "id": "shopping-012",
    "prompt": "I am considering buying {product} and want a straight answer: buy it now or wait. I currently see it listed at {current_price}, and I need to make my final decision by {deadline}.\n\nStart by placing this product in its category's sales calendar: map out the predictable sale windows (holiday season, Prime Day-style events, back-to-school, end-of-quarter clearances, and category-specific cycles like spring TV drops or fall phone launches), and say where today sits on that timeline. Then research the product's release cadence \u2014 when the current model launched, when a successor or refresh is realistically expected, and whether buying now means getting a discounted outgoing model or an overpriced late-cycle one.\n\nWeigh the two risks against each other: the chance of a meaningful price drop (how large, and how likely, with a target price I should watch for) versus the risk of stock problems, price increases, or scarcity that make waiting costly. Factor in my {deadline} \u2014 if it falls before the next likely sale, that changes the math.\n\nAlso consider the cost of waiting itself: if I need {product} for work, school, or a trip before {deadline}, a slightly higher price now may beat a discount that arrives too late. And if the price history shows this item rarely dips below a certain floor, say so \u2014 some products simply do not go on meaningful sale, and waiting on them is just procrastination with extra steps.\n\nGive me a clear one-sentence recommendation first: BUY NOW or WAIT. Then support it with the target price to watch for, a specific date or event to re-check prices on, and what to do while I wait \u2014 for example, setting a price alert at the target and which retailers historically cut this category deepest. If waiting, tell me exactly what would change my mind early (a price drop of what size). If buying now, tell me how to avoid overpaying anyway: which seller, whether to wait one more week for a known coupon cycle, and whether a price-match guarantee would protect me.",
    "description": "Analyzes sale cycles and model releases for a product, then gives a firm buy-or-wait recommendation with a target price.",
    "category": "shopping",
    "variables": {
      "product": {
        "label": "Product",
        "question": "What are you thinking of buying?",
        "type": "text",
        "placeholder": "e.g., iPad Air",
        "required": true
      },
      "current_price": {
        "label": "Current Price Seen",
        "question": "What price are you seeing right now?",
        "type": "text",
        "placeholder": "e.g., $649 at Best Buy",
        "required": false
      },
      "deadline": {
        "label": "Decision Deadline",
        "question": "When do you need to decide by?",
        "type": "text",
        "placeholder": "e.g., Mid-December",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Deal Evaluator",
    "displayDescription": "Honest deal autopsy: real vs. fake discounts, hidden catches, and a firm buy, wait, or skip verdict.",
    "id": "shopping-013",
    "prompt": "Here is a deal I found and I want a cold, honest evaluation before I act: {deal_details}. My budget for this purchase is {budget}, and my urgency is: {need_urgency}.\n\nFirst, reconstruct what I am actually being offered: the exact product and model, the claimed original price, the sale price, where it is listed, and any conditions attached (new, refurbished, open-box, membership required, rebate involved, bundle). Then determine whether the discount is real or inflated: compare against the typical street price over the last 3 to 6 months, not just the MSRP \u2014 flag classic tricks like a permanently 'discounted' inflated list price, an outgoing or discontinued model being cleared out, or a stripped-down variant masquerading as the flagship.\n\nHunt for the catches: refurbishment status and who did it, warranty length and who honors it, missing accessories, region or compatibility limitations, account or subscription requirements, restocking fees, and whether the seller is authorized (gray-market units can void warranties). Also judge the deal against my budget and urgency: even a great discount is a bad buy if it blows my cap, and if my urgency is low, waiting for a better window may beat grabbing this one.\n\nAlso sanity-check the seller itself: how long they have been operating, their ratings and return record, and whether the listing photos and description match the actual model number rather than a lookalike. A real deal from a sketchy seller can still be a bad deal. Finally, weigh the deal against what I would otherwise do \u2014 if I would not buy this at full price anyway, say so plainly, because a discount on something I do not need is not savings.\n\nStructure your answer as: a two-line summary of the deal, an honest-price analysis with your estimate of the fair price, a list of catches or risks ranked by seriousness, and then a bold one-word verdict \u2014 BUY, WAIT, or SKIP \u2014 with the reasoning behind it. If the verdict is BUY, add the exact steps to take before checking out (verify the seller, confirm warranty terms, check for stackable coupons, confirm the return policy). If it is WAIT or SKIP, tell me what price or conditions would flip the verdict and where to watch for them.",
    "description": "Evaluates a found deal against street prices and hidden catches, ending in a clear buy, wait, or skip verdict.",
    "category": "shopping",
    "variables": {
      "deal_details": {
        "label": "Deal Details",
        "question": "Describe the deal you found:",
        "type": "textarea",
        "placeholder": "e.g., 4K TV listed at $499, marked down from $899...",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget for this?",
        "type": "number",
        "placeholder": "e.g., 300",
        "required": false
      },
      "need_urgency": {
        "label": "Urgency",
        "question": "How urgently do you need this?",
        "type": "select",
        "options": [
          "I need it now",
          "I can wait a few weeks",
          "I'm just tempted by the deal"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Refurbished vs New Analysis",
    "displayDescription": "New vs. refurbished showdown with savings math, verification checklists, and a firm recommendation for your budget.",
    "id": "shopping-014",
    "prompt": "I am deciding between buying {product} new or refurbished, with a budget of {budget}. My intended use is {usage}, so factor that into how much the differences actually matter to me. My attitude toward refurbished risk is: {risk_tolerance}.\n\nBuild a direct comparison: typical new price at major retailers versus typical certified-refurbished and third-party-refurbished prices for the same model, showing the real dollar savings at each tier. Then explain what 'refurbished' actually means here \u2014 who did the refurbishing (manufacturer-certified, authorized reseller, or marketplace seller), what was replaced or tested, and how much that matters for this product category.\n\nGive me a verification checklist: the exact things I must confirm before buying refurbished \u2014 warranty length and who honors it, return window, battery health threshold for electronics (and how to check it on arrival), cosmetic grading scale, whether all original accessories are included, and whether the serial number is clean and eligible for manufacturer support. Then cover the risks honestly: battery or part wear, shorter remaining software support, cosmetic surprises, missing box or accessories, and listings labeled 'refurbished' that are really just used items.\n\nAlso decode the grading language sellers use: 'excellent,' 'very good,' and 'good' mean different things at different retailers, so for this category explain what cosmetic condition I should realistically expect at each grade. Cover the arrival inspection in detail \u2014 the exact tests to run in the first 48 hours (full charge cycle and battery report, all ports and buttons, speakers and microphones, screen uniformity, included accessories checked against the original box contents) \u2014 because refurbished return windows are often shorter than new ones.\n\nLay out the specific conditions where refurbished is the smarter buy: manufacturer-certified with a solid warranty, savings of at least 20 to 30 percent, and usage like {usage} that does not demand peak condition. Then lay out when new is worth it despite the cost: heavy professional use, gifts, thin refurbished supply, or a risk tolerance like mine that leans cautious. Include a short list of trustworthy places to buy refurbished for this category and red flags that mean walking away from a listing. End with a firm recommendation for my budget and usage: which route, from where, at what target price, and the first three checks to run the day it arrives.",
    "description": "Compares new and refurbished options with savings tiers, verification steps, risk analysis, and a final pick.",
    "category": "shopping",
    "variables": {
      "product": {
        "label": "Product",
        "question": "What are you considering buying?",
        "type": "text",
        "placeholder": "e.g., MacBook Pro",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 900",
        "required": true
      },
      "usage": {
        "label": "How You'll Use It",
        "question": "How will you mainly use it?",
        "type": "text",
        "placeholder": "e.g., Schoolwork and light photo editing",
        "required": true
      },
      "risk_tolerance": {
        "label": "Risk Tolerance",
        "question": "How do you feel about buying refurbished?",
        "type": "select",
        "options": [
          "Prefer the safety of new",
          "Open to refurbished if it's a good deal",
          "Hunt for maximum savings"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Category Buying Guide",
    "displayDescription": "A full category buying guide with spec triage, price anchors, buyer profiles, and a pre-purchase checklist.",
    "id": "shopping-015",
    "prompt": "Write a complete, practical buying guide for {product_category} aimed at a {buyer_profile} buyer with a budget of {budget}. This should read like advice from someone who has actually owned and compared these, not a manufacturer's brochure.\n\nStart with the decision factors that genuinely determine satisfaction in this category: the handful of things that separate a good purchase from a regret \u2014 fit for the buyer's space, usage intensity, and long-term ownership costs. Then map the main types or tiers available, who each type suits, and where the sweet spot sits for most buyers.\n\nNext, do the spec triage: which specs actually matter in real life and what 'good' looks like for each, versus the marketing fluff that sounds impressive but rarely changes the experience. Call out the common buyer mistakes \u2014 overbuying features they will never use, underbuying on the one thing that matters most, ignoring total cost of ownership (filters, accessories, energy, maintenance), and falling for brand premiums with no performance difference.\n\nAdd the dealbreaker and red-flag section: what should make me walk away from a specific model \u2014 weak warranty, terrible owner reviews on reliability, proprietary consumables, or signs of planned obsolescence. Give price anchors: what {budget} realistically buys, what an extra 20 percent would unlock, and where the budget floor is before quality falls off a cliff. Include timing advice on when this category typically goes on sale.\n\nFinally, build the decision framework: two or three buyer profiles (for example, the careful beginner, the heavy daily user, the value maximizer), each matched to the type and price tier they should target and one concrete model archetype to start comparing. Close with a next-steps checklist: the five things to do before buying \u2014 measure the space, check compatibility with what I own, read long-term owner reviews, confirm return and warranty terms, and set a price alert at my target.",
    "description": "Covers decision factors, what specs really matter, common mistakes, red flags, and a profile-matched decision framework.",
    "category": "shopping",
    "variables": {
      "product_category": {
        "label": "Category",
        "question": "Which product category?",
        "type": "text",
        "placeholder": "e.g., Espresso Machines",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 1500",
        "required": true
      },
      "buyer_profile": {
        "label": "Buyer Type",
        "question": "How would you describe yourself as a buyer?",
        "type": "select",
        "options": [
          "Beginner",
          "Everyday user",
          "Enthusiast",
          "Professional"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Spec Sheet Explainer",
    "displayDescription": "Plain-language spec breakdown translated to real-world use, ranked for your use case with the noise filtered out.",
    "id": "shopping-016",
    "prompt": "Explain the specs of {product} in plain, jargon-free language. I will mainly use it for {use_case}, and I am also comparing it against {compared_product}, so keep that comparison in mind where it helps.\n\nGo through each major specification one by one: state the spec, translate it into what it actually means in everyday use for someone doing {use_case}, and say how good or mediocre this product's number is relative to the category. Be concrete \u2014 instead of 'fast processor,' explain what tasks will feel snappy and which will still chug. Flag every spec that is mostly marketing noise for my use case and explain why it will not change my experience, so I do not overpay for a number on a sheet.\n\nThen prioritize: rank the specs by how much they will actually affect my satisfaction given {use_case}, separating the difference-makers from the tiebreakers from the irrelevant. Where {compared_product} differs on a key spec, call out which one wins for my specific use and whether the gap is big enough to matter or just spec-sheet bragging.\n\nAlso explain how the specs interact, since spec sheets present them in isolation: a great screen with a weak battery means a great screen that dies by dinner; a powerful chip throttled by poor cooling means benchmark numbers I will never actually see. For my {use_case}, point out the one or two spec combinations that unlock the experience and the ones where a single weak link bottlenecks everything else.\n\nEnd with the three specs that matter most for my situation, each with a one-line reason and a simple 'good enough' benchmark \u2014 the threshold below which I should keep shopping. Add a short watch-out list: specs or fine print that commonly disappoint buyers of this product (throttling, real-world battery versus rated, compatibility limits, region-locked features), and one honest sentence on who this product is not for.",
    "description": "Translates every major spec into real-world meaning, flags marketing fluff, and ends with the three specs that matter most.",
    "category": "shopping",
    "variables": {
      "product": {
        "label": "Product",
        "question": "Which product's specs should I explain?",
        "type": "text",
        "placeholder": "e.g., Samsung Galaxy S24",
        "required": true
      },
      "use_case": {
        "label": "Use Case",
        "question": "How will you mainly use it?",
        "type": "text",
        "placeholder": "e.g., Mobile photography and social media",
        "required": true
      },
      "compared_product": {
        "label": "Comparing Against (optional)",
        "question": "Is there another product you're comparing it with?",
        "type": "text",
        "placeholder": "e.g., iPhone 16",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Feature Prioritizer",
    "displayDescription": "Feature triage ranked must-have to skip, tuned to your use case, budget, and household dealbreakers.",
    "id": "shopping-017",
    "prompt": "I am shopping for {product_category} and drowning in feature lists. My main use case is {use_case}, my budget is {budget}, and the people affected by this purchase are {household}. My absolute dealbreakers are: {dealbreakers}.\n\nRank the common features of this category into three tiers: must-have (buying without this would be a regret), nice-to-have (genuinely useful but skippable), and skip (marketing padding or features that add cost without adding value for my situation). For every feature, give a one-line reason tied to {use_case} and {household} \u2014 not generic praise. Pay special attention to features that interact with my dealbreakers: anything that violates one is an automatic skip, no matter how shiny.\n\nThen tell me exactly which features are worth paying extra for: name the two or three upgrades where spending more of my {budget} actually buys a meaningfully better experience, and the features where the cheap version is fine. Balance this against the budget reality \u2014 at {budget}, flag which must-haves I can realistically get and which I may need to compromise on, plus whether stretching the budget slightly or dropping a nice-to-have gets me the best overall package.\n\nThen walk me through the key trade-off decisions buyers of {product_category} actually face: where spending and saving collide, and how my {use_case} tips each trade-off. Give me a simple tiebreaker rule for the final two contenders \u2014 the one question whose answer should decide it. And warn me about the feature that looks like a must-have on paper but that owners in {household}-style situations consistently say they never use.\n\nEnd with a practical shortlist: the feature combination I should filter for when browsing listings, three questions to ask myself before choosing between two finalists, and a reminder of what to verify in reviews \u2014 long-term reliability of the prioritized features, not just day-one impressions.",
    "description": "Ranks category features by real value for your use case, names upgrades worth paying for, and gives a filter-ready shortlist.",
    "category": "shopping",
    "variables": {
      "product_category": {
        "label": "Category",
        "question": "What are you shopping for?",
        "type": "text",
        "placeholder": "e.g., Washing Machine",
        "required": true
      },
      "use_case": {
        "label": "Use Case",
        "question": "How will you mainly use it?",
        "type": "text",
        "placeholder": "e.g., Family of five, lots of laundry",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 800",
        "required": true
      },
      "household": {
        "label": "Who's Affected",
        "question": "Who else will use or be affected by this?",
        "type": "text",
        "placeholder": "e.g., Me and my two roommates",
        "required": false
      },
      "dealbreakers": {
        "label": "Dealbreakers",
        "question": "Anything this purchase must NOT have or do?",
        "type": "textarea",
        "placeholder": "e.g., No smart features, must be quiet",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Alternative Product Finder",
    "displayDescription": "Five honest alternatives across price points with trade-offs and a best-fit recommendation for your priority.",
    "id": "shopping-018",
    "prompt": "I was considering {product} but want alternatives before I commit. My priority is that {priority}, and my budget is {budget}. I want to avoid: {avoid}.\n\nSuggest five comparable alternatives spread across price points: one clear budget pick, two direct competitors near the original's price, one premium step-up, and one wildcard that solves the problem differently. For each, give the typical street price, how its key features and build quality compare to {product}, and its biggest strength and biggest weakness stated honestly \u2014 no salesmanship.\n\nThen do the trade-off analysis: which alternatives beat the original on what I care about ({priority}), and what I would give up in each case \u2014 ecosystem lock-in, accessory compatibility, resale value, warranty quality, long-term support. Factor in my budget: mark each alternative as comfortably in budget, a stretch, or over budget, and say whether a stretch is justified.\n\nRecommend one best fit for me with clear reasoning tied to {priority} and {budget}, plus a runner-up in case the winner is out of stock or has a dealbreaker I discover later.\n\nAlso surface the hidden long-term costs that can flip the math: subscriptions, proprietary accessories, replacement parts, and energy or consumable costs over two to three years of ownership. An alternative that is cheaper upfront but expensive to own is not actually cheaper. Tell me which alternative has the strongest owner-review record for reliability, since a cheaper pick that breaks in year two is the most expensive option of all. Finally, give me a narrowing method: if all five look decent, the two questions that eliminate three of them fast.\n\nExclude anything matching {avoid}. Close with practical next steps: where to compare real prices, what to check in long-term owner reviews for the top two picks, and one thing to verify (compatibility, size, subscription costs) before buying the recommendation.",
    "description": "Surfaces five alternatives to a product at different prices, compares trade-offs, and recommends the best fit for your budget.",
    "category": "shopping",
    "variables": {
      "product": {
        "label": "Product",
        "question": "What product were you considering?",
        "type": "text",
        "placeholder": "e.g., Peloton Bike",
        "required": true
      },
      "priority": {
        "label": "Priority",
        "question": "What matters most to you?",
        "type": "text",
        "placeholder": "e.g., Wants live classes but cheaper",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 600",
        "required": true
      },
      "avoid": {
        "label": "Things to Avoid",
        "question": "Anything you want to avoid in alternatives?",
        "type": "text",
        "placeholder": "e.g., Subscription-required features",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Dupe Finder",
    "displayDescription": "Affordable dupes with brutally honest shortfalls, safety warnings, and closest-match and best-value picks.",
    "id": "shopping-019",
    "prompt": "I want affordable dupes for {product}. The aspect of the original that matters most to me is {priority_aspect}, and I do not want to spend more than {dupe_budget} on a dupe.\n\nList four to five lower-priced alternatives that deliver a genuinely similar experience, not just a similar look. For each dupe, give the typical price, how close it gets to the original on {priority_aspect}, and an honest breakdown of where it falls short \u2014 performance, durability, ingredients or materials, finish, or longevity. Be blunt: if a dupe is 80 percent as good for 30 percent of the price, say so; if a dupe only looks similar in photos, say that too.\n\nFlag quality and safety concerns specific to going cheap in this category: counterfeit risks, unregulated ingredients, flimsy construction that fails early, missing safety certifications, and sellers with no real return policy. Tell me which corners are safe to cut and which are not \u2014 where the cheap version's compromise is merely cosmetic versus where it affects health, safety, or lifespan.\n\nRank the dupes by best overall value for someone prioritizing {priority_aspect}, and name one 'closest match' and one 'best bang for buck.'\n\nAlso compare the actual formulas, materials, or components where it matters: for {priority_aspect}, break down what the original does that costs money to replicate, and whether the dupes genuinely replicate it or just mimic the packaging. Tell me where to hunt dupes safely \u2014 reputable retailers with real return policies versus anonymous marketplace sellers \u2014 and the review signals that separate a legit dupe from a counterfeit, like verified-purchase patterns and photos from real buyers.\n\nEnd with practical buying advice: how to spot fakes when hunting dupes, what to check in reviews (look for long-term follow-ups, not first impressions), and the one scenario where you would tell me to just save up for the original instead.",
    "description": "Finds budget dupes for a product, grades them on what matters most to you, and flags where cheap gets risky.",
    "category": "shopping",
    "variables": {
      "product": {
        "label": "Product",
        "question": "What product do you want dupes for?",
        "type": "text",
        "placeholder": "e.g., Charlotte Tilbury Magic Cream",
        "required": true
      },
      "priority_aspect": {
        "label": "What Matters Most",
        "question": "What aspect of the original matters most to you?",
        "type": "text",
        "placeholder": "e.g., Long-wear performance",
        "required": true
      },
      "dupe_budget": {
        "label": "Max Dupe Budget",
        "question": "What's the most you'd spend on a dupe?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Wishlist Organizer",
    "displayDescription": "Turns a messy wishlist into a month-by-month buying plan with need-vs-want triage and sale-timing flags.",
    "id": "shopping-020",
    "prompt": "Turn my scattered wishlist into a smart buying plan. Here is everything I am considering: {wishlist}. I can spend {budget} per month on these, and I am planning over {timeframe}.\n\nFirst, categorize every item: NEED (solves a real problem or replaces something broken), WANT (genuinely improves life but optional), and IMPULSE (nice-to-have that I should probably sleep on). Be honest and push back where something looks like an impulse disguised as a need \u2014 challenge me on each one with a one-line reason for its category.\n\nThen rank the items by priority and value: which purchases deliver the most impact per dollar, which unblock other purchases, and which lose value if I wait. Build me a month-by-month buying order that fits the {budget} monthly budget across {timeframe}, keeping some buffer each month rather than spending to the last dollar. If the wishlist total exceeds what the budget covers in that timeframe, say so plainly and show me the math.\n\nFlag every item I should wait for a sale on: note the category's typical discount windows and set a target price where waiting is worth it. Also flag items that tend to get cheaper with new model releases or that I should buy used or refurbished instead. Call out any dependencies \u2014 things I need first before another item makes sense \u2014 and any items where buying the cheap version now would be smarter than saving for the premium one later.\n\nEnd with a summary table: item, category, priority rank, planned month, estimated cost, and whether to buy now or wait for a sale. Then give me three rules to keep the plan on track: a cooling-off rule for adding new items, a monthly check-in habit, and what to do with leftover budget each month \u2014 because a plan only works if I actually follow it.",
    "description": "Categorizes wishlist items, ranks them by value, and builds a budgeted monthly buying order with sale-timing advice.",
    "category": "shopping",
    "variables": {
      "wishlist": {
        "label": "Wishlist",
        "question": "Paste your wishlist:",
        "type": "textarea",
        "placeholder": "e.g., New desk chair, noise-canceling earbuds...",
        "required": true
      },
      "budget": {
        "label": "Monthly Budget",
        "question": "What is your monthly shopping budget?",
        "type": "number",
        "placeholder": "e.g., 200",
        "required": true
      },
      "timeframe": {
        "label": "Planning Timeframe",
        "question": "Over how many months should this plan stretch?",
        "type": "text",
        "placeholder": "e.g., 3 months",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Occasion Outfit Planner",
    "displayDescription": "A complete, shoppable outfit plan with itemized budget, weather backup, and dress-code decoding.",
    "id": "shopping-021",
    "prompt": "Plan a complete outfit for {occasion} with a {dress_code} dress code, for {season} weather, with a total budget of {budget}. The event is on {event_date} and the setting is {venue_setting} \u2014 use all of this to shape the plan.\n\nStart by decoding the situation: what {dress_code} actually means for this particular occasion (including the most common mistakes people make with it), and how {season} weather plus a {venue_setting} setting should change fabric, layering, and shoe choices. Then design the main outfit head to toe: the core pieces (with approximate prices that add up to no more than {budget}), plus shoes and accessories that complete the look. Mix new purchases with versatile basics worth owning anyway, and briefly say why each \"worth owning\" piece earns its place beyond this one event \u2014 what else it goes with.\n\nGive the outfit a clear style direction in one line (e.g., polished but relaxed, sharp and minimal), and explain how to wear each piece so it reads as intentional rather than thrown together. Then provide one backup option for a weather change (rain, a cold snap, or an unexpected heat wave \u2014 whichever is most realistic for {season}): what gets swapped, what stays, and the extra cost if it requires buying anything new.\n\nBefore the shopping list, lay out a short pre-purchase checklist: fit and comfort tests to do in the fitting room, what to check in a mirror and in a photo, and timing guidance based on {event_date} (when to order online vs. buy in store so alterations or exchanges still fit). Flag any red flags for this dress code \u2014 things that look fine on the rack but read as wrong at the actual event.\n\nStructure the response as: 1) The situation decoded, 2) The main outfit with itemized budget, 3) The backup plan, 4) Pre-purchase checklist, 5) What to avoid. Every recommendation must be concrete enough to shop from \u2014 name the category and key details (color, fabric, cut), not just \"a nice shirt.\"",
    "description": "Decodes the dress code and setting, builds a head-to-toe outfit within budget, and adds a weather backup plus a pre-purchase checklist.",
    "category": "shopping",
    "variables": {
      "occasion": {
        "label": "Occasion",
        "question": "What is the occasion?",
        "type": "text",
        "placeholder": "e.g., Outdoor wedding",
        "required": true
      },
      "dress_code": {
        "label": "Dress Code",
        "question": "What is the dress code?",
        "type": "select",
        "options": [
          "Casual",
          "Smart casual",
          "Business",
          "Formal",
          "Black tie",
          "Cocktail"
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
      "budget": {
        "label": "Budget",
        "question": "What is your outfit budget?",
        "type": "number",
        "placeholder": "e.g., 200",
        "required": true
      },
      "event_date": {
        "label": "Event Date",
        "question": "When is the event?",
        "type": "date",
        "required": false
      },
      "venue_setting": {
        "label": "Venue Setting",
        "question": "Is the event indoor, outdoor, or both?",
        "type": "select",
        "options": [
          "Indoor",
          "Outdoor",
          "Indoor and outdoor mix",
          "Not sure"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Capsule Wardrobe Builder",
    "displayDescription": "A 20\u201330 piece capsule wardrobe with color palette, outfit math, and an impact-ordered shopping list.",
    "id": "shopping-022",
    "prompt": "Build a 20 to 30 piece capsule wardrobe in a {style} style for a {climate} climate, with a total shopping budget of {budget}. My typical week looks like this: {daily_routine}. My color notes: {color_pref}.\n\nStart by translating {style} into 3 or 4 style rules \u2014 the silhouettes, fabrics, and details that define the look \u2014 so every piece serves one coherent aesthetic instead of a random pile of clothes. Then define a color palette: 2 to 3 neutrals as the foundation plus 1 to 2 accent colors, grounded in my color preferences above, with guidance on how much of each color to buy.\n\nNext, list the actual pieces: 20 to 30 items organized by category (tops, bottoms, layers and outerwear, dresses or one-pieces if they fit the style, shoes, accessories and bags). For each category give a concrete piece count and what each piece should be (e.g., \"3 knit tops: 1 white, 1 navy, 1 striped\"), with fabric and fit notes where it matters. Every piece must mix and match with most of the rest \u2014 explain the pairing logic briefly so I can see how outfits multiply, and sketch 5 to 7 example outfits from the list.\n\nWeight the wardrobe toward how I actually live: bias piece counts and categories toward the activities in my daily routine rather than an idealized lifestyle. Then give a prioritized shopping list sequenced by impact-per-dollar, ordered so the first third of the {budget} already produces wearable outfits, with approximate price tiers for each item (budget vs. midrange) so I can see where {budget} lands me.\n\nInclude guidance on: what NOT to include (common capsule bloat pieces that sound versatile but never get worn), fabric choices that matter for {climate}, how to fill gaps later without breaking the system, and a simple \"does it earn a slot\" test for future purchases. Structure the response as: 1) Style rules, 2) Color palette, 3) The piece list, 4) Example outfits, 5) Prioritized shopping list within {budget}, 6) Maintenance rules.",
    "description": "Translates your style into rules and a palette, lists mix-and-match pieces by category, and sequences purchases so early spending already yields outfits.",
    "category": "shopping",
    "variables": {
      "style": {
        "label": "Style",
        "question": "What style do you prefer?",
        "type": "select",
        "options": [
          "Minimalist",
          "Classic",
          "Streetwear",
          "Bohemian",
          "Preppy",
          "Athleisure"
        ],
        "required": true
      },
      "climate": {
        "label": "Climate",
        "question": "What climate do you dress for?",
        "type": "select",
        "options": [
          "Hot",
          "Mild",
          "Cold",
          "Four seasons"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your wardrobe budget?",
        "type": "number",
        "placeholder": "e.g., 800",
        "required": true
      },
      "daily_routine": {
        "label": "Typical Week",
        "question": "Describe a typical week (work, errands, social life):",
        "type": "textarea",
        "placeholder": "e.g., Office 4 days, gym 3x, casual weekends...",
        "required": true
      },
      "color_pref": {
        "label": "Color Preferences",
        "question": "Any colors you love or hate?",
        "type": "text",
        "placeholder": "e.g., Love navy and olive, hate pastels",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Seasonal Wardrobe Refresh",
    "displayDescription": "Audits what you own, finds the gaps, and adds 8\u201310 versatile pieces with outfits and budget math.",
    "id": "shopping-023",
    "prompt": "Help me refresh my wardrobe for {season}. Here's what I already own: {current_wardrobe}. My budget for additions is {budget}, I prefer to shop {shopping_channels}, and here's what's coming up in my life: {occasions_upcoming}.\n\nStart with a wardrobe audit: sort what I own into keep, repair, and retire/donate piles, with a reason for each retire call (worn out, wrong season, doesn't fit my life, duplicate of something better). Be specific about donation vs. trash \u2014 what's genuinely donate-worthy vs. what should be recycled or tossed.\n\nThen identify the real gaps: cross-reference what I own against {season} weather needs and the upcoming occasions I listed, and name the missing pieces by category. From those gaps, recommend 8 to 10 specific pieces to add, each with: what it is (color, fabric, cut \u2014 specific enough to search for), an estimated price that keeps the total at or under {budget}, which of my existing items it pairs with, and why it earns its slot over alternatives.\n\nWeight versatility hard: prioritize pieces that work with at least three things I already own, and call out any piece that's a one-outfit wonder. Then build 4 to 6 example outfits combining my keepers with the new pieces, so I can see the refresh working.\n\nAdd a short shopping strategy section: in what order to buy (highest outfit-multiplier first), what to try on together, what fits to check for each category, and whether each piece is better bought new, secondhand, or either \u2014 tuned to my {shopping_channels} preference. Close with a storage and care note for {season}: what to store from the outgoing season and how. Structure the response as: 1) Wardrobe audit with retire/donate calls, 2) Gap analysis, 3) The 8\u201310 additions with budget math, 4) Example outfits, 5) Shopping strategy, 6) Seasonal storage.\n\nClose with a 48-hour rule: wait two days before buying anything non-essential, and a closet checklist I can tape inside the door so I only buy pieces that fill a real gap in my wardrobe.",
    "description": "Sorts your current wardrobe into keep, repair, and retire piles, then recommends budget-capped additions that multiply your existing pieces.",
    "category": "shopping",
    "variables": {
      "season": {
        "label": "Season",
        "question": "Which season are you refreshing for?",
        "type": "select",
        "options": [
          "Spring",
          "Summer",
          "Fall",
          "Winter"
        ],
        "required": true
      },
      "current_wardrobe": {
        "label": "Current Wardrobe",
        "question": "Describe what you already own:",
        "type": "textarea",
        "placeholder": "e.g., Jeans, white tees, one blazer, sneakers...",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your refresh budget?",
        "type": "number",
        "placeholder": "e.g., 300",
        "required": true
      },
      "occasions_upcoming": {
        "label": "Upcoming Occasions",
        "question": "Any events or lifestyle changes coming up?",
        "type": "textarea",
        "placeholder": "e.g., New job in October, cousin's wedding...",
        "required": false
      },
      "shopping_channels": {
        "label": "Shopping Preference",
        "question": "Where do you prefer to shop?",
        "type": "select",
        "options": [
          "Online",
          "In-store",
          "Secondhand / thrift",
          "Mix of all"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Shoe Buying Guide",
    "displayDescription": "Fit, quality red flags, price reality, and break-in guidance tailored to your feet and activity.",
    "id": "shopping-024",
    "prompt": "Guide me through buying {shoe_type} for {activity}. My budget is {budget}, I'll use them {usage_frequency}, and my foot notes: {foot_concerns}.\n\nStart by explaining what actually matters for this shoe type and activity: the 4 to 6 features that separate good pairs from bad ones (fit geometry, support elements, materials, construction quality), and \u2014 just as important \u2014 which specs are marketing fluff I can ignore. Then break down fit in practical terms: how the shoe should feel brand new vs. after break-in, how much toe room is right, what \"support\" feels like vs. just stiff, and how sizing runs for this category (true to size, runs narrow, varies by brand).\n\nAddress my foot concerns directly: what to look for (and avoid) given {foot_concerns}, and at what point a specialty fitting or insole is worth it. Then give me a realistic price picture: what {budget} buys in this category, the minimum I'd need to spend for genuinely good quality, where the sweet spot is, and where spending more stops mattering.\n\nInclude a red-flags section: construction and material warning signs of poor quality (glue-only soles, paper-thin insoles, seams in bad places), and shopping red flags (final-sale-only pairs, no half sizes when I need them, reviews mentioning consistent defects). Give a try-on checklist for in-store and an at-home test plan for online orders (when to test them, on what surface, how long before deciding), plus break-in expectations and a simple care routine matched to {usage_frequency} \u2014 how often to clean, when to rotate, and the wear signs that mean it's time to replace.\n\nStructure the response as: 1) What matters and what's fluff, 2) Fit guide for my feet, 3) Price reality at {budget}, 4) Red flags, 5) Try-on and break-in plan, 6) Care and replacement.\n\nEnd with a first-week ownership plan: how to spot a bad fit early, when returning is the right call versus pushing through break-in, and a simple care routine that extends the shoe's life.",
    "description": "Explains what actually matters in this shoe category, prices your budget honestly, and flags poor-quality construction before you buy.",
    "category": "shopping",
    "variables": {
      "shoe_type": {
        "label": "Shoe Type",
        "question": "What type of shoes?",
        "type": "text",
        "placeholder": "e.g., Running shoes",
        "required": true
      },
      "activity": {
        "label": "Activity",
        "question": "What will you use them for?",
        "type": "text",
        "placeholder": "e.g., Daily 5K runs",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 130",
        "required": true
      },
      "foot_concerns": {
        "label": "Foot Issues",
        "question": "Any foot issues? (e.g., wide feet, flat feet, bunions)",
        "type": "text",
        "placeholder": "e.g., Wide forefoot, mild flat feet",
        "required": false
      },
      "usage_frequency": {
        "label": "Usage Frequency",
        "question": "How often will you use them?",
        "type": "select",
        "options": [
          "Daily",
          "Several times a week",
          "Weekly or less",
          "Occasionally"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Fit and Sizing Advisor",
    "displayDescription": "Decodes the size chart for your measurements and ends with one exact size to order first.",
    "id": "shopping-025",
    "prompt": "Help me get the right fit buying {clothing_item} online. My measurements: {measurements}. My usual size: {usual_size}. I'm buying from: {brand_retailer}. My fit notes: {fit_notes}.\n\nWalk me through reading the size chart for this specific item: which measurements actually matter for a {clothing_item} (chest vs. waist vs. length vs. shoulder, etc.), how to compare my numbers to the chart correctly, and how to interpret this brand's chart quirks if known \u2014 including whether their sizing runs small, large, or inconsistent. Then give a clear size-up vs. size-down recommendation with the reasoning, and a second-choice size as a backup.\n\nFactor in my fit notes: how {fit_notes} should shift the decision, and which fit details (rise, taper, shoulder seams, sleeve length) matter most for my shape in this garment. Then tell me exactly what to look for in reviews and photos before ordering: which reviewer details are signal (their measurements + the size they bought + how it fit) vs. noise, what percentage of \"runs small\" comments should change my choice, and how to use customer photos to judge real-world fit.\n\nCover the practical side too: the retailer's return/exchange policy questions I must confirm before clicking buy, whether to order two sizes when I'm between them (and what that costs), and what a tailor can realistically fix on this item vs. what has to be right off the rack \u2014 with typical alteration costs so I can decide if buying for tailoring is worth it. Include a quick self-measuring refresher (where the tape actually goes for the 2\u20133 measurements that matter most here) so the numbers I'm comparing to the chart are trustworthy.\n\nStructure the response as: 1) Size chart decoded for this item, 2) Your recommended size (plus backup), 3) Fit details for your shape, 4) How to mine reviews, 5) Returns and tailoring plan. End with a one-line verdict: the exact size to order first.",
    "description": "Compares your measurements to the chart, adjusts for your shape and the brand, mines reviews for fit signal, and gives a single order verdict.",
    "category": "shopping",
    "variables": {
      "clothing_item": {
        "label": "Clothing Item",
        "question": "What are you buying?",
        "type": "text",
        "placeholder": "e.g., Denim jacket",
        "required": true
      },
      "measurements": {
        "label": "Measurements",
        "question": "What are your key measurements?",
        "type": "text",
        "placeholder": "e.g., Chest 38in, waist 32in",
        "required": true
      },
      "usual_size": {
        "label": "Usual Size",
        "question": "What size do you usually wear?",
        "type": "text",
        "placeholder": "e.g., Medium",
        "required": true
      },
      "brand_retailer": {
        "label": "Brand / Retailer",
        "question": "Which brand or retailer are you buying from?",
        "type": "text",
        "placeholder": "e.g., Levi's, Zara, Amazon Essentials",
        "required": false
      },
      "fit_notes": {
        "label": "Fit Notes",
        "question": "Fit preferences or problem areas? (e.g., broad shoulders, between sizes)",
        "type": "textarea",
        "placeholder": "e.g., Broad shoulders, usually between M and L...",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Laptop Buying Guide",
    "displayDescription": "Three concrete configs at your budget tiers with honest trade-offs and traps to avoid.",
    "id": "shopping-026",
    "prompt": "Guide me to the right laptop for {primary_use} with a budget of {budget}. OS preference: {os_preference}. Portability: {portability}.\n\nStart by translating {primary_use} into the specs that actually matter: for each of processor, RAM, storage, display, and battery, explain what level I need, what would be overkill, and what would be a painful bottleneck \u2014 in plain terms tied to real tasks, not just numbers. Also cover the specs people underrate: keyboard quality, port selection, repairability and upgradability, and webcam/mic if relevant.\n\nThen recommend 3 specific configurations \u2014 one at the low end of {budget}, one mid-range, one near the top \u2014 each with an example model type or spec sheet (be concrete: chip tier, RAM and SSD, screen size and resolution). For each, spell out the trade-offs: what I'm gaining and what I'm giving up relative to the other two, and who each config is really for. If {budget} is unrealistic for {primary_use}, say so honestly and name the minimum viable spend.\n\nInclude a \"what to avoid\" section: the traps in this category right now (underspecced RAM that can't be upgraded, pretty screens with bad brightness, gaming laptops that are bricks for school, etc.). Factor in {portability} for weight, battery, and charger advice, and {os_preference} where it changes the answer. Add a buying-timing note (when deals cluster for laptops) and a pre-purchase checklist: warranty terms, return window, what to test in the first week (keyboard, trackpad, thermals under load, display uniformity, battery drain), and whether refurbished or previous-gen is a smart play at my budget. Also address storage and memory sizing: how much RAM and SSD I should realistically target for {primary_use} given that most thin laptops no longer allow upgrades, and whether the extended warranty is worth it at this price point.\n\nStructure the response as: 1) Specs decoded for {primary_use}, 2) The 3 configurations with honest trade-offs, 3) What to avoid, 4) Buying timing and checklist.",
    "description": "Decodes which specs matter for your use case, recommends low/mid/high configurations, and flags the category traps before you buy.",
    "category": "shopping",
    "variables": {
      "primary_use": {
        "label": "Primary Use",
        "question": "What will you mainly use the laptop for?",
        "type": "select",
        "options": [
          "Schoolwork",
          "Office work",
          "Gaming",
          "Video editing",
          "Programming",
          "General use"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 1000",
        "required": true
      },
      "os_preference": {
        "label": "OS Preference",
        "question": "Any OS preference?",
        "type": "select",
        "options": [
          "No preference",
          "Windows",
          "macOS",
          "ChromeOS"
        ],
        "required": false
      },
      "portability": {
        "label": "Portability",
        "question": "How portable does it need to be?",
        "type": "select",
        "options": [
          "Mostly stays at a desk",
          "Carried daily",
          "Travels frequently"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Phone Head-to-Head",
    "displayDescription": "A dimension-by-dimension head-to-head with per-row winners, value math, and a clear verdict.",
    "id": "shopping-027",
    "prompt": "Compare {phone_a} versus {phone_b} for my needs. I mainly use my phone for {usage}, my budget is {budget}, I'm in the {ecosystem} ecosystem, and I typically keep a phone {keep_duration}.\n\nBuild a head-to-head comparison organized by what actually affects daily life: performance (speed, heat, throttling in sustained use), camera (photo quality in the scenarios I shoot most, video, low light, zoom), battery (real-world screen-on time, charging speed, battery health over {keep_duration}), display (brightness outdoors, refresh rate, size in the hand), and software support lifespan (years of OS updates and security patches \u2014 crucial given how long I keep phones). Use a comparison table for these dimensions with a winner per row and a one-line reason.\n\nThen cover the money side: current street prices vs. my {budget}, which phone holds resale value better, and whether the price gap between them is justified by the differences. Address ecosystem honestly: what I'd gain or lose switching (messaging apps, accessories, watches, app purchases, data migration pain), and whether staying put is worth a slightly worse phone on paper.\n\nName one thing each phone does clearly better than the other \u2014 the single strongest reason to pick it. Then give a clear verdict: which phone wins for my specific situation and why, in two or three sentences, plus a \"buy it if / skip it if\" line for each. If both exceed or miss {budget}, address that directly with the closest realistic alternative. Add a buying-timing note: whether either phone is due for a successor soon, which one discounts more aggressively, and whether buying refurbished or previous-generation would beat both picks on value.\n\nStructure the response as: 1) Spec table with per-row winners, 2) Price and value vs. {budget}, 3) Ecosystem switching costs, 4) One thing each does best, 5) Final verdict.\n\nFinish with a switch-day checklist: what to back up and transfer, which accessories will or will not carry over, and the first settings to change so the new phone feels right in week one.",
    "description": "Compares the two phones across real daily-life dimensions, prices them against your budget, weighs ecosystem switching costs, and picks a winner.",
    "category": "shopping",
    "variables": {
      "phone_a": {
        "label": "First Phone",
        "question": "What is the first phone?",
        "type": "text",
        "placeholder": "e.g., iPhone 15",
        "required": true
      },
      "phone_b": {
        "label": "Second Phone",
        "question": "What is the second phone?",
        "type": "text",
        "placeholder": "e.g., Pixel 8",
        "required": true
      },
      "usage": {
        "label": "Main Usage",
        "question": "How do you mainly use your phone?",
        "type": "select",
        "options": [
          "Photography",
          "Gaming",
          "Social media",
          "Work and email",
          "Battery-first basics"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 800",
        "required": true
      },
      "ecosystem": {
        "label": "Ecosystem",
        "question": "Which ecosystem are you in?",
        "type": "select",
        "options": [
          "iPhone / iOS",
          "Android",
          "No strong ties"
        ],
        "required": false
      },
      "keep_duration": {
        "label": "Keep Duration",
        "question": "How long do you keep a phone?",
        "type": "select",
        "options": [
          "1\u20132 years",
          "3+ years"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Headphone Buying Guide",
    "displayDescription": "Form-factor verdict plus three honest picks with fit-testing guidance for your use case.",
    "id": "shopping-028",
    "prompt": "Help me choose headphones for {primary_use} with a budget of {budget}. I'll wear them mostly in: {wearing_context}. Glasses: {wear_glasses}.\n\nStart by comparing the three form factors \u2014 over-ear, on-ear, and earbuds \u2014 specifically for {primary_use} in a {wearing_context} environment: comfort over long sessions, noise isolation, situational awareness and safety, portability, and mic quality for calls. Give a verdict on which form factor wins for my case and why, without dismissing the runner-up's strengths.\n\nThen explain which specs genuinely matter for me and which are marketing noise: driver size and tuning, active noise cancellation quality (and how much ANC I actually need given {wearing_context}), battery life with ANC on vs. off, Bluetooth codecs and multipoint pairing, comfort factors (clamp force, ear-cup depth \u2014 especially relevant given {wear_glasses}), water and sweat resistance if relevant, and mic/call quality for {primary_use}.\n\nRecommend 3 specific options spanning {budget}: a budget pick, the sweet spot, and a stretch pick. For each give the honest trade-offs \u2014 what it does well, what it compromises, and who should skip it. Include one wildcard if a form factor different from the winner has a surprisingly good option.\n\nAdd the practical layer: how to test fit at home (the glasses seal test, the 30-minute comfort test), what to check in the return window, warranty and build-quality expectations at this price, replacement part availability (ear tips, pads, cables) since that determines real lifespan, and the one feature people overpay for in this category. Also note the companion app's role: whether EQ customization and firmware updates meaningfully improve the pick, or whether the hardware should win on its own. Structure the response as: 1) Form-factor verdict for my use, 2) Specs that matter (and don't), 3) The 3 picks with trade-offs, 4) Fit-testing and buying checklist.\n\nClose with a 14-day fit test plan: comfort signs that improve with time versus dealbreaker discomfort, plus a return-deadline reminder so I test during the window, not after it.",
    "description": "Compares over-ear, on-ear, and earbuds for your use and environment, explains which specs matter, and recommends three picks with real trade-offs.",
    "category": "shopping",
    "variables": {
      "primary_use": {
        "label": "Primary Use",
        "question": "What will you use them for?",
        "type": "select",
        "options": [
          "Commuting",
          "Work calls",
          "Music listening",
          "Gaming",
          "Exercise"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 250",
        "required": true
      },
      "wearing_context": {
        "label": "Wearing Context",
        "question": "Where will you wear them most?",
        "type": "select",
        "options": [
          "Quiet indoor",
          "Noisy commute or travel",
          "Office with people around",
          "Gym and outdoors"
        ],
        "required": false
      },
      "wear_glasses": {
        "label": "Wear Glasses",
        "question": "Do you wear glasses?",
        "type": "boolean",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Monitor Buying Guide",
    "displayDescription": "Plain-terms spec decoding, profiled picks with trade-offs, and a setup checklist for your desk.",
    "id": "shopping-029",
    "prompt": "Help me pick a monitor for {primary_use} within {budget}. Desk space: {desk_space}. It will be driven by: {driving_device}.\n\nExplain the key specs in plain terms, tied to my use case: panel types (IPS, VA, OLED, TN \u2014 what each is actually good at and who should avoid it), resolution vs. screen size (pixel density and why it matters for text sharpness), refresh rate (when 60Hz is fine and when 120Hz+ is worth paying for), color accuracy and coverage (when sRGB is enough vs. when DCI-P3 or AdobeRGB matters), brightness and HDR (real vs. fake HDR), and ergonomics (height adjustment, VESA mount).\n\nThen say which specs matter MOST for {primary_use} and which I can safely deprioritize to stay within {budget}. Factor in {driving_device}: whether my hardware can actually push the resolution and refresh rate I'm paying for, which ports and cables I need (HDMI 2.1, DisplayPort, USB-C with power delivery), and any adapter gotchas.\n\nRecommend 2 to 3 specific monitors: give each a profile (e.g., \"the value pick\", \"the color-accurate pick\", \"the smooth-gaming pick\") with panel, size, resolution, refresh rate, and approximate price, plus honest trade-offs for each \u2014 what it compromises and who it's wrong for. Include one \"stretch or save\" note: what another $50\u2013100 would buy, and whether it's worth it for my use.\n\nAdd a setup and buying section: ideal size for {desk_space}, single vs. ultrawide vs. dual for {primary_use} (including when a second cheap monitor beats one expensive one), what to verify on arrival (dead pixels, backlight bleed, the return policy that covers them), the cable or adapter to buy with it (and checking whether one is included in the box), and basic calibration tips so the panel looks right on day one. Structure the response as: 1) Specs in plain terms, 2) What matters most for {primary_use} at {budget}, 3) The 2\u20133 picks with trade-offs, 4) Setup and buying checklist.",
    "description": "Explains panel types and specs in plain language, matches them to your use and hardware, and recommends 2\u20133 monitors with honest trade-offs.",
    "category": "shopping",
    "variables": {
      "primary_use": {
        "label": "Primary Use",
        "question": "What will you use the monitor for?",
        "type": "select",
        "options": [
          "Office work",
          "Gaming",
          "Photo and video editing",
          "Programming",
          "General use"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 350",
        "required": true
      },
      "desk_space": {
        "label": "Desk Space",
        "question": "How much desk space do you have?",
        "type": "select",
        "options": [
          "Small desk",
          "Standard desk",
          "Plenty of space"
        ],
        "required": false
      },
      "driving_device": {
        "label": "Driving Device",
        "question": "What will drive the monitor? (e.g., MacBook Air, gaming PC, PS5)",
        "type": "text",
        "placeholder": "e.g., Gaming PC with RTX 4060",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Smart Home Starter Kit",
    "displayDescription": "Ecosystem-first starter kit with a phased roadmap so nothing you buy gets orphaned.",
    "id": "shopping-030",
    "prompt": "Design a smart home starter kit for my {home_type} with a budget of {budget}. Voice assistant: {voice_assistant}. Rental restrictions: {rental_restrictions}.\n\nStart with the ecosystem decision, because it's the choice I can't easily undo: compare the practical realities of going Alexa, Google Home, or Apple HomeKit (device selection, reliability, privacy), plus where Matter and Thread fit in \u2014 and recommend a lane given my {voice_assistant} starting point. Explain the hub question honestly: when I actually need one and when the \"hub\" is just my phone or a smart speaker.\n\nThen recommend the starter devices, staying within {budget}: the 3 to 5 devices that deliver the most daily value first (typically smart lighting for one or two key rooms, a voice-control speaker or display, and one security or convenience device suited to a {home_type}). For each, name the device category, what to look for, an approximate price, and the specific job it does in my home. Prioritize devices that work on day one without rewiring.\n\nAddress compatibility head-on: the protocols to standardize on so future purchases slot in, the {rental_restrictions} constraint (no-neutral-wire switches, no-drill mounting, what renters should choose instead), Wi-Fi vs. Thread/Zigbee trade-offs as device count grows, and the one compatibility trap that strands the most beginners.\n\nGive a phased buying plan: Phase 1 (now, within {budget}), Phase 2 (the next 2\u20133 devices to add in a few months), Phase 3 (nice-to-haves later) \u2014 designed so nothing from Phase 1 gets replaced or orphaned as I expand. Add a short privacy and security section: what data these devices collect, the settings to change on day one, and network hygiene (guest network for IoT).\n\nStructure the response as: 1) Ecosystem and hub decision, 2) Phase 1 device list with prices, 3) Compatibility rules, 4) Phase 2 and 3 roadmap, 5) Privacy and security setup.",
    "description": "Settles the Alexa/Google/HomeKit decision first, recommends day-one devices within budget, and maps a phased expansion with compatibility and privacy guidance.",
    "category": "shopping",
    "variables": {
      "home_type": {
        "label": "Home Type",
        "question": "What type of home?",
        "type": "select",
        "options": [
          "Apartment",
          "House",
          "Condo",
          "Rental"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your starter budget?",
        "type": "number",
        "placeholder": "e.g., 400",
        "required": true
      },
      "voice_assistant": {
        "label": "Voice Assistant",
        "question": "Which voice assistant, if any?",
        "type": "select",
        "options": [
          "None yet",
          "Alexa",
          "Google Assistant",
          "Siri / Apple Home"
        ],
        "required": false
      },
      "rental_restrictions": {
        "label": "Rental Restrictions",
        "question": "Are you renting with restrictions on wiring or drilling?",
        "type": "boolean",
        "required": false
      }
    }
  },
  {
    "displayTitle": "TV Buying Guide",
    "displayDescription": "A complete TV buying plan tailored to your room, viewing distance, lighting, and budget \u2014 with plain-English spec guidance and 2\u20133 honest model picks.",
    "id": "shopping-031",
    "prompt": "Act as a practical TV buying advisor. I am shopping for a TV for a {room_size} where my seat is about {viewing_distance} from the screen. My total budget for the TV itself is {budget}. I will mainly use it for {primary_use}, and the room's lighting is {room_lighting}. Base everything on this real situation, not generic advice \u2014 a bright living room needs different panel technology than a dark home theater, and sports or gaming care about different specs than movie nights.\n\nStart with sizing. Use standard viewing-distance guidance to tell me the ideal screen size range for sitting {viewing_distance} away, and give me a clear rule for my budget: is it smarter to go bigger with decent specs, or smaller with better picture quality? Then explain the four specs that actually matter in plain, non-technical language \u2014 screen size, resolution, panel technology (OLED, QLED/QNED, basic LED/LCD), and refresh rate. For each one, say what I will genuinely notice while watching, when it truly matters for {primary_use}, and when it is marketing fluff I can safely ignore at this price point. Cover the details buyers overlook: number and version of HDMI ports, whether the TV has a proper low-latency game mode, smart-TV software quality and long-term update support, viewing angles for off-center seats, and built-in sound quality so I know whether a soundbar is effectively mandatory.\n\nRecommend 2 to 3 specific TV models currently on the market that fit my budget. Organize them as buyer profiles rather than a simple ranking \u2014 for example, the best overall value pick, the best pick for my primary use of {primary_use}, and the best pick if I stretch toward the top of the budget. For each model, give the recommended screen size, panel type and resolution, rough street price, what it does well, its honest weaknesses, and who should skip it.\n\nFinish with the practical buying layer. Flag dealbreakers and red flags: fake discount pricing against inflated list prices, motion-rate numbers that are not true refresh rates, poor brightness for {room_lighting}, and limited HDMI ports that will not fit my devices. Tell me exactly what to verify before buying \u2014 the return policy, the warranty terms, whether my stand or wall space fits the TV's real dimensions with its stand attached, and whether I need to buy a mount separately. Note the best times of year to buy a TV for genuine discounts. End with a single clear verdict naming the TV I should buy, plus the concrete next step: measure my space, count the HDMI devices I own, and purchase.",
    "description": "Get the right screen size for your viewing distance, learn which specs matter for your use case, and compare specific models with real trade-offs.",
    "category": "shopping",
    "variables": {
      "room_size": {
        "label": "Room Size",
        "question": "What size room is it for?",
        "type": "select",
        "options": [
          "Small bedroom",
          "Living room",
          "Large living room",
          "Home theater"
        ],
        "required": true
      },
      "viewing_distance": {
        "label": "Viewing Distance",
        "question": "How far will you sit from the TV?",
        "type": "text",
        "placeholder": "e.g., 8 feet",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 700",
        "required": true
      },
      "primary_use": {
        "label": "Primary Use",
        "question": "What will you mainly use the TV for?",
        "type": "select",
        "options": [
          "Movies & TV shows",
          "Sports",
          "Gaming",
          "Mixed use"
        ],
        "required": true
      },
      "room_lighting": {
        "label": "Room Lighting",
        "question": "How is the room's lighting?",
        "type": "select",
        "options": [
          "Bright daytime room",
          "Mixed lighting",
          "Dark dedicated room"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Camera Buying Guide",
    "displayDescription": "A personalized camera and lens buying guide for your photography type, skill level, and budget \u2014 including what gear you already own and whether used is worth it.",
    "id": "shopping-032",
    "prompt": "Act as a camera buying advisor for someone shooting {photography_type} with a total all-in budget of {budget} that must cover the camera body, lenses, and the essential accessories. I am a {skill_level} photographer, and I already own {existing_gear}. On buying used gear, my answer is: {open_to_used}. Build every recommendation around that budget ceiling and my real experience level \u2014 a beginner does not need the same camera as an advanced shooter, even with the same money to spend.\n\nTeach me what actually matters before naming products. In plain language, explain sensor size and what it changes in real photos (low-light performance, depth of field, and how it drives lens cost), lens mounts and why choosing a camera body really means choosing a lens ecosystem for years, and which features genuinely matter for {photography_type} at the {skill_level} level versus spec-sheet bragging rights. Be explicit about what I can ignore: megapixel counts above a reasonable threshold, burst rates I will never use, and video features that are irrelevant to stills shooting \u2014 or the reverse if my use case involves video. Factor in {existing_gear} so I do not pay twice for capabilities I already have.\n\nRecommend 2 to 3 specific camera and lens combinations that fit the budget. For each, name the body, the lens, whether the price assumes new or used, the approximate total cost, and which buyer profile it suits \u2014 for example, the best value for a beginner, the best growth path for an intermediate shooter who will buy more lenses later, and the specialist pick for {photography_type}. Give honest trade-offs for each: ergonomics and menu usability for a {skill_level} user, autofocus quality for the subject matter, lens availability and prices in that mount, weight and size for carrying all day, and battery life. If a bundled starter (kit) lens is a false economy for my use case, say so plainly and price the body-plus-better-lens alternative instead.\n\nThen list the essential accessories to buy first, in priority order with rough prices: memory cards with the right speed class, a spare battery, a bag that actually fits the kit, and the one or two genre essentials for {photography_type} such as a tripod, a fast prime lens, a microphone, or a flash. Flag what to verify before buying: shutter count and physical condition when buying used, warranty and return terms, and whether the camera's grip and menus suit me \u2014 handling it in a store first if possible. Close with a short learning plan: the first three skills to practice with the new kit so the gear actually gets used instead of gathering dust.",
    "description": "Learn which camera specs truly matter for your photography, compare 2\u20133 body and lens combos with honest trade-offs, and get a prioritized accessories list.",
    "category": "shopping",
    "variables": {
      "photography_type": {
        "label": "Photography Type",
        "question": "What will you shoot?",
        "type": "select",
        "options": [
          "Travel",
          "Portraits",
          "Sports",
          "Landscape",
          "Vlogging",
          "Family"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 1200",
        "required": true
      },
      "skill_level": {
        "label": "Skill Level",
        "question": "What is your skill level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "existing_gear": {
        "label": "Existing Gear",
        "question": "What camera gear do you already own?",
        "type": "text",
        "placeholder": "e.g., Nothing yet / a kit lens and tripod",
        "required": false
      },
      "open_to_used": {
        "label": "Open to Used",
        "question": "Are you open to buying quality used gear to stretch your budget?",
        "type": "boolean",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Gaming Setup Planner",
    "displayDescription": "A full gaming setup plan for your platform and play style \u2014 budget split across hardware, display, audio, and comfort, with a phased buy plan if needed.",
    "id": "shopping-033",
    "prompt": "Plan my complete gaming setup for {platform} within a total budget of {budget} that must cover everything \u2014 not just the console or PC, but the full experience. I already own {owned_gear}. My play style is {play_style}. Design the setup around that platform's real technical requirements and my play style, because a competitive PC shooter setup spends money in completely different places than a casual console setup in a shared living room.\n\nBreak the budget across five layers and give a spend-versus-save rule for each. Core hardware: the console, PC components, or handheld plus dock \u2014 where an extra dollar visibly improves performance and where the cheaper option is genuinely fine. Display: the right TV or monitor size, resolution, refresh rate, and input lag for {platform}, without paying for specs the platform cannot output. Audio: a headset or speakers matched to my space and whether I play with others nearby. Seating and desk ergonomics: the comfort items that matter for long sessions. Accessories: extra controllers, storage expansion, lighting, and cable management. Call out compatibility pitfalls specific to {platform}: HDMI version and refresh-rate ceilings on consoles, power-supply wattage and physical clearance for PC parts, and peripherals that do not work across platforms. Weave in {owned_gear} so I do not rebuy what I already have.\n\nIf the ideal setup exceeds {budget}, give me a phased plan instead of a fantasy list. Phase 1 buys the fully playable core within budget right now. Phase 2 adds the single biggest quality-of-life upgrade next. Phase 3 finishes the dream setup. Put a rough price on each phase and name exactly what waits for later and why that order makes sense for a {play_style} player.\n\nClose with a prioritized shopping checklist in buy order, with rough price targets per item and one line each on what to verify before purchasing: return windows, warranty terms on refurbished hardware, desk and room measurements, and outlet and cable needs. End with a verdict \u2014 the single smartest allocation of {budget} for a {play_style} player on {platform} \u2014 and the first item I should buy.",
    "description": "Allocate your budget across every layer of a gaming setup, avoid compatibility mistakes, and get a phased shopping plan that starts playable on day one.",
    "category": "shopping",
    "variables": {
      "platform": {
        "label": "Platform",
        "question": "Which gaming platform?",
        "type": "select",
        "options": [
          "PC",
          "PlayStation",
          "Xbox",
          "Nintendo Switch",
          "Mobile"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your total budget?",
        "type": "number",
        "placeholder": "e.g., 1500",
        "required": true
      },
      "owned_gear": {
        "label": "Gear You Own",
        "question": "What gaming gear do you already own?",
        "type": "text",
        "placeholder": "e.g., A 1080p monitor and a headset",
        "required": false
      },
      "play_style": {
        "label": "Play Style",
        "question": "How do you mostly play?",
        "type": "select",
        "options": [
          "Competitive / ranked",
          "Casual / story games",
          "Streaming / content creation",
          "Party / family gaming"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Dorm Room Essentials",
    "displayDescription": "A tailored dorm shopping list for your school, room type, and bathroom setup \u2014 with what the school provides, roommate coordination, and a move-in timeline.",
    "id": "shopping-034",
    "prompt": "Build my dorm room essentials shopping list. I am moving into a {room_type} at {school_name}, with a total budget of {budget} for everything I buy myself. My bathroom situation is {bathroom_situation}, and my move-in date is {move_in_date}. Tailor the list to that room type and bathroom setup \u2014 a shared double needs roommate-coordination items a single does not, and a communal hall bathroom needs a shower caddy and shower shoes that a private bathroom does not.\n\nStart with what the school usually provides versus what I must bring. Beds, mattresses, desks, and chairs are typically provided; bedding, lighting, storage, and cleaning basics almost never are. Tell me exactly what to confirm with {school_name} before spending anything: mattress size, because Twin versus Twin XL is the classic expensive mistake; which appliances and items are banned, such as hot plates, candles, and halogen lamps; and whether the room has reliable Wi-Fi or needs an ethernet cable and adapter.\n\nThen give the categorized shopping list with rough prices per item and a running budget total: bedding and sleep, including sheets, a mattress topper, pillows, and the one sleep-quality upgrade worth the money for shared rooms; desk and study setup with lighting that will not disturb a roommate; storage and organization, flagging space-saving picks for small rooms such as under-bed bins, over-door hooks, and vertical shelving; bathroom and personal care matched to {bathroom_situation}; laundry supplies including how to handle quarters, cards, or apps; and shared-space etiquette items for a {room_type} \u2014 a power strip with a long cord, a small lockbox, and noise-management gear. Mark every item as must-have, strongly recommended, or skip-if-tight so the list survives my {budget} ceiling, and note which items are worth buying in a dorm-targeted multipack.\n\nFinish with coordination and timing: what to ask my roommate before either of us buys \u2014 mini-fridge, microwave, rug, fan \u2014 so we do not duplicate purchases; a buying timeline working back from {move_in_date}; and a move-in-day box of the handful of items that must be unpacked first. End with the three highest-impact purchases if the budget gets squeezed.",
    "description": "Get a budgeted, categorized dorm essentials list matched to your room and bathroom situation, plus what to confirm with your school before buying.",
    "category": "shopping",
    "variables": {
      "room_type": {
        "label": "Room Type",
        "question": "What type of room?",
        "type": "select",
        "options": [
          "Single",
          "Double shared",
          "Suite",
          "Off-campus apartment"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 500",
        "required": true
      },
      "bathroom_situation": {
        "label": "Bathroom",
        "question": "What is your bathroom situation?",
        "type": "select",
        "options": [
          "Private bathroom",
          "Shared suite bathroom",
          "Communal hall bathroom"
        ],
        "required": true
      },
      "move_in_date": {
        "label": "Move-in Date",
        "question": "When do you move in?",
        "type": "date",
        "required": false
      },
      "school_name": {
        "label": "School",
        "question": "Which school are you attending?",
        "type": "text",
        "placeholder": "e.g., Arizona State University",
        "required": true
      }
    }
  },
  {
    "displayTitle": "First Apartment Essentials",
    "displayDescription": "A phased first-apartment shopping plan \u2014 week-one must-haves versus later nice-to-haves, used-versus-new rules, and a move-in logistics checklist.",
    "id": "shopping-035",
    "prompt": "Build my first-apartment essentials shopping list for a {apartment_size} with a total furnishing budget of {budget}. I move in on {move_in_date} and already own {already_own}. Organize everything around a first-time renter who needs a livable home on day one without blowing the whole budget on day one \u2014 separate true week-one must-haves from things that can comfortably wait a month or more.\n\nCover the four zones with rough prices per item. Kitchen: the minimum cookware, dishes, utensils, and small appliances needed to cook real meals in week one, plus what can wait until month two. Bathroom: shower, toilet, and hygiene basics including the easy-to-forget items like shower curtain rings, a plunger, and a bath mat. Bedroom: the sleep setup first \u2014 the mattress decision, bedding, and basic light blocking for good sleep from night one. Cleaning: a starter kit of multipurpose supplies, a broom or vacuum suited to the floors, and trash bins for every room. Mark every item as week-one, month-one, or later, and account for {already_own} so I do not buy duplicates.\n\nGive me the used-versus-new rules that save real money: what is safe and smart to buy used (solid wood furniture, kitchen tools, lamps, bookshelves), what to always buy new for hygiene or safety (mattress, pillows, smoke and CO detectors, anything with a heating element), and where to hunt for used deals locally with a safety checklist for secondhand buying \u2014 checking for bedbugs, testing electronics, and meeting safely. Fit it all to {budget} with a suggested budget split across the four zones and a clear rule for what gets cut first if money runs short.\n\nClose with move-in logistics: the first-night box to pack separately \u2014 bedding, toilet paper, basic tools, chargers, cleaning wipes, a change of clothes, and snacks; what to measure before buying any furniture, including doorways, hallways, elevators, and stairwells, to avoid the classic couch-does-not-fit disaster; renter-friendly rules for hanging and mounting without losing the deposit; and a shopping timeline working back from {move_in_date}. End with the five purchases that most improve daily life in the first month.",
    "description": "Furnish your first apartment on a real budget with prioritized zone-by-zone lists, secondhand buying rules, and a first-night survival box.",
    "category": "shopping",
    "variables": {
      "apartment_size": {
        "label": "Apartment Size",
        "question": "What size apartment?",
        "type": "select",
        "options": [
          "Studio",
          "1 bedroom",
          "2 bedroom",
          "3+ bedroom"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your total budget?",
        "type": "number",
        "placeholder": "e.g., 2000",
        "required": true
      },
      "already_own": {
        "label": "Already Own",
        "question": "What furniture or household items do you already own?",
        "type": "textarea",
        "placeholder": "e.g., A desk, some kitchen boxes from family, a floor lamp",
        "required": false
      },
      "move_in_date": {
        "label": "Move-in Date",
        "question": "When do you move in?",
        "type": "date",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Moving Supplies List",
    "displayDescription": "A complete moving supplies list with quantities and prices, a packing timeline, and specialty-item instructions \u2014 fitted to your move distance and method.",
    "id": "shopping-036",
    "prompt": "Create my moving supplies list and packing plan. I am moving from a {current_home} to a {new_home}, {distance} away. I am doing this as a {move_method} move, and my specialty or fragile items are: {specialty_items}. My budget for supplies alone is {budget} \u2014 not movers or truck rental, just boxes, packing materials, and tools.\n\nGive me a room-by-room supplies list with realistic quantities for a {current_home}: counts of small, medium, large, and wardrobe boxes; packing paper or bubble wrap; tape rolls; mattress bags; and furniture protection such as stretch wrap, moving blankets, and pads. Adjust the quantities and sturdiness for the distance \u2014 a {distance} move needs stronger boxes, better sealing, and more padding than an across-town one. Include the tools that make moving day actually work: a box cutter, markers and color labels, a dolly or hand truck, and furniture sliders. Put rough prices next to each line item and keep the total under {budget}, with a cheaper alternative noted for the biggest line items, such as free boxes from stores and using towels and linens as padding.\n\nLay out a buying and packing timeline: when to start collecting boxes, the packing order that keeps daily life functional (storage areas, books, and decor first; kitchen and daily essentials last), and a labeling system that makes unloading fast \u2014 room plus contents plus priority. Give specific packing instructions for {specialty_items}, item by item, including what needs a specialty box or custom protection. Tailor the advice to a {move_method} move: DIY moves need more blankets, straps, and tie-downs, while hired-mover moves need better labeling and an essentials box that stays with me instead of going on the truck.\n\nClose with moving-day practicalities: the essentials box contents \u2014 documents, medications, chargers, basic tools, toilet paper, snacks, and a change of clothes; what to photograph before disassembly so reassembly is painless; and a final budget check showing where the {budget} went. End with the three most common supply mistakes for a move like mine and how to avoid each one.",
    "description": "Get box counts, packing materials, and tools with realistic quantities for your home size, plus a packing timeline that keeps life functional.",
    "category": "shopping",
    "variables": {
      "current_home": {
        "label": "Current Home",
        "question": "What are you moving from?",
        "type": "select",
        "options": [
          "Studio",
          "1 bedroom",
          "2 bedroom",
          "3+ bedroom house"
        ],
        "required": true
      },
      "new_home": {
        "label": "New Home",
        "question": "What are you moving to?",
        "type": "select",
        "options": [
          "Studio",
          "1 bedroom",
          "2 bedroom",
          "3+ bedroom house"
        ],
        "required": true
      },
      "distance": {
        "label": "Distance",
        "question": "How far is the move?",
        "type": "select",
        "options": [
          "Across town",
          "Different city",
          "Cross-country"
        ],
        "required": true
      },
      "budget": {
        "label": "Supplies Budget",
        "question": "What is your supplies budget?",
        "type": "number",
        "placeholder": "e.g., 150",
        "required": true
      },
      "move_method": {
        "label": "Move Method",
        "question": "How are you handling the move?",
        "type": "select",
        "options": [
          "DIY \u2014 renting a truck",
          "DIY \u2014 my own car, multiple trips",
          "Hiring professional movers",
          "Hybrid \u2014 movers for big items only"
        ],
        "required": true
      },
      "specialty_items": {
        "label": "Specialty Items",
        "question": "Any fragile or specialty items (TV, plants, art, instruments)?",
        "type": "text",
        "placeholder": "e.g., 65-inch TV, houseplants, framed art",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Kitchen Starter Kit",
    "displayDescription": "A kitchen starter kit matched to your cooking level, frequency, and cooktop \u2014 versatile essentials, the 5 items worth splurging on, and a gradual buy order.",
    "id": "shopping-037",
    "prompt": "Build my kitchen starter kit. I {cooking_level} and I cook {cooking_frequency}. My total budget is {budget} for cookware, tools, knives, and small appliances. My cooktop is {cooktop_type}, and my cooking focus is {dietary_focus}. Design the kit around that reality \u2014 someone who rarely cooks needs a small, forgiving kit, while a confident daily cook needs different pans and sharper tools than a beginner.\n\nList the essentials by category \u2014 cookware, knives, prep tools, baking basics, and small appliances \u2014 with rough prices and one line each on why the item earns its place. Prioritize versatile workhorses over single-use gadgets: the kit should handle most of what {dietary_focus} cooking requires with as few pieces as possible. Respect the {cooktop_type} constraint explicitly in every cookware pick, especially induction compatibility, which rules out some beloved budget pans and makes magnetic-base construction non-negotiable. Be honest about what to skip at my level: the appliances and gadgets that look useful but collect dust for someone who {cooking_level} and cooks {cooking_frequency}.\n\nName the 5 items worth spending more on for quality, and explain why each one pays back the premium in durability, safety, or daily enjoyment \u2014 for example, a chef's knife that stays sharp, a heavy pan that heats evenly, or a cutting board that does not warp. Then name the items where the budget version is perfectly fine and the premium buys almost nothing. Include the basic care rules that protect the investment: what ruins nonstick coatings, how to keep knives sharp with minimal effort, how to season and maintain cast iron or carbon steel if included, and when to replace cutting boards and sponges.\n\nFit the whole kit to {budget} with a suggested spend split across the categories and a buy order for building gradually \u2014 the first five items to purchase if I cannot buy everything at once. End with the single highest-impact upgrade for someone who {cooking_level} and cooks {cooking_frequency}, and the concrete next step: measure my cabinet, drawer, and cooktop space, then buy the core five.",
    "description": "Get a cookware and tool list built for how you actually cook, with induction and cooktop compatibility handled and gadget traps avoided.",
    "category": "shopping",
    "variables": {
      "cooking_level": {
        "label": "Cooking Level",
        "question": "How would you describe your cooking?",
        "type": "select",
        "options": [
          "Rarely cook",
          "Beginner",
          "Intermediate",
          "Confident cook"
        ],
        "required": true
      },
      "cooking_frequency": {
        "label": "Cooking Frequency",
        "question": "How often do you cook?",
        "type": "select",
        "options": [
          "Daily",
          "A few times a week",
          "Weekends only"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 400",
        "required": true
      },
      "cooktop_type": {
        "label": "Cooktop Type",
        "question": "What kind of cooktop do you have?",
        "type": "select",
        "options": [
          "Gas",
          "Electric coil",
          "Glass-top electric",
          "Induction"
        ],
        "required": true
      },
      "dietary_focus": {
        "label": "Cooking Focus",
        "question": "What do you mostly cook? (e.g., meal-prep lunches, vegetarian dinners)",
        "type": "text",
        "placeholder": "e.g., Meal-prep lunches, vegetarian dinners",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Cleaning Supplies Kit",
    "displayDescription": "A complete cleaning kit for your home size and special needs \u2014 core cleaners, the right tools, a simple routine, and honest verdicts on specialty products.",
    "id": "shopping-038",
    "prompt": "Assemble my complete cleaning supplies kit for a {home_size} home. My special considerations are: {special_needs}. My total budget is {budget}. My product preference is {eco_preference}. Build the kit around that home size and those needs \u2014 a house with pets and allergies needs a fundamentally different kit than a studio with hardwood floors, and product choices must respect my preference throughout.\n\nList the core kit with rough prices: the 3 to 4 multipurpose cleaners that cover nearly everything, the tools that matter most \u2014 a vacuum or mop type matched to my floors, microfiber cloths, scrub brushes, and a squeegee \u2014 and laundry basics including stain treatment. Then rule on specialty products with a clear verdict for each: which ones are genuinely necessary given {special_needs}, such as an enzymatic cleaner for pet messes, a limescale remover for hard water, or a stone-safe cleaner for natural stone, and which are marketing upsells I should skip. Keep every recommendation consistent with {eco_preference}, offering fragrance-free or low-toxicity swaps where relevant, and flag any product that is unsafe around kids or pets, including what must never be mixed.\n\nGive me a simple routine for actually using the kit so it does not sit under the sink unused: a 15-minute weekly reset covering the highest-impact tasks, a monthly deeper clean, and the two or three tasks matched to {special_needs} that prevent the biggest headaches \u2014 like washing pet bedding regularly or dusting with a damp cloth for allergies. Include storage and safety basics: what must stay locked away from kids and pets, how to store products so they last, and proper ventilation when using stronger cleaners.\n\nFit the kit to {budget} with a spend split between cleaners, tools, and laundry, plus a refill strategy that keeps restocking costs low over time \u2014 concentrates, bulk refills, and the one tool worth buying once instead of replacing. End with the three purchases that make the biggest difference for a home like mine and the single first thing I should buy.",
    "description": "Get a budgeted cleaning kit matched to pets, allergies, and floor types, with a realistic routine and a refill strategy that keeps costs low.",
    "category": "shopping",
    "variables": {
      "home_size": {
        "label": "Home Size",
        "question": "What size is your home?",
        "type": "select",
        "options": [
          "Studio",
          "1-2 bedroom",
          "3+ bedroom",
          "House"
        ],
        "required": true
      },
      "special_needs": {
        "label": "Special Needs",
        "question": "Any special considerations?",
        "type": "text",
        "placeholder": "e.g., Pets, allergies, hardwood floors",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 80",
        "required": true
      },
      "eco_preference": {
        "label": "Product Preference",
        "question": "Any product preferences?",
        "type": "select",
        "options": [
          "Conventional is fine",
          "Fragrance-free / sensitive",
          "Eco-friendly / low-toxicity"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Home Tool Kit Builder",
    "displayDescription": "A home tool kit sized to your DIY skill, housing type, and actual projects \u2014 with quality-versus-budget rules and a gradual buy order.",
    "id": "shopping-039",
    "prompt": "Build my home tool kit. I am a {skill_level} DIYer living in a {housing_type}, with a budget of {budget} for the complete kit. My near-term projects are: {project_goals}. Size the kit to my skill level, my housing situation, and those projects \u2014 a beginner apartment renter needs a different kit than an experienced homeowner doing yard and repair work.\n\nList the essential hand tools with one line each on what it is actually for: hammer, tape measure, level, screwdriver set, adjustable wrench, pliers set, utility knife, stud finder, and hex keys. Then the power tools worth owning at my level \u2014 for most {skill_level} DIYers that starts with a drill/driver, with guidance on corded versus cordless and which voltage platform to commit to so batteries stay compatible as the kit grows. Add fasteners and consumables: a sorted screw and nail kit, wall anchors matched to {housing_type} walls, painter's tape, wood glue, and sandpaper. Include the non-negotiable safety gear: eye protection, work gloves, a dust mask or respirator, and ear protection.\n\nApply a buy-quality-versus-buy-budget rule to every category: which tools earn the premium because cheap versions fail dangerously or measure inaccurately \u2014 drill, tape measure, level \u2014 and which budget versions are perfectly fine \u2014 hammers, hex keys, consumables. Adjust for {housing_type}: renters need damage-free hanging solutions and fewer heavy-duty tools, while house owners need yard and exterior basics added to the list. For {project_goals}, name the one or two project-specific additions the kit needs and anything I should rent rather than buy, since single-use specialty tools are usually cheaper rented.\n\nClose with storage \u2014 a bag or box system that keeps the kit portable and findable \u2014 basic maintenance that doubles tool life, and a buy order for building gradually: the first five tools to own. End with the single most useful first project for a {skill_level} DIYer to build confidence with the new kit.",
    "description": "Get the right hand and power tools for your home and skill level, learn where cheap is fine and where quality matters, and what to rent instead.",
    "category": "shopping",
    "variables": {
      "skill_level": {
        "label": "Skill Level",
        "question": "What is your DIY skill level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Experienced"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 250",
        "required": true
      },
      "housing_type": {
        "label": "Housing Type",
        "question": "What kind of home do you live in?",
        "type": "select",
        "options": [
          "Apartment / condo",
          "Rental house",
          "Owned house"
        ],
        "required": true
      },
      "project_goals": {
        "label": "Project Goals",
        "question": "What projects do you want to tackle soon?",
        "type": "text",
        "placeholder": "e.g., Hanging shelves, basic furniture assembly",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Bulk Buying Planner",
    "displayDescription": "A bulk-buying plan for your household size and storage \u2014 in-or-out verdicts per item, 3-month quantities, unit-price math, and a never-bulk list.",
    "id": "shopping-040",
    "prompt": "Create my bulk-buying plan for a household of {household_size}. The categories I am considering are: {categories}. My storage situation is {storage_space}, and I currently shop for groceries {shop_frequency}. Build the plan around that household size and storage \u2014 a large household with extra freezer space can bulk-buy very differently than a small household with one cramped pantry.\n\nGo category by category through {categories} and give each item a clear in-or-out verdict. Judge every item on four tests: shelf life \u2014 does it last months without degrading; usage rate \u2014 will a household of {household_size} finish it before it expires; unit-price savings \u2014 is the bulk price per unit genuinely lower after doing the math, not just a bigger number on the shelf; and storage cost \u2014 does it fit my {storage_space} without creating clutter or waste. Estimate sensible 3-month quantities for each approved item based on household size, and teach me the simple unit-price formula to verify savings in the store so I never trust the shelf tag blindly.\n\nBe explicit about the never-bulk list: items that spoil, go stale, lose potency, or tempt overconsumption, with the reasoning for each so I can apply the rule to new items myself. Cover the hidden costs of bulk buying \u2014 spoilage, storage containers, and the warehouse-membership math: when the annual fee pays for itself at my household size and shopping cadence, and when it does not. Include a rotation system \u2014 first in, first out, with date-labeling \u2014 so bulk stock actually gets used instead of expiring in the back of {storage_space}.\n\nClose with a starter bulk list sized to my household and storage: the 5 to 8 items with the biggest reliable savings, where to buy each \u2014 warehouse club, online subscribe-and-save, or ethnic grocery \u2014 and a 3-month restock cadence matched to how I shop {shop_frequency}. End with the single rule of thumb that prevents most bulk-buying waste.",
    "description": "Find out what is actually worth buying in bulk for your household, with quantity estimates, savings math, and a spoilage-proof rotation system.",
    "category": "shopping",
    "variables": {
      "household_size": {
        "label": "Household Size",
        "question": "How many people are in your household?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "categories": {
        "label": "Categories",
        "question": "Which categories are you considering?",
        "type": "text",
        "placeholder": "e.g., Paper goods, rice, snacks, toiletries",
        "required": true
      },
      "shop_frequency": {
        "label": "Shopping Frequency",
        "question": "How often do you shop for groceries?",
        "type": "select",
        "options": [
          "Weekly",
          "Every two weeks",
          "Monthly"
        ],
        "required": true
      },
      "storage_space": {
        "label": "Storage Space",
        "question": "How much storage space do you have?",
        "type": "select",
        "options": [
          "Limited pantry space",
          "Standard pantry",
          "Extra freezer or garage storage"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Subscription vs One-Time",
    "displayDescription": "A full cost-and-convenience breakdown that finds your break-even point and delivers a clear subscribe-or-buy verdict.",
    "id": "shopping-041",
    "prompt": "I need a rigorous subscription-versus-one-time analysis for {product}, not a gut feeling. I use it {usage_frequency}, and there are {household_size} people in my household who will consume or share it. A typical subscription option costs me about {monthly_cost} per delivery. Freedom to switch brands matters to me: {switch_flexible}.\n\nStart by converting my usage into real numbers: estimate my monthly consumption from my usage frequency and household size, then project that to 12 months. Build a side-by-side cost comparison with three columns: (1) one-time purchase price per unit multiplied by my annual consumption, including any bulk multi-pack discounts I could grab on sale; (2) the 12-month subscription total, including subscription discounts, shipping fees, taxes, and any minimum commitment period; and (3) a hybrid option where I subscribe only during heavy-use months. Show the exact break-even point: the number of months (or the usage level) at which the subscription stops being cheaper.\n\nThen evaluate the factors that numbers alone miss. Assess cancellation flexibility \u2014 can I pause, skip a delivery, or cancel instantly, or am I locked in with fees or minimum terms? Flag waste risk: with {usage_frequency} use, will auto-delivery pile up faster than I consume it, and how do I calibrate the delivery interval? Consider the price-lock value of a subscription against the risk that a price increase gets auto-applied. Weigh brand lock-in: a subscription commits me to one product line, while one-time buying lets me switch when something better appears \u2014 and since freedom to switch brands matters to me at {switch_flexible}, factor that in honestly rather than glossing over it.\n\nFinish with a clear verdict tailored to my situation: subscribe, buy one-time, or run a hybrid strategy (for example, subscribe once to capture an intro discount, then cancel and buy bulk on sale). Include a 12-month cost table, the exact fine print to check before signing up \u2014 cancellation terms, skip and pause rules, and price-change policies \u2014 plus concrete next steps I can take this week.",
    "description": "Compares 12-month subscription cost against one-time buying with break-even math, cancellation and waste risk, and a tailored verdict.",
    "category": "shopping",
    "variables": {
      "product": {
        "label": "Product",
        "question": "What product are you deciding on?",
        "type": "text",
        "placeholder": "e.g., Coffee pods",
        "required": true
      },
      "usage_frequency": {
        "label": "Usage Frequency",
        "question": "How often do you use it?",
        "type": "select",
        "options": [
          "Daily",
          "Weekly",
          "Monthly",
          "Occasionally"
        ],
        "required": true
      },
      "household_size": {
        "label": "Household Size",
        "question": "How many people in your household will use or share it?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "monthly_cost": {
        "label": "Subscription Cost",
        "question": "About how much does one subscription delivery cost?",
        "type": "number",
        "placeholder": "e.g., 25",
        "required": true
      },
      "switch_flexible": {
        "label": "Switch Brands",
        "question": "Do you want the freedom to switch brands or try different products?",
        "type": "boolean",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Appliance Repair or Replace",
    "displayDescription": "A numbers-backed repair-or-replace verdict using the 50% rule, lifespan curves, and energy payback math.",
    "id": "shopping-042",
    "prompt": "My {appliance} is {age} years old and its current condition is {condition}. I need a definitive repair-or-replace decision backed by real numbers. My repair estimate, if I have one (0 means not yet): {repair_quote}. Keeping my electricity bill down is a priority for me: {energy_worry}.\n\nStart by placing my appliance on its lifespan curve: state the typical lifespan range for this appliance type, show where {age} years falls (early, mid-life, past prime), and give the average remaining life I can expect if I repair it now. Apply the 50% rule clearly: if the repair costs 50% or more of a comparable new unit's price AND the appliance is past the halfway point of its expected lifespan, replacement is usually the smarter money \u2014 show me exactly how my numbers land against this rule. If I have not provided a repair quote, give me the typical repair cost range for the most common failures of this appliance, and tell me the maximum quote I should accept before walking away and replacing it.\n\nNext, run the energy math. Compare the estimated annual operating cost of my aging unit against a current efficient model (reference the yellow EnergyGuide label and ENERGY STAR benchmarks), and calculate the payback period: how many years of energy savings it takes for the efficiency gain to offset the replacement cost. Since keeping my electricity bill down is a priority at {energy_worry}, weigh this honestly \u2014 a short payback makes replacement more attractive, but do not oversell efficiency if the savings are marginal.\n\nThen cover the non-financial decision factors. List the warning signs that mean replacement cannot wait \u2014 safety issues like gas leaks, electrical burning smells, water leaks near wiring, or a sealed-system failure \u2014 and tell me what to do immediately if any apply. Address parts availability: for a {age}-year-old {appliance}, are replacement parts still manufactured, and does scarcity make future repairs unreliable or expensive? Consider warranty status and whether a repair would come with any parts-and-labor guarantee.\n\nFinish with a clear verdict \u2014 repair it, replace it now, or repair once while budgeting for replacement within a year \u2014 plus concrete next steps: what to ask a technician before authorizing a repair, which specs and efficiency ratings to prioritize if I replace, and a maintenance checklist to extend the life of whichever unit I keep.",
    "description": "Weighs repair quotes against replacement cost, expected remaining life, and energy savings, with safety warnings and next steps.",
    "category": "shopping",
    "variables": {
      "appliance": {
        "label": "Appliance",
        "question": "Which appliance?",
        "type": "text",
        "placeholder": "e.g., Refrigerator",
        "required": true
      },
      "age": {
        "label": "Age",
        "question": "How old is it in years?",
        "type": "number",
        "placeholder": "e.g., 9",
        "required": true
      },
      "condition": {
        "label": "Condition",
        "question": "What condition is it in?",
        "type": "select",
        "options": [
          "Works fine",
          "Minor issues",
          "Major problems",
          "Broken"
        ],
        "required": true
      },
      "repair_quote": {
        "label": "Repair Quote",
        "question": "Have you gotten a repair estimate? Enter the amount, or 0 if not.",
        "type": "number",
        "placeholder": "e.g., 180 (or 0)",
        "required": false
      },
      "energy_worry": {
        "label": "Energy Priority",
        "question": "Is keeping your electricity bill down a priority?",
        "type": "boolean",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Mattress Buying Guide",
    "displayDescription": "A complete mattress plan: sleep profile, honest spec minimums, trial and warranty demands, and 3 matched picks.",
    "id": "shopping-043",
    "prompt": "I need a complete mattress buying plan. I am a {sleep_position} sleeper who prefers {firmness_preference} firmness, my budget is {budget}, I weigh {weight_range}, I share the bed with a partner: {sleeps_with_partner}, and I tend to sleep hot: {sleep_hot}.\n\nStart by building my sleep profile from these facts and translating it into what my body actually needs. Explain mattress firmness on the 1\u201310 scale and map my stated preference to the real range: side sleepers usually need 4\u20136 for shoulder and hip pressure relief, back sleepers 5\u20137 for lumbar support, stomach sleepers 6\u20138 to keep hips from sinking \u2014 then adjust for my weight, because {weight_range} changes how firm a mattress feels in practice (heavier sleepers sink deeper and usually need a firmer rating and thicker comfort layers; lighter sleepers need softer). If I share the bed, factor in motion isolation and edge support so one person's movement does not wake the other, and note when a split-firmness setup is worth considering. If I sleep hot, address breathability honestly \u2014 which constructions actually sleep cooler and which just claim to.\n\nThen give me an honest breakdown of mattress types \u2014 memory foam, latex, hybrid, and traditional innerspring \u2014 with real pros and cons for my profile, not marketing copy. Tell me which specs genuinely matter and the minimums to demand: foam density (at least 1.8 lb/ft\u00b3 for polyfoam, 4+ for memory foam), coil gauge and count thresholds for hybrids, comfort-layer thickness appropriate for my weight, and edge support construction. Then call out the marketing fluff to ignore: cooling gel infusions that fade within months, inflated coil counts with thin-gauge wire, and proprietary foam names that hide low density.\n\nNext, cover the purchase protections I must demand: a trial period of at least 100 nights, a 10-year warranty covering sagging of 1 inch or more (not just 1.5), free returns with no restocking fee, and what the fine print usually excludes. List red flags: fiberglass fire barriers in cheap all-foam beds, brands that will not disclose foam densities, final-sale trial terms, and warranties that require the original foundation.\n\nRecommend 3 specific mattresses within my {budget}, each matched to a different priority (best for my sleep position, best value, best for couples or hot sleepers), with honest trade-offs for each. Add price anchors \u2014 what {budget} realistically buys \u2014 and the best times to buy (major holiday weekends). End with a decision framework: how to narrow the three to one, how to test a mattress during the trial (give it 3\u20134 weeks, track morning pain), and the exact questions to ask before checkout.",
    "description": "Translates your sleep position, weight, and budget into firmness needs, spec thresholds, red flags, and three recommendations with trade-offs.",
    "category": "shopping",
    "variables": {
      "sleep_position": {
        "label": "Sleep Position",
        "question": "How do you usually sleep?",
        "type": "select",
        "options": [
          "Side",
          "Back",
          "Stomach",
          "Combination"
        ],
        "required": true
      },
      "firmness_preference": {
        "label": "Firmness",
        "question": "What firmness do you prefer?",
        "type": "select",
        "options": [
          "Soft",
          "Medium-soft",
          "Medium",
          "Medium-firm",
          "Firm"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 1000",
        "required": true
      },
      "weight_range": {
        "label": "Weight Range",
        "question": "Which weight range are you in? (This changes how firm a mattress feels.)",
        "type": "select",
        "options": [
          "Under 130 lb",
          "130\u2013230 lb",
          "Over 230 lb"
        ],
        "required": true
      },
      "sleeps_with_partner": {
        "label": "Share Bed",
        "question": "Do you share the bed with a partner?",
        "type": "boolean",
        "required": false
      },
      "sleep_hot": {
        "label": "Sleep Hot",
        "question": "Do you tend to sleep hot?",
        "type": "boolean",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Furniture Buying Guide",
    "displayDescription": "A furniture buying plan covering build-quality checks, measuring, delivery logistics, and where to spend versus save.",
    "id": "shopping-044",
    "prompt": "Help me buy a {furniture_piece} for my {room} with a budget of {budget}. The piece must fit within {max_size}. The wear situation it needs to survive: {wear_level}. Getting large items through my doors, stairs, or hallways is a concern: {tight_delivery}.\n\nStart with build quality, because this is where furniture money is won or lost. For upholstered pieces, teach me to check the frame (kiln-dried hardwood with corner blocks beats particle board every time), the suspension (eight-way hand-tied or quality sinuous springs versus cheap webbing), cushion fill (high-resilience foam of 1.8+ density holds shape for years; down-blend feels luxurious but needs regular fluffing), and joinery I can verify. For wood case goods, explain solid wood versus veneer over plywood versus veneer over MDF \u2014 what each means for durability, refinishing, and price \u2014 and the joinery to look for (dovetail drawers, mortise-and-tenon) versus staples and glue. Tell me how to read these cues from a product page when I cannot touch the piece: which spec-sheet phrases are trustworthy and which are fluff.\n\nThen walk me through measuring correctly so I never buy the wrong size. Give me a step-by-step: measure the wall or zone, tape the piece's footprint on the floor with painter's tape, check walkway clearances (30\u201336 inches for main paths), confirm door swing and outlet access, and verify the piece's diagonal depth against my narrowest doorway and stairwell turn \u2014 since delivery access is a concern for me, call out when disassembly options and modular designs matter. Include ceiling height and sight-line checks for tall pieces.\n\nNext, cover delivery and assembly realistically: white-glove versus threshold versus curbside delivery and what each costs, what to inspect on arrival (damage, wobble, drawer glide), the tools and time assembly actually takes, and return policies \u2014 many furniture retailers charge restocking fees or refuse returns on assembled items, so I need to know this before I buy.\n\nThen give me the spend-versus-save breakdown: where spending more genuinely pays off (frames, suspension, daily-use surfaces, anything that {wear_level} wear will punish) versus where budget options are completely fine (accent pieces, trendy silhouettes, items I will replace in a few years). Provide price anchors for my {budget} so I know what tier I am shopping in, and note the best times to buy (holiday weekends, floor-sample sales).\n\nEnd with a shortlist strategy: 3 options or brands that fit my space, budget, and wear needs with trade-offs, plus a pre-purchase verification checklist \u2014 measurements confirmed, delivery path checked, return policy read, and warranty terms understood.",
    "description": "Teaches frame, suspension, and material checks, a measuring walkthrough, delivery options, and a spend-vs-save breakdown for your space and budget.",
    "category": "shopping",
    "variables": {
      "furniture_piece": {
        "label": "Furniture Piece",
        "question": "What are you buying?",
        "type": "text",
        "placeholder": "e.g., Sectional sofa",
        "required": true
      },
      "room": {
        "label": "Room",
        "question": "Which room is it for?",
        "type": "text",
        "placeholder": "e.g., Living room",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 1200",
        "required": true
      },
      "max_size": {
        "label": "Max Size",
        "question": "What is the maximum size the piece can be?",
        "type": "text",
        "placeholder": "e.g., 90 in wide, 8 ft ceiling",
        "required": true
      },
      "wear_level": {
        "label": "Wear Level",
        "question": "What kind of wear must it survive?",
        "type": "select",
        "options": [
          "Kids and/or pets",
          "Adults only",
          "Heavy daily use"
        ],
        "required": true
      },
      "tight_delivery": {
        "label": "Tight Delivery",
        "question": "Are narrow doors, stairs, or hallways a concern for delivery?",
        "type": "boolean",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Skincare Routine Builder",
    "displayDescription": "A complete AM/PM skincare routine with product order, budget allocation, and a safe way to introduce actives.",
    "id": "shopping-045",
    "prompt": "Build me a complete skincare routine for {skin_type} skin. My main concerns are {concerns}, my total routine budget is {budget}, and these are ingredients or products I already know I react badly to: {known_reactions}. I want a routine I will actually stick to, so keep it at this depth: {routine_depth}.\n\nStart by translating my skin type and concerns into a strategy: which concerns to tackle first (barrier repair and hydration before actives, always), and what realistic improvement looks like on a 6\u20138 week timeline \u2014 no product transforms skin overnight, and anything promising that is a red flag. Then lay out the full routine in exact application order, because order determines whether products work: morning (gentle cleanser, treatment serum, moisturizer, sunscreen) and evening (cleanser \u2014 double cleanse only if I wear sunscreen or makeup \u2014 treatment, moisturizer), with each product's job explained in one clear sentence.\n\nFor each step, recommend a specific product type within my {budget}, and show me how to allocate the budget smartly: spend on the treatment serum and sunscreen where formulation quality matters most, save on cleanser and basic moisturizer where drugstore staples perform identically. Since {routine_depth} is my commitment level, keep a minimal routine to 3\u20134 steps and expand only with products that earn their place.\n\nFlag ingredients to avoid for {skin_type} skin specifically, plus the universal troublemakers for my concerns, and cross-check everything against {known_reactions} so nothing you recommend contains what I react to. Include a safe introduction protocol: add one new product at a time, patch test on the jawline for 48 hours, wait 1\u20132 weeks before adding the next, and introduce strong actives (retinoids, exfoliating acids, vitamin C) slowly \u2014 2\u20133 nights a week at first. Warn me about over-exfoliation and active-stacking, the two mistakes that wreck more routines than any single bad product.\n\nEnd with a 6-week assessment plan: what signs mean it is working, what means I should drop a product, and when a concern (persistent cystic acne, rashes, sudden changes) means skipping products entirely and seeing a dermatologist.",
    "description": "Builds a morning and evening routine for your skin type and concerns, with ingredient warnings, patch-testing protocol, and a 6-week check-in plan.",
    "category": "shopping",
    "variables": {
      "skin_type": {
        "label": "Skin Type",
        "question": "What is your skin type?",
        "type": "select",
        "options": [
          "Dry",
          "Oily",
          "Combination",
          "Sensitive",
          "Normal"
        ],
        "required": true
      },
      "concerns": {
        "label": "Concerns",
        "question": "What are your main skin concerns?",
        "type": "text",
        "placeholder": "e.g., Acne and dark spots",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your routine budget?",
        "type": "number",
        "placeholder": "e.g., 100",
        "required": true
      },
      "known_reactions": {
        "label": "Known Reactions",
        "question": "Any ingredients or products you already know you react badly to? (Leave blank if none.)",
        "type": "text",
        "placeholder": "e.g., reacts badly to fragrance",
        "required": false
      },
      "routine_depth": {
        "label": "Routine Depth",
        "question": "How much routine will you actually stick to?",
        "type": "select",
        "options": [
          "Minimal (3-4 steps)",
          "Standard",
          "Full"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Fragrance Finder",
    "displayDescription": "A fragrance finder with plain-English family guidance, 5 matched picks, and a sample-before-you-buy strategy.",
    "id": "shopping-046",
    "prompt": "Help me find a fragrance I will genuinely love and actually wear. I like {scent_preferences} and I dislike {dislikes}. My budget is {budget}. I will mainly wear it for: {use_case}. I have sampled fragrances on my own skin before: {tried_samples}.\n\nStart by teaching me fragrance families in plain terms, because this vocabulary is what makes recommendations click: fresh (citrus, aquatic, green \u2014 clean and daytime), floral (from soft to heady), woody (cedar, sandalwood \u2014 dry and grounding), amber and oriental (warm, spicy, resinous \u2014 evening weight), and gourmand (vanilla, coffee, sweet \u2014 cozy and edible-smelling). Map my likes onto these families so I understand my own taste, and use my dislikes as hard boundaries \u2014 nothing you suggest should lean on {dislikes}.\n\nThen explain notes the way they actually behave: top notes are the 15-minute first impression, heart notes are the 2\u20134 hour character of the scent, and base notes are what lingers on clothes the next day. For each of the 5 fragrances you suggest within {budget}, give the full notes breakdown and a plain-language verdict on why it fits my taste, my budget, and my occasion ({use_case}) \u2014 including whether its projection and longevity suit that setting (office-safe versus evening statement).\n\nRecommend across the price spectrum: at least one affordable standout, a mid-range best value, and only suggest a luxury pick if it genuinely earns the price within {budget}. Note the concentration (eau de toilette versus eau de parfum) and what that means for how many sprays I need and how long it lasts.\n\nThen give me a testing strategy, because buying blind is how people end up with a shelf of regrets: always sample on skin, never buy from a paper strip alone; wear each candidate a full day to experience the dry-down; test no more than two or three in one outing or everything blurs together; and test in the context I will actually wear it. Point me to where samples come from cheaply \u2014 discovery sets, decant sellers, department-store counters \u2014 and where the deals are (authorized discounters, seasonal sales), plus how to spot fakes and why proper storage (cool, dark, away from bathrooms) protects the bottle. Calibrate the hand-holding to my experience level ({tried_samples}) \u2014 skip the basics if I have sampled before, keep the guidance thorough if I am new.\n\nEnd with a buying plan: which two to sample first, what size bottle to buy once I commit (30ml if I rotate scents, 50\u2013100ml for a daily signature), and the one-sentence test each finalist must pass.",
    "description": "Maps your taste to fragrance families, suggests five fragrances with notes breakdowns, and gives testing tips and deal sources.",
    "category": "shopping",
    "variables": {
      "scent_preferences": {
        "label": "Scent Likes",
        "question": "What scents do you like?",
        "type": "text",
        "placeholder": "e.g., Warm vanilla, citrus",
        "required": true
      },
      "dislikes": {
        "label": "Dislikes",
        "question": "What scents do you dislike?",
        "type": "text",
        "placeholder": "e.g., Heavy florals, smoky oud",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 90",
        "required": true
      },
      "use_case": {
        "label": "Main Occasion",
        "question": "When will you mainly wear it?",
        "type": "select",
        "options": [
          "Everyday",
          "Work/office",
          "Evenings & events",
          "All-rounder"
        ],
        "required": true
      },
      "tried_samples": {
        "label": "Sampled Before",
        "question": "Have you sampled fragrances on your own skin before?",
        "type": "boolean",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Haircare Plan Builder",
    "displayDescription": "A haircare shopping plan with product layering order, ingredient guidance for your hair type, and mistakes to avoid.",
    "id": "shopping-047",
    "prompt": "Create a complete haircare shopping plan for my {hair_type} hair. My goals are {hair_goals}, my budget is {budget}, my hair is color-treated: {color_treated}, I regularly use heat styling tools: {heat_styling}, and I wash my hair {wash_frequency}.\n\nStart by translating my hair type and goals into a strategy: what my hair actually needs most (moisture, protein, scalp care, frizz control, volume) and the order to prioritize, because {hair_goals} determines whether I should spend on hydration, bond repair, or styling products. Explain the product layering order I will follow every wash day \u2014 shampoo (scalp only), conditioner (mid-lengths to ends), weekly mask or treatment, then leave-in, then stylers on damp hair \u2014 and why each step exists.\n\nList the essential products within {budget}: the non-negotiable core (a shampoo matched to my scalp, a conditioner matched to my lengths, one treatment, one leave-in or styler), plus one optional upgrade worth adding only if budget remains. For each product, explain in plain terms what it does, how often to use it given that I wash {wash_frequency}, and how much to actually use \u2014 most people use two to three times more product than needed, which wastes money and weighs hair down.\n\nGive me ingredient guidance specific to {hair_type} hair: when sulfates are fine versus when to avoid them, how silicones behave on my hair type (smoothing versus buildup), and the moisture-protein balance \u2014 too much protein makes hair brittle, too much moisture makes it limp \u2014 with the signs I have tipped too far either way. Since my hair is color-treated ({color_treated}), include color-safe requirements (sulfate-conscious cleansing, UV and heat protection to prevent fading) when relevant. Since I use heat tools ({heat_styling}), make a heat protectant non-negotiable and explain the temperature and technique rules that matter more than any product.\n\nThen list the common buying mistakes people with {hair_type} hair make \u2014 over-washing curls and coils, piling heavy silicones on fine hair, buying a 10-product routine when technique is the real problem, chasing repair shampoos that cannot fix split ends \u2014 and how to avoid each. End with a 4\u20136 week assessment plan: what improvement looks like, when to swap a product versus fix my technique, and the budget-friendly restock order so I replace staples before they run out.",
    "description": "Lists essential products within budget, explains what each does and how often to use it, with ingredient rules and a 4\u20136 week assessment plan.",
    "category": "shopping",
    "variables": {
      "hair_type": {
        "label": "Hair Type",
        "question": "What is your hair type?",
        "type": "select",
        "options": [
          "Straight",
          "Wavy",
          "Curly",
          "Coily",
          "Fine",
          "Thick"
        ],
        "required": true
      },
      "hair_goals": {
        "label": "Hair Goals",
        "question": "What are your hair goals?",
        "type": "text",
        "placeholder": "e.g., Less frizz, more volume",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 80",
        "required": true
      },
      "color_treated": {
        "label": "Color-Treated",
        "question": "Is your hair color-treated?",
        "type": "boolean",
        "required": false
      },
      "heat_styling": {
        "label": "Heat Styling",
        "question": "Do you regularly use heat styling tools?",
        "type": "boolean",
        "required": false
      },
      "wash_frequency": {
        "label": "Wash Frequency",
        "question": "How often do you wash your hair?",
        "type": "select",
        "options": [
          "Daily",
          "2-3x per week",
          "Weekly"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Baby Registry Essentials",
    "displayDescription": "A prioritized baby registry with must-haves, price tiers for gift-givers, and overhyped items to skip.",
    "id": "shopping-048",
    "prompt": "Build me a complete baby registry essentials list with a total budget of {budget}. I am expecting twins or multiples: {twins}. My living space is small, so bulky gear is a problem: {small_space}. My feeding plan is: {feeding_plan}.\n\nStart by separating true must-haves for the first 3 months from nice-to-haves, because registries balloon when everything looks essential. Organize the must-haves by category \u2014 sleep, feeding, diapering, clothing, bath and health, and gear \u2014 with 2\u20134 specific items per category, realistic price points, and a running total that stays within {budget}. For each item, say in one sentence why it earns its place and what cheaper or simpler alternative works if gift-givers want options.\n\nTailor the list to my situation. Since my feeding plan is {feeding_plan}, include only the feeding gear that matches \u2014 do not pad a breastfeeding plan with formula systems or vice versa \u2014 and note the items worth waiting on until feeding is established. Since space is tight ({small_space}), swap every bulky default for its compact equivalent (mini crib or bassinet instead of a full crib, fold-flat stroller, collapsible bathtub) and flag anything that simply is not worth the footprint. Since multiples are a factor ({twins}), apply the doubling rule honestly: double the consumables and feeding gear, but do not double big-ticket items \u2014 one quality double stroller beats two singles, and babies can share many gear items in the early months.\n\nCreate three price tiers across the registry so every gift-giver has a comfortable option: under $25 everyday heroes (the items I will burn through fastest), $25\u2013$75 mid-range workhorses, and a few big-ticket group-gift candidates \u2014 and tell me which big-ticket items are worth putting on the registry versus buying myself during a completion-discount window.\n\nThen give me the skip list: the overhyped registry items to leave off \u2014 wipe warmers, newborn shoes, too many newborn-size clothes (babies outgrow them in weeks), and single-purpose gadgets \u2014 with what to do instead for each. Add the timing playbook: what to have ready before birth, what can safely wait until month two or three, and how to use the registry completion discount (usually 10\u201315% near the due date) for the remaining big purchases. End with a final checklist I can review the week before my due date to confirm nothing essential is missing.",
    "description": "Organizes first-3-month essentials by category within budget, adapts to feeding plan, space, and multiples, with a skip list and timing playbook.",
    "category": "shopping",
    "variables": {
      "budget": {
        "label": "Total Budget",
        "question": "What is your total registry budget?",
        "type": "number",
        "placeholder": "e.g., 1500",
        "required": true
      },
      "feeding_plan": {
        "label": "Feeding Plan",
        "question": "What is your feeding plan?",
        "type": "select",
        "options": [
          "Breastfeeding",
          "Formula",
          "Combination",
          "Undecided"
        ],
        "required": true
      },
      "small_space": {
        "label": "Small Space",
        "question": "Is your living space small?",
        "type": "boolean",
        "required": false
      },
      "twins": {
        "label": "Twins/Multiples",
        "question": "Are you expecting twins or multiples?",
        "type": "boolean",
        "required": false
      }
    }
  },
  {
    "displayTitle": "School Supplies List",
    "displayDescription": "A school supplies list with quality-vs-cheap verdicts, a reuse audit, and a first-week checklist.",
    "id": "shopping-049",
    "prompt": "Create a complete school supplies shopping list for a {grade_level} student with a budget of {budget}. The school provided an official supply list: {has_school_list}. The student needs tech items: {needs_tech}.\n\nStart with the school list if I have one: go through it item by item, flag anything vague (\"notebooks\" \u2014 how many? what ruling?), and fill the gaps it leaves \u2014 schools list classroom items but never mention organization, comfort, or the tech students actually need. Then build the full list in three sections: classroom-required basics, organization supplies (the unglamorous items that determine whether homework survives the semester: folders, planner, labels, pencil case), and tech accessories matched to {needs_tech}.\n\nFor each item, give a buy-quality-versus-buy-cheap verdict with the reasoning: spend on the backpack (daily abuse for 180 days), pens and mechanical pencils the student will touch for hours, and any tech \u2014 cheap versions fail mid-semester and cost more replaced. Save on bulk consumables (pencils, erasers, glue sticks, filler paper) where store brands are identical. Tailor the specifics to {grade_level}: elementary needs art supplies, blunt scissors, and a sturdy lunchbox; middle school needs locker-friendly organization and a combination lock; high school needs a graphing calculator if the math track requires it, durable binders, and highlighters for heavy reading loads; college shifts toward dorm-adjacent basics, a reliable laptop setup, and far fewer paper supplies.\n\nBefore I buy anything new, run a reuse audit: list what to pull out from last year first (backpack if intact, scissors, rulers, calculators, pencil cases, binders with life left), and only then fill the gaps \u2014 this alone can cut {budget} spending by a third. Show me a budget breakdown by section so I can see where the money goes, and add timing tactics: tax-free weekends, late-August clearance, and which items to buy now versus wait for September sales.\n\nEnd with a first-week-of-school checklist: everything packed and labeled the night before, the daily-carry setup for the backpack, and the three things students always forget (a water bottle, a phone charger, and a signed form folder).",
    "description": "Builds classroom, organization, and tech supply lists for the grade level, with spend-vs-save guidance, reuse audit, and timing tactics.",
    "category": "shopping",
    "variables": {
      "grade_level": {
        "label": "Grade Level",
        "question": "What grade level?",
        "type": "select",
        "options": [
          "Elementary",
          "Middle school",
          "High school",
          "College"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your supplies budget?",
        "type": "number",
        "placeholder": "e.g., 100",
        "required": true
      },
      "has_school_list": {
        "label": "School List",
        "question": "Did the school provide an official supply list?",
        "type": "boolean",
        "required": false
      },
      "needs_tech": {
        "label": "Needs Tech",
        "question": "Does the student need tech items (laptop, headphones, calculator)?",
        "type": "boolean",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Back-to-School Clothes Plan",
    "displayDescription": "A back-to-school capsule wardrobe plan with outfit math, a budget-stretching shopping order, and fit checkpoints.",
    "id": "shopping-050",
    "prompt": "Plan a complete back-to-school wardrobe for a {grade_level} student with a clothing budget of {budget}. The local climate is: {climate}. Whether the school requires a uniform: {school_uniform}. The student is growing quickly right now: {growing_fast}.\n\nBuild the wardrobe as a mix-and-match capsule, not a pile of outfits: start with the formula \u2014 enough tops, bottoms, and layers that every top works with every bottom \u2014 and show the outfit math (for example, 5 tops \u00d7 3 bottoms \u00d7 2 layers creates weeks of combinations). List the specific versatile pieces for the first month, weighted to {climate}: breathable fabrics and shorts for hot climates, real layering pieces (hoodies, light jackets, long sleeves) for cold ones, and transitional layers for mild weather. If the school requires a uniform, pivot the plan \u2014 the budget goes to compliant uniform pieces in the right quantities plus the weekend and after-school wardrobe, which is where personal style actually lives.\n\nBalance trendy items with basics explicitly: cap trend pieces at about 20\u201330% of the budget, because basics get worn weekly and trends get worn twice. For {grade_level}, calibrate the trend pressure honestly \u2014 elementary kids need durability and play-friendly clothes, middle and high schoolers face real social pressure so pick two or three trend items strategically, college students need a step up in versatility (pieces that work for class, work, and going out).\n\nGive me the shopping order that stretches {budget} furthest: buy the basics first at full price in the right sizes, then hunt trends on clearance, end-of-season sales, and secondhand \u2014 never the reverse. Since the student is growing quickly ({growing_fast}), build in the growth strategy when relevant: do not overbuy any single size, leave room in shoes and pants, prioritize adjustable waists, and keep receipts because a growth spurt can obsolete a haul in weeks.\n\nAdd the laundry reality check: the minimum piece counts depend on how often laundry actually gets done \u2014 a once-a-week laundry household needs at least 5\u20137 everyday outfits, so be honest about the household's rhythm. Include fit checkpoints for the fitting room (sit down in pants, raise arms in tops, walk in shoes), a budget breakdown by category, and a final first-month packing list the student can check off.",
    "description": "Plans mix-and-match pieces for the first month, balances trends with basics, adapts to climate, uniforms, and growth spurts, with a shopping order that stretches the budget.",
    "category": "shopping",
    "variables": {
      "grade_level": {
        "label": "Grade Level",
        "question": "What grade level?",
        "type": "select",
        "options": [
          "Elementary",
          "Middle school",
          "High school",
          "College"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is the clothing budget?",
        "type": "number",
        "placeholder": "e.g., 250",
        "required": true
      },
      "climate": {
        "label": "Climate",
        "question": "What is the local climate?",
        "type": "select",
        "options": [
          "Hot",
          "Mild",
          "Cold"
        ],
        "required": true
      },
      "school_uniform": {
        "label": "School Uniform",
        "question": "Does the school require a uniform?",
        "type": "boolean",
        "required": false
      },
      "growing_fast": {
        "label": "Growing Fast",
        "question": "Is the student growing quickly right now?",
        "type": "boolean",
        "required": false
      }
    }
  },
  {
    "displayTitle": "College Packing List",
    "displayDescription": "A room-by-room college packing and shopping plan with a real budget breakdown, school-verification steps, and the items freshmen always forget.",
    "id": "shopping-051",
    "prompt": "You are helping a student move into {housing_type} for college with a total move-in budget of {budget}. They are coming from {distance_from_home} and move in on {move_in_date}. Build a complete, prioritized packing and shopping plan they can actually execute \u2014 not a generic checklist, but a decision-making plan tied to their housing type, budget, and move-in reality.\n\nOrganize the list by living zones: sleep and bedroom, bathroom and hygiene, desk and study, kitchen basics, clothing storage, tech and chargers, and documents and health essentials. For every item, assign one of three actions: bring from home, buy before moving, or buy after arriving. Bulky or heavy items \u2014 storage bins, laundry hamper, full-length mirror, desk fan, bedding bundles \u2014 usually belong in the buy-after-arriving column, especially for someone flying in who cannot haul them.\n\nBefore recommending anything, build in a verification step: have the buyer check the college's published move-in guide for what the school provides (most dorms include a bed frame, desk, and chair), the exact mattress size (usually Twin XL, and standard sheets will not fit), and the prohibited-items list. Flag the items freshmen always forget: a photo ID and health insurance cards, a small toolkit and flashlight, a surge protector (not a plain power strip, which violates most fire codes), laundry supplies plus the campus laundry payment method, a shower caddy and flip-flops for communal bathrooms, a desk lamp, basic first aid and any prescriptions, an umbrella, and cleaning basics like wipes and a small broom.\n\nAllocate the {budget} across categories with concrete dollar ranges and hold back a 10 percent contingency for the things they will not think of until week one; the allocations must add up to the budget. Match space-saving essentials to the housing type: under-bed bins and bed risers (only if allowed), over-door hooks, slim hangers, and a bedside caddy for a dorm double where floor space is shared; sturdier full-size storage for a suite or off-campus apartment.\n\nTie the plan to the move-in date: shop July and August back-to-school sales and any state tax-free weekend, order online two to three weeks ahead for delivery to the campus mail room, and buy heavy items at a store near campus after arrival. If they will have roommates, coordinate shared items like a mini-fridge, microwave, or TV so nothing gets duplicated.\n\nEnd with a final room-by-room checklist sorted into the three action columns, each item with an estimated price, plus a short list of items their housing typically bans and the three most common budget-busting mistakes freshmen make.",
    "description": "Builds a complete move-in plan for your housing type and budget, including what to bring, what to buy, and what to wait on.",
    "category": "shopping",
    "variables": {
      "housing_type": {
        "label": "Housing Type",
        "question": "What type of housing?",
        "type": "select",
        "options": [
          "Dorm double",
          "Dorm single",
          "Suite",
          "Off-campus apartment"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your move-in budget?",
        "type": "number",
        "placeholder": "e.g., 600",
        "required": true
      },
      "distance_from_home": {
        "label": "Distance From Home",
        "question": "How far are you moving?",
        "type": "select",
        "options": [
          "Local \u2014 I can drive supplies over",
          "Within driving distance",
          "Flying in \u2014 I'll ship or buy most things"
        ],
        "required": true
      },
      "move_in_date": {
        "label": "Move-in Date",
        "question": "When do you move in? (used to time sales and ordering)",
        "type": "date",
        "placeholder": "e.g., 2026-08-15",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Travel Packing List",
    "displayDescription": "A trip-specific packing list with outfit math, a laundry strategy, documents, tech, destination must-haves \u2014 and what to leave behind.",
    "id": "shopping-052",
    "prompt": "You are building a packing list for a {trip_length}-day trip to {destination} in {season}, for {travel_style} travel with {luggage_type} as the luggage. The traveler has these planned activities: {activities}. Make the list specific to this trip \u2014 no generic filler like \"pack comfortable shoes.\"\n\nStart with clothing math: give an outfit formula (how many tops, bottoms, layers, and pairs of shoes for the day count) built around a coordinated color palette so everything mixes and matches, plus a laundry plan for longer trips \u2014 hotel laundry, a laundromat day, or a sink-wash kit with quick-dry fabrics. Layer for the season and the destination's real weather, not the calendar season: include one layer warmer and one cooler than the forecast suggests, and add a compact rain layer or sun protection as appropriate.\n\nCover toiletries with a clear split: what to pack travel-size versus what is cheaper or easier to buy at the destination, plus a small health kit with any prescriptions, motion sickness remedies, blister care, and stomach remedies. Build a tech kit for the destination country: the correct plug adapter type, a power bank, charging cables, and a connectivity plan (eSIM, local SIM, or roaming). For business travel, add wrinkle-resistant outfit math and presentation-ready details like a steamer alternative.\n\nHandle documents and money carefully: passport validity (many countries require six months beyond the trip dates), any visa requirements for this destination, travel insurance, and digital plus paper copies of key documents stored separately from the originals. Add destination-specific must-haves \u2014 modest dress for religious sites, reef-safe sunscreen for marine destinations, insect repellent, voltage notes \u2014 and a firm leave-behind list: valuables that do not need the trip, appliances the hotel already provides, and anything illegal or restricted at the destination.\n\nFinish with a security note (splitting cash and cards, using the hotel safe, what rides in the day bag versus stays at the hotel) and a pre-departure timeline: one week out, the night before, and the morning of departure.",
    "description": "Generates a detailed packing list tailored to your destination, season, trip length, and travel style.",
    "category": "shopping",
    "variables": {
      "trip_length": {
        "label": "Trip Length",
        "question": "How many days is the trip?",
        "type": "number",
        "placeholder": "e.g., 7",
        "required": true
      },
      "destination": {
        "label": "Destination",
        "question": "Where are you going?",
        "type": "text",
        "placeholder": "e.g., Tokyo, Japan",
        "required": true
      },
      "season": {
        "label": "Season",
        "question": "What season will it be there?",
        "type": "select",
        "options": [
          "Spring",
          "Summer",
          "Fall",
          "Winter"
        ],
        "required": true
      },
      "travel_style": {
        "label": "Travel Style",
        "question": "What is your travel style?",
        "type": "select",
        "options": [
          "Budget backpacking",
          "Mid-range",
          "Luxury",
          "Business"
        ],
        "required": true
      },
      "activities": {
        "label": "Planned Activities",
        "question": "What activities do you have planned? (helps tailor clothing and gear)",
        "type": "text",
        "placeholder": "e.g., beach days, old-town walking, one nice dinner",
        "required": false
      },
      "luggage_type": {
        "label": "Luggage Type",
        "question": "What luggage are you bringing?",
        "type": "select",
        "options": [
          "Carry-on only",
          "Backpack",
          "Checked suitcase"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Carry-On Essentials",
    "displayDescription": "The ultimate carry-on system: in-flight comfort, delay survival, TSA rules, and a packing order for one bag plus a personal item.",
    "id": "shopping-053",
    "prompt": "You are creating the ultimate carry-on packing list for a {flight_length} flight to {destination}, flying {seat_class}. They will have a layover or connecting flight: {has_layover}. Everything must fit in one carry-on plus one personal item \u2014 treat the personal item as the in-flight survival kit and the carry-on as destination backup.\n\nStart with comfort scaled to the flight length. For medium and long-haul flights, include a genuinely supportive neck pillow (not the flimsy U-shape), earplugs or noise-cancelling earbuds, an eye mask, compression socks, lip balm and moisturizer for dry cabin air, and an empty water bottle to fill after security. For short flights, trim this to the true essentials so the bag stays light.\n\nAdd entertainment that does not depend on wifi: downloaded shows, books, and podcasts, plus a full battery plan \u2014 a power bank under 100Wh with the right cables \u2014 since lithium batteries must fly in the cabin and are never allowed in checked bags.\n\nBuild a delay and disruption kit, especially important with a connection: snacks that survive a long day, any medications in their original packaging, a toothbrush and basic toiletries, and a change of clothes or at least a fresh top in the personal item. The governing rule is simple: never put anything in a checked bag that you cannot afford to lose for 48 hours.\n\nSpell out TSA-friendly rules clearly: the 3-1-1 liquids rule and which common items count as liquids (peanut butter and mascara do), lithium battery rules, razor rules (safety razor blades are not allowed; cartridge razors are), multi-tool restrictions, and rules for food and medically necessary liquids. Then give a security-line flow: slip-on shoes, laptop and liquids bag accessible at the very top of the bag, nothing buried.\n\nFinish with arrival readiness: a destination-appropriate top layer for stepping off the plane, the correct plug adapter for the destination country, and the hotel or host address saved offline. End with a packing-order guide \u2014 what goes on top for mid-flight access \u2014 and a reminder to check the airline's carry-on size and weight limits before leaving.",
    "description": "Builds a complete carry-on packing list with comfort, entertainment, delay prep, and TSA rules for your flight.",
    "category": "shopping",
    "variables": {
      "flight_length": {
        "label": "Flight Length",
        "question": "How long is the flight?",
        "type": "select",
        "options": [
          "Short under 3h",
          "Medium 3-6h",
          "Long-haul 6h+"
        ],
        "required": true
      },
      "destination": {
        "label": "Destination",
        "question": "Where are you flying to?",
        "type": "text",
        "placeholder": "e.g., London",
        "required": true
      },
      "has_layover": {
        "label": "Layover",
        "question": "Will you have a layover or connecting flight?",
        "type": "boolean",
        "required": true
      },
      "seat_class": {
        "label": "Seat Class",
        "question": "What class are you flying?",
        "type": "select",
        "options": [
          "Economy",
          "Premium economy",
          "Business or first"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Camping Gear List",
    "displayDescription": "A complete camping gear list with must-have vs. nice-to-have tiers, rent-vs-buy guidance, and safety essentials for your conditions.",
    "id": "shopping-054",
    "prompt": "You are building a camping gear shopping list for {group_size} people on a {trip_length}-night trip, with a total gear budget of {budget}. The camper is a {experience_level} camper, expects these conditions: {weather_conditions}, and this is a {trip_style} trip. Car camping and backpacking need completely different gear \u2014 weight and bulk matter enormously for backpacking and barely at all for car camping \u2014 so let the trip style drive every recommendation.\n\nOrganize gear by category: shelter, sleep systems, cooking and food, clothing, water, lighting, and safety. Mark every item as must-have or nice-to-have, and scale quantities to the group: tent capacity ratings are optimistic, so size up; cooking gear must serve the whole group's meals at once, not one camper at a time. For sleep, explain that a sleeping bag's temperature rating must match the expected overnight low, and that a sleeping pad's insulation (R-value) matters as much as the bag itself.\n\nAllocate the {budget} across categories with concrete dollar ranges that add up to the total, and split every big purchase into buy, rent, or borrow. First-timers should rent tents, sleeping bags, and packs rather than buying cheap versions they will replace within a year, and should buy personal items like headlamps, water bottles, and broken-in footwear. Name what to never buy cheap: rain protection, sleep insulation matched to the expected conditions, and footwear.\n\nCover safety seriously: a real first aid kit (not a novelty pouch), a headlamp plus spare batteries, offline navigation, sun and insect protection, fire regulations and current restrictions at the destination, and food storage rules \u2014 including bear-safe storage where required. Enforce the no-cotton rule for clothing in cool or wet conditions and require a rain layer regardless of the forecast.\n\nFlag beginner red flags: untested gear, brand-new boots on day one, a summer bag in shoulder season, skipping the tent footprint, and overpacking \"just in case\" items that never leave the car. End with a pre-trip checklist \u2014 pitch the tent at home first, test the stove, check the weather window \u2014 and leave-no-trace basics.",
    "description": "Builds a camping gear shopping list for your group, trip length, conditions, and budget, with rent-vs-buy advice.",
    "category": "shopping",
    "variables": {
      "group_size": {
        "label": "Group Size",
        "question": "How many people are going?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "trip_length": {
        "label": "Nights",
        "question": "How many nights?",
        "type": "number",
        "placeholder": "e.g., 3",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your gear budget?",
        "type": "number",
        "placeholder": "e.g., 500",
        "required": true
      },
      "experience_level": {
        "label": "Experience",
        "question": "What is your camping experience?",
        "type": "select",
        "options": [
          "First-timer",
          "Occasional",
          "Experienced"
        ],
        "required": true
      },
      "trip_style": {
        "label": "Trip Style",
        "question": "What kind of camping trip is this?",
        "type": "select",
        "options": [
          "Car camping \u2014 drive right to the site",
          "Backpacking \u2014 carry everything in"
        ],
        "required": true
      },
      "weather_conditions": {
        "label": "Expected Conditions",
        "question": "What weather and conditions do you expect?",
        "type": "text",
        "placeholder": "e.g., cool nights, chance of rain",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Hiking Gear List",
    "displayDescription": "A terrain- and season-specific hiking gear list covering the ten essentials, footwear fit, layering, and a phased buying plan.",
    "id": "shopping-055",
    "prompt": "You are creating a hiking gear list for {hike_type} in {terrain} during {season}, for a {experience_level} hiker with a gear budget of {budget}. Water on the trail is: {water_availability}. Let the hike type, terrain, and season drive every choice \u2014 a desert day hike and an alpine multi-day trek share almost no gear list.\n\nStart with the ten essentials, adapted to this specific trip: navigation, headlamp, sun protection, first aid, knife and repair kit, fire, emergency shelter, extra food, extra water, and extra clothes \u2014 with one sentence on why each one matters here. For overnight and multi-day hikes, add the big three: shelter, sleep system, and cooking, with weight guidance since every extra pound multiplies over miles.\n\nGive footwear its own serious treatment: how to get the fit right (shop in the afternoon when feet are swollen, a thumb's width of toe room, never hike new boots unbroken), when trail runners beat boots and vice versa for this terrain, and why socks matter as much as shoes. Build a layering system for the season \u2014 base, insulation, and shell \u2014 with the no-cotton rule in cool or wet conditions and a sun and heat strategy for warm ones.\n\nCover navigation redundantly: offline maps downloaded in advance plus a paper map and the knowledge to use them, and a trip itinerary left with someone at home. Add terrain-specific safety: water planning matched to the stated availability, weather windows and turnaround times in alpine terrain, heat illness prevention in desert heat, and wildlife precautions where relevant.\n\nGive a phased buying plan that respects the budget: invest first in footwear and a pack that fits, then shelter and sleep for overnights; save money where it is safe (used trekking poles, a simple headlamp) and never where it is not (boots that do not fit, a pack that hurts after mile three). Flag red flags: cotton layers, a \"waterproof\" jacket that is not, and any gear bought the night before the trip. End with maintenance basics that extend gear life \u2014 cleaning, reproofing shells, and proper storage.",
    "description": "Creates a hiking gear list for your hike type, terrain, and season, with safety priorities and what to buy first.",
    "category": "shopping",
    "variables": {
      "hike_type": {
        "label": "Hike Type",
        "question": "What type of hikes?",
        "type": "select",
        "options": [
          "Day hikes",
          "Overnight",
          "Multi-day backpacking"
        ],
        "required": true
      },
      "terrain": {
        "label": "Terrain",
        "question": "What kind of terrain?",
        "type": "text",
        "placeholder": "e.g., Desert trails, alpine",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your gear budget?",
        "type": "number",
        "placeholder": "e.g., 300",
        "required": true
      },
      "experience_level": {
        "label": "Experience",
        "question": "What is your hiking experience?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Experienced"
        ],
        "required": true
      },
      "season": {
        "label": "Season",
        "question": "What season will you be hiking in?",
        "type": "select",
        "options": [
          "Spring",
          "Summer",
          "Fall",
          "Winter"
        ],
        "required": true
      },
      "water_availability": {
        "label": "Trail Water",
        "question": "Is there reliable water on the trail?",
        "type": "select",
        "options": [
          "Reliable water sources on the trail",
          "Uncertain \u2014 I will carry all my water",
          "Unknown"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Home Gym Builder",
    "displayDescription": "A home gym design with prioritized equipment, a three-phase buying plan, and flooring, ventilation, and noise handled for your space.",
    "id": "shopping-056",
    "prompt": "You are designing a home gym for someone with {fitness_goals} goals, training in a {space} with a total budget of {budget}. The floor is {floor_type}, they must keep noise down for neighbors or household: {noise_limits}, and their training experience is {training_experience}. Match every recommendation to these realities \u2014 a garage strength setup and a quiet apartment cardio corner are different projects.\n\nRecommend equipment in strict priority order, explaining exactly what each piece trains and why it earns its place for these goals. For strength, compare the adjustable-dumbbell path versus a rack, barbell, and plates path given the space and budget; for cardio, compare rower, bike, jump rope, and running options on space, noise, and cost; for general fitness, anchor on versatile pieces like kettlebells, a pull-up bar, and resistance bands; for yoga and mobility, a quality mat, blocks, strap, and foam roller.\n\nGive a phased buying plan in three phases with per-phase spending that adds up to the budget. Phase 1 is the foundation they can train fully with on day one; Phase 2 adds the next highest-value pieces after a month or two of consistent training; Phase 3 is the nice-to-have upgrades. Address the room itself: flooring matched to the floor type (rubber horse-stall mats over concrete, interlocking foam or mats over hard floors with a caution about heavy drops, carpet considerations), ventilation for garages and basements (a fan is not optional), ceiling height for overhead pressing and pull-up bars, and noise control \u2014 bumper plates, a lifting platform, and adjustable dumbbells instead of dropping iron when noise is limited.\n\nInclude buy-used guidance: dumbbells, plates, and benches are excellent used; bands, mats, and anything with wear parts should be bought new. Name what not to buy: single-use gimmick machines, cheap cable stations, and anything without a stated weight rating. Cover safety: rack safety arms, collars on every loaded bar, and checking weight ratings before trusting equipment. End with two or three starter workouts matched to their goals and experience level so the gym gets used from day one.",
    "description": "Designs a home gym for your goals, space, and budget, with a phased buying plan and room setup guidance.",
    "category": "shopping",
    "variables": {
      "fitness_goals": {
        "label": "Fitness Goals",
        "question": "What are your fitness goals?",
        "type": "select",
        "options": [
          "Strength",
          "Cardio",
          "General fitness",
          "Yoga and mobility",
          "Weight loss"
        ],
        "required": true
      },
      "space": {
        "label": "Space",
        "question": "What space do you have?",
        "type": "select",
        "options": [
          "Corner of a room",
          "Spare bedroom",
          "Garage",
          "Basement"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 800",
        "required": true
      },
      "floor_type": {
        "label": "Floor Type",
        "question": "What kind of floor will the gym sit on?",
        "type": "select",
        "options": [
          "Concrete",
          "Hardwood or laminate",
          "Carpet"
        ],
        "required": true
      },
      "noise_limits": {
        "label": "Noise Limits",
        "question": "Must keep noise down for neighbors or household?",
        "type": "boolean",
        "required": true
      },
      "training_experience": {
        "label": "Training Experience",
        "question": "What is your training experience?",
        "type": "select",
        "options": [
          "Beginner \u2014 still learning form",
          "Intermediate",
          "Experienced"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Sports Gear Picker",
    "displayDescription": "A sport-specific gear plan with essential vs. wait tiers, fit and quality guidance, and non-negotiable safety equipment.",
    "id": "shopping-057",
    "prompt": "You are helping someone gear up for {sport} as a {skill_level} with a gear budget of {budget}. They train {training_frequency} and are planning to compete in the next 12 months: {competing}. Sort everything into three tiers: essential (needed to participate safely), optional upgrades (worth it once committed), and wait (buy only after months of consistent play).\n\nFor each essential item, explain what to look for in quality and fit: which items must be tried on in person (footwear, helmets, gloves, protective gear), sizing quirks to know, and the quality cues that separate good gear from junk \u2014 materials, stitching, and certifications \u2014 without drowning them in brand names. Treat safety equipment as non-negotiable: list exactly which protective gear this sport requires, the certification standards to check, and the replacement rule after any significant impact. Never recommend uncertified or counterfeit safety gear.\n\nGive a buy order that respects the budget: rent or borrow first if they are new to the sport, then buy what touches the body (shoes, helmet, gloves, mouthguard) new and properly fitted, and consider used for durable hard goods like bags, pads, and sticks \u2014 with the hard rule that helmets and anything impact-absorbing are never bought used. Allocate the {budget} across the tiers with concrete ranges that add up to the total.\n\nFlag the classic beginner mistakes: buying pro-level gear before knowing they will stick with the sport, choosing gear they will \"grow into\" instead of gear that fits now, ignoring maintenance, and skipping the unglamorous consumables (socks, grips, strings, wax) that affect performance daily. If they are competing, add the competition extras: uniforms or dress code, backup essentials, and travel considerations. End with maintenance and lifespan guidance \u2014 what wears out, how to inspect it, when to replace it \u2014 plus the single highest-value first purchase if the budget only covers one thing.",
    "description": "Builds a gear plan for your sport and skill level, with buying tiers, fit guidance, and safety must-haves.",
    "category": "shopping",
    "variables": {
      "sport": {
        "label": "Sport",
        "question": "Which sport?",
        "type": "text",
        "placeholder": "e.g., Rock climbing",
        "required": true
      },
      "skill_level": {
        "label": "Skill Level",
        "question": "What is your skill level?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Advanced"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 400",
        "required": true
      },
      "competing": {
        "label": "Competing",
        "question": "Planning to compete in the next 12 months?",
        "type": "boolean",
        "required": true
      },
      "training_frequency": {
        "label": "Training Frequency",
        "question": "How often will you train or play?",
        "type": "select",
        "options": [
          "About once a week",
          "2-3 times per week",
          "4+ times per week"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Hobby Starter Kit",
    "displayDescription": "A hobby starter kit calibrated to your commitment level, with true-minimum tools, quality traps to avoid, and three starter projects.",
    "id": "shopping-058",
    "prompt": "You are building a starter kit for getting into {hobby} with a starter budget of {budget}. Their commitment level is {commitment_level} and their workspace is a {workspace}. Calibrate the kit to the commitment: someone just testing needs the cheapest viable path to a finished first project, while a committed beginner can invest in tools that last for years.\n\nList the true-minimum kit first \u2014 the smallest set of tools and materials that produces a real, satisfying result \u2014 then the full starter kit, with each item's purpose explained in one line. For each category, say where cheap is fine and where cheap ruins the experience. Every hobby has one or two items where the bargain version is so bad it convinces beginners the hobby is not for them; naming those items is the most valuable thing this list can do.\n\nCover the common beginner buying mistakes: buying the pro kit before knowing they enjoy the hobby, buying every accessory instead of the core tools, choosing the wrong grade of consumables, and buying in bulk too early. Suggest three starter projects in increasing difficulty, each with what it teaches and roughly what it costs in materials, so the first weekend has a concrete plan.\n\nMap the ongoing reality: consumable costs per project, free or cheap learning resources to use before paying for courses, how to set up the workspace for this hobby's mess and storage needs, and the upgrade path \u2014 what to buy next if they are still doing this in three months. Also give a simple way to judge progress without new gear: the first three projects should each introduce one new technique, and only once all three are finished should any upgrade be considered, which keeps spending tied to skill rather than enthusiasm.\n\nAllocate the {budget} across tools, materials, and a small contingency, with the numbers adding up to the total. End with red flags for hobby-specific junk (kits padded with filler items, tools that look professional but are toys) and the single first purchase to make this week.",
    "description": "Builds a starter kit for your hobby and budget, with beginner buying mistakes to avoid and projects to try first.",
    "category": "shopping",
    "variables": {
      "hobby": {
        "label": "Hobby",
        "question": "Which hobby?",
        "type": "text",
        "placeholder": "e.g., Sourdough baking",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your starter budget?",
        "type": "number",
        "placeholder": "e.g., 150",
        "required": true
      },
      "commitment_level": {
        "label": "Commitment Level",
        "question": "How committed are you to this hobby?",
        "type": "select",
        "options": [
          "Just testing \u2014 keep it cheap",
          "Casual \u2014 I'll do this for a few months",
          "Committed \u2014 investing for the long run"
        ],
        "required": true
      },
      "workspace": {
        "label": "Workspace",
        "question": "What kind of workspace do you have?",
        "type": "select",
        "options": [
          "Small apartment",
          "Spare room or corner",
          "Garage or dedicated space"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Craft Supplies List",
    "displayDescription": "A craft supplies list with beginner-relevant quality tiers, kid-safe options, storage solutions, and projects with full material lists.",
    "id": "shopping-059",
    "prompt": "You are creating a craft supplies shopping list for {craft_type} projects with a budget of {budget}. The crafter's experience is {craft_experience}, and kids will be involved: {kids_involved}. Tune everything to the craft and the crafter: a total beginner needs forgiving materials and fewer choices, while someone who has dabbled can handle quality tiers.\n\nList must-have materials and tools first, then nice-to-haves to add later, with each item's purpose in one line. Explain the quality differences that actually matter for beginners: which budget supplies work perfectly well, and which cheap versions produce frustrating results that make beginners quit \u2014 this distinction is the heart of a good list. If kids are involved, recommend only non-toxic, age-appropriate materials, note what needs adult supervision (heat tools, sharp tools, small parts), and keep the workspace setup kid-friendly. Cover general safety too: ventilation for resins, paints, and adhesives, and safe handling of anything hot or sharp.\n\nSuggest storage solutions matched to the craft's mess level and the space available, since supplies scattered across a home kill momentum. Include two to three beginner projects sequenced by difficulty, each with its complete material list and rough cost, so the shopping list maps directly to making things.\n\nGive buying strategy: where to shop (craft store coupons and sales cycles, when bulk buying makes sense), what never to buy in bulk as a beginner (perishables like certain paints, mediums, and adhesives that dry out), and the one adhesive or fastening method that suits this craft's materials \u2014 beginners fail at adhesion constantly. Add a test-piece habit: every new material or technique gets tried on a scrap first, which is the cheapest insurance against ruining a project with expensive supplies.\n\nAllocate the {budget} across tools, materials, storage, and a small contingency, with the numbers adding up to the total. End with the most common beginner mistakes for this craft and the single best first purchase.",
    "description": "Creates a craft supplies shopping list for your craft and budget, with quality guidance and beginner projects.",
    "category": "shopping",
    "variables": {
      "craft_type": {
        "label": "Craft Type",
        "question": "What type of crafts?",
        "type": "text",
        "placeholder": "e.g., Candle making",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 120",
        "required": true
      },
      "craft_experience": {
        "label": "Craft Experience",
        "question": "What is your experience with this craft?",
        "type": "select",
        "options": [
          "Total beginner",
          "Dabbled before"
        ],
        "required": true
      },
      "kids_involved": {
        "label": "Kids Involved",
        "question": "Will kids be crafting too?",
        "type": "boolean",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Reading List Builder",
    "displayDescription": "A leveled 8\u201310 book reading list with buy-vs-borrow guidance, a rationale-driven reading order, and the best book to start this week.",
    "id": "shopping-060",
    "prompt": "You are building a reading list to help someone learn about {topic}. Their goal is {reading_goal}, their current level is {current_level}, and they prefer {preferred_format}. Recommend eight to ten books ordered from beginner to advanced, tuned to the goal \u2014 a career builder needs applicable depth, a curious reader needs engaging breadth, and a student needs the texts that survive coursework.\n\nFor each book, explain in two to three sentences what it covers, who it is for, and what it adds that the other books do not. Note edition issues: which books have newer editions worth getting and which older classics are fine in any edition. Then give the recommended reading order with a sentence of rationale per step \u2014 foundations first, then depth, then contrarian or advanced views \u2014 and mark which books to skip if time is short.\n\nAdvise buy versus borrow per book, tied to the preferred format: reference books and ones worth annotating are buys, narrative one-reads are library loans, and note which titles work well as audiobooks versus which demand print for diagrams or dense argument. Add two or three supplementary resources \u2014 essays, podcasts, or documentaries \u2014 that accelerate the learning, plus a realistic pace: approximate hours per book and a reading order that fits a busy schedule.\n\nDescribe how to read actively: one written takeaway per book, and for career or study goals, how to turn notes into usable knowledge. Suggest a revisit rule: the single most important book on the list gets re-read or skimmed again after finishing the rest, since the later books change what the first one means.\n\nFlag red flags: pop treatments with thin sourcing, books that are three hundred pages for a thirty-page idea, and anything whose core claims have been seriously challenged \u2014 name the challenge rather than silently dropping the book. End with the single best book to start this week and why it is the right first step.",
    "description": "Builds a reading list for your topic and goal, with book-by-book guidance, reading order, and buy-vs-borrow advice.",
    "category": "shopping",
    "variables": {
      "topic": {
        "label": "Topic",
        "question": "What topic do you want to learn about?",
        "type": "text",
        "placeholder": "e.g., Behavioral economics",
        "required": true
      },
      "current_level": {
        "label": "Current Level",
        "question": "What is your current level on this topic?",
        "type": "select",
        "options": [
          "Total beginner",
          "Some background",
          "Already advanced"
        ],
        "required": true
      },
      "preferred_format": {
        "label": "Preferred Format",
        "question": "How do you prefer to read?",
        "type": "select",
        "options": [
          "Physical books",
          "Ebooks",
          "Audiobooks",
          "Mix of formats"
        ],
        "required": true
      },
      "reading_goal": {
        "label": "Reading Goal",
        "question": "What is your goal for learning this topic?",
        "type": "select",
        "options": [
          "Career or skill building",
          "Deep expertise",
          "Casual curiosity",
          "School or coursework"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Board Game Recommender",
    "displayDescription": "Get six tailored board game picks matched to your group's size, tastes, experience level, and budget, with a clear buy-first recommendation.",
    "id": "shopping-061",
    "prompt": "You are a board game expert helping a buyer pick games for a regular group of {group_size} players with these tastes: {preferences}. The group's overall experience level is {experience_level}, and a typical session should run no longer than about {max_play_time} minutes. The total budget for this purchase is {budget}.\n\nStart by translating this group profile into practical buying constraints: what complexity level the group can actually handle, whether competitive or cooperative games are the safer bet, how downtime between turns will feel at {group_size} players, and any themes or mechanics to lean into or avoid given their tastes.\n\nThen recommend exactly 6 games that genuinely play well at {group_size} players \u2014 not games where that player count means hours of waiting between turns. Spread the six across at least three different styles (for example: cooperative, engine-building, social deduction, party games, deck-building, tile-laying), and mix complexity so there is a gentle entry point plus at least one deeper game for when the group wants more. For each game, give the name and publisher, the typical price range, the realistic play time with {group_size} players (not just the optimistic number on the box), the player count where it shines, a concrete explanation of what makes it fun for this specific group, and the type of player who will love it versus bounce off it.\n\nAfter the six, name the single game to buy FIRST and explain why it is the best starting point for this group \u2014 weigh teachability, table appeal, replayability, and fit within the budget. Then propose a sensible buy order for the remaining five, noting which ones are worth waiting for a sale on. Finish with practical buying advice: where to find good prices on board games (local game stores, online retailers, the used market), what to check before buying an edition (base game versus expansions, edition differences, player-count variants), and red flags such as games with famously bad rulebooks or known misprint issues. State clearly whether all six fit inside the {budget} or whether this is a phased shopping plan.",
    "description": "A detailed board game buying plan that matches six varied games to your group size, preferences, and budget, ranked with a buy-first pick.",
    "category": "shopping",
    "variables": {
      "group_size": {
        "label": "Group Size",
        "question": "How many players?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "preferences": {
        "label": "Preferences",
        "question": "What kinds of games do you enjoy?",
        "type": "text",
        "placeholder": "e.g., Strategy, cooperative, under an hour",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your total budget?",
        "type": "number",
        "placeholder": "e.g., 150",
        "required": true
      },
      "experience_level": {
        "label": "Experience Level",
        "question": "How experienced is your group with modern board games?",
        "type": "select",
        "options": [
          "Mostly new to hobby games",
          "Played some, still casual",
          "Experienced gamers"
        ],
        "required": true
      },
      "max_play_time": {
        "label": "Max Session Time",
        "question": "What's the longest a game session should run (minutes)?",
        "type": "number",
        "placeholder": "e.g., 90",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Pet Supplies Starter Kit",
    "displayDescription": "Build a complete first-week starter kit for your new pet, prioritized by urgency with real costs and the buying mistakes to avoid.",
    "id": "shopping-062",
    "prompt": "You are helping a first-time {pet_type} owner prepare for a pet at the {pet_age_stage} stage, living in a {living_space}, with a starter budget of {budget}. Their goal is to buy the right things once, avoid the junk the pet industry pushes on new owners, and be fully ready for week one.\n\nOrganize the kit into four sections: food and feeding, shelter and comfort, health and safety, and enrichment. For each item, name the specific thing to buy, give a realistic price range, explain what separates a quality version from a waste of money, and say what to skip entirely. Prioritize ruthlessly: label every item as 'buy before day one' or 'buy in weeks 2-4', so the week-one list stays small and affordable. The week-one list must cover everything the animal needs to eat, sleep, and stay safe from the very first night, sized appropriately for the {pet_age_stage} stage.\n\nAdd realistic ongoing cost estimates: monthly spending on food, litter or bedding, and consumables for this pet type, plus the big annual costs people forget \u2014 vet checkups, vaccinations, grooming, and an emergency fund or insurance. Total the first-year cost honestly so there are no surprises.\n\nFlag the classic first-time owner buying mistakes for a {pet_type}: overpriced all-in-one starter bundles, wrong-sized habitats or carriers, unsafe toys or chews, trendy 'premium' food with no real nutritional advantage, and anything bought before checking with the breeder, shelter, or vet. Include the safety questions to answer before buying: material safety, size appropriateness for this age stage, and what hazards to remove in a {living_space}.\n\nClose with a first-48-hours checklist: book a vet appointment, confirm return policies on big-ticket items in case the fit is wrong, and identify one trusted source (vet, shelter, or reputable care guide) for this specific pet. Keep the starter kit within the {budget} and clearly separate one-time costs from recurring ones.",
    "description": "A prioritized starter kit for a new pet with week-one essentials, ongoing cost estimates, and first-time owner buying mistakes to avoid.",
    "category": "shopping",
    "variables": {
      "pet_type": {
        "label": "Pet Type",
        "question": "What type of pet?",
        "type": "select",
        "options": [
          "Dog",
          "Cat",
          "Fish",
          "Bird",
          "Reptile",
          "Small mammal"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your starter budget?",
        "type": "number",
        "placeholder": "e.g., 300",
        "required": true
      },
      "pet_age_stage": {
        "label": "Age Stage",
        "question": "How old is the pet?",
        "type": "select",
        "options": [
          "Baby (under 6 months)",
          "Young",
          "Adult",
          "Senior"
        ],
        "required": true
      },
      "living_space": {
        "label": "Living Space",
        "question": "Where do you live?",
        "type": "select",
        "options": [
          "Apartment",
          "House with yard",
          "Dorm or shared housing",
          "Rural property"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Plant Parent Starter Kit",
    "displayDescription": "Get five beginner-proof plants matched to your light, pets, and watering habits, plus the full starter kit and care cards.",
    "id": "shopping-063",
    "prompt": "You are helping a brand-new plant parent who has {light_conditions} light in their home and a budget of {budget}. They {has_pets} have pets, and their watering habit is best described as: {watering_style}. Recommend exactly 5 beginner-friendly houseplants that match all of these constraints, and be honest about compromises \u2014 if a plant merely tolerates the light rather than thriving in it, say so plainly.\n\nFor each plant, give the common and botanical name, a realistic price for a healthy small or medium specimen, why it is a good match for this specific person (light fit, watering-style fit, pet safety), and a plain-English care card: where to place it, how often to water and how to tell it is thirsty (the finger test, lifting the pot), when and how to feed it, and one early warning sign of trouble. If pets are present, every plant must be non-toxic to cats and dogs, and you must confirm this explicitly for each plant \u2014 no mildly toxic plant gets recommended.\n\nThen build the starter kit: pots with drainage holes (explain why drainage matters and how to pick the right size \u2014 no oversized pots that stay soggy), the right soil mix for these specific plants, and the three tools that actually matter for a beginner (a watering can with a narrow spout, a moisture meter or the chopstick trick, and pruning shears). Price the full kit \u2014 plants plus supplies \u2014 and confirm it fits within the {budget}, adjusting plant sizes or counts if it does not.\n\nClose with the five most common beginner mistakes and how to avoid each: overwatering, repotting into pots far too large, mismatching plant to light, misting instead of addressing humidity properly, and buying on looks alone without checking care needs. For each mistake, explain the damage it causes and the simple habit that prevents it. End with a week-one checklist: where to buy healthy plants locally or online, how to inspect a plant in the store (roots, pests, new growth), and the first-month routine for checking in on each plant.",
    "description": "A personalized plant starter kit with five beginner-friendly plants matched to your light and lifestyle, supplies, care instructions, and mistakes to avoid.",
    "category": "shopping",
    "variables": {
      "light_conditions": {
        "label": "Light",
        "question": "What light do you have?",
        "type": "select",
        "options": [
          "Bright direct",
          "Bright indirect",
          "Medium",
          "Low light"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 100",
        "required": true
      },
      "has_pets": {
        "label": "Pets at Home",
        "question": "Do you have pets at home?",
        "type": "boolean",
        "required": false
      },
      "watering_style": {
        "label": "Watering Style",
        "question": "How do you tend to treat plants?",
        "type": "select",
        "options": [
          "I water attentively",
          "I forget to water"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Garden Supplies List",
    "displayDescription": "Get a complete garden shopping list scaled to your space, climate, and budget, with a seasonal planting timeline.",
    "id": "shopping-064",
    "prompt": "You are planning a {garden_type} garden in {climate_zone} with a budget of {budget}. The available space is {space_details} and the goal is to grow {grow_goal}.\n\nStart by translating the climate zone and garden type into practical constraints: the typical first and last frost dates (state them as ranges and note the buyer should confirm with a local extension service), what the garden type implies for soil, drainage, and watering, and how much of the space can realistically be planted in season one without overwhelming a beginner.\n\nThen produce the shopping list in five sections: soil and amendments, seeds or starts, tools, watering setup, and pest and disease control. For each item, recommend a specific type and quantity scaled to the space, give a realistic price range, and add a short note on what separates a good buy from a wasted one. Be explicit about seeds versus starter plants: which crops should be bought as starts for a first season, which are easy and cheap from seed, and roughly how many plants fit the available space.\n\nBuild a seasonal planting timeline: what to buy and prepare in the four weeks before planting, the planting window for each recommended crop, and the mid-season tasks (feeding, pest checks, succession planting). Keep the timeline realistic for a beginner \u2014 a few crops per wave, not a farm.\n\nFor every major category, say what a beginner should buy versus make or borrow: soil and fertilizer are buys; compost bins, trellises, and row covers can often be DIY'd or borrowed; expensive tools like tillers should be borrowed or rented, never bought in year one. Flag the classic beginner money traps: buying far more seeds than the space holds, premium bagged 'garden soil' when bulk is cheaper, and gimmicky gadgets.\n\nFinish with a first-season budget breakdown that stays within the {budget}, plus the three things to verify before spending anything: actual sun hours on the spot, water access, and local pest or wildlife pressure.",
    "description": "A full garden supply list for your garden type and climate zone with soil, seeds, tools, pest control, a planting timeline, and buy-vs-borrow guidance.",
    "category": "shopping",
    "variables": {
      "garden_type": {
        "label": "Garden Type",
        "question": "What type of garden?",
        "type": "select",
        "options": [
          "Raised bed",
          "In-ground",
          "Container and balcony",
          "Indoor"
        ],
        "required": true
      },
      "climate_zone": {
        "label": "Climate Zone",
        "question": "What is your climate zone or region?",
        "type": "text",
        "placeholder": "e.g., Zone 9b, Phoenix AZ",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 200",
        "required": true
      },
      "space_details": {
        "label": "Space Details",
        "question": "How much space do you have for the garden?",
        "type": "text",
        "placeholder": "e.g., 4x8 ft raised bed on a sunny patio",
        "required": false
      },
      "grow_goal": {
        "label": "Grow Goal",
        "question": "What do you want to grow?",
        "type": "select",
        "options": [
          "Vegetables",
          "Herbs",
          "Flowers",
          "Mix of everything"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Sustainable Product Swaps",
    "displayDescription": "Turn your everyday products into a ranked list of sustainable swaps with honest prices, real impact, and a phased buying plan.",
    "id": "shopping-065",
    "prompt": "The buyer currently uses these products and wants greener replacements: {current_products}. Their priority for the first swaps is {swap_priority}, and they have a total swap budget of {budget}.\n\nFor each product, recommend one specific eco-friendlier alternative \u2014 not a vague category, but the kind of thing they can actually search for and buy (the product type, what to look for on the label, and what a fair price is). Explain the real environmental benefit in concrete terms: what waste, resource use, or pollution is actually reduced, and by roughly how much over a year of normal use. Be honest about the limits \u2014 where the 'eco' benefit is marginal or depends heavily on how the buyer uses it.\n\nCompare prices honestly for each swap: the current product's typical cost, the alternative's cost, the per-unit or per-year difference, and the payback period where one exists (for example, a reusable item that costs more upfront but breaks even after a few months). Note any ongoing cost or effort the alternative requires, such as refills, maintenance, or a learning curve.\n\nRank all the swaps from first to last based on {swap_priority}: impact-first means the swaps cutting the most waste or emissions per dollar go first; ease-first means the swaps requiring the smallest behavior change go first; savings-first means the swaps with the fastest payback go first. Give a one-line justification for each swap's rank.\n\nThen build a phased buying plan that fits within the {budget}: which swaps to buy now, which to buy only when the current product runs out (the golden rule \u2014 never throw away a usable product just to go green), and which to defer. Total the plan and confirm it stays in budget.\n\nFinish with a short greenwashing check for these swaps: the claims to distrust, the certifications that actually mean something in these categories, and the one question to ask before paying any green premium.",
    "description": "Ranked sustainable replacements for your current products with honest price comparisons, real environmental benefits, and a budget-fit phased plan.",
    "category": "shopping",
    "variables": {
      "current_products": {
        "label": "Current Products",
        "question": "Which products do you want to swap?",
        "type": "textarea",
        "placeholder": "e.g., Plastic wrap, disposable razors, paper towels",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your swap budget?",
        "type": "number",
        "placeholder": "e.g., 100",
        "required": true
      },
      "swap_priority": {
        "label": "Swap Priority",
        "question": "What should the first swaps optimize for?",
        "type": "select",
        "options": [
          "Biggest environmental impact",
          "Easiest lifestyle change",
          "Biggest long-term savings"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Eco-Friendly Alternatives",
    "displayDescription": "Compare genuinely greener alternatives to a product with honest pricing, lifecycle analysis, and greenwashing warnings.",
    "id": "shopping-066",
    "prompt": "The buyer wants greener alternatives to {product}, which they use {usage_frequency}, with roughly {budget} to spend. List 4 to 5 genuinely greener options, and for each one explain concretely what makes it more sustainable: the materials it is made from, how it is packaged, and its lifecycle advantage across production, use, and end of life. Tie the benefit to usage frequency \u2014 for a daily-use product the footprint is dominated by the use phase, while for an occasional one it is dominated by manufacturing and disposal \u2014 and say which phase each alternative actually improves.\n\nCompare prices honestly, including the green premium: the typical price of the conventional product, the price of each alternative, and whether the premium pays back over time (refillable systems, concentrated formulas, longer lifespan). If an alternative is cheaper, say so plainly. If the 'green' option costs more with no real benefit, say that too.\n\nWarn about greenwashing specific to this product category: the vague claims ('natural', 'eco', 'green') that mean nothing without certification, the common tricks (a 'recyclable' claim on packaging most facilities will not accept, a tiny 'plant-based' ingredient in an otherwise conventional formula), and which third-party certifications are actually rigorous versus marketing labels.\n\nRank the options from best to worst for this buyer's situation, weighing sustainability gain against price, convenience, and how {usage_frequency} use changes the math.\n\nAlso address the 'do nothing' option: when keeping and using up the current product, repairing it, or simply buying less is the greenest choice, and how to tell when that is the case here. Close with a decision checklist: three questions the buyer should answer before choosing (can they commit to any refill or maintenance routine, is the product available without excessive shipping, does it perform as well as what it replaces), and one red flag that should kill a candidate immediately.",
    "description": "Eco-friendly alternatives to a specific product with lifecycle-based sustainability analysis, honest price comparisons, and category-specific greenwashing warnings.",
    "category": "shopping",
    "variables": {
      "product": {
        "label": "Product",
        "question": "What product do you want greener options for?",
        "type": "text",
        "placeholder": "e.g., Laundry detergent",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "Roughly what are you willing to spend?",
        "type": "number",
        "placeholder": "e.g., 40",
        "required": false
      },
      "usage_frequency": {
        "label": "Usage Frequency",
        "question": "How often do you use this product?",
        "type": "select",
        "options": [
          "Daily",
          "Weekly",
          "Occasionally"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Ethical Brand Finder",
    "displayDescription": "Find genuinely ethical brands in any category with evidence-based profiles and the questions that expose empty claims.",
    "id": "shopping-067",
    "prompt": "The buyer is looking for ethical brands in the {product_category} category, with {ethical_priority} as their top concern, shopping in the {price_tier} price range.\n\nFirst, define what 'ethical' concretely means in this specific category: which labor issues matter (factory conditions, wages, supply chain transparency), which materials and production practices matter (raw material sourcing, chemical use, durability, end of life), and what real transparency looks like (published supplier lists, third-party audits, honest reporting of problems). Name the certifications and standards that are meaningful here, and call out the ones that are mostly marketing.\n\nThen profile 4 to 5 brands genuinely known for strong practices relevant to {ethical_priority}, all available in the {price_tier} range. For each brand, give what they make and their typical price range, the specific evidence behind their ethical reputation (certifications held, published reports, verifiable practices \u2014 not just their own marketing copy), one honest limitation or criticism, and who they are best for.\n\nInclude a realistic 'price of ethics' note: how much more ethical options typically cost in this category, where the premium is genuinely justified, and where a mid-range brand with one strong certification beats a premium brand with vague claims.\n\nGive the buyer 5 questions to ask any brand to verify its claims: who makes this and where, what third-party verification exists, what happens at end of life, how workers are paid relative to local living wages, and what the brand's biggest unsolved ethical problem is (honest brands can answer this one). Explain what a good versus evasive answer sounds like for each question.\n\nClose with practical buying advice: how to spot ethical-washing on product pages, when buying secondhand is the most ethical option regardless of brand, and the one verification step to take before paying any premium.\n\nFinish with a one-year loyalty test: how to judge whether the brand kept its promises after purchase, and when to switch to a competitor that does it better.",
    "description": "Ethical brand recommendations with category-specific definitions of ethical, evidence-backed brand profiles, price-of-ethics guidance, and claim-verification questions.",
    "category": "shopping",
    "variables": {
      "product_category": {
        "label": "Category",
        "question": "Which product category?",
        "type": "text",
        "placeholder": "e.g., Sneakers",
        "required": true
      },
      "ethical_priority": {
        "label": "Ethical Priority",
        "question": "What matters most to you?",
        "type": "select",
        "options": [
          "Fair labor",
          "Environmental footprint",
          "Animal welfare",
          "Small and independent"
        ],
        "required": true
      },
      "price_tier": {
        "label": "Price Tier",
        "question": "What price range are you shopping in?",
        "type": "select",
        "options": [
          "Budget-friendly",
          "Mid-range",
          "Premium"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Secondhand Buying Guide",
    "displayDescription": "Master the secondhand market for any product: where to look, fair prices, authentication, inspection, and walk-away red flags.",
    "id": "shopping-068",
    "prompt": "The buyer wants to buy {product} secondhand with a budget of {budget}, shopping around {buying_location}, and ideally sorted by {need_by_date}.\n\nStart with where to look, ranked for this specific product: which marketplaces and local options (Facebook Marketplace, Craigslist, OfferUp, eBay, specialty forums or shops, estate sales, pawn shops) are best for a {product}, what each is good for, and the typical price range on each. Give fair price ranges for good, average, and rough condition, and explain how to research completed and sold listings so the buyer knows the real market value before negotiating.\n\nThen the verification section: how to confirm authenticity for this product type (serial numbers, brand markings, model identifiers, documentation to ask for), and how to assess condition remotely from photos and a listing (which photos to request, what phrases like 'great condition' usually hide). Provide 5 to 7 specific questions to ask the seller, covering ownership history, reason for selling, any damage or repairs, included accessories, and whether the price is firm.\n\nGive a pre-purchase inspection checklist tailored to {product}: what to check in person and in what order, which tools to bring (a flashlight, a charger, a measuring tape \u2014 whatever fits this product), and the tests that reveal hidden problems. Name the dealbreakers clearly: specific red flags that mean walk away immediately, from structural damage to missing serial numbers to sellers who refuse inspection.\n\nCover the transaction itself: safe meeting practices, how to pay (and which payment methods to avoid), whether to get a bill of sale, and how return or warranty expectations work secondhand (usually there are none \u2014 so the inspection is the warranty).\n\nClose with a decision framework: the three signs this is a good deal worth acting on fast, the signs to keep looking, and what to do if {need_by_date} is approaching and nothing good has appeared (expand the search radius, adjust condition expectations, or pivot to refurbished or new).",
    "description": "A complete secondhand buying guide with marketplace rankings, fair price ranges, authenticity checks, a pre-purchase inspection checklist, and dealbreakers.",
    "category": "shopping",
    "variables": {
      "product": {
        "label": "Product",
        "question": "What do you want to buy secondhand?",
        "type": "text",
        "placeholder": "e.g., Road bike",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 500",
        "required": true
      },
      "buying_location": {
        "label": "Location",
        "question": "Where are you located? (city or region)",
        "type": "text",
        "placeholder": "e.g., Phoenix, AZ",
        "required": false
      },
      "need_by_date": {
        "label": "Need-By Date",
        "question": "Do you need it by a specific date?",
        "type": "date",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Thrift Store Strategy",
    "displayDescription": "Get a thrift store game plan for your target items: the best stores, timing, quality-spotting, and negotiation etiquette.",
    "id": "shopping-069",
    "prompt": "The buyer is hunting for {items} at thrift stores with a budget of {budget}, shopping around {city_or_area}, with this availability: {schedule}.\n\nStart with the store strategy: which types of stores to target for {items} specifically (Goodwill and Salvation Army, independent thrift shops, consignment stores, estate sales, flea markets, church rummage sales), what each is best for, and how to find the good ones near {city_or_area}. Cover timing in detail: which days new stock typically hits the floor, why weekday mornings usually beat weekends, how donation cycles and seasonal cleanouts affect selection, and how to adapt the whole strategy to {schedule}.\n\nThen the quality-spotting section for {items}: how to tell quality construction from junk at a glance (materials, stitching, weight, brand labels worth knowing), how to authenticate when it matters (what real versus fake looks like in this category, the markings and details to check), and which flaws are fixable versus which are not. Give the always-check list: zippers and closures, seams, stains examined under good light, smells, missing parts, and for furniture \u2014 joints, wobble, and veneer versus solid wood.\n\nCover negotiation etiquette: when it is acceptable to ask for a lower price (independent shops and estate sales, yes; big chains, usually no), how to ask without being insulting, and when discount days or color-tag sales change the math.\n\nName the categories within {items} where thrifting genuinely beats buying new on value, and be honest about where it does not \u2014 items where hygiene, safety, or fit make new the smarter buy. Keep the recommendations within the {budget} and suggest a per-item price ceiling so the budget survives multiple trips.\n\nFinish with a trip plan: a pre-trip checklist (measurements, reference prices saved on the phone, a tape measure, the maximum you will pay per item), a per-trip spending discipline rule, and the one habit that separates successful thrifters from browsers \u2014 knowing the target list and checking it fast instead of wandering.",
    "description": "A thrift store strategy for finding specific items on budget, with store targeting, timing, authentication tips, inspection checklists, and negotiation etiquette.",
    "category": "shopping",
    "variables": {
      "items": {
        "label": "Items",
        "question": "What are you hunting for?",
        "type": "text",
        "placeholder": "e.g., Vintage denim, furniture",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 100",
        "required": true
      },
      "city_or_area": {
        "label": "City or Area",
        "question": "What city or area will you thrift in?",
        "type": "text",
        "placeholder": "e.g., Austin, TX",
        "required": false
      },
      "schedule": {
        "label": "Thrift Schedule",
        "question": "When are you able to thrift?",
        "type": "select",
        "options": [
          "Flexible weekdays",
          "Weekends only",
          "Occasional quick trips"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Holiday Shopping Planner",
    "displayDescription": "Build a complete holiday shopping plan: tiered budgets, gift ideas per person, a buying timeline, and a spending tracker.",
    "id": "shopping-070",
    "prompt": "The buyer needs a holiday shopping plan for {recipient_count} recipients with a total budget of {budget}, with everything purchased by {deadline}. Recipient notes: {recipient_details}. Shipping will be needed: {shipping_needed}.\n\nStart with the budget architecture: divide the {budget} across {recipient_count} recipients into tiers (for example: inner circle, extended family and friends, small tokens), assign a per-person target range for each tier, and hold back a 10% buffer for wrapping, shipping, and last-minute additions. If the recipient notes name specific people, draft the tier assignments; otherwise provide a template the buyer can fill in.\n\nThen the per-person gift plan: for each recipient or tier, suggest 2 to 3 gift ideas at different price points that fit what the buyer knows about them, plus one 'safe bet' universal option per tier for the hard-to-shop-for. Every idea should include a rough price and where to buy it (online, local store, handmade). Apply the experiences-and-consumables rule: when in doubt, gifts that get used up or experienced beat clutter.\n\nBuild the buying timeline working backward from {deadline}: when to finalize the list, the order cutoff dates if shipping is needed (with a safety margin before the carriers' published deadlines), when to shop sales versus buy at full price, and a final 'everything wrapped and ready' milestone a few days before the deadline. Flag the shipping crunch explicitly: which gifts must be ordered first and what the backup plan is if something arrives late.\n\nProvide a tracker format \u2014 a simple table the buyer can copy into notes or a spreadsheet: recipient, tier, budget, gift idea, status (idea / ordered / arrived / wrapped), actual spend, and a running total against the {budget}.\n\nClose with the discipline rules that keep holiday shopping on track: the 24-hour rule for impulse additions, what to do when a gift goes over budget (cut from the buffer, not from another person's tier), and a short list of common budget-killers to avoid.",
    "description": "A full holiday shopping plan with tiered per-person budgets, gift ideas at multiple price points, a shipping-aware buying timeline, and a tracker format.",
    "category": "shopping",
    "variables": {
      "recipient_count": {
        "label": "Recipients",
        "question": "How many recipients?",
        "type": "number",
        "placeholder": "e.g., 8",
        "required": true
      },
      "budget": {
        "label": "Total Budget",
        "question": "What is your total budget?",
        "type": "number",
        "placeholder": "e.g., 600",
        "required": true
      },
      "deadline": {
        "label": "Deadline",
        "question": "When must shopping be done?",
        "type": "date",
        "required": true
      },
      "recipient_details": {
        "label": "Recipient Details",
        "question": "Who are the recipients? (names or roles, ages, interests)",
        "type": "textarea",
        "placeholder": "e.g., Mom (gardener), brother (gamer, 19)...",
        "required": false
      },
      "shipping_needed": {
        "label": "Shipping Needed",
        "question": "Will any gifts need to be shipped?",
        "type": "boolean",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Black Friday Game Plan",
    "displayDescription": "A complete Black Friday game plan with target prices, deal likelihood rankings, a timed day-of strategy, and traps to avoid.",
    "id": "shopping-071",
    "prompt": "Build me a complete Black Friday game plan for buying {wishlist_items}.\n\nStart by sorting my wishlist into product categories and researching realistic discount depths for each category during Black Friday week. Be honest about which categories reliably see deep cuts of 30-50% (TVs, small kitchen appliances, winter clothing, mattresses, headphones) and which barely move (Apple products, Lego, gaming consoles, recent video games). For every item on my list, give me three numbers: a target price I should buy at, a dream price that means grab it the instant I see it, and a walk-away ceiling above which the deal is not worth it. Base these on typical street prices, not inflated \"was\" prices that exist only to make the discount look bigger.\n\nNext, rank the whole list by deal likelihood: near-certain deals, possible-but-uncertain deals, and likely duds. Flag the classic Black Friday traps as they apply to my list: doorbuster models that are stripped-down variants built just for the sale, bundles padded with low-value freebies, \"sale\" prices that are actually the normal price recycled every holiday cycle, and gift-card offers with fine print that erodes the real savings. Tell me exactly how to spot each trap before I click buy.\n\nThen build my day-of strategy around my constraints. My total budget is {budget} and I plan to shop {shopping_mode}. Tell me what to buy at midnight (items with historically limited stock that sell out in hours), what to grab Friday morning, what to hold for Cyber Monday or even January clearance, and what to skip this year entirely. For each purchase, name the retailers most likely to run the deepest cut in that category and note where setting a price-tracking alert makes sense for the maybes. Include practical tactics too: whether price-matching policies are worth using, how return policies differ during the sale window, and when to use a credit card with price protection instead of a debit card.\n\nClose with a clean action checklist: each item, its target price, where to buy, and a timing verdict (buy now / wait / skip). Finish with your verdict on the 2-3 items on my list that are genuinely must-buy this Black Friday - and the ones that would be a waste of my budget so I can cut them without regret.",
    "description": "A tactical Black Friday playbook: category discount research, target prices, deal ranking, and a timed buying strategy.",
    "category": "shopping",
    "variables": {
      "wishlist_items": {
        "label": "Wishlist",
        "question": "What do you want to buy?",
        "type": "textarea",
        "placeholder": "e.g., OLED TV, air fryer, winter boots",
        "required": true
      },
      "budget": {
        "label": "Total Budget",
        "question": "What is your total Black Friday budget?",
        "type": "number",
        "placeholder": "e.g., 800",
        "required": true
      },
      "shopping_mode": {
        "label": "Shopping Mode",
        "question": "Will you shop online, in-store, or both?",
        "type": "select",
        "options": [
          "Online only",
          "In-store only",
          "Both"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Wedding Gift Guide",
    "displayDescription": "Thoughtful wedding gift ideas matched to your budget, relationship to the couple, and wedding formality, plus etiquette and timing rules.",
    "id": "shopping-072",
    "prompt": "Help me choose a thoughtful wedding gift with a budget of {budget} for a couple I know as {couple_info}.\n\nFirst, calibrate how much I should actually spend. My relationship to the couple is {relationship} and the wedding is {formality}. Explain realistic spending norms for this exact combination - not generic ranges, but what someone in my position typically spends - and how to adjust if I am also traveling to the wedding, already gave an engagement or shower gift, or am attending multiple events like the rehearsal dinner. Be direct: where in my budget range is the sweet spot, and what does underspending or overspending signal in this situation?\n\nThen give me 8-10 gift ideas at or under my budget, organized from safe crowd-pleasers to more personal picks, all tailored to {couple_info}: their interests, living situation, and taste as I described them. If they have a registry, explain registry etiquette clearly: when buying off-registry is fine and when it creates problems, whether going in with friends on a big-ticket registry item is smarter than a solo small one, and how to avoid accidentally duplicating what someone else bought. If cash, a check, or an experience fits this couple better than a physical gift, say so honestly and explain how to present it so it still feels intentional.\n\nCover the logistics I need to get right. The wedding is on {wedding_date}: explain the accepted window for sending a gift before and after the wedding, whether to bring it to the ceremony or ship it to their home (and why one is usually better), and how formal the card and wrapping should be given {formality}. Address the modern questions people actually wonder about: can I split a gift with friends, is it okay to buy something similar to a registry item but cheaper elsewhere, and does a destination wedding change the spending math?\n\nClose with your top 3 picks for this specific couple, ranked with a one-line reason for each, plus a short card message I can adapt to my voice. My goal is a gift that feels personal and appropriate to my relationship with them - not generic, not awkward, and not forgotten in a closet.",
    "description": "Wedding gift picks calibrated to your relationship, formality, and budget, with registry etiquette and delivery timing.",
    "category": "shopping",
    "variables": {
      "budget": {
        "label": "Budget",
        "question": "What is your gift budget?",
        "type": "number",
        "placeholder": "e.g., 150",
        "required": true
      },
      "couple_info": {
        "label": "Couple Info",
        "question": "Tell me about the couple:",
        "type": "text",
        "placeholder": "e.g., College friends, love cooking and travel",
        "required": true
      },
      "formality": {
        "label": "Formality",
        "question": "How formal is the wedding?",
        "type": "select",
        "options": [
          "Casual",
          "Semi-formal",
          "Formal",
          "Black tie"
        ],
        "required": true
      },
      "relationship": {
        "label": "Relationship",
        "question": "How are you related to the couple?",
        "type": "select",
        "options": [
          "Close family",
          "Close friend",
          "Friend",
          "Coworker",
          "Plus-one / acquaintance"
        ],
        "required": true
      },
      "wedding_date": {
        "label": "Wedding Date",
        "question": "When is the wedding?",
        "type": "date",
        "placeholder": "",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Baby Shower Gifts",
    "displayDescription": "Practical and heartfelt baby shower gifts matched to your budget, the registry situation, and whether this is their first baby.",
    "id": "shopping-073",
    "prompt": "Suggest baby shower gifts with a budget of {budget}. I am a {relationship} to the parents, they {registry_status}, and this is their {baby_number} baby.\n\nGive me 8 gift ideas that move from practical to sentimental, all tailored to this exact situation. Because this is their {baby_number} baby, weight your recommendations accordingly: first-baby parents need the foundational gear and often appreciate the big essentials, while second- and third-time parents usually need less stuff and value consumables, upgrades, experiences, or things for the older sibling more. If they {registry_status}, address that directly - for a picked-over registry, suggest what to do instead of buying the sad leftovers, and for no registry, explain how to choose confidently without one.\n\nInclude the parents' preferences: {parent_preferences}. Honor these seriously - if they lean eco-friendly or minimalist, do not suggest plastic-heavy or redundant items, and if they have strong opinions about certain brands or product types, steer around them.\n\nFor each idea, explain why it earns its place: what experienced parents say they actually used daily versus what collects dust in the nursery. Be specific about the genuinely useful (the things parents buy twice because the first wore out) and warn me off the classic shower-gift flops: newborn-sized clothes they will outgrow in weeks, noisy toys nobody asked for, and novelty items that look cute in the gift bag and die in a drawer.\n\nCover shower gift etiquette too: how my spending should reflect being a {relationship}, whether to bring the gift wrapped or unwrapped (many showers now do display showers), group-gifting norms for big-ticket items like strollers or car seats, and what to write in the card. Close with your single best recommendation for this family and one smaller add-on that pairs with it, so I can walk in confident my gift will actually get used.",
    "description": "Baby shower gift ideas filtered by registry status, which baby this is, and what parents actually use.",
    "category": "shopping",
    "variables": {
      "budget": {
        "label": "Budget",
        "question": "What is your gift budget?",
        "type": "number",
        "placeholder": "e.g., 75",
        "required": true
      },
      "registry_status": {
        "label": "Registry Status",
        "question": "Do the parents have a registry?",
        "type": "select",
        "options": [
          "Have a registry",
          "No registry",
          "Registry is picked over"
        ],
        "required": true
      },
      "baby_number": {
        "label": "Which Baby",
        "question": "Which baby is this for them?",
        "type": "select",
        "options": [
          "First",
          "Second",
          "Third or more"
        ],
        "required": true
      },
      "parent_preferences": {
        "label": "Parent Preferences",
        "question": "Any preferences or things to avoid? (optional)",
        "type": "text",
        "placeholder": "e.g., eco-friendly, no plastic, minimalist",
        "required": false
      },
      "relationship": {
        "label": "Relationship",
        "question": "How are you related to the parents?",
        "type": "select",
        "options": [
          "Close family",
          "Close friend",
          "Friend",
          "Coworker",
          "Acquaintance"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Housewarming Gifts",
    "displayDescription": "Thoughtful housewarming gift ideas for any home type and budget, with gifts to avoid and presentation tips.",
    "id": "shopping-074",
    "prompt": "Suggest housewarming gifts for someone moving into their {home_type} with a budget of {budget}. The recipient's lifestyle is {recipient_interests} - use that to make every idea feel chosen for them specifically, not pulled from a generic list.\n\nGive me 8 thoughtful ideas that move from practical to personal, each one connected to something about their life: what a cook, a wine lover, a plant person, or a homebody would genuinely reach for in their first month in a new place. Factor in the {home_type} reality - apartment dwellers need space-conscious and landlord-friendly picks, new homeowners can handle bigger or more permanent pieces, condo owners sit in between, and dorm rooms need compact, multi-use, and often budget-friendly items. For each idea, explain why it suits both the person and the home type, and give a rough price so I can see how it fits the budget.\n\nI will be delivering this gift by {delivery_method}, so shape your advice around that: if I am giving it in person, include presentation tips that make even a simple gift feel special (wrapping, a handwritten note, pairing a small extra with it); if I am shipping it, flag which ideas travel well, which need careful packaging, and how to time delivery so it arrives after the move, not before; if I am mailing it myself, note size and weight practicalities.\n\nAlso give me a clear list of housewarming gifts to avoid and why: overly personal items like artwork or decor that clashes with taste they have not expressed, duplicate basics they surely already own, anything that implies their home needs fixing, and gifts that create work (high-maintenance plants, pets, huge items with no place to go). Close with your top pick for this recipient and home type, plus a one-line note I could write in the card that makes it feel warm rather than transactional.",
    "description": "Housewarming gifts tailored to the home type, the recipient's lifestyle, and how the gift will be delivered.",
    "category": "shopping",
    "variables": {
      "home_type": {
        "label": "Home Type",
        "question": "What type of home?",
        "type": "select",
        "options": [
          "Apartment",
          "House",
          "Condo",
          "Dorm"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your gift budget?",
        "type": "number",
        "placeholder": "e.g., 50",
        "required": true
      },
      "delivery_method": {
        "label": "Delivery Method",
        "question": "How will you get the gift to them?",
        "type": "select",
        "options": [
          "Giving in person",
          "Shipping it",
          "Mailing it myself"
        ],
        "required": true
      },
      "recipient_interests": {
        "label": "Their Lifestyle",
        "question": "What is the recipient into?",
        "type": "text",
        "placeholder": "e.g., Loves cooking, wine drinker, plant person",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Kids Birthday Gifts",
    "displayDescription": "Age-appropriate birthday gifts that balance fun and developmental value, with safety guidance and a standout recommendation.",
    "id": "shopping-075",
    "prompt": "Suggest birthday gifts for a {age}-year-old who loves {interests} with a budget of {budget}.\n\nGive me 8 age-appropriate ideas that balance fun with developmental value - things that will genuinely hold a {age}-year-old's attention beyond the first day, matched to what kids that age can actually do and enjoy. Tie each idea to {interests} where it fits naturally, but include a couple of wildcard picks that might open up a new interest, since the best gifts sometimes surprise. For each idea, explain what the child gets out of it: the skill it builds, the play pattern it supports, or the reason it stays interesting after the novelty fades.\n\nFlag safety and age-rating concerns explicitly: choking hazards, small parts, screen-time and content ratings, battery and charging realities for electronic toys, and anything with an age recommendation that does not actually match a {age}-year-old despite the marketing. Steer me away from gifts that look great in the box but frustrate kids this age because they require more skill, patience, or adult setup than advertised.\n\nRespect these constraints: {avoid_list}. Treat anything listed there as a hard no, no matter how popular the item is.\n\nBecause I am {party_format}, shape the logistics: if I am attending the party, note which gifts make a good unboxing moment and what to write in the card; if I am shipping it, flag size, weight, and whether it needs assembly on arrival; if it is family-only, I can go bigger or more personal.\n\nClose by naming one standout gift - the single best pick for this child at this budget - plus a smaller add-on under a third of the budget that pairs with it. If two ideas are close contenders, tell me which one wins for a child who already has plenty of toys versus one who does not. Explain in two sentences why that combination wins over everything else on the list.",
    "description": "Birthday gift ideas for kids matched to age, interests, and budget, with safety notes and a standout pick.",
    "category": "shopping",
    "variables": {
      "age": {
        "label": "Age",
        "question": "How old is the child?",
        "type": "number",
        "placeholder": "e.g., 7",
        "required": true
      },
      "interests": {
        "label": "Interests",
        "question": "What are they into?",
        "type": "text",
        "placeholder": "e.g., Dinosaurs, LEGO, soccer",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your gift budget?",
        "type": "number",
        "placeholder": "e.g., 40",
        "required": true
      },
      "avoid_list": {
        "label": "Things to Avoid",
        "question": "Anything to avoid? (optional)",
        "type": "text",
        "placeholder": "e.g., No screens, allergic to latex, hates loud toys",
        "required": false
      },
      "party_format": {
        "label": "Party Format",
        "question": "How will you give the gift?",
        "type": "select",
        "options": [
          "Attending the party",
          "Family-only celebration",
          "Shipping the gift",
          "Dropping it off"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Teen Gift Ideas",
    "displayDescription": "Gift ideas for teens that will not feel lame or out of touch, with trend cautions and safe bets that always land.",
    "id": "shopping-076",
    "prompt": "Suggest gifts for a {age}-year-old teen into {interests} with a budget of {budget}. The occasion is {occasion}.\n\nGive me 8 ideas that will not feel lame or out of touch, balancing what teens actually want with what adults feel good giving. The hardest part of gifting to teens is the credibility gap: a gift that screams \"an adult picked this\" dies on arrival, while chasing every trend makes you look like you are trying too hard. For each idea, explain why a {age}-year-old into {interests} would genuinely be excited to receive it - what makes it land with their peer group and their actual daily life, not just what looks good on a gift guide.\n\nCall out the trends to be careful about: fads that are already cringe by the time adults hear about them, brand choices that signal you Googled \"gifts for teens\" instead of knowing them, and anything that will embarrass them in front of friends. Then name the safe bets that always land at this age - the categories that are nearly impossible to get wrong when you know the teen's interests - and explain how to pick the right version within each category so it still feels personal.\n\nFactor in the {occasion} dynamic: birthdays call for something with a wow factor and good unboxing energy, holidays can be warmer or more practical, graduation gifts should nod toward their next chapter, and just-because gifts earn maximum goodwill when they show you were paying attention. Gift cards or cash are {gift_card_ok} - if they are acceptable, explain how to give them so they feel intentional rather than lazy (which cards teens actually want, how much feels right, and presentation tricks); if not, skip them entirely.\n\nFor each idea, include a quick reality check: does it require parental approval, subscriptions, or ongoing costs (phone plans, gaming subscriptions, apps with in-app purchases)? Flag anything that creates a hidden cost for the parents. Close with your top pick for this specific teen and occasion, and a one-line explanation of why it beats the trendy alternative an adult would be tempted to buy instead.",
    "description": "Teen gift ideas that feel current without trying too hard, tuned to age, interests, and occasion.",
    "category": "shopping",
    "variables": {
      "age": {
        "label": "Age",
        "question": "How old is the teen?",
        "type": "number",
        "placeholder": "e.g., 15",
        "required": true
      },
      "interests": {
        "label": "Interests",
        "question": "What are they into?",
        "type": "text",
        "placeholder": "e.g., Gaming, streetwear, K-pop",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your gift budget?",
        "type": "number",
        "placeholder": "e.g., 60",
        "required": true
      },
      "gift_card_ok": {
        "label": "Gift Cards OK",
        "question": "Are gift cards or cash acceptable for this teen?",
        "type": "boolean",
        "required": false
      },
      "occasion": {
        "label": "Occasion",
        "question": "What is the occasion?",
        "type": "select",
        "options": [
          "Birthday",
          "Holiday",
          "Graduation",
          "Just because"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Anniversary Gift Planner",
    "displayDescription": "Anniversary gift ideas from traditional to creative, matched to the year, your budget, and your partner's interests.",
    "id": "shopping-077",
    "prompt": "Help me plan an anniversary gift for {years} years together with a budget of {budget}. My partner is into {partner_interests}.\n\nStart by explaining the traditional gift theme for year {years} - what it is, where it comes from, and the modern alternative if the traditional material feels dated. Then show me how to actually use it: give 2-3 concrete ways to honor the theme without it feeling forced or cheesy, so the tradition becomes a creative constraint rather than a gimmick.\n\nThen suggest 6 ideas that move from traditional to creative, every one tailored to a partner into {partner_interests} and priced within {budget}. For each idea, explain why it fits this specific partner and this specific milestone - what makes it feel like it could only come from me, not from a generic anniversary list. Include at least one experience-based idea (a date, a trip, a shared activity) and at least one physical keepsake, since anniversaries land differently when there is something to hold onto. If the budget is tight for the milestone, be honest about where a smaller, deeply personal gift outperforms an expensive generic one, and show me how.\n\nAccount for gift history: {past_gifts}. Do not repeat or closely echo anything I have already given - if a past gift sets a pattern (like jewelry every year), either break it deliberately with something fresh or elevate it intentionally, and explain which choice is smarter here.\n\nThen give me presentation and romance tactics that make the gift memorable: timing (morning surprise vs. evening reveal), setting, what to say when giving it, and how to pair the gift with a handwritten note or letter that carries real weight. Include one low-cost, high-impact romantic gesture that costs almost nothing but elevates the whole day.\n\nClose with your ranked top 2 picks for this anniversary - the one to give if I want classic romance, and the one to give if I want to surprise them - plus a short note I can adapt into a card. The goal is a gift that says I know exactly who they are and how long we have been building this, not just that I remembered the date.",
    "description": "Anniversary gift planning with the traditional yearly theme, creative ideas, and romantic presentation tips.",
    "category": "shopping",
    "variables": {
      "years": {
        "label": "Years",
        "question": "How many years together?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your gift budget?",
        "type": "number",
        "placeholder": "e.g., 200",
        "required": true
      },
      "partner_interests": {
        "label": "Partner Interests",
        "question": "What is your partner into?",
        "type": "text",
        "placeholder": "e.g., Hiking, vinyl records, cooking",
        "required": true
      },
      "past_gifts": {
        "label": "Past Gifts",
        "question": "What have you given in past years? (optional)",
        "type": "text",
        "placeholder": "e.g., Watch for year 3, weekend trip for year 4",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Mother's Day Gifts",
    "displayDescription": "Heartfelt Mother's Day gift ideas tuned to her interests and the tone you want, with ordering deadlines so it arrives on time.",
    "id": "shopping-078",
    "prompt": "Suggest Mother's Day gifts with a budget of {budget}. She enjoys {interests} and I want something {sentiment}.\n\nGive me 8 ideas that fit both her interests and the {sentiment} tone I am going for. Define what {sentiment} should actually look like in gift form: if sentimental, the gift should carry memory, meaning, or personal history; if practical, it should solve a real friction in her daily life; if luxurious, it should feel like an indulgence she would never buy herself; if fun, it should delight and surprise. For each idea, explain how it connects to {interests} specifically - why this gift for this mom, not a generic Mother's Day pick.\n\nA handmade or DIY gift is {handmade_ok}. If welcome, include 1-2 handmade options with realistic effort levels and honest guidance on which ones actually impress versus which ones look like a last-minute scramble. If not, skip DIY entirely and focus on purchasable gifts done well.\n\nHandle the logistics seriously, because a late Mother's Day gift undermines the whole gesture. The gift needs to arrive by {need_by_date}. For each idea, note whether it can be bought locally as a backup, and give me concrete ordering deadlines: the last safe date for standard shipping, for expedited shipping, and which items (flowers, personalized or engraved pieces, gift baskets) have hard cutoff dates that sneak up fast. Include a plan B: what to do if something will not arrive in time, including how to present the gift gracefully with a placeholder.\n\nAdd card message inspiration: 3-4 short message starters in different tones (warm, funny, deeply grateful) that I can adapt, plus guidance on what makes a Mother's Day card actually meaningful versus generic - specific memories, specific thanks, and the one line most people forget to write.\n\nClose with your top pick at this budget and tone, and one small add-on (flowers, a treat, a handwritten letter) that elevates it. The goal is a gift that makes her feel truly seen - for who she is, not just for the role.",
    "description": "Mother's Day gifts matched to her interests and your chosen sentiment, with card inspiration and ordering deadlines.",
    "category": "shopping",
    "variables": {
      "budget": {
        "label": "Budget",
        "question": "What is your gift budget?",
        "type": "number",
        "placeholder": "e.g., 75",
        "required": true
      },
      "interests": {
        "label": "Interests",
        "question": "What does she enjoy?",
        "type": "text",
        "placeholder": "e.g., Gardening, mystery novels",
        "required": true
      },
      "sentiment": {
        "label": "Sentiment",
        "question": "What tone should the gift have?",
        "type": "select",
        "options": [
          "Sentimental",
          "Practical",
          "Luxurious",
          "Fun"
        ],
        "required": true
      },
      "handmade_ok": {
        "label": "Handmade OK",
        "question": "Would a handmade or DIY gift be welcome?",
        "type": "boolean",
        "required": false
      },
      "need_by_date": {
        "label": "Need It By",
        "question": "When does the gift need to arrive?",
        "type": "date",
        "placeholder": "",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Father's Day Gifts",
    "displayDescription": "Father's Day gift ideas he will actually use, with personalization tips, card starters, and what dads secretly want.",
    "id": "shopping-079",
    "prompt": "Suggest Father's Day gifts with a budget of {budget}. He is into {interests} and I want something {gift_style}.\n\nGive me 8 ideas he will actually use - not shelf decorations, not gag gifts, not the same grilling set he got three years ago. Define what {gift_style} means in practice: if practical, it should earn its place in his daily routine; if hobby-related, it should level up something he already loves doing; if sentimental, it should carry real emotional weight without feeling forced; if an experience, it should create a memory, ideally one we share. For each idea, explain the specific use case: when he reaches for it, what problem it solves, or why the experience will stick with him.\n\nAddress the classic dad paradox head-on: what dads say they want (\"don't spend money on me,\" \"I don't need anything\") versus what they secretly appreciate. Give me guidance on reading past that deflection - which signals mean he genuinely wants nothing, and which mean he wants you to put thought into it anyway. Include 2-3 ideas specifically designed for the dad who claims to want nothing, framed so they do not feel like spending for spending's sake.\n\nSteer around duplicates: {already_has}. Treat anything listed there as off-limits, and be careful with the whole category around it - if he has every grill tool, do not just suggest a fancier grill tool.\n\nCover personalization and presentation: engraving and monogramming options worth the money versus ones that cheapen the gift, how to personalize an experience gift (a printed itinerary, a \"coupon\" with a real date), and tips for making even a practical gift feel intentional when he opens it. Add a card message starter in a tone that fits a dad - warm but not sappy - that I can build on.\n\nHandle timing: the gift needs to arrive by {need_by_date}. Note ordering cutoffs for personalized items (which always take longer than expected) and give me a backup plan if shipping runs late.\n\nClose with your top pick for this dad at this budget, and explain in two sentences why he will still be using or remembering it months from now.",
    "description": "Father's Day gifts he will actually use, tuned to his interests, your gift style, and delivery timing.",
    "category": "shopping",
    "variables": {
      "budget": {
        "label": "Budget",
        "question": "What is your gift budget?",
        "type": "number",
        "placeholder": "e.g., 75",
        "required": true
      },
      "interests": {
        "label": "Interests",
        "question": "What is he into?",
        "type": "text",
        "placeholder": "e.g., Grilling, golf, woodworking",
        "required": true
      },
      "gift_style": {
        "label": "Gift Style",
        "question": "What style of gift?",
        "type": "select",
        "options": [
          "Practical",
          "Hobby-related",
          "Sentimental",
          "Experience"
        ],
        "required": true
      },
      "already_has": {
        "label": "Already Has",
        "question": "What does he already own plenty of? (optional)",
        "type": "text",
        "placeholder": "e.g., Has every grill tool, tons of golf balls",
        "required": false
      },
      "need_by_date": {
        "label": "Need It By",
        "question": "When does the gift need to arrive?",
        "type": "date",
        "placeholder": "",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Graduation Gift Guide",
    "displayDescription": "Graduation gift ideas balancing celebration and practical support for their next chapter, with cash amount guidance.",
    "id": "shopping-080",
    "prompt": "Suggest graduation gifts for a {graduation_level} graduate heading into {next_step} with a budget of {budget}. I am their {relationship}.\n\nGive me 8 ideas that balance celebration with practical support for their next chapter. A great graduation gift does two jobs: it honors what they just accomplished, and it equips them for what comes next. For a {graduation_level} graduate heading into {next_step}, weight your picks toward the transition they are actually facing - a high school graduate heading to college needs dorm and independence gear, one heading to a first job needs professional basics, a college graduate needs apartment and career-launch support, and a graduate school or trade school graduate needs tools of their trade. For each idea, explain which job it does (celebration, practical launch support, or both) and why it fits this specific graduate's next step.\n\nCalibrate spending to the relationship: as their {relationship}, explain what is typical and appropriate at my budget, and where the line is between generous and awkward. Giving cash or a gift card is {cash_ok} - if I am comfortable with it, give me honest guidance on appropriate cash amounts for a {graduation_level} graduation from someone in my position, how to present cash so it feels celebratory rather than transactional, and when a gift card to a specific store beats cash; if not, skip cash entirely and lean into physical gifts and experiences.\n\nInclude the etiquette people get wrong: whether the gift should be given at the ceremony, the party, or sent afterward; how to handle group gifts from a family; what to write in the card beyond \"congrats\" (one specific acknowledgment of their effort plus one genuine wish for the next chapter); and how gifts differ when you are close family versus a family friend.\n\nAdd a practical layer most guides skip: 2-3 non-gift things that genuinely help a new graduate (a useful introduction, help moving, a resume review, a first-month grocery run) and how to offer them without overstepping.\n\nClose with your top pick for this graduate - the gift that best threads the needle between memorable and useful - plus the card message framework I should use. The goal is a gift they will remember receiving and still be glad to have a year from now.",
    "description": "Graduation gifts matched to their level, next step, and your relationship, with cash-giving guidance.",
    "category": "shopping",
    "variables": {
      "graduation_level": {
        "label": "Graduation Level",
        "question": "What are they graduating from?",
        "type": "select",
        "options": [
          "High school",
          "College",
          "Graduate school",
          "Trade school"
        ],
        "required": true
      },
      "next_step": {
        "label": "Next Step",
        "question": "What is their next step?",
        "type": "select",
        "options": [
          "College",
          "First job",
          "Gap year",
          "Unknown"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your gift budget?",
        "type": "number",
        "placeholder": "e.g., 100",
        "required": true
      },
      "cash_ok": {
        "label": "Cash Comfortable",
        "question": "Are you comfortable giving cash or a gift card?",
        "type": "boolean",
        "required": false
      },
      "relationship": {
        "label": "Relationship",
        "question": "How are you related to the graduate?",
        "type": "select",
        "options": [
          "Parent / guardian",
          "Close family",
          "Close friend",
          "Friend of the family",
          "Mentor / teacher"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Thank-You Gift Ideas",
    "displayDescription": "Find a thank-you gift that matches the favor \u2014 six fitting ideas within your budget plus etiquette on value, timing, and presentation.",
    "id": "shopping-081",
    "prompt": "I'm thanking someone for {situation}, and this is my {recipient_relationship}. Help me pick a thank-you gift with a budget of {budget} that lands exactly right \u2014 generous enough to feel sincere, modest enough to feel comfortable. Assume I'm buying this soon; {note_timing}.\n\nFirst, read the situation: size up how big a favor or gesture this was and who this person is to me, so the gift matches the weight of what I'm thanking them for. A weekend stay with a close friend calls for something different than a colleague covering one shift. Give me 6 gift ideas within {budget}, ordered from most meaningful to least expected, and for each one explain in one line why it works for this specific situation \u2014 not generic praise, but the actual reason it fits. Include a mix across a couple of formats (something consumable, something personal, something useful), and flag which one is the single best pick if I only want to buy one thing.\n\nNext, explain thank-you gift etiquette concretely. Cover how much value is appropriate relative to the relationship and the favor \u2014 what counts as under-doing it, what counts as overdoing it, and how a gift that costs too much can actually create awkwardness or an unwanted sense of obligation. Explain timing: how soon after the favor the gift should arrive, and what to do if I'm {note_timing} \u2014 whether a late gift is still welcome and how to acknowledge the delay gracefully. Clarify when to give it in person versus mail it, whether a gift card or cash is appropriate for this relationship (and when it would feel lazy or transactional), and how to present it so it reads as gratitude rather than payment for services.\n\nThen write me a short thank-you note template \u2014 4 to 6 lines \u2014 that names the specific thing I'm thankful for, says what it meant to me, and connects the gift to the message. Make it warm and specific enough that I can personalize it in two minutes.\n\nFinally, give me a one-paragraph gut check: the signs my chosen gift is right (it references something they actually like, it fits the budget without stretching, it can be delivered at the right moment), and one red flag that would mean I'm overthinking it or overcompensating.",
    "description": "Picks a perfectly pitched thank-you gift for the situation and relationship, explains value and timing etiquette, and includes a note template.",
    "category": "shopping",
    "variables": {
      "budget": {
        "label": "Budget",
        "question": "What is your gift budget?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      },
      "situation": {
        "label": "Situation",
        "question": "What are you thanking them for?",
        "type": "text",
        "placeholder": "e.g., Hosting me for the weekend",
        "required": true
      },
      "note_timing": {
        "label": "Timing",
        "question": "How soon is this happening?",
        "type": "select",
        "options": [
          "Immediately",
          "Within a few days",
          "Within two weeks",
          "Already late"
        ],
        "required": false
      },
      "recipient_relationship": {
        "label": "Relationship",
        "question": "What is this person to you?",
        "type": "select",
        "options": [
          "Acquaintance",
          "Friend",
          "Family member",
          "Professional contact",
          "Service provider"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "White Elephant Gifts",
    "displayDescription": "White elephant gifts built to be stolen \u2014 8 funny, desirable, or delightfully bad ideas matched to your group, with steal-strategy.",
    "id": "shopping-082",
    "prompt": "I'm in a white elephant exchange with a {budget} limit for a {group_type} group, and I need a gift that's going to cause a fight over it. The vibe should be family-safe: {keep_family_safe}. The exchange rules we're playing with are: {exchange_rules}.\n\nGive me 8 gift ideas at or just under {budget} that are genuinely designed for this game \u2014 meaning some should be funny, some surprisingly desirable, and a couple hilariously bad in a way that still gets laughs instead of groans. For each idea, explain what makes it stealable: is it funny-unwrap material, actually useful, nostalgic, or so weird it becomes the night's running joke? Give a short pitch line for each \u2014 what I'd say while holding it up. Include at least two ideas that look like joke gifts but turn out to be secretly great, because those get stolen the hardest.\n\nThen explain the strategy for picking a gift that gets stolen the most under our rules ({exchange_rules}). Cover the psychology: why gifts that reveal themselves slowly win, why universal appeal beats niche humor, how price perception matters more than actual price, and when a gag gift backfires (crude, insulting, or mean-spirited is never the move). Since this is a {group_type} group, tailor the humor level \u2014 office-appropriate versus friend-group unhinged \u2014 and make sure nothing here would embarrass me on Monday.\n\nFinally, list the things to avoid: the classic white elephant mistakes like re-gifting something obviously broken, going wildly over or under the limit, bringing something nobody can actually use or transport home, anything with dietary or religious landmines, and gag items that punch down. Also coach me on the unveiling: simple wrapping tricks that build comedy during the reveal (layered boxes, misleading shapes), how to play it up when someone steals your gift versus when nobody wants it, and how to keep the energy fun if the steal chains get competitive. End with one concrete recommendation: your single best pick from the 8 for this exact group, and the one sentence that seals it during the reveal.",
    "description": "Suggests steal-worthy white elephant gifts for your group and budget, explains the strategy behind high-steal gifts, and lists what to avoid.",
    "category": "shopping",
    "variables": {
      "budget": {
        "label": "Budget Limit",
        "question": "What is the gift price limit?",
        "type": "number",
        "placeholder": "e.g., 25",
        "required": true
      },
      "group_type": {
        "label": "Group Type",
        "question": "Who is in the exchange?",
        "type": "select",
        "options": [
          "Office coworkers",
          "Friends",
          "Family",
          "Mixed group"
        ],
        "required": true
      },
      "exchange_rules": {
        "label": "House Rules",
        "question": "What steal/swipe rules are you playing with?",
        "type": "text",
        "placeholder": "e.g., 3 steals per gift max, gifts can't be frozen",
        "required": false
      },
      "keep_family_safe": {
        "label": "Keep It Clean",
        "question": "Should all ideas be family-safe?",
        "type": "boolean",
        "required": true
      }
    }
  },
  {
    "displayTitle": "Stocking Stuffer Ideas",
    "displayDescription": "Twelve thoughtful stocking stuffers within budget \u2014 practical to fun \u2014 plus packing tricks to make the stocking feel overflowing.",
    "id": "shopping-083",
    "prompt": "I'm building a Christmas stocking for {recipient} with a total budget of {budget} for all the stuffers. Their interests: {recipient_interests}. This is for {occasion_detail}.\n\nGive me exactly 12 stocking stuffer ideas that fit this person, not filler \u2014 everything should feel chosen. Organize them from practical to fun, roughly in thirds: 4 practical things they'll actually use, 4 things that are small luxuries or upgrades to everyday items, and 4 fun, delightful, or surprising things. For each idea, include a rough price so I can see the total staying under {budget}, and note where it falls in the size spectrum \u2014 nothing should be so bulky it doesn't fit a standard stocking. Favor items that show I paid attention (tied to {recipient_interests} or something specific about {recipient}) over generic candy-and-socks filler. Include one idea that feels like the stocking's 'main event' \u2014 the thing they'll remember pulling out.\n\nThen give me a realistic budget breakdown: how the {budget} should split across the 12 items so it doesn't all blow on two things. Suggest one or two items to cut first if I run over.\n\nThen explain how to arrange the stocking so it feels full and exciting when they dig through it. Cover the order of placement (what goes in first versus last), how to layer so small items don't sink to the bottom, tricks for making a stocking look overflowing on a tight budget (tissue paper, layering, mixing shapes), and the unwrapping experience \u2014 building anticipation from top to bottom. For theming, suggest one loose theme that could tie several items together for {occasion_detail} (for example: 'cozy morning,' 'movie night,' or 'outdoor adventure') so the stocking feels curated instead of random \u2014 and tell me which of the 12 items already fit it and which one item I'd swap to complete it. Also remind me about gift receipts and returns: for any item that might not fit or suit them, note which categories are returnable and how to tuck a receipt in discreetly. End with a quick checklist: total item count, total estimated cost, and whether each item survived the 'would they actually be glad to get this?' test.",
    "description": "Builds a complete 12-item stocking with a budget breakdown and arrangement tips so it feels full, personal, and exciting to open.",
    "category": "shopping",
    "variables": {
      "recipient": {
        "label": "Recipient",
        "question": "Who is the stocking for?",
        "type": "text",
        "placeholder": "e.g., My 10-year-old son",
        "required": true
      },
      "budget": {
        "label": "Total Budget",
        "question": "What is your total stuffer budget?",
        "type": "number",
        "placeholder": "e.g., 40",
        "required": true
      },
      "occasion_detail": {
        "label": "Occasion",
        "question": "What holiday or occasion is this for?",
        "type": "select",
        "options": [
          "Christmas",
          "Hanukkah",
          "Easter",
          "Valentine's Day",
          "Other"
        ],
        "required": false
      },
      "recipient_interests": {
        "label": "Interests",
        "question": "What is {recipient} into?",
        "type": "text",
        "placeholder": "e.g., Drawing, dinosaurs, skincare",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Office Gift Exchange Ideas",
    "displayDescription": "Eight professional-but-fun Secret Santa ideas for your closeness level, with office etiquette, never-give rules, and anonymous presentation tips.",
    "id": "shopping-084",
    "prompt": "I need a Secret Santa gift with a {budget} limit for a coworker I {closeness}. Our office culture is {office_culture}, and what I know about their interests: {coworker_interests}.\n\nGive me 8 professional-but-fun gift ideas within {budget} that would land well in this office without requiring me to know them deeply. Since I {closeness}, calibrate how personal each idea is \u2014 mark which ones are safe for a near-stranger and which assume some rapport. For each idea, explain why it works in an office setting: useful at a desk, good for a commute, or just a pleasant small luxury. Include at least two ideas that feel creative rather than the standard gift-card-and-candy fallback, and note which of the 8 is your top pick for my specific closeness level.\n\nThen lay out workplace gift etiquette plainly: what's appropriate at this price point, how to handle the exchange if the office has unspoken rules (group lunches, display norms, who gets what), and the things to NEVER give a colleague \u2014 overly personal items, anything romantic or flirtatious, gag gifts that could read as mocking, religious or political items, anything that implies criticism (deodorant, diet books), and expensive gifts that create obligation. Adjust this list for {office_culture} \u2014 what's fine in a casual startup may not fly in a formal office.\n\nFinally, give me anonymous presentation tips: how to wrap or bag it so it looks intentional, what to write on the card without giving yourself away (and what not to write), and how to deliver it \u2014 the exchange moment, desk drop, or whatever fits the setup. Also cover two tricky cases: if I drew my boss or someone senior to me, how the gift should shift (slightly safer, slightly nicer, never a joke about them), and if I'm new to the team and nobody knows my humor yet, how to play it safe without being boring. End with a one-line reality check: the safest choice if I'm still unsure.",
    "description": "Suggests office-appropriate Secret Santa gifts matched to how well you know them, covers workplace gift etiquette, and gives anonymous delivery tips.",
    "category": "shopping",
    "variables": {
      "budget": {
        "label": "Budget Limit",
        "question": "What is the gift price limit?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": true
      },
      "closeness": {
        "label": "Closeness",
        "question": "How well do you know them?",
        "type": "select",
        "options": [
          "Barely know",
          "Know casually",
          "Work closely with",
          "Am friends with"
        ],
        "required": true
      },
      "coworker_interests": {
        "label": "Their Interests",
        "question": "Anything you know they like? (optional)",
        "type": "text",
        "placeholder": "e.g., Coffee, true crime podcasts, plants",
        "required": false
      },
      "office_culture": {
        "label": "Office Culture",
        "question": "How would you describe your office?",
        "type": "select",
        "options": [
          "Formal",
          "Business casual",
          "Casual",
          "Startup"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Teacher Gift Ideas",
    "displayDescription": "Eight teacher gifts beyond the usual mug \u2014 matched to grade level and giver \u2014 with policy limits and a heartfelt card formula.",
    "id": "shopping-085",
    "prompt": "I need a teacher appreciation gift with a budget of {budget}, from {from_who}, for a {grade_level} teacher. The subject or context: {teacher_subject}. If this is a group effort, we're pooling from {class_pool_size} contributors.\n\nGive me 8 thoughtful gift ideas within {budget} that go beyond the tired mug-and-apple clich\u00e9s. Tailor them to a {grade_level} teacher \u2014 what delights an elementary teacher is different from what a high school or college teacher appreciates \u2014 and factor in {teacher_subject} where it helps (subject-specific books, supplies, or experiences). For each idea, explain why a teacher would genuinely like it rather than politely accept it: does it save them money on classroom supplies, give them a real treat, or acknowledge the invisible work? If {from_who} is the whole class, include at least two ideas that scale well as a group gift, and note how the per-person cost changes. Mark your single best recommendation.\n\nThen explain school gift policies plainly: many schools and districts cap gift values (often around $25\u2013$50), and some require gifts be from the group rather than individuals. Tell me what to check, who to ask, and what happens if I accidentally go over. Cover the ethics angle for {from_who}: a gift from a parent reads differently than one from a student, and timing matters (after grades are finalized is the safe window).\n\nFinally, give me tips for a heartfelt card message from {from_who}: what makes a teacher keep a card for years (specific memories, naming the impact, the student's voice), a short structure to follow, and two example lines I can adapt. If {from_who} is the whole class, explain how to handle the card \u2014 one big card everyone signs versus a book of individual notes \u2014 and how the organizer collects contributions without it getting awkward. End with a quick sanity check: the three things to confirm before buying (policy limit, budget math if pooling, delivery timing), plus the best way to hand it over (in person after class, via the front office, or at the class party) without disrupting their day.",
    "description": "Suggests thoughtful teacher appreciation gifts for your budget and grade level, explains school gift policies, and gives card message tips.",
    "category": "shopping",
    "variables": {
      "budget": {
        "label": "Budget",
        "question": "What is your gift budget?",
        "type": "number",
        "placeholder": "e.g., 25",
        "required": true
      },
      "grade_level": {
        "label": "Grade Level",
        "question": "What grade level?",
        "type": "select",
        "options": [
          "Elementary",
          "Middle school",
          "High school",
          "College"
        ],
        "required": true
      },
      "from_who": {
        "label": "From",
        "question": "Who is the gift from?",
        "type": "select",
        "options": [
          "A parent",
          "A student",
          "The whole class"
        ],
        "required": true
      },
      "class_pool_size": {
        "label": "Class Pool Size",
        "question": "If pooling, how many are contributing?",
        "type": "number",
        "placeholder": "e.g., 20",
        "required": false
      },
      "teacher_subject": {
        "label": "Subject / Context",
        "question": "What do they teach?",
        "type": "text",
        "placeholder": "e.g., 3rd grade, AP Chemistry, piano",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Host and Hostess Gifts",
    "displayDescription": "Eight host and hostess gifts from classic to creative, with etiquette on timing and presentation and what to avoid for unfamiliar hosts.",
    "id": "shopping-086",
    "prompt": "I need a host or hostess gift with a budget of {budget} for {occasion}. I know the host {host_familiarity}, and dietary or allergy notes I should respect: {dietary_notes}.\n\nGive me 8 gift ideas within {budget}, ranging from classic can't-miss choices to creative ones that stand out. For each idea, explain why it works for {occasion} specifically, and note whether it's better given on arrival or after the event \u2014 some gifts (flowers needing a vase, perishables) create work for the host mid-party, so flag that. Include at least two ideas that are experience- or consumable-based so nothing lingers unwanted in their home, and mark which is your top pick for someone I know {host_familiarity}.\n\nThen explain host-gift etiquette concretely: when to bring the gift (on arrival is standard, but there are exceptions), how to present it (wrapped or unwrapped, what to say when handing it over \u2014 give me two natural lines), whether it should be opened in front of you, and the thank-you note that follows. Adjust for {occasion}: a dinner party, an overnight stay, and a holiday gathering each have different expectations about value and formality.\n\nNext, list gifts to avoid for hosts you don't know well \u2014 alcohol (unless you know they drink), strong scents, anything requiring their effort (unarranged flowers, food that must be served that night), overly personal items, and anything that implies judgment about their home. Respect {dietary_notes} throughout: every edible suggestion must be safe for those constraints, or clearly flagged. Also address scale: how the gift should differ for a single-evening {occasion} versus a multi-day stay, where a slightly more substantial gift is appropriate, and what to do if the host insisted 'don't bring anything' \u2014 the gracious move is to bring something small anyway, and explain exactly how to frame it so it doesn't contradict them. End with a decision shortcut: if I'm buying last-minute, the one idea that's easiest to find today and still feels intentional.",
    "description": "Picks a fitting host gift for the occasion and budget, explains when and how to present it, and flags gifts to avoid.",
    "category": "shopping",
    "variables": {
      "budget": {
        "label": "Budget",
        "question": "What is your gift budget?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      },
      "occasion": {
        "label": "Occasion",
        "question": "What is the occasion?",
        "type": "text",
        "placeholder": "e.g., Dinner party",
        "required": true
      },
      "dietary_notes": {
        "label": "Dietary / Allergy Notes",
        "question": "Any dietary restrictions or allergies to respect?",
        "type": "text",
        "placeholder": "e.g., Nut allergy, doesn't drink",
        "required": false
      },
      "host_familiarity": {
        "label": "How Well You Know Them",
        "question": "How well do you know the host?",
        "type": "select",
        "options": [
          "Very well",
          "Fairly well",
          "Barely know"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Care Package Builder",
    "displayDescription": "A complete care package plan \u2014 10\u201312 comfort, practical, and personal items within budget, plus cheap packing, shipping, and a real note.",
    "id": "shopping-087",
    "prompt": "I'm building a care package for {recipient}, who is {situation}, with a total budget of {budget}. Dietary restrictions to respect: {recipient_dietary}. I need it to arrive by {arrival_deadline} if that date is set.\n\nSuggest 10 to 12 items that mix three things: comfort (things that soothe), practical needs (things they'll actually use right now), and personal touches (things that say this came from you specifically). Tailor everything to {situation} \u2014 a homesick college student, someone recovering from illness, and a deployed service member need genuinely different packages, so don't give me generic filler. For each item, give a rough price and one line on why it's in the box for THIS person. Include at least two personal-touch ideas I make or customize myself (a letter, photos, a playlist, something handmade), because those are what get remembered. Keep the item total plus estimated shipping inside {budget} \u2014 flag the math.\n\nThen explain how to pack and ship it affordably: the cheapest box or mailer that fits, how to protect fragile items without buying specialty supplies, what to know about shipping costs (flat-rate boxes, weight thresholds), any shipping restrictions for this situation (deployed military addresses have real rules \u2014 no pork products, no aerosols, size limits \u2014 call these out if relevant), and timing so it lands when it matters, especially working back from {arrival_deadline}.\n\nThen write me a note template that feels warm and personal \u2014 not a greeting card, a real letter. Give me a structure: the opener, one honest line about what I know they're going through, one specific memory or inside reference, and the closer. Then add a budget-stretching section: where to source items cheaply without the package feeling cheap (dollar stores for fillers, free boxes from the post office, printing photos at home), which items deserve the real money and which can be the budget versions, and one thing worth removing if the math doesn't work. If the package might cross a border, flag the customs basics in one line. End with a packing checklist I can print: every item, the note, and the shipping step, so nothing gets forgotten.",
    "description": "Builds a tailored care package for their situation, explains affordable packing and shipping, and includes a warm personal note template.",
    "category": "shopping",
    "variables": {
      "recipient": {
        "label": "Recipient",
        "question": "Who is the care package for?",
        "type": "text",
        "placeholder": "e.g., My best friend",
        "required": true
      },
      "situation": {
        "label": "Situation",
        "question": "What are they going through?",
        "type": "select",
        "options": [
          "Away at college",
          "Feeling homesick",
          "Recovering from illness",
          "Going through a tough time",
          "Deployed"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 50",
        "required": true
      },
      "arrival_deadline": {
        "label": "Arrival Deadline",
        "question": "Does it need to arrive by a certain date?",
        "type": "date",
        "required": false
      },
      "recipient_dietary": {
        "label": "Dietary Restrictions",
        "question": "Any dietary restrictions for food items?",
        "type": "text",
        "placeholder": "e.g., Vegetarian, nut allergy",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Subscription Box Picker",
    "displayDescription": "Compare 4\u20135 subscription boxes on true cost, value, and flexibility \u2014 with cancellation terms checked and a clear first-box recommendation.",
    "id": "shopping-088",
    "prompt": "Help me pick a subscription box for {recipient}, who loves {interests}, with a monthly budget of {budget}. I'm deciding between {box_commitment} as the commitment level.\n\nCompare 4 to 5 real subscription boxes in this niche. For each one, break down: what's actually in a typical box and how often it ships, the true monthly cost including shipping and taxes (not just the advertised price), the quality level and whether it's genuinely good value or mostly filler, how well it matches {interests} specifically, and flexibility \u2014 can you skip a month, swap items, or is it locked in? Put this in a comparison table so the differences are scannable. Note which boxes have strong unboxing or gifting presentation, since this is for {recipient}.\n\nThen explain the trial and cancellation terms to check before I pay: is there a real trial or just a first-box discount, is it auto-renewing, how painful is cancellation (one-click versus phone-call gauntlet), whether there's a minimum commitment hiding in the fine print, and what happens to prepaid months if I cancel early. This matters more if {box_commitment} is ongoing rather than a one-time gift. Also cover the gifting logistics: whether to set it up as a gift subscription in my name or theirs, whether the first box can ship to me for wrapping or goes straight to them, whether I should tell {recipient} it's coming or let it be a surprise, and what information the box company will need from me. Then recommend the best first box to try for this person: your top pick, the runner-up if they want something different, and the honest case against each (what's the catch). If the best option slightly exceeds {budget} after shipping, say so plainly and suggest whether it's worth the stretch or which cheaper pick is closest. End with what to do after the first box arrives: how to judge whether it was worth it and when to cancel versus continue.",
    "description": "Compares subscription boxes for their interests on value, quality, and flexibility, explains trial and cancellation terms, and recommends the best first box.",
    "category": "shopping",
    "variables": {
      "recipient": {
        "label": "Recipient",
        "question": "Who is the box for?",
        "type": "text",
        "placeholder": "e.g., My dad",
        "required": true
      },
      "interests": {
        "label": "Interests",
        "question": "What are they into?",
        "type": "text",
        "placeholder": "e.g., Craft coffee, puzzles",
        "required": true
      },
      "budget": {
        "label": "Monthly Budget",
        "question": "What is your monthly budget?",
        "type": "number",
        "placeholder": "e.g., 35",
        "required": true
      },
      "box_commitment": {
        "label": "Commitment Level",
        "question": "How long do you want this to run?",
        "type": "select",
        "options": [
          "One box as a gift",
          "3-month gift",
          "Ongoing subscription"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Warranty Advisor",
    "displayDescription": "A straight answer on whether an extended warranty is worth it \u2014 real failure-rate math, fine-print traps, and the self-insurance break-even.",
    "id": "shopping-089",
    "prompt": "I'm deciding on warranty coverage for {product} costing {price}. My usage pattern is {usage_intensity}, and replacing this out of pocket would be {replacement_pain} for me financially.\n\nFirst, explain what the standard manufacturer's warranty actually covers for this product category \u2014 duration, what's included, and the common limitations people discover only when they file a claim. Be specific to {product}: what actually breaks on these, and whether the standard warranty covers those failure modes or excludes them.\n\nThen give me an honest verdict on whether an extended warranty is worth it for this category. Cover the real math: typical extended-warranty cost as a percentage of {price}, the product's actual failure rate curve (most electronics and appliances either fail early under the standard warranty or long after any extended coverage ends \u2014 address whether {product} fits that pattern), and who actually profits from extended warranties. Factor in {usage_intensity}: heavy use changes the math versus something that sits in a drawer. Name the situations where extended coverage genuinely makes sense (high repair costs, no easy DIY fix, the item is critical) and where it's a bad bet.\n\nThen walk me through the fine print that usually excludes coverage: accidental damage, wear and tear, consumables, unauthorized repairs, commercial use, and the claim-process friction (deductibles, shipping the item away for weeks, refurbished replacements instead of new). Tell me the exact questions to ask the salesperson or read in the terms before signing anything. Also compare WHERE to buy coverage: the manufacturer's plan versus the retailer's plan versus a third-party insurer \u2014 which one actually honors claims fastest, which has the better repair network for {product}, and the trap of overlapping coverage when a credit card already extends the warranty for free. Finally, do the self-insurance math: if I skip coverage and set aside the warranty's cost instead, what's the break-even? Given {replacement_pain}, advise me plainly \u2014 buy the extended warranty, rely on the standard warranty plus a credit card's purchase protection, or self-insure. End with a clear recommendation for my situation, not a hedge.",
    "description": "Explains what the standard warranty covers, whether extended coverage is worth it for the product, exposes fine-print exclusions, and does the self-insure math.",
    "category": "shopping",
    "variables": {
      "product": {
        "label": "Product",
        "question": "What product?",
        "type": "text",
        "placeholder": "e.g., OLED TV",
        "required": true
      },
      "price": {
        "label": "Price",
        "question": "What does it cost?",
        "type": "number",
        "placeholder": "e.g., 1400",
        "required": true
      },
      "replacement_pain": {
        "label": "Replacement Pain",
        "question": "How painful would replacing it out of pocket be?",
        "type": "select",
        "options": [
          "No big deal",
          "Annoying but manageable",
          "Genuinely painful"
        ],
        "required": true
      },
      "usage_intensity": {
        "label": "Usage Intensity",
        "question": "How heavily will you use it?",
        "type": "select",
        "options": [
          "Light",
          "Average",
          "Heavy daily use"
        ],
        "required": true
      }
    }
  },
  {
    "displayTitle": "Return Policy Decoder",
    "displayDescription": "Decode any return policy before you buy \u2014 the key questions, red flags by seller type, and a go/no-go verdict for your purchase.",
    "id": "shopping-090",
    "prompt": "I'm about to buy {product} from a {seller_type} with a budget of {budget}, and I need it by {need_by_date}. The item's condition: {item_condition}.\n\nBefore I buy, decode the return policy for me as it applies to this specific purchase. Walk through the key questions I must get answered: what is the return window in days and when does it start (purchase date, delivery date, or some other trigger), are there restocking fees and how much, who pays return shipping and how much that realistically costs for something this size, what condition the item must be in (unopened, like-new, original packaging), whether opened or used items are accepted at all, and whether the policy differs for {item_condition} items. Tailor this to a {seller_type}: a major retailer, a small online shop, a marketplace seller, and a secondhand seller each have very different real-world return behavior \u2014 explain what that type is typically like and where the traps are.\n\nThen list the red flags in strict policies that should make me pause or walk away: extremely short windows, all-sales-final on big-ticket items, restocking fees above 15\u201320%, buyer-pays-return-shipping on heavy items, vague condition language that lets the seller deny claims, and no written policy at all. Tell me how each red flag interacts with a {budget} purchase \u2014 what's an acceptable risk at this price and what isn't.\n\nThen tell me how to protect myself on this purchase: how to find and actually read the policy before buying (it's usually buried in the footer or FAQ \u2014 give me the 30-second scan technique: window length, fees, condition rules, who pays shipping), how to pay with a method that gives chargeback or purchase protection, why I should screenshot the policy and my order confirmation before paying (policies change, screenshots don't), how to inspect and test the item immediately on arrival \u2014 especially working back from {need_by_date} so a defective item can still be swapped in time \u2014 and what to do if the seller won't honor their stated policy, step by step. End with a go/no-go verdict: given the policy, the seller type, and my timeline, is this purchase safe to make, or should I buy elsewhere?",
    "description": "Decodes the return policy for the product and seller, flags strict-policy red flags, and gives protection steps plus a go/no-go verdict.",
    "category": "shopping",
    "variables": {
      "product": {
        "label": "Product",
        "question": "What are you buying?",
        "type": "text",
        "placeholder": "e.g., Mattress",
        "required": true
      },
      "seller_type": {
        "label": "Seller Type",
        "question": "What type of seller?",
        "type": "select",
        "options": [
          "Major retailer",
          "Small online shop",
          "Marketplace seller",
          "Secondhand"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 800",
        "required": true
      },
      "item_condition": {
        "label": "Item Condition",
        "question": "Is the item new, refurbished, or used?",
        "type": "select",
        "options": [
          "New",
          "Refurbished",
          "Used"
        ],
        "required": false
      },
      "need_by_date": {
        "label": "Need-By Date",
        "question": "When do you need it by?",
        "type": "date",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Price Tracker Setup",
    "displayDescription": "Turn a target price into a full tracking plan: price history research, alert setup, fake-sale detection, and a clear buy-or-wait verdict.",
    "id": "shopping-091",
    "prompt": "Act as my deal strategist for buying {product} \u2014 I will pull the trigger at {target_price} or below, and I need it by {buy_by_date} if that date applies. Build me a complete, actionable price-tracking plan.\n\nStart by establishing the true baseline: walk me through researching the current street price across major retailers and using price-history tools (such as CamelCamelCamel or Keepa for Amazon, Google Shopping price history, or retailer-specific trackers) to find the real historical low over the past 6\u201312 months \u2014 not the inflated \"was\" price many stores advertise. Explain exactly how to spot fake sales, where the list price is quietly raised weeks before a \"discount.\"\n\nNext, set up my tracking system step by step: which tools or apps fit {product} best, how to configure alerts (a drop below {target_price}, a meaningful percentage-drop threshold, and lightning-deal or clearance notifications), and whether I should track several sellers in parallel \u2014 including my preferred stores {preferred_stores} plus any alternatives worth watching. Tell me which alert channels to use (push, email, text) so a good deal never slips past me, and how often to check manually versus relying on automation.\n\nThen give me a decision framework tied to my timeline. {buy_by_date} is my deadline \u2014 explain how long to watch before buying, which seasonal patterns and sale events affect this product category, and the buy signals that distinguish a genuine deal from a manufactured one: price at or near the historical low, consistency across retailers rather than one outlier, and verification that the listing is new and from an authorized seller rather than a refurbished bait-and-switch.\n\nFinish with a concrete output: a numbered checklist I can execute this week, your recommended maximum reasonable wait given my deadline, and the two or three best places to watch. Close with a clear verdict section \u2014 \"Buy now if\u2026\" versus \"Keep waiting if\u2026\" \u2014 both tied to my {target_price} target.",
    "description": "Build a complete price-tracking strategy for {product} at {target_price} with tools, timelines, and real-deal signals.",
    "category": "shopping",
    "variables": {
      "product": {
        "label": "Product",
        "question": "What product do you want to track?",
        "type": "text",
        "placeholder": "e.g., AirPods Pro",
        "required": true
      },
      "target_price": {
        "label": "Target Price",
        "question": "What price would trigger a buy?",
        "type": "number",
        "placeholder": "e.g., 180",
        "required": true
      },
      "buy_by_date": {
        "label": "Buy-by Date",
        "question": "When do you need it by? (leave blank if no deadline)",
        "type": "date",
        "placeholder": "e.g., 2026-12-31",
        "required": false
      },
      "preferred_stores": {
        "label": "Preferred Stores",
        "question": "Which stores do you prefer to buy from?",
        "type": "text",
        "placeholder": "e.g., Amazon, Best Buy",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Coupon Stacking Strategy",
    "displayDescription": "Layer store coupons, manufacturer coupons, cashback, and loyalty rewards in the right order to hit your budget without voiding discounts.",
    "id": "shopping-092",
    "prompt": "Build me a complete coupon-stacking game plan for purchasing {items} with a total budget of {budget}, primarily at {store}. My goal is the lowest legal final price \u2014 every discount layered correctly, none accidentally voided.\n\nStart with the research phase: where to find every applicable discount before I shop \u2014 store coupons (app, weekly ad, email sign-up offers), manufacturer coupons (brand sites, coupon databases, newspaper inserts), digital versus paper coupon rules, cashback portals and apps (such as Rakuten, Ibotta, or store-specific offers), card-linked offers, and loyalty rewards \u2014 factoring in whether I am already a member ({already_member}). Explain which of these typically apply to {items} and which are usually excluded.\n\nThen lay out the exact stacking order for maximum savings, because sequence matters: when to scan the loyalty account, whether store coupons apply before or after manufacturer coupons, how threshold coupons (\"$10 off $50\") interact with other discounts, and the critical rule that cashback portals must be activated before the purchase \u2014 not after. Include the timing layer: which sale cycles and clearance patterns to watch so coupons land on top of an already-reduced price. Explain the extra savings moves that stack on top of coupons: buying store gift cards at a discount beforehand, routing the purchase through a cashback portal or app for a second layer, and paying with the card whose rewards category matches the purchase \u2014 each legal, each combinable, and each with its own failure mode to avoid.\n\nNext, warn me about the mistakes that void discounts: one-coupon-per-item limits, category exclusions, coupons that don't combine with employee or clearance pricing, returns that retroactively kill portal cashback, and minimum-spend thresholds calculated before or after coupons depending on the store's policy. Give me a pre-checkout verification routine.\n\nFinally, deliver the numbers: a worked savings estimate showing original total, each layer of discount, and final out-of-pocket against my {budget} \u2014 in a simple table \u2014 plus a prioritized checklist ordered by effort-to-savings ratio, and a fallback plan if a key coupon fails at the register (what to ask the cashier, which backup coupon to swap in, and when to walk away and buy online instead).\n\nAlso spell out the household angle: if family members or roommates are part of this purchase, note how to split the savings fairly, how per-person coupon limits affect multi-item hauls, and how to document the final price-per-item so everyone can see the math worked.",
    "description": "Create an ordered coupon-stacking plan for {items} that maximizes savings within your {budget}.",
    "category": "shopping",
    "variables": {
      "items": {
        "label": "Items",
        "question": "What are you buying?",
        "type": "text",
        "placeholder": "e.g., Back-to-school supplies",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 200",
        "required": true
      },
      "already_member": {
        "label": "Loyalty Member",
        "question": "Are you already a member of the store's loyalty program?",
        "type": "boolean",
        "required": false
      },
      "store": {
        "label": "Store",
        "question": "Which store are you buying from?",
        "type": "text",
        "placeholder": "e.g., Target",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Loyalty Program Picker",
    "displayDescription": "Compare the top loyalty programs for your store type with real math \u2014 rewards rates, fees, breakage \u2014 and crown the annual winner.",
    "id": "shopping-093",
    "prompt": "Help me pick the loyalty program that will genuinely save me the most money on my {store_type} shopping, where I spend about {monthly_spend} per month. I shop {shopping_habits}, and my openness to a paid tier is: {open_to_annual_fee}. I want a math-backed recommendation, not marketing claims.\n\nCompare three to four of the most relevant programs for {store_type}. For each one, break down the true rewards rate (points earned per dollar and, critically, what a point is actually worth in dollars when redeemed \u2014 not the inflated headline rate), sign-up and welcome bonuses, tier structures and whether my {monthly_spend} spend realistically reaches a meaningful tier, annual fees and whether a paid tier exists, and the perks beyond points: fuel discounts, free shipping thresholds, member-exclusive coupons, early sale access, and birthday or category bonuses.\n\nThen do the breakage analysis most comparisons skip: point expiration windows, minimum redemption thresholds that strand small balances, blackout periods, and categories that earn at reduced rates. Calculate the honest annualized net value of each program for my spend: ({monthly_spend} \u00d7 12 \u00d7 effective reward rate) minus the annual fee minus estimated breakage \u2014 and show the break-even spend where a paid tier overtakes the free option, given my stance on fees ({open_to_annual_fee}).\n\nPresent the results in a comparison table: program, effective annual rewards on my spend, annual fee, estimated breakage, perks I would actually use, and net annual value \u2014 with a clear winner, runner-up, and \"skip\" verdicts. Also flag the edge cases: whether stacking the store card with the loyalty program changes the math, whether household or family pooling of points is allowed (relevant if others shop these stores too), and what happens to my points if I move, switch stores, or the program devalues mid-year. Close with the caveats: data-privacy tradeoffs of loyalty tracking, the risk of spending more just to chase points, and a 30-day test plan \u2014 how to trial the winner (sign up, make normal purchases, track actual earned value) before committing to any paid tier.",
    "description": "Compare loyalty programs for {store_type} on true annual value and pick the one that saves you the most.",
    "category": "shopping",
    "variables": {
      "store_type": {
        "label": "Store Type",
        "question": "What type of stores?",
        "type": "text",
        "placeholder": "e.g., Grocery stores",
        "required": true
      },
      "monthly_spend": {
        "label": "Monthly Spend",
        "question": "How much do you spend per month?",
        "type": "number",
        "placeholder": "e.g., 400",
        "required": true
      },
      "open_to_annual_fee": {
        "label": "Open to Annual Fee",
        "question": "Would you pay an annual fee for a paid tier if it pays off?",
        "type": "boolean",
        "required": false
      },
      "shopping_habits": {
        "label": "Shopping Habits",
        "question": "How do you shop at these stores?",
        "type": "select",
        "options": [
          "Mostly one store",
          "Across several stores",
          "Mostly online"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Seasonal Sale Calendar",
    "displayDescription": "Map every planned purchase to its cheapest month and sale event, then sequence them into a 12-month timeline that never pays full price.",
    "id": "shopping-094",
    "prompt": "Build me a 12-month seasonal sale calendar for these planned big purchases: {planned_purchases}. I need the first items by {earliest_need}, and my flexibility on timing is: {can_wait}. The goal is simple: never pay full price if patience can beat it.\n\nFor each item, identify the single best month or sale event to buy it \u2014 Black Friday/Cyber Monday, Amazon Prime Day, Memorial Day, Labor Day, end-of-model-year clearances, January white sales, back-to-school season, and category-specific windows \u2014 and explain in one or two sentences why prices drop then (demand cycles, new-model releases pushing old stock out, retailers clearing inventory for seasonal turnover). Give a realistic expected discount range for each, based on how this category typically behaves, not on hype.\n\nThen assemble everything into a 12-month buying timeline table: month, item, the sale event to target, the expected price drop, and the action for that month (buy, watch, or skip). Sequence the timeline so cash flow stays sane \u2014 no stacking three big purchases in one month unless the deals demand it. Where {earliest_need} forces an early purchase, flag it and suggest the best available tactic anyway: open-box, refurbished, price matching, or last year's model.\n\nAdd the negotiation layer that turns a good month into a great price: which retailers price-match and how to ask, when open-box or floor-model discounts stack with the sale, and whether manufacturer rebates run alongside the big events. Set a concrete \"buy now\" trigger price for each item in advance \u2014 the number at which you stop waiting \u2014 so a surprise flash sale during a non-target month never catches you unprepared.\n\nThen add the rules that make the calendar work: start price-tracking each item at least 8\u201312 weeks before its target month, set alerts at your target price, and know each retailer's price-adjustment and return policy in case a better deal appears right after you buy. Finish with a month-by-month action checklist for the next 12 months and a one-line verdict per item: the month to buy and why.",
    "description": "Build a 12-month buying calendar that matches each planned purchase to its best sale window.",
    "category": "shopping",
    "variables": {
      "planned_purchases": {
        "label": "Planned Purchases",
        "question": "What big purchases are you planning?",
        "type": "textarea",
        "placeholder": "e.g., New mattress, grill, laptop",
        "required": true
      },
      "can_wait": {
        "label": "Can Wait",
        "question": "Can you wait for the best sale, or do you need items soon?",
        "type": "boolean",
        "required": false
      },
      "earliest_need": {
        "label": "Earliest Need",
        "question": "When do you need the first item by?",
        "type": "text",
        "placeholder": "e.g., November, or no rush",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Total Cost of Ownership",
    "displayDescription": "Go beyond the sticker price: model consumables, energy, maintenance, and repairs over time to find the cheapest option to actually own.",
    "id": "shopping-095",
    "prompt": "Calculate the true total cost of owning {product} over {years} years \u2014 not the sticker price, the real number. My upfront budget is {budget}, I expect {usage_level} usage, and for repairs I lean toward: {repairs}. Compare two to three realistic options and show me which one is actually cheapest to own.\n\nBreak down every cost category for each option. Start with purchase price and any must-have accessories. Then consumables specific to this category \u2014 filters, pods, bulbs, batteries, bags, or subscriptions \u2014 priced per year at my {usage_level} usage. Then energy costs: the product's wattage or fuel consumption translated into annual dollars at typical residential rates. Then maintenance: scheduled servicing, cleaning supplies, and parts that wear on a predictable schedule. Then likely repairs: the two or three most common failure points for this product type, what they cost to fix given my {repairs} approach (DIY parts versus a service call), and how likely they are within {years} years. Subtract any residual or resale value at the end of the period.\n\nPresent the comparison in a table: option, upfront cost, annual consumables, annual energy, maintenance, expected repairs, residual value, and total {years}-year cost \u2014 plus a cost-per-year figure for each. State your assumptions plainly (energy rate, usage hours, repair probabilities) so I can sanity-check them.\n\nFactor in the money side beyond the price tag: if I would finance any option, estimate the interest cost and fold it into the total; weigh extended warranties against each option's known failure pattern (a warranty is only worth it if it covers the failures that actually happen); and note which brands hold resale value best, since a higher residual directly lowers my net cost.\n\nClose with the decision logic: which option wins on lifetime cost, where the break-even point sits if a pricier efficient model overtakes a cheap one, whether the winner fits my {budget} upfront budget (and what to do if it doesn't \u2014 buy refurbished, wait for a sale, or accept the cheaper TCO loser knowingly), and the two questions to ask the seller before buying that most affect long-term cost.",
    "description": "Calculate the true multi-year cost of owning {product} and compare options by lifetime cost, not sticker price.",
    "category": "shopping",
    "variables": {
      "product": {
        "label": "Product",
        "question": "What product?",
        "type": "text",
        "placeholder": "e.g., Espresso machine",
        "required": true
      },
      "years": {
        "label": "Years",
        "question": "Over how many years?",
        "type": "number",
        "placeholder": "e.g., 5",
        "required": true
      },
      "budget": {
        "label": "Upfront Budget",
        "question": "What is your upfront budget?",
        "type": "number",
        "placeholder": "e.g., 600",
        "required": true
      },
      "repairs": {
        "label": "Repair Approach",
        "question": "Would you repair it yourself or pay for service?",
        "type": "select",
        "options": [
          "DIY repairs",
          "Pay for service",
          "Mix of both"
        ],
        "required": false
      },
      "usage_level": {
        "label": "Usage Level",
        "question": "How heavily will you use it?",
        "type": "select",
        "options": [
          "Light",
          "Average",
          "Heavy"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Emergency Kit Builder",
    "displayDescription": "A prioritized 72-hour kit list scaled to your household and budget, with hazard-specific gear and a yearly rotation schedule.",
    "id": "shopping-096",
    "prompt": "Build me a complete 72-hour emergency kit shopping list for {household_size} people on a total budget of {budget}. The emergency I am most preparing for is {primary_hazard}, and my household has these special considerations: {special_needs}. Prioritize what matters most in the first 24 hours \u2014 you can survive three days without comfort, not without water.\n\nOrganize the list by category: water (one gallon per person per day, plus purification backup), food (no-cook, no-refrigeration, enough calories for {household_size} people across three days), first aid (a real kit, not a ten-bandage box, plus any prescription buffer), light and power (flashlights, headlamps, batteries, a power bank), communication (a battery or hand-crank radio), documents (copies of IDs, insurance, and medical info in a waterproof bag), sanitation (wipes, bags, basic hygiene), and warmth/shelter (blankets, ponchos). For each item give the quantity scaled to my household, an estimated cost, and a priority tier \u2014 Tier 1 is buy-first survival gear, Tier 2 is comfort and resilience.\n\nTailor quantities and item choices to {primary_hazard} (for example, wildfire means N95 masks and go-bags; winter storm means warmth and non-electric heat safety; earthquake means sturdy shoes and dust masks) and to {special_needs} \u2014 infants need formula and diapers, pets need food and carriers, prescriptions need a buffer supply, mobility needs change the evacuation plan.\n\nDesign the kit for real use, not just a closet shelf: distinguish a grab-and-go bag (documents, 24 hours of water and food, light, first aid) from shelter-in-place supplies (bulk water, full food stock, sanitation), and tell me where each should live so I can reach it in the dark. Note which items need duplicates across bags if household members might be in different places when {primary_hazard} hits.\n\nDeliver a table with item, quantity, estimated cost, and priority tier, with a running total that stays within {budget}. If the full list exceeds {budget}, phase it: what to buy this week (Tier 1), what to add next month. Finish with storage guidance (cool, dark, accessible \u2014 not buried in the attic), a yearly check-and-replace schedule (rotate water and food, check battery expiry, update documents and prescriptions), and a 15-minute drill to run with the household once the kit is built.",
    "description": "Build a complete 72-hour emergency kit shopping list for your household within your budget.",
    "category": "shopping",
    "variables": {
      "household_size": {
        "label": "Household Size",
        "question": "How many people?",
        "type": "number",
        "placeholder": "e.g., 4",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 250",
        "required": true
      },
      "primary_hazard": {
        "label": "Primary Hazard",
        "question": "What emergency are you most preparing for?",
        "type": "select",
        "options": [
          "Power outage",
          "Earthquake",
          "Hurricane / storm",
          "Wildfire",
          "Winter storm",
          "Flood",
          "General preparedness"
        ],
        "required": false
      },
      "special_needs": {
        "label": "Special Needs",
        "question": "Any infants, pets, medications, or mobility needs?",
        "type": "textarea",
        "placeholder": "e.g., Toddler, dog, daily prescription",
        "required": false
      }
    }
  },
  {
    "displayTitle": "Grocery Trip Optimizer",
    "displayDescription": "Reorder your list into an efficient store route, pick the calmest shopping window, and keep the cart on budget with category targets.",
    "id": "shopping-097",
    "prompt": "Optimize my grocery trip for this list: {grocery_list}. I shop at a {store_format}, I do big trips {shopping_rhythm}, and my budget is {budget}. I want the fastest possible trip, the least crowded store, and a cart that stays on budget.\n\nFirst, reorganize my list into an efficient store route ordered by department \u2014 produce first, then bakery and deli, meat and seafood, packaged aisles, and dairy and frozen last so cold items stay cold. Adapt the route to a {store_format} layout (warehouse clubs and small markets flow differently than big supermarkets), group items so I never backtrack, and flag which items sit at the back or edges versus the center aisles. Estimate the total trip time including checkout.\n\nSecond, add the deal-hunting layer for a {store_format}: how to spot and evaluate manager markdowns and clearance stickers, when departments typically mark down meat, bakery, and produce, and which loyalty or app-only prices are worth the sign-up versus the data tradeoff. Explain how to tell a real markdown from a repackaged regular price.\n\nThird, recommend the best day and time to shop for a {store_format} \u2014 balancing restocked shelves against crowd levels \u2014 and explain the tradeoffs (weekday mornings are calm but some departments restock mid-week; Sunday afternoons are chaos).\n\nThird, give me budget tactics for {budget}: split the budget by category (produce, protein, pantry, dairy) with rough dollar targets, a running-total method as I shop (phone calculator or cart-side tally), unit-price checks on the items where brands diverge most, and a swap list \u2014 the three most common budget-busters on lists like mine and their cheaper substitutes. Include list discipline rules: the \"perimeter first\" habit, no-aisle-wandering, and a firm rule for impulse items.\n\nDeliver: my reordered list grouped by store section in shopping order, the trip time estimate, the recommended shopping window, and a one-page budget worksheet with category targets that total {budget}.",
    "description": "Turn your grocery list into an optimized store route with timing tips and a budget worksheet.",
    "category": "shopping",
    "variables": {
      "grocery_list": {
        "label": "Grocery List",
        "question": "Paste your grocery list:",
        "type": "textarea",
        "placeholder": "e.g., Milk, eggs, spinach, chicken...",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your grocery budget?",
        "type": "number",
        "placeholder": "e.g., 150",
        "required": true
      },
      "shopping_rhythm": {
        "label": "Shopping Rhythm",
        "question": "How often do you do a big grocery trip?",
        "type": "select",
        "options": [
          "Weekly",
          "Twice a week",
          "Monthly bulk",
          "As needed"
        ],
        "required": false
      },
      "store_format": {
        "label": "Store Format",
        "question": "What kind of store do you shop at?",
        "type": "select",
        "options": [
          "Large supermarket",
          "Warehouse club",
          "Small market",
          "Multiple stores"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Gift Wrapping Planner",
    "displayDescription": "A cohesive wrapping plan for every gift: material palette, cost breakdown, three techniques by skill level, and eco-friendly options.",
    "id": "shopping-098",
    "prompt": "Plan gift wrapping for {gift_count} gifts in a {theme} theme with a total budget of {budget}. My wrapping skill level is {skill_level}, and the gifts are {size_mix}. I want them to look cohesive under the tree \u2014 like they came from one thoughtful person, not a clearance bin.\n\nStart with the material palette: choose one cohesive combination of wrapping paper, ribbon or twine, gift tags, and one or two embellishments (dried sprigs, wax seals, ornaments, washi tape) that fits {theme} and photographs well. Provide a complete shopping list with quantities scaled to {gift_count} gifts and an itemized cost breakdown that stays within {budget} \u2014 including how much paper to buy (rolls versus sheets, and the overbuy margin for mistakes) and which items to buy in bulk versus individually.\n\nThen teach me three wrapping techniques matched to my {skill_level}: one simple and foolproof, one intermediate with a polished finish (crisp corners, hidden tape), and one impressive showpiece technique worth practicing on a spare box. Give clear step-by-step instructions for each, with tips for {size_mix} \u2014 oddly shaped items, bottles, and oversized boxes need different approaches than standard rectangles.\n\nAdd the logistics: a batch-wrapping session plan (set up once, wrap assembly-line, estimated time for {gift_count} gifts), a labeling system so tags don't get mixed up, and eco-friendly alternatives that still look intentional (kraft paper with natural twine, fabric furoshiki wrapping, reused ribbons, recyclable paper choices).\n\nInclude the finishing touches that elevate the whole set: what to write on the tags for a {theme} feel (short message formulas for family, friends, and colleagues), how to tie bows that don't flop, and the small consistency rules \u2014 same tag placement, same ribbon knot, same fold direction \u2014 that make {gift_count} gifts read as one deliberate collection. Note common beginner mistakes to avoid at my {skill_level}, like cutting paper too short or taping over the pattern's focal point.\n\nDeliver: the itemized shopping list with costs, the three technique walkthroughs ordered by difficulty, the session plan, and a final cohesion checklist \u2014 the five visual details that make wrapped gifts look professional.",
    "description": "Plan cohesive, budget-friendly gift wrapping for {gift_count} gifts with techniques from simple to showpiece.",
    "category": "shopping",
    "variables": {
      "gift_count": {
        "label": "Gift Count",
        "question": "How many gifts?",
        "type": "number",
        "placeholder": "e.g., 6",
        "required": true
      },
      "theme": {
        "label": "Theme",
        "question": "What wrapping theme?",
        "type": "select",
        "options": [
          "Classic elegant",
          "Fun and colorful",
          "Minimalist",
          "Rustic and natural",
          "Festive"
        ],
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your wrapping budget?",
        "type": "number",
        "placeholder": "e.g., 30",
        "required": true
      },
      "size_mix": {
        "label": "Gift Sizes",
        "question": "What sizes are the gifts?",
        "type": "select",
        "options": [
          "Mostly small",
          "Mixed sizes",
          "Large or oddly shaped"
        ],
        "required": false
      },
      "skill_level": {
        "label": "Skill Level",
        "question": "How confident are you at gift wrapping?",
        "type": "select",
        "options": [
          "Beginner",
          "Intermediate",
          "Crafty"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Gift Etiquette Advisor",
    "displayDescription": "Navigate spending norms, taboos, presentation customs, and awkward moments for your occasion and cultural context \u2014 with exact scripts.",
    "id": "shopping-099",
    "prompt": "Advise me on gift-giving etiquette for {occasion} in a {cultural_context} context. The gift is for {recipient}, it will be presented in a {setting} setting, and my budget is {budget}. I want to be generous without being inappropriate \u2014 the wrong gift here costs more than money.\n\nStart with spending norms: the appropriate range for this occasion and relationship within my {budget}, when spending at the top of the range is wise versus when it creates obligation or embarrassment, and how group gifts change the math. Then recommend suitable gift categories for {recipient} at this occasion, and \u2014 just as important \u2014 the gifts to avoid: items with negative symbolism in {cultural_context} (unlucky numbers, colors, or objects), anything too personal for the relationship level, and gifts that imply the recipient lacks something.\n\nCover presentation in detail: when during the occasion to give it, how it should be wrapped and whether the wrapping itself carries meaning in {cultural_context}, what to write on the card (and what never to write), whether to give with one hand or two, and whether to expect it to be opened in front of you or later \u2014 plus how to react gracefully either way. Adjust for the {setting}: public presentation has different rules than a private handoff.\n\nAdd the workplace and group dynamics: whether company gift policies or spending caps apply at this {occasion}, how to handle Secret Santa or group collections fairly, and what to do when others' gifts visibly outspend yours \u2014 including the gracious way to be the smallest gift in the room. If the gift involves food, alcohol, or anything consumable, note the {cultural_context} rules around it.\n\nThen handle the awkward situations with exact scripts: how to regift without getting caught or causing hurt, what to say and do when you receive something you dislike (the gracious response, word for word), how to handle a gift that is clearly too expensive for the occasion, and the thank-you follow-up \u2014 timing, medium, and tone. Finish with a do-and-don't checklist I can review the day of {occasion}.",
    "description": "Get occasion- and culture-specific gift etiquette guidance, including what to avoid and how to handle tricky situations.",
    "category": "shopping",
    "variables": {
      "occasion": {
        "label": "Occasion",
        "question": "What is the occasion?",
        "type": "text",
        "placeholder": "e.g., Dinner at a colleague's home",
        "required": true
      },
      "cultural_context": {
        "label": "Cultural Context",
        "question": "What cultural context applies?",
        "type": "text",
        "placeholder": "e.g., Japanese business culture",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 40",
        "required": true
      },
      "recipient": {
        "label": "Recipient",
        "question": "Who is the gift for?",
        "type": "text",
        "placeholder": "e.g., My manager's spouse",
        "required": false
      },
      "setting": {
        "label": "Setting",
        "question": "Where will you present the gift?",
        "type": "select",
        "options": [
          "Private",
          "Small gathering",
          "Public / formal event",
          "Workplace"
        ],
        "required": false
      }
    }
  },
  {
    "displayTitle": "Product Safety Checker",
    "displayDescription": "A pre-purchase safety routine: recall checks, certification verification, counterfeit red flags, and a walk-away list before you buy.",
    "id": "shopping-100",
    "prompt": "Help me verify the safety of {product} before I buy it. It will be used by {who_uses}, I am considering {condition}, and my budget is {budget}. I want a verification routine that catches real hazards \u2014 not vague reassurance.\n\nStart with recalls: walk me through checking the CPSC recall database and SaferProducts.gov, the manufacturer's own recall page, and \u2014 for categories where it matters \u2014 international databases. Explain what to do if I find a past recall on the model I am considering (was it fixed in later production runs, and how do I confirm the unit I would receive is post-fix?).\n\nNext, the certifications that actually matter for this product category: which marks to look for (UL or ETL listing for electrical products, CE, FCC, CPSIA compliance for children's items, FDA clearance where relevant), where the mark should physically appear, and how to verify it is genuine rather than printed on by a counterfeiter \u2014 including looking the certification up in the certifier's online database.\n\nThen the red flags in cheap or counterfeit versions of {product}: prices far below the reputable range, misspelled packaging, missing certification marks, no traceable seller or warranty, and listings that swap photos between variants. Explain how {condition} changes the risk \u2014 used or open-box units need inspection of cords, batteries, and safety interlocks, and some categories should never be bought secondhand.\n\nPoint me to where reliable safety ratings live for this category: Consumer Reports testing, the UL Product iQ database, expert review sites that do their own lab testing, and owner reviews filtered for safety complaints specifically. Deliver a pre-purchase verification checklist I can run in under 20 minutes, a red-flag list that means \"walk away immediately,\" and a final recommendation on the safest buying channel within my {budget} given {who_uses} as the user.",
    "description": "Verify the safety of {product} with recall checks, certification guidance, and counterfeit red flags.",
    "category": "shopping",
    "variables": {
      "product": {
        "label": "Product",
        "question": "What product?",
        "type": "text",
        "placeholder": "e.g., Space heater",
        "required": true
      },
      "budget": {
        "label": "Budget",
        "question": "What is your budget?",
        "type": "number",
        "placeholder": "e.g., 80",
        "required": true
      },
      "condition": {
        "label": "Condition",
        "question": "Are you buying new or used/open-box?",
        "type": "select",
        "options": [
          "New",
          "Used or open-box",
          "Either"
        ],
        "required": false
      },
      "who_uses": {
        "label": "Who Uses It",
        "question": "Who will use this product?",
        "type": "text",
        "placeholder": "e.g., Kids ages 3-8",
        "required": false
      }
    }
  }
];
