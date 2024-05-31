
const NFTs_holder = []; // A variable to hold all NFTs.

function mint_NFT(name, complexion, blood_Type, shirt_Type) {   // this function will take in some values as parameters
    const NFT = {      // An NFT object is creating using the parameters passed to it for its metadata, and stored it in the variable above.
        "Name": name,
        "Complexion": complexion,
        "BloodType": blood_Type,
        "ShirtType": shirt_Type
    }
    NFTs_holder.push(NFT);
    console.log("Minted: " + name);
}

function listNFTs() {
    for (let i = 0; i < NFTs_holder.length; i++) {    // creating a for loop that will go through an array of NFTs and print their metadata on console.
        console.log("\nID: " + (i + 1));
        console.log("Name: \t\t" + NFTs_holder[i].Name);
        console.log("Complexion: " + NFTs_holder[i].Complexion);
        console.log("Blood Type: " + NFTs_holder[i].BloodType);
        console.log("Shirt Type: " + NFTs_holder[i].ShirtType);

    }
}

// function to print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal no of NFTs: " + NFTs_holder.length);
}

// calling mint_NFT function and pass some values as arguments to it.
mint_NFT("Amit", "fair skin", "A", "printed");
mint_NFT("Arpit", "medium skin", "B", "denim");
mint_NFT("Suraj", "very fair skin", "AB", "polo");
mint_NFT("Deepak", "light brown skin", "B+", "linen");
mint_NFT("Pranav", "black skin", "O+", "henley");

listNFTs(); // calling listNFTs() function to print all NFTs metadata to the console.

getTotalSupply(); // calling getTotalSupply function to return total no of NFTS created.

