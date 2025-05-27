// src/index.d.ts

declare module "@babycommando/entity-db-extended" {
  export class EntityDB {
    constructor(config: { vectorPath: string; model?: string });

    insert(data: { [key: string]: any }): Promise<string>;
    insertBinary(data: { [key: string]: any }): Promise<string>;
    insertManualVectors(data: { [key: string]: any }): Promise<string>;
    /**
     * Batch insert manual vectors (no embedding generation)
     * @param dataArray Array of manual vector data objects
     */
    insertManualBatch(dataArray: { [key: string]: any }[]): Promise<string[]>;

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
     * Get all embedding keys stored in the database
     */
    getAllKeys(): Promise<string[]>;
    /**
     * Batch insert data (auto embedding or manual vectors)
     * @param dataArray Array of data objects to insert
     */
    insertBatch(dataArray: { [key: string]: any }[]): Promise<string[]>;
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
