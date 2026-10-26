"use client"
import Image from "next/image";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, ChevronDownIcon, Sparkles } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox"
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldTitle,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
export default function CreateCurriculumPage() {

    const ProductDetails = useState<Record<string, string>>(
        {
            "Product Name": "Muse",
            "Product Description": "A powerful tool for creating personalized learning experiences.",
            "Product Features": "Create custom curricula, track progress, and provide personalized feedback."
        }
    );




    return (
        <div className="w-full mr-auto px-6 py-12">
            <div className=" grid w-full max-w-5xl items-center gap-10 lg:grid-cols-2">
                {/* Left — copy */}
                <section className="flex flex-col items-start mr-auto gap-5">
                    <span style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        borderRadius: "9999px",
                        border: "1px solid #bfdbfe",
                        backgroundColor: "#eff6ff",
                        padding: "0.25rem 0.75rem",
                        fontSize: "0.75rem",
                        lineHeight: "1rem",
                        fontWeight: 500,
                        color: "#1d4ed8",
                    }}>
                        <Sparkles size={14} />
                        Powered by Meta Muse
                    </span>

                    <h1 className="text-4xl font-bold leading-tight tracking-tight">

                        <span className="gradient-muse">Create a Curriculum</span>
                        <span className="mt-3 flex items-center gap-3">
                            <span className="text-xl font-medium text-slate-500">with</span>
                            <Image
                                src="/AppIcons/MuseIconExportable1.png"
                                alt="Muse"
                                width={110}
                                height={36}
                                className="h-9 w-auto"
                            />
                        </span>
                    </h1>

                    <p className="max-w-lg text-base leading-relaxed text-slate-600">
                        Skip the stress of planning from a blank page. Describe what you
                        want to teach, copy the prompt into Muse, and get a structured,
                        lesson-by-lesson curriculum in seconds.
                    </p>

                </section>
            </div>

            {/* Full-width grid — sits below the hero, not nested inside it */}
            <section
                className="mx-auto mt-4 w-[75vw]  gap-3 pt-10"
                style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
            >
                <Collapsible className="w-full rounded-xl border border-slate-200">
                    <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-800 hover:bg-slate-50">
                        Curriculum Topic
                        <ChevronDownIcon className="text-slate-500 transition-transform group-data-[panel-open]:rotate-180 [[data-panel-open]>&]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="border-t border-slate-200 px-4 py-3 text-sm leading-relaxed text-slate-600">
                        <Field>
                            <FieldLabel htmlFor="curriculum-topic">Curriculum Topic</FieldLabel>
                            <Input id="curriculum-topic" type="text" placeholder="Enter product details or curriculum topic..." />
                        </Field>
                    </CollapsibleContent>
                </Collapsible>
                <Collapsible className="w-full rounded-xl border border-slate-200">
                    <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-800 hover:bg-slate-50">
                        Personalized Learners
                        <ChevronDownIcon className="text-slate-500 transition-transform group-data-[panel-open]:rotate-180 [[data-panel-open]>&]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="border-t border-slate-200 px-4 py-3 text-sm leading-relaxed text-slate-600">
                        Yes. Free to use for personal and commercial projects. No attribution
                        required.
                    </CollapsibleContent>
                </Collapsible>
                <Collapsible className="w-full rounded-xl border border-slate-200">
                    <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-800 hover:bg-slate-50">
                        Lesson Description
                        <ChevronDownIcon className="text-slate-500 transition-transform group-data-[panel-open]:rotate-180 [[data-panel-open]>&]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="border-t border-slate-200 px-4 py-3 text-sm leading-relaxed text-slate-600">
                        <Field>
                            <FieldLabel htmlFor="lesson-description">Lesson Description</FieldLabel>
                            <Textarea className="min-h-[400px]" id="lesson-description" placeholder={`Enter the lesson description...\n\nExamples can be:\n- A detailed explanation of the topic\n- Real-world applications of the concept\n- Step-by-step instructions for a task\n- How many Lessons the Curriculum will have`} />
                        </Field>
                    </CollapsibleContent>
                </Collapsible>
                <Collapsible className="w-full rounded-xl border border-slate-200">
                    <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-800 hover:bg-slate-50">
                        Agentic Capabilities
                        <ChevronDownIcon className="text-slate-500 transition-transform group-data-[panel-open]:rotate-180 [[data-panel-open]>&]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="border-t border-slate-200 px-4 py-3 text-sm leading-relaxed text-slate-600">
                        <FieldGroup className="max-w-sm">
                            <FieldLabel>Agentic Capabilities</FieldLabel>
                            <Field orientation="horizontal">
                                <Checkbox id="agent-scroll" defaultChecked />
                                <FieldContent>
                                    <FieldLabel htmlFor="agent-scroll">
                                        Scroll through shopping sites
                                    </FieldLabel>
                                    <FieldDescription>
                                        Browse product listings on Amazon, Target, Walmart, and other stores to find what you need.
                                    </FieldDescription>
                                </FieldContent>
                            </Field>
                            <Field orientation="horizontal">
                                <Checkbox id="deep-track" />
                                <FieldContent>
                                    <FieldLabel htmlFor="deep-track">
                                        Deep Research
                                    </FieldLabel>
                                    <FieldDescription>
                                        Go beyond the surface and do detailed, extensive research to make a great curriculum.
                                    </FieldDescription>
                                </FieldContent>
                            </Field>
                            <Field orientation="horizontal">
                                <Checkbox id="plan-curriculum" />
                                <FieldContent>
                                    <FieldLabel htmlFor="plan-curriculum">
                                        Make an detailed, in-depth plan for the curriculum
                                    </FieldLabel>
                                    <FieldDescription>
                                        Create a comprehensive plan for your curriculum.
                                    </FieldDescription>
                                </FieldContent>
                            </Field>
                            <Field orientation="horizontal">
                                <Checkbox id="remind-me" />
                                <FieldContent>
                                    <FieldLabel htmlFor="remind-me">
                                       Daily planning + progress check-ins
                                    </FieldLabel>
                                    <FieldDescription>
                                        Get daily reminders and guidance to keep your curriculum on track.
                                    </FieldDescription>
                                </FieldContent>
                            </Field>
                            <Field orientation="horizontal">
                                <Checkbox id="agent-compare" defaultChecked />
                                <FieldContent>
                                    <FieldLabel htmlFor="agent-compare">
                                        Compare prices across sites
                                    </FieldLabel>
                                    <FieldDescription>
                                        Check the same product on multiple sites and surface the best total price.
                                    </FieldDescription>
                                </FieldContent>
                            </Field>
                            <Field orientation="horizontal">
                                <Checkbox id="agent-reviews" />
                                <FieldContent>
                                    <FieldLabel htmlFor="agent-reviews">
                                        Read product reviews
                                    </FieldLabel>
                                    <FieldDescription>
                                        Pull ratings and review highlights so you can judge quality fast.
                                    </FieldDescription>
                                </FieldContent>
                            </Field>
                            <Field orientation="horizontal">
                                <Checkbox id="agent-track" />
                                <FieldContent>
                                    <FieldLabel htmlFor="agent-track">
                                        Track price drops
                                    </FieldLabel>
                                    <FieldDescription>
                                        Watch a product the Agent chooses and alert you when the price falls.
                                    </FieldDescription>
                                </FieldContent>
                            </Field>
                            
                        </FieldGroup>
                        
                    </CollapsibleContent>
                </Collapsible>
                <Collapsible className="w-full rounded-xl border border-slate-200">
                    <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-800 hover:bg-slate-50">
                        Other Information
                        <ChevronDownIcon className="text-slate-500 transition-transform group-data-[panel-open]:rotate-180 [[data-panel-open]>&]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="border-t border-slate-200 px-4 py-3 text-sm leading-relaxed text-slate-600">
                        <Field>
                            <FieldLabel htmlFor="other-description">Other Information</FieldLabel>
                            <Textarea className="min-h-[400px]" id="other-description" placeholder={`Enter other information about the curriculum, e.g., learning objectives, target audience, etc.`} />
                        </Field>
                    </CollapsibleContent>
                </Collapsible>
                <Collapsible className="w-full rounded-xl border border-slate-200">
                    <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-800 hover:bg-slate-50">
                        Export Details
                        <ChevronDownIcon className="text-slate-500 transition-transform group-data-[panel-open]:rotate-180 [[data-panel-open]>&]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="border-t border-slate-200 px-4 py-3 text-sm leading-relaxed text-slate-600">
                        <FieldGroup className="max-w-sm">
                            <FieldLabel>Export curriculum</FieldLabel>
                            <Field orientation="horizontal">
                                <Checkbox id="export-pdf" defaultChecked />
                                <FieldContent>
                                    <FieldLabel htmlFor="export-pdf">
                                        Save as file artifact
                                    </FieldLabel>
                                    <FieldDescription>
                                        Generate a polished file and keep it as a saved artifact you can reopen anytime.
                                    </FieldDescription>
                                </FieldContent>
                            </Field>
                            <Field>
                                <FieldLabel>File format</FieldLabel>
                                <RadioGroup defaultValue="pdf" className="flex gap-6">
                                    <Field orientation="horizontal">
                                        <RadioGroupItem value="pdf" id="format-pdf" />
                                        <FieldLabel htmlFor="format-pdf" className="font-normal">
                                            PDF <span className="text-slate-500">(.pdf)</span>
                                        </FieldLabel>
                                    </Field>
                                    <Field orientation="horizontal">
                                        <RadioGroupItem value="docx" id="format-docx" />
                                        <FieldLabel htmlFor="format-docx" className="font-normal">
                                            Word <span className="text-slate-500">(.docx)</span>
                                        </FieldLabel>
                                    </Field>
                                </RadioGroup>
                            </Field>
                            <Field orientation="horizontal">
                                <Checkbox id="export-drive" defaultChecked />
                                <FieldContent>
                                    <FieldLabel htmlFor="export-drive">
                                        Export to Google Drive
                                    </FieldLabel>
                                    <FieldDescription>
                                        Upload the finished curriculum straight to your Google Drive.
                                    </FieldDescription>
                                </FieldContent>
                            </Field>
                            <Field orientation="horizontal">
                                <Checkbox id="export-share" />
                                <FieldContent>
                                    <FieldLabel htmlFor="export-share">
                                        Make shareable
                                    </FieldLabel>
                                    <FieldDescription>
                                        Create a share link anyone with the link can view.
                                    </FieldDescription>
                                </FieldContent>
                            </Field>
                        </FieldGroup>


                    </CollapsibleContent>
                </Collapsible>
            </section>

            <Button style={{
                marginTop: "1rem",
                padding: "1rem",
                borderRadius: "9999px",
                backgroundColor: "#1074ff",
                color: "#f1f5f9",
            }}>
                Copy Prompt
            </Button>
        </div>
    );
}
