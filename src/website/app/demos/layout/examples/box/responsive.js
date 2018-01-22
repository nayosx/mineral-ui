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
import responsiveInstructions from '../../components/responsiveInstructions';

export default {
  id: 'responsive',
  title: 'Responsive',
  description: `Many of the properties for Box can be responsive:

${responsiveInstructions}

The code in the example below has this behavior:

1. When the viewport is less than 600px wide, it will have a right margin of
50px.
1. When the viewport is between 600px and 768px (the 'medium' breakpoint theme
variable), it will have a right margin of 100px.
1. When the viewport is at least 768px wide, it will have a right margin of
150px.`,
  scope: { Box },
  source: `
    <Box
      breakpoints={[600, 'medium']}
      marginRight={[50, 100, 150]}>
      A
    </Box>`
};
