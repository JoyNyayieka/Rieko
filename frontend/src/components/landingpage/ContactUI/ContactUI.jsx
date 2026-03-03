import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Stack, Text, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import HoverLinkSection from "./HoverLinkSection";
import Marquee from "react-fast-marquee";

export default function ContactUI() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  const goToContact = () => navigate("/contactform");

  const phrase =
    ' • SUBSCRIBE TO THE NEWSLETTER ';

  return (
    <>
    <HoverLinkSection onNavigate={goToContact} isMobile={isMobile}>
      <Container size="sm">
        <Stack align="center" gap={isMobile ? 16 : 10}>
          <Text
            style={{
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              color: "#001433",
              fontFamily: "ZillaSlab-SemiBold",
              textAlign: "center",
              lineHeight: 1.05,
              fontSize: isMobile ? 32 : 50,
            }}
          >
            GET IN
            <br />
            TOUCH WITH
          </Text>

            <Text
              style={{
                fontFamily: "ZillaSlabHighlight-Bold",
                fontWeight: 700,
                color: "#001433",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                fontSize: isMobile ? 45 : 70,
              }}
            >
              OUR TEAM
            </Text>
      

          {isMobile && (
            <Button
              size="md"
              radius="xl"
              onClick={goToContact}
              styles={{
                root: { marginTop: 6, backgroundColor: "#0B1D39" },
                fontFamily: "Outfit"
              }}
            >
              Contact Us
            </Button>
          )}
        </Stack>
      </Container>
    </HoverLinkSection>

      <Box bg="#66A3FF" py={24}>
        <Marquee speed={200} autoFill>
          <Text         
            size='xl'
            fw={700}
            style={{ 
              fontFamily: 'ZillaSlab-SemiBold', 
              color: '#001433', 
              whiteSpace:'nowrap',
              letterSpacing: '0.1em',    
            }}
          >
            {phrase}&nbsp;&nbsp;{phrase}
          </Text>
        </Marquee>
      </Box>
      </>
  );
}
