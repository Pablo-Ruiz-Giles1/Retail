let RetailContract = artifacts.require("Retail");

module.exports = async function (deployer) {
  // Deploy the Retail contract
  await deployer.deploy(RetailContract);
  const retail = await RetailContract.deployed();
  console.log("Retail Contract deployed to:", retail.address);
};

