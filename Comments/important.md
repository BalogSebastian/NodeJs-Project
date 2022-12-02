JSON.parse =>{
    const json = '{"result":true, "count":42}';
    const obj = JSON.parse(json);

    console.log(obj.count).
    //expected output: 42
    console.log(obj.result);
    //expected output: true
    console.log(json):
    //expected output: '{"result":true, "count":42}'
    console.log(obj):
    //expected output: Object { result: true, count: 42}
}