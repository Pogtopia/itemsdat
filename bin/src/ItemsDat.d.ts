/// <reference types="node" />
import { ItemsDatMeta, StringOptions } from "./Types";
declare class ItemsDat {
    private data?;
    /**
     * The key used for the XOR encryption/decryption.
     */
    key: string;
    /**
     * The current position of the reader/writer.
     */
    private mempos;
    private stringFields;
    /**
     * @param data The data to encode/decode.
     */
    constructor(data?: Buffer);
    /**
     * Get total byte size for writing.
     * @param items An array of items
     */
    private getWriteSize;
    /**
     * Reads a string from the items.dat file whether it be XOR encrypted or not.
     * @param opts Options for reading the string.
     */
    readString(opts?: StringOptions): Promise<string>;
    /**
     * Writes a string to the items.dat data file, whether it be XOR encrypted or not.
     * @param str The string to insert.
     * @param id The id of the item.
     * @param encoded Wether or not to XOR encrypt the stirng.
     */
    writeString(str: string, id: number, encoded?: boolean): Promise<undefined>;
    /**
     * Creates a new items.dat file.
     * @param meta The item data to use.
     */
    encode(meta: ItemsDatMeta): Promise<Buffer>;
    /**
     * Decodes the items.dat
     * @returns {Promise<ItemsDatMeta>}
     */
    decode(): Promise<ItemsDatMeta>;
}
export default ItemsDat;
