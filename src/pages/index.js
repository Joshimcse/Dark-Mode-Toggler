import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/Layout';
import Toggle from '../components/Toggle';

export default function Home() {
  return (
    <Layout>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;

          h1 {
            font-size: 95px;
            text-transform: uppercase;
            text-align: center;
          }
        `}
      >
        <h1>Dark Mode Toggle</h1>
        <Toggle />
      </div>
    </Layout>
  );
}
