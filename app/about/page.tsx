"use client";

import * as React from "react";
import { nofex } from "@/lib/fonts";
import { cn } from "cn";
import { useMobile } from "@/lib/useMobile";
import { useDarkMode } from "@/lib/useDarkMode";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

// Legal page for Create-a-Curriculum: Privacy Policy, Terms of Use,
// Cookie & Browser Storage Policy, and Disclaimer — all on one page.
// The Learners page already links to /privacy-policy, so this file
// lives at app/privacy-policy/page.tsx.
//
// Needs shadcn: card, separator, button
//   npx shadcn@latest add card separator button

const LAST_UPDATED = "November 25, 2026";
const CONTACT_EMAIL = "zandercoffman34@gmail.com";
const SITE_NAME = "Create-a-Curriculum";
const SITE_URL = "create-a-curriculum.vercel.app";

type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalDoc = {
  id: string;
  label: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

const DOCS: LegalDoc[] = [
  {
    id: "privacy",
    label: "Privacy Policy",
    title: "Privacy Policy",
    intro:
      "Create-a-Curriculum is a free curriculum-planning tool. It has no user accounts, no sign-up, no ads, and nothing for sale. This policy explains, in plain language, exactly what information the site handles and what it never touches.",
    sections: [
      {
        heading: "The short version",
        bullets: [
          "No accounts. We never ask for your name, email, or password to use the site.",
          "Your curriculums, learners, and planner lists are stored only in your own browser, on your own device. They are never sent to us, and we cannot see them.",
          "When you use the built-in AI generation, the topic or prompt you type is sent to a third-party AI provider (Google Gemini or Groq) so it can generate your curriculum. That is the only content that leaves your device.",
          "We do not sell personal information. We do not run advertising or third-party analytics trackers.",
          "If you send feedback through our Google Form, we receive whatever you choose to type into it — nothing more.",
        ],
      },
      {
        heading: "Information stored on your device",
        paragraphs: [
          "Create-a-Curriculum saves your work in your browser's local database (IndexedDB) and local storage so it is still there when you come back. This includes curriculums you create or generate, agent-made curriculums, learner and instructor profiles you add, planner and product lists, and display preferences such as dark mode.",
          "This information stays on your device. It is not transmitted to us, not backed up to our servers, and not accessible to us in any way. If you clear your browser's site data, use a different browser or device, or delete items inside the app, that information is gone — we cannot recover it for you.",
        ],
      },
      {
        heading: "Information processed when you use AI features",
        paragraphs: [
          "Some features generate curriculums with artificial intelligence. When you use in-app generation, the details you enter — such as subject, education level, and topic — are sent over a secure connection to our AI providers, Google (Gemini) and Groq, which return the generated curriculum. We do not keep a copy of your prompts or the generated results on our servers after your request completes.",
          "We do not use your prompts or curriculums to train AI models. Our AI providers process requests under their own terms and privacy policies, which govern how they handle data sent to them.",
          "The site also offers a copy-and-paste flow: it builds a prompt for you to paste into your own AI tool (such as ChatGPT or Claude). When you use that flow, whatever you paste is between you and that tool — we never see it.",
          "Please do not enter personal information about students or children — such as full names, addresses, or health details — into any AI prompt. A subject, level, and topic are all the AI needs.",
        ],
      },
      {
        heading: "Feedback forms",
        paragraphs: [
          "Our feedback forms are provided by Google Forms. If you choose to submit feedback, your response is processed by Google and delivered to us. We use feedback only to fix problems and improve the site. Only write what you are comfortable sharing — the form does not require your name or email.",
        ],
      },
      {
        heading: "Hosting and server logs",
        paragraphs: [
          "The site is hosted by Vercel. Like almost every hosting provider, Vercel automatically records standard technical logs when a page loads — for example your IP address, browser type, the page requested, and the time of the request. These logs are used to run and secure the site and are handled under Vercel's privacy policy. We do not add our own analytics, advertising pixels, or cross-site trackers on top of this.",
        ],
      },
      {
        heading: "Product links and images",
        paragraphs: [
          "Curriculum plans can include links to products sold by third-party retailers, such as Amazon. If you follow a product link, you leave our site, and the retailer's own privacy policy and terms apply. Any purchase happens entirely between you and the retailer — we never see your payment details or your orders.",
          "Product and catalogue images are provided by Pexels and are loaded from Pexels' servers, which means Pexels receives the same kind of standard technical information any image host receives when an image loads.",
        ],
      },
      {
        heading: "Cookies and browser storage",
        paragraphs: [
          "We do not set advertising or tracking cookies. The site relies on browser storage (IndexedDB and local storage) to save your work and preferences on your device — this is functional storage, not tracking, and it never leaves your device. Our hosting provider and Google Forms may set their own cookies on their own domains under their own policies.",
          "Do Not Track: because we do not track visitors across sites or build advertising profiles, our handling of your information does not change in response to a browser's Do Not Track signal. The full details are in the Cookie & Browser Storage Policy below.",
        ],
      },
      {
        heading: "Children's privacy",
        paragraphs: [
          "Create-a-Curriculum is built for educators, parents, and other adults. It is not directed at children, and we do not knowingly collect personal information from children under 13 (or the equivalent age in your country). Because everything you create is stored only on your own device, learner profiles you make never reach us. If you believe a child has sent us personal information — for example through a feedback form — contact us and we will delete it.",
        ],
      },
      {
        heading: "How long information is kept",
        bullets: [
          "On your device: your saved work stays until you delete it or clear your browser's site data.",
          "AI requests: we do not retain prompts or generated curriculums after the request completes.",
          "Feedback responses: kept while they are useful for improving the site, then deleted.",
          "Hosting logs: kept by Vercel under its own retention practices.",
        ],
      },
      {
        heading: "Your rights and choices",
        paragraphs: [
          "Most information connected to your use of the site is already entirely in your hands: it lives on your device, and you can view, change, export, or delete it at any time inside the app or through your browser settings.",
          "For the small amount of information we can receive — feedback you send us — you may contact us to ask what we hold, and to request correction or deletion. Depending on where you live (for example under the GDPR or California law), you may also have rights to access, portability, restriction, and objection. We do not sell or share personal information for advertising, so there is nothing to opt out of. We will respond to requests sent to the contact email below.",
        ],
      },
      {
        heading: "Security",
        paragraphs: [
          "Because your work is stored on your own device, its security depends largely on your device and browser. Information sent to AI providers and Google Forms travels over encrypted (HTTPS) connections. No method of storage or transmission is perfectly secure, and we cannot guarantee absolute security.",
        ],
      },
      {
        heading: "Changes to this policy",
        paragraphs: [
          "If this policy changes, the updated version will be posted on this page with a new “Last updated” date. Significant changes will be noted at the top of this page. Continuing to use the site after a change means you accept the updated policy.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          `Questions about this policy or your information: email ${CONTACT_EMAIL}. Create-a-Curriculum is operated from Phoenix, Arizona, USA.`,
        ],
      },
    ],
  },
  {
    id: "terms",
    label: "Terms of Use",
    title: "Terms of Use",
    intro:
      "These terms are the agreement between you and Create-a-Curriculum for using the site. By using the site, you agree to them. If you do not agree, please do not use the site.",
    sections: [
      {
        heading: "What Create-a-Curriculum is",
        paragraphs: [
          "Create-a-Curriculum is a free tool that helps educators and parents plan curriculums: describe what you need, generate or draft a curriculum (with AI help if you choose), match it with products, and track a budget in one place. The site is free to use — no accounts, no subscriptions, no fees.",
          "The site is a planning aid, not a school, publisher, or curriculum authority. Features may change, be added, or be removed at any time.",
        ],
      },
      {
        heading: "Who can use the site",
        paragraphs: [
          "The site is intended for adults — teachers, homeschool parents, tutors, and other educators. If you are under 18, use it with a parent, guardian, or teacher. By using the site you confirm you are allowed to agree to these terms where you live.",
        ],
      },
      {
        heading: "AI-generated content — please read this part",
        paragraphs: [
          "Parts of the site use artificial intelligence (provided by Google Gemini and Groq) to draft curriculums and related content. AI generates text by predicting likely words — it does not know facts the way a person does. Because of that:",
        ],
        bullets: [
          "AI output may be inaccurate, incomplete, out of date, or simply wrong — including facts, instructions, and product suggestions.",
          "The same request can produce different results each time, and similar output may be generated for other users. AI output is not guaranteed to be unique.",
          "AI output is not professional advice and is not reviewed, accredited, or approved by any school district, state, or education authority.",
          "You are responsible for reviewing, checking, and editing every curriculum before using it with learners. Our rule, built into the product, is: AI proposes, the teacher disposes.",
          "Do not rely on AI output alone for health, safety, legal, or financial decisions — for example, check activity instructions for safety before using them with children.",
        ],
      },
      {
        heading: "Prices and product information",
        paragraphs: [
          "Product names, prices, and availability shown on the site come from third-party listings and can be wrong, out of date, or different at checkout. A total in the planner is an estimate built from those listings, not a quote. Always confirm the price and details on the retailer's own page before buying.",
          "Catalogue images are illustrations provided by Pexels. An image illustrates a product category and may not show the exact item in the linked listing.",
        ],
      },
      {
        heading: "Your content",
        paragraphs: [
          "What you create is yours. The topics you enter, the curriculums you build or generate, and the lists you make belong to you, and — because they are stored only in your browser — they never pass through our hands. As between you and us, we claim no ownership of them. Purely AI-generated material may have limited copyright protection under current law; what you add, select, and edit is your own work.",
          "If you send us feedback, you give us permission to use it to improve the site. Please do not send anything you are not happy for us to read and act on.",
        ],
      },
      {
        heading: "Acceptable use",
        paragraphs: ["You agree not to:"],
        bullets: [
          "Use the site for anything illegal, or to create content that is illegal, harmful, or infringes someone else's rights.",
          "Enter personal information about children or students (such as full names or health details) into AI prompts.",
          "Present AI-generated output as officially approved, accredited, or standards-certified when it is not.",
          "Try to disrupt, overload, scrape at abusive rates, or gain unauthorized access to the site, its hosting, or its AI providers.",
          "Use the site or its AI features in ways that violate the terms of the underlying providers (Google, Groq, Vercel).",
          "Copy the site's branding, logo, or design and present them as your own.",
        ],
      },
      {
        heading: "Third-party links and services",
        paragraphs: [
          "The site links to and relies on third parties — retailers such as Amazon, image provider Pexels, AI providers Google and Groq, host Vercel, and Google Forms. We do not control those services, are not responsible for their content, products, or practices, and a link is not an endorsement. Any purchase or agreement you make there is strictly between you and that third party. If a product link ever carries an affiliate tag, it does not change the price you pay.",
        ],
      },
      {
        heading: "Our intellectual property",
        paragraphs: [
          "The site itself — its design, logo, text, and code — belongs to the operator of Create-a-Curriculum and is protected by applicable law. These terms do not give you any right to use the Create-a-Curriculum name or logo except to link to or mention the site fairly.",
        ],
      },
      {
        heading: "No warranties",
        paragraphs: [
          "The site is provided “as is” and “as available”, free of charge, without warranties of any kind — express or implied — including accuracy, completeness, fitness for a particular purpose, or uninterrupted availability. We do not guarantee that curriculums will meet any particular standard, program rule (including ESA or other funding-program requirements), or learning outcome. Because your work is stored in your own browser, we cannot guarantee it will not be lost if your browser data is cleared, and we cannot restore it.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "To the fullest extent allowed by law, Create-a-Curriculum and its operator are not liable for any indirect, incidental, special, or consequential damages arising from your use of the site or reliance on its content — including AI-generated content, prices, or product information — or from the loss of work stored in your browser. Nothing in these terms limits liability that cannot legally be limited, such as liability for gross negligence or willful misconduct.",
        ],
      },
      {
        heading: "Changes to the site and these terms",
        paragraphs: [
          "We may update the site or these terms at any time. Updated terms will be posted on this page with a new “Last updated” date, and significant changes will be noted at the top. Continuing to use the site after a change means you accept the updated terms.",
        ],
      },
      {
        heading: "Governing law",
        paragraphs: [
          "These terms are governed by the laws of the State of Arizona, USA, and any dispute relating to the site will be handled in the state or federal courts located in Arizona, unless your local law gives you the right to bring it elsewhere.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [`Questions about these terms: email ${CONTACT_EMAIL}.`],
      },
    ],
  },
  {
    id: "cookies",
    label: "Cookies & Storage",
    title: "Cookie & Browser Storage Policy",
    intro:
      "Short version: we do not run advertising or tracking cookies. The site stores your work in your own browser so the app can function — that storage never leaves your device.",
    sections: [
      {
        heading: "What the site stores, and why",
        bullets: [
          "IndexedDB — your curriculums, agent-made curriculums, learners and instructors, planner lists, and catalogue items you create. Purpose: saving your work between visits.",
          "Local storage — display preferences such as dark mode. Purpose: remembering how you like the site to look.",
          "We set no cookies of our own for analytics, advertising, or cross-site tracking, because we run none of those things.",
        ],
      },
      {
        heading: "Third-party cookies",
        paragraphs: [
          "Some services the site connects to may set their own cookies on their own domains when you interact with them: Vercel (hosting and security), Google Forms (if you open a feedback form), and retailers such as Amazon (if you follow a product link). Those cookies are controlled by those companies' own policies, not by us.",
        ],
      },
      {
        heading: "How to control or clear storage",
        paragraphs: [
          "You can delete everything the site stores at any time by clearing site data for this site in your browser settings, or by deleting items inside the app. Blocking browser storage entirely will keep the site from saving your work between visits. Clearing storage permanently deletes your saved curriculums and lists — we hold no copy and cannot restore them.",
        ],
      },
    ],
  },
  {
    id: "disclaimer",
    label: "Disclaimer",
    title: "Disclaimer",
    intro: "The honest limits of what Create-a-Curriculum is and is not.",
    sections: [
      {
        heading: "Educational content",
        paragraphs: [
          "Curriculums on this site — written by hand, drafted with AI, or shared as ideas — are planning drafts and starting points. They are not reviewed by any education authority, are not guaranteed to satisfy any state standard, district requirement, or funding-program rule (including ESA programs), and are not a substitute for your own professional judgment as an educator. Check any curriculum against the standards and rules that apply to your learners before using it.",
        ],
      },
      {
        heading: "Products and prices",
        paragraphs: [
          "Prices, availability, and product details are snapshots from third-party listings at the time they were added. They change without notice and may differ — sometimes significantly — at checkout. Catalogue images are Pexels illustrations and may not depict the exact product in a link. Verify everything on the retailer's page before purchasing.",
        ],
      },
      {
        heading: "No affiliation",
        paragraphs: [
          "Create-a-Curriculum is an independent project. It is not affiliated with, endorsed by, or sponsored by Amazon, Google, Groq, Pexels, or Vercel. Product and company names belong to their respective owners.",
        ],
      },
      {
        heading: "Not professional advice",
        paragraphs: [
          "Nothing on this site — including AI-generated content — is legal, medical, financial, or other professional advice. For decisions in those areas, consult a qualified professional.",
        ],
      },
    ],
  },
];

type Theme = {
  page: string;
  heading: string;
  body: string;
  muted: string;
  card: string;
  chip: string;
};

function SectionBlock({
  section,
  theme,
}: {
  section: LegalSection;
  theme: Theme;
}) {
  return (
    <div>
      <h3
        className={cn("text-base font-bold sm:text-lg", theme.heading)}
        style={{ fontFamily: nofex.style.fontFamily }}
      >
        {section.heading}
      </h3>
      {section.paragraphs?.map((p, i) => (
        <p key={i} className={cn("mt-2 text-sm leading-relaxed", theme.body)}>
          {p}
        </p>
      ))}
      {section.bullets && (
        <ul className="mt-2 list-disc space-y-1.5 pl-5">
          {section.bullets.map((b, i) => (
            <li key={i} className={cn("text-sm leading-relaxed", theme.body)}>
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function DocCard({ doc, theme }: { doc: LegalDoc; theme: Theme }) {
  return (
    <Card id={doc.id} className={cn("scroll-mt-24 shadow-sm", theme.card)}>
      <CardContent className="p-5 sm:p-8">
        <h2
          className={cn("text-2xl font-black sm:text-3xl", theme.heading)}
          style={{ fontFamily: nofex.style.fontFamily }}
        >
          {doc.title}
        </h2>
        <p className={cn("mt-3 text-sm leading-relaxed", theme.body)}>
          {doc.intro}
        </p>
        <Separator className="my-6" />
        <div className="space-y-7">
          {doc.sections.map((section) => (
            <SectionBlock key={section.heading} section={section} theme={theme} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function LegalBody({ theme, mobile }: { theme: Theme; mobile: boolean }) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl", mobile ? "px-4" : "px-6")}>
      {/* Header */}
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F06565]">
        Legal
      </p>
      <h1
        className={cn(
          "mt-2 font-black leading-tight",
          theme.heading,
          mobile ? "text-3xl" : "text-5xl"
        )}
        style={{ fontFamily: nofex.style.fontFamily }}
      >
        Privacy, Terms &amp; the Fine Print
      </h1>
      <p className={cn("mt-3 max-w-2xl text-sm leading-relaxed", theme.body)}>
        Everything legal about {SITE_NAME} ({SITE_URL}) on one page: the
        Privacy Policy, Terms of Use, Cookie &amp; Browser Storage Policy, and
        Disclaimer. Written in plain language, because nobody reads the other
        kind.
      </p>
      <p className={cn("mt-2 text-xs", theme.muted)}>
        Last updated: {LAST_UPDATED} · Questions: {CONTACT_EMAIL}
      </p>

      {mobile ? (
        <>
          {/* Mobile doc nav: horizontal pills */}
          <div className="sticky top-2 z-20 -mx-1 mt-6 flex gap-2 overflow-x-auto px-1 py-1">
            {DOCS.map((doc) => (
              <a
                key={doc.id}
                href={`#${doc.id}`}
                className={cn(
                  "whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold shadow-sm",
                  theme.chip
                )}
              >
                {doc.label}
              </a>
            ))}
          </div>
          <div className="mt-5 space-y-6 pb-16">
            {DOCS.map((doc) => (
              <DocCard key={doc.id} doc={doc} theme={theme} />
            ))}
          </div>
        </>
      ) : (
        <div className="mt-10 flex items-start gap-8 pb-20">
          {/* Desktop doc nav: sticky sidebar */}
          <nav className="sticky top-24 w-52 shrink-0">
            <p
              className={cn(
                "text-xs font-bold uppercase tracking-widest",
                theme.muted
              )}
            >
              On this page
            </p>
            <ul className="mt-3 space-y-1">
              {DOCS.map((doc) => (
                <li key={doc.id}>
                  <a
                    href={`#${doc.id}`}
                    className={cn(
                      "block rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:text-[#F06565]",
                      theme.body
                    )}
                  >
                    {doc.label}
                  </a>
                </li>
              ))}
            </ul>
            <Separator className="my-4" />
            <p className={cn("px-3 text-xs leading-relaxed", theme.muted)}>
              The one-line version: no accounts, your work never leaves your
              browser, and AI drafts are yours to check before you teach from
              them.
            </p>
          </nav>
          <div className="min-w-0 flex-1 space-y-8">
            {DOCS.map((doc) => (
              <DocCard key={doc.id} doc={doc} theme={theme} />
            ))}
            <div className="flex justify-center pt-2">
              <Button
                variant="outline"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Back to top
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PrivacyPolicyPage() {
  const isMobile = useMobile();
  const { isDark } = useDarkMode();

  if (isMobile === null) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm text-muted-foreground">Loading...</p>
      </main>
    );
  }

  if (isMobile) {
    const theme: Theme = {
      page: isDark ? "bg-[#0C1425]" : "bg-[#FFF7F7]",
      heading: isDark ? "text-white" : "text-[#1C2B4A]",
      body: isDark ? "text-slate-300" : "text-slate-700",
      muted: isDark ? "text-slate-400" : "text-slate-500",
      card: isDark
        ? "border-white/10 bg-white/5"
        : "border-rose-100 bg-white",
      chip: isDark
        ? "bg-white/10 text-slate-100"
        : "bg-white text-[#1C2B4A] border border-rose-100",
    };
    return (
      <main className={cn("min-h-screen py-6", theme.page)}>
        <LegalBody theme={theme} mobile />
      </main>
    );
  }

  const theme: Theme = {
    page: "bg-[#FFF7F7] dark:bg-[#0C1425]",
    heading: "text-[#1C2B4A] dark:text-white",
    body: "text-slate-700 dark:text-slate-300",
    muted: "text-slate-500 dark:text-slate-400",
    card: "border-rose-100 bg-white dark:border-white/10 dark:bg-white/5",
    chip: "",
  };
  return (
    <main className={cn("min-h-screen py-10", theme.page)}>
      <LegalBody theme={theme} mobile={false} />
    </main>
  );
}
