import React from "react";
import { Box, Container, Grid, Paper } from "@mantine/core";
import ContactFormPanel from "./ContactFormPanel";
import ContactInfoPanel from "./ContactInfoPanel";

function ContactForm() {
  return (
    <Box
      mih="100vh"
      display="flex"
      style={{ alignItems: "center" }}
      py={{ base: 24, md: 48 }}
    >
      <Container size="lg" w="100%">
        <Paper radius="lg" style={{ overflow: "hidden" }}>
          <Grid gutter={0}>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Box h="100%" mih={520} bg="digitalBlue.9">
                <ContactInfoPanel />
              </Box>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 7 }}>
              <Box h="100%" mih={520} p={{ base: 20, md: 32 }}>
                <ContactFormPanel />
              </Box>
            </Grid.Col>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default ContactForm;