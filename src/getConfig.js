function getConfig(flags) {
    let aa = []
    for (let i = 0; i < flags.length; i++) {
        const flagIndex = process.argv.indexOf(flags[i]);
        if (flagIndex !== -1) {
            aa.push(flagIndex)
        }
    }
    if (aa.length === 0) {
        return null
    } else {
        return process.argv[aa[0] + 1]
    }


}

module.exports = {
    getConfig
};