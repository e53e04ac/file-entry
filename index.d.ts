/*!
    @e53e04ac/file-entry/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { ParsedPath as PathParsedPath } from 'node:path';
import { Readable as StreamReadable } from 'node:stream';
import { Writable as StreamWritable } from 'node:stream';

import { Get } from 'hold';

export declare namespace FileEntry {

    type Self = {
        readonly path: Get<string>;
        readonly parsedPath: Get<PathParsedPath>;
        readonly root: Get<string>;
        readonly dir: Get<string>;
        readonly base: Get<string>;
        readonly ext: Get<string>;
        readonly name: Get<string>;
        readonly parent: Get<Self>;
        readonly resolve: {
            (...paths: string[]): Self;
        };
        readonly relative: {
            (destination: Self): string;
        };
        readonly exists: {
            (): Promise<boolean>;
        };
        readonly children: {
            (params?: {
                readonly depth?: number;
                readonly returnDirectories?: boolean;
                readonly returnFiles?: boolean;
            }): AsyncGenerator<Self, void, void>;
        };
        readonly directories: {
            (params?: {
                readonly depth?: number;
            }): AsyncGenerator<Self, void, void>;
        };
        readonly files: {
            (params?: {
                readonly depth?: number;
            }): AsyncGenerator<Self, void, void>;
        };
        readonly childrenSync: {
            (params?: {
                readonly depth?: number;
                readonly returnDirectories?: boolean;
                readonly returnFiles?: boolean;
            }): Generator<Self, void, void>;
        };
        readonly directoriesSync: {
            (params?: {
                readonly depth?: number;
            }): Generator<Self, void, void>;
        };
        readonly filesSync: {
            (params?: {
                readonly depth?: number;
            }): Generator<Self, void, void>;
        };
        readonly createDirectory: {
            (): Promise<void>;
        };
        readonly copyDirectory: {
            (destination: Self): Promise<void>;
        };
        readonly deleteDirectory: {
            (): Promise<void>;
        };
        readonly copyFile: {
            (destination: Self): Promise<void>;
        };
        readonly deleteFile: {
            (): Promise<void>;
        };
        readonly writeBytes: {
            (bytes: Buffer): Promise<void>;
        };
        readonly writeString: {
            (string: string, options?: {
                readonly encoding?: BufferEncoding;
            }): Promise<void>;
        };
        readonly writeLines: {
            (lines: string[], options?: {
                readonly lineDelimiter?: string;
                readonly encoding?: BufferEncoding;
            }): Promise<void>;
        };
        readonly writeJson: {
            <T>(json: T, options?: {
                readonly replacer?: {
                    (key: string, value: unknown): unknown;
                };
                readonly space?: number | string;
                readonly encoding?: BufferEncoding;
            }): Promise<void>;
        };
        readonly readBytes: {
            (): Promise<Buffer>;
        };
        readonly readString: {
            (options?: {
                readonly encoding?: BufferEncoding;
            }): Promise<string>;
        };
        readonly readLines: {
            (options?: {
                readonly lineDelimiter?: string;
                readonly encoding?: BufferEncoding;
            }): Promise<string[]>;
        };
        readonly readJson: {
            <T>(options?: {
                readonly reviver?: {
                    (key: string, value: unknown): unknown;
                };
                readonly encoding?: BufferEncoding;
            }): Promise<T>;
        };
        readonly transformString: {
            (destination: Self, transform: {
                (input: string): Promise<string>;
            }, options?: {
                readonly source?: {
                    readonly encoding?: BufferEncoding;
                };
                readonly destination?: {
                    readonly encoding?: BufferEncoding;
                };
            }): Promise<void>;
        };
        readonly existsSync: {
            (): boolean;
        };
        readonly createDirectorySync: {
            (): void;
        };
        readonly deleteFileSync: {
            (): void;
        };
        readonly writeBytesSync: {
            (bytes: Buffer): void;
        };
        readonly writeStringSync: {
            (string: string, options?: {
                readonly encoding?: BufferEncoding;
            }): void;
        };
        readonly writeLinesSync: {
            (lines: string[], options?: {
                readonly lineDelimiter?: string;
                readonly encoding?: BufferEncoding;
            }): void;
        };
        readonly writeJsonSync: {
            <T>(json: T, options?: {
                readonly replacer?: {
                    (key: string, value: unknown): unknown;
                };
                readonly space?: number | string;
                readonly encoding?: BufferEncoding;
            }): void;
        };
        readonly readBytesSync: {
            (): Buffer;
        };
        readonly readStringSync: {
            (options?: {
                readonly encoding?: BufferEncoding;
            }): string;
        };
        readonly readLinesSync: {
            (options?: {
                readonly lineDelimiter?: string;
                readonly encoding?: BufferEncoding;
            }): string[];
        };
        readonly readJsonSync: {
            <T>(options?: {
                readonly reviver?: {
                    (key: string, value: unknown): unknown;
                };
                readonly encoding?: BufferEncoding;
            }): T;
        };
        readonly createReadStream: {
            (): Promise<StreamReadable>;
        };
        readonly createWriteStream: {
            (): Promise<StreamWritable>;
        };
        readonly createWriteLineStream: {
            (options?: {
                readonly lineDelimiter?: string;
                readonly encoding?: BufferEncoding;
            }): Promise<StreamWritable>;
        };
    };

}

export declare type FileEntry = FileEntry.Self;
