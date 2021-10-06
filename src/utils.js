// some utilities for getting countries

class TreeNode {
    constructor(code) {
        this.code = code;
        this.left = null;
        this.right = null;
    }
}

// init tree here
let usa = new TreeNode("USA");
let can = new TreeNode("CAN");
let mex = new TreeNode("MEX");
let blz = new TreeNode("BLZ");
let gtm = new TreeNode("GTM");
let slv = new TreeNode("SLV");
let hnd = new TreeNode("HND");
let nic = new TreeNode("NIC");
let cri = new TreeNode("CRI");
let pan = new TreeNode("PAN");
usa.right = can;
usa.left = mex;
mex.left = gtm;
mex.right = blz;
gtm.left = hnd;
gtm.right = slv;
hnd.left = nic;
nic.left = cri;
cri.left = pan;

// path as empty array

const getCountriesHelper = (node, dest, path) => {
    // root is assumed to be local usa var
    // push each visited country. return correct list if found. otherwise null
    if (!node) {
        return false;
    }

    path.push(node.code);

    if (node.code === dest) {
        return true;
    }

    if (getCountriesHelper(node.left, dest, path) || getCountriesHelper(node.right, dest, path)) {
        return true;
    }

    // if reached, we can't find the path with current node. remove from list
    path.pop();
    return false;
}

const traverse = (node) => {
    if (!node) {
        return;
    }

    console.log(node.code);
    traverse(node.left);
    traverse(node.right);

}

// traverse(usa);

export const getCountries = (dest) => {
    // get list from us -> country
    // will traverse list
    let path = [];
    let hasPath = getCountriesHelper(usa, dest, path);
    if (hasPath) {
        return path;
    }
    return [];
}

let res = getCountries("CAN");
console.log(res)





