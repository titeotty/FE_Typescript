import crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}
class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class Blockchain {
    private blocks: Block[];
    constructor() {
        this.blocks = [];
    }
    private getPrevHash(){
        if(this.blocks.length === 0) return "";
        return this.blocks[this.blocks.length - 1].hash;
    }
    public addBlock(data:string){
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
        this.blocks.push(newBlock)
    } //new block 생성과 동시에 hash함

    //블록에 접근 할 수 있는 함수생성
    public getBlocks() {
        return [...this.blocks];
    }
}

const blockchain = new Blockchain();

blockchain.addBlock("first one");
blockchain.addBlock("second one");
blockchain.addBlock("third one");
blockchain.addBlock("fourth one");

blockchain.getBlocks().push(new Block("xxxx", 11111, "hacked"));
//배열안에 새 블록을 push중이지만 블록체인의 state와 연결되지 않았기 때문에 출력x
console.log(blockchain.getBlocks());