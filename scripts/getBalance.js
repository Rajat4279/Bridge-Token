const nftAddress = "0x08d40a0cce038337D1B3bBab11B59fA89be5166C"; // contract address

async function main() {

    const [signer] = await ethers.getSigners();
    const NFTContract = await ethers.getContractFactory("IsamaNFTs");
    const nftcontract = await NFTContract.attach(nftAddress);

    console.log("You now have: " + await nftcontract.balanceOf(signer.address) + " nfts");
}

main().catch((error) => {
console.error(error);
process.exitCode = 1;
});