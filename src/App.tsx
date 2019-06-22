/*
 * Copyright 2019 sukawasatoru
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

import {CSSProperties, default as React, FunctionComponent, useCallback, useState} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import CheckSheet from './CheckSheet';
import DeptSocialStyles from './DeptSocialStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-design-icons/iconfont/material-icons.css';
import './app.css';

type PageType = 'checkSheet' | 'user';

const brandStyle: CSSProperties = {
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
};

const App: FunctionComponent<unknown> = () => {
    const [currentPage, setCurrentPage] = useState<PageType>('checkSheet');
    const cbSetCurrentPage = useCallback(eventKey => setCurrentPage(eventKey), [setCurrentPage]);

    return <>
        <Navbar bg='primary' variant='dark' onSelect={cbSetCurrentPage}>
            <Navbar.Brand style={brandStyle}>Social Styles</Navbar.Brand>
            <Nav defaultActiveKey='checkSheet'>
                <Nav.Link eventKey='checkSheet'>診断する</Nav.Link>
                <Nav.Link eventKey='user'>ファイルの読み込み</Nav.Link>
            </Nav>
        </Navbar>
        {currentPage === 'checkSheet' &&
        <Container className='my-4' style={{maxWidth: '50em'}}>
            <CheckSheet/>
        </Container>
        }
        {currentPage === 'user' &&
        <Container className='my-4' style={{maxWidth: '48em'}}>
            <DeptSocialStyles/>
        </Container>
        }
    </>;
};

export default App;
