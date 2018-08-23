# 正则表达式（Regular Expression）

## 正则表达式小历史

> * 正则表达式萌芽于1940年代的神经生理学研究，由著名数学家Stephen Kleene第一个正式描述。
> * Stephen Kleene在一篇题为《正则集代数》的论文中定义了“正则集”。
> * 1968年，后来发明了UNIX系统的Ken Thompson第一个把正则表达式用于计算机领域，开发了qed和grep两个实用文本处理工具，取得了巨大成功。
> * 1980年代早期，UNIX运动的两个中心贝尔实验室和加州大学伯克利分校分别围绕grep工具对正则表达式引擎进行了研究和实现。
> * 1986年C语言顶级黑客Henry Spencer以源代码形式发布了一个用C语言写成的正则表达式程序库（当时还不叫open source）。
> * Larry Wall发布了Perl语言的第一个版本。自那以后，Perl一直是正则表达式的旗手。正则表达式的标准和地位是由Perl塑造的。
> * Perl 5.x发布以后，正则表达式进入了稳定成熟期，其强大能力已经征服了几乎所有主流语言平台。

### DFA引擎和NFA引擎

#### DFA （Deterministic finite automaton）确定型有穷自动机

> DFA 引擎在线性时状态下执行，因为它们不要求回溯（并因此它们永远不测试相同的字符两次）。DFA 引擎还可以确保匹配最长的可能的字符串。但是，因为 DFA 引擎只包含有限的状态，所以它不能匹配具有反向引用的模式；并且因为它不构造显示扩展，所以它不可以捕获子表达式。

#### NFA （Non-deterministic finite automaton）非确定型有穷自动机

> 传统的 NFA 引擎运行所谓的“贪婪的”匹配回溯算法，以指定顺序测试正则表达式的所有可能的扩展并接受第一个匹配项。因为传统的 NFA 构造正则表达式的特定扩展以获得成功的匹配，所以它可以捕获子表达式匹配和匹配的反向引用。？但是，因为传统的 NFA 回溯，所以它可以访问完全相同的状态多次（如果通过不同的路径到达该状态）。因此，在最坏情况下，它的执行速度可能非常慢。因为传统的 NFA 接受它找到的第一个匹配，所以它还可能会导致其他（可能更长）匹配未被发现。
>
> NFA最重要的部分：回溯（backtracking）。回溯就像是在道路的每个分岔口留下一小堆面包屑。如果走了死路，就可以照原路返回，直到遇见面包屑标示的尚未尝试过的道路。如果那条路也走不通，你可以继续返回，找到下一堆面包屑，如此重复，直到找到出路，或者走完所有没有尝试过的路

#### DFA与NFA对比

1. DFA对于文本串里的每一个字符只需扫描一次，比较快，但特性较少；
2. NFA是最左子式匹配，而DFA是最长左子式匹配。
3. NFA的编译过程通常要快一些，需要的内存也更少一些。

| 引擎类型 | 程序                                                         |
| -------- | ------------------------------------------------------------ |
| DFA      | awk、egrep、flex、lex、MySQL、Procmail                       |
| NFA      | GNU Emacs、Java、grep、less、more、.NET、PCRE library、Perl、PHP、Python、Ruby等 |

## 初识正则表达式

```java
// T001.java
Utils.matcher("hello", "hello");
Utils.matcher("hello", ".....");
Utils.matcher("hello", ".*");

Pattern p = Pattern.compile("h*o");
Matcher m = p.matcher("hello");
boolean b = m.matches();
```

## MetaCharacters

### 定量词：x  .  *  +  ?  x{n,m}

#### 解释

| 符号       | 定义                                                         | 等价   |
| ---------- | ------------------------------------------------------------ | ------ |
| **x**      | 字面量，如a,b,c,d                                            | -      |
| **.** (点) | 任何字符                                                     |        |
| **x{n,m}** | x最少出现n次，不超过m次，当m不存在时表示无限次，如x{n,}表示最少n次，最多无限次 |        |
| *****      | 出现0次或多次                                                | x{0,}  |
| **+**      | 出现1次或多次                                                | x{1,}  |
| **？**     | 出现0次或1次                                                 | x{0,1} |

#### 例子

```java
// T002.java
Utils.matcher("a", "a");
Utils.matcher("a", ".");
Utils.matcher("aaaaa", "a*");
Utils.matcher("aaaaa", "a+");
Utils.matcher("aaaaa", "a?");
```

### 范围词：[] \d \s \w

#### 解释

| 符号       | 定义                                            | 等价                    |
| ---------- | ----------------------------------------------- | ----------------------- |
| **[]**     | 只匹配中括号中的一个字符，例子[a-z],[0-9],[XYZ] |                         |
| **\d  \D** | 表示0到9的数字                                  | [0-9], [ ^\d]           |
| **\s  \S** | 表示空格符                                      | [ \t\n\x0B\f\r], [ ^\s] |
| **\w  \W** | 表示a-zA-Z_0-9                                  | [a-zA-Z_0-9],[ ^\w]     |

#### 例子

```java
// T003.java
Utils.matcher("a","[abc]");
Utils.matcher("a","[a-z]");
Utils.matcher("a","[^A-Z]");
Utils.matcher("a","[a-z]|[A-Z]"); == [a-zA-Z]
Utils.matcher("a","[a-z[A-Z]]"); == [a-zA-Z]
Utils.matcher("a","[b-z&&[abc]]");
Utils.matcher("c","[b-z&&[abc]]");
Utils.matcher("7","\\d");
Utils.matcher("7","\\D");
Utils.matcher("7","[^\\d]");
```

### 边界词：^ $

#### 解释

| 符号  | 定义                                                      |
| ----- | --------------------------------------------------------- |
| **^** | 以某字符为开始符，例如：^abc  表示会匹配以a为开头的字符串 |
| **$** | 以某字符为结束符，例如：abc$ 表示会匹配以b为结尾的字符串  |

```java
// T004.java
Utils.matcher("hello","^h.*");
Utils.matcher("hello",".*o$");
Utils.matcher("hello world", "^hello\\b\\sworld");
Utils.matcher("helloworld", "^hello\\d\\sworld");
```

## Matches Find LookingAt

在Java中使用==**java.util.regex.Pattern**==和==**java.util.regex.Matcher**==两个类处理正则表达式，Pattern用于预编译正则表达式，而Matcher用来保存Pattern匹配后的结果。

```java
Pattern p = Pattern.compile("\\d{1,3}");
Matcher m = p.matcher("100");
```

下面将主要讲解Matcher类的用法。

### Matches

matches方法用来匹配整个字符串，只有完全匹配才会返回true

```java
// T005.java
Pattern p = Pattern.compile("\\d{1,3}");
Matcher m = p.matcher("100000");
System.out.println(m.matches()); // false
```

###Find

find方法会在字符串中查找匹配到的字符，如果有匹配的字符串就返回true，直到没有为止。

```java
// T006.java
Pattern p = Pattern.compile("\\d{3}\\.");
Matcher m = p.matcher("192.168.100.100");
while (m.find()){
    System.out.println(m.group());
}
```

matches方法和find方法会相互干扰，如果matches方法和find方法要同时使用，需要在两个方法调用之间执行reset方法，参考如下例子：

```java
// T007.java
Pattern p = Pattern.compile("\\d{3}\\.");
Matcher m = p.matcher("192.168.100.100");
System.out.println(m.matches());
// m.reset();
while (m.find()){
    System.out.println(m.group());
}
```

> 这是一个使用正则的小坑，新手经常会踩到

##分组

正则表达式中可以使用括号对表达式分组，分组后可以直接获取括号中匹配的结果

```java
Pattern p = Pattern.compile("(\\d{3})\\.");
Matcher m = p.matcher("192.168.100.100");
while (m.find()){
    System.out.println(m.group(1));
}
"\d" ==> "(\d)"
"\d(\w)" ==> "(\d(\w))"
"\d(\w(\s))" ==> "(\d(\w(\s)))"
```

## Qulifiers

```java
    public static void test3(){
        Pattern p = Pattern.compile("(.{3,10}+)[a-z]");
        Matcher m = p.matcher("1234a");
        if(m.find()){
            System.out.println(m.start() + "-" + m.end());
            System.out.println(m.group());
        }
        System.out.println("====================");
    }

    public static void test2(){
        Pattern p = Pattern.compile("(.{3,10}?)[a-z]");
        Matcher m = p.matcher("1234a6789b");
        if(m.find()){
            System.out.println(m.start() + "-" + m.end());
            System.out.println(m.group());
        }
        System.out.println("====================");
    }

    public static void test1(){
        Pattern p = Pattern.compile("(.{3,10})[a-z]");
        Matcher m = p.matcher("1234a6789b");
        if(m.find()){
            System.out.println(m.start() + "-" + m.end());
            System.out.println(m.group());
        }
        System.out.println("====================");
    }

    public static void main(String[] args) {
        test1(); // 贪婪  default
        test2(); // 懒惰
        test3(); // 独占
    }
```



## 补充

```java
// T012.java
// 非捕获组(使用的非常少)
Pattern p = Pattern.compile(".{3}(?=x)");
Matcher m = p.matcher("111x222");
while (m.find()) {
    System.out.println(m.group());
}
```

```java
// T013.java
// 非捕获组(使用的非常少)
Pattern p = Pattern.compile(".{3}(?!x)");
Matcher m = p.matcher("111x222");
while (m.find()) {
    System.out.println(m.group());
}
```

```java
// T014.java
// 向前引用
Pattern p = Pattern.compile("(\\w\\w\\w)\\1");
Matcher m = p.matcher("abcabc");
System.out.println(m.matches());
```

```java
// T015.java
// Flags
Pattern p = Pattern.compile("(?i)(hello)");
Matcher m = p.matcher("HeLLO");
System.out.println(m.matches());
System.out.println("HeLLO".matches("(?i)(hello)"));
```

## 练习

1. 将下面的字符串中所有的"hello"转换成"hi"(T010.java)

   > Hello hello HELLO HeLLO hElLo world

2. 匹配下面这段文本中所有的中文 (T009.java) 

   > 你好, hello 。 苹果 apple， 世界 world， 汽车 car

3. 截取下面HTML代码中的img元素

   ```html
   <div>
   	<span>
       	<img src="http://example.com/logo.png" title="logo" />
       </span>
   </div>
   ```

## 正则表达式DEBUG

https://www.debuggex.com/

https://regexper.com/

## 代码示例

```java
public class Utils {

    public static void matcher(String txt, String regex){
        System.out.println("regex:" + regex + "\ttext:" + txt + "\tresult:" + txt.matches(regex));
    }

}
```

```java
public class T001 {
    public static void main(String[] args) {
        Utils.matcher("hello", "hello");
        Utils.matcher("hello", ".....");
        Utils.matcher("hello", ".*");

        "hello".matches("");

        Pattern p = Pattern.compile("h*o");
        Matcher m = p.matcher("hello");
        boolean b = m.matches();
    }
}
```

```java
public class T002 {
    public static void main(String[] args) {
        Utils.matcher("a", "a");
        Utils.matcher("a", ".");
        Utils.matcher("aaaaa", "a*");
        Utils.matcher("aaaaa", "a+");
        Utils.matcher("aaaaa", "a?");
    }
}
```

```java
public class T003 {
    public static void main(String[] args) {
        Utils.matcher("a","[abc]");
        Utils.matcher("a","[a-z]");
        Utils.matcher("a","[^A-Z]");
        Utils.matcher("a","[a-z]|[A-Z]");
        Utils.matcher("a","[a-z[A-Z]]");
        Utils.matcher("a","[b-z&&[abc]]");
        Utils.matcher("c","[b-z&&[abc]]");
        Utils.matcher("7","\\d");
        Utils.matcher("7","\\D");
        Utils.matcher("7","[^\\d]");
    }
}
```

```java
public class T004 {
    public static void main(String[] args) {
        Utils.matcher("hello","^h.*");
        Utils.matcher("hello",".*o$");
        Utils.matcher("hello world", "^hello\\b world");
        Utils.matcher("helloworld", "^hello\\d\\sworld");
    }
}
```

```java
public class T005 {
    public static void main(String[] args) {
        Pattern p = Pattern.compile("\\d{1,3}");
        Matcher m = p.matcher("100000");
        System.out.println(m.matches());
    }
}
```

```java
public class T006 {
    public static void main(String[] args) {
        Pattern p = Pattern.compile("\\d{3}\\.");
        Matcher m = p.matcher("192.168.100.100");
        while (m.find()){
            System.out.println(m.group());
        }
    }
}
```

```java
public class T007 {
    public static void main(String[] args) {
        Pattern p = Pattern.compile("\\d{3}\\.");
        Matcher m = p.matcher("192.168.100.100");
        System.out.println(m.matches());
        m.reset();
        while (m.find()){
            System.out.println(m.group());
        }
    }
}
```

## 正则符号

| 字符         | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| \            | 将下一个字符标记为一个特殊字符、或一个原义字符、或一个向后引用、或一个八进制转义符。例如，“`n`”匹配字符“`n`”。“`\n`”匹配一个换行符。串行“`\\`”匹配“`\`”而“`\(`”则匹配“`(`”。 |
| ^            | 匹配输入字符串的开始位置。如果设置了RegExp对象的Multiline属性，^也匹配“`\n`”或“`\r`”之后的位置。 |
| $            | 匹配输入字符串的结束位置。如果设置了RegExp对象的Multiline属性，$也匹配“`\n`”或“`\r`”之前的位置。 |
| *            | 匹配前面的子表达式零次或多次。例如，zo*能匹配“`z`”以及“`zoo`”。*等价于{0,}。 |
| +            | 匹配前面的子表达式一次或多次。例如，“`zo+`”能匹配“`zo`”以及“`zoo`”，但不能匹配“`z`”。+等价于{1,}。 |
| ?            | 匹配前面的子表达式零次或一次。例如，“`do(es)?`”可以匹配“`does`”或“`does`”中的“`do`”。?等价于{0,1}。 |
| {n}          | n是一个非负整数。匹配确定的n次。例如，“`o{2}`”不能匹配“`Bob`”中的“`o`”，但是能匹配“`food`”中的两个o。 |
| {n,}         | n是一个非负整数。至少匹配n次。例如，“`o{2,}`”不能匹配“`Bob`”中的“`o`”，但能匹配“`foooood`”中的所有o。“`o{1,}`”等价于“`o+`”。“`o{0,}`”则等价于“`o*`”。 |
| {n,m}        | m和n均为非负整数，其中n<=m。最少匹配n次且最多匹配m次。例如，“`o{1,3}`”将匹配“`fooooood`”中的前三个o。“`o{0,1}`”等价于“`o?`”。请注意在逗号和两个数之间不能有空格。 |
| ?            | 当该字符紧跟在任何一个其他限制符（*,+,?，{n}，{n,}，{n,m}）后面时，匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。例如，对于字符串“`oooo`”，“`o+?`”将匹配单个“`o`”，而“`o+`”将匹配所有“`o`”。 |
| .            | 匹配除“`\``n`”之外的任何单个字符。要匹配包括“`\``n`”在内的任何字符，请使用像“`(.|\n)`”的模式。 |
| (pattern)    | 匹配pattern并获取这一匹配。所获取的匹配可以从产生的Matches集合得到，在VBScript中使用SubMatches集合，在JScript中则使用$0…$9属性。要匹配圆括号字符，请使用“`\(`”或“`\)`”。 |
| (?:pattern)  | 匹配pattern但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用。这在使用或字符“`(|)`”来组合一个模式的各个部分是很有用。例如“`industr(?:y|ies)`”就是一个比“`industry|industries`”更简略的表达式。 |
| (?=pattern)  | 正向肯定预查，在任何匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如，“`Windows(?=95|98|NT|2000)`”能匹配“`Windows2000`”中的“`Windows`”，但不能匹配“`Windows3.1`”中的“`Windows`”。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。 |
| (?!pattern)  | 正向否定预查，在任何不匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如“`Windows(?!95|98|NT|2000)`”能匹配“`Windows3.1`”中的“`Windows`”，但不能匹配“`Windows2000`”中的“`Windows`”。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始 |
| (?<=pattern) | 反向肯定预查，与正向肯定预查类拟，只是方向相反。例如，“`(?<=95|98|NT|2000)Windows`”能匹配“`2000Windows`”中的“`Windows`”，但不能匹配“`3.1Windows`”中的“`Windows`”。 |
| (?<!pattern) | 反向否定预查，与正向否定预查类拟，只是方向相反。例如“`(?<!95|98|NT|2000)Windows`”能匹配“`3.1Windows`”中的“`Windows`”，但不能匹配“`2000Windows`”中的“`Windows`”。 |
| x\|y         | 匹配x或y。例如，“`z|food`”能匹配“`z`”或“`food`”。“`(z|f)ood`”则匹配“`zood`”或“`food`”。 |
| [xyz]        | 字符集合。匹配所包含的任意一个字符。例如，“`[abc]`”可以匹配“`plain`”中的“`a`”。 |
| [^xyz]       | 负值字符集合。匹配未包含的任意字符。例如，“`[^abc]`”可以匹配“`plain`”中的“`p`”。 |
| [a-z]        | 字符范围。匹配指定范围内的任意字符。例如，“`[a-z]`”可以匹配“`a`”到“`z`”范围内的任意小写字母字符。 |
| [^a-z]       | 负值字符范围。匹配任何不在指定范围内的任意字符。例如，“`[^a-z]`”可以匹配任何不在“`a`”到“`z`”范围内的任意字符。 |
| \b           | 匹配一个单词边界，也就是指单词和空格间的位置。例如，“`er\b`”可以匹配“`never`”中的“`er`”，但不能匹配“`verb`”中的“`er`”。 |
| \B           | 匹配非单词边界。“`er\B`”能匹配“`verb`”中的“`er`”，但不能匹配“`never`”中的“`er`”。 |
| \cx          | 匹配由x指明的控制字符。例如，\cM匹配一个Control-M或回车符。x的值必须为A-Z或a-z之一。否则，将c视为一个原义的“`c`”字符。 |
| \d           | 匹配一个数字字符。等价于[0-9]。                              |
| \D           | 匹配一个非数字字符。等价于[^0-9]。                           |
| \f           | 匹配一个换页符。等价于\x0c和\cL。                            |
| \n           | 匹配一个换行符。等价于\x0a和\cJ。                            |
| \r           | 匹配一个回车符。等价于\x0d和\cM。                            |
| \s           | 匹配任何空白字符，包括空格、制表符、换页符等等。等价于[ \f\n\r\t\v]。 |
| \S           | 匹配任何非空白字符。等价于[^ \f\n\r\t\v]。                   |
| \t           | 匹配一个制表符。等价于\x09和\cI。                            |
| \v           | 匹配一个垂直制表符。等价于\x0b和\cK。                        |
| \w           | 匹配包括下划线的任何单词字符。等价于“`[A-Za-z0-9_]`”。       |
| \W           | 匹配任何非单词字符。等价于“`[^A-Za-z0-9_]`”。                |
| \xn          | 匹配n，其中n为十六进制转义值。十六进制转义值必须为确定的两个数字长。例如，“`\x41`”匹配“`A`”。“`\x041`”则等价于“`\x04&1`”。正则表达式中可以使用ASCII编码。. |
| \num         | 匹配num，其中num是一个正整数。对所获取的匹配的引用。例如，“`(.)\1`”匹配两个连续的相同字符。 |
| \n           | 标识一个八进制转义值或一个向后引用。如果\n之前至少n个获取的子表达式，则n为向后引用。否则，如果n为八进制数字（0-7），则n为一个八进制转义值。 |
| \nm          | 标识一个八进制转义值或一个向后引用。如果\nm之前至少有nm个获得子表达式，则nm为向后引用。如果\nm之前至少有n个获取，则n为一个后跟文字m的向后引用。如果前面的条件都不满足，若n和m均为八进制数字（0-7），则\nm将匹配八进制转义值nm。 |
| \nml         | 如果n为八进制数字（0-3），且m和l均为八进制数字（0-7），则匹配八进制转义值nml。 |
| \un          | 匹配n，其中n是一个用四个十六进制数字表示的Unicode字符。例如，\u00A9匹配版权符号（©）。 |

## 相关连接

https://regexr.com/

https://zh.wikipedia.org/wiki/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F

http://tool.oschina.net/uploads/apidocs/jquery/regexp.html
