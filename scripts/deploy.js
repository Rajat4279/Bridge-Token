const hre = require("hardhat");

async function main() {

  const [owner] = await ethers.getSigners();
  const isama = await hre.ethers.deployContract("IsamaNFTs");
  await isama.waitForDeployment();

  const ownerBalance = await isama.balanceOf(owner.address);
  console.log(ethers.toNumber(ownerBalance));
  const address = await isama.getAddress();
  console.log("IsamaNFT is deployed to: ",address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
