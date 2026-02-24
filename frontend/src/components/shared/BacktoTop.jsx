import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Transition } from '@mantine/core';

export default function BacktoTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              radius="xl"
              p={0}
              w={44}
              h={44}
            >
              <IconArrowUp size={18} />
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}