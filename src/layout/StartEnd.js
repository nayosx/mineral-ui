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
import React, { Children } from 'react';
import Flex from './Flex';
import FlexItem from './FlexItem';

type Props = {
  /**
   * Media query (min-width) breakpoints along which to apply props marked
   * "&#xfeff;[[Responsive-capable]](#responsive)&#xfeff;"
   */
  breakpoints?: Array<number | string>,
  /** Must be exactly two nodes */
  children: React$Node,
  /**
   * Direction of flow of items along the main axis
   * [[Responsive-capable]](#responsive)
   */
  direction?: 'column' | 'row' | Array<'column' | 'row'>,
  /** @Private From Flex; filtered out */
  justifyContent?: any,
  /**
   * Displays the second, rather than the first, child with a majority of the
   * available width
   */
  priority?: 'start' | 'end',
  /** @Private From Flex; filtered out */
  wrap?: any
};

/**
 * StartEnd provides a simple way to align components to the start or end of a
 * container.
 */
export default function StartEnd(props: Props) {
  const {
    children,
    justifyContent: ignoreJustifyContent,
    priority = 'start',
    wrap: ignoreWrap,
    ...restProps
  } = props;
  const rootProps = {
    ...restProps
  };
  let flexItems;
  if (Children.count(children) === 2) {
    const growFactors = priority === 'start' ? [1, 0] : [0, 1];
    flexItems = Children.map(children, (child, index) => {
      return index ? (
        <FlexItem grow={growFactors[1]}>{child}</FlexItem>
      ) : (
        <FlexItem grow={growFactors[0]}>{child}</FlexItem>
      );
    });
  } else {
    throw 'StartEnd must have exactly two children.';
  }

  // $FlowFixMe
  return <Flex {...rootProps}>{flexItems}</Flex>;
}
