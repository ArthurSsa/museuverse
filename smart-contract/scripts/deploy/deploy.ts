import {network} from "hardhat";

async function main() {
    let viem: any;
    const conn = await network.create();
            viem = conn.viem;
    const [admin, authorizedSigner] = await viem.getWalletClients();

console.log("admin:", await admin.account.address);
console.log("Authorized signer:", await authorizedSigner.account.address);

const contract = await viem.deployContract("NFTmuseu", [
    admin.account.address,
    authorizedSigner.account.address,
]);

console.log("Contrato implantado em:", contract.address);
console.log(`CONTRACT_ADDRESS=${contract.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});