/* @flow */
import React, { Component } from 'react';
import { getColor } from '../colors';
import { createStyledComponent, getNormalizedValue } from '../styles';

type Props = {
  /** Available horizontal alignments */
  align?: 'start' | 'end' | 'center' | 'justify',
  /** Available styles */
  appearance?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'mouse' | 'prose',
  /** Rendered content */
  children: React$Node,
  /** Available colors */
  color?:
    | 'blue'
    | 'dusk'
    | 'gray'
    | 'green'
    | 'indigo'
    | 'lime'
    | 'magenta'
    | 'orange'
    | 'purple'
    | 'red'
    | 'sky'
    | 'slate'
    | 'teal'
    | 'yellow'
    | string,
  /** The rendered HTML element, e.g. `'span'`, `'strong'` */
  element?: string,
  /** Available font weights */
  fontWeight?: 'regular' | 'semiBold' | 'bold' | 'extraBold' | number,
  /** Render inline */
  inline?: boolean,
  /** Remove top & bottom margins */
  noMargins?: boolean
};

export const componentTheme = (baseTheme: Object) => ({
  Text_backgroundColor_selected: baseTheme.color_theme_40,
  Text_color: baseTheme.color_text,
  Text_color_h1: baseTheme.color_h1,
  Text_color_h2: baseTheme.color_h2,
  Text_color_h3: baseTheme.color_h3,
  Text_color_h4: baseTheme.color_h4,
  Text_color_h5: baseTheme.color_h5,
  Text_color_h6: baseTheme.color_h6,
  Text_fontSize: baseTheme.fontSize_ui,
  Text_fontSize_h1: baseTheme.fontSize_h1,
  Text_fontSize_h2: baseTheme.fontSize_h2,
  Text_fontSize_h3: baseTheme.fontSize_h3,
  Text_fontSize_h4: baseTheme.fontSize_h4,
  Text_fontSize_h5: baseTheme.fontSize_h5,
  Text_fontSize_h6: baseTheme.fontSize_h6,
  Text_fontSize_mouse: baseTheme.fontSize_mouse,
  Text_fontSize_prose: baseTheme.fontSize_prose,
  Text_fontWeight_h1: baseTheme.fontWeight_h1,
  Text_fontWeight_h2: baseTheme.fontWeight_h2,
  Text_fontWeight_h3: baseTheme.fontWeight_h3,
  Text_fontWeight_h4: baseTheme.fontWeight_h4,
  Text_fontWeight_h5: baseTheme.fontWeight_h5,
  Text_fontWeight_h6: baseTheme.fontWeight_h6,
  Text_lineHeight: baseTheme.lineHeight,
  Text_lineHeight_h1: baseTheme.lineHeight_h1,
  Text_lineHeight_h2: baseTheme.lineHeight_h2,
  Text_lineHeight_h3: baseTheme.lineHeight_h3,
  Text_lineHeight_h4: baseTheme.lineHeight_h4,
  Text_lineHeight_h5: baseTheme.lineHeight_h5,
  Text_lineHeight_h6: baseTheme.lineHeight_h6,
  Text_lineHeight_mouse: baseTheme.lineHeight,
  Text_lineHeight_prose: baseTheme.lineHeight_prose,
  Text_marginBottom: baseTheme.space_stack_sm,
  Text_marginBottom_h1: baseTheme.space_stack_md,
  Text_marginBottom_h2: baseTheme.space_stack_sm,
  Text_marginBottom_h3: baseTheme.space_stack_sm,
  Text_marginBottom_h4: baseTheme.space_stack_sm,
  Text_marginBottom_h5: baseTheme.space_stack_sm,
  Text_marginBottom_h6: baseTheme.space_stack_sm,
  Text_marginBottom_mouse: baseTheme.space_stack_sm,
  Text_marginBottom_prose: baseTheme.space_stack_lg,
  Text_marginTop_h1: baseTheme.space_stack_lg,
  Text_marginTop_h2: baseTheme.space_stack_lg,
  Text_marginTop_h3: baseTheme.space_stack_lg,
  Text_marginTop_h4: baseTheme.space_stack_lg,
  Text_marginTop_h5: baseTheme.space_stack_lg,
  Text_marginTop_h6: baseTheme.space_stack_lg,

  ...baseTheme
});

const styles = {
  root: ({
    align,
    appearance: propAppearance,
    color,
    element,
    fontWeight,
    inline,
    noMargins,
    theme: baseTheme
  }) => {
    let theme = componentTheme(baseTheme);
    const isHeading =
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(element) !== -1;
    const appearance = propAppearance
      ? propAppearance
      : isHeading ? element : null;
    const rtl = theme.direction === 'rtl';

    if (isHeading && appearance) {
      theme = {
        ...theme,
        Text_color: theme[`Text_color_${appearance}`],
        Text_fontSize: theme[`Text_fontSize_${appearance}`],
        Text_fontWeight: theme[`Text_fontWeight_${appearance}`],
        Text_lineHeight: theme[`Text_lineHeight_${appearance}`],
        Text_marginBottom: theme[`Text_marginBottom_${appearance}`],
        Text_marginTop: theme[`Text_marginTop_${appearance}`]
      };
    } else if (appearance === 'mouse') {
      theme = {
        ...theme,
        Text_fontSize: theme.Text_fontSize_mouse,
        Text_lineHeight: theme.Text_lineHeight_mouse,
        Text_marginBottom: theme.Text_marginBottom_mouse
      };
    } else if (appearance === 'prose') {
      theme = {
        ...theme,
        Text_fontSize: theme.Text_fontSize_prose,
        Text_lineHeight: theme.Text_lineHeight_prose,
        Text_marginBottom: theme.Text_marginBottom_prose
      };
    }

    const styles = {
      color: color ? getColor(color, 60) || color : theme.Text_color,
      display: inline ? 'inline-block' : null,
      fontSize: theme.Text_fontSize,
      fontWeight: (() => {
        if (fontWeight && theme[`fontWeight_${fontWeight}`]) {
          return theme[`fontWeight_${fontWeight}`];
        } else if (appearance && theme[`Text_fontWeight_${appearance}`]) {
          return theme[`Text_fontWeight_${appearance}`];
        } else {
          return fontWeight;
        }
      })(),
      lineHeight: theme.Text_lineHeight,
      marginBottom: !noMargins
        ? getNormalizedValue(theme.Text_marginBottom, theme.Text_fontSize)
        : 0,
      marginTop: 0,
      textAlign: (() => {
        if ((rtl && align == 'start') || (!rtl && align == 'end')) {
          return 'right';
        } else if ((rtl && align == 'end') || align == 'start') {
          return 'left';
        } else {
          return align;
        }
      })(),

      '&::selection': {
        backgroundColor: theme.Text_backgroundColor_selected
      },

      '&:not(:first-child)': {
        marginTop:
          isHeading && !noMargins
            ? getNormalizedValue(theme.Text_marginTop, theme.Text_fontSize)
            : 0
      }
    };

    if (['code', 'kbd', 'samp'].indexOf(element) !== -1) {
      styles.fontFamily = theme.fontFamily_monospace;
    }

    return styles;
  }
};

// Text's root node must be created outside of render, so that the entire DOM
// element is replaced only when the element prop is changed, otherwise it is
// updated in place
function createRootNode(props: Props) {
  const { element = Text.defaultProps.element } = props;

  return createStyledComponent(element, styles.root, {
    includeStyleReset: true,
    rootEl: element
  });
}

/**
 * The Text component provides styles and semantic meaning for text and headings
 * in a manner consistent with other components.
 */
export default class Text extends Component<Props> {
  static defaultProps = {
    align: 'start',
    element: 'p'
  };

  componentWillUpdate(nextProps: Props) {
    if (this.props.element !== nextProps.element) {
      this.rootNode = createRootNode(nextProps);
    }
  }

  rootNode: React$ComponentType<*> = createRootNode(this.props);

  render() {
    const Root = this.rootNode;

    return <Root {...this.props} />;
  }
}
