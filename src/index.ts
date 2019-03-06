class Block {
    public index: number;
    public hash: string;
    public previoushash: string;
    public data: string;
    public timestamp: number;

    constructor(
        index: number,
        hash: string,
        previoushash: string,
        data: string,
        timestamp: number,
    ) {
        this.index = index;
        this.hash = hash;
        this.previoushash = previoushash;
        this.data = data;
        this.timestamp = timestamp;
    }

}

const genesisBlock: Block = new Block(0, "2020202020", "", "Hello", 201903062031);
let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {};