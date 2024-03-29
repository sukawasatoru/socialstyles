/*
 * Copyright 2019, 2021, 2023 sukawasatoru
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use client';

import dynamic from "next/dynamic";
import {default as React, useMemo} from 'react';
import {Spinner} from "react-bootstrap";
import plotComponentFactory from 'react-plotly.js/factory';

const createPoint = (name: string, x: number, y: number): import('plotly.js').Data => {
  return {
    x: [x],
    y: [y],
    text: name,
    textposition: 'top center',
    type: 'scatter',
    mode: 'text+markers',
    hoverinfo: 'x+y',
  };
};

export interface SocialStyleEntity {
  name: string;
  x: number;
  y: number;
}

export type GraphLayout = Partial<import('plotly.js').Layout>;

const socialStyleLayout: GraphLayout = {
  showlegend: false,
  hovermode: 'closest',
  margin: {t: 0, b: 0, l: 0, r: 0},
  xaxis: {
    zeroline: false,
    showticklabels: false,
    range: [-5, 105],
    hoverformat: '.1f',
  },
  yaxis: {
    zeroline: false,
    showticklabels: false,
    range: [-5, 105],
    hoverformat: '.1f',
  },
  shapes: [
    {
      type: 'line',
      line: {width: 1},
      x0: 50,
      y0: -10,
      x1: 50,
      y1: 110,
    },
    {
      type: 'line',
      line: {width: 1},
      x0: -10,
      y0: 50,
      x1: 110,
      y1: 50,
    }
  ],
  annotations: [
    {
      x: 85,
      y: 100,
      text: 'エクスプレッシブ',
      showarrow: false,
    },
    {
      x: 85,
      y: 0,
      text: 'エミアブル',
      showarrow: false,
    },
    {
      x: 10,
      y: 0,
      text: 'アナリティカル',
      showarrow: false,
    },
    {
      x: 10,
      y: 100,
      text: 'ドライビング',
      showarrow: false,
    },
  ],
};

const Plot = dynamic(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
  async () => plotComponentFactory(await import('plotly.js')),
  {
    loading: () => {
      return <div className='border border-primary d-flex align-items-center' style={{height: '100%'}}>
        <Spinner className='mx-auto d-block' animation='border' variant='primary' style={{top: '50%'}}/>
      </div>;
    },
    ssr: false,
  },
);

interface Props {
  data: SocialStyleEntity[];
  layout?: GraphLayout;
}

const SocialStyleGraph = (props: Props) => {
  const layout = useMemo(() => Object.assign({}, socialStyleLayout, props.layout), [props.layout]);

  return <div style={{width: layout.width, height: layout.height}}>
    <Plot
      // @ts-expect-error: js component.
      className='border border-primary'
      data={props.data.map(data => createPoint(data.name, data.x, data.y))}
      layout={layout}
    />
  </div>;
};

export default SocialStyleGraph;
