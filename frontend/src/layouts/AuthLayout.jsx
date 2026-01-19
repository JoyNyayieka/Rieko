import { Box, Flex, Image, Paper, Stack, Text, Title } from "@mantine/core";

export default function AuthLayout({
  title,
  subtitle,
  imageSrc = "/authImages/sign-in.jpg", 
  children,
}) {
  return (
    <Flex mih="100vh">
      {/* LEFT: Form column */}
      <Box
        w={{ base: "100%", md: "45%" }}
        p={{ base: "lg", md: 48 }} 
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Card wrapper */}
        <Paper w="100%" maw={520} p="xl" radius="lg" withBorder>
          <Stack gap="md">
            {/* Header is optional: some pages might not need it */}
            {(title || subtitle) && (
              <div>
                {title && <Title order={2}>{title}</Title>}
                {subtitle && (
                  <Text c="dimmed" size="sm" mt={4}>
                    {subtitle}
                  </Text>
                )}
              </div>
            )}

            {/* The page-specific content goes here (Signin form, Register form, etc.) */}
            {children}
          </Stack>
        </Paper>
      </Box>

      {/* RIGHT: Image column */}
      <Box
        w="55%"
        visibleFrom="md" 
        style={{ position: "relative", overflow: "hidden" }}
      >
        <Image
          src={imageSrc} 
          alt="Authentication visual"
          h="100%"
          w="100%"
          fit="cover"
        />
      </Box>
    </Flex>
  );
}
