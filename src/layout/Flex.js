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
import React, { Children, cloneElement } from 'react';
import { withTheme } from 'glamorous';
import { createStyledComponent, pxToEm } from '../styles';
import Box from './Box';

type Props = {
  /** Align items along the cross axis */
  alignItems?: 'start' | 'end' | 'center' | 'stretch',
  /** Must be [FlexItem(s)](./flex-item). */
  children: React$Node,
  /** Direction of flow of items along the main axis */
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse',
  /** Size of gap between children */
  gutterWidth?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string,
  /** Align items along the main axis */
  justifyContent?: 'start' | 'end' | 'center' | 'around' | 'between' | 'evenly',
  /** Determines if items can wrap along main axis */
  wrap?: boolean
};

const getGutterSize = (theme, value) =>
  typeof value === 'number'
    ? pxToEm(value / 2)
    : `${parseFloat(theme[`space_inline_${value}`] || value) / 2}em`;

const styles = {
  root: ({
    alignItems,
    direction,
    gutterWidth,
    inline,
    margin,
    marginEnd,
    marginHorizontal,
    marginLeft: propMarginLeft,
    marginRight: propMarginRight,
    marginStart,
    justifyContent,
    theme,
    wrap
  }) => {
    const rtl = theme.direction === 'rtl';

    const gutter = getGutterSize(theme, gutterWidth);
    const marginLeft =
      propMarginLeft ||
      (rtl ? marginEnd : marginStart) ||
      marginHorizontal ||
      margin;
    const marginRight =
      propMarginRight ||
      (rtl ? marginStart : marginEnd) ||
      marginHorizontal ||
      margin;

    const getMeasurement = value => {
      return (
        (typeof value === 'string' && theme[`space_inline_${value}`]) ||
        (typeof value === 'number' ? `${value}px` : value)
      );
    };

    const getAlignment = value =>
      typeof value === 'string' && ['start', 'end'].indexOf(value) !== -1
        ? `flex-${value}`
        : value;

    const getJustification = value =>
      typeof value === 'string' &&
      ['around', 'between', 'evenly'].indexOf(value) !== -1
        ? `space-${value}`
        : value;

    return {
      alignItems: getAlignment(alignItems),
      display: inline ? 'inline-flex' : 'flex',
      flexDirection: direction,
      flexWrap: wrap ? 'wrap' : wrap === false ? 'nowrap' : wrap,
      marginLeft: marginLeft
        ? `calc(${getMeasurement(marginLeft)} - ${gutter})`
        : `-${gutter}`,
      marginRight: marginRight
        ? `calc(${getMeasurement(marginRight)} - ${gutter})`
        : `-${gutter}`,
      justifyContent: getJustification(getAlignment(justifyContent))
    };
  }
};

const Root = createStyledComponent(Box, styles.root, {
  displayName: 'Flex',
  filterProps: ['inline']
});

const ThemedRoot = withTheme(
  ({ children, gutterWidth, theme, ...restProps }) => {
    const rootProps = {
      gutterWidth,
      ...restProps
    };

    let flexItems;
    flexItems = Children.map(children, child => {
      const {
        margin: propMargin,
        marginHorizontal,
        marginLeft,
        marginRight
      } = child.props;
      let props;

      if (gutterWidth) {
        const margin =
          marginHorizontal || propMargin || getGutterSize(theme, gutterWidth);
        props = {
          ...props,
          marginLeft: marginLeft || margin,
          marginRight: marginRight || margin
        };
      }
      return cloneElement(child, props);
    });

    return <Root {...rootProps}>{flexItems}</Root>;
  }
);

/**
 * Flex component is used together with [FlexItem](../flex-item) to lay out
 * other components in a flexible, and optionally responsive, manner.
 */
export default function Flex({
  // $FlowFixMe
  alignItems = 'stretch',
  // $FlowFixMe
  direction = 'row',
  // $FlowFixMe
  gutterWidth = 'md',
  // $FlowFixMe
  justifyContent = 'start',
  ...restProps
}: Props) {
  const rootProps = {
    alignItems,
    direction,
    gutterWidth,
    justifyContent,
    ...restProps
  };

  return <ThemedRoot {...rootProps} />;
}
