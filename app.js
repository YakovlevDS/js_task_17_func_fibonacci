// ? Task: Нужно написать функцию fibonacci, которая возвращает n-ную запись в последовательности Фибоначчи, причем n — число, которое передается в качестве аргумента функции.

// Важное уточнение - использовать рекурсию запрещено


// Solution 1
const fibonacci = num => {
  const result = [0, 1];

  for (let i = 2; i <= num; i++) {//проходим по массиву с 3 элемента который еще не известен
   result.push(result[i - 1] + result[i - 2]);//добавляем i элемент в массив , который равен сумме двух предыдущих
  }
  return result[num];//возвращаем последний элемент массива равный передаваемому в функцию числу num.
};
 console.log(fibonacci(30)); //832040
console.log(fibonacci(10)); // 55
console.log(fibonacci(20)); // 6765

// Solution 2



// ! Explanation:В массиве результатов первые два числа содержатся в ряду, поскольку каждая запись в последовательности состоит из суммы двух предыдущих чисел. В самом начале двух чисел, которые можно взять для получения следующего числа нет, поэтому цикл не может сгенерировать их в автоматическом режиме. Но, как мы знаем, первые два числа — всегда 0 и 1. Поэтому инициализировать массив результатов можно вручную.
