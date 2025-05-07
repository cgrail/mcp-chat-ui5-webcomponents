import { Button, Icon, List, ListItemStandard, ShellBar } from '@ui5/webcomponents-react';
import React from 'react';
import { LLM, LMStudioClient } from "@lmstudio/sdk";

function App() {

  async function initLm() {

    const client = new LMStudioClient({ baseUrl: "ws://127.0.0.1:1234" });
    const llmModel = await client.llm.model("qwen3-4b");
    const result = await llmModel.respond("What is the meaning of life?");
    alert(result.content);
  }
  initLm();

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
