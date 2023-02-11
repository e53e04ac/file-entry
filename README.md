# file-entry

~~~~~ sh
npm install e53e04ac/file-entry
~~~~~

~~~~~ mjs
import { FileEntry } from 'e53e04ac/file-entry';
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
  click B_0 "https://github.com/e53e04ac/base/tree/679c11d468754731443595177472a78be2bb8fad";
  click B_1 "https://github.com/e53e04ac/hold/tree/67e5b60f9bb3221f8b200107c13e89a604a93631";
  click B_2 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/file-entry";
  end;
  M(["index.mjs"])
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/file-entry";
    E_0(["FileEntry"]);
  end;
  M(["index.d.ts"])
  subgraph "node:path";
    I_0_0(["ParsedPath"]);
  end;
  subgraph "hold";
    I_1_0(["Get"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  E_0 ----> M;
~~~~~
