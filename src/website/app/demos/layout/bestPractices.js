/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../styles';
import { mineralTheme, ThemeProvider } from '../../../../themes';
import { Box, Flex, FlexItem, StartEnd } from '../../../../layout';
import Button from '../../../../Button';
import Link from '../../../../Link';

const Container = createStyledComponent('div', ({ theme }) => ({
  backgroundColor: theme.color_gray_10,
  border: `1px solid ${theme.color_gray_20}`
}));

export default {
  box: [
    {
      type: 'do',
      description:
        'Wrap Box around other components to apply spacing from the theme.',
      example: (
        <Container>
          <Box margin="lg" marginHorizontal="xl">
            <Button primary variant="success">
              New Report
            </Button>
          </Box>
        </Container>
      )
    },
    {
      type: 'do',
      description: `Use Box's \`marginStart\` & \`marginEnd\` props to apply
directionally-appropriate left/right margins.`,
      example: (
        <ThemeProvider theme={{ direction: 'rtl' }}>
          <Container dir="rtl">
            <Box marginStart="xl">
              <Button primary>This Button has marginStart</Button>
            </Box>
          </Container>
        </ThemeProvider>
      )
    },
    {
      type: 'dont',
      description: `Don't use Box to display content directly. Wrap Box around
components instead.`,
      example: (
        <Container>
          <Box>
            This is some text, without the proper text styles, because it is
            directly inside a Box.
          </Box>
        </Container>
      )
    }
  ],
  flex: [
    {
      type: 'do',
      description: `Use Flex and [FlexItem](../flex-item) to arrange components
next to one another, with a consistent gutter.`,
      example: (
        <Flex justifyContent="end">
          <FlexItem>
            <Button size="small">Cut</Button>
          </FlexItem>
          <FlexItem>
            <Button size="small">Copy</Button>
          </FlexItem>
          <FlexItem>
            <Button size="small">Paste</Button>
          </FlexItem>
        </Flex>
      )
    },
    {
      type: 'dont',
      description: `Don't use Flex to align content to the left & right.
[StartEnd](../start-end) is a more appropriate choice.`,
      example: (
        <Flex justifyContent="between">
          <FlexItem>
            <Button minimal>Cancel</Button>
          </FlexItem>
          <FlexItem>
            <Button primary variant="success">
              Save
            </Button>
          </FlexItem>
        </Flex>
      )
    },
    {
      type: 'dont',
      description: `Don't use Flex if the content being laid out should _not_
[respond to language direction](#rtl).`,
      example: (
        <Flex css={{ height: 200 }}>
          <FlexItem
            width={50}
            padding="sm"
            css={{ backgroundColor: mineralTheme.color_theme_20 }}>
            Sidebar
          </FlexItem>
          <FlexItem
            grow={1}
            padding="sm"
            css={{ backgroundColor: mineralTheme.color_theme_10 }}>
            Main Content
          </FlexItem>
        </Flex>
      )
    }
  ],
  flexItem: [
    {
      type: 'do',
      description: `Use FlexItem within [Flex](../flex) to align components
relative to one another.`,
      example: (
        <Flex justifyContent="end">
          <FlexItem>
            <Link href="https://example.com">Products</Link>
          </FlexItem>
          <FlexItem>
            <Link href="https://example.com">About</Link>
          </FlexItem>
          <FlexItem>
            <Link href="https://example.com">Contact</Link>
          </FlexItem>
        </Flex>
      )
    },
    {
      type: 'dont',
      description: `Don't display content directly inside FlexItem. Wrap
FlexItem around components instead.`,
      example: (
        <Flex>
          <FlexItem>1: Shipping Info</FlexItem>
          <FlexItem>2: Billing Info</FlexItem>
          <FlexItem>3: Confirm Order</FlexItem>
        </Flex>
      )
    }
  ],
  startEnd: [
    {
      type: 'do',
      description:
        'Use StartEnd to align content to the left/right of a container.',
      example: (
        <StartEnd>
          <Button minimal>Back</Button>
          <Button primary variant="success">
            Continue
          </Button>
        </StartEnd>
      )
    }
  ]
};
