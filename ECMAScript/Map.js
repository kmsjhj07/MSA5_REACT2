// Map 생성
const map = new Map()
// set(key, value) : 요소 추가
map.set('김조은', '90점')
map.set('박조은', '50점')
map.set('최조은', '10점')

// get(key) : 요소 가져오기
console.log(map);
console.log(map.get('김조은'));
console.log(map.get('박조은'));
console.log(map.get('최조은'));

// Map 초기화 생성
const map2 = new Map([
    ['김조은', '지각'],
    ['박조은', '조퇴']
])
console.log(map2)

// map 반복
console.log("map반복");
map.forEach((value, key, map) => {
    console.log(`${key} : ${value}`);
})

// map 의 key 반복
console.log("map 의 key 반복");
for( const key of map.keys() ) {
    console.log(key);
}

// map 의 value 반복
console.log("map 의 value 반복");
for( const value of map.values() ) {
    console.log(value);
}