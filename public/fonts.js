import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'boldClash';
        src: url('/boldFont.ttf');
      }
      @font-face {
        font-family: 'lightClash';
        src: url('/lightClash.ttf');
      }
      @font-face {
        font-family: 'regularClash';
        src: url('/regularClash.ttf');
      }
      @font-face {
        font-family: 'midClash';
        src: url('/midClash.ttf');
      }
       @font-face {
        font-family: 'productRegular';
        src: url('/productRegular.ttf');
      }
      @font-face {
        font-family: 'productLight';
        src: url('/productLight.ttf');
      }
      @font-face {
        font-family: 'productBold';
        src: url('/productBold.ttf');
      }
      `}
  />
);

export default Fonts;
