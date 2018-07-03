function getQueryValueFromUrl(queryKey) {
    let search = window.location.search

    if (search.indexOf('?') === 0) {
        search = search.substr(1)
    }

    search = search.split("&").filter(v => v)  //如果 v 非空(falsy值) , 就通过filter, 避免查询参数中出现 && 的情况

    let queryValue

    // 解析每一对键值对
    let queryObjs = search.map((item) => {
            let keyValueArray = item.split('=')
            if (keyValueArray[0] === key) {
                songId = keyValueArray[1]
            }
        }
    )
    return queryValue
}

// test
console.log(getQueryValueFromUrl('queryKey'))