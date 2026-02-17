import React from "react";
import { Container, Grid, Stack, Title, Text, Divider, Box } from "@mantine/core";

    const cssVar = (name) => `var(${name})`;

    export default function About() {
    return (
        <Box
        component="section"
        className="relative overflow-hidden"
        style={{
            background:
            "radial-gradient(900px 500px at 15% 20%, rgba(0, 102, 255, 0.20), transparent 60%)," +
            "radial-gradient(700px 400px at 80% 35%, rgba(0, 61, 153, 0.22), transparent 55%)," +
            "linear-gradient(180deg, rgba(0, 14, 36, 1) 0%, rgba(0, 8, 20, 1) 70%, rgba(0, 6, 18, 1) 100%)",
        }}
        >
        <div
            className="pointer-events-none absolute inset-0 opacity-[0.10]"
            style={{
            backgroundImage:
                "linear-gradient(to right, rgba(229,240,255,0.18) 1px, transparent 1px)," +
                "linear-gradient(to bottom, rgba(229,240,255,0.18) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(circle at 25% 10%, black 0%, transparent 60%)",
            WebkitMaskImage: "radial-gradient(circle at 25% 10%, black 0%, transparent 60%)",
            }}
        />
        <Container size="lg" className="relative py-16 md:py-24">
            {/* Headline */}
            <Stack gap={14} className="max-w-4xl">
            <Title
                order={2}
                className="uppercase tracking-tight leading-[0.95]"
                style={{
                fontFamily: cssVar("--font-family-zilla-highlight"),
                fontSize: "clamp(2.3rem, 5.4vw, 3.6rem)",
                color: cssVar("--color-digital-blue-100"),
                }}
            >
                Personalized mentorship &<br />
                Access to a vetted network 
            </Title>
            <Title
                order={3}
                className="uppercase tracking-wide"
                style={{
                fontFamily: cssVar("--font-family-outfit"),
                fontWeight: 500,
                fontSize: "clamp(1.2rem, 2.3vw, 1.9rem)",
                color: cssVar("--color-digital-blue-300"),
                }}
            >
                Along your career journey
            </Title>
            </Stack>
            <Divider
            my={32}
            size="sm"
            style={{
                borderColor: cssVar("--color-digital-blue-700"),
                opacity: 0.7,
            }}
            />
            {/* Body */}
            <Grid gutter={{ base: 28, md: 46 }}>
            <Grid.Col span={{ base: 12, md: 5 }}>
                <Box className="relative">
                <Text
                    className="pl-8"
                    style={{
                    fontFamily: cssVar("--font-family-outfit"),
                    color: cssVar("--color-digital-blue-50"),
                    fontSize: "clamp(1.02rem, 1.25vw, 1.18rem)",
                    lineHeight: 1.55,
                    }}
                >
                    We help young professionals grow with practical 1:1 guidance, and build meaningful
                    connections with verified experts who’ve done the work.
                </Text>
                </Box>
            </Grid.Col>
            {/* Right columns */}
            <Grid.Col span={{ base: 12, md: 7 }}>
                <Grid gutter={{ base: 22, md: 34 }}>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                    <InfoBlock
                    title="Tailored Expert Coaching"
                    body="Book focused 1:1 sessions with experienced professionals. Get direct feedback, clear next steps, and support built around your goals."
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                    <InfoBlock
                    title="Curated Talent Profiles"
                    body="Create a detailed profile that highlights your skills and progress. Build credibility over time through reviews, consistency, and clear outcomes."
                    />
                </Grid.Col>
                </Grid>
            </Grid.Col>
            </Grid>
        </Container>
        </Box>
    );
    }
    function InfoBlock({ title, body }) {
    return (
        <Stack gap={10} className="h-full">
        <Title
            order={4}
            className="uppercase leading-tight"
            style={{
            fontFamily: "var(--font-family-zilla-semibold)",
            letterSpacing: "0.02em",
            color: "var(--color-digital-blue-200)",
            fontSize: "1.15rem",
            }}
        >
            {title}
        </Title>
        <Text
            style={{
            fontFamily: "var(--font-family-outfit)",
            color: "var(--color-digital-blue-50)",
            opacity: 0.92,
            fontSize: "0.98rem",
            lineHeight: 1.6,
            }}
        >
            {body}
        </Text>
        <div
            className="mt-2 h-[2px] w-16 rounded-full"
            style={{ background: "var(--color-digital-blue-600)", opacity: 0.75 }}
        />
        </Stack>
    );
    }