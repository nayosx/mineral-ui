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
import bestPractices from './bestPractices';

import boxExamples from './examples/box';
import flexExamples from './examples/flex';
import flexItemExamples from './examples/flex-item';
import startEndExamples from './examples/start-end';

const boxDoc = require('!!react-docgen-loader!../../../../layout/Box');
const flexDoc = require('!!react-docgen-loader!../../../../layout/Flex');
const flexItemDoc = require('!!react-docgen-loader!../../../../layout/FlexItem');
const startEndDoc = require('!!react-docgen-loader!../../../../layout/StartEnd');

export default [
  {
    redirect: 'box',
    slug: 'layout',
    title: 'Layout'
  },
  {
    bestPractices: bestPractices.box,
    doc: boxDoc,
    examples: boxExamples,
    propsComment: (
      <p>
        All of the margin/padding props above are applied in a specific{' '}
        <a href="#spacing" key={0}>
          order of precedence
        </a>.
        <br key={1} />
        <br key={2} />
        <em key={3}>
          Undocumented properties will be applied to the root element.
        </em>
      </p>
    ),
    slug: 'box',
    title: 'Box',
    whenHowToUse: `Box serves as an invisible building block for the layout and
structure of your app. Use it to provide consistent size and spacing around
components.

In general, do not display content directly within Box. Rather, wrap Box around
other components.`
  },
  {
    bestPractices: bestPractices.flex,
    doc: flexDoc,
    examples: flexExamples,
    propsComment: (
      <p>
        In addition to the props above, Flex also accepts all props for{' '}
        <a href="../box" key={0}>
          Box
        </a>.
        <br key={1} />
        <br key={2} />
        <em key={3}>
          Undocumented properties will be applied to the root element.
        </em>
      </p>
    ),
    slug: 'flex',
    title: 'Flex',
    whenHowToUse: `Flex, together with [FlexItem](../flex-item), provides an
easy way to align components next to or on top of one another. With configurable
gutters, many alignment options, and optionally responsive properties, it is
powerful and flexible enough to be the foundation of your app's layout.`
  },
  {
    bestPractices: bestPractices.flexItem,
    doc: flexItemDoc,
    examples: flexItemExamples,
    propsComment: (
      <p>
        In addition to the props above, FlexItem also accepts all props for{' '}
        <a href="../box" key={0}>
          Box
        </a>.
        <br key={1} />
        <br key={2} />
        <em key={3}>
          Undocumented properties will be applied to the root element.
        </em>
      </p>
    ),
    slug: 'flex-item',
    title: 'FlexItem',
    whenHowToUse: `FlexItem, together with [Flex](../flex), provides an easy
way to align components next to or on top of one another. With many alignment
options and optionally responsive properties, it is powerful and flexible enough
to be the foundation of your app's layout.`
  },
  {
    bestPractices: bestPractices.startEnd,
    doc: startEndDoc,
    examples: startEndExamples,
    propsComment: (
      <p>
        In addition to the props above, StartEnd also accepts all props for{' '}
        <a href="../flex" key={0}>
          Flex
        </a>, <strong key={1}>except</strong>{' '}
        <code key={2}>justifyContent</code> and <code key={3}>wrap</code>.
        <br key={4} />
        <br key={5} />
        <em key={6}>
          Undocumented properties will be applied to the root element.
        </em>
      </p>
    ),
    slug: 'start-end',
    title: 'StartEnd',
    whenHowToUse: `StartEnd, as its name suggests, aligns content to the start
and end of a container. One side's content will fill the available width, while
the other will shrink to the smallest width possible.`
  }
];
