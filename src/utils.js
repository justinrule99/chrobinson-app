
class TreeNode {
    constructor(code) {
        this.code = code;
        this.left = null;
        this.right = null;
    }
}

// Init tree here
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

const getCountriesHelper = (node, dest, path) => {
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

    // If this code is reached, we can't find a path with current node, so remove it from the list
    path.pop();
    return false;
}

export const getCountries = (dest) => {
    let path = [];
    let hasPath = getCountriesHelper(usa, dest, path);
    if (hasPath) {
        return path;
    }
    return [];
}
