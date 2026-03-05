import {
  Box,
  Stack,
  Text,
  Grid,
  TextInput,
  Textarea,
  Radio,
  Group,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "./ContactFormPanel.module.css"

const underlineClassNames = {
  root: classes.underlineInputRoot,
  input: classes.underlineInput,
  label: classes.label,
};

function ContactFormPanel() {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "general",
      message: "",
    },
  });

  return (
    <Box component="form" onSubmit={form.onSubmit((values) => console.log(values))}>
      <Stack gap="lg">
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              label="First Name"
              placeholder="Jane"
              classNames={underlineClassNames}
              {...form.getInputProps("firstName")}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              label="Last Name"
              placeholder="Doe"
              classNames={underlineClassNames}
              {...form.getInputProps("lastName")}
            />
          </Grid.Col>
        </Grid>

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              label="Email"
              placeholder="example@email.com"
              classNames={underlineClassNames}
              {...form.getInputProps("email")}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              label="Phone Number"
              placeholder="+254 7xx xxx xxx"
              classNames={underlineClassNames}
              {...form.getInputProps("phone")}
            />
          </Grid.Col>
        </Grid>

        <Box>
          <Text fw={600} mb="xs">
            Select Subject?
          </Text>

          <Radio.Group {...form.getInputProps("subject")}>
            <Group>
              <Radio value="general" label="General Inquiry" />
              <Radio value="support" label="Support" />
              <Radio value="feedback" label="Feedback" />
              <Radio value="other" label="Other" />
            </Group>
          </Radio.Group>
        </Box>

        <Textarea
          label="Message"
          placeholder="Write your message..."
          minRows={4}
          classNames={underlineClassNames}
          {...form.getInputProps("message")}
        />

        <Group justify="flex-end">
          <Button type="submit">
            Send Message
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}

export default ContactFormPanel;