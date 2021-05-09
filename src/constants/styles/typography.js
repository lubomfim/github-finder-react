import { css } from 'styled-components';

export const PRIMARY_FONT = "'Work Sans', sans-serif;";

export const SIZES = {
  xl: '48px',
  lg: '32px',
  md: '22px',
  sm: '18px',
  xs: '14px',
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
    font-weight: 600;
  }
`;

export const TITLE_SMALL = css`
  & {
    font-size: ${SIZES.sm};
    font-weight: 600;
  }
`;

export const TITLE_EXTRA_SMALL = css`
  & {
    font-size: ${SIZES.xs};
    font-weight: 600;
  }
`;

export const BODY_TEXT = css`
  & {
    font-size: ${SIZES.sm};
    font-weight: 400;
  }
`;

export const BODY_TEXT_SMALL = css`
  & {
    font-size: ${SIZES.xs};
    font-weight: 400;
  }
`;
