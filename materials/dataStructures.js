// 3. Blockchain JavaScript Structure **

function Blockchain(genesis) {
  this.genesis = genesis;
}

function Block(data, previousHash, hash, nonce, next) {
  this.data = data;
  this.previousHash = previousHash;
  this.hash = hash;
  this.nonce = nonce;
  this.next = next;
}

const genesis = {
  data: "Welcome to Blockchain Demo 2.0!",
  previousHash: 0,
  hash: "000dc75a315c77a1f9c98fb6247d03dd18ac52632d7dc6a9920261d8109b37cf",
  nonce: 604,
  next: null,
};

// 2. Implements JavaScript Blockchain

Blockchain.prototype.addToBlock = function (data, hash, nonce) {
  if (!this.genesis) throw new Error("No genesis block at network!");

  let currentBlock = this.genesis;
  let previousBlock = new Block(null, null, 0, null, null);

  while (currentBlock.next !== null) {
    if (currentBlock.previousHash != previousBlock.hash)
      throw new Error(
        "Damaged blockchain network. Not possible add a new block!"
      );

    previousBlock = currentBlock;
    currentBlock = currentBlock.next;
  }

  const newBlock = new Block(data, currentBlock.hash, hash, nonce, null);

  currentBlock.next = newBlock;
};

// 1. Using JavaScript Blockchain

let network = new Blockchain(genesis);

network.addToBlock(
  "Hello World, Blockchain!",
  "000d955036570c70ca4f3322be734c672b0a025120fde91ebe0788fa0c3cfc58",
  8346
);
network.addToBlock(
  "Hello World, I'm Still Here!",
  "00030aabddbcad7a95faba57a024b23e634e0f11e6e737efd03a946e47e053ef",
  9450
);
network.addToBlock(
    "Are You Still There?",
    "00064eac080b1c819523eeb4b9f572bfc7be5a39073aa5103be947cea839cf58",
    1145
  );

console.log(network);
