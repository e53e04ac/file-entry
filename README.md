# file-entry

~~~~~ sh
npm install e53e04ac/file-entry
~~~~~

~~~~~ mermaid
graph RL;
  A(["e53e04ac/file-entry"]);
  subgraph "dependencies";
    B_0(["e53e04ac/base"]);
    B_1(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_2(["@types/node"]);
  end;
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  click B_0 "https://github.com/e53e04ac/base/tree/b4e091dbfeba0ea30c870ac7ac7877582e3fd4f0";
  click B_1 "https://github.com/e53e04ac/hold/tree/2143f5f52192ae4156ea0af80d41c87c55355e9c";
  click B_2 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/file-entry"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "node:path"
    D0(["ParsedPath"]);
  end;
  subgraph "hold"
    D1(["Get"]);
  end;
  D0 --import--> C1;
  D1 --import--> C1;
~~~~~
