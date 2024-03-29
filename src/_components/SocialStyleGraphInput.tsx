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

import {default as React, useEffect, useMemo, useState} from 'react';
import {Col, Table, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';

interface Props {
    entities: Entity[];
    selections: QSelection[];
    input?: (data: Map<string, number>) => void;
}

export type Entity = {
    name: string;
    lhDescription: string;
    rhDescription: string;
}

export type QSelection = [string, number];

const doNothing = (): void => {
    // do nothing.
};

const SocialStyleGraphInput = (props: Props) => {
    const input = useMemo(() => props.input ? props.input : doNothing, [props.input]);
    const [result] = useState(new Map<string, number>());

    // for clear widget state.
    const [entityHeader, setEntityHeader] = useState(new Date().getMilliseconds());

    useEffect(() => {
        result.clear();
        setEntityHeader(new Date().getMilliseconds());
        input(new Map(result));
    }, [props.entities, props.selections, result, input]);

    return <Table striped bordered className='table-sm table-hover'>
        <tbody>
        {props.entities.map(data =>
            <tr key={`${entityHeader}-${data.name}`}>
                <td className='pl-3 align-middle'>
                    {data.lhDescription}
                </td>
                <td style={{width: '50%'}}>
                    <Col style={{padding: 0}}>
                        <ToggleButtonGroup
                            type='radio'
                            name={data.name}
                            style={{width: 'inherit'}}
                            onChange={(value: number) => {
                                result.set(data.name, value);
                                input(new Map(result));
                            }}>
                            {props.selections.map(([label, value]) =>
                                <ToggleButton key={`${data.name}-${value}`} variant='outline-primary' value={value}>
                                    {label}
                                </ToggleButton>
                            )}
                        </ToggleButtonGroup>
                    </Col>
                </td>
                <td className='pl-3 align-middle'>
                    {data.rhDescription}
                </td>
            </tr>
        )}
        </tbody>
    </Table>;
};

export default SocialStyleGraphInput;
