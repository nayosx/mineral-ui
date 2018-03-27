/* @flow */
import { createStyledComponent } from '../../../../../library/styles';
import Text from '../../../../../library/Text';

const DemoPanel = createStyledComponent(
  'div',
  ({ backgroundColor, theme }) => ({
    backgroundColor,
    padding: theme.space_inset_sm
  })
);

export default {
  id: 'color',
  title: 'Color',
  description: `Text is available in any of the
[palette's base colors](/color#guidelines-ramps). You may also pass in a custom
\`color\`, but be sure to use a color/background-color combination with an
[adequate contrast ratio](/color#guidelines-accessibility).`,
  scope: { Text, DemoPanel },
  source: `
    <div>
      <Text color="slate">Slate Text</Text>
      <Text color="magenta">Magenta Text</Text>
      <DemoPanel backgroundColor="#8b0338">
        <Text color="#77f8c5" noMargins>Custom Text</Text>
      </DemoPanel>
    </div>`
};
