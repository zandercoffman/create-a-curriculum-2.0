import {
    Calendar,
    GalleryHorizontalEnd,
    Home,
    Library,
    Search,
    Rss,
    TextCursor,
    GraduationCap,
    Bot,
    Drone,
    HatGlasses,
    Sparkles,
    LayoutDashboard,
    User,
    Goal,
} from "lucide-react"

export const navItems = [
    {
        label: "Home",
        icon: Home,
        href: "/",
    },

    {
        label: "Search",
        icon: Search,
        href: "/search",
    },

    {
        label: "Create",
        icon: Sparkles,
        items: [
            {
                label: "Curriculums",
                icon: Library,
                href: "/curriculums",
            },
            {
                label: "Agents",
                icon: HatGlasses,
                href: "/agents",
            },
            {
                label: "AI Prompts",
                icon: TextCursor,
                href: "/prompts",
            },
        ],
    },

    {
        label: "Manage",
        icon: LayoutDashboard,
        items: [
            /**
             *  {
                label: "Schedule",
                icon: Calendar,
                href: "/schedule",
            },
            {
                label: "Goals",
                icon: Goal,
                href: "/goals",
            },
             */

           
            {
                label: "Lists (Products)",
                icon: GalleryHorizontalEnd,
                href: "/productsandlists",
            },
            {
                label: "Learners",
                icon: User,
                href: "/learners",
            },
            {
                label: "Resources",
                icon: GraduationCap,
                href: "/resources",
            },
            {
                label: "Blog",
                icon: Rss,
                href: "/blog",
            },
        ],
    },
]
export const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()

        reader.onload = () => {
            const result = reader.result as string

            // Remove "data:image/jpeg;base64," prefix
            const base64 = result.split(",")[1]

            resolve(base64)
        }

        reader.onerror = reject

        reader.readAsDataURL(file)
    })
}

export const isLocal = process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
export const testLink = isLocal ? "http://localhost:3000" : "https://create-a-curriculum.vercel.app"

/**
 * AI chat providers that can be deep-linked with a prefilled prompt,
 * e.g. https://chatgpt.com/?q=hello
 *
 * Live-verified in a real browser on 2026-09-15:
 *   - ChatGPT: ?q= prefills the composer, Send enabled.
 *   - Grok: ?q= prefills with a one-click "Send this message?" confirmation.
 *   - Gemini: does NOT support prompt-in-link (no param works).
 *   - Claude / Copilot: could not be verified (both force login before the
 *     composer is visible); the formats below are the documented ones.
 *   - Meta AI: could not be verified from the test environment (network
 *     block); format below is the documented one.
 */

export interface AIChatProvider {
  id: string;
  name: string;
  description: string;
  /** Brand color in hex (also used as the icon fill). */
  color: string;
  /** Inline SVG logo markup. */
  svg: string;
  /** Homepage. */
  baseUrl: string;
  /** Query parameter the prompt is appended to, or null when unsupported. */
  queryParam: string | null;
  /** Build a deep link with a prefilled prompt. Null when unsupported. */
  buildUrl: (prompt: string) => string | null;
  /** Whether the link-prefill behavior was live-verified. */
  verified: boolean;
  /** Verification / behavior notes. */
  note: string;
}

export const AI_CHAT_PROVIDERS: AIChatProvider[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description:
      "OpenAI's flagship assistant — the most widely used AI chat, strong at writing, coding, and everyday questions.",
    color: "#10A37F",
    svg: `<svg aria-label="ChatGPT logo" role="img" viewBox="0 0 20 20" fill="#10A37F" xmlns="http://www.w3.org/2000/svg"><title>ChatGPT logo</title><path d="M11.2475 18.25C10.6975 18.25 10.175 18.1455 9.67999 17.9365C9.18499 17.7275 8.74499 17.436 8.35999 17.062C7.94199 17.205 7.50749 17.2765 7.05649 17.2765C6.31949 17.2765 5.63749 17.095 5.01049 16.732C4.38349 16.369 3.87749 15.874 3.49249 15.247C3.11849 14.62 2.93149 13.9215 2.93149 13.1515C2.93149 12.8325 2.97549 12.486 3.06349 12.112C2.62349 11.705 2.28249 11.2375 2.04049 10.7095C1.79849 10.1705 1.67749 9.6095 1.67749 9.0265C1.67749 8.4325 1.80399 7.8605 2.05699 7.3105C2.30999 6.7605 2.66199 6.2875 3.11299 5.8915C3.57499 5.4845 4.10849 5.204 4.71349 5.05C4.83449 4.423 5.08749 3.862 5.47249 3.367C5.86849 2.861 6.35249 2.465 6.92449 2.179C7.49649 1.893 8.10699 1.75 8.75599 1.75C9.30599 1.75 9.82849 1.8545 10.3235 2.0635C10.8185 2.2725 11.2585 2.564 11.6435 2.938C12.0615 2.795 12.496 2.7235 12.947 2.7235C13.684 2.7235 14.366 2.905 14.993 3.268C15.62 3.631 16.1205 4.126 16.4945 4.753C16.8795 5.38 17.072 6.0785 17.072 6.8485C17.072 7.1675 17.028 7.514 16.94 7.888C17.38 8.295 17.721 8.768 17.963 9.307C18.205 9.835 18.326 10.3905 18.326 10.9735C18.326 11.5675 18.1995 12.1395 17.9465 12.6895C17.6935 13.2395 17.336 13.718 16.874 14.125C16.423 14.521 15.895 14.796 15.29 14.95C15.169 15.577 14.9105 16.138 14.5145 16.633C14.1295 17.139 13.651 17.535 13.079 17.821C12.507 18.107 11.8965 18.25 11.2475 18.25ZM7.17199 16.1875C7.72199 16.1875 8.20049 16.072 8.60749 15.841L11.7095 14.059C11.8195 13.982 11.8745 13.8775 11.8745 13.7455V12.3265L7.88149 14.62C7.63949 14.763 7.39749 14.763 7.15549 14.62L4.03699 12.8215C4.03699 12.8545 4.03149 12.893 4.02049 12.937C4.02049 12.981 4.02049 13.047 4.02049 13.135C4.02049 13.696 4.15249 14.213 4.41649 14.686C4.69149 15.148 5.07099 15.511 5.55499 15.775C6.03899 16.05 6.57799 16.1875 7.17199 16.1875ZM7.33699 13.498C7.40299 13.531 7.46349 13.5475 7.51849 13.5475C7.57349 13.5475 7.62849 13.531 7.68349 13.498L8.92099 12.7885L4.94449 10.4785C4.70249 10.3355 4.58149 10.121 4.58149 9.835V6.2545C4.03149 6.4965 3.59149 6.8705 3.26149 7.3765C2.93149 7.8715 2.76649 8.4215 2.76649 9.0265C2.76649 9.5655 2.90399 10.0825 3.17899 10.5775C3.45399 11.0725 3.81149 11.4465 4.25149 11.6995L7.33699 13.498ZM11.2475 17.161C11.8305 17.161 12.3585 17.029 12.8315 16.765C13.3045 16.501 13.6785 16.138 13.9535 15.676C14.2285 15.214 14.366 14.697 14.366 14.125V10.561C14.366 10.429 14.311 10.33 14.201 10.264L12.947 9.538V14.1415C12.947 14.4275 12.826 14.642 12.584 14.785L9.46549 16.5835C10.0045 16.9685 10.5985 17.161 11.2475 17.161ZM11.8745 11.122V8.878L10.01 7.822L8.12899 8.878V11.122L10.01 12.178L11.8745 11.122ZM7.05649 5.8585C7.05649 5.5725 7.17749 5.358 7.41949 5.215L10.538 3.4165C9.99899 3.0315 9.40499 2.839 8.75599 2.839C8.17299 2.839 7.64499 2.971 7.17199 3.235C6.69899 3.499 6.32499 3.862 6.04999 4.324C5.78599 4.786 5.65399 5.303 5.65399 5.875V9.4225C5.65399 9.5545 5.70899 9.659 5.81899 9.736L7.05649 10.462V5.8585ZM15.4385 13.7455C15.9885 13.5035 16.423 13.1295 16.742 12.6235C17.072 12.1175 17.237 11.5675 17.237 10.9735C17.237 10.4345 17.0995 9.9175 16.8245 9.4225C16.5495 8.9275 16.192 8.5535 15.752 8.3005L12.6665 6.5185C12.6005 6.4745 12.54 6.458 12.485 6.469C12.43 6.469 12.375 6.4855 12.32 6.5185L11.0825 7.2115L15.0755 9.538C15.1965 9.604 15.2845 9.692 15.3395 9.802C15.4055 9.901 15.4385 10.022 15.4385 10.165V13.7455ZM12.122 5.3635C12.364 5.2095 12.606 5.2095 12.848 5.3635L15.983 7.195C15.983 7.118 15.983 7.019 15.983 6.898C15.983 6.37 15.851 5.8695 15.587 5.3965C15.334 4.9125 14.9655 4.5275 14.4815 4.2415C14.0085 3.9555 13.4585 3.8125 12.8315 3.8125C12.2815 3.8125 11.803 3.928 11.396 4.159L8.29399 5.941C8.18399 6.018 8.12899 6.1225 8.12899 6.2545V7.6735L12.122 5.3635Z"/></svg>`,
    baseUrl: "https://chatgpt.com",
    queryParam: "q",
    buildUrl: (prompt: string) =>
      `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`,
    verified: true,
    note: "Prefills the composer and enables Send. Verified 2026-09-15.",
  },
  {
    id: "claude",
    name: "Claude",
    description:
      "Anthropic's assistant — known for careful reasoning, long documents, and coding help.",
    color: "#D97757",
    svg: `<svg role="img" viewBox="0 0 24 24" fill="#D97757" xmlns="http://www.w3.org/2000/svg"><title>Claude</title><path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"/></svg>`,
    baseUrl: "https://claude.ai",
    queryParam: "q",
    buildUrl: (prompt: string) =>
      `https://claude.ai/new?q=${encodeURIComponent(prompt)}`,
    verified: false,
    note: "Format is the documented one; could not be live-verified — claude.ai forces login before the composer is visible.",
  },
  {
    id: "gemini",
    name: "Gemini",
    description:
      "Google's AI assistant — deeply integrated with Search, Workspace, and Android.",
    color: "#8E75B2",
    svg: `<svg role="img" viewBox="0 0 24 24" fill="#8E75B2" xmlns="http://www.w3.org/2000/svg"><title>Google Gemini</title><path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/></svg>`,
    baseUrl: "https://gemini.google.com",
    queryParam: null,
    buildUrl: (_prompt: string) => null,
    verified: true,
    note: "Gemini does not support prompt-in-link — neither ?q= nor ?prompt= prefilled the composer. Verified 2026-09-15.",
  },
  {
    id: "grok",
    name: "Grok",
    description:
      "xAI's assistant — plugged into X with real-time information and an irreverent tone.",
    color: "#000000",
    svg: `<svg viewBox="0 0 88 33" fill="#000000" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grok logo"><title>Grok</title><path d="M76.4462 24.7077V8.41584H79.0216V19.1679L84.4685 12.9109H87.5908L82.6908 18.2731L87.6364 24.7077H84.5596L80.5539 19.1788L79.0216 19.1679V24.7077H76.4462Z"/><path d="M68.6362 24.9815C64.8074 24.9815 62.7335 22.2662 62.7335 18.7979C62.7335 15.3068 64.8074 12.6143 68.6362 12.6143C72.4878 12.6143 74.5389 15.3068 74.5389 18.7979C74.5389 22.2662 72.4878 24.9815 68.6362 24.9815ZM65.4228 18.7979C65.4228 21.4904 66.8813 22.8366 68.6362 22.8366C70.4139 22.8366 71.8497 21.4904 71.8497 18.7979C71.8497 16.1054 70.4139 14.7363 68.6362 14.7363C66.8813 14.7363 65.4228 16.1054 65.4228 18.7979Z"/><path d="M55.5659 24.7077V14.782L57.731 12.9109H62.3347V15.1014H58.1413V24.7077H55.5659Z"/><path d="M45.7187 25.009C40.8101 25.009 37.8834 21.4448 37.8834 16.5846C37.8834 11.6788 40.9146 8.02795 45.8145 8.02795C49.6433 8.02795 52.4466 9.99027 53.1075 13.6411H50.1675C49.7345 11.5647 48.0024 10.401 45.8145 10.401C42.282 10.401 40.7322 13.4586 40.7322 16.5846C40.7322 19.7106 42.282 22.7454 45.8145 22.7454C49.1875 22.7454 50.6689 20.3039 50.7828 18.2731H45.7006V15.9105H53.381L53.3684 17.1457C53.3684 21.7359 51.4978 25.009 45.7187 25.009Z"/><path d="M13.2371 21.0407L24.3186 12.8506C24.8619 12.4491 25.6384 12.6057 25.8973 13.2294C27.2597 16.5185 26.651 20.4712 23.9403 23.1851C21.2297 25.8989 17.4581 26.4941 14.0108 25.1386L10.2449 26.8843C15.6463 30.5806 22.2053 29.6665 26.304 25.5601C29.5551 22.3051 30.562 17.8683 29.6205 13.8673L29.629 13.8758C28.2637 7.99809 29.9647 5.64871 33.449 0.844576C33.5314 0.730667 33.6139 0.616757 33.6964 0.5L29.1113 5.09055V5.07631L13.2343 21.0436"/><path d="M10.9503 23.0313C7.07343 19.3235 7.74185 13.5853 11.0498 10.2763C13.4959 7.82722 17.5036 6.82767 21.0021 8.2971L24.7595 6.55998C24.0826 6.07017 23.215 5.54334 22.2195 5.17313C17.7198 3.31926 12.3326 4.24192 8.67479 7.90126C5.15635 11.4239 4.0499 16.8403 5.94992 21.4622C7.36924 24.9165 5.04257 27.3598 2.69884 29.826C1.86829 30.7002 1.0349 31.5745 0.36364 32.5L10.9474 23.0341"/></svg>`,
    baseUrl: "https://grok.com",
    queryParam: "q",
    buildUrl: (prompt: string) =>
      `https://grok.com/?q=${encodeURIComponent(prompt)}`,
    verified: true,
    note: "Prefills the message but shows a one-click 'Send this message?' confirmation — it is not auto-submitted. Verified 2026-09-15.",
  },
  {
    id: "copilot",
    name: "Copilot",
    description:
      "Microsoft's AI companion — built into Windows, Edge, and Microsoft 365.",
    color: "#2253CE",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="none" viewBox="0 0 120 120" role="img" aria-label="Microsoft Copilot logo"><title>Microsoft Copilot</title><path fill="url(#copilot-a)" d="M85.855 18.313A11.574 11.574 0 0 0 74.75 10h-3.379a11.574 11.574 0 0 0-11.384 9.485L54.2 51.018l1.436-4.913a11.574 11.574 0 0 1 11.11-8.327H86.38l8.235 3.207 7.937-3.207h-2.316a11.574 11.574 0 0 1-11.105-8.313z"/><path fill="url(#copilot-b)" d="M36.326 101.64A11.574 11.574 0 0 0 47.445 110h7.176c6.276 0 11.409-5.002 11.57-11.277l.781-30.405-1.634 5.583a11.574 11.574 0 0 1-11.108 8.321H34.432l-7.058-3.829-7.641 3.83h2.278c5.154 0 9.687 3.408 11.119 8.36z"/><path fill="url(#copilot-c)" d="M74.248 10H34.15c-11.457 0-18.33 15.142-22.913 30.283-5.43 17.939-12.534 41.93 8.02 41.93H36.57c5.174 0 9.716-3.421 11.138-8.396 3.01-10.531 8.286-28.903 12.43-42.889 2.105-7.107 3.86-13.211 6.551-17.012C68.2 11.785 70.715 10 74.248 10"/><path fill="url(#copilot-d)" d="M74.248 10H34.15c-11.457 0-18.33 15.142-22.913 30.283-5.43 17.939-12.534 41.93 8.02 41.93H36.57c5.174 0 9.716-3.421 11.138-8.396 3.01-10.531 8.286-28.903 12.43-42.889 2.105-7.107 3.86-13.211 6.551-17.012C68.2 11.785 70.715 10 74.248 10"/><path fill="url(#copilot-e)" d="M46.744 110h40.099c11.456 0 18.33-15.144 22.913-30.288 5.429-17.942 12.533-41.937-8.02-41.937H84.422a11.576 11.576 0 0 0-11.138 8.396c-3.01 10.533-8.286 28.909-12.43 42.897-2.106 7.109-3.86 13.214-6.552 17.016-1.51 2.131-4.025 3.916-7.558 3.916"/><path fill="url(#copilot-f)" d="M46.744 110h40.099c11.456 0 18.33-15.144 22.913-30.288 5.429-17.942 12.533-41.937-8.02-41.937H84.422a11.576 11.576 0 0 0-11.138 8.396c-3.01 10.533-8.286 28.909-12.43 42.897-2.106 7.109-3.86 13.214-6.552 17.016-1.51 2.131-4.025 3.916-7.558 3.916"/><defs><radialGradient id="copilot-a" cx="0" cy="0" r="1" gradientTransform="matrix(-27.40125 -33.47302 31.47539 -25.76598 95.512 51.286)" gradientUnits="userSpaceOnUse"><stop offset=".096" stop-color="#00AEFF"/><stop offset=".773" stop-color="#2253CE"/><stop offset="1" stop-color="#0736C4"/></radialGradient><radialGradient id="copilot-b" cx="0" cy="0" r="1" gradientTransform="rotate(51.84 -70.254 70.14)scale(39.9779 38.7796)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB657"/><stop offset=".634" stop-color="#FF5F3D"/><stop offset=".923" stop-color="#C02B3C"/></radialGradient><radialGradient id="copilot-e" cx="0" cy="0" r="1" gradientTransform="matrix(-31.67773 90.58917 -108.5232 -37.949 103.796 30.703)" gradientUnits="userSpaceOnUse"><stop offset=".066" stop-color="#8C48FF"/><stop offset=".5" stop-color="#F2598A"/><stop offset=".896" stop-color="#FFB152"/></radialGradient><linearGradient id="copilot-c" x1="31.75" x2="37.471" y1="18.75" y2="84.938" gradientUnits="userSpaceOnUse"><stop offset=".156" stop-color="#0D91E1"/><stop offset=".487" stop-color="#52B471"/><stop offset=".652" stop-color="#98BD42"/><stop offset=".937" stop-color="#FFC800"/></linearGradient><linearGradient id="copilot-d" x1="36.75" x2="39.874" y1="10" y2="82.213" gradientUnits="userSpaceOnUse"><stop stop-color="#3DCBFF"/><stop offset=".247" stop-color="#0588F7" stop-opacity="0"/></linearGradient><linearGradient id="copilot-f" x1="106.964" x2="106.923" y1="33.365" y2="53.037" gradientUnits="userSpaceOnUse"><stop offset=".058" stop-color="#F8ADFA"/><stop offset=".708" stop-color="#A86EDD" stop-opacity="0"/></linearGradient></defs></svg>`,
    baseUrl: "https://copilot.microsoft.com",
    queryParam: "q",
    buildUrl: (prompt: string) =>
      `https://copilot.microsoft.com/?q=${encodeURIComponent(prompt)}`,
    verified: false,
    note: "Format is the documented one; could not be live-verified — copilot.microsoft.com forces sign-in before the composer is visible.",
  },
  {
    id: "meta-ai",
    name: "Meta AI",
    description:
      "Meta's assistant — lives inside WhatsApp, Instagram, Facebook, and Messenger.",
    color: "#0467DF",
    svg: `<svg role="img" viewBox="0 0 24 24" fill="#0467DF" xmlns="http://www.w3.org/2000/svg"><title>Meta</title><path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"/></svg>`,
    baseUrl: "https://www.meta.ai",
    queryParam: "q",
    buildUrl: (prompt: string) =>
      `https://www.meta.ai/?q=${encodeURIComponent(prompt)}`,
    verified: false,
    note: "Format is the documented one; could not be live-verified from the test environment (network block on www.meta.ai).",
  },
];

/** Look up a provider by id, e.g. getProvider("chatgpt"). */
export function getProvider(id: string): AIChatProvider | undefined {
  return AI_CHAT_PROVIDERS.find((p) => p.id === id);
}

/** Build a prefilled-prompt link for a provider. Null when unsupported. */
export function providerLink(
  id: string,
  prompt: string,
): string | null | undefined {
  const provider = getProvider(id);
  return provider?.buildUrl(prompt);
}
