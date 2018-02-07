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
/**
  * Helper to spread an object of style properties across an array of
  * breakpoints, which is converted to an object with
  * `@media (min-width: xx) and (max-width: xx)` keys.
  */
type Args = {
  breakpoints?: Array<number | string>,
  mapValueToProperty?: (
    string,
    boolean | null | number | string
  ) => boolean | null | number | string,
  styles: {
    [string]:
      | Array<boolean | null | number | string>
      | boolean
      | null
      | number
      | string
  },
  theme: Object
};

const getMediaQueries = (breakpoints, theme) => {
  let queries = [];

  const getQueryWidth = value =>
    typeof value === 'number' ? value : theme[`breakpoint_${value}`];

  for (let i = 0; i <= breakpoints.length; i++) {
    if (i === breakpoints.length) {
      queries.push(
        `@media (min-width: ${getQueryWidth(breakpoints[i - 1])}px)`
      );
    } else if (i > 0) {
      queries.push(
        `@media (min-width: ${getQueryWidth(
          breakpoints[i - 1]
        )}px) and (max-width: ${getQueryWidth(breakpoints[i]) - 1}px)`
      );
    }
  }

  return queries;
};

const getPrevNonNull = (values, index) => {
  const value = Array.isArray(values) && values[index];
  if (index > 0) {
    return value === null ? getPrevNonNull(values, index - 1) : value;
  } else {
    return value;
  }
};

export default function getResponsiveStyles({
  breakpoints,
  mapValueToProperty,
  styles,
  theme
}: Args) {
  const styleKeys = Object.keys(styles);

  const getStyles = (styleKeys, index) =>
    styleKeys.reduce((acc, property) => {
      const value =
        index !== undefined
          ? getPrevNonNull(styles[property], index)
          : styles[property];
      acc[property] = mapValueToProperty
        ? // $FlowFixMe
          mapValueToProperty(property, value)
        : value;
      return acc;
    }, {});

  if (breakpoints) {
    const breakpointsLength = breakpoints.length;
    const mediaQueries = breakpoints && getMediaQueries(breakpoints, theme);
    const responsiveStyleKeys = styleKeys.filter(key => {
      const value = styles[key];
      if (value && Array.isArray(value)) {
        if (value.length === breakpointsLength + 1) {
          return true;
        } else {
          throw `${key}.length (${value.length}) must equal breakpoints.length + 1 (${breakpointsLength +
            1})`;
        }
      }
    });
    const nonResponsiveStyleKeys = styleKeys.filter(
      key => !Array.isArray(styles[key])
    );

    let result = {
      ...getStyles(nonResponsiveStyleKeys),
      ...getStyles(responsiveStyleKeys, 0)
    };

    return mediaQueries.reduce((acc, query, index) => {
      acc[query] = {
        ...getStyles(responsiveStyleKeys, index + 1)
      };
      return acc;
    }, result);
  } else {
    return getStyles(styleKeys);
  }
}
