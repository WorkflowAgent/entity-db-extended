// src/index.d.ts

declare module "@babycommando/entity-db-extended" {
  export class EntityDB {
    /**
     * @param config.dbName Optional name for IndexedDB (defaults to 'EntityDB')
     * @param config.vectorPath Field key for storing embeddings
     * @param config.model Optional transformer model identifier
     */
    constructor(config: { dbName?: string; vectorPath: string; model?: string });

    /**
     * Insert a record; 'id' (string) is required
     */
    insert(data: { id: string; [key: string]: any }): Promise<string>;
    /**
     * Insert binary record; 'id' (string) is required
     */
    insertBinary(data: { id: string; [key: string]: any }): Promise<string>;
    /**
     * Insert manual vectors; 'id' (string) is required
     */
    insertManualVectors(data: { id: string; [key: string]: any }): Promise<string>;
    /**
     * Batch insert manual vectors (no embedding generation)
     * @param dataArray Array of manual vector data objects
     */
    /**
     * Batch insert manual vectors; each object must include 'id'
     */
    insertManualBatch(dataArray: { id: string; [key: string]: any }[]): Promise<string[]>;

    update(key: string, data: { [key: string]: any }): Promise<void>;
    delete(key: string): Promise<void>;

    query(
      queryText: string,
      options?: { limit?: number }
    ): Promise<{ [key: string]: any }[]>;

    queryBinary(
      queryText: string,
      options?: { limit?: number }
    ): Promise<{ [key: string]: any }[]>;

    queryBinarySIMD(
      queryText: string,
      options?: { limit?: number }
    ): Promise<{ [key: string]: any }[]>;

    queryManualVectors(
      queryVector: number[],
      options?: { limit?: number }
    ): Promise<{ [key: string]: any }[]>;
    hasEmbedding(key: string): Promise<boolean>;
    /**
     * Check existence of multiple embeddings.
     * @param keys Array of keys to check.
     * @returns Mapping from key to boolean indicating non-empty vector existence.
     */
    hasEmbeddings(keys: string[]): Promise<{ [key: string]: boolean }>;
    /**
     * Get all embedding keys stored in the database
     */
    getAllKeys(): Promise<string[]>;
    /**
     * Batch insert data; each object must include 'id'
     */
    insertBatch(dataArray: { id: string; [key: string]: any }[]): Promise<string[]>;
    /**
     * Batch update existing vectors
     * @param updates Array of objects with key and data fields
     */
    updateBatch(updates: { key: string; [key: string]: any }[]): Promise<void>;
    /**
     * Batch delete by keys
     * @param keys Array of keys to delete
     */
    deleteBatch(keys: string[]): Promise<void>;
  }
}
