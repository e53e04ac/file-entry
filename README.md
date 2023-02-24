# file-entry

~~~~~ sh
npm install e53e04ac/file-entry
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["base"]);
    B_1(["hold"]);
  end;
  subgraph "devDependencies";
    B_2(["@types/node"]);
  end;
  subgraph "github";
    C_0(["e53e04ac/base\nf11ee2fdbe50099f68cc3e6c4098132ebfeeb16f"]);
    C_1(["e53e04ac/hold\n593585d63bb24dc044f13a88375b53f9fa565229"]);
  end;
  subgraph "npmjs";
    C_2(["@types/node\n18.14.1"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  click C_0 "https://github.com/e53e04ac/base/tree/f11ee2fdbe50099f68cc3e6c4098132ebfeeb16f";
  click C_1 "https://github.com/e53e04ac/hold/tree/593585d63bb24dc044f13a88375b53f9fa565229";
  click C_2 "https://www.npmjs.com/package/@types/node/v/18.14.1";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/file-entry";
    E_0(["namespace FileEntry"]);
    E_1(["type FileEntry"]);
  end;
  M["index.d.ts"]
  subgraph "node:path";
    I_0_0(["ParsedPath"]);
  end;
  subgraph "node:stream";
    I_1_0(["Readable"]);
    I_1_1(["Writable"]);
  end;
  subgraph "hold";
    I_2_0(["Get"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  M ----> I_2_0;
  E_0 ----> M;
  E_1 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  M["index.mjs"]
~~~~~
