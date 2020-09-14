Number(weight) ? Number(weight) : USER_DEFAULT_WEIGHT; // logical OR
Number(weight) ? USER_DEFAULT_WEIGHT : Number(weight); // logical AND

isNaN(weight) && weight !== 0 ? USER_DEFAULT_WEIGHT : Number(weight);

Math.pow(heightNumber, 2);
