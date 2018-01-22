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
import StartEnd from '../../components/StartEnd';
import Box from '../../components/Box';

export default {
  id: 'priority',
  title: 'Priority',
  description: `By default, the "end" child will occupy the smallest width
possible, and the "start" child will occupy the remaining width. Setting
\`priority\` to "end" will reverse that.`,
  scope: { Box, StartEnd },
  source: `
    <StartEnd priority="end">
      <Box>Start</Box>
      <Box>End</Box>
    </StartEnd>`
};
