/* @flow */
import IconCloud from 'mineral-ui-icons/IconCloud';
import Text from '../../../../../library/Text';
import { createStyledComponent } from '../../../../../library/styles';

const Temp = createStyledComponent('div', {
  // '& ::selection': {
  //   backgroundColor: 'red'
  // }
});

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Text renders content with the correct styles and semantics.
Text can be either block (default) or [inline](#inline), and can include complex
content, such as an [Icon](/components/icon).`,
  scope: { IconCloud, Text, Temp },
  source: `
    <Temp>
      <Text>Lorem ipsum <IconCloud size="large" /> dolor sit amet.</Text>
    </Temp>`
};
