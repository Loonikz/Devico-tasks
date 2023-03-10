//Write a function that replaces all ones with zeros and vice versa for the object

const d = {
    left: {
        left: {
            left: 1,
            right: {
                left: 0,
                right: 1,
            },
        },
        right: {
            left: 0,
            right: 1,
        },
    },
    right: 1,
};

function foo(obj) {

    for (let key in obj) {
        if (typeof obj[key] === "object") {
            foo(obj[key]);
        } else if (obj[key] === 0) {
            obj[key] = 1;
        } else if (obj[key] === 1) {
            obj[key] = 0;
        }
    }
    return obj;
}

foo(d);
console.log(d)
