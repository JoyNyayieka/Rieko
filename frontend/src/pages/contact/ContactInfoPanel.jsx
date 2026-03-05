import { Box, Stack, Text, Group, ThemeIcon, ActionIcon } from "@mantine/core";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";


function ContactInfoPanel() {
  return (
    <Box
      h="100%"
      p={{ base: 24, md: 36 }}
      c="white"
      style={{ position: "relative" }}
    >
      <Stack gap="xl">
        <Box>
          <Text
            fw={700}
            fz={28}
            style={{ fontFamily: "var(--font-family-zilla-highlight)" }}
          >
            Contact Information
          </Text>
          <Text c="digitalBlue.2" mt="sm">
            We'd love to hear from you.
          </Text>
        </Box>

        <Stack gap="lg" mt="md">
          <Group>
            <ThemeIcon variant="light" color="digitalBlue" radius="xl">
              <IconPhone size={18} />
            </ThemeIcon>
            <Text>+254 7xx xxx xxx</Text>
          </Group>

          <Group>
            <ThemeIcon variant="light" color="digitalBlue" radius="xl">
              <IconMail size={18} />
            </ThemeIcon>
            <Text>rieko@gmail.com</Text>
          </Group>

          <Group>
            <ThemeIcon variant="light" color="digitalBlue" radius="xl">
              <IconMapPin size={18} />
            </ThemeIcon>
            <Text>Nairobi, Kenya</Text>
          </Group>
        </Stack>
      </Stack>

      <Group
        gap="sm"
        style={{ position: "absolute", bottom: 24 }}
      >
        <ActionIcon variant="filled" color="digitalBlue" radius="xl">
          <IconBrandTwitter size={18} />
        </ActionIcon>
        <ActionIcon variant="filled" color="digitalBlue" radius="xl">
          <IconBrandInstagram size={18} />
        </ActionIcon>
        <ActionIcon variant="filled" color="digitalBlue" radius="xl">
          <IconBrandLinkedin size={18} />
        </ActionIcon>
      </Group>
    </Box>
  );
}

export default ContactInfoPanel;