import { Button, Icon, List, ListItemStandard, ShellBar } from '@ui5/webcomponents-react';
import React from 'react';

function App() {
  return (
    <>
      <ShellBar primaryTitle="MCP Chat using UI5 Web Components" logo={<Icon name="ai" />}></ShellBar>
      <List>
        <ListItemStandard key="1">Test</ListItemStandard>
      </List>
      <Button design="Default" icon="employee" onClick={function Xs() { alert('test') }} >
        Button Text
      </Button>
    </>
  );
}

export default App;
