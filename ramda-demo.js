window.onload = ev => {
    // console.log(typeof(ev));
    // for(var e in ev) {
    //     console.log(e + ":" + ev[e]);
    //
    // }

    let logging = (() => {
        let o = document.querySelector("#output");
        //return function(obj) {o.innerHTML += "\n" + JSON.stringify(obj, null, 4);}
        return (title, obj) => {
            let content = obj ? title + JSON.stringify(obj/*, null, 2*/) : title;
            console.log(content);
            //return o.innerHTML += "\n" + content;
        };
    })();

    let arr = [1, 2, 3, 4];
    let obj = {a: 1, b: 2, c: 3, d: 4};

    /*
     * ramda两大特色：
     * 数据参数总是作为最后一个参数
     * 传参时，几乎总是可以使用柯里化参数列表
     * 这两点是实现整洁代码的关键
     */


    /* 1. map函数，可用于array和object*/
    logging("1. --- map ---");

    let r_map_list = R.map(x => x * x)(arr);
    logging("map_list: ", r_map_list); // [1,4,9,16]

    let r_map_obj1 = R.map(v => v * v)(obj);
    logging("map_object1: ", r_map_obj1); // {"a":1,"b":4,"c":9,"d":16}
    let r_map_obj2 = R.mapObjIndexed((value, field, obj) => field + value)(obj);
    logging("map_object2: ", r_map_obj2); // {"a":"a1","b":"b2","c":"c3","d":"d4"}

    /* 2. filter函数， 可用于array和object*/
    logging("2. --- filter & reject----")

    let r_filter_list = R.filter(n => n % 2 === 0)(arr);
    logging("filter_list: ", r_filter_list); // [2,4]
    let r_filter_obj = R.filter(n => n % 2 === 0)(obj);
    logging("filter_object: ", r_filter_obj); // {"b":2,"d":4}

    let r_reject_list = R.reject(n => n % 2 === 0)(arr);
    logging("reject_list: ", r_reject_list); // [1,3]
    let r_reject_obj = R.reject(n => n % 2 == 0)(obj);
    logging("reject_object: ", r_reject_obj); // {"a":1,"c":3}


    /* 3. reduce函数 */
    logging("3. --- reduce ----")
    let r_reduce_list = R.reduce((acc, value) => acc - value)(0)(arr);
    logging("reduce_list: ", r_reduce_list); // -10

    logging("4. --- reduceBy & groupBy ----")
    // reduceBy函数，建议不要使用这个函数，应直接使用groupby
    let students = [
        {name: 'Lucy', score: 92},
        {name: 'Drew', score: 85},
        {name: 'Foo', score: 72},
        {name: 'Bar', score: 64},
        {name: 'Bart', score: 62}
    ];
    let valueMapper = (acc, student) => acc.concat(student.name);
    let keyMapper = student => {
        let score = student.score;
        return score < 65 ? 'F' : score < 70 ? 'D' : score < 80 ? 'C' : score < 90 ? 'B' : 'A';
    };
    //reduceBy
    let r_reduceby_list = R.reduceBy(valueMapper)([])(keyMapper)(students);
    logging("reduceby: ", r_reduceby_list); // {"A":["Lucy"],"B":["Drew"],"C":["Foo"],"F":["Bar","Bart"]}

    /* groupBy函数*/
    //groupBy
    let r_groupby_students = R.groupBy(keyMapper)(students);//按keyMapper对students分组
    // students对象分组
    // {
    //   "A":[{"name":"Lucy","score":92}],
    //   "B":[{"name":"Drew","score":85}],
    //   "C":[{"name":"Foo","score":72}],
    //   "F":[{"name":"Bar","score":64},{"name":"Bart","score":62}]
    // }
    logging("groupby1: ", r_groupby_students);


    // 再次map可以得到names分组, 其中R.map(s => s.name)的完整形式是lst => R.map(s => s.name)(lst)
    let r_groupby_student_names = R.map(R.map(s => s.name))(r_groupby_students);
    // students分组后再次map, 关键在于map可以应用于object
    logging("groupby2: ", r_groupby_student_names); // {"A":["Lucy"],"B":["Drew"],"C":["Foo"],"F":["Bar","Bart"]}

    logging("4. --- flip, append, reduce ----")
    /*
    * 再看reduce: (acc, value) => acc.concat(value)这个函数，如果acc初始值为[], 实际是个常用的函数
    * R.append与此接近但参数位置相反，append(ele, arr); 可以用R.flip交换参数
    * R.flip(R.append)相当于一个列表累计器，类似Java的Collectors.toList()
    *
    * R.flip(R.append)相当于R.reduce((acc, value) => acc.concat(value))([])
    *
    * 有一个列表, 使用reduce重新收集这个列表的所有元素，以下两种写法效果是一样的：
    */
    let numbers = [1, 2, 3, 4];
    let r_flip_append1 = R.reduce((acc, value) => acc.concat(value))([])(numbers);
    let r_flip_append2 = R.reduce(R.flip(R.append))([])(numbers);
    logging(r_flip_append1);
    logging(r_flip_append2);


};