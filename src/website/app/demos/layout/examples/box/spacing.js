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
import Box from '../../components/Box';
import DemoLayout from '../../components/DemoLayout';

const getText = (value: number | string) => {
  if (typeof value === 'number') {
    if (value < 1) {
      return `${value * 100}%`;
    } else {
      return `${value}px`;
    }
  } else {
    return value ? value : 'none';
  }
};

export default {
  id: 'spacing',
  title: 'Spacing',
  description: `Values for margin & padding
can be a [spacing theme variable](/theming/#common-scenarios-theme-structure)
or a custom string or number. In order of precedence, Box accepts the following:

1. \`margin[Bottom|Left|Right|Top]\`
1. \`marginStart\` (left, for left-to-right languages; right, for RTL languages)
1. \`marginEnd\` (right, for left-to-right languages; left, for RTL languages)
1. \`marginHorizontal\` (left & right)
1. \`marginVertical\` (top & bottom)
1. \`margin\` (all sides)

_Numbers < 1, e.g. \`1/2\`, will be converted to a percentage. Numbers ≥ 1 will
be appended with \`px\`. String values will be passed directly._

The same applies for \`padding\`.`,
  scope: { DemoLayout, Box, getText },
  source: `
    () => {
      const spacingValues = [ null, 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', '6em', 120, 1/2 ];

      const renderBoxes = () => (
        spacingValues.map((value, index) => {
          return <Box marginRight={value} key={index}>{getText(value)}</Box>
        })
      );

      return (
        <DemoLayout>
          { renderBoxes() }
        </DemoLayout>
      )
    }`
};
