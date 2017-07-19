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
import { createStyledComponent } from '@mineral-ui/component-utils';
import cardTheme from './cardTheme';

type Props = Object;

const Root = createStyledComponent(
  'div',
  (props, baseTheme) => {
    const theme = cardTheme(baseTheme);

    return {
      backgroundColor: theme.Card_backgroundColor,
      borderRadius: theme.Card_borderRadius,
      boxShadow: theme.Card_boxShadow,
      paddingBottom: theme.Card_paddingBottom,
      paddingTop: '0.01em' // Necessary to prevent margin collapse of first-child
    };
  },
  {
    displayName: 'Card',
    includeStyleReset: true
  }
);

/**
 * Card component
 */
export default function Card(props: Props) {
  return <Root {...props} />;
}