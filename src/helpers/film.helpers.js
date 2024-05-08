export function filterByDirector(list, director) {
    if (director == "") {
        return list;
    }
    return list.filter((element) => {
        return (element.director == director);
    });
}

export function getListOf(list, prop) {
    const ressultArr = [];

    for (let i = 0; i < list.length; i++) {
        if (!ressultArr.includes(list[i][prop])) {
            ressultArr.push(list[i][prop]);
        }
    }

    return ressultArr;
}