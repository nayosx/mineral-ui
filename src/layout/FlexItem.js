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
import { createStyledComponent } from '../styles';
import Box from './Box';

type Props = {
  /** Align item along the cross axis */
  alignSelf?: 'start' | 'end' | 'center' | 'stretch',
  /** Grow factor along the main axis ([see example](#grow)) */
  grow?: number,
  /** Shrink factor along the main axis ([see example](#shrink)) */
  shrink?: number
};

const styles = {
  root: ({ alignSelf: propAlignSelf, grow, shrink, width: propWidth }) => {
    const alignSelf =
      propAlignSelf === 'start' || propAlignSelf === 'end'
        ? `flex-${propAlignSelf}`
        : propAlignSelf;
    const width =
      typeof propWidth === 'number' && propWidth < 1
        ? `${propWidth * 100}%`
        : propWidth;

    return {
      alignSelf,
      flexBasis: width || 'auto',
      flexGrow: grow,
      flexShrink: shrink
    };
  }
};

const Root = createStyledComponent(Box, styles.root, {
  displayName: 'FlexItem',
  filterProps: ['inline', 'width']
});

/**
 * FlexItem is used within [Flex](../flex) to lay out other components in
 * your app.
 */
export default function FlexItem({
  // $FlowFixMe
  grow = 0,
  // $FlowFixMe
  shrink = 1,
  ...restProps
}: Props) {
  const rootProps = { grow, shrink, ...restProps };
  return <Root {...rootProps} />;
}
