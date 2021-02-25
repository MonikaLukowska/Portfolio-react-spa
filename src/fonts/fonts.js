import { createGlobalStyle } from 'styled-components';

import EpilogueSemiBoldWoff from './Epilogue-SemiBold.woff';
import EpilogueSemiBoldWoff2 from './Epilogue-SemiBold.woff2';
import EpilogueRegularWoff from './Epilogue-Regular.woff';
import EpilogueRegularWoff2 from './Epilogue-Regular.woff2';
import RobotoRegularWoff from './Roboto-Regular.woff';
import RobotoRegularWoff2 from './Roboto-Regular.woff2';


export default createGlobalStyle`
    @font-face {
        font-family: 'Epilogue-SemiBold';
        src: local('Epilogue-SemiBold'), local('EpilogueSemiBold'),
        url(${EpilogueSemiBoldWoff2 }) format('woff2'),
        url(${EpilogueSemiBoldWoff}) format('woff');
        font-style: normal;
    }

    @font-face {
        font-family: 'Epilogue-Regular';
        src: local('Epilogue-Regular'), local('EpilogueRegular'),
        url(${EpilogueRegularWoff2 }) format('woff2'),
        url(${EpilogueRegularWoff}) format('woff');
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto-Regular';
        src: local('Roboto-Regular'), local('RobotoRegular'),
        url(${RobotoRegularWoff2}) format('woff2'),
        url(${RobotoRegularWoff}) format('woff');
        font-style: normal;
    }
`;


