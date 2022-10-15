import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        font-weight: 900;
        src: local('Poppins'), url(./fonts/Poppins-Bold.ttf) format('truetype');
    }
`;