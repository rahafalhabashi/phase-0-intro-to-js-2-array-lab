const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}

function appendCat(name) {
    const copyCats = [...cats, name]
    return copyCats
}

function prependCat(name) {
    const copyCats = [name,...cats]
    return copyCats
}

function removeLastCat() {
    const copyCats = cats.slice(0, -1)
    return copyCats
}

function removeFirstCat() {
    const copyCats = cats.slice(1)
    console.log(copyCats)
    return copyCats
}

