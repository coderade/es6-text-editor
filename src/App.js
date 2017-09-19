import React, {Component} from 'react';
import {Markup, Editor, Container, Column, Row, RuleInput, RuleLabel, StyleInput, Button, Document} from "./styled";

class App extends Component {
    render() {
        return (
            <Container>
                <Column>
                    <Button className="btn btn-primary">
                        New Rule
                    </Button>
                </Column>
                <Column>
                    <Button className="btn btn-primary">
                        Random Text
                    </Button>
                    <Document>
                        <Editor/>
                        <Markup className="form-control"/>
                    </Document>
                </Column>
            </Container>
        );
    }
}

export default App;
