"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Search,  Repeat, MessageCircle, MessageSquareQuote, Lightbulb, SquareCheck, Toolbox, Layers2, BookOpenText, Brain, PersonStanding, ShoppingCartPlus, Bell, FileText } from "lucide-react";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger,
} from "@/components/ui/sidebar";

import { TutorialMarkdown } from "./tutorial/TutorialMarkdown";
// 👇 your TSX section — point this at your actual file
import CreateCurriculumPage from "./overview/create-curriculum";

type TutorialSection = {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    /** Public URL of the markdown file rendered for this section */
    mdPath?: string;
    /** TSX component rendered INSTEAD of markdown when provided */
    component?: React.ComponentType;
};

// Adding a section = append one entry here.
// - Markdown tutorial  → give it an mdPath under public/agentTutorials/muse/
// - TSX section        → give it a component instead. No new wiring needed.
const overviewSections: TutorialSection[] = [
    {
        id: "create-curriculum",
        title: "Create a Curriculum",
        description: "Build a curriculum with the Muse agent.",
        icon: <BookOpenText size={20} strokeWidth={2} />,
        component: CreateCurriculumPage,
    },
    {
        id: "create-routine",
        title: "Create a Routine",
        description: "Build a routine with the Muse agent.",
        icon: <Repeat size={20} strokeWidth={2} />,
        component: CreateCurriculumPage,
    },
     {
        id: "create-reminder",
        title: "Create a Reminder",
        description: "Set a reminder with the Muse agent.",
        icon: <Bell size={20} strokeWidth={2} />,
        component: CreateCurriculumPage,
    },
    {
        id: "create-resource",
        title: "Create a Resource",
        description: "Create a resource with the Muse agent.",
        icon: <FileText size={20} strokeWidth={2} />,
        component: CreateCurriculumPage,
    },
    {
        id: "find-curriculum",
        title: "Find in a Group",
        description: "Find a topic in a group with the Muse agent.",
        icon: <Search size={20} strokeWidth={2} />,
        component: CreateCurriculumPage,
    },
];

const ideaSections: TutorialSection[] = [
    {
        id: "idea-curriculum",
        title: "Curriculum Ideas",
        description: "Build a curriculum with the Muse agent.",
        icon: <BookOpenText size={20} strokeWidth={2} />,
        component: CreateCurriculumPage,
    },
    {
        id: "idea-routine",
        title: "Routine Ideas",
        description: "Build a routine with the Muse agent.",
        icon: <Repeat size={20} strokeWidth={2} />,
        component: CreateCurriculumPage,
    },
    {
        id: "idea-presearch",
        title: "Product Research Ideas",
        description: "Research products with the Muse agent.",
        icon: <ShoppingCartPlus size={20} strokeWidth={2} />,
        component: CreateCurriculumPage,
    },
];

const tutorialSections: TutorialSection[] = [
    {
        id: "setup",
        title: "Setting Up Meta Muse",
        description: "Get started with the Muse agent.",
        icon: <Toolbox size={20} strokeWidth={2} />,
        mdPath: "/agentTutorials/muse/setting-up-meta-muse.md",
    },
    {
        id: "chat",
        title: "Chatting with Muse",
        description: "Learn how to chat with the Muse agent.",
        icon: <MessageCircle size={20} strokeWidth={2} />,
        mdPath: "/agentTutorials/muse/chatting-with-meta-muse.md",
    },
    {
        id: "feed",
        title: "Your Custom Feed",
        description: "Learn how your custom feed works.",
        icon: <MessageSquareQuote size={20} strokeWidth={2} />,
        mdPath: "/agentTutorials/muse/using-the-feed-in-meta-muse.md",
    },
    {
        id: "ideas",
        title: "Ideas Page",
        description: "Learn where to find ideas that Muse makes.",
        icon: <Lightbulb size={20} strokeWidth={2} />,
        mdPath: "/agentTutorials/muse/using-ideas-in-meta-muse.md",
    },
    {
        id: "goals",
        title: "Goals Page",
        description: "Learn where to find and track your goals.",
        icon: <SquareCheck size={20} strokeWidth={2} />,
        mdPath: "/agentTutorials/muse/using-goals-in-meta-muse.md",
    },
    {
        id: "memory",
        title: "Memory",
        description: "Learn where to find and track your memories.",
        icon: <Brain size={20} strokeWidth={2} />,
        mdPath: "/agentTutorials/muse/using-memory-in-meta-muse.md",
    },
     {
        id: "personality",
        title: "Personality",
        description: "Learn where to find and track your personality traits.",
        icon: <PersonStanding size={20} strokeWidth={2} />,
        mdPath: "/agentTutorials/muse/using-personality-in-meta-muse.md",
    },
];

const usingMetaMuseSections: TutorialSection[] = [

];

const allSections = [...overviewSections, ...tutorialSections, ...usingMetaMuseSections, ...ideaSections];

function SectionMenu({
    label,
    sections,
    activeSectionId,
    onSelect,
}: {
    label: string;
    sections: TutorialSection[];
    activeSectionId: string;
    onSelect: (id: string) => void;
}) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>{label}</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {sections.map((section) => (
                        <SidebarMenuItem key={section.id}>
                            <SidebarMenuButton
                                isActive={section.id === activeSectionId}
                                tooltip={section.description}
                                onClick={() => onSelect(section.id)}
                            >
                                <span className="flex-shrink-0 text-blue-500 scale-90">{section.icon}</span>
                                <span>{section.title}</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}

export default function MuseAgentPage() {
    const [activeSectionId, setActiveSectionId] = useState(tutorialSections[0].id);
    const activeSection =
        allSections.find((section) => section.id === activeSectionId) ??
        tutorialSections[0];
    const ActiveComponent = activeSection.component;

    return (
        <SidebarProvider>
            <Sidebar collapsible="icon" className="bg-white! sticky top-0 h-screen w-[260px] border-r border-slate-200">
                <SidebarHeader>
                    <Image
                        src="/AppIcons/MuseIconExportable1.png"
                        alt="Muse"
                        width={150}
                        height={100}
                        className="mx-auto mt-2 group-data-[collapsible=icon]:hidden"
                    />
                    <Link href="/agents" className=" group-data-[collapsible=icon]:hidden text-sm mx-auto w-[45%] rounded-full flex flex-row items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-600 h-[35px] px-4"><ArrowLeft size={16} /> Back</Link>
                </SidebarHeader>
                <SidebarContent>
                    <SectionMenu
                        label="Tools"
                        sections={overviewSections}
                        activeSectionId={activeSectionId}
                        onSelect={setActiveSectionId}
                    />
                    <SectionMenu
                        label="Ideas"
                        sections={ideaSections}
                        activeSectionId={activeSectionId}
                        onSelect={setActiveSectionId}
                    />
                    <SectionMenu
                        label="Tutorial"
                        sections={tutorialSections}
                        activeSectionId={activeSectionId}
                        onSelect={setActiveSectionId}
                    />
                </SidebarContent>

                <SidebarRail />
            </Sidebar>

            {/* Main Content */}
            <main className="min-h-screen w-[80vw] min-w-0 flex-1 bg-white text-slate-950">
                {/* Breadcrumbs */}
                <section className="flex w-full items-center border-b border-slate-200 px-6 py-4">
                    <div className="flex items-center gap-3">
                        <SidebarTrigger />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/agents">Agents</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/agents/muse">
                                        <Image
                                            src="/AppIcons/otherMuse.png"
                                            alt="Muse"
                                            width={35}
                                            height={100}
                                            className="mx-auto"
                                        />
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{activeSection.title}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </section>

                {/* key forces a full remount, so the previous section
                    is removed from the screen on every switch */}
                <section key={activeSectionId} className="w-[90%] px-6 translate-x-[-5%] py-8">
                    <div className="mx-auto w-[90%] mr-auto">
                        {ActiveComponent ? (
                            <ActiveComponent />
                        ) : (
                            <TutorialMarkdown mdPath={activeSection.mdPath ?? ""} title={activeSection.title} />
                        )}
                    </div>
                </section>
            </main>
        </SidebarProvider>
    );
}
