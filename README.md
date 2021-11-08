# Инструмент шифрования CLI
Инструмент дает возможность шифрования и дешифрования латинского алфавита с помощью следующих шифров: 
* [Шифр Цезаря](https://en.wikipedia.org/wiki/Caesar_cipher)
* [Шифр Атбаша](https://en.wikipedia.org/wiki/Atbash)
* [ROT-8 как вариант ROT-13](https://en.wikipedia.org/wiki/ROT13)

Инструмент CLI принимает 3 варианта (короткий псевдоним и полное имя):
1.  **- c, --config** : конфиг для шифров
Config - это строка с шаблоном `{XY (-)} n` , где:
  * `X` - это зашифрованный знак:
    * `C` - это шифр Цезаря (со сдвигом 1)
    * `A` для шифра Атбаш
    * `R` для шифра ROT-8
  * Y - флаг кодирования или декодирования (обязательно для шифра Цезаря и шифра ROT-8 и не должен передаваться шифром Atbash)
    * `1` для кодирования
    * `0` для декодирования

Например, config «C1-C1-R0-A» означает «кодировать шифром Цезаря => кодировать шифром Цезаря => декодировать ROT-8 => использовать Atbash».

**Важно:** `-с, --config` является обязательным параметром.

2.  **-i, --input** : путь к входному файлу
3.  **-o, --output** : путь к выходному файлу

Если пропущен путь к входному файлу - ввод будет осуществляться из терминала. Если пропущен путь к выходному файлу - вывод будет осуществляться в терминал.

**Входной точкой приложения является index.js в каталоге проекта.**

**Пример запуска приложения:**

Для работы необходимо перейти в каталог приложения и установить зависимости - `npm i`, далее выполнить команду:

  * node index.js -c `"C1-R0-A"` -i `"input.txt"` -o `"output.txt"`
  * node index.js -c `"C1-R0-A"` - работа будет происходить в терминале.
