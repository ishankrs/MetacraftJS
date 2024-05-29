let MintedNfts = [];
let i = 0;


function mintNFT(ItemName, ItemType, Concealable, UseCase, Capacity) {
    let NFT = {
        "ItemName": ItemName,
        "ItemType": ItemType,
        "Concealable": Concealable,
        "UseCase": UseCase,
        "Capacity": Capacity
    };
    MintedNfts.push(NFT);
    console.log("Congratulations, now in your inventory you have: " + ItemName);
}


function listNFTs () {
    while(i<MintedNfts.length){
        console.log("\n\n");
        console.log("Item   Name :\t" + MintedNfts[i].ItemName);
        console.log("\nItem   Type :\t" + MintedNfts[i].ItemType);
        console.log("\nConcealable :\t" +MintedNfts[i].Concealable);
        console.log("\nUse    Case :\t" + MintedNfts[i].UseCase);
        console.log("\nCapacity    :\t" +MintedNfts[i].Capacity);
       
        i++;
    } console.log("\n\n");

}


function getTotalSupply() {
    console.log("You have got "+MintedNfts.length + " NFTs");

}

mintNFT( "Lockpick Mk III" , "Tool","Yes", "Lockpicking","N/A");
mintNFT( "Kalmer 2" , "Firearm","Yes", "Tranquilizer","1 round");
mintNFT( "Krugermeier 2-2 Silver" , "Firearm","Yes", "Low-velocity pistol","10 rounds");
mintNFT("Hackl Leviathan","Firearm","No","Sniper Rifle","5 Rounds");

listNFTs();



