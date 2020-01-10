import React, { useContext } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Context from '../store/context';

const Toggle = () => {
  const { state, dispatch } = useContext(Context);
  const theme = useTheme();

  return (
    <>
      <input
        type="checkbox"
        id="switch"
        css={css`
          &[type='checkbox'] {
            height: 0;
            width: 0;
            visibility: hidden;
          }

          &:checked + label {
            background: ${theme.light.font};
          }

          &:checked + label::after {
            left: calc(100% - 5px);
            transform: translateX(-100%);
          }
        `}
      />
      <label
        htmlFor="switch"
        css={css`
          cursor: pointer;
          text-indent: -9999px;
          width: 200px;
          height: 100px;
          background: ${theme.light.font};
          display: block;
          border-radius: 100px;
          position: relative;

          &::after {
            content: '';
            position: absolute;
            top: 5px;
            left: 5px;
            width: 90px;
            height: 90px;
            background: #fff;
            border-radius: 90px;
            transition: 0.3s;
            background-color: ${theme.dark.font};
          }

          &:active::after {
            width: 130px;
          }
        `}
      >
        Toggle
      </label>
    </>
  );
};

export default Toggle;
