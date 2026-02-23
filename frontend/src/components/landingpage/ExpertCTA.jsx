import { BackgroundImage, Center, Text, Box, Stack, Button, Container } from '@mantine/core';

export default function ExpertCTA() {
  return (
    <Box w="100%" mx="auto">
      <BackgroundImage
        src="/ExpertCTA.jpg"
        h={500}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Center h="100">
          <Container size="sm">
            <Stack align='center'>
              <Text
              style={{
                fontFamily: "ZillaSlab-SemiBold",
                color: "#002966",
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                borderRadius: "12px",
                fontWeight: 800,
                textAlign: "center",
                fontSize: "clamp(20px, 3vw, 36px)",
              }}
              >
                “I’ve built my experience through real challenges and lessons — now I’m ready to share what I know
                and help others grow with clarity and confidence.”
              </Text>
              <Button
                size="md"
                  radius="xl"
                  // onClick={}
                  styles={{
                    root: { marginTop: 6, color: '#001433', backgroundColor: '#66A3FF' },
                    fontFamily: "Outfit"
                  }}
                >
                  Become an Expert
              </Button>
            </Stack>
          </Container>
        </Center>
      </BackgroundImage>
    </Box>
  );
}