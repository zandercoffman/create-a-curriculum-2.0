Create-A-Curriculum started as one page: type in a product, get a curriculum. Version 2.0 turns it into a full app that holds your curriculums, your products, and your prices in one place. It's still free and still needs no account.

Every page now shares one sidebar. On a computer, the home page also has shortcuts to Create a Curriculum, Plan with Products, AI Prompts, and Learners, and it shows the AI apps you can build with: Muse, Gemini, ChatGPT, Meta AI, and Claude.

## The old site, briefly

Version 1 had four pages: the home page, a prompt picker, and two prompt generators, one for curriculums and one for appeals.

The home page, which is the picture at the top of this post, packed everything onto one screen. A form sat on the left, a chat box in the middle, and an export panel on the right. You could fill out the form or attach a link or title, and two idea cards offered topics when you had nothing in mind.

The prompt picker was a single choice between two cards.

![The old prompt picker on desktop, with a Curriculum Prompt Generator card and an Appeal Generator card](/blog/01/prompt-desktop.png)

The appeal generator built a prompt that asks an AI to write a formal letter arguing that a rejected product should be approved. You chose one product or several, described your situation or the rejection email, and picked the type of establishment. The screenshot shows the ESA Program option.

![The old Appeal Prompt Generator on desktop, with the finished prompt on the right and a Copy button](/blog/01/prompt-appeal-desktop.png)

It worked, but everything was a one-off. You built a prompt, copied it, pasted it into an AI, and whatever came back lived wherever you happened to save it.

## Your curriculums, saved

The new Curriculums page is home base now. Type a topic or a product, pick the AI model you want to write it, and send it off. When it finishes, the curriculum stays. It gets a name, shows up in a list, and opens again with one click. You can export any saved curriculum as a PDF or a Word file, or delete it.

While it writes, the page walks through five stages: understanding your topic, building the learning sequence, designing seven lessons, preparing activities and materials, and reviewing the curriculum. What comes back has a scope and sequence, learning objectives, seven lessons in order (each with objectives, activities, and assessments), a short history of the topic, and a materials list. The list says what each item is, how it's used, and which lesson needs it.

Buttons next to the text box add context to the request. Images lets you attach pictures (JPEG, PNG, WebP, or GIF). Gemini describes them first, and that description goes into the request, so a photo of a product box or a workbook page can shape the curriculum. Personalization lets you pick a saved learner. The request then includes their name, education level, and description, along with instructions to adjust the examples, reading level, pacing, activities, and assessments for that student.

Curriculums made by an AI agent are kept in their own list, separate from the ones you create yourself, so you always know where a curriculum came from. The list has its own count in the header.

Saved curriculums live in your browser's storage, not on a server, which is why there's no sign-up. The catch is that they don't follow you to another device, and clearing your browser data clears them too. Export the ones you want to keep. Writing a new curriculum does send your request through the site to the model you picked, but saving never leaves your browser.

## Generate without leaving the site

2.0 can generate curriculums directly on the site instead of sending you off with a copied prompt. Gemini models run through Google, and the other models run through Groq.

The old prompt generators aren't gone. This is the old curriculum generator, with its lesson slider and a Sarcasm Mode checkbox that promised to shiver your timbers. It's where the new AI Prompts library started.

![The old Curriculum Prompt Generator on desktop, with a curriculum type menu, a lessons slider, and a Sarcasm Mode checkbox](/blog/01/prompt-curriculum-desktop.png)

The library has filters across the top: Favorites, Custom, and six categories (Curriculum, Shopping, Learning, Studying, Planning, and Activities). Star a prompt to favorite it. You can also write your own custom prompts with a title, a body, and variables. Custom prompts and favorites stay in your browser.

Each prompt gets its own page. The variables become a form, with text boxes, dropdowns, numbers, dates, and checkboxes. The finished prompt updates as you fill it in, and there's a Copy button under it. The page also tries to open ChatGPT, Claude, Grok, or Copilot with the prompt already filled in, as long as the prompt is short enough to fit in a link, which is about 2,000 characters. Gemini and Muse can't take a prefilled prompt, so for those the page copies it and you paste it yourself.

## Meet the Muse agent

The new Agents section is the biggest change in 2.0. An agent works toward a goal in steps instead of answering one question. It breaks the goal into tasks, researches, uses tools, and hands back a result. Muse is Meta's agent, and it has a built-in browser, so it can do things like look through shopping sites for the products a curriculum needs.

Each tool on the Muse page is a form. You fill it in, the site turns your answers into one detailed prompt, and you copy that into Muse. Then you paste Muse's reply back so the site can save it. It has five tools:

- Create a Curriculum: a full curriculum, built with the agent
- Create a Routine: a routine built around your learner's day
- Create a Reminder: so nothing about the plan gets forgotten
- Create a Resource: supporting material for a curriculum
- Find in a Group: pull a topic out of a group discussion and build from it

The curriculum form is the most detailed. It covers subject, grade band (from K to 2 up through college and adult), prior knowledge, setting, lesson length, and how the objectives are written. You choose which parts every lesson includes, such as a warm-up, guided practice, or an exit ticket. You also choose what Muse may do, which can include searching shopping sites, comparing prices, reading reviews, and watching for price drops. Approval starts on "propose only," with a guardrail already filled in: "AI proposes, the teacher disposes." Muse answers in a set format, and the site saves the result to your agent-made list.

The routine form takes days of the week, a start time, a duration, and the steps to include, and Muse breaks the routine down by day. The reminder form takes a date and time, how often it repeats, how far ahead to nudge you, and a priority. For a resource, you describe it or paste a link, say how you plan to use it, and Muse writes a summary. Find in a Group takes a group name, a topic, and how far back to look. Muse reports back on posts, files, recommendations, people to connect with, or events, depending on what you ask for.

Everything you paste back is saved in your browser. Routines, reminders, resources, and group searches are listed under their own forms, and agent-made curriculums go to the Curriculums page.

There's a step-by-step tutorial for setting up the agent, written for Meta Muse. It runs seven pages: setting up, chatting, your custom feed, ideas, goals, memory, and personality.

## Plan with Products

Plan with Products pairs your curriculum with the things you need to teach it. The catalogue has 126 sets holding 504 products in 25 categories. They run from preschool basics to high school math, with world languages, science experiments, music, PE, and coding and robotics in between. You can search, filter by category, and sort by price or name.

Add products one by one or a whole set at a time, and remove them the same way. The planner opens from a button that stays on screen: a drawer on the right on a computer, and a bottom sheet on a phone. It groups what you've added by topic or sorts it by price. Set a monthly budget and a ring fills as the total grows, with a note on how much is left or how far over you are.

Prices are estimates, and nothing is bought here. It's for planning and budgeting. If something isn't in the catalogue, you can add your own product or set by hand. You can also copy a prompt that asks an AI to research real products and prices, with an optional budget, and paste the answer back.

## Learners

Save the people you're teaching in Learners. Each profile has a photo, an education level, and a description of what they need. You pick the photo from a set of 30 animal pictures from Pexels. Add instructors too if you want them on the page. The first time you open it there's a starter card with my name on it so the page isn't empty. Edit it or delete it.

Learners show up where they're useful. In Curriculums, the Personalization button lets you pick one, and the Muse curriculum form has a learner picker too. You can build for a real learner instead of a generic one, and you don't have to re-type their details every time. Profiles are saved in your browser like everything else.

## This blog

You're reading the other new thing. The Blog is where updates, guides, and new features will be announced from now on, starting with this post. Each post is a plain markdown file.

## Dark mode and phones

The whole site now works in dark mode and on your phone as well as on a desktop. Dark mode is a switch you flip yourself, and it doesn't follow your device's setting. The home page, Curriculums, and Agents each have a layout built for a small screen rather than a shrunken desktop page, and the planner turns into a bottom sheet.

That was the weak spot in version 1. Here are three old pages on a phone. On the home page, the headline and intro text ran past the right edge of the screen.

![Three pages of the old site on a phone: the home page with its text running off the right edge, the prompt picker, and the curriculum prompt generator](/blog/01/home-mobile.png)

## On the way

Search and a Schedule page are in the works. Both pages exist, but they're empty placeholders so far. Plan with Products doesn't save your list yet, so a refresh clears it.

## Still $0.00

Create-A-Curriculum is a side project, and it's free. There's no pricing, no login, and no ads. If it helps you teach, share it with one person who'd use it.

Welcome to 2.0. Go build something.

Zander
