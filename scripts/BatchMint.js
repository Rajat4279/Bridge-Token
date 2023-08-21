require('dotenv').config()

const nftAddress = "0x08AeebDb248d3022455c1e31814b5E81Cd973AB1"; //contract address

async function main() {

    const [signer] = await ethers.getSigners();
    signerAddress = signer.address;
    const NFTContract = await ethers.getContractFactory("IsamaNFTs");
    const nftcontract = await NFTContract.attach(nftAddress);
    
    // Call the mint function on the contract to mint 40 nfts
    const tx = await nftcontract.Batchmint(signerAddress,40);
    await tx.wait()

    // Log a message to the console to indicate that the nfts have been minted
    console.log("Minted 40 nfts to: ",signerAddress);

    const balance = await nftcontract.balanceOf(signerAddress);
    console.log("You now have: " + balance + " nfts");
  }

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });