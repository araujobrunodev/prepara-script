const text = require("../text")

async function askRA () {
    console.log("\ninsert the first 4 zero: 0000 (optional)")
    console.log("Ra length should be 10")
    console.log('"sp" in the end (optional)\n')
    console.log("with zero: 00001234567891sp")
    console.log("without zero: 1234567891sp\n")

    let ra = (await text("RA: ")).value
    // 0000 first zeros
    const has_zeros = ra.search("0000") != -1
    const ra_without_zeros = has_zeros ? ra.replace("0000", "") : ra
    // 121212121 RA length = 10
    const has_enough_number_in_ra = ra_without_zeros.length > 9 && ra_without_zeros.length < 13
    // sp in the end
    const has_sp = (ra.slice(ra.length - 2, ra.length)) == "sp"
    
    if (!has_zeros) ra = "0000" + ra
    if (!has_sp) ra += "sp"
    if (!has_enough_number_in_ra) {
        console.log("\nno enough length for RA\n")
        return askRA()
    }
    
    console.log("current RA:", ra)
    
    return ra
}

module.exports = askRA