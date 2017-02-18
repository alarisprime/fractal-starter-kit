import initializeFontSizes from '../src/01-design-tokens/01-font-sizes/font-sizes.sg';
import initializeColorPalette from '../src/01-design-tokens/03-colors/colors.sg';
import initIconSamples from '../src/03-components/icon/icon.sg';
import initUtilVisiblityClasses from '../src/05-utility/visibility/visibility.sg';
import docready from './lib/docready';

docready(() => {
	initializeFontSizes();
	initializeColorPalette();
	initIconSamples();
	initUtilVisiblityClasses();
});
