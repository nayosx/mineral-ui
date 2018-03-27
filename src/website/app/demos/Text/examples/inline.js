/* @flow */
import { createStyledComponent } from '../../../../../library/styles';
import Text from '../../../../../library/Text';

const DemoLayout = createStyledComponent('div', {
  '& > *': {
    marginRight: '1rem'
  }
});

export default {
  id: 'inline',
  title: 'Inline',
  description: `By default, Text will display as block-level. Use the \`inline\`
prop to display as inline-block instead.`,
  scope: { Text, DemoLayout },
  source: `
    <DemoLayout>
      <Text inline>Servers Available</Text>
      <Text inline>438</Text>
    </DemoLayout>`
};
