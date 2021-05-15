import { css } from 'styled-components';

export const PRIMARY_FONT = "'PT Sans', sans-serif;";
export const SECONDARY_FONT = "'Segoe UI', sans-serif;";

export const SegoeUI = css`
  @font-face {
    font-family: 'Segoe UI';
    src: url('/fonts/SegoeUI-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Segoe UI';
    src: url('/fonts/SegoeUI.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Segoe UI';
    src: url('/fonts/SegoeUI-Semilight.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Segoe UI';
    src: url('/fonts/SegoeUI-Semibold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Segoe UI';
    src: url('/fonts/SegoeUI-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
`;

export const SIZES = {
  xl: '4.6rem',
  lg: '2.2rem',
  md: '1.8rem',
  sm: '1.6rem',
  xs: '1.4rem',
};

export const TITLE_EXTRA_LARGE = css`
  & {
    font-size: ${SIZES.xl};
    font-weight: 700;
  }
`;

export const TITLE_LARGE = css`
  & {
    font-size: ${SIZES.lg};
    font-weight: 700;
  }
`;

export const TITLE_MEDIUM = css`
  & {
    font-size: ${SIZES.md};
    font-weight: 700;
  }
`;

export const BODY_TEXT_SMALL = css`
  & {
    font-size: ${SIZES.xs};
    font-weight: 400;
  }
`;

export const BODY_TEXT_LARGE = css`
  & {
    font-size: ${SIZES.sm};
    font-weight: 400;
  }
`;

export const BODY_TEXT_LARGE_BOLD = css`
  & {
    font-size: ${SIZES.sm};
    font-weight: 600;
  }
`;
