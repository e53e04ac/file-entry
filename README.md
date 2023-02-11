# file-entry

~~~~~ sh
npm install e53e04ac/file-entry
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["e53e04ac/base"]);
    B_1(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_2(["@types/node"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  click B_0 "https://github.com/e53e04ac/base/tree/2dc903faf7859d755dd52f7fde706be5170b9a6f";
  click B_1 "https://github.com/e53e04ac/hold/tree/285d028e225a7e75747417c3ed6b1ca0d5f52f6a";
  click B_2 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.mjs"])
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.d.ts"])
  subgraph "node:path";
    B_0_0(["ParsedPath"]);
  end;
  subgraph "hold";
    B_1_0(["Get"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
~~~~~
