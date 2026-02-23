import React from 'react'
import { Container, Stack, Group, Title, Text, Box } from '@mantine/core'
import Marquee from "react-fast-marquee";
import HeroImages from './HeroImages';

export default function Hero() {
  const marqueeText =
    ' • TECH • DESIGN • MEDIA • CREATORS • BUILDERS • LEADERS • IDEAS • SKILLS • CAREERS';  
  
  return (
    <section
      style={{ minHeight: '100vh' }}
      className="w-full bg-digital-blue-50 text-digital-blue-900 font-extrabold overflow-hidden"
    >
      <HeroImages />
      
      <Container fluid px={16} py="xl" pb={28} 
        style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
      >
        <Stack>
          <Title 
            size="3rem" 
            style={{ margin: -6, lineHeight: 1, fontFamily: 'Outfit, sans-serif' }}>
            YOUR
          </Title>
          <Title 
            size="3.5rem" 
            style={{ margin: -6, lineHeight: 1, fontFamily: 'Outfit, sans-serif' }}>
            CAREER
          </Title>
          <Title 
            size="4.5rem" 
            style={{ margin: -6, lineHeight: 1, fontFamily: 'Outfit, sans-serif' }}>
            ACCELERATED
            </Title>
        </Stack>

        <Group
          align="flex-start"
          mt="lg"
          wrap="wrap"
          gap="xl"
        >
          <Text
            size="lg"
            className="font-family-zilla-highlight max-w-xs"
          >
            WE CONNECT YOUNG <br />
            PROFESSIONALS WITH <br />
            TRUSTED EXPERTS FOR <br />
            PRACTICAL GUIDANCE AND <br />
            REAL CAREER GROWTH
          </Text>

          <Text
            size="lg"
            className="font-family-zilla-semibold max-w-sm"
          >
            Rieko offers expert-led <br />
            mentorship and career guidance <br />
            for young professionals
          </Text>
        </Group>
      </Container>
      <Box bg="#66A3FF" py={24}>
        <Marquee speed={100}>
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
            {marqueeText}&nbsp;&nbsp;{marqueeText}
          </Text>
        </Marquee>
      </Box>
      
    </section>
  )
}
