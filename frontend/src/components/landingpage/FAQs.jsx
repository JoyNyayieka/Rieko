import { Box, Container, Title, Accordion, Paper, Text } from "@mantine/core";

const FAQS = [
  {
    q: "How do I book a session with an expert?",
    a: "Browse experts, pick a topic, choose a time slot, and confirm your booking. You’ll get session details and reminders before the call.",
  },
  {
    q: "What can I get help with during a session?",
    a: "Career direction, portfolio/CV review, interview prep, skill roadmaps, switching industries, and role-specific advice across different professional domains.",
  },
  {
    q: "How does payment work?",
    a: "You pay during booking. Once confirmed, your session is locked in and you’ll receive a receipt and confirmation message.",
  },
  {
    q: "What happens after I book?",
    a: "You’ll get session instructions (link/details), what to prepare, and how to reschedule if something changes.",
  },
];

export default function FAQs() {
  return (
    <Box
      component="section"
      pos="relative"
      py={80}
      style={{overflow: "hidden"}}
    >
      <Box
        pos="absolute"
        inset={0}
        style={{
          backgroundImage: "url('/FAQs.jpg')", 
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          pointerEvents: "none",
          filter: "blur(4px)",
          transform: "scale(1.05)"
        }}
      />

      <Container size="md" pos="relative">
        <Title order={1} ta="center" mb="xl" c="#e5f0ff"
        style={{
          fontFamily: "ZillaSlabHighlight-Bold",
          fontSize: "clamp(2.3rem, 5.4vw, 3.6rem)",
        }}  
        >
            We Have Answers
        </Title>

        <Paper
          radius="lg"
          p="md"
          style={{
            backgroundColor: "#003D99",
          }}
        >
          <Accordion
            transitionDuration={1000}
            variant="separated"
            radius="md"
            chevronPosition="right"
            styles={{
              item: {
                background: "rgba(10, 42, 110, 0.55)",
                border: "1px solid rgba(255,255,255,0.08)",
              },
              control: { padding: "18px 18px" },
              label: { color: "white", fontWeight: 600, fontFamily: "Outfit" },
              chevron: { color: "white" },
              content: { paddingTop: 0, color: "rgba(255,255,255,0.85)", fontFamily: "Outfit" },
            }}
          >
            {FAQS.map((f) => (
              <Accordion.Item key={f.q} value={f.q}>
                <Accordion.Control>{f.q}</Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm" lh={1.7}>
                    {f.a}
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Paper>
      </Container>
    </Box>
  );
}
